import React from 'react';
im useWizard } from '../context/WizardContext';

eault function StepTwo() {
  const { formData, updateField } = useWizard();

  return (
    <div className="step-content">
      <h3>Step 2: PreferenclassName="form-group">
        <label>Primary Track</label>
        <select value={formData.track) => updateField('track', e.target.value)}>tend">Frontend</option>
          <option value="Backend">Backend</option>
          <optioption>
      stack">Fullstack</optit>
      </div>

      <div className="form-group">
        <label>Experience Level</label>
        <div className="radio-group">
          {['Junior', 'Mid', 'Senior'].map((lvl) => (
            <label key={lvl} className="radio-item">
              <input
                type="radio"
                name="level"
                value={lvl}
                checked={formData.level === lvl}
                onChange={(e) => updateField('level', e.target.value)}
              />
              {lvl}
            </la ))}
        </div>
      </div>
    </div>
  );
}