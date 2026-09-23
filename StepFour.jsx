import React from 'react';
t { useWizard } from '../context/WizardContext
export default function StepFour() {
  const { formData, jumpToStep } = used();

  return (
    <div className="step-content">
      <h3>Step 4: Review Your Deta
      <div classme="review-box">
        <div className="review-title">
       span>onal Info</span>
  <button type="button" onCl> jumpToStep(1)} c"link-b>Edit</button>
   
        <ple={{ margin: '4px 0' }}><strong>Name:</strong> {formData.name
     p e={{ rgin: '4px 0' }}><st>E:</sg> {formDaemail}</p>
   tyle={{ margin: '4px 0' }}><strong>Portfolio:</strong> {formData.portfolio || 'None'}</p>
      </div>

      <div className="review-box">
        <div className="review-title">
          <span>Track & Level</span>
          <buttolln type="button" onClick={() => jumpToStep(2)} className="link-btn">Edit</button>
        </div>
        <p style={{ margin: '4px 0' }}><strong>Track:</strong> {formData.track}</p>
        <p style={{ margin: '4px 0' }}><strong>Level:</strong> {formData.level}</p>
      </div>

      <div className="review-box">
        <div clsName="review-title">
          <span>Selected Skills</span>
          <button type="button" onClick={() => jumpToStep(3)} className="link-btn">Edit</button>
        </div>
        <pstyle={{ margin: '4px 0' }}>{formData.techStack.join(', ') || 'None selected'}</p>
      </div>
    </div>
  );
}
