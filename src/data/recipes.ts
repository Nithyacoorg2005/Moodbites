export interface Recipe {
  id: string;
  title: string;
  description: string;
  image: string;
  prepTime: number;
  cookTime: number;
  servings: number;
  calories: number;
  ingredients: string[];
  instructions: string[];
  tags: string[];
  moodBoosts: string[];
}

export const recipes: Recipe[] = [
  {
    id: '1',
    title: 'Mood-Boosting Berry Smoothie Bowl',
    description: 'Start your day with this antioxidant-rich smoothie bowl that helps boost serotonin levels.',
    image: 'https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg',
    prepTime: 5,
    cookTime: 0,
    servings: 1,
    calories: 320,
    ingredients: [
      '1 cup mixed berries (strawberries, blueberries, raspberries)',
      '1 frozen banana',
      '1/2 cup Greek yogurt',
      '1 tbsp honey or maple syrup',
      '1 tbsp chia seeds',
      'Toppings: granola, fresh berries, sliced banana, coconut flakes'
    ],
    instructions: [
      'Add berries, frozen banana, Greek yogurt, and sweetener to a blender.',
      'Blend until smooth, adding a splash of water if needed for consistency.',
      'Pour into a bowl and sprinkle with chia seeds.',
      'Add your favorite toppings and enjoy immediately.'
    ],
    tags: ['breakfast', 'vegetarian', 'quick', 'healthy'],
    moodBoosts: ['happy', 'energized', 'focused']
  },
  {
    id: '2',
    title: 'Calming Chamomile Lavender Latte',
    description: 'A soothing, warm beverage perfect for reducing anxiety and promoting relaxation.',
    image: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg',
    prepTime: 5,
    cookTime: 5,
    servings: 1,
    calories: 120,
    ingredients: [
      '1 cup almond milk (or milk of choice)',
      '1 chamomile tea bag',
      '1/4 tsp dried culinary lavender (or 1 drop food-grade lavender essential oil)',
      '1 tsp honey or maple syrup',
      'Pinch of cinnamon'
    ],
    instructions: [
      'Heat milk in a small saucepan over medium heat until hot but not boiling.',
      'Remove from heat and add the chamomile tea bag and lavender.',
      'Cover and steep for 3-5 minutes.',
      'Remove tea bag and strain out lavender if using dried flowers.',
      'Add sweetener and cinnamon, then froth if desired.',
      'Pour into a mug and enjoy while warm.'
    ],
    tags: ['beverage', 'vegetarian', 'relaxation', 'quick'],
    moodBoosts: ['relaxed', 'calm', 'sleepy']
  },
  {
    id: '3',
    title: 'Energy-Boosting Quinoa Power Bowl',
    description: 'A nutrient-packed bowl full of complex carbs, protein, and healthy fats to fight fatigue.',
    image: 'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg',
    prepTime: 10,
    cookTime: 20,
    servings: 2,
    calories: 480,
    ingredients: [
      '1 cup quinoa, rinsed',
      '2 cups vegetable broth',
      '1 tbsp olive oil',
      '1 sweet potato, diced',
      '1 cup chickpeas (canned, drained and rinsed)',
      '2 cups kale, chopped',
      '1 avocado, sliced',
      '1/4 cup pumpkin seeds',
      'For the dressing: 2 tbsp tahini, 1 tbsp lemon juice, 1 garlic clove (minced), 1 tsp maple syrup, salt and pepper to taste, water to thin'
    ],
    instructions: [
      'Cook quinoa in vegetable broth according to package instructions.',
      'Preheat oven to 400°F (200°C).',
      'Toss sweet potato with olive oil, salt, and pepper. Roast for 20-25 minutes until tender.',
      'Whisk together all dressing ingredients.',
      'Assemble bowls: quinoa on the bottom, topped with roasted sweet potato, chickpeas, kale, avocado, and pumpkin seeds.',
      'Drizzle with dressing and serve.'
    ],
    tags: ['lunch', 'dinner', 'vegan', 'gluten-free', 'high-protein'],
    moodBoosts: ['energized', 'focused', 'satisfied']
  },
  {
    id: '4',
    title: 'Stress-Reducing Dark Chocolate Avocado Mousse',
    description: 'This rich, creamy dessert contains mood-boosting compounds that help reduce stress levels.',
    image: 'https://images.pexels.com/photos/2613471/pexels-photo-2613471.jpeg',
    prepTime: 10,
    cookTime: 0,
    servings: 4,
    calories: 220,
    ingredients: [
      '2 ripe avocados',
      '1/3 cup unsweetened cocoa powder',
      '1/4 cup honey or maple syrup',
      '1/4 cup almond milk',
      '1 tsp vanilla extract',
      '1/4 tsp sea salt',
      'Dark chocolate shavings for garnish'
    ],
    instructions: [
      'Cut avocados in half, remove pits, and scoop flesh into a food processor.',
      'Add cocoa powder, sweetener, almond milk, vanilla, and salt.',
      'Process until completely smooth, stopping to scrape down the sides as needed.',
      'Taste and adjust sweetness if necessary.',
      'Spoon into serving dishes and refrigerate for at least 30 minutes to set.',
      'Garnish with dark chocolate shavings before serving.'
    ],
    tags: ['dessert', 'vegan', 'gluten-free', 'quick'],
    moodBoosts: ['relaxed', 'happy', 'comforted']
  },
  {
    id: '5',
    title: 'Serotonin-Boosting Mediterranean Plate',
    description: 'This colorful plate includes foods rich in tryptophan, which helps produce the "happy hormone" serotonin.',
    image: 'https://images.pexels.com/photos/1211887/pexels-photo-1211887.jpeg',
    prepTime: 15,
    cookTime: 0,
    servings: 2,
    calories: 520,
    ingredients: [
      '1/2 cup hummus',
      '1 cup cherry tomatoes, halved',
      '1 cucumber, sliced',
      '1/2 cup kalamata olives',
      '4 oz feta cheese, cubed',
      '1/4 cup red onion, thinly sliced',
      '2 tbsp extra virgin olive oil',
      '1 tbsp lemon juice',
      '1 tsp dried oregano',
      'Salt and pepper to taste',
      'Whole grain pita bread'
    ],
    instructions: [
      'Arrange all ingredients except oil, lemon juice, and oregano on a plate.',
      'Whisk together olive oil, lemon juice, oregano, salt, and pepper.',
      'Drizzle dressing over the arranged ingredients.',
      'Serve with warm pita bread on the side.'
    ],
    tags: ['lunch', 'vegetarian', 'mediterranean', 'no-cook'],
    moodBoosts: ['happy', 'satisfied', 'balanced']
  },
  {
    id: '6',
    title: 'Golden Turmeric Anti-Anxiety Latte',
    description: 'A warming beverage with turmeric, known for its anti-inflammatory properties and ability to reduce anxiety.',
    image: 'https://images.pexels.com/photos/2821823/pexels-photo-2821823.jpeg',
    prepTime: 5,
    cookTime: 5,
    servings: 1,
    calories: 110,
    ingredients: [
      '1 cup unsweetened almond milk',
      '1 tsp turmeric powder',
      '1/2 tsp cinnamon',
      '1/4 tsp ginger powder (or 1 tsp fresh grated ginger)',
      'Pinch of black pepper',
      '1 tsp honey or maple syrup',
      'Optional: 1/4 tsp vanilla extract'
    ],
    instructions: [
      'Add all ingredients to a small saucepan over medium heat.',
      'Whisk continuously until hot but not boiling.',
      'Pour into a mug and enjoy warm.'
    ],
    tags: ['beverage', 'vegan', 'anti-inflammatory', 'quick'],
    moodBoosts: ['relaxed', 'calm', 'focused']
  },
  {
    id: '7',
    title: 'Omega-3 Rich Salmon Bowl with Greens',
    description: 'Packed with omega-3 fatty acids essential for brain health and improved mood.',
    image: 'https://images.pexels.com/photos/3763847/pexels-photo-3763847.jpeg',
    prepTime: 10,
    cookTime: 20,
    servings: 2,
    calories: 560,
    ingredients: [
      '2 salmon fillets (6 oz each)',
      '2 tbsp olive oil, divided',
      '1 tsp lemon zest',
      '1 tbsp lemon juice',
      '2 garlic cloves, minced',
      'Salt and pepper to taste',
      '4 cups mixed greens',
      '1 cup cherry tomatoes, halved',
      '1 avocado, sliced',
      '1/2 cup cucumber, diced',
      '1/4 cup red onion, thinly sliced',
      '1 cup cooked brown rice or quinoa'
    ],
    instructions: [
      'Preheat oven to 400°F (200°C).',
      'Mix 1 tbsp olive oil with lemon zest, lemon juice, garlic, salt and pepper.',
      'Place salmon on a baking sheet and brush with the oil mixture.',
      'Bake for 12-15 minutes until salmon flakes easily with a fork.',
      'Divide greens between two bowls and top with tomatoes, avocado, cucumber, and red onion.',
      'Add cooked grain of choice and place salmon on top.',
      'Drizzle with remaining olive oil, season with salt and pepper, and serve.'
    ],
    tags: ['dinner', 'high-protein', 'brain-food', 'gluten-free'],
    moodBoosts: ['focused', 'happy', 'energized']
  },
  {
    id: '8',
    title: 'Comforting Butternut Squash Soup',
    description: 'A warming, nutrient-rich soup perfect for those days when you need comfort and grounding.',
    image: 'https://images.pexels.com/photos/539451/pexels-photo-539451.jpeg',
    prepTime: 15,
    cookTime: 30,
    servings: 4,
    calories: 220,
    ingredients: [
      '1 medium butternut squash, peeled and cubed',
      '1 tbsp olive oil',
      '1 onion, chopped',
      '2 garlic cloves, minced',
      '1 tsp ground cinnamon',
      '1/2 tsp ground nutmeg',
      '4 cups vegetable broth',
      '1/2 cup coconut milk',
      'Salt and pepper to taste',
      'Pumpkin seeds and fresh herbs for garnish'
    ],
    instructions: [
      'Heat olive oil in a large pot over medium heat.',
      'Add onion and sauté until translucent, about 5 minutes.',
      'Add garlic and cook for another minute.',
      'Add butternut squash, cinnamon, nutmeg, salt, and pepper. Stir to combine.',
      'Pour in vegetable broth, bring to a boil, then reduce heat and simmer for 20-25 minutes until squash is tender.',
      'Use an immersion blender to puree the soup until smooth, or transfer to a blender in batches.',
      'Return to pot (if using a blender) and stir in coconut milk.',
      'Heat through and adjust seasoning if needed.',
      'Serve garnished with pumpkin seeds and fresh herbs.'
    ],
    tags: ['dinner', 'lunch', 'vegan', 'gluten-free', 'comfort-food'],
    moodBoosts: ['comforted', 'relaxed', 'grounded']
  }
];

export const getRecipesByMood = (mood: string): Recipe[] => {
  const moodMap: Record<string, string[]> = {
    'happy': ['happy', 'energized', 'balanced'],
    'sad': ['comforted', 'happy', 'balanced'],
    'neutral': ['energized', 'focused', 'balanced'],
    'excited': ['grounded', 'relaxed', 'balanced'],
    'tired': ['energized', 'focused', 'satisfied'],
    'stressed': ['relaxed', 'calm', 'comforted'],
    'relaxed': ['happy', 'satisfied', 'comforted']
  };
  
  const targetBoosts = moodMap[mood] || ['balanced', 'satisfied', 'happy'];
  
  return recipes.filter(recipe => 
    recipe.moodBoosts.some(boost => targetBoosts.includes(boost))
  );
};

export const getRecipeById = (id: string): Recipe | undefined => {
  return recipes.find(recipe => recipe.id === id);
};