(function (root, factory) {
  const levels = factory();
  if (typeof module === 'object' && module.exports) module.exports = levels;
  else root.CAT_COURIER_LEVELS_041_060 = levels;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  return [
  {
    "id": "L041",
    "chapter": 3,
    "title": "單行鮮奶",
    "rows": 8,
    "columns": 8,
    "difficulty": 3,
    "difficultyScore": 308622,
    "seed": 340877,
    "generatorVersion": 2,
    "terrain": [
      [
        "road",
        "road",
        "road",
        "fence",
        "crate",
        "grass",
        "water",
        "tree"
      ],
      [
        "road",
        "grass",
        "road",
        "fence",
        "barrier",
        "grass",
        "grass",
        "tree"
      ],
      [
        "plaza",
        "barrier",
        "plaza",
        "road",
        "grass",
        "water",
        "fence",
        "grass"
      ],
      [
        "road",
        "tree",
        "road",
        "barrier",
        "plaza",
        "grass",
        "road",
        "road"
      ],
      [
        "road",
        "grass",
        "bridge",
        "fence",
        "road",
        "tree",
        "road",
        "road"
      ],
      [
        "road",
        "grass",
        "road",
        "barrier",
        "road",
        "road",
        "road",
        "road"
      ],
      [
        "road",
        "crate",
        "road",
        "fence",
        "road",
        "water",
        "road",
        "road"
      ],
      [
        "road",
        "water",
        "plaza",
        "road",
        "road",
        "plaza",
        "tree",
        "crate"
      ]
    ],
    "start": [
      7,
      0
    ],
    "stops": [
      {
        "id": "stop-1",
        "order": 0,
        "item": "dried-fish",
        "label": "魚乾",
        "position": [
          2,
          0
        ],
        "houseStyle": "yellow"
      },
      {
        "id": "stop-2",
        "order": 1,
        "item": "yarn",
        "label": "毛線球",
        "position": [
          2,
          2
        ],
        "houseStyle": "green"
      },
      {
        "id": "stop-3",
        "order": 2,
        "item": "letter",
        "label": "信件",
        "position": [
          7,
          2
        ],
        "houseStyle": "pink"
      },
      {
        "id": "stop-4",
        "order": 3,
        "item": "milk",
        "label": "鮮奶",
        "position": [
          3,
          4
        ],
        "houseStyle": "blue"
      }
    ],
    "oneWayEdges": [
      {
        "from": [
          0,
          1
        ],
        "to": [
          0,
          2
        ]
      },
      {
        "from": [
          4,
          2
        ],
        "to": [
          5,
          2
        ]
      }
    ],
    "solutionPath": [
      [
        7,
        0
      ],
      [
        6,
        0
      ],
      [
        5,
        0
      ],
      [
        4,
        0
      ],
      [
        3,
        0
      ],
      [
        2,
        0
      ],
      [
        1,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        1
      ],
      [
        0,
        2
      ],
      [
        1,
        2
      ],
      [
        2,
        2
      ],
      [
        3,
        2
      ],
      [
        4,
        2
      ],
      [
        5,
        2
      ],
      [
        6,
        2
      ],
      [
        7,
        2
      ],
      [
        7,
        3
      ],
      [
        7,
        4
      ],
      [
        6,
        4
      ],
      [
        5,
        4
      ],
      [
        4,
        4
      ],
      [
        3,
        4
      ]
    ],
    "optimalSteps": 22,
    "optimalSolutionCount": 1,
    "fuelLimit": 28,
    "metrics": {
      "passableCellCount": 34,
      "stopCount": 4,
      "obstacleCount": 30,
      "oneWayEdgeCount": 2,
      "branchCellCount": 5,
      "detourLoopCount": 3,
      "bridgeCount": 1,
      "solverNodes": 26,
      "solverBacktracks": 3,
      "solverMaxDepth": 22,
      "canonicalSignature": "8x8;crate,road,road,road,road,grass,tree,tree/tree,road,road,road,road,fence,grass,water/plaza,water,road,tree,grass,water,grass,grass/road,road,road,road,plaza,grass,barrier,crate/road,fence,barrier,fence,barrier,road,fence,fence/plaza,road,road,bridge,road,plaza,road,road/water,crate,grass,grass,tree,barrier,grass,road/road,road,road,road,road,plaza,road,road;S:7,0;P:0@7,5|1@5,5|2@5,0|3@3,4;O:5,3>5,2|6,7>5,7;R:7,0>7,1>7,2>7,3>7,4>7,5>7,6>7,7>6,7>5,7>5,6>5,5>5,4>5,3>5,2>5,1>5,0>4,0>3,0>3,1>3,2>3,3>3,4"
    }
  },
  {
    "id": "L042",
    "chapter": 3,
    "title": "巷弄魚乾",
    "rows": 8,
    "columns": 8,
    "difficulty": 3,
    "difficultyScore": 308836,
    "seed": 341874,
    "generatorVersion": 2,
    "terrain": [
      [
        "road",
        "road",
        "road",
        "road",
        "plaza",
        "road",
        "grass",
        "road"
      ],
      [
        "crate",
        "road",
        "water",
        "road",
        "grass",
        "road",
        "grass",
        "road"
      ],
      [
        "water",
        "barrier",
        "road",
        "road",
        "water",
        "road",
        "fence",
        "road"
      ],
      [
        "crate",
        "grass",
        "road",
        "road",
        "grass",
        "bridge",
        "tree",
        "road"
      ],
      [
        "barrier",
        "grass",
        "fence",
        "road",
        "water",
        "road",
        "fence",
        "road"
      ],
      [
        "grass",
        "road",
        "road",
        "plaza",
        "tree",
        "plaza",
        "crate",
        "plaza"
      ],
      [
        "grass",
        "road",
        "road",
        "road",
        "grass",
        "road",
        "barrier",
        "road"
      ],
      [
        "crate",
        "tree",
        "grass",
        "water",
        "barrier",
        "road",
        "road",
        "road"
      ]
    ],
    "start": [
      0,
      7
    ],
    "stops": [
      {
        "id": "stop-1",
        "order": 0,
        "item": "parcel",
        "label": "包裹",
        "position": [
          5,
          7
        ],
        "houseStyle": "green"
      },
      {
        "id": "stop-2",
        "order": 1,
        "item": "mouse",
        "label": "玩具老鼠",
        "position": [
          5,
          5
        ],
        "houseStyle": "pink"
      },
      {
        "id": "stop-3",
        "order": 2,
        "item": "flowers",
        "label": "花束",
        "position": [
          0,
          4
        ],
        "houseStyle": "blue"
      },
      {
        "id": "stop-4",
        "order": 3,
        "item": "dried-fish",
        "label": "魚乾",
        "position": [
          5,
          3
        ],
        "houseStyle": "yellow"
      }
    ],
    "oneWayEdges": [
      {
        "from": [
          4,
          5
        ],
        "to": [
          3,
          5
        ]
      },
      {
        "from": [
          1,
          5
        ],
        "to": [
          0,
          5
        ]
      }
    ],
    "solutionPath": [
      [
        0,
        7
      ],
      [
        1,
        7
      ],
      [
        2,
        7
      ],
      [
        3,
        7
      ],
      [
        4,
        7
      ],
      [
        5,
        7
      ],
      [
        6,
        7
      ],
      [
        7,
        7
      ],
      [
        7,
        6
      ],
      [
        7,
        5
      ],
      [
        6,
        5
      ],
      [
        5,
        5
      ],
      [
        4,
        5
      ],
      [
        3,
        5
      ],
      [
        2,
        5
      ],
      [
        1,
        5
      ],
      [
        0,
        5
      ],
      [
        0,
        4
      ],
      [
        0,
        3
      ],
      [
        1,
        3
      ],
      [
        2,
        3
      ],
      [
        3,
        3
      ],
      [
        4,
        3
      ],
      [
        5,
        3
      ]
    ],
    "optimalSteps": 23,
    "optimalSolutionCount": 1,
    "fuelLimit": 27,
    "metrics": {
      "passableCellCount": 35,
      "stopCount": 4,
      "obstacleCount": 29,
      "oneWayEdgeCount": 2,
      "branchCellCount": 5,
      "detourLoopCount": 3,
      "bridgeCount": 1,
      "solverNodes": 27,
      "solverBacktracks": 3,
      "solverMaxDepth": 23,
      "canonicalSignature": "8x8;crate,grass,grass,barrier,crate,water,crate,road/tree,road,road,grass,grass,barrier,road,road/grass,road,road,fence,road,road,water,road/water,road,plaza,road,road,road,road,road/barrier,grass,tree,water,grass,water,grass,plaza/road,road,plaza,road,bridge,road,road,road/road,barrier,crate,fence,tree,fence,grass,grass/road,road,plaza,road,road,road,road,road;S:7,7;P:0@7,2|1@5,2|2@4,7|3@3,2;O:5,3>5,4|5,6>5,7;R:7,7>7,6>7,5>7,4>7,3>7,2>7,1>7,0>6,0>5,0>5,1>5,2>5,3>5,4>5,5>5,6>5,7>4,7>3,7>3,6>3,5>3,4>3,3>3,2"
    }
  },
  {
    "id": "L043",
    "chapter": 3,
    "title": "轉向包裹",
    "rows": 8,
    "columns": 8,
    "difficulty": 3,
    "difficultyScore": 308826,
    "seed": 342871,
    "generatorVersion": 2,
    "terrain": [
      [
        "road",
        "tree",
        "road",
        "plaza",
        "road",
        "road",
        "road",
        "grass"
      ],
      [
        "road",
        "grass",
        "road",
        "grass",
        "road",
        "barrier",
        "grass",
        "crate"
      ],
      [
        "road",
        "barrier",
        "road",
        "crate",
        "road",
        "water",
        "tree",
        "barrier"
      ],
      [
        "road",
        "grass",
        "bridge",
        "tree",
        "road",
        "grass",
        "grass",
        "grass"
      ],
      [
        "road",
        "crate",
        "road",
        "fence",
        "road",
        "road",
        "tree",
        "fence"
      ],
      [
        "plaza",
        "barrier",
        "plaza",
        "grass",
        "plaza",
        "crate",
        "grass",
        "tree"
      ],
      [
        "road",
        "grass",
        "road",
        "barrier",
        "road",
        "road",
        "road",
        "road"
      ],
      [
        "road",
        "road",
        "road",
        "tree",
        "road",
        "road",
        "road",
        "road"
      ]
    ],
    "start": [
      0,
      0
    ],
    "stops": [
      {
        "id": "stop-1",
        "order": 0,
        "item": "cat-food",
        "label": "貓罐頭",
        "position": [
          5,
          0
        ],
        "houseStyle": "pink"
      },
      {
        "id": "stop-2",
        "order": 1,
        "item": "cat-grass",
        "label": "貓草",
        "position": [
          5,
          2
        ],
        "houseStyle": "blue"
      },
      {
        "id": "stop-3",
        "order": 2,
        "item": "paw-cookie",
        "label": "貓掌餅乾",
        "position": [
          0,
          3
        ],
        "houseStyle": "yellow"
      },
      {
        "id": "stop-4",
        "order": 3,
        "item": "parcel",
        "label": "包裹",
        "position": [
          5,
          4
        ],
        "houseStyle": "green"
      }
    ],
    "oneWayEdges": [
      {
        "from": [
          7,
          0
        ],
        "to": [
          7,
          1
        ]
      },
      {
        "from": [
          7,
          2
        ],
        "to": [
          6,
          2
        ]
      }
    ],
    "solutionPath": [
      [
        0,
        0
      ],
      [
        1,
        0
      ],
      [
        2,
        0
      ],
      [
        3,
        0
      ],
      [
        4,
        0
      ],
      [
        5,
        0
      ],
      [
        6,
        0
      ],
      [
        7,
        0
      ],
      [
        7,
        1
      ],
      [
        7,
        2
      ],
      [
        6,
        2
      ],
      [
        5,
        2
      ],
      [
        4,
        2
      ],
      [
        3,
        2
      ],
      [
        2,
        2
      ],
      [
        1,
        2
      ],
      [
        0,
        2
      ],
      [
        0,
        3
      ],
      [
        0,
        4
      ],
      [
        1,
        4
      ],
      [
        2,
        4
      ],
      [
        3,
        4
      ],
      [
        4,
        4
      ],
      [
        5,
        4
      ]
    ],
    "optimalSteps": 23,
    "optimalSolutionCount": 1,
    "fuelLimit": 26,
    "metrics": {
      "passableCellCount": 35,
      "stopCount": 4,
      "obstacleCount": 29,
      "oneWayEdgeCount": 2,
      "branchCellCount": 5,
      "detourLoopCount": 3,
      "bridgeCount": 1,
      "solverNodes": 26,
      "solverBacktracks": 2,
      "solverMaxDepth": 23,
      "canonicalSignature": "8x8;grass,crate,barrier,grass,fence,tree,road,road/road,grass,tree,grass,tree,grass,road,road/road,barrier,water,grass,road,crate,road,road/road,road,road,road,road,plaza,road,road/plaza,grass,crate,tree,fence,grass,barrier,tree/road,road,road,bridge,road,plaza,road,road/tree,grass,barrier,grass,crate,barrier,grass,road/road,road,road,road,road,plaza,road,road;S:7,0;P:0@7,5|1@5,5|2@4,0|3@3,5;O:5,7>5,6|7,7>6,7;R:7,0>7,1>7,2>7,3>7,4>7,5>7,6>7,7>6,7>5,7>5,6>5,5>5,4>5,3>5,2>5,1>5,0>4,0>3,0>3,1>3,2>3,3>3,4>3,5"
    }
  },
  {
    "id": "L044",
    "chapter": 3,
    "title": "橋邊來信",
    "rows": 8,
    "columns": 8,
    "difficulty": 3,
    "difficultyScore": 308504,
    "seed": 343868,
    "generatorVersion": 2,
    "terrain": [
      [
        "road",
        "road",
        "road",
        "water",
        "road",
        "road",
        "water",
        "crate"
      ],
      [
        "plaza",
        "grass",
        "road",
        "road",
        "plaza",
        "tree",
        "crate",
        "grass"
      ],
      [
        "road",
        "fence",
        "road",
        "road",
        "road",
        "tree",
        "crate",
        "tree"
      ],
      [
        "road",
        "fence",
        "plaza",
        "tree",
        "road",
        "road",
        "road",
        "barrier"
      ],
      [
        "road",
        "grass",
        "bridge",
        "grass",
        "road",
        "barrier",
        "grass",
        "grass"
      ],
      [
        "road",
        "tree",
        "road",
        "barrier",
        "road",
        "road",
        "crate",
        "grass"
      ],
      [
        "road",
        "grass",
        "road",
        "grass",
        "road",
        "grass",
        "grass",
        "grass"
      ],
      [
        "road",
        "grass",
        "road",
        "road",
        "plaza",
        "grass",
        "fence",
        "grass"
      ]
    ],
    "start": [
      7,
      0
    ],
    "stops": [
      {
        "id": "stop-1",
        "order": 0,
        "item": "yarn",
        "label": "毛線球",
        "position": [
          1,
          0
        ],
        "houseStyle": "blue"
      },
      {
        "id": "stop-2",
        "order": 1,
        "item": "letter",
        "label": "信件",
        "position": [
          3,
          2
        ],
        "houseStyle": "yellow"
      },
      {
        "id": "stop-3",
        "order": 2,
        "item": "milk",
        "label": "鮮奶",
        "position": [
          7,
          4
        ],
        "houseStyle": "green"
      },
      {
        "id": "stop-4",
        "order": 3,
        "item": "cat-food",
        "label": "貓罐頭",
        "position": [
          1,
          4
        ],
        "houseStyle": "pink"
      }
    ],
    "oneWayEdges": [
      {
        "from": [
          1,
          4
        ],
        "to": [
          1,
          3
        ]
      },
      {
        "from": [
          2,
          4
        ],
        "to": [
          2,
          3
        ]
      }
    ],
    "solutionPath": [
      [
        7,
        0
      ],
      [
        6,
        0
      ],
      [
        5,
        0
      ],
      [
        4,
        0
      ],
      [
        3,
        0
      ],
      [
        2,
        0
      ],
      [
        1,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        1
      ],
      [
        0,
        2
      ],
      [
        1,
        2
      ],
      [
        2,
        2
      ],
      [
        3,
        2
      ],
      [
        4,
        2
      ],
      [
        5,
        2
      ],
      [
        6,
        2
      ],
      [
        7,
        2
      ],
      [
        7,
        3
      ],
      [
        7,
        4
      ],
      [
        6,
        4
      ],
      [
        5,
        4
      ],
      [
        4,
        4
      ],
      [
        3,
        4
      ],
      [
        2,
        4
      ],
      [
        1,
        4
      ]
    ],
    "optimalSteps": 24,
    "optimalSolutionCount": 1,
    "fuelLimit": 27,
    "metrics": {
      "passableCellCount": 32,
      "stopCount": 4,
      "obstacleCount": 32,
      "oneWayEdgeCount": 2,
      "branchCellCount": 5,
      "detourLoopCount": 1,
      "bridgeCount": 1,
      "solverNodes": 30,
      "solverBacktracks": 5,
      "solverMaxDepth": 24,
      "canonicalSignature": "8x8;crate,grass,tree,barrier,grass,grass,grass,grass/water,crate,crate,road,grass,crate,grass,fence/road,tree,tree,road,barrier,road,grass,grass/road,plaza,road,road,road,road,road,plaza/water,road,road,tree,grass,barrier,grass,road/road,road,road,plaza,bridge,road,road,road/road,grass,fence,fence,grass,tree,grass,grass/road,plaza,road,road,road,road,road,road;S:7,7;P:0@7,1|1@5,3|2@3,7|3@3,1;O:3,1>4,1|3,2>4,2;R:7,7>7,6>7,5>7,4>7,3>7,2>7,1>7,0>6,0>5,0>5,1>5,2>5,3>5,4>5,5>5,6>5,7>4,7>3,7>3,6>3,5>3,4>3,3>3,2>3,1"
    }
  },
  {
    "id": "L045",
    "chapter": 3,
    "title": "逆風毛線",
    "rows": 8,
    "columns": 8,
    "difficulty": 3,
    "difficultyScore": 309272,
    "seed": 344865,
    "generatorVersion": 2,
    "terrain": [
      [
        "road",
        "road",
        "barrier",
        "plaza",
        "fence",
        "road",
        "road",
        "road"
      ],
      [
        "road",
        "road",
        "road",
        "road",
        "fence",
        "road",
        "fence",
        "plaza"
      ],
      [
        "grass",
        "tree",
        "grass",
        "road",
        "grass",
        "road",
        "tree",
        "road"
      ],
      [
        "crate",
        "road",
        "plaza",
        "road",
        "tree",
        "plaza",
        "water",
        "road"
      ],
      [
        "grass",
        "fence",
        "barrier",
        "road",
        "grass",
        "bridge",
        "barrier",
        "road"
      ],
      [
        "water",
        "fence",
        "tree",
        "road",
        "crate",
        "road",
        "grass",
        "road"
      ],
      [
        "grass",
        "fence",
        "tree",
        "road",
        "fence",
        "road",
        "grass",
        "road"
      ],
      [
        "fence",
        "barrier",
        "road",
        "plaza",
        "road",
        "road",
        "grass",
        "road"
      ]
    ],
    "start": [
      7,
      7
    ],
    "stops": [
      {
        "id": "stop-1",
        "order": 0,
        "item": "mouse",
        "label": "玩具老鼠",
        "position": [
          1,
          7
        ],
        "houseStyle": "yellow"
      },
      {
        "id": "stop-2",
        "order": 1,
        "item": "flowers",
        "label": "花束",
        "position": [
          3,
          5
        ],
        "houseStyle": "green"
      },
      {
        "id": "stop-3",
        "order": 2,
        "item": "dried-fish",
        "label": "魚乾",
        "position": [
          7,
          3
        ],
        "houseStyle": "pink"
      },
      {
        "id": "stop-4",
        "order": 3,
        "item": "yarn",
        "label": "毛線球",
        "position": [
          0,
          3
        ],
        "houseStyle": "blue"
      }
    ],
    "oneWayEdges": [
      {
        "from": [
          7,
          7
        ],
        "to": [
          6,
          7
        ]
      },
      {
        "from": [
          1,
          7
        ],
        "to": [
          0,
          7
        ]
      },
      {
        "from": [
          1,
          5
        ],
        "to": [
          2,
          5
        ]
      }
    ],
    "solutionPath": [
      [
        7,
        7
      ],
      [
        6,
        7
      ],
      [
        5,
        7
      ],
      [
        4,
        7
      ],
      [
        3,
        7
      ],
      [
        2,
        7
      ],
      [
        1,
        7
      ],
      [
        0,
        7
      ],
      [
        0,
        6
      ],
      [
        0,
        5
      ],
      [
        1,
        5
      ],
      [
        2,
        5
      ],
      [
        3,
        5
      ],
      [
        4,
        5
      ],
      [
        5,
        5
      ],
      [
        6,
        5
      ],
      [
        7,
        5
      ],
      [
        7,
        4
      ],
      [
        7,
        3
      ],
      [
        6,
        3
      ],
      [
        5,
        3
      ],
      [
        4,
        3
      ],
      [
        3,
        3
      ],
      [
        2,
        3
      ],
      [
        1,
        3
      ],
      [
        0,
        3
      ]
    ],
    "optimalSteps": 25,
    "optimalSolutionCount": 1,
    "fuelLimit": 28,
    "metrics": {
      "passableCellCount": 34,
      "stopCount": 4,
      "obstacleCount": 30,
      "oneWayEdgeCount": 3,
      "branchCellCount": 6,
      "detourLoopCount": 1,
      "bridgeCount": 1,
      "solverNodes": 29,
      "solverBacktracks": 3,
      "solverMaxDepth": 25,
      "canonicalSignature": "8x8;fence,barrier,road,plaza,road,road,grass,road/grass,fence,tree,road,fence,road,grass,road/water,fence,tree,road,crate,road,grass,road/grass,fence,barrier,road,grass,bridge,barrier,road/crate,road,plaza,road,tree,plaza,water,road/grass,tree,grass,road,grass,road,tree,road/road,road,road,road,fence,road,fence,plaza/road,road,barrier,plaza,fence,road,road,road;S:0,7;P:0@6,7|1@4,5|2@0,3|3@7,3;O:0,7>1,7|6,5>5,5|6,7>7,7;R:0,7>1,7>2,7>3,7>4,7>5,7>6,7>7,7>7,6>7,5>6,5>5,5>4,5>3,5>2,5>1,5>0,5>0,4>0,3>1,3>2,3>3,3>4,3>5,3>6,3>7,3"
    }
  },
  {
    "id": "L046",
    "chapter": 3,
    "title": "紅箭罐頭",
    "rows": 8,
    "columns": 8,
    "difficulty": 3,
    "difficultyScore": 309555,
    "seed": 345862,
    "generatorVersion": 2,
    "terrain": [
      [
        "road",
        "water",
        "road",
        "road",
        "plaza",
        "grass",
        "grass",
        "grass"
      ],
      [
        "road",
        "crate",
        "road",
        "fence",
        "road",
        "road",
        "grass",
        "grass"
      ],
      [
        "road",
        "water",
        "road",
        "grass",
        "road",
        "crate",
        "road",
        "road"
      ],
      [
        "road",
        "grass",
        "bridge",
        "grass",
        "road",
        "water",
        "road",
        "road"
      ],
      [
        "road",
        "fence",
        "plaza",
        "grass",
        "road",
        "road",
        "road",
        "road"
      ],
      [
        "road",
        "grass",
        "road",
        "grass",
        "road",
        "water",
        "water",
        "grass"
      ],
      [
        "plaza",
        "tree",
        "road",
        "fence",
        "road",
        "road",
        "road",
        "barrier"
      ],
      [
        "road",
        "road",
        "road",
        "barrier",
        "plaza",
        "grass",
        "water",
        "grass"
      ]
    ],
    "start": [
      0,
      0
    ],
    "stops": [
      {
        "id": "stop-1",
        "order": 0,
        "item": "cat-grass",
        "label": "貓草",
        "position": [
          6,
          0
        ],
        "houseStyle": "green"
      },
      {
        "id": "stop-2",
        "order": 1,
        "item": "paw-cookie",
        "label": "貓掌餅乾",
        "position": [
          4,
          2
        ],
        "houseStyle": "pink"
      },
      {
        "id": "stop-3",
        "order": 2,
        "item": "parcel",
        "label": "包裹",
        "position": [
          0,
          4
        ],
        "houseStyle": "blue"
      },
      {
        "id": "stop-4",
        "order": 3,
        "item": "mouse",
        "label": "玩具老鼠",
        "position": [
          7,
          4
        ],
        "houseStyle": "yellow"
      }
    ],
    "oneWayEdges": [
      {
        "from": [
          0,
          0
        ],
        "to": [
          1,
          0
        ]
      },
      {
        "from": [
          6,
          0
        ],
        "to": [
          7,
          0
        ]
      },
      {
        "from": [
          2,
          4
        ],
        "to": [
          3,
          4
        ]
      }
    ],
    "solutionPath": [
      [
        0,
        0
      ],
      [
        1,
        0
      ],
      [
        2,
        0
      ],
      [
        3,
        0
      ],
      [
        4,
        0
      ],
      [
        5,
        0
      ],
      [
        6,
        0
      ],
      [
        7,
        0
      ],
      [
        7,
        1
      ],
      [
        7,
        2
      ],
      [
        6,
        2
      ],
      [
        5,
        2
      ],
      [
        4,
        2
      ],
      [
        3,
        2
      ],
      [
        2,
        2
      ],
      [
        1,
        2
      ],
      [
        0,
        2
      ],
      [
        0,
        3
      ],
      [
        0,
        4
      ],
      [
        1,
        4
      ],
      [
        2,
        4
      ],
      [
        3,
        4
      ],
      [
        4,
        4
      ],
      [
        5,
        4
      ],
      [
        6,
        4
      ],
      [
        7,
        4
      ]
    ],
    "optimalSteps": 25,
    "optimalSolutionCount": 1,
    "fuelLimit": 30,
    "metrics": {
      "passableCellCount": 36,
      "stopCount": 4,
      "obstacleCount": 28,
      "oneWayEdgeCount": 3,
      "branchCellCount": 6,
      "detourLoopCount": 2,
      "bridgeCount": 1,
      "solverNodes": 29,
      "solverBacktracks": 3,
      "solverMaxDepth": 25,
      "canonicalSignature": "8x8;grass,barrier,grass,road,road,road,grass,grass/water,road,water,road,road,road,grass,grass/grass,road,water,road,water,crate,road,grass/plaza,road,road,road,road,road,road,plaza/barrier,fence,grass,grass,grass,grass,fence,road/road,road,road,plaza,bridge,road,road,road/road,tree,grass,fence,grass,water,crate,water/road,plaza,road,road,road,road,road,road;S:7,7;P:0@7,1|1@5,3|2@3,7|3@3,0;O:3,5>3,4|7,1>7,0|7,7>7,6;R:7,7>7,6>7,5>7,4>7,3>7,2>7,1>7,0>6,0>5,0>5,1>5,2>5,3>5,4>5,5>5,6>5,7>4,7>3,7>3,6>3,5>3,4>3,3>3,2>3,1>3,0"
    }
  },
  {
    "id": "L047",
    "chapter": 3,
    "title": "窄路花束",
    "rows": 8,
    "columns": 8,
    "difficulty": 3,
    "difficultyScore": 309672,
    "seed": 346859,
    "generatorVersion": 2,
    "terrain": [
      [
        "grass",
        "tree",
        "plaza",
        "road",
        "road",
        "road",
        "water",
        "road"
      ],
      [
        "grass",
        "grass",
        "grass",
        "plaza",
        "fence",
        "road",
        "barrier",
        "road"
      ],
      [
        "grass",
        "road",
        "road",
        "road",
        "grass",
        "road",
        "tree",
        "road"
      ],
      [
        "barrier",
        "grass",
        "water",
        "road",
        "fence",
        "plaza",
        "crate",
        "road"
      ],
      [
        "crate",
        "water",
        "road",
        "road",
        "crate",
        "road",
        "barrier",
        "road"
      ],
      [
        "road",
        "road",
        "barrier",
        "road",
        "water",
        "road",
        "fence",
        "road"
      ],
      [
        "road",
        "road",
        "grass",
        "road",
        "water",
        "road",
        "grass",
        "plaza"
      ],
      [
        "road",
        "road",
        "plaza",
        "road",
        "grass",
        "road",
        "road",
        "road"
      ]
    ],
    "start": [
      0,
      7
    ],
    "stops": [
      {
        "id": "stop-1",
        "order": 0,
        "item": "letter",
        "label": "信件",
        "position": [
          6,
          7
        ],
        "houseStyle": "pink"
      },
      {
        "id": "stop-2",
        "order": 1,
        "item": "milk",
        "label": "鮮奶",
        "position": [
          3,
          5
        ],
        "houseStyle": "blue"
      },
      {
        "id": "stop-3",
        "order": 2,
        "item": "cat-food",
        "label": "貓罐頭",
        "position": [
          1,
          3
        ],
        "houseStyle": "yellow"
      },
      {
        "id": "stop-4",
        "order": 3,
        "item": "cat-grass",
        "label": "貓草",
        "position": [
          7,
          2
        ],
        "houseStyle": "green"
      }
    ],
    "oneWayEdges": [
      {
        "from": [
          1,
          7
        ],
        "to": [
          2,
          7
        ]
      },
      {
        "from": [
          2,
          7
        ],
        "to": [
          3,
          7
        ]
      },
      {
        "from": [
          7,
          7
        ],
        "to": [
          7,
          6
        ]
      }
    ],
    "solutionPath": [
      [
        0,
        7
      ],
      [
        1,
        7
      ],
      [
        2,
        7
      ],
      [
        3,
        7
      ],
      [
        4,
        7
      ],
      [
        5,
        7
      ],
      [
        6,
        7
      ],
      [
        7,
        7
      ],
      [
        7,
        6
      ],
      [
        7,
        5
      ],
      [
        6,
        5
      ],
      [
        5,
        5
      ],
      [
        4,
        5
      ],
      [
        3,
        5
      ],
      [
        2,
        5
      ],
      [
        1,
        5
      ],
      [
        0,
        5
      ],
      [
        0,
        4
      ],
      [
        0,
        3
      ],
      [
        1,
        3
      ],
      [
        2,
        3
      ],
      [
        3,
        3
      ],
      [
        4,
        3
      ],
      [
        5,
        3
      ],
      [
        6,
        3
      ],
      [
        7,
        3
      ],
      [
        7,
        2
      ]
    ],
    "optimalSteps": 26,
    "optimalSolutionCount": 1,
    "fuelLimit": 32,
    "metrics": {
      "passableCellCount": 37,
      "stopCount": 4,
      "obstacleCount": 27,
      "oneWayEdgeCount": 3,
      "branchCellCount": 6,
      "detourLoopCount": 2,
      "bridgeCount": 0,
      "solverNodes": 30,
      "solverBacktracks": 3,
      "solverMaxDepth": 26,
      "canonicalSignature": "8x8;grass,grass,grass,barrier,crate,road,road,road/tree,grass,road,grass,water,road,road,road/plaza,grass,road,water,road,barrier,grass,plaza/road,plaza,road,road,road,road,road,road/road,fence,grass,fence,crate,water,water,grass/road,road,road,plaza,road,road,road,road/water,barrier,tree,crate,barrier,fence,grass,road/road,road,road,road,road,road,plaza,road;S:7,0;P:0@7,6|1@5,3|2@3,1|3@2,7;O:7,1>7,2|7,2>7,3|7,7>6,7;R:7,0>7,1>7,2>7,3>7,4>7,5>7,6>7,7>6,7>5,7>5,6>5,5>5,4>5,3>5,2>5,1>5,0>4,0>3,0>3,1>3,2>3,3>3,4>3,5>3,6>3,7>2,7"
    }
  },
  {
    "id": "L048",
    "chapter": 3,
    "title": "貓草彎道",
    "rows": 8,
    "columns": 8,
    "difficulty": 3,
    "difficultyScore": 309379,
    "seed": 347856,
    "generatorVersion": 2,
    "terrain": [
      [
        "tree",
        "road",
        "tree",
        "road",
        "road",
        "road",
        "grass",
        "road"
      ],
      [
        "water",
        "road",
        "road",
        "plaza",
        "fence",
        "road",
        "water",
        "road"
      ],
      [
        "road",
        "road",
        "barrier",
        "road",
        "barrier",
        "road",
        "crate",
        "road"
      ],
      [
        "road",
        "plaza",
        "grass",
        "road",
        "grass",
        "plaza",
        "grass",
        "road"
      ],
      [
        "water",
        "water",
        "road",
        "road",
        "grass",
        "road",
        "grass",
        "road"
      ],
      [
        "water",
        "tree",
        "crate",
        "road",
        "grass",
        "road",
        "grass",
        "road"
      ],
      [
        "fence",
        "tree",
        "barrier",
        "road",
        "water",
        "road",
        "water",
        "plaza"
      ],
      [
        "grass",
        "water",
        "plaza",
        "road",
        "fence",
        "road",
        "road",
        "road"
      ]
    ],
    "start": [
      0,
      7
    ],
    "stops": [
      {
        "id": "stop-1",
        "order": 0,
        "item": "flowers",
        "label": "花束",
        "position": [
          6,
          7
        ],
        "houseStyle": "blue"
      },
      {
        "id": "stop-2",
        "order": 1,
        "item": "dried-fish",
        "label": "魚乾",
        "position": [
          3,
          5
        ],
        "houseStyle": "yellow"
      },
      {
        "id": "stop-3",
        "order": 2,
        "item": "yarn",
        "label": "毛線球",
        "position": [
          1,
          3
        ],
        "houseStyle": "green"
      },
      {
        "id": "stop-4",
        "order": 3,
        "item": "letter",
        "label": "信件",
        "position": [
          7,
          2
        ],
        "houseStyle": "pink"
      }
    ],
    "oneWayEdges": [
      {
        "from": [
          7,
          5
        ],
        "to": [
          6,
          5
        ]
      },
      {
        "from": [
          1,
          5
        ],
        "to": [
          0,
          5
        ]
      },
      {
        "from": [
          3,
          3
        ],
        "to": [
          4,
          3
        ]
      }
    ],
    "solutionPath": [
      [
        0,
        7
      ],
      [
        1,
        7
      ],
      [
        2,
        7
      ],
      [
        3,
        7
      ],
      [
        4,
        7
      ],
      [
        5,
        7
      ],
      [
        6,
        7
      ],
      [
        7,
        7
      ],
      [
        7,
        6
      ],
      [
        7,
        5
      ],
      [
        6,
        5
      ],
      [
        5,
        5
      ],
      [
        4,
        5
      ],
      [
        3,
        5
      ],
      [
        2,
        5
      ],
      [
        1,
        5
      ],
      [
        0,
        5
      ],
      [
        0,
        4
      ],
      [
        0,
        3
      ],
      [
        1,
        3
      ],
      [
        2,
        3
      ],
      [
        3,
        3
      ],
      [
        4,
        3
      ],
      [
        5,
        3
      ],
      [
        6,
        3
      ],
      [
        7,
        3
      ],
      [
        7,
        2
      ]
    ],
    "optimalSteps": 26,
    "optimalSolutionCount": 1,
    "fuelLimit": 32,
    "metrics": {
      "passableCellCount": 35,
      "stopCount": 4,
      "obstacleCount": 29,
      "oneWayEdgeCount": 3,
      "branchCellCount": 6,
      "detourLoopCount": 1,
      "bridgeCount": 0,
      "solverNodes": 29,
      "solverBacktracks": 2,
      "solverMaxDepth": 26,
      "canonicalSignature": "8x8;grass,fence,water,water,road,road,water,tree/water,tree,tree,water,plaza,road,road,road/plaza,barrier,crate,road,grass,barrier,road,tree/road,road,road,road,road,road,plaza,road/fence,water,grass,grass,grass,barrier,fence,road/road,road,road,road,plaza,road,road,road/road,water,grass,grass,grass,crate,water,grass/road,plaza,road,road,road,road,road,road;S:7,7;P:0@7,1|1@5,4|2@3,6|3@2,0;O:3,4>3,3|5,0>5,1|5,6>5,7;R:7,7>7,6>7,5>7,4>7,3>7,2>7,1>7,0>6,0>5,0>5,1>5,2>5,3>5,4>5,5>5,6>5,7>4,7>3,7>3,6>3,5>3,4>3,3>3,2>3,1>3,0>2,0"
    }
  },
  {
    "id": "L049",
    "chapter": 3,
    "title": "餅乾專線",
    "rows": 8,
    "columns": 8,
    "difficulty": 3,
    "difficultyScore": 309710,
    "seed": 348853,
    "generatorVersion": 2,
    "terrain": [
      [
        "road",
        "plaza",
        "road",
        "road",
        "road",
        "road",
        "road",
        "road"
      ],
      [
        "road",
        "crate",
        "grass",
        "water",
        "grass",
        "fence",
        "grass",
        "crate"
      ],
      [
        "road",
        "road",
        "road",
        "road",
        "plaza",
        "road",
        "road",
        "road"
      ],
      [
        "grass",
        "tree",
        "fence",
        "grass",
        "fence",
        "water",
        "crate",
        "road"
      ],
      [
        "road",
        "road",
        "road",
        "road",
        "road",
        "plaza",
        "road",
        "road"
      ],
      [
        "bridge",
        "barrier",
        "road",
        "crate",
        "road",
        "road",
        "grass",
        "road"
      ],
      [
        "plaza",
        "grass",
        "road",
        "road",
        "grass",
        "barrier",
        "crate",
        "grass"
      ],
      [
        "road",
        "road",
        "crate",
        "fence",
        "grass",
        "grass",
        "crate",
        "grass"
      ]
    ],
    "start": [
      0,
      7
    ],
    "stops": [
      {
        "id": "stop-1",
        "order": 0,
        "item": "paw-cookie",
        "label": "貓掌餅乾",
        "position": [
          0,
          1
        ],
        "houseStyle": "yellow"
      },
      {
        "id": "stop-2",
        "order": 1,
        "item": "parcel",
        "label": "包裹",
        "position": [
          2,
          4
        ],
        "houseStyle": "green"
      },
      {
        "id": "stop-3",
        "order": 2,
        "item": "mouse",
        "label": "玩具老鼠",
        "position": [
          4,
          5
        ],
        "houseStyle": "pink"
      },
      {
        "id": "stop-4",
        "order": 3,
        "item": "flowers",
        "label": "花束",
        "position": [
          6,
          0
        ],
        "houseStyle": "blue"
      }
    ],
    "oneWayEdges": [
      {
        "from": [
          2,
          2
        ],
        "to": [
          2,
          3
        ]
      },
      {
        "from": [
          2,
          4
        ],
        "to": [
          2,
          5
        ]
      },
      {
        "from": [
          4,
          7
        ],
        "to": [
          4,
          6
        ]
      }
    ],
    "solutionPath": [
      [
        0,
        7
      ],
      [
        0,
        6
      ],
      [
        0,
        5
      ],
      [
        0,
        4
      ],
      [
        0,
        3
      ],
      [
        0,
        2
      ],
      [
        0,
        1
      ],
      [
        0,
        0
      ],
      [
        1,
        0
      ],
      [
        2,
        0
      ],
      [
        2,
        1
      ],
      [
        2,
        2
      ],
      [
        2,
        3
      ],
      [
        2,
        4
      ],
      [
        2,
        5
      ],
      [
        2,
        6
      ],
      [
        2,
        7
      ],
      [
        3,
        7
      ],
      [
        4,
        7
      ],
      [
        4,
        6
      ],
      [
        4,
        5
      ],
      [
        4,
        4
      ],
      [
        4,
        3
      ],
      [
        4,
        2
      ],
      [
        4,
        1
      ],
      [
        4,
        0
      ],
      [
        5,
        0
      ],
      [
        6,
        0
      ]
    ],
    "optimalSteps": 27,
    "optimalSolutionCount": 1,
    "fuelLimit": 32,
    "metrics": {
      "passableCellCount": 36,
      "stopCount": 4,
      "obstacleCount": 28,
      "oneWayEdgeCount": 3,
      "branchCellCount": 6,
      "detourLoopCount": 1,
      "bridgeCount": 1,
      "solverNodes": 32,
      "solverBacktracks": 4,
      "solverMaxDepth": 27,
      "canonicalSignature": "8x8;grass,crate,grass,grass,fence,crate,road,road/grass,crate,barrier,grass,road,road,grass,plaza/road,grass,road,road,crate,road,barrier,bridge/road,road,plaza,road,road,road,road,road/road,crate,water,fence,grass,fence,tree,grass/road,road,road,plaza,road,road,road,road/crate,grass,fence,grass,water,grass,crate,road/road,road,road,road,road,road,plaza,road;S:7,0;P:0@7,6|1@5,3|2@3,2|3@1,7;O:3,0>3,1|5,3>5,2|5,5>5,4;R:7,0>7,1>7,2>7,3>7,4>7,5>7,6>7,7>6,7>5,7>5,6>5,5>5,4>5,3>5,2>5,1>5,0>4,0>3,0>3,1>3,2>3,3>3,4>3,5>3,6>3,7>2,7>1,7"
    }
  },
  {
    "id": "L050",
    "chapter": 3,
    "title": "玩鼠巷口",
    "rows": 8,
    "columns": 8,
    "difficulty": 3,
    "difficultyScore": 310001,
    "seed": 349850,
    "generatorVersion": 2,
    "terrain": [
      [
        "grass",
        "road",
        "grass",
        "grass",
        "road",
        "road",
        "grass",
        "grass"
      ],
      [
        "road",
        "plaza",
        "road",
        "grass",
        "plaza",
        "road",
        "tree",
        "grass"
      ],
      [
        "bridge",
        "grass",
        "fence",
        "fence",
        "road",
        "grass",
        "road",
        "grass"
      ],
      [
        "road",
        "road",
        "road",
        "road",
        "plaza",
        "road",
        "road",
        "road"
      ],
      [
        "crate",
        "crate",
        "grass",
        "barrier",
        "tree",
        "barrier",
        "crate",
        "road"
      ],
      [
        "road",
        "road",
        "road",
        "road",
        "bridge",
        "plaza",
        "road",
        "road"
      ],
      [
        "road",
        "fence",
        "fence",
        "barrier",
        "barrier",
        "tree",
        "grass",
        "grass"
      ],
      [
        "plaza",
        "road",
        "road",
        "road",
        "road",
        "road",
        "road",
        "road"
      ]
    ],
    "start": [
      7,
      7
    ],
    "stops": [
      {
        "id": "stop-1",
        "order": 0,
        "item": "milk",
        "label": "鮮奶",
        "position": [
          7,
          0
        ],
        "houseStyle": "green"
      },
      {
        "id": "stop-2",
        "order": 1,
        "item": "cat-food",
        "label": "貓罐頭",
        "position": [
          5,
          5
        ],
        "houseStyle": "pink"
      },
      {
        "id": "stop-3",
        "order": 2,
        "item": "cat-grass",
        "label": "貓草",
        "position": [
          3,
          4
        ],
        "houseStyle": "blue"
      },
      {
        "id": "stop-4",
        "order": 3,
        "item": "paw-cookie",
        "label": "貓掌餅乾",
        "position": [
          1,
          1
        ],
        "houseStyle": "yellow"
      }
    ],
    "oneWayEdges": [
      {
        "from": [
          7,
          2
        ],
        "to": [
          7,
          1
        ]
      },
      {
        "from": [
          5,
          1
        ],
        "to": [
          5,
          2
        ]
      },
      {
        "from": [
          3,
          0
        ],
        "to": [
          2,
          0
        ]
      }
    ],
    "solutionPath": [
      [
        7,
        7
      ],
      [
        7,
        6
      ],
      [
        7,
        5
      ],
      [
        7,
        4
      ],
      [
        7,
        3
      ],
      [
        7,
        2
      ],
      [
        7,
        1
      ],
      [
        7,
        0
      ],
      [
        6,
        0
      ],
      [
        5,
        0
      ],
      [
        5,
        1
      ],
      [
        5,
        2
      ],
      [
        5,
        3
      ],
      [
        5,
        4
      ],
      [
        5,
        5
      ],
      [
        5,
        6
      ],
      [
        5,
        7
      ],
      [
        4,
        7
      ],
      [
        3,
        7
      ],
      [
        3,
        6
      ],
      [
        3,
        5
      ],
      [
        3,
        4
      ],
      [
        3,
        3
      ],
      [
        3,
        2
      ],
      [
        3,
        1
      ],
      [
        3,
        0
      ],
      [
        2,
        0
      ],
      [
        1,
        0
      ],
      [
        1,
        1
      ]
    ],
    "optimalSteps": 28,
    "optimalSolutionCount": 1,
    "fuelLimit": 32,
    "metrics": {
      "passableCellCount": 37,
      "stopCount": 4,
      "obstacleCount": 27,
      "oneWayEdgeCount": 3,
      "branchCellCount": 6,
      "detourLoopCount": 1,
      "bridgeCount": 2,
      "solverNodes": 31,
      "solverBacktracks": 2,
      "solverMaxDepth": 28,
      "canonicalSignature": "8x8;grass,grass,grass,road,road,road,grass,road/grass,tree,road,road,crate,road,grass,road/road,road,grass,road,barrier,plaza,tree,road/road,plaza,road,plaza,tree,bridge,barrier,road/grass,grass,fence,road,barrier,road,barrier,road/grass,road,fence,road,grass,road,fence,road/road,plaza,grass,road,crate,road,fence,road/grass,road,bridge,road,crate,road,road,plaza;S:0,7;P:0@7,7|1@2,5|2@3,3|3@6,1;O:5,7>6,7|6,5>5,5|7,3>7,2;R:0,7>1,7>2,7>3,7>4,7>5,7>6,7>7,7>7,6>7,5>6,5>5,5>4,5>3,5>2,5>1,5>0,5>0,4>0,3>1,3>2,3>3,3>4,3>5,3>6,3>7,3>7,2>7,1>6,1"
    }
  },
  {
    "id": "L051",
    "chapter": 3,
    "title": "三向選擇",
    "rows": 8,
    "columns": 8,
    "difficulty": 3,
    "difficultyScore": 310962,
    "seed": 350847,
    "generatorVersion": 2,
    "terrain": [
      [
        "road",
        "road",
        "bridge",
        "road",
        "tree",
        "road",
        "road",
        "road"
      ],
      [
        "tree",
        "plaza",
        "water",
        "road",
        "grass",
        "road",
        "road",
        "road"
      ],
      [
        "barrier",
        "water",
        "road",
        "road",
        "grass",
        "plaza",
        "road",
        "plaza"
      ],
      [
        "fence",
        "tree",
        "grass",
        "plaza",
        "barrier",
        "road",
        "grass",
        "road"
      ],
      [
        "barrier",
        "barrier",
        "barrier",
        "road",
        "grass",
        "bridge",
        "grass",
        "road"
      ],
      [
        "tree",
        "fence",
        "road",
        "road",
        "barrier",
        "road",
        "crate",
        "road"
      ],
      [
        "grass",
        "road",
        "fence",
        "road",
        "fence",
        "road",
        "barrier",
        "road"
      ],
      [
        "road",
        "road",
        "road",
        "road",
        "road",
        "plaza",
        "grass",
        "road"
      ]
    ],
    "start": [
      7,
      7
    ],
    "stops": [
      {
        "id": "stop-1",
        "order": 0,
        "item": "dried-fish",
        "label": "魚乾",
        "position": [
          2,
          7
        ],
        "houseStyle": "pink"
      },
      {
        "id": "stop-2",
        "order": 1,
        "item": "yarn",
        "label": "毛線球",
        "position": [
          2,
          5
        ],
        "houseStyle": "blue"
      },
      {
        "id": "stop-3",
        "order": 2,
        "item": "letter",
        "label": "信件",
        "position": [
          7,
          5
        ],
        "houseStyle": "yellow"
      },
      {
        "id": "stop-4",
        "order": 3,
        "item": "milk",
        "label": "鮮奶",
        "position": [
          3,
          3
        ],
        "houseStyle": "green"
      },
      {
        "id": "stop-5",
        "order": 4,
        "item": "cat-food",
        "label": "貓罐頭",
        "position": [
          1,
          1
        ],
        "houseStyle": "pink"
      }
    ],
    "oneWayEdges": [
      {
        "from": [
          0,
          6
        ],
        "to": [
          1,
          6
        ]
      },
      {
        "from": [
          1,
          5
        ],
        "to": [
          1,
          6
        ]
      },
      {
        "from": [
          2,
          5
        ],
        "to": [
          2,
          6
        ]
      },
      {
        "from": [
          5,
          7
        ],
        "to": [
          4,
          7
        ]
      }
    ],
    "solutionPath": [
      [
        7,
        7
      ],
      [
        6,
        7
      ],
      [
        5,
        7
      ],
      [
        4,
        7
      ],
      [
        3,
        7
      ],
      [
        2,
        7
      ],
      [
        1,
        7
      ],
      [
        0,
        7
      ],
      [
        0,
        6
      ],
      [
        0,
        5
      ],
      [
        1,
        5
      ],
      [
        2,
        5
      ],
      [
        3,
        5
      ],
      [
        4,
        5
      ],
      [
        5,
        5
      ],
      [
        6,
        5
      ],
      [
        7,
        5
      ],
      [
        7,
        4
      ],
      [
        7,
        3
      ],
      [
        6,
        3
      ],
      [
        5,
        3
      ],
      [
        4,
        3
      ],
      [
        3,
        3
      ],
      [
        2,
        3
      ],
      [
        1,
        3
      ],
      [
        0,
        3
      ],
      [
        0,
        2
      ],
      [
        0,
        1
      ],
      [
        1,
        1
      ]
    ],
    "optimalSteps": 28,
    "optimalSolutionCount": 1,
    "fuelLimit": 31,
    "metrics": {
      "passableCellCount": 38,
      "stopCount": 5,
      "obstacleCount": 26,
      "oneWayEdgeCount": 4,
      "branchCellCount": 7,
      "detourLoopCount": 1,
      "bridgeCount": 2,
      "solverNodes": 38,
      "solverBacktracks": 9,
      "solverMaxDepth": 28,
      "canonicalSignature": "8x8;road,grass,plaza,road,road,road,road,road/road,barrier,road,fence,road,fence,road,grass/road,crate,road,barrier,road,road,fence,tree/road,grass,bridge,grass,road,barrier,barrier,barrier/road,grass,road,barrier,plaza,grass,tree,fence/plaza,road,plaza,grass,road,road,water,barrier/road,road,road,grass,road,water,plaza,tree/road,road,road,tree,road,bridge,road,road;S:0,0;P:0@5,0|1@5,2|2@0,2|3@4,4|4@6,6;O:2,0>3,0|5,2>5,1|6,2>6,1|7,1>6,1;R:0,0>1,0>2,0>3,0>4,0>5,0>6,0>7,0>7,1>7,2>6,2>5,2>4,2>3,2>2,2>1,2>0,2>0,3>0,4>1,4>2,4>3,4>4,4>5,4>6,4>7,4>7,5>7,6>6,6"
    }
  },
  {
    "id": "L052",
    "chapter": 3,
    "title": "施工單行",
    "rows": 8,
    "columns": 8,
    "difficulty": 3,
    "difficultyScore": 311156,
    "seed": 351844,
    "generatorVersion": 2,
    "terrain": [
      [
        "tree",
        "road",
        "bridge",
        "road",
        "grass",
        "road",
        "road",
        "road"
      ],
      [
        "road",
        "road",
        "tree",
        "road",
        "water",
        "road",
        "crate",
        "road"
      ],
      [
        "barrier",
        "plaza",
        "grass",
        "plaza",
        "grass",
        "plaza",
        "road",
        "plaza"
      ],
      [
        "road",
        "road",
        "fence",
        "road",
        "grass",
        "road",
        "road",
        "road"
      ],
      [
        "road",
        "grass",
        "road",
        "road",
        "grass",
        "bridge",
        "barrier",
        "road"
      ],
      [
        "fence",
        "tree",
        "tree",
        "road",
        "water",
        "road",
        "grass",
        "road"
      ],
      [
        "grass",
        "road",
        "road",
        "road",
        "grass",
        "road",
        "grass",
        "road"
      ],
      [
        "grass",
        "barrier",
        "water",
        "road",
        "plaza",
        "road",
        "grass",
        "road"
      ]
    ],
    "start": [
      7,
      7
    ],
    "stops": [
      {
        "id": "stop-1",
        "order": 0,
        "item": "parcel",
        "label": "包裹",
        "position": [
          2,
          7
        ],
        "houseStyle": "blue"
      },
      {
        "id": "stop-2",
        "order": 1,
        "item": "mouse",
        "label": "玩具老鼠",
        "position": [
          2,
          5
        ],
        "houseStyle": "yellow"
      },
      {
        "id": "stop-3",
        "order": 2,
        "item": "flowers",
        "label": "花束",
        "position": [
          7,
          4
        ],
        "houseStyle": "green"
      },
      {
        "id": "stop-4",
        "order": 3,
        "item": "dried-fish",
        "label": "魚乾",
        "position": [
          2,
          3
        ],
        "houseStyle": "pink"
      },
      {
        "id": "stop-5",
        "order": 4,
        "item": "yarn",
        "label": "毛線球",
        "position": [
          2,
          1
        ],
        "houseStyle": "blue"
      }
    ],
    "oneWayEdges": [
      {
        "from": [
          2,
          5
        ],
        "to": [
          2,
          6
        ]
      },
      {
        "from": [
          3,
          5
        ],
        "to": [
          3,
          6
        ]
      },
      {
        "from": [
          4,
          3
        ],
        "to": [
          3,
          3
        ]
      },
      {
        "from": [
          0,
          2
        ],
        "to": [
          0,
          1
        ]
      }
    ],
    "solutionPath": [
      [
        7,
        7
      ],
      [
        6,
        7
      ],
      [
        5,
        7
      ],
      [
        4,
        7
      ],
      [
        3,
        7
      ],
      [
        2,
        7
      ],
      [
        1,
        7
      ],
      [
        0,
        7
      ],
      [
        0,
        6
      ],
      [
        0,
        5
      ],
      [
        1,
        5
      ],
      [
        2,
        5
      ],
      [
        3,
        5
      ],
      [
        4,
        5
      ],
      [
        5,
        5
      ],
      [
        6,
        5
      ],
      [
        7,
        5
      ],
      [
        7,
        4
      ],
      [
        7,
        3
      ],
      [
        6,
        3
      ],
      [
        5,
        3
      ],
      [
        4,
        3
      ],
      [
        3,
        3
      ],
      [
        2,
        3
      ],
      [
        1,
        3
      ],
      [
        0,
        3
      ],
      [
        0,
        2
      ],
      [
        0,
        1
      ],
      [
        1,
        1
      ],
      [
        2,
        1
      ]
    ],
    "optimalSteps": 29,
    "optimalSolutionCount": 1,
    "fuelLimit": 35,
    "metrics": {
      "passableCellCount": 39,
      "stopCount": 5,
      "obstacleCount": 25,
      "oneWayEdgeCount": 4,
      "branchCellCount": 7,
      "detourLoopCount": 1,
      "bridgeCount": 2,
      "solverNodes": 37,
      "solverBacktracks": 7,
      "solverMaxDepth": 29,
      "canonicalSignature": "8x8;grass,barrier,water,road,plaza,road,grass,road/grass,road,road,road,grass,road,grass,road/fence,tree,tree,road,water,road,grass,road/road,grass,road,road,grass,bridge,barrier,road/road,road,fence,road,grass,road,road,road/barrier,plaza,grass,plaza,grass,plaza,road,plaza/road,road,tree,road,water,road,crate,road/tree,road,bridge,road,grass,road,road,road;S:0,7;P:0@5,7|1@5,5|2@0,4|3@5,3|4@5,1;O:3,3>4,3|4,5>4,6|5,5>5,6|7,2>7,1;R:0,7>1,7>2,7>3,7>4,7>5,7>6,7>7,7>7,6>7,5>6,5>5,5>4,5>3,5>2,5>1,5>0,5>0,4>0,3>1,3>2,3>3,3>4,3>5,3>6,3>7,3>7,2>7,1>6,1>5,1"
    }
  },
  {
    "id": "L053",
    "chapter": 3,
    "title": "水巷四站",
    "rows": 8,
    "columns": 8,
    "difficulty": 3,
    "difficultyScore": 311360,
    "seed": 352841,
    "generatorVersion": 2,
    "terrain": [
      [
        "road",
        "fence",
        "road",
        "road",
        "plaza",
        "barrier",
        "crate",
        "grass"
      ],
      [
        "road",
        "water",
        "road",
        "water",
        "road",
        "road",
        "barrier",
        "road"
      ],
      [
        "road",
        "road",
        "road",
        "grass",
        "road",
        "grass",
        "road",
        "road"
      ],
      [
        "road",
        "road",
        "bridge",
        "water",
        "road",
        "barrier",
        "road",
        "grass"
      ],
      [
        "road",
        "fence",
        "plaza",
        "grass",
        "road",
        "tree",
        "plaza",
        "road"
      ],
      [
        "road",
        "barrier",
        "road",
        "water",
        "road",
        "fence",
        "road",
        "water"
      ],
      [
        "plaza",
        "crate",
        "road",
        "fence",
        "plaza",
        "grass",
        "road",
        "road"
      ],
      [
        "road",
        "road",
        "road",
        "barrier",
        "road",
        "bridge",
        "road",
        "grass"
      ]
    ],
    "start": [
      0,
      0
    ],
    "stops": [
      {
        "id": "stop-1",
        "order": 0,
        "item": "cat-food",
        "label": "貓罐頭",
        "position": [
          6,
          0
        ],
        "houseStyle": "yellow"
      },
      {
        "id": "stop-2",
        "order": 1,
        "item": "cat-grass",
        "label": "貓草",
        "position": [
          4,
          2
        ],
        "houseStyle": "green"
      },
      {
        "id": "stop-3",
        "order": 2,
        "item": "paw-cookie",
        "label": "貓掌餅乾",
        "position": [
          0,
          4
        ],
        "houseStyle": "pink"
      },
      {
        "id": "stop-4",
        "order": 3,
        "item": "parcel",
        "label": "包裹",
        "position": [
          6,
          4
        ],
        "houseStyle": "blue"
      },
      {
        "id": "stop-5",
        "order": 4,
        "item": "mouse",
        "label": "玩具老鼠",
        "position": [
          4,
          6
        ],
        "houseStyle": "yellow"
      }
    ],
    "oneWayEdges": [
      {
        "from": [
          2,
          2
        ],
        "to": [
          2,
          1
        ]
      },
      {
        "from": [
          3,
          2
        ],
        "to": [
          3,
          1
        ]
      },
      {
        "from": [
          2,
          4
        ],
        "to": [
          3,
          4
        ]
      },
      {
        "from": [
          3,
          4
        ],
        "to": [
          4,
          4
        ]
      }
    ],
    "solutionPath": [
      [
        0,
        0
      ],
      [
        1,
        0
      ],
      [
        2,
        0
      ],
      [
        3,
        0
      ],
      [
        4,
        0
      ],
      [
        5,
        0
      ],
      [
        6,
        0
      ],
      [
        7,
        0
      ],
      [
        7,
        1
      ],
      [
        7,
        2
      ],
      [
        6,
        2
      ],
      [
        5,
        2
      ],
      [
        4,
        2
      ],
      [
        3,
        2
      ],
      [
        2,
        2
      ],
      [
        1,
        2
      ],
      [
        0,
        2
      ],
      [
        0,
        3
      ],
      [
        0,
        4
      ],
      [
        1,
        4
      ],
      [
        2,
        4
      ],
      [
        3,
        4
      ],
      [
        4,
        4
      ],
      [
        5,
        4
      ],
      [
        6,
        4
      ],
      [
        7,
        4
      ],
      [
        7,
        5
      ],
      [
        7,
        6
      ],
      [
        6,
        6
      ],
      [
        5,
        6
      ],
      [
        4,
        6
      ]
    ],
    "optimalSteps": 30,
    "optimalSolutionCount": 1,
    "fuelLimit": 36,
    "metrics": {
      "passableCellCount": 40,
      "stopCount": 5,
      "obstacleCount": 24,
      "oneWayEdgeCount": 4,
      "branchCellCount": 7,
      "detourLoopCount": 1,
      "bridgeCount": 2,
      "solverNodes": 37,
      "solverBacktracks": 6,
      "solverMaxDepth": 30,
      "canonicalSignature": "8x8;grass,crate,barrier,plaza,road,road,fence,road/road,barrier,road,road,water,road,water,road/road,road,grass,road,grass,road,road,road/grass,road,barrier,road,water,bridge,road,road/road,plaza,tree,road,grass,plaza,fence,road/water,road,fence,road,water,road,barrier,road/road,road,grass,plaza,fence,road,crate,plaza/grass,road,bridge,road,barrier,road,road,road;S:0,7;P:0@6,7|1@4,5|2@0,3|3@6,3|4@4,1;O:2,3>3,3|2,5>2,6|3,3>4,3|3,5>3,6;R:0,7>1,7>2,7>3,7>4,7>5,7>6,7>7,7>7,6>7,5>6,5>5,5>4,5>3,5>2,5>1,5>0,5>0,4>0,3>1,3>2,3>3,3>4,3>5,3>6,3>7,3>7,2>7,1>6,1>5,1>4,1"
    }
  },
  {
    "id": "L054",
    "chapter": 3,
    "title": "留路任務",
    "rows": 8,
    "columns": 8,
    "difficulty": 3,
    "difficultyScore": 311330,
    "seed": 353838,
    "generatorVersion": 2,
    "terrain": [
      [
        "road",
        "road",
        "road",
        "road",
        "road",
        "road",
        "plaza",
        "road"
      ],
      [
        "grass",
        "fence",
        "grass",
        "grass",
        "fence",
        "grass",
        "grass",
        "road"
      ],
      [
        "road",
        "road",
        "road",
        "bridge",
        "plaza",
        "road",
        "road",
        "road"
      ],
      [
        "road",
        "grass",
        "fence",
        "crate",
        "water",
        "water",
        "tree",
        "barrier"
      ],
      [
        "plaza",
        "road",
        "road",
        "road",
        "road",
        "road",
        "plaza",
        "road"
      ],
      [
        "road",
        "grass",
        "road",
        "tree",
        "fence",
        "crate",
        "crate",
        "bridge"
      ],
      [
        "road",
        "road",
        "fence",
        "road",
        "plaza",
        "road",
        "road",
        "road"
      ],
      [
        "road",
        "road",
        "tree",
        "fence",
        "road",
        "water",
        "barrier",
        "road"
      ]
    ],
    "start": [
      0,
      0
    ],
    "stops": [
      {
        "id": "stop-1",
        "order": 0,
        "item": "yarn",
        "label": "毛線球",
        "position": [
          0,
          6
        ],
        "houseStyle": "green"
      },
      {
        "id": "stop-2",
        "order": 1,
        "item": "letter",
        "label": "信件",
        "position": [
          2,
          4
        ],
        "houseStyle": "pink"
      },
      {
        "id": "stop-3",
        "order": 2,
        "item": "milk",
        "label": "鮮奶",
        "position": [
          4,
          0
        ],
        "houseStyle": "blue"
      },
      {
        "id": "stop-4",
        "order": 3,
        "item": "cat-food",
        "label": "貓罐頭",
        "position": [
          4,
          6
        ],
        "houseStyle": "yellow"
      },
      {
        "id": "stop-5",
        "order": 4,
        "item": "cat-grass",
        "label": "貓草",
        "position": [
          6,
          4
        ],
        "houseStyle": "green"
      }
    ],
    "oneWayEdges": [
      {
        "from": [
          0,
          6
        ],
        "to": [
          0,
          7
        ]
      },
      {
        "from": [
          2,
          6
        ],
        "to": [
          2,
          5
        ]
      },
      {
        "from": [
          2,
          3
        ],
        "to": [
          2,
          2
        ]
      },
      {
        "from": [
          4,
          7
        ],
        "to": [
          5,
          7
        ]
      }
    ],
    "solutionPath": [
      [
        0,
        0
      ],
      [
        0,
        1
      ],
      [
        0,
        2
      ],
      [
        0,
        3
      ],
      [
        0,
        4
      ],
      [
        0,
        5
      ],
      [
        0,
        6
      ],
      [
        0,
        7
      ],
      [
        1,
        7
      ],
      [
        2,
        7
      ],
      [
        2,
        6
      ],
      [
        2,
        5
      ],
      [
        2,
        4
      ],
      [
        2,
        3
      ],
      [
        2,
        2
      ],
      [
        2,
        1
      ],
      [
        2,
        0
      ],
      [
        3,
        0
      ],
      [
        4,
        0
      ],
      [
        4,
        1
      ],
      [
        4,
        2
      ],
      [
        4,
        3
      ],
      [
        4,
        4
      ],
      [
        4,
        5
      ],
      [
        4,
        6
      ],
      [
        4,
        7
      ],
      [
        5,
        7
      ],
      [
        6,
        7
      ],
      [
        6,
        6
      ],
      [
        6,
        5
      ],
      [
        6,
        4
      ]
    ],
    "optimalSteps": 30,
    "optimalSolutionCount": 1,
    "fuelLimit": 35,
    "metrics": {
      "passableCellCount": 40,
      "stopCount": 5,
      "obstacleCount": 24,
      "oneWayEdgeCount": 4,
      "branchCellCount": 7,
      "detourLoopCount": 1,
      "bridgeCount": 2,
      "solverNodes": 34,
      "solverBacktracks": 3,
      "solverMaxDepth": 30,
      "canonicalSignature": "8x8;road,barrier,water,road,fence,tree,road,road/road,road,road,plaza,road,fence,road,road/bridge,crate,crate,fence,tree,road,grass,road/road,plaza,road,road,road,road,road,plaza/barrier,tree,water,water,crate,fence,grass,road/road,road,road,plaza,bridge,road,road,road/road,grass,grass,fence,grass,grass,fence,grass/road,plaza,road,road,road,road,road,road;S:7,7;P:0@7,1|1@5,3|2@3,7|3@3,1|4@1,3;O:3,0>2,0|5,1>5,2|5,4>5,5|7,1>7,0;R:7,7>7,6>7,5>7,4>7,3>7,2>7,1>7,0>6,0>5,0>5,1>5,2>5,3>5,4>5,5>5,6>5,7>4,7>3,7>3,6>3,5>3,4>3,3>3,2>3,1>3,0>2,0>1,0>1,1>1,2>1,3"
    }
  },
  {
    "id": "L055",
    "chapter": 3,
    "title": "郵筒轉向",
    "rows": 8,
    "columns": 8,
    "difficulty": 3,
    "difficultyScore": 311584,
    "seed": 354835,
    "generatorVersion": 2,
    "terrain": [
      [
        "road",
        "road",
        "road",
        "grass",
        "road",
        "bridge",
        "road",
        "fence"
      ],
      [
        "plaza",
        "barrier",
        "road",
        "barrier",
        "plaza",
        "fence",
        "road",
        "road"
      ],
      [
        "road",
        "grass",
        "road",
        "grass",
        "road",
        "tree",
        "road",
        "water"
      ],
      [
        "road",
        "grass",
        "plaza",
        "water",
        "road",
        "grass",
        "road",
        "road"
      ],
      [
        "road",
        "water",
        "bridge",
        "crate",
        "road",
        "grass",
        "plaza",
        "water"
      ],
      [
        "road",
        "road",
        "road",
        "fence",
        "road",
        "grass",
        "plaza",
        "grass"
      ],
      [
        "road",
        "road",
        "road",
        "fence",
        "road",
        "grass",
        "road",
        "road"
      ],
      [
        "road",
        "tree",
        "road",
        "road",
        "plaza",
        "road",
        "crate",
        "road"
      ]
    ],
    "start": [
      7,
      0
    ],
    "stops": [
      {
        "id": "stop-1",
        "order": 0,
        "item": "mouse",
        "label": "玩具老鼠",
        "position": [
          1,
          0
        ],
        "houseStyle": "pink"
      },
      {
        "id": "stop-2",
        "order": 1,
        "item": "flowers",
        "label": "花束",
        "position": [
          3,
          2
        ],
        "houseStyle": "blue"
      },
      {
        "id": "stop-3",
        "order": 2,
        "item": "dried-fish",
        "label": "魚乾",
        "position": [
          7,
          4
        ],
        "houseStyle": "yellow"
      },
      {
        "id": "stop-4",
        "order": 3,
        "item": "yarn",
        "label": "毛線球",
        "position": [
          1,
          4
        ],
        "houseStyle": "green"
      },
      {
        "id": "stop-5",
        "order": 4,
        "item": "letter",
        "label": "信件",
        "position": [
          4,
          6
        ],
        "houseStyle": "pink"
      }
    ],
    "oneWayEdges": [
      {
        "from": [
          5,
          2
        ],
        "to": [
          5,
          1
        ]
      },
      {
        "from": [
          6,
          2
        ],
        "to": [
          6,
          1
        ]
      },
      {
        "from": [
          0,
          1
        ],
        "to": [
          0,
          2
        ]
      },
      {
        "from": [
          3,
          4
        ],
        "to": [
          2,
          4
        ]
      }
    ],
    "solutionPath": [
      [
        7,
        0
      ],
      [
        6,
        0
      ],
      [
        5,
        0
      ],
      [
        4,
        0
      ],
      [
        3,
        0
      ],
      [
        2,
        0
      ],
      [
        1,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        1
      ],
      [
        0,
        2
      ],
      [
        1,
        2
      ],
      [
        2,
        2
      ],
      [
        3,
        2
      ],
      [
        4,
        2
      ],
      [
        5,
        2
      ],
      [
        6,
        2
      ],
      [
        7,
        2
      ],
      [
        7,
        3
      ],
      [
        7,
        4
      ],
      [
        6,
        4
      ],
      [
        5,
        4
      ],
      [
        4,
        4
      ],
      [
        3,
        4
      ],
      [
        2,
        4
      ],
      [
        1,
        4
      ],
      [
        0,
        4
      ],
      [
        0,
        5
      ],
      [
        0,
        6
      ],
      [
        1,
        6
      ],
      [
        2,
        6
      ],
      [
        3,
        6
      ],
      [
        4,
        6
      ]
    ],
    "optimalSteps": 31,
    "optimalSolutionCount": 1,
    "fuelLimit": 37,
    "metrics": {
      "passableCellCount": 41,
      "stopCount": 5,
      "obstacleCount": 23,
      "oneWayEdgeCount": 4,
      "branchCellCount": 7,
      "detourLoopCount": 1,
      "bridgeCount": 2,
      "solverNodes": 39,
      "solverBacktracks": 7,
      "solverMaxDepth": 31,
      "canonicalSignature": "8x8;fence,road,bridge,road,grass,road,road,road/road,road,fence,plaza,barrier,road,barrier,plaza/water,road,tree,road,grass,road,grass,road/road,road,grass,road,water,plaza,grass,road/water,plaza,grass,road,crate,bridge,water,road/grass,plaza,grass,road,fence,road,road,road/road,road,grass,road,fence,road,road,road/road,crate,road,plaza,road,road,tree,road;S:7,7;P:0@1,7|1@3,5|2@7,3|3@1,3|4@4,1;O:0,6>0,5|3,3>2,3|5,5>5,6|6,5>6,6;R:7,7>6,7>5,7>4,7>3,7>2,7>1,7>0,7>0,6>0,5>1,5>2,5>3,5>4,5>5,5>6,5>7,5>7,4>7,3>6,3>5,3>4,3>3,3>2,3>1,3>0,3>0,2>0,1>1,1>2,1>3,1>4,1"
    }
  },
  {
    "id": "L056",
    "chapter": 3,
    "title": "晚班急件",
    "rows": 8,
    "columns": 8,
    "difficulty": 3,
    "difficultyScore": 311594,
    "seed": 355832,
    "generatorVersion": 2,
    "terrain": [
      [
        "road",
        "road",
        "road",
        "water",
        "road",
        "bridge",
        "road",
        "road"
      ],
      [
        "plaza",
        "fence",
        "road",
        "barrier",
        "plaza",
        "grass",
        "road",
        "barrier"
      ],
      [
        "road",
        "fence",
        "road",
        "tree",
        "road",
        "road",
        "road",
        "road"
      ],
      [
        "road",
        "fence",
        "plaza",
        "grass",
        "road",
        "road",
        "road",
        "grass"
      ],
      [
        "road",
        "grass",
        "bridge",
        "grass",
        "road",
        "tree",
        "plaza",
        "road"
      ],
      [
        "road",
        "crate",
        "road",
        "fence",
        "road",
        "road",
        "grass",
        "road"
      ],
      [
        "road",
        "grass",
        "road",
        "fence",
        "road",
        "tree",
        "tree",
        "grass"
      ],
      [
        "road",
        "barrier",
        "road",
        "road",
        "plaza",
        "road",
        "road",
        "grass"
      ]
    ],
    "start": [
      7,
      0
    ],
    "stops": [
      {
        "id": "stop-1",
        "order": 0,
        "item": "cat-grass",
        "label": "貓草",
        "position": [
          1,
          0
        ],
        "houseStyle": "blue"
      },
      {
        "id": "stop-2",
        "order": 1,
        "item": "paw-cookie",
        "label": "貓掌餅乾",
        "position": [
          3,
          2
        ],
        "houseStyle": "yellow"
      },
      {
        "id": "stop-3",
        "order": 2,
        "item": "parcel",
        "label": "包裹",
        "position": [
          7,
          4
        ],
        "houseStyle": "green"
      },
      {
        "id": "stop-4",
        "order": 3,
        "item": "mouse",
        "label": "玩具老鼠",
        "position": [
          1,
          4
        ],
        "houseStyle": "pink"
      },
      {
        "id": "stop-5",
        "order": 4,
        "item": "flowers",
        "label": "花束",
        "position": [
          4,
          6
        ],
        "houseStyle": "blue"
      }
    ],
    "oneWayEdges": [
      {
        "from": [
          2,
          6
        ],
        "to": [
          2,
          5
        ]
      },
      {
        "from": [
          3,
          6
        ],
        "to": [
          3,
          5
        ]
      },
      {
        "from": [
          3,
          0
        ],
        "to": [
          2,
          0
        ]
      },
      {
        "from": [
          3,
          4
        ],
        "to": [
          2,
          4
        ]
      }
    ],
    "solutionPath": [
      [
        7,
        0
      ],
      [
        6,
        0
      ],
      [
        5,
        0
      ],
      [
        4,
        0
      ],
      [
        3,
        0
      ],
      [
        2,
        0
      ],
      [
        1,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        1
      ],
      [
        0,
        2
      ],
      [
        1,
        2
      ],
      [
        2,
        2
      ],
      [
        3,
        2
      ],
      [
        4,
        2
      ],
      [
        5,
        2
      ],
      [
        6,
        2
      ],
      [
        7,
        2
      ],
      [
        7,
        3
      ],
      [
        7,
        4
      ],
      [
        6,
        4
      ],
      [
        5,
        4
      ],
      [
        4,
        4
      ],
      [
        3,
        4
      ],
      [
        2,
        4
      ],
      [
        1,
        4
      ],
      [
        0,
        4
      ],
      [
        0,
        5
      ],
      [
        0,
        6
      ],
      [
        1,
        6
      ],
      [
        2,
        6
      ],
      [
        3,
        6
      ],
      [
        4,
        6
      ]
    ],
    "optimalSteps": 31,
    "optimalSolutionCount": 1,
    "fuelLimit": 34,
    "metrics": {
      "passableCellCount": 41,
      "stopCount": 5,
      "obstacleCount": 23,
      "oneWayEdgeCount": 4,
      "branchCellCount": 7,
      "detourLoopCount": 1,
      "bridgeCount": 2,
      "solverNodes": 40,
      "solverBacktracks": 8,
      "solverMaxDepth": 31,
      "canonicalSignature": "8x8;grass,grass,road,road,grass,road,barrier,road/road,tree,grass,plaza,road,road,road,road/road,tree,road,tree,road,road,grass,bridge/plaza,road,road,road,road,road,plaza,road/road,fence,fence,grass,grass,tree,barrier,water/road,road,road,bridge,plaza,road,road,road/barrier,grass,crate,grass,fence,fence,fence,road/road,road,road,road,road,road,plaza,road;S:7,0;P:0@7,6|1@5,4|2@3,0|3@3,6|4@1,3;O:1,4>2,4|1,5>2,5|3,4>3,5|7,4>7,5;R:7,0>7,1>7,2>7,3>7,4>7,5>7,6>7,7>6,7>5,7>5,6>5,5>5,4>5,3>5,2>5,1>5,0>4,0>3,0>3,1>3,2>3,3>3,4>3,5>3,6>3,7>2,7>1,7>1,6>1,5>1,4>1,3"
    }
  },
  {
    "id": "L057",
    "chapter": 3,
    "title": "巷弄連送",
    "rows": 8,
    "columns": 8,
    "difficulty": 3,
    "difficultyScore": 311507,
    "seed": 356829,
    "generatorVersion": 2,
    "terrain": [
      [
        "road",
        "grass",
        "road",
        "road",
        "road",
        "barrier",
        "grass",
        "grass"
      ],
      [
        "road",
        "fence",
        "road",
        "grass",
        "plaza",
        "road",
        "fence",
        "tree"
      ],
      [
        "road",
        "grass",
        "road",
        "grass",
        "road",
        "grass",
        "plaza",
        "grass"
      ],
      [
        "road",
        "road",
        "bridge",
        "tree",
        "road",
        "barrier",
        "road",
        "road"
      ],
      [
        "road",
        "road",
        "plaza",
        "fence",
        "road",
        "grass",
        "road",
        "barrier"
      ],
      [
        "road",
        "water",
        "road",
        "grass",
        "road",
        "grass",
        "road",
        "grass"
      ],
      [
        "plaza",
        "tree",
        "road",
        "barrier",
        "road",
        "barrier",
        "road",
        "road"
      ],
      [
        "road",
        "road",
        "road",
        "barrier",
        "plaza",
        "bridge",
        "road",
        "grass"
      ]
    ],
    "start": [
      0,
      0
    ],
    "stops": [
      {
        "id": "stop-1",
        "order": 0,
        "item": "letter",
        "label": "信件",
        "position": [
          6,
          0
        ],
        "houseStyle": "yellow"
      },
      {
        "id": "stop-2",
        "order": 1,
        "item": "milk",
        "label": "鮮奶",
        "position": [
          4,
          2
        ],
        "houseStyle": "green"
      },
      {
        "id": "stop-3",
        "order": 2,
        "item": "cat-food",
        "label": "貓罐頭",
        "position": [
          1,
          4
        ],
        "houseStyle": "pink"
      },
      {
        "id": "stop-4",
        "order": 3,
        "item": "cat-grass",
        "label": "貓草",
        "position": [
          7,
          4
        ],
        "houseStyle": "blue"
      },
      {
        "id": "stop-5",
        "order": 4,
        "item": "paw-cookie",
        "label": "貓掌餅乾",
        "position": [
          2,
          6
        ],
        "houseStyle": "yellow"
      }
    ],
    "oneWayEdges": [
      {
        "from": [
          3,
          2
        ],
        "to": [
          3,
          1
        ]
      },
      {
        "from": [
          4,
          2
        ],
        "to": [
          4,
          1
        ]
      },
      {
        "from": [
          4,
          0
        ],
        "to": [
          5,
          0
        ]
      },
      {
        "from": [
          2,
          2
        ],
        "to": [
          1,
          2
        ]
      },
      {
        "from": [
          0,
          2
        ],
        "to": [
          0,
          3
        ]
      }
    ],
    "solutionPath": [
      [
        0,
        0
      ],
      [
        1,
        0
      ],
      [
        2,
        0
      ],
      [
        3,
        0
      ],
      [
        4,
        0
      ],
      [
        5,
        0
      ],
      [
        6,
        0
      ],
      [
        7,
        0
      ],
      [
        7,
        1
      ],
      [
        7,
        2
      ],
      [
        6,
        2
      ],
      [
        5,
        2
      ],
      [
        4,
        2
      ],
      [
        3,
        2
      ],
      [
        2,
        2
      ],
      [
        1,
        2
      ],
      [
        0,
        2
      ],
      [
        0,
        3
      ],
      [
        0,
        4
      ],
      [
        1,
        4
      ],
      [
        2,
        4
      ],
      [
        3,
        4
      ],
      [
        4,
        4
      ],
      [
        5,
        4
      ],
      [
        6,
        4
      ],
      [
        7,
        4
      ],
      [
        7,
        5
      ],
      [
        7,
        6
      ],
      [
        6,
        6
      ],
      [
        5,
        6
      ],
      [
        4,
        6
      ],
      [
        3,
        6
      ],
      [
        2,
        6
      ]
    ],
    "optimalSteps": 32,
    "optimalSolutionCount": 1,
    "fuelLimit": 37,
    "metrics": {
      "passableCellCount": 38,
      "stopCount": 5,
      "obstacleCount": 26,
      "oneWayEdgeCount": 5,
      "branchCellCount": 3,
      "detourLoopCount": 1,
      "bridgeCount": 2,
      "solverNodes": 40,
      "solverBacktracks": 7,
      "solverMaxDepth": 32,
      "canonicalSignature": "8x8;grass,grass,barrier,road,road,road,grass,road/tree,fence,road,plaza,grass,road,fence,road/grass,plaza,grass,road,grass,road,grass,road/road,road,barrier,road,tree,bridge,road,road/barrier,road,grass,road,fence,plaza,road,road/grass,road,grass,road,grass,road,water,road/road,road,barrier,road,barrier,road,tree,plaza/grass,road,bridge,plaza,barrier,road,road,road;S:0,7;P:0@6,7|1@4,5|2@1,3|3@7,3|4@2,1;O:0,5>0,4|2,5>1,5|3,5>3,6|4,5>4,6|4,7>5,7;R:0,7>1,7>2,7>3,7>4,7>5,7>6,7>7,7>7,6>7,5>6,5>5,5>4,5>3,5>2,5>1,5>0,5>0,4>0,3>1,3>2,3>3,3>4,3>5,3>6,3>7,3>7,2>7,1>6,1>5,1>4,1>3,1>2,1"
    }
  },
  {
    "id": "L058",
    "chapter": 3,
    "title": "五站挑戰",
    "rows": 8,
    "columns": 8,
    "difficulty": 3,
    "difficultyScore": 311710,
    "seed": 357826,
    "generatorVersion": 2,
    "terrain": [
      [
        "grass",
        "tree",
        "road",
        "grass",
        "road",
        "fence",
        "road",
        "water"
      ],
      [
        "water",
        "plaza",
        "road",
        "road",
        "road",
        "road",
        "road",
        "road"
      ],
      [
        "road",
        "grass",
        "water",
        "grass",
        "grass",
        "crate",
        "grass",
        "plaza"
      ],
      [
        "road",
        "plaza",
        "road",
        "road",
        "road",
        "road",
        "road",
        "road"
      ],
      [
        "road",
        "grass",
        "grass",
        "grass",
        "crate",
        "grass",
        "grass",
        "barrier"
      ],
      [
        "road",
        "road",
        "road",
        "plaza",
        "road",
        "road",
        "road",
        "road"
      ],
      [
        "grass",
        "road",
        "road",
        "tree",
        "water",
        "fence",
        "fence",
        "road"
      ],
      [
        "road",
        "road",
        "road",
        "road",
        "road",
        "road",
        "plaza",
        "road"
      ]
    ],
    "start": [
      7,
      0
    ],
    "stops": [
      {
        "id": "stop-1",
        "order": 0,
        "item": "flowers",
        "label": "花束",
        "position": [
          7,
          6
        ],
        "houseStyle": "green"
      },
      {
        "id": "stop-2",
        "order": 1,
        "item": "dried-fish",
        "label": "魚乾",
        "position": [
          5,
          3
        ],
        "houseStyle": "pink"
      },
      {
        "id": "stop-3",
        "order": 2,
        "item": "yarn",
        "label": "毛線球",
        "position": [
          3,
          1
        ],
        "houseStyle": "blue"
      },
      {
        "id": "stop-4",
        "order": 3,
        "item": "letter",
        "label": "信件",
        "position": [
          2,
          7
        ],
        "houseStyle": "yellow"
      },
      {
        "id": "stop-5",
        "order": 4,
        "item": "milk",
        "label": "鮮奶",
        "position": [
          1,
          1
        ],
        "houseStyle": "green"
      }
    ],
    "oneWayEdges": [
      {
        "from": [
          5,
          1
        ],
        "to": [
          6,
          1
        ]
      },
      {
        "from": [
          5,
          2
        ],
        "to": [
          6,
          2
        ]
      },
      {
        "from": [
          5,
          7
        ],
        "to": [
          5,
          6
        ]
      },
      {
        "from": [
          3,
          1
        ],
        "to": [
          3,
          2
        ]
      },
      {
        "from": [
          2,
          7
        ],
        "to": [
          1,
          7
        ]
      }
    ],
    "solutionPath": [
      [
        7,
        0
      ],
      [
        7,
        1
      ],
      [
        7,
        2
      ],
      [
        7,
        3
      ],
      [
        7,
        4
      ],
      [
        7,
        5
      ],
      [
        7,
        6
      ],
      [
        7,
        7
      ],
      [
        6,
        7
      ],
      [
        5,
        7
      ],
      [
        5,
        6
      ],
      [
        5,
        5
      ],
      [
        5,
        4
      ],
      [
        5,
        3
      ],
      [
        5,
        2
      ],
      [
        5,
        1
      ],
      [
        5,
        0
      ],
      [
        4,
        0
      ],
      [
        3,
        0
      ],
      [
        3,
        1
      ],
      [
        3,
        2
      ],
      [
        3,
        3
      ],
      [
        3,
        4
      ],
      [
        3,
        5
      ],
      [
        3,
        6
      ],
      [
        3,
        7
      ],
      [
        2,
        7
      ],
      [
        1,
        7
      ],
      [
        1,
        6
      ],
      [
        1,
        5
      ],
      [
        1,
        4
      ],
      [
        1,
        3
      ],
      [
        1,
        2
      ],
      [
        1,
        1
      ]
    ],
    "optimalSteps": 33,
    "optimalSolutionCount": 1,
    "fuelLimit": 38,
    "metrics": {
      "passableCellCount": 40,
      "stopCount": 5,
      "obstacleCount": 24,
      "oneWayEdgeCount": 5,
      "branchCellCount": 4,
      "detourLoopCount": 1,
      "bridgeCount": 0,
      "solverNodes": 42,
      "solverBacktracks": 8,
      "solverMaxDepth": 33,
      "canonicalSignature": "8x8;grass,tree,road,grass,road,fence,road,water/water,plaza,road,road,road,road,road,road/road,grass,water,grass,grass,crate,grass,plaza/road,plaza,road,road,road,road,road,road/road,grass,grass,grass,crate,grass,grass,barrier/road,road,road,plaza,road,road,road,road/grass,road,road,tree,water,fence,fence,road/road,road,road,road,road,road,plaza,road;S:7,0;P:0@7,6|1@5,3|2@3,1|3@2,7|4@1,1;O:2,7>1,7|3,1>3,2|5,1>6,1|5,2>6,2|5,7>5,6;R:7,0>7,1>7,2>7,3>7,4>7,5>7,6>7,7>6,7>5,7>5,6>5,5>5,4>5,3>5,2>5,1>5,0>4,0>3,0>3,1>3,2>3,3>3,4>3,5>3,6>3,7>2,7>1,7>1,6>1,5>1,4>1,3>1,2>1,1"
    }
  },
  {
    "id": "L059",
    "chapter": 3,
    "title": "單行迷陣",
    "rows": 8,
    "columns": 8,
    "difficulty": 3,
    "difficultyScore": 311873,
    "seed": 358823,
    "generatorVersion": 2,
    "terrain": [
      [
        "road",
        "road",
        "road",
        "tree",
        "road",
        "plaza",
        "road",
        "tree"
      ],
      [
        "plaza",
        "fence",
        "road",
        "grass",
        "road",
        "fence",
        "road",
        "road"
      ],
      [
        "road",
        "grass",
        "road",
        "barrier",
        "road",
        "crate",
        "road",
        "grass"
      ],
      [
        "road",
        "grass",
        "road",
        "grass",
        "road",
        "road",
        "road",
        "road"
      ],
      [
        "road",
        "fence",
        "plaza",
        "grass",
        "road",
        "road",
        "road",
        "water"
      ],
      [
        "road",
        "grass",
        "road",
        "water",
        "road",
        "grass",
        "road",
        "road"
      ],
      [
        "road",
        "barrier",
        "road",
        "crate",
        "plaza",
        "grass",
        "plaza",
        "grass"
      ],
      [
        "road",
        "water",
        "road",
        "road",
        "road",
        "fence",
        "road",
        "road"
      ]
    ],
    "start": [
      7,
      0
    ],
    "stops": [
      {
        "id": "stop-1",
        "order": 0,
        "item": "paw-cookie",
        "label": "貓掌餅乾",
        "position": [
          1,
          0
        ],
        "houseStyle": "pink"
      },
      {
        "id": "stop-2",
        "order": 1,
        "item": "parcel",
        "label": "包裹",
        "position": [
          4,
          2
        ],
        "houseStyle": "blue"
      },
      {
        "id": "stop-3",
        "order": 2,
        "item": "mouse",
        "label": "玩具老鼠",
        "position": [
          6,
          4
        ],
        "houseStyle": "yellow"
      },
      {
        "id": "stop-4",
        "order": 3,
        "item": "flowers",
        "label": "花束",
        "position": [
          0,
          5
        ],
        "houseStyle": "green"
      },
      {
        "id": "stop-5",
        "order": 4,
        "item": "dried-fish",
        "label": "魚乾",
        "position": [
          6,
          6
        ],
        "houseStyle": "pink"
      }
    ],
    "oneWayEdges": [
      {
        "from": [
          3,
          6
        ],
        "to": [
          3,
          5
        ]
      },
      {
        "from": [
          4,
          6
        ],
        "to": [
          4,
          5
        ]
      },
      {
        "from": [
          7,
          0
        ],
        "to": [
          6,
          0
        ]
      },
      {
        "from": [
          0,
          2
        ],
        "to": [
          1,
          2
        ]
      },
      {
        "from": [
          3,
          4
        ],
        "to": [
          2,
          4
        ]
      }
    ],
    "solutionPath": [
      [
        7,
        0
      ],
      [
        6,
        0
      ],
      [
        5,
        0
      ],
      [
        4,
        0
      ],
      [
        3,
        0
      ],
      [
        2,
        0
      ],
      [
        1,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        1
      ],
      [
        0,
        2
      ],
      [
        1,
        2
      ],
      [
        2,
        2
      ],
      [
        3,
        2
      ],
      [
        4,
        2
      ],
      [
        5,
        2
      ],
      [
        6,
        2
      ],
      [
        7,
        2
      ],
      [
        7,
        3
      ],
      [
        7,
        4
      ],
      [
        6,
        4
      ],
      [
        5,
        4
      ],
      [
        4,
        4
      ],
      [
        3,
        4
      ],
      [
        2,
        4
      ],
      [
        1,
        4
      ],
      [
        0,
        4
      ],
      [
        0,
        5
      ],
      [
        0,
        6
      ],
      [
        1,
        6
      ],
      [
        2,
        6
      ],
      [
        3,
        6
      ],
      [
        4,
        6
      ],
      [
        5,
        6
      ],
      [
        6,
        6
      ]
    ],
    "optimalSteps": 33,
    "optimalSolutionCount": 1,
    "fuelLimit": 39,
    "metrics": {
      "passableCellCount": 41,
      "stopCount": 5,
      "obstacleCount": 23,
      "oneWayEdgeCount": 5,
      "branchCellCount": 5,
      "detourLoopCount": 1,
      "bridgeCount": 0,
      "solverNodes": 41,
      "solverBacktracks": 7,
      "solverMaxDepth": 33,
      "canonicalSignature": "8x8;road,grass,road,water,road,grass,road,tree/road,plaza,road,road,road,road,road,road/fence,grass,grass,road,road,crate,fence,plaza/road,plaza,road,road,road,road,road,road/road,crate,water,grass,grass,barrier,grass,tree/road,road,road,plaza,road,road,road,road/water,barrier,grass,fence,grass,grass,fence,road/road,road,road,road,road,road,plaza,road;S:7,0;P:0@7,6|1@5,3|2@3,1|3@2,7|4@1,1;O:1,3>2,3|1,4>2,4|3,4>3,5|5,7>5,6|7,0>7,1;R:7,0>7,1>7,2>7,3>7,4>7,5>7,6>7,7>6,7>5,7>5,6>5,5>5,4>5,3>5,2>5,1>5,0>4,0>3,0>3,1>3,2>3,3>3,4>3,5>3,6>3,7>2,7>1,7>1,6>1,5>1,4>1,3>1,2>1,1"
    }
  },
  {
    "id": "L060",
    "chapter": 3,
    "title": "巷弄全勤",
    "rows": 8,
    "columns": 8,
    "difficulty": 3,
    "difficultyScore": 311838,
    "seed": 359820,
    "generatorVersion": 2,
    "terrain": [
      [
        "grass",
        "road",
        "water",
        "tree",
        "road",
        "tree",
        "road",
        "grass"
      ],
      [
        "plaza",
        "road",
        "road",
        "road",
        "road",
        "road",
        "road",
        "plaza"
      ],
      [
        "bridge",
        "water",
        "grass",
        "water",
        "tree",
        "barrier",
        "fence",
        "barrier"
      ],
      [
        "road",
        "road",
        "road",
        "road",
        "road",
        "plaza",
        "road",
        "road"
      ],
      [
        "fence",
        "grass",
        "crate",
        "water",
        "water",
        "crate",
        "grass",
        "road"
      ],
      [
        "road",
        "road",
        "road",
        "road",
        "plaza",
        "road",
        "road",
        "road"
      ],
      [
        "road",
        "water",
        "grass",
        "grass",
        "road",
        "road",
        "fence",
        "grass"
      ],
      [
        "road",
        "plaza",
        "road",
        "road",
        "road",
        "road",
        "road",
        "road"
      ]
    ],
    "start": [
      7,
      7
    ],
    "stops": [
      {
        "id": "stop-1",
        "order": 0,
        "item": "milk",
        "label": "鮮奶",
        "position": [
          7,
          1
        ],
        "houseStyle": "blue"
      },
      {
        "id": "stop-2",
        "order": 1,
        "item": "cat-food",
        "label": "貓罐頭",
        "position": [
          5,
          4
        ],
        "houseStyle": "yellow"
      },
      {
        "id": "stop-3",
        "order": 2,
        "item": "cat-grass",
        "label": "貓草",
        "position": [
          3,
          5
        ],
        "houseStyle": "green"
      },
      {
        "id": "stop-4",
        "order": 3,
        "item": "paw-cookie",
        "label": "貓掌餅乾",
        "position": [
          1,
          0
        ],
        "houseStyle": "pink"
      },
      {
        "id": "stop-5",
        "order": 4,
        "item": "parcel",
        "label": "包裹",
        "position": [
          1,
          7
        ],
        "houseStyle": "blue"
      }
    ],
    "oneWayEdges": [
      {
        "from": [
          5,
          4
        ],
        "to": [
          6,
          4
        ]
      },
      {
        "from": [
          5,
          5
        ],
        "to": [
          6,
          5
        ]
      },
      {
        "from": [
          5,
          4
        ],
        "to": [
          5,
          5
        ]
      },
      {
        "from": [
          3,
          3
        ],
        "to": [
          3,
          2
        ]
      },
      {
        "from": [
          1,
          5
        ],
        "to": [
          1,
          6
        ]
      }
    ],
    "solutionPath": [
      [
        7,
        7
      ],
      [
        7,
        6
      ],
      [
        7,
        5
      ],
      [
        7,
        4
      ],
      [
        7,
        3
      ],
      [
        7,
        2
      ],
      [
        7,
        1
      ],
      [
        7,
        0
      ],
      [
        6,
        0
      ],
      [
        5,
        0
      ],
      [
        5,
        1
      ],
      [
        5,
        2
      ],
      [
        5,
        3
      ],
      [
        5,
        4
      ],
      [
        5,
        5
      ],
      [
        5,
        6
      ],
      [
        5,
        7
      ],
      [
        4,
        7
      ],
      [
        3,
        7
      ],
      [
        3,
        6
      ],
      [
        3,
        5
      ],
      [
        3,
        4
      ],
      [
        3,
        3
      ],
      [
        3,
        2
      ],
      [
        3,
        1
      ],
      [
        3,
        0
      ],
      [
        2,
        0
      ],
      [
        1,
        0
      ],
      [
        1,
        1
      ],
      [
        1,
        2
      ],
      [
        1,
        3
      ],
      [
        1,
        4
      ],
      [
        1,
        5
      ],
      [
        1,
        6
      ],
      [
        1,
        7
      ]
    ],
    "optimalSteps": 34,
    "optimalSolutionCount": 1,
    "fuelLimit": 39,
    "metrics": {
      "passableCellCount": 40,
      "stopCount": 5,
      "obstacleCount": 24,
      "oneWayEdgeCount": 5,
      "branchCellCount": 3,
      "detourLoopCount": 1,
      "bridgeCount": 1,
      "solverNodes": 42,
      "solverBacktracks": 7,
      "solverMaxDepth": 34,
      "canonicalSignature": "8x8;grass,plaza,barrier,road,road,road,grass,road/road,road,fence,road,grass,road,fence,road/tree,road,barrier,plaza,crate,road,road,road/road,road,tree,road,water,plaza,road,road/tree,road,water,road,water,road,grass,road/water,road,grass,road,crate,road,grass,road/road,road,water,road,grass,road,water,plaza/grass,plaza,bridge,road,fence,road,road,road;S:0,7;P:0@6,7|1@3,5|2@2,3|3@7,1|4@0,1;O:2,1>1,1|2,5>2,6|3,5>2,5|3,5>3,6|4,3>5,3;R:0,7>1,7>2,7>3,7>4,7>5,7>6,7>7,7>7,6>7,5>6,5>5,5>4,5>3,5>2,5>1,5>0,5>0,4>0,3>1,3>2,3>3,3>4,3>5,3>6,3>7,3>7,2>7,1>6,1>5,1>4,1>3,1>2,1>1,1>0,1"
    }
  }
];
});
