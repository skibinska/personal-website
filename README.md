# Personal website
[![Build Status](https://travis-ci.org/skibinska/personal-website.svg?branch=master)](https://travis-ci.org/skibinska/personal-website)
[![codecov](https://codecov.io/gh/skibinska/personal-website/branch/master/graph/badge.svg)](https://codecov.io/gh/skibinska/personal-website)
[![Test Coverage](https://codeclimate.com/github/skibinska/personal-website/badges/coverage.svg)](https://codeclimate.com/github/skibinska/personal-website/coverage)
[![Code Climate](https://codeclimate.com/github/skibinska/personal-website/badges/gpa.svg)](https://codeclimate.com/github/skibinska/personal-website)
[![Issue Count](https://codeclimate.com/github/skibinska/personal-website/badges/issue_count.svg)](https://codeclimate.com/github/skibinska/personal-website)

## What?
 My personal website containing information about myself, a development portfolio, a CV, and contact details.  
 Still under development.

## How?
Designed a minimal, responsive mobile-first website.

### Current tech stack
- HTML5, Sass and following BEM naming conventions
- vanilla JavaScript
- Node server with Hapi.js
- Backend testing with Tape
- e2e testing with Nightwatch.js
- Continuous Intergration with Travis
- Code coverage with Codecov and Code Climate
- ESLint - to ensure that code syntax is consistent

## Setup
1. Clone this repo and ```cd personal-website```
2. Run ```npm i```
3. To see website:
  - ```npm run devStart```
  - navigate to ```localhost:8000```
4. For e2e tests run: 
  - ```npm run postinstall``` - to run the selenium-download after all node_modules have been installed
  - ```npm run e2e``` - to see passing tests
5. For tape tests:
  - ```npm run test```
