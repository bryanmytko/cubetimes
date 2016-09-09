var Cube = function(cube, scramble_count){

  this.cube = window[cube];

  this.name = this.cube.name || 'Generic 3-D Puzzle';

  this.final = this.cube.final;

  this.faces = this.cube.faces || [
    { 'name': 'R', 'turns': ['R','R\'','R2'], 'restricted': ['L'] },
    { 'name': 'L', 'turns': ['L','L\'','L2'], 'restricted': ['R'] },
    { 'name': 'U', 'turns': ['U','U\'','U2'], 'restricted': ['D'] },
    { 'name': 'D', 'turns': ['D','D\'','D2'], 'restricted': ['U'] },
    { 'name': 'F', 'turns': ['F','F\'','F2'], 'restricted': ['B'] },
    { 'name': 'B', 'turns': ['B','B\'','B2'], 'restricted': ['F'] }
  ];

  this.scramble_count = scramble_count || 6;

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

    if(this.final){
      moves.push(this.final[this.randint(0,this.final.length - 1)]);
    }

    return moves.join(' ');
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

var cube_2x2 = {
  'name': '2x2 Rubik\'s Cube',

  'faces': [
    { 'name': 'R', 'turns': ['R','R\'','R2'], 'restricted': ['L'] },
    { 'name': 'L', 'turns': ['L','L\'','L2'], 'restricted': ['R'] },
    { 'name': 'U', 'turns': ['U','U\'','U2'], 'restricted': ['D'] },
    { 'name': 'D', 'turns': ['D','D\'','D2'], 'restricted': ['U'] },
    { 'name': 'F', 'turns': ['F','F\'','F2'], 'restricted': ['B'] },
    { 'name': 'B', 'turns': ['B','B\'','B2'], 'restricted': ['F'] }
  ]
}

var cube_3x3 = {
  'name': '3x3 Rubik\'s Cube',

  'faces': [
    { 'name': 'R', 'turns': ['R','R\'','R2'], 'restricted': ['L'] },
    { 'name': 'L', 'turns': ['L','L\'','L2'], 'restricted': ['R'] },
    { 'name': 'U', 'turns': ['U','U\'','U2'], 'restricted': ['D'] },
    { 'name': 'D', 'turns': ['D','D\'','D2'], 'restricted': ['U'] },
    { 'name': 'F', 'turns': ['F','F\'','F2'], 'restricted': ['B'] },
    { 'name': 'B', 'turns': ['B','B\'','B2'], 'restricted': ['F'] }
  ]
}

var cube_4x4 = {
  'name': '4x4 Rubik\'s Cube',

  'faces': [
    { 'name': 'R', 'turns': ['R','R\'','R2'], 'restricted': ['L', 'l'] },
    { 'name': 'L', 'turns': ['L','L\'','L2'], 'restricted': ['R', 'r'] },
    { 'name': 'U', 'turns': ['U','U\'','U2'], 'restricted': ['D', 'd'] },
    { 'name': 'D', 'turns': ['D','D\'','D2'], 'restricted': ['U', 'u'] },
    { 'name': 'F', 'turns': ['F','F\'','F2'], 'restricted': ['B', 'b'] },
    { 'name': 'B', 'turns': ['B','B\'','B2'], 'restricted': ['F', 'f'] },

    { 'name': 'r', 'turns': ['r','r\'','r2'], 'restricted': ['L', 'l'] },
    { 'name': 'l', 'turns': ['l','l\'','l2'], 'restricted': ['R', 'r'] },
    { 'name': 'u', 'turns': ['u','u\'','u2'], 'restricted': ['D', 'd'] },
    { 'name': 'd', 'turns': ['d','d\'','d2'], 'restricted': ['U', 'u'] },
    { 'name': 'f', 'turns': ['f','f\'','f2'], 'restricted': ['B', 'b'] },
    { 'name': 'b', 'turns': ['b','b\'','b2'], 'restricted': ['F', 'f'] }
  ]
};

var cube_5x5 = {
  'name': '5x5 Rubik\'s Cube',

  'faces': [
    { 'name': 'R', 'turns': ['R','R\'','R2'], 'restricted': ['L', 'l'] },
    { 'name': 'L', 'turns': ['L','L\'','L2'], 'restricted': ['R', 'r'] },
    { 'name': 'U', 'turns': ['U','U\'','U2'], 'restricted': ['D', 'd'] },
    { 'name': 'D', 'turns': ['D','D\'','D2'], 'restricted': ['U', 'u'] },
    { 'name': 'F', 'turns': ['F','F\'','F2'], 'restricted': ['B', 'b'] },
    { 'name': 'B', 'turns': ['B','B\'','B2'], 'restricted': ['F', 'f'] },

    { 'name': 'r', 'turns': ['r','r\'','r2'], 'restricted': ['L', 'l'] },
    { 'name': 'l', 'turns': ['l','l\'','l2'], 'restricted': ['R', 'r'] },
    { 'name': 'u', 'turns': ['u','u\'','u2'], 'restricted': ['D', 'd'] },
    { 'name': 'd', 'turns': ['d','d\'','d2'], 'restricted': ['U', 'u'] },
    { 'name': 'f', 'turns': ['f','f\'','f2'], 'restricted': ['B', 'b'] },
    { 'name': 'b', 'turns': ['b','b\'','b2'], 'restricted': ['F', 'f'] }
  ]
};

var cube_6x6 = {
  'name': '6x6 Rubik\'s Cube',

  'faces': [
    { 'name': 'R', 'turns': ['R','R\'','R2'], 'restricted': ['L', 'l'] },
    { 'name': 'L', 'turns': ['L','L\'','L2'], 'restricted': ['R', 'r'] },
    { 'name': 'U', 'turns': ['U','U\'','U2'], 'restricted': ['D', 'd'] },
    { 'name': 'D', 'turns': ['D','D\'','D2'], 'restricted': ['U', 'u'] },
    { 'name': 'F', 'turns': ['F','F\'','F2'], 'restricted': ['B', 'b'] },
    { 'name': 'B', 'turns': ['B','B\'','B2'], 'restricted': ['F', 'f'] },

    { 'name': 'r', 'turns': ['r','r\'','r2'], 'restricted': ['L', 'l'] },
    { 'name': 'l', 'turns': ['l','l\'','l2'], 'restricted': ['R', 'r'] },
    { 'name': 'u', 'turns': ['u','u\'','u2'], 'restricted': ['D', 'd'] },
    { 'name': 'd', 'turns': ['d','d\'','d2'], 'restricted': ['U', 'u'] },
    { 'name': 'f', 'turns': ['f','f\'','f2'], 'restricted': ['B', 'b'] },
    { 'name': 'b', 'turns': ['b','b\'','b2'], 'restricted': ['F', 'f'] }
  ]
};

var cube_pyraminx = {
  "name": "Pyraminx",

  "faces": [
    { 'name': 'U', 'turns': ['R','R\''], 'restricted': [] },
    { 'name': 'R', 'turns': ['L','L\''], 'restricted': [] },
    { 'name': 'L', 'turns': ['U','U\''], 'restricted': [] },
    { 'name': 'B', 'turns': ['D','D\''], 'restricted': [] },

    { 'name': 'u', 'turns': ['r','r\''], 'restricted': ['r', 'l', 'b'] },
    { 'name': 'r', 'turns': ['l','l\''], 'restricted': ['u', 'l', 'b'] },
    { 'name': 'l', 'turns': ['u','u\''], 'restricted': ['r', 'u', 'b'] },
    { 'name': 'b', 'turns': ['d','d\''], 'restricted': ['r', 'l', 'u'] }
  ]
};

var cube_megaminx = {
  'name': 'Megaminx',

  'faces': [
    { 'name': 'R', 'turns': ['R', 'R++', 'R--'], 'restricted': [] },
    { 'name': 'D', 'turns': ['D', 'D++', 'D--'], 'restricted': [] }
  ],

  'final': ['U', 'U\'']
};
