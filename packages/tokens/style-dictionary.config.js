/**
 * Style Dictionary configuration to transform tokens from theme.ts into CSS and JSON.
 * Outputs CSS variables and JSON files for use in the design system.
 */

const StyleDictionary = require('style-dictionary');

// Configuration
module.exports = {
  source: ['./src/tokens.json'],
  platforms: {
    css: {
      transformGroup: 'css',
      buildPath: 'dist/tokens/',
      files: [
        {
          destination: 'variables.css',
          format: 'css/variables',
          options: {
            outputReferences: true, // Use CSS variables for references
          },
        },
      ],
    },
    json: {
      transformGroup: 'js',
      buildPath: 'dist/tokens/',
      files: [
        {
          destination: 'tokens.json',
          format: 'json/flat',
        },
      ],
    },
  },
};

// Extend Style Dictionary with custom transforms if needed
StyleDictionary.registerTransform({
  name: 'size/px',
  type: 'value',
  matcher: (prop) => ['fontSize', 'spacing'].includes(prop.attributes.category),
  transformer: (prop) => `${prop.value}`, // Ensure px or rem values are preserved
});