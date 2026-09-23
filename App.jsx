import React, { useState } from 'react';
import { WizardProvider, useWizard } from './context/WizardContext';
import StepBar from './components/StepBar';
import StepOne from './components/StepOne';
import StepTwo from './components/StepTwo';
import StepThree from 'css';

function WizardLayout() {
  const { currentStep, isSaving, lastSaved, isStepValid, nextStep, prevStep, formData } = useWizard();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      // Connect to Express + MongoDB backend
      const response = await fetch('http://localhost:5000/api/applications', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
   e,
          email: formData.email,
          portfolio: formData.portfolio,
          track: formData.track,
          experience: formData.level,
          skills: formData.techStack,
        }),
      });

      if (!response.ok) throw new Error('Submission failed');

      localStorage.removeItem('tamasha_wizard_draft');
      setIsSubmitted(true);
    } catch (err) {
      alert('Backend server error. Ensure your Node server is running on port 5000.')
  const handleReset = () => {
    window.location.reload();
  };

  if (isSubmitted) {
    return (
      <div className="wizard-card success-screen">
        <div className="success-icon">✓</div>
        <h2>Application Submitted!</h2>
        <p>
          Thank you for applying. Your onboarding response and preferences have been successfully recorded.
        </p>
        <button type="button" onClick={handleReset} className="btn-primary" style={{ margin: '20px auto 0 auto' }}>
          Submit Another Application
        </button>
      </div>
    );
  }

  return (
    <div className="wizard-card">
      <div className="wizard-top">
        <h2>Developer Onboarding</h2>
        <div className="save-status">
          {isSaving ? (
            <span className="saving">● Saving draft...</span>
          ) : lastpan>
          ) : null}
        </div>
      </div>

      <StepBar />

      <div className="wizard-body">
        {currentStep rrentStep === 2 && <StepTwo />}
        {currentStep === 3 && <StepThree />}
        {currentStep === 4 && <StepFour />}
      </div>

      <div className="wizard-footer">
        {currentStep > 1 && (
          <button type="button" onClick={prevStep} className="btn-secondary" disabled={isSubmitting}>
            Back
          </button>
        )}

        {currentStep < 4 ? (
          <button
            type="button"
            onClick={nextStep}
            disabled={!isStepValid(currentStep)}
            className="btn-primary"
          >
            Continue
          </button>
        ) : (
          <button
            type="button"
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="btn-primary submit"
          >
            {isSubmitting ? 'Submittiit Application'}
          </button>
        )}
      </div>
    </div>
  );
}

expor {
  return (
    <WizardProvider>
      <WizardLayout />
    </WizardProvider>
  );
}