// generate-tokens.js
const fs = require('fs');
const path = require('path');
const tokens = require('./src/theme.ts').default;

// Write tokens to a JSON file
fs.writeFileSync(
  path.resolve(__dirname, 'src/tokens.json'),
  JSON.stringify(tokens, null, 2)
);

console.log('Tokens exported to src/tokens.json');