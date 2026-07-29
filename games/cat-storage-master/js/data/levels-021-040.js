(function (root, factory) {
  const levels = factory();
  if (typeof module === 'object' && module.exports) module.exports = levels;
  else root.CAT_STORAGE_LEVELS_021_040 = levels;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  return Object.freeze([
  {
    "id": "L021",
    "chapter": 2,
    "chapterTitle": "紙箱派對",
    "title": "紙箱派對 1",
    "rows": 5,
    "columns": 5,
    "difficulty": 2,
    "difficultyScore": 258,
    "seed": 214008,
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
    "blockedCells": [
      [
        0,
        4
      ],
      [
        4,
        4
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
        "label": "貓掌餅乾",
        "theme": "paw-cookie",
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
        "row": 0,
        "column": 1,
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
      }
    },
    "metrics": {
      "fillableCellCount": 22,
      "pieceCount": 5,
      "blockedCellCount": 2,
      "fixedItemCount": 1,
      "allowFlipPieceCount": 0,
      "irregularPieceCount": 4,
      "solutionCount": 1,
      "solverNodes": 18,
      "solverBacktracks": 12,
      "solverMaxDepth": 5,
      "solverCandidateCount": 103
    },
    "canonicalSignature": "5x5#0,0;0,1;0,2;0,3;1,0;1,1;1,2;1,3;1,4;2,0;2,1;2,2;2,3;2,4;3,0;3,1;3,2;3,3;3,4;4,1;4,2;4,3#0,4;4,4#4,0#0,0;0,1;1,0;2,0;3,0|0,2;0,3;1,1;1,2|1,3;1,4;2,4;3,4|2,1;2,2;2,3;3,3;4,3|3,1;3,2;4,1;4,2#4:0,4:0,4:0,5:0,5:0"
  },
  {
    "id": "L022",
    "chapter": 2,
    "chapterTitle": "紙箱派對",
    "title": "紙箱派對 2",
    "rows": 5,
    "columns": 5,
    "difficulty": 2,
    "difficultyScore": 261,
    "seed": 204015,
    "generatorVersion": 1,
    "parMoves": 9,
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
    "blockedCells": [
      [
        0,
        4
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
        "column": 4,
        "rotation": 0,
        "flipped": false
      },
      "piece-05": {
        "row": 3,
        "column": 2,
        "rotation": 0,
        "flipped": false
      }
    },
    "metrics": {
      "fillableCellCount": 23,
      "pieceCount": 5,
      "blockedCellCount": 1,
      "fixedItemCount": 1,
      "allowFlipPieceCount": 0,
      "irregularPieceCount": 3,
      "solutionCount": 1,
      "solverNodes": 23,
      "solverBacktracks": 17,
      "solverMaxDepth": 5,
      "solverCandidateCount": 117
    },
    "canonicalSignature": "5x5#0,0;0,1;0,2;0,3;0,4;1,0;1,1;1,2;1,3;1,4;2,0;2,1;2,2;2,3;2,4;3,0;3,1;3,2;3,3;3,4;4,1;4,2;4,3#4,0#4,4#0,0;0,1;0,2;1,2|0,3;0,4;1,3;1,4|1,0;2,0;3,0|1,1;2,1;2,2;3,1;4,1;4,2|2,3;2,4;3,2;3,3;3,4;4,3#3:0,4:0,4:0,6:0,6:0"
  },
  {
    "id": "L023",
    "chapter": 2,
    "chapterTitle": "紙箱派對",
    "title": "紙箱派對 3",
    "rows": 5,
    "columns": 5,
    "difficulty": 2,
    "difficultyScore": 261,
    "seed": 218012,
    "generatorVersion": 1,
    "parMoves": 9,
    "moveLimit": 18,
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
    "blockedCells": [
      [
        4,
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
            4
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
        "id": "piece-02",
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
        "initialRotation": 0,
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
            2,
            0
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
        "row": 2,
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
        "row": 0,
        "column": 0,
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
      "fillableCellCount": 23,
      "pieceCount": 5,
      "blockedCellCount": 1,
      "fixedItemCount": 1,
      "allowFlipPieceCount": 0,
      "irregularPieceCount": 5,
      "solutionCount": 1,
      "solverNodes": 19,
      "solverBacktracks": 13,
      "solverMaxDepth": 5,
      "solverCandidateCount": 142
    },
    "canonicalSignature": "5x5#0,0;0,1;0,2;0,3;1,0;1,1;1,2;1,3;1,4;2,0;2,1;2,2;2,3;2,4;3,0;3,1;3,2;3,3;3,4;4,1;4,2;4,3;4,4#0,4#4,0#0,0;0,1;0,2;0,3;1,0|1,1;1,2;2,0;2,1|1,3;1,4;2,3;2,4;3,4|2,2;3,0;3,1;3,2;4,1|3,3;4,2;4,3;4,4#4:0,4:0,5:0,5:0,5:0"
  },
  {
    "id": "L024",
    "chapter": 2,
    "chapterTitle": "紙箱派對",
    "title": "紙箱派對 4",
    "rows": 5,
    "columns": 5,
    "difficulty": 2,
    "difficultyScore": 275,
    "seed": 200005,
    "generatorVersion": 1,
    "parMoves": 6,
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
        "id": "piece-02",
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
        "row": 3,
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
      "solverNodes": 31,
      "solverBacktracks": 25,
      "solverMaxDepth": 5,
      "solverCandidateCount": 107
    },
    "canonicalSignature": "5x5#0,0;0,1;0,2;0,3;0,4;1,0;1,1;1,2;1,3;1,4;2,0;2,1;2,2;2,3;2,4;3,0;3,1;3,2;3,3;3,4;4,0;4,1;4,2;4,3##4,4#0,0;0,1;0,2;0,3;0,4;1,4|1,0;1,1;1,2;1,3;2,0;2,2|2,1;3,0;3,1;4,0;4,1|2,3;2,4;3,4|3,2;3,3;4,2;4,3#3:0,4:0,5:0,6:0,6:0"
  },
  {
    "id": "L025",
    "chapter": 2,
    "chapterTitle": "紙箱派對",
    "title": "紙箱派對 5",
    "rows": 5,
    "columns": 5,
    "difficulty": 2,
    "difficultyScore": 288,
    "seed": 202015,
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
    "blockedCells": [
      [
        0,
        0
      ],
      [
        4,
        4
      ]
    ],
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
        "row": 2,
        "column": 3,
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
        "column": 2,
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
      "fillableCellCount": 22,
      "pieceCount": 5,
      "blockedCellCount": 2,
      "fixedItemCount": 1,
      "allowFlipPieceCount": 0,
      "irregularPieceCount": 4,
      "solutionCount": 1,
      "solverNodes": 34,
      "solverBacktracks": 28,
      "solverMaxDepth": 5,
      "solverCandidateCount": 136
    },
    "canonicalSignature": "5x5#0,0;0,1;0,2;0,3;1,0;1,1;1,2;1,3;1,4;2,0;2,1;2,2;2,3;2,4;3,0;3,1;3,2;3,3;3,4;4,1;4,2;4,3#0,4;4,0#4,4#0,0;0,1;0,2;1,0;1,1|0,3;1,2;1,3;1,4;2,4|2,0;2,1;3,0;3,1|2,2;3,2;4,1;4,2|2,3;3,3;3,4;4,3#4:0,4:0,4:0,5:0,5:0"
  },
  {
    "id": "L026",
    "chapter": 2,
    "chapterTitle": "紙箱派對",
    "title": "紙箱派對 6",
    "rows": 5,
    "columns": 5,
    "difficulty": 2,
    "difficultyScore": 296,
    "seed": 212018,
    "generatorVersion": 1,
    "parMoves": 9,
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
      ]
    ],
    "blockedCells": [
      [
        0,
        0
      ],
      [
        4,
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
        "row": 3,
        "column": 3,
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
      "fillableCellCount": 22,
      "pieceCount": 5,
      "blockedCellCount": 2,
      "fixedItemCount": 1,
      "allowFlipPieceCount": 0,
      "irregularPieceCount": 4,
      "solutionCount": 1,
      "solverNodes": 41,
      "solverBacktracks": 35,
      "solverMaxDepth": 5,
      "solverCandidateCount": 143
    },
    "canonicalSignature": "5x5#0,0;0,1;0,2;0,3;1,0;1,1;1,2;1,3;1,4;2,0;2,1;2,2;2,3;2,4;3,0;3,1;3,2;3,3;3,4;4,1;4,2;4,3#0,4;4,4#4,0#0,0;0,1;0,2;1,0;1,1;1,2|0,3;1,3;1,4;2,3;2,4|2,0;2,1;2,2;3,2|3,0;3,1;4,1|3,3;3,4;4,2;4,3#3:0,4:0,4:0,5:0,6:0"
  },
  {
    "id": "L027",
    "chapter": 2,
    "chapterTitle": "紙箱派對",
    "title": "紙箱派對 7",
    "rows": 5,
    "columns": 5,
    "difficulty": 2,
    "difficultyScore": 296,
    "seed": 216044,
    "generatorVersion": 1,
    "parMoves": 7,
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
      ]
    ],
    "blockedCells": [
      [
        0,
        4
      ],
      [
        4,
        4
      ]
    ],
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
        "initialRotation": 0,
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
        "initialRotation": 2,
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
            0,
            1
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
        "id": "piece-05",
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
        "column": 0,
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
      }
    },
    "metrics": {
      "fillableCellCount": 22,
      "pieceCount": 5,
      "blockedCellCount": 2,
      "fixedItemCount": 1,
      "allowFlipPieceCount": 0,
      "irregularPieceCount": 4,
      "solutionCount": 1,
      "solverNodes": 41,
      "solverBacktracks": 35,
      "solverMaxDepth": 5,
      "solverCandidateCount": 82
    },
    "canonicalSignature": "5x5#0,0;0,1;0,2;0,3;1,0;1,1;1,2;1,3;1,4;2,0;2,1;2,2;2,3;2,4;3,0;3,1;3,2;3,3;3,4;4,1;4,2;4,3#0,4;4,4#4,0#0,0;1,0;2,0;3,0|0,1;0,2;1,1|0,3;1,3;1,4;2,3;2,4;3,3;3,4|1,2;2,1;2,2;3,1|3,2;4,1;4,2;4,3#3:0,4:0,4:0,4:0,7:0"
  },
  {
    "id": "L028",
    "chapter": 2,
    "chapterTitle": "紙箱派對",
    "title": "紙箱派對 8",
    "rows": 6,
    "columns": 6,
    "difficulty": 2,
    "difficultyScore": 300,
    "seed": 217007,
    "generatorVersion": 1,
    "parMoves": 12,
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
        "row": 0,
        "column": 4,
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
        "row": 0,
        "column": 0,
        "rotation": 0,
        "flipped": false
      }
    },
    "metrics": {
      "fillableCellCount": 33,
      "pieceCount": 5,
      "blockedCellCount": 2,
      "fixedItemCount": 1,
      "allowFlipPieceCount": 0,
      "irregularPieceCount": 5,
      "solutionCount": 1,
      "solverNodes": 25,
      "solverBacktracks": 19,
      "solverMaxDepth": 5,
      "solverCandidateCount": 188
    },
    "canonicalSignature": "6x6#0,0;0,1;0,2;0,3;0,4;1,0;1,1;1,2;1,3;1,4;1,5;2,0;2,1;2,2;2,3;2,4;2,5;3,0;3,1;3,2;3,3;3,4;3,5;4,0;4,1;4,2;4,3;4,4;4,5;5,1;5,2;5,3;5,4#0,5;5,0#5,5#0,0;0,1;0,2;0,3;0,4;1,3|1,0;2,0;3,0;3,1;4,0;4,1;5,1|1,1;1,2;2,1;2,2;3,2;3,3;3,4|1,4;1,5;2,3;2,4;2,5;3,5|4,2;4,3;4,4;4,5;5,2;5,3;5,4#6:0,6:0,7:0,7:0,7:0"
  },
  {
    "id": "L029",
    "chapter": 2,
    "chapterTitle": "紙箱派對",
    "title": "紙箱派對 9",
    "rows": 5,
    "columns": 5,
    "difficulty": 2,
    "difficultyScore": 303,
    "seed": 210007,
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
    "blockedCells": [
      [
        0,
        4
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
        "id": "piece-03",
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
        "row": 3,
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
      },
      "piece-05": {
        "row": 0,
        "column": 1,
        "rotation": 0,
        "flipped": false
      }
    },
    "metrics": {
      "fillableCellCount": 23,
      "pieceCount": 5,
      "blockedCellCount": 1,
      "fixedItemCount": 1,
      "allowFlipPieceCount": 0,
      "irregularPieceCount": 3,
      "solutionCount": 1,
      "solverNodes": 59,
      "solverBacktracks": 53,
      "solverMaxDepth": 5,
      "solverCandidateCount": 126
    },
    "canonicalSignature": "5x5#0,0;0,1;0,2;0,3;0,4;1,0;1,1;1,2;1,3;1,4;2,0;2,1;2,2;2,3;2,4;3,0;3,1;3,2;3,3;3,4;4,1;4,2;4,3#4,0#4,4#0,0;0,1;0,2;1,0|0,3;0,4;1,3;1,4|1,1;1,2;2,0;2,1|2,2;2,3;2,4;3,2;3,3;3,4|3,0;3,1;4,1;4,2;4,3#4:0,4:0,4:0,5:0,6:0"
  },
  {
    "id": "L030",
    "chapter": 2,
    "chapterTitle": "紙箱派對",
    "title": "紙箱派對 10",
    "rows": 6,
    "columns": 6,
    "difficulty": 2,
    "difficultyScore": 304,
    "seed": 207025,
    "generatorVersion": 1,
    "parMoves": 14,
    "moveLimit": 26,
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
        "id": "piece-06",
        "label": "毛線球",
        "theme": "yarn",
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
            3,
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
        "row": 3,
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
        "row": 4,
        "column": 3,
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
        "row": 2,
        "column": 0,
        "rotation": 0,
        "flipped": false
      },
      "piece-06": {
        "row": 1,
        "column": 3,
        "rotation": 0,
        "flipped": false
      }
    },
    "metrics": {
      "fillableCellCount": 35,
      "pieceCount": 6,
      "blockedCellCount": 0,
      "fixedItemCount": 1,
      "allowFlipPieceCount": 0,
      "irregularPieceCount": 6,
      "solutionCount": 1,
      "solverNodes": 23,
      "solverBacktracks": 16,
      "solverMaxDepth": 6,
      "solverCandidateCount": 264
    },
    "canonicalSignature": "6x6#0,0;0,1;0,2;0,3;0,4;0,5;1,0;1,1;1,2;1,3;1,4;1,5;2,0;2,1;2,2;2,3;2,4;2,5;3,0;3,1;3,2;3,3;3,4;3,5;4,0;4,1;4,2;4,3;4,4;4,5;5,0;5,1;5,2;5,3;5,4##5,5#0,0;0,1;0,2;1,0;2,0|0,3;0,4;0,5;1,4|1,1;1,2;1,3;2,1;3,0;3,1|1,5;2,3;2,4;2,5;3,5;4,5|2,2;3,2;3,3;3,4;4,2;4,4;5,4|4,0;4,1;4,3;5,0;5,1;5,2;5,3#4:0,5:0,6:0,6:0,7:0,7:0"
  },
  {
    "id": "L031",
    "chapter": 2,
    "chapterTitle": "紙箱派對",
    "title": "紙箱派對 11",
    "rows": 5,
    "columns": 5,
    "difficulty": 2,
    "difficultyScore": 305,
    "seed": 208007,
    "generatorVersion": 1,
    "parMoves": 12,
    "moveLimit": 25,
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
        "label": "貓罐頭",
        "theme": "cat-can",
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
        "column": 1,
        "rotation": 0,
        "flipped": false
      },
      "piece-03": {
        "row": 1,
        "column": 3,
        "rotation": 0,
        "flipped": false
      },
      "piece-04": {
        "row": 3,
        "column": 1,
        "rotation": 0,
        "flipped": false
      },
      "piece-05": {
        "row": 2,
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
      "solverNodes": 60,
      "solverBacktracks": 54,
      "solverMaxDepth": 5,
      "solverCandidateCount": 126
    },
    "canonicalSignature": "5x5#0,0;0,1;0,2;0,3;0,4;1,0;1,1;1,2;1,3;1,4;2,0;2,1;2,2;2,3;2,4;3,0;3,1;3,2;3,3;3,4;4,0;4,1;4,2;4,3##4,4#0,0;0,1;0,2;0,3;0,4;1,3|1,0;2,0;3,0;4,0;4,1|1,1;1,2;2,1;2,2|1,4;2,3;2,4;3,3;3,4|3,1;3,2;4,2;4,3#4:0,4:0,5:0,5:0,6:0"
  },
  {
    "id": "L032",
    "chapter": 2,
    "chapterTitle": "紙箱派對",
    "title": "紙箱派對 12",
    "rows": 5,
    "columns": 5,
    "difficulty": 2,
    "difficultyScore": 322,
    "seed": 206003,
    "generatorVersion": 1,
    "parMoves": 7,
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
        "initialRotation": 3,
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
        "row": 3,
        "column": 2,
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
        "row": 4,
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
      "irregularPieceCount": 3,
      "solutionCount": 1,
      "solverNodes": 98,
      "solverBacktracks": 92,
      "solverMaxDepth": 5,
      "solverCandidateCount": 146
    },
    "canonicalSignature": "5x5#0,0;0,1;0,2;0,3;0,4;1,0;1,1;1,2;1,3;1,4;2,0;2,1;2,2;2,3;2,4;3,0;3,1;3,2;3,3;3,4;4,0;4,1;4,2;4,3##4,4#0,0;0,1;0,2;1,0;1,1;1,2|0,3;0,4|1,3;1,4;2,1;2,2;2,3;2,4|2,0;3,0;3,1;3,2;4,0;4,1|3,3;3,4;4,2;4,3#2:0,4:0,6:0,6:0,6:0"
  },
  {
    "id": "L033",
    "chapter": 2,
    "chapterTitle": "紙箱派對",
    "title": "紙箱派對 13",
    "rows": 6,
    "columns": 6,
    "difficulty": 2,
    "difficultyScore": 324,
    "seed": 219001,
    "generatorVersion": 1,
    "parMoves": 12,
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
        "initialRotation": 1,
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
        "row": 1,
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
        "row": 2,
        "column": 3,
        "rotation": 0,
        "flipped": false
      },
      "piece-04": {
        "row": 4,
        "column": 1,
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
      "fillableCellCount": 33,
      "pieceCount": 5,
      "blockedCellCount": 2,
      "fixedItemCount": 1,
      "allowFlipPieceCount": 0,
      "irregularPieceCount": 4,
      "solutionCount": 1,
      "solverNodes": 47,
      "solverBacktracks": 41,
      "solverMaxDepth": 5,
      "solverCandidateCount": 199
    },
    "canonicalSignature": "6x6#0,0;0,1;0,2;0,3;0,4;1,0;1,1;1,2;1,3;1,4;1,5;2,0;2,1;2,2;2,3;2,4;2,5;3,0;3,1;3,2;3,3;3,4;3,5;4,0;4,1;4,2;4,3;4,4;4,5;5,1;5,2;5,3;5,4#0,5;5,5#5,0#0,0;0,1;1,0;1,1;2,0;2,1;2,2|0,2;0,3;0,4;1,2;1,3;1,4;2,3|1,5;2,4;2,5;3,4;3,5;4,4;4,5|3,0;3,1;3,2;4,0;4,1;4,2|3,3;4,3;5,1;5,2;5,3;5,4#6:0,6:0,7:0,7:0,7:0"
  },
  {
    "id": "L034",
    "chapter": 2,
    "chapterTitle": "紙箱派對",
    "title": "紙箱派對 14",
    "rows": 6,
    "columns": 6,
    "difficulty": 2,
    "difficultyScore": 331,
    "seed": 201001,
    "generatorVersion": 1,
    "parMoves": 8,
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
        "initialRotation": 2,
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
        "row": 0,
        "column": 1,
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
      },
      "piece-06": {
        "row": 4,
        "column": 1,
        "rotation": 0,
        "flipped": false
      }
    },
    "metrics": {
      "fillableCellCount": 34,
      "pieceCount": 6,
      "blockedCellCount": 1,
      "fixedItemCount": 1,
      "allowFlipPieceCount": 0,
      "irregularPieceCount": 6,
      "solutionCount": 1,
      "solverNodes": 38,
      "solverBacktracks": 31,
      "solverMaxDepth": 6,
      "solverCandidateCount": 274
    },
    "canonicalSignature": "6x6#0,0;0,1;0,2;0,3;0,4;0,5;1,0;1,1;1,2;1,3;1,4;1,5;2,0;2,1;2,2;2,3;2,4;2,5;3,0;3,1;3,2;3,3;3,4;3,5;4,0;4,1;4,2;4,3;4,4;4,5;5,1;5,2;5,3;5,4#5,0#5,5#0,0;0,1;1,0|0,2;0,3;0,4;1,1;1,2;2,1;2,2|0,5;1,3;1,4;1,5;2,3;2,5|2,0;3,0;3,1;4,0|2,4;3,2;3,3;3,4;3,5;4,4;4,5|4,1;4,2;4,3;5,1;5,2;5,3;5,4#3:0,4:0,6:0,7:0,7:0,7:0"
  },
  {
    "id": "L035",
    "chapter": 2,
    "chapterTitle": "紙箱派對",
    "title": "紙箱派對 15",
    "rows": 6,
    "columns": 6,
    "difficulty": 2,
    "difficultyScore": 335,
    "seed": 213025,
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
            1,
            5
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
        "id": "piece-05",
        "label": "小魚玩具",
        "theme": "fish-toy",
        "cells": [
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
        "column": 0,
        "rotation": 0,
        "flipped": false
      },
      "piece-02": {
        "row": 2,
        "column": 3,
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
        "column": 1,
        "rotation": 0,
        "flipped": false
      },
      "piece-05": {
        "row": 4,
        "column": 1,
        "rotation": 0,
        "flipped": false
      }
    },
    "metrics": {
      "fillableCellCount": 33,
      "pieceCount": 5,
      "blockedCellCount": 2,
      "fixedItemCount": 1,
      "allowFlipPieceCount": 0,
      "irregularPieceCount": 5,
      "solutionCount": 1,
      "solverNodes": 53,
      "solverBacktracks": 47,
      "solverMaxDepth": 5,
      "solverCandidateCount": 196
    },
    "canonicalSignature": "6x6#0,0;0,1;0,2;0,3;0,4;1,0;1,1;1,2;1,3;1,4;1,5;2,0;2,1;2,2;2,3;2,4;2,5;3,0;3,1;3,2;3,3;3,4;3,5;4,0;4,1;4,2;4,3;4,4;4,5;5,1;5,2;5,3;5,4#0,5;5,0#5,5#0,0;0,1;0,2;0,3;0,4;1,4;1,5|1,0;2,0;2,1;3,0;4,0;4,1|1,1;1,2;1,3;2,2;3,1;3,2;4,2|2,3;2,4;2,5;3,3;3,4;3,5;4,3|4,4;4,5;5,1;5,2;5,3;5,4#6:0,6:0,7:0,7:0,7:0"
  },
  {
    "id": "L036",
    "chapter": 2,
    "chapterTitle": "紙箱派對",
    "title": "紙箱派對 16",
    "rows": 6,
    "columns": 6,
    "difficulty": 2,
    "difficultyScore": 366,
    "seed": 209025,
    "generatorVersion": 1,
    "parMoves": 14,
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
            5
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
        "id": "piece-03",
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
            3,
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
        "id": "piece-06",
        "label": "貓掌餅乾",
        "theme": "paw-cookie",
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
        "row": 3,
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
        "column": 1,
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
        "column": 0,
        "rotation": 0,
        "flipped": false
      }
    },
    "metrics": {
      "fillableCellCount": 33,
      "pieceCount": 6,
      "blockedCellCount": 2,
      "fixedItemCount": 1,
      "allowFlipPieceCount": 0,
      "irregularPieceCount": 5,
      "solutionCount": 1,
      "solverNodes": 84,
      "solverBacktracks": 77,
      "solverMaxDepth": 6,
      "solverCandidateCount": 269
    },
    "canonicalSignature": "6x6#0,0;0,1;0,2;0,3;0,4;1,0;1,1;1,2;1,3;1,4;1,5;2,0;2,1;2,2;2,3;2,4;2,5;3,0;3,1;3,2;3,3;3,4;3,5;4,0;4,1;4,2;4,3;4,4;4,5;5,1;5,2;5,3;5,4#0,5;5,5#5,0#0,0;0,1;1,0;1,1;2,0;2,1|0,2;0,3;0,4;1,3;2,3;2,4|1,2;2,2;3,2;3,3;3,4;4,2|1,4;1,5;2,5;3,5|3,0;3,1;4,0;4,1;5,1|4,3;4,4;4,5;5,2;5,3;5,4#4:0,5:0,6:0,6:0,6:0,6:0"
  },
  {
    "id": "L037",
    "chapter": 2,
    "chapterTitle": "紙箱派對",
    "title": "紙箱派對 17",
    "rows": 6,
    "columns": 6,
    "difficulty": 2,
    "difficultyScore": 366,
    "seed": 205018,
    "generatorVersion": 1,
    "parMoves": 12,
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
        "initialRotation": 3,
        "initialFlipped": false,
        "allowRotate": true,
        "allowFlip": false,
        "equivalenceGroup": null
      }
    ],
    "solution": {
      "piece-01": {
        "row": 4,
        "column": 1,
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
        "column": 4,
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
        "column": 2,
        "rotation": 0,
        "flipped": false
      },
      "piece-06": {
        "row": 2,
        "column": 0,
        "rotation": 0,
        "flipped": false
      }
    },
    "metrics": {
      "fillableCellCount": 33,
      "pieceCount": 6,
      "blockedCellCount": 2,
      "fixedItemCount": 1,
      "allowFlipPieceCount": 0,
      "irregularPieceCount": 6,
      "solutionCount": 1,
      "solverNodes": 75,
      "solverBacktracks": 68,
      "solverMaxDepth": 6,
      "solverCandidateCount": 267
    },
    "canonicalSignature": "6x6#0,0;0,1;0,2;0,3;0,4;1,0;1,1;1,2;1,3;1,4;1,5;2,0;2,1;2,2;2,3;2,4;2,5;3,0;3,1;3,2;3,3;3,4;3,5;4,0;4,1;4,2;4,3;4,4;4,5;5,1;5,2;5,3;5,4#0,5;5,5#5,0#0,0;0,1;1,0;1,1;2,0;3,0|0,2;0,3;0,4;1,3;1,4|1,2;2,1;2,2;2,3;3,1|1,5;2,4;2,5;3,2;3,3;3,4|3,5;4,3;4,4;4,5;5,4|4,0;4,1;4,2;5,1;5,2;5,3#5:0,5:0,5:0,6:0,6:0,6:0"
  },
  {
    "id": "L038",
    "chapter": 2,
    "chapterTitle": "紙箱派對",
    "title": "紙箱派對 18",
    "rows": 6,
    "columns": 6,
    "difficulty": 2,
    "difficultyScore": 374,
    "seed": 215004,
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
        5
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
        "initialRotation": 0,
        "initialFlipped": false,
        "allowRotate": false,
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
        "column": 4,
        "rotation": 0,
        "flipped": false
      },
      "piece-05": {
        "row": 5,
        "column": 0,
        "rotation": 0,
        "flipped": false
      },
      "piece-06": {
        "row": 2,
        "column": 0,
        "rotation": 0,
        "flipped": false
      }
    },
    "metrics": {
      "fillableCellCount": 33,
      "pieceCount": 6,
      "blockedCellCount": 2,
      "fixedItemCount": 1,
      "allowFlipPieceCount": 0,
      "irregularPieceCount": 5,
      "solutionCount": 1,
      "solverNodes": 100,
      "solverBacktracks": 93,
      "solverMaxDepth": 6,
      "solverCandidateCount": 247
    },
    "canonicalSignature": "6x6#0,0;0,1;0,2;0,3;0,4;1,0;1,1;1,2;1,3;1,4;1,5;2,0;2,1;2,2;2,3;2,4;2,5;3,0;3,1;3,2;3,3;3,4;3,5;4,0;4,1;4,2;4,3;4,4;4,5;5,1;5,2;5,3;5,4#0,5;5,5#5,0#0,0;0,1;0,2;0,3;0,4|1,0;1,1;1,2;2,0;2,1;3,1|1,3;1,4;1,5;2,2;2,3;2,4|2,5;3,4;3,5;4,4;4,5|3,0;3,2;4,0;4,1;4,2;5,1|3,3;4,3;5,2;5,3;5,4#5:0,5:0,5:0,6:0,6:0,6:0"
  },
  {
    "id": "L039",
    "chapter": 2,
    "chapterTitle": "紙箱派對",
    "title": "紙箱派對 19",
    "rows": 6,
    "columns": 6,
    "difficulty": 2,
    "difficultyScore": 378,
    "seed": 203001,
    "generatorVersion": 1,
    "parMoves": 9,
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
            0,
            5
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
        "row": 2,
        "column": 1,
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
        "row": 4,
        "column": 0,
        "rotation": 0,
        "flipped": false
      },
      "piece-04": {
        "row": 3,
        "column": 4,
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
        "column": 2,
        "rotation": 0,
        "flipped": false
      }
    },
    "metrics": {
      "fillableCellCount": 34,
      "pieceCount": 6,
      "blockedCellCount": 1,
      "fixedItemCount": 1,
      "allowFlipPieceCount": 0,
      "irregularPieceCount": 5,
      "solutionCount": 1,
      "solverNodes": 121,
      "solverBacktracks": 114,
      "solverMaxDepth": 6,
      "solverCandidateCount": 292
    },
    "canonicalSignature": "6x6#0,0;0,1;0,2;0,3;0,4;0,5;1,0;1,1;1,2;1,3;1,4;1,5;2,0;2,1;2,2;2,3;2,4;2,5;3,0;3,1;3,2;3,3;3,4;3,5;4,0;4,1;4,2;4,3;4,4;4,5;5,1;5,2;5,3;5,4#5,0#5,5#0,0;0,1;0,2;0,3;1,0;1,1|0,4;0,5;1,4;1,5;2,4;2,5|1,2;2,1;2,2;3,1;3,2|1,3;2,3;3,3;3,4;3,5|2,0;3,0;4,0;4,1;5,1|4,2;4,3;4,4;4,5;5,2;5,3;5,4#5:0,5:0,5:0,6:0,6:0,7:0"
  },
  {
    "id": "L040",
    "chapter": 2,
    "chapterTitle": "紙箱派對",
    "title": "紙箱派對 20",
    "rows": 6,
    "columns": 6,
    "difficulty": 2,
    "difficultyScore": 401,
    "seed": 211017,
    "generatorVersion": 1,
    "parMoves": 12,
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
      ],
      [
        5,
        5
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
            4
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
        "label": "貓抓板",
        "theme": "scratcher",
        "cells": [
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
        "row": 3,
        "column": 1,
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
      }
    },
    "metrics": {
      "fillableCellCount": 35,
      "pieceCount": 6,
      "blockedCellCount": 0,
      "fixedItemCount": 1,
      "allowFlipPieceCount": 0,
      "irregularPieceCount": 5,
      "solutionCount": 1,
      "solverNodes": 223,
      "solverBacktracks": 216,
      "solverMaxDepth": 6,
      "solverCandidateCount": 259
    },
    "canonicalSignature": "6x6#0,0;0,1;0,2;0,3;0,4;0,5;1,0;1,1;1,2;1,3;1,4;1,5;2,0;2,1;2,2;2,3;2,4;2,5;3,0;3,1;3,2;3,3;3,4;3,5;4,0;4,1;4,2;4,3;4,4;4,5;5,0;5,1;5,2;5,3;5,4##5,5#0,0;0,1;1,1;2,1;3,1;4,1;4,2|0,2;0,3;0,4;0,5|1,0;2,0;3,0;4,0;5,0;5,1;5,2|1,2;1,3;1,4;1,5;2,2|2,3;2,4;2,5;3,4;3,5|3,2;3,3;4,3;4,4;4,5;5,3;5,4#4:0,5:0,5:0,7:0,7:0,7:0"
  }
]);
});
