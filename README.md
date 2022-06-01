# Description

A submission for a challenge "Intro section with dropdown navigation" from frontendmentor.io, link:
https://www.frontendmentor.io/challenges/intro-section-with-dropdown-navigation-ryaPetHE5

## Current status

Partially finished (see section "Tasks" below). Just barely complete enough to submit to FEM.

Doing it with pure CSS took way too much time, so I abandoned further development as soon as a minimally viable stage (responsive layout, full functionality) was reached.

## Lessons learned:

Problem 1: Pure CSS, even when you use CubeCSS patterns, gets messy very quickly. 

Solution: Learn to use CSS preprocessors, introduce them into your projects from the start.

Problem 2: Coding JS/CSS-based interactivity from scratch in a way that works consistently takes a very long time. 

Solution: Use pre-made components for actual projects.

Problem 3: hardcoded margins don't scale well; changing them for every breakpoint is a pain.

Solution: use display:flex on parent, put flex-grow:0 on all of its immediate children, add empty divs as its immediate children (.separator and .desktop-separator in this project) and adjust flex-grow on them until you get the right spacing.

# Link to demo on Pages (representing current status of the project)

https://osato28.github.io/intro-dropdown-navigation/

It is advised to view this site in viewport <420px, as it is not yet adapted to larger screens.


# Questions for others who have completed this challenge:

- Is there a better way to make all images in the client-logos section look equal? Making them all equal width or height results in an uneven look, so I had to resort to magic numbers (linked to their common font-size via rem) and justify-content: space-between.

- The way main menu's positioning in the mobile version is done (absolute positioning for the main menu and the open/close icon, then a magical-number margin-top on the first non-icon element so that it gets placed below the icon) is a terrible mess. 
Does anyone know a better way to do it?

- ::after and ::before elements get shifted vertically when display:inline-block is used to display SVG elements. 
Does anyone know why it's happening? 
Is there a more elegant way to fix it than using a negative margin?

- Chrome DevTools' list of devices shows just how many different combinations of device heights and widths there really are. I sort of got decent results with trial and error and by separating width-dependent values from height-dependent ones, but there has to be a better way. What is your preferred workflow for making a layout responsive?

# Tasks

- [x] File structure, assets
- [x] HTML structure
- [x] Mobile dropdown menu functionality
- [x] Mobile styling
- [x] Desktop dropdown menu functionality
- [x] Desktop styling
- [ ] Optional: 4K styling
- [x] Responsive mobile scaling
- [x] Responsive desktop scaling
- [ ] Utopia fluid scaling
- [ ] Optional: animate 
- [ ] Optional: optimize performance (display:none -> visibility:hidden, etc.)
- [ ] Optional: streamline menu structure and CSS
- [ ] Convert all px values to rem or vw
- [x] Search all files for leftover "TODO" comments, fix related issues
- [x] Cleanup + comment JS, purge+minify CSS, remove unused fonts
- [x] Host on Pages
- [x] Write finalized README.md

