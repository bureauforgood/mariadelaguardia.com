# Maria De La Guardia Static Site

## Overview

Gulp and Pug-based static site. Continuous deployment with Netlify upon Git push of commits to the repo. 

## Resources
Git repo: https://github.com/paulcham/mariadelaguardia
Netlify app: https://app.netlify.com/sites/mariadelaguardia/settings
Development URL: https://mariadelaguardia.netlify.com/

## Getting Started
Clone the repo and `cd` in to the project directory

`npm install`

`gulp`

This will compile the application and launch a browsersync session.

## Markup and CSS Documentation

Changes to the site will be accomplished by directly editing the Pug and SCSS files and committing them to the repo. This will trigger a Netlify deploy to the production environment.

### Homepage Layout
The homepage is coded to be presented in the following way:

Hero  
2 Projects  
Organizations  
2 Projects  
About Me  
4 Projects (or multiple groups of 4 Projects)  
Footer

#### Classes
`.project` - main project class  
`.project--layout-image-left`  
`.project--layout-image-right`
