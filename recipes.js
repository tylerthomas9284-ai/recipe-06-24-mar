// Recipe Data
const recipes = [
    {
        id: 'classic-american-cheeseburger',
        title: 'Classic American Cheeseburger',
        shortIntro: 'Juicy beef patty with melted cheddar, fresh lettuce, and tomato on a toasted bun.',
        image: 'https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbWVyaWNhbiUyMGNoZWVzZWJ1cmdlciUyMGZyZXNofGVufDF8fHx8MTc2ODkzNTgwMHww&ixlib=rb-4.1.0&q=80&w=1080',
        servingSize: '4 burgers',
        prepTime: 15,
        cookTime: 10,
        servings: 4,
        difficulty: 'Easy',
        category: 'Main Course',
        ingredients: [
            '1.5 lbs ground beef (80/20 blend)',
            '4 burger buns',
            '4 slices cheddar cheese',
            '4 lettuce leaves',
            '1 large tomato, sliced',
            '1 red onion, sliced',
            '4 pickle slices',
            '4 tbsp mayonnaise',
            '2 tbsp ketchup',
            '1 tbsp mustard',
            'Salt and pepper to taste'
        ],
        instructions: [
            'Divide ground beef into 4 equal portions and form into patties, about 3/4 inch thick.',
            'Season both sides generously with salt and pepper.',
            'Heat a cast-iron skillet or grill to medium-high heat.',
            'Cook patties for 4-5 minutes on the first side without moving them.',
            'Flip patties and immediately top with cheese slices.',
            'Cook for another 3-4 minutes until cheese is melted and burger reaches desired doneness.',
            'Toast burger buns on the grill or in a skillet.',
            'Spread mayonnaise on bottom bun, add lettuce, tomato, and onion.',
            'Place burger patty with melted cheese on top.',
            'Add pickles, ketchup, and mustard. Top with bun and serve immediately.'
        ],
        tips: [
            'Don\'t press down on burgers while cooking - this squeezes out the juices!',
            'Make a small indent in the center of each patty to prevent bulging.',
            'Let burgers rest for 2-3 minutes after cooking for juicier results.',
            'Try mixing in Worcestershire sauce or garlic powder into the beef for extra flavor.'
        ],
        nutritionHighlights: [
            'High in protein (35g per serving)',
            'Good source of iron and B vitamins',
            'Contains healthy fats from beef'
        ],
        bestOccasions: [
            'Summer BBQs and cookouts',
            'Family dinners',
            'Game day parties',
            'Quick weeknight meals'
        ]
    },
    {
        id: 'southern-fried-chicken',
        title: 'Southern Fried Chicken',
        shortIntro: 'Crispy, golden-brown chicken with a perfectly seasoned crust and tender, juicy meat.',
        image: 'https://images.unsplash.com/photo-1663430218462-8024770c830e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmllZCUyMGNoaWNrZW4lMjBzb3V0aGVybnxlbnwxfHx8fDE3Njg5MzU4MDF8MA&ixlib=rb-4.1.0&q=80&w=1080',
        servingSize: '4-6 servings',
        prepTime: 140,
        cookTime: 25,
        servings: 5,
        difficulty: 'Medium',
        category: 'Main Course',
        ingredients: [
            '1 whole chicken (3-4 lbs), cut into pieces',
            '2 cups buttermilk',
            '2 cups all-purpose flour',
            '2 tsp paprika',
            '2 tsp garlic powder',
            '2 tsp onion powder',
            '1 tsp cayenne pepper',
            '1 tsp black pepper',
            '2 tsp salt',
            '1 tsp dried thyme',
            'Vegetable oil for frying'
        ],
        instructions: [
            'Place chicken pieces in a large bowl and cover with buttermilk. Refrigerate for 2-4 hours.',
            'In a large shallow dish, mix flour with all spices.',
            'Heat 2 inches of oil in a large heavy-bottomed pot to 350°F.',
            'Remove chicken from buttermilk, letting excess drip off.',
            'Dredge each piece thoroughly in seasoned flour, pressing to coat well.',
            'Carefully place chicken in hot oil, skin-side down. Don\'t overcrowd the pot.',
            'Fry dark meat for 13-14 minutes, white meat for 10-12 minutes, turning halfway through.',
            'Chicken is done when internal temperature reaches 165°F and crust is golden brown.',
            'Drain on a wire rack set over a baking sheet.',
            'Let rest for 5 minutes before serving to maintain crispiness.'
        ],
        tips: [
            'Use a thermometer to maintain oil temperature between 325-350°F.',
            'Don\'t skip the buttermilk marinating - it tenderizes the chicken.',
            'Work in batches to avoid lowering oil temperature.',
            'Let chicken come to room temperature before frying for even cooking.'
        ],
        nutritionHighlights: [
            'High in protein',
            'Source of B vitamins and selenium',
            'Contains essential minerals like zinc'
        ],
        bestOccasions: [
            'Sunday family dinners',
            'Picnics and potlucks',
            'Celebration meals',
            'Southern-style gatherings'
        ]
    },
    {
        id: 'creamy-mac-and-cheese',
        title: 'Creamy Mac & Cheese',
        shortIntro: 'Ultra-creamy, cheesy comfort food made with a rich blend of cheddar and American cheese.',
        image: 'https://images.unsplash.com/photo-1723473620176-8d26dc6314cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWMlMjBjaGVlc2UlMjBjcmVhbXl8ZW58MXx8fHwxNzY4OTM1ODAyfDA&ixlib=rb-4.1.0&q=80&w=1080',
        servingSize: '6-8 servings',
        prepTime: 10,
        cookTime: 20,
        servings: 7,
        difficulty: 'Easy',
        category: 'Main Course',
        ingredients: [
            '1 lb elbow macaroni',
            '4 tbsp butter',
            '1/4 cup all-purpose flour',
            '3 cups whole milk',
            '1 cup heavy cream',
            '3 cups sharp cheddar cheese, shredded',
            '1 cup American cheese, cubed',
            '1 tsp garlic powder',
            '1 tsp onion powder',
            '1/2 tsp mustard powder',
            'Salt and pepper to taste',
            'Breadcrumbs for topping (optional)'
        ],
        instructions: [
            'Cook macaroni according to package directions until al dente. Drain and set aside.',
            'In a large pot, melt butter over medium heat.',
            'Whisk in flour and cook for 1-2 minutes to make a roux.',
            'Gradually add milk and cream, whisking constantly to prevent lumps.',
            'Bring to a simmer and cook until sauce thickens, about 5 minutes.',
            'Remove from heat and stir in cheddar and American cheese until melted.',
            'Add garlic powder, onion powder, mustard powder, salt, and pepper.',
            'Fold in cooked macaroni until well coated.',
            'For baked version: Transfer to baking dish, top with breadcrumbs, and bake at 350°F for 20 minutes.',
            'Serve hot and enjoy the ultimate comfort food!'
        ],
        tips: [
            'Use freshly shredded cheese for the creamiest texture.',
            'American cheese helps create an ultra-smooth sauce.',
            'Save some pasta water to thin sauce if needed.',
            'Add crispy bacon or jalapeños for a twist!'
        ],
        nutritionHighlights: [
            'High in calcium from cheese',
            'Good source of protein',
            'Provides energy from carbohydrates'
        ],
        bestOccasions: [
            'Holiday side dish',
            'Kids\' favorite meal',
            'Comfort food cravings',
            'Potluck dinners'
        ]
    },
    {
        id: 'bbq-pulled-pork-sandwich',
        title: 'BBQ Pulled Pork Sandwich',
        shortIntro: 'Slow-cooked, tender pork shoulder smothered in tangy BBQ sauce on a soft bun.',
        image: 'https://images.unsplash.com/photo-1623047437095-27418540c288?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwdWxsZWQlMjBwb3JrJTIwYmJxfGVufDF8fHx8MTc2ODkzNTgwMXww&ixlib=rb-4.1.0&q=80&w=1080',
        servingSize: '8-10 sandwiches',
        prepTime: 15,
        cookTime: 420,
        servings: 9,
        difficulty: 'Easy',
        category: 'Main Course',
        ingredients: [
            '4-5 lbs pork shoulder (Boston butt)',
            '2 tbsp brown sugar',
            '1 tbsp paprika',
            '1 tbsp garlic powder',
            '1 tbsp onion powder',
            '1 tsp cayenne pepper',
            '2 tsp salt',
            '1 tsp black pepper',
            '2 cups BBQ sauce',
            '1/2 cup apple cider vinegar',
            '8-10 hamburger buns',
            'Coleslaw for topping (optional)'
        ],
        instructions: [
            'Mix brown sugar, paprika, garlic powder, onion powder, cayenne, salt, and pepper to make a dry rub.',
            'Rub spice mixture all over pork shoulder, covering all sides.',
            'Place pork in slow cooker.',
            'Pour apple cider vinegar around (not over) the pork.',
            'Cook on low for 6-8 hours until pork is fork-tender.',
            'Remove pork and shred using two forks.',
            'Discard excess fat from cooking liquid.',
            'Return shredded pork to slow cooker.',
            'Add BBQ sauce and mix well. Cook on high for 30 more minutes.',
            'Serve on toasted buns with coleslaw on top.'
        ],
        tips: [
            'For extra flavor, smoke the pork shoulder before slow cooking.',
            'Make your own BBQ sauce for a personal touch.',
            'Leftovers freeze beautifully for up to 3 months.',
            'Try different BBQ sauce styles - Kansas City, Carolina, or Memphis!'
        ],
        nutritionHighlights: [
            'High in protein (45g per serving)',
            'Rich in B vitamins',
            'Good source of minerals like zinc and iron'
        ],
        bestOccasions: [
            'Summer cookouts',
            'Game day parties',
            'Large family gatherings',
            'Meal prep for the week'
        ]
    },
    {
        id: 'healthy-avocado-toast',
        title: 'Healthy Avocado Toast',
        shortIntro: 'Fresh avocado mash on crispy whole grain toast with cherry tomatoes and a perfect poached egg.',
        image: 'https://images.unsplash.com/photo-1551888645-5ec881101c3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdm9jYWRvJTIwdG9hc3QlMjBoZWFsdGh5fGVufDF8fHx8MTc2ODg3Nzk2Nnww&ixlib=rb-4.1.0&q=80&w=1080',
        servingSize: '2 servings',
        prepTime: 10,
        cookTime: 5,
        servings: 2,
        difficulty: 'Easy',
        category: 'Breakfast',
        ingredients: [
            '4 slices whole grain bread',
            '2 ripe avocados',
            '2 eggs',
            '1 cup cherry tomatoes, halved',
            '2 tbsp lemon juice',
            '2 tbsp extra virgin olive oil',
            'Red pepper flakes to taste',
            'Salt and black pepper to taste',
            'Fresh herbs (basil or cilantro) for garnish',
            'Everything bagel seasoning (optional)'
        ],
        instructions: [
            'Toast bread slices until golden and crispy.',
            'While bread is toasting, cut avocados in half and remove pits.',
            'Scoop avocado into a bowl and mash with a fork.',
            'Add lemon juice, salt, and pepper to mashed avocado. Mix well.',
            'Bring a pot of water to a gentle simmer for poached eggs.',
            'Crack eggs into individual cups, then gently slide into simmering water.',
            'Cook eggs for 3-4 minutes for runny yolk.',
            'Spread mashed avocado generously on toasted bread.',
            'Top with cherry tomatoes and a poached egg.',
            'Drizzle with olive oil, sprinkle with red pepper flakes, herbs, and everything bagel seasoning.'
        ],
        tips: [
            'Choose ripe but firm avocados for the best texture.',
            'Add a splash of vinegar to poaching water to help eggs hold their shape.',
            'Customize with toppings like feta cheese, bacon, or smoked salmon.',
            'Make it vegan by skipping the egg and adding nutritional yeast.'
        ],
        nutritionHighlights: [
            'High in healthy fats from avocado',
            'Excellent source of fiber',
            'Rich in vitamins E, K, and B6',
            'Provides protein from eggs'
        ],
        bestOccasions: [
            'Quick breakfast or brunch',
            'Light lunch',
            'Post-workout meal',
            'Weekend brunch gatherings'
        ]
    },
    {
        id: 'fluffy-pancakes-with-maple-syrup',
        title: 'Fluffy Pancakes with Maple Syrup',
        shortIntro: 'Light, airy pancakes that melt in your mouth, served with butter and pure maple syrup.',
        image: 'https://images.unsplash.com/photo-1528301392571-0dfab3c00216?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYW5jYWtlcyUyMG1hcGxlJTIwc3lydXB8ZW58MXx8fHwxNzY4OTM1ODAyfDA&ixlib=rb-4.1.0&q=80&w=1080',
        servingSize: '4 servings (12 pancakes)',
        prepTime: 10,
        cookTime: 15,
        servings: 4,
        difficulty: 'Easy',
        category: 'Breakfast',
        ingredients: [
            '2 cups all-purpose flour',
            '2 tbsp sugar',
            '2 tsp baking powder',
            '1/2 tsp baking soda',
            '1/2 tsp salt',
            '2 cups buttermilk',
            '2 large eggs',
            '4 tbsp melted butter, plus more for cooking',
            '1 tsp vanilla extract',
            'Pure maple syrup for serving',
            'Fresh berries for topping (optional)'
        ],
        instructions: [
            'In a large bowl, whisk together flour, sugar, baking powder, baking soda, and salt.',
            'In another bowl, whisk buttermilk, eggs, melted butter, and vanilla.',
            'Pour wet ingredients into dry ingredients and stir until just combined (batter should be lumpy).',
            'Let batter rest for 5 minutes.',
            'Heat a griddle or non-stick pan over medium heat and brush with butter.',
            'Pour 1/4 cup of batter for each pancake.',
            'Cook until bubbles form on surface and edges look set, about 2-3 minutes.',
            'Flip and cook for another 1-2 minutes until golden brown.',
            'Keep cooked pancakes warm in a 200°F oven while finishing the rest.',
            'Serve stacked with butter and warm maple syrup.'
        ],
        tips: [
            'Don\'t overmix the batter - lumps are okay and create fluffier pancakes.',
            'Let batter rest to allow gluten to relax and make tender pancakes.',
            'Use medium heat to prevent burning while ensuring cooked centers.',
            'Add blueberries or chocolate chips to batter for variations.'
        ],
        nutritionHighlights: [
            'Good source of carbohydrates for energy',
            'Provides protein from eggs and buttermilk',
            'Contains calcium and B vitamins'
        ],
        bestOccasions: [
            'Weekend breakfast',
            'Special occasion brunches',
            'Kids\' birthday morning',
            'Holiday mornings'
        ]
    },
    {
        id: 'oven-baked-salmon',
        title: 'Oven-Baked Salmon',
        shortIntro: 'Perfectly flaky salmon with a lemon-herb butter glaze, baked to perfection in just 20 minutes.',
        image: 'https://images.unsplash.com/photo-1575835638288-74138ce93c0e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWxtb24lMjBiYWtlZCUyMGRpbm5lcnxlbnwxfHx8fDE3Njg5MzU4MDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
        servingSize: '4 servings',
        prepTime: 10,
        cookTime: 14,
        servings: 4,
        difficulty: 'Easy',
        category: 'Main Course',
        ingredients: [
            '4 salmon fillets (6 oz each)',
            '4 tbsp butter, melted',
            '3 garlic cloves, minced',
            '2 tbsp fresh lemon juice',
            '1 tbsp lemon zest',
            '2 tbsp fresh dill, chopped',
            '2 tbsp fresh parsley, chopped',
            '1 tsp paprika',
            'Salt and black pepper to taste',
            'Lemon slices for garnish',
            'Fresh asparagus or green beans (side)'
        ],
        instructions: [
            'Preheat oven to 400°F and line a baking sheet with parchment paper.',
            'Pat salmon fillets dry with paper towels and place on baking sheet.',
            'In a small bowl, mix melted butter, garlic, lemon juice, and lemon zest.',
            'Brush butter mixture generously over salmon fillets.',
            'Season with paprika, salt, and pepper.',
            'Sprinkle fresh dill and parsley on top.',
            'Arrange lemon slices around the salmon.',
            'Bake for 12-15 minutes until salmon flakes easily with a fork.',
            'Internal temperature should reach 145°F.',
            'Let rest for 2 minutes before serving with roasted vegetables.'
        ],
        tips: [
            'Don\'t overcook - salmon continues cooking after removing from oven.',
            'Use wild-caught salmon for best flavor and nutrition.',
            'Add honey to butter mixture for a sweet-savory glaze.',
            'Serve with rice pilaf and steamed vegetables for a complete meal.'
        ],
        nutritionHighlights: [
            'Excellent source of omega-3 fatty acids',
            'High in protein (40g per serving)',
            'Rich in vitamin D and B12',
            'Heart-healthy and anti-inflammatory'
        ],
        bestOccasions: [
            'Weeknight dinners',
            'Healthy meal prep',
            'Date night at home',
            'Elegant dinner parties'
        ]
    },
    {
        id: 'chicken-alfredo-pasta',
        title: 'Chicken Alfredo Pasta',
        shortIntro: 'Tender chicken breast in a rich, creamy Alfredo sauce tossed with fettuccine pasta.',
        image: 'https://images.unsplash.com/photo-1748012199672-2a94ab9cbb19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXN0YSUyMGFsZnJlZG8lMjBjcmVhbXl8ZW58MXx8fHwxNzY4OTM1ODAzfDA&ixlib=rb-4.1.0&q=80&w=1080',
        servingSize: '4-6 servings',
        prepTime: 15,
        cookTime: 25,
        servings: 5,
        difficulty: 'Medium',
        category: 'Main Course',
        ingredients: [
            '1 lb fettuccine pasta',
            '2 large chicken breasts',
            '4 tbsp butter, divided',
            '4 cloves garlic, minced',
            '2 cups heavy cream',
            '1.5 cups Parmesan cheese, freshly grated',
            '1/2 cup chicken broth',
            '2 tbsp olive oil',
            '1 tsp Italian seasoning',
            'Salt and black pepper to taste',
            'Fresh parsley for garnish',
            'Extra Parmesan for serving'
        ],
        instructions: [
            'Cook fettuccine according to package directions. Reserve 1 cup pasta water.',
            'Season chicken breasts with Italian seasoning, salt, and pepper.',
            'Heat olive oil in a large skillet over medium-high heat.',
            'Cook chicken for 6-7 minutes per side until golden and cooked through (165°F).',
            'Remove chicken, let rest, then slice into strips.',
            'In the same pan, melt 2 tbsp butter and sauté garlic for 1 minute.',
            'Add chicken broth and scrape up any browned bits.',
            'Pour in heavy cream and bring to a simmer.',
            'Reduce heat and stir in Parmesan cheese until melted and smooth.',
            'Add remaining butter and season with salt and pepper.',
            'Toss cooked pasta in the sauce, adding pasta water if needed to thin.',
            'Top with sliced chicken, parsley, and extra Parmesan.'
        ],
        tips: [
            'Use freshly grated Parmesan for the smoothest sauce.',
            'Don\'t let the cream boil - it can cause the sauce to separate.',
            'Add peas or broccoli for extra vegetables.',
            'Leftover sauce thickens - thin with milk when reheating.'
        ],
        nutritionHighlights: [
            'High in protein from chicken',
            'Good source of calcium from cheese and cream',
            'Provides energy from pasta carbohydrates'
        ],
        bestOccasions: [
            'Comfort food cravings',
            'Family dinners',
            'Date night',
            'Special celebrations'
        ]
    },
    {
        id: 'classic-apple-pie',
        title: 'Classic American Apple Pie',
        shortIntro: 'Flaky buttery crust filled with cinnamon-spiced apples, topped with a golden lattice.',
        image: 'https://images.unsplash.com/photo-1601000937971-d464714b9e6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcHBsZSUyMHBpZSUyMGFtZXJpY2FufGVufDF8fHx8MTc2ODkzNTgwM3ww&ixlib=rb-4.1.0&q=80&w=1080',
        servingSize: '8 slices',
        prepTime: 30,
        cookTime: 55,
        servings: 8,
        difficulty: 'Medium',
        category: 'Dessert',
        ingredients: [
            '2 pre-made pie crusts (or homemade)',
            '6-7 Granny Smith apples, peeled and sliced',
            '3/4 cup granulated sugar',
            '1/4 cup brown sugar',
            '2 tbsp all-purpose flour',
            '1 tsp cinnamon',
            '1/4 tsp nutmeg',
            '1/4 tsp salt',
            '2 tbsp lemon juice',
            '2 tbsp butter, cut into small pieces',
            '1 egg, beaten (for egg wash)',
            'Vanilla ice cream for serving'
        ],
        instructions: [
            'Preheat oven to 375°F.',
            'In a large bowl, toss apple slices with lemon juice.',
            'Mix sugars, flour, cinnamon, nutmeg, and salt.',
            'Add sugar mixture to apples and toss to coat evenly.',
            'Roll out one pie crust and fit into a 9-inch pie dish.',
            'Pour apple filling into crust and dot with butter pieces.',
            'Cover with second crust (whole or lattice style).',
            'Trim and crimp edges. Cut slits in top for steam to escape if using whole top.',
            'Brush top with beaten egg for golden color.',
            'Place on a baking sheet and bake for 50-60 minutes.',
            'Cover edges with foil if browning too quickly.',
            'Cool for at least 2 hours before slicing. Serve with vanilla ice cream.'
        ],
        tips: [
            'Use a mix of apple varieties for complex flavor.',
            'Chill pie dough before rolling for easier handling.',
            'Bake on bottom rack for the crispiest bottom crust.',
            'Let pie cool completely for clean slices - it\'s worth the wait!'
        ],
        nutritionHighlights: [
            'Good source of fiber from apples',
            'Contains vitamin C',
            'Provides antioxidants'
        ],
        bestOccasions: [
            'Thanksgiving dessert',
            'Fourth of July celebrations',
            'Sunday family dinners',
            'Holiday gatherings'
        ]
    },
    {
        id: 'breakfast-burrito',
        title: 'Loaded Breakfast Burrito',
        shortIntro: 'Hearty breakfast burrito packed with scrambled eggs, cheese, bacon, and fresh salsa.',
        image: 'https://images.unsplash.com/photo-1662478839359-751ffc3cbbd8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmVha2Zhc3QlMjBidXJyaXRvJTIwZWdnc3xlbnwxfHx8fDE3Njg5MzU4MDR8MA&ixlib=rb-4.1.0&q=80&w=1080',
        servingSize: '4 burritos',
        prepTime: 15,
        cookTime: 15,
        servings: 4,
        difficulty: 'Easy',
        category: 'Breakfast',
        ingredients: [
            '4 large flour tortillas (10-inch)',
            '8 large eggs',
            '1/4 cup milk',
            '6 strips bacon',
            '1 cup shredded cheddar cheese',
            '1 cup hash browns (frozen or fresh)',
            '1/2 cup salsa',
            '1/2 cup sour cream',
            '1 avocado, sliced',
            '2 tbsp butter',
            'Salt and pepper to taste',
            'Hot sauce (optional)'
        ],
        instructions: [
            'Cook bacon in a large skillet until crispy. Remove and chop into pieces.',
            'Cook hash browns in the same pan until golden and crispy. Set aside.',
            'Whisk eggs with milk, salt, and pepper.',
            'Melt butter in a non-stick pan over medium-low heat.',
            'Pour in eggs and scramble gently until soft and fluffy.',
            'Warm tortillas in the microwave for 20 seconds.',
            'Layer each tortilla with scrambled eggs, bacon, hash browns, and cheese.',
            'Add salsa, sour cream, and avocado slices.',
            'Fold in the sides and roll tightly into a burrito.',
            'Optional: Toast burrito in a pan for 2 minutes per side for a crispy exterior.'
        ],
        tips: [
            'Prep ingredients the night before for quick morning assembly.',
            'Wrap burritos in foil and freeze for grab-and-go breakfasts.',
            'Add black beans and jalapeños for a Southwestern twist.',
            'Use whole wheat tortillas for a healthier option.'
        ],
        nutritionHighlights: [
            'High in protein from eggs and bacon',
            'Provides sustained energy',
            'Good source of vitamins A and C'
        ],
        bestOccasions: [
            'Busy weekday mornings',
            'Brunch gatherings',
            'Camping trips',
            'Meal prep Sundays'
        ]
    }
];
