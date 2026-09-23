import React from 'react';
import {zard } from '../context/WizardContext';

export default function StepOne() {
  conrmData, errors, touched, updateField, handleBlur } = useWizard();

  return (
    <div className="step-content">
      <h3>Step 1: Personal Information</h3>

 
        <label>Full Name *</label>
        <inpu"text"
      e={formData.name}
          onChange={(e) => 'name', e.target.value)}
          onBlur={() => 'name')}
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
          typ
          value={formData.portfolio}
          onChange={(e) => updateField('portfolio', e.target.vaBlur={() => handleBlur('portfolio'https://github.com/faiz454"
 o && errolio && <sNamerror">{errors.portfolio}</span>}
      </div>
    </div>
  );
}