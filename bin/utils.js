#!/usr/bin/env node

module.exports.getFileContents = (file, component_name) => {
  switch (file) {
    case "index.js":
    case "index.ts":
      return `export {${component_name}} from "./${component_name}"`;
    case `${component_name}.js`:
    case `${component_name}.tsx`:
      return `import React from "react";
      export const ${component_name} = () => {
        // Your component logic goes here
        return (
          <>
            // Your JSX/TSX goes here
          </>
        )
      }`;
    case "styles.css":
      return `/* Your styles go here... */`;
    case `${component_name}.styles.ts`:
    case `${component_name}.styles.js`:
      return `import { StyleSheet } from 'react-native'\nconst styles = StyleSheet.create({\n\t// Your styles go here...\n})\nexport default styles`;
  }
};
