# Tasks

- [x] File structure, assets
- [x] HTML structure
- [x] Mobile dropdown menu functionality
- [x] Mobile styling
- [x] Desktop dropdown menu functionality
- [x] Desktop styling
- [ ] Optional: 4K styling
- [ ] Utopia fluid scaling
- [ ] Optional: animate 
- [ ] Optional: optimize performance (display:none -> visibility:hidden, etc.)
- [ ] Optional: streamline menu structure and CSS, it's a mess right now
- [ ] Convert all px values to rem or vw
- [ ] Search all files for leftover "TODO" comments, fix related issues
- [ ] Cleanup + comment JS, purge+minify CSS, remove unused fonts
- [x] Host on Pages
- [ ] Write finalized README.md

# Link to demo on Pages (representing current status of the project)

https://osato28.github.io/intro-dropdown-navigation/

It is advised to view this site in viewport <420px, as it is not yet adapted to larger screens.

# Questions for others doing this challenge:

- Is there a better way to make all images in the client-logos section look equal? Making them all equal width or height results in an uneven look, so I had to resort to magic numbers (linked to vw to make them scale) and justify-content: space-between.

- The way main menu's positioning in the mobile version is done (absolute positioning for the main menu and the open/close icon, then a magical-number margin-top on the first non-icon element so that it gets placed below the icon) is a terrible mess. 
Does anyone know a better way to do it?

- ::after and ::before elements get shifted vertically when display:inline-block is used to display SVG elements. 
Does anyone know why it's happening? 
Is there a more elegant way to fix it than using a negative margin?