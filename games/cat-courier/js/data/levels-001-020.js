(function (root, factory) {
  const levels = factory();
  if (typeof module === 'object' && module.exports) module.exports = levels;
  else root.CAT_COURIER_LEVELS_001_020 = levels;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  return [
  {
    "id": "L001",
    "chapter": 1,
    "title": "第一瓶鮮奶",
    "rows": 6,
    "columns": 6,
    "difficulty": 1,
    "difficultyScore": 102815,
    "seed": 100997,
    "generatorVersion": 2,
    "terrain": [
      [
        "grass",
        "grass",
        "fence",
        "tree",
        "fence",
        "grass"
      ],
      [
        "barrier",
        "tree",
        "grass",
        "crate",
        "tree",
        "fence"
      ],
      [
        "grass",
        "grass",
        "water",
        "fence",
        "road",
        "road"
      ],
      [
        "tree",
        "fence",
        "crate",
        "road",
        "plaza",
        "road"
      ],
      [
        "water",
        "grass",
        "grass",
        "water",
        "grass",
        "road"
      ],
      [
        "road",
        "road",
        "road",
        "road",
        "plaza",
        "road"
      ]
    ],
    "start": [
      5,
      0
    ],
    "stops": [
      {
        "id": "stop-1",
        "order": 0,
        "item": "dried-fish",
        "label": "魚乾",
        "position": [
          5,
          4
        ],
        "houseStyle": "yellow"
      },
      {
        "id": "stop-2",
        "order": 1,
        "item": "yarn",
        "label": "毛線球",
        "position": [
          3,
          4
        ],
        "houseStyle": "green"
      }
    ],
    "oneWayEdges": [],
    "solutionPath": [
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
        4,
        5
      ],
      [
        3,
        5
      ],
      [
        3,
        4
      ]
    ],
    "optimalSteps": 8,
    "optimalSolutionCount": 1,
    "fuelLimit": 13,
    "metrics": {
      "passableCellCount": 12,
      "stopCount": 2,
      "obstacleCount": 24,
      "oneWayEdgeCount": 0,
      "branchCellCount": 1,
      "detourLoopCount": 1,
      "bridgeCount": 0,
      "solverNodes": 10,
      "solverBacktracks": 1,
      "solverMaxDepth": 8,
      "canonicalSignature": "6x6;grass,barrier,grass,tree,water,road/grass,tree,grass,fence,grass,road/fence,grass,water,crate,grass,road/tree,crate,fence,road,water,road/fence,tree,road,plaza,grass,plaza/grass,fence,road,road,road,road;S:0,5;P:0@4,5|1@4,3;O:;R:0,5>1,5>2,5>3,5>4,5>5,5>5,4>5,3>4,3"
    }
  },
  {
    "id": "L002",
    "chapter": 1,
    "title": "轉角魚乾",
    "rows": 6,
    "columns": 6,
    "difficulty": 1,
    "difficultyScore": 103049,
    "seed": 101994,
    "generatorVersion": 2,
    "terrain": [
      [
        "road",
        "road",
        "grass",
        "water",
        "grass",
        "crate"
      ],
      [
        "road",
        "road",
        "water",
        "grass",
        "crate",
        "barrier"
      ],
      [
        "road",
        "grass",
        "grass",
        "crate",
        "fence",
        "crate"
      ],
      [
        "road",
        "grass",
        "plaza",
        "grass",
        "barrier",
        "grass"
      ],
      [
        "plaza",
        "crate",
        "road",
        "tree",
        "barrier",
        "grass"
      ],
      [
        "road",
        "road",
        "road",
        "road",
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
          4,
          0
        ],
        "houseStyle": "green"
      },
      {
        "id": "stop-2",
        "order": 1,
        "item": "mouse",
        "label": "玩具老鼠",
        "position": [
          3,
          2
        ],
        "houseStyle": "pink"
      }
    ],
    "oneWayEdges": [],
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
        5,
        1
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
      ]
    ],
    "optimalSteps": 9,
    "optimalSolutionCount": 1,
    "fuelLimit": 15,
    "metrics": {
      "passableCellCount": 13,
      "stopCount": 2,
      "obstacleCount": 23,
      "oneWayEdgeCount": 0,
      "branchCellCount": 1,
      "detourLoopCount": 1,
      "bridgeCount": 0,
      "solverNodes": 13,
      "solverBacktracks": 3,
      "solverMaxDepth": 9,
      "canonicalSignature": "6x6;crate,barrier,crate,grass,grass,grass/grass,crate,fence,barrier,barrier,grass/water,grass,crate,grass,tree,road/grass,water,grass,plaza,road,road/road,road,grass,grass,crate,road/road,road,road,road,plaza,road;S:5,0;P:0@5,4|1@3,3;O:;R:5,0>5,1>5,2>5,3>5,4>5,5>4,5>3,5>3,4>3,3"
    }
  },
  {
    "id": "L003",
    "chapter": 1,
    "title": "小巷包裹",
    "rows": 6,
    "columns": 6,
    "difficulty": 1,
    "difficultyScore": 103049,
    "seed": 102991,
    "generatorVersion": 2,
    "terrain": [
      [
        "tree",
        "water",
        "grass",
        "water",
        "tree",
        "crate"
      ],
      [
        "barrier",
        "fence",
        "grass",
        "water",
        "grass",
        "grass"
      ],
      [
        "road",
        "crate",
        "grass",
        "fence",
        "grass",
        "grass"
      ],
      [
        "road",
        "road",
        "plaza",
        "crate",
        "fence",
        "tree"
      ],
      [
        "road",
        "crate",
        "crate",
        "grass",
        "road",
        "road"
      ],
      [
        "road",
        "plaza",
        "road",
        "road",
        "road",
        "road"
      ]
    ],
    "start": [
      5,
      5
    ],
    "stops": [
      {
        "id": "stop-1",
        "order": 0,
        "item": "cat-food",
        "label": "貓罐頭",
        "position": [
          5,
          1
        ],
        "houseStyle": "pink"
      },
      {
        "id": "stop-2",
        "order": 1,
        "item": "cat-grass",
        "label": "貓草",
        "position": [
          3,
          2
        ],
        "houseStyle": "blue"
      }
    ],
    "oneWayEdges": [],
    "solutionPath": [
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
      ]
    ],
    "optimalSteps": 9,
    "optimalSolutionCount": 1,
    "fuelLimit": 17,
    "metrics": {
      "passableCellCount": 13,
      "stopCount": 2,
      "obstacleCount": 23,
      "oneWayEdgeCount": 0,
      "branchCellCount": 1,
      "detourLoopCount": 1,
      "bridgeCount": 0,
      "solverNodes": 13,
      "solverBacktracks": 3,
      "solverMaxDepth": 9,
      "canonicalSignature": "6x6;crate,grass,grass,tree,road,road/tree,grass,grass,fence,road,road/water,water,fence,crate,grass,road/grass,grass,grass,plaza,crate,road/water,fence,crate,road,crate,plaza/tree,barrier,road,road,road,road;S:0,5;P:0@4,5|1@3,3;O:;R:0,5>1,5>2,5>3,5>4,5>5,5>5,4>5,3>4,3>3,3"
    }
  },
  {
    "id": "L004",
    "chapter": 1,
    "title": "花園來信",
    "rows": 6,
    "columns": 6,
    "difficulty": 1,
    "difficultyScore": 103263,
    "seed": 103988,
    "generatorVersion": 2,
    "terrain": [
      [
        "plaza",
        "road",
        "road",
        "grass",
        "water",
        "grass"
      ],
      [
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
        "plaza",
        "grass",
        "crate"
      ],
      [
        "road",
        "grass",
        "plaza",
        "grass",
        "water",
        "grass"
      ],
      [
        "road",
        "road",
        "grass",
        "grass",
        "tree",
        "barrier"
      ],
      [
        "road",
        "road",
        "crate",
        "grass",
        "crate",
        "grass"
      ]
    ],
    "start": [
      5,
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
      }
    ],
    "oneWayEdges": [],
    "solutionPath": [
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
      ]
    ],
    "optimalSteps": 10,
    "optimalSolutionCount": 1,
    "fuelLimit": 18,
    "metrics": {
      "passableCellCount": 14,
      "stopCount": 2,
      "obstacleCount": 22,
      "oneWayEdgeCount": 0,
      "branchCellCount": 1,
      "detourLoopCount": 1,
      "bridgeCount": 0,
      "solverNodes": 14,
      "solverBacktracks": 3,
      "solverMaxDepth": 10,
      "canonicalSignature": "6x6;grass,barrier,grass,crate,grass,grass/crate,tree,water,grass,grass,water/grass,grass,grass,plaza,grass,grass/crate,grass,plaza,road,road,road/road,road,grass,grass,grass,road/road,road,road,road,road,plaza;S:5,0;P:0@5,5|1@3,2;O:;R:5,0>5,1>5,2>5,3>5,4>5,5>4,5>3,5>3,4>3,3>3,2"
    }
  },
  {
    "id": "L005",
    "chapter": 1,
    "title": "餅乾小路",
    "rows": 6,
    "columns": 6,
    "difficulty": 1,
    "difficultyScore": 103263,
    "seed": 104985,
    "generatorVersion": 2,
    "terrain": [
      [
        "road",
        "tree",
        "tree",
        "water",
        "crate",
        "grass"
      ],
      [
        "road",
        "road",
        "fence",
        "grass",
        "fence",
        "barrier"
      ],
      [
        "road",
        "grass",
        "plaza",
        "fence",
        "grass",
        "barrier"
      ],
      [
        "road",
        "fence",
        "road",
        "road",
        "crate",
        "grass"
      ],
      [
        "road",
        "grass",
        "road",
        "road",
        "tree",
        "grass"
      ],
      [
        "plaza",
        "road",
        "road",
        "grass",
        "grass",
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
        "item": "mouse",
        "label": "玩具老鼠",
        "position": [
          5,
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
          2,
          2
        ],
        "houseStyle": "green"
      }
    ],
    "oneWayEdges": [],
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
        5,
        1
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
      ]
    ],
    "optimalSteps": 10,
    "optimalSolutionCount": 1,
    "fuelLimit": 17,
    "metrics": {
      "passableCellCount": 14,
      "stopCount": 2,
      "obstacleCount": 22,
      "oneWayEdgeCount": 0,
      "branchCellCount": 1,
      "detourLoopCount": 1,
      "bridgeCount": 0,
      "solverNodes": 14,
      "solverBacktracks": 3,
      "solverMaxDepth": 10,
      "canonicalSignature": "6x6;crate,grass,grass,barrier,barrier,grass/grass,tree,crate,grass,fence,crate/grass,road,road,fence,grass,water/road,road,road,plaza,fence,tree/road,grass,fence,grass,road,tree/plaza,road,road,road,road,road;S:5,5;P:0@5,0|1@3,3;O:;R:5,5>5,4>5,3>5,2>5,1>5,0>4,0>3,0>3,1>3,2>3,3"
    }
  },
  {
    "id": "L006",
    "chapter": 1,
    "title": "藍屋毛線",
    "rows": 6,
    "columns": 6,
    "difficulty": 1,
    "difficultyScore": 103650,
    "seed": 105982,
    "generatorVersion": 2,
    "terrain": [
      [
        "plaza",
        "road",
        "road",
        "road",
        "crate",
        "crate"
      ],
      [
        "road",
        "barrier",
        "road",
        "road",
        "grass",
        "tree"
      ],
      [
        "road",
        "water",
        "road",
        "grass",
        "fence",
        "grass"
      ],
      [
        "road",
        "water",
        "road",
        "road",
        "barrier",
        "barrier"
      ],
      [
        "road",
        "grass",
        "plaza",
        "grass",
        "grass",
        "fence"
      ],
      [
        "road",
        "water",
        "road",
        "grass",
        "crate",
        "grass"
      ]
    ],
    "start": [
      5,
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
      }
    ],
    "oneWayEdges": [],
    "solutionPath": [
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
      ]
    ],
    "optimalSteps": 11,
    "optimalSolutionCount": 1,
    "fuelLimit": 18,
    "metrics": {
      "passableCellCount": 16,
      "stopCount": 2,
      "obstacleCount": 20,
      "oneWayEdgeCount": 0,
      "branchCellCount": 2,
      "detourLoopCount": 1,
      "bridgeCount": 0,
      "solverNodes": 15,
      "solverBacktracks": 3,
      "solverMaxDepth": 11,
      "canonicalSignature": "6x6;crate,crate,road,road,road,plaza/tree,grass,road,road,barrier,road/grass,fence,grass,road,water,road/barrier,barrier,road,road,water,road/fence,grass,grass,plaza,grass,road/grass,crate,grass,road,water,road;S:5,5;P:0@0,5|1@4,3;O:;R:5,5>4,5>3,5>2,5>1,5>0,5>0,4>0,3>1,3>2,3>3,3>4,3"
    }
  },
  {
    "id": "L007",
    "chapter": 1,
    "title": "午後罐頭",
    "rows": 6,
    "columns": 6,
    "difficulty": 1,
    "difficultyScore": 103630,
    "seed": 106979,
    "generatorVersion": 2,
    "terrain": [
      [
        "grass",
        "crate",
        "road",
        "road",
        "fence",
        "road"
      ],
      [
        "barrier",
        "grass",
        "road",
        "plaza",
        "water",
        "road"
      ],
      [
        "grass",
        "grass",
        "tree",
        "road",
        "grass",
        "road"
      ],
      [
        "crate",
        "tree",
        "fence",
        "road",
        "water",
        "road"
      ],
      [
        "grass",
        "grass",
        "road",
        "road",
        "grass",
        "road"
      ],
      [
        "fence",
        "grass",
        "crate",
        "road",
        "road",
        "plaza"
      ]
    ],
    "start": [
      0,
      5
    ],
    "stops": [
      {
        "id": "stop-1",
        "order": 0,
        "item": "letter",
        "label": "信件",
        "position": [
          5,
          5
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
          3
        ],
        "houseStyle": "blue"
      }
    ],
    "oneWayEdges": [],
    "solutionPath": [
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
        5,
        4
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
      ]
    ],
    "optimalSteps": 11,
    "optimalSolutionCount": 1,
    "fuelLimit": 19,
    "metrics": {
      "passableCellCount": 16,
      "stopCount": 2,
      "obstacleCount": 20,
      "oneWayEdgeCount": 0,
      "branchCellCount": 2,
      "detourLoopCount": 1,
      "bridgeCount": 0,
      "solverNodes": 13,
      "solverBacktracks": 1,
      "solverMaxDepth": 11,
      "canonicalSignature": "6x6;fence,grass,crate,grass,barrier,grass/grass,grass,tree,grass,grass,crate/crate,road,fence,tree,road,road/road,road,road,road,plaza,road/road,grass,water,grass,water,fence/plaza,road,road,road,road,road;S:5,5;P:0@5,0|1@3,4;O:;R:5,5>5,4>5,3>5,2>5,1>5,0>4,0>3,0>3,1>3,2>3,3>3,4"
    }
  },
  {
    "id": "L008",
    "chapter": 1,
    "title": "樹下花束",
    "rows": 6,
    "columns": 6,
    "difficulty": 1,
    "difficultyScore": 103864,
    "seed": 107976,
    "generatorVersion": 2,
    "terrain": [
      [
        "barrier",
        "water",
        "grass",
        "grass",
        "water",
        "fence"
      ],
      [
        "tree",
        "tree",
        "fence",
        "crate",
        "water",
        "grass"
      ],
      [
        "road",
        "grass",
        "road",
        "crate",
        "road",
        "road"
      ],
      [
        "road",
        "road",
        "road",
        "road",
        "road",
        "plaza"
      ],
      [
        "plaza",
        "grass",
        "water",
        "grass",
        "grass",
        "fence"
      ],
      [
        "road",
        "road",
        "road",
        "road",
        "road",
        "road"
      ]
    ],
    "start": [
      5,
      5
    ],
    "stops": [
      {
        "id": "stop-1",
        "order": 0,
        "item": "flowers",
        "label": "花束",
        "position": [
          4,
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
          3,
          5
        ],
        "houseStyle": "yellow"
      }
    ],
    "oneWayEdges": [],
    "solutionPath": [
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
      ]
    ],
    "optimalSteps": 12,
    "optimalSolutionCount": 1,
    "fuelLimit": 18,
    "metrics": {
      "passableCellCount": 17,
      "stopCount": 2,
      "obstacleCount": 19,
      "oneWayEdgeCount": 0,
      "branchCellCount": 2,
      "detourLoopCount": 1,
      "bridgeCount": 0,
      "solverNodes": 16,
      "solverBacktracks": 3,
      "solverMaxDepth": 12,
      "canonicalSignature": "6x6;barrier,tree,road,road,plaza,road/water,tree,grass,road,grass,road/grass,fence,road,road,water,road/grass,crate,crate,road,grass,road/water,water,road,road,grass,road/fence,grass,road,plaza,fence,road;S:5,5;P:0@0,4|1@5,3;O:;R:5,5>4,5>3,5>2,5>1,5>0,5>0,4>0,3>1,3>2,3>3,3>4,3>5,3"
    }
  },
  {
    "id": "L009",
    "chapter": 1,
    "title": "廣場玩鼠",
    "rows": 6,
    "columns": 6,
    "difficulty": 1,
    "difficultyScore": 104686,
    "seed": 108973,
    "generatorVersion": 2,
    "terrain": [
      [
        "road",
        "plaza",
        "road",
        "road",
        "tree",
        "water"
      ],
      [
        "road",
        "grass",
        "road",
        "crate",
        "fence",
        "grass"
      ],
      [
        "road",
        "tree",
        "road",
        "water",
        "water",
        "fence"
      ],
      [
        "road",
        "water",
        "road",
        "crate",
        "fence",
        "fence"
      ],
      [
        "road",
        "road",
        "road",
        "road",
        "grass",
        "crate"
      ],
      [
        "road",
        "road",
        "plaza",
        "grass",
        "grass",
        "grass"
      ]
    ],
    "start": [
      5,
      0
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
          5,
          2
        ],
        "houseStyle": "green"
      }
    ],
    "oneWayEdges": [
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
          5,
          2
        ],
        "to": [
          5,
          1
        ]
      }
    ],
    "solutionPath": [
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
      ]
    ],
    "optimalSteps": 12,
    "optimalSolutionCount": 1,
    "fuelLimit": 18,
    "metrics": {
      "passableCellCount": 17,
      "stopCount": 2,
      "obstacleCount": 19,
      "oneWayEdgeCount": 2,
      "branchCellCount": 2,
      "detourLoopCount": 1,
      "bridgeCount": 0,
      "solverNodes": 18,
      "solverBacktracks": 5,
      "solverMaxDepth": 12,
      "canonicalSignature": "6x6;grass,crate,fence,fence,grass,water/grass,grass,fence,water,fence,tree/grass,road,crate,water,crate,road/plaza,road,road,road,road,road/road,road,water,tree,grass,plaza/road,road,road,road,road,road;S:5,0;P:0@4,5|1@3,0;O:3,0>4,0|3,1>4,1;R:5,0>5,1>5,2>5,3>5,4>5,5>4,5>3,5>3,4>3,3>3,2>3,1>3,0"
    }
  },
  {
    "id": "L010",
    "chapter": 1,
    "title": "貓草專送",
    "rows": 6,
    "columns": 6,
    "difficulty": 1,
    "difficultyScore": 104900,
    "seed": 109970,
    "generatorVersion": 2,
    "terrain": [
      [
        "road",
        "grass",
        "road",
        "plaza",
        "road",
        "barrier"
      ],
      [
        "road",
        "road",
        "road",
        "grass",
        "grass",
        "fence"
      ],
      [
        "road",
        "road",
        "road",
        "tree",
        "grass",
        "fence"
      ],
      [
        "road",
        "grass",
        "road",
        "road",
        "tree",
        "grass"
      ],
      [
        "road",
        "tree",
        "road",
        "grass",
        "tree",
        "water"
      ],
      [
        "road",
        "plaza",
        "road",
        "crate",
        "barrier",
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
        "item": "milk",
        "label": "鮮奶",
        "position": [
          5,
          1
        ],
        "houseStyle": "green"
      },
      {
        "id": "stop-2",
        "order": 1,
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
          2,
          2
        ],
        "to": [
          2,
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
        5,
        1
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
      ]
    ],
    "optimalSteps": 13,
    "optimalSolutionCount": 1,
    "fuelLimit": 21,
    "metrics": {
      "passableCellCount": 18,
      "stopCount": 2,
      "obstacleCount": 18,
      "oneWayEdgeCount": 2,
      "branchCellCount": 2,
      "detourLoopCount": 1,
      "bridgeCount": 0,
      "solverNodes": 19,
      "solverBacktracks": 5,
      "solverMaxDepth": 13,
      "canonicalSignature": "6x6;barrier,fence,fence,grass,water,crate/road,grass,grass,tree,tree,barrier/plaza,grass,tree,road,grass,crate/road,road,road,road,road,road/grass,road,road,grass,tree,plaza/road,road,road,road,road,road;S:5,0;P:0@4,5|1@2,0;O:3,1>4,1|3,2>4,2;R:5,0>5,1>5,2>5,3>5,4>5,5>4,5>3,5>3,4>3,3>3,2>3,1>3,0>2,0"
    }
  },
  {
    "id": "L011",
    "chapter": 1,
    "title": "木箱旁路",
    "rows": 6,
    "columns": 6,
    "difficulty": 1,
    "difficultyScore": 105217,
    "seed": 110967,
    "generatorVersion": 2,
    "terrain": [
      [
        "grass",
        "water",
        "grass",
        "road",
        "road",
        "road"
      ],
      [
        "fence",
        "crate",
        "grass",
        "plaza",
        "tree",
        "plaza"
      ],
      [
        "fence",
        "grass",
        "road",
        "road",
        "grass",
        "road"
      ],
      [
        "barrier",
        "tree",
        "grass",
        "road",
        "water",
        "road"
      ],
      [
        "crate",
        "grass",
        "grass",
        "road",
        "road",
        "road"
      ],
      [
        "grass",
        "plaza",
        "plaza",
        "road",
        "road",
        "road"
      ]
    ],
    "start": [
      5,
      5
    ],
    "stops": [
      {
        "id": "stop-1",
        "order": 0,
        "item": "dried-fish",
        "label": "魚乾",
        "position": [
          1,
          5
        ],
        "houseStyle": "pink"
      },
      {
        "id": "stop-2",
        "order": 1,
        "item": "yarn",
        "label": "毛線球",
        "position": [
          1,
          3
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
          2
        ],
        "houseStyle": "yellow"
      }
    ],
    "oneWayEdges": [
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
          5,
          3
        ],
        "to": [
          5,
          4
        ]
      }
    ],
    "solutionPath": [
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
        5,
        2
      ]
    ],
    "optimalSteps": 13,
    "optimalSolutionCount": 1,
    "fuelLimit": 19,
    "metrics": {
      "passableCellCount": 18,
      "stopCount": 3,
      "obstacleCount": 18,
      "oneWayEdgeCount": 2,
      "branchCellCount": 2,
      "detourLoopCount": 1,
      "bridgeCount": 0,
      "solverNodes": 19,
      "solverBacktracks": 5,
      "solverMaxDepth": 13,
      "canonicalSignature": "6x6;grass,crate,barrier,fence,fence,grass/plaza,grass,tree,grass,crate,water/plaza,grass,grass,road,grass,grass/road,road,road,road,plaza,road/road,road,water,grass,tree,road/road,road,road,road,plaza,road;S:5,0;P:0@5,4|1@3,4|2@2,0;O:3,0>4,0|3,1>4,1;R:5,0>5,1>5,2>5,3>5,4>5,5>4,5>3,5>3,4>3,3>3,2>3,1>3,0>2,0"
    }
  },
  {
    "id": "L012",
    "chapter": 1,
    "title": "雙站練習",
    "rows": 6,
    "columns": 6,
    "difficulty": 1,
    "difficultyScore": 105842,
    "seed": 111964,
    "generatorVersion": 2,
    "terrain": [
      [
        "crate",
        "water",
        "crate",
        "grass",
        "tree",
        "fence"
      ],
      [
        "grass",
        "grass",
        "road",
        "barrier",
        "crate",
        "plaza"
      ],
      [
        "grass",
        "tree",
        "plaza",
        "fence",
        "water",
        "road"
      ],
      [
        "road",
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
        "fence",
        "grass",
        "grass"
      ],
      [
        "road",
        "plaza",
        "road",
        "road",
        "road",
        "road"
      ]
    ],
    "start": [
      5,
      5
    ],
    "stops": [
      {
        "id": "stop-1",
        "order": 0,
        "item": "parcel",
        "label": "包裹",
        "position": [
          5,
          1
        ],
        "houseStyle": "blue"
      },
      {
        "id": "stop-2",
        "order": 1,
        "item": "mouse",
        "label": "玩具老鼠",
        "position": [
          3,
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
          1,
          5
        ],
        "houseStyle": "green"
      }
    ],
    "oneWayEdges": [
      {
        "from": [
          3,
          1
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
          4,
          1
        ]
      },
      {
        "from": [
          3,
          2
        ],
        "to": [
          4,
          2
        ]
      }
    ],
    "solutionPath": [
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
        2,
        5
      ],
      [
        1,
        5
      ]
    ],
    "optimalSteps": 14,
    "optimalSolutionCount": 1,
    "fuelLimit": 20,
    "metrics": {
      "passableCellCount": 19,
      "stopCount": 3,
      "obstacleCount": 17,
      "oneWayEdgeCount": 3,
      "branchCellCount": 2,
      "detourLoopCount": 1,
      "bridgeCount": 0,
      "solverNodes": 21,
      "solverBacktracks": 6,
      "solverMaxDepth": 14,
      "canonicalSignature": "6x6;crate,grass,grass,road,road,road/water,grass,tree,road,road,plaza/crate,road,plaza,plaza,road,road/grass,barrier,fence,road,fence,road/tree,crate,water,road,grass,road/fence,plaza,road,road,grass,road;S:5,5;P:0@1,5|1@2,3|2@5,1;O:0,4>1,4|1,3>1,4|2,3>2,4;R:5,5>4,5>3,5>2,5>1,5>0,5>0,4>0,3>1,3>2,3>3,3>4,3>5,3>5,2>5,1"
    }
  },
  {
    "id": "L013",
    "chapter": 1,
    "title": "晴日配送",
    "rows": 6,
    "columns": 6,
    "difficulty": 1,
    "difficultyScore": 104589,
    "seed": 112961,
    "generatorVersion": 2,
    "terrain": [
      [
        "grass",
        "water",
        "grass",
        "fence",
        "road",
        "road"
      ],
      [
        "barrier",
        "water",
        "barrier",
        "barrier",
        "road",
        "plaza"
      ],
      [
        "water",
        "barrier",
        "grass",
        "road",
        "grass",
        "road"
      ],
      [
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
        "barrier",
        "grass",
        "fence",
        "grass"
      ],
      [
        "road",
        "plaza",
        "road",
        "road",
        "road",
        "road"
      ]
    ],
    "start": [
      5,
      5
    ],
    "stops": [
      {
        "id": "stop-1",
        "order": 0,
        "item": "cat-food",
        "label": "貓罐頭",
        "position": [
          5,
          1
        ],
        "houseStyle": "yellow"
      },
      {
        "id": "stop-2",
        "order": 1,
        "item": "cat-grass",
        "label": "貓草",
        "position": [
          3,
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
          1,
          5
        ],
        "houseStyle": "pink"
      }
    ],
    "oneWayEdges": [],
    "solutionPath": [
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
        2,
        5
      ],
      [
        1,
        5
      ]
    ],
    "optimalSteps": 14,
    "optimalSolutionCount": 1,
    "fuelLimit": 21,
    "metrics": {
      "passableCellCount": 19,
      "stopCount": 3,
      "obstacleCount": 17,
      "oneWayEdgeCount": 0,
      "branchCellCount": 2,
      "detourLoopCount": 1,
      "bridgeCount": 0,
      "solverNodes": 16,
      "solverBacktracks": 1,
      "solverMaxDepth": 14,
      "canonicalSignature": "6x6;grass,barrier,water,road,road,road/water,water,barrier,road,grass,plaza/grass,barrier,grass,plaza,barrier,road/fence,barrier,road,road,grass,road/road,road,grass,road,fence,road/road,plaza,road,road,grass,road;S:5,5;P:0@1,5|1@2,3|2@5,1;O:;R:5,5>4,5>3,5>2,5>1,5>0,5>0,4>0,3>1,3>2,3>3,3>4,3>5,3>5,2>5,1"
    }
  },
  {
    "id": "L014",
    "chapter": 1,
    "title": "鄰里繞行",
    "rows": 6,
    "columns": 6,
    "difficulty": 1,
    "difficultyScore": 104823,
    "seed": 113958,
    "generatorVersion": 2,
    "terrain": [
      [
        "road",
        "road",
        "fence",
        "tree",
        "grass",
        "water"
      ],
      [
        "road",
        "plaza",
        "tree",
        "grass",
        "water",
        "tree"
      ],
      [
        "road",
        "water",
        "water",
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
        "road"
      ],
      [
        "water",
        "grass",
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
        "plaza"
      ]
    ],
    "start": [
      5,
      0
    ],
    "stops": [
      {
        "id": "stop-1",
        "order": 0,
        "item": "yarn",
        "label": "毛線球",
        "position": [
          5,
          5
        ],
        "houseStyle": "green"
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
        "houseStyle": "pink"
      },
      {
        "id": "stop-3",
        "order": 2,
        "item": "milk",
        "label": "鮮奶",
        "position": [
          1,
          1
        ],
        "houseStyle": "blue"
      }
    ],
    "oneWayEdges": [],
    "solutionPath": [
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
        4,
        5
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
    "optimalSteps": 15,
    "optimalSolutionCount": 1,
    "fuelLimit": 23,
    "metrics": {
      "passableCellCount": 20,
      "stopCount": 3,
      "obstacleCount": 16,
      "oneWayEdgeCount": 0,
      "branchCellCount": 2,
      "detourLoopCount": 1,
      "bridgeCount": 0,
      "solverNodes": 19,
      "solverBacktracks": 3,
      "solverMaxDepth": 15,
      "canonicalSignature": "6x6;plaza,road,road,road,road,road/road,grass,grass,grass,grass,water/road,road,road,plaza,road,road/road,crate,road,water,water,road/tree,water,grass,tree,plaza,road/water,grass,tree,fence,road,road;S:0,5;P:0@0,0|1@2,3|2@4,4;O:;R:0,5>0,4>0,3>0,2>0,1>0,0>1,0>2,0>2,1>2,2>2,3>2,4>2,5>3,5>4,5>4,4"
    }
  },
  {
    "id": "L015",
    "chapter": 1,
    "title": "橋前轉彎",
    "rows": 6,
    "columns": 6,
    "difficulty": 1,
    "difficultyScore": 104803,
    "seed": 114955,
    "generatorVersion": 2,
    "terrain": [
      [
        "road",
        "road",
        "road",
        "road",
        "road",
        "plaza"
      ],
      [
        "grass",
        "barrier",
        "grass",
        "crate",
        "barrier",
        "road"
      ],
      [
        "road",
        "road",
        "plaza",
        "road",
        "road",
        "road"
      ],
      [
        "road",
        "barrier",
        "grass",
        "tree",
        "fence",
        "plaza"
      ],
      [
        "road",
        "plaza",
        "plaza",
        "fence",
        "tree",
        "water"
      ],
      [
        "fence",
        "road",
        "road",
        "barrier",
        "barrier",
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
        "item": "mouse",
        "label": "玩具老鼠",
        "position": [
          0,
          5
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
          4,
          1
        ],
        "houseStyle": "yellow"
      }
    ],
    "oneWayEdges": [],
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
        1,
        5
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
      ]
    ],
    "optimalSteps": 15,
    "optimalSolutionCount": 1,
    "fuelLimit": 19,
    "metrics": {
      "passableCellCount": 20,
      "stopCount": 3,
      "obstacleCount": 16,
      "oneWayEdgeCount": 0,
      "branchCellCount": 2,
      "detourLoopCount": 1,
      "bridgeCount": 0,
      "solverNodes": 17,
      "solverBacktracks": 1,
      "solverMaxDepth": 15,
      "canonicalSignature": "6x6;crate,barrier,barrier,road,road,fence/water,tree,fence,plaza,plaza,road/plaza,fence,tree,grass,barrier,road/road,road,road,plaza,road,road/road,barrier,crate,grass,barrier,grass/plaza,road,road,road,road,road;S:5,5;P:0@5,0|1@3,3|2@1,4;O:;R:5,5>5,4>5,3>5,2>5,1>5,0>4,0>3,0>3,1>3,2>3,3>3,4>3,5>2,5>1,5>1,4"
    }
  },
  {
    "id": "L016",
    "chapter": 1,
    "title": "粉屋信件",
    "rows": 6,
    "columns": 6,
    "difficulty": 1,
    "difficultyScore": 106463,
    "seed": 115952,
    "generatorVersion": 2,
    "terrain": [
      [
        "plaza",
        "road",
        "road",
        "road",
        "grass",
        "road"
      ],
      [
        "tree",
        "road",
        "crate",
        "road",
        "crate",
        "road"
      ],
      [
        "grass",
        "plaza",
        "water",
        "plaza",
        "barrier",
        "road"
      ],
      [
        "water",
        "grass",
        "road",
        "road",
        "road",
        "road"
      ],
      [
        "grass",
        "grass",
        "grass",
        "road",
        "road",
        "road"
      ],
      [
        "grass",
        "grass",
        "road",
        "road",
        "road",
        "plaza"
      ]
    ],
    "start": [
      0,
      5
    ],
    "stops": [
      {
        "id": "stop-1",
        "order": 0,
        "item": "cat-grass",
        "label": "貓草",
        "position": [
          5,
          5
        ],
        "houseStyle": "blue"
      },
      {
        "id": "stop-2",
        "order": 1,
        "item": "paw-cookie",
        "label": "貓掌餅乾",
        "position": [
          2,
          3
        ],
        "houseStyle": "yellow"
      },
      {
        "id": "stop-3",
        "order": 2,
        "item": "parcel",
        "label": "包裹",
        "position": [
          2,
          1
        ],
        "houseStyle": "green"
      }
    ],
    "oneWayEdges": [
      {
        "from": [
          3,
          3
        ],
        "to": [
          3,
          4
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
          4,
          3
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
        5,
        4
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
    "optimalSteps": 16,
    "optimalSolutionCount": 1,
    "fuelLimit": 20,
    "metrics": {
      "passableCellCount": 22,
      "stopCount": 3,
      "obstacleCount": 14,
      "oneWayEdgeCount": 3,
      "branchCellCount": 3,
      "detourLoopCount": 1,
      "bridgeCount": 0,
      "solverNodes": 25,
      "solverBacktracks": 8,
      "solverMaxDepth": 16,
      "canonicalSignature": "6x6;grass,grass,road,road,road,plaza/grass,grass,grass,road,road,road/water,grass,road,road,road,road/grass,plaza,water,plaza,barrier,road/tree,road,crate,road,crate,road/plaza,road,road,road,grass,road;S:5,5;P:0@0,5|1@3,3|2@3,1;O:0,4>1,4|1,3>1,4|2,3>2,4;R:5,5>4,5>3,5>2,5>1,5>0,5>0,4>0,3>1,3>2,3>3,3>4,3>5,3>5,2>5,1>4,1>3,1"
    }
  },
  {
    "id": "L017",
    "chapter": 1,
    "title": "奶香早班",
    "rows": 6,
    "columns": 6,
    "difficulty": 1,
    "difficultyScore": 106042,
    "seed": 116949,
    "generatorVersion": 2,
    "terrain": [
      [
        "road",
        "road",
        "road",
        "road",
        "road",
        "grass"
      ],
      [
        "road",
        "road",
        "road",
        "tree",
        "road",
        "road"
      ],
      [
        "road",
        "grass",
        "plaza",
        "water",
        "plaza",
        "barrier"
      ],
      [
        "road",
        "fence",
        "road",
        "crate",
        "road",
        "grass"
      ],
      [
        "road",
        "grass",
        "road",
        "crate",
        "grass",
        "barrier"
      ],
      [
        "plaza",
        "road",
        "road",
        "road",
        "barrier",
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
        "item": "letter",
        "label": "信件",
        "position": [
          5,
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
          2,
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
          2,
          4
        ],
        "houseStyle": "pink"
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
        5,
        1
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
      ]
    ],
    "optimalSteps": 16,
    "optimalSolutionCount": 1,
    "fuelLimit": 23,
    "metrics": {
      "passableCellCount": 22,
      "stopCount": 3,
      "obstacleCount": 14,
      "oneWayEdgeCount": 2,
      "branchCellCount": 3,
      "detourLoopCount": 1,
      "bridgeCount": 0,
      "solverNodes": 23,
      "solverBacktracks": 6,
      "solverMaxDepth": 16,
      "canonicalSignature": "6x6;crate,barrier,grass,barrier,road,grass/barrier,grass,road,plaza,road,road/road,crate,crate,water,tree,road/road,road,road,plaza,road,road/road,grass,fence,grass,road,road/plaza,road,road,road,road,road;S:5,5;P:0@5,0|1@3,3|2@1,3;O:3,4>4,4|3,5>4,5;R:5,5>5,4>5,3>5,2>5,1>5,0>4,0>3,0>3,1>3,2>3,3>3,4>3,5>2,5>1,5>1,4>1,3"
    }
  },
  {
    "id": "L018",
    "chapter": 1,
    "title": "魚乾午班",
    "rows": 6,
    "columns": 6,
    "difficulty": 1,
    "difficultyScore": 106256,
    "seed": 117946,
    "generatorVersion": 2,
    "terrain": [
      [
        "road",
        "tree",
        "road",
        "road",
        "road",
        "barrier"
      ],
      [
        "road",
        "water",
        "plaza",
        "tree",
        "road",
        "road"
      ],
      [
        "road",
        "road",
        "road",
        "barrier",
        "road",
        "grass"
      ],
      [
        "road",
        "road",
        "road",
        "grass",
        "plaza",
        "road"
      ],
      [
        "road",
        "water",
        "road",
        "road",
        "grass",
        "crate"
      ],
      [
        "plaza",
        "road",
        "road",
        "grass",
        "tree",
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
        "item": "flowers",
        "label": "花束",
        "position": [
          5,
          0
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
          2
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
          4
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
        5,
        1
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
      ]
    ],
    "optimalSteps": 17,
    "optimalSolutionCount": 1,
    "fuelLimit": 22,
    "metrics": {
      "passableCellCount": 23,
      "stopCount": 3,
      "obstacleCount": 13,
      "oneWayEdgeCount": 2,
      "branchCellCount": 3,
      "detourLoopCount": 1,
      "bridgeCount": 0,
      "solverNodes": 24,
      "solverBacktracks": 6,
      "solverMaxDepth": 17,
      "canonicalSignature": "6x6;barrier,road,grass,road,crate,water/road,road,road,plaza,grass,tree/road,tree,barrier,grass,road,grass/road,plaza,road,road,road,road/tree,water,road,road,water,road/road,road,road,road,road,plaza;S:5,0;P:0@5,5|1@3,1|2@1,3;O:3,2>4,2|3,3>4,3;R:5,0>5,1>5,2>5,3>5,4>5,5>4,5>3,5>3,4>3,3>3,2>3,1>3,0>2,0>1,0>1,1>1,2>1,3"
    }
  },
  {
    "id": "L019",
    "chapter": 1,
    "title": "包裹晚班",
    "rows": 6,
    "columns": 6,
    "difficulty": 1,
    "difficultyScore": 106667,
    "seed": 118943,
    "generatorVersion": 2,
    "terrain": [
      [
        "grass",
        "road",
        "tree",
        "road",
        "grass",
        "water"
      ],
      [
        "road",
        "road",
        "road",
        "plaza",
        "barrier",
        "grass"
      ],
      [
        "road",
        "grass",
        "tree",
        "grass",
        "road",
        "crate"
      ],
      [
        "road",
        "plaza",
        "road",
        "road",
        "road",
        "road"
      ],
      [
        "grass",
        "grass",
        "tree",
        "road",
        "road",
        "road"
      ],
      [
        "road",
        "road",
        "road",
        "road",
        "road",
        "plaza"
      ]
    ],
    "start": [
      5,
      0
    ],
    "stops": [
      {
        "id": "stop-1",
        "order": 0,
        "item": "paw-cookie",
        "label": "貓掌餅乾",
        "position": [
          5,
          5
        ],
        "houseStyle": "pink"
      },
      {
        "id": "stop-2",
        "order": 1,
        "item": "parcel",
        "label": "包裹",
        "position": [
          3,
          1
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
          3
        ],
        "houseStyle": "yellow"
      }
    ],
    "oneWayEdges": [
      {
        "from": [
          3,
          3
        ],
        "to": [
          4,
          3
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
          4,
          5
        ],
        "to": [
          4,
          4
        ]
      }
    ],
    "solutionPath": [
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
        4,
        5
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
      ]
    ],
    "optimalSteps": 17,
    "optimalSolutionCount": 1,
    "fuelLimit": 25,
    "metrics": {
      "passableCellCount": 23,
      "stopCount": 3,
      "obstacleCount": 13,
      "oneWayEdgeCount": 3,
      "branchCellCount": 3,
      "detourLoopCount": 1,
      "bridgeCount": 0,
      "solverNodes": 25,
      "solverBacktracks": 7,
      "solverMaxDepth": 17,
      "canonicalSignature": "6x6;grass,road,road,road,grass,road/road,road,grass,plaza,grass,road/tree,road,tree,road,tree,road/road,plaza,grass,road,road,road/grass,barrier,road,road,road,road/water,grass,crate,road,road,plaza;S:0,5;P:0@5,5|1@1,3|2@3,1;O:3,3>3,4|4,3>4,4|5,4>4,4;R:0,5>1,5>2,5>3,5>4,5>5,5>5,4>5,3>4,3>3,3>2,3>1,3>0,3>0,2>0,1>1,1>2,1>3,1"
    }
  },
  {
    "id": "L020",
    "chapter": 1,
    "title": "社區全勤",
    "rows": 6,
    "columns": 6,
    "difficulty": 1,
    "difficultyScore": 106480,
    "seed": 119940,
    "generatorVersion": 2,
    "terrain": [
      [
        "road",
        "plaza",
        "road",
        "road",
        "barrier",
        "grass"
      ],
      [
        "road",
        "water",
        "road",
        "grass",
        "plaza",
        "water"
      ],
      [
        "road",
        "tree",
        "road",
        "grass",
        "road",
        "grass"
      ],
      [
        "road",
        "crate",
        "road",
        "barrier",
        "road",
        "road"
      ],
      [
        "road",
        "road",
        "road",
        "grass",
        "road",
        "tree"
      ],
      [
        "road",
        "road",
        "plaza",
        "road",
        "road",
        "plaza"
      ]
    ],
    "start": [
      5,
      0
    ],
    "stops": [
      {
        "id": "stop-1",
        "order": 0,
        "item": "milk",
        "label": "鮮奶",
        "position": [
          0,
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
          1,
          4
        ],
        "houseStyle": "green"
      }
    ],
    "oneWayEdges": [
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
          5,
          2
        ],
        "to": [
          5,
          1
        ]
      }
    ],
    "solutionPath": [
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
        5,
        3
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
    "optimalSteps": 18,
    "optimalSolutionCount": 1,
    "fuelLimit": 26,
    "metrics": {
      "passableCellCount": 24,
      "stopCount": 3,
      "obstacleCount": 12,
      "oneWayEdgeCount": 2,
      "branchCellCount": 3,
      "detourLoopCount": 1,
      "bridgeCount": 0,
      "solverNodes": 26,
      "solverBacktracks": 7,
      "solverMaxDepth": 18,
      "canonicalSignature": "6x6;grass,barrier,road,road,plaza,road/water,plaza,grass,road,water,road/grass,road,grass,road,tree,road/road,road,barrier,road,crate,road/tree,road,grass,road,road,road/plaza,road,road,plaza,road,road;S:5,5;P:0@0,4|1@5,3|2@1,1;O:4,3>4,4|5,3>5,4;R:5,5>4,5>3,5>2,5>1,5>0,5>0,4>0,3>1,3>2,3>3,3>4,3>5,3>5,2>5,1>4,1>3,1>2,1>1,1"
    }
  }
];
});
