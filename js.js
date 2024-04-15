let data = [
    [
      "Work",
      [
        [
          5,
          7
        ],
        [
          32,
          36
        ],
        [
          103,
          128
            ]
        ],
        "orange",
        "icon-work.svg"
    ],
    [
      "Play",
       [
        [
          1,
          2
        ],
        [
          10,
          8
        ],
         [
           23,
           29
         ]
        ],
        "#CCF",
        "icon-play.svg"
    ],
    [
      "Study",
      [
        [
          0,
          1
        ],
        [
          4,
          7
        ],
        [
          13,
          19
        ]
    ],
    "pink",
    "icon-study.svg"
    ],
    [
      "Exercise",
       [
        [
          1,
          1
        ],
        [
            4,
           5
        ],
        [
          11,
          18
        ]
        ],
        "#CFC",
        "icon-exercise.svg"
    ],
    [
      "Social",
      [
         [
          1,
          3
         ],
        [
          5,
          10
        ],
        [
          21,
          23
        ]
        ],
        "purple",
        "icon-social.svg"
    ],
    [
      "Self Care",
      [
        [
          0,
          1
        ],
        [
          2,
          2
        ],
        [
          7,
          11
        ]
        ],
        "yellow",
        "icon-self-care.svg"
    ]
  ]

function ChangeBlocks(a)
{
    let blockContainerContent = "";
    let lastWhat = "";

    switch(a)
    {
      case 0: 
      lastWhat = "day";
      break;

      case 2:
      lastWhat = "week";
      break;

      case 3:
      lastWhat = "month";
      break;
    }
   

    for (const i of data) {
        blockContainerContent += `
        <div class="block" style="background-color: ${i[2]}">
        <section>
          <img src="images/${i[3]}">
        </section>
        <div>
        <div><h2>${i[0]}</h2><a href="#"><img src="images/icon-ellipsis.svg"></a></div>
        <p>${i[1][a][0]}hrs</p> 
        <p>Last ${lastWhat} - ${i[1][a][1]}hrs</p>
        </div>
        </div>`
    }

    document.getElementById('bloki').innerHTML = blockContainerContent;

} 