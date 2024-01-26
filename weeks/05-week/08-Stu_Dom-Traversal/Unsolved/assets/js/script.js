// Assemble: Create/select DOM elements
var rootEl = $('#root');

// TODO: Starting from the root element, `rootEl`, make all the background color for each box white.

$('#root').children('ul').children().css('background-color', '#fff');

// TODO: Starting from `rootEl`, create the jQuery statement that will add "O" to block the "X" from winning

$('#root').children('ul').eq(2).children('li').eq(0).text('O');;
