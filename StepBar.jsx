imort React from 'react';
import { useWizard } from '../context/WizardContext';

 steps = ['Personal Info', 'Prefences', 'Technical Expertise', eview'];
 default function StepBar() {
  co currentStep } = useWizard();

  return (
    lassName="stepper-bar">
      {steps.map((label, index) => {
  const stepNum = index + 1;
        const isActive = currentStep === stepNum;
        const isCompleted = c  return (
          <div key={label} cle="tem">
            <div className={`step-circle tive ? 'active' : ''} ${isCompleted ? ted' : ''}`}>
              {isCompleted ? '✓' : stepNum}
            </div>
            <span className={`step-label ${isActive ? 'bold' : ''}`}>{label}</span>
          </div>
        );
 )}
    </div>
  );
}