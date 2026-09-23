const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection string (Local MongoDB)
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/tamasha_wizard';

mongoose
  .connect(MONGO_URI)
  .then(() => console.log('✓ Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

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
    enum: ['Junior', 'Mid', 'Senior'], 
    required: true 
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

    const newApplication = new Application({
      name,
      email,
      portfolio,
      track,
      experience,
      skills
    });

    const savedData = await newApplication.save();
    return res.status(201).json({ 
      success: true, 
      message: 'Application saved successfully!', 
      data: savedData 
    });
  } catch (error) {
    console.error('Submission error:', error);
    return res.status(500).json({ error: 'Internal server error.' });
  }
});

// Run server on Port 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✓ Server running on http://localhost:${PORT}`);
});