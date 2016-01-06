/**
 Tiny script to replace select name with selected option name 
 (c) 2016 Silpion Tomasz Gregorczyk
 optionnames.js may be freely distributed under the MIT license.
*/
(function($) {
    jQuery.fn.optionnames = function() {
        $(this).change(function() {
            var name = $(this).children(":selected").attr("name");
            $(this).attr('name', name);
        });
        return this;
    };
})(jQuery);

jQuery("select").optionnames();
