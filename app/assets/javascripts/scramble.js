var Scramble = {
  ALLOWED_MOVES_LENGTH : 12,
  ALLOWED_TURNS_LENGTH : 3,

  faces : ['u','f','d','l','r','b'],

  moveArray : {
    'u': ['U','U\'','U2'],
    'f': ['F','F\'','F2'],
    'd': ['D','D\'','D2'],
    'l': ['L','L\'','L2'],
    'r': ['R','R\'','R2'],
    'b': ['B','B\'','B2']
  },

  /* I think this can be more clearly defined using an inverse pattern on the
   * moveArray. I.e, 'u' face inverse is 'd', so allow all values from
   * moveArray except self & inverse. This would make expanding to larger cubes
   * much easier by not requiring nextAllowedMove to be stricly defined. */
  nextAllowedMove : {
    'u': ['F','F\'','F2','B','B\'','B2','L','L\'','L2','R','R\'','R2'],
    'f': ['L','L\'','L2','R','R\'','R2','U','U\'','U2','D','D\'','D2'],
    'd': ['F','F\'','F2','B','B\'','B2','L','L\'','L2','R','R\'','R2'],
    'l': ['F','F\'','F2','B','B\'','B2','U','U\'','U2','D','D\'','D2'],
    'r': ['F','F\'','F2','B','B\'','B2','U','U\'','U2','D','D\'','D2'],
    'b': ['L','L\'','L2','R','R\'','R2','U','U\'','U2','D','D\'','D2'],
  },

  randint : function(a, b) {
    var lower = Math.min(a, b);
    var upper = Math.max(a, b);
    var diff = upper - lower;
    return Math.floor((Math.random() * (diff + 1)) + lower);
  },

  random_move : function() {
    var random_number = this.randint(0, this.ALLOWED_TURNS_LENGTH - 1);
    var random_face = this.faces[this.randint(0, this.faces.length - 1)];
    return this.moveArray[random_face][random_number];
  },

  random_nextAllowedMove : function(current_move) {
    var random_number = this.randint(0, this.ALLOWED_MOVES_LENGTH - 1)
    var move_type;

    for(var key in this.moveArray){
      if(this.moveArray[key].indexOf(current_move) != -1){
        move_type = key;
      }
    }

    return this.nextAllowedMove[move_type][random_number];
  },

  get_random_moves : function (requested_moves) {
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
