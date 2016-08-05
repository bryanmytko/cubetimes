var Cube_3x3 = function(){
  this.name = "3x3 Rubik's Cube",

  this.moves = [
    { 'name': 'R': 'moves': ['R','R\'','R2'], 'restricted': ['L'] },
    { 'name': 'L': 'moves': ['L','L\'','L2'], 'restricted': ['R'] },
    { 'name': 'U', 'moves': ['U','U\'','U2'], 'restricted': ['D'] },
    { 'name': 'D': 'moves': ['D','D\'','D2'], 'restricted': ['U'] },
    { 'name': 'F': 'moves': ['F','F\'','F2'], 'restricted': ['B'] },
    { 'name': 'B': 'moves': ['B','B\'','B2'], 'restricted': ['F'] }
  ];
}

var Cube_4x4 = function(){
  this.name = "4x4 Rubik's Cube",

  this.moves = [
    { 'name': 'R': 'moves': ['R','R\'','R2'], 'restricted': ['L', 'l'] },
    { 'name': 'L': 'moves': ['L','L\'','L2'], 'restricted': ['R', 'r'] },
    { 'name': 'U', 'moves': ['U','U\'','U2'], 'restricted': ['D', 'd'] },
    { 'name': 'D': 'moves': ['D','D\'','D2'], 'restricted': ['U', 'u'] },
    { 'name': 'F': 'moves': ['F','F\'','F2'], 'restricted': ['B', 'b'] },
    { 'name': 'B': 'moves': ['B','B\'','B2'], 'restricted': ['F', 'f'] },

    { 'name': 'r': 'moves': ['r','r\'','r2'], 'restricted': ['L', 'l'] },
    { 'name': 'l': 'moves': ['l','l\'','l2'], 'restricted': ['R', 'r'] },
    { 'name': 'u', 'moves': ['u','u\'','u2'], 'restricted': ['D', 'd'] },
    { 'name': 'd': 'moves': ['d','d\'','d2'], 'restricted': ['U', 'u'] },
    { 'name': 'f': 'moves': ['f','f\'','f2'], 'restricted': ['B', 'b'] },
    { 'name': 'b': 'moves': ['b','b\'','b2'], 'restricted': ['F', 'f'] }
  ];
}

var Scramble = function(cube){
  // ALLOWED_MOVES_LENGTH: 12,
  // ALLOWED_TURNS_LENGTH: 3,
  //
  // cube: {},
  //
  // randint: function(a, b){
  //   var lower = Math.min(a, b);
  //   var upper = Math.max(a, b);
  //   var diff = upper - lower;
  //
  //   return Math.floor((Math.random() * (diff + 1)) + lower);
  // },
  //
  // random_move: function(){
  //   var random_number = this.randint(0, this.ALLOWED_TURNS_LENGTH - 1);
  //   var random_face = this.cube.faces[this.randint(0, this.cube.faces.length - 1)];
  //
  //   return this.cube.moveArray[random_face][random_number];
  // },
  //
  // random_nextAllowedMove: function(current_move){
  //   var random_number = this.randint(0, this.ALLOWED_MOVES_LENGTH - 1)
  //   var move_type;
  //
  //   for(var key in this.cube.moveArray){
  //     if(this.cube.moveArray[key].indexOf(current_move) != -1){
  //       move_type = key;
  //     }
  //   }
  //
  //   return this.cube.nextAllowedMove[move_type][random_number];
  // },
  //
  // get_random_moves: function(cube, requested_moves){
  //   this.cube = cube;
  //
  //   var move_count = requested_moves;
  //   var current_move = this.random_move();
  //   var moves = [];
  //
  //   for (var i = 0; i < move_count; i++) {
  //      moves.push(current_move + ' ');
  //      current_move = this.random_nextAllowedMove(current_move);
  //   }
  //
  //   return moves;
  // }
}
