# toolkit-cheatsheet

> Cheatsheet boilerplate. Created for the new [lesscss.org](http://lesscss.org) website (planned for later this year!), based on "[Shopify Cheat Sheet](http://cheat.markdunkley.com/)" by [Mark Dunkley](https://twitter.com/markdunkley).


Live [demo here](http://assemble.github.com/toolkit-cheatsheet/).

## Getting Started
If you want to modify this component, you may directly edit the source files: `.hbs` (Handlebars) templates, `.json` data, and `.less`. Or if you prefer you can grab the compiled HTML and CSS from `gh-pages` branch.

To begin working with source files:

  * Run `npm install` to install the depencies listed in `package.json`
  * Run `grunt` to build the entire project
  * Run `grunt assemble` to build the templates
  * Run `grunt less` to compile LESS files to CSS
  * Run `grunt watch` to watch source files for changes and re-build continuously


**Templates** for the cheatsheet are found here: `src/templates/**/*.hbs`.
**Styles** for the cheatsheet are found here: `src/styles/cheatsheet.less`
**Data** for the cheatsheet is found here: `src/data/cheatsheet.json`


## TODO:
Since this is a new component we still have some housekeeping to do:

  * Clean out unnecessary development styles and remove unused `.less` components
  * Refactor and simplify grid and data model
  * Add a `.yml` version of the cheatsheet data.
  * Documentation to show how to create the cheatsheet from scratch


## Tools

#### Grunt.js + Assemble
Toolkit uses [Assemble](http://github.com/assemble/assemble), a Grunt.js plugin that makes it dead simple to build component with templates, external data

#### Bootstrap Drop-in
As with most Toolkit components, _cheatsheet_ is designed as a drop-in for [Bootstrap](http://twitter.github.com/bootstrap), but it can also be used on it's own.



## Author
+ [jonschlinkert](http://github.com/jonschlinkert)


## License
MIT