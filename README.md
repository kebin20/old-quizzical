![Game Layout](./screenshots/project-screenshot.png)

# Quizzical - Trivia App

## Table of contents

- [Overview](#overview)
  - [Main function](#main-function)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
- [Continued Development](#continued-development) 
 - [Future Implementations](#future-implementations)

## Overview

### Main function

It is a simple quiz app that outputs 5 different questions which in turn, is able to check whether you have answered the questions correctly or not. It will then display how many questions you got right.

Data is fetched from the Open Trivia API.

### Links

- Solution URL: [Github Repo](https://github.com/kebin20/quizzical)
- Live Site URL: [Quizzical](https://superlative-bubblegum-3c9442.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- Flexbox
- [React](https://reactjs.org/) - JS library
- [TypeScript](https://www.typescriptlang.org/) - Strongly typed programming language ontop of JS
- [![style: styled-components](https://img.shields.io/badge/style-%F0%9F%92%85%20styled--components-orange.svg?colorB=daa357&colorA=db748e)](https://github.com/styled-components/styled-components)

## Continued development

### Future Implementations

- Implement a loading screen when the data is being fetched.

- Add a timer to see how fast you can answer the questions.

- Add an option to choose which difficulty of quizzes you would like outputted and the number of quizzes outputted as desired.

### Resources

- [StackOverflow](https://stackoverflow.com/questions/40382842/cant-import-css-scss-modules-typescript-says-cannot-find-module) - This article helped me to solve the issue of getting a type error when using CSS modules. 
I only need to create a file called `typings.d.ts` in my src folder and added the following code: `declare module "*.module.css";`

- [Grepper](https://www.grepper.com/answers/294839/Cannot+find+module+.svg%27+or+its+corresponding+type+declarations.?ucard=1) - This one is a similar problem with the CSS modules, but for SVG files being imported as a module