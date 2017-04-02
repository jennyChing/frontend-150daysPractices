$(document).ready(function() {
  var x = "x";
  var o = "o";
  var turns = 0;

  var sq1 = $('#sq1');
  var sq2 = $('#sq2');
  var sq3 = $('#sq3');
  var sq4 = $('#sq4');
  var sq5 = $('#sq5');
  var sq6 = $('#sq6');
  var sq7 = $('#sq7');
  var sq8 = $('#sq8');
  var sq9 = $('#sq9');

  $('.square').on('click', function() {
    if (sq1.hasClass('o')&&sq2.hasClass('o')&&sq3.hasClass('o') ||
        sq4.hasClass('o')&&sq5.hasClass('o')&&sq6.hasClass('o') ||
        sq7.hasClass('o')&&sq8.hasClass('o')&&sq9.hasClass('o') ||
        sq1.hasClass('o')&&sq4.hasClass('o')&&sq7.hasClass('o') ||
        sq2.hasClass('o')&&sq5.hasClass('o')&&sq8.hasClass('o') ||
        sq3.hasClass('o')&&sq6.hasClass('o')&&sq9.hasClass('o') ||
        sq1.hasClass('o')&&sq5.hasClass('o')&&sq9.hasClass('o') ||
        sq3.hasClass('o')&&sq5.hasClass('o')&&sq7.hasClass('o')
      ) {
        alert('Winner is o!');
    } else if (sq1.hasClass('x')&&sq2.hasClass('x')&&sq3.hasClass('x') ||
        sq4.hasClass('x')&&sq5.hasClass('x')&&sq6.hasClass('x') ||
        sq7.hasClass('x')&&sq8.hasClass('x')&&sq9.hasClass('x') ||
        sq1.hasClass('x')&&sq4.hasClass('x')&&sq7.hasClass('x') ||
        sq2.hasClass('x')&&sq5.hasClass('x')&&sq8.hasClass('x') ||
        sq3.hasClass('x')&&sq6.hasClass('x')&&sq9.hasClass('x') ||
        sq1.hasClass('x')&&sq5.hasClass('x')&&sq9.hasClass('x') ||
        sq3.hasClass('x')&&sq5.hasClass('x')&&sq7.hasClass('x')
      ) {
        alert('Winner is x!');
    } else if (turns == 9) {
      alert('Tie Game!');
    } else if ($(this).hasClass('disabled')){
      alert('This is already filled!');
    } else if (turns % 2 == 0) {
      turns++;
      $(this).text(o);
      $(this).addClass('disable o');
      if (sq1.hasClass('o')&&sq2.hasClass('o')&&sq3.hasClass('o') ||
        sq4.hasClass('o')&&sq5.hasClass('o')&&sq6.hasClass('o') ||
        sq7.hasClass('o')&&sq8.hasClass('o')&&sq9.hasClass('o') ||
        sq1.hasClass('o')&&sq4.hasClass('o')&&sq7.hasClass('o') ||
        sq2.hasClass('o')&&sq5.hasClass('o')&&sq8.hasClass('o') ||
        sq3.hasClass('o')&&sq6.hasClass('o')&&sq9.hasClass('o') ||
        sq1.hasClass('o')&&sq5.hasClass('o')&&sq9.hasClass('o') ||
        sq3.hasClass('o')&&sq5.hasClass('o')&&sq7.hasClass('o')
      ) {
        alert('Winner is o!');
      }
    } else {
      turns++;
      $(this).text(x);
      $(this).addClass('disable x');
      if (sq1.hasClass('x')&&sq2.hasClass('x')&&sq3.hasClass('x') ||
        sq4.hasClass('x')&&sq5.hasClass('x')&&sq6.hasClass('x') ||
        sq7.hasClass('x')&&sq8.hasClass('x')&&sq9.hasClass('x') ||
        sq1.hasClass('x')&&sq4.hasClass('x')&&sq7.hasClass('x') ||
        sq2.hasClass('x')&&sq5.hasClass('x')&&sq8.hasClass('x') ||
        sq3.hasClass('x')&&sq6.hasClass('x')&&sq9.hasClass('x') ||
        sq1.hasClass('x')&&sq5.hasClass('x')&&sq9.hasClass('x') ||
        sq3.hasClass('x')&&sq5.hasClass('x')&&sq7.hasClass('x')
      ) {
        alert('Winner is x!');
      }
    }
    $('#reset').click(function() {
      $('.square').text('');
      $('.square').removeClass('disable');
      $('.square').removeClass('o');
      $('.square').removeClass('x');
      turns = 0;
    }) 
  });
});