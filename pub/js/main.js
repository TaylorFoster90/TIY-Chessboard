function print(){
    var rowIdentifier = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    var i = 0;
    document.write('<table>');
    _.forEach(board, function(row){
        document.write("<tr>");
        var idNumber = 1;
        _.forEach(row, function(square){
            
            var squareLocation = rowIdentifier[i] + idNumber;
            document.write("<td id=" + squareLocation + ">" + square + "</td>")
                idNumber++;
        });
        i++;
        document.write("</tr>");
    });
    
    document.write('</table>');
    
}
 
var board = {};
board.a = {
    'one': '<span class="piece black rook"></span>',
    'two': '<span class="piece black knight"></span>',
    'three': '<span class="piece black bishop"></span>',
    'four': '<span class="piece black king"></span>',
    'five': '<span class="piece black queen"></span>',
    'six': '<span class="piece black bishop"></span>',
    'seven': '<span class="piece black knight"></span>',
    'eight': '<span class="piece black rook"></span>'
};
board.b = {
    'one': '<span class="piece black pawn"></span>',
    'two': '<span class="piece black pawn"></span>',
    'three': '<span class="piece black pawn"></span>',
    'four': '<span class="piece black pawn"></span>',
    'five': '<span class="piece black pawn"></span>',
    'six': '<span class="piece black pawn"></span>',
    'seven': '<span class="piece black pawn"></span>',
    'eight': '<span class="piece black pawn"></span>'
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
    'one': '<span class="piece white pawn"></span>',
    'two': '<span class="piece white pawn"></span>',
    'three': '<span class="piece white pawn"></span>',
    'four': '<span class="piece white pawn"></span>',
    'five': '<span class="piece white pawn"></span>',
    'six': '<span class="piece white pawn"></span>',
    'seven': '<span class="piece white pawn"></span>',
    'eight': '<span class="piece white pawn"></span>'
};
board.h = {
    'one': '<span class="piece white rook"></span>',
    'two': '<span class="piece white knight"></span>',
    'three': '<span class="piece white bishop"></span>',
    'four': '<span class="piece white king"></span>',
    'five': '<span class="piece white queen"></span>',
    'six': '<span class="piece white bishop"></span>',
    'seven': '<span class="piece white knight"></span>',
    'eight': '<span class="piece white rook"></span>'
};


print(board);
var moveCounter = 0;
function movePiece(){
        if(moveCounter == 0){
        var lContent = document.getElementById('g4').innerHTML;
        document.getElementById('g4').innerHTML = "";
        document.getElementById('e4').innerHTML = lContent;
        moveCounter++;
        }else if(moveCounter == 1){
        var lContent = document.getElementById('a7').innerHTML;
        document.getElementById('a7').innerHTML = "";
        document.getElementById('c6').innerHTML = lContent;
        moveCounter++;
        }else if(moveCounter == 2){
        var lContent = document.getElementById('g3').innerHTML;
        document.getElementById('g3').innerHTML = "";
        document.getElementById('e3').innerHTML = lContent;
        moveCounter++;
        }else if(moveCounter == 3){
        var lContent = document.getElementById('b5').innerHTML;
        document.getElementById('b5').innerHTML = "";
        document.getElementById('c5').innerHTML = lContent;
        moveCounter++;
        }else if(moveCounter == 4){
        var lContent = document.getElementById('g7').innerHTML;
        document.getElementById('g7').innerHTML = "";
        document.getElementById('f7').innerHTML = lContent;
        moveCounter++;
        }else if(moveCounter == 5){
        var lContent = document.getElementById('b4').innerHTML;
        document.getElementById('b4').innerHTML = "";
        document.getElementById('d4').innerHTML = lContent;
        moveCounter++;
        }else if(moveCounter == 6){
        var lContent = document.getElementById('h6').innerHTML;
        document.getElementById('h6').innerHTML = "";
        document.getElementById('g7').innerHTML = lContent;
        moveCounter++;
        }else if(moveCounter == 7){
        var lContent = document.getElementById('h7').innerHTML;
        document.getElementById('h7').innerHTML = "";
        document.getElementById('f6').innerHTML = lContent;
        moveCounter++;
        }
    }

//document.getElementById("button").onClick='movePiece()';
var btn = document.createElement("BUTTON");        
var t = document.createTextNode("NEXT MOVE");
btn.appendChild(t);                                
document.body.appendChild(btn);
btn.setAttribute("class", "movement");
btn.setAttribute("onClick", "movePiece()");


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