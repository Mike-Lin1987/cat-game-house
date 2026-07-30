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
    "difficultyScore": 102522,
    "seed": 100997,
    "generatorVersion": 1,
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
        "tree",
        "crate"
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
    "fuelLimit": 12,
    "metrics": {
      "passableCellCount": 10,
      "stopCount": 2,
      "obstacleCount": 26,
      "oneWayEdgeCount": 0,
      "branchCellCount": 1,
      "bridgeCount": 0,
      "solverNodes": 9,
      "solverBacktracks": 0,
      "solverMaxDepth": 8,
      "canonicalSignature": "6x6;grass,barrier,grass,tree,water,road/grass,tree,grass,fence,grass,road/fence,grass,water,crate,grass,road/tree,crate,fence,road,water,road/fence,tree,tree,plaza,grass,plaza/grass,fence,crate,road,road,road;S:0,5;P:0@4,5|1@4,3;O:;R:0,5>1,5>2,5>3,5>4,5>5,5>5,4>5,3>4,3"
    }
  },
  {
    "id": "L002",
    "chapter": 1,
    "title": "轉角魚乾",
    "rows": 6,
    "columns": 6,
    "difficulty": 1,
    "difficultyScore": 102746,
    "seed": 101994,
    "generatorVersion": 1,
    "terrain": [
      [
        "road",
        "barrier",
        "grass",
        "water",
        "grass",
        "crate"
      ],
      [
        "road",
        "water",
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
    "fuelLimit": 16,
    "metrics": {
      "passableCellCount": 11,
      "stopCount": 2,
      "obstacleCount": 25,
      "oneWayEdgeCount": 0,
      "branchCellCount": 1,
      "bridgeCount": 0,
      "solverNodes": 11,
      "solverBacktracks": 1,
      "solverMaxDepth": 9,
      "canonicalSignature": "6x6;crate,barrier,crate,grass,grass,grass/grass,crate,fence,barrier,barrier,grass/water,grass,crate,grass,tree,road/grass,water,grass,plaza,road,road/barrier,water,grass,grass,crate,road/road,road,road,road,plaza,road;S:5,0;P:0@5,4|1@3,3;O:;R:5,0>5,1>5,2>5,3>5,4>5,5>4,5>3,5>3,4>3,3"
    }
  },
  {
    "id": "L003",
    "chapter": 1,
    "title": "小巷包裹",
    "rows": 6,
    "columns": 6,
    "difficulty": 1,
    "difficultyScore": 102746,
    "seed": 102991,
    "generatorVersion": 1,
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
        "crate",
        "crate"
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
      "passableCellCount": 11,
      "stopCount": 2,
      "obstacleCount": 25,
      "oneWayEdgeCount": 0,
      "branchCellCount": 1,
      "bridgeCount": 0,
      "solverNodes": 11,
      "solverBacktracks": 1,
      "solverMaxDepth": 9,
      "canonicalSignature": "6x6;crate,grass,grass,tree,crate,road/tree,grass,grass,fence,crate,road/water,water,fence,crate,grass,road/grass,grass,grass,plaza,crate,road/water,fence,crate,road,crate,plaza/tree,barrier,road,road,road,road;S:0,5;P:0@4,5|1@3,3;O:;R:0,5>1,5>2,5>3,5>4,5>5,5>5,4>5,3>4,3>3,3"
    }
  },
  {
    "id": "L004",
    "chapter": 1,
    "title": "花園來信",
    "rows": 6,
    "columns": 6,
    "difficulty": 1,
    "difficultyScore": 102960,
    "seed": 103988,
    "generatorVersion": 1,
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
        "grass",
        "grass",
        "grass",
        "tree",
        "barrier"
      ],
      [
        "road",
        "grass",
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
      "passableCellCount": 12,
      "stopCount": 2,
      "obstacleCount": 24,
      "oneWayEdgeCount": 0,
      "branchCellCount": 1,
      "bridgeCount": 0,
      "solverNodes": 12,
      "solverBacktracks": 1,
      "solverMaxDepth": 10,
      "canonicalSignature": "6x6;grass,barrier,grass,crate,grass,grass/crate,tree,water,grass,grass,water/grass,grass,grass,plaza,grass,grass/crate,grass,plaza,road,road,road/grass,grass,grass,grass,grass,road/road,road,road,road,road,plaza;S:5,0;P:0@5,5|1@3,2;O:;R:5,0>5,1>5,2>5,3>5,4>5,5>4,5>3,5>3,4>3,3>3,2"
    }
  },
  {
    "id": "L005",
    "chapter": 1,
    "title": "餅乾小路",
    "rows": 6,
    "columns": 6,
    "difficulty": 1,
    "difficultyScore": 102960,
    "seed": 104985,
    "generatorVersion": 1,
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
        "fence",
        "crate",
        "grass"
      ],
      [
        "road",
        "grass",
        "road",
        "fence",
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
    "fuelLimit": 14,
    "metrics": {
      "passableCellCount": 12,
      "stopCount": 2,
      "obstacleCount": 24,
      "oneWayEdgeCount": 0,
      "branchCellCount": 1,
      "bridgeCount": 0,
      "solverNodes": 12,
      "solverBacktracks": 1,
      "solverMaxDepth": 10,
      "canonicalSignature": "6x6;crate,grass,grass,barrier,barrier,grass/grass,tree,crate,grass,fence,crate/grass,fence,fence,fence,grass,water/road,road,road,plaza,fence,tree/road,grass,fence,grass,road,tree/plaza,road,road,road,road,road;S:5,5;P:0@5,0|1@3,3;O:;R:5,5>5,4>5,3>5,2>5,1>5,0>4,0>3,0>3,1>3,2>3,3"
    }
  },
  {
    "id": "L006",
    "chapter": 1,
    "title": "藍屋毛線",
    "rows": 6,
    "columns": 6,
    "difficulty": 1,
    "difficultyScore": 103347,
    "seed": 105982,
    "generatorVersion": 1,
    "terrain": [
      [
        "plaza",
        "road",
        "road",
        "tree",
        "crate",
        "crate"
      ],
      [
        "road",
        "barrier",
        "road",
        "grass",
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
      "passableCellCount": 14,
      "stopCount": 2,
      "obstacleCount": 22,
      "oneWayEdgeCount": 0,
      "branchCellCount": 2,
      "bridgeCount": 0,
      "solverNodes": 13,
      "solverBacktracks": 1,
      "solverMaxDepth": 11,
      "canonicalSignature": "6x6;crate,crate,tree,road,road,plaza/tree,grass,grass,road,barrier,road/grass,fence,grass,road,water,road/barrier,barrier,road,road,water,road/fence,grass,grass,plaza,grass,road/grass,crate,grass,road,water,road;S:5,5;P:0@0,5|1@4,3;O:;R:5,5>4,5>3,5>2,5>1,5>0,5>0,4>0,3>1,3>2,3>3,3>4,3"
    }
  },
  {
    "id": "L007",
    "chapter": 1,
    "title": "午後罐頭",
    "rows": 6,
    "columns": 6,
    "difficulty": 1,
    "difficultyScore": 103347,
    "seed": 106979,
    "generatorVersion": 1,
    "terrain": [
      [
        "grass",
        "crate",
        "crate",
        "crate",
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
      "passableCellCount": 14,
      "stopCount": 2,
      "obstacleCount": 22,
      "oneWayEdgeCount": 0,
      "branchCellCount": 2,
      "bridgeCount": 0,
      "solverNodes": 13,
      "solverBacktracks": 1,
      "solverMaxDepth": 11,
      "canonicalSignature": "6x6;fence,grass,crate,grass,barrier,grass/grass,grass,tree,grass,grass,crate/crate,road,fence,tree,road,crate/road,road,road,road,plaza,crate/road,grass,water,grass,water,fence/plaza,road,road,road,road,road;S:5,5;P:0@5,0|1@3,4;O:;R:5,5>5,4>5,3>5,2>5,1>5,0>4,0>3,0>3,1>3,2>3,3>3,4"
    }
  },
  {
    "id": "L008",
    "chapter": 1,
    "title": "樹下花束",
    "rows": 6,
    "columns": 6,
    "difficulty": 1,
    "difficultyScore": 103571,
    "seed": 107976,
    "generatorVersion": 1,
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
        "barrier",
        "grass"
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
      "passableCellCount": 15,
      "stopCount": 2,
      "obstacleCount": 21,
      "oneWayEdgeCount": 0,
      "branchCellCount": 2,
      "bridgeCount": 0,
      "solverNodes": 15,
      "solverBacktracks": 2,
      "solverMaxDepth": 12,
      "canonicalSignature": "6x6;barrier,tree,road,road,plaza,road/water,tree,grass,road,grass,road/grass,fence,road,road,water,road/grass,crate,crate,road,grass,road/water,water,barrier,road,grass,road/fence,grass,grass,plaza,fence,road;S:5,5;P:0@0,4|1@5,3;O:;R:5,5>4,5>3,5>2,5>1,5>0,5>0,4>0,3>1,3>2,3>3,3>4,3>5,3"
    }
  },
  {
    "id": "L009",
    "chapter": 1,
    "title": "廣場玩鼠",
    "rows": 6,
    "columns": 6,
    "difficulty": 1,
    "difficultyScore": 103571,
    "seed": 108973,
    "generatorVersion": 1,
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
        "fence",
        "road",
        "road",
        "grass",
        "crate"
      ],
      [
        "road",
        "grass",
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
      ],
      [
        5,
        2
      ]
    ],
    "optimalSteps": 12,
    "optimalSolutionCount": 1,
    "fuelLimit": 17,
    "metrics": {
      "passableCellCount": 15,
      "stopCount": 2,
      "obstacleCount": 21,
      "oneWayEdgeCount": 0,
      "branchCellCount": 2,
      "bridgeCount": 0,
      "solverNodes": 15,
      "solverBacktracks": 2,
      "solverMaxDepth": 12,
      "canonicalSignature": "6x6;grass,crate,fence,fence,grass,water/grass,grass,fence,water,fence,tree/grass,road,crate,water,crate,road/plaza,road,road,road,road,road/grass,fence,water,tree,grass,plaza/road,road,road,road,road,road;S:5,0;P:0@4,5|1@3,0;O:;R:5,0>5,1>5,2>5,3>5,4>5,5>4,5>3,5>3,4>3,3>3,2>3,1>3,0"
    }
  },
  {
    "id": "L010",
    "chapter": 1,
    "title": "貓草專送",
    "rows": 6,
    "columns": 6,
    "difficulty": 1,
    "difficultyScore": 103775,
    "seed": 109970,
    "generatorVersion": 1,
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
        "tree",
        "road",
        "grass",
        "grass",
        "fence"
      ],
      [
        "road",
        "grass",
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
    "fuelLimit": 17,
    "metrics": {
      "passableCellCount": 16,
      "stopCount": 2,
      "obstacleCount": 20,
      "oneWayEdgeCount": 0,
      "branchCellCount": 2,
      "bridgeCount": 0,
      "solverNodes": 15,
      "solverBacktracks": 1,
      "solverMaxDepth": 13,
      "canonicalSignature": "6x6;barrier,fence,fence,grass,water,crate/road,grass,grass,tree,tree,barrier/plaza,grass,tree,road,grass,crate/road,road,road,road,road,road/grass,tree,grass,grass,tree,plaza/road,road,road,road,road,road;S:5,0;P:0@4,5|1@2,0;O:;R:5,0>5,1>5,2>5,3>5,4>5,5>4,5>3,5>3,4>3,3>3,2>3,1>3,0>2,0"
    }
  },
  {
    "id": "L011",
    "chapter": 1,
    "title": "木箱旁路",
    "rows": 6,
    "columns": 6,
    "difficulty": 1,
    "difficultyScore": 104092,
    "seed": 110967,
    "generatorVersion": 1,
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
        "grass",
        "road"
      ],
      [
        "grass",
        "plaza",
        "plaza",
        "road",
        "barrier",
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
    "oneWayEdges": [],
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
    "fuelLimit": 17,
    "metrics": {
      "passableCellCount": 16,
      "stopCount": 3,
      "obstacleCount": 20,
      "oneWayEdgeCount": 0,
      "branchCellCount": 2,
      "bridgeCount": 0,
      "solverNodes": 15,
      "solverBacktracks": 1,
      "solverMaxDepth": 13,
      "canonicalSignature": "6x6;grass,crate,barrier,fence,fence,grass/plaza,grass,tree,grass,crate,water/plaza,grass,grass,road,grass,grass/road,road,road,road,plaza,road/barrier,grass,water,grass,tree,road/road,road,road,road,plaza,road;S:5,0;P:0@5,4|1@3,4|2@2,0;O:;R:5,0>5,1>5,2>5,3>5,4>5,5>4,5>3,5>3,4>3,3>3,2>3,1>3,0>2,0"
    }
  },
  {
    "id": "L012",
    "chapter": 1,
    "title": "雙站練習",
    "rows": 6,
    "columns": 6,
    "difficulty": 1,
    "difficultyScore": 104306,
    "seed": 111964,
    "generatorVersion": 1,
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
        "grass",
        "grass",
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
      "passableCellCount": 17,
      "stopCount": 3,
      "obstacleCount": 19,
      "oneWayEdgeCount": 0,
      "branchCellCount": 2,
      "bridgeCount": 0,
      "solverNodes": 16,
      "solverBacktracks": 1,
      "solverMaxDepth": 14,
      "canonicalSignature": "6x6;crate,grass,grass,road,road,road/water,grass,tree,road,grass,plaza/crate,road,plaza,plaza,grass,road/grass,barrier,fence,road,fence,road/tree,crate,water,road,grass,road/fence,plaza,road,road,grass,road;S:5,5;P:0@1,5|1@2,3|2@5,1;O:;R:5,5>4,5>3,5>2,5>1,5>0,5>0,4>0,3>1,3>2,3>3,3>4,3>5,3>5,2>5,1"
    }
  },
  {
    "id": "L013",
    "chapter": 1,
    "title": "晴日配送",
    "rows": 6,
    "columns": 6,
    "difficulty": 1,
    "difficultyScore": 104306,
    "seed": 112961,
    "generatorVersion": 1,
    "terrain": [
      [
        "grass",
        "water",
        "grass",
        "fence",
        "grass",
        "barrier"
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
    "fuelLimit": 20,
    "metrics": {
      "passableCellCount": 17,
      "stopCount": 3,
      "obstacleCount": 19,
      "oneWayEdgeCount": 0,
      "branchCellCount": 2,
      "bridgeCount": 0,
      "solverNodes": 16,
      "solverBacktracks": 1,
      "solverMaxDepth": 14,
      "canonicalSignature": "6x6;barrier,grass,fence,grass,water,grass/plaza,road,barrier,barrier,water,barrier/road,grass,road,grass,barrier,water/road,road,road,plaza,road,road/grass,fence,grass,barrier,grass,road/road,road,road,road,plaza,road;S:5,0;P:0@5,4|1@3,3|2@1,0;O:;R:5,0>5,1>5,2>5,3>5,4>5,5>4,5>3,5>3,4>3,3>3,2>3,1>3,0>2,0>1,0"
    }
  },
  {
    "id": "L014",
    "chapter": 1,
    "title": "鄰里繞行",
    "rows": 6,
    "columns": 6,
    "difficulty": 1,
    "difficultyScore": 104530,
    "seed": 113958,
    "generatorVersion": 1,
    "terrain": [
      [
        "water",
        "grass",
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
      "passableCellCount": 18,
      "stopCount": 3,
      "obstacleCount": 18,
      "oneWayEdgeCount": 0,
      "branchCellCount": 2,
      "bridgeCount": 0,
      "solverNodes": 18,
      "solverBacktracks": 2,
      "solverMaxDepth": 15,
      "canonicalSignature": "6x6;plaza,road,road,road,road,road/road,grass,grass,grass,grass,water/road,road,road,plaza,road,road/road,crate,road,water,water,road/tree,water,grass,tree,plaza,road/water,grass,tree,fence,grass,water;S:0,5;P:0@0,0|1@2,3|2@4,4;O:;R:0,5>0,4>0,3>0,2>0,1>0,0>1,0>2,0>2,1>2,2>2,3>2,4>2,5>3,5>4,5>4,4"
    }
  },
  {
    "id": "L015",
    "chapter": 1,
    "title": "橋前轉彎",
    "rows": 6,
    "columns": 6,
    "difficulty": 1,
    "difficultyScore": 104520,
    "seed": 114955,
    "generatorVersion": 1,
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
        "grass",
        "grass",
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
    "fuelLimit": 21,
    "metrics": {
      "passableCellCount": 18,
      "stopCount": 3,
      "obstacleCount": 18,
      "oneWayEdgeCount": 0,
      "branchCellCount": 2,
      "bridgeCount": 0,
      "solverNodes": 17,
      "solverBacktracks": 1,
      "solverMaxDepth": 15,
      "canonicalSignature": "6x6;crate,barrier,barrier,grass,grass,fence/water,tree,fence,plaza,plaza,road/plaza,fence,tree,grass,barrier,road/road,road,road,plaza,road,road/road,barrier,crate,grass,barrier,grass/plaza,road,road,road,road,road;S:5,5;P:0@5,0|1@3,3|2@1,4;O:;R:5,5>5,4>5,3>5,2>5,1>5,0>4,0>3,0>3,1>3,2>3,3>3,4>3,5>2,5>1,5>1,4"
    }
  },
  {
    "id": "L016",
    "chapter": 1,
    "title": "粉屋信件",
    "rows": 6,
    "columns": 6,
    "difficulty": 1,
    "difficultyScore": 104927,
    "seed": 115952,
    "generatorVersion": 1,
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
        "barrier",
        "road"
      ],
      [
        "grass",
        "grass",
        "grass",
        "road",
        "crate",
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
    "fuelLimit": 24,
    "metrics": {
      "passableCellCount": 20,
      "stopCount": 3,
      "obstacleCount": 16,
      "oneWayEdgeCount": 0,
      "branchCellCount": 3,
      "bridgeCount": 0,
      "solverNodes": 20,
      "solverBacktracks": 3,
      "solverMaxDepth": 16,
      "canonicalSignature": "6x6;grass,grass,road,road,road,plaza/grass,grass,grass,road,crate,road/water,grass,road,road,barrier,road/grass,plaza,water,plaza,barrier,road/tree,road,crate,road,crate,road/plaza,road,road,road,grass,road;S:5,5;P:0@0,5|1@3,3|2@3,1;O:;R:5,5>4,5>3,5>2,5>1,5>0,5>0,4>0,3>1,3>2,3>3,3>4,3>5,3>5,2>5,1>4,1>3,1"
    }
  },
  {
    "id": "L017",
    "chapter": 1,
    "title": "奶香早班",
    "rows": 6,
    "columns": 6,
    "difficulty": 1,
    "difficultyScore": 104917,
    "seed": 116949,
    "generatorVersion": 1,
    "terrain": [
      [
        "road",
        "tree",
        "road",
        "road",
        "road",
        "grass"
      ],
      [
        "road",
        "crate",
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
    "fuelLimit": 24,
    "metrics": {
      "passableCellCount": 20,
      "stopCount": 3,
      "obstacleCount": 16,
      "oneWayEdgeCount": 0,
      "branchCellCount": 3,
      "bridgeCount": 0,
      "solverNodes": 19,
      "solverBacktracks": 2,
      "solverMaxDepth": 16,
      "canonicalSignature": "6x6;crate,barrier,grass,barrier,road,grass/barrier,grass,road,plaza,road,road/road,crate,crate,water,tree,road/road,road,road,plaza,road,road/road,grass,fence,grass,crate,tree/plaza,road,road,road,road,road;S:5,5;P:0@5,0|1@3,3|2@1,3;O:;R:5,5>5,4>5,3>5,2>5,1>5,0>4,0>3,0>3,1>3,2>3,3>3,4>3,5>2,5>1,5>1,4>1,3"
    }
  },
  {
    "id": "L018",
    "chapter": 1,
    "title": "魚乾午班",
    "rows": 6,
    "columns": 6,
    "difficulty": 1,
    "difficultyScore": 105131,
    "seed": 117946,
    "generatorVersion": 1,
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
        "fence",
        "road",
        "barrier",
        "road",
        "grass"
      ],
      [
        "road",
        "grass",
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
    "fuelLimit": 21,
    "metrics": {
      "passableCellCount": 21,
      "stopCount": 3,
      "obstacleCount": 15,
      "oneWayEdgeCount": 0,
      "branchCellCount": 3,
      "bridgeCount": 0,
      "solverNodes": 20,
      "solverBacktracks": 2,
      "solverMaxDepth": 17,
      "canonicalSignature": "6x6;barrier,road,grass,road,crate,water/road,road,road,plaza,grass,tree/road,tree,barrier,grass,road,grass/road,plaza,road,road,road,road/tree,water,fence,grass,water,road/road,road,road,road,road,plaza;S:5,0;P:0@5,5|1@3,1|2@1,3;O:;R:5,0>5,1>5,2>5,3>5,4>5,5>4,5>3,5>3,4>3,3>3,2>3,1>3,0>2,0>1,0>1,1>1,2>1,3"
    }
  },
  {
    "id": "L019",
    "chapter": 1,
    "title": "包裹晚班",
    "rows": 6,
    "columns": 6,
    "difficulty": 1,
    "difficultyScore": 105131,
    "seed": 118943,
    "generatorVersion": 1,
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
        "fence",
        "crate",
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
    "fuelLimit": 22,
    "metrics": {
      "passableCellCount": 21,
      "stopCount": 3,
      "obstacleCount": 15,
      "oneWayEdgeCount": 0,
      "branchCellCount": 3,
      "bridgeCount": 0,
      "solverNodes": 20,
      "solverBacktracks": 2,
      "solverMaxDepth": 17,
      "canonicalSignature": "6x6;grass,road,road,road,grass,road/road,road,grass,plaza,grass,road/tree,road,tree,road,tree,road/road,plaza,grass,road,fence,road/grass,barrier,road,road,crate,road/water,grass,crate,road,road,plaza;S:0,5;P:0@5,5|1@1,3|2@3,1;O:;R:0,5>1,5>2,5>3,5>4,5>5,5>5,4>5,3>4,3>3,3>2,3>1,3>0,3>0,2>0,1>1,1>2,1>3,1"
    }
  },
  {
    "id": "L020",
    "chapter": 1,
    "title": "社區全勤",
    "rows": 6,
    "columns": 6,
    "difficulty": 1,
    "difficultyScore": 105355,
    "seed": 119940,
    "generatorVersion": 1,
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
        "grass",
        "road",
        "grass",
        "road",
        "tree"
      ],
      [
        "road",
        "barrier",
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
    "fuelLimit": 22,
    "metrics": {
      "passableCellCount": 22,
      "stopCount": 3,
      "obstacleCount": 14,
      "oneWayEdgeCount": 0,
      "branchCellCount": 3,
      "bridgeCount": 0,
      "solverNodes": 22,
      "solverBacktracks": 3,
      "solverMaxDepth": 18,
      "canonicalSignature": "6x6;grass,barrier,road,road,plaza,road/water,plaza,grass,road,water,road/grass,road,grass,road,tree,road/road,road,barrier,road,crate,road/tree,road,grass,road,grass,road/plaza,road,road,plaza,barrier,road;S:5,5;P:0@0,4|1@5,3|2@1,1;O:;R:5,5>4,5>3,5>2,5>1,5>0,5>0,4>0,3>1,3>2,3>3,3>4,3>5,3>5,2>5,1>4,1>3,1>2,1>1,1"
    }
  }
];
});
