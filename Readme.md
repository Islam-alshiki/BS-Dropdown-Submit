## Description
Use bootstrab dropdown as `<select>` to submit data form.

### Requirements 
* Bootstrab css
* Bootstrab js
* Jquery

### Versions
* [Bootstrab 3](./src/BS3) `npm i bs-dropdown-submit@1.3.0`
* [Bootstrab 4](./src/BS4) `npm i bs-dropdown-submit@1.4.0`
- [Bootstrab 3 & 4 files](./src/BS4) `npm i bs-dropdown-submit`

### Installation
```
/*
    after 
    * Jquery
    * Bootstrab js
*/
<script src="pathToPlugin/bs4-dropdown-submit-min.js">
```
Its run automatically after you configure it as shown in How _to_use section


### How to use
Add `[name]` attribute to .dropdown div, Then plugin will use it to generate hidden `<input>` with this name, the value must be in .dropdown > ul > li > a `[value]`, the selected text will be shown in `<span class="inside"></span>` in the button see [Codepen](https://codepen.io/samo94/pen/rNaVjXy).
* add name attriute (sort)
* add value attribute in link tag .dropdown > .dropdown-menu > a
```
<div class="dropdown" name="sort" >
    <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        ترتيب
        |
        
    </button>
    <div class="dropdown-menu">
        <a class="dropdown-item" href="#" value="1">المزاد ( الأقرب أولاً)</a>
        <a class="dropdown-item" href="#" value="2">المزاد(الأبعد أولاً)</a>
        <a class="dropdown-item" href="#" value="3">(الأقل أولاً)</a>
        <a class="dropdown-item" href="#" value="4">السعر (الأعلى أولاً)</a>
    </div>
</div>
```