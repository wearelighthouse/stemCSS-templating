# stemCSS-templating
A minimal setup for templating simple HTML files and their styles with stemCSS

### Install
1. `$ npm i` installs NPM dependencies, and then clones [stemCSS from GitHub](https://github.com/wearelighthouse/stemCSS) into `assets/scss`.
2. Remove `/assets` from `.gitignore` if you're using this repository as a basis for a new project.

### Run
- `$ npm run build` to just compile assets into `/dist`.  
**OR**  
- `$ npm run watch` to spin up browsersync for live reloading.

### Contributing

stemCSS changes must be made [to that repo](https://github.com/wearelighthouse/stemCSS). You _can_ work on it within this project, by changing directory to `assets/scss`, and then adding or modifying it's remote.

E.g. if you have SSH access to the Lighthouse repos:
```
$ git remote set-url origin git@github.com:wearelighthouse/stemCSS.git
```

Or if you have a custom fork:
```
$ git remote set-url origin git@github.com:[YOUR_GITHUB_USERNAME]/stemCSS.git
```
