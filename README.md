# Cheatsheet
A UI component from [Upstage](http://github.com/upstage/upstage).

> Cheatsheet boilerplate. Created for the new [lesscss.org](http://lesscss.org) website (planned for later this year!), based on "[Shopify Cheat Sheet](http://cheat.markdunkley.com/)" by [Mark Dunkley](https://twitter.com/markdunkley).

### See the [live demo][demo]


## Getting Started
If you want to modify this component, you may directly edit the source files: `.hbs` (Handlebars) templates, `.json` data, and `.less`. Or if you prefer you can grab the compiled HTML and CSS from `gh-pages` branch.

To begin working with Cheat Sheet source files:

  * Run `npm install` to install the depencies listed in `package.json`
  * Run `grunt` to build the entire project
  * Run `grunt assemble` to build the templates
  * Run `grunt less` to compile LESS files to CSS
  * Run `grunt watch` to watch source files for changes and re-build continuously

**Templates** for the cheatsheet are found here: `src/templates/**/*.hbs`.

**Styles** for the cheatsheet are found here: `src/styles/cheatsheet.less`.

**Data** for the cheatsheet is found here: `src/data/cheatsheet.json`.


## Contributions
Contributions welcome, and to make feature requests or report bugs, visit the [Issues][issues].

To request a _new component_, please visit the [Upstage Issues][upstage-issues] page on GitHub.


#### Grunt.js + Assemble
Upstage uses [Assemble](http://github.com/assemble/assemble), a Grunt.js plugin that makes it dead simple to build components with HTML, client-side templates, externalized data (JSON/YAML), and LESS.

#### Bootstrap Drop-in
As with most Upstage components, _cheatsheet_ is designed as a drop-in for [Bootstrap](http://twitter.github.com/bootstrap), but it can also be used on it's own.


## Author
+ Jon Schlinkert, core team member for [LESS](http://github.com/cloudhead/less.js)
+  (@[jonschlinkert](http://github.com/jonschlinkert))


## License
MIT Licensed


[demo]: http://github.com/upstage/cheatsheet/
[issues]: http://github.com/upstage/cheatsheet/issues
[upstage-issues]: http://github.com/upstage/upstage/issues