import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import cookieParser from 'cookie-parser';

// Initialize environment variables
dotenv.config();

// Create Express app
const app = express();

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: 'http://localhost:5173', // Vite default dev server
  credentials: true
}));

// MongoDB connection (commented out for the demo)
/*
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Define User model schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

// Pre-save hook to hash password
userSchema.pre('save', async function(next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

const User = mongoose.model('User', userSchema);

// Define Mood model schema
const moodSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  mood: { type: String, required: true },
  date: { type: Date, default: Date.now },
  notes: { type: String }
});

const Mood = mongoose.model('Mood', moodSchema);

// Define Recipe model schema
const recipeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  prepTime: { type: Number, required: true },
  cookTime: { type: Number, required: true },
  servings: { type: Number, required: true },
  calories: { type: Number, required: true },
  ingredients: [{ type: String, required: true }],
  instructions: [{ type: String, required: true }],
  tags: [{ type: String }],
  moodBoosts: [{ type: String }]
});

const Recipe = mongoose.model('Recipe', recipeSchema);

// Define FavoriteRecipe model schema
const favoriteRecipeSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  recipeId: { type: mongoose.Schema.Types.ObjectId, ref: 'Recipe', required: true },
  createdAt: { type: Date, default: Date.now }
});

const FavoriteRecipe = mongoose.model('FavoriteRecipe', favoriteRecipeSchema);
*/

// Authentication middleware
const authenticateUser = (req, res, next) => {
  const token = req.cookies.token || req.header('Authorization')?.replace('Bearer ', '');
  
  if (!token) {
    return res.status(401).json({ message: 'Authentication required' });
  }
  
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key');
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Invalid token' });
  }
};

// API Routes

// Auth routes
app.post('/api/auth/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    
    // Check if user already exists
    // const existingUser = await User.findOne({ email });
    // if (existingUser) {
    //   return res.status(400).json({ message: 'User already exists' });
    // }
    
    // Create new user
    // const user = new User({ name, email, password });
    // await user.save();
    
    // Generate JWT token
    const token = jwt.sign(
      { id: '123', name, email },
      process.env.JWT_SECRET || 'your-secret-key',
      { expiresIn: '7d' }
    );
    
    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
    });
    
    res.status(201).json({
      message: 'User registered successfully',
      user: { id: '123', name, email }
    });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

app.post('/api/auth/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    
    // Find user
    // const user = await User.findOne({ email });
    // if (!user) {
    //   return res.status(400).json({ message: 'Invalid credentials' });
    // }
    
    // Verify password
    // const isMatch = await bcrypt.compare(password, user.password);
    // if (!isMatch) {
    //   return res.status(400).json({ message: 'Invalid credentials' });
    // }
    
    // Generate JWT token
    const token = jwt.sign(
      { id: '123', name: 'Demo User', email },
      process.env.JWT_SECRET || 'your-secret-key',
      { expiresIn: '7d' }
    );
    
    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
    });
    
    res.status(200).json({
      message: 'Login successful',
      user: { id: '123', name: 'Demo User', email }
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

app.post('/api/auth/logout', (req, res) => {
  res.clearCookie('token');
  res.status(200).json({ message: 'Logged out successfully' });
});

// User routes
app.get('/api/user/me', authenticateUser, (req, res) => {
  res.status(200).json({ user: req.user });
});

// Mood routes
app.get('/api/moods', authenticateUser, async (req, res) => {
  try {
    // const moods = await Mood.find({ userId: req.user.id }).sort({ date: -1 });
    
    // Mock data
    const moods = [
      {
        id: '1',
        mood: 'happy',
        date: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000),
        notes: 'Had a great day at work!'
      },
      // Add more mock moods as needed
    ];
    
    res.status(200).json({ moods });
  } catch (error) {
    console.error('Error fetching moods:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

app.post('/api/moods', authenticateUser, async (req, res) => {
  try {
    const { mood, notes } = req.body;
    
    // const newMood = new Mood({
    //   userId: req.user.id,
    //   mood,
    //   date: new Date(),
    //   notes
    // });
    // await newMood.save();
    
    // Mock response
    const newMood = {
      id: Date.now().toString(),
      mood,
      date: new Date(),
      notes
    };
    
    res.status(201).json({ mood: newMood });
  } catch (error) {
    console.error('Error adding mood:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Recipe routes
app.get('/api/recipes', async (req, res) => {
  try {
    // const recipes = await Recipe.find();
    
    // Mock data would go here
    
    res.status(200).json({ recipes: [] });
  } catch (error) {
    console.error('Error fetching recipes:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

app.get('/api/recipes/:id', async (req, res) => {
  try {
    // const recipe = await Recipe.findById(req.params.id);
    // if (!recipe) {
    //   return res.status(404).json({ message: 'Recipe not found' });
    // }
    
    // Mock response
    const recipe = {
      id: req.params.id,
      title: 'Mock Recipe',
      description: 'This is a placeholder recipe',
      // Additional recipe details would go here
    };
    
    res.status(200).json({ recipe });
  } catch (error) {
    console.error('Error fetching recipe:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Favorite recipes routes
app.get('/api/favorites', authenticateUser, async (req, res) => {
  try {
    // const favorites = await FavoriteRecipe.find({ userId: req.user.id })
    //   .populate('recipeId')
    //   .sort({ createdAt: -1 });
    
    // Mock response
    const favorites = [];
    
    res.status(200).json({ favorites });
  } catch (error) {
    console.error('Error fetching favorites:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

app.post('/api/favorites', authenticateUser, async (req, res) => {
  try {
    const { recipeId } = req.body;
    
    // Check if already favorited
    // const existing = await FavoriteRecipe.findOne({ userId: req.user.id, recipeId });
    // if (existing) {
    //   return res.status(400).json({ message: 'Recipe already in favorites' });
    // }
    
    // Add to favorites
    // const favorite = new FavoriteRecipe({ userId: req.user.id, recipeId });
    // await favorite.save();
    
    res.status(201).json({ message: 'Added to favorites' });
  } catch (error) {
    console.error('Error adding favorite:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

app.delete('/api/favorites/:recipeId', authenticateUser, async (req, res) => {
  try {
    // await FavoriteRecipe.findOneAndDelete({ userId: req.user.id, recipeId: req.params.recipeId });
    
    res.status(200).json({ message: 'Removed from favorites' });
  } catch (error) {
    console.error('Error removing favorite:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});