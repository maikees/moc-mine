# MOC Mine

A free Redmine theme for modern browsers.

![The MIT License](https://img.shields.io/badge/license-MIT-2989D8.svg) 


Compatible with Redmine 2.6+ and browsers: IE10+/Edge, latest Firefox and Google Chrome (others were not tested).

It's written in [SCSS]. It uses [normalize.css] and benefits from some parts of [Bootstrap][bootstrap-sass] like mixins, structure, and stuff.

## Main features

* Bigger, easier to read fonts,
* Github-like wiki content look,
* Sidebar moved to the left for better ergonomy,
* Coloring trackers links (on lists, issue pages and even in the wiki content),
* Highlighting issues priority on the list and on the issue page,
* Toggling sidebar visibility,
* Easy to customize via variables.

## How install it

To install MOC Mine, just download [.zip](https://github.com/maikees/moc-mine/archive/master.zip) and unpack it to your Redmine's `public/themes` folder.

Then go to Redmine > Administration > Settings > Display and select MOC-Mine from the list and save the changes.

## Plugins

This theme also features a new look for [Redmine Backlogs][redmine_backlogs] plugin. To install it, simply copy stylesheets from `moc-mine/plugins/redmine_backlogs` and overwrite files in `{redmine}/plugins/redmine_backlogs/assets/stylesheets` and restart Redmine.

Also, [Redmine Time Tracker][redmine_time_tracker] and [Redmine People][redmine_crm_people] plugins should look nice with MOC Mine.

## How to customize it

If you want to customize MOC-Mine to your needs, first, make sure that you have installed [node.js](http://nodejs.org/) and `npm` is available in your terminal.

Then, from the directory that contains MOC Mine run:

    npm install

Now all the dependencies should be ready to use. Run one more command:

    npm run watch

And now the grunt is watching for changes in files placed in `src/` folder. Just change what you need, and it'll run Sass preprocessor automatically.

Regrettably, optional file include is not possible in Sass, so I would recommend creating a new file, e.g. `src/sass/_custom-variables.scss` and importing it a the beginning of the `application.scss` file. That way all the variables with the `!default` flag could be overridden.

The path `src/sass/_custom-variables.scss` is added to `.gitignore` so it should make upgrading MOC Mine with keeping your changes rather painless, given that the only thing you changed in MOC Mine source was adding this one line with `@import "custom-variables";`.

If you need to customize styles for [Redmine Backlogs][redmine_backlogs] remember to include your `_custom-variables.scss` in `src/sass/plugins/redmine_backlogs/_common.scss`.

## License

This library is released under the [MIT license](https://github.com/maikees/moc-mine/blob/master/LICENSE).


## Maintained by

This library is maintained by [MOC SOLUÇÕES](http://mocsolucoes.com.br).


## Changelog

Latest (master):
Colors on top menu on #392c5e to #22477F.

Initial version

[version]:https://github.com/mrliptontea/PurpleMine2
