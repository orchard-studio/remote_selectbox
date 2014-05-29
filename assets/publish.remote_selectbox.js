/**
 * Publish Remote Select Box
 * 
 * @author: Deux Huit Huit
 * 
 */
(function ($,Symphony) {
	
	'use strict';
	
	var initOne = function () {
		var t = $(this);
		
		$.get(t.attr('data-url'), function (data) {
			if (!!data && !!data.length) {
				var options = [];
				var selectedValue = t.attr('data-value');
				var multiples = selectedValue.split(',');
				var required = ~~t.attr('data-required');
				
				if (required) {
					t.empty();
				}
								
				$.each(data, function (index, d) {
					var o = $('<option />')
						.attr('value', d.value)
						.text(d.text);
					$.each(multiples, function (i,e){
						if (e == d.value) {
							o.attr('selected', 'selected');
						}
					});
										
					options.push(o);
				});
				t.append(options);
				t.hasClass('autocomplete')? t.selectize({plugins: ['remove_button','restore_on_backspace']}):'';
			}
		});
	};
	
	var init = function (context) {
		$('#contents div.field-remote_selectbox select').each(initOne);
	};
	
	$(init);
	
})(jQuery);