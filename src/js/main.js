/**
  * название функции
  *
  * @param {number} first - первое число
  * @returns {number}
  */

 jQuery(function($) {
  $('input[type="file"]').on('change', function() {
    console.log('okeee')
    if ($(this).val()) {
         var filename = $(this).val();
         $('.file-name').html(filename);
    }
  });
});
