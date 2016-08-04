var Cube_3x3 = function(puzzle){
  this.faces = ['u','f','d','l','r','b'];

  this.moveArray = {
    'u': ['U','U\'','U2'],
    'f': ['F','F\'','F2'],
    'd': ['D','D\'','D2'],
    'l': ['L','L\'','L2'],
    'r': ['R','R\'','R2'],
    'b': ['B','B\'','B2']
  };

  this.nextAllowedMove = {
    'u': ['F','F\'','F2','B','B\'','B2','L','L\'','L2','R','R\'','R2'],
    'f': ['L','L\'','L2','R','R\'','R2','U','U\'','U2','D','D\'','D2'],
    'd': ['F','F\'','F2','B','B\'','B2','L','L\'','L2','R','R\'','R2'],
    'l': ['F','F\'','F2','B','B\'','B2','U','U\'','U2','D','D\'','D2'],
    'r': ['F','F\'','F2','B','B\'','B2','U','U\'','U2','D','D\'','D2'],
    'b': ['L','L\'','L2','R','R\'','R2','U','U\'','U2','D','D\'','D2'],
  };

  return this;
}

var Cube_4x4 = function(puzzle){
  this.faces = ['U','F','D','L','R','B','u','f','d','l','r','b'];

  this.moveArray = {
    'u': ['U','U\'','U2'],
    'f': ['F','F\'','F2'],
    'd': ['D','D\'','D2'],
    'l': ['L','L\'','L2'],
    'r': ['R','R\'','R2'],
    'b': ['B','B\'','B2'],

    'uu': ['u','u\'','u2'],
    'ff': ['f','f\'','f2'],
    'dd': ['d','d\'','d2'],
    'll': ['l','l\'','l2'],
    'rr': ['r','r\'','r2'],
    'bb': ['b','b\'','b2']
  };

  this.nextAllowedMove = {
    'u': ['F','F\'','F2','B','B\'','B2','L','L\'','L2','R','R\'','R2'],
    'f': ['L','L\'','L2','R','R\'','R2','U','U\'','U2','D','D\'','D2'],
    'd': ['F','F\'','F2','B','B\'','B2','L','L\'','L2','R','R\'','R2'],
    'l': ['F','F\'','F2','B','B\'','B2','U','U\'','U2','D','D\'','D2'],
    'r': ['F','F\'','F2','B','B\'','B2','U','U\'','U2','D','D\'','D2'],
    'b': ['L','L\'','L2','R','R\'','R2','U','U\'','U2','D','D\'','D2'],
  };

  return this;
}

var Scramble = {
  ALLOWED_MOVES_LENGTH: 12,
  ALLOWED_TURNS_LENGTH: 3,

  cube: {},

  randint: function(a, b){
    var lower = Math.min(a, b);
    var upper = Math.max(a, b);
    var diff = upper - lower;

    return Math.floor((Math.random() * (diff + 1)) + lower);
  },

  random_move: function(){
    var random_number = this.randint(0, this.ALLOWED_TURNS_LENGTH - 1);
    var random_face = this.cube.faces[this.randint(0, this.cube.faces.length - 1)];

    return this.cube.moveArray[random_face][random_number];
  },

  random_nextAllowedMove: function(current_move){
    var random_number = this.randint(0, this.ALLOWED_MOVES_LENGTH - 1)
    var move_type;

    for(var key in this.cube.moveArray){
      if(this.cube.moveArray[key].indexOf(current_move) != -1){
        move_type = key;
      }
    }

    return this.cube.nextAllowedMove[move_type][random_number];
  },

  get_random_moves: function(cube, requested_moves){
    this.cube = cube;

    var move_count = requested_moves;
    var current_move = this.random_move();
    var moves = [];

    for (var i = 0; i < move_count; i++) {
       moves.push(current_move + ' ');
       current_move = this.random_nextAllowedMove(current_move);
    }

    return moves;
  }
}
