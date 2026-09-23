import React from 'react';
import { useWizard } from '../context/WizardContext';

export default function StepOne() {
  const { formData, errors, touched, updateField, handleBlur } = useWizard();

  return (
    <div className="step-content">
      <h3>Step 1: Personal Information</h3>

      <div className="form-group">
        <label>Full Name *</label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => updateField('name', e.target.value)}
          onBlur={() => handleBlur('name')}
          placeholder="e.g. MUHAMMED FAIZ C K"
        />
        {touched.name && errors.name && <span className="error">{errors.name}</span>}
      </div>

      <div className="form-group">
        <label>Email Address *</label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => updateField('email', e.target.value)}
          onBlur={() => handleBlur('email')}
          placeholder="e.g. mohammedfaizck454@gmail.com"
        />
        {touched.email && errors.email && <span className="error">{errors.email}</span>}
      </div>

      <div className="form-group">
        <label>Portfolio / GitHub Profile (Optional)</label>
        <input
          type="url"
          value={formData.portfolio}
          onChange={(e) => updateField('portfolio', e.target.value)}
          onBlur={() => handleBlur('portfolio')}
          placeholder="https://github.com/faiz454"
        />
        {touched.portfolio && errors.portfolio && <span className="error">{errors.portfolio}</span>}
      </div>
    </div>
  );
}