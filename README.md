# Middleman Bootstrap4 Template (as of April 4, 2019)

We tried to provide an updated template, based on the one from Le Wagon (https://github.com/lewagon/middleman-template), permitting the use of Bootstrap 4 on Middleman, with just the right gems and config in order to deploy it easily.

## Getting Started

In anyway, if it is you first time with Middleman you should go over their documentation: 
https://middlemanapp.com/
Really well done and easy to understand.

### What we did

We used this opportunity to correct some bugs we were dealing with for deployement:

* For Bootstrap 4 -> Some gems have been removed and added, application.scss & application.js have been updated,
* We changed the actionview gem version to prevent a critical error from GitHub,
* Minify_javascipt has been commented (did not work with the new config when trying to build for deployment),
* The js_include_tag has been moved after the yeild in the layout.html (more convenient, prevent some errors bugs),
* We added some comments here and there to help you on some subjects we encountered like i18n).

Be warned, as we better like .svg files to Fontawesome, the gem/css config are not included in this template.

## Authors

* **Benoit Calin** - *Initial work* - [LeWagon](https://github.com/lewagon/middleman-template)
