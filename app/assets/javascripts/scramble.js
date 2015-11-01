var scramble = function (requested_moves) {

  var moveArray = [
    'U','U\'',
    'F','F\'',
    'D','D\'',
    'L','L\'',
    'R','R\'',
    'B','B\''
  ];

  var nextAllowedMove={
  'U':['F','F\'','B','B\'','L','L\'','R','R\''],
  'U\'':['F','F\'','B','B\'','L','L\'','R','R\''],
  'F':['L','L\'','R','R\'','U','U\'','D','D\''],
  'F\'':['L','L\'','R','R\'','U','U\'','D','D\''],
  'D':['F','F\'','B','B\'','L','L\'','R','R\''],
  'D\'':['F','F\'','B','B\'','L','L\'','R','R\''],
  'L':['F','F\'','B','B\'','U','U\'','D','D\''],
  'L\'':['F','F\'','B','B\'','U','U\'','D','D\''],
  'R':['F','F\'','B','B\'','U','U\'','D','D\''],
  'R\'':['F','F\'','B','B\'','U','U\'','D','D\''],
  'B':['L','L\'','R','R\'','U','U\'','D','D\''],
  'B\'':['L','L\'','R','R\'','U','U\'','D','D\'']
  }

  var randint = function (a, b) {
    var lower = Math.min(a, b);
    var upper = Math.max(a, b);
    var diff = upper - lower;
    return Math.floor((Math.random() * (diff + 1)) + lower);
  }

  var random_move = function () {
    var random_number = randint(0, 11);
    return moveArray[random_number];
  }

  var random_nextAllowedMove = function (move_type) {
    var random_number = randint(0, 7)
    return nextAllowedMove[move_type][random_number];
  }

  this.get_random_moves = function (j) {
    var move_count = j;
    var current_move = random_move();
    var moves = [];
    var i;
    for (i = 0; i < move_count; i++) {
       moves.push(current_move + ' ');
       current_move = random_nextAllowedMove(current_move);
    }
    return moves;
  }

}
