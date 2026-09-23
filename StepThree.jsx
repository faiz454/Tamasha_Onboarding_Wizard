import React from 'react';
import { useWizard, TRACK_OPTIONS } from '../context/WizardContext';

export default function StepThree() {
  const { formData, updateField } = useWizard();
  const availableSkills = TRACK_OPTIONS[formData.track] || [];

  const handleToggle = (skill) => {
    const list = formData.techStack;
    const updated = list.includes(skill)
      ? list.filter((item) => item !== skill)
      : [...list, skill];
    updateField('techStack', updated);
  };

  return (
    <div className="step-content">
      <h3>Step 3: Technical Expertise for {formData.track}</h3>
      <p style={{ fontSize: '13px', color: '#6b7280', margin: '4px 0 12px' }}>
        Select the tools you know (at least 1 required):
      </p>

      <div className="pill-grid">
        {availableSkills.map((skill) => {
          const isChecked = formData.techStack.includes(skill);
          return (
            <label key={skill} className={`pill-card ${isChecked ? 'selected' : ''}`}>
              <input
                type="checkbox"
                checked={isChecked}
                onChange={() => handleToggle(skill)}
              />
              {skill}
            </label>
          );
        })}
      </div>

      {formData.techStack.length === 0 && (
        <span className="error" style={{ display: 'block', marginTop: '10px' }}>
          * Please select at least one technology.
        </span>
      )}
    </div>
  );
}