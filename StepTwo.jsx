import React from 'react';
import { useWizard } from '../context/WizardContext';

export default function StepTwo() {
  const { formData, updateField } = useWizard();

  return (
    <div className="step-content">
      <h3>Step 2: Preferences</h3>

      <div className="form-group">
        <label>Primary Track</label>
        <select value={formData.track} onChange={(e) => updateField('track', e.target.value)}>
          <option value="Frontend">Frontend</option>
          <option value="Backend">Backend</option>
          <option value="UI/UX Design">UI/UX Design</option>
          <option value="Fullstack">Fullstack</option>
        </select>
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
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}