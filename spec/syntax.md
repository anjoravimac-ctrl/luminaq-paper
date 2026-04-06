# LuminaQ Syntax Specification

## Overview
This document outlines the syntax rules for the LuminaQ language used in various applications. It serves as a guide for developers and users to understand how to write and interpret LuminaQ code.

## Syntax Rules
1. **Variables**: Variables are declared using the `let` keyword.
   ```luminaq
   let variableName = value;
   ```
2. **Functions**: Functions are defined using the `function` keyword.
   ```luminaq
   function functionName(parameters) {
       // function body
   }
   ```
3. **Control Structures**: Control structures include `if`, `else`, `for`, and `while`.
   ```luminaq
   if (condition) {
       // code
   } else {
       // code
   }
   ```
4. **Comments**: Single line comments start with `//`. Multi-line comments are enclosed in `/* ... */`.
   ```luminaq
   // This is a single line comment
   /* This is a 
      multi-line comment */
   ```

## Example
An example of a simple LuminaQ program:
```luminaq
let name = "World";

function greet() {
    if (name) {
        return "Hello, " + name;
    }
    return "Hello!";
}

console.log(greet());
```

## Conclusion
This syntax specification is designed to provide a clear understanding of how to work with LuminaQ effectively.