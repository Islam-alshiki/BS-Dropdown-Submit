/**
 * @author Islam Alshiki
 * @abstract Use bootstrab dropdown as <select> to submit data form.
 * @description;
 Add [name] attribute to .dropdown div, plugin will use it to generate <input> hidden with this name, the value must be in .dropdown > div > a link [value], the selected text will be shown in  <span class="inside"></span> in the button
 * 
 **/
var dropdowns = $('.dropdown[name]');
if (dropdowns) {
    $(dropdowns).each(function (x, dropdown) {
        var dropdownName = $(dropdown).attr('name');
        var ul = $(dropdown).children('.dropdown-menu')[0];
        var btn = $(dropdown).children('.dropdown-toggle')[0];
        $('<span class="inside"></span>').appendTo(btn);
        $('<input type="hidden" id="' + dropdownName + '" value="" name="' + dropdownName + '" />').appendTo(dropdown);
        var listItems = $(ul).children('a');
        $(listItems).each(function (n, e) {
            var __x = $(e);
            $(__x).on('click', function (_e) {
                var me = $(_e.currentTarget);
                var mylist = $(me).parent();
                $(mylist).children('a.active').removeClass('active');
                var btn = $(me).parent().parent().children('.dropdown-toggle')[0];
                
                $(me).addClass('active');
                var val = $(me).attr('value');
                var text = $(me).text();

                $($(btn).children('span.inside')).children('.xx').remove();
                $('<span class="xx">' + text + '</span>').appendTo($(btn).children('span.inside'));
                if (val !== undefined) {
                    $('#' + dropdownName).val(val);
                }
            });
        });
        var activeSelector = $(dropdown).children('div.dropdown-menu').children('a.active')[0];
        if (activeSelector) {
            activeSelector.click();
        }else{
            var first = $(dropdown).children('div.dropdown-menu').children('a')[0];
            $(first).click();
        }
    });
}
