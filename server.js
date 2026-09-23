:', err));

// MongoDB Schema matching the wizard fields
const ApplicationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  portfolio: { type: String, default: '' },
  track: { 
    type: String, 
    enum: ['Frontend', 'Backend', 'Fullstack', 'UI/UX Design'], 
    required: true 
  },
  experience: { 
    type: String, 
    : true 
  },
  skills: { type: [String], default: [] },
  createdAt: { type: Date, default: Date.now }
});

const Application = mongoose.model('Application', ApplicationSchema);

// Submission POST route
app.post('/api/applications', async (req, res) => {
  try {
    const { name, email, portfolio, track, experience, skills } = req.body;

    // Validate mandatory fields
    if (!name || !email || !track || !experience) {
      return res.status(400).json({ error: 'Please provide all required fields.' });
    }

    const newApplication = new Applica
      track,
      experience,
      skills
    });

    const savedData = await newApplication.save();
    return res.status(201).json({ 
      success: true, 
      message: 'Application saved successfully!', 
       savedData
    lSubmission error:', error);
    return res.status(500).json({ error: 'Internal server error.' });
  }
});

/ocess.env.PORT || 5000;
app.listen(PORT, () => {
  (`✓ Server running on http://localhost:${PORT}`);
});