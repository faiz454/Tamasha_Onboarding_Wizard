import React, { createContext, useContext, useState, useEffect } from 'react';

export const TRACK_OPTIONS = {
  Frontend: ['React', 'Vue', 'TypeScript', 'CSS Modules'],
  Backend: ['Node.js', 'Python/Django', 'PostgreSQL', 'Redis'],
  'UI/UX Design': ['Figma', 'Storybook', 'Design Systems'],
  Fullstack: ['React', 'Node.js', 'TypeScript', 'PostgreSQL'],
};

const INITIAL_DATA = {
  name: '',
  email: '',
  portfolio: '',
  track: 'Frontend',
  level: 'Junior',
  techStack: [],
};

const WizardContext = createContext(null);

export function WizardProvider({ children }) {
  const savedDraft = (() => {
    try {
      const data = localStorage.getItem('tamasha_wizard_draft');
      return data ? JSON.parse(data) : null;
    } catch {
      return null;
    }
  })();

  const [formData, setFormData] = useState(savedDraft?.formData || INITIAL_DATA);
  const [currentStep, setCurrentStep] = useState(savedDraft?.currentStep || 1);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSaving, setIsSaving] = useState(false);
  const [lastSaved, setLastSaved] = useState(null);

  useEffect(() => {
    setIsSaving(true);
    const timer = setTimeout(() => {
      const dataToSave = { formData, currentStep };
      localStorage.setItem('tamasha_wizard_draft', JSON.stringify(dataToSave));
      setIsSaving(false);
      setLastSaved(new Date().toLocaleTimeString());
    }, 500);

    return () => clearTimeout(timer);
  }, [formData, currentStep]);

  const validateField = (field, value) => {
    switch (field) {
      case 'name': {
        const trimmed = value?.trim() || '';
        if (!trimmed) return 'Name is required';
        if (trimmed.length < 5) return 'Name must be at least 5 letters long';
        if (!/^[A-Za-z\s]+$/.test(trimmed)) return 'Name can only contain letters and spaces';
        return '';
      }
      case 'email':
        if (!value?.trim()) return 'Email is required';
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? '' : 'Invalid email address';
      case 'portfolio':
        if (value && !/^https?:\/\/.+/.test(value)) {
          return 'Must start with http:// or https://';
        }
        return '';
      default:
        return '';
    }
  };

  const updateField = (field, value) => {
    setFormData((prev) => {
      const next = { ...prev, [field]: value };
      if (field === 'track' && prev.track !== value) {
        next.techStack = [];
      }
      return next;
    });

    if (touched[field]) {
      setErrors((prev) => ({ ...prev, [field]: validateField(field, value) }));
    }
  };

  const handleBlur = (field) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    setErrors((prev) => ({ ...prev, [field]: validateField(field, formData[field]) }));
  };

  const triggerStepValidation = (step) => {
    if (step === 1) {
      setTouched((prev) => ({ ...prev, name: true, email: true, portfolio: true }));
      setErrors((prev) => ({
        ...prev,
        name: validateField('name', formData.name),
        email: validateField('email', formData.email),
        portfolio: validateField('portfolio', formData.portfolio),
      }));
    }
  };

  const isStepValid = (step) => {
    if (step === 1) {
      return (
        formData.name.trim().length >= 5 &&
        /^[A-Za-z\s]+$/.test(formData.name.trim()) &&
        !validateField('email', formData.email) &&
        !validateField('portfolio', formData.portfolio)
      );
    }
    if (step === 2) return Boolean(formData.track && formData.level);
    if (step === 3) return formData.techStack.length > 0;
    return true;
  };

  const nextStep = () => {
    triggerStepValidation(currentStep);
    if (isStepValid(currentStep)) {
      setCurrentStep((s) => Math.min(s + 1, 4));
    }
  };

  const prevStep = () => setCurrentStep((s) => Math.max(s - 1, 1));
  const jumpToStep = (step) => setCurrentStep(step);

  return (
    <WizardContext.Provider
      value={{
        formData,
        errors,
        touched,
        currentStep,
        isSaving,
        lastSaved,
        updateField,
        handleBlur,
        nextStep,
        prevStep,
        jumpToStep,
        isStepValid,
      }}
    >
      {children}
    </WizardContext.Provider>
  );
}

export const useWizard = () => {
  const context = useContext(WizardContext);
  if (!context) {
    throw new Error('useWizard must be used within a WizardProvider');
  }
  return context;
};