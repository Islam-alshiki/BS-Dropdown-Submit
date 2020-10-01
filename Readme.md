## Description
Use bootstrab dropdown as `<select>` to submit data form.

### Requimenrs 
* Bootstrab css
* Bootstrab js
* Jquery

### Versions
* [Bootstrab 3](./src/BS3) `npm i bs-dropdown-submit@1.3.0`
* [Bootstrab 4](./src/BS4) `npm i bs-dropdown-submit@1.4.0`

### How to use
Add `[name]` attribute to .dropdown div, Then plugin will use it to generate hidden `<input>` with this name, the value must be in .dropdown > ul > li > a `[value]`, the selected text will be shown in `<span class="inside"></span>` in the button see [Codepen](https://codepen.io/samo94/pen/rNaVjXy).
