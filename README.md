# HomeCook - Vanilla HTML/CSS/JS Website

This is a fully functional cooking recipe website built with pure HTML, CSS, and JavaScript (no frameworks required).

## 📁 File Structure

```
/public/
├── index.html              # Home page with carousel and featured recipes
├── about.html              # About Us page
├── contact.html            # Contact page
├── terms.html              # Terms & Conditions
├── privacy.html            # Privacy Policy
├── recipe.html             # Recipe detail page (dynamic content)
├── styles.css              # Main stylesheet
├── carousel.css            # Carousel-specific styles
├── recipes.js              # Recipe data (10 recipes)
├── carousel.js             # Carousel functionality
├── recipe-detail.js        # Recipe detail page logic
├── main.js                 # Main JavaScript (navigation, recipe cards)
└── README.md               # This file
```

## 🚀 How to Use

### Option 1: Open Directly in Browser
1. Navigate to the `/public` folder
2. Double-click `index.html` to open in your default browser
3. Navigate between pages using the menu

### Option 2: Use a Local Server (Recommended)
For better performance and to avoid CORS issues, use a local server:

**Using Python:**
```bash
cd public
python -m http.server 8000
```
Then visit: http://localhost:8000

**Using Node.js (http-server):**
```bash
npm install -g http-server
cd public
http-server
```

**Using PHP:**
```bash
cd public
php -S localhost:8000
```

## 📄 Pages Included

1. **Home Page (index.html)**
   - Hero carousel with 3 featured recipes
   - Featured recipes section (6 recipes)
   - About preview section
   - Easy recipes section
   - Testimonials
   - Full navigation and footer

2. **Recipe Detail Page (recipe.html)**
   - Dynamic content loaded from URL parameter
   - Full recipe information including:
     - Ingredients list
     - Step-by-step instructions
     - Tips & tricks
     - Nutrition highlights
     - Best occasions to serve
   - Access via: `recipe.html?id=recipe-slug`

3. **About Us (about.html)**
   - Company story
   - Core values
   - Mission statement

4. **Contact (contact.html)**
   - Contact information (email, phone, address)
   - Office hours
   - Social media links

5. **Terms & Conditions (terms.html)**
   - Complete legal terms

6. **Privacy Policy (privacy.html)**
   - Detailed privacy information
   - GDPR and CCPA compliance info

## 🎨 Features

### Hero Carousel
- Auto-playing slideshow (5 second intervals)
- Manual navigation with prev/next buttons
- Dot indicators
- Pause on hover
- Smooth fade transitions
- Displays recipe images as backgrounds

### Recipe Cards
- Clickable cards that link to recipe detail pages
- Display recipe image, title, description
- Show prep time, servings, and difficulty
- Category badges
- Hover effects

### Responsive Design
- Mobile-first approach
- Breakpoints at 768px and 480px
- Mobile menu toggle
- Responsive grid layouts
- Optimized for all screen sizes

### Navigation
- Sticky navigation bar
- Active page highlighting
- Mobile hamburger menu
- Smooth transitions

## 🍳 Recipe Data

All recipe data is stored in `recipes.js` and includes:
- 10 complete American recipes
- Full ingredient lists with US measurements
- Step-by-step instructions
- Cooking tips
- Nutrition highlights
- Best serving occasions
- High-quality images from Unsplash

### Recipe IDs:
1. classic-american-cheeseburger
2. southern-fried-chicken
3. creamy-mac-and-cheese
4. bbq-pulled-pork-sandwich
5. healthy-avocado-toast
6. fluffy-pancakes-with-maple-syrup
7. oven-baked-salmon
8. chicken-alfredo-pasta
9. classic-apple-pie
10. breakfast-burrito

## 🎯 Customization

### Adding New Recipes
1. Open `recipes.js`
2. Add a new recipe object to the `recipes` array:
```javascript
{
    id: 'my-new-recipe',
    title: 'Recipe Title',
    shortIntro: 'Brief description',
    image: 'https://example.com/image.jpg',
    servingSize: '4 servings',
    prepTime: 15,
    cookTime: 30,
    servings: 4,
    difficulty: 'Easy',
    category: 'Main Course',
    ingredients: [...],
    instructions: [...],
    tips: [...],
    nutritionHighlights: [...],
    bestOccasions: [...]
}
```

### Changing Colors
Edit CSS variables in `styles.css`:
```css
:root {
    --primary-red: #DC2626;
    --primary-red-dark: #B91C1C;
    --secondary-brown: #78350F;
    --bg-light: #F9FAFB;
    /* etc. */
}
```

### Modifying Carousel Settings
Edit `carousel.js`:
```javascript
autoplayInterval = setInterval(nextSlide, 5000); // Change 5000 to desired milliseconds
```

## 🌐 Browser Compatibility

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📱 Mobile Responsive

The website is fully responsive with:
- Mobile-friendly navigation
- Touch-friendly carousel controls
- Optimized images
- Readable typography on small screens
- Flexible grid layouts

## 🔧 No Dependencies

This website uses:
- ✅ Pure HTML5
- ✅ Pure CSS3
- ✅ Vanilla JavaScript (ES6+)
- ❌ No frameworks (React, Vue, etc.)
- ❌ No build tools required
- ❌ No package managers needed

## 📈 Performance

- Lightweight (~50KB total CSS/JS)
- Fast page loads
- Optimized images from Unsplash CDN
- No external dependencies
- SEO-friendly HTML structure

## 🎨 Design

- Warm color palette (reds, browns, whites, greens)
- Large readable typography
- Rounded cards with subtle shadows
- Modern and clean layout
- Professional appearance

## 📝 License

All recipe content is original and created for this project. Images are sourced from Unsplash and subject to their license terms.

## 🤝 Support

For questions or issues, visit the Contact page or reach out at hello@homecook.com

---

**Enjoy cooking with HomeCook!** 🍳👨‍🍳👩‍🍳
