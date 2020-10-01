/**
 * @author Islam Alshiki
 * @abstract Use bootstrab dropdown as <select> to submit data form.
 * @description;
 Add [name] attribute to .dropdown div, plugin will use it to generate <input> hidden with this name, the value must be in .dropdown > ul > li > a link [value], the selected text will be shown in  <span class="inside"></span> in the button
 * 
 **/
var dropdowns = $('.dropdown[name]');
if (dropdowns) {
    $(dropdowns).each(function (x, dropdown) {
        var dropdownName = $(dropdown).attr('name');
        var ul = $(dropdown).children('ul')[0];
        $('<input type="hidden" id="' + dropdownName + '" value="" name="' + dropdownName + '" />').appendTo(dropdown);
        var listItems = $(ul).children('li');
        $(listItems).each(function (n, e) {
            var __x = $(e).children('a')[0];
            $(__x).on('click', function (_e) {
                var val = $(_e.currentTarget).attr('value');
                var text = $(_e.currentTarget).text();
                var btn = $(_e.currentTarget).closest('.dropdown').children('.dropdown-toggle')[0];
                $($(btn).children('span.inside')).children('.xx').remove();
                $('<span class="xx">' + text + '</span>').appendTo($(btn).children('span.inside'));
                if (val !== undefined) {
                    $('#' + dropdownName).val(val);
                }
            });
        });
        var activeSelector = $(dropdown).children('ul').children('li').children('a.active')[0];
        if (activeSelector) {
            activeSelector.click();
        } else {
            console.log('no');
        }
    });
}
