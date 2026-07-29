(function (root, factory) {
  const levels = factory();
  if (typeof module === 'object' && module.exports) module.exports = levels;
  else root.CAT_STORAGE_LEVELS_061_080 = levels;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  return Object.freeze([
  {
    "id": "L061",
    "chapter": 4,
    "chapterTitle": "搬家挑戰",
    "title": "搬家挑戰 1",
    "rows": 7,
    "columns": 7,
    "difficulty": 4,
    "difficultyScore": 516,
    "seed": 400287,
    "generatorVersion": 1,
    "parMoves": 15,
    "moveLimit": 22,
    "fillableCells": [
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
    "blockedCells": [
      [
        0,
        6
      ],
      [
        6,
        0
      ],
      [
        6,
        6
      ]
    ],
    "fixedItems": [
      {
        "id": "fixed-1",
        "type": "sleeping-cat",
        "label": "睡覺中的貓咪",
        "cells": [
          [
            1,
            6
          ]
        ]
      },
      {
        "id": "fixed-2",
        "type": "yarn",
        "label": "毛線球",
        "cells": [
          [
            0,
            0
          ]
        ]
      },
      {
        "id": "fixed-3",
        "type": "cardboard",
        "label": "紙箱隔板",
        "cells": [
          [
            0,
            1
          ]
        ]
      }
    ],
    "pieces": [
      {
        "id": "piece-01",
        "label": "貓掌餅乾",
        "theme": "paw-cookie",
        "cells": [
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
        "initialRotation": 2,
        "initialFlipped": false,
        "allowRotate": true,
        "allowFlip": false,
        "equivalenceGroup": null
      },
      {
        "id": "piece-02",
        "label": "貓抓板",
        "theme": "scratcher",
        "cells": [
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
          ]
        ],
        "initialRotation": 0,
        "initialFlipped": false,
        "allowRotate": true,
        "allowFlip": false,
        "equivalenceGroup": null
      },
      {
        "id": "piece-03",
        "label": "睡墊",
        "theme": "sleep-mat",
        "cells": [
          [
            0,
            0
          ],
          [
            0,
            1
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
        "initialRotation": 0,
        "initialFlipped": false,
        "allowRotate": false,
        "allowFlip": false,
        "equivalenceGroup": null
      },
      {
        "id": "piece-04",
        "label": "小魚玩具",
        "theme": "fish-toy",
        "cells": [
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
            1,
            3
          ],
          [
            1,
            4
          ],
          [
            2,
            3
          ]
        ],
        "initialRotation": 0,
        "initialFlipped": false,
        "allowRotate": false,
        "allowFlip": false,
        "equivalenceGroup": null
      },
      {
        "id": "piece-05",
        "label": "紙箱",
        "theme": "cardboard",
        "cells": [
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
          ]
        ],
        "initialRotation": 0,
        "initialFlipped": true,
        "allowRotate": true,
        "allowFlip": true,
        "equivalenceGroup": null
      },
      {
        "id": "piece-06",
        "label": "草墊",
        "theme": "grass-mat",
        "cells": [
          [
            0,
            0
          ],
          [
            1,
            0
          ]
        ],
        "initialRotation": 2,
        "initialFlipped": false,
        "allowRotate": true,
        "allowFlip": false,
        "equivalenceGroup": null
      },
      {
        "id": "piece-07",
        "label": "逗貓棒",
        "theme": "teaser",
        "cells": [
          [
            0,
            0
          ],
          [
            0,
            1
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
            3,
            2
          ]
        ],
        "initialRotation": 0,
        "initialFlipped": false,
        "allowRotate": false,
        "allowFlip": true,
        "equivalenceGroup": null
      },
      {
        "id": "piece-08",
        "label": "貓咪靠枕",
        "theme": "cat-pillow",
        "cells": [
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
          ]
        ],
        "initialRotation": 0,
        "initialFlipped": false,
        "allowRotate": false,
        "allowFlip": false,
        "equivalenceGroup": null
      },
      {
        "id": "piece-09",
        "label": "魚乾",
        "theme": "dried-fish",
        "cells": [
          [
            0,
            1
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
            2,
            2
          ]
        ],
        "initialRotation": 3,
        "initialFlipped": false,
        "allowRotate": true,
        "allowFlip": false,
        "equivalenceGroup": null
      }
    ],
    "solution": {
      "piece-01": {
        "row": 0,
        "column": 2,
        "rotation": 0,
        "flipped": false
      },
      "piece-02": {
        "row": 6,
        "column": 1,
        "rotation": 0,
        "flipped": false
      },
      "piece-03": {
        "row": 4,
        "column": 0,
        "rotation": 0,
        "flipped": false
      },
      "piece-04": {
        "row": 2,
        "column": 1,
        "rotation": 0,
        "flipped": false
      },
      "piece-05": {
        "row": 2,
        "column": 4,
        "rotation": 0,
        "flipped": false
      },
      "piece-06": {
        "row": 4,
        "column": 6,
        "rotation": 0,
        "flipped": false
      },
      "piece-07": {
        "row": 1,
        "column": 0,
        "rotation": 0,
        "flipped": false
      },
      "piece-08": {
        "row": 4,
        "column": 5,
        "rotation": 0,
        "flipped": false
      },
      "piece-09": {
        "row": 4,
        "column": 2,
        "rotation": 0,
        "flipped": false
      }
    },
    "metrics": {
      "fillableCellCount": 43,
      "pieceCount": 9,
      "blockedCellCount": 3,
      "fixedItemCount": 3,
      "allowFlipPieceCount": 2,
      "irregularPieceCount": 4,
      "solutionCount": 1,
      "solverNodes": 317,
      "solverBacktracks": 307,
      "solverMaxDepth": 9,
      "solverCandidateCount": 560
    },
    "canonicalSignature": "7x7#0,1;0,2;0,3;0,4;0,5;1,0;1,1;1,2;1,3;1,4;1,5;1,6;2,0;2,1;2,2;2,3;2,4;2,5;2,6;3,0;3,1;3,2;3,3;3,4;3,5;3,6;4,0;4,1;4,2;4,3;4,4;4,5;4,6;5,0;5,1;5,2;5,3;5,4;5,5;6,2;6,3;6,4;6,5#0,0;0,6;6,6#5,6;6,0;6,1#0,1;0,2;0,3|0,4;1,2;1,3;1,4;2,3|0,5;1,5;2,5|1,0;1,1;2,0;2,1|1,6;2,6|2,2;3,0;3,1;3,2;4,0;5,0;5,1|2,4;3,3;3,4;3,5;4,1;4,2;4,3|3,6;4,4;4,5;4,6|5,2;5,3;5,4;5,5;6,2;6,3;6,4;6,5#2:0,3:0,3:0,4:0,4:1,5:0,7:0,7:1,8:0"
  },
  {
    "id": "L062",
    "chapter": 4,
    "chapterTitle": "搬家挑戰",
    "title": "搬家挑戰 2",
    "rows": 7,
    "columns": 7,
    "difficulty": 4,
    "difficultyScore": 544,
    "seed": 416887,
    "generatorVersion": 1,
    "parMoves": 15,
    "moveLimit": 23,
    "fillableCells": [
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
      ]
    ],
    "blockedCells": [
      [
        0,
        0
      ],
      [
        0,
        1
      ],
      [
        6,
        0
      ]
    ],
    "fixedItems": [
      {
        "id": "fixed-1",
        "type": "sleeping-cat",
        "label": "睡覺中的貓咪",
        "cells": [
          [
            0,
            6
          ]
        ]
      },
      {
        "id": "fixed-2",
        "type": "yarn",
        "label": "毛線球",
        "cells": [
          [
            6,
            6
          ]
        ]
      },
      {
        "id": "fixed-3",
        "type": "cardboard",
        "label": "紙箱隔板",
        "cells": [
          [
            6,
            5
          ]
        ]
      }
    ],
    "pieces": [
      {
        "id": "piece-01",
        "label": "紙箱",
        "theme": "cardboard",
        "cells": [
          [
            0,
            0
          ],
          [
            0,
            1
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
        "initialRotation": 0,
        "initialFlipped": false,
        "allowRotate": false,
        "allowFlip": false,
        "equivalenceGroup": null
      },
      {
        "id": "piece-02",
        "label": "草墊",
        "theme": "grass-mat",
        "cells": [
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
            0
          ],
          [
            1,
            1
          ],
          [
            2,
            0
          ]
        ],
        "initialRotation": 1,
        "initialFlipped": false,
        "allowRotate": true,
        "allowFlip": true,
        "equivalenceGroup": null
      },
      {
        "id": "piece-03",
        "label": "逗貓棒",
        "theme": "teaser",
        "cells": [
          [
            0,
            1
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
            2,
            0
          ]
        ],
        "initialRotation": 1,
        "initialFlipped": false,
        "allowRotate": true,
        "allowFlip": false,
        "equivalenceGroup": null
      },
      {
        "id": "piece-04",
        "label": "貓咪靠枕",
        "theme": "cat-pillow",
        "cells": [
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
            0
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
        "initialRotation": 0,
        "initialFlipped": false,
        "allowRotate": true,
        "allowFlip": false,
        "equivalenceGroup": null
      },
      {
        "id": "piece-05",
        "label": "魚乾",
        "theme": "dried-fish",
        "cells": [
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
            1,
            3
          ],
          [
            2,
            3
          ]
        ],
        "initialRotation": 0,
        "initialFlipped": false,
        "allowRotate": false,
        "allowFlip": false,
        "equivalenceGroup": null
      },
      {
        "id": "piece-06",
        "label": "貓罐頭",
        "theme": "cat-can",
        "cells": [
          [
            0,
            2
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
            2,
            2
          ]
        ],
        "initialRotation": 0,
        "initialFlipped": false,
        "allowRotate": false,
        "allowFlip": false,
        "equivalenceGroup": null
      },
      {
        "id": "piece-07",
        "label": "毛線球",
        "theme": "yarn",
        "cells": [
          [
            0,
            0
          ],
          [
            1,
            0
          ]
        ],
        "initialRotation": 0,
        "initialFlipped": false,
        "allowRotate": false,
        "allowFlip": false,
        "equivalenceGroup": null
      },
      {
        "id": "piece-08",
        "label": "鮮奶盒",
        "theme": "milk",
        "cells": [
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
            0
          ],
          [
            2,
            1
          ]
        ],
        "initialRotation": 0,
        "initialFlipped": false,
        "allowRotate": false,
        "allowFlip": false,
        "equivalenceGroup": null
      },
      {
        "id": "piece-09",
        "label": "貓掌餅乾",
        "theme": "paw-cookie",
        "cells": [
          [
            0,
            0
          ],
          [
            0,
            2
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
        "initialRotation": 0,
        "initialFlipped": false,
        "allowRotate": false,
        "allowFlip": true,
        "equivalenceGroup": null
      }
    ],
    "solution": {
      "piece-01": {
        "row": 0,
        "column": 4,
        "rotation": 0,
        "flipped": false
      },
      "piece-02": {
        "row": 3,
        "column": 0,
        "rotation": 0,
        "flipped": false
      },
      "piece-03": {
        "row": 0,
        "column": 1,
        "rotation": 0,
        "flipped": false
      },
      "piece-04": {
        "row": 4,
        "column": 2,
        "rotation": 0,
        "flipped": false
      },
      "piece-05": {
        "row": 3,
        "column": 3,
        "rotation": 0,
        "flipped": false
      },
      "piece-06": {
        "row": 1,
        "column": 4,
        "rotation": 0,
        "flipped": false
      },
      "piece-07": {
        "row": 1,
        "column": 0,
        "rotation": 0,
        "flipped": false
      },
      "piece-08": {
        "row": 0,
        "column": 2,
        "rotation": 0,
        "flipped": false
      },
      "piece-09": {
        "row": 5,
        "column": 1,
        "rotation": 0,
        "flipped": false
      }
    },
    "metrics": {
      "fillableCellCount": 43,
      "pieceCount": 9,
      "blockedCellCount": 3,
      "fixedItemCount": 3,
      "allowFlipPieceCount": 2,
      "irregularPieceCount": 7,
      "solutionCount": 1,
      "solverNodes": 431,
      "solverBacktracks": 421,
      "solverMaxDepth": 9,
      "solverCandidateCount": 377
    },
    "canonicalSignature": "7x7#0,1;0,2;0,3;0,4;0,5;1,0;1,1;1,2;1,3;1,4;1,5;2,0;2,1;2,2;2,3;2,4;2,5;2,6;3,0;3,1;3,2;3,3;3,4;3,5;3,6;4,0;4,1;4,2;4,3;4,4;4,5;4,6;5,1;5,2;5,3;5,4;5,5;5,6;6,1;6,2;6,3;6,4;6,5#0,0;0,6;1,6#5,0;6,0;6,6#0,1;0,2;0,3;1,2;1,3;2,3|0,4;0,5|1,0;1,1;2,0;3,0;3,1;4,0|1,4;1,5;2,5;2,6|2,1;2,2;3,2;4,1;4,2;5,1|2,4;3,4;3,5;3,6|3,3;4,3;5,2;5,3;6,1;6,2|4,4;5,4;6,3;6,4;6,5|4,5;4,6;5,5;5,6#2:0,4:0,4:0,4:0,5:0,6:0,6:0,6:1,6:1"
  },
  {
    "id": "L063",
    "chapter": 4,
    "chapterTitle": "搬家挑戰",
    "title": "搬家挑戰 3",
    "rows": 7,
    "columns": 7,
    "difficulty": 4,
    "difficultyScore": 545,
    "seed": 402497,
    "generatorVersion": 1,
    "parMoves": 16,
    "moveLimit": 24,
    "fillableCells": [
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
    "blockedCells": [
      [
        0,
        0
      ],
      [
        0,
        6
      ],
      [
        1,
        0
      ]
    ],
    "fixedItems": [
      {
        "id": "fixed-1",
        "type": "sleeping-cat",
        "label": "睡覺中的貓咪",
        "cells": [
          [
            6,
            0
          ]
        ]
      },
      {
        "id": "fixed-2",
        "type": "yarn",
        "label": "毛線球",
        "cells": [
          [
            6,
            6
          ]
        ]
      }
    ],
    "pieces": [
      {
        "id": "piece-01",
        "label": "睡墊",
        "theme": "sleep-mat",
        "cells": [
          [
            0,
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
            2,
            0
          ]
        ],
        "initialRotation": 0,
        "initialFlipped": false,
        "allowRotate": false,
        "allowFlip": true,
        "equivalenceGroup": null
      },
      {
        "id": "piece-02",
        "label": "小魚玩具",
        "theme": "fish-toy",
        "cells": [
          [
            0,
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
        "initialRotation": 0,
        "initialFlipped": false,
        "allowRotate": false,
        "allowFlip": false,
        "equivalenceGroup": null
      },
      {
        "id": "piece-03",
        "label": "紙箱",
        "theme": "cardboard",
        "cells": [
          [
            0,
            0
          ],
          [
            0,
            1
          ],
          [
            1,
            0
          ],
          [
            2,
            0
          ]
        ],
        "initialRotation": 3,
        "initialFlipped": false,
        "allowRotate": true,
        "allowFlip": false,
        "equivalenceGroup": null
      },
      {
        "id": "piece-04",
        "label": "草墊",
        "theme": "grass-mat",
        "cells": [
          [
            0,
            1
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
            2,
            0
          ],
          [
            2,
            1
          ],
          [
            3,
            1
          ]
        ],
        "initialRotation": 1,
        "initialFlipped": false,
        "allowRotate": true,
        "allowFlip": false,
        "equivalenceGroup": null
      },
      {
        "id": "piece-05",
        "label": "逗貓棒",
        "theme": "teaser",
        "cells": [
          [
            0,
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
            2,
            1
          ]
        ],
        "initialRotation": 3,
        "initialFlipped": false,
        "allowRotate": true,
        "allowFlip": false,
        "equivalenceGroup": null
      },
      {
        "id": "piece-06",
        "label": "貓咪靠枕",
        "theme": "cat-pillow",
        "cells": [
          [
            0,
            0
          ],
          [
            0,
            1
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
        "initialRotation": 0,
        "initialFlipped": false,
        "allowRotate": false,
        "allowFlip": false,
        "equivalenceGroup": null
      },
      {
        "id": "piece-07",
        "label": "魚乾",
        "theme": "dried-fish",
        "cells": [
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
        "initialRotation": 2,
        "initialFlipped": false,
        "allowRotate": true,
        "allowFlip": false,
        "equivalenceGroup": null
      },
      {
        "id": "piece-08",
        "label": "貓罐頭",
        "theme": "cat-can",
        "cells": [
          [
            0,
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
            2,
            1
          ],
          [
            2,
            2
          ]
        ],
        "initialRotation": 0,
        "initialFlipped": false,
        "allowRotate": true,
        "allowFlip": false,
        "equivalenceGroup": null
      },
      {
        "id": "piece-09",
        "label": "毛線球",
        "theme": "yarn",
        "cells": [
          [
            0,
            0
          ],
          [
            0,
            1
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
            3,
            1
          ],
          [
            4,
            1
          ]
        ],
        "initialRotation": 0,
        "initialFlipped": false,
        "allowRotate": false,
        "allowFlip": false,
        "equivalenceGroup": null
      }
    ],
    "solution": {
      "piece-01": {
        "row": 1,
        "column": 2,
        "rotation": 0,
        "flipped": false
      },
      "piece-02": {
        "row": 0,
        "column": 5,
        "rotation": 0,
        "flipped": false
      },
      "piece-03": {
        "row": 0,
        "column": 1,
        "rotation": 0,
        "flipped": false
      },
      "piece-04": {
        "row": 2,
        "column": 5,
        "rotation": 0,
        "flipped": false
      },
      "piece-05": {
        "row": 4,
        "column": 0,
        "rotation": 0,
        "flipped": false
      },
      "piece-06": {
        "row": 0,
        "column": 3,
        "rotation": 0,
        "flipped": false
      },
      "piece-07": {
        "row": 3,
        "column": 2,
        "rotation": 0,
        "flipped": false
      },
      "piece-08": {
        "row": 2,
        "column": 0,
        "rotation": 0,
        "flipped": false
      },
      "piece-09": {
        "row": 2,
        "column": 4,
        "rotation": 0,
        "flipped": false
      }
    },
    "metrics": {
      "fillableCellCount": 44,
      "pieceCount": 9,
      "blockedCellCount": 3,
      "fixedItemCount": 2,
      "allowFlipPieceCount": 1,
      "irregularPieceCount": 8,
      "solutionCount": 1,
      "solverNodes": 574,
      "solverBacktracks": 564,
      "solverMaxDepth": 9,
      "solverCandidateCount": 571
    },
    "canonicalSignature": "7x7#0,1;0,2;0,3;0,4;0,5;1,0;1,1;1,2;1,3;1,4;1,5;1,6;2,0;2,1;2,2;2,3;2,4;2,5;2,6;3,0;3,1;3,2;3,3;3,4;3,5;3,6;4,0;4,1;4,2;4,3;4,4;4,5;4,6;5,0;5,1;5,2;5,3;5,4;5,5;5,6;6,1;6,2;6,3;6,4#0,6;6,5;6,6#0,0;6,0#0,1;0,2;0,3;0,4;1,2;1,3|0,5;1,5;1,6|1,0;1,1;1,4;2,1;2,2;2,3;2,4|2,0;3,0;3,1;3,2;3,3;4,0|2,5;2,6;3,5;3,6|3,4;4,3;4,4;4,5|4,1;5,0;5,1;6,1;6,2|4,2;5,2;5,3;6,3;6,4|4,6;5,4;5,5;5,6#3:0,4:0,4:0,4:1,5:0,5:0,6:0,6:0,7:0"
  },
  {
    "id": "L064",
    "chapter": 4,
    "chapterTitle": "搬家挑戰",
    "title": "搬家挑戰 4",
    "rows": 8,
    "columns": 8,
    "difficulty": 4,
    "difficultyScore": 550,
    "seed": 413005,
    "generatorVersion": 1,
    "parMoves": 18,
    "moveLimit": 25,
    "fillableCells": [
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
      ]
    ],
    "blockedCells": [
      [
        0,
        1
      ],
      [
        0,
        7
      ],
      [
        1,
        0
      ],
      [
        6,
        0
      ]
    ],
    "fixedItems": [
      {
        "id": "fixed-1",
        "type": "sleeping-cat",
        "label": "睡覺中的貓咪",
        "cells": [
          [
            0,
            0
          ]
        ]
      },
      {
        "id": "fixed-2",
        "type": "yarn",
        "label": "毛線球",
        "cells": [
          [
            7,
            0
          ]
        ]
      },
      {
        "id": "fixed-3",
        "type": "cardboard",
        "label": "紙箱隔板",
        "cells": [
          [
            7,
            7
          ]
        ]
      },
      {
        "id": "fixed-4",
        "type": "sleeping-cat",
        "label": "睡覺中的貓咪",
        "cells": [
          [
            6,
            7
          ]
        ]
      }
    ],
    "pieces": [
      {
        "id": "piece-01",
        "label": "貓抓板",
        "theme": "scratcher",
        "cells": [
          [
            0,
            2
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
            2,
            0
          ],
          [
            2,
            1
          ],
          [
            3,
            0
          ]
        ],
        "initialRotation": 0,
        "initialFlipped": false,
        "allowRotate": false,
        "allowFlip": false,
        "equivalenceGroup": null
      },
      {
        "id": "piece-02",
        "label": "睡墊",
        "theme": "sleep-mat",
        "cells": [
          [
            0,
            1
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
          ]
        ],
        "initialRotation": 2,
        "initialFlipped": false,
        "allowRotate": true,
        "allowFlip": false,
        "equivalenceGroup": null
      },
      {
        "id": "piece-03",
        "label": "小魚玩具",
        "theme": "fish-toy",
        "cells": [
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
            1
          ],
          [
            1,
            2
          ]
        ],
        "initialRotation": 0,
        "initialFlipped": false,
        "allowRotate": true,
        "allowFlip": false,
        "equivalenceGroup": null
      },
      {
        "id": "piece-04",
        "label": "紙箱",
        "theme": "cardboard",
        "cells": [
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
            1,
            0
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
        "initialRotation": 3,
        "initialFlipped": false,
        "allowRotate": true,
        "allowFlip": false,
        "equivalenceGroup": null
      },
      {
        "id": "piece-05",
        "label": "草墊",
        "theme": "grass-mat",
        "cells": [
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
            0
          ],
          [
            1,
            1
          ],
          [
            2,
            0
          ]
        ],
        "initialRotation": 2,
        "initialFlipped": false,
        "allowRotate": true,
        "allowFlip": false,
        "equivalenceGroup": null
      },
      {
        "id": "piece-06",
        "label": "逗貓棒",
        "theme": "teaser",
        "cells": [
          [
            0,
            0
          ],
          [
            0,
            1
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
            2,
            1
          ]
        ],
        "initialRotation": 0,
        "initialFlipped": false,
        "allowRotate": false,
        "allowFlip": false,
        "equivalenceGroup": null
      },
      {
        "id": "piece-07",
        "label": "貓咪靠枕",
        "theme": "cat-pillow",
        "cells": [
          [
            0,
            0
          ],
          [
            0,
            1
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
            2,
            1
          ],
          [
            2,
            2
          ]
        ],
        "initialRotation": 3,
        "initialFlipped": false,
        "allowRotate": true,
        "allowFlip": false,
        "equivalenceGroup": null
      },
      {
        "id": "piece-08",
        "label": "魚乾",
        "theme": "dried-fish",
        "cells": [
          [
            0,
            1
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
            2,
            3
          ]
        ],
        "initialRotation": 0,
        "initialFlipped": false,
        "allowRotate": false,
        "allowFlip": false,
        "equivalenceGroup": null
      },
      {
        "id": "piece-09",
        "label": "貓罐頭",
        "theme": "cat-can",
        "cells": [
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
          ]
        ],
        "initialRotation": 1,
        "initialFlipped": false,
        "allowRotate": true,
        "allowFlip": true,
        "equivalenceGroup": null
      }
    ],
    "solution": {
      "piece-01": {
        "row": 2,
        "column": 3,
        "rotation": 0,
        "flipped": false
      },
      "piece-02": {
        "row": 6,
        "column": 1,
        "rotation": 0,
        "flipped": false
      },
      "piece-03": {
        "row": 0,
        "column": 2,
        "rotation": 0,
        "flipped": false
      },
      "piece-04": {
        "row": 2,
        "column": 1,
        "rotation": 0,
        "flipped": false
      },
      "piece-05": {
        "row": 1,
        "column": 0,
        "rotation": 0,
        "flipped": false
      },
      "piece-06": {
        "row": 4,
        "column": 0,
        "rotation": 0,
        "flipped": false
      },
      "piece-07": {
        "row": 0,
        "column": 5,
        "rotation": 0,
        "flipped": false
      },
      "piece-08": {
        "row": 5,
        "column": 3,
        "rotation": 0,
        "flipped": false
      },
      "piece-09": {
        "row": 3,
        "column": 5,
        "rotation": 0,
        "flipped": false
      }
    },
    "metrics": {
      "fillableCellCount": 56,
      "pieceCount": 9,
      "blockedCellCount": 4,
      "fixedItemCount": 4,
      "allowFlipPieceCount": 1,
      "irregularPieceCount": 9,
      "solutionCount": 1,
      "solverNodes": 222,
      "solverBacktracks": 212,
      "solverMaxDepth": 9,
      "solverCandidateCount": 724
    },
    "canonicalSignature": "8x8#0,1;0,2;0,3;0,4;0,5;0,6;1,1;1,2;1,3;1,4;1,5;1,6;2,0;2,1;2,2;2,3;2,4;2,5;2,6;2,7;3,0;3,1;3,2;3,3;3,4;3,5;3,6;3,7;4,0;4,1;4,2;4,3;4,4;4,5;4,6;4,7;5,0;5,1;5,2;5,3;5,4;5,5;5,6;5,7;6,0;6,1;6,2;6,3;6,4;6,5;6,6;7,1;7,2;7,3;7,4;7,5#1,7;6,7;7,0;7,6#0,0;0,7;1,0;7,7#0,1;1,1;1,2;1,3;1,4;2,3|0,2;0,3;0,4;0,5;0,6;1,5|1,6;2,5;2,6;2,7;3,6;3,7|2,0;2,1;2,2;3,0;3,1;3,2;4,0;4,1|2,4;3,3;3,4;4,2;4,3;4,4;5,2|3,5;4,5;4,6;5,3;5,4;5,5|4,7;5,6;5,7;6,5;6,6|5,0;5,1;6,0;6,1;6,2;7,1;7,2|6,3;6,4;7,3;7,4;7,5#5:0,5:0,6:0,6:0,6:0,6:0,7:0,7:0,8:1"
  },
  {
    "id": "L065",
    "chapter": 4,
    "chapterTitle": "搬家挑戰",
    "title": "搬家挑戰 5",
    "rows": 7,
    "columns": 7,
    "difficulty": 4,
    "difficultyScore": 564,
    "seed": 406441,
    "generatorVersion": 1,
    "parMoves": 13,
    "moveLimit": 22,
    "fillableCells": [
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
    "blockedCells": [
      [
        0,
        6
      ],
      [
        1,
        6
      ],
      [
        6,
        6
      ]
    ],
    "fixedItems": [
      {
        "id": "fixed-1",
        "type": "sleeping-cat",
        "label": "睡覺中的貓咪",
        "cells": [
          [
            6,
            0
          ]
        ]
      },
      {
        "id": "fixed-2",
        "type": "yarn",
        "label": "毛線球",
        "cells": [
          [
            0,
            0
          ]
        ]
      }
    ],
    "pieces": [
      {
        "id": "piece-01",
        "label": "逗貓棒",
        "theme": "teaser",
        "cells": [
          [
            0,
            1
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
            2,
            0
          ],
          [
            2,
            1
          ]
        ],
        "initialRotation": 0,
        "initialFlipped": false,
        "allowRotate": false,
        "allowFlip": true,
        "equivalenceGroup": null
      },
      {
        "id": "piece-02",
        "label": "貓咪靠枕",
        "theme": "cat-pillow",
        "cells": [
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
            0
          ],
          [
            1,
            1
          ],
          [
            1,
            3
          ]
        ],
        "initialRotation": 0,
        "initialFlipped": false,
        "allowRotate": true,
        "allowFlip": false,
        "equivalenceGroup": null
      },
      {
        "id": "piece-03",
        "label": "魚乾",
        "theme": "dried-fish",
        "cells": [
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
            1
          ]
        ],
        "initialRotation": 0,
        "initialFlipped": false,
        "allowRotate": false,
        "allowFlip": false,
        "equivalenceGroup": null
      },
      {
        "id": "piece-04",
        "label": "貓罐頭",
        "theme": "cat-can",
        "cells": [
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
          ]
        ],
        "initialRotation": 0,
        "initialFlipped": false,
        "allowRotate": false,
        "allowFlip": false,
        "equivalenceGroup": null
      },
      {
        "id": "piece-05",
        "label": "毛線球",
        "theme": "yarn",
        "cells": [
          [
            0,
            1
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
            2,
            1
          ]
        ],
        "initialRotation": 0,
        "initialFlipped": false,
        "allowRotate": false,
        "allowFlip": false,
        "equivalenceGroup": null
      },
      {
        "id": "piece-06",
        "label": "鮮奶盒",
        "theme": "milk",
        "cells": [
          [
            0,
            1
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
        "initialRotation": 0,
        "initialFlipped": false,
        "allowRotate": false,
        "allowFlip": false,
        "equivalenceGroup": null
      },
      {
        "id": "piece-07",
        "label": "貓掌餅乾",
        "theme": "paw-cookie",
        "cells": [
          [
            0,
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
          ]
        ],
        "initialRotation": 2,
        "initialFlipped": false,
        "allowRotate": true,
        "allowFlip": false,
        "equivalenceGroup": null
      },
      {
        "id": "piece-08",
        "label": "貓抓板",
        "theme": "scratcher",
        "cells": [
          [
            0,
            0
          ],
          [
            0,
            1
          ]
        ],
        "initialRotation": 0,
        "initialFlipped": false,
        "allowRotate": false,
        "allowFlip": false,
        "equivalenceGroup": null
      },
      {
        "id": "piece-09",
        "label": "睡墊",
        "theme": "sleep-mat",
        "cells": [
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
            1
          ],
          [
            1,
            2
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
            3,
            1
          ]
        ],
        "initialRotation": 2,
        "initialFlipped": false,
        "allowRotate": true,
        "allowFlip": false,
        "equivalenceGroup": null
      }
    ],
    "solution": {
      "piece-01": {
        "row": 2,
        "column": 5,
        "rotation": 0,
        "flipped": false
      },
      "piece-02": {
        "row": 0,
        "column": 0,
        "rotation": 0,
        "flipped": false
      },
      "piece-03": {
        "row": 5,
        "column": 4,
        "rotation": 0,
        "flipped": false
      },
      "piece-04": {
        "row": 4,
        "column": 3,
        "rotation": 0,
        "flipped": false
      },
      "piece-05": {
        "row": 1,
        "column": 1,
        "rotation": 0,
        "flipped": false
      },
      "piece-06": {
        "row": 5,
        "column": 1,
        "rotation": 0,
        "flipped": false
      },
      "piece-07": {
        "row": 2,
        "column": 0,
        "rotation": 0,
        "flipped": false
      },
      "piece-08": {
        "row": 5,
        "column": 0,
        "rotation": 0,
        "flipped": false
      },
      "piece-09": {
        "row": 1,
        "column": 3,
        "rotation": 0,
        "flipped": false
      }
    },
    "metrics": {
      "fillableCellCount": 44,
      "pieceCount": 9,
      "blockedCellCount": 3,
      "fixedItemCount": 2,
      "allowFlipPieceCount": 1,
      "irregularPieceCount": 8,
      "solutionCount": 1,
      "solverNodes": 886,
      "solverBacktracks": 876,
      "solverMaxDepth": 9,
      "solverCandidateCount": 393
    },
    "canonicalSignature": "7x7#0,1;0,2;0,3;0,4;0,5;1,0;1,1;1,2;1,3;1,4;1,5;1,6;2,0;2,1;2,2;2,3;2,4;2,5;2,6;3,0;3,1;3,2;3,3;3,4;3,5;3,6;4,0;4,1;4,2;4,3;4,4;4,5;4,6;5,0;5,1;5,2;5,3;5,4;5,5;5,6;6,1;6,2;6,3;6,4#6,0;6,5;6,6#0,0;0,6#0,1;1,1|0,2;0,3;0,4;1,2;1,3;2,2|0,5;1,5;1,6;2,6;3,5;3,6;4,6;5,6|1,0;2,0;2,1|1,4;2,3;2,4;2,5;3,4|3,0;3,1;3,2;4,0|3,3;4,2;4,3;4,4;4,5;5,4;5,5|4,1;5,0;5,1;6,1|5,2;5,3;6,2;6,3;6,4#2:0,3:0,4:0,4:0,5:0,5:1,6:0,7:0,8:0"
  },
  {
    "id": "L066",
    "chapter": 4,
    "chapterTitle": "搬家挑戰",
    "title": "搬家挑戰 6",
    "rows": 8,
    "columns": 8,
    "difficulty": 4,
    "difficultyScore": 572,
    "seed": 405002,
    "generatorVersion": 1,
    "parMoves": 24,
    "moveLimit": 35,
    "fillableCells": [
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
      ]
    ],
    "blockedCells": [
      [
        0,
        0
      ],
      [
        0,
        7
      ]
    ],
    "fixedItems": [
      {
        "id": "fixed-1",
        "type": "sleeping-cat",
        "label": "睡覺中的貓咪",
        "cells": [
          [
            7,
            7
          ]
        ]
      },
      {
        "id": "fixed-2",
        "type": "yarn",
        "label": "毛線球",
        "cells": [
          [
            7,
            0
          ]
        ]
      }
    ],
    "pieces": [
      {
        "id": "piece-01",
        "label": "草墊",
        "theme": "grass-mat",
        "cells": [
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
            0
          ],
          [
            1,
            1
          ],
          [
            1,
            2
          ]
        ],
        "initialRotation": 2,
        "initialFlipped": false,
        "allowRotate": true,
        "allowFlip": false,
        "equivalenceGroup": null
      },
      {
        "id": "piece-02",
        "label": "逗貓棒",
        "theme": "teaser",
        "cells": [
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
            3
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
            2,
            2
          ]
        ],
        "initialRotation": 1,
        "initialFlipped": false,
        "allowRotate": true,
        "allowFlip": false,
        "equivalenceGroup": null
      },
      {
        "id": "piece-03",
        "label": "貓咪靠枕",
        "theme": "cat-pillow",
        "cells": [
          [
            0,
            1
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
            2,
            0
          ],
          [
            2,
            1
          ],
          [
            3,
            0
          ],
          [
            3,
            1
          ]
        ],
        "initialRotation": 3,
        "initialFlipped": false,
        "allowRotate": true,
        "allowFlip": true,
        "equivalenceGroup": null
      },
      {
        "id": "piece-04",
        "label": "魚乾",
        "theme": "dried-fish",
        "cells": [
          [
            0,
            2
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
        "initialRotation": 2,
        "initialFlipped": false,
        "allowRotate": true,
        "allowFlip": false,
        "equivalenceGroup": null
      },
      {
        "id": "piece-05",
        "label": "貓罐頭",
        "theme": "cat-can",
        "cells": [
          [
            0,
            0
          ],
          [
            0,
            1
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
          ]
        ],
        "initialRotation": 1,
        "initialFlipped": false,
        "allowRotate": true,
        "allowFlip": false,
        "equivalenceGroup": null
      },
      {
        "id": "piece-06",
        "label": "毛線球",
        "theme": "yarn",
        "cells": [
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
            2,
            1
          ]
        ],
        "initialRotation": 2,
        "initialFlipped": false,
        "allowRotate": true,
        "allowFlip": false,
        "equivalenceGroup": null
      },
      {
        "id": "piece-07",
        "label": "鮮奶盒",
        "theme": "milk",
        "cells": [
          [
            0,
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
            3,
            1
          ]
        ],
        "initialRotation": 0,
        "initialFlipped": false,
        "allowRotate": false,
        "allowFlip": false,
        "equivalenceGroup": null
      },
      {
        "id": "piece-08",
        "label": "貓掌餅乾",
        "theme": "paw-cookie",
        "cells": [
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
            1
          ],
          [
            1,
            2
          ]
        ],
        "initialRotation": 3,
        "initialFlipped": false,
        "allowRotate": true,
        "allowFlip": false,
        "equivalenceGroup": null
      },
      {
        "id": "piece-09",
        "label": "貓抓板",
        "theme": "scratcher",
        "cells": [
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
            2,
            1
          ]
        ],
        "initialRotation": 3,
        "initialFlipped": false,
        "allowRotate": true,
        "allowFlip": false,
        "equivalenceGroup": null
      }
    ],
    "solution": {
      "piece-01": {
        "row": 3,
        "column": 5,
        "rotation": 0,
        "flipped": false
      },
      "piece-02": {
        "row": 4,
        "column": 1,
        "rotation": 0,
        "flipped": false
      },
      "piece-03": {
        "row": 0,
        "column": 0,
        "rotation": 0,
        "flipped": false
      },
      "piece-04": {
        "row": 6,
        "column": 2,
        "rotation": 0,
        "flipped": false
      },
      "piece-05": {
        "row": 0,
        "column": 5,
        "rotation": 0,
        "flipped": false
      },
      "piece-06": {
        "row": 2,
        "column": 2,
        "rotation": 0,
        "flipped": false
      },
      "piece-07": {
        "row": 4,
        "column": 0,
        "rotation": 0,
        "flipped": false
      },
      "piece-08": {
        "row": 0,
        "column": 2,
        "rotation": 0,
        "flipped": false
      },
      "piece-09": {
        "row": 5,
        "column": 5,
        "rotation": 0,
        "flipped": false
      }
    },
    "metrics": {
      "fillableCellCount": 60,
      "pieceCount": 9,
      "blockedCellCount": 2,
      "fixedItemCount": 2,
      "allowFlipPieceCount": 1,
      "irregularPieceCount": 8,
      "solutionCount": 1,
      "solverNodes": 591,
      "solverBacktracks": 581,
      "solverMaxDepth": 9,
      "solverCandidateCount": 1125
    },
    "canonicalSignature": "8x8#0,1;0,2;0,3;0,4;0,5;0,6;1,0;1,1;1,2;1,3;1,4;1,5;1,6;1,7;2,0;2,1;2,2;2,3;2,4;2,5;2,6;2,7;3,0;3,1;3,2;3,3;3,4;3,5;3,6;3,7;4,0;4,1;4,2;4,3;4,4;4,5;4,6;4,7;5,0;5,1;5,2;5,3;5,4;5,5;5,6;5,7;6,0;6,1;6,2;6,3;6,4;6,5;6,6;6,7;7,1;7,2;7,3;7,4;7,5;7,6#0,0;0,7#7,0;7,7#0,1;0,2;1,0;1,1;1,2;2,0;2,1;2,2|0,3;0,4;0,5;1,3;1,4|0,6;1,5;1,6;1,7;2,6;2,7;3,6;3,7|2,3;2,4;2,5;3,3;3,4;3,5;4,4|3,0;3,1;3,2;4,0;4,1;4,2|4,3;4,5;4,6;5,2;5,3;5,4;5,5;6,4|4,7;5,6;5,7;6,5;6,6;6,7;7,6|5,0;5,1;6,0;6,1;6,2;7,1|6,3;7,2;7,3;7,4;7,5#5:0,5:0,6:0,6:0,7:0,7:0,8:0,8:0,8:1"
  },
  {
    "id": "L067",
    "chapter": 4,
    "chapterTitle": "搬家挑戰",
    "title": "搬家挑戰 7",
    "rows": 7,
    "columns": 7,
    "difficulty": 4,
    "difficultyScore": 574,
    "seed": 408009,
    "generatorVersion": 1,
    "parMoves": 11,
    "moveLimit": 20,
    "fillableCells": [
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
    "blockedCells": [
      [
        0,
        0
      ],
      [
        0,
        6
      ],
      [
        6,
        0
      ]
    ],
    "fixedItems": [
      {
        "id": "fixed-1",
        "type": "sleeping-cat",
        "label": "睡覺中的貓咪",
        "cells": [
          [
            6,
            6
          ]
        ]
      },
      {
        "id": "fixed-2",
        "type": "yarn",
        "label": "毛線球",
        "cells": [
          [
            5,
            0
          ]
        ]
      }
    ],
    "pieces": [
      {
        "id": "piece-01",
        "label": "魚乾",
        "theme": "dried-fish",
        "cells": [
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
            3,
            2
          ],
          [
            3,
            3
          ]
        ],
        "initialRotation": 0,
        "initialFlipped": false,
        "allowRotate": false,
        "allowFlip": true,
        "equivalenceGroup": null
      },
      {
        "id": "piece-02",
        "label": "貓罐頭",
        "theme": "cat-can",
        "cells": [
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
        "initialRotation": 0,
        "initialFlipped": false,
        "allowRotate": false,
        "allowFlip": true,
        "equivalenceGroup": null
      },
      {
        "id": "piece-03",
        "label": "毛線球",
        "theme": "yarn",
        "cells": [
          [
            0,
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
        "initialRotation": 0,
        "initialFlipped": false,
        "allowRotate": false,
        "allowFlip": false,
        "equivalenceGroup": null
      },
      {
        "id": "piece-04",
        "label": "鮮奶盒",
        "theme": "milk",
        "cells": [
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
        "initialRotation": 2,
        "initialFlipped": false,
        "allowRotate": true,
        "allowFlip": false,
        "equivalenceGroup": null
      },
      {
        "id": "piece-05",
        "label": "貓掌餅乾",
        "theme": "paw-cookie",
        "cells": [
          [
            0,
            0
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
        "initialRotation": 0,
        "initialFlipped": false,
        "allowRotate": false,
        "allowFlip": false,
        "equivalenceGroup": null
      },
      {
        "id": "piece-06",
        "label": "貓抓板",
        "theme": "scratcher",
        "cells": [
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
          ]
        ],
        "initialRotation": 0,
        "initialFlipped": false,
        "allowRotate": false,
        "allowFlip": false,
        "equivalenceGroup": null
      },
      {
        "id": "piece-07",
        "label": "睡墊",
        "theme": "sleep-mat",
        "cells": [
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
            1
          ]
        ],
        "initialRotation": 0,
        "initialFlipped": false,
        "allowRotate": false,
        "allowFlip": false,
        "equivalenceGroup": null
      },
      {
        "id": "piece-08",
        "label": "小魚玩具",
        "theme": "fish-toy",
        "cells": [
          [
            0,
            1
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
        "initialRotation": 0,
        "initialFlipped": false,
        "allowRotate": true,
        "allowFlip": false,
        "equivalenceGroup": null
      },
      {
        "id": "piece-09",
        "label": "紙箱",
        "theme": "cardboard",
        "cells": [
          [
            0,
            0
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
            1,
            2
          ]
        ],
        "initialRotation": 0,
        "initialFlipped": false,
        "allowRotate": false,
        "allowFlip": false,
        "equivalenceGroup": null
      }
    ],
    "solution": {
      "piece-01": {
        "row": 0,
        "column": 1,
        "rotation": 0,
        "flipped": false
      },
      "piece-02": {
        "row": 1,
        "column": 0,
        "rotation": 0,
        "flipped": false
      },
      "piece-03": {
        "row": 5,
        "column": 1,
        "rotation": 0,
        "flipped": false
      },
      "piece-04": {
        "row": 0,
        "column": 2,
        "rotation": 0,
        "flipped": false
      },
      "piece-05": {
        "row": 3,
        "column": 5,
        "rotation": 0,
        "flipped": false
      },
      "piece-06": {
        "row": 4,
        "column": 3,
        "rotation": 0,
        "flipped": false
      },
      "piece-07": {
        "row": 5,
        "column": 4,
        "rotation": 0,
        "flipped": false
      },
      "piece-08": {
        "row": 1,
        "column": 5,
        "rotation": 0,
        "flipped": false
      },
      "piece-09": {
        "row": 5,
        "column": 2,
        "rotation": 0,
        "flipped": false
      }
    },
    "metrics": {
      "fillableCellCount": 44,
      "pieceCount": 9,
      "blockedCellCount": 3,
      "fixedItemCount": 2,
      "allowFlipPieceCount": 2,
      "irregularPieceCount": 7,
      "solutionCount": 1,
      "solverNodes": 945,
      "solverBacktracks": 935,
      "solverMaxDepth": 9,
      "solverCandidateCount": 372
    },
    "canonicalSignature": "7x7#0,1;0,2;0,3;0,4;0,5;1,0;1,1;1,2;1,3;1,4;1,5;1,6;2,0;2,1;2,2;2,3;2,4;2,5;2,6;3,0;3,1;3,2;3,3;3,4;3,5;3,6;4,0;4,1;4,2;4,3;4,4;4,5;4,6;5,0;5,1;5,2;5,3;5,4;5,5;5,6;6,1;6,2;6,3;6,4#0,0;6,0;6,6#0,6;6,5#0,1;0,2;1,2|0,3;0,4;1,3|0,5;1,5;1,6;2,5|1,0;1,1;2,0;2,1;3,0;3,1;4,0;4,1|1,4;2,4;3,4|2,2;2,3;3,2;3,3;4,2;5,0;5,1;5,2|2,6;3,5;3,6;4,5|4,3;4,4;5,3;5,4;6,1;6,2;6,3;6,4|4,6;5,5;5,6#3:0,3:0,3:0,3:0,4:0,4:0,8:0,8:1,8:1"
  },
  {
    "id": "L068",
    "chapter": 4,
    "chapterTitle": "搬家挑戰",
    "title": "搬家挑戰 8",
    "rows": 8,
    "columns": 8,
    "difficulty": 4,
    "difficultyScore": 578,
    "seed": 403015,
    "generatorVersion": 1,
    "parMoves": 17,
    "moveLimit": 26,
    "fillableCells": [
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
      ]
    ],
    "blockedCells": [
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
        0
      ],
      [
        7,
        0
      ]
    ],
    "fixedItems": [
      {
        "id": "fixed-1",
        "type": "sleeping-cat",
        "label": "睡覺中的貓咪",
        "cells": [
          [
            6,
            0
          ]
        ]
      },
      {
        "id": "fixed-2",
        "type": "yarn",
        "label": "毛線球",
        "cells": [
          [
            0,
            0
          ]
        ]
      },
      {
        "id": "fixed-3",
        "type": "cardboard",
        "label": "紙箱隔板",
        "cells": [
          [
            7,
            7
          ]
        ]
      }
    ],
    "pieces": [
      {
        "id": "piece-01",
        "label": "小魚玩具",
        "theme": "fish-toy",
        "cells": [
          [
            0,
            0
          ],
          [
            0,
            1
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
            2,
            1
          ],
          [
            2,
            2
          ]
        ],
        "initialRotation": 3,
        "initialFlipped": false,
        "allowRotate": true,
        "allowFlip": false,
        "equivalenceGroup": null
      },
      {
        "id": "piece-02",
        "label": "紙箱",
        "theme": "cardboard",
        "cells": [
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
            3,
            1
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
            5,
            1
          ]
        ],
        "initialRotation": 3,
        "initialFlipped": true,
        "allowRotate": true,
        "allowFlip": true,
        "equivalenceGroup": null
      },
      {
        "id": "piece-03",
        "label": "草墊",
        "theme": "grass-mat",
        "cells": [
          [
            0,
            1
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
          ]
        ],
        "initialRotation": 1,
        "initialFlipped": false,
        "allowRotate": true,
        "allowFlip": false,
        "equivalenceGroup": null
      },
      {
        "id": "piece-04",
        "label": "逗貓棒",
        "theme": "teaser",
        "cells": [
          [
            0,
            0
          ],
          [
            0,
            1
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
            2,
            0
          ]
        ],
        "initialRotation": 0,
        "initialFlipped": false,
        "allowRotate": false,
        "allowFlip": false,
        "equivalenceGroup": null
      },
      {
        "id": "piece-05",
        "label": "貓咪靠枕",
        "theme": "cat-pillow",
        "cells": [
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
            0
          ],
          [
            1,
            1
          ],
          [
            1,
            2
          ]
        ],
        "initialRotation": 0,
        "initialFlipped": false,
        "allowRotate": false,
        "allowFlip": false,
        "equivalenceGroup": null
      },
      {
        "id": "piece-06",
        "label": "魚乾",
        "theme": "dried-fish",
        "cells": [
          [
            0,
            0
          ],
          [
            0,
            1
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
            2,
            1
          ],
          [
            3,
            1
          ],
          [
            4,
            1
          ],
          [
            5,
            1
          ]
        ],
        "initialRotation": 0,
        "initialFlipped": false,
        "allowRotate": true,
        "allowFlip": false,
        "equivalenceGroup": null
      },
      {
        "id": "piece-07",
        "label": "貓罐頭",
        "theme": "cat-can",
        "cells": [
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
            1
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
            3,
            0
          ],
          [
            3,
            1
          ]
        ],
        "initialRotation": 0,
        "initialFlipped": false,
        "allowRotate": true,
        "allowFlip": false,
        "equivalenceGroup": null
      },
      {
        "id": "piece-08",
        "label": "毛線球",
        "theme": "yarn",
        "cells": [
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
            2,
            1
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
        "initialRotation": 0,
        "initialFlipped": false,
        "allowRotate": false,
        "allowFlip": false,
        "equivalenceGroup": null
      },
      {
        "id": "piece-09",
        "label": "鮮奶盒",
        "theme": "milk",
        "cells": [
          [
            0,
            2
          ],
          [
            0,
            3
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
          ]
        ],
        "initialRotation": 2,
        "initialFlipped": false,
        "allowRotate": true,
        "allowFlip": false,
        "equivalenceGroup": null
      }
    ],
    "solution": {
      "piece-01": {
        "row": 4,
        "column": 0,
        "rotation": 0,
        "flipped": false
      },
      "piece-02": {
        "row": 0,
        "column": 5,
        "rotation": 0,
        "flipped": false
      },
      "piece-03": {
        "row": 4,
        "column": 3,
        "rotation": 0,
        "flipped": false
      },
      "piece-04": {
        "row": 3,
        "column": 2,
        "rotation": 0,
        "flipped": false
      },
      "piece-05": {
        "row": 6,
        "column": 4,
        "rotation": 0,
        "flipped": false
      },
      "piece-06": {
        "row": 1,
        "column": 6,
        "rotation": 0,
        "flipped": false
      },
      "piece-07": {
        "row": 0,
        "column": 0,
        "rotation": 0,
        "flipped": false
      },
      "piece-08": {
        "row": 0,
        "column": 2,
        "rotation": 0,
        "flipped": false
      },
      "piece-09": {
        "row": 6,
        "column": 1,
        "rotation": 0,
        "flipped": false
      }
    },
    "metrics": {
      "fillableCellCount": 57,
      "pieceCount": 9,
      "blockedCellCount": 4,
      "fixedItemCount": 3,
      "allowFlipPieceCount": 1,
      "irregularPieceCount": 9,
      "solutionCount": 1,
      "solverNodes": 455,
      "solverBacktracks": 445,
      "solverMaxDepth": 9,
      "solverCandidateCount": 787
    },
    "canonicalSignature": "8x8#0,1;0,2;0,3;0,4;0,5;0,6;1,0;1,1;1,2;1,3;1,4;1,5;1,6;2,0;2,1;2,2;2,3;2,4;2,5;2,6;2,7;3,0;3,1;3,2;3,3;3,4;3,5;3,6;3,7;4,0;4,1;4,2;4,3;4,4;4,5;4,6;4,7;5,0;5,1;5,2;5,3;5,4;5,5;5,6;5,7;6,0;6,1;6,2;6,3;6,4;6,5;6,6;6,7;7,2;7,3;7,4;7,5#0,7;1,7;7,0;7,6#0,0;7,1;7,7#0,1;0,2;0,3;0,4;0,5;0,6;1,5;1,6|1,0;1,1;2,0;2,1;3,0|1,2;1,3;1,4;2,3;2,4;2,5;2,6;2,7|2,2;3,2;3,3;4,2|3,1;4,0;4,1;5,0;6,0|3,4;3,5;3,6;3,7;4,5;4,6;4,7;5,6|4,3;4,4;5,2;5,3;5,4|5,1;6,1;6,2;6,3;7,2;7,3|5,5;5,7;6,4;6,5;6,6;6,7;7,4;7,5#4:0,5:0,5:0,5:0,6:0,8:0,8:0,8:0,8:1"
  },
  {
    "id": "L069",
    "chapter": 4,
    "chapterTitle": "搬家挑戰",
    "title": "搬家挑戰 9",
    "rows": 7,
    "columns": 7,
    "difficulty": 4,
    "difficultyScore": 583,
    "seed": 410516,
    "generatorVersion": 1,
    "parMoves": 17,
    "moveLimit": 27,
    "fillableCells": [
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
    "blockedCells": [
      [
        0,
        6
      ],
      [
        1,
        0
      ],
      [
        6,
        6
      ]
    ],
    "fixedItems": [
      {
        "id": "fixed-1",
        "type": "sleeping-cat",
        "label": "睡覺中的貓咪",
        "cells": [
          [
            6,
            0
          ]
        ]
      },
      {
        "id": "fixed-2",
        "type": "yarn",
        "label": "毛線球",
        "cells": [
          [
            5,
            0
          ]
        ]
      },
      {
        "id": "fixed-3",
        "type": "cardboard",
        "label": "紙箱隔板",
        "cells": [
          [
            0,
            0
          ]
        ]
      }
    ],
    "pieces": [
      {
        "id": "piece-01",
        "label": "毛線球",
        "theme": "yarn",
        "cells": [
          [
            0,
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
            2,
            0
          ],
          [
            2,
            1
          ],
          [
            3,
            1
          ]
        ],
        "initialRotation": 0,
        "initialFlipped": false,
        "allowRotate": true,
        "allowFlip": false,
        "equivalenceGroup": null
      },
      {
        "id": "piece-02",
        "label": "鮮奶盒",
        "theme": "milk",
        "cells": [
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
            0
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
        "initialRotation": 2,
        "initialFlipped": false,
        "allowRotate": true,
        "allowFlip": false,
        "equivalenceGroup": null
      },
      {
        "id": "piece-03",
        "label": "貓掌餅乾",
        "theme": "paw-cookie",
        "cells": [
          [
            0,
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
            2,
            1
          ]
        ],
        "initialRotation": 2,
        "initialFlipped": false,
        "allowRotate": true,
        "allowFlip": false,
        "equivalenceGroup": null
      },
      {
        "id": "piece-04",
        "label": "貓抓板",
        "theme": "scratcher",
        "cells": [
          [
            0,
            0
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
        "initialRotation": 0,
        "initialFlipped": false,
        "allowRotate": true,
        "allowFlip": true,
        "equivalenceGroup": null
      },
      {
        "id": "piece-05",
        "label": "睡墊",
        "theme": "sleep-mat",
        "cells": [
          [
            0,
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
          ]
        ],
        "initialRotation": 0,
        "initialFlipped": false,
        "allowRotate": false,
        "allowFlip": false,
        "equivalenceGroup": null
      },
      {
        "id": "piece-06",
        "label": "小魚玩具",
        "theme": "fish-toy",
        "cells": [
          [
            0,
            0
          ],
          [
            0,
            1
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
            2,
            1
          ]
        ],
        "initialRotation": 0,
        "initialFlipped": false,
        "allowRotate": false,
        "allowFlip": false,
        "equivalenceGroup": null
      },
      {
        "id": "piece-07",
        "label": "紙箱",
        "theme": "cardboard",
        "cells": [
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
            0
          ]
        ],
        "initialRotation": 3,
        "initialFlipped": false,
        "allowRotate": true,
        "allowFlip": false,
        "equivalenceGroup": null
      },
      {
        "id": "piece-08",
        "label": "草墊",
        "theme": "grass-mat",
        "cells": [
          [
            0,
            1
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
            2,
            1
          ],
          [
            3,
            1
          ],
          [
            4,
            1
          ]
        ],
        "initialRotation": 1,
        "initialFlipped": false,
        "allowRotate": true,
        "allowFlip": false,
        "equivalenceGroup": null
      },
      {
        "id": "piece-09",
        "label": "逗貓棒",
        "theme": "teaser",
        "cells": [
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
          ]
        ],
        "initialRotation": 0,
        "initialFlipped": false,
        "allowRotate": false,
        "allowFlip": false,
        "equivalenceGroup": null
      }
    ],
    "solution": {
      "piece-01": {
        "row": 2,
        "column": 0,
        "rotation": 0,
        "flipped": false
      },
      "piece-02": {
        "row": 0,
        "column": 3,
        "rotation": 0,
        "flipped": false
      },
      "piece-03": {
        "row": 4,
        "column": 4,
        "rotation": 0,
        "flipped": false
      },
      "piece-04": {
        "row": 4,
        "column": 5,
        "rotation": 0,
        "flipped": false
      },
      "piece-05": {
        "row": 2,
        "column": 3,
        "rotation": 0,
        "flipped": false
      },
      "piece-06": {
        "row": 1,
        "column": 5,
        "rotation": 0,
        "flipped": false
      },
      "piece-07": {
        "row": 0,
        "column": 1,
        "rotation": 0,
        "flipped": false
      },
      "piece-08": {
        "row": 1,
        "column": 1,
        "rotation": 0,
        "flipped": false
      },
      "piece-09": {
        "row": 4,
        "column": 1,
        "rotation": 0,
        "flipped": false
      }
    },
    "metrics": {
      "fillableCellCount": 43,
      "pieceCount": 9,
      "blockedCellCount": 3,
      "fixedItemCount": 3,
      "allowFlipPieceCount": 1,
      "irregularPieceCount": 9,
      "solutionCount": 1,
      "solverNodes": 1115,
      "solverBacktracks": 1105,
      "solverMaxDepth": 9,
      "solverCandidateCount": 531
    },
    "canonicalSignature": "7x7#0,1;0,2;0,3;0,4;0,5;1,0;1,1;1,2;1,3;1,4;1,5;1,6;2,0;2,1;2,2;2,3;2,4;2,5;2,6;3,0;3,1;3,2;3,3;3,4;3,5;3,6;4,0;4,1;4,2;4,3;4,4;4,5;4,6;5,0;5,1;5,2;5,3;5,4;5,5;5,6;6,2;6,3;6,4#0,0;0,6;6,1#6,0;6,5;6,6#0,1;0,2;0,3;1,1;1,2|0,4;0,5;1,4|1,0;2,0;2,1;2,2;3,1|1,3;2,3;3,2;3,3|1,5;1,6;2,4;2,5|2,6;3,4;3,5;3,6;4,6;5,6|3,0;4,0;5,0;5,1|4,1;4,2;4,3;4,4;4,5;5,2|5,3;5,4;5,5;6,2;6,3;6,4#3:1,4:0,4:0,4:0,5:0,5:0,6:0,6:0,6:0"
  },
  {
    "id": "L070",
    "chapter": 4,
    "chapterTitle": "搬家挑戰",
    "title": "搬家挑戰 10",
    "rows": 7,
    "columns": 7,
    "difficulty": 4,
    "difficultyScore": 591,
    "seed": 418078,
    "generatorVersion": 1,
    "parMoves": 19,
    "moveLimit": 27,
    "fillableCells": [
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
    "blockedCells": [
      [
        0,
        6
      ],
      [
        1,
        0
      ],
      [
        5,
        0
      ],
      [
        5,
        6
      ]
    ],
    "fixedItems": [
      {
        "id": "fixed-1",
        "type": "sleeping-cat",
        "label": "睡覺中的貓咪",
        "cells": [
          [
            6,
            6
          ]
        ]
      },
      {
        "id": "fixed-2",
        "type": "yarn",
        "label": "毛線球",
        "cells": [
          [
            1,
            6
          ]
        ]
      },
      {
        "id": "fixed-3",
        "type": "cardboard",
        "label": "紙箱隔板",
        "cells": [
          [
            6,
            0
          ]
        ]
      },
      {
        "id": "fixed-4",
        "type": "sleeping-cat",
        "label": "睡覺中的貓咪",
        "cells": [
          [
            0,
            0
          ]
        ]
      }
    ],
    "pieces": [
      {
        "id": "piece-01",
        "label": "逗貓棒",
        "theme": "teaser",
        "cells": [
          [
            0,
            0
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
            1,
            2
          ],
          [
            1,
            3
          ],
          [
            2,
            2
          ]
        ],
        "initialRotation": 0,
        "initialFlipped": true,
        "allowRotate": false,
        "allowFlip": true,
        "equivalenceGroup": null
      },
      {
        "id": "piece-02",
        "label": "貓咪靠枕",
        "theme": "cat-pillow",
        "cells": [
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
          ]
        ],
        "initialRotation": 1,
        "initialFlipped": false,
        "allowRotate": true,
        "allowFlip": false,
        "equivalenceGroup": null
      },
      {
        "id": "piece-03",
        "label": "魚乾",
        "theme": "dried-fish",
        "cells": [
          [
            0,
            0
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
        "initialRotation": 0,
        "initialFlipped": false,
        "allowRotate": false,
        "allowFlip": true,
        "equivalenceGroup": null
      },
      {
        "id": "piece-04",
        "label": "貓罐頭",
        "theme": "cat-can",
        "cells": [
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
            1
          ]
        ],
        "initialRotation": 0,
        "initialFlipped": false,
        "allowRotate": false,
        "allowFlip": false,
        "equivalenceGroup": null
      },
      {
        "id": "piece-05",
        "label": "毛線球",
        "theme": "yarn",
        "cells": [
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
            0
          ],
          [
            2,
            1
          ],
          [
            2,
            2
          ]
        ],
        "initialRotation": 1,
        "initialFlipped": false,
        "allowRotate": true,
        "allowFlip": false,
        "equivalenceGroup": null
      },
      {
        "id": "piece-06",
        "label": "鮮奶盒",
        "theme": "milk",
        "cells": [
          [
            0,
            0
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
        "initialRotation": 0,
        "initialFlipped": false,
        "allowRotate": true,
        "allowFlip": false,
        "equivalenceGroup": null
      },
      {
        "id": "piece-07",
        "label": "貓掌餅乾",
        "theme": "paw-cookie",
        "cells": [
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
        "initialRotation": 0,
        "initialFlipped": false,
        "allowRotate": false,
        "allowFlip": false,
        "equivalenceGroup": null
      },
      {
        "id": "piece-08",
        "label": "貓抓板",
        "theme": "scratcher",
        "cells": [
          [
            0,
            0
          ],
          [
            0,
            2
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
            2,
            1
          ]
        ],
        "initialRotation": 0,
        "initialFlipped": false,
        "allowRotate": false,
        "allowFlip": false,
        "equivalenceGroup": null
      },
      {
        "id": "piece-09",
        "label": "睡墊",
        "theme": "sleep-mat",
        "cells": [
          [
            0,
            3
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
          ]
        ],
        "initialRotation": 1,
        "initialFlipped": false,
        "allowRotate": true,
        "allowFlip": false,
        "equivalenceGroup": null
      }
    ],
    "solution": {
      "piece-01": {
        "row": 1,
        "column": 3,
        "rotation": 0,
        "flipped": false
      },
      "piece-02": {
        "row": 2,
        "column": 0,
        "rotation": 0,
        "flipped": false
      },
      "piece-03": {
        "row": 2,
        "column": 2,
        "rotation": 0,
        "flipped": false
      },
      "piece-04": {
        "row": 0,
        "column": 1,
        "rotation": 0,
        "flipped": false
      },
      "piece-05": {
        "row": 3,
        "column": 1,
        "rotation": 0,
        "flipped": false
      },
      "piece-06": {
        "row": 0,
        "column": 4,
        "rotation": 0,
        "flipped": false
      },
      "piece-07": {
        "row": 1,
        "column": 1,
        "rotation": 0,
        "flipped": false
      },
      "piece-08": {
        "row": 3,
        "column": 4,
        "rotation": 0,
        "flipped": false
      },
      "piece-09": {
        "row": 5,
        "column": 1,
        "rotation": 0,
        "flipped": false
      }
    },
    "metrics": {
      "fillableCellCount": 41,
      "pieceCount": 9,
      "blockedCellCount": 4,
      "fixedItemCount": 4,
      "allowFlipPieceCount": 2,
      "irregularPieceCount": 7,
      "solutionCount": 1,
      "solverNodes": 1054,
      "solverBacktracks": 1044,
      "solverMaxDepth": 9,
      "solverCandidateCount": 445
    },
    "canonicalSignature": "7x7#0,1;0,2;0,3;0,4;0,5;1,1;1,2;1,3;1,4;1,5;2,0;2,1;2,2;2,3;2,4;2,5;2,6;3,0;3,1;3,2;3,3;3,4;3,5;3,6;4,0;4,1;4,2;4,3;4,4;4,5;4,6;5,1;5,2;5,3;5,4;5,5;6,1;6,2;6,3;6,4;6,5#0,0;1,6;5,0;5,6#0,6;1,0;6,0;6,6#0,1;0,2;1,1|0,3;0,4;0,5;1,4|1,2;1,3;2,0;2,1;2,2;3,1|1,5;2,5;3,5;4,5|2,3;2,4;3,3;4,3|2,6;3,6;4,6|3,0;3,2;4,0;4,1;4,2;5,1|3,4;4,4;5,3;5,4;5,5|5,2;6,1;6,2;6,3;6,4;6,5#3:0,3:0,4:0,4:0,4:1,5:0,6:0,6:0,6:1"
  },
  {
    "id": "L071",
    "chapter": 4,
    "chapterTitle": "搬家挑戰",
    "title": "搬家挑戰 11",
    "rows": 7,
    "columns": 7,
    "difficulty": 4,
    "difficultyScore": 596,
    "seed": 412158,
    "generatorVersion": 1,
    "parMoves": 17,
    "moveLimit": 24,
    "fillableCells": [
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
    "blockedCells": [
      [
        0,
        0
      ],
      [
        1,
        0
      ],
      [
        6,
        6
      ]
    ],
    "fixedItems": [
      {
        "id": "fixed-1",
        "type": "sleeping-cat",
        "label": "睡覺中的貓咪",
        "cells": [
          [
            6,
            0
          ]
        ]
      },
      {
        "id": "fixed-2",
        "type": "yarn",
        "label": "毛線球",
        "cells": [
          [
            0,
            6
          ]
        ]
      }
    ],
    "pieces": [
      {
        "id": "piece-01",
        "label": "貓掌餅乾",
        "theme": "paw-cookie",
        "cells": [
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
          ],
          [
            3,
            0
          ],
          [
            3,
            1
          ]
        ],
        "initialRotation": 0,
        "initialFlipped": false,
        "allowRotate": false,
        "allowFlip": false,
        "equivalenceGroup": null
      },
      {
        "id": "piece-02",
        "label": "貓抓板",
        "theme": "scratcher",
        "cells": [
          [
            0,
            0
          ],
          [
            0,
            2
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
          ]
        ],
        "initialRotation": 0,
        "initialFlipped": false,
        "allowRotate": false,
        "allowFlip": false,
        "equivalenceGroup": null
      },
      {
        "id": "piece-03",
        "label": "睡墊",
        "theme": "sleep-mat",
        "cells": [
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
            1
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
        "initialRotation": 0,
        "initialFlipped": false,
        "allowRotate": false,
        "allowFlip": false,
        "equivalenceGroup": null
      },
      {
        "id": "piece-04",
        "label": "小魚玩具",
        "theme": "fish-toy",
        "cells": [
          [
            0,
            1
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
        "initialRotation": 1,
        "initialFlipped": false,
        "allowRotate": true,
        "allowFlip": false,
        "equivalenceGroup": null
      },
      {
        "id": "piece-05",
        "label": "紙箱",
        "theme": "cardboard",
        "cells": [
          [
            0,
            1
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
          ]
        ],
        "initialRotation": 2,
        "initialFlipped": false,
        "allowRotate": true,
        "allowFlip": false,
        "equivalenceGroup": null
      },
      {
        "id": "piece-06",
        "label": "草墊",
        "theme": "grass-mat",
        "cells": [
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
        "initialRotation": 3,
        "initialFlipped": false,
        "allowRotate": true,
        "allowFlip": false,
        "equivalenceGroup": null
      },
      {
        "id": "piece-07",
        "label": "逗貓棒",
        "theme": "teaser",
        "cells": [
          [
            0,
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
        "initialRotation": 0,
        "initialFlipped": false,
        "allowRotate": false,
        "allowFlip": false,
        "equivalenceGroup": null
      },
      {
        "id": "piece-08",
        "label": "貓咪靠枕",
        "theme": "cat-pillow",
        "cells": [
          [
            0,
            1
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
            2,
            0
          ]
        ],
        "initialRotation": 3,
        "initialFlipped": true,
        "allowRotate": true,
        "allowFlip": true,
        "equivalenceGroup": null
      },
      {
        "id": "piece-09",
        "label": "魚乾",
        "theme": "dried-fish",
        "cells": [
          [
            0,
            0
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
          ],
          [
            3,
            1
          ]
        ],
        "initialRotation": 0,
        "initialFlipped": false,
        "allowRotate": false,
        "allowFlip": false,
        "equivalenceGroup": null
      }
    ],
    "solution": {
      "piece-01": {
        "row": 2,
        "column": 5,
        "rotation": 0,
        "flipped": false
      },
      "piece-02": {
        "row": 3,
        "column": 1,
        "rotation": 0,
        "flipped": false
      },
      "piece-03": {
        "row": 2,
        "column": 3,
        "rotation": 0,
        "flipped": false
      },
      "piece-04": {
        "row": 5,
        "column": 1,
        "rotation": 0,
        "flipped": false
      },
      "piece-05": {
        "row": 4,
        "column": 3,
        "rotation": 0,
        "flipped": false
      },
      "piece-06": {
        "row": 0,
        "column": 3,
        "rotation": 0,
        "flipped": false
      },
      "piece-07": {
        "row": 4,
        "column": 0,
        "rotation": 0,
        "flipped": false
      },
      "piece-08": {
        "row": 1,
        "column": 0,
        "rotation": 0,
        "flipped": false
      },
      "piece-09": {
        "row": 0,
        "column": 1,
        "rotation": 0,
        "flipped": false
      }
    },
    "metrics": {
      "fillableCellCount": 44,
      "pieceCount": 9,
      "blockedCellCount": 3,
      "fixedItemCount": 2,
      "allowFlipPieceCount": 1,
      "irregularPieceCount": 9,
      "solutionCount": 1,
      "solverNodes": 1664,
      "solverBacktracks": 1654,
      "solverMaxDepth": 9,
      "solverCandidateCount": 523
    },
    "canonicalSignature": "7x7#0,1;0,2;0,3;0,4;0,5;1,0;1,1;1,2;1,3;1,4;1,5;1,6;2,0;2,1;2,2;2,3;2,4;2,5;2,6;3,0;3,1;3,2;3,3;3,4;3,5;3,6;4,0;4,1;4,2;4,3;4,4;4,5;4,6;5,0;5,1;5,2;5,3;5,4;5,5;5,6;6,1;6,2;6,3;6,4#0,0;6,5;6,6#0,6;6,0#0,1;0,2;0,3;0,4;1,1|0,5;1,5;1,6;2,5;2,6;3,5;3,6|1,0;2,0;2,1;2,2;3,0;3,1|1,2;1,3;1,4;2,3;2,4;3,4|3,2;3,3;4,2;5,2;5,3|4,0;4,1;5,0|4,3;4,4;4,5;4,6;5,6|5,1;6,1;6,2|5,4;5,5;6,3;6,4#3:0,3:0,4:1,5:0,5:0,5:0,6:0,6:0,7:0"
  },
  {
    "id": "L072",
    "chapter": 4,
    "chapterTitle": "搬家挑戰",
    "title": "搬家挑戰 12",
    "rows": 7,
    "columns": 7,
    "difficulty": 4,
    "difficultyScore": 607,
    "seed": 404051,
    "generatorVersion": 1,
    "parMoves": 17,
    "moveLimit": 25,
    "fillableCells": [
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
    "blockedCells": [
      [
        0,
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
        6
      ]
    ],
    "fixedItems": [
      {
        "id": "fixed-1",
        "type": "sleeping-cat",
        "label": "睡覺中的貓咪",
        "cells": [
          [
            0,
            6
          ]
        ]
      },
      {
        "id": "fixed-2",
        "type": "yarn",
        "label": "毛線球",
        "cells": [
          [
            5,
            0
          ]
        ]
      },
      {
        "id": "fixed-3",
        "type": "cardboard",
        "label": "紙箱隔板",
        "cells": [
          [
            1,
            6
          ]
        ]
      }
    ],
    "pieces": [
      {
        "id": "piece-01",
        "label": "紙箱",
        "theme": "cardboard",
        "cells": [
          [
            0,
            0
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
            1,
            2
          ],
          [
            1,
            3
          ]
        ],
        "initialRotation": 0,
        "initialFlipped": false,
        "allowRotate": false,
        "allowFlip": true,
        "equivalenceGroup": null
      },
      {
        "id": "piece-02",
        "label": "草墊",
        "theme": "grass-mat",
        "cells": [
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
            1
          ],
          [
            2,
            0
          ],
          [
            2,
            1
          ]
        ],
        "initialRotation": 3,
        "initialFlipped": false,
        "allowRotate": true,
        "allowFlip": false,
        "equivalenceGroup": null
      },
      {
        "id": "piece-03",
        "label": "逗貓棒",
        "theme": "teaser",
        "cells": [
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
            1
          ]
        ],
        "initialRotation": 2,
        "initialFlipped": false,
        "allowRotate": true,
        "allowFlip": false,
        "equivalenceGroup": null
      },
      {
        "id": "piece-04",
        "label": "貓咪靠枕",
        "theme": "cat-pillow",
        "cells": [
          [
            0,
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
        "initialRotation": 0,
        "initialFlipped": false,
        "allowRotate": false,
        "allowFlip": false,
        "equivalenceGroup": null
      },
      {
        "id": "piece-05",
        "label": "魚乾",
        "theme": "dried-fish",
        "cells": [
          [
            0,
            0
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
          ],
          [
            3,
            1
          ]
        ],
        "initialRotation": 2,
        "initialFlipped": false,
        "allowRotate": true,
        "allowFlip": false,
        "equivalenceGroup": null
      },
      {
        "id": "piece-06",
        "label": "貓罐頭",
        "theme": "cat-can",
        "cells": [
          [
            0,
            0
          ],
          [
            0,
            1
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
            2,
            1
          ]
        ],
        "initialRotation": 0,
        "initialFlipped": false,
        "allowRotate": false,
        "allowFlip": true,
        "equivalenceGroup": null
      },
      {
        "id": "piece-07",
        "label": "毛線球",
        "theme": "yarn",
        "cells": [
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
          ]
        ],
        "initialRotation": 0,
        "initialFlipped": false,
        "allowRotate": false,
        "allowFlip": false,
        "equivalenceGroup": null
      },
      {
        "id": "piece-08",
        "label": "鮮奶盒",
        "theme": "milk",
        "cells": [
          [
            0,
            0
          ],
          [
            0,
            1
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
          ]
        ],
        "initialRotation": 0,
        "initialFlipped": true,
        "allowRotate": false,
        "allowFlip": true,
        "equivalenceGroup": null
      },
      {
        "id": "piece-09",
        "label": "貓掌餅乾",
        "theme": "paw-cookie",
        "cells": [
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
        "initialRotation": 2,
        "initialFlipped": false,
        "allowRotate": true,
        "allowFlip": false,
        "equivalenceGroup": null
      }
    ],
    "solution": {
      "piece-01": {
        "row": 4,
        "column": 2,
        "rotation": 0,
        "flipped": false
      },
      "piece-02": {
        "row": 1,
        "column": 2,
        "rotation": 0,
        "flipped": false
      },
      "piece-03": {
        "row": 0,
        "column": 1,
        "rotation": 0,
        "flipped": false
      },
      "piece-04": {
        "row": 5,
        "column": 2,
        "rotation": 0,
        "flipped": false
      },
      "piece-05": {
        "row": 0,
        "column": 4,
        "rotation": 0,
        "flipped": false
      },
      "piece-06": {
        "row": 3,
        "column": 0,
        "rotation": 0,
        "flipped": false
      },
      "piece-07": {
        "row": 2,
        "column": 4,
        "rotation": 0,
        "flipped": false
      },
      "piece-08": {
        "row": 1,
        "column": 0,
        "rotation": 0,
        "flipped": false
      },
      "piece-09": {
        "row": 2,
        "column": 6,
        "rotation": 0,
        "flipped": false
      }
    },
    "metrics": {
      "fillableCellCount": 42,
      "pieceCount": 9,
      "blockedCellCount": 4,
      "fixedItemCount": 3,
      "allowFlipPieceCount": 3,
      "irregularPieceCount": 8,
      "solutionCount": 1,
      "solverNodes": 1093,
      "solverBacktracks": 1083,
      "solverMaxDepth": 9,
      "solverCandidateCount": 438
    },
    "canonicalSignature": "7x7#0,1;0,2;0,3;0,4;0,5;1,0;1,1;1,2;1,3;1,4;1,5;2,0;2,1;2,2;2,3;2,4;2,5;2,6;3,0;3,1;3,2;3,3;3,4;3,5;3,6;4,0;4,1;4,2;4,3;4,4;4,5;4,6;5,1;5,2;5,3;5,4;5,5;5,6;6,2;6,3;6,4;6,5#0,0;6,0;6,1;6,6#0,6;1,6;5,0#0,1;0,2;0,3;1,2|0,4;0,5;1,5;2,5;3,5|1,0;1,1;2,0;2,1;2,2|1,3;1,4;2,3;3,2;3,3|2,4;3,4;4,4;4,5|2,6;3,6;4,6;5,6|3,0;3,1;4,0;4,1;5,1|4,2;4,3;5,3;5,4;5,5|5,2;6,2;6,3;6,4;6,5#4:0,4:0,4:0,5:0,5:0,5:0,5:1,5:1,5:1"
  },
  {
    "id": "L073",
    "chapter": 4,
    "chapterTitle": "搬家挑戰",
    "title": "搬家挑戰 13",
    "rows": 7,
    "columns": 7,
    "difficulty": 4,
    "difficultyScore": 608,
    "seed": 414250,
    "generatorVersion": 1,
    "parMoves": 21,
    "moveLimit": 32,
    "fillableCells": [
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
    "blockedCells": [
      [
        1,
        6
      ],
      [
        6,
        0
      ],
      [
        6,
        6
      ]
    ],
    "fixedItems": [
      {
        "id": "fixed-1",
        "type": "sleeping-cat",
        "label": "睡覺中的貓咪",
        "cells": [
          [
            0,
            0
          ]
        ]
      },
      {
        "id": "fixed-2",
        "type": "yarn",
        "label": "毛線球",
        "cells": [
          [
            0,
            6
          ]
        ]
      }
    ],
    "pieces": [
      {
        "id": "piece-01",
        "label": "睡墊",
        "theme": "sleep-mat",
        "cells": [
          [
            0,
            1
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
            2,
            0
          ],
          [
            3,
            0
          ]
        ],
        "initialRotation": 1,
        "initialFlipped": false,
        "allowRotate": true,
        "allowFlip": false,
        "equivalenceGroup": null
      },
      {
        "id": "piece-02",
        "label": "小魚玩具",
        "theme": "fish-toy",
        "cells": [
          [
            0,
            0
          ],
          [
            0,
            1
          ],
          [
            1,
            0
          ]
        ],
        "initialRotation": 1,
        "initialFlipped": false,
        "allowRotate": true,
        "allowFlip": true,
        "equivalenceGroup": null
      },
      {
        "id": "piece-03",
        "label": "紙箱",
        "theme": "cardboard",
        "cells": [
          [
            0,
            2
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
            2,
            2
          ]
        ],
        "initialRotation": 0,
        "initialFlipped": false,
        "allowRotate": false,
        "allowFlip": true,
        "equivalenceGroup": null
      },
      {
        "id": "piece-04",
        "label": "草墊",
        "theme": "grass-mat",
        "cells": [
          [
            0,
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
            2,
            0
          ],
          [
            2,
            2
          ]
        ],
        "initialRotation": 2,
        "initialFlipped": false,
        "allowRotate": true,
        "allowFlip": false,
        "equivalenceGroup": null
      },
      {
        "id": "piece-05",
        "label": "逗貓棒",
        "theme": "teaser",
        "cells": [
          [
            0,
            0
          ],
          [
            0,
            1
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
        "initialRotation": 0,
        "initialFlipped": false,
        "allowRotate": false,
        "allowFlip": false,
        "equivalenceGroup": null
      },
      {
        "id": "piece-06",
        "label": "貓咪靠枕",
        "theme": "cat-pillow",
        "cells": [
          [
            0,
            0
          ],
          [
            0,
            1
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
            2,
            0
          ]
        ],
        "initialRotation": 0,
        "initialFlipped": false,
        "allowRotate": false,
        "allowFlip": false,
        "equivalenceGroup": null
      },
      {
        "id": "piece-07",
        "label": "魚乾",
        "theme": "dried-fish",
        "cells": [
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
            1,
            1
          ]
        ],
        "initialRotation": 1,
        "initialFlipped": false,
        "allowRotate": true,
        "allowFlip": false,
        "equivalenceGroup": null
      },
      {
        "id": "piece-08",
        "label": "貓罐頭",
        "theme": "cat-can",
        "cells": [
          [
            0,
            0
          ],
          [
            0,
            1
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
          ]
        ],
        "initialRotation": 3,
        "initialFlipped": false,
        "allowRotate": true,
        "allowFlip": false,
        "equivalenceGroup": null
      },
      {
        "id": "piece-09",
        "label": "毛線球",
        "theme": "yarn",
        "cells": [
          [
            0,
            0
          ],
          [
            0,
            2
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
        "initialRotation": 0,
        "initialFlipped": false,
        "allowRotate": false,
        "allowFlip": false,
        "equivalenceGroup": null
      }
    ],
    "solution": {
      "piece-01": {
        "row": 0,
        "column": 4,
        "rotation": 0,
        "flipped": false
      },
      "piece-02": {
        "row": 4,
        "column": 0,
        "rotation": 0,
        "flipped": false
      },
      "piece-03": {
        "row": 1,
        "column": 1,
        "rotation": 0,
        "flipped": false
      },
      "piece-04": {
        "row": 3,
        "column": 2,
        "rotation": 0,
        "flipped": false
      },
      "piece-05": {
        "row": 2,
        "column": 5,
        "rotation": 0,
        "flipped": false
      },
      "piece-06": {
        "row": 4,
        "column": 5,
        "rotation": 0,
        "flipped": false
      },
      "piece-07": {
        "row": 0,
        "column": 1,
        "rotation": 0,
        "flipped": false
      },
      "piece-08": {
        "row": 1,
        "column": 0,
        "rotation": 0,
        "flipped": false
      },
      "piece-09": {
        "row": 5,
        "column": 1,
        "rotation": 0,
        "flipped": false
      }
    },
    "metrics": {
      "fillableCellCount": 44,
      "pieceCount": 9,
      "blockedCellCount": 3,
      "fixedItemCount": 2,
      "allowFlipPieceCount": 2,
      "irregularPieceCount": 8,
      "solutionCount": 1,
      "solverNodes": 1816,
      "solverBacktracks": 1806,
      "solverMaxDepth": 9,
      "solverCandidateCount": 602
    },
    "canonicalSignature": "7x7#0,1;0,2;0,3;0,4;0,5;1,0;1,1;1,2;1,3;1,4;1,5;1,6;2,0;2,1;2,2;2,3;2,4;2,5;2,6;3,0;3,1;3,2;3,3;3,4;3,5;3,6;4,0;4,1;4,2;4,3;4,4;4,5;4,6;5,0;5,1;5,2;5,3;5,4;5,5;5,6;6,1;6,2;6,3;6,4#0,0;6,0;6,5#0,6;6,6#0,1;0,2;1,2|0,3;0,4;0,5;1,3;1,5|1,0;1,1;2,0;3,0;3,1;4,0|1,4;2,4;3,3;3,4;3,5|1,6;2,5;2,6;3,6;4,6|2,1;2,2;2,3;3,2;4,1;4,2|4,3;4,4;4,5;5,5;5,6|5,0;5,1;5,2;6,1;6,2|5,3;5,4;6,3;6,4#3:1,4:0,5:0,5:0,5:0,5:0,5:1,6:0,6:0"
  },
  {
    "id": "L074",
    "chapter": 4,
    "chapterTitle": "搬家挑戰",
    "title": "搬家挑戰 14",
    "rows": 8,
    "columns": 8,
    "difficulty": 4,
    "difficultyScore": 610,
    "seed": 407004,
    "generatorVersion": 1,
    "parMoves": 20,
    "moveLimit": 32,
    "fillableCells": [
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
      ]
    ],
    "blockedCells": [
      [
        0,
        7
      ],
      [
        1,
        0
      ],
      [
        7,
        0
      ],
      [
        7,
        7
      ]
    ],
    "fixedItems": [
      {
        "id": "fixed-1",
        "type": "sleeping-cat",
        "label": "睡覺中的貓咪",
        "cells": [
          [
            6,
            0
          ]
        ]
      },
      {
        "id": "fixed-2",
        "type": "yarn",
        "label": "毛線球",
        "cells": [
          [
            0,
            0
          ]
        ]
      },
      {
        "id": "fixed-3",
        "type": "cardboard",
        "label": "紙箱隔板",
        "cells": [
          [
            6,
            7
          ]
        ]
      }
    ],
    "pieces": [
      {
        "id": "piece-01",
        "label": "貓咪靠枕",
        "theme": "cat-pillow",
        "cells": [
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
            1
          ],
          [
            1,
            2
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
            3,
            1
          ]
        ],
        "initialRotation": 1,
        "initialFlipped": false,
        "allowRotate": true,
        "allowFlip": true,
        "equivalenceGroup": null
      },
      {
        "id": "piece-02",
        "label": "魚乾",
        "theme": "dried-fish",
        "cells": [
          [
            0,
            0
          ],
          [
            0,
            1
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
            2,
            0
          ],
          [
            2,
            1
          ]
        ],
        "initialRotation": 0,
        "initialFlipped": false,
        "allowRotate": true,
        "allowFlip": false,
        "equivalenceGroup": null
      },
      {
        "id": "piece-03",
        "label": "貓罐頭",
        "theme": "cat-can",
        "cells": [
          [
            0,
            0
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
            1,
            2
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
            3,
            2
          ]
        ],
        "initialRotation": 0,
        "initialFlipped": false,
        "allowRotate": true,
        "allowFlip": false,
        "equivalenceGroup": null
      },
      {
        "id": "piece-04",
        "label": "毛線球",
        "theme": "yarn",
        "cells": [
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
          ]
        ],
        "initialRotation": 0,
        "initialFlipped": false,
        "allowRotate": false,
        "allowFlip": false,
        "equivalenceGroup": null
      },
      {
        "id": "piece-05",
        "label": "鮮奶盒",
        "theme": "milk",
        "cells": [
          [
            0,
            1
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
            2,
            1
          ],
          [
            2,
            2
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
        "initialRotation": 2,
        "initialFlipped": false,
        "allowRotate": true,
        "allowFlip": false,
        "equivalenceGroup": null
      },
      {
        "id": "piece-06",
        "label": "貓掌餅乾",
        "theme": "paw-cookie",
        "cells": [
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
            1
          ],
          [
            1,
            2
          ]
        ],
        "initialRotation": 1,
        "initialFlipped": false,
        "allowRotate": true,
        "allowFlip": false,
        "equivalenceGroup": null
      },
      {
        "id": "piece-07",
        "label": "貓抓板",
        "theme": "scratcher",
        "cells": [
          [
            0,
            0
          ],
          [
            0,
            1
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
            2,
            0
          ],
          [
            2,
            1
          ],
          [
            3,
            0
          ]
        ],
        "initialRotation": 0,
        "initialFlipped": false,
        "allowRotate": false,
        "allowFlip": false,
        "equivalenceGroup": null
      },
      {
        "id": "piece-08",
        "label": "睡墊",
        "theme": "sleep-mat",
        "cells": [
          [
            0,
            0
          ],
          [
            0,
            1
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
            2,
            2
          ]
        ],
        "initialRotation": 3,
        "initialFlipped": false,
        "allowRotate": true,
        "allowFlip": false,
        "equivalenceGroup": null
      },
      {
        "id": "piece-09",
        "label": "小魚玩具",
        "theme": "fish-toy",
        "cells": [
          [
            0,
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
            2,
            1
          ],
          [
            3,
            1
          ]
        ],
        "initialRotation": 2,
        "initialFlipped": false,
        "allowRotate": true,
        "allowFlip": false,
        "equivalenceGroup": null
      }
    ],
    "solution": {
      "piece-01": {
        "row": 2,
        "column": 2,
        "rotation": 0,
        "flipped": false
      },
      "piece-02": {
        "row": 5,
        "column": 1,
        "rotation": 0,
        "flipped": false
      },
      "piece-03": {
        "row": 2,
        "column": 5,
        "rotation": 0,
        "flipped": false
      },
      "piece-04": {
        "row": 5,
        "column": 3,
        "rotation": 0,
        "flipped": false
      },
      "piece-05": {
        "row": 3,
        "column": 4,
        "rotation": 0,
        "flipped": false
      },
      "piece-06": {
        "row": 0,
        "column": 2,
        "rotation": 0,
        "flipped": false
      },
      "piece-07": {
        "row": 2,
        "column": 0,
        "rotation": 0,
        "flipped": false
      },
      "piece-08": {
        "row": 0,
        "column": 5,
        "rotation": 0,
        "flipped": false
      },
      "piece-09": {
        "row": 0,
        "column": 1,
        "rotation": 0,
        "flipped": false
      }
    },
    "metrics": {
      "fillableCellCount": 57,
      "pieceCount": 9,
      "blockedCellCount": 4,
      "fixedItemCount": 3,
      "allowFlipPieceCount": 1,
      "irregularPieceCount": 9,
      "solutionCount": 1,
      "solverNodes": 962,
      "solverBacktracks": 952,
      "solverMaxDepth": 9,
      "solverCandidateCount": 993
    },
    "canonicalSignature": "8x8#0,1;0,2;0,3;0,4;0,5;0,6;1,0;1,1;1,2;1,3;1,4;1,5;1,6;2,0;2,1;2,2;2,3;2,4;2,5;2,6;2,7;3,0;3,1;3,2;3,3;3,4;3,5;3,6;3,7;4,0;4,1;4,2;4,3;4,4;4,5;4,6;4,7;5,0;5,1;5,2;5,3;5,4;5,5;5,6;5,7;6,1;6,2;6,3;6,4;6,5;6,6;7,1;7,2;7,3;7,4;7,5;7,6#0,0;1,7;7,0;7,7#0,7;6,0;6,7#0,1;0,2;1,0;1,1;1,2;2,0|0,3;0,4;0,5;1,3;1,4|0,6;1,5;1,6;2,5;3,5|2,1;2,2;3,0;3,1;4,0;4,1;5,0|2,3;2,4;3,3;3,4;4,4;4,5;5,4|2,6;2,7;3,6;3,7;4,6;4,7;5,7|3,2;4,2;4,3;5,1;5,2;6,1;6,2|5,3;6,3;7,1;7,2;7,3;7,4|5,5;5,6;6,4;6,5;6,6;7,5;7,6#5:0,5:0,6:0,6:0,7:0,7:0,7:0,7:0,7:1"
  },
  {
    "id": "L075",
    "chapter": 4,
    "chapterTitle": "搬家挑戰",
    "title": "搬家挑戰 15",
    "rows": 8,
    "columns": 8,
    "difficulty": 4,
    "difficultyScore": 615,
    "seed": 419005,
    "generatorVersion": 1,
    "parMoves": 20,
    "moveLimit": 31,
    "fillableCells": [
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
      ]
    ],
    "blockedCells": [
      [
        0,
        6
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
        7
      ]
    ],
    "fixedItems": [
      {
        "id": "fixed-1",
        "type": "sleeping-cat",
        "label": "睡覺中的貓咪",
        "cells": [
          [
            0,
            7
          ]
        ]
      },
      {
        "id": "fixed-2",
        "type": "yarn",
        "label": "毛線球",
        "cells": [
          [
            1,
            7
          ]
        ]
      },
      {
        "id": "fixed-3",
        "type": "cardboard",
        "label": "紙箱隔板",
        "cells": [
          [
            1,
            0
          ]
        ]
      },
      {
        "id": "fixed-4",
        "type": "sleeping-cat",
        "label": "睡覺中的貓咪",
        "cells": [
          [
            0,
            0
          ]
        ]
      }
    ],
    "pieces": [
      {
        "id": "piece-01",
        "label": "貓咪靠枕",
        "theme": "cat-pillow",
        "cells": [
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
            2,
            1
          ],
          [
            2,
            2
          ],
          [
            3,
            1
          ]
        ],
        "initialRotation": 0,
        "initialFlipped": false,
        "allowRotate": false,
        "allowFlip": false,
        "equivalenceGroup": null
      },
      {
        "id": "piece-02",
        "label": "魚乾",
        "theme": "dried-fish",
        "cells": [
          [
            0,
            1
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
        "initialRotation": 0,
        "initialFlipped": false,
        "allowRotate": false,
        "allowFlip": false,
        "equivalenceGroup": null
      },
      {
        "id": "piece-03",
        "label": "貓罐頭",
        "theme": "cat-can",
        "cells": [
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
            0
          ],
          [
            1,
            1
          ],
          [
            1,
            2
          ]
        ],
        "initialRotation": 1,
        "initialFlipped": false,
        "allowRotate": true,
        "allowFlip": false,
        "equivalenceGroup": null
      },
      {
        "id": "piece-04",
        "label": "毛線球",
        "theme": "yarn",
        "cells": [
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
            1
          ],
          [
            1,
            2
          ]
        ],
        "initialRotation": 2,
        "initialFlipped": false,
        "allowRotate": true,
        "allowFlip": false,
        "equivalenceGroup": null
      },
      {
        "id": "piece-05",
        "label": "鮮奶盒",
        "theme": "milk",
        "cells": [
          [
            0,
            0
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
            1,
            2
          ],
          [
            1,
            3
          ]
        ],
        "initialRotation": 0,
        "initialFlipped": true,
        "allowRotate": false,
        "allowFlip": true,
        "equivalenceGroup": null
      },
      {
        "id": "piece-06",
        "label": "貓掌餅乾",
        "theme": "paw-cookie",
        "cells": [
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
            3,
            1
          ]
        ],
        "initialRotation": 2,
        "initialFlipped": false,
        "allowRotate": true,
        "allowFlip": false,
        "equivalenceGroup": null
      },
      {
        "id": "piece-07",
        "label": "貓抓板",
        "theme": "scratcher",
        "cells": [
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
          ]
        ],
        "initialRotation": 3,
        "initialFlipped": false,
        "allowRotate": true,
        "allowFlip": true,
        "equivalenceGroup": null
      },
      {
        "id": "piece-08",
        "label": "睡墊",
        "theme": "sleep-mat",
        "cells": [
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
            1
          ],
          [
            1,
            2
          ],
          [
            2,
            1
          ]
        ],
        "initialRotation": 2,
        "initialFlipped": false,
        "allowRotate": true,
        "allowFlip": false,
        "equivalenceGroup": null
      },
      {
        "id": "piece-09",
        "label": "小魚玩具",
        "theme": "fish-toy",
        "cells": [
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
            1
          ],
          [
            1,
            2
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
          ]
        ],
        "initialRotation": 0,
        "initialFlipped": false,
        "allowRotate": false,
        "allowFlip": false,
        "equivalenceGroup": null
      }
    ],
    "solution": {
      "piece-01": {
        "row": 1,
        "column": 0,
        "rotation": 0,
        "flipped": false
      },
      "piece-02": {
        "row": 6,
        "column": 3,
        "rotation": 0,
        "flipped": false
      },
      "piece-03": {
        "row": 2,
        "column": 5,
        "rotation": 0,
        "flipped": false
      },
      "piece-04": {
        "row": 4,
        "column": 5,
        "rotation": 0,
        "flipped": false
      },
      "piece-05": {
        "row": 5,
        "column": 4,
        "rotation": 0,
        "flipped": false
      },
      "piece-06": {
        "row": 3,
        "column": 0,
        "rotation": 0,
        "flipped": false
      },
      "piece-07": {
        "row": 0,
        "column": 1,
        "rotation": 0,
        "flipped": false
      },
      "piece-08": {
        "row": 5,
        "column": 1,
        "rotation": 0,
        "flipped": false
      },
      "piece-09": {
        "row": 2,
        "column": 2,
        "rotation": 0,
        "flipped": false
      }
    },
    "metrics": {
      "fillableCellCount": 56,
      "pieceCount": 9,
      "blockedCellCount": 4,
      "fixedItemCount": 4,
      "allowFlipPieceCount": 2,
      "irregularPieceCount": 8,
      "solutionCount": 1,
      "solverNodes": 821,
      "solverBacktracks": 811,
      "solverMaxDepth": 9,
      "solverCandidateCount": 714
    },
    "canonicalSignature": "8x8#0,1;0,2;0,3;0,4;0,5;1,0;1,1;1,2;1,3;1,4;1,5;1,6;1,7;2,0;2,1;2,2;2,3;2,4;2,5;2,6;2,7;3,0;3,1;3,2;3,3;3,4;3,5;3,6;3,7;4,0;4,1;4,2;4,3;4,4;4,5;4,6;4,7;5,0;5,1;5,2;5,3;5,4;5,5;5,6;5,7;6,1;6,2;6,3;6,4;6,5;6,6;7,2;7,3;7,4;7,5;7,6#0,0;0,6;0,7;7,1#6,0;6,7;7,0;7,7#0,1;0,2;0,3;0,4;1,3|0,5;1,4;1,5;2,4;2,5;2,6|1,0;1,1;1,2;2,2;2,3|1,6;1,7;2,7;3,7;4,7|2,0;2,1;3,0;3,1;3,2|3,3;3,4;3,5;4,3;4,4;5,3;5,4|3,6;4,5;4,6;5,5;5,6;5,7;6,5;6,6|4,0;4,1;4,2;5,0;5,1;5,2|6,1;6,2;6,3;6,4;7,2;7,3;7,4;7,5;7,6#5:0,5:0,5:0,5:1,6:0,6:0,7:0,8:0,9:1"
  },
  {
    "id": "L076",
    "chapter": 4,
    "chapterTitle": "搬家挑戰",
    "title": "搬家挑戰 16",
    "rows": 8,
    "columns": 8,
    "difficulty": 4,
    "difficultyScore": 616,
    "seed": 411009,
    "generatorVersion": 1,
    "parMoves": 23,
    "moveLimit": 30,
    "fillableCells": [
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
      ]
    ],
    "blockedCells": [
      [
        0,
        7
      ],
      [
        7,
        7
      ]
    ],
    "fixedItems": [
      {
        "id": "fixed-1",
        "type": "sleeping-cat",
        "label": "睡覺中的貓咪",
        "cells": [
          [
            0,
            0
          ]
        ]
      },
      {
        "id": "fixed-2",
        "type": "yarn",
        "label": "毛線球",
        "cells": [
          [
            7,
            0
          ]
        ]
      }
    ],
    "pieces": [
      {
        "id": "piece-01",
        "label": "鮮奶盒",
        "theme": "milk",
        "cells": [
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
            0
          ],
          [
            2,
            1
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
            4,
            1
          ]
        ],
        "initialRotation": 3,
        "initialFlipped": false,
        "allowRotate": true,
        "allowFlip": false,
        "equivalenceGroup": null
      },
      {
        "id": "piece-02",
        "label": "貓掌餅乾",
        "theme": "paw-cookie",
        "cells": [
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
            2,
            0
          ],
          [
            2,
            1
          ],
          [
            3,
            1
          ]
        ],
        "initialRotation": 2,
        "initialFlipped": false,
        "allowRotate": true,
        "allowFlip": false,
        "equivalenceGroup": null
      },
      {
        "id": "piece-03",
        "label": "貓抓板",
        "theme": "scratcher",
        "cells": [
          [
            0,
            0
          ],
          [
            0,
            1
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
            2,
            1
          ]
        ],
        "initialRotation": 1,
        "initialFlipped": false,
        "allowRotate": true,
        "allowFlip": false,
        "equivalenceGroup": null
      },
      {
        "id": "piece-04",
        "label": "睡墊",
        "theme": "sleep-mat",
        "cells": [
          [
            0,
            1
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
          ]
        ],
        "initialRotation": 0,
        "initialFlipped": false,
        "allowRotate": false,
        "allowFlip": false,
        "equivalenceGroup": null
      },
      {
        "id": "piece-05",
        "label": "小魚玩具",
        "theme": "fish-toy",
        "cells": [
          [
            0,
            0
          ],
          [
            0,
            1
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
            2,
            2
          ]
        ],
        "initialRotation": 3,
        "initialFlipped": false,
        "allowRotate": true,
        "allowFlip": false,
        "equivalenceGroup": null
      },
      {
        "id": "piece-06",
        "label": "紙箱",
        "theme": "cardboard",
        "cells": [
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
            1
          ],
          [
            2,
            1
          ]
        ],
        "initialRotation": 3,
        "initialFlipped": false,
        "allowRotate": true,
        "allowFlip": false,
        "equivalenceGroup": null
      },
      {
        "id": "piece-07",
        "label": "草墊",
        "theme": "grass-mat",
        "cells": [
          [
            0,
            1
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
            2,
            0
          ],
          [
            2,
            1
          ],
          [
            3,
            0
          ]
        ],
        "initialRotation": 2,
        "initialFlipped": false,
        "allowRotate": true,
        "allowFlip": false,
        "equivalenceGroup": null
      },
      {
        "id": "piece-08",
        "label": "逗貓棒",
        "theme": "teaser",
        "cells": [
          [
            0,
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
          ]
        ],
        "initialRotation": 0,
        "initialFlipped": false,
        "allowRotate": false,
        "allowFlip": false,
        "equivalenceGroup": null
      },
      {
        "id": "piece-09",
        "label": "貓咪靠枕",
        "theme": "cat-pillow",
        "cells": [
          [
            0,
            1
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
          ]
        ],
        "initialRotation": 1,
        "initialFlipped": true,
        "allowRotate": true,
        "allowFlip": true,
        "equivalenceGroup": null
      }
    ],
    "solution": {
      "piece-01": {
        "row": 1,
        "column": 6,
        "rotation": 0,
        "flipped": false
      },
      "piece-02": {
        "row": 4,
        "column": 0,
        "rotation": 0,
        "flipped": false
      },
      "piece-03": {
        "row": 3,
        "column": 3,
        "rotation": 0,
        "flipped": false
      },
      "piece-04": {
        "row": 4,
        "column": 4,
        "rotation": 0,
        "flipped": false
      },
      "piece-05": {
        "row": 0,
        "column": 1,
        "rotation": 0,
        "flipped": false
      },
      "piece-06": {
        "row": 0,
        "column": 3,
        "rotation": 0,
        "flipped": false
      },
      "piece-07": {
        "row": 0,
        "column": 5,
        "rotation": 0,
        "flipped": false
      },
      "piece-08": {
        "row": 1,
        "column": 0,
        "rotation": 0,
        "flipped": false
      },
      "piece-09": {
        "row": 5,
        "column": 2,
        "rotation": 0,
        "flipped": false
      }
    },
    "metrics": {
      "fillableCellCount": 60,
      "pieceCount": 9,
      "blockedCellCount": 2,
      "fixedItemCount": 2,
      "allowFlipPieceCount": 1,
      "irregularPieceCount": 9,
      "solutionCount": 1,
      "solverNodes": 1464,
      "solverBacktracks": 1454,
      "solverMaxDepth": 9,
      "solverCandidateCount": 947
    },
    "canonicalSignature": "8x8#0,1;0,2;0,3;0,4;0,5;0,6;1,0;1,1;1,2;1,3;1,4;1,5;1,6;1,7;2,0;2,1;2,2;2,3;2,4;2,5;2,6;2,7;3,0;3,1;3,2;3,3;3,4;3,5;3,6;3,7;4,0;4,1;4,2;4,3;4,4;4,5;4,6;4,7;5,0;5,1;5,2;5,3;5,4;5,5;5,6;5,7;6,0;6,1;6,2;6,3;6,4;6,5;6,6;6,7;7,1;7,2;7,3;7,4;7,5;7,6#0,0;0,7#7,0;7,7#0,1;0,2;0,3;0,4;0,5;1,3;1,4|0,6;1,5;1,6;2,4;2,5;2,6;3,6|1,0;1,1;1,2;2,1;2,2;2,3|1,7;2,7;3,7;4,5;4,6;4,7;5,6;5,7|2,0;3,0;3,1;3,2;4,0|3,3;3,4;3,5;4,3;4,4|4,1;4,2;5,0;5,1;6,0;6,1|5,2;5,3;6,2;6,3;7,1;7,2;7,3|5,4;5,5;6,4;6,5;6,6;6,7;7,4;7,5;7,6#5:0,5:0,6:0,6:0,7:0,7:0,7:0,8:1,9:0"
  },
  {
    "id": "L077",
    "chapter": 4,
    "chapterTitle": "搬家挑戰",
    "title": "搬家挑戰 17",
    "rows": 8,
    "columns": 8,
    "difficulty": 4,
    "difficultyScore": 629,
    "seed": 401003,
    "generatorVersion": 1,
    "parMoves": 18,
    "moveLimit": 29,
    "fillableCells": [
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
      ]
    ],
    "blockedCells": [
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
        7
      ],
      [
        7,
        7
      ]
    ],
    "fixedItems": [
      {
        "id": "fixed-1",
        "type": "sleeping-cat",
        "label": "睡覺中的貓咪",
        "cells": [
          [
            7,
            0
          ]
        ]
      },
      {
        "id": "fixed-2",
        "type": "yarn",
        "label": "毛線球",
        "cells": [
          [
            0,
            6
          ]
        ]
      },
      {
        "id": "fixed-3",
        "type": "cardboard",
        "label": "紙箱隔板",
        "cells": [
          [
            7,
            6
          ]
        ]
      }
    ],
    "pieces": [
      {
        "id": "piece-01",
        "label": "貓抓板",
        "theme": "scratcher",
        "cells": [
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
            2,
            0
          ]
        ],
        "initialRotation": 0,
        "initialFlipped": false,
        "allowRotate": true,
        "allowFlip": false,
        "equivalenceGroup": null
      },
      {
        "id": "piece-02",
        "label": "睡墊",
        "theme": "sleep-mat",
        "cells": [
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
          ]
        ],
        "initialRotation": 1,
        "initialFlipped": false,
        "allowRotate": true,
        "allowFlip": true,
        "equivalenceGroup": null
      },
      {
        "id": "piece-03",
        "label": "小魚玩具",
        "theme": "fish-toy",
        "cells": [
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
            1
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
        "initialRotation": 0,
        "initialFlipped": false,
        "allowRotate": true,
        "allowFlip": false,
        "equivalenceGroup": null
      },
      {
        "id": "piece-04",
        "label": "紙箱",
        "theme": "cardboard",
        "cells": [
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
            1
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
          ]
        ],
        "initialRotation": 0,
        "initialFlipped": false,
        "allowRotate": true,
        "allowFlip": false,
        "equivalenceGroup": null
      },
      {
        "id": "piece-05",
        "label": "草墊",
        "theme": "grass-mat",
        "cells": [
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
            0
          ],
          [
            1,
            1
          ],
          [
            2,
            0
          ]
        ],
        "initialRotation": 0,
        "initialFlipped": false,
        "allowRotate": false,
        "allowFlip": false,
        "equivalenceGroup": null
      },
      {
        "id": "piece-06",
        "label": "逗貓棒",
        "theme": "teaser",
        "cells": [
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
          ]
        ],
        "initialRotation": 0,
        "initialFlipped": false,
        "allowRotate": true,
        "allowFlip": false,
        "equivalenceGroup": null
      },
      {
        "id": "piece-07",
        "label": "貓咪靠枕",
        "theme": "cat-pillow",
        "cells": [
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
        "initialRotation": 1,
        "initialFlipped": false,
        "allowRotate": true,
        "allowFlip": false,
        "equivalenceGroup": null
      },
      {
        "id": "piece-08",
        "label": "魚乾",
        "theme": "dried-fish",
        "cells": [
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
            2,
            1
          ],
          [
            2,
            2
          ]
        ],
        "initialRotation": 2,
        "initialFlipped": false,
        "allowRotate": true,
        "allowFlip": false,
        "equivalenceGroup": null
      },
      {
        "id": "piece-09",
        "label": "貓罐頭",
        "theme": "cat-can",
        "cells": [
          [
            0,
            2
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
            3,
            1
          ]
        ],
        "initialRotation": 3,
        "initialFlipped": false,
        "allowRotate": true,
        "allowFlip": false,
        "equivalenceGroup": null
      }
    ],
    "solution": {
      "piece-01": {
        "row": 5,
        "column": 5,
        "rotation": 0,
        "flipped": false
      },
      "piece-02": {
        "row": 0,
        "column": 3,
        "rotation": 0,
        "flipped": false
      },
      "piece-03": {
        "row": 5,
        "column": 2,
        "rotation": 0,
        "flipped": false
      },
      "piece-04": {
        "row": 2,
        "column": 3,
        "rotation": 0,
        "flipped": false
      },
      "piece-05": {
        "row": 3,
        "column": 1,
        "rotation": 0,
        "flipped": false
      },
      "piece-06": {
        "row": 3,
        "column": 0,
        "rotation": 0,
        "flipped": false
      },
      "piece-07": {
        "row": 6,
        "column": 0,
        "rotation": 0,
        "flipped": false
      },
      "piece-08": {
        "row": 2,
        "column": 5,
        "rotation": 0,
        "flipped": false
      },
      "piece-09": {
        "row": 0,
        "column": 0,
        "rotation": 0,
        "flipped": false
      }
    },
    "metrics": {
      "fillableCellCount": 57,
      "pieceCount": 9,
      "blockedCellCount": 4,
      "fixedItemCount": 3,
      "allowFlipPieceCount": 1,
      "irregularPieceCount": 8,
      "solutionCount": 1,
      "solverNodes": 1665,
      "solverBacktracks": 1655,
      "solverMaxDepth": 9,
      "solverCandidateCount": 937
    },
    "canonicalSignature": "8x8#0,1;0,2;0,3;0,4;0,5;0,6;1,0;1,1;1,2;1,3;1,4;1,5;1,6;2,0;2,1;2,2;2,3;2,4;2,5;2,6;2,7;3,0;3,1;3,2;3,3;3,4;3,5;3,6;3,7;4,0;4,1;4,2;4,3;4,4;4,5;4,6;4,7;5,0;5,1;5,2;5,3;5,4;5,5;5,6;5,7;6,1;6,2;6,3;6,4;6,5;6,6;7,1;7,2;7,3;7,4;7,5;7,6#0,7;1,7;7,0;7,7#0,0;6,0;6,7#0,1;1,0;1,1;2,0;2,1;3,0|0,2;0,3;0,4|0,5;0,6;1,4;1,5;1,6;2,5;2,6;2,7;3,5|1,2;1,3;2,3;2,4;3,4|2,2;3,1;3,2;4,0;4,1;4,2|3,3;4,3;4,4;4,5;5,3;5,5|3,6;3,7;4,6;4,7;5,6;5,7;6,6;7,6|5,0;5,1;5,2;6,1;6,2;7,1;7,2|5,4;6,3;6,4;6,5;7,3;7,4;7,5#3:0,5:0,6:0,6:0,6:0,7:0,7:0,8:1,9:0"
  },
  {
    "id": "L078",
    "chapter": 4,
    "chapterTitle": "搬家挑戰",
    "title": "搬家挑戰 18",
    "rows": 8,
    "columns": 8,
    "difficulty": 4,
    "difficultyScore": 669,
    "seed": 415007,
    "generatorVersion": 1,
    "parMoves": 20,
    "moveLimit": 27,
    "fillableCells": [
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
      ]
    ],
    "blockedCells": [
      [
        0,
        0
      ],
      [
        0,
        7
      ]
    ],
    "fixedItems": [
      {
        "id": "fixed-1",
        "type": "sleeping-cat",
        "label": "睡覺中的貓咪",
        "cells": [
          [
            7,
            7
          ]
        ]
      },
      {
        "id": "fixed-2",
        "type": "yarn",
        "label": "毛線球",
        "cells": [
          [
            7,
            0
          ]
        ]
      }
    ],
    "pieces": [
      {
        "id": "piece-01",
        "label": "小魚玩具",
        "theme": "fish-toy",
        "cells": [
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
          ]
        ],
        "initialRotation": 0,
        "initialFlipped": false,
        "allowRotate": true,
        "allowFlip": false,
        "equivalenceGroup": null
      },
      {
        "id": "piece-02",
        "label": "紙箱",
        "theme": "cardboard",
        "cells": [
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
          ]
        ],
        "initialRotation": 3,
        "initialFlipped": false,
        "allowRotate": true,
        "allowFlip": false,
        "equivalenceGroup": null
      },
      {
        "id": "piece-03",
        "label": "草墊",
        "theme": "grass-mat",
        "cells": [
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
            1,
            1
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
            3,
            0
          ]
        ],
        "initialRotation": 2,
        "initialFlipped": false,
        "allowRotate": true,
        "allowFlip": false,
        "equivalenceGroup": null
      },
      {
        "id": "piece-04",
        "label": "逗貓棒",
        "theme": "teaser",
        "cells": [
          [
            0,
            0
          ],
          [
            0,
            2
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
            2,
            0
          ],
          [
            2,
            1
          ]
        ],
        "initialRotation": 0,
        "initialFlipped": false,
        "allowRotate": false,
        "allowFlip": false,
        "equivalenceGroup": null
      },
      {
        "id": "piece-05",
        "label": "貓咪靠枕",
        "theme": "cat-pillow",
        "cells": [
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
            1,
            0
          ]
        ],
        "initialRotation": 3,
        "initialFlipped": true,
        "allowRotate": true,
        "allowFlip": true,
        "equivalenceGroup": null
      },
      {
        "id": "piece-06",
        "label": "魚乾",
        "theme": "dried-fish",
        "cells": [
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
            0
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
        "initialRotation": 0,
        "initialFlipped": false,
        "allowRotate": false,
        "allowFlip": false,
        "equivalenceGroup": null
      },
      {
        "id": "piece-07",
        "label": "貓罐頭",
        "theme": "cat-can",
        "cells": [
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
          ]
        ],
        "initialRotation": 1,
        "initialFlipped": false,
        "allowRotate": true,
        "allowFlip": false,
        "equivalenceGroup": null
      },
      {
        "id": "piece-08",
        "label": "毛線球",
        "theme": "yarn",
        "cells": [
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
            2,
            3
          ],
          [
            3,
            3
          ]
        ],
        "initialRotation": 3,
        "initialFlipped": false,
        "allowRotate": true,
        "allowFlip": false,
        "equivalenceGroup": null
      },
      {
        "id": "piece-09",
        "label": "鮮奶盒",
        "theme": "milk",
        "cells": [
          [
            0,
            0
          ],
          [
            0,
            1
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
            2,
            1
          ]
        ],
        "initialRotation": 2,
        "initialFlipped": false,
        "allowRotate": true,
        "allowFlip": true,
        "equivalenceGroup": null
      }
    ],
    "solution": {
      "piece-01": {
        "row": 5,
        "column": 0,
        "rotation": 0,
        "flipped": false
      },
      "piece-02": {
        "row": 0,
        "column": 4,
        "rotation": 0,
        "flipped": false
      },
      "piece-03": {
        "row": 2,
        "column": 4,
        "rotation": 0,
        "flipped": false
      },
      "piece-04": {
        "row": 1,
        "column": 0,
        "rotation": 0,
        "flipped": false
      },
      "piece-05": {
        "row": 1,
        "column": 4,
        "rotation": 0,
        "flipped": false
      },
      "piece-06": {
        "row": 0,
        "column": 1,
        "rotation": 0,
        "flipped": false
      },
      "piece-07": {
        "row": 5,
        "column": 4,
        "rotation": 0,
        "flipped": false
      },
      "piece-08": {
        "row": 3,
        "column": 0,
        "rotation": 0,
        "flipped": false
      },
      "piece-09": {
        "row": 3,
        "column": 6,
        "rotation": 0,
        "flipped": false
      }
    },
    "metrics": {
      "fillableCellCount": 60,
      "pieceCount": 9,
      "blockedCellCount": 2,
      "fixedItemCount": 2,
      "allowFlipPieceCount": 2,
      "irregularPieceCount": 8,
      "solutionCount": 1,
      "solverNodes": 4119,
      "solverBacktracks": 4109,
      "solverMaxDepth": 9,
      "solverCandidateCount": 1118
    },
    "canonicalSignature": "8x8#0,1;0,2;0,3;0,4;0,5;0,6;1,0;1,1;1,2;1,3;1,4;1,5;1,6;1,7;2,0;2,1;2,2;2,3;2,4;2,5;2,6;2,7;3,0;3,1;3,2;3,3;3,4;3,5;3,6;3,7;4,0;4,1;4,2;4,3;4,4;4,5;4,6;4,7;5,0;5,1;5,2;5,3;5,4;5,5;5,6;5,7;6,0;6,1;6,2;6,3;6,4;6,5;6,6;6,7;7,1;7,2;7,3;7,4;7,5;7,6#0,0;0,7#7,0;7,7#0,1;0,2;0,3;1,1;1,3;2,3|0,4;0,5;0,6|1,0;1,2;2,0;2,1;2,2;3,0;3,1|1,4;1,5;1,6;1,7;2,4|2,5;2,6;2,7;3,5;4,4;4,5;5,4|3,2;3,3;3,4;4,0;4,1;4,2;4,3;5,3;6,3|3,6;3,7;4,6;4,7;5,7|5,0;5,1;5,2;6,0;6,1;6,2;7,1;7,2;7,3|5,5;5,6;6,4;6,5;6,6;6,7;7,4;7,5;7,6#3:0,5:1,5:1,6:0,7:0,7:0,9:0,9:0,9:0"
  },
  {
    "id": "L079",
    "chapter": 4,
    "chapterTitle": "搬家挑戰",
    "title": "搬家挑戰 19",
    "rows": 8,
    "columns": 8,
    "difficulty": 4,
    "difficultyScore": 674,
    "seed": 409018,
    "generatorVersion": 1,
    "parMoves": 20,
    "moveLimit": 27,
    "fillableCells": [
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
      ]
    ],
    "blockedCells": [
      [
        0,
        0
      ],
      [
        6,
        0
      ],
      [
        7,
        1
      ]
    ],
    "fixedItems": [
      {
        "id": "fixed-1",
        "type": "sleeping-cat",
        "label": "睡覺中的貓咪",
        "cells": [
          [
            7,
            0
          ]
        ]
      },
      {
        "id": "fixed-2",
        "type": "yarn",
        "label": "毛線球",
        "cells": [
          [
            7,
            7
          ]
        ]
      },
      {
        "id": "fixed-3",
        "type": "cardboard",
        "label": "紙箱隔板",
        "cells": [
          [
            0,
            7
          ]
        ]
      }
    ],
    "pieces": [
      {
        "id": "piece-01",
        "label": "貓罐頭",
        "theme": "cat-can",
        "cells": [
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
          ]
        ],
        "initialRotation": 0,
        "initialFlipped": false,
        "allowRotate": false,
        "allowFlip": false,
        "equivalenceGroup": null
      },
      {
        "id": "piece-02",
        "label": "毛線球",
        "theme": "yarn",
        "cells": [
          [
            0,
            0
          ],
          [
            0,
            1
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
            2,
            1
          ],
          [
            2,
            2
          ]
        ],
        "initialRotation": 0,
        "initialFlipped": false,
        "allowRotate": false,
        "allowFlip": false,
        "equivalenceGroup": null
      },
      {
        "id": "piece-03",
        "label": "鮮奶盒",
        "theme": "milk",
        "cells": [
          [
            0,
            0
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
        "initialRotation": 2,
        "initialFlipped": false,
        "allowRotate": true,
        "allowFlip": false,
        "equivalenceGroup": null
      },
      {
        "id": "piece-04",
        "label": "貓掌餅乾",
        "theme": "paw-cookie",
        "cells": [
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
            1,
            0
          ]
        ],
        "initialRotation": 0,
        "initialFlipped": true,
        "allowRotate": false,
        "allowFlip": true,
        "equivalenceGroup": null
      },
      {
        "id": "piece-05",
        "label": "貓抓板",
        "theme": "scratcher",
        "cells": [
          [
            0,
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
            2,
            0
          ],
          [
            2,
            1
          ],
          [
            3,
            0
          ]
        ],
        "initialRotation": 0,
        "initialFlipped": false,
        "allowRotate": false,
        "allowFlip": true,
        "equivalenceGroup": null
      },
      {
        "id": "piece-06",
        "label": "睡墊",
        "theme": "sleep-mat",
        "cells": [
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
            1
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
        "initialRotation": 3,
        "initialFlipped": false,
        "allowRotate": true,
        "allowFlip": false,
        "equivalenceGroup": null
      },
      {
        "id": "piece-07",
        "label": "小魚玩具",
        "theme": "fish-toy",
        "cells": [
          [
            0,
            0
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
            1,
            2
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
            3,
            2
          ],
          [
            3,
            3
          ]
        ],
        "initialRotation": 1,
        "initialFlipped": false,
        "allowRotate": true,
        "allowFlip": false,
        "equivalenceGroup": null
      },
      {
        "id": "piece-08",
        "label": "紙箱",
        "theme": "cardboard",
        "cells": [
          [
            0,
            0
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
          ],
          [
            3,
            1
          ]
        ],
        "initialRotation": 3,
        "initialFlipped": false,
        "allowRotate": true,
        "allowFlip": false,
        "equivalenceGroup": null
      },
      {
        "id": "piece-09",
        "label": "草墊",
        "theme": "grass-mat",
        "cells": [
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
            0
          ],
          [
            1,
            1
          ],
          [
            1,
            2
          ]
        ],
        "initialRotation": 2,
        "initialFlipped": false,
        "allowRotate": true,
        "allowFlip": false,
        "equivalenceGroup": null
      },
      {
        "id": "piece-10",
        "label": "逗貓棒",
        "theme": "teaser",
        "cells": [
          [
            0,
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
        "initialRotation": 0,
        "initialFlipped": false,
        "allowRotate": false,
        "allowFlip": false,
        "equivalenceGroup": null
      }
    ],
    "solution": {
      "piece-01": {
        "row": 1,
        "column": 7,
        "rotation": 0,
        "flipped": false
      },
      "piece-02": {
        "row": 5,
        "column": 1,
        "rotation": 0,
        "flipped": false
      },
      "piece-03": {
        "row": 1,
        "column": 0,
        "rotation": 0,
        "flipped": false
      },
      "piece-04": {
        "row": 0,
        "column": 3,
        "rotation": 0,
        "flipped": false
      },
      "piece-05": {
        "row": 2,
        "column": 0,
        "rotation": 0,
        "flipped": false
      },
      "piece-06": {
        "row": 4,
        "column": 4,
        "rotation": 0,
        "flipped": false
      },
      "piece-07": {
        "row": 4,
        "column": 2,
        "rotation": 0,
        "flipped": false
      },
      "piece-08": {
        "row": 0,
        "column": 1,
        "rotation": 0,
        "flipped": false
      },
      "piece-09": {
        "row": 1,
        "column": 4,
        "rotation": 0,
        "flipped": false
      },
      "piece-10": {
        "row": 2,
        "column": 3,
        "rotation": 0,
        "flipped": false
      }
    },
    "metrics": {
      "fillableCellCount": 58,
      "pieceCount": 10,
      "blockedCellCount": 3,
      "fixedItemCount": 3,
      "allowFlipPieceCount": 2,
      "irregularPieceCount": 8,
      "solutionCount": 1,
      "solverNodes": 2993,
      "solverBacktracks": 2982,
      "solverMaxDepth": 10,
      "solverCandidateCount": 765
    },
    "canonicalSignature": "8x8#0,1;0,2;0,3;0,4;0,5;0,6;1,0;1,1;1,2;1,3;1,4;1,5;1,6;1,7;2,0;2,1;2,2;2,3;2,4;2,5;2,6;2,7;3,0;3,1;3,2;3,3;3,4;3,5;3,6;3,7;4,0;4,1;4,2;4,3;4,4;4,5;4,6;4,7;5,0;5,1;5,2;5,3;5,4;5,5;5,6;5,7;6,0;6,1;6,2;6,3;6,4;6,5;6,6;7,1;7,2;7,3;7,4;7,5#0,7;6,7;7,6#0,0;7,0;7,7#0,1;0,2;0,3;0,4;1,4|0,5;0,6;1,5;2,5;3,5|1,0;2,0;3,0;4,0;5,0;6,0|1,1;1,2;1,3;2,1;2,2;2,3|1,6;1,7;2,6|2,4;3,1;3,2;3,3;3,4|2,7;3,6;3,7;4,6;4,7;5,7|4,1;4,2;4,3;5,1;5,2;6,1;7,1|4,4;4,5;5,3;5,4;6,2;6,3;7,2;7,3|5,5;5,6;6,4;6,5;6,6;7,4;7,5#3:0,5:0,5:0,5:1,6:0,6:0,6:1,7:0,7:0,8:0"
  },
  {
    "id": "L080",
    "chapter": 4,
    "chapterTitle": "搬家挑戰",
    "title": "搬家挑戰 20",
    "rows": 8,
    "columns": 8,
    "difficulty": 4,
    "difficultyScore": 725,
    "seed": 417030,
    "generatorVersion": 1,
    "parMoves": 24,
    "moveLimit": 36,
    "fillableCells": [
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
      ]
    ],
    "blockedCells": [
      [
        0,
        0
      ],
      [
        7,
        0
      ],
      [
        7,
        7
      ]
    ],
    "fixedItems": [
      {
        "id": "fixed-1",
        "type": "sleeping-cat",
        "label": "睡覺中的貓咪",
        "cells": [
          [
            0,
            7
          ]
        ]
      },
      {
        "id": "fixed-2",
        "type": "yarn",
        "label": "毛線球",
        "cells": [
          [
            7,
            6
          ]
        ]
      }
    ],
    "pieces": [
      {
        "id": "piece-01",
        "label": "草墊",
        "theme": "grass-mat",
        "cells": [
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
            3,
            0
          ],
          [
            3,
            1
          ]
        ],
        "initialRotation": 2,
        "initialFlipped": false,
        "allowRotate": true,
        "allowFlip": false,
        "equivalenceGroup": null
      },
      {
        "id": "piece-02",
        "label": "逗貓棒",
        "theme": "teaser",
        "cells": [
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
          ]
        ],
        "initialRotation": 1,
        "initialFlipped": false,
        "allowRotate": true,
        "allowFlip": false,
        "equivalenceGroup": null
      },
      {
        "id": "piece-03",
        "label": "貓咪靠枕",
        "theme": "cat-pillow",
        "cells": [
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
            2,
            0
          ],
          [
            2,
            1
          ],
          [
            3,
            1
          ]
        ],
        "initialRotation": 0,
        "initialFlipped": false,
        "allowRotate": false,
        "allowFlip": false,
        "equivalenceGroup": null
      },
      {
        "id": "piece-04",
        "label": "魚乾",
        "theme": "dried-fish",
        "cells": [
          [
            0,
            1
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
            2,
            1
          ],
          [
            2,
            2
          ]
        ],
        "initialRotation": 1,
        "initialFlipped": false,
        "allowRotate": true,
        "allowFlip": false,
        "equivalenceGroup": null
      },
      {
        "id": "piece-05",
        "label": "貓罐頭",
        "theme": "cat-can",
        "cells": [
          [
            0,
            0
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
            1,
            2
          ],
          [
            1,
            3
          ]
        ],
        "initialRotation": 3,
        "initialFlipped": false,
        "allowRotate": true,
        "allowFlip": false,
        "equivalenceGroup": null
      },
      {
        "id": "piece-06",
        "label": "毛線球",
        "theme": "yarn",
        "cells": [
          [
            0,
            3
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
          ]
        ],
        "initialRotation": 0,
        "initialFlipped": false,
        "allowRotate": true,
        "allowFlip": false,
        "equivalenceGroup": null
      },
      {
        "id": "piece-07",
        "label": "鮮奶盒",
        "theme": "milk",
        "cells": [
          [
            0,
            0
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
            3,
            3
          ]
        ],
        "initialRotation": 0,
        "initialFlipped": true,
        "allowRotate": true,
        "allowFlip": true,
        "equivalenceGroup": null
      },
      {
        "id": "piece-08",
        "label": "貓掌餅乾",
        "theme": "paw-cookie",
        "cells": [
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
            1
          ],
          [
            1,
            2
          ]
        ],
        "initialRotation": 2,
        "initialFlipped": true,
        "allowRotate": true,
        "allowFlip": true,
        "equivalenceGroup": null
      },
      {
        "id": "piece-09",
        "label": "貓抓板",
        "theme": "scratcher",
        "cells": [
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
            1,
            3
          ],
          [
            2,
            2
          ],
          [
            2,
            3
          ]
        ],
        "initialRotation": 0,
        "initialFlipped": false,
        "allowRotate": false,
        "allowFlip": false,
        "equivalenceGroup": null
      },
      {
        "id": "piece-10",
        "label": "睡墊",
        "theme": "sleep-mat",
        "cells": [
          [
            0,
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
            2,
            0
          ],
          [
            2,
            1
          ]
        ],
        "initialRotation": 0,
        "initialFlipped": true,
        "allowRotate": false,
        "allowFlip": true,
        "equivalenceGroup": null
      }
    ],
    "solution": {
      "piece-01": {
        "row": 0,
        "column": 2,
        "rotation": 0,
        "flipped": false
      },
      "piece-02": {
        "row": 3,
        "column": 0,
        "rotation": 0,
        "flipped": false
      },
      "piece-03": {
        "row": 0,
        "column": 0,
        "rotation": 0,
        "flipped": false
      },
      "piece-04": {
        "row": 4,
        "column": 5,
        "rotation": 0,
        "flipped": false
      },
      "piece-05": {
        "row": 6,
        "column": 0,
        "rotation": 0,
        "flipped": false
      },
      "piece-06": {
        "row": 3,
        "column": 1,
        "rotation": 0,
        "flipped": false
      },
      "piece-07": {
        "row": 1,
        "column": 4,
        "rotation": 0,
        "flipped": false
      },
      "piece-08": {
        "row": 5,
        "column": 1,
        "rotation": 0,
        "flipped": false
      },
      "piece-09": {
        "row": 0,
        "column": 4,
        "rotation": 0,
        "flipped": false
      },
      "piece-10": {
        "row": 5,
        "column": 4,
        "rotation": 0,
        "flipped": false
      }
    },
    "metrics": {
      "fillableCellCount": 59,
      "pieceCount": 10,
      "blockedCellCount": 3,
      "fixedItemCount": 2,
      "allowFlipPieceCount": 3,
      "irregularPieceCount": 9,
      "solutionCount": 1,
      "solverNodes": 6941,
      "solverBacktracks": 6930,
      "solverMaxDepth": 10,
      "solverCandidateCount": 1089
    },
    "canonicalSignature": "8x8#0,1;0,2;0,3;0,4;0,5;0,6;1,0;1,1;1,2;1,3;1,4;1,5;1,6;1,7;2,0;2,1;2,2;2,3;2,4;2,5;2,6;2,7;3,0;3,1;3,2;3,3;3,4;3,5;3,6;3,7;4,0;4,1;4,2;4,3;4,4;4,5;4,6;4,7;5,0;5,1;5,2;5,3;5,4;5,5;5,6;5,7;6,0;6,1;6,2;6,3;6,4;6,5;6,6;6,7;7,1;7,2;7,3;7,4;7,5#0,0;7,0;7,7#0,7;7,6#0,1;0,2;1,0;1,1;1,2;2,0;2,1;3,1|0,3;1,3;2,2;2,3;2,4;3,2;3,3|0,4;0,5;0,6;1,6;1,7;2,6;2,7|1,4;1,5;2,5;3,5;3,6;3,7;4,7|3,0;4,0;5,0|3,4;4,1;4,2;4,3;4,4;4,5|4,6;5,5;5,6;5,7;6,6;6,7|5,1;5,2;5,3;6,2;6,3|5,4;6,4;6,5;7,4;7,5|6,0;6,1;7,1;7,2;7,3#3:0,5:0,5:1,5:1,6:0,6:0,7:0,7:0,7:1,8:0"
  }
]);
});
