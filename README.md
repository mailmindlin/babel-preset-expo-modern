# babel-preset-expo-modern
Babel preset for Expo that won't transpile all the way back to ES5

Using the default expo/metro preset for Babel will yield you code that's pretty portable,
but uses more transforms than are strictly necessary. Modern browsers support destructuring,
computed properties, ES6 classes, arrow functions, for-of, and a slew of other features that
are transpiled away by `metro-react-native-babel-preset`. Simply by not doing that, we can
emit better source maps and cleaner code for debugging.

### Included transforms
These syntax elements will be transpiled away
 - Expo vector icons transform
 - Flow syntax
 - Decorators
 - Class properties
 - Nullish coalescing
 - Optional chaining
 - Optional catch binding
 - Dynamic import
 - Export default from
 - JSX
 - JSX sourcemap
 - TypeScript
 - (optionally) Import/export => CommonJS

### Removed transforms (present in metro)
Use metro/expo preset if you use these syntax elements AND your target browser
doesn't support them.
 - Block scoping
 - Computed properties
 - Destructuring
 - Integer literals
 - Rest/default parameters
 - Shorthand properties
 - Sticky regex
 - Unicode regex
 - Arrow functions
 - ES6 classes
 - For-of
 - Spread
 - Template literals
 - Exponentiation operator
 - Object.assign
 - Object rest/spread
 - Symbol members
