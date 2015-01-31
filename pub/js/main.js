function print(board){
    document.write('<table>');
    
    _.forEach(board, function(row, key){
        document.write("<tr>");
        _.forEach(row, function(square, k){
            document.write("<td>" + square + "</td>")
   
        });
        document.write("</tr>");
    });
    
    document.write('</table>');
    
}
 
var board = {};
board.a = {
    'one': '<span class="">&#9820;</span>',
    'two': '<span class="">&#9822;</span>',
    'three': '<span class="">&#9821;</span>',
    'four': '<span class="">&#9819;</span>',
    'five': '<span class="">&#9818;</span>',
    'six': '<span class="">&#9821;</span>',
    'seven': '<span class="">&#9822;</span>',
    'eight': '<span class="">&#9820;</span>'
};
board.b = {
    'one': '&#9823;',
    'two': '&#9823;',
    'three': '&#9823;',
    'four': '&#9823;',
    'five': '&#9823;',
    'six': '&#9823;',
    'seven': '&#9823;',
    'eight': '&#9823;'
};
board.c = {
    'one': '',
    'two': '',
    'three': '',
    'four': '',
    'five': '',
    'six': '',
    'seven': '',
    'eight': ''
};
board.d = {
    'one': '',
    'two': '',
    'three': '',
    'four': '',
    'five': '',
    'six': '',
    'seven': '',
    'eight': ''
};
board.e = {
    'one': '',
    'two': '',
    'three': '',
    'four': '',
    'five': '',
    'six': '',
    'seven': '',
    'eight': ''
};
board.f = {
    'one': '',
    'two': '',
    'three': '',
    'four': '',
    'five': '',
    'six': '',
    'seven': '',
    'eight': ''
};
board.g = {
    'one': '&#9823;',
    'two': '&#9823;',
    'three': '&#9823;',
    'four': '&#9823;',
    'five': '&#9823;',
    'six': '&#9823;',
    'seven': '&#9823;',
    'eight': '&#9823;'
};
board.h = {
    'one': '<span class="">&#9820;</span>',
    'two': '<span class="">&#9822;</span>',
    'three': '<span class="">&#9821;</span>',
    'four': '<span class="">&#9819;</span>',
    'five': '<span class="">&#9818;</span>',
    'six': '<span class="">&#9821;</span>',
    'seven': '<span class="">&#9822;</span>',
    'eight': '<span class="">&#9820;</span>'
};

print(board);
//
//// will house references to all pieces
//var pieces = [];
//
//// piece constructor. when used like new piece() it will 
//// make a new instance of a piece
//var piece = function(type, color, x, y) {
//    this.type = type;
//    this.color = color;
//    this.x = x;
//    this.y = y;
//    this.assignCell = function(x, y) {
//        board[x][y] = this;
//    };
//};
//
//
//var generatePieces = function() {
//    // have 8 * 8 loop make all 32 pieces
//    
//    // rooks
//    pieces.push(new piece('rook', 'white', 0, 0));
//    pieces.push(new piece('rook', 'white', 7, 0));
//    pieces.push(new piece('rook', 'black', 0, 7));
//    pieces.push(new piece('rook', 'black', 7, 7));
//
//    pieces.push(new piece('knight', 'white', 1, 0));
//    pieces.push(new piece('knight', 'white', 6, 0));
//    pieces.push(new piece('knight', 'black', 7, 6));
//    pieces.push(new piece('knight', 'black', 7, 1));
//
//    // do this for the rest of the pieces
//    pieces.push(new piece('bishop', 'white', 0, 0));
//    pieces.push(new piece('bishop', 'white', 7, 0));
//    pieces.push(new piece('bishop', 'black', 0, 7));
//    pieces.push(new piece('bishop', 'black', 7, 7));
//
//};
//
//var generateBoard = function() {
//    // have 8 * 8 make array "2-dimensional matrix"
//    // during this phase you will simply make a large matrix full of board references
//    // alternatively do
//    pieces[0].assignCell(0,0);
//    
//    board[0] = [];
//    board[0][0] = pieces[0];
//};

//var renderBoard = function() {
//    // have 8 * 8 make array "2-dimensional matrix"
//    
//};
//
//var renderPieces = function() {
//    // traverse entire board and make sure each piece is on the right cell
//    switch(peice.type) {
//        case "rook" : 
//            // render a rook
//            // make sure to assign a class of .rook-white
//            break;
//    }
//};

//function print(board){
//    document.write('<table>');
//    
//    var cellOpen = "<td>";
//    var cellClose = "</td>";
//    var black = ["&#9812;","&#9813;","&#9814;"];
//    var i = 0
//    
//    
//    var row1 = _.forEach(black, function(){
//        return black[i];
//        i++;
//    });
//    
//    _.times(8, function(){
//        document.write("<tr>");
//        _.times(8, function(){
//            document.write(cellOpen + row1 + cellClose);
//        });
//        document.write("</tr>");
//    });
//    
//    
//     document.write('</table>');
//}
//
//print();

//document.write(
//    '<table>',
//    '<tr>', '<td>cell1', '</td>', '<td>cell2', '</td>', '</tr>',
//    '</table>'
//);
//   





// 
//

// var board = [
// [' ','N','B','Q','K','B','N','R'],
// ['P','P','P','P','P','P','P','P'],
// [' ',' ',' ',' ',' ',' ',' ',' '],
// [' ',' ',' ',' ',' ',' ',' ',' '],
// [' ',' ',' ',' ',' ',' ',' ',' '],
// [' ',' ',' ',' ',' ',' ',' ',' '],
// ['p','p','p','p','p','p','p','p'],
// ['r','n','b','q','k','b','n','r'],
// ];
//
//var printBoard = function() {console.log(board.join('\n') + '\n\n');}
//
//document.write(board);
//
////
////
// function print(board){
//   // Before any rows are printed, print the `<table>`...
//   console.log('<table class="chessboard">');
//
//     _.forEach(board, function(row, rank){
//        
//       // Before any cells are printed...
//
//       _.forEach(row, function(square, file){
//          
//           // In here, we have `rank`, `file`, and `square`...
//
//       }); // END foreach(row)
//
//       // After all the cells are printed...
//
//   }); // END foreach(board)
//    
//   // After all the rows are printed...
//   console.log('</table> <!-- .chessboard -->');
// } // END print
//
// console.log(print());
//
//

// function move (toY, toX, fromY, fromX){
//     toX = toX -1;
//     toY = toY - 1;
//     fromX = fromX - 1;
//     fromY = fromY -1;
//     board[toY][toX] = board[fromY][fromX];
//     board[fromY][fromX] = ' ';
//     printBoard();
// }
//
// // toY X frmY X
// move(5, 5, 7, 5);
// move(4, 4, 2, 4);
// move(4, 4, 5, 5);
// move(3, 8, 2, 8);
// move(6, 2, 7, 2);

//  This is the code to manually move each piece, which the code block of the function move was based on.
//
//  move kings's pawn forward 2
// board[4][4] = board[6][4];
// board[6][4] = ' ';
// console.log(board.join('\n'));
//
// console.log('\n\n');
//
//
// board[3][3] = board[1][3];
// board[1][3] = ' ';
// console.log(board.join('\n'));
//
// console.log('\n\n');
//
// board[3][3] = board[4][4];
// board[4][4] = ' ';
// console.log(board.join('\n'));