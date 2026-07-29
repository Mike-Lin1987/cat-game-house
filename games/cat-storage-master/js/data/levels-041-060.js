(function (root, factory) {
  const levels = factory();
  if (typeof module === 'object' && module.exports) module.exports = levels;
  else root.CAT_STORAGE_LEVELS_041_060 = levels;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  return Object.freeze([
  {
    "id": "L041",
    "chapter": 3,
    "chapterTitle": "房間整理",
    "title": "房間整理 1",
    "rows": 6,
    "columns": 6,
    "difficulty": 3,
    "difficultyScore": 396,
    "seed": 308123,
    "generatorVersion": 1,
    "parMoves": 11,
    "moveLimit": 21,
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
      ]
    ],
    "blockedCells": [
      [
        0,
        0
      ],
      [
        5,
        5
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
            5
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
        "id": "piece-04",
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
        "id": "piece-05",
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
        "initialRotation": 3,
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
        "column": 1,
        "rotation": 0,
        "flipped": false
      },
      "piece-02": {
        "row": 3,
        "column": 4,
        "rotation": 0,
        "flipped": false
      },
      "piece-03": {
        "row": 0,
        "column": 3,
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
        "row": 0,
        "column": 0,
        "rotation": 0,
        "flipped": false
      },
      "piece-06": {
        "row": 3,
        "column": 3,
        "rotation": 0,
        "flipped": false
      },
      "piece-07": {
        "row": 2,
        "column": 0,
        "rotation": 0,
        "flipped": false
      }
    },
    "metrics": {
      "fillableCellCount": 32,
      "pieceCount": 7,
      "blockedCellCount": 2,
      "fixedItemCount": 2,
      "allowFlipPieceCount": 1,
      "irregularPieceCount": 5,
      "solutionCount": 1,
      "solverNodes": 89,
      "solverBacktracks": 81,
      "solverMaxDepth": 7,
      "solverCandidateCount": 332
    },
    "canonicalSignature": "6x6#0,1;0,2;0,3;0,4;1,0;1,1;1,2;1,3;1,4;1,5;2,0;2,1;2,2;2,3;2,4;2,5;3,0;3,1;3,2;3,3;3,4;3,5;4,0;4,1;4,2;4,3;4,4;4,5;5,1;5,2;5,3;5,4#0,0;5,5#0,5;5,0#0,1;0,2;0,3;1,0;1,1;1,2|0,4;1,3;1,4;1,5;2,4;2,5|2,0;2,1;3,0;3,1;4,0|2,2;2,3;3,2;4,1;4,2|3,3;4,3;5,3;5,4|3,4;3,5;4,4;4,5|5,1;5,2#2:0,4:0,4:0,5:0,5:1,6:0,6:0"
  },
  {
    "id": "L042",
    "chapter": 3,
    "chapterTitle": "房間整理",
    "title": "房間整理 2",
    "rows": 6,
    "columns": 6,
    "difficulty": 3,
    "difficultyScore": 419,
    "seed": 316375,
    "generatorVersion": 1,
    "parMoves": 16,
    "moveLimit": 24,
    "fillableCells": [
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
      ]
    ],
    "blockedCells": [
      [
        5,
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
            5,
            5
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
        "initialRotation": 3,
        "initialFlipped": true,
        "allowRotate": true,
        "allowFlip": true,
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
            2
          ]
        ],
        "initialRotation": 1,
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
        "allowRotate": false,
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
            0,
            4
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
        "id": "piece-06",
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
        "row": 1,
        "column": 0,
        "rotation": 0,
        "flipped": false
      },
      "piece-03": {
        "row": 3,
        "column": 2,
        "rotation": 0,
        "flipped": false
      },
      "piece-04": {
        "row": 1,
        "column": 1,
        "rotation": 0,
        "flipped": false
      },
      "piece-05": {
        "row": 0,
        "column": 0,
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
        "row": 3,
        "column": 4,
        "rotation": 0,
        "flipped": false
      }
    },
    "metrics": {
      "fillableCellCount": 34,
      "pieceCount": 7,
      "blockedCellCount": 1,
      "fixedItemCount": 1,
      "allowFlipPieceCount": 2,
      "irregularPieceCount": 6,
      "solutionCount": 1,
      "solverNodes": 119,
      "solverBacktracks": 111,
      "solverMaxDepth": 7,
      "solverCandidateCount": 287
    },
    "canonicalSignature": "6x6#0,0;0,1;0,2;0,3;0,4;0,5;1,0;1,1;1,2;1,3;1,4;1,5;2,0;2,1;2,2;2,3;2,4;2,5;3,0;3,1;3,2;3,3;3,4;3,5;4,0;4,1;4,2;4,3;4,4;4,5;5,1;5,2;5,3;5,4#5,0#5,5#0,0;0,1;0,2;0,3;0,4;1,3|0,5;1,4;1,5;2,5|1,0;2,0;2,1;3,1;3,2;4,2|1,1;1,2;2,2;2,3;2,4|3,0;4,0;4,1;5,1|3,3;4,3;5,2;5,3;5,4|3,4;3,5;4,4;4,5#4:0,4:0,4:1,5:0,5:0,6:0,6:1"
  },
  {
    "id": "L043",
    "chapter": 3,
    "chapterTitle": "房間整理",
    "title": "房間整理 3",
    "rows": 6,
    "columns": 6,
    "difficulty": 3,
    "difficultyScore": 419,
    "seed": 302323,
    "generatorVersion": 1,
    "parMoves": 15,
    "moveLimit": 28,
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
      ]
    ],
    "blockedCells": [
      [
        0,
        5
      ],
      [
        5,
        0
      ],
      [
        5,
        5
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
            1
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
            2
          ]
        ],
        "initialRotation": 0,
        "initialFlipped": false,
        "allowRotate": true,
        "allowFlip": true,
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
      },
      {
        "id": "piece-04",
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
        "initialRotation": 0,
        "initialFlipped": false,
        "allowRotate": false,
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
        "id": "piece-07",
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
          ],
          [
            3,
            0
          ],
          [
            4,
            0
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
        "column": 0,
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
        "row": 0,
        "column": 4,
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
        "row": 4,
        "column": 0,
        "rotation": 0,
        "flipped": false
      },
      "piece-06": {
        "row": 2,
        "column": 4,
        "rotation": 0,
        "flipped": false
      },
      "piece-07": {
        "row": 1,
        "column": 3,
        "rotation": 0,
        "flipped": false
      }
    },
    "metrics": {
      "fillableCellCount": 31,
      "pieceCount": 7,
      "blockedCellCount": 3,
      "fixedItemCount": 2,
      "allowFlipPieceCount": 1,
      "irregularPieceCount": 5,
      "solutionCount": 1,
      "solverNodes": 137,
      "solverBacktracks": 129,
      "solverMaxDepth": 7,
      "solverCandidateCount": 312
    },
    "canonicalSignature": "6x6#0,1;0,2;0,3;0,4;1,0;1,1;1,2;1,3;1,4;1,5;2,0;2,1;2,2;2,3;2,4;2,5;3,0;3,1;3,2;3,3;3,4;3,5;4,0;4,1;4,2;4,3;4,4;4,5;5,1;5,2;5,3#0,0;0,5;5,0#5,4;5,5#0,1;1,0;1,1;2,1;3,1|0,2;1,2;2,2;3,2;4,2|0,3;0,4;1,4;1,5|1,3;2,3;2,4;2,5|2,0;3,0;4,0;4,1;5,1|3,3;4,3;5,2;5,3|3,4;3,5;4,4;4,5#4:0,4:0,4:0,4:1,5:0,5:0,5:0"
  },
  {
    "id": "L044",
    "chapter": 3,
    "chapterTitle": "房間整理",
    "title": "房間整理 4",
    "rows": 6,
    "columns": 6,
    "difficulty": 3,
    "difficultyScore": 425,
    "seed": 300457,
    "generatorVersion": 1,
    "parMoves": 10,
    "moveLimit": 23,
    "fillableCells": [
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
      ]
    ],
    "blockedCells": [
      [
        0,
        5
      ],
      [
        5,
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
            5,
            5
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
        "initialRotation": 0,
        "initialFlipped": false,
        "allowRotate": false,
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
        "allowFlip": true,
        "equivalenceGroup": null
      },
      {
        "id": "piece-04",
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
            0,
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
        "id": "piece-07",
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
        "allowRotate": true,
        "allowFlip": false,
        "equivalenceGroup": null
      }
    ],
    "solution": {
      "piece-01": {
        "row": 1,
        "column": 1,
        "rotation": 0,
        "flipped": false
      },
      "piece-02": {
        "row": 4,
        "column": 3,
        "rotation": 0,
        "flipped": false
      },
      "piece-03": {
        "row": 0,
        "column": 4,
        "rotation": 0,
        "flipped": false
      },
      "piece-04": {
        "row": 3,
        "column": 0,
        "rotation": 0,
        "flipped": false
      },
      "piece-05": {
        "row": 0,
        "column": 0,
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
        "row": 0,
        "column": 3,
        "rotation": 0,
        "flipped": false
      }
    },
    "metrics": {
      "fillableCellCount": 33,
      "pieceCount": 7,
      "blockedCellCount": 2,
      "fixedItemCount": 1,
      "allowFlipPieceCount": 1,
      "irregularPieceCount": 4,
      "solutionCount": 1,
      "solverNodes": 212,
      "solverBacktracks": 204,
      "solverMaxDepth": 7,
      "solverCandidateCount": 220
    },
    "canonicalSignature": "6x6#0,0;0,1;0,2;0,3;0,4;1,0;1,1;1,2;1,3;1,4;1,5;2,0;2,1;2,2;2,3;2,4;2,5;3,0;3,1;3,2;3,3;3,4;3,5;4,0;4,1;4,2;4,3;4,4;4,5;5,1;5,2;5,3;5,4#0,5;5,0#5,5#0,0;0,1;0,2;1,0;1,1;2,0|0,3;0,4;1,3;1,4|1,2;2,1;2,2;2,3;2,4|1,5;2,5;3,5;4,5|3,0;3,1;3,2;3,3;4,2|3,4;4,4;5,4|4,0;4,1;4,3;5,1;5,2;5,3#3:0,4:0,4:0,5:0,5:0,6:0,6:1"
  },
  {
    "id": "L045",
    "chapter": 3,
    "chapterTitle": "房間整理",
    "title": "房間整理 5",
    "rows": 6,
    "columns": 6,
    "difficulty": 3,
    "difficultyScore": 443,
    "seed": 312707,
    "generatorVersion": 1,
    "parMoves": 12,
    "moveLimit": 20,
    "fillableCells": [
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
      ]
    ],
    "blockedCells": [
      [
        5,
        5
      ]
    ],
    "fixedItems": [
      {
        "id": "fixed-1",
        "type": "sleeping-cat",
        "label": "睡覺中的貓咪",
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
            1,
            2
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
            0,
            2
          ],
          [
            0,
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
        "id": "piece-04",
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
        "allowFlip": true,
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
        "id": "piece-07",
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
      }
    ],
    "solution": {
      "piece-01": {
        "row": 3,
        "column": 2,
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
        "row": 0,
        "column": 2,
        "rotation": 0,
        "flipped": false
      },
      "piece-04": {
        "row": 1,
        "column": 3,
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
        "row": 1,
        "column": 4,
        "rotation": 0,
        "flipped": false
      },
      "piece-07": {
        "row": 4,
        "column": 0,
        "rotation": 0,
        "flipped": false
      }
    },
    "metrics": {
      "fillableCellCount": 34,
      "pieceCount": 7,
      "blockedCellCount": 1,
      "fixedItemCount": 1,
      "allowFlipPieceCount": 2,
      "irregularPieceCount": 6,
      "solutionCount": 1,
      "solverNodes": 207,
      "solverBacktracks": 199,
      "solverMaxDepth": 7,
      "solverCandidateCount": 279
    },
    "canonicalSignature": "6x6#0,0;0,1;0,2;0,3;0,4;0,5;1,0;1,1;1,2;1,3;1,4;1,5;2,0;2,1;2,2;2,3;2,4;2,5;3,0;3,1;3,2;3,3;3,4;3,5;4,0;4,1;4,2;4,3;4,4;4,5;5,1;5,2;5,3;5,4#5,0#5,5#0,0;0,1;0,2;0,3|0,4;1,3;1,4;2,3|0,5;1,5;2,4;2,5;3,4;3,5|1,0;1,1;2,0;3,0;4,0|1,2;2,1;2,2;3,1;3,2|3,3;4,1;4,2;4,3;5,1|4,4;4,5;5,2;5,3;5,4#4:0,4:1,5:0,5:0,5:0,5:1,6:0"
  },
  {
    "id": "L046",
    "chapter": 3,
    "chapterTitle": "房間整理",
    "title": "房間整理 6",
    "rows": 6,
    "columns": 6,
    "difficulty": 3,
    "difficultyScore": 447,
    "seed": 318448,
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
      ]
    ],
    "blockedCells": [
      [
        0,
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
            5,
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
        "initialRotation": 2,
        "initialFlipped": true,
        "allowRotate": true,
        "allowFlip": true,
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
            2
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
        "initialRotation": 2,
        "initialFlipped": true,
        "allowRotate": true,
        "allowFlip": true,
        "equivalenceGroup": null
      },
      {
        "id": "piece-03",
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
        "id": "piece-04",
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
        "id": "piece-05",
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
      }
    ],
    "solution": {
      "piece-01": {
        "row": 2,
        "column": 4,
        "rotation": 0,
        "flipped": false
      },
      "piece-02": {
        "row": 0,
        "column": 1,
        "rotation": 0,
        "flipped": false
      },
      "piece-03": {
        "row": 0,
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
        "column": 3,
        "rotation": 0,
        "flipped": false
      },
      "piece-06": {
        "row": 1,
        "column": 2,
        "rotation": 0,
        "flipped": false
      },
      "piece-07": {
        "row": 4,
        "column": 1,
        "rotation": 0,
        "flipped": false
      }
    },
    "metrics": {
      "fillableCellCount": 34,
      "pieceCount": 7,
      "blockedCellCount": 1,
      "fixedItemCount": 1,
      "allowFlipPieceCount": 2,
      "irregularPieceCount": 6,
      "solutionCount": 1,
      "solverNodes": 225,
      "solverBacktracks": 217,
      "solverMaxDepth": 7,
      "solverCandidateCount": 293
    },
    "canonicalSignature": "6x6#0,0;0,1;0,2;0,3;0,4;0,5;1,0;1,1;1,2;1,3;1,4;1,5;2,0;2,1;2,2;2,3;2,4;2,5;3,0;3,1;3,2;3,3;3,4;3,5;4,0;4,1;4,2;4,3;4,4;4,5;5,1;5,2;5,3;5,4#5,0#5,5#0,0;0,1;1,0;1,1|0,2;0,3;0,4;0,5;1,3;1,4|1,2;2,1;2,2;2,3|1,5;2,5;3,5;4,4;4,5|2,0;3,0;4,0;4,1;4,2|2,4;3,1;3,2;3,3;3,4|4,3;5,1;5,2;5,3;5,4#4:0,4:0,5:0,5:0,5:0,5:1,6:1"
  },
  {
    "id": "L047",
    "chapter": 3,
    "chapterTitle": "房間整理",
    "title": "房間整理 7",
    "rows": 6,
    "columns": 6,
    "difficulty": 3,
    "difficultyScore": 449,
    "seed": 310038,
    "generatorVersion": 1,
    "parMoves": 19,
    "moveLimit": 32,
    "fillableCells": [
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
      ]
    ],
    "blockedCells": [
      [
        5,
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
            5,
            5
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
            0,
            1
          ],
          [
            0,
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
        "id": "piece-02",
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
        "id": "piece-03",
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
        "label": "貓掌餅乾",
        "theme": "paw-cookie",
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
            1,
            0
          ],
          [
            1,
            2
          ]
        ],
        "initialRotation": 2,
        "initialFlipped": false,
        "allowRotate": true,
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
            1,
            3
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
        "row": 5,
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
        "row": 1,
        "column": 3,
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
        "column": 5,
        "rotation": 0,
        "flipped": false
      },
      "piece-07": {
        "row": 3,
        "column": 2,
        "rotation": 0,
        "flipped": false
      }
    },
    "metrics": {
      "fillableCellCount": 34,
      "pieceCount": 7,
      "blockedCellCount": 1,
      "fixedItemCount": 1,
      "allowFlipPieceCount": 1,
      "irregularPieceCount": 5,
      "solutionCount": 1,
      "solverNodes": 353,
      "solverBacktracks": 345,
      "solverMaxDepth": 7,
      "solverCandidateCount": 376
    },
    "canonicalSignature": "6x6#0,0;0,1;0,2;0,3;0,4;0,5;1,0;1,1;1,2;1,3;1,4;1,5;2,0;2,1;2,2;2,3;2,4;2,5;3,0;3,1;3,2;3,3;3,4;3,5;4,0;4,1;4,2;4,3;4,4;4,5;5,1;5,2;5,3;5,4#5,0#5,5#0,0;1,0;1,2;2,0;2,1;2,2;3,0|0,1;0,2;0,3;0,4;1,1;1,3|0,5;1,5;2,5;3,5|1,4;2,3;2,4;3,4|3,1;4,0;4,1;4,2;5,1|3,2;3,3;4,3;4,4;4,5|5,2;5,3;5,4#3:0,4:0,4:0,5:0,5:0,6:1,7:0"
  },
  {
    "id": "L048",
    "chapter": 3,
    "chapterTitle": "房間整理",
    "title": "房間整理 8",
    "rows": 7,
    "columns": 7,
    "difficulty": 3,
    "difficultyScore": 466,
    "seed": 307041,
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
            5
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
        "id": "piece-02",
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
        "initialRotation": 3,
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
        "initialRotation": 1,
        "initialFlipped": true,
        "allowRotate": true,
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
        "id": "piece-05",
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
        "initialRotation": 0,
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
        "initialRotation": 2,
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
        "row": 4,
        "column": 2,
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
        "column": 0,
        "rotation": 0,
        "flipped": false
      },
      "piece-05": {
        "row": 1,
        "column": 5,
        "rotation": 0,
        "flipped": false
      },
      "piece-06": {
        "row": 2,
        "column": 3,
        "rotation": 0,
        "flipped": false
      },
      "piece-07": {
        "row": 0,
        "column": 0,
        "rotation": 0,
        "flipped": false
      }
    },
    "metrics": {
      "fillableCellCount": 44,
      "pieceCount": 7,
      "blockedCellCount": 3,
      "fixedItemCount": 2,
      "allowFlipPieceCount": 1,
      "irregularPieceCount": 5,
      "solutionCount": 1,
      "solverNodes": 218,
      "solverBacktracks": 210,
      "solverMaxDepth": 7,
      "solverCandidateCount": 543
    },
    "canonicalSignature": "7x7#0,1;0,2;0,3;0,4;0,5;1,0;1,1;1,2;1,3;1,4;1,5;1,6;2,0;2,1;2,2;2,3;2,4;2,5;2,6;3,0;3,1;3,2;3,3;3,4;3,5;3,6;4,0;4,1;4,2;4,3;4,4;4,5;4,6;5,0;5,1;5,2;5,3;5,4;5,5;5,6;6,1;6,2;6,3;6,4#0,0;0,6;6,6#6,0;6,5#0,1;0,2;1,0;1,1;2,1|0,3;0,4;0,5;1,2;1,3;2,2;2,3|1,4;1,5;1,6;2,4;3,3;3,4;4,3;4,4|2,0;3,0;3,1;3,2;4,2|2,5;2,6;3,5;3,6;4,5;4,6;5,5;5,6|4,0;4,1;5,0;5,1;6,1|5,2;5,3;5,4;6,2;6,3;6,4#5:0,5:0,5:1,6:0,7:0,8:0,8:0"
  },
  {
    "id": "L049",
    "chapter": 3,
    "chapterTitle": "房間整理",
    "title": "房間整理 9",
    "rows": 7,
    "columns": 7,
    "difficulty": 3,
    "difficultyScore": 476,
    "seed": 305009,
    "generatorVersion": 1,
    "parMoves": 18,
    "moveLimit": 29,
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
        5,
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
            0
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
        "initialRotation": 2,
        "initialFlipped": true,
        "allowRotate": true,
        "allowFlip": true,
        "equivalenceGroup": null
      },
      {
        "id": "piece-04",
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
        "id": "piece-05",
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
        "id": "piece-07",
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
            3,
            0
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
        "column": 2,
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
        "row": 0,
        "column": 3,
        "rotation": 0,
        "flipped": false
      },
      "piece-05": {
        "row": 0,
        "column": 0,
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
        "row": 1,
        "column": 5,
        "rotation": 0,
        "flipped": false
      }
    },
    "metrics": {
      "fillableCellCount": 44,
      "pieceCount": 7,
      "blockedCellCount": 3,
      "fixedItemCount": 2,
      "allowFlipPieceCount": 1,
      "irregularPieceCount": 7,
      "solutionCount": 1,
      "solverNodes": 218,
      "solverBacktracks": 210,
      "solverMaxDepth": 7,
      "solverCandidateCount": 504
    },
    "canonicalSignature": "7x7#0,1;0,2;0,3;0,4;0,5;1,0;1,1;1,2;1,3;1,4;1,5;1,6;2,0;2,1;2,2;2,3;2,4;2,5;2,6;3,0;3,1;3,2;3,3;3,4;3,5;3,6;4,0;4,1;4,2;4,3;4,4;4,5;4,6;5,0;5,1;5,2;5,3;5,4;5,5;5,6;6,1;6,2;6,3;6,4#0,0;6,5;6,6#0,6;6,0#0,1;0,2;0,3;1,0;1,1;1,2|0,4;0,5;1,3;1,4;1,5;1,6;2,6|2,0;2,1;2,2;3,0;3,1|2,3;2,4;2,5;3,3;3,4;3,5;4,3|3,2;4,0;4,1;4,2;5,0;5,1;5,2|3,6;4,4;4,5;4,6;5,5;5,6|5,3;5,4;6,1;6,2;6,3;6,4#5:0,6:0,6:0,6:1,7:0,7:0,7:0"
  },
  {
    "id": "L050",
    "chapter": 3,
    "chapterTitle": "房間整理",
    "title": "房間整理 10",
    "rows": 6,
    "columns": 6,
    "difficulty": 3,
    "difficultyScore": 481,
    "seed": 304216,
    "generatorVersion": 1,
    "parMoves": 10,
    "moveLimit": 23,
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
      ]
    ],
    "blockedCells": [
      [
        0,
        0
      ],
      [
        5,
        5
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
            5
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
        "id": "piece-03",
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
            2,
            0
          ]
        ],
        "initialRotation": 0,
        "initialFlipped": false,
        "allowRotate": true,
        "allowFlip": true,
        "equivalenceGroup": null
      },
      {
        "id": "piece-04",
        "label": "逗貓棒",
        "theme": "teaser",
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
        "initialFlipped": true,
        "allowRotate": false,
        "allowFlip": true,
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
        "id": "piece-06",
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
        "initialRotation": 3,
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
        "row": 0,
        "column": 3,
        "rotation": 0,
        "flipped": false
      },
      "piece-03": {
        "row": 2,
        "column": 0,
        "rotation": 0,
        "flipped": false
      },
      "piece-04": {
        "row": 0,
        "column": 0,
        "rotation": 0,
        "flipped": false
      },
      "piece-05": {
        "row": 3,
        "column": 0,
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
        "row": 5,
        "column": 2,
        "rotation": 0,
        "flipped": false
      }
    },
    "metrics": {
      "fillableCellCount": 33,
      "pieceCount": 7,
      "blockedCellCount": 2,
      "fixedItemCount": 1,
      "allowFlipPieceCount": 3,
      "irregularPieceCount": 6,
      "solutionCount": 1,
      "solverNodes": 335,
      "solverBacktracks": 327,
      "solverMaxDepth": 7,
      "solverCandidateCount": 291
    },
    "canonicalSignature": "6x6#0,0;0,1;0,2;0,3;0,4;1,0;1,1;1,2;1,3;1,4;1,5;2,0;2,1;2,2;2,3;2,4;2,5;3,0;3,1;3,2;3,3;3,4;3,5;4,0;4,1;4,2;4,3;4,4;4,5;5,1;5,2;5,3;5,4#0,5;5,0#5,5#0,0;0,1;1,1;2,1;2,2|0,2;0,3;0,4|1,0;2,0;3,0;3,1;3,2|1,2;1,3;1,4;2,3;3,3|1,5;2,4;2,5;3,5;4,5|3,4;4,3;4,4;5,3;5,4|4,0;4,1;4,2;5,1;5,2#3:0,5:0,5:0,5:0,5:1,5:1,5:1"
  },
  {
    "id": "L051",
    "chapter": 3,
    "chapterTitle": "房間整理",
    "title": "房間整理 11",
    "rows": 7,
    "columns": 7,
    "difficulty": 3,
    "difficultyScore": 485,
    "seed": 309020,
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
        5,
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
        "allowRotate": true,
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
        "label": "鮮奶盒",
        "theme": "milk",
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
        "initialFlipped": true,
        "allowRotate": true,
        "allowFlip": true,
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
        "initialRotation": 1,
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
        "row": 4,
        "column": 4,
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
        "row": 2,
        "column": 3,
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
        "row": 0,
        "column": 1,
        "rotation": 0,
        "flipped": false
      }
    },
    "metrics": {
      "fillableCellCount": 44,
      "pieceCount": 7,
      "blockedCellCount": 3,
      "fixedItemCount": 2,
      "allowFlipPieceCount": 2,
      "irregularPieceCount": 6,
      "solutionCount": 1,
      "solverNodes": 226,
      "solverBacktracks": 218,
      "solverMaxDepth": 7,
      "solverCandidateCount": 650
    },
    "canonicalSignature": "7x7#0,1;0,2;0,3;0,4;0,5;1,0;1,1;1,2;1,3;1,4;1,5;1,6;2,0;2,1;2,2;2,3;2,4;2,5;2,6;3,0;3,1;3,2;3,3;3,4;3,5;3,6;4,0;4,1;4,2;4,3;4,4;4,5;4,6;5,0;5,1;5,2;5,3;5,4;5,5;5,6;6,1;6,2;6,3;6,4#0,6;6,5;6,6#0,0;6,0#0,1;0,2;1,1;1,2;2,1;2,2;2,3|0,3;0,4;0,5;1,3;1,4;1,5;1,6|1,0;2,0;3,0;3,1;3,2;4,1;4,2|2,4;2,5;2,6;3,4;3,5;3,6|3,3;4,3;5,2;5,3;5,4;6,4|4,0;5,0;5,1;6,1;6,2;6,3|4,4;4,5;4,6;5,5;5,6#5:1,6:0,6:0,6:0,7:0,7:0,7:1"
  },
  {
    "id": "L052",
    "chapter": 3,
    "chapterTitle": "房間整理",
    "title": "房間整理 12",
    "rows": 6,
    "columns": 6,
    "difficulty": 3,
    "difficultyScore": 487,
    "seed": 306514,
    "generatorVersion": 1,
    "parMoves": 12,
    "moveLimit": 20,
    "fillableCells": [
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
      ]
    ],
    "blockedCells": [
      [
        5,
        0
      ],
      [
        5,
        5
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
            5
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
        "initialRotation": 3,
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
            2
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
        "allowFlip": true,
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
          ]
        ],
        "initialRotation": 0,
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
          ]
        ],
        "initialRotation": 0,
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
        "row": 0,
        "column": 1,
        "rotation": 0,
        "flipped": false
      },
      "piece-03": {
        "row": 0,
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
        "row": 2,
        "column": 3,
        "rotation": 0,
        "flipped": false
      },
      "piece-06": {
        "row": 0,
        "column": 0,
        "rotation": 0,
        "flipped": false
      },
      "piece-07": {
        "row": 3,
        "column": 0,
        "rotation": 0,
        "flipped": false
      }
    },
    "metrics": {
      "fillableCellCount": 33,
      "pieceCount": 7,
      "blockedCellCount": 2,
      "fixedItemCount": 1,
      "allowFlipPieceCount": 1,
      "irregularPieceCount": 6,
      "solutionCount": 1,
      "solverNodes": 700,
      "solverBacktracks": 692,
      "solverMaxDepth": 7,
      "solverCandidateCount": 432
    },
    "canonicalSignature": "6x6#0,0;0,1;0,2;0,3;0,4;1,0;1,1;1,2;1,3;1,4;1,5;2,0;2,1;2,2;2,3;2,4;2,5;3,0;3,1;3,2;3,3;3,4;3,5;4,0;4,1;4,2;4,3;4,4;4,5;5,1;5,2;5,3;5,4#0,5;5,5#5,0#0,0;0,1;0,2;0,3;1,2;2,2|0,4;1,3;1,4;1,5|1,0;1,1;2,0;2,1;3,0|2,3;2,4;3,3;3,4|2,5;3,5;4,4;4,5;5,4|3,1;4,0;4,1;5,1;5,2|3,2;4,2;4,3;5,3#4:0,4:0,4:0,5:0,5:0,5:1,6:0"
  },
  {
    "id": "L053",
    "chapter": 3,
    "chapterTitle": "房間整理",
    "title": "房間整理 13",
    "rows": 7,
    "columns": 7,
    "difficulty": 3,
    "difficultyScore": 489,
    "seed": 311002,
    "generatorVersion": 1,
    "parMoves": 15,
    "moveLimit": 28,
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
      ],
      [
        6,
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
        "id": "piece-03",
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
        "initialRotation": 2,
        "initialFlipped": true,
        "allowRotate": true,
        "allowFlip": true,
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
            0
          ]
        ],
        "initialRotation": 2,
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
            2,
            3
          ],
          [
            2,
            4
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
        "row": 2,
        "column": 4,
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
        "row": 0,
        "column": 4,
        "rotation": 0,
        "flipped": false
      },
      "piece-05": {
        "row": 4,
        "column": 2,
        "rotation": 0,
        "flipped": false
      },
      "piece-06": {
        "row": 0,
        "column": 0,
        "rotation": 0,
        "flipped": false
      },
      "piece-07": {
        "row": 1,
        "column": 5,
        "rotation": 0,
        "flipped": false
      }
    },
    "metrics": {
      "fillableCellCount": 46,
      "pieceCount": 7,
      "blockedCellCount": 2,
      "fixedItemCount": 1,
      "allowFlipPieceCount": 3,
      "irregularPieceCount": 7,
      "solutionCount": 1,
      "solverNodes": 196,
      "solverBacktracks": 188,
      "solverMaxDepth": 7,
      "solverCandidateCount": 579
    },
    "canonicalSignature": "7x7#0,0;0,1;0,2;0,3;0,4;0,5;1,0;1,1;1,2;1,3;1,4;1,5;1,6;2,0;2,1;2,2;2,3;2,4;2,5;2,6;3,0;3,1;3,2;3,3;3,4;3,5;3,6;4,0;4,1;4,2;4,3;4,4;4,5;4,6;5,0;5,1;5,2;5,3;5,4;5,5;5,6;6,1;6,2;6,3;6,4;6,5#0,6;6,6#6,0#0,0;0,1;0,2;0,3;1,2;1,3;2,3;2,4|0,4;0,5;1,4;1,5;1,6;2,5;2,6|1,0;1,1;2,0;2,1;2,2;3,1;3,2;4,2|3,0;4,0;4,1;5,0;5,1|3,3;3,4;4,3;4,4;5,3;6,3;6,4|3,5;3,6;4,5;4,6;5,4;5,5;5,6;6,5|5,2;6,1;6,2#3:1,5:0,7:0,7:1,8:0,8:0,8:1"
  },
  {
    "id": "L054",
    "chapter": 3,
    "chapterTitle": "房間整理",
    "title": "房間整理 14",
    "rows": 7,
    "columns": 7,
    "difficulty": 3,
    "difficultyScore": 504,
    "seed": 315012,
    "generatorVersion": 1,
    "parMoves": 15,
    "moveLimit": 28,
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
      ],
      [
        6,
        6
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
          ],
          [
            2,
            3
          ]
        ],
        "initialRotation": 3,
        "initialFlipped": false,
        "allowRotate": true,
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
            1,
            3
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
        "allowRotate": true,
        "allowFlip": false,
        "equivalenceGroup": null
      }
    ],
    "solution": {
      "piece-01": {
        "row": 3,
        "column": 2,
        "rotation": 0,
        "flipped": false
      },
      "piece-02": {
        "row": 4,
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
        "row": 1,
        "column": 0,
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
        "row": 3,
        "column": 5,
        "rotation": 0,
        "flipped": false
      }
    },
    "metrics": {
      "fillableCellCount": 46,
      "pieceCount": 7,
      "blockedCellCount": 2,
      "fixedItemCount": 1,
      "allowFlipPieceCount": 1,
      "irregularPieceCount": 6,
      "solutionCount": 1,
      "solverNodes": 569,
      "solverBacktracks": 561,
      "solverMaxDepth": 7,
      "solverCandidateCount": 622
    },
    "canonicalSignature": "7x7#0,0;0,1;0,2;0,3;0,4;0,5;1,0;1,1;1,2;1,3;1,4;1,5;1,6;2,0;2,1;2,2;2,3;2,4;2,5;2,6;3,0;3,1;3,2;3,3;3,4;3,5;3,6;4,0;4,1;4,2;4,3;4,4;4,5;4,6;5,0;5,1;5,2;5,3;5,4;5,5;5,6;6,1;6,2;6,3;6,4;6,5#0,6;6,0#6,6#0,0;0,1;0,2;0,3;1,0;1,3|0,4;0,5;1,4;1,5;1,6;2,4;2,5;2,6|1,1;1,2;2,2;2,3;3,2;3,3;4,3|2,0;2,1;3,0;3,1;4,1;4,2|3,4;4,4;5,3;5,4;6,4;6,5|3,5;3,6;4,5;4,6;5,5;5,6|4,0;5,0;5,1;5,2;6,1;6,2;6,3#6:0,6:0,6:0,6:0,7:0,7:1,8:0"
  },
  {
    "id": "L055",
    "chapter": 3,
    "chapterTitle": "房間整理",
    "title": "房間整理 15",
    "rows": 7,
    "columns": 7,
    "difficulty": 3,
    "difficultyScore": 512,
    "seed": 317002,
    "generatorVersion": 1,
    "parMoves": 22,
    "moveLimit": 34,
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
            6,
            0
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
            0,
            2
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
        "id": "piece-02",
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
        "initialRotation": 0,
        "initialFlipped": false,
        "allowRotate": false,
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
        "initialRotation": 1,
        "initialFlipped": true,
        "allowRotate": true,
        "allowFlip": true,
        "equivalenceGroup": null
      },
      {
        "id": "piece-04",
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
        "id": "piece-05",
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
        "initialRotation": 1,
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
        "initialRotation": 0,
        "initialFlipped": true,
        "allowRotate": true,
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
        "initialRotation": 1,
        "initialFlipped": false,
        "allowRotate": true,
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
        "row": 4,
        "column": 2,
        "rotation": 0,
        "flipped": false
      },
      "piece-02": {
        "row": 2,
        "column": 5,
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
        "row": 0,
        "column": 0,
        "rotation": 0,
        "flipped": false
      },
      "piece-05": {
        "row": 3,
        "column": 0,
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
        "row": 1,
        "column": 5,
        "rotation": 0,
        "flipped": false
      },
      "piece-08": {
        "row": 1,
        "column": 2,
        "rotation": 0,
        "flipped": false
      }
    },
    "metrics": {
      "fillableCellCount": 45,
      "pieceCount": 8,
      "blockedCellCount": 2,
      "fixedItemCount": 2,
      "allowFlipPieceCount": 2,
      "irregularPieceCount": 8,
      "solutionCount": 1,
      "solverNodes": 281,
      "solverBacktracks": 272,
      "solverMaxDepth": 8,
      "solverCandidateCount": 661
    },
    "canonicalSignature": "7x7#0,1;0,2;0,3;0,4;0,5;1,0;1,1;1,2;1,3;1,4;1,5;1,6;2,0;2,1;2,2;2,3;2,4;2,5;2,6;3,0;3,1;3,2;3,3;3,4;3,5;3,6;4,0;4,1;4,2;4,3;4,4;4,5;4,6;5,0;5,1;5,2;5,3;5,4;5,5;5,6;6,1;6,2;6,3;6,4;6,5#0,0;0,6#6,0;6,6#0,1;0,2;0,3;1,3;1,4;2,3|0,4;0,5;1,5;1,6;2,5;2,6;3,6|1,0;1,1;2,0;3,0;4,0|1,2;2,2;2,4;3,2;3,3;3,4|2,1;3,1;4,1;5,0;5,1|3,5;4,5;4,6;5,4;5,5;5,6;6,5|4,2;4,3;4,4;5,2|5,3;6,1;6,2;6,3;6,4#4:0,5:0,5:0,5:1,6:0,6:1,7:0,7:0"
  },
  {
    "id": "L056",
    "chapter": 3,
    "chapterTitle": "房間整理",
    "title": "房間整理 16",
    "rows": 7,
    "columns": 7,
    "difficulty": 3,
    "difficultyScore": 514,
    "seed": 303015,
    "generatorVersion": 1,
    "parMoves": 19,
    "moveLimit": 32,
    "fillableCells": [
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
      ],
      [
        6,
        5
      ]
    ],
    "blockedCells": [
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
        "label": "小魚玩具",
        "theme": "fish-toy",
        "cells": [
          [
            0,
            1
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
        "initialRotation": 2,
        "initialFlipped": true,
        "allowRotate": true,
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
        "initialRotation": 2,
        "initialFlipped": true,
        "allowRotate": true,
        "allowFlip": true,
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
        "initialRotation": 0,
        "initialFlipped": true,
        "allowRotate": true,
        "allowFlip": true,
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
            3,
            1
          ]
        ],
        "initialRotation": 3,
        "initialFlipped": false,
        "allowRotate": true,
        "allowFlip": true,
        "equivalenceGroup": null
      }
    ],
    "solution": {
      "piece-01": {
        "row": 3,
        "column": 0,
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
        "row": 0,
        "column": 0,
        "rotation": 0,
        "flipped": false
      },
      "piece-04": {
        "row": 3,
        "column": 5,
        "rotation": 0,
        "flipped": false
      },
      "piece-05": {
        "row": 2,
        "column": 2,
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
        "row": 0,
        "column": 4,
        "rotation": 0,
        "flipped": false
      }
    },
    "metrics": {
      "fillableCellCount": 47,
      "pieceCount": 7,
      "blockedCellCount": 1,
      "fixedItemCount": 1,
      "allowFlipPieceCount": 4,
      "irregularPieceCount": 7,
      "solutionCount": 1,
      "solverNodes": 281,
      "solverBacktracks": 273,
      "solverMaxDepth": 7,
      "solverCandidateCount": 776
    },
    "canonicalSignature": "7x7#0,0;0,1;0,2;0,3;0,4;0,5;0,6;1,0;1,1;1,2;1,3;1,4;1,5;1,6;2,0;2,1;2,2;2,3;2,4;2,5;2,6;3,0;3,1;3,2;3,3;3,4;3,5;3,6;4,0;4,1;4,2;4,3;4,4;4,5;4,6;5,0;5,1;5,2;5,3;5,4;5,5;5,6;6,1;6,2;6,3;6,4;6,5#6,0#6,6#0,0;0,1;1,0;2,0;2,1;2,2;3,1|0,2;0,3;0,4;1,1;1,2;1,3|0,5;0,6;1,4;1,5;1,6;2,5;2,6|2,3;2,4;3,2;3,3;4,2;4,3;5,3|3,0;4,0;4,1;5,0|3,4;3,5;3,6;4,4;4,5;4,6;5,5;5,6|5,1;5,2;5,4;6,1;6,2;6,3;6,4;6,5#4:0,6:1,7:1,7:1,7:1,8:0,8:0"
  },
  {
    "id": "L057",
    "chapter": 3,
    "chapterTitle": "房間整理",
    "title": "房間整理 17",
    "rows": 7,
    "columns": 7,
    "difficulty": 3,
    "difficultyScore": 516,
    "seed": 301004,
    "generatorVersion": 1,
    "parMoves": 13,
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
            5,
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
            0
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
        "allowRotate": true,
        "allowFlip": true,
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
          ],
          [
            0,
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
        "id": "piece-03",
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
          ]
        ],
        "initialRotation": 2,
        "initialFlipped": true,
        "allowRotate": true,
        "allowFlip": true,
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
        "id": "piece-06",
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
        "allowFlip": true,
        "equivalenceGroup": null
      },
      {
        "id": "piece-07",
        "label": "逗貓棒",
        "theme": "teaser",
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
        "row": 3,
        "column": 0,
        "rotation": 0,
        "flipped": false
      },
      "piece-02": {
        "row": 6,
        "column": 2,
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
        "row": 0,
        "column": 2,
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
        "row": 1,
        "column": 5,
        "rotation": 0,
        "flipped": false
      },
      "piece-07": {
        "row": 1,
        "column": 3,
        "rotation": 0,
        "flipped": false
      }
    },
    "metrics": {
      "fillableCellCount": 44,
      "pieceCount": 7,
      "blockedCellCount": 3,
      "fixedItemCount": 2,
      "allowFlipPieceCount": 3,
      "irregularPieceCount": 6,
      "solutionCount": 1,
      "solverNodes": 338,
      "solverBacktracks": 330,
      "solverMaxDepth": 7,
      "solverCandidateCount": 603
    },
    "canonicalSignature": "7x7#0,1;0,2;0,3;0,4;0,5;1,0;1,1;1,2;1,3;1,4;1,5;1,6;2,0;2,1;2,2;2,3;2,4;2,5;2,6;3,0;3,1;3,2;3,3;3,4;3,5;3,6;4,0;4,1;4,2;4,3;4,4;4,5;4,6;5,0;5,1;5,2;5,3;5,4;5,5;5,6;6,1;6,2;6,3;6,4#0,0;0,6;6,0#6,5;6,6#0,1;0,2;0,3;0,4;1,3;1,4|0,5;1,5;2,4;2,5;3,4;3,5|1,0;2,0;3,0;3,1;4,0;4,1|1,1;1,2;2,1;2,2;2,3;3,3|1,6;2,6;3,6;4,6|3,2;4,2;4,3;5,0;5,1;5,2;6,1;6,2|4,4;4,5;5,3;5,4;5,5;5,6;6,3;6,4#4:0,6:0,6:0,6:0,6:1,8:1,8:1"
  },
  {
    "id": "L058",
    "chapter": 3,
    "chapterTitle": "房間整理",
    "title": "房間整理 18",
    "rows": 7,
    "columns": 7,
    "difficulty": 3,
    "difficultyScore": 517,
    "seed": 313039,
    "generatorVersion": 1,
    "parMoves": 18,
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
    "blockedCells": [
      [
        0,
        0
      ],
      [
        0,
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
            2,
            0
          ]
        ],
        "initialRotation": 1,
        "initialFlipped": true,
        "allowRotate": true,
        "allowFlip": true,
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
        "initialRotation": 2,
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
        "allowRotate": true,
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
        "allowFlip": true,
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
        "initialRotation": 2,
        "initialFlipped": false,
        "allowRotate": true,
        "allowFlip": true,
        "equivalenceGroup": null
      },
      {
        "id": "piece-07",
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
        "row": 2,
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
        "row": 3,
        "column": 0,
        "rotation": 0,
        "flipped": false
      },
      "piece-04": {
        "row": 0,
        "column": 0,
        "rotation": 0,
        "flipped": false
      },
      "piece-05": {
        "row": 6,
        "column": 1,
        "rotation": 0,
        "flipped": false
      },
      "piece-06": {
        "row": 2,
        "column": 5,
        "rotation": 0,
        "flipped": false
      },
      "piece-07": {
        "row": 3,
        "column": 3,
        "rotation": 0,
        "flipped": false
      }
    },
    "metrics": {
      "fillableCellCount": 46,
      "pieceCount": 7,
      "blockedCellCount": 2,
      "fixedItemCount": 1,
      "allowFlipPieceCount": 3,
      "irregularPieceCount": 6,
      "solutionCount": 1,
      "solverNodes": 414,
      "solverBacktracks": 406,
      "solverMaxDepth": 7,
      "solverCandidateCount": 679
    },
    "canonicalSignature": "7x7#0,0;0,1;0,2;0,3;0,4;0,5;1,0;1,1;1,2;1,3;1,4;1,5;1,6;2,0;2,1;2,2;2,3;2,4;2,5;2,6;3,0;3,1;3,2;3,3;3,4;3,5;3,6;4,0;4,1;4,2;4,3;4,4;4,5;4,6;5,0;5,1;5,2;5,3;5,4;5,5;5,6;6,1;6,2;6,3;6,4;6,5#0,6;6,6#6,0#0,0;1,0;2,0;3,0;4,0;5,0|0,1;0,2;0,3;0,4;1,2;1,3|0,5;1,4;1,5;1,6;2,4;2,5;2,6|1,1;2,1;2,2;2,3;3,1;3,2|3,3;4,1;4,2;4,3;5,1;5,2;6,1|3,4;4,4;5,3;5,4;6,2;6,3;6,4|3,5;3,6;4,5;4,6;5,5;5,6;6,5#6:0,6:0,6:1,7:0,7:0,7:1,7:1"
  },
  {
    "id": "L059",
    "chapter": 3,
    "chapterTitle": "房間整理",
    "title": "房間整理 19",
    "rows": 7,
    "columns": 7,
    "difficulty": 3,
    "difficultyScore": 521,
    "seed": 319012,
    "generatorVersion": 1,
    "parMoves": 26,
    "moveLimit": 34,
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
    "blockedCells": [
      [
        0,
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
            6
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
            2,
            1
          ],
          [
            2,
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
        "initialRotation": 1,
        "initialFlipped": false,
        "allowRotate": true,
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
        "initialFlipped": true,
        "allowRotate": true,
        "allowFlip": true,
        "equivalenceGroup": null
      },
      {
        "id": "piece-05",
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
            5,
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
        "id": "piece-07",
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
        "initialRotation": 1,
        "initialFlipped": false,
        "allowRotate": true,
        "allowFlip": false,
        "equivalenceGroup": null
      }
    ],
    "solution": {
      "piece-01": {
        "row": 2,
        "column": 1,
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
        "row": 0,
        "column": 1,
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
        "row": 1,
        "column": 0,
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
        "row": 4,
        "column": 3,
        "rotation": 0,
        "flipped": false
      }
    },
    "metrics": {
      "fillableCellCount": 46,
      "pieceCount": 7,
      "blockedCellCount": 2,
      "fixedItemCount": 1,
      "allowFlipPieceCount": 2,
      "irregularPieceCount": 7,
      "solutionCount": 1,
      "solverNodes": 547,
      "solverBacktracks": 539,
      "solverMaxDepth": 7,
      "solverCandidateCount": 698
    },
    "canonicalSignature": "7x7#0,0;0,1;0,2;0,3;0,4;0,5;1,0;1,1;1,2;1,3;1,4;1,5;1,6;2,0;2,1;2,2;2,3;2,4;2,5;2,6;3,0;3,1;3,2;3,3;3,4;3,5;3,6;4,0;4,1;4,2;4,3;4,4;4,5;4,6;5,0;5,1;5,2;5,3;5,4;5,5;5,6;6,1;6,2;6,3;6,4;6,5#0,6;6,0#6,6#0,0;0,1;0,2;0,3;0,4;0,5;1,2|1,0;1,1;2,0;2,1;3,0;4,0;5,0|1,3;2,2;2,3;3,3;4,2;4,3;4,4|1,4;1,5;1,6;2,4;2,5;2,6;3,6|3,1;3,2;4,1;5,1;5,2;6,1|3,4;3,5;4,5;4,6;5,5;5,6|5,3;5,4;6,2;6,3;6,4;6,5#6:0,6:0,6:1,7:0,7:0,7:0,7:1"
  },
  {
    "id": "L060",
    "chapter": 3,
    "chapterTitle": "房間整理",
    "title": "房間整理 20",
    "rows": 6,
    "columns": 6,
    "difficulty": 3,
    "difficultyScore": 534,
    "seed": 314383,
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
      ]
    ],
    "blockedCells": [
      [
        0,
        5
      ],
      [
        5,
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
            1,
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
            1,
            3
          ]
        ],
        "initialRotation": 1,
        "initialFlipped": true,
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
        "id": "piece-04",
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
        "allowFlip": true,
        "equivalenceGroup": null
      }
    ],
    "solution": {
      "piece-01": {
        "row": 3,
        "column": 0,
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
        "row": 2,
        "column": 1,
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
        "row": 0,
        "column": 1,
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
        "column": 4,
        "rotation": 0,
        "flipped": false
      }
    },
    "metrics": {
      "fillableCellCount": 33,
      "pieceCount": 7,
      "blockedCellCount": 2,
      "fixedItemCount": 1,
      "allowFlipPieceCount": 2,
      "irregularPieceCount": 6,
      "solutionCount": 1,
      "solverNodes": 1531,
      "solverBacktracks": 1523,
      "solverMaxDepth": 7,
      "solverCandidateCount": 432
    },
    "canonicalSignature": "6x6#0,0;0,1;0,2;0,3;0,4;1,0;1,1;1,2;1,3;1,4;1,5;2,0;2,1;2,2;2,3;2,4;2,5;3,0;3,1;3,2;3,3;3,4;3,5;4,0;4,1;4,2;4,3;4,4;4,5;5,1;5,2;5,3;5,4#0,5;5,0#5,5#0,0;0,1;0,2;0,3;1,2;1,3|0,4;1,4;1,5;2,5;3,5|1,0;2,0;3,0;3,1;4,0;4,1|1,1;2,1;2,2;2,3;3,2;4,2|2,4;3,3;3,4;4,4;4,5|4,3;5,3;5,4|5,1;5,2#2:0,3:0,5:0,5:0,6:0,6:1,6:1"
  }
]);
});
