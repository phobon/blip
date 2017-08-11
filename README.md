# blip
Blip is a lightweight, visually-semantic, functional css framework built in ~~less~~ sass

## why is this a thing?
I've spent many years trying to manage extreme amounts of custom css in enterprise situations and become incredibly frustrated with trying to not only **maintain** an incredibly complex cascade, but also **teach** others how the thing actually works, and it's completely unsustainable. I was just so sick of writing new css, and then I read an article that really resonated with me:

http://mrmrs.io/writing/2016/03/24/scalable-css/

It was like a bolt of lightning hitting me right between the eyes and led me to read a lot of things by [mrmrs](https://twitter.com/mrmrs_) which led me to a project he created: [Tachyons](http://tachyons.io). After getting myself past the years of scar-tissue of writing complex, external cascade and embracing this _atomic_ style of styling, I truly believe it is one of the most important, transformative patterns to come to the web in many years.

I created **blip** as an academic exercise, mainly because I'm a software developer and we always want to reinvent the wheel, but also to give me a greater understanding the pattern and of styling in general. 

**I like to see this as a tribute to one of the most transformative and positive styling patterns on the web**

## installation

**Using your favourite package manager:**

> npm install phobon-blip

> yarn add phobon-blip

**Including in a web page:**

* bin\blip.full.min.css (autoprefixed and minified)
* bin\blip.cutdown.min.css (autoprefixed and minified)

* bin\colours\*.min.css (autoprefixed and minified)

## extending

**Build your own version of blip:**

The simplest way to compile your own version of blip is to copy _blip-full.scss_ to wherever you're compiling your Sass, extend and prune the mixins and go from there.

**Structure:**

* Mixins found in the _core.scss_ imports will generate atomic classes
* Mixins found in the _mixins.scss_ imports are fillers
* _core.scss_ requires _mixins.scss_ but not the other way around
* _variables.scss_ are not required, but make things a lot simpler
