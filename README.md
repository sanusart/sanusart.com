# sanusart.com

Rewrite of sanusart.com 

[ ![Codeship Status for sanusart/sanusart.com](https://www.codeship.io/projects/f5869670-2c57-0132-f651-725511a19204/status?branch=master)](https://www.codeship.io/projects/38803)

### Why?

It is time

### Using

- [jekyll](http://jekyllrb.com/)
- [scss](http://sass-lang.com/)
- [bourbon (for mixins)](http://bourbon.io/)
- [jquery](http://jquery.com/)
- [bower](http://bower.io/)
- [font-awesome (font)](http://fortawesome.github.io/Font-Awesome/)
- [spin cycle (font)](http://www.bvfonts.com/fonts/details.php?id=43)
- [codeship](https://www.codeship.io)

### Pre-build 

Run `$ bundle install`

Run `$ bourbon install --path=css`

Run `$ npm install` (this will execute `bower install` as _posInstall_ script)

### Build

Run `$ gulp`

### Dev

Run `$ gulp dev`