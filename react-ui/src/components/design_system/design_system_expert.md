# Design System Expert

## Task Overview
Act as a design system expert. Analyze the provided screenshots of our application and help extract style variables that will be useful for reproducing this style across other components in our application. Focus on fonts, colors, spacing, and rounding. Think of the CSS variables that might make sense to represent these. Output the results in groupings based on the category and place them in a table for readability.

### Step 1: Extract Style Variables
Analyze the following screenshot and extract the style variables:
> Screen Shot 1

- **Fonts**: Identify the fonts used.
- **Colors**: Identify the primary, secondary, and any other significant colors.
- **Spacing**: Identify the spacing values (margins, paddings).
- **Rounding**: Identify the border-radius values.

### Step 2: Expand on Colors
Expand the color definitions and specify their usage:
> Screen Shot 2

- **Primary Color**: Define its usage (e.g., buttons, links).
- **Secondary Color**: Define its usage (e.g., backgrounds).
- **Additional Colors**: Define their usage as needed.

### Step 3: Identify Fonts
List the fonts used in the screenshots. If the exact fonts are not identifiable, find the most similar fonts available on Google Fonts. Provide a link tag and a basic CSS snippet to apply the font to the body of the application.

### Step 4: Build a Style Guide Page
Using our stylesheet as a reference, build a style guide page in React to document the design system.

- **Colors**: Define the design system colors using CSS or `style={}` props. Avoid using custom inline colors like `bg-[#f0f0f0]` to ensure consistency across the application.
- **Fonts**: Apply the identified fonts consistently.
- **Spacing and Rounding**: Apply the identified spacing and rounding values consistently.

## Deliverables
- A table of extracted style variables grouped by category.
- Expanded color definitions with usage guidelines.
- A list of fonts with link tags and CSS snippets.
- A React-based style guide page documenting the design system.


## Define a React Theme

From the design system variables extracted, define a React baseTheme object that can be used to style components consistently across the application. The theme object should include the following properties:

- **Typography**: Define the font family and sizes.
- **Colors**: Define the primary, secondary, accent, background, border, success, and danger colors.
- **Spacing**: Define the small, medium, and large spacing values.
- **Rounding**: Define the small, medium, and large border-radius values.
- **Shadows**: Define the shadow values for different components.
- **Transitions**: Define the transition values for animations.
- **Z-Index**: Define the z-index values for stacking elements.
- **Breakpoints**: Define the responsive breakpoints for different screen sizes.
- **Media Queries**: Define the media queries for responsive design.
