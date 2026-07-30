(function (root, factory) {
  const levels = factory();
  if (typeof module === 'object' && module.exports) module.exports = levels;
  else root.CAT_COURIER_LEVELS_061_080 = levels;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  return [
  {
    "id": "L061",
    "chapter": 4,
    "title": "城區鮮奶",
    "rows": 9,
    "columns": 9,
    "difficulty": 4,
    "difficultyScore": 411360,
    "seed": 460817,
    "generatorVersion": 2,
    "terrain": [
      [
        "grass",
        "water",
        "plaza",
        "water",
        "water",
        "tree",
        "water",
        "tree",
        "tree"
      ],
      [
        "barrier",
        "fence",
        "road",
        "road",
        "fence",
        "grass",
        "tree",
        "tree",
        "water"
      ],
      [
        "plaza",
        "road",
        "road",
        "water",
        "grass",
        "crate",
        "fence",
        "grass",
        "water"
      ],
      [
        "road",
        "crate",
        "grass",
        "road",
        "grass",
        "fence",
        "road",
        "grass",
        "grass"
      ],
      [
        "road",
        "road",
        "bridge",
        "road",
        "plaza",
        "road",
        "road",
        "road",
        "road"
      ],
      [
        "water",
        "tree",
        "grass",
        "water",
        "grass",
        "grass",
        "grass",
        "tree",
        "road"
      ],
      [
        "road",
        "road",
        "plaza",
        "bridge",
        "road",
        "road",
        "road",
        "road",
        "plaza"
      ],
      [
        "road",
        "tree",
        "barrier",
        "grass",
        "grass",
        "tree",
        "fence",
        "road",
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
        "road",
        "road"
      ]
    ],
    "start": [
      8,
      8
    ],
    "stops": [
      {
        "id": "stop-1",
        "order": 0,
        "item": "dried-fish",
        "label": "魚乾",
        "position": [
          8,
          2
        ],
        "houseStyle": "yellow"
      },
      {
        "id": "stop-2",
        "order": 1,
        "item": "yarn",
        "label": "毛線球",
        "position": [
          6,
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
          6,
          8
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
          2,
          0
        ],
        "houseStyle": "yellow"
      }
    ],
    "oneWayEdges": [
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
          6,
          8
        ],
        "to": [
          7,
          8
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
          4,
          0
        ],
        "to": [
          3,
          0
        ]
      }
    ],
    "solutionPath": [
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
      ],
      [
        8,
        5
      ],
      [
        8,
        4
      ],
      [
        8,
        3
      ],
      [
        8,
        2
      ],
      [
        8,
        1
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
        5,
        8
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
        3,
        0
      ],
      [
        2,
        0
      ]
    ],
    "optimalSteps": 30,
    "optimalSolutionCount": 1,
    "fuelLimit": 34,
    "metrics": {
      "passableCellCount": 40,
      "stopCount": 5,
      "obstacleCount": 41,
      "oneWayEdgeCount": 4,
      "branchCellCount": 7,
      "detourLoopCount": 1,
      "bridgeCount": 2,
      "solverNodes": 37,
      "solverBacktracks": 6,
      "solverMaxDepth": 30,
      "canonicalSignature": "9x9;grass,barrier,plaza,road,road,water,road,road,road/water,fence,road,crate,road,tree,road,tree,road/plaza,road,road,grass,bridge,grass,plaza,barrier,plaza/water,road,water,road,road,water,bridge,grass,road/water,fence,grass,grass,plaza,grass,road,grass,road/tree,grass,crate,fence,road,grass,road,tree,road/water,tree,fence,road,road,grass,road,fence,road/tree,tree,grass,grass,road,tree,road,road,road/tree,water,water,grass,road,road,plaza,road,road;S:8,8;P:0@2,8|1@2,6|2@8,6|3@4,4|4@0,2;O:0,4>0,3|4,4>3,4|7,6>7,7|8,6>8,7;R:8,8>7,8>6,8>5,8>4,8>3,8>2,8>1,8>0,8>0,7>0,6>1,6>2,6>3,6>4,6>5,6>6,6>7,6>8,6>8,5>8,4>7,4>6,4>5,4>4,4>3,4>2,4>1,4>0,4>0,3>0,2"
    }
  },
  {
    "id": "L062",
    "chapter": 4,
    "title": "繁忙魚乾",
    "rows": 9,
    "columns": 9,
    "difficulty": 4,
    "difficultyScore": 412110,
    "seed": 461814,
    "generatorVersion": 2,
    "terrain": [
      [
        "grass",
        "fence",
        "road",
        "road",
        "grass",
        "fence",
        "road",
        "road",
        "crate"
      ],
      [
        "tree",
        "barrier",
        "road",
        "road",
        "crate",
        "tree",
        "road",
        "plaza",
        "grass"
      ],
      [
        "fence",
        "barrier",
        "road",
        "road",
        "tree",
        "tree",
        "grass",
        "plaza",
        "road"
      ],
      [
        "grass",
        "road",
        "tree",
        "road",
        "barrier",
        "grass",
        "road",
        "crate",
        "road"
      ],
      [
        "road",
        "road",
        "road",
        "road",
        "plaza",
        "road",
        "bridge",
        "road",
        "road"
      ],
      [
        "road",
        "grass",
        "fence",
        "grass",
        "grass",
        "grass",
        "grass",
        "fence",
        "grass"
      ],
      [
        "plaza",
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
        "fence",
        "grass",
        "grass",
        "fence",
        "grass",
        "crate",
        "grass",
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
        "road",
        "road"
      ]
    ],
    "start": [
      8,
      0
    ],
    "stops": [
      {
        "id": "stop-1",
        "order": 0,
        "item": "parcel",
        "label": "包裹",
        "position": [
          8,
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
          6,
          6
        ],
        "houseStyle": "pink"
      },
      {
        "id": "stop-3",
        "order": 2,
        "item": "flowers",
        "label": "花束",
        "position": [
          6,
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
          4
        ],
        "houseStyle": "yellow"
      },
      {
        "id": "stop-5",
        "order": 4,
        "item": "yarn",
        "label": "毛線球",
        "position": [
          2,
          7
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
          6,
          4
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
      },
      {
        "from": [
          6,
          0
        ],
        "to": [
          5,
          0
        ]
      },
      {
        "from": [
          3,
          8
        ],
        "to": [
          2,
          8
        ]
      }
    ],
    "solutionPath": [
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
      ],
      [
        8,
        6
      ],
      [
        8,
        7
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
        5,
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
        3,
        8
      ],
      [
        2,
        8
      ],
      [
        2,
        7
      ]
    ],
    "optimalSteps": 31,
    "optimalSolutionCount": 1,
    "fuelLimit": 34,
    "metrics": {
      "passableCellCount": 45,
      "stopCount": 5,
      "obstacleCount": 36,
      "oneWayEdgeCount": 4,
      "branchCellCount": 7,
      "detourLoopCount": 3,
      "bridgeCount": 2,
      "solverNodes": 35,
      "solverBacktracks": 3,
      "solverMaxDepth": 31,
      "canonicalSignature": "9x9;crate,grass,road,road,road,grass,road,road,road/road,plaza,plaza,crate,road,fence,road,fence,road/road,road,grass,road,bridge,grass,plaza,grass,plaza/fence,tree,tree,grass,road,grass,bridge,crate,road/grass,crate,tree,barrier,plaza,grass,road,grass,road/road,road,road,road,road,grass,road,fence,road/road,road,road,tree,road,fence,road,grass,road/fence,barrier,barrier,road,road,grass,road,grass,road/grass,tree,fence,grass,road,road,plaza,fence,road;S:8,8;P:0@2,8|1@2,6|2@8,6|3@4,4|4@1,2;O:0,3>0,2|3,6>4,6|5,6>6,6|8,6>8,5;R:8,8>7,8>6,8>5,8>4,8>3,8>2,8>1,8>0,8>0,7>0,6>1,6>2,6>3,6>4,6>5,6>6,6>7,6>8,6>8,5>8,4>7,4>6,4>5,4>4,4>3,4>2,4>1,4>0,4>0,3>0,2>1,2"
    }
  },
  {
    "id": "L063",
    "chapter": 4,
    "title": "急件包裹",
    "rows": 9,
    "columns": 9,
    "difficulty": 4,
    "difficultyScore": 412324,
    "seed": 462811,
    "generatorVersion": 2,
    "terrain": [
      [
        "barrier",
        "fence",
        "road",
        "road",
        "road",
        "fence",
        "road",
        "road",
        "road"
      ],
      [
        "grass",
        "barrier",
        "road",
        "grass",
        "road",
        "fence",
        "road",
        "crate",
        "road"
      ],
      [
        "grass",
        "road",
        "plaza",
        "barrier",
        "bridge",
        "barrier",
        "plaza",
        "fence",
        "plaza"
      ],
      [
        "grass",
        "water",
        "road",
        "crate",
        "plaza",
        "grass",
        "bridge",
        "grass",
        "road"
      ],
      [
        "crate",
        "fence",
        "grass",
        "road",
        "road",
        "water",
        "road",
        "barrier",
        "road"
      ],
      [
        "road",
        "road",
        "grass",
        "fence",
        "road",
        "fence",
        "road",
        "crate",
        "road"
      ],
      [
        "road",
        "road",
        "plaza",
        "road",
        "road",
        "grass",
        "road",
        "water",
        "road"
      ],
      [
        "road",
        "road",
        "road",
        "fence",
        "road",
        "tree",
        "road",
        "grass",
        "road"
      ],
      [
        "water",
        "tree",
        "water",
        "plaza",
        "road",
        "plaza",
        "road",
        "crate",
        "road"
      ]
    ],
    "start": [
      8,
      8
    ],
    "stops": [
      {
        "id": "stop-1",
        "order": 0,
        "item": "cat-food",
        "label": "貓罐頭",
        "position": [
          2,
          8
        ],
        "houseStyle": "pink"
      },
      {
        "id": "stop-2",
        "order": 1,
        "item": "cat-grass",
        "label": "貓草",
        "position": [
          2,
          6
        ],
        "houseStyle": "blue"
      },
      {
        "id": "stop-3",
        "order": 2,
        "item": "paw-cookie",
        "label": "貓掌餅乾",
        "position": [
          8,
          5
        ],
        "houseStyle": "yellow"
      },
      {
        "id": "stop-4",
        "order": 3,
        "item": "parcel",
        "label": "包裹",
        "position": [
          3,
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
          2,
          2
        ],
        "houseStyle": "pink"
      }
    ],
    "oneWayEdges": [
      {
        "from": [
          5,
          8
        ],
        "to": [
          4,
          8
        ]
      },
      {
        "from": [
          0,
          8
        ],
        "to": [
          0,
          7
        ]
      },
      {
        "from": [
          3,
          6
        ],
        "to": [
          4,
          6
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
      }
    ],
    "solutionPath": [
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
      ],
      [
        2,
        8
      ],
      [
        1,
        8
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
        8,
        5
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
        3
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
      ]
    ],
    "optimalSteps": 32,
    "optimalSolutionCount": 1,
    "fuelLimit": 34,
    "metrics": {
      "passableCellCount": 46,
      "stopCount": 5,
      "obstacleCount": 35,
      "oneWayEdgeCount": 4,
      "branchCellCount": 7,
      "detourLoopCount": 3,
      "bridgeCount": 2,
      "solverNodes": 36,
      "solverBacktracks": 3,
      "solverMaxDepth": 32,
      "canonicalSignature": "9x9;barrier,fence,road,road,road,fence,road,road,road/grass,barrier,road,grass,road,fence,road,crate,road/grass,road,plaza,barrier,bridge,barrier,plaza,fence,plaza/grass,water,road,crate,plaza,grass,bridge,grass,road/crate,fence,grass,road,road,water,road,barrier,road/road,road,grass,fence,road,fence,road,crate,road/road,road,plaza,road,road,grass,road,water,road/road,road,road,fence,road,tree,road,grass,road/water,tree,water,plaza,road,plaza,road,crate,road;S:8,8;P:0@2,8|1@2,6|2@8,5|3@3,4|4@2,2;O:0,8>0,7|2,4>1,4|3,6>4,6|5,8>4,8;R:8,8>7,8>6,8>5,8>4,8>3,8>2,8>1,8>0,8>0,7>0,6>1,6>2,6>3,6>4,6>5,6>6,6>7,6>8,6>8,5>8,4>7,4>6,4>5,4>4,4>3,4>2,4>1,4>0,4>0,3>0,2>1,2>2,2"
    }
  },
  {
    "id": "L064",
    "chapter": 4,
    "title": "花束快線",
    "rows": 9,
    "columns": 9,
    "difficulty": 4,
    "difficultyScore": 412392,
    "seed": 463808,
    "generatorVersion": 2,
    "terrain": [
      [
        "road",
        "road",
        "road",
        "tree",
        "road",
        "road",
        "road",
        "crate",
        "fence"
      ],
      [
        "road",
        "water",
        "road",
        "grass",
        "road",
        "grass",
        "road",
        "water",
        "plaza"
      ],
      [
        "plaza",
        "road",
        "road",
        "fence",
        "plaza",
        "grass",
        "road",
        "road",
        "road"
      ],
      [
        "road",
        "road",
        "plaza",
        "grass",
        "road",
        "crate",
        "plaza",
        "grass",
        "tree"
      ],
      [
        "road",
        "grass",
        "road",
        "fence",
        "road",
        "water",
        "road",
        "grass",
        "barrier"
      ],
      [
        "road",
        "barrier",
        "road",
        "fence",
        "road",
        "water",
        "fence",
        "tree",
        "crate"
      ],
      [
        "road",
        "grass",
        "road",
        "grass",
        "road",
        "road",
        "road",
        "grass",
        "tree"
      ],
      [
        "road",
        "tree",
        "road",
        "tree",
        "road",
        "grass",
        "grass",
        "grass",
        "tree"
      ],
      [
        "road",
        "water",
        "road",
        "plaza",
        "road",
        "road",
        "road",
        "water",
        "barrier"
      ]
    ],
    "start": [
      8,
      0
    ],
    "stops": [
      {
        "id": "stop-1",
        "order": 0,
        "item": "yarn",
        "label": "毛線球",
        "position": [
          2,
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
          8,
          3
        ],
        "houseStyle": "green"
      },
      {
        "id": "stop-4",
        "order": 3,
        "item": "cat-food",
        "label": "貓罐頭",
        "position": [
          2,
          4
        ],
        "houseStyle": "pink"
      },
      {
        "id": "stop-5",
        "order": 4,
        "item": "cat-grass",
        "label": "貓草",
        "position": [
          3,
          6
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
          1,
          4
        ],
        "to": [
          0,
          4
        ]
      },
      {
        "from": [
          0,
          6
        ],
        "to": [
          1,
          6
        ]
      }
    ],
    "solutionPath": [
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
        8,
        3
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
      ]
    ],
    "optimalSteps": 33,
    "optimalSolutionCount": 1,
    "fuelLimit": 37,
    "metrics": {
      "passableCellCount": 44,
      "stopCount": 5,
      "obstacleCount": 37,
      "oneWayEdgeCount": 5,
      "branchCellCount": 8,
      "detourLoopCount": 1,
      "bridgeCount": 0,
      "solverNodes": 41,
      "solverBacktracks": 7,
      "solverMaxDepth": 33,
      "canonicalSignature": "9x9;barrier,tree,tree,crate,barrier,tree,road,plaza,fence/water,grass,grass,tree,grass,grass,road,water,crate/road,grass,road,fence,road,plaza,road,road,road/road,grass,road,water,water,crate,grass,grass,road/road,road,road,road,road,road,plaza,road,road/plaza,tree,grass,fence,fence,grass,fence,grass,tree/road,road,road,road,road,plaza,road,road,road/water,tree,grass,barrier,grass,road,road,water,road/road,road,road,road,road,road,plaza,road,road;S:8,0;P:0@8,6|1@6,5|2@5,0|3@4,6|4@2,5;O:2,8>2,7|4,7>4,8|6,5>7,5|6,6>7,6|8,0>8,1;R:8,0>8,1>8,2>8,3>8,4>8,5>8,6>8,7>8,8>7,8>6,8>6,7>6,6>6,5>6,4>6,3>6,2>6,1>6,0>5,0>4,0>4,1>4,2>4,3>4,4>4,5>4,6>4,7>4,8>3,8>2,8>2,7>2,6>2,5"
    }
  },
  {
    "id": "L065",
    "chapter": 4,
    "title": "毛線交會",
    "rows": 9,
    "columns": 9,
    "difficulty": 4,
    "difficultyScore": 413229,
    "seed": 464805,
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
        "road"
      ],
      [
        "water",
        "water",
        "grass",
        "crate",
        "fence",
        "tree",
        "water",
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
        "road"
      ],
      [
        "road",
        "grass",
        "tree",
        "grass",
        "crate",
        "water",
        "water",
        "grass",
        "barrier"
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
        "road"
      ],
      [
        "grass",
        "fence",
        "road",
        "grass",
        "water",
        "crate",
        "crate",
        "crate",
        "road"
      ],
      [
        "grass",
        "fence",
        "barrier",
        "road",
        "plaza",
        "road",
        "road",
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
        "grass",
        "grass",
        "road"
      ],
      [
        "road",
        "road",
        "road",
        "road",
        "barrier",
        "plaza",
        "barrier",
        "barrier",
        "plaza"
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
          6
        ],
        "houseStyle": "yellow"
      },
      {
        "id": "stop-2",
        "order": 1,
        "item": "flowers",
        "label": "花束",
        "position": [
          2,
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
          4,
          0
        ],
        "houseStyle": "pink"
      },
      {
        "id": "stop-4",
        "order": 3,
        "item": "yarn",
        "label": "毛線球",
        "position": [
          4,
          7
        ],
        "houseStyle": "blue"
      },
      {
        "id": "stop-5",
        "order": 4,
        "item": "letter",
        "label": "信件",
        "position": [
          6,
          4
        ],
        "houseStyle": "yellow"
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
          4,
          3
        ],
        "to": [
          4,
          4
        ]
      },
      {
        "from": [
          4,
          8
        ],
        "to": [
          5,
          8
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
        1,
        8
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
        5,
        8
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
      ]
    ],
    "optimalSteps": 34,
    "optimalSolutionCount": 1,
    "fuelLimit": 37,
    "metrics": {
      "passableCellCount": 49,
      "stopCount": 5,
      "obstacleCount": 32,
      "oneWayEdgeCount": 5,
      "branchCellCount": 8,
      "detourLoopCount": 3,
      "bridgeCount": 1,
      "solverNodes": 38,
      "solverBacktracks": 3,
      "solverMaxDepth": 34,
      "canonicalSignature": "9x9;plaza,barrier,barrier,plaza,barrier,road,road,road,road/road,grass,grass,road,grass,road,road,road,road/road,road,road,road,plaza,road,barrier,fence,grass/road,crate,crate,crate,water,grass,road,fence,grass/road,plaza,bridge,road,road,road,road,road,plaza/barrier,grass,water,water,crate,grass,tree,grass,road/road,road,road,plaza,road,road,road,road,road/road,grass,water,tree,fence,crate,grass,water,water/road,road,plaza,road,road,road,road,road,road;S:8,8;P:0@8,2|1@6,3|2@4,8|3@4,1|4@2,4;O:4,0>3,0|4,5>4,4|6,1>6,2|8,4>8,3|8,6>8,5;R:8,8>8,7>8,6>8,5>8,4>8,3>8,2>8,1>8,0>7,0>6,0>6,1>6,2>6,3>6,4>6,5>6,6>6,7>6,8>5,8>4,8>4,7>4,6>4,5>4,4>4,3>4,2>4,1>4,0>3,0>2,0>2,1>2,2>2,3>2,4"
    }
  },
  {
    "id": "L066",
    "chapter": 4,
    "title": "罐頭轉運",
    "rows": 9,
    "columns": 9,
    "difficulty": 4,
    "difficultyScore": 412703,
    "seed": 465802,
    "generatorVersion": 2,
    "terrain": [
      [
        "road",
        "crate",
        "road",
        "road",
        "plaza",
        "barrier",
        "water",
        "fence",
        "tree"
      ],
      [
        "road",
        "grass",
        "road",
        "tree",
        "road",
        "road",
        "road",
        "barrier",
        "grass"
      ],
      [
        "road",
        "crate",
        "road",
        "grass",
        "road",
        "grass",
        "barrier",
        "fence",
        "grass"
      ],
      [
        "road",
        "road",
        "road",
        "barrier",
        "road",
        "crate",
        "road",
        "tree",
        "grass"
      ],
      [
        "road",
        "road",
        "road",
        "grass",
        "road",
        "crate",
        "plaza",
        "road",
        "fence"
      ],
      [
        "road",
        "tree",
        "plaza",
        "grass",
        "road",
        "barrier",
        "road",
        "fence",
        "fence"
      ],
      [
        "plaza",
        "tree",
        "road",
        "crate",
        "bridge",
        "barrier",
        "road",
        "road",
        "road"
      ],
      [
        "road",
        "grass",
        "road",
        "barrier",
        "plaza",
        "grass",
        "road",
        "fence",
        "road"
      ],
      [
        "road",
        "road",
        "road",
        "crate",
        "road",
        "road",
        "road",
        "road",
        "crate"
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
          5,
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
        "houseStyle": "green"
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
        8,
        1
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
        8,
        5
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
      ]
    ],
    "optimalSteps": 34,
    "optimalSolutionCount": 1,
    "fuelLimit": 36,
    "metrics": {
      "passableCellCount": 45,
      "stopCount": 5,
      "obstacleCount": 36,
      "oneWayEdgeCount": 5,
      "branchCellCount": 8,
      "detourLoopCount": 1,
      "bridgeCount": 1,
      "solverNodes": 42,
      "solverBacktracks": 7,
      "solverMaxDepth": 34,
      "canonicalSignature": "9x9;crate,road,road,fence,fence,grass,grass,grass,tree/road,fence,road,fence,road,tree,fence,barrier,fence/road,road,road,road,plaza,road,barrier,road,water/road,grass,barrier,barrier,crate,crate,grass,road,barrier/road,plaza,bridge,road,road,road,road,road,plaza/crate,barrier,crate,grass,grass,barrier,grass,tree,road/road,road,road,plaza,road,road,road,road,road/road,grass,tree,tree,road,road,crate,grass,crate/road,road,plaza,road,road,road,road,road,road;S:8,8;P:0@8,2|1@6,3|2@4,8|3@4,1|4@2,4;O:2,2>2,3|6,4>7,4|6,5>7,5|6,8>5,8|8,4>8,3;R:8,8>8,7>8,6>8,5>8,4>8,3>8,2>8,1>8,0>7,0>6,0>6,1>6,2>6,3>6,4>6,5>6,6>6,7>6,8>5,8>4,8>4,7>4,6>4,5>4,4>4,3>4,2>4,1>4,0>3,0>2,0>2,1>2,2>2,3>2,4"
    }
  },
  {
    "id": "L067",
    "chapter": 4,
    "title": "信件環城",
    "rows": 9,
    "columns": 9,
    "difficulty": 4,
    "difficultyScore": 413550,
    "seed": 466799,
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
        "road",
        "road"
      ],
      [
        "road",
        "barrier",
        "crate",
        "crate",
        "fence",
        "grass",
        "crate",
        "crate",
        "water"
      ],
      [
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
        "fence",
        "water",
        "water",
        "barrier",
        "crate",
        "tree",
        "grass",
        "water",
        "road"
      ],
      [
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
        "barrier",
        "fence",
        "tree",
        "grass",
        "barrier",
        "fence",
        "tree",
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
        "road",
        "water"
      ],
      [
        "road",
        "barrier",
        "road",
        "water",
        "road",
        "crate",
        "road",
        "road",
        "road"
      ],
      [
        "road",
        "grass",
        "road",
        "grass",
        "grass",
        "barrier",
        "road",
        "road",
        "road"
      ]
    ],
    "start": [
      0,
      8
    ],
    "stops": [
      {
        "id": "stop-1",
        "order": 0,
        "item": "letter",
        "label": "信件",
        "position": [
          0,
          1
        ],
        "houseStyle": "pink"
      },
      {
        "id": "stop-2",
        "order": 1,
        "item": "milk",
        "label": "鮮奶",
        "position": [
          2,
          4
        ],
        "houseStyle": "blue"
      },
      {
        "id": "stop-3",
        "order": 2,
        "item": "cat-food",
        "label": "貓罐頭",
        "position": [
          4,
          7
        ],
        "houseStyle": "yellow"
      },
      {
        "id": "stop-4",
        "order": 3,
        "item": "cat-grass",
        "label": "貓草",
        "position": [
          4,
          0
        ],
        "houseStyle": "green"
      },
      {
        "id": "stop-5",
        "order": 4,
        "item": "paw-cookie",
        "label": "貓掌餅乾",
        "position": [
          6,
          5
        ],
        "houseStyle": "pink"
      }
    ],
    "oneWayEdges": [
      {
        "from": [
          0,
          8
        ],
        "to": [
          0,
          7
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
          6
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
          2,
          8
        ]
      },
      {
        "from": [
          6,
          0
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
        3,
        8
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
      ]
    ],
    "optimalSteps": 35,
    "optimalSolutionCount": 1,
    "fuelLimit": 38,
    "metrics": {
      "passableCellCount": 50,
      "stopCount": 5,
      "obstacleCount": 31,
      "oneWayEdgeCount": 5,
      "branchCellCount": 8,
      "detourLoopCount": 3,
      "bridgeCount": 2,
      "solverNodes": 40,
      "solverBacktracks": 4,
      "solverMaxDepth": 35,
      "canonicalSignature": "9x9;road,grass,road,grass,grass,barrier,road,road,road/road,barrier,road,water,road,crate,road,road,road/road,road,road,road,road,plaza,plaza,road,water/road,barrier,fence,tree,grass,barrier,fence,tree,road/plaza,road,bridge,road,road,road,road,plaza,road/fence,water,water,barrier,crate,tree,grass,water,road/road,road,road,bridge,plaza,road,road,road,road/road,barrier,crate,crate,fence,grass,crate,crate,water/road,plaza,road,road,road,road,road,road,road;S:8,8;P:0@8,1|1@6,4|2@4,7|3@4,0|4@2,5;O:2,0>2,1|6,6>6,7|6,7>6,8|8,0>7,0|8,8>8,7;R:8,8>8,7>8,6>8,5>8,4>8,3>8,2>8,1>8,0>7,0>6,0>6,1>6,2>6,3>6,4>6,5>6,6>6,7>6,8>5,8>4,8>4,7>4,6>4,5>4,4>4,3>4,2>4,1>4,0>3,0>2,0>2,1>2,2>2,3>2,4>2,5"
    }
  },
  {
    "id": "L068",
    "chapter": 4,
    "title": "貓草支線",
    "rows": 9,
    "columns": 9,
    "difficulty": 4,
    "difficultyScore": 413228,
    "seed": 467796,
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
        "road",
        "road"
      ],
      [
        "road",
        "fence",
        "road",
        "road",
        "barrier",
        "grass",
        "grass",
        "tree",
        "crate"
      ],
      [
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
        "grass",
        "fence",
        "fence",
        "grass",
        "water",
        "barrier",
        "fence",
        "road"
      ],
      [
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
        "water",
        "crate",
        "grass",
        "fence",
        "tree",
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
        "road",
        "plaza",
        "grass",
        "road"
      ],
      [
        "tree",
        "road",
        "grass",
        "road",
        "grass",
        "water",
        "road",
        "water",
        "plaza"
      ],
      [
        "barrier",
        "grass",
        "crate",
        "fence",
        "grass",
        "tree",
        "road",
        "road",
        "fence"
      ]
    ],
    "start": [
      0,
      8
    ],
    "stops": [
      {
        "id": "stop-1",
        "order": 0,
        "item": "flowers",
        "label": "花束",
        "position": [
          0,
          1
        ],
        "houseStyle": "blue"
      },
      {
        "id": "stop-2",
        "order": 1,
        "item": "dried-fish",
        "label": "魚乾",
        "position": [
          2,
          4
        ],
        "houseStyle": "yellow"
      },
      {
        "id": "stop-3",
        "order": 2,
        "item": "yarn",
        "label": "毛線球",
        "position": [
          4,
          7
        ],
        "houseStyle": "green"
      },
      {
        "id": "stop-4",
        "order": 3,
        "item": "letter",
        "label": "信件",
        "position": [
          4,
          0
        ],
        "houseStyle": "pink"
      },
      {
        "id": "stop-5",
        "order": 4,
        "item": "milk",
        "label": "鮮奶",
        "position": [
          6,
          6
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
          1,
          2
        ]
      },
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
          0,
          3
        ],
        "to": [
          0,
          2
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
          1
        ],
        "to": [
          2,
          2
        ]
      }
    ],
    "solutionPath": [
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
        3,
        8
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
      ]
    ],
    "optimalSteps": 36,
    "optimalSolutionCount": 1,
    "fuelLimit": 39,
    "metrics": {
      "passableCellCount": 47,
      "stopCount": 5,
      "obstacleCount": 34,
      "oneWayEdgeCount": 5,
      "branchCellCount": 8,
      "detourLoopCount": 1,
      "bridgeCount": 2,
      "solverNodes": 44,
      "solverBacktracks": 7,
      "solverMaxDepth": 36,
      "canonicalSignature": "9x9;barrier,grass,crate,fence,grass,tree,road,road,fence/tree,road,grass,road,grass,water,road,water,plaza/road,road,road,road,road,road,plaza,grass,road/road,water,crate,grass,fence,tree,grass,grass,road/plaza,road,bridge,road,road,road,road,plaza,road/grass,grass,fence,fence,grass,water,barrier,fence,road/road,road,road,bridge,plaza,road,road,road,road/road,fence,road,road,barrier,grass,grass,tree,crate/road,plaza,road,road,road,road,road,road,road;S:8,8;P:0@8,1|1@6,4|2@4,7|3@4,0|4@2,6;O:6,1>6,2|6,2>7,2|6,3>7,3|8,0>7,0|8,3>8,2;R:8,8>8,7>8,6>8,5>8,4>8,3>8,2>8,1>8,0>7,0>6,0>6,1>6,2>6,3>6,4>6,5>6,6>6,7>6,8>5,8>4,8>4,7>4,6>4,5>4,4>4,3>4,2>4,1>4,0>3,0>2,0>2,1>2,2>2,3>2,4>2,5>2,6"
    }
  },
  {
    "id": "L069",
    "chapter": 4,
    "title": "餅乾捷徑",
    "rows": 9,
    "columns": 9,
    "difficulty": 4,
    "difficultyScore": 414026,
    "seed": 468793,
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
        "road",
        "road"
      ],
      [
        "road",
        "tree",
        "crate",
        "grass",
        "fence",
        "water",
        "grass",
        "road",
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
        "road",
        "road"
      ],
      [
        "grass",
        "barrier",
        "grass",
        "crate",
        "grass",
        "tree",
        "grass",
        "grass",
        "road"
      ],
      [
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
        "plaza",
        "fence",
        "water",
        "grass",
        "tree",
        "barrier",
        "tree",
        "grass",
        "road"
      ],
      [
        "road",
        "road",
        "road",
        "road",
        "road",
        "road",
        "road",
        "plaza",
        "water"
      ],
      [
        "road",
        "crate",
        "barrier",
        "road",
        "barrier",
        "grass",
        "road",
        "fence",
        "grass"
      ],
      [
        "grass",
        "road",
        "road",
        "road",
        "road",
        "grass",
        "plaza",
        "tree",
        "crate"
      ]
    ],
    "start": [
      0,
      8
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
          6
        ],
        "houseStyle": "pink"
      },
      {
        "id": "stop-4",
        "order": 3,
        "item": "flowers",
        "label": "花束",
        "position": [
          5,
          0
        ],
        "houseStyle": "blue"
      },
      {
        "id": "stop-5",
        "order": 4,
        "item": "dried-fish",
        "label": "魚乾",
        "position": [
          6,
          7
        ],
        "houseStyle": "yellow"
      }
    ],
    "oneWayEdges": [
      {
        "from": [
          2,
          7
        ],
        "to": [
          1,
          7
        ]
      },
      {
        "from": [
          2,
          8
        ],
        "to": [
          1,
          8
        ]
      },
      {
        "from": [
          0,
          1
        ],
        "to": [
          0,
          0
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
          2,
          7
        ],
        "to": [
          2,
          8
        ]
      },
      {
        "from": [
          6,
          0
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
        3,
        8
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
      ]
    ],
    "optimalSteps": 37,
    "optimalSolutionCount": 1,
    "fuelLimit": 40,
    "metrics": {
      "passableCellCount": 49,
      "stopCount": 5,
      "obstacleCount": 32,
      "oneWayEdgeCount": 6,
      "branchCellCount": 9,
      "detourLoopCount": 1,
      "bridgeCount": 2,
      "solverNodes": 46,
      "solverBacktracks": 8,
      "solverMaxDepth": 37,
      "canonicalSignature": "9x9;crate,grass,water,road,road,road,road,road,road/tree,fence,plaza,grass,road,grass,road,road,road/plaza,road,road,tree,plaza,grass,road,grass,road/grass,grass,road,barrier,road,tree,road,water,road/road,barrier,road,tree,road,grass,plaza,fence,road/road,road,road,grass,road,crate,bridge,grass,road/road,barrier,road,water,bridge,grass,road,crate,road/road,crate,road,fence,road,barrier,road,tree,plaza/grass,road,road,plaza,road,grass,road,road,road;S:0,8;P:0@7,8|1@4,6|2@2,4|3@8,3|4@1,2;O:0,6>0,7|1,6>0,6|1,6>1,7|4,6>3,6|7,8>8,8|8,2>7,2;R:0,8>1,8>2,8>3,8>4,8>5,8>6,8>7,8>8,8>8,7>8,6>7,6>6,6>5,6>4,6>3,6>2,6>1,6>0,6>0,5>0,4>1,4>2,4>3,4>4,4>5,4>6,4>7,4>8,4>8,3>8,2>7,2>6,2>5,2>4,2>3,2>2,2>1,2"
    }
  },
  {
    "id": "L070",
    "chapter": 4,
    "title": "玩鼠專車",
    "rows": 9,
    "columns": 9,
    "difficulty": 4,
    "difficultyScore": 414230,
    "seed": 469790,
    "generatorVersion": 2,
    "terrain": [
      [
        "road",
        "water",
        "road",
        "road",
        "road",
        "fence",
        "plaza",
        "road",
        "road"
      ],
      [
        "road",
        "grass",
        "road",
        "water",
        "road",
        "road",
        "road",
        "grass",
        "road"
      ],
      [
        "road",
        "water",
        "road",
        "barrier",
        "plaza",
        "road",
        "road",
        "road",
        "tree"
      ],
      [
        "road",
        "tree",
        "plaza",
        "grass",
        "road",
        "grass",
        "road",
        "grass",
        "fence"
      ],
      [
        "road",
        "barrier",
        "road",
        "grass",
        "road",
        "water",
        "road",
        "water",
        "grass"
      ],
      [
        "road",
        "grass",
        "bridge",
        "grass",
        "road",
        "crate",
        "road",
        "road",
        "barrier"
      ],
      [
        "road",
        "grass",
        "road",
        "tree",
        "bridge",
        "grass",
        "road",
        "barrier",
        "road"
      ],
      [
        "plaza",
        "water",
        "road",
        "water",
        "road",
        "barrier",
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
        "plaza",
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
          3,
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
          8,
          6
        ],
        "houseStyle": "yellow"
      },
      {
        "id": "stop-5",
        "order": 4,
        "item": "parcel",
        "label": "包裹",
        "position": [
          0,
          6
        ],
        "houseStyle": "green"
      }
    ],
    "oneWayEdges": [
      {
        "from": [
          1,
          6
        ],
        "to": [
          1,
          5
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
        8,
        5
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
      ]
    ],
    "optimalSteps": 38,
    "optimalSolutionCount": 1,
    "fuelLimit": 43,
    "metrics": {
      "passableCellCount": 50,
      "stopCount": 5,
      "obstacleCount": 31,
      "oneWayEdgeCount": 6,
      "branchCellCount": 9,
      "detourLoopCount": 1,
      "bridgeCount": 2,
      "solverNodes": 46,
      "solverBacktracks": 7,
      "solverMaxDepth": 38,
      "canonicalSignature": "9x9;road,grass,plaza,road,road,grass,road,road,road/road,road,road,barrier,road,water,road,water,plaza/road,barrier,road,grass,bridge,tree,road,grass,road/barrier,road,road,crate,road,grass,bridge,grass,road/grass,water,road,water,road,grass,road,barrier,road/fence,grass,road,grass,road,grass,plaza,tree,road/tree,road,road,road,plaza,barrier,road,water,road/road,grass,road,road,road,water,road,grass,road/road,road,plaza,fence,road,road,road,water,road;S:8,8;P:0@1,8|1@5,6|2@6,4|3@0,2|4@8,2;O:1,8>0,8|5,4>4,4|5,8>4,8|6,2>6,3|6,6>7,6|7,2>7,3;R:8,8>7,8>6,8>5,8>4,8>3,8>2,8>1,8>0,8>0,7>0,6>1,6>2,6>3,6>4,6>5,6>6,6>7,6>8,6>8,5>8,4>7,4>6,4>5,4>4,4>3,4>2,4>1,4>0,4>0,3>0,2>1,2>2,2>3,2>4,2>5,2>6,2>7,2>8,2"
    }
  },
  {
    "id": "L071",
    "chapter": 4,
    "title": "五站早班",
    "rows": 9,
    "columns": 9,
    "difficulty": 4,
    "difficultyScore": 414567,
    "seed": 470787,
    "generatorVersion": 2,
    "terrain": [
      [
        "plaza",
        "grass",
        "road",
        "road",
        "grass",
        "road",
        "grass",
        "road",
        "plaza"
      ],
      [
        "plaza",
        "grass",
        "grass",
        "road",
        "crate",
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
        "road",
        "road",
        "plaza",
        "road",
        "road"
      ],
      [
        "grass",
        "grass",
        "crate",
        "grass",
        "grass",
        "grass",
        "fence",
        "grass",
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
        "road",
        "road"
      ],
      [
        "plaza",
        "grass",
        "grass",
        "road",
        "road",
        "grass",
        "fence",
        "tree",
        "grass"
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
        "road"
      ],
      [
        "crate",
        "tree",
        "grass",
        "crate",
        "barrier",
        "grass",
        "fence",
        "grass",
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
        "road",
        "road"
      ]
    ],
    "start": [
      8,
      0
    ],
    "stops": [
      {
        "id": "stop-1",
        "order": 0,
        "item": "dried-fish",
        "label": "魚乾",
        "position": [
          8,
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
          6,
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
          5,
          0
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
          6
        ],
        "houseStyle": "green"
      },
      {
        "id": "stop-5",
        "order": 4,
        "item": "cat-food",
        "label": "貓罐頭",
        "position": [
          2,
          6
        ],
        "houseStyle": "pink"
      },
      {
        "id": "stop-6",
        "order": 5,
        "item": "cat-grass",
        "label": "貓草",
        "position": [
          1,
          0
        ],
        "houseStyle": "blue"
      }
    ],
    "oneWayEdges": [
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
          4,
          4
        ],
        "to": [
          5,
          4
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
          6
        ],
        "to": [
          4,
          7
        ]
      },
      {
        "from": [
          3,
          8
        ],
        "to": [
          2,
          8
        ]
      }
    ],
    "solutionPath": [
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
      ],
      [
        8,
        6
      ],
      [
        8,
        7
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
        5,
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
        3,
        8
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
        1,
        0
      ]
    ],
    "optimalSteps": 39,
    "optimalSolutionCount": 1,
    "fuelLimit": 43,
    "metrics": {
      "passableCellCount": 51,
      "stopCount": 6,
      "obstacleCount": 30,
      "oneWayEdgeCount": 6,
      "branchCellCount": 9,
      "detourLoopCount": 1,
      "bridgeCount": 0,
      "solverNodes": 47,
      "solverBacktracks": 7,
      "solverMaxDepth": 39,
      "canonicalSignature": "9x9;plaza,grass,road,road,grass,road,grass,road,plaza/plaza,grass,grass,road,crate,road,grass,road,grass/road,road,road,road,road,road,plaza,road,road/grass,grass,crate,grass,grass,grass,fence,grass,road/road,road,road,road,road,road,plaza,road,road/plaza,grass,grass,road,road,grass,fence,tree,grass/road,road,road,road,road,plaza,road,road,road/crate,tree,grass,crate,barrier,grass,fence,grass,road/road,road,road,road,road,road,plaza,road,road;S:8,0;P:0@8,6|1@6,5|2@5,0|3@4,6|4@2,6|5@1,0;O:3,8>2,8|4,0>4,1|4,3>5,3|4,4>5,4|4,6>4,7|6,8>6,7;R:8,0>8,1>8,2>8,3>8,4>8,5>8,6>8,7>8,8>7,8>6,8>6,7>6,6>6,5>6,4>6,3>6,2>6,1>6,0>5,0>4,0>4,1>4,2>4,3>4,4>4,5>4,6>4,7>4,8>3,8>2,8>2,7>2,6>2,5>2,4>2,3>2,2>2,1>2,0>1,0"
    }
  },
  {
    "id": "L072",
    "chapter": 4,
    "title": "障礙午班",
    "rows": 9,
    "columns": 9,
    "difficulty": 4,
    "difficultyScore": 414888,
    "seed": 471784,
    "generatorVersion": 2,
    "terrain": [
      [
        "road",
        "fence",
        "road",
        "road",
        "plaza",
        "crate",
        "road",
        "bridge",
        "plaza"
      ],
      [
        "road",
        "fence",
        "road",
        "fence",
        "road",
        "barrier",
        "road",
        "fence",
        "water"
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
        "road"
      ],
      [
        "road",
        "grass",
        "road",
        "tree",
        "road",
        "grass",
        "road",
        "barrier",
        "grass"
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
        "road"
      ],
      [
        "road",
        "grass",
        "plaza",
        "road",
        "road",
        "crate",
        "plaza",
        "fence",
        "road"
      ],
      [
        "plaza",
        "water",
        "road",
        "road",
        "plaza",
        "grass",
        "road",
        "road",
        "fence"
      ],
      [
        "road",
        "grass",
        "road",
        "tree",
        "road",
        "barrier",
        "road",
        "grass",
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
        "road",
        "plaza"
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
          6,
          0
        ],
        "houseStyle": "blue"
      },
      {
        "id": "stop-2",
        "order": 1,
        "item": "mouse",
        "label": "玩具老鼠",
        "position": [
          5,
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
          0,
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
          6,
          4
        ],
        "houseStyle": "pink"
      },
      {
        "id": "stop-5",
        "order": 4,
        "item": "yarn",
        "label": "毛線球",
        "position": [
          5,
          6
        ],
        "houseStyle": "blue"
      },
      {
        "id": "stop-6",
        "order": 5,
        "item": "letter",
        "label": "信件",
        "position": [
          0,
          8
        ],
        "houseStyle": "yellow"
      }
    ],
    "oneWayEdges": [
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
          6,
          4
        ],
        "to": [
          6,
          3
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
          1,
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
        8,
        1
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
        8,
        5
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
    "optimalSteps": 40,
    "optimalSolutionCount": 1,
    "fuelLimit": 43,
    "metrics": {
      "passableCellCount": 52,
      "stopCount": 6,
      "obstacleCount": 29,
      "oneWayEdgeCount": 6,
      "branchCellCount": 9,
      "detourLoopCount": 1,
      "bridgeCount": 1,
      "solverNodes": 49,
      "solverBacktracks": 8,
      "solverMaxDepth": 40,
      "canonicalSignature": "9x9;plaza,bridge,road,crate,plaza,road,road,fence,road/water,fence,road,barrier,road,fence,road,fence,road/road,road,road,grass,road,tree,road,water,road/grass,barrier,road,grass,road,tree,road,grass,road/road,road,road,grass,road,grass,road,crate,road/road,fence,plaza,crate,road,road,plaza,grass,road/fence,road,road,grass,plaza,road,road,water,plaza/road,grass,road,barrier,road,tree,road,grass,road/plaza,road,road,road,road,grass,road,road,road;S:0,8;P:0@6,8|1@5,6|2@0,4|3@6,4|4@5,2|5@0,0;O:0,8>1,8|1,4>2,4|5,4>5,5|5,6>4,6|6,4>6,5|7,8>8,8;R:0,8>1,8>2,8>3,8>4,8>5,8>6,8>7,8>8,8>8,7>8,6>7,6>6,6>5,6>4,6>3,6>2,6>1,6>0,6>0,5>0,4>1,4>2,4>3,4>4,4>5,4>6,4>7,4>8,4>8,3>8,2>7,2>6,2>5,2>4,2>3,2>2,2>1,2>0,2>0,1>0,0"
    }
  },
  {
    "id": "L073",
    "chapter": 4,
    "title": "單行晚班",
    "rows": 9,
    "columns": 9,
    "difficulty": 4,
    "difficultyScore": 415417,
    "seed": 472781,
    "generatorVersion": 2,
    "terrain": [
      [
        "road",
        "water",
        "road",
        "road",
        "grass",
        "plaza",
        "road",
        "plaza",
        "road"
      ],
      [
        "road",
        "grass",
        "plaza",
        "tree",
        "road",
        "barrier",
        "grass",
        "tree",
        "bridge"
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
        "road"
      ],
      [
        "road",
        "grass",
        "tree",
        "grass",
        "road",
        "road",
        "crate",
        "fence",
        "grass"
      ],
      [
        "road",
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
        "tree",
        "tree",
        "grass",
        "crate",
        "barrier",
        "water",
        "water",
        "grass",
        "road"
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
        "road"
      ],
      [
        "road",
        "grass",
        "crate",
        "barrier",
        "grass",
        "grass",
        "water",
        "crate",
        "grass"
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
        "road"
      ]
    ],
    "start": [
      8,
      8
    ],
    "stops": [
      {
        "id": "stop-1",
        "order": 0,
        "item": "cat-food",
        "label": "貓罐頭",
        "position": [
          8,
          2
        ],
        "houseStyle": "yellow"
      },
      {
        "id": "stop-2",
        "order": 1,
        "item": "cat-grass",
        "label": "貓草",
        "position": [
          6,
          3
        ],
        "houseStyle": "green"
      },
      {
        "id": "stop-3",
        "order": 2,
        "item": "paw-cookie",
        "label": "貓掌餅乾",
        "position": [
          4,
          8
        ],
        "houseStyle": "pink"
      },
      {
        "id": "stop-4",
        "order": 3,
        "item": "parcel",
        "label": "包裹",
        "position": [
          4,
          1
        ],
        "houseStyle": "blue"
      },
      {
        "id": "stop-5",
        "order": 4,
        "item": "mouse",
        "label": "玩具老鼠",
        "position": [
          2,
          4
        ],
        "houseStyle": "yellow"
      },
      {
        "id": "stop-6",
        "order": 5,
        "item": "flowers",
        "label": "花束",
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
          2,
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
          6
        ],
        "to": [
          8,
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
          4,
          0
        ],
        "to": [
          3,
          0
        ]
      },
      {
        "from": [
          2,
          1
        ],
        "to": [
          2,
          2
        ]
      }
    ],
    "solutionPath": [
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
      ],
      [
        8,
        5
      ],
      [
        8,
        4
      ],
      [
        8,
        3
      ],
      [
        8,
        2
      ],
      [
        8,
        1
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
        5,
        8
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
        3,
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
        1,
        8
      ],
      [
        0,
        8
      ],
      [
        0,
        7
      ]
    ],
    "optimalSteps": 41,
    "optimalSolutionCount": 1,
    "fuelLimit": 44,
    "metrics": {
      "passableCellCount": 52,
      "stopCount": 6,
      "obstacleCount": 29,
      "oneWayEdgeCount": 7,
      "branchCellCount": 8,
      "detourLoopCount": 1,
      "bridgeCount": 2,
      "solverNodes": 49,
      "solverBacktracks": 7,
      "solverMaxDepth": 41,
      "canonicalSignature": "9x9;road,bridge,road,grass,plaza,road,road,grass,road/plaza,tree,road,fence,road,grass,road,crate,road/road,grass,road,crate,road,water,road,water,road/plaza,barrier,road,road,road,water,road,grass,road/grass,road,plaza,road,road,barrier,road,grass,road/road,tree,road,grass,road,crate,plaza,barrier,road/road,plaza,road,tree,bridge,grass,road,crate,plaza/water,grass,road,grass,plaza,tree,road,grass,road/road,road,road,road,road,tree,road,road,road;S:0,8;P:0@6,8|1@5,6|2@0,4|3@7,4|4@4,2|5@1,0;O:2,6>1,6|2,8>3,8|3,2>3,3|3,4>4,4|4,2>4,3|7,2>6,2|8,4>8,3;R:0,8>1,8>2,8>3,8>4,8>5,8>6,8>7,8>8,8>8,7>8,6>7,6>6,6>5,6>4,6>3,6>2,6>1,6>0,6>0,5>0,4>1,4>2,4>3,4>4,4>5,4>6,4>7,4>8,4>8,3>8,2>7,2>6,2>5,2>4,2>3,2>2,2>1,2>0,2>0,1>0,0>1,0"
    }
  },
  {
    "id": "L074",
    "chapter": 4,
    "title": "橋城繞行",
    "rows": 9,
    "columns": 9,
    "difficulty": 4,
    "difficultyScore": 415555,
    "seed": 473778,
    "generatorVersion": 2,
    "terrain": [
      [
        "road",
        "water",
        "road",
        "road",
        "road",
        "water",
        "road",
        "bridge",
        "road"
      ],
      [
        "road",
        "grass",
        "road",
        "tree",
        "plaza",
        "grass",
        "road",
        "fence",
        "road"
      ],
      [
        "road",
        "fence",
        "road",
        "road",
        "road",
        "water",
        "road",
        "fence",
        "plaza"
      ],
      [
        "road",
        "crate",
        "road",
        "road",
        "road",
        "crate",
        "plaza",
        "grass",
        "road"
      ],
      [
        "road",
        "water",
        "plaza",
        "grass",
        "road",
        "grass",
        "road",
        "road",
        "grass"
      ],
      [
        "road",
        "grass",
        "bridge",
        "crate",
        "road",
        "crate",
        "road",
        "fence",
        "plaza"
      ],
      [
        "road",
        "crate",
        "road",
        "barrier",
        "bridge",
        "fence",
        "road",
        "road",
        "road"
      ],
      [
        "plaza",
        "crate",
        "road",
        "grass",
        "road",
        "barrier",
        "road",
        "barrier",
        "grass"
      ],
      [
        "road",
        "road",
        "road",
        "water",
        "plaza",
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
        "item": "yarn",
        "label": "毛線球",
        "position": [
          7,
          0
        ],
        "houseStyle": "green"
      },
      {
        "id": "stop-2",
        "order": 1,
        "item": "letter",
        "label": "信件",
        "position": [
          4,
          2
        ],
        "houseStyle": "pink"
      },
      {
        "id": "stop-3",
        "order": 2,
        "item": "milk",
        "label": "鮮奶",
        "position": [
          1,
          4
        ],
        "houseStyle": "blue"
      },
      {
        "id": "stop-4",
        "order": 3,
        "item": "cat-food",
        "label": "貓罐頭",
        "position": [
          8,
          4
        ],
        "houseStyle": "yellow"
      },
      {
        "id": "stop-5",
        "order": 4,
        "item": "cat-grass",
        "label": "貓草",
        "position": [
          3,
          6
        ],
        "houseStyle": "green"
      },
      {
        "id": "stop-6",
        "order": 5,
        "item": "paw-cookie",
        "label": "貓掌餅乾",
        "position": [
          2,
          8
        ],
        "houseStyle": "pink"
      }
    ],
    "oneWayEdges": [
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
          3,
          2
        ],
        "to": [
          2,
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
          0,
          7
        ],
        "to": [
          0,
          8
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
        8,
        1
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
        8,
        5
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
      ]
    ],
    "optimalSteps": 42,
    "optimalSolutionCount": 1,
    "fuelLimit": 47,
    "metrics": {
      "passableCellCount": 52,
      "stopCount": 6,
      "obstacleCount": 29,
      "oneWayEdgeCount": 7,
      "branchCellCount": 7,
      "detourLoopCount": 1,
      "bridgeCount": 3,
      "solverNodes": 50,
      "solverBacktracks": 7,
      "solverMaxDepth": 42,
      "canonicalSignature": "9x9;road,bridge,road,water,road,road,road,water,road/road,fence,road,grass,plaza,tree,road,grass,road/plaza,fence,road,water,road,road,road,fence,road/road,grass,plaza,crate,road,road,road,crate,road/grass,road,road,grass,road,grass,plaza,water,road/plaza,fence,road,crate,road,crate,bridge,grass,road/road,road,road,fence,bridge,barrier,road,crate,road/grass,barrier,road,barrier,road,grass,road,crate,plaza/road,road,road,road,plaza,water,road,road,road;S:0,8;P:0@7,8|1@4,6|2@1,4|3@8,4|4@3,2|5@2,0;O:0,1>0,0|0,6>0,5|1,4>2,4|2,4>2,5|3,4>3,5|3,4>4,4|3,6>2,6;R:0,8>1,8>2,8>3,8>4,8>5,8>6,8>7,8>8,8>8,7>8,6>7,6>6,6>5,6>4,6>3,6>2,6>1,6>0,6>0,5>0,4>1,4>2,4>3,4>4,4>5,4>6,4>7,4>8,4>8,3>8,2>7,2>6,2>5,2>4,2>3,2>2,2>1,2>0,2>0,1>0,0>1,0>2,0"
    }
  },
  {
    "id": "L075",
    "chapter": 4,
    "title": "錯路陷阱",
    "rows": 9,
    "columns": 9,
    "difficulty": 4,
    "difficultyScore": 415586,
    "seed": 474775,
    "generatorVersion": 2,
    "terrain": [
      [
        "road",
        "bridge",
        "road",
        "barrier",
        "road",
        "road",
        "road",
        "barrier",
        "road"
      ],
      [
        "road",
        "water",
        "road",
        "tree",
        "plaza",
        "tree",
        "road",
        "grass",
        "road"
      ],
      [
        "road",
        "crate",
        "road",
        "fence",
        "road",
        "grass",
        "road",
        "grass",
        "road"
      ],
      [
        "plaza",
        "barrier",
        "plaza",
        "grass",
        "road",
        "crate",
        "road",
        "crate",
        "road"
      ],
      [
        "grass",
        "road",
        "road",
        "tree",
        "road",
        "tree",
        "plaza",
        "barrier",
        "road"
      ],
      [
        "road",
        "grass",
        "road",
        "water",
        "road",
        "grass",
        "bridge",
        "road",
        "road"
      ],
      [
        "road",
        "water",
        "road",
        "crate",
        "bridge",
        "barrier",
        "road",
        "road",
        "road"
      ],
      [
        "road",
        "road",
        "road",
        "fence",
        "road",
        "fence",
        "road",
        "water",
        "plaza"
      ],
      [
        "road",
        "crate",
        "road",
        "road",
        "plaza",
        "grass",
        "road",
        "road",
        "road"
      ]
    ],
    "start": [
      0,
      8
    ],
    "stops": [
      {
        "id": "stop-1",
        "order": 0,
        "item": "mouse",
        "label": "玩具老鼠",
        "position": [
          7,
          8
        ],
        "houseStyle": "pink"
      },
      {
        "id": "stop-2",
        "order": 1,
        "item": "flowers",
        "label": "花束",
        "position": [
          4,
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
          1,
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
          8,
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
          3,
          2
        ],
        "houseStyle": "pink"
      },
      {
        "id": "stop-6",
        "order": 5,
        "item": "milk",
        "label": "鮮奶",
        "position": [
          3,
          0
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
          7
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
          3,
          8
        ],
        "to": [
          4,
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
          8,
          4
        ],
        "to": [
          8,
          3
        ]
      }
    ],
    "solutionPath": [
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
        5
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
        8,
        3
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
        3,
        0
      ]
    ],
    "optimalSteps": 43,
    "optimalSolutionCount": 1,
    "fuelLimit": 46,
    "metrics": {
      "passableCellCount": 52,
      "stopCount": 6,
      "obstacleCount": 29,
      "oneWayEdgeCount": 7,
      "branchCellCount": 6,
      "detourLoopCount": 1,
      "bridgeCount": 3,
      "solverNodes": 50,
      "solverBacktracks": 6,
      "solverMaxDepth": 43,
      "canonicalSignature": "9x9;road,barrier,road,road,road,barrier,road,bridge,road/road,grass,road,tree,plaza,tree,road,water,road/road,grass,road,grass,road,fence,road,crate,road/road,crate,road,crate,road,grass,plaza,barrier,plaza/road,barrier,plaza,tree,road,tree,road,road,grass/road,road,bridge,grass,road,water,road,grass,road/road,road,road,barrier,bridge,crate,road,water,road/plaza,water,road,fence,road,fence,road,road,road/road,road,road,grass,plaza,road,road,crate,road;S:0,0;P:0@7,0|1@4,2|2@1,4|3@8,4|4@3,6|5@3,8;O:3,0>4,0|3,2>2,2|5,2>5,1|5,4>6,4|6,2>6,1|8,1>8,2|8,4>8,5;R:0,0>1,0>2,0>3,0>4,0>5,0>6,0>7,0>8,0>8,1>8,2>7,2>6,2>5,2>4,2>3,2>2,2>1,2>0,2>0,3>0,4>1,4>2,4>3,4>4,4>5,4>6,4>7,4>8,4>8,5>8,6>7,6>6,6>5,6>4,6>3,6>2,6>1,6>0,6>0,7>0,8>1,8>2,8>3,8"
    }
  },
  {
    "id": "L076",
    "chapter": 4,
    "title": "六站快遞",
    "rows": 9,
    "columns": 9,
    "difficulty": 4,
    "difficultyScore": 415606,
    "seed": 475772,
    "generatorVersion": 2,
    "terrain": [
      [
        "tree",
        "road",
        "road",
        "road",
        "grass",
        "plaza",
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
        "fence",
        "road",
        "road",
        "bridge"
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
        "road"
      ],
      [
        "road",
        "fence",
        "grass",
        "barrier",
        "barrier",
        "water",
        "fence",
        "fence",
        "water"
      ],
      [
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
        "fence",
        "water",
        "grass",
        "tree",
        "grass",
        "grass",
        "crate",
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
        "road",
        "road"
      ],
      [
        "road",
        "fence",
        "grass",
        "grass",
        "grass",
        "water",
        "grass",
        "fence",
        "fence"
      ],
      [
        "road",
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
      8,
      8
    ],
    "stops": [
      {
        "id": "stop-1",
        "order": 0,
        "item": "cat-grass",
        "label": "貓草",
        "position": [
          8,
          1
        ],
        "houseStyle": "blue"
      },
      {
        "id": "stop-2",
        "order": 1,
        "item": "paw-cookie",
        "label": "貓掌餅乾",
        "position": [
          6,
          4
        ],
        "houseStyle": "yellow"
      },
      {
        "id": "stop-3",
        "order": 2,
        "item": "parcel",
        "label": "包裹",
        "position": [
          4,
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
          4,
          0
        ],
        "houseStyle": "pink"
      },
      {
        "id": "stop-5",
        "order": 4,
        "item": "flowers",
        "label": "花束",
        "position": [
          2,
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
          0,
          5
        ],
        "houseStyle": "yellow"
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
          0,
          7
        ],
        "to": [
          1,
          7
        ]
      },
      {
        "from": [
          1,
          8
        ],
        "to": [
          1,
          7
        ]
      },
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
          5,
          8
        ],
        "to": [
          4,
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
          8
        ]
      },
      {
        "from": [
          2,
          8
        ],
        "to": [
          1,
          8
        ]
      }
    ],
    "solutionPath": [
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
      ],
      [
        8,
        5
      ],
      [
        8,
        4
      ],
      [
        8,
        3
      ],
      [
        8,
        2
      ],
      [
        8,
        1
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
        5,
        8
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
        3,
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
        1,
        8
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
      ]
    ],
    "optimalSteps": 43,
    "optimalSolutionCount": 1,
    "fuelLimit": 46,
    "metrics": {
      "passableCellCount": 52,
      "stopCount": 6,
      "obstacleCount": 29,
      "oneWayEdgeCount": 7,
      "branchCellCount": 6,
      "detourLoopCount": 1,
      "bridgeCount": 3,
      "solverNodes": 52,
      "solverBacktracks": 8,
      "solverMaxDepth": 43,
      "canonicalSignature": "9x9;road,bridge,road,water,road,road,road,fence,road/road,road,road,fence,plaza,grass,road,fence,road/road,road,road,fence,road,crate,road,grass,road/plaza,fence,plaza,water,road,grass,road,water,road/grass,road,road,barrier,road,grass,plaza,grass,road/road,grass,road,barrier,road,tree,bridge,grass,road/road,plaza,road,grass,bridge,grass,road,grass,road/road,fence,road,fence,road,water,road,fence,plaza/tree,road,road,road,plaza,fence,road,road,road;S:0,8;P:0@7,8|1@4,6|2@1,4|3@8,4|4@3,2|5@3,0;O:0,1>1,1|0,2>0,1|0,5>0,4|1,0>1,1|1,2>0,2|1,6>0,6|2,0>2,1;R:0,8>1,8>2,8>3,8>4,8>5,8>6,8>7,8>8,8>8,7>8,6>7,6>6,6>5,6>4,6>3,6>2,6>1,6>0,6>0,5>0,4>1,4>2,4>3,4>4,4>5,4>6,4>7,4>8,4>8,3>8,2>7,2>6,2>5,2>4,2>3,2>2,2>1,2>0,2>0,1>0,0>1,0>2,0>3,0"
    }
  },
  {
    "id": "L077",
    "chapter": 4,
    "title": "市中心任務",
    "rows": 9,
    "columns": 9,
    "difficulty": 4,
    "difficultyScore": 415464,
    "seed": 476769,
    "generatorVersion": 2,
    "terrain": [
      [
        "grass",
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
        "barrier",
        "road",
        "road",
        "road",
        "barrier",
        "road",
        "barrier",
        "plaza"
      ],
      [
        "road",
        "road",
        "road",
        "road",
        "bridge",
        "fence",
        "road",
        "crate",
        "road"
      ],
      [
        "barrier",
        "grass",
        "road",
        "barrier",
        "road",
        "fence",
        "bridge",
        "crate",
        "road"
      ],
      [
        "plaza",
        "grass",
        "road",
        "tree",
        "road",
        "water",
        "plaza",
        "grass",
        "road"
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
        "road"
      ],
      [
        "road",
        "water",
        "plaza",
        "grass",
        "plaza",
        "grass",
        "road",
        "grass",
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
        "barrier",
        "road"
      ],
      [
        "road",
        "bridge",
        "road",
        "barrier",
        "road",
        "road",
        "road",
        "water",
        "road"
      ]
    ],
    "start": [
      8,
      8
    ],
    "stops": [
      {
        "id": "stop-1",
        "order": 0,
        "item": "letter",
        "label": "信件",
        "position": [
          1,
          8
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
          6
        ],
        "houseStyle": "green"
      },
      {
        "id": "stop-3",
        "order": 2,
        "item": "cat-food",
        "label": "貓罐頭",
        "position": [
          6,
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
          0,
          3
        ],
        "houseStyle": "blue"
      },
      {
        "id": "stop-5",
        "order": 4,
        "item": "paw-cookie",
        "label": "貓掌餅乾",
        "position": [
          6,
          2
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
          0
        ],
        "houseStyle": "green"
      }
    ],
    "oneWayEdges": [
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
          2
        ],
        "to": [
          1,
          3
        ]
      },
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
          1,
          8
        ],
        "to": [
          0,
          8
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
          4,
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
      ],
      [
        2,
        8
      ],
      [
        1,
        8
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
        8,
        5
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
        3
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
        8,
        1
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
      ]
    ],
    "optimalSteps": 44,
    "optimalSolutionCount": 1,
    "fuelLimit": 48,
    "metrics": {
      "passableCellCount": 51,
      "stopCount": 6,
      "obstacleCount": 30,
      "oneWayEdgeCount": 7,
      "branchCellCount": 4,
      "detourLoopCount": 1,
      "bridgeCount": 3,
      "solverNodes": 52,
      "solverBacktracks": 7,
      "solverMaxDepth": 44,
      "canonicalSignature": "9x9;grass,road,road,barrier,plaza,road,road,road,road/road,barrier,road,grass,grass,grass,water,grass,bridge/road,road,road,road,road,road,plaza,road,road/plaza,road,road,barrier,tree,tree,grass,barrier,barrier/road,road,bridge,road,road,road,plaza,road,road/barrier,barrier,fence,fence,water,grass,grass,grass,road/road,road,road,bridge,plaza,road,road,road,road/road,barrier,crate,crate,grass,grass,grass,barrier,water/road,plaza,road,road,road,road,road,road,road;S:8,8;P:0@8,1|1@6,4|2@4,6|3@3,0|4@2,6|5@0,4;O:2,1>3,1|2,2>3,2|3,0>3,1|4,4>4,3|6,2>6,3|6,7>6,8|8,1>8,0;R:8,8>8,7>8,6>8,5>8,4>8,3>8,2>8,1>8,0>7,0>6,0>6,1>6,2>6,3>6,4>6,5>6,6>6,7>6,8>5,8>4,8>4,7>4,6>4,5>4,4>4,3>4,2>4,1>4,0>3,0>2,0>2,1>2,2>2,3>2,4>2,5>2,6>2,7>2,8>1,8>0,8>0,7>0,6>0,5>0,4"
    }
  },
  {
    "id": "L078",
    "chapter": 4,
    "title": "繁忙交叉",
    "rows": 9,
    "columns": 9,
    "difficulty": 4,
    "difficultyScore": 415723,
    "seed": 477766,
    "generatorVersion": 2,
    "terrain": [
      [
        "barrier",
        "fence",
        "plaza",
        "plaza",
        "road",
        "road",
        "road",
        "road",
        "road"
      ],
      [
        "grass",
        "road",
        "barrier",
        "water",
        "fence",
        "tree",
        "barrier",
        "crate",
        "bridge"
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
        "road"
      ],
      [
        "road",
        "grass",
        "water",
        "grass",
        "fence",
        "crate",
        "grass",
        "crate",
        "crate"
      ],
      [
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
        "crate",
        "fence",
        "grass",
        "grass",
        "fence",
        "crate",
        "barrier",
        "fence",
        "road"
      ],
      [
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
        "road",
        "road",
        "road",
        "grass",
        "grass",
        "grass",
        "tree",
        "tree",
        "crate"
      ],
      [
        "road",
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
      8,
      8
    ],
    "stops": [
      {
        "id": "stop-1",
        "order": 0,
        "item": "flowers",
        "label": "花束",
        "position": [
          8,
          1
        ],
        "houseStyle": "green"
      },
      {
        "id": "stop-2",
        "order": 1,
        "item": "dried-fish",
        "label": "魚乾",
        "position": [
          6,
          5
        ],
        "houseStyle": "pink"
      },
      {
        "id": "stop-3",
        "order": 2,
        "item": "yarn",
        "label": "毛線球",
        "position": [
          4,
          6
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
          0
        ],
        "houseStyle": "yellow"
      },
      {
        "id": "stop-5",
        "order": 4,
        "item": "milk",
        "label": "鮮奶",
        "position": [
          2,
          7
        ],
        "houseStyle": "green"
      },
      {
        "id": "stop-6",
        "order": 5,
        "item": "cat-food",
        "label": "貓罐頭",
        "position": [
          0,
          3
        ],
        "houseStyle": "pink"
      }
    ],
    "oneWayEdges": [
      {
        "from": [
          6,
          1
        ],
        "to": [
          7,
          1
        ]
      },
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
          6,
          2
        ],
        "to": [
          7,
          2
        ]
      },
      {
        "from": [
          8,
          8
        ],
        "to": [
          8,
          7
        ]
      },
      {
        "from": [
          8,
          6
        ],
        "to": [
          8,
          5
        ]
      },
      {
        "from": [
          6,
          3
        ],
        "to": [
          6,
          4
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
          2,
          8
        ],
        "to": [
          1,
          8
        ]
      }
    ],
    "solutionPath": [
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
      ],
      [
        8,
        5
      ],
      [
        8,
        4
      ],
      [
        8,
        3
      ],
      [
        8,
        2
      ],
      [
        8,
        1
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
        5,
        8
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
        3,
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
        1,
        8
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
      ]
    ],
    "optimalSteps": 45,
    "optimalSolutionCount": 1,
    "fuelLimit": 47,
    "metrics": {
      "passableCellCount": 50,
      "stopCount": 6,
      "obstacleCount": 31,
      "oneWayEdgeCount": 8,
      "branchCellCount": 2,
      "detourLoopCount": 1,
      "bridgeCount": 3,
      "solverNodes": 52,
      "solverBacktracks": 6,
      "solverMaxDepth": 45,
      "canonicalSignature": "9x9;barrier,fence,plaza,plaza,road,road,road,road,road/grass,road,barrier,water,fence,tree,barrier,crate,bridge/plaza,road,road,road,road,road,road,plaza,road/road,grass,water,grass,fence,crate,grass,crate,crate/road,road,bridge,road,road,road,plaza,road,road/crate,fence,grass,grass,fence,crate,barrier,fence,road/road,road,road,bridge,road,plaza,road,road,road/road,road,road,grass,grass,grass,tree,tree,crate/road,plaza,road,road,road,road,road,road,road;S:8,8;P:0@8,1|1@6,5|2@4,6|3@2,0|4@2,7|5@0,3;O:2,8>1,8|4,3>4,2|6,1>7,1|6,2>7,2|6,3>6,4|7,0>7,1|8,6>8,5|8,8>8,7;R:8,8>8,7>8,6>8,5>8,4>8,3>8,2>8,1>8,0>7,0>6,0>6,1>6,2>6,3>6,4>6,5>6,6>6,7>6,8>5,8>4,8>4,7>4,6>4,5>4,4>4,3>4,2>4,1>4,0>3,0>2,0>2,1>2,2>2,3>2,4>2,5>2,6>2,7>2,8>1,8>0,8>0,7>0,6>0,5>0,4>0,3"
    }
  },
  {
    "id": "L079",
    "chapter": 4,
    "title": "全區巡送",
    "rows": 9,
    "columns": 9,
    "difficulty": 4,
    "difficultyScore": 415754,
    "seed": 478763,
    "generatorVersion": 2,
    "terrain": [
      [
        "road",
        "road",
        "road",
        "crate",
        "road",
        "road",
        "plaza",
        "grass",
        "fence"
      ],
      [
        "plaza",
        "barrier",
        "road",
        "barrier",
        "road",
        "tree",
        "road",
        "road",
        "grass"
      ],
      [
        "road",
        "water",
        "road",
        "crate",
        "bridge",
        "grass",
        "road",
        "crate",
        "plaza"
      ],
      [
        "road",
        "crate",
        "bridge",
        "crate",
        "road",
        "water",
        "road",
        "crate",
        "road"
      ],
      [
        "road",
        "fence",
        "road",
        "fence",
        "road",
        "fence",
        "road",
        "grass",
        "road"
      ],
      [
        "road",
        "barrier",
        "plaza",
        "road",
        "plaza",
        "grass",
        "road",
        "tree",
        "road"
      ],
      [
        "road",
        "water",
        "road",
        "road",
        "road",
        "grass",
        "road",
        "crate",
        "road"
      ],
      [
        "road",
        "crate",
        "road",
        "grass",
        "road",
        "crate",
        "road",
        "water",
        "road"
      ],
      [
        "road",
        "grass",
        "road",
        "road",
        "road",
        "grass",
        "plaza",
        "bridge",
        "road"
      ]
    ],
    "start": [
      8,
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
          5,
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
          5,
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
          6
        ],
        "houseStyle": "green"
      },
      {
        "id": "stop-5",
        "order": 4,
        "item": "dried-fish",
        "label": "魚乾",
        "position": [
          8,
          6
        ],
        "houseStyle": "pink"
      },
      {
        "id": "stop-6",
        "order": 5,
        "item": "yarn",
        "label": "毛線球",
        "position": [
          2,
          8
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
          5,
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
          3
        ]
      },
      {
        "from": [
          4,
          0
        ],
        "to": [
          3,
          0
        ]
      },
      {
        "from": [
          1,
          0
        ],
        "to": [
          0,
          0
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
          6,
          2
        ],
        "to": [
          7,
          2
        ]
      },
      {
        "from": [
          1,
          6
        ],
        "to": [
          2,
          6
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
      }
    ],
    "solutionPath": [
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
        8,
        3
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
        8,
        7
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
      ],
      [
        2,
        8
      ]
    ],
    "optimalSteps": 46,
    "optimalSolutionCount": 1,
    "fuelLimit": 48,
    "metrics": {
      "passableCellCount": 50,
      "stopCount": 6,
      "obstacleCount": 31,
      "oneWayEdgeCount": 8,
      "branchCellCount": 1,
      "detourLoopCount": 1,
      "bridgeCount": 3,
      "solverNodes": 52,
      "solverBacktracks": 5,
      "solverMaxDepth": 46,
      "canonicalSignature": "9x9;fence,grass,plaza,road,road,crate,road,road,road/grass,road,road,tree,road,barrier,road,barrier,plaza/plaza,crate,road,grass,bridge,crate,road,water,road/road,crate,road,water,road,crate,bridge,crate,road/road,grass,road,fence,road,fence,road,fence,road/road,tree,road,grass,plaza,road,plaza,barrier,road/road,crate,road,grass,road,road,road,water,road/road,water,road,crate,road,grass,road,crate,road/road,bridge,plaza,grass,road,road,road,grass,road;S:8,8;P:0@1,8|1@5,6|2@5,4|3@0,2|4@8,2|5@2,0;O:0,7>0,6|1,2>2,2|1,8>0,8|4,8>3,8|5,4>5,5|6,4>6,5|6,6>7,6|8,1>8,0;R:8,8>7,8>6,8>5,8>4,8>3,8>2,8>1,8>0,8>0,7>0,6>1,6>2,6>3,6>4,6>5,6>6,6>7,6>8,6>8,5>8,4>7,4>6,4>5,4>4,4>3,4>2,4>1,4>0,4>0,3>0,2>1,2>2,2>3,2>4,2>5,2>6,2>7,2>8,2>8,1>8,0>7,0>6,0>5,0>4,0>3,0>2,0"
    }
  },
  {
    "id": "L080",
    "chapter": 4,
    "title": "城區全勤",
    "rows": 9,
    "columns": 9,
    "difficulty": 4,
    "difficultyScore": 415881,
    "seed": 479760,
    "generatorVersion": 2,
    "terrain": [
      [
        "road",
        "road",
        "road",
        "tree",
        "road",
        "road",
        "road",
        "road",
        "fence"
      ],
      [
        "plaza",
        "water",
        "road",
        "grass",
        "road",
        "tree",
        "plaza",
        "grass",
        "plaza"
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
        "road"
      ],
      [
        "road",
        "water",
        "bridge",
        "grass",
        "road",
        "fence",
        "road",
        "barrier",
        "road"
      ],
      [
        "road",
        "grass",
        "road",
        "tree",
        "road",
        "fence",
        "road",
        "grass",
        "road"
      ],
      [
        "road",
        "crate",
        "plaza",
        "water",
        "plaza",
        "tree",
        "road",
        "crate",
        "road"
      ],
      [
        "road",
        "barrier",
        "road",
        "water",
        "road",
        "tree",
        "road",
        "road",
        "road"
      ],
      [
        "road",
        "crate",
        "road",
        "water",
        "road",
        "grass",
        "road",
        "road",
        "road"
      ],
      [
        "road",
        "water",
        "road",
        "road",
        "road",
        "barrier",
        "road",
        "plaza",
        "road"
      ]
    ],
    "start": [
      8,
      0
    ],
    "stops": [
      {
        "id": "stop-1",
        "order": 0,
        "item": "milk",
        "label": "鮮奶",
        "position": [
          1,
          0
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
          2
        ],
        "houseStyle": "yellow"
      },
      {
        "id": "stop-3",
        "order": 2,
        "item": "cat-grass",
        "label": "貓草",
        "position": [
          5,
          4
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
          6
        ],
        "houseStyle": "pink"
      },
      {
        "id": "stop-5",
        "order": 4,
        "item": "parcel",
        "label": "包裹",
        "position": [
          8,
          7
        ],
        "houseStyle": "blue"
      },
      {
        "id": "stop-6",
        "order": 5,
        "item": "mouse",
        "label": "玩具老鼠",
        "position": [
          1,
          8
        ],
        "houseStyle": "yellow"
      }
    ],
    "oneWayEdges": [
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
          7,
          8
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
          7,
          7
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
          3,
          6
        ],
        "to": [
          4,
          6
        ]
      },
      {
        "from": [
          7,
          8
        ],
        "to": [
          6,
          8
        ]
      },
      {
        "from": [
          3,
          8
        ],
        "to": [
          2,
          8
        ]
      }
    ],
    "solutionPath": [
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
        8,
        3
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
        8,
        7
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
      ],
      [
        2,
        8
      ],
      [
        1,
        8
      ]
    ],
    "optimalSteps": 47,
    "optimalSolutionCount": 1,
    "fuelLimit": 51,
    "metrics": {
      "passableCellCount": 51,
      "stopCount": 6,
      "obstacleCount": 30,
      "oneWayEdgeCount": 8,
      "branchCellCount": 1,
      "detourLoopCount": 1,
      "bridgeCount": 2,
      "solverNodes": 54,
      "solverBacktracks": 6,
      "solverMaxDepth": 47,
      "canonicalSignature": "9x9;fence,plaza,road,road,road,road,road,road,road/road,grass,grass,barrier,grass,crate,road,road,plaza/road,plaza,road,road,road,road,road,road,road/road,tree,grass,fence,fence,tree,tree,grass,barrier/road,road,bridge,road,road,plaza,road,road,road/tree,grass,water,grass,tree,water,water,water,road/road,road,road,bridge,road,plaza,road,road,road/road,water,grass,water,grass,crate,barrier,crate,water/road,plaza,road,road,road,road,road,road,road;S:8,8;P:0@8,1|1@6,5|2@4,5|3@2,1|4@1,8|5@0,1;O:0,3>0,2|0,6>1,6|0,7>0,6|0,7>1,7|1,8>1,7|2,2>2,3|2,3>2,4|6,0>6,1;R:8,8>8,7>8,6>8,5>8,4>8,3>8,2>8,1>8,0>7,0>6,0>6,1>6,2>6,3>6,4>6,5>6,6>6,7>6,8>5,8>4,8>4,7>4,6>4,5>4,4>4,3>4,2>4,1>4,0>3,0>2,0>2,1>2,2>2,3>2,4>2,5>2,6>2,7>2,8>1,8>0,8>0,7>0,6>0,5>0,4>0,3>0,2>0,1"
    }
  }
];
});
