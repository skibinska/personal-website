# Personal website
[![Build Status](https://travis-ci.org/skibinska/personal-website.svg?branch=master)](https://travis-ci.org/skibinska/personal-website)
[![codecov](https://codecov.io/gh/skibinska/personal-website/branch/master/graph/badge.svg)](https://codecov.io/gh/skibinska/personal-website)
[![Test Coverage](https://codeclimate.com/github/skibinska/personal-website/badges/coverage.svg)](https://codeclimate.com/github/skibinska/personal-website/coverage)
[![Code Climate](https://codeclimate.com/github/skibinska/personal-website/badges/gpa.svg)](https://codeclimate.com/github/skibinska/personal-website)
[![Issue Count](https://codeclimate.com/github/skibinska/personal-website/badges/issue_count.svg)](https://codeclimate.com/github/skibinska/personal-website)

## What?

 My personal website containing information about myself, a development portfolio, a CV, and contact details.  
 Still under development.

### Personal Website - mockup

 ![personal website mockup](https://cloud.githubusercontent.com/assets/10700103/23280866/ca8f2a2c-fa12-11e6-957c-7ac888277008.png)

## How?

Designed a minimal, responsive mobile-first website.

### Current tech stack

- creating prototypes using **Balsamiq**
- **HTML5**, **Sass** and following **BEM** naming conventions
- **vanilla JavaScript**
- Node server with **Hapi.js**
- Backend testing with **Tape**
- e2e testing with **Nightwatch.js**
- Continuous Intergration with **Travis**
- Code coverage with **Codecov** and **Code Climate**
- **ESLint** - to ensure that code syntax is consistent

## Setup

1. Clone the repository by copy-pasting the following command into your terminal:

 ```
 git clone https://github.com/skibinska/personal-website.git && cd personal-website
 ```  
2. Install the required dependencies:

 ```
 npm install
 ```   
3. View website

   Run the server:
   ```
   npm run devStart
   ```
   Navigate to:
   ```
   http://localhost:8000
   ```  
4. Run tests

   **e2e**:  

   Run the *selenium-download* after all node_modules have been installed:  
   ```
   npm run postinstall
   ```  
   Run the Nightwatch tests:
    ```
   npm run e2e
   ```

   **backend**:  

   Run the Tape tests:
   ```
   npm test
   ```
