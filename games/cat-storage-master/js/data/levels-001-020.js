(function (root, factory) {
  const levels = factory();
  if (typeof module === 'object' && module.exports) module.exports = levels;
  else root.CAT_STORAGE_LEVELS_001_020 = levels;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  return Object.freeze([
  {
    "id": "L001",
    "chapter": 1,
    "chapterTitle": "整理入門",
    "title": "第一次收納",
    "rows": 4,
    "columns": 4,
    "difficulty": 1,
    "difficultyScore": 198,
    "seed": 100018,
    "generatorVersion": 1,
    "parMoves": 7,
    "moveLimit": 17,
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
      ],
      [
        2,
        3
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
    "blockedCells": [],
    "fixedItems": [
      {
        "id": "fixed-1",
        "type": "sleeping-cat",
        "label": "睡覺中的貓咪",
        "cells": [
          [
            3,
            3
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
        "row": 2,
        "column": 0,
        "rotation": 0,
        "flipped": false
      }
    },
    "metrics": {
      "fillableCellCount": 15,
      "pieceCount": 4,
      "blockedCellCount": 0,
      "fixedItemCount": 1,
      "allowFlipPieceCount": 0,
      "irregularPieceCount": 4,
      "solutionCount": 1,
      "solverNodes": 11,
      "solverBacktracks": 6,
      "solverMaxDepth": 4,
      "solverCandidateCount": 55
    },
    "canonicalSignature": "4x4#0,0;0,1;0,2;0,3;1,0;1,1;1,2;1,3;2,0;2,1;2,2;2,3;3,0;3,1;3,2##3,3#0,0;0,1;0,2;1,0|0,3;1,2;1,3;2,3|1,1;2,0;2,1;3,0|2,2;3,1;3,2#3:0,4:0,4:0,4:0"
  },
  {
    "id": "L002",
    "chapter": 1,
    "chapterTitle": "整理入門",
    "title": "整理入門 2",
    "rows": 4,
    "columns": 4,
    "difficulty": 1,
    "difficultyScore": 199,
    "seed": 108003,
    "generatorVersion": 1,
    "parMoves": 5,
    "moveLimit": 16,
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
      ],
      [
        2,
        3
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
      ]
    ],
    "blockedCells": [],
    "fixedItems": [],
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
      }
    ],
    "solution": {
      "piece-01": {
        "row": 0,
        "column": 0,
        "rotation": 0,
        "flipped": false
      },
      "piece-02": {
        "row": 2,
        "column": 2,
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
        "column": 0,
        "rotation": 0,
        "flipped": false
      }
    },
    "metrics": {
      "fillableCellCount": 16,
      "pieceCount": 4,
      "blockedCellCount": 0,
      "fixedItemCount": 0,
      "allowFlipPieceCount": 0,
      "irregularPieceCount": 4,
      "solutionCount": 1,
      "solverNodes": 12,
      "solverBacktracks": 7,
      "solverMaxDepth": 4,
      "solverCandidateCount": 63
    },
    "canonicalSignature": "4x4#0,0;0,1;0,2;0,3;1,0;1,1;1,2;1,3;2,0;2,1;2,2;2,3;3,0;3,1;3,2;3,3###0,0;0,1;0,2;1,0|0,3;1,2;1,3;2,3|1,1;2,0;2,1;3,0;3,1|2,2;3,2;3,3#3:0,4:0,4:0,5:0"
  },
  {
    "id": "L003",
    "chapter": 1,
    "chapterTitle": "整理入門",
    "title": "整理入門 3",
    "rows": 4,
    "columns": 4,
    "difficulty": 1,
    "difficultyScore": 201,
    "seed": 112021,
    "generatorVersion": 1,
    "parMoves": 4,
    "moveLimit": 16,
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
      ],
      [
        2,
        3
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
      ]
    ],
    "blockedCells": [],
    "fixedItems": [],
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
        "id": "piece-03",
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
        "id": "piece-04",
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
        "initialRotation": 0,
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
        "row": 0,
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
        "row": 1,
        "column": 0,
        "rotation": 0,
        "flipped": false
      }
    },
    "metrics": {
      "fillableCellCount": 16,
      "pieceCount": 4,
      "blockedCellCount": 0,
      "fixedItemCount": 0,
      "allowFlipPieceCount": 0,
      "irregularPieceCount": 3,
      "solutionCount": 1,
      "solverNodes": 14,
      "solverBacktracks": 9,
      "solverMaxDepth": 4,
      "solverCandidateCount": 50
    },
    "canonicalSignature": "4x4#0,0;0,1;0,2;0,3;1,0;1,1;1,2;1,3;2,0;2,1;2,2;2,3;3,0;3,1;3,2;3,3###0,0;0,1;0,2;1,0|0,3;1,1;1,2;1,3;2,1|2,0;3,0;3,1|2,2;2,3;3,2;3,3#3:0,4:0,4:0,5:0"
  },
  {
    "id": "L004",
    "chapter": 1,
    "chapterTitle": "整理入門",
    "title": "整理入門 4",
    "rows": 4,
    "columns": 4,
    "difficulty": 1,
    "difficultyScore": 208,
    "seed": 116024,
    "generatorVersion": 1,
    "parMoves": 7,
    "moveLimit": 21,
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
      ],
      [
        2,
        3
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
      ]
    ],
    "blockedCells": [],
    "fixedItems": [],
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
        "initialRotation": 3,
        "initialFlipped": false,
        "allowRotate": true,
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
        "row": 2,
        "column": 1,
        "rotation": 0,
        "flipped": false
      }
    },
    "metrics": {
      "fillableCellCount": 16,
      "pieceCount": 4,
      "blockedCellCount": 0,
      "fixedItemCount": 0,
      "allowFlipPieceCount": 0,
      "irregularPieceCount": 3,
      "solutionCount": 1,
      "solverNodes": 16,
      "solverBacktracks": 11,
      "solverMaxDepth": 4,
      "solverCandidateCount": 50
    },
    "canonicalSignature": "4x4#0,0;0,1;0,2;0,3;1,0;1,1;1,2;1,3;2,0;2,1;2,2;2,3;3,0;3,1;3,2;3,3###0,0;0,1;0,2;1,0|0,3;1,2;1,3;2,2;2,3|1,1;2,0;2,1;3,0|3,1;3,2;3,3#3:0,4:0,4:0,5:0"
  },
  {
    "id": "L005",
    "chapter": 1,
    "chapterTitle": "整理入門",
    "title": "整理入門 5",
    "rows": 4,
    "columns": 4,
    "difficulty": 1,
    "difficultyScore": 209,
    "seed": 104009,
    "generatorVersion": 1,
    "parMoves": 6,
    "moveLimit": 19,
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
      ],
      [
        2,
        3
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
      ]
    ],
    "blockedCells": [],
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
      }
    ],
    "solution": {
      "piece-01": {
        "row": 0,
        "column": 3,
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
        "row": 1,
        "column": 0,
        "rotation": 0,
        "flipped": false
      },
      "piece-04": {
        "row": 2,
        "column": 0,
        "rotation": 0,
        "flipped": false
      }
    },
    "metrics": {
      "fillableCellCount": 15,
      "pieceCount": 4,
      "blockedCellCount": 0,
      "fixedItemCount": 1,
      "allowFlipPieceCount": 0,
      "irregularPieceCount": 3,
      "solutionCount": 1,
      "solverNodes": 15,
      "solverBacktracks": 10,
      "solverMaxDepth": 4,
      "solverCandidateCount": 46
    },
    "canonicalSignature": "4x4#0,0;0,1;0,2;0,3;1,0;1,1;1,2;1,3;2,0;2,1;2,2;2,3;3,0;3,1;3,2##3,3#0,0;0,1;0,2;0,3|1,0;2,0;3,0;3,1|1,1;2,1;2,2;3,2|1,2;1,3;2,3#3:0,4:0,4:0,4:0"
  },
  {
    "id": "L006",
    "chapter": 1,
    "chapterTitle": "整理入門",
    "title": "整理入門 6",
    "rows": 4,
    "columns": 4,
    "difficulty": 1,
    "difficultyScore": 210,
    "seed": 118015,
    "generatorVersion": 1,
    "parMoves": 9,
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
      ],
      [
        2,
        3
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
    "blockedCells": [],
    "fixedItems": [
      {
        "id": "fixed-1",
        "type": "sleeping-cat",
        "label": "睡覺中的貓咪",
        "cells": [
          [
            3,
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
        "column": 1,
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
      }
    },
    "metrics": {
      "fillableCellCount": 15,
      "pieceCount": 4,
      "blockedCellCount": 0,
      "fixedItemCount": 1,
      "allowFlipPieceCount": 0,
      "irregularPieceCount": 4,
      "solutionCount": 1,
      "solverNodes": 14,
      "solverBacktracks": 9,
      "solverMaxDepth": 4,
      "solverCandidateCount": 71
    },
    "canonicalSignature": "4x4#0,0;0,1;0,2;0,3;1,0;1,1;1,2;1,3;2,0;2,1;2,2;2,3;3,0;3,1;3,2##3,3#0,0;0,1;1,1;1,2|0,2;0,3;1,3|1,0;2,0;3,0;3,1|2,1;2,2;2,3;3,2#3:0,4:0,4:0,4:0"
  },
  {
    "id": "L007",
    "chapter": 1,
    "chapterTitle": "整理入門",
    "title": "整理入門 7",
    "rows": 4,
    "columns": 4,
    "difficulty": 1,
    "difficultyScore": 215,
    "seed": 102013,
    "generatorVersion": 1,
    "parMoves": 9,
    "moveLimit": 19,
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
      ],
      [
        2,
        3
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
      ]
    ],
    "blockedCells": [],
    "fixedItems": [],
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
        "row": 1,
        "column": 0,
        "rotation": 0,
        "flipped": false
      }
    },
    "metrics": {
      "fillableCellCount": 16,
      "pieceCount": 4,
      "blockedCellCount": 0,
      "fixedItemCount": 0,
      "allowFlipPieceCount": 0,
      "irregularPieceCount": 4,
      "solutionCount": 1,
      "solverNodes": 17,
      "solverBacktracks": 12,
      "solverMaxDepth": 4,
      "solverCandidateCount": 78
    },
    "canonicalSignature": "4x4#0,0;0,1;0,2;0,3;1,0;1,1;1,2;1,3;2,0;2,1;2,2;2,3;3,0;3,1;3,2;3,3###0,0;0,1;0,2;1,0;1,1|0,3;1,2;1,3;2,3|2,0;3,0;3,1|2,1;2,2;3,2;3,3#3:0,4:0,4:0,5:0"
  },
  {
    "id": "L008",
    "chapter": 1,
    "chapterTitle": "整理入門",
    "title": "整理入門 8",
    "rows": 4,
    "columns": 4,
    "difficulty": 1,
    "difficultyScore": 217,
    "seed": 114001,
    "generatorVersion": 1,
    "parMoves": 8,
    "moveLimit": 22,
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
      ],
      [
        2,
        3
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
      ]
    ],
    "blockedCells": [],
    "fixedItems": [
      {
        "id": "fixed-1",
        "type": "sleeping-cat",
        "label": "睡覺中的貓咪",
        "cells": [
          [
            0,
            3
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
            2,
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
        "row": 0,
        "column": 1,
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
        "column": 0,
        "rotation": 0,
        "flipped": false
      }
    },
    "metrics": {
      "fillableCellCount": 15,
      "pieceCount": 4,
      "blockedCellCount": 0,
      "fixedItemCount": 1,
      "allowFlipPieceCount": 0,
      "irregularPieceCount": 3,
      "solutionCount": 1,
      "solverNodes": 18,
      "solverBacktracks": 13,
      "solverMaxDepth": 4,
      "solverCandidateCount": 59
    },
    "canonicalSignature": "4x4#0,0;0,1;0,2;0,3;1,0;1,1;1,2;1,3;2,0;2,1;2,2;2,3;3,0;3,1;3,2##3,3#0,0;0,1;1,1|0,2;0,3;1,2;1,3|1,0;2,0;3,0;3,1|2,1;2,2;2,3;3,2#3:0,4:0,4:0,4:0"
  },
  {
    "id": "L009",
    "chapter": 1,
    "chapterTitle": "整理入門",
    "title": "整理入門 9",
    "rows": 4,
    "columns": 4,
    "difficulty": 1,
    "difficultyScore": 220,
    "seed": 110025,
    "generatorVersion": 1,
    "parMoves": 10,
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
      ],
      [
        2,
        3
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
      ]
    ],
    "blockedCells": [],
    "fixedItems": [
      {
        "id": "fixed-1",
        "type": "sleeping-cat",
        "label": "睡覺中的貓咪",
        "cells": [
          [
            0,
            3
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
        "row": 2,
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
        "row": 0,
        "column": 2,
        "rotation": 0,
        "flipped": false
      }
    },
    "metrics": {
      "fillableCellCount": 15,
      "pieceCount": 4,
      "blockedCellCount": 0,
      "fixedItemCount": 1,
      "allowFlipPieceCount": 0,
      "irregularPieceCount": 1,
      "solutionCount": 1,
      "solverNodes": 24,
      "solverBacktracks": 19,
      "solverMaxDepth": 4,
      "solverCandidateCount": 39
    },
    "canonicalSignature": "4x4#0,0;0,1;0,2;0,3;1,0;1,1;1,2;1,3;2,0;2,1;2,2;2,3;3,0;3,1;3,2##3,3#0,0;0,1;0,2;0,3|1,0;1,1;1,2|1,3;2,2;2,3;3,2|2,0;2,1;3,0;3,1#3:0,4:0,4:0,4:0"
  },
  {
    "id": "L010",
    "chapter": 1,
    "chapterTitle": "整理入門",
    "title": "整理入門 10",
    "rows": 5,
    "columns": 5,
    "difficulty": 1,
    "difficultyScore": 232,
    "seed": 105063,
    "generatorVersion": 1,
    "parMoves": 8,
    "moveLimit": 18,
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
      ]
    ],
    "blockedCells": [],
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
        "initialRotation": 0,
        "initialFlipped": false,
        "allowRotate": false,
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
        "column": 1,
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
        "column": 3,
        "rotation": 0,
        "flipped": false
      },
      "piece-04": {
        "row": 4,
        "column": 0,
        "rotation": 0,
        "flipped": false
      },
      "piece-05": {
        "row": 1,
        "column": 0,
        "rotation": 0,
        "flipped": false
      }
    },
    "metrics": {
      "fillableCellCount": 24,
      "pieceCount": 5,
      "blockedCellCount": 0,
      "fixedItemCount": 1,
      "allowFlipPieceCount": 0,
      "irregularPieceCount": 3,
      "solutionCount": 1,
      "solverNodes": 14,
      "solverBacktracks": 8,
      "solverMaxDepth": 5,
      "solverCandidateCount": 86
    },
    "canonicalSignature": "5x5#0,0;0,1;0,2;0,3;0,4;1,0;1,1;1,2;1,3;1,4;2,0;2,1;2,2;2,3;2,4;3,0;3,1;3,2;3,3;3,4;4,0;4,1;4,2;4,3##4,4#0,0;0,1;0,2;0,3;0,4|1,0;2,0;2,1;3,0;4,0|1,1;1,2;1,3;1,4|2,2;2,3;2,4;3,3;3,4|3,1;3,2;4,1;4,2;4,3#4:0,5:0,5:0,5:0,5:0"
  },
  {
    "id": "L011",
    "chapter": 1,
    "chapterTitle": "整理入門",
    "title": "整理入門 11",
    "rows": 5,
    "columns": 5,
    "difficulty": 1,
    "difficultyScore": 234,
    "seed": 101043,
    "generatorVersion": 1,
    "parMoves": 5,
    "moveLimit": 17,
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
      ]
    ],
    "blockedCells": [],
    "fixedItems": [
      {
        "id": "fixed-1",
        "type": "sleeping-cat",
        "label": "睡覺中的貓咪",
        "cells": [
          [
            0,
            4
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
        "column": 2,
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
        "column": 0,
        "rotation": 0,
        "flipped": false
      },
      "piece-05": {
        "row": 0,
        "column": 2,
        "rotation": 0,
        "flipped": false
      }
    },
    "metrics": {
      "fillableCellCount": 24,
      "pieceCount": 5,
      "blockedCellCount": 0,
      "fixedItemCount": 1,
      "allowFlipPieceCount": 0,
      "irregularPieceCount": 4,
      "solutionCount": 1,
      "solverNodes": 13,
      "solverBacktracks": 7,
      "solverMaxDepth": 5,
      "solverCandidateCount": 51
    },
    "canonicalSignature": "5x5#0,0;0,1;0,2;0,3;0,4;1,0;1,1;1,2;1,3;1,4;2,0;2,1;2,2;2,3;2,4;3,0;3,1;3,2;3,3;3,4;4,0;4,1;4,2;4,3##4,4#0,0;0,1;0,2;0,3;0,4|1,0;1,1;2,1;2,2;3,1|1,2;1,3;1,4;2,3;2,4|2,0;3,0;4,0;4,1|3,2;3,3;3,4;4,2;4,3#4:0,5:0,5:0,5:0,5:0"
  },
  {
    "id": "L012",
    "chapter": 1,
    "chapterTitle": "整理入門",
    "title": "整理入門 12",
    "rows": 4,
    "columns": 4,
    "difficulty": 1,
    "difficultyScore": 237,
    "seed": 106014,
    "generatorVersion": 1,
    "parMoves": 11,
    "moveLimit": 22,
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
      ],
      [
        2,
        3
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
    "blockedCells": [],
    "fixedItems": [
      {
        "id": "fixed-1",
        "type": "sleeping-cat",
        "label": "睡覺中的貓咪",
        "cells": [
          [
            3,
            3
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
        "id": "piece-04",
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
        "row": 1,
        "column": 2,
        "rotation": 0,
        "flipped": false
      }
    },
    "metrics": {
      "fillableCellCount": 15,
      "pieceCount": 4,
      "blockedCellCount": 0,
      "fixedItemCount": 1,
      "allowFlipPieceCount": 0,
      "irregularPieceCount": 2,
      "solutionCount": 1,
      "solverNodes": 31,
      "solverBacktracks": 26,
      "solverMaxDepth": 4,
      "solverCandidateCount": 62
    },
    "canonicalSignature": "4x4#0,0;0,1;0,2;0,3;1,0;1,1;1,2;1,3;2,0;2,1;2,2;2,3;3,0;3,1;3,2##3,3#0,0;0,1;1,0;1,1;1,2|0,2;0,3|1,3;2,2;2,3;3,2|2,0;2,1;3,0;3,1#2:0,4:0,4:0,5:0"
  },
  {
    "id": "L013",
    "chapter": 1,
    "chapterTitle": "整理入門",
    "title": "整理入門 13",
    "rows": 5,
    "columns": 5,
    "difficulty": 1,
    "difficultyScore": 244,
    "seed": 113017,
    "generatorVersion": 1,
    "parMoves": 9,
    "moveLimit": 21,
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
      ]
    ],
    "blockedCells": [],
    "fixedItems": [
      {
        "id": "fixed-1",
        "type": "sleeping-cat",
        "label": "睡覺中的貓咪",
        "cells": [
          [
            4,
            4
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
        "initialRotation": 1,
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
        "initialRotation": 3,
        "initialFlipped": false,
        "allowRotate": true,
        "allowFlip": false,
        "equivalenceGroup": null
      },
      {
        "id": "piece-05",
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
        "row": 0,
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
        "column": 3,
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
        "row": 1,
        "column": 1,
        "rotation": 0,
        "flipped": false
      }
    },
    "metrics": {
      "fillableCellCount": 24,
      "pieceCount": 5,
      "blockedCellCount": 0,
      "fixedItemCount": 1,
      "allowFlipPieceCount": 0,
      "irregularPieceCount": 4,
      "solutionCount": 1,
      "solverNodes": 16,
      "solverBacktracks": 10,
      "solverMaxDepth": 5,
      "solverCandidateCount": 131
    },
    "canonicalSignature": "5x5#0,0;0,1;0,2;0,3;0,4;1,0;1,1;1,2;1,3;1,4;2,0;2,1;2,2;2,3;2,4;3,0;3,1;3,2;3,3;3,4;4,0;4,1;4,2;4,3##4,4#0,0;0,1;0,2;1,1;2,1|0,3;0,4;1,3;1,4|1,0;2,0;3,0;3,1;4,0|1,2;2,2;3,2;4,1;4,2|2,3;2,4;3,3;3,4;4,3#4:0,5:0,5:0,5:0,5:0"
  },
  {
    "id": "L014",
    "chapter": 1,
    "chapterTitle": "整理入門",
    "title": "整理入門 14",
    "rows": 5,
    "columns": 5,
    "difficulty": 1,
    "difficultyScore": 255,
    "seed": 107044,
    "generatorVersion": 1,
    "parMoves": 6,
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
      ]
    ],
    "blockedCells": [],
    "fixedItems": [
      {
        "id": "fixed-1",
        "type": "sleeping-cat",
        "label": "睡覺中的貓咪",
        "cells": [
          [
            4,
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
        "id": "piece-03",
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
        "row": 3,
        "column": 1,
        "rotation": 0,
        "flipped": false
      },
      "piece-04": {
        "row": 2,
        "column": 2,
        "rotation": 0,
        "flipped": false
      },
      "piece-05": {
        "row": 0,
        "column": 1,
        "rotation": 0,
        "flipped": false
      }
    },
    "metrics": {
      "fillableCellCount": 24,
      "pieceCount": 5,
      "blockedCellCount": 0,
      "fixedItemCount": 1,
      "allowFlipPieceCount": 0,
      "irregularPieceCount": 4,
      "solutionCount": 1,
      "solverNodes": 20,
      "solverBacktracks": 14,
      "solverMaxDepth": 5,
      "solverCandidateCount": 91
    },
    "canonicalSignature": "5x5#0,0;0,1;0,2;0,3;0,4;1,0;1,1;1,2;1,3;1,4;2,0;2,1;2,2;2,3;2,4;3,0;3,1;3,2;3,3;3,4;4,0;4,1;4,2;4,3##4,4#0,0;0,1;0,2;0,3;1,0|0,4;1,4;2,4;3,3;3,4|1,1;2,0;2,1;3,0;3,1|1,2;1,3;2,2;2,3|3,2;4,0;4,1;4,2;4,3#4:0,5:0,5:0,5:0,5:0"
  },
  {
    "id": "L015",
    "chapter": 1,
    "chapterTitle": "整理入門",
    "title": "整理入門 15",
    "rows": 5,
    "columns": 5,
    "difficulty": 1,
    "difficultyScore": 257,
    "seed": 103084,
    "generatorVersion": 1,
    "parMoves": 6,
    "moveLimit": 22,
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
      ]
    ],
    "blockedCells": [],
    "fixedItems": [
      {
        "id": "fixed-1",
        "type": "sleeping-cat",
        "label": "睡覺中的貓咪",
        "cells": [
          [
            4,
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
        "row": 1,
        "column": 2,
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
        "row": 2,
        "column": 1,
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
        "column": 0,
        "rotation": 0,
        "flipped": false
      }
    },
    "metrics": {
      "fillableCellCount": 24,
      "pieceCount": 5,
      "blockedCellCount": 0,
      "fixedItemCount": 1,
      "allowFlipPieceCount": 0,
      "irregularPieceCount": 4,
      "solutionCount": 1,
      "solverNodes": 21,
      "solverBacktracks": 15,
      "solverMaxDepth": 5,
      "solverCandidateCount": 109
    },
    "canonicalSignature": "5x5#0,0;0,1;0,2;0,3;0,4;1,0;1,1;1,2;1,3;1,4;2,0;2,1;2,2;2,3;2,4;3,0;3,1;3,2;3,3;3,4;4,0;4,1;4,2;4,3##4,4#0,0;0,1;0,2;0,3;0,4|1,0;1,1;1,2;2,1;3,1|1,3;1,4;2,3;2,4;3,4|2,0;3,0;4,0;4,1|2,2;3,2;3,3;4,2;4,3#4:0,5:0,5:0,5:0,5:0"
  },
  {
    "id": "L016",
    "chapter": 1,
    "chapterTitle": "整理入門",
    "title": "整理入門 16",
    "rows": 5,
    "columns": 5,
    "difficulty": 1,
    "difficultyScore": 279,
    "seed": 115124,
    "generatorVersion": 1,
    "parMoves": 7,
    "moveLimit": 19,
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
      ]
    ],
    "blockedCells": [],
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
        "id": "piece-04",
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
            0,
            3
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
        "row": 2,
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
        "row": 2,
        "column": 3,
        "rotation": 0,
        "flipped": false
      },
      "piece-05": {
        "row": 0,
        "column": 1,
        "rotation": 0,
        "flipped": false
      }
    },
    "metrics": {
      "fillableCellCount": 24,
      "pieceCount": 5,
      "blockedCellCount": 0,
      "fixedItemCount": 1,
      "allowFlipPieceCount": 0,
      "irregularPieceCount": 5,
      "solutionCount": 1,
      "solverNodes": 30,
      "solverBacktracks": 24,
      "solverMaxDepth": 5,
      "solverCandidateCount": 125
    },
    "canonicalSignature": "5x5#0,0;0,1;0,2;0,3;0,4;1,0;1,1;1,2;1,3;1,4;2,0;2,1;2,2;2,3;2,4;3,0;3,1;3,2;3,3;3,4;4,0;4,1;4,2;4,3##4,4#0,0;0,1;1,1;1,2|0,2;0,3;1,3;2,2;2,3|0,4;1,4;2,4;3,3;3,4|1,0;2,0;2,1;3,1;3,2|3,0;4,0;4,1;4,2;4,3#4:0,5:0,5:0,5:0,5:0"
  },
  {
    "id": "L017",
    "chapter": 1,
    "chapterTitle": "整理入門",
    "title": "整理入門 17",
    "rows": 5,
    "columns": 5,
    "difficulty": 1,
    "difficultyScore": 291,
    "seed": 111025,
    "generatorVersion": 1,
    "parMoves": 7,
    "moveLimit": 21,
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
      ]
    ],
    "blockedCells": [],
    "fixedItems": [],
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
        "id": "piece-03",
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
      }
    ],
    "solution": {
      "piece-01": {
        "row": 0,
        "column": 0,
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
        "row": 2,
        "column": 0,
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
        "row": 0,
        "column": 3,
        "rotation": 0,
        "flipped": false
      }
    },
    "metrics": {
      "fillableCellCount": 25,
      "pieceCount": 5,
      "blockedCellCount": 0,
      "fixedItemCount": 0,
      "allowFlipPieceCount": 0,
      "irregularPieceCount": 5,
      "solutionCount": 1,
      "solverNodes": 43,
      "solverBacktracks": 37,
      "solverMaxDepth": 5,
      "solverCandidateCount": 137
    },
    "canonicalSignature": "5x5#0,0;0,1;0,2;0,3;0,4;1,0;1,1;1,2;1,3;1,4;2,0;2,1;2,2;2,3;2,4;3,0;3,1;3,2;3,3;3,4;4,0;4,1;4,2;4,3;4,4###0,0;0,1;0,2;0,3;1,2|0,4;1,3;1,4;2,3;2,4|1,0;1,1;2,1;2,2;3,1|2,0;3,0;4,0;4,1;4,2|3,2;3,3;3,4;4,3;4,4#5:0,5:0,5:0,5:0,5:0"
  },
  {
    "id": "L018",
    "chapter": 1,
    "chapterTitle": "整理入門",
    "title": "整理入門 18",
    "rows": 5,
    "columns": 5,
    "difficulty": 1,
    "difficultyScore": 293,
    "seed": 119013,
    "generatorVersion": 1,
    "parMoves": 12,
    "moveLimit": 28,
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
      ]
    ],
    "blockedCells": [],
    "fixedItems": [
      {
        "id": "fixed-1",
        "type": "sleeping-cat",
        "label": "睡覺中的貓咪",
        "cells": [
          [
            4,
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
        "row": 1,
        "column": 2,
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
        "column": 0,
        "rotation": 0,
        "flipped": false
      },
      "piece-05": {
        "row": 0,
        "column": 0,
        "rotation": 0,
        "flipped": false
      }
    },
    "metrics": {
      "fillableCellCount": 24,
      "pieceCount": 5,
      "blockedCellCount": 0,
      "fixedItemCount": 1,
      "allowFlipPieceCount": 0,
      "irregularPieceCount": 5,
      "solutionCount": 1,
      "solverNodes": 41,
      "solverBacktracks": 35,
      "solverMaxDepth": 5,
      "solverCandidateCount": 155
    },
    "canonicalSignature": "5x5#0,0;0,1;0,2;0,3;0,4;1,0;1,1;1,2;1,3;1,4;2,0;2,1;2,2;2,3;2,4;3,0;3,1;3,2;3,3;3,4;4,0;4,1;4,2;4,3##4,4#0,0;0,1;0,2;1,0;1,1|0,3;0,4;1,3;1,4;2,4|1,2;2,1;2,2;3,1;3,2|2,0;3,0;4,0;4,1|2,3;3,3;3,4;4,2;4,3#4:0,5:0,5:0,5:0,5:0"
  },
  {
    "id": "L019",
    "chapter": 1,
    "chapterTitle": "整理入門",
    "title": "整理入門 19",
    "rows": 5,
    "columns": 5,
    "difficulty": 1,
    "difficultyScore": 297,
    "seed": 117014,
    "generatorVersion": 1,
    "parMoves": 14,
    "moveLimit": 27,
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
      ]
    ],
    "blockedCells": [],
    "fixedItems": [
      {
        "id": "fixed-1",
        "type": "sleeping-cat",
        "label": "睡覺中的貓咪",
        "cells": [
          [
            0,
            4
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
        "label": "小魚玩具",
        "theme": "fish-toy",
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
        "initialRotation": 1,
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
        "row": 3,
        "column": 2,
        "rotation": 0,
        "flipped": false
      },
      "piece-03": {
        "row": 1,
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
      }
    },
    "metrics": {
      "fillableCellCount": 24,
      "pieceCount": 5,
      "blockedCellCount": 0,
      "fixedItemCount": 1,
      "allowFlipPieceCount": 0,
      "irregularPieceCount": 4,
      "solutionCount": 1,
      "solverNodes": 50,
      "solverBacktracks": 44,
      "solverMaxDepth": 5,
      "solverCandidateCount": 150
    },
    "canonicalSignature": "5x5#0,0;0,1;0,2;0,3;0,4;1,0;1,1;1,2;1,3;1,4;2,0;2,1;2,2;2,3;2,4;3,0;3,1;3,2;3,3;3,4;4,0;4,1;4,2;4,3##4,4#0,0;0,1;1,0;1,1|0,2;0,3;0,4;1,2;1,3|1,4;2,3;2,4;3,3;3,4|2,0;2,1;3,0;4,0;4,1|2,2;3,1;3,2;4,2;4,3#4:0,5:0,5:0,5:0,5:0"
  },
  {
    "id": "L020",
    "chapter": 1,
    "chapterTitle": "整理入門",
    "title": "整理入門 20",
    "rows": 5,
    "columns": 5,
    "difficulty": 1,
    "difficultyScore": 305,
    "seed": 109041,
    "generatorVersion": 1,
    "parMoves": 9,
    "moveLimit": 22,
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
      ]
    ],
    "blockedCells": [],
    "fixedItems": [
      {
        "id": "fixed-1",
        "type": "sleeping-cat",
        "label": "睡覺中的貓咪",
        "cells": [
          [
            4,
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
            1,
            0
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
        "id": "piece-04",
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
        "row": 0,
        "column": 0,
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
        "row": 1,
        "column": 0,
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
        "row": 1,
        "column": 3,
        "rotation": 0,
        "flipped": false
      }
    },
    "metrics": {
      "fillableCellCount": 24,
      "pieceCount": 5,
      "blockedCellCount": 0,
      "fixedItemCount": 1,
      "allowFlipPieceCount": 0,
      "irregularPieceCount": 4,
      "solutionCount": 1,
      "solverNodes": 60,
      "solverBacktracks": 54,
      "solverMaxDepth": 5,
      "solverCandidateCount": 169
    },
    "canonicalSignature": "5x5#0,0;0,1;0,2;0,3;0,4;1,0;1,1;1,2;1,3;1,4;2,0;2,1;2,2;2,3;2,4;3,0;3,1;3,2;3,3;3,4;4,0;4,1;4,2;4,3##4,4#0,0;0,1;0,2;0,3;0,4|1,0;1,1;2,0;2,1;3,0|1,2;2,2;2,3;3,3;4,3|1,3;1,4;2,4;3,4|3,1;3,2;4,0;4,1;4,2#4:0,5:0,5:0,5:0,5:0"
  }
]);
});
