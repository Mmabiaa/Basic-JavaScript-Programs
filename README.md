# Basic JavaScript Programs

Welcome to the **Basic JavaScript Programs** repository! This collection contains simple JavaScript programs designed to help beginners understand fundamental programming concepts and improve their coding skills.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Examples](#examples)
- [Contributing](#contributing)
- [License](#license)

## Features

- A variety of basic programs covering topics such as:
  - Variables and Data Types
  - Control Structures (if statements, loops)
  - Functions
  - Arrays and Objects
  - DOM Manipulation
- Clear and concise code with comments for better understanding.
- Easy to follow examples that can be run in any JavaScript environment.

## Installation

To get started with the Basic JavaScript Programs, follow these steps:

1. Clone the repository:
`git clone https://github.com/mmabiaa/Basic-JavaScript-Programs.git`


2. Navigate to the project directory:
`cd Basic-JavaScript-Programs`


3. Open the HTML files in your preferred web browser or use a code editor with a live server extension.

## Usage

Each program is contained within its own file. You can run any of the JavaScript files by including them in an HTML document or executing them in a JavaScript console. Here’s how you can include a JavaScript file in an HTML document:
```
<!DOCTYPE html> <html lang="en"> <head> <meta charset="UTF-8"> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <title>JavaScript Program</title> <script src="path/to/your/javascript-file.js"></script> </head> <body> <h1>Welcome to My JavaScript Program</h1> </body> </html>
```
## Examples
Here are a few examples of what you can find in this repository:

Hello World: A simple program that prints "Hello, World!" to the console.
```
console.log("Hello, World!");
Factorial Calculation: A function that calculates the factorial of a number.
text
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}
console.log(factorial(5)); // Output: 120
```

Array Manipulation: Demonstrating how to add, remove, and iterate through arrays.
```
let fruits = ['apple', 'banana', 'orange'];
fruits.push('grape'); // Add an element
fruits.splice(1, 1); // Remove 'banana'

fruits.forEach(fruit => {
    console.log(fruit);
});
```

## Contributing
Contributions are welcome! If you have suggestions for improvements or new programs to add, please [view CONTRIBUTION FILE](CONTRIBUTION.md).

## License
This project is licensed under the MIT License - see the [LICENSE file](LINCENSE.md) for details.
