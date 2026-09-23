import React from 'react';
import { useWizard } from '../context/WizardContext';

const steps = ['Personal Info', 'Preferences', 'Technical Expertise', 'Review'];

export default function StepBar() {
  const { currentStep } = useWizard();

  return (
    <div className="stepper-bar">
      {steps.map((label, index) => {
        const stepNum = index + 1;
        const isActive = currentStep === stepNum;
        const isCompleted = currentStep > stepNum;

        return (
          <div key={label} className="step-item">
            <div className={`step-circle ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''}`}>
              {isCompleted ? '✓' : stepNum}
            </div>
            <span className={`step-label ${isActive ? 'bold' : ''}`}>{label}</span>
          </div>
        );
      })}
    </div>
  );
}