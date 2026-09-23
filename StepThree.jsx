import React from 'react';
 { useWizard, TRACK_OPTIONS }ntext/Wontext';

export default function StepThree() {
  { formData, updateField } = useWizard();
  const availableSkills TIONSmData.track] 

  const handleToggle = (skill) => {
 li formData.techStackt updateskill)
      ? list.filter((item) => item !== skil
 [...list, skill];eld('techStack', upd);
 className="step-content">
 ise for {formData.trac
 st{ fontSize: '13px', color: '#4px 0 12pxe tools you know (at least red)sName="pill-grid">
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