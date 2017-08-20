# Maria De La Guardia Static Site

## Overview

Gulp and Pug-based static site. Continuous deployment with Netlify upon Git push of commits to the repo. 

## Resources
**Git repo:** https://github.com/paulcham/mariadelaguardia  
**Netlify app:** https://app.netlify.com/sites/mariadelaguardia/settings  
**Development URL:** https://mariadelaguardia.netlify.com/

## Getting Started
Clone the repo

`cd` in to the project directory

`npm install` - this will download the project's dependancies

`gulp` - this will compile the application and launch a browsersync session

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

#### Homepage Project Classes
##### Layout Classes
`.project` - main project class  
`.project--layout-image-left` - project layout with image(s) on the left side  
`.project--layout-image-right` - project layout with image(s) on the right side

##### Image Classes
`.project__image--single` - used when there is one main image for a project 
`.project__image--multiple` - used for each image in a four image grouping for a project - the images are sized and positioned based on their order in the markup   
`.project__image--alt` - used for projects that display a second image opposite the main project image

##### Color Classes
`.project--teal`  
`.project--blue`  
`.project--yellow`

##### Other Classes
`.project--composed-image` - used to disable the image drop shadow in case the image is precomposed with its own shadows  
`.decorated` - class to indicate which element should be decorated with the vertical line in the center  
`.animsition-link` - used on a link to trigger page-to-page transitions

##### Image Dimensions

