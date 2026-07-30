(function (root, factory) {
  const levels = factory();
  if (typeof module === 'object' && module.exports) module.exports = levels;
  else root.CAT_COURIER_LEVELS_081_100 = levels;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  return [
  {
    "id": "L081",
    "chapter": 5,
    "title": "全城鮮奶",
    "rows": 10,
    "columns": 10,
    "difficulty": 5,
    "difficultyScore": 515279,
    "seed": 580757,
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
        "road",
        "road",
        "road"
      ],
      [
        "crate",
        "barrier",
        "grass",
        "fence",
        "crate",
        "grass",
        "water",
        "grass",
        "grass",
        "road"
      ],
      [
        "plaza",
        "road",
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
        "road",
        "tree",
        "grass",
        "grass",
        "barrier",
        "water",
        "crate",
        "grass",
        "crate",
        "tree"
      ],
      [
        "road",
        "road",
        "road",
        "road",
        "plaza",
        "road",
        "road",
        "road",
        "road",
        "road"
      ],
      [
        "barrier",
        "road",
        "grass",
        "water",
        "grass",
        "road",
        "road",
        "grass",
        "crate",
        "road"
      ],
      [
        "road",
        "crate",
        "plaza",
        "bridge",
        "road",
        "road",
        "road",
        "road",
        "road",
        "plaza"
      ],
      [
        "road",
        "road",
        "road",
        "grass",
        "crate",
        "plaza",
        "grass",
        "grass",
        "road",
        "tree"
      ],
      [
        "tree",
        "road",
        "grass",
        "water",
        "tree",
        "road",
        "barrier",
        "water",
        "grass",
        "grass"
      ],
      [
        "grass",
        "tree",
        "barrier",
        "grass",
        "grass",
        "grass",
        "barrier",
        "grass",
        "water",
        "barrier"
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
        "item": "dried-fish",
        "label": "魚乾",
        "position": [
          0,
          6
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
          7
        ],
        "houseStyle": "green"
      },
      {
        "id": "stop-3",
        "order": 2,
        "item": "letter",
        "label": "信件",
        "position": [
          2,
          0
        ],
        "houseStyle": "pink"
      },
      {
        "id": "stop-4",
        "order": 3,
        "item": "milk",
        "label": "鮮奶",
        "position": [
          4,
          4
        ],
        "houseStyle": "blue"
      },
      {
        "id": "stop-5",
        "order": 4,
        "item": "cat-food",
        "label": "貓罐頭",
        "position": [
          6,
          9
        ],
        "houseStyle": "yellow"
      },
      {
        "id": "stop-6",
        "order": 5,
        "item": "cat-grass",
        "label": "貓草",
        "position": [
          6,
          2
        ],
        "houseStyle": "green"
      }
    ],
    "oneWayEdges": [
      {
        "from": [
          6,
          5
        ],
        "to": [
          5,
          5
        ]
      },
      {
        "from": [
          6,
          6
        ],
        "to": [
          5,
          6
        ]
      },
      {
        "from": [
          0,
          0
        ],
        "to": [
          0,
          1
        ]
      },
      {
        "from": [
          0,
          7
        ],
        "to": [
          0,
          8
        ]
      },
      {
        "from": [
          2,
          7
        ],
        "to": [
          2,
          6
        ]
      },
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
          4,
          4
        ],
        "to": [
          4,
          5
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
        0,
        8
      ],
      [
        0,
        9
      ],
      [
        1,
        9
      ],
      [
        2,
        9
      ],
      [
        2,
        8
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
        4,
        8
      ],
      [
        4,
        9
      ],
      [
        5,
        9
      ],
      [
        6,
        9
      ],
      [
        6,
        8
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
      ],
      [
        6,
        3
      ],
      [
        6,
        2
      ]
    ],
    "optimalSteps": 40,
    "optimalSolutionCount": 1,
    "fuelLimit": 44,
    "metrics": {
      "passableCellCount": 52,
      "stopCount": 6,
      "obstacleCount": 48,
      "oneWayEdgeCount": 7,
      "branchCellCount": 9,
      "detourLoopCount": 1,
      "bridgeCount": 1,
      "solverNodes": 48,
      "solverBacktracks": 7,
      "solverMaxDepth": 40,
      "canonicalSignature": "10x10;barrier,grass,tree,plaza,road,road,tree,road,road,road/water,grass,road,road,crate,road,crate,road,grass,road/grass,water,grass,road,grass,road,grass,plaza,grass,road/barrier,barrier,grass,road,road,road,crate,road,water,plaza/grass,road,plaza,road,road,road,water,road,grass,road/grass,tree,crate,road,grass,plaza,barrier,road,crate,road/grass,water,grass,bridge,water,road,grass,road,fence,road/barrier,grass,road,plaza,grass,road,grass,road,grass,road/tree,road,road,crate,road,road,tree,road,barrier,road/grass,tree,road,road,barrier,road,road,plaza,crate,road;S:9,9;P:0@3,9|1@2,7|2@9,7|3@5,5|4@0,3|5@7,3;O:2,7>3,7|2,9>1,9|3,3>3,4|4,3>4,4|5,5>4,5|7,7>8,7|9,9>8,9;R:9,9>8,9>7,9>6,9>5,9>4,9>3,9>2,9>1,9>0,9>0,8>0,7>1,7>2,7>3,7>4,7>5,7>6,7>7,7>8,7>9,7>9,6>9,5>8,5>7,5>6,5>5,5>4,5>3,5>2,5>1,5>0,5>0,4>0,3>1,3>2,3>3,3>4,3>5,3>6,3>7,3"
    }
  },
  {
    "id": "L082",
    "chapter": 5,
    "title": "長途魚乾",
    "rows": 10,
    "columns": 10,
    "difficulty": 5,
    "difficultyScore": 515610,
    "seed": 581754,
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
        "road",
        "road",
        "road"
      ],
      [
        "tree",
        "grass",
        "water",
        "road",
        "road",
        "barrier",
        "grass",
        "barrier",
        "water",
        "road"
      ],
      [
        "plaza",
        "road",
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
        "road",
        "grass",
        "grass",
        "tree",
        "crate",
        "grass",
        "barrier",
        "tree",
        "grass",
        "barrier"
      ],
      [
        "road",
        "road",
        "road",
        "road",
        "bridge",
        "plaza",
        "road",
        "road",
        "road",
        "road"
      ],
      [
        "road",
        "water",
        "crate",
        "grass",
        "tree",
        "crate",
        "grass",
        "grass",
        "grass",
        "road"
      ],
      [
        "barrier",
        "plaza",
        "road",
        "bridge",
        "road",
        "road",
        "road",
        "road",
        "plaza",
        "road"
      ],
      [
        "barrier",
        "crate",
        "road",
        "grass",
        "road",
        "fence",
        "road",
        "crate",
        "tree",
        "road"
      ],
      [
        "grass",
        "road",
        "road",
        "road",
        "crate",
        "grass",
        "grass",
        "fence",
        "water",
        "tree"
      ],
      [
        "grass",
        "fence",
        "road",
        "water",
        "water",
        "grass",
        "grass",
        "fence",
        "grass",
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
        "item": "parcel",
        "label": "包裹",
        "position": [
          0,
          6
        ],
        "houseStyle": "green"
      },
      {
        "id": "stop-2",
        "order": 1,
        "item": "mouse",
        "label": "玩具老鼠",
        "position": [
          2,
          7
        ],
        "houseStyle": "pink"
      },
      {
        "id": "stop-3",
        "order": 2,
        "item": "flowers",
        "label": "花束",
        "position": [
          2,
          0
        ],
        "houseStyle": "blue"
      },
      {
        "id": "stop-4",
        "order": 3,
        "item": "dried-fish",
        "label": "魚乾",
        "position": [
          4,
          5
        ],
        "houseStyle": "yellow"
      },
      {
        "id": "stop-5",
        "order": 4,
        "item": "yarn",
        "label": "毛線球",
        "position": [
          6,
          8
        ],
        "houseStyle": "green"
      },
      {
        "id": "stop-6",
        "order": 5,
        "item": "letter",
        "label": "信件",
        "position": [
          6,
          1
        ],
        "houseStyle": "pink"
      }
    ],
    "oneWayEdges": [
      {
        "from": [
          2,
          3
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
          1,
          4
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
      },
      {
        "from": [
          0,
          4
        ],
        "to": [
          0,
          5
        ]
      },
      {
        "from": [
          0,
          7
        ],
        "to": [
          0,
          8
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
          6,
          4
        ],
        "to": [
          6,
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
        0,
        8
      ],
      [
        0,
        9
      ],
      [
        1,
        9
      ],
      [
        2,
        9
      ],
      [
        2,
        8
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
        4,
        8
      ],
      [
        4,
        9
      ],
      [
        5,
        9
      ],
      [
        6,
        9
      ],
      [
        6,
        8
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
      ],
      [
        6,
        3
      ],
      [
        6,
        2
      ],
      [
        6,
        1
      ]
    ],
    "optimalSteps": 41,
    "optimalSolutionCount": 1,
    "fuelLimit": 43,
    "metrics": {
      "passableCellCount": 53,
      "stopCount": 6,
      "obstacleCount": 47,
      "oneWayEdgeCount": 7,
      "branchCellCount": 9,
      "detourLoopCount": 1,
      "bridgeCount": 2,
      "solverNodes": 51,
      "solverBacktracks": 9,
      "solverMaxDepth": 41,
      "canonicalSignature": "10x10;grass,fence,road,water,water,grass,grass,fence,grass,grass/grass,road,road,road,crate,grass,grass,fence,water,tree/barrier,crate,road,grass,road,fence,road,crate,tree,road/barrier,plaza,road,bridge,road,road,road,road,plaza,road/road,water,crate,grass,tree,crate,grass,grass,grass,road/road,road,road,road,bridge,plaza,road,road,road,road/road,grass,grass,tree,crate,grass,barrier,tree,grass,barrier/plaza,road,road,road,road,road,road,plaza,road,road/tree,grass,water,road,road,barrier,grass,barrier,water,road/road,road,road,road,road,road,plaza,road,road,road;S:9,0;P:0@9,6|1@7,7|2@7,0|3@5,5|4@3,8|5@3,1;O:3,4>3,3|7,3>7,2|7,3>8,3|7,4>8,4|9,2>9,3|9,4>9,5|9,7>9,8;R:9,0>9,1>9,2>9,3>9,4>9,5>9,6>9,7>9,8>9,9>8,9>7,9>7,8>7,7>7,6>7,5>7,4>7,3>7,2>7,1>7,0>6,0>5,0>5,1>5,2>5,3>5,4>5,5>5,6>5,7>5,8>5,9>4,9>3,9>3,8>3,7>3,6>3,5>3,4>3,3>3,2>3,1"
    }
  },
  {
    "id": "L083",
    "chapter": 5,
    "title": "包裹巡城",
    "rows": 10,
    "columns": 10,
    "difficulty": 5,
    "difficultyScore": 516427,
    "seed": 582751,
    "generatorVersion": 2,
    "terrain": [
      [
        "road",
        "barrier",
        "plaza",
        "road",
        "road",
        "road",
        "water",
        "water",
        "barrier",
        "grass"
      ],
      [
        "road",
        "tree",
        "road",
        "water",
        "road",
        "fence",
        "plaza",
        "fence",
        "road",
        "crate"
      ],
      [
        "road",
        "water",
        "road",
        "tree",
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
        "road",
        "crate",
        "road",
        "water",
        "bridge",
        "grass",
        "grass",
        "fence"
      ],
      [
        "road",
        "grass",
        "road",
        "fence",
        "bridge",
        "crate",
        "road",
        "road",
        "road",
        "road"
      ],
      [
        "road",
        "tree",
        "road",
        "grass",
        "plaza",
        "crate",
        "road",
        "grass",
        "road",
        "road"
      ],
      [
        "plaza",
        "fence",
        "road",
        "tree",
        "road",
        "crate",
        "road",
        "barrier",
        "road",
        "road"
      ],
      [
        "road",
        "grass",
        "plaza",
        "crate",
        "road",
        "water",
        "road",
        "road",
        "crate",
        "crate"
      ],
      [
        "road",
        "tree",
        "road",
        "grass",
        "road",
        "barrier",
        "plaza",
        "grass",
        "barrier",
        "barrier"
      ],
      [
        "road",
        "road",
        "road",
        "water",
        "road",
        "road",
        "road",
        "road",
        "tree",
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
        "houseStyle": "pink"
      },
      {
        "id": "stop-2",
        "order": 1,
        "item": "cat-grass",
        "label": "貓草",
        "position": [
          7,
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
          2
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
      },
      {
        "id": "stop-5",
        "order": 4,
        "item": "mouse",
        "label": "玩具老鼠",
        "position": [
          8,
          6
        ],
        "houseStyle": "pink"
      },
      {
        "id": "stop-6",
        "order": 5,
        "item": "flowers",
        "label": "花束",
        "position": [
          1,
          6
        ],
        "houseStyle": "blue"
      }
    ],
    "oneWayEdges": [
      {
        "from": [
          2,
          0
        ],
        "to": [
          3,
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
          9,
          2
        ],
        "to": [
          8,
          2
        ]
      },
      {
        "from": [
          6,
          2
        ],
        "to": [
          5,
          2
        ]
      },
      {
        "from": [
          0,
          4
        ],
        "to": [
          1,
          4
        ]
      },
      {
        "from": [
          6,
          4
        ],
        "to": [
          7,
          4
        ]
      },
      {
        "from": [
          6,
          6
        ],
        "to": [
          5,
          6
        ]
      },
      {
        "from": [
          3,
          6
        ],
        "to": [
          2,
          6
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
        8,
        0
      ],
      [
        9,
        0
      ],
      [
        9,
        1
      ],
      [
        9,
        2
      ],
      [
        8,
        2
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
        8,
        4
      ],
      [
        9,
        4
      ],
      [
        9,
        5
      ],
      [
        9,
        6
      ],
      [
        8,
        6
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
      ],
      [
        1,
        6
      ]
    ],
    "optimalSteps": 41,
    "optimalSolutionCount": 1,
    "fuelLimit": 45,
    "metrics": {
      "passableCellCount": 56,
      "stopCount": 6,
      "obstacleCount": 44,
      "oneWayEdgeCount": 8,
      "branchCellCount": 10,
      "detourLoopCount": 2,
      "bridgeCount": 2,
      "solverNodes": 47,
      "solverBacktracks": 5,
      "solverMaxDepth": 41,
      "canonicalSignature": "10x10;grass,barrier,crate,road,road,road,fence,road,crate,grass/tree,barrier,crate,road,road,road,grass,road,road,barrier/road,grass,road,barrier,grass,road,grass,road,fence,water/road,plaza,road,road,road,road,bridge,road,plaza,water/road,barrier,water,crate,crate,crate,water,grass,fence,road/road,road,road,road,plaza,bridge,road,road,road,road/water,grass,crate,tree,grass,fence,crate,tree,water,road/road,road,plaza,road,road,road,road,road,road,plaza/road,tree,grass,fence,tree,grass,fence,water,tree,barrier/road,road,road,plaza,road,road,road,road,road,road;S:9,9;P:0@9,3|1@7,2|2@7,9|3@5,4|4@3,1|5@3,8;O:3,3>3,4|3,6>3,7|5,3>5,2|5,9>5,8|7,0>7,1|7,3>7,4|9,3>9,2|9,7>9,6;R:9,9>9,8>9,7>9,6>9,5>9,4>9,3>9,2>9,1>9,0>8,0>7,0>7,1>7,2>7,3>7,4>7,5>7,6>7,7>7,8>7,9>6,9>5,9>5,8>5,7>5,6>5,5>5,4>5,3>5,2>5,1>5,0>4,0>3,0>3,1>3,2>3,3>3,4>3,5>3,6>3,7>3,8"
    }
  },
  {
    "id": "L084",
    "chapter": 5,
    "title": "花束遠征",
    "rows": 10,
    "columns": 10,
    "difficulty": 5,
    "difficultyScore": 516718,
    "seed": 583748,
    "generatorVersion": 2,
    "terrain": [
      [
        "road",
        "road",
        "tree",
        "road",
        "road",
        "road",
        "water",
        "road",
        "road",
        "road"
      ],
      [
        "road",
        "road",
        "plaza",
        "road",
        "grass",
        "road",
        "fence",
        "road",
        "grass",
        "road"
      ],
      [
        "road",
        "road",
        "crate",
        "plaza",
        "grass",
        "road",
        "grass",
        "bridge",
        "fence",
        "plaza"
      ],
      [
        "tree",
        "grass",
        "grass",
        "road",
        "grass",
        "plaza",
        "tree",
        "plaza",
        "tree",
        "road"
      ],
      [
        "barrier",
        "road",
        "road",
        "road",
        "tree",
        "road",
        "grass",
        "road",
        "grass",
        "road"
      ],
      [
        "road",
        "road",
        "water",
        "road",
        "fence",
        "bridge",
        "tree",
        "road",
        "grass",
        "road"
      ],
      [
        "crate",
        "road",
        "grass",
        "bridge",
        "fence",
        "road",
        "grass",
        "road",
        "grass",
        "road"
      ],
      [
        "water",
        "fence",
        "grass",
        "road",
        "grass",
        "road",
        "grass",
        "road",
        "grass",
        "road"
      ],
      [
        "water",
        "road",
        "road",
        "road",
        "fence",
        "road",
        "crate",
        "road",
        "crate",
        "road"
      ],
      [
        "crate",
        "grass",
        "grass",
        "plaza",
        "grass",
        "road",
        "plaza",
        "road",
        "barrier",
        "road"
      ]
    ],
    "start": [
      9,
      9
    ],
    "stops": [
      {
        "id": "stop-1",
        "order": 0,
        "item": "yarn",
        "label": "毛線球",
        "position": [
          2,
          9
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
          7
        ],
        "houseStyle": "yellow"
      },
      {
        "id": "stop-3",
        "order": 2,
        "item": "milk",
        "label": "鮮奶",
        "position": [
          9,
          6
        ],
        "houseStyle": "green"
      },
      {
        "id": "stop-4",
        "order": 3,
        "item": "cat-food",
        "label": "貓罐頭",
        "position": [
          3,
          5
        ],
        "houseStyle": "pink"
      },
      {
        "id": "stop-5",
        "order": 4,
        "item": "cat-grass",
        "label": "貓草",
        "position": [
          2,
          3
        ],
        "houseStyle": "blue"
      },
      {
        "id": "stop-6",
        "order": 5,
        "item": "paw-cookie",
        "label": "貓掌餅乾",
        "position": [
          9,
          3
        ],
        "houseStyle": "yellow"
      }
    ],
    "oneWayEdges": [
      {
        "from": [
          8,
          9
        ],
        "to": [
          7,
          9
        ]
      },
      {
        "from": [
          5,
          9
        ],
        "to": [
          4,
          9
        ]
      },
      {
        "from": [
          0,
          9
        ],
        "to": [
          0,
          8
        ]
      },
      {
        "from": [
          6,
          7
        ],
        "to": [
          7,
          7
        ]
      },
      {
        "from": [
          8,
          7
        ],
        "to": [
          9,
          7
        ]
      },
      {
        "from": [
          9,
          6
        ],
        "to": [
          9,
          5
        ]
      },
      {
        "from": [
          0,
          5
        ],
        "to": [
          0,
          4
        ]
      },
      {
        "from": [
          2,
          3
        ],
        "to": [
          3,
          3
        ]
      }
    ],
    "solutionPath": [
      [
        9,
        9
      ],
      [
        8,
        9
      ],
      [
        7,
        9
      ],
      [
        6,
        9
      ],
      [
        5,
        9
      ],
      [
        4,
        9
      ],
      [
        3,
        9
      ],
      [
        2,
        9
      ],
      [
        1,
        9
      ],
      [
        0,
        9
      ],
      [
        0,
        8
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
        8,
        7
      ],
      [
        9,
        7
      ],
      [
        9,
        6
      ],
      [
        9,
        5
      ],
      [
        8,
        5
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
        8,
        3
      ],
      [
        9,
        3
      ]
    ],
    "optimalSteps": 42,
    "optimalSolutionCount": 1,
    "fuelLimit": 45,
    "metrics": {
      "passableCellCount": 57,
      "stopCount": 6,
      "obstacleCount": 43,
      "oneWayEdgeCount": 8,
      "branchCellCount": 10,
      "detourLoopCount": 2,
      "bridgeCount": 3,
      "solverNodes": 46,
      "solverBacktracks": 3,
      "solverMaxDepth": 42,
      "canonicalSignature": "10x10;crate,grass,grass,plaza,grass,road,plaza,road,barrier,road/water,road,road,road,fence,road,crate,road,crate,road/water,fence,grass,road,grass,road,grass,road,grass,road/crate,road,grass,bridge,fence,road,grass,road,grass,road/road,road,water,road,fence,bridge,tree,road,grass,road/barrier,road,road,road,tree,road,grass,road,grass,road/tree,grass,grass,road,grass,plaza,tree,plaza,tree,road/road,road,crate,plaza,grass,road,grass,bridge,fence,plaza/road,road,plaza,road,grass,road,fence,road,grass,road/road,road,tree,road,road,road,water,road,road,road;S:0,9;P:0@7,9|1@6,7|2@0,6|3@6,5|4@7,3|5@0,3;O:0,6>0,5|1,7>0,7|1,9>2,9|3,7>2,7|4,9>5,9|7,3>6,3|9,5>9,4|9,9>9,8;R:0,9>1,9>2,9>3,9>4,9>5,9>6,9>7,9>8,9>9,9>9,8>9,7>8,7>7,7>6,7>5,7>4,7>3,7>2,7>1,7>0,7>0,6>0,5>1,5>2,5>3,5>4,5>5,5>6,5>7,5>8,5>9,5>9,4>9,3>8,3>7,3>6,3>5,3>4,3>3,3>2,3>1,3>0,3"
    }
  },
  {
    "id": "L085",
    "chapter": 5,
    "title": "毛線快線",
    "rows": 10,
    "columns": 10,
    "difficulty": 5,
    "difficultyScore": 516942,
    "seed": 584745,
    "generatorVersion": 2,
    "terrain": [
      [
        "road",
        "grass",
        "road",
        "plaza",
        "road",
        "crate",
        "road",
        "plaza",
        "road",
        "plaza"
      ],
      [
        "road",
        "crate",
        "road",
        "grass",
        "road",
        "tree",
        "road",
        "grass",
        "water",
        "water"
      ],
      [
        "road",
        "crate",
        "road",
        "grass",
        "road",
        "grass",
        "road",
        "road",
        "road",
        "tree"
      ],
      [
        "road",
        "barrier",
        "road",
        "grass",
        "road",
        "tree",
        "bridge",
        "grass",
        "grass",
        "grass"
      ],
      [
        "road",
        "fence",
        "road",
        "grass",
        "bridge",
        "grass",
        "road",
        "road",
        "tree",
        "barrier"
      ],
      [
        "road",
        "fence",
        "road",
        "tree",
        "road",
        "grass",
        "road",
        "fence",
        "road",
        "road"
      ],
      [
        "road",
        "barrier",
        "plaza",
        "grass",
        "plaza",
        "fence",
        "road",
        "road",
        "road",
        "road"
      ],
      [
        "plaza",
        "fence",
        "bridge",
        "tree",
        "road",
        "grass",
        "plaza",
        "crate",
        "road",
        "road"
      ],
      [
        "road",
        "grass",
        "road",
        "barrier",
        "road",
        "grass",
        "road",
        "water",
        "tree",
        "grass"
      ],
      [
        "road",
        "road",
        "road",
        "grass",
        "road",
        "road",
        "road",
        "plaza",
        "plaza",
        "fence"
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
        "item": "mouse",
        "label": "玩具老鼠",
        "position": [
          7,
          0
        ],
        "houseStyle": "yellow"
      },
      {
        "id": "stop-2",
        "order": 1,
        "item": "flowers",
        "label": "花束",
        "position": [
          6,
          2
        ],
        "houseStyle": "green"
      },
      {
        "id": "stop-3",
        "order": 2,
        "item": "dried-fish",
        "label": "魚乾",
        "position": [
          0,
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
          6,
          4
        ],
        "houseStyle": "blue"
      },
      {
        "id": "stop-5",
        "order": 4,
        "item": "letter",
        "label": "信件",
        "position": [
          7,
          6
        ],
        "houseStyle": "yellow"
      },
      {
        "id": "stop-6",
        "order": 5,
        "item": "milk",
        "label": "鮮奶",
        "position": [
          0,
          7
        ],
        "houseStyle": "green"
      }
    ],
    "oneWayEdges": [
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
          7,
          0
        ],
        "to": [
          8,
          0
        ]
      },
      {
        "from": [
          8,
          2
        ],
        "to": [
          7,
          2
        ]
      },
      {
        "from": [
          5,
          2
        ],
        "to": [
          4,
          2
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
          9,
          5
        ],
        "to": [
          9,
          6
        ]
      },
      {
        "from": [
          6,
          6
        ],
        "to": [
          5,
          6
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
        8,
        0
      ],
      [
        9,
        0
      ],
      [
        9,
        1
      ],
      [
        9,
        2
      ],
      [
        8,
        2
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
        8,
        4
      ],
      [
        9,
        4
      ],
      [
        9,
        5
      ],
      [
        9,
        6
      ],
      [
        8,
        6
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
      ],
      [
        1,
        6
      ],
      [
        0,
        6
      ],
      [
        0,
        7
      ]
    ],
    "optimalSteps": 43,
    "optimalSolutionCount": 1,
    "fuelLimit": 46,
    "metrics": {
      "passableCellCount": 58,
      "stopCount": 6,
      "obstacleCount": 42,
      "oneWayEdgeCount": 8,
      "branchCellCount": 10,
      "detourLoopCount": 2,
      "bridgeCount": 3,
      "solverNodes": 48,
      "solverBacktracks": 4,
      "solverMaxDepth": 43,
      "canonicalSignature": "10x10;fence,grass,road,road,road,barrier,grass,tree,water,plaza/plaza,tree,road,road,road,tree,grass,road,water,road/plaza,water,crate,road,fence,road,grass,road,grass,plaza/road,road,plaza,road,road,road,bridge,road,road,road/road,grass,grass,fence,grass,grass,tree,grass,tree,crate/road,road,road,plaza,road,bridge,road,road,road,road/grass,barrier,tree,grass,tree,grass,grass,grass,grass,plaza/road,road,bridge,plaza,road,road,road,road,road,road/road,grass,fence,barrier,fence,fence,barrier,crate,crate,grass/road,road,plaza,road,road,road,road,road,road,road;S:9,9;P:0@9,2|1@7,3|2@6,9|3@5,3|4@3,2|5@2,9;O:3,3>3,4|4,0>3,0|5,7>5,6|7,1>7,2|7,4>7,5|7,7>7,8|9,2>9,1|9,5>9,4;R:9,9>9,8>9,7>9,6>9,5>9,4>9,3>9,2>9,1>9,0>8,0>7,0>7,1>7,2>7,3>7,4>7,5>7,6>7,7>7,8>7,9>6,9>5,9>5,8>5,7>5,6>5,5>5,4>5,3>5,2>5,1>5,0>4,0>3,0>3,1>3,2>3,3>3,4>3,5>3,6>3,7>3,8>3,9>2,9"
    }
  },
  {
    "id": "L086",
    "chapter": 5,
    "title": "罐頭環城",
    "rows": 10,
    "columns": 10,
    "difficulty": 5,
    "difficultyScore": 517532,
    "seed": 585742,
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
        "road",
        "road",
        "road"
      ],
      [
        "grass",
        "grass",
        "tree",
        "grass",
        "grass",
        "barrier",
        "grass",
        "tree",
        "tree",
        "road"
      ],
      [
        "road",
        "road",
        "plaza",
        "road",
        "road",
        "road",
        "road",
        "bridge",
        "plaza",
        "road"
      ],
      [
        "road",
        "grass",
        "barrier",
        "fence",
        "grass",
        "water",
        "crate",
        "grass",
        "tree",
        "grass"
      ],
      [
        "road",
        "road",
        "plaza",
        "road",
        "bridge",
        "road",
        "road",
        "road",
        "plaza",
        "road"
      ],
      [
        "water",
        "barrier",
        "grass",
        "barrier",
        "grass",
        "water",
        "barrier",
        "tree",
        "crate",
        "road"
      ],
      [
        "road",
        "road",
        "road",
        "bridge",
        "road",
        "road",
        "plaza",
        "road",
        "road",
        "road"
      ],
      [
        "plaza",
        "tree",
        "grass",
        "road",
        "grass",
        "road",
        "barrier",
        "grass",
        "road",
        "tree"
      ],
      [
        "road",
        "barrier",
        "barrier",
        "water",
        "road",
        "plaza",
        "grass",
        "road",
        "road",
        "road"
      ],
      [
        "plaza",
        "plaza",
        "fence",
        "barrier",
        "road",
        "road",
        "grass",
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
        "item": "cat-grass",
        "label": "貓草",
        "position": [
          0,
          6
        ],
        "houseStyle": "green"
      },
      {
        "id": "stop-2",
        "order": 1,
        "item": "paw-cookie",
        "label": "貓掌餅乾",
        "position": [
          2,
          8
        ],
        "houseStyle": "pink"
      },
      {
        "id": "stop-3",
        "order": 2,
        "item": "parcel",
        "label": "包裹",
        "position": [
          2,
          2
        ],
        "houseStyle": "blue"
      },
      {
        "id": "stop-4",
        "order": 3,
        "item": "mouse",
        "label": "玩具老鼠",
        "position": [
          4,
          2
        ],
        "houseStyle": "yellow"
      },
      {
        "id": "stop-5",
        "order": 4,
        "item": "flowers",
        "label": "花束",
        "position": [
          4,
          8
        ],
        "houseStyle": "green"
      },
      {
        "id": "stop-6",
        "order": 5,
        "item": "dried-fish",
        "label": "魚乾",
        "position": [
          6,
          6
        ],
        "houseStyle": "pink"
      },
      {
        "id": "stop-7",
        "order": 6,
        "item": "yarn",
        "label": "毛線球",
        "position": [
          7,
          0
        ],
        "houseStyle": "blue"
      }
    ],
    "oneWayEdges": [
      {
        "from": [
          2,
          7
        ],
        "to": [
          2,
          6
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
          4,
          0
        ],
        "to": [
          4,
          1
        ]
      },
      {
        "from": [
          4,
          4
        ],
        "to": [
          4,
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
          7
        ]
      },
      {
        "from": [
          5,
          9
        ],
        "to": [
          6,
          9
        ]
      },
      {
        "from": [
          6,
          8
        ],
        "to": [
          6,
          7
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
        0,
        8
      ],
      [
        0,
        9
      ],
      [
        1,
        9
      ],
      [
        2,
        9
      ],
      [
        2,
        8
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
        4,
        8
      ],
      [
        4,
        9
      ],
      [
        5,
        9
      ],
      [
        6,
        9
      ],
      [
        6,
        8
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
      ],
      [
        6,
        3
      ],
      [
        6,
        2
      ],
      [
        6,
        1
      ],
      [
        6,
        0
      ],
      [
        7,
        0
      ]
    ],
    "optimalSteps": 43,
    "optimalSolutionCount": 1,
    "fuelLimit": 47,
    "metrics": {
      "passableCellCount": 60,
      "stopCount": 7,
      "obstacleCount": 40,
      "oneWayEdgeCount": 8,
      "branchCellCount": 10,
      "detourLoopCount": 3,
      "bridgeCount": 3,
      "solverNodes": 47,
      "solverBacktracks": 3,
      "solverMaxDepth": 43,
      "canonicalSignature": "10x10;plaza,plaza,fence,barrier,road,road,grass,road,road,road/road,barrier,barrier,water,road,plaza,grass,road,road,road/plaza,tree,grass,road,grass,road,barrier,grass,road,tree/road,road,road,bridge,road,road,plaza,road,road,road/water,barrier,grass,barrier,grass,water,barrier,tree,crate,road/road,road,plaza,road,bridge,road,road,road,plaza,road/road,grass,barrier,fence,grass,water,crate,grass,tree,grass/road,road,plaza,road,road,road,road,bridge,plaza,road/grass,grass,tree,grass,grass,barrier,grass,tree,tree,road/road,road,road,road,road,road,plaza,road,road,road;S:9,0;P:0@9,6|1@7,8|2@7,2|3@5,2|4@5,8|5@3,6|6@2,0;O:3,2>3,1|3,8>3,7|4,9>3,9|5,0>5,1|5,4>5,5|5,6>5,7|7,6>7,5|7,7>7,6;R:9,0>9,1>9,2>9,3>9,4>9,5>9,6>9,7>9,8>9,9>8,9>7,9>7,8>7,7>7,6>7,5>7,4>7,3>7,2>7,1>7,0>6,0>5,0>5,1>5,2>5,3>5,4>5,5>5,6>5,7>5,8>5,9>4,9>3,9>3,8>3,7>3,6>3,5>3,4>3,3>3,2>3,1>3,0>2,0"
    }
  },
  {
    "id": "L087",
    "chapter": 5,
    "title": "信件總站",
    "rows": 10,
    "columns": 10,
    "difficulty": 5,
    "difficultyScore": 517804,
    "seed": 586739,
    "generatorVersion": 2,
    "terrain": [
      [
        "road",
        "road",
        "road",
        "crate",
        "plaza",
        "road",
        "road",
        "road",
        "water",
        "crate"
      ],
      [
        "road",
        "water",
        "plaza",
        "tree",
        "road",
        "grass",
        "road",
        "water",
        "grass",
        "grass"
      ],
      [
        "road",
        "tree",
        "bridge",
        "barrier",
        "road",
        "crate",
        "road",
        "road",
        "tree",
        "grass"
      ],
      [
        "plaza",
        "grass",
        "road",
        "water",
        "road",
        "barrier",
        "road",
        "crate",
        "plaza",
        "grass"
      ],
      [
        "road",
        "grass",
        "road",
        "road",
        "road",
        "crate",
        "plaza",
        "plaza",
        "road",
        "road"
      ],
      [
        "road",
        "grass",
        "road",
        "road",
        "bridge",
        "grass",
        "road",
        "grass",
        "road",
        "crate"
      ],
      [
        "road",
        "fence",
        "road",
        "grass",
        "plaza",
        "grass",
        "bridge",
        "plaza",
        "grass",
        "barrier"
      ],
      [
        "road",
        "crate",
        "plaza",
        "grass",
        "road",
        "grass",
        "road",
        "grass",
        "road",
        "grass"
      ],
      [
        "road",
        "tree",
        "road",
        "grass",
        "road",
        "barrier",
        "road",
        "crate",
        "road",
        "fence"
      ],
      [
        "road",
        "tree",
        "road",
        "road",
        "road",
        "water",
        "road",
        "road",
        "plaza",
        "road"
      ]
    ],
    "start": [
      9,
      0
    ],
    "stops": [
      {
        "id": "stop-1",
        "order": 0,
        "item": "letter",
        "label": "信件",
        "position": [
          3,
          0
        ],
        "houseStyle": "pink"
      },
      {
        "id": "stop-2",
        "order": 1,
        "item": "milk",
        "label": "鮮奶",
        "position": [
          1,
          2
        ],
        "houseStyle": "blue"
      },
      {
        "id": "stop-3",
        "order": 2,
        "item": "cat-food",
        "label": "貓罐頭",
        "position": [
          7,
          2
        ],
        "houseStyle": "yellow"
      },
      {
        "id": "stop-4",
        "order": 3,
        "item": "cat-grass",
        "label": "貓草",
        "position": [
          6,
          4
        ],
        "houseStyle": "green"
      },
      {
        "id": "stop-5",
        "order": 4,
        "item": "paw-cookie",
        "label": "貓掌餅乾",
        "position": [
          0,
          4
        ],
        "houseStyle": "pink"
      },
      {
        "id": "stop-6",
        "order": 5,
        "item": "parcel",
        "label": "包裹",
        "position": [
          4,
          6
        ],
        "houseStyle": "blue"
      },
      {
        "id": "stop-7",
        "order": 6,
        "item": "mouse",
        "label": "玩具老鼠",
        "position": [
          9,
          8
        ],
        "houseStyle": "yellow"
      }
    ],
    "oneWayEdges": [
      {
        "from": [
          4,
          4
        ],
        "to": [
          4,
          3
        ]
      },
      {
        "from": [
          5,
          4
        ],
        "to": [
          5,
          3
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
      },
      {
        "from": [
          7,
          2
        ],
        "to": [
          8,
          2
        ]
      },
      {
        "from": [
          9,
          2
        ],
        "to": [
          9,
          3
        ]
      },
      {
        "from": [
          5,
          4
        ],
        "to": [
          4,
          4
        ]
      },
      {
        "from": [
          2,
          6
        ],
        "to": [
          3,
          6
        ]
      },
      {
        "from": [
          7,
          6
        ],
        "to": [
          8,
          6
        ]
      },
      {
        "from": [
          9,
          6
        ],
        "to": [
          9,
          7
        ]
      }
    ],
    "solutionPath": [
      [
        9,
        0
      ],
      [
        8,
        0
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
        8,
        2
      ],
      [
        9,
        2
      ],
      [
        9,
        3
      ],
      [
        9,
        4
      ],
      [
        8,
        4
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
      ],
      [
        7,
        6
      ],
      [
        8,
        6
      ],
      [
        9,
        6
      ],
      [
        9,
        7
      ],
      [
        9,
        8
      ]
    ],
    "optimalSteps": 44,
    "optimalSolutionCount": 1,
    "fuelLimit": 48,
    "metrics": {
      "passableCellCount": 58,
      "stopCount": 7,
      "obstacleCount": 42,
      "oneWayEdgeCount": 9,
      "branchCellCount": 11,
      "detourLoopCount": 1,
      "bridgeCount": 3,
      "solverNodes": 53,
      "solverBacktracks": 8,
      "solverMaxDepth": 44,
      "canonicalSignature": "10x10;crate,grass,grass,grass,road,crate,barrier,grass,fence,road/water,grass,tree,plaza,road,road,grass,road,road,plaza/road,water,road,crate,plaza,grass,plaza,grass,crate,road/road,road,road,road,plaza,road,bridge,road,road,road/road,grass,crate,barrier,crate,grass,grass,grass,barrier,water/plaza,road,road,road,road,bridge,plaza,road,road,road/crate,tree,barrier,water,road,road,grass,grass,grass,road/road,plaza,bridge,road,road,road,road,plaza,road,road/road,water,tree,grass,grass,grass,fence,crate,tree,tree/road,road,road,plaza,road,road,road,road,road,road;S:9,9;P:0@9,3|1@7,1|2@7,7|3@5,6|4@5,0|5@3,4|6@1,9;O:3,2>3,3|3,7>3,8|3,9>2,9|5,4>6,4|5,5>5,4|5,5>6,5|7,4>7,5|7,7>7,8|7,9>6,9;R:9,9>9,8>9,7>9,6>9,5>9,4>9,3>9,2>9,1>9,0>8,0>7,0>7,1>7,2>7,3>7,4>7,5>7,6>7,7>7,8>7,9>6,9>5,9>5,8>5,7>5,6>5,5>5,4>5,3>5,2>5,1>5,0>4,0>3,0>3,1>3,2>3,3>3,4>3,5>3,6>3,7>3,8>3,9>2,9>1,9"
    }
  },
  {
    "id": "L088",
    "chapter": 5,
    "title": "貓草長路",
    "rows": 10,
    "columns": 10,
    "difficulty": 5,
    "difficultyScore": 517804,
    "seed": 587736,
    "generatorVersion": 2,
    "terrain": [
      [
        "road",
        "road",
        "road",
        "road",
        "road",
        "water",
        "road",
        "road",
        "plaza",
        "road"
      ],
      [
        "road",
        "road",
        "road",
        "crate",
        "road",
        "grass",
        "road",
        "grass",
        "road",
        "grass"
      ],
      [
        "road",
        "water",
        "plaza",
        "crate",
        "road",
        "grass",
        "road",
        "road",
        "barrier",
        "grass"
      ],
      [
        "road",
        "fence",
        "road",
        "grass",
        "plaza",
        "barrier",
        "bridge",
        "grass",
        "grass",
        "water"
      ],
      [
        "road",
        "grass",
        "road",
        "water",
        "bridge",
        "grass",
        "road",
        "grass",
        "tree",
        "crate"
      ],
      [
        "road",
        "grass",
        "road",
        "grass",
        "road",
        "grass",
        "plaza",
        "road",
        "fence",
        "crate"
      ],
      [
        "plaza",
        "fence",
        "road",
        "barrier",
        "road",
        "water",
        "road",
        "tree",
        "plaza",
        "grass"
      ],
      [
        "road",
        "crate",
        "bridge",
        "water",
        "road",
        "grass",
        "road",
        "road",
        "road",
        "road"
      ],
      [
        "road",
        "grass",
        "plaza",
        "barrier",
        "road",
        "grass",
        "road",
        "fence",
        "grass",
        "grass"
      ],
      [
        "road",
        "road",
        "road",
        "crate",
        "plaza",
        "road",
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
        "item": "flowers",
        "label": "花束",
        "position": [
          6,
          0
        ],
        "houseStyle": "blue"
      },
      {
        "id": "stop-2",
        "order": 1,
        "item": "dried-fish",
        "label": "魚乾",
        "position": [
          8,
          2
        ],
        "houseStyle": "yellow"
      },
      {
        "id": "stop-3",
        "order": 2,
        "item": "yarn",
        "label": "毛線球",
        "position": [
          2,
          2
        ],
        "houseStyle": "green"
      },
      {
        "id": "stop-4",
        "order": 3,
        "item": "letter",
        "label": "信件",
        "position": [
          3,
          4
        ],
        "houseStyle": "pink"
      },
      {
        "id": "stop-5",
        "order": 4,
        "item": "milk",
        "label": "鮮奶",
        "position": [
          9,
          4
        ],
        "houseStyle": "blue"
      },
      {
        "id": "stop-6",
        "order": 5,
        "item": "cat-food",
        "label": "貓罐頭",
        "position": [
          5,
          6
        ],
        "houseStyle": "yellow"
      },
      {
        "id": "stop-7",
        "order": 6,
        "item": "cat-grass",
        "label": "貓草",
        "position": [
          0,
          8
        ],
        "houseStyle": "green"
      }
    ],
    "oneWayEdges": [
      {
        "from": [
          0,
          2
        ],
        "to": [
          0,
          1
        ]
      },
      {
        "from": [
          1,
          2
        ],
        "to": [
          1,
          1
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
          9,
          0
        ],
        "to": [
          9,
          1
        ]
      },
      {
        "from": [
          5,
          2
        ],
        "to": [
          4,
          2
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
          1,
          4
        ],
        "to": [
          2,
          4
        ]
      },
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
          9,
          4
        ],
        "to": [
          9,
          5
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
        8,
        0
      ],
      [
        9,
        0
      ],
      [
        9,
        1
      ],
      [
        9,
        2
      ],
      [
        8,
        2
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
        8,
        4
      ],
      [
        9,
        4
      ],
      [
        9,
        5
      ],
      [
        9,
        6
      ],
      [
        8,
        6
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
      ],
      [
        1,
        6
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
        0,
        8
      ]
    ],
    "optimalSteps": 44,
    "optimalSolutionCount": 1,
    "fuelLimit": 47,
    "metrics": {
      "passableCellCount": 58,
      "stopCount": 7,
      "obstacleCount": 42,
      "oneWayEdgeCount": 9,
      "branchCellCount": 11,
      "detourLoopCount": 1,
      "bridgeCount": 3,
      "solverNodes": 53,
      "solverBacktracks": 8,
      "solverMaxDepth": 44,
      "canonicalSignature": "10x10;road,grass,grass,water,crate,crate,grass,road,grass,road/plaza,road,barrier,grass,tree,fence,plaza,road,grass,road/road,grass,road,grass,grass,road,tree,road,fence,road/road,road,road,bridge,road,plaza,road,road,road,road/water,grass,grass,barrier,grass,grass,water,grass,grass,road/road,road,road,plaza,bridge,road,road,road,road,plaza/road,crate,crate,grass,water,grass,barrier,water,barrier,crate/road,road,plaza,road,road,road,road,bridge,plaza,road/road,road,water,fence,grass,grass,fence,crate,grass,road/road,road,road,road,road,road,plaza,road,road,road;S:9,0;P:0@9,6|1@7,8|2@7,2|3@5,3|4@5,9|5@3,5|6@1,0;O:5,1>5,2|5,5>5,6|5,9>4,9|7,0>8,0|7,1>8,1|7,2>7,1|7,5>7,4|9,6>9,7|9,9>8,9;R:9,0>9,1>9,2>9,3>9,4>9,5>9,6>9,7>9,8>9,9>8,9>7,9>7,8>7,7>7,6>7,5>7,4>7,3>7,2>7,1>7,0>6,0>5,0>5,1>5,2>5,3>5,4>5,5>5,6>5,7>5,8>5,9>4,9>3,9>3,8>3,7>3,6>3,5>3,4>3,3>3,2>3,1>3,0>2,0>1,0"
    }
  },
  {
    "id": "L089",
    "chapter": 5,
    "title": "餅乾全送",
    "rows": 10,
    "columns": 10,
    "difficulty": 5,
    "difficultyScore": 518018,
    "seed": 588733,
    "generatorVersion": 2,
    "terrain": [
      [
        "road",
        "crate",
        "road",
        "road",
        "road",
        "grass",
        "road",
        "road",
        "road",
        "road"
      ],
      [
        "road",
        "water",
        "plaza",
        "tree",
        "road",
        "grass",
        "road",
        "crate",
        "plaza",
        "fence"
      ],
      [
        "road",
        "grass",
        "road",
        "grass",
        "road",
        "water",
        "road",
        "fence",
        "road",
        "road"
      ],
      [
        "road",
        "grass",
        "road",
        "road",
        "plaza",
        "fence",
        "bridge",
        "grass",
        "road",
        "grass"
      ],
      [
        "road",
        "grass",
        "road",
        "road",
        "bridge",
        "grass",
        "plaza",
        "road",
        "tree",
        "tree"
      ],
      [
        "road",
        "grass",
        "road",
        "tree",
        "road",
        "grass",
        "road",
        "grass",
        "road",
        "tree"
      ],
      [
        "plaza",
        "grass",
        "road",
        "grass",
        "road",
        "fence",
        "road",
        "road",
        "road",
        "road"
      ],
      [
        "road",
        "grass",
        "bridge",
        "crate",
        "road",
        "crate",
        "road",
        "water",
        "barrier",
        "grass"
      ],
      [
        "road",
        "tree",
        "plaza",
        "grass",
        "road",
        "grass",
        "road",
        "road",
        "plaza",
        "fence"
      ],
      [
        "road",
        "road",
        "road",
        "tree",
        "road",
        "plaza",
        "road",
        "grass",
        "tree",
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
        "item": "paw-cookie",
        "label": "貓掌餅乾",
        "position": [
          6,
          0
        ],
        "houseStyle": "yellow"
      },
      {
        "id": "stop-2",
        "order": 1,
        "item": "parcel",
        "label": "包裹",
        "position": [
          8,
          2
        ],
        "houseStyle": "green"
      },
      {
        "id": "stop-3",
        "order": 2,
        "item": "mouse",
        "label": "玩具老鼠",
        "position": [
          1,
          2
        ],
        "houseStyle": "pink"
      },
      {
        "id": "stop-4",
        "order": 3,
        "item": "flowers",
        "label": "花束",
        "position": [
          3,
          4
        ],
        "houseStyle": "blue"
      },
      {
        "id": "stop-5",
        "order": 4,
        "item": "dried-fish",
        "label": "魚乾",
        "position": [
          9,
          5
        ],
        "houseStyle": "yellow"
      },
      {
        "id": "stop-6",
        "order": 5,
        "item": "yarn",
        "label": "毛線球",
        "position": [
          4,
          6
        ],
        "houseStyle": "green"
      },
      {
        "id": "stop-7",
        "order": 6,
        "item": "letter",
        "label": "信件",
        "position": [
          1,
          8
        ],
        "houseStyle": "pink"
      }
    ],
    "oneWayEdges": [
      {
        "from": [
          3,
          4
        ],
        "to": [
          3,
          3
        ]
      },
      {
        "from": [
          4,
          4
        ],
        "to": [
          4,
          3
        ]
      },
      {
        "from": [
          7,
          0
        ],
        "to": [
          8,
          0
        ]
      },
      {
        "from": [
          0,
          4
        ],
        "to": [
          1,
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
      },
      {
        "from": [
          9,
          5
        ],
        "to": [
          9,
          6
        ]
      },
      {
        "from": [
          9,
          6
        ],
        "to": [
          8,
          6
        ]
      },
      {
        "from": [
          3,
          6
        ],
        "to": [
          2,
          6
        ]
      },
      {
        "from": [
          0,
          6
        ],
        "to": [
          0,
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
        8,
        0
      ],
      [
        9,
        0
      ],
      [
        9,
        1
      ],
      [
        9,
        2
      ],
      [
        8,
        2
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
        8,
        4
      ],
      [
        9,
        4
      ],
      [
        9,
        5
      ],
      [
        9,
        6
      ],
      [
        8,
        6
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
      ],
      [
        1,
        6
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
        0,
        8
      ],
      [
        1,
        8
      ]
    ],
    "optimalSteps": 45,
    "optimalSolutionCount": 1,
    "fuelLimit": 49,
    "metrics": {
      "passableCellCount": 59,
      "stopCount": 7,
      "obstacleCount": 41,
      "oneWayEdgeCount": 9,
      "branchCellCount": 11,
      "detourLoopCount": 1,
      "bridgeCount": 3,
      "solverNodes": 54,
      "solverBacktracks": 8,
      "solverMaxDepth": 45,
      "canonicalSignature": "10x10;grass,fence,grass,road,tree,tree,grass,road,fence,road/tree,plaza,barrier,road,road,tree,road,road,plaza,road/grass,road,water,road,grass,road,grass,fence,crate,road/road,road,road,road,road,plaza,bridge,road,road,road/plaza,grass,crate,fence,grass,grass,fence,water,grass,grass/road,road,road,road,road,bridge,plaza,road,road,road/tree,grass,crate,grass,tree,road,road,grass,tree,road/road,plaza,bridge,road,road,road,road,road,plaza,road/road,tree,grass,grass,grass,grass,grass,grass,water,crate/road,road,road,plaza,road,road,road,road,road,road;S:9,9;P:0@9,3|1@7,1|2@7,8|3@5,6|4@4,0|5@3,5|6@1,8;O:3,0>3,1|3,6>3,7|3,9>2,9|4,0>3,0|5,5>6,5|5,6>5,5|5,6>6,6|5,9>5,8|9,2>9,1;R:9,9>9,8>9,7>9,6>9,5>9,4>9,3>9,2>9,1>9,0>8,0>7,0>7,1>7,2>7,3>7,4>7,5>7,6>7,7>7,8>7,9>6,9>5,9>5,8>5,7>5,6>5,5>5,4>5,3>5,2>5,1>5,0>4,0>3,0>3,1>3,2>3,3>3,4>3,5>3,6>3,7>3,8>3,9>2,9>1,9>1,8"
    }
  },
  {
    "id": "L090",
    "chapter": 5,
    "title": "玩鼠特快",
    "rows": 10,
    "columns": 10,
    "difficulty": 5,
    "difficultyScore": 517941,
    "seed": 589730,
    "generatorVersion": 2,
    "terrain": [
      [
        "road",
        "road",
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
        "water",
        "tree",
        "fence",
        "barrier",
        "tree",
        "fence",
        "grass",
        "crate",
        "tree"
      ],
      [
        "road",
        "road",
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
        "barrier",
        "fence",
        "grass",
        "grass",
        "grass",
        "barrier",
        "grass",
        "grass",
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
        "road",
        "road",
        "road",
        "road"
      ],
      [
        "plaza",
        "road",
        "road",
        "grass",
        "tree",
        "tree",
        "grass",
        "crate",
        "crate",
        "fence"
      ],
      [
        "road",
        "road",
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
        "grass",
        "grass",
        "grass",
        "road",
        "water",
        "grass",
        "crate",
        "tree",
        "road"
      ],
      [
        "road",
        "road",
        "tree",
        "road",
        "road",
        "barrier",
        "road",
        "plaza",
        "road",
        "road"
      ],
      [
        "plaza",
        "crate",
        "grass",
        "fence",
        "crate",
        "road",
        "road",
        "tree",
        "road",
        "fence"
      ]
    ],
    "start": [
      0,
      9
    ],
    "stops": [
      {
        "id": "stop-1",
        "order": 0,
        "item": "milk",
        "label": "鮮奶",
        "position": [
          0,
          3
        ],
        "houseStyle": "green"
      },
      {
        "id": "stop-2",
        "order": 1,
        "item": "cat-food",
        "label": "貓罐頭",
        "position": [
          2,
          2
        ],
        "houseStyle": "pink"
      },
      {
        "id": "stop-3",
        "order": 2,
        "item": "cat-grass",
        "label": "貓草",
        "position": [
          2,
          8
        ],
        "houseStyle": "blue"
      },
      {
        "id": "stop-4",
        "order": 3,
        "item": "paw-cookie",
        "label": "貓掌餅乾",
        "position": [
          4,
          5
        ],
        "houseStyle": "yellow"
      },
      {
        "id": "stop-5",
        "order": 4,
        "item": "parcel",
        "label": "包裹",
        "position": [
          5,
          0
        ],
        "houseStyle": "green"
      },
      {
        "id": "stop-6",
        "order": 5,
        "item": "mouse",
        "label": "玩具老鼠",
        "position": [
          6,
          6
        ],
        "houseStyle": "pink"
      },
      {
        "id": "stop-7",
        "order": 6,
        "item": "flowers",
        "label": "花束",
        "position": [
          8,
          7
        ],
        "houseStyle": "blue"
      }
    ],
    "oneWayEdges": [
      {
        "from": [
          6,
          1
        ],
        "to": [
          5,
          1
        ]
      },
      {
        "from": [
          5,
          0
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
          5,
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
          1
        ]
      },
      {
        "from": [
          4,
          3
        ],
        "to": [
          4,
          2
        ]
      },
      {
        "from": [
          6,
          4
        ],
        "to": [
          6,
          5
        ]
      },
      {
        "from": [
          6,
          6
        ],
        "to": [
          6,
          7
        ]
      },
      {
        "from": [
          6,
          9
        ],
        "to": [
          7,
          9
        ]
      },
      {
        "from": [
          7,
          9
        ],
        "to": [
          8,
          9
        ]
      }
    ],
    "solutionPath": [
      [
        0,
        9
      ],
      [
        0,
        8
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
        2,
        8
      ],
      [
        2,
        9
      ],
      [
        3,
        9
      ],
      [
        4,
        9
      ],
      [
        4,
        8
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
      ],
      [
        6,
        1
      ],
      [
        6,
        2
      ],
      [
        6,
        3
      ],
      [
        6,
        4
      ],
      [
        6,
        5
      ],
      [
        6,
        6
      ],
      [
        6,
        7
      ],
      [
        6,
        8
      ],
      [
        6,
        9
      ],
      [
        7,
        9
      ],
      [
        8,
        9
      ],
      [
        8,
        8
      ],
      [
        8,
        7
      ]
    ],
    "optimalSteps": 46,
    "optimalSolutionCount": 1,
    "fuelLimit": 49,
    "metrics": {
      "passableCellCount": 60,
      "stopCount": 7,
      "obstacleCount": 40,
      "oneWayEdgeCount": 9,
      "branchCellCount": 11,
      "detourLoopCount": 1,
      "bridgeCount": 0,
      "solverNodes": 55,
      "solverBacktracks": 8,
      "solverMaxDepth": 46,
      "canonicalSignature": "10x10;fence,road,road,road,fence,road,road,road,tree,road/road,road,tree,road,crate,road,barrier,plaza,crate,road/tree,plaza,crate,road,crate,road,grass,road,grass,road/road,road,grass,plaza,grass,road,grass,road,fence,road/road,barrier,water,road,tree,plaza,barrier,road,tree,road/crate,road,road,road,tree,road,grass,road,barrier,road/fence,road,grass,road,grass,road,grass,road,fence,plaza/grass,tree,grass,road,road,road,grass,plaza,tree,road/crate,road,grass,road,road,road,fence,road,water,road/plaza,road,road,road,plaza,road,barrier,road,road,road;S:0,9;P:0@6,9|1@7,7|2@1,7|3@4,5|4@9,4|5@3,3|6@2,1;O:0,2>0,1|0,3>0,2|3,3>2,3|5,3>4,3|6,5>7,5|7,3>7,4|7,9>8,9|8,3>8,4|9,4>8,4;R:0,9>1,9>2,9>3,9>4,9>5,9>6,9>7,9>8,9>9,9>9,8>9,7>8,7>7,7>6,7>5,7>4,7>3,7>2,7>1,7>0,7>0,6>0,5>1,5>2,5>3,5>4,5>5,5>6,5>7,5>8,5>9,5>9,4>9,3>8,3>7,3>6,3>5,3>4,3>3,3>2,3>1,3>0,3>0,2>0,1>1,1>2,1"
    }
  },
  {
    "id": "L091",
    "chapter": 5,
    "title": "六站挑戰",
    "rows": 10,
    "columns": 10,
    "difficulty": 5,
    "difficultyScore": 518525,
    "seed": 590727,
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
        "road",
        "road",
        "road"
      ],
      [
        "grass",
        "crate",
        "crate",
        "water",
        "water",
        "water",
        "grass",
        "fence",
        "barrier",
        "road"
      ],
      [
        "road",
        "plaza",
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
        "road",
        "water",
        "barrier",
        "water",
        "grass",
        "tree",
        "barrier",
        "road",
        "road",
        "barrier"
      ],
      [
        "road",
        "road",
        "road",
        "road",
        "plaza",
        "road",
        "road",
        "road",
        "road",
        "road"
      ],
      [
        "crate",
        "tree",
        "grass",
        "grass",
        "grass",
        "fence",
        "fence",
        "barrier",
        "water",
        "plaza"
      ],
      [
        "road",
        "road",
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
        "road",
        "crate",
        "road",
        "fence",
        "road",
        "water",
        "road"
      ],
      [
        "road",
        "road",
        "plaza",
        "fence",
        "plaza",
        "plaza",
        "crate",
        "road",
        "fence",
        "road"
      ],
      [
        "crate",
        "road",
        "tree",
        "water",
        "grass",
        "plaza",
        "fence",
        "road",
        "grass",
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
        "item": "dried-fish",
        "label": "魚乾",
        "position": [
          0,
          6
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
          7
        ],
        "houseStyle": "blue"
      },
      {
        "id": "stop-3",
        "order": 2,
        "item": "letter",
        "label": "信件",
        "position": [
          2,
          1
        ],
        "houseStyle": "yellow"
      },
      {
        "id": "stop-4",
        "order": 3,
        "item": "milk",
        "label": "鮮奶",
        "position": [
          4,
          4
        ],
        "houseStyle": "green"
      },
      {
        "id": "stop-5",
        "order": 4,
        "item": "cat-food",
        "label": "貓罐頭",
        "position": [
          5,
          9
        ],
        "houseStyle": "pink"
      },
      {
        "id": "stop-6",
        "order": 5,
        "item": "cat-grass",
        "label": "貓草",
        "position": [
          6,
          3
        ],
        "houseStyle": "blue"
      },
      {
        "id": "stop-7",
        "order": 6,
        "item": "paw-cookie",
        "label": "貓掌餅乾",
        "position": [
          8,
          2
        ],
        "houseStyle": "yellow"
      }
    ],
    "oneWayEdges": [
      {
        "from": [
          4,
          7
        ],
        "to": [
          3,
          7
        ]
      },
      {
        "from": [
          4,
          8
        ],
        "to": [
          3,
          8
        ]
      },
      {
        "from": [
          0,
          3
        ],
        "to": [
          0,
          4
        ]
      },
      {
        "from": [
          0,
          9
        ],
        "to": [
          1,
          9
        ]
      },
      {
        "from": [
          2,
          9
        ],
        "to": [
          2,
          8
        ]
      },
      {
        "from": [
          2,
          7
        ],
        "to": [
          2,
          6
        ]
      },
      {
        "from": [
          2,
          1
        ],
        "to": [
          2,
          0
        ]
      },
      {
        "from": [
          4,
          2
        ],
        "to": [
          4,
          3
        ]
      },
      {
        "from": [
          4,
          8
        ],
        "to": [
          4,
          9
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
        0,
        8
      ],
      [
        0,
        9
      ],
      [
        1,
        9
      ],
      [
        2,
        9
      ],
      [
        2,
        8
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
        4,
        8
      ],
      [
        4,
        9
      ],
      [
        5,
        9
      ],
      [
        6,
        9
      ],
      [
        6,
        8
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
      ],
      [
        6,
        3
      ],
      [
        6,
        2
      ],
      [
        6,
        1
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
        8,
        0
      ],
      [
        8,
        1
      ],
      [
        8,
        2
      ]
    ],
    "optimalSteps": 46,
    "optimalSolutionCount": 1,
    "fuelLimit": 50,
    "metrics": {
      "passableCellCount": 61,
      "stopCount": 7,
      "obstacleCount": 39,
      "oneWayEdgeCount": 10,
      "branchCellCount": 12,
      "detourLoopCount": 1,
      "bridgeCount": 0,
      "solverNodes": 56,
      "solverBacktracks": 9,
      "solverMaxDepth": 46,
      "canonicalSignature": "10x10;crate,road,road,road,crate,road,road,road,grass,road/road,road,grass,road,tree,road,water,plaza,crate,road/tree,plaza,grass,road,grass,road,barrier,road,crate,road/water,fence,road,plaza,grass,road,water,road,water,road/grass,plaza,crate,road,grass,plaza,grass,road,water,road/plaza,plaza,road,road,fence,road,tree,road,water,road/fence,crate,fence,road,fence,road,barrier,road,grass,plaza/road,road,road,road,barrier,road,road,plaza,fence,road/grass,fence,water,road,water,road,road,road,barrier,road/road,road,road,road,plaza,road,barrier,road,road,road;S:0,9;P:0@6,9|1@7,7|2@1,7|3@4,5|4@9,4|5@3,3|6@2,1;O:1,7>0,7|2,3>1,3|2,5>3,5|3,9>4,9|7,5>7,6|7,7>6,7|8,5>8,6|8,5>9,5|9,7>8,7|9,9>9,8;R:0,9>1,9>2,9>3,9>4,9>5,9>6,9>7,9>8,9>9,9>9,8>9,7>8,7>7,7>6,7>5,7>4,7>3,7>2,7>1,7>0,7>0,6>0,5>1,5>2,5>3,5>4,5>5,5>6,5>7,5>8,5>9,5>9,4>9,3>8,3>7,3>6,3>5,3>4,3>3,3>2,3>1,3>0,3>0,2>0,1>1,1>2,1"
    }
  },
  {
    "id": "L092",
    "chapter": 5,
    "title": "七站早班",
    "rows": 10,
    "columns": 10,
    "difficulty": 5,
    "difficultyScore": 518836,
    "seed": 591724,
    "generatorVersion": 2,
    "terrain": [
      [
        "road",
        "road",
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
        "barrier",
        "fence",
        "grass",
        "road",
        "road",
        "grass",
        "grass",
        "grass",
        "crate"
      ],
      [
        "road",
        "road",
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
        "fence",
        "grass",
        "grass",
        "grass",
        "water",
        "tree",
        "grass",
        "grass",
        "grass",
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
        "road",
        "road",
        "road"
      ],
      [
        "road",
        "grass",
        "grass",
        "grass",
        "tree",
        "fence",
        "grass",
        "grass",
        "crate",
        "fence"
      ],
      [
        "plaza",
        "road",
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
        "grass",
        "grass",
        "road",
        "grass",
        "road",
        "water",
        "grass",
        "fence",
        "road"
      ],
      [
        "road",
        "tree",
        "road",
        "grass",
        "water",
        "fence",
        "plaza",
        "road",
        "road",
        "road"
      ],
      [
        "road",
        "plaza",
        "road",
        "road",
        "road",
        "grass",
        "tree",
        "plaza",
        "grass",
        "road"
      ]
    ],
    "start": [
      0,
      9
    ],
    "stops": [
      {
        "id": "stop-1",
        "order": 0,
        "item": "parcel",
        "label": "包裹",
        "position": [
          0,
          3
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
          2
        ],
        "houseStyle": "yellow"
      },
      {
        "id": "stop-3",
        "order": 2,
        "item": "flowers",
        "label": "花束",
        "position": [
          2,
          9
        ],
        "houseStyle": "green"
      },
      {
        "id": "stop-4",
        "order": 3,
        "item": "dried-fish",
        "label": "魚乾",
        "position": [
          4,
          5
        ],
        "houseStyle": "pink"
      },
      {
        "id": "stop-5",
        "order": 4,
        "item": "yarn",
        "label": "毛線球",
        "position": [
          6,
          0
        ],
        "houseStyle": "blue"
      },
      {
        "id": "stop-6",
        "order": 5,
        "item": "letter",
        "label": "信件",
        "position": [
          6,
          7
        ],
        "houseStyle": "yellow"
      },
      {
        "id": "stop-7",
        "order": 6,
        "item": "milk",
        "label": "鮮奶",
        "position": [
          8,
          6
        ],
        "houseStyle": "green"
      }
    ],
    "oneWayEdges": [
      {
        "from": [
          2,
          4
        ],
        "to": [
          1,
          4
        ]
      },
      {
        "from": [
          2,
          5
        ],
        "to": [
          1,
          5
        ]
      },
      {
        "from": [
          0,
          7
        ],
        "to": [
          0,
          6
        ]
      },
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
          2,
          0
        ],
        "to": [
          2,
          1
        ]
      },
      {
        "from": [
          2,
          9
        ],
        "to": [
          3,
          9
        ]
      },
      {
        "from": [
          3,
          9
        ],
        "to": [
          4,
          9
        ]
      },
      {
        "from": [
          4,
          5
        ],
        "to": [
          4,
          4
        ]
      },
      {
        "from": [
          6,
          2
        ],
        "to": [
          6,
          3
        ]
      },
      {
        "from": [
          6,
          4
        ],
        "to": [
          6,
          5
        ]
      }
    ],
    "solutionPath": [
      [
        0,
        9
      ],
      [
        0,
        8
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
        2,
        8
      ],
      [
        2,
        9
      ],
      [
        3,
        9
      ],
      [
        4,
        9
      ],
      [
        4,
        8
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
      ],
      [
        6,
        1
      ],
      [
        6,
        2
      ],
      [
        6,
        3
      ],
      [
        6,
        4
      ],
      [
        6,
        5
      ],
      [
        6,
        6
      ],
      [
        6,
        7
      ],
      [
        6,
        8
      ],
      [
        6,
        9
      ],
      [
        7,
        9
      ],
      [
        8,
        9
      ],
      [
        8,
        8
      ],
      [
        8,
        7
      ],
      [
        8,
        6
      ]
    ],
    "optimalSteps": 47,
    "optimalSolutionCount": 1,
    "fuelLimit": 49,
    "metrics": {
      "passableCellCount": 62,
      "stopCount": 7,
      "obstacleCount": 38,
      "oneWayEdgeCount": 10,
      "branchCellCount": 12,
      "detourLoopCount": 1,
      "bridgeCount": 1,
      "solverNodes": 57,
      "solverBacktracks": 9,
      "solverMaxDepth": 47,
      "canonicalSignature": "10x10;road,crate,plaza,road,road,fence,road,road,road,road/road,grass,road,grass,road,crate,road,fence,road,grass/road,grass,road,grass,road,grass,plaza,grass,road,plaza/road,grass,road,grass,road,grass,bridge,water,plaza,tree/road,road,road,tree,plaza,fence,road,road,fence,grass/road,road,road,water,road,tree,road,grass,water,road/plaza,grass,road,grass,road,grass,road,road,grass,road/road,fence,plaza,grass,road,grass,road,grass,road,road/road,barrier,road,grass,road,grass,road,grass,tree,plaza/road,road,road,fence,road,road,plaza,road,road,road;S:0,0;P:0@6,0|1@7,2|2@0,2|3@4,4|4@9,6|5@2,6|6@3,8;O:0,2>0,3|0,3>0,4|2,0>3,0|4,2>4,1|4,4>5,4|5,2>5,1|5,6>4,6|7,6>6,6|9,0>9,1|9,2>8,2;R:0,0>1,0>2,0>3,0>4,0>5,0>6,0>7,0>8,0>9,0>9,1>9,2>8,2>7,2>6,2>5,2>4,2>3,2>2,2>1,2>0,2>0,3>0,4>1,4>2,4>3,4>4,4>5,4>6,4>7,4>8,4>9,4>9,5>9,6>8,6>7,6>6,6>5,6>4,6>3,6>2,6>1,6>0,6>0,7>0,8>1,8>2,8>3,8"
    }
  },
  {
    "id": "L093",
    "chapter": 5,
    "title": "單行密令",
    "rows": 10,
    "columns": 10,
    "difficulty": 5,
    "difficultyScore": 518964,
    "seed": 592721,
    "generatorVersion": 2,
    "terrain": [
      [
        "road",
        "grass",
        "plaza",
        "road",
        "road",
        "fence",
        "road",
        "road",
        "road",
        "crate"
      ],
      [
        "road",
        "water",
        "road",
        "barrier",
        "road",
        "grass",
        "plaza",
        "grass",
        "road",
        "road"
      ],
      [
        "road",
        "tree",
        "road",
        "tree",
        "road",
        "crate",
        "road",
        "grass",
        "road",
        "grass"
      ],
      [
        "road",
        "water",
        "road",
        "grass",
        "road",
        "grass",
        "bridge",
        "fence",
        "road",
        "road"
      ],
      [
        "road",
        "tree",
        "road",
        "crate",
        "bridge",
        "grass",
        "road",
        "grass",
        "plaza",
        "grass"
      ],
      [
        "road",
        "barrier",
        "road",
        "tree",
        "plaza",
        "grass",
        "road",
        "grass",
        "road",
        "road"
      ],
      [
        "plaza",
        "grass",
        "road",
        "water",
        "road",
        "road",
        "road",
        "road",
        "water",
        "plaza"
      ],
      [
        "road",
        "fence",
        "plaza",
        "tree",
        "road",
        "road",
        "road",
        "water",
        "road",
        "grass"
      ],
      [
        "road",
        "grass",
        "road",
        "grass",
        "road",
        "tree",
        "plaza",
        "road",
        "road",
        "road"
      ],
      [
        "road",
        "road",
        "road",
        "grass",
        "road",
        "road",
        "road",
        "water",
        "plaza",
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
          7,
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
          2
        ],
        "houseStyle": "pink"
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
        "houseStyle": "blue"
      },
      {
        "id": "stop-5",
        "order": 4,
        "item": "mouse",
        "label": "玩具老鼠",
        "position": [
          8,
          6
        ],
        "houseStyle": "yellow"
      },
      {
        "id": "stop-6",
        "order": 5,
        "item": "flowers",
        "label": "花束",
        "position": [
          1,
          6
        ],
        "houseStyle": "green"
      },
      {
        "id": "stop-7",
        "order": 6,
        "item": "dried-fish",
        "label": "魚乾",
        "position": [
          4,
          8
        ],
        "houseStyle": "pink"
      }
    ],
    "oneWayEdges": [
      {
        "from": [
          6,
          6
        ],
        "to": [
          6,
          5
        ]
      },
      {
        "from": [
          7,
          6
        ],
        "to": [
          7,
          5
        ]
      },
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
          1,
          0
        ],
        "to": [
          2,
          0
        ]
      },
      {
        "from": [
          9,
          0
        ],
        "to": [
          9,
          1
        ]
      },
      {
        "from": [
          4,
          2
        ],
        "to": [
          3,
          2
        ]
      },
      {
        "from": [
          1,
          4
        ],
        "to": [
          2,
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
      },
      {
        "from": [
          8,
          4
        ],
        "to": [
          9,
          4
        ]
      },
      {
        "from": [
          5,
          6
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
        8,
        0
      ],
      [
        9,
        0
      ],
      [
        9,
        1
      ],
      [
        9,
        2
      ],
      [
        8,
        2
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
        8,
        4
      ],
      [
        9,
        4
      ],
      [
        9,
        5
      ],
      [
        9,
        6
      ],
      [
        8,
        6
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
      ],
      [
        1,
        6
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
        0,
        8
      ],
      [
        1,
        8
      ],
      [
        2,
        8
      ],
      [
        3,
        8
      ],
      [
        4,
        8
      ]
    ],
    "optimalSteps": 48,
    "optimalSolutionCount": 1,
    "fuelLimit": 51,
    "metrics": {
      "passableCellCount": 62,
      "stopCount": 7,
      "obstacleCount": 38,
      "oneWayEdgeCount": 10,
      "branchCellCount": 11,
      "detourLoopCount": 1,
      "bridgeCount": 2,
      "solverNodes": 57,
      "solverBacktracks": 8,
      "solverMaxDepth": 48,
      "canonicalSignature": "10x10;crate,road,grass,road,grass,road,plaza,grass,road,grass/road,road,road,road,plaza,road,water,road,road,plaza/road,grass,grass,fence,grass,grass,road,water,road,water/road,plaza,road,bridge,road,road,road,road,plaza,road/fence,grass,crate,grass,grass,grass,road,road,tree,road/road,road,road,road,bridge,plaza,road,road,road,road/road,barrier,tree,grass,crate,tree,water,tree,grass,grass/plaza,road,road,road,road,road,road,plaza,road,road/grass,water,tree,water,tree,barrier,grass,fence,grass,road/road,road,road,road,road,road,plaza,road,road,road;S:9,0;P:0@9,6|1@7,7|2@7,0|3@5,5|4@3,8|5@3,1|6@1,4;O:3,5>3,4|3,6>4,6|3,7>4,7|5,1>5,2|5,3>5,4|5,8>5,9|7,4>7,3|9,0>9,1|9,1>9,2|9,9>8,9;R:9,0>9,1>9,2>9,3>9,4>9,5>9,6>9,7>9,8>9,9>8,9>7,9>7,8>7,7>7,6>7,5>7,4>7,3>7,2>7,1>7,0>6,0>5,0>5,1>5,2>5,3>5,4>5,5>5,6>5,7>5,8>5,9>4,9>3,9>3,8>3,7>3,6>3,5>3,4>3,3>3,2>3,1>3,0>2,0>1,0>1,1>1,2>1,3>1,4"
    }
  },
  {
    "id": "L094",
    "chapter": 5,
    "title": "橋梁巡迴",
    "rows": 10,
    "columns": 10,
    "difficulty": 5,
    "difficultyScore": 518964,
    "seed": 593718,
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
        "road",
        "road",
        "road"
      ],
      [
        "grass",
        "fence",
        "grass",
        "grass",
        "road",
        "road",
        "grass",
        "crate",
        "tree",
        "road"
      ],
      [
        "plaza",
        "road",
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
        "road",
        "tree",
        "grass",
        "barrier",
        "grass",
        "grass",
        "water",
        "barrier",
        "water",
        "water"
      ],
      [
        "road",
        "road",
        "road",
        "road",
        "bridge",
        "plaza",
        "road",
        "road",
        "road",
        "road"
      ],
      [
        "grass",
        "water",
        "grass",
        "grass",
        "barrier",
        "grass",
        "barrier",
        "grass",
        "grass",
        "road"
      ],
      [
        "road",
        "plaza",
        "road",
        "bridge",
        "road",
        "road",
        "road",
        "road",
        "plaza",
        "road"
      ],
      [
        "road",
        "tree",
        "grass",
        "water",
        "crate",
        "crate",
        "road",
        "fence",
        "grass",
        "road"
      ],
      [
        "road",
        "road",
        "road",
        "road",
        "plaza",
        "plaza",
        "crate",
        "road",
        "road",
        "road"
      ],
      [
        "road",
        "grass",
        "barrier",
        "road",
        "barrier",
        "road",
        "road",
        "tree",
        "road",
        "water"
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
          7
        ],
        "houseStyle": "pink"
      },
      {
        "id": "stop-3",
        "order": 2,
        "item": "milk",
        "label": "鮮奶",
        "position": [
          2,
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
          5
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
          8
        ],
        "houseStyle": "green"
      },
      {
        "id": "stop-6",
        "order": 5,
        "item": "paw-cookie",
        "label": "貓掌餅乾",
        "position": [
          6,
          1
        ],
        "houseStyle": "pink"
      },
      {
        "id": "stop-7",
        "order": 6,
        "item": "parcel",
        "label": "包裹",
        "position": [
          8,
          4
        ],
        "houseStyle": "blue"
      }
    ],
    "oneWayEdges": [
      {
        "from": [
          2,
          4
        ],
        "to": [
          1,
          4
        ]
      },
      {
        "from": [
          2,
          5
        ],
        "to": [
          1,
          5
        ]
      },
      {
        "from": [
          0,
          8
        ],
        "to": [
          0,
          9
        ]
      },
      {
        "from": [
          1,
          9
        ],
        "to": [
          2,
          9
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
          0
        ],
        "to": [
          4,
          1
        ]
      },
      {
        "from": [
          4,
          5
        ],
        "to": [
          4,
          6
        ]
      },
      {
        "from": [
          4,
          7
        ],
        "to": [
          4,
          8
        ]
      },
      {
        "from": [
          5,
          9
        ],
        "to": [
          6,
          9
        ]
      },
      {
        "from": [
          6,
          3
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
        0,
        8
      ],
      [
        0,
        9
      ],
      [
        1,
        9
      ],
      [
        2,
        9
      ],
      [
        2,
        8
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
        4,
        8
      ],
      [
        4,
        9
      ],
      [
        5,
        9
      ],
      [
        6,
        9
      ],
      [
        6,
        8
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
      ],
      [
        6,
        3
      ],
      [
        6,
        2
      ],
      [
        6,
        1
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
        8,
        0
      ],
      [
        8,
        1
      ],
      [
        8,
        2
      ],
      [
        8,
        3
      ],
      [
        8,
        4
      ]
    ],
    "optimalSteps": 48,
    "optimalSolutionCount": 1,
    "fuelLimit": 52,
    "metrics": {
      "passableCellCount": 62,
      "stopCount": 7,
      "obstacleCount": 38,
      "oneWayEdgeCount": 10,
      "branchCellCount": 11,
      "detourLoopCount": 1,
      "bridgeCount": 2,
      "solverNodes": 57,
      "solverBacktracks": 8,
      "solverMaxDepth": 48,
      "canonicalSignature": "10x10;road,grass,barrier,road,barrier,road,road,tree,road,water/road,road,road,road,plaza,plaza,crate,road,road,road/road,tree,grass,water,crate,crate,road,fence,grass,road/road,plaza,road,bridge,road,road,road,road,plaza,road/grass,water,grass,grass,barrier,grass,barrier,grass,grass,road/road,road,road,road,bridge,plaza,road,road,road,road/road,tree,grass,barrier,grass,grass,water,barrier,water,water/plaza,road,road,road,road,road,road,plaza,road,road/grass,fence,grass,grass,road,road,grass,crate,tree,road/road,road,road,road,road,road,plaza,road,road,road;S:9,0;P:0@9,6|1@7,7|2@7,0|3@5,5|4@3,8|5@3,1|6@1,4;O:3,3>3,2|4,9>3,9|5,0>5,1|5,5>5,6|5,7>5,8|7,3>7,2|7,4>8,4|7,5>8,5|8,9>7,9|9,8>9,9;R:9,0>9,1>9,2>9,3>9,4>9,5>9,6>9,7>9,8>9,9>8,9>7,9>7,8>7,7>7,6>7,5>7,4>7,3>7,2>7,1>7,0>6,0>5,0>5,1>5,2>5,3>5,4>5,5>5,6>5,7>5,8>5,9>4,9>3,9>3,8>3,7>3,6>3,5>3,4>3,3>3,2>3,1>3,0>2,0>1,0>1,1>1,2>1,3>1,4"
    }
  },
  {
    "id": "L095",
    "chapter": 5,
    "title": "障礙迷城",
    "rows": 10,
    "columns": 10,
    "difficulty": 5,
    "difficultyScore": 519493,
    "seed": 594715,
    "generatorVersion": 2,
    "terrain": [
      [
        "road",
        "road",
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
        "grass",
        "water",
        "tree",
        "grass",
        "fence",
        "crate",
        "tree",
        "grass",
        "crate",
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
        "bridge",
        "road",
        "road"
      ],
      [
        "plaza",
        "water",
        "barrier",
        "fence",
        "grass",
        "grass",
        "fence",
        "water",
        "water",
        "barrier"
      ],
      [
        "road",
        "road",
        "road",
        "road",
        "bridge",
        "road",
        "plaza",
        "road",
        "road",
        "road"
      ],
      [
        "grass",
        "fence",
        "grass",
        "water",
        "grass",
        "grass",
        "grass",
        "grass",
        "grass",
        "road"
      ],
      [
        "plaza",
        "road",
        "road",
        "bridge",
        "road",
        "road",
        "road",
        "plaza",
        "road",
        "road"
      ],
      [
        "road",
        "tree",
        "water",
        "grass",
        "road",
        "road",
        "tree",
        "road",
        "water",
        "road"
      ],
      [
        "road",
        "road",
        "road",
        "road",
        "road",
        "plaza",
        "plaza",
        "grass",
        "road",
        "road"
      ],
      [
        "crate",
        "road",
        "grass",
        "road",
        "tree",
        "road",
        "grass",
        "road",
        "road",
        "tree"
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
        "item": "mouse",
        "label": "玩具老鼠",
        "position": [
          0,
          7
        ],
        "houseStyle": "pink"
      },
      {
        "id": "stop-2",
        "order": 1,
        "item": "flowers",
        "label": "花束",
        "position": [
          2,
          6
        ],
        "houseStyle": "blue"
      },
      {
        "id": "stop-3",
        "order": 2,
        "item": "dried-fish",
        "label": "魚乾",
        "position": [
          3,
          0
        ],
        "houseStyle": "yellow"
      },
      {
        "id": "stop-4",
        "order": 3,
        "item": "yarn",
        "label": "毛線球",
        "position": [
          4,
          6
        ],
        "houseStyle": "green"
      },
      {
        "id": "stop-5",
        "order": 4,
        "item": "letter",
        "label": "信件",
        "position": [
          6,
          7
        ],
        "houseStyle": "pink"
      },
      {
        "id": "stop-6",
        "order": 5,
        "item": "milk",
        "label": "鮮奶",
        "position": [
          6,
          0
        ],
        "houseStyle": "blue"
      },
      {
        "id": "stop-7",
        "order": 6,
        "item": "cat-food",
        "label": "貓罐頭",
        "position": [
          8,
          5
        ],
        "houseStyle": "yellow"
      }
    ],
    "oneWayEdges": [
      {
        "from": [
          8,
          4
        ],
        "to": [
          7,
          4
        ]
      },
      {
        "from": [
          8,
          5
        ],
        "to": [
          7,
          5
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
          2,
          1
        ],
        "to": [
          2,
          0
        ]
      },
      {
        "from": [
          3,
          0
        ],
        "to": [
          4,
          0
        ]
      },
      {
        "from": [
          4,
          4
        ],
        "to": [
          4,
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
          7
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
          6,
          0
        ],
        "to": [
          7,
          0
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
        0,
        8
      ],
      [
        0,
        9
      ],
      [
        1,
        9
      ],
      [
        2,
        9
      ],
      [
        2,
        8
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
        4,
        8
      ],
      [
        4,
        9
      ],
      [
        5,
        9
      ],
      [
        6,
        9
      ],
      [
        6,
        8
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
      ],
      [
        6,
        3
      ],
      [
        6,
        2
      ],
      [
        6,
        1
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
        8,
        0
      ],
      [
        8,
        1
      ],
      [
        8,
        2
      ],
      [
        8,
        3
      ],
      [
        8,
        4
      ],
      [
        8,
        5
      ]
    ],
    "optimalSteps": 49,
    "optimalSolutionCount": 1,
    "fuelLimit": 51,
    "metrics": {
      "passableCellCount": 62,
      "stopCount": 7,
      "obstacleCount": 38,
      "oneWayEdgeCount": 11,
      "branchCellCount": 10,
      "detourLoopCount": 1,
      "bridgeCount": 3,
      "solverNodes": 57,
      "solverBacktracks": 7,
      "solverMaxDepth": 49,
      "canonicalSignature": "10x10;crate,road,grass,road,tree,road,grass,road,road,tree/road,road,road,road,road,plaza,plaza,grass,road,road/road,tree,water,grass,road,road,tree,road,water,road/plaza,road,road,bridge,road,road,road,plaza,road,road/grass,fence,grass,water,grass,grass,grass,grass,grass,road/road,road,road,road,bridge,road,plaza,road,road,road/plaza,water,barrier,fence,grass,grass,fence,water,water,barrier/road,road,road,road,road,road,plaza,bridge,road,road/grass,water,tree,grass,fence,crate,tree,grass,crate,road/road,road,road,road,road,road,road,plaza,road,road;S:9,0;P:0@9,7|1@7,6|2@6,0|3@5,6|4@3,7|5@3,0|6@1,5;O:1,4>2,4|1,5>2,5|3,0>2,0|3,2>3,1|5,4>5,5|5,6>5,7|6,0>5,0|7,1>7,0|7,3>7,2|7,4>7,3|9,2>9,3;R:9,0>9,1>9,2>9,3>9,4>9,5>9,6>9,7>9,8>9,9>8,9>7,9>7,8>7,7>7,6>7,5>7,4>7,3>7,2>7,1>7,0>6,0>5,0>5,1>5,2>5,3>5,4>5,5>5,6>5,7>5,8>5,9>4,9>3,9>3,8>3,7>3,6>3,5>3,4>3,3>3,2>3,1>3,0>2,0>1,0>1,1>1,2>1,3>1,4>1,5"
    }
  },
  {
    "id": "L096",
    "chapter": 5,
    "title": "黃昏急送",
    "rows": 10,
    "columns": 10,
    "difficulty": 5,
    "difficultyScore": 519820,
    "seed": 595712,
    "generatorVersion": 2,
    "terrain": [
      [
        "road",
        "road",
        "grass",
        "road",
        "road",
        "road",
        "crate",
        "road",
        "road",
        "road"
      ],
      [
        "grass",
        "road",
        "road",
        "road",
        "tree",
        "plaza",
        "grass",
        "plaza",
        "grass",
        "road"
      ],
      [
        "road",
        "fence",
        "water",
        "road",
        "fence",
        "road",
        "tree",
        "bridge",
        "grass",
        "road"
      ],
      [
        "road",
        "water",
        "road",
        "plaza",
        "barrier",
        "road",
        "grass",
        "road",
        "grass",
        "plaza"
      ],
      [
        "road",
        "plaza",
        "crate",
        "road",
        "water",
        "road",
        "fence",
        "road",
        "crate",
        "road"
      ],
      [
        "grass",
        "road",
        "grass",
        "road",
        "water",
        "bridge",
        "fence",
        "road",
        "grass",
        "road"
      ],
      [
        "plaza",
        "road",
        "grass",
        "bridge",
        "grass",
        "road",
        "crate",
        "road",
        "road",
        "road"
      ],
      [
        "grass",
        "road",
        "barrier",
        "road",
        "barrier",
        "plaza",
        "fence",
        "plaza",
        "road",
        "road"
      ],
      [
        "road",
        "road",
        "tree",
        "road",
        "tree",
        "road",
        "barrier",
        "road",
        "grass",
        "road"
      ],
      [
        "barrier",
        "road",
        "road",
        "plaza",
        "barrier",
        "road",
        "road",
        "road",
        "grass",
        "road"
      ]
    ],
    "start": [
      9,
      9
    ],
    "stops": [
      {
        "id": "stop-1",
        "order": 0,
        "item": "cat-grass",
        "label": "貓草",
        "position": [
          3,
          9
        ],
        "houseStyle": "blue"
      },
      {
        "id": "stop-2",
        "order": 1,
        "item": "paw-cookie",
        "label": "貓掌餅乾",
        "position": [
          1,
          7
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
          7
        ],
        "houseStyle": "green"
      },
      {
        "id": "stop-4",
        "order": 3,
        "item": "mouse",
        "label": "玩具老鼠",
        "position": [
          7,
          5
        ],
        "houseStyle": "pink"
      },
      {
        "id": "stop-5",
        "order": 4,
        "item": "flowers",
        "label": "花束",
        "position": [
          1,
          5
        ],
        "houseStyle": "blue"
      },
      {
        "id": "stop-6",
        "order": 5,
        "item": "dried-fish",
        "label": "魚乾",
        "position": [
          3,
          3
        ],
        "houseStyle": "yellow"
      },
      {
        "id": "stop-7",
        "order": 6,
        "item": "yarn",
        "label": "毛線球",
        "position": [
          9,
          3
        ],
        "houseStyle": "green"
      },
      {
        "id": "stop-8",
        "order": 7,
        "item": "letter",
        "label": "信件",
        "position": [
          4,
          1
        ],
        "houseStyle": "pink"
      }
    ],
    "oneWayEdges": [
      {
        "from": [
          6,
          7
        ],
        "to": [
          6,
          8
        ]
      },
      {
        "from": [
          7,
          7
        ],
        "to": [
          7,
          8
        ]
      },
      {
        "from": [
          1,
          9
        ],
        "to": [
          0,
          9
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
          5,
          7
        ],
        "to": [
          6,
          7
        ]
      },
      {
        "from": [
          9,
          7
        ],
        "to": [
          9,
          6
        ]
      },
      {
        "from": [
          0,
          4
        ],
        "to": [
          0,
          3
        ]
      },
      {
        "from": [
          0,
          3
        ],
        "to": [
          1,
          3
        ]
      },
      {
        "from": [
          1,
          3
        ],
        "to": [
          2,
          3
        ]
      },
      {
        "from": [
          4,
          3
        ],
        "to": [
          5,
          3
        ]
      },
      {
        "from": [
          9,
          2
        ],
        "to": [
          9,
          1
        ]
      }
    ],
    "solutionPath": [
      [
        9,
        9
      ],
      [
        8,
        9
      ],
      [
        7,
        9
      ],
      [
        6,
        9
      ],
      [
        5,
        9
      ],
      [
        4,
        9
      ],
      [
        3,
        9
      ],
      [
        2,
        9
      ],
      [
        1,
        9
      ],
      [
        0,
        9
      ],
      [
        0,
        8
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
        8,
        7
      ],
      [
        9,
        7
      ],
      [
        9,
        6
      ],
      [
        9,
        5
      ],
      [
        8,
        5
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
        8,
        3
      ],
      [
        9,
        3
      ],
      [
        9,
        2
      ],
      [
        9,
        1
      ],
      [
        8,
        1
      ],
      [
        7,
        1
      ],
      [
        6,
        1
      ],
      [
        5,
        1
      ],
      [
        4,
        1
      ]
    ],
    "optimalSteps": 49,
    "optimalSolutionCount": 1,
    "fuelLimit": 51,
    "metrics": {
      "passableCellCount": 62,
      "stopCount": 8,
      "obstacleCount": 38,
      "oneWayEdgeCount": 11,
      "branchCellCount": 10,
      "detourLoopCount": 1,
      "bridgeCount": 3,
      "solverNodes": 58,
      "solverBacktracks": 8,
      "solverMaxDepth": 49,
      "canonicalSignature": "10x10;barrier,road,grass,plaza,grass,road,road,road,grass,road/road,road,road,road,road,plaza,water,fence,road,road/road,tree,barrier,grass,grass,crate,road,water,road,grass/plaza,road,road,bridge,road,road,plaza,road,road,road/barrier,tree,barrier,grass,water,water,barrier,fence,tree,road/road,road,plaza,road,bridge,road,road,road,plaza,road/road,barrier,fence,crate,fence,fence,grass,tree,grass,crate/road,road,plaza,road,road,road,road,bridge,plaza,road/grass,grass,road,road,grass,crate,grass,grass,grass,road/road,road,road,road,road,road,plaza,road,road,road;S:9,0;P:0@9,6|1@7,8|2@7,2|3@5,2|4@5,8|5@3,6|6@3,0|7@1,5;O:2,0>1,0|3,5>3,4|3,8>3,7|3,9>3,8|4,9>3,9|7,0>6,0|7,2>8,2|7,3>8,3|7,4>7,3|7,7>7,6|9,8>9,9;R:9,0>9,1>9,2>9,3>9,4>9,5>9,6>9,7>9,8>9,9>8,9>7,9>7,8>7,7>7,6>7,5>7,4>7,3>7,2>7,1>7,0>6,0>5,0>5,1>5,2>5,3>5,4>5,5>5,6>5,7>5,8>5,9>4,9>3,9>3,8>3,7>3,6>3,5>3,4>3,3>3,2>3,1>3,0>2,0>1,0>1,1>1,2>1,3>1,4>1,5"
    }
  },
  {
    "id": "L097",
    "chapter": 5,
    "title": "八站連送",
    "rows": 10,
    "columns": 10,
    "difficulty": 5,
    "difficultyScore": 519688,
    "seed": 596709,
    "generatorVersion": 2,
    "terrain": [
      [
        "road",
        "road",
        "road",
        "grass",
        "plaza",
        "road",
        "road",
        "road",
        "water",
        "road"
      ],
      [
        "road",
        "grass",
        "plaza",
        "grass",
        "road",
        "water",
        "road",
        "grass",
        "grass",
        "road"
      ],
      [
        "road",
        "barrier",
        "bridge",
        "water",
        "road",
        "crate",
        "road",
        "grass",
        "road",
        "road"
      ],
      [
        "plaza",
        "tree",
        "road",
        "tree",
        "road",
        "water",
        "road",
        "fence",
        "plaza",
        "grass"
      ],
      [
        "road",
        "tree",
        "road",
        "crate",
        "road",
        "grass",
        "plaza",
        "tree",
        "road",
        "plaza"
      ],
      [
        "road",
        "grass",
        "road",
        "tree",
        "bridge",
        "road",
        "road",
        "grass",
        "road",
        "grass"
      ],
      [
        "road",
        "barrier",
        "road",
        "water",
        "plaza",
        "road",
        "bridge",
        "tree",
        "road",
        "road"
      ],
      [
        "road",
        "tree",
        "plaza",
        "water",
        "road",
        "grass",
        "road",
        "water",
        "road",
        "fence"
      ],
      [
        "road",
        "tree",
        "road",
        "barrier",
        "road",
        "crate",
        "road",
        "grass",
        "road",
        "fence"
      ],
      [
        "road",
        "tree",
        "road",
        "road",
        "road",
        "fence",
        "road",
        "plaza",
        "road",
        "road"
      ]
    ],
    "start": [
      9,
      0
    ],
    "stops": [
      {
        "id": "stop-1",
        "order": 0,
        "item": "letter",
        "label": "信件",
        "position": [
          3,
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
          1,
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
          7,
          2
        ],
        "houseStyle": "pink"
      },
      {
        "id": "stop-4",
        "order": 3,
        "item": "cat-grass",
        "label": "貓草",
        "position": [
          6,
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
          0,
          4
        ],
        "houseStyle": "yellow"
      },
      {
        "id": "stop-6",
        "order": 5,
        "item": "parcel",
        "label": "包裹",
        "position": [
          4,
          6
        ],
        "houseStyle": "green"
      },
      {
        "id": "stop-7",
        "order": 6,
        "item": "mouse",
        "label": "玩具老鼠",
        "position": [
          9,
          7
        ],
        "houseStyle": "pink"
      },
      {
        "id": "stop-8",
        "order": 7,
        "item": "flowers",
        "label": "花束",
        "position": [
          3,
          8
        ],
        "houseStyle": "blue"
      }
    ],
    "oneWayEdges": [
      {
        "from": [
          5,
          6
        ],
        "to": [
          5,
          5
        ]
      },
      {
        "from": [
          6,
          6
        ],
        "to": [
          6,
          5
        ]
      },
      {
        "from": [
          8,
          0
        ],
        "to": [
          7,
          0
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
          5,
          0
        ],
        "to": [
          4,
          0
        ]
      },
      {
        "from": [
          2,
          0
        ],
        "to": [
          1,
          0
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
          9,
          2
        ],
        "to": [
          9,
          3
        ]
      },
      {
        "from": [
          0,
          5
        ],
        "to": [
          0,
          6
        ]
      },
      {
        "from": [
          5,
          6
        ],
        "to": [
          6,
          6
        ]
      },
      {
        "from": [
          6,
          6
        ],
        "to": [
          7,
          6
        ]
      }
    ],
    "solutionPath": [
      [
        9,
        0
      ],
      [
        8,
        0
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
        8,
        2
      ],
      [
        9,
        2
      ],
      [
        9,
        3
      ],
      [
        9,
        4
      ],
      [
        8,
        4
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
      ],
      [
        7,
        6
      ],
      [
        8,
        6
      ],
      [
        9,
        6
      ],
      [
        9,
        7
      ],
      [
        9,
        8
      ],
      [
        8,
        8
      ],
      [
        7,
        8
      ],
      [
        6,
        8
      ],
      [
        5,
        8
      ],
      [
        4,
        8
      ],
      [
        3,
        8
      ]
    ],
    "optimalSteps": 50,
    "optimalSolutionCount": 1,
    "fuelLimit": 52,
    "metrics": {
      "passableCellCount": 61,
      "stopCount": 8,
      "obstacleCount": 39,
      "oneWayEdgeCount": 11,
      "branchCellCount": 8,
      "detourLoopCount": 1,
      "bridgeCount": 3,
      "solverNodes": 59,
      "solverBacktracks": 8,
      "solverMaxDepth": 50,
      "canonicalSignature": "10x10;road,fence,fence,road,grass,plaza,grass,road,road,road/road,road,road,road,road,road,plaza,road,grass,water/plaza,grass,water,tree,grass,tree,fence,grass,grass,road/road,road,road,bridge,road,plaza,road,road,road,road/fence,crate,grass,road,road,grass,water,crate,water,road/road,road,road,plaza,bridge,road,road,road,road,plaza/road,barrier,water,water,tree,crate,tree,water,grass,grass/road,road,plaza,road,road,road,road,bridge,plaza,road/tree,tree,tree,barrier,grass,tree,tree,barrier,grass,road/road,road,road,road,road,road,plaza,road,road,road;S:9,0;P:0@9,6|1@7,8|2@7,2|3@5,3|4@5,9|5@3,5|6@2,0|7@1,6;O:3,3>3,2|3,3>4,3|3,4>3,3|3,4>4,4|4,9>3,9|7,0>6,0|7,4>7,3|9,1>9,2|9,2>9,3|9,4>9,5|9,7>9,8;R:9,0>9,1>9,2>9,3>9,4>9,5>9,6>9,7>9,8>9,9>8,9>7,9>7,8>7,7>7,6>7,5>7,4>7,3>7,2>7,1>7,0>6,0>5,0>5,1>5,2>5,3>5,4>5,5>5,6>5,7>5,8>5,9>4,9>3,9>3,8>3,7>3,6>3,5>3,4>3,3>3,2>3,1>3,0>2,0>1,0>1,1>1,2>1,3>1,4>1,5>1,6"
    }
  },
  {
    "id": "L098",
    "chapter": 5,
    "title": "全城規劃",
    "rows": 10,
    "columns": 10,
    "difficulty": 5,
    "difficultyScore": 519556,
    "seed": 597706,
    "generatorVersion": 2,
    "terrain": [
      [
        "water",
        "grass",
        "road",
        "road",
        "road",
        "plaza",
        "grass",
        "road",
        "road",
        "road"
      ],
      [
        "crate",
        "road",
        "crate",
        "road",
        "water",
        "road",
        "grass",
        "plaza",
        "grass",
        "road"
      ],
      [
        "road",
        "plaza",
        "tree",
        "road",
        "grass",
        "road",
        "grass",
        "bridge",
        "water",
        "road"
      ],
      [
        "barrier",
        "road",
        "grass",
        "road",
        "grass",
        "road",
        "grass",
        "road",
        "road",
        "plaza"
      ],
      [
        "road",
        "road",
        "tree",
        "road",
        "crate",
        "road",
        "grass",
        "road",
        "road",
        "road"
      ],
      [
        "grass",
        "road",
        "water",
        "plaza",
        "grass",
        "bridge",
        "grass",
        "road",
        "grass",
        "road"
      ],
      [
        "road",
        "road",
        "grass",
        "bridge",
        "grass",
        "plaza",
        "grass",
        "road",
        "crate",
        "road"
      ],
      [
        "crate",
        "road",
        "crate",
        "road",
        "grass",
        "road",
        "grass",
        "road",
        "crate",
        "road"
      ],
      [
        "plaza",
        "road",
        "grass",
        "road",
        "grass",
        "road",
        "water",
        "plaza",
        "grass",
        "road"
      ],
      [
        "crate",
        "plaza",
        "road",
        "road",
        "grass",
        "road",
        "road",
        "road",
        "barrier",
        "road"
      ]
    ],
    "start": [
      9,
      9
    ],
    "stops": [
      {
        "id": "stop-1",
        "order": 0,
        "item": "flowers",
        "label": "花束",
        "position": [
          3,
          9
        ],
        "houseStyle": "green"
      },
      {
        "id": "stop-2",
        "order": 1,
        "item": "dried-fish",
        "label": "魚乾",
        "position": [
          1,
          7
        ],
        "houseStyle": "pink"
      },
      {
        "id": "stop-3",
        "order": 2,
        "item": "yarn",
        "label": "毛線球",
        "position": [
          8,
          7
        ],
        "houseStyle": "blue"
      },
      {
        "id": "stop-4",
        "order": 3,
        "item": "letter",
        "label": "信件",
        "position": [
          6,
          5
        ],
        "houseStyle": "yellow"
      },
      {
        "id": "stop-5",
        "order": 4,
        "item": "milk",
        "label": "鮮奶",
        "position": [
          0,
          5
        ],
        "houseStyle": "green"
      },
      {
        "id": "stop-6",
        "order": 5,
        "item": "cat-food",
        "label": "貓罐頭",
        "position": [
          5,
          3
        ],
        "houseStyle": "pink"
      },
      {
        "id": "stop-7",
        "order": 6,
        "item": "cat-grass",
        "label": "貓草",
        "position": [
          9,
          1
        ],
        "houseStyle": "blue"
      },
      {
        "id": "stop-8",
        "order": 7,
        "item": "paw-cookie",
        "label": "貓掌餅乾",
        "position": [
          2,
          1
        ],
        "houseStyle": "yellow"
      }
    ],
    "oneWayEdges": [
      {
        "from": [
          3,
          7
        ],
        "to": [
          3,
          8
        ]
      },
      {
        "from": [
          4,
          7
        ],
        "to": [
          4,
          8
        ]
      },
      {
        "from": [
          8,
          9
        ],
        "to": [
          7,
          9
        ]
      },
      {
        "from": [
          2,
          9
        ],
        "to": [
          1,
          9
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
      },
      {
        "from": [
          9,
          7
        ],
        "to": [
          9,
          6
        ]
      },
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
          8,
          3
        ],
        "to": [
          9,
          3
        ]
      },
      {
        "from": [
          9,
          3
        ],
        "to": [
          9,
          2
        ]
      },
      {
        "from": [
          8,
          1
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
          4,
          1
        ]
      }
    ],
    "solutionPath": [
      [
        9,
        9
      ],
      [
        8,
        9
      ],
      [
        7,
        9
      ],
      [
        6,
        9
      ],
      [
        5,
        9
      ],
      [
        4,
        9
      ],
      [
        3,
        9
      ],
      [
        2,
        9
      ],
      [
        1,
        9
      ],
      [
        0,
        9
      ],
      [
        0,
        8
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
        8,
        7
      ],
      [
        9,
        7
      ],
      [
        9,
        6
      ],
      [
        9,
        5
      ],
      [
        8,
        5
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
        8,
        3
      ],
      [
        9,
        3
      ],
      [
        9,
        2
      ],
      [
        9,
        1
      ],
      [
        8,
        1
      ],
      [
        7,
        1
      ],
      [
        6,
        1
      ],
      [
        5,
        1
      ],
      [
        4,
        1
      ],
      [
        3,
        1
      ],
      [
        2,
        1
      ]
    ],
    "optimalSteps": 51,
    "optimalSolutionCount": 1,
    "fuelLimit": 55,
    "metrics": {
      "passableCellCount": 60,
      "stopCount": 8,
      "obstacleCount": 40,
      "oneWayEdgeCount": 11,
      "branchCellCount": 6,
      "detourLoopCount": 1,
      "bridgeCount": 3,
      "solverNodes": 60,
      "solverBacktracks": 8,
      "solverMaxDepth": 51,
      "canonicalSignature": "10x10;crate,plaza,crate,road,grass,road,barrier,road,crate,water/plaza,road,road,road,road,road,road,plaza,road,grass/road,grass,crate,grass,water,tree,grass,tree,crate,road/road,road,road,bridge,plaza,road,road,road,road,road/grass,grass,grass,grass,grass,crate,grass,grass,water,road/road,road,road,plaza,bridge,road,road,road,road,plaza/road,water,grass,grass,grass,grass,grass,grass,grass,grass/road,plaza,road,road,road,road,road,bridge,plaza,road/barrier,grass,crate,crate,grass,road,road,water,grass,road/road,road,road,road,road,road,plaza,road,road,road;S:9,0;P:0@9,6|1@7,8|2@7,1|3@5,3|4@5,9|5@3,4|6@1,0|7@1,7;O:1,1>1,2|1,4>1,5|3,0>2,0|3,1>3,0|5,5>5,6|7,0>6,0|7,5>7,4|7,5>8,5|7,6>8,6|9,1>9,2|9,7>9,8;R:9,0>9,1>9,2>9,3>9,4>9,5>9,6>9,7>9,8>9,9>8,9>7,9>7,8>7,7>7,6>7,5>7,4>7,3>7,2>7,1>7,0>6,0>5,0>5,1>5,2>5,3>5,4>5,5>5,6>5,7>5,8>5,9>4,9>3,9>3,8>3,7>3,6>3,5>3,4>3,3>3,2>3,1>3,0>2,0>1,0>1,1>1,2>1,3>1,4>1,5>1,6>1,7"
    }
  },
  {
    "id": "L099",
    "chapter": 5,
    "title": "終極快線",
    "rows": 10,
    "columns": 10,
    "difficulty": 5,
    "difficultyScore": 519611,
    "seed": 598703,
    "generatorVersion": 2,
    "terrain": [
      [
        "road",
        "fence",
        "road",
        "road",
        "road",
        "grass",
        "road",
        "road",
        "plaza",
        "grass"
      ],
      [
        "road",
        "fence",
        "plaza",
        "water",
        "road",
        "water",
        "road",
        "tree",
        "road",
        "road"
      ],
      [
        "road",
        "road",
        "road",
        "crate",
        "road",
        "grass",
        "road",
        "tree",
        "road",
        "grass"
      ],
      [
        "road",
        "road",
        "road",
        "grass",
        "plaza",
        "tree",
        "bridge",
        "grass",
        "road",
        "road"
      ],
      [
        "road",
        "fence",
        "road",
        "barrier",
        "bridge",
        "water",
        "plaza",
        "grass",
        "road",
        "grass"
      ],
      [
        "road",
        "tree",
        "road",
        "grass",
        "road",
        "grass",
        "road",
        "tree",
        "road",
        "crate"
      ],
      [
        "plaza",
        "crate",
        "road",
        "fence",
        "road",
        "crate",
        "road",
        "water",
        "road",
        "road"
      ],
      [
        "road",
        "grass",
        "bridge",
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
        "grass",
        "plaza",
        "barrier",
        "road",
        "grass",
        "road",
        "road",
        "crate",
        "grass"
      ],
      [
        "road",
        "road",
        "road",
        "crate",
        "plaza",
        "road",
        "road",
        "tree",
        "grass",
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
        "item": "paw-cookie",
        "label": "貓掌餅乾",
        "position": [
          6,
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
          8,
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
          1,
          2
        ],
        "houseStyle": "yellow"
      },
      {
        "id": "stop-4",
        "order": 3,
        "item": "flowers",
        "label": "花束",
        "position": [
          3,
          4
        ],
        "houseStyle": "green"
      },
      {
        "id": "stop-5",
        "order": 4,
        "item": "dried-fish",
        "label": "魚乾",
        "position": [
          9,
          4
        ],
        "houseStyle": "pink"
      },
      {
        "id": "stop-6",
        "order": 5,
        "item": "yarn",
        "label": "毛線球",
        "position": [
          4,
          6
        ],
        "houseStyle": "blue"
      },
      {
        "id": "stop-7",
        "order": 6,
        "item": "letter",
        "label": "信件",
        "position": [
          0,
          8
        ],
        "houseStyle": "yellow"
      },
      {
        "id": "stop-8",
        "order": 7,
        "item": "milk",
        "label": "鮮奶",
        "position": [
          7,
          8
        ],
        "houseStyle": "green"
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
          1,
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
          0
        ],
        "to": [
          4,
          0
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
          0,
          3
        ],
        "to": [
          0,
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
      },
      {
        "from": [
          9,
          5
        ],
        "to": [
          9,
          6
        ]
      },
      {
        "from": [
          7,
          6
        ],
        "to": [
          6,
          6
        ]
      },
      {
        "from": [
          3,
          6
        ],
        "to": [
          2,
          6
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
        8,
        0
      ],
      [
        9,
        0
      ],
      [
        9,
        1
      ],
      [
        9,
        2
      ],
      [
        8,
        2
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
        8,
        4
      ],
      [
        9,
        4
      ],
      [
        9,
        5
      ],
      [
        9,
        6
      ],
      [
        8,
        6
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
      ],
      [
        1,
        6
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
        0,
        8
      ],
      [
        1,
        8
      ],
      [
        2,
        8
      ],
      [
        3,
        8
      ],
      [
        4,
        8
      ],
      [
        5,
        8
      ],
      [
        6,
        8
      ],
      [
        7,
        8
      ]
    ],
    "optimalSteps": 51,
    "optimalSolutionCount": 1,
    "fuelLimit": 55,
    "metrics": {
      "passableCellCount": 58,
      "stopCount": 8,
      "obstacleCount": 42,
      "oneWayEdgeCount": 12,
      "branchCellCount": 4,
      "detourLoopCount": 1,
      "bridgeCount": 3,
      "solverNodes": 60,
      "solverBacktracks": 8,
      "solverMaxDepth": 51,
      "canonicalSignature": "10x10;grass,grass,grass,road,crate,grass,road,grass,road,grass/grass,crate,plaza,road,road,road,road,road,road,plaza/tree,road,grass,water,tree,grass,grass,tree,tree,road/road,road,road,road,road,plaza,bridge,road,road,road/road,grass,grass,crate,grass,water,tree,grass,water,grass/plaza,road,road,road,road,bridge,plaza,road,road,road/crate,barrier,grass,fence,grass,barrier,grass,crate,water,road/road,plaza,bridge,road,road,road,road,road,plaza,road/road,grass,grass,crate,tree,fence,road,road,fence,fence/road,road,road,plaza,road,road,road,road,road,road;S:9,9;P:0@9,3|1@7,1|2@7,8|3@5,6|4@5,0|5@3,5|6@1,9|7@1,2;O:3,2>3,3|3,6>3,7|4,0>3,0|5,6>5,5|6,9>5,9|7,6>8,6|7,7>8,7|9,3>9,2|9,5>9,4|9,6>9,5|9,8>9,7|9,9>9,8;R:9,9>9,8>9,7>9,6>9,5>9,4>9,3>9,2>9,1>9,0>8,0>7,0>7,1>7,2>7,3>7,4>7,5>7,6>7,7>7,8>7,9>6,9>5,9>5,8>5,7>5,6>5,5>5,4>5,3>5,2>5,1>5,0>4,0>3,0>3,1>3,2>3,3>3,4>3,5>3,6>3,7>3,8>3,9>2,9>1,9>1,8>1,7>1,6>1,5>1,4>1,3>1,2"
    }
  },
  {
    "id": "L100",
    "chapter": 5,
    "title": "百關大滿貫",
    "rows": 10,
    "columns": 10,
    "difficulty": 5,
    "difficultyScore": 520063,
    "seed": 599700,
    "generatorVersion": 2,
    "terrain": [
      [
        "road",
        "barrier",
        "road",
        "road",
        "plaza",
        "road",
        "barrier",
        "road",
        "road",
        "road"
      ],
      [
        "road",
        "plaza",
        "grass",
        "road",
        "grass",
        "road",
        "grass",
        "road",
        "grass",
        "road"
      ],
      [
        "grass",
        "road",
        "grass",
        "road",
        "grass",
        "road",
        "grass",
        "plaza",
        "tree",
        "road"
      ],
      [
        "road",
        "road",
        "grass",
        "road",
        "crate",
        "road",
        "grass",
        "road",
        "grass",
        "plaza"
      ],
      [
        "grass",
        "road",
        "barrier",
        "road",
        "grass",
        "road",
        "barrier",
        "road",
        "water",
        "road"
      ],
      [
        "road",
        "road",
        "grass",
        "road",
        "crate",
        "plaza",
        "grass",
        "road",
        "crate",
        "road"
      ],
      [
        "grass",
        "road",
        "tree",
        "plaza",
        "crate",
        "road",
        "crate",
        "road",
        "tree",
        "road"
      ],
      [
        "road",
        "road",
        "barrier",
        "road",
        "crate",
        "road",
        "tree",
        "road",
        "road",
        "road"
      ],
      [
        "fence",
        "plaza",
        "grass",
        "road",
        "crate",
        "road",
        "grass",
        "plaza",
        "road",
        "road"
      ],
      [
        "road",
        "road",
        "road",
        "road",
        "grass",
        "road",
        "road",
        "road",
        "water",
        "road"
      ]
    ],
    "start": [
      9,
      9
    ],
    "stops": [
      {
        "id": "stop-1",
        "order": 0,
        "item": "milk",
        "label": "鮮奶",
        "position": [
          3,
          9
        ],
        "houseStyle": "blue"
      },
      {
        "id": "stop-2",
        "order": 1,
        "item": "cat-food",
        "label": "貓罐頭",
        "position": [
          2,
          7
        ],
        "houseStyle": "yellow"
      },
      {
        "id": "stop-3",
        "order": 2,
        "item": "cat-grass",
        "label": "貓草",
        "position": [
          8,
          7
        ],
        "houseStyle": "green"
      },
      {
        "id": "stop-4",
        "order": 3,
        "item": "paw-cookie",
        "label": "貓掌餅乾",
        "position": [
          5,
          5
        ],
        "houseStyle": "pink"
      },
      {
        "id": "stop-5",
        "order": 4,
        "item": "parcel",
        "label": "包裹",
        "position": [
          0,
          4
        ],
        "houseStyle": "blue"
      },
      {
        "id": "stop-6",
        "order": 5,
        "item": "mouse",
        "label": "玩具老鼠",
        "position": [
          6,
          3
        ],
        "houseStyle": "yellow"
      },
      {
        "id": "stop-7",
        "order": 6,
        "item": "flowers",
        "label": "花束",
        "position": [
          8,
          1
        ],
        "houseStyle": "green"
      },
      {
        "id": "stop-8",
        "order": 7,
        "item": "dried-fish",
        "label": "魚乾",
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
          7,
          7
        ],
        "to": [
          7,
          8
        ]
      },
      {
        "from": [
          8,
          7
        ],
        "to": [
          8,
          8
        ]
      },
      {
        "from": [
          8,
          9
        ],
        "to": [
          7,
          9
        ]
      },
      {
        "from": [
          3,
          7
        ],
        "to": [
          4,
          7
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
      },
      {
        "from": [
          2,
          5
        ],
        "to": [
          1,
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
          1,
          3
        ],
        "to": [
          2,
          3
        ]
      },
      {
        "from": [
          4,
          3
        ],
        "to": [
          5,
          3
        ]
      },
      {
        "from": [
          7,
          3
        ],
        "to": [
          8,
          3
        ]
      },
      {
        "from": [
          8,
          3
        ],
        "to": [
          9,
          3
        ]
      },
      {
        "from": [
          8,
          1
        ],
        "to": [
          7,
          1
        ]
      }
    ],
    "solutionPath": [
      [
        9,
        9
      ],
      [
        8,
        9
      ],
      [
        7,
        9
      ],
      [
        6,
        9
      ],
      [
        5,
        9
      ],
      [
        4,
        9
      ],
      [
        3,
        9
      ],
      [
        2,
        9
      ],
      [
        1,
        9
      ],
      [
        0,
        9
      ],
      [
        0,
        8
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
        8,
        7
      ],
      [
        9,
        7
      ],
      [
        9,
        6
      ],
      [
        9,
        5
      ],
      [
        8,
        5
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
        8,
        3
      ],
      [
        9,
        3
      ],
      [
        9,
        2
      ],
      [
        9,
        1
      ],
      [
        8,
        1
      ],
      [
        7,
        1
      ],
      [
        6,
        1
      ],
      [
        5,
        1
      ],
      [
        4,
        1
      ],
      [
        3,
        1
      ],
      [
        2,
        1
      ],
      [
        1,
        1
      ]
    ],
    "optimalSteps": 52,
    "optimalSolutionCount": 1,
    "fuelLimit": 55,
    "metrics": {
      "passableCellCount": 62,
      "stopCount": 8,
      "obstacleCount": 38,
      "oneWayEdgeCount": 12,
      "branchCellCount": 7,
      "detourLoopCount": 1,
      "bridgeCount": 0,
      "solverNodes": 62,
      "solverBacktracks": 9,
      "solverMaxDepth": 52,
      "canonicalSignature": "10x10;road,barrier,road,road,plaza,road,barrier,road,road,road/road,plaza,grass,road,grass,road,grass,road,grass,road/grass,road,grass,road,grass,road,grass,plaza,tree,road/road,road,grass,road,crate,road,grass,road,grass,plaza/grass,road,barrier,road,grass,road,barrier,road,water,road/road,road,grass,road,crate,plaza,grass,road,crate,road/grass,road,tree,plaza,crate,road,crate,road,tree,road/road,road,barrier,road,crate,road,tree,road,road,road/fence,plaza,grass,road,crate,road,grass,plaza,road,road/road,road,road,road,grass,road,road,road,water,road;S:9,9;P:0@3,9|1@2,7|2@8,7|3@5,5|4@0,4|5@6,3|6@8,1|7@1,1;O:1,3>2,3|1,5>0,5|2,5>1,5|3,7>4,7|4,3>5,3|4,7>5,7|7,3>8,3|7,7>7,8|8,1>7,1|8,3>9,3|8,7>8,8|8,9>7,9;R:9,9>8,9>7,9>6,9>5,9>4,9>3,9>2,9>1,9>0,9>0,8>0,7>1,7>2,7>3,7>4,7>5,7>6,7>7,7>8,7>9,7>9,6>9,5>8,5>7,5>6,5>5,5>4,5>3,5>2,5>1,5>0,5>0,4>0,3>1,3>2,3>3,3>4,3>5,3>6,3>7,3>8,3>9,3>9,2>9,1>8,1>7,1>6,1>5,1>4,1>3,1>2,1>1,1"
    }
  }
];
});
