var Cube = function(scramble_count = null){
  this.scramble_count = scramble_count || 6;
  this.name = "Generic 3-D Puzzle";

  this.faces = [
    { 'name': 'R', 'turns': ['R','R\'','R2'], 'restricted': ['L'] },
    { 'name': 'L', 'turns': ['L','L\'','L2'], 'restricted': ['R'] },
    { 'name': 'U', 'turns': ['U','U\'','U2'], 'restricted': ['D'] },
    { 'name': 'D', 'turns': ['D','D\'','D2'], 'restricted': ['U'] },
    { 'name': 'F', 'turns': ['F','F\'','F2'], 'restricted': ['B'] },
    { 'name': 'B', 'turns': ['B','B\'','B2'], 'restricted': ['F'] }
  ];

  this.scramble = function(){
    var moves = [],
        prev_face,
        curr_face,
        curr_move;

    for(var i = 0; i < this.scramble_count; i++){
      curr_face = this.random_face(prev_face);
      curr_move = this.random_move(curr_face);

      moves.push(curr_move);
      prev_face = curr_face;
    }

    return moves.join(', ');
  };

  this.randint = function(a, b){
    var lower = Math.min(a, b);
    var upper = Math.max(a, b);
    var diff = upper - lower;

    return Math.floor((Math.random() * (diff + 1)) + lower);
  };

  this.random_face = function(prev){
    var random_face;

    do {
      random_face = this.randint(0, this.faces.length - 1);
    } while(!this.is_valid_face(this.faces[random_face], prev))

    return this.faces[random_face];
  };

  this.random_move = function(face){
    return face.turns[this.randint(0, face.turns.length - 1)];
  };

  this.is_valid_face = function(curr, prev){
    var previous_face = prev || {};
    return (curr.name !== previous_face.name)
      && (curr.restricted.indexOf(previous_face.name) === -1);
  }
};

var Cube_3x3 = function(){
  var name = "3x3 Rubik's Cube";

  var moves = [
    { 'name': 'R', 'moves': ['R','R\'','R2'], 'restricted': ['L'] },
    { 'name': 'L', 'moves': ['L','L\'','L2'], 'restricted': ['R'] },
    { 'name': 'U', 'moves': ['U','U\'','U2'], 'restricted': ['D'] },
    { 'name': 'D', 'moves': ['D','D\'','D2'], 'restricted': ['U'] },
    { 'name': 'F', 'moves': ['F','F\'','F2'], 'restricted': ['B'] },
    { 'name': 'B', 'moves': ['B','B\'','B2'], 'restricted': ['F'] }
  ];
};

var Cube_4x4 = function(){
  var name = "4x4 Rubik's Cube";

  var moves = [
    { 'name': 'R', 'moves': ['R','R\'','R2'], 'restricted': ['L', 'l'] },
    { 'name': 'L', 'moves': ['L','L\'','L2'], 'restricted': ['R', 'r'] },
    { 'name': 'U', 'moves': ['U','U\'','U2'], 'restricted': ['D', 'd'] },
    { 'name': 'D', 'moves': ['D','D\'','D2'], 'restricted': ['U', 'u'] },
    { 'name': 'F', 'moves': ['F','F\'','F2'], 'restricted': ['B', 'b'] },
    { 'name': 'B', 'moves': ['B','B\'','B2'], 'restricted': ['F', 'f'] },

    { 'name': 'r', 'moves': ['r','r\'','r2'], 'restricted': ['L', 'l'] },
    { 'name': 'l', 'moves': ['l','l\'','l2'], 'restricted': ['R', 'r'] },
    { 'name': 'u', 'moves': ['u','u\'','u2'], 'restricted': ['D', 'd'] },
    { 'name': 'd', 'moves': ['d','d\'','d2'], 'restricted': ['U', 'u'] },
    { 'name': 'f', 'moves': ['f','f\'','f2'], 'restricted': ['B', 'b'] },
    { 'name': 'b', 'moves': ['b','b\'','b2'], 'restricted': ['F', 'f'] }
  ];
};
