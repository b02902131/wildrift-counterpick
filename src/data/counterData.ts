export type Lane = 'top' | 'jungle' | 'mid' | 'bot' | 'support'

export type CounterRecord = {
  champion: string
  slug: string
  lanes: {
    lane: Lane
    strongAgainst: string[]
    weakAgainst: string[]
  }[]
}

export const counterData: CounterRecord[] = [
  {
    "champion": "Rammus",
    "slug": "Rammus",
    "lanes": [
      {
        "lane": "jungle",
        "strongAgainst": [
          "Tryndamere",
          "Master Yi",
          "Xin Zhao",
          "Graves",
          "Lee Sin",
          "Jarvan IV"
        ],
        "weakAgainst": [
          "Fiddlesticks",
          "Evelynn",
          "Lillia",
          "Amumu",
          "Nunu & Willump",
          "Zac"
        ]
      },
      {
        "lane": "top",
        "strongAgainst": [
          "Jax",
          "Pantheon",
          "Rengar",
          "Jayce",
          "Yasuo",
          "Tryndamere"
        ],
        "weakAgainst": [
          "Darius",
          "Shen",
          "Vi",
          "Riven",
          "Renekton",
          "Volibear"
        ]
      }
    ]
  },
  {
    "champion": "Teemo",
    "slug": "Teemo",
    "lanes": [
      {
        "lane": "top",
        "strongAgainst": [
          "Dr. Mundo",
          "Garen",
          "Darius",
          "Kayle",
          "Jax",
          "Tryndamere"
        ],
        "weakAgainst": [
          "Pantheon",
          "Jayce",
          "Ornn",
          "Malphite",
          "Riven",
          "Irelia"
        ]
      },
      {
        "lane": "jungle",
        "strongAgainst": [
          "Gragas",
          "Amumu",
          "Kayn",
          "Wukong",
          "Rammus",
          "Shyvana"
        ],
        "weakAgainst": [
          "Xin Zhao",
          "Kha&#8217;Zix",
          "Warwick",
          "Fiddlesticks",
          "Zac",
          "Evelynn"
        ]
      },
      {
        "lane": "mid",
        "strongAgainst": [
          "Diana",
          "Ahri",
          "Akali",
          "Zed",
          "Katarina",
          "Yasuo"
        ],
        "weakAgainst": [
          "Fizz",
          "Lux",
          "Karma",
          "Galio",
          "Zoe",
          "Vex"
        ]
      },
      {
        "lane": "bot",
        "strongAgainst": [
          "Varus",
          "Twitch",
          "Zeri",
          "Vayne",
          "Ashe",
          "Kai&#8217;Sa"
        ],
        "weakAgainst": [
          "Caitlyn",
          "Jhin",
          "Lucian",
          "Jinx",
          "Tristana",
          "Miss Fortune"
        ]
      },
      {
        "lane": "support",
        "strongAgainst": [
          "Alistar",
          "Blitzcrank",
          "Janna",
          "Nami",
          "Lulu",
          "Rakan"
        ],
        "weakAgainst": [
          "Soraka",
          "Leona",
          "Thresh",
          "Sona",
          "Seraphine"
        ]
      }
    ]
  },
  {
    "champion": "Kog'Maw",
    "slug": "Kogmaw",
    "lanes": [
      {
        "lane": "bot",
        "strongAgainst": [
          "Corki",
          "Xayah",
          "Varus",
          "Samira",
          "Tristana",
          "Ezreal"
        ],
        "weakAgainst": [
          "Vayne",
          "Draven",
          "Miss Fortune",
          "Twitch",
          "Ashe",
          "Jinx"
        ]
      },
      {
        "lane": "mid",
        "strongAgainst": [
          "Ekko",
          "Vladimir",
          "Orianna",
          "Annie",
          "Ahri",
          "Galio"
        ],
        "weakAgainst": [
          "Evelynn",
          "Jayce",
          "Aurelion Sol",
          "Veigar",
          "Leblanc",
          "Syndra"
        ]
      }
    ]
  },
  {
    "champion": "Lillia",
    "slug": "Lillia",
    "lanes": [
      {
        "lane": "jungle",
        "strongAgainst": [
          "Rammus",
          "Wukong",
          "Shyvana",
          "Nunu & Willump",
          "Warwick",
          "Kha&#8217;Zix"
        ],
        "weakAgainst": [
          "Rengar",
          "Ekko",
          "Diana",
          "Master Yi",
          "Evelynn",
          "Jarvan IV"
        ]
      },
      {
        "lane": "top",
        "strongAgainst": [
          "Gragas",
          "Akali",
          "Malphite",
          "Shen",
          "Nasus",
          "Renekton"
        ],
        "weakAgainst": [
          "Irelia",
          "Kayle",
          "Jayce",
          "Fiora",
          "Rengar",
          "Teemo"
        ]
      },
      {
        "lane": "mid",
        "strongAgainst": [
          "Ahri",
          "Shen",
          "Akali",
          "Lux",
          "Yasuo",
          "Corki"
        ],
        "weakAgainst": [
          "Diana",
          "Orianna",
          "Aurelion Sol",
          "Ziggs",
          "Malphite",
          "Kassadin"
        ]
      }
    ]
  },
  {
    "champion": "Braum",
    "slug": "Braum",
    "lanes": [
      {
        "lane": "support",
        "strongAgainst": [
          "Miss Fortune",
          "Blitzcrank",
          "Thresh",
          "Jinx",
          "Jayce",
          "Nami"
        ],
        "weakAgainst": [
          "Morgana",
          "Leona",
          "Soraka",
          "Alistar",
          "Karma",
          "Vayne"
        ]
      }
    ]
  },
  {
    "champion": "Amumu",
    "slug": "Amumu",
    "lanes": [
      {
        "lane": "jungle",
        "strongAgainst": [
          "Yasuo",
          "Olaf",
          "Diana",
          "Jax",
          "Gragas",
          "Rammus"
        ],
        "weakAgainst": [
          "Shyvana",
          "Lee Sin",
          "Vi",
          "Warwick",
          "Kha&#8217;Zix",
          "Volibear"
        ]
      },
      {
        "lane": "top",
        "strongAgainst": [
          "Jax",
          "Riven",
          "Tryndamere",
          "Shen",
          "Akali",
          "Gwen"
        ],
        "weakAgainst": [
          "Vi",
          "Garen",
          "Pantheon",
          "Malphite",
          "Renekton",
          "Jayce"
        ]
      }
    ]
  },
  {
    "champion": "Brand",
    "slug": "Brand",
    "lanes": [
      {
        "lane": "mid",
        "strongAgainst": [
          "Annie",
          "Ziggs",
          "Akali",
          "Katarina",
          "Akshan",
          "Corki"
        ],
        "weakAgainst": [
          "Fizz",
          "Galio",
          "Lux",
          "Zed",
          "Corki",
          "Ekko"
        ]
      },
      {
        "lane": "jungle",
        "strongAgainst": [
          "Rammus",
          "Gragas",
          "Graves",
          "Jax",
          "Amumu",
          "Jarvan IV"
        ],
        "weakAgainst": [
          "Rengar",
          "Kha&#8217;Zix",
          "Viego",
          "Kayn",
          "Diana",
          "Evelynn"
        ]
      },
      {
        "lane": "support",
        "strongAgainst": [
          "Alistar",
          "Seraphine",
          "Lulu",
          "Soraka",
          "Thresh"
        ],
        "weakAgainst": [
          "Maokai",
          "Pyke",
          "Nautilus",
          "Blitzcrank",
          "Morgana",
          "Braum"
        ]
      }
    ]
  },
  {
    "champion": "Wukong",
    "slug": "Wukong",
    "lanes": [
      {
        "lane": "top",
        "strongAgainst": [
          "Zed",
          "Jayce",
          "Teemo",
          "Pantheon",
          "Irelia",
          "Jax",
          "Kha&#8217;Zix",
          "Fiddlesticks",
          "Maokai",
          "Nunu & Willump",
          "Warwick"
        ],
        "weakAgainst": [
          "Lee Sin",
          "Darius",
          "Garen",
          "Nasus",
          "Olaf",
          "Pantheon",
          "Amumu",
          "Jarvan IV",
          "Evelynn",
          "Vi",
          "Shyvana"
        ]
      },
      {
        "lane": "mid",
        "strongAgainst": [
          "Ahri",
          "Yasuo",
          "Veigar",
          "Akali",
          "Annie",
          "Vex"
        ],
        "weakAgainst": [
          "Morgana",
          "Fizz",
          "Diana",
          "Jayce",
          "Brand",
          "Vladimir"
        ]
      }
    ]
  },
  {
    "champion": "Morgana",
    "slug": "Morgana",
    "lanes": [
      {
        "lane": "support",
        "strongAgainst": [
          "Leona",
          "Braum",
          "Blitzcrank",
          "Nami",
          "Alistar",
          "Rakan"
        ],
        "weakAgainst": [
          "Karma",
          "Janna",
          "Sona",
          "Soraka",
          "Yuumi",
          "Lulu"
        ]
      },
      {
        "lane": "mid",
        "strongAgainst": [
          "Annie",
          "Akali",
          "Fizz",
          "Veigar",
          "Yasuo",
          "Irelia"
        ],
        "weakAgainst": [
          "Fizz",
          "Katarina",
          "Zed",
          "Seraphine",
          "Tristana",
          "Lissandra"
        ]
      }
    ]
  },
  {
    "champion": "Kennen",
    "slug": "Kennen",
    "lanes": [
      {
        "lane": "top",
        "strongAgainst": [
          "Riven",
          "Renekton",
          "Darius",
          "Yone",
          "Jax",
          "Aatrox"
        ],
        "weakAgainst": [
          "Nasus",
          "Irelia",
          "Dr. Mundo",
          "Olaf",
          "Vladimir",
          "Kayle"
        ]
      },
      {
        "lane": "mid",
        "strongAgainst": [
          "Katarina",
          "Akali",
          "Zed",
          "Yasuo",
          "Aurelion Sol",
          "Orianna"
        ],
        "weakAgainst": [
          "Diana",
          "Ahri",
          "Vladimir",
          "Annie",
          "Galio",
          "Brand"
        ]
      },
      {
        "lane": "support",
        "strongAgainst": [
          "Leona",
          "Braum",
          "Seraphine",
          "Blitzcrank",
          "Rakan"
        ],
        "weakAgainst": [
          "Janna",
          "Lulu",
          "Morgana",
          "Soraka",
          "Nami",
          "Alistar"
        ]
      },
      {
        "lane": "bot",
        "strongAgainst": [
          "Draven",
          "Aphelios",
          "Xayah",
          "Kalista",
          "Kai&#8217;Sa",
          "Jinx"
        ],
        "weakAgainst": [
          "Ashe",
          "Ezreal",
          "Samira",
          "Sivir",
          "Nilah",
          "Tristana"
        ]
      },
      {
        "lane": "jungle",
        "strongAgainst": [
          "Rammus",
          "Kha&#8217;Zix",
          "Rengar",
          "Evelynn",
          "Master Yi",
          "Kayn"
        ],
        "weakAgainst": [
          "Jarvan IV",
          "Gragas",
          "Lee Sin",
          "Amumu",
          "Viego",
          "Pantheon"
        ]
      }
    ]
  },
  {
    "champion": "Ambessa",
    "slug": "Ambessa",
    "lanes": [
      {
        "lane": "top",
        "strongAgainst": [
          "Gwen",
          "Yasuo",
          "Jax",
          "Irelia",
          "Vladimir",
          "Teemo"
        ],
        "weakAgainst": [
          "Pantheon",
          "Jayce",
          "Darius",
          "Garen",
          "Singed",
          "Poppy"
        ]
      },
      {
        "lane": "jungle",
        "strongAgainst": [
          "Rammus",
          "Gragas",
          "Kindred",
          "Lillia",
          "Master Yi",
          "Jarvan IV"
        ],
        "weakAgainst": [
          "Shyvana",
          "Kha&#8217;Zix",
          "Wukong",
          "Viego",
          "Fiddlesticks",
          "Warwick"
        ]
      },
      {
        "lane": "mid",
        "strongAgainst": [
          "Katarina",
          "Zed",
          "Fizz",
          "Talon",
          "Akali",
          "Diana"
        ],
        "weakAgainst": [
          "Ziggs",
          "Lux",
          "Syndra",
          "Ahri",
          "Veigar",
          "Zoe"
        ]
      }
    ]
  },
  {
    "champion": "Shen",
    "slug": "Shen",
    "lanes": [
      {
        "lane": "top",
        "strongAgainst": [
          "Pantheon",
          "Malphite",
          "Fiora",
          "Renekton",
          "Riven",
          "Jarvan IV"
        ],
        "weakAgainst": [
          "Darius",
          "Teemo",
          "Sett",
          "Kayle",
          "Olaf",
          "Gwen"
        ]
      },
      {
        "lane": "support",
        "strongAgainst": [
          "Blitzcrank",
          "Seraphine",
          "Nautilus",
          "Nami",
          "Rakan",
          "Soraka"
        ],
        "weakAgainst": [
          "Leona",
          "Braum",
          "Alistar",
          "Morgana",
          "Lux",
          "Janna"
        ]
      },
      {
        "lane": "mid",
        "strongAgainst": [
          "Zoe",
          "Vladimir",
          "Orianna",
          "Vex",
          "Fizz",
          "Syndra"
        ],
        "weakAgainst": [
          "Brand",
          "Jayce",
          "Veigar",
          "Galio",
          "Diana",
          "Lux"
        ]
      }
    ]
  },
  {
    "champion": "Kayle",
    "slug": "Kayle",
    "lanes": [
      {
        "lane": "top",
        "strongAgainst": [
          "Darius",
          "Olaf",
          "Singed",
          "Fiora",
          "Garen",
          "Gwen"
        ],
        "weakAgainst": [
          "Pantheon",
          "Riven",
          "Jax",
          "Wukong",
          "Jayce",
          "Vladimir"
        ]
      },
      {
        "lane": "mid",
        "strongAgainst": [
          "Fizz",
          "Zed",
          "Yasuo",
          "Katarina",
          "Talon",
          "Aurelion Sol"
        ],
        "weakAgainst": [
          "Annie",
          "Orianna",
          "Ziggs",
          "Syndra",
          "Zoe",
          "Twisted Fate"
        ]
      },
      {
        "lane": "bot",
        "strongAgainst": [
          "Aphelios",
          "Kalista",
          "Varus",
          "Ezreal",
          "Corki",
          "Xayah"
        ],
        "weakAgainst": [
          "Lucian",
          "Vayne",
          "Tristana",
          "Sivir",
          "Caitlyn",
          "Samira"
        ]
      },
      {
        "lane": "support",
        "strongAgainst": [
          "Leona",
          "Soraka",
          "Rakan",
          "Janna",
          "Seraphine",
          "Lulu"
        ],
        "weakAgainst": [
          "Zyra",
          "Karma",
          "Nautilus",
          "Nami",
          "Morgana",
          "Lux"
        ]
      }
    ]
  },
  {
    "champion": "Jarvan IV",
    "slug": "JarvanIV",
    "lanes": [
      {
        "lane": "jungle",
        "strongAgainst": [
          "Malphite",
          "Evelynn",
          "Olaf",
          "Kha&#8217;Zix",
          "Maokai",
          "Rengar"
        ],
        "weakAgainst": [
          "Vi",
          "Lee Sin",
          "Xin Zhao",
          "Nunu & Willump",
          "Ekko",
          "Gwen"
        ]
      },
      {
        "lane": "top",
        "strongAgainst": [
          "Teemo",
          "Kayle",
          "Riven",
          "Jayce",
          "Nasus",
          "Kennen"
        ],
        "weakAgainst": [
          "Shen",
          "Renekton",
          "Jax",
          "Pantheon",
          "Fiora",
          "Darius"
        ]
      }
    ]
  },
  {
    "champion": "Zyra",
    "slug": "Zyra",
    "lanes": [
      {
        "lane": "support",
        "strongAgainst": [
          "Yuumi",
          "Seraphine",
          "Karma",
          "Lulu",
          "Braum"
        ],
        "weakAgainst": [
          "Janna",
          "Sona",
          "Thresh",
          "Morgana",
          "Alistar",
          "Soraka"
        ]
      },
      {
        "lane": "mid",
        "strongAgainst": [
          "Corki",
          "Katarina",
          "Veigar",
          "Zoe",
          "Aurelion Sol",
          "Orianna"
        ],
        "weakAgainst": [
          "Ziggs",
          "Heimerdinger",
          "Lux",
          "Syndra",
          "Katarina",
          "Zed"
        ]
      },
      {
        "lane": "bot",
        "strongAgainst": [
          "Jinx",
          "Ezreal",
          "Zeri",
          "Kai&#8217;Sa",
          "Xayah",
          "Ashe"
        ],
        "weakAgainst": [
          "Miss Fortune",
          "Caitlyn",
          "Jhin",
          "Tristana",
          "Twitch",
          "Vayne"
        ]
      },
      {
        "lane": "jungle",
        "strongAgainst": [
          "Gragas",
          "Amumu",
          "Zac",
          "Fiddlesticks",
          "Lillia",
          "Rammus"
        ],
        "weakAgainst": [
          "Kha&#8217;Zix",
          "Rengar",
          "Ekko",
          "Wukong",
          "Talon",
          "Xin Zhao"
        ]
      },
      {
        "lane": "top",
        "strongAgainst": [
          "Darius",
          "Garen",
          "Aatrox",
          "Kayle",
          "Volibear",
          "Gwen"
        ],
        "weakAgainst": [
          "Rengar",
          "Wukong",
          "Irelia",
          "Nasus",
          "Pantheon",
          "Jayce"
        ]
      }
    ]
  },
  {
    "champion": "Olaf",
    "slug": "Olaf",
    "lanes": [
      {
        "lane": "top",
        "strongAgainst": [
          "Irelia",
          "Nasus",
          "Renekton",
          "Malphite",
          "Jayce",
          "Yone",
          "Nunu & Willump",
          "Lillia",
          "Zac",
          "Evelynn",
          "Amumu",
          "Xin Zhao"
        ],
        "weakAgainst": [
          "Kennen",
          "Volibear",
          "Jax",
          "Pantheon",
          "Kayle",
          "Sett",
          "Gragas",
          "Jarvan IV",
          "Warwick",
          "Rengar",
          "Fiddlesticks",
          "Master Yi"
        ]
      },
      {
        "lane": "mid",
        "strongAgainst": [
          "Veigar",
          "Akali",
          "Zed",
          "Fizz",
          "Riven",
          "Morgana"
        ],
        "weakAgainst": [
          "Brand",
          "Zoe",
          "Kayle",
          "Lucian",
          "Annie",
          "Akshan"
        ]
      }
    ]
  },
  {
    "champion": "Nami",
    "slug": "Nami",
    "lanes": [
      {
        "lane": "support",
        "strongAgainst": [
          "Janna",
          "Thresh",
          "Karma",
          "Braum",
          "Soraka",
          "Rakan"
        ],
        "weakAgainst": [
          "Lulu",
          "Blitzcrank",
          "Morgana",
          "Leona",
          "Alistar",
          "Sona",
          "Zed",
          "Ziggs",
          "Yasuo",
          "Wukong",
          "Xayah",
          "Xin Zhao",
          "Vi",
          "Veigar",
          "Varus",
          "Vayne",
          "Twisted Fate",
          "Tryndamere",
          "Tristana",
          "Thresh",
          "Teemo",
          "Soraka",
          "Singed",
          "Shyvana",
          "Shen",
          "Sett",
          "Seraphine",
          "Riven",
          "Rengar",
          "Renekton",
          "Rammus",
          "Rakan",
          "Pantheon",
          "Orianna",
          "Olaf",
          "Nunu & Willump",
          "Nasus",
          "Nami",
          "Miss Fortune",
          "Malphite",
          "Master Yi",
          "Lux",
          "Lucian",
          "Lee Sin",
          "Kha&#8217;Zix",
          "Katarina",
          "Kayle",
          "Kennen",
          "Karma",
          "Kai&#8217;Sa",
          "Jayce",
          "Jhin",
          "Jinx",
          "Jarvan IV",
          "Graves",
          "Irelia",
          "Janna",
          "Gragas",
          "Garen",
          "Fizz",
          "Galio",
          "Ezreal",
          "Fiora",
          "Evelynn",
          "Draven",
          "Dr. Mundo",
          "Diana",
          "Camille",
          "Corki",
          "Darius",
          "Caitlyn",
          "Braum",
          "Aurelion Sol",
          "Brand",
          "Ashe",
          "Annie",
          "Amumu",
          "Akshan",
          "Nautilus",
          "Ahri",
          "Akali",
          "Kassadin",
          "Sion",
          "Samira",
          "Yone",
          "Vex",
          "Warwick",
          "Gwen",
          "Kayn",
          "Aatrox",
          "Lillia",
          "Zoe",
          "Twitch",
          "Fiddlesticks",
          "Urgot",
          "Zac",
          "Zeri",
          "Aphelios",
          "Volibear",
          "Ornn",
          "Swain",
          "Hecarim",
          "Vladimir",
          "Nilah",
          "Sivir",
          "Zyra",
          "Talon",
          "Syndra",
          "Kindred",
          "Pyke",
          "Yuumi",
          "Ekko",
          "Jax",
          "Kalista",
          "Maokai",
          "Viego",
          "Milio",
          "Mordekaiser",
          "Lissandra",
          "Viktor",
          "Heimerdinger",
          "Ambessa",
          "Rumble",
          "Poppy",
          "Gnar",
          "Zilean",
          "Ryze"
        ]
      }
    ]
  },
  {
    "champion": "Nidalee",
    "slug": "Nidalee",
    "lanes": [
      {
        "lane": "jungle",
        "strongAgainst": [
          "Pantheon",
          "Zac",
          "Nunu & Willump",
          "Wukong",
          "Graves",
          "Gragas"
        ],
        "weakAgainst": [
          "Rammus",
          "Warwick",
          "Amumu",
          "Master Yi",
          "Ekko",
          "Nocturne"
        ]
      }
    ]
  },
  {
    "champion": "Karma",
    "slug": "Karma",
    "lanes": [
      {
        "lane": "mid",
        "strongAgainst": [
          "Fizz",
          "Diana",
          "Katarina",
          "Zed",
          "Akali",
          "Ezreal"
        ],
        "weakAgainst": [
          "Veigar",
          "Lux",
          "Orianna",
          "Ahri",
          "Yasuo",
          "Ekko"
        ]
      },
      {
        "lane": "top",
        "strongAgainst": [
          "Pantheon",
          "Jax",
          "Singed",
          "Aatrox",
          "Swain",
          "Sett"
        ],
        "weakAgainst": [
          "Fiora",
          "Olaf",
          "Nasus",
          "Vladimir",
          "Irelia",
          "Yone"
        ]
      },
      {
        "lane": "support",
        "strongAgainst": [
          "Leona",
          "Braum",
          "Annie",
          "Janna",
          "Thresh",
          "Alistar"
        ],
        "weakAgainst": [
          "Sona",
          "Lulu",
          "Blitzcrank",
          "Zyra",
          "Rakan",
          "Morgana"
        ]
      }
    ]
  },
  {
    "champion": "Zilean",
    "slug": "Zilean",
    "lanes": [
      {
        "lane": "support",
        "strongAgainst": [
          "Seraphine",
          "Brand",
          "Blitzcrank",
          "Nautilus",
          "Sona",
          "Alistar"
        ],
        "weakAgainst": [
          "Yuumi",
          "Maokai",
          "Lulu",
          "Leona",
          "Karma",
          "Pyke"
        ]
      },
      {
        "lane": "mid",
        "strongAgainst": [
          "Fizz",
          "Orianna",
          "Lux",
          "Twisted Fate",
          "Talon",
          "Ryze"
        ],
        "weakAgainst": [
          "Vex",
          "Ekko",
          "Kassadin",
          "Kayle",
          "Akshan",
          "Tristana"
        ]
      }
    ]
  },
  {
    "champion": "Shyvana",
    "slug": "Shyvana",
    "lanes": [
      {
        "lane": "jungle",
        "strongAgainst": [
          "Amumu",
          "Rammus",
          "Jarvan IV",
          "Rengar",
          "Master Yi",
          "Evelynn"
        ],
        "weakAgainst": [
          "Vi",
          "Lee Sin",
          "Kha&#8217;Zix",
          "Gragas",
          "Volibear",
          "Gwen"
        ]
      },
      {
        "lane": "top",
        "strongAgainst": [
          "Renekton",
          "Dr. Mundo",
          "Riven",
          "Wukong",
          "Nasus",
          "Jax"
        ],
        "weakAgainst": [
          "Olaf",
          "Darius",
          "Pantheon",
          "Teemo",
          "Tryndamere",
          "Shen"
        ]
      }
    ]
  },
  {
    "champion": "Xayah",
    "slug": "Xayah",
    "lanes": [
      {
        "lane": "bot",
        "strongAgainst": [
          "Ashe",
          "Vayne",
          "Zeri",
          "Aphelios",
          "Kai&#8217;Sa",
          "Samira"
        ],
        "weakAgainst": [
          "Miss Fortune",
          "Tristana",
          "Varus",
          "Caitlyn",
          "Kalista",
          "Draven"
        ]
      }
    ]
  },
  {
    "champion": "Varus",
    "slug": "Varus",
    "lanes": [
      {
        "lane": "bot",
        "strongAgainst": [
          "Kalista",
          "Aphelios",
          "Zeri",
          "Nilah",
          "Xayah",
          "Ashe",
          "Ekko",
          "Evelynn",
          "Amumu",
          "Dr. Mundo",
          "Fiddlesticks",
          "Wukong"
        ],
        "weakAgainst": [
          "Twitch",
          "Jinx",
          "Miss Fortune",
          "Sivir",
          "Samira",
          "Jhin",
          "Master Yi",
          "Lee Sin",
          "Kayn",
          "Xin Zhao",
          "Jarvan IV",
          "Rammus"
        ]
      },
      {
        "lane": "support",
        "strongAgainst": [
          "Sona",
          "Nami",
          "Lulu",
          "Rakan",
          "Soraka"
        ],
        "weakAgainst": [
          "Alistar",
          "Braum",
          "Thresh",
          "Brand",
          "Soraka",
          "Zyra"
        ]
      },
      {
        "lane": "mid",
        "strongAgainst": [
          "Diana",
          "Corki",
          "Lux",
          "Kassadin",
          "Kayle",
          "Vladimir"
        ],
        "weakAgainst": [
          "Annie",
          "Zoe",
          "Jayce",
          "Yasuo",
          "Katarina",
          "Yone"
        ]
      },
      {
        "lane": "top",
        "strongAgainst": [
          "Volibear",
          "Darius",
          "Teemo",
          "Gwen",
          "Dr. Mundo",
          "Olaf"
        ],
        "weakAgainst": [
          "Yasuo",
          "Tryndamere",
          "Camille",
          "Jax",
          "Zac",
          "Malphite"
        ]
      }
    ]
  },
  {
    "champion": "Janna",
    "slug": "Janna",
    "lanes": [
      {
        "lane": "support",
        "strongAgainst": [
          "Kennen",
          "Alistar",
          "Leona",
          "Morgana",
          "Thresh",
          "Nunu & Willump"
        ],
        "weakAgainst": [
          "Nami",
          "Blitzcrank",
          "Lux",
          "Sona",
          "Soraka"
        ]
      },
      {
        "lane": "bot",
        "strongAgainst": [
          "Varus",
          "Ezreal",
          "Vayne",
          "Twitch",
          "Ashe",
          "Jinx"
        ],
        "weakAgainst": [
          "Nilah",
          "Aphelios",
          "Miss Fortune",
          "Zeri",
          "Lucian",
          "Caitlyn"
        ]
      }
    ]
  },
  {
    "champion": "Milio",
    "slug": "Milio",
    "lanes": [
      {
        "lane": "support",
        "strongAgainst": [
          "Seraphine",
          "Soraka",
          "Rakan",
          "Leona",
          "Janna",
          "Nami"
        ],
        "weakAgainst": [
          "Blitzcrank",
          "Thresh",
          "Pyke",
          "Nautilus",
          "Lux"
        ]
      }
    ]
  },
  {
    "champion": "Senna",
    "slug": "Senna",
    "lanes": [
      {
        "lane": "support",
        "strongAgainst": [
          "Seraphine",
          "Sona",
          "Janna",
          "Soraka",
          "Yuumi",
          "Nami"
        ],
        "weakAgainst": [
          "Blitzcrank",
          "Rakan",
          "Leona",
          "Thresh",
          "Braum",
          "Nautilus"
        ]
      },
      {
        "lane": "bot",
        "strongAgainst": [
          "Jinx",
          "Draven",
          "Kai&#8217;Sa",
          "Sivir",
          "Ashe",
          "Zeri"
        ],
        "weakAgainst": [
          "Caitlyn",
          "Jhin",
          "Ezreal",
          "Kalista",
          "Lucian",
          "Vayne"
        ]
      }
    ]
  },
  {
    "champion": "Ahri",
    "slug": "Ahri",
    "lanes": [
      {
        "lane": "mid",
        "strongAgainst": [
          "Orianna",
          "Gragas",
          "Katarina",
          "Brand",
          "Lux",
          "Akali"
        ],
        "weakAgainst": [
          "Yasuo",
          "Ekko",
          "Diana",
          "Irelia",
          "Zed",
          "Kassadin"
        ]
      },
      {
        "lane": "top",
        "strongAgainst": [
          "Katarina",
          "Riven",
          "Akali",
          "Rengar",
          "Annie",
          "Nasus"
        ],
        "weakAgainst": [
          "Olaf",
          "Teemo",
          "Darius",
          "Fiora",
          "Ornn",
          "Sett"
        ]
      },
      {
        "lane": "bot",
        "strongAgainst": [
          "Ashe",
          "Caitlyn",
          "Draven",
          "Jinx",
          "Zeri",
          "Miss Fortune"
        ],
        "weakAgainst": [
          "Samira",
          "Nilah",
          "Xayah",
          "Ezreal",
          "Tristana",
          "Sivir"
        ]
      },
      {
        "lane": "support",
        "strongAgainst": [
          "Nautilus",
          "Zyra",
          "Janna",
          "Soraka",
          "Rakan",
          "Leona"
        ],
        "weakAgainst": [
          "Blitzcrank",
          "Lux",
          "Morgana",
          "Sona",
          "Lulu",
          "Karma"
        ]
      },
      {
        "lane": "jungle",
        "strongAgainst": [
          "Rammus",
          "Gwen",
          "Nunu & Willump",
          "Xin Zhao",
          "Jarvan IV",
          "Master Yi"
        ],
        "weakAgainst": [
          "Vi",
          "Zac",
          "Warwick",
          "Rengar",
          "Hecarim",
          "Graves"
        ]
      }
    ]
  },
  {
    "champion": "Jhin",
    "slug": "Jhin",
    "lanes": [
      {
        "lane": "bot",
        "strongAgainst": [
          "Xayah",
          "Caitlyn",
          "Varus",
          "Kalista",
          "Aphelios",
          "Ezreal",
          "Kassadin",
          "Annie",
          "Zoe",
          "Lux",
          "Jayce",
          "Aurelion Sol",
          "Maokai",
          "Morgana",
          "Braum",
          "Alistar",
          "Janna",
          "Nami",
          "Hecarim",
          "Shyvana",
          "Nunu & Willump",
          "Master Yi",
          "Viego",
          "Graves",
          "Gwen",
          "Olaf",
          "Pantheon",
          "Irelia",
          "Riven",
          "Sett"
        ],
        "weakAgainst": [
          "Lucian",
          "Vayne",
          "Tristana",
          "Nilah",
          "Twitch",
          "Jinx",
          "Syndra",
          "Yasuo",
          "Galio",
          "Zed",
          "Diana",
          "Sona",
          "Seraphine",
          "Leona",
          "Rakan",
          "Soraka",
          "Nautilus",
          "Vi",
          "Zac",
          "Kindred",
          "Kha&#8217;Zix",
          "Rengar",
          "Gragas",
          "Fiora",
          "Camille",
          "Wukong",
          "Volibear"
        ]
      }
    ]
  },
  {
    "champion": "Rumble",
    "slug": "Rumble",
    "lanes": [
      {
        "lane": "top",
        "strongAgainst": [
          "Yone",
          "Sett",
          "Teemo",
          "Irelia",
          "Wukong",
          "Malphite"
        ],
        "weakAgainst": [
          "Garen",
          "Jayce",
          "Sion",
          "Shen",
          "Camille",
          "Tryndamere"
        ]
      },
      {
        "lane": "mid",
        "strongAgainst": [
          "Katarina",
          "Orianna",
          "Zoe",
          "Yasuo",
          "Akali",
          "Talon"
        ],
        "weakAgainst": [
          "Syndra",
          "Kennen",
          "Annie",
          "Lux",
          "Ahri",
          "Galio"
        ]
      }
    ]
  },
  {
    "champion": "Bard",
    "slug": "Bard",
    "lanes": [
      {
        "lane": "support",
        "strongAgainst": [
          "Lux",
          "Pyke",
          "Seraphine",
          "Rakan",
          "Zyra"
        ],
        "weakAgainst": [
          "Sona",
          "Zilean",
          "Nami",
          "Janna",
          "Morgana",
          "Soraka"
        ]
      },
      {
        "lane": "mid",
        "strongAgainst": [
          "Orianna",
          "Annie",
          "Zoe",
          "Aurelion Sol",
          "Varus",
          "Ryze"
        ],
        "weakAgainst": [
          "Kassadin",
          "Veigar",
          "Lissandra",
          "Corki",
          "Ekko",
          "Leblanc"
        ]
      }
    ]
  },
  {
    "champion": "Miss Fortune",
    "slug": "MissFortune",
    "lanes": [
      {
        "lane": "bot",
        "strongAgainst": [
          "Varus",
          "Kai&#8217;Sa",
          "Vayne",
          "Jinx",
          "Samira",
          "Aphelios"
        ],
        "weakAgainst": [
          "Tristana",
          "Draven",
          "Caitlyn",
          "Lucian",
          "Twitch"
        ]
      },
      {
        "lane": "mid",
        "strongAgainst": [
          "Karma",
          "Vladimir",
          "Syndra",
          "Swain",
          "Zoe",
          "Akali"
        ],
        "weakAgainst": [
          "Ekko",
          "Lucian",
          "Talon",
          "Galio",
          "Yasuo",
          "Zed"
        ]
      },
      {
        "lane": "support",
        "strongAgainst": [
          "Soraka",
          "Yuumi",
          "Pyke",
          "Morgana",
          "Zyra",
          "Sona"
        ],
        "weakAgainst": [
          "Malphite",
          "Braum",
          "Nautilus",
          "Rakan",
          "Blitzcrank",
          "Alistar"
        ]
      }
    ]
  },
  {
    "champion": "Hecarim",
    "slug": "Hecarim",
    "lanes": [
      {
        "lane": "jungle",
        "strongAgainst": [
          "Diana",
          "Shyvana",
          "Rammus",
          "Wukong",
          "Lee Sin",
          "Nunu & Willump"
        ],
        "weakAgainst": [
          "Master Yi",
          "Evelynn",
          "Warwick",
          "Vi",
          "Jarvan IV",
          "Graves"
        ]
      },
      {
        "lane": "top",
        "strongAgainst": [
          "Zac",
          "Shen",
          "Riven",
          "Yone",
          "Kayle",
          "Fiora"
        ],
        "weakAgainst": [
          "Renekton",
          "Camille",
          "Darius",
          "Akali",
          "Jayce",
          "Sett"
        ]
      }
    ]
  },
  {
    "champion": "Yone",
    "slug": "Yone",
    "lanes": [
      {
        "lane": "mid",
        "strongAgainst": [
          "Orianna",
          "Corki",
          "Twisted Fate",
          "Irelia",
          "Yasuo",
          "Diana"
        ],
        "weakAgainst": [
          "Annie",
          "Zed",
          "Fizz",
          "Ahri",
          "Veigar",
          "Talon"
        ]
      },
      {
        "lane": "top",
        "strongAgainst": [
          "Jayce",
          "Sion",
          "Gwen",
          "Dr. Mundo",
          "Singed",
          "Tryndamere"
        ],
        "weakAgainst": [
          "Pantheon",
          "Gragas",
          "Riven",
          "Fiora",
          "Garen",
          "Sett"
        ]
      }
    ]
  },
  {
    "champion": "Veigar",
    "slug": "Veigar",
    "lanes": [
      {
        "lane": "mid",
        "strongAgainst": [
          "Ahri",
          "Twisted Fate",
          "Ziggs",
          "Brand",
          "Kha&#8217;Zix",
          "Yasuo"
        ],
        "weakAgainst": [
          "Zed",
          "Katarina",
          "Diana",
          "Zoe",
          "Jayce",
          "Ekko",
          "Ziggs",
          "Yasuo",
          "Wukong",
          "Xayah",
          "Xin Zhao",
          "Vi",
          "Veigar",
          "Varus",
          "Vayne",
          "Twisted Fate",
          "Tryndamere",
          "Tristana",
          "Thresh",
          "Teemo",
          "Soraka",
          "Sona",
          "Singed",
          "Shyvana",
          "Shen",
          "Sett",
          "Seraphine",
          "Riven",
          "Rengar",
          "Renekton",
          "Rammus",
          "Rakan",
          "Pantheon",
          "Orianna",
          "Olaf",
          "Nunu & Willump",
          "Nasus",
          "Nami",
          "Morgana",
          "Miss Fortune",
          "Malphite",
          "Master Yi",
          "Lux",
          "Lulu",
          "Leona",
          "Lucian",
          "Lee Sin",
          "Kha&#8217;Zix",
          "Kayle",
          "Kennen",
          "Karma",
          "Kai&#8217;Sa",
          "Jhin",
          "Jinx",
          "Jarvan IV",
          "Graves",
          "Irelia",
          "Janna",
          "Gragas",
          "Garen",
          "Fizz",
          "Galio",
          "Ezreal",
          "Fiora",
          "Evelynn",
          "Draven",
          "Dr. Mundo",
          "Camille",
          "Corki",
          "Darius",
          "Caitlyn",
          "Braum",
          "Aurelion Sol",
          "Blitzcrank",
          "Brand",
          "Ashe",
          "Annie",
          "Amumu",
          "Akshan",
          "Alistar",
          "Nautilus",
          "Ahri",
          "Akali",
          "Kassadin",
          "Sion",
          "Samira",
          "Yone",
          "Vex",
          "Warwick",
          "Gwen",
          "Kayn",
          "Aatrox",
          "Lillia",
          "Twitch",
          "Fiddlesticks",
          "Urgot",
          "Zac",
          "Zeri",
          "Aphelios",
          "Volibear",
          "Ornn",
          "Swain",
          "Hecarim",
          "Vladimir",
          "Nilah",
          "Sivir",
          "Zyra",
          "Talon",
          "Syndra",
          "Kindred",
          "Pyke",
          "Yuumi",
          "Jax",
          "Kalista",
          "Maokai",
          "Viego",
          "Milio",
          "Mordekaiser",
          "Lissandra",
          "Viktor",
          "Heimerdinger",
          "Ambessa",
          "Rumble",
          "Poppy",
          "Gnar",
          "Zilean",
          "Ryze"
        ]
      },
      {
        "lane": "bot",
        "strongAgainst": [
          "Tristana",
          "Draven",
          "Ezreal",
          "Corki",
          "Rakan",
          "Orianna"
        ],
        "weakAgainst": [
          "Braum",
          "Seraphine",
          "Aphelios",
          "Xayah",
          "Miss Fortune",
          "Lucian"
        ]
      }
    ]
  },
  {
    "champion": "Renekton",
    "slug": "Renekton",
    "lanes": [
      {
        "lane": "top",
        "strongAgainst": [
          "Riven",
          "Irelia",
          "Fiora",
          "Jax",
          "Akali",
          "Tryndamere"
        ],
        "weakAgainst": [
          "Vayne",
          "Garen",
          "Olaf",
          "Kayle",
          "Teemo",
          "Pantheon",
          "Zed",
          "Ziggs",
          "Yasuo",
          "Wukong",
          "Xayah",
          "Xin Zhao",
          "Vi",
          "Veigar",
          "Varus",
          "Twisted Fate",
          "Tryndamere",
          "Tristana",
          "Thresh",
          "Soraka",
          "Sona",
          "Singed",
          "Shyvana",
          "Shen",
          "Sett",
          "Seraphine",
          "Riven",
          "Rengar",
          "Renekton",
          "Rammus",
          "Rakan",
          "Orianna",
          "Nunu & Willump",
          "Nasus",
          "Nami",
          "Morgana",
          "Miss Fortune",
          "Malphite",
          "Master Yi",
          "Lux",
          "Lulu",
          "Leona",
          "Lucian",
          "Lee Sin",
          "Kha&#8217;Zix",
          "Katarina",
          "Kennen",
          "Karma",
          "Kai&#8217;Sa",
          "Jayce",
          "Jhin",
          "Jinx",
          "Jarvan IV",
          "Graves",
          "Irelia",
          "Janna",
          "Gragas",
          "Fizz",
          "Galio",
          "Ezreal",
          "Fiora",
          "Evelynn",
          "Draven",
          "Dr. Mundo",
          "Diana",
          "Camille",
          "Corki",
          "Darius",
          "Caitlyn",
          "Braum",
          "Aurelion Sol",
          "Blitzcrank",
          "Brand",
          "Ashe",
          "Annie",
          "Amumu",
          "Akshan",
          "Alistar",
          "Nautilus",
          "Ahri",
          "Akali",
          "Kassadin",
          "Sion",
          "Samira",
          "Yone",
          "Vex",
          "Warwick",
          "Gwen",
          "Kayn",
          "Aatrox",
          "Lillia",
          "Zoe",
          "Twitch",
          "Fiddlesticks",
          "Urgot",
          "Zac",
          "Zeri",
          "Aphelios",
          "Volibear",
          "Ornn",
          "Swain",
          "Hecarim",
          "Vladimir",
          "Nilah",
          "Sivir",
          "Zyra",
          "Talon",
          "Syndra",
          "Kindred",
          "Pyke",
          "Yuumi",
          "Ekko",
          "Jax",
          "Kalista",
          "Maokai",
          "Viego",
          "Milio",
          "Mordekaiser",
          "Lissandra",
          "Viktor",
          "Heimerdinger",
          "Ambessa",
          "Rumble",
          "Poppy",
          "Gnar",
          "Zilean",
          "Ryze"
        ]
      },
      {
        "lane": "mid",
        "strongAgainst": [
          "Fizz",
          "Vladimir",
          "Annie",
          "Gragas",
          "Galio",
          "Karma"
        ],
        "weakAgainst": [
          "Jayce",
          "Lux",
          "Ekko",
          "Tristana",
          "Diana",
          "Pantheon"
        ]
      }
    ]
  },
  {
    "champion": "Mordekaiser",
    "slug": "Mordekaiser",
    "lanes": [
      {
        "lane": "top",
        "strongAgainst": [
          "Sion",
          "Sett",
          "Garen",
          "Akali",
          "Shen",
          "Yone"
        ],
        "weakAgainst": [
          "Olaf",
          "Fiora",
          "Warwick",
          "Riven",
          "Jax",
          "Gwen"
        ]
      },
      {
        "lane": "jungle",
        "strongAgainst": [
          "Rammus",
          "Diana",
          "Graves",
          "Shyvana",
          "Lee Sin",
          "Evelynn"
        ],
        "weakAgainst": [
          "Master Yi",
          "Warwick",
          "Lillia",
          "Ekko",
          "Pantheon",
          "Gragas"
        ]
      },
      {
        "lane": "mid",
        "strongAgainst": [
          "Veigar",
          "Yasuo",
          "Varus",
          "Zed",
          "Lux",
          "Diana"
        ],
        "weakAgainst": [
          "Ahri",
          "Irelia",
          "Vex",
          "Kassadin",
          "Jayce",
          "Veigar"
        ]
      },
      {
        "lane": "support",
        "strongAgainst": [
          "Morgana",
          "Sona",
          "Alistar",
          "Soraka",
          "Zyra",
          "Braum"
        ],
        "weakAgainst": [
          "Soraka",
          "Karma",
          "Pyke",
          "Nami",
          "Seraphine",
          "Blitzcrank"
        ]
      },
      {
        "lane": "bot",
        "strongAgainst": [
          "Nilah",
          "Samira",
          "Kai&#8217;Sa",
          "Ezreal",
          "Lucian",
          "Ashe"
        ],
        "weakAgainst": [
          "Xayah",
          "Kalista",
          "Vayne",
          "Zeri",
          "Twitch",
          "Sivir"
        ]
      }
    ]
  },
  {
    "champion": "Warwick",
    "slug": "Warwick",
    "lanes": [
      {
        "lane": "jungle",
        "strongAgainst": [
          "Master Yi",
          "Lee Sin",
          "Shyvana",
          "Kha&#8217;Zix",
          "Gragas",
          "Xin Zhao"
        ],
        "weakAgainst": [
          "Evelynn",
          "Nunu & Willump",
          "Rengar",
          "Maokai",
          "Rammus",
          "Vi"
        ]
      },
      {
        "lane": "top",
        "strongAgainst": [
          "Nasus",
          "Akali",
          "Gwen",
          "Fiora",
          "Sett",
          "Wukong"
        ],
        "weakAgainst": [
          "Kayle",
          "Olaf",
          "Urgot",
          "Singed",
          "Darius",
          "Nasus"
        ]
      }
    ]
  },
  {
    "champion": "Nautilus",
    "slug": "Nautilus",
    "lanes": [
      {
        "lane": "support",
        "strongAgainst": [
          "Yuumi",
          "Thresh",
          "Karma",
          "Lux",
          "Brand",
          "Maokai"
        ],
        "weakAgainst": [
          "Morgana",
          "Janna",
          "Alistar",
          "Rakan",
          "Seraphine",
          "Lulu"
        ]
      },
      {
        "lane": "top",
        "strongAgainst": [
          "Malphite",
          "Teemo",
          "Jayce",
          "Sett",
          "Yasuo",
          "Jax"
        ],
        "weakAgainst": [
          "Fiora",
          "Shen",
          "Darius",
          "Kayle",
          "Gragas",
          "Camille"
        ]
      }
    ]
  },
  {
    "champion": "Maokai",
    "slug": "Maokai",
    "lanes": [
      {
        "lane": "support",
        "strongAgainst": [
          "Pyke",
          "Rakan",
          "Lux",
          "Sona",
          "Seraphine"
        ],
        "weakAgainst": [
          "Braum",
          "Alistar",
          "Janna",
          "Thresh",
          "Lulu",
          "Zyra"
        ]
      },
      {
        "lane": "bot",
        "strongAgainst": [
          "Varus",
          "Xayah",
          "Aphelios",
          "Jhin",
          "Caitlyn",
          "Samira"
        ],
        "weakAgainst": [
          "Vayne",
          "Tristana",
          "Draven",
          "Zeri",
          "Jinx",
          "Sivir"
        ]
      },
      {
        "lane": "top",
        "strongAgainst": [
          "Jayce",
          "Gragas",
          "Akali",
          "Darius",
          "Irelia",
          "Yone"
        ],
        "weakAgainst": [
          "Garen",
          "Dr. Mundo",
          "Nasus",
          "Sett",
          "Camille",
          "Fiora"
        ]
      },
      {
        "lane": "jungle",
        "strongAgainst": [
          "Diana",
          "Gragas",
          "Graves",
          "Kha&#8217;Zix",
          "Talon",
          "Xin Zhao"
        ],
        "weakAgainst": [
          "Rammus",
          "Warwick",
          "Jarvan IV",
          "Nunu & Willump",
          "Rengar",
          "Lillia"
        ]
      }
    ]
  },
  {
    "champion": "Xin Zhao",
    "slug": "XinZhao",
    "lanes": [
      {
        "lane": "jungle",
        "strongAgainst": [
          "Vi",
          "Jarvan IV",
          "Evelynn",
          "Nunu & Willump",
          "Fiddlesticks",
          "Diana"
        ],
        "weakAgainst": [
          "Malphite",
          "Rammus",
          "Lee Sin",
          "Evelynn",
          "Ekko",
          "Master Yi"
        ]
      },
      {
        "lane": "top",
        "strongAgainst": [
          "Jayce",
          "Kayle",
          "Darius",
          "Riven",
          "Vi",
          "Zed"
        ],
        "weakAgainst": [
          "Jax",
          "Pantheon",
          "Teemo",
          "Fiora",
          "Malphite",
          "Shen"
        ]
      }
    ]
  },
  {
    "champion": "Aurelion Sol",
    "slug": "AurelionSol",
    "lanes": [
      {
        "lane": "mid",
        "strongAgainst": [
          "Annie",
          "Katarina",
          "Irelia",
          "Orianna",
          "Diana",
          "Brand"
        ],
        "weakAgainst": [
          "Fizz",
          "Zed",
          "Yasuo",
          "Katarina",
          "Karma",
          "Galio"
        ]
      },
      {
        "lane": "top",
        "strongAgainst": [
          "Riven",
          "Nasus",
          "Fiora",
          "Garen",
          "Malphite",
          "Dr. Mundo"
        ],
        "weakAgainst": [
          "Darius",
          "Kennen",
          "Pantheon",
          "Tryndamere",
          "Jayce",
          "Kassadin"
        ]
      }
    ]
  },
  {
    "champion": "Ekko",
    "slug": "Ekko",
    "lanes": [
      {
        "lane": "mid",
        "strongAgainst": [
          "Orianna",
          "Twisted Fate",
          "Veigar",
          "Katarina",
          "Corki",
          "Annie"
        ],
        "weakAgainst": [
          "Galio",
          "Swain",
          "Irelia",
          "Kassadin",
          "Yasuo",
          "Akali"
        ]
      },
      {
        "lane": "top",
        "strongAgainst": [
          "Tryndamere",
          "Darius",
          "Teemo",
          "Shen",
          "Malphite",
          "Gwen"
        ],
        "weakAgainst": [
          "Nasus",
          "Riven",
          "Wukong",
          "Garen",
          "Sett",
          "Jax"
        ]
      },
      {
        "lane": "jungle",
        "strongAgainst": [
          "Lee Sin",
          "Jarvan IV",
          "Xin Zhao",
          "Graves",
          "Master Yi",
          "Zac"
        ],
        "weakAgainst": [
          "Kha&#8217;Zix",
          "Rengar",
          "Amumu",
          "Vi",
          "Nunu & Willump",
          "Talon"
        ]
      }
    ]
  },
  {
    "champion": "Fiora",
    "slug": "Fiora",
    "lanes": [
      {
        "lane": "top",
        "strongAgainst": [
          "Sion",
          "Dr. Mundo",
          "Nasus",
          "Rengar",
          "Irelia",
          "Yone"
        ],
        "weakAgainst": [
          "Warwick",
          "Vayne",
          "Pantheon",
          "Darius",
          "Renekton",
          "Malphite"
        ]
      },
      {
        "lane": "jungle",
        "strongAgainst": [
          "Ekko",
          "Xin Zhao",
          "Viego",
          "Shyvana",
          "Rammus",
          "Brand"
        ],
        "weakAgainst": [
          "Lillia",
          "Zac",
          "Kha&#8217;Zix",
          "Graves",
          "Shyvana",
          "Jarvan IV"
        ]
      },
      {
        "lane": "mid",
        "strongAgainst": [
          "Katarina",
          "Irelia",
          "Galio",
          "Ekko",
          "Riven",
          "Yasuo"
        ],
        "weakAgainst": [
          "Garen",
          "Tristana",
          "Vladimir",
          "Malphite",
          "Jayce",
          "Zoe"
        ]
      },
      {
        "lane": "bot",
        "strongAgainst": [
          "Jhin",
          "Twitch",
          "Ziggs",
          "Aphelios",
          "Ezreal",
          "Miss Fortune"
        ],
        "weakAgainst": [
          "Jinx",
          "Caitlyn",
          "Sivir",
          "Draven",
          "Vayne",
          "Varus"
        ]
      },
      {
        "lane": "support",
        "strongAgainst": [
          "Morgana",
          "Seraphine",
          "Thresh",
          "Lux",
          "Sona"
        ],
        "weakAgainst": [
          "Zyra",
          "Rakan",
          "Braum",
          "Leona",
          "Lulu",
          "Soraka"
        ]
      }
    ]
  },
  {
    "champion": "Viktor",
    "slug": "Viktor",
    "lanes": [
      {
        "lane": "mid",
        "strongAgainst": [
          "Varus",
          "Vex",
          "Yasuo",
          "Katarina",
          "Twisted Fate",
          "Veigar"
        ],
        "weakAgainst": [
          "Ekko",
          "Fizz",
          "Zed",
          "Kassadin",
          "Ambessa",
          "Akali"
        ]
      },
      {
        "lane": "top",
        "strongAgainst": [
          "Yasuo",
          "Teemo",
          "Kayle",
          "Yone",
          "Dr. Mundo",
          "Vayne"
        ],
        "weakAgainst": [
          "Renekton",
          "Shen",
          "Riven",
          "Garen",
          "Vayne",
          "Jax"
        ]
      }
    ]
  },
  {
    "champion": "Ashe",
    "slug": "Ashe",
    "lanes": [
      {
        "lane": "bot",
        "strongAgainst": [
          "Zeri",
          "Kai&#8217;Sa",
          "Varus",
          "Miss Fortune",
          "Xayah",
          "Vayne"
        ],
        "weakAgainst": [
          "Caitlyn",
          "Draven",
          "Jhin",
          "Tristana",
          "Ezreal",
          "Lucian",
          "Zed",
          "Ziggs",
          "Yasuo",
          "Wukong",
          "Xayah",
          "Xin Zhao",
          "Vi",
          "Veigar",
          "Varus",
          "Vayne",
          "Twisted Fate",
          "Tryndamere",
          "Thresh",
          "Teemo",
          "Soraka",
          "Sona",
          "Singed",
          "Shyvana",
          "Shen",
          "Sett",
          "Seraphine",
          "Riven",
          "Rengar",
          "Renekton",
          "Rammus",
          "Rakan",
          "Pantheon",
          "Orianna",
          "Olaf",
          "Nunu & Willump",
          "Nasus",
          "Nami",
          "Morgana",
          "Miss Fortune",
          "Malphite",
          "Master Yi",
          "Lux",
          "Lulu",
          "Leona",
          "Lee Sin",
          "Kha&#8217;Zix",
          "Katarina",
          "Kayle",
          "Kennen",
          "Karma",
          "Kai&#8217;Sa",
          "Jayce",
          "Jinx",
          "Jarvan IV",
          "Graves",
          "Irelia",
          "Janna",
          "Gragas",
          "Garen",
          "Fizz",
          "Galio",
          "Fiora",
          "Evelynn",
          "Dr. Mundo",
          "Diana",
          "Camille",
          "Corki",
          "Darius",
          "Braum",
          "Aurelion Sol",
          "Blitzcrank",
          "Brand",
          "Ashe",
          "Annie",
          "Amumu",
          "Akshan",
          "Alistar",
          "Nautilus",
          "Ahri",
          "Akali",
          "Kassadin",
          "Sion",
          "Samira",
          "Yone",
          "Vex",
          "Warwick",
          "Gwen",
          "Kayn",
          "Aatrox",
          "Lillia",
          "Zoe",
          "Twitch",
          "Fiddlesticks",
          "Urgot",
          "Zac",
          "Zeri",
          "Aphelios",
          "Volibear",
          "Ornn",
          "Swain",
          "Hecarim",
          "Vladimir",
          "Nilah",
          "Sivir",
          "Zyra",
          "Talon",
          "Syndra",
          "Kindred",
          "Pyke",
          "Yuumi",
          "Ekko",
          "Jax",
          "Kalista",
          "Maokai",
          "Viego",
          "Milio",
          "Mordekaiser",
          "Lissandra",
          "Viktor",
          "Heimerdinger",
          "Ambessa",
          "Rumble",
          "Poppy",
          "Gnar",
          "Zilean",
          "Ryze"
        ]
      },
      {
        "lane": "support",
        "strongAgainst": [
          "Braum",
          "Nami",
          "Karma",
          "Alistar",
          "Janna",
          "Soraka"
        ],
        "weakAgainst": [
          "Blitzcrank",
          "Nautilus",
          "Seraphine",
          "Thresh",
          "Leona",
          "Sona"
        ]
      },
      {
        "lane": "top",
        "strongAgainst": [
          "Darius",
          "Kayle",
          "Gwen",
          "Akali",
          "Renekton",
          "Volibear"
        ],
        "weakAgainst": [
          "Jax",
          "Shen",
          "Ornn",
          "Warwick",
          "Vladimir",
          "Olaf"
        ]
      },
      {
        "lane": "mid",
        "strongAgainst": [
          "Corki",
          "Irelia",
          "Akali",
          "Aurelion Sol",
          "Malphite",
          "Galio"
        ],
        "weakAgainst": [
          "Ahri",
          "Kassadin",
          "Talon",
          "Lux",
          "Zed",
          "Fizz"
        ]
      }
    ]
  },
  {
    "champion": "Singed",
    "slug": "Singed",
    "lanes": [
      {
        "lane": "top",
        "strongAgainst": [
          "Jax",
          "Lee Sin",
          "Tryndamere",
          "Wukong",
          "Irelia",
          "Sion"
        ],
        "weakAgainst": [
          "Kennen",
          "Riven",
          "Fiora",
          "Urgot",
          "Warwick",
          "Darius"
        ]
      }
    ]
  },
  {
    "champion": "Orianna",
    "slug": "Orianna",
    "lanes": [
      {
        "lane": "mid",
        "strongAgainst": [
          "Annie",
          "Lux",
          "Kayle",
          "Fizz",
          "Akali",
          "Yasuo"
        ],
        "weakAgainst": [
          "Diana",
          "Gragas",
          "Ziggs",
          "Ahri",
          "Zed",
          "Syndra"
        ]
      },
      {
        "lane": "top",
        "strongAgainst": [
          "Varus",
          "Aatrox",
          "Urgot",
          "Yone",
          "Kennen",
          "Nasus"
        ],
        "weakAgainst": [
          "Ornn",
          "Wukong",
          "Jax",
          "Riven",
          "Sett",
          "Garen"
        ]
      },
      {
        "lane": "bot",
        "strongAgainst": [
          "Ezreal",
          "Ashe",
          "Aphelios",
          "Jinx",
          "Twitch",
          "Varus"
        ],
        "weakAgainst": [
          "Miss Fortune",
          "Tristana",
          "Lucian",
          "Jhin",
          "Draven",
          "Caitlyn"
        ]
      },
      {
        "lane": "support",
        "strongAgainst": [
          "Braum",
          "Karma",
          "Lux",
          "Nautilus",
          "Seraphine",
          "Lulu"
        ],
        "weakAgainst": [
          "Sona",
          "Rakan",
          "Alistar",
          "Thresh",
          "Zyra",
          "Pyke"
        ]
      }
    ]
  },
  {
    "champion": "Leona",
    "slug": "Leona",
    "lanes": [
      {
        "lane": "support",
        "strongAgainst": [
          "Blitzcrank",
          "Sona",
          "Lulu",
          "Nami",
          "Nautilus",
          "Soraka"
        ],
        "weakAgainst": [
          "Morgana",
          "Alistar",
          "Janna",
          "Karma",
          "Braum",
          "Thresh"
        ]
      },
      {
        "lane": "bot",
        "strongAgainst": [
          "Draven",
          "Varus",
          "Twitch",
          "Jinx",
          "Ezreal",
          "Aphelios"
        ],
        "weakAgainst": [
          "Samira",
          "Lucian",
          "Jhin",
          "Zeri",
          "Vayne",
          "Caitlyn"
        ]
      }
    ]
  },
  {
    "champion": "Pyke",
    "slug": "Pyke",
    "lanes": [
      {
        "lane": "support",
        "strongAgainst": [
          "Seraphine",
          "Soraka",
          "Sona",
          "Karma",
          "Lulu"
        ],
        "weakAgainst": [
          "Rakan",
          "Blitzcrank",
          "Leona",
          "Maokai",
          "Braum",
          "Morgana"
        ]
      },
      {
        "lane": "mid",
        "strongAgainst": [
          "Orianna",
          "Kai&#8217;Sa",
          "Twisted Fate",
          "Corki",
          "Irelia",
          "Lux"
        ],
        "weakAgainst": [
          "Fizz",
          "Ahri",
          "Akali",
          "Katarina",
          "Vladimir",
          "Malphite"
        ]
      },
      {
        "lane": "top",
        "strongAgainst": [
          "Teemo",
          "Shen",
          "Renekton",
          "Yasuo",
          "Jax",
          "Jayce"
        ],
        "weakAgainst": [
          "Garen",
          "Pantheon",
          "Riven",
          "Dr. Mundo",
          "Tryndamere",
          "Nasus"
        ]
      }
    ]
  },
  {
    "champion": "Gragas",
    "slug": "Gragas",
    "lanes": [
      {
        "lane": "top",
        "strongAgainst": [
          "Malphite",
          "Riven",
          "Shen",
          "Ornn",
          "Wukong",
          "Sion"
        ],
        "weakAgainst": [
          "Pantheon",
          "Aatrox",
          "Jax",
          "Darius",
          "Kennen",
          "Garen"
        ]
      },
      {
        "lane": "jungle",
        "strongAgainst": [
          "Xin Zhao",
          "Lillia",
          "Talon",
          "Jarvan IV",
          "Nunu & Willump",
          "Master Yi"
        ],
        "weakAgainst": [
          "Lee Sin",
          "Rengar",
          "Kha&#8217;Zix",
          "Viego",
          "Evelynn",
          "Diana"
        ]
      },
      {
        "lane": "mid",
        "strongAgainst": [
          "Orianna",
          "Katarina",
          "Kayle",
          "Ziggs",
          "Zed",
          "Yone"
        ],
        "weakAgainst": [
          "Yasuo",
          "Ahri",
          "Fizz",
          "Akali",
          "Lux",
          "Kassadin"
        ]
      },
      {
        "lane": "bot",
        "strongAgainst": [
          "Samira",
          "Ashe",
          "Jinx",
          "Zeri",
          "Varus",
          "Ezreal"
        ],
        "weakAgainst": [
          "Vayne",
          "Aphelios",
          "Kalista",
          "Jhin",
          "Twitch",
          "Kai&#8217;Sa"
        ]
      },
      {
        "lane": "support",
        "strongAgainst": [
          "Thresh",
          "Sona",
          "Seraphine",
          "Soraka",
          "Zyra",
          "Blitzcrank"
        ],
        "weakAgainst": [
          "Morgana",
          "Alistar",
          "Janna",
          "Nautilus",
          "Leona",
          "Lulu"
        ]
      }
    ]
  },
  {
    "champion": "Garen",
    "slug": "Garen",
    "lanes": [
      {
        "lane": "top",
        "strongAgainst": [
          "Nasus",
          "Akali",
          "Irelia",
          "Jax",
          "Dr. Mundo",
          "Yasuo"
        ],
        "weakAgainst": [
          "Darius",
          "Camille",
          "Kayle",
          "Fiora",
          "Shen",
          "Ornn"
        ]
      },
      {
        "lane": "jungle",
        "strongAgainst": [
          "Shyvana",
          "Wukong",
          "Hecarim",
          "Nunu & Willump",
          "Viego",
          "Amumu"
        ],
        "weakAgainst": [
          "Rengar",
          "Fiddlesticks",
          "Zac",
          "Master Yi",
          "Jarvan IV",
          "Kayn"
        ]
      },
      {
        "lane": "mid",
        "strongAgainst": [
          "Galio",
          "Diana",
          "Ekko",
          "Zed",
          "Yasuo",
          "Aurelion Sol"
        ],
        "weakAgainst": [
          "Swain",
          "Aatrox",
          "Annie",
          "Malphite",
          "Orianna",
          "Veigar"
        ]
      },
      {
        "lane": "bot",
        "strongAgainst": [
          "Miss Fortune",
          "Nilah",
          "Xayah",
          "Samira",
          "Ashe",
          "Jhin"
        ],
        "weakAgainst": [
          "Draven",
          "Swain",
          "Vayne",
          "Lucian",
          "Jinx",
          "Zeri"
        ]
      },
      {
        "lane": "support",
        "strongAgainst": [
          "Braum",
          "Rakan",
          "Pyke",
          "Blitzcrank",
          "Alistar",
          "Leona"
        ],
        "weakAgainst": [
          "Morgana",
          "Soraka",
          "Nami",
          "Lulu",
          "Nautilus",
          "Thresh"
        ]
      }
    ]
  },
  {
    "champion": "Tryndamere",
    "slug": "Tryndamere",
    "lanes": [
      {
        "lane": "top",
        "strongAgainst": [
          "Sion",
          "Irelia",
          "Olaf",
          "Jayce",
          "Dr. Mundo",
          "Ornn",
          "Rengar",
          "Shyvana",
          "Jax",
          "Kha&#8217;Zix",
          "Hecarim",
          "Wukong"
        ],
        "weakAgainst": [
          "Malphite",
          "Teemo",
          "Darius",
          "Renekton",
          "Camille",
          "Sett",
          "Rammus",
          "Diana",
          "Evelynn",
          "Kindred",
          "Warwick",
          "Pantheon"
        ]
      },
      {
        "lane": "mid",
        "strongAgainst": [
          "Katarina",
          "Irelia",
          "Yone",
          "Zed",
          "Syndra",
          "Yasuo"
        ],
        "weakAgainst": [
          "Fizz",
          "Kayle",
          "Ekko",
          "Zoe",
          "Gragas",
          "Lux"
        ]
      }
    ]
  },
  {
    "champion": "Kindred",
    "slug": "Kindred",
    "lanes": [
      {
        "lane": "jungle",
        "strongAgainst": [
          "Nunu & Willump",
          "Shyvana",
          "Viego",
          "Rengar",
          "Jarvan IV",
          "Ekko"
        ],
        "weakAgainst": [
          "Lee Sin",
          "Gragas",
          "Master Yi",
          "Evelynn",
          "Kha&#8217;Zix",
          "Vi"
        ]
      },
      {
        "lane": "bot",
        "strongAgainst": [
          "Jinx",
          "Kai&#8217;Sa",
          "Lucian",
          "Zeri",
          "Sivir"
        ],
        "weakAgainst": [
          "Vayne",
          "Tristana",
          "Nilah",
          "Ashe",
          "Samira",
          "Caitlyn"
        ]
      },
      {
        "lane": "mid",
        "strongAgainst": [
          "Veigar",
          "Irelia",
          "Yone",
          "Malphite",
          "Syndra",
          "Katarina"
        ],
        "weakAgainst": [
          "Talon",
          "Zoe",
          "Fizz",
          "Orianna",
          "Corki",
          "Pantheon"
        ]
      },
      {
        "lane": "support",
        "strongAgainst": [
          "Nami",
          "Sona",
          "Seraphine",
          "Yuumi",
          "Lulu",
          "Soraka"
        ],
        "weakAgainst": [
          "Alistar",
          "Blitzcrank",
          "Nautilus",
          "Rakan",
          "Janna",
          "Malphite"
        ]
      }
    ]
  },
  {
    "champion": "Vel'Koz",
    "slug": "Velkoz",
    "lanes": [
      {
        "lane": "mid",
        "strongAgainst": [
          "Twisted Fate",
          "Veigar",
          "Corki",
          "Lux",
          "Ryze",
          "Viktor"
        ],
        "weakAgainst": [
          "Yone",
          "Irelia",
          "Zed",
          "Kassadin",
          "Fizz",
          "Ekko"
        ]
      },
      {
        "lane": "support",
        "strongAgainst": [
          "Brand",
          "Alistar",
          "Yuumi",
          "Soraka",
          "Rakan",
          "Braum"
        ],
        "weakAgainst": [
          "Seraphine",
          "Sona",
          "Morgana",
          "Karma",
          "Lulu",
          "Zyra"
        ]
      }
    ]
  },
  {
    "champion": "Fizz",
    "slug": "Fizz",
    "lanes": [
      {
        "lane": "mid",
        "strongAgainst": [
          "Twisted Fate",
          "Brand",
          "Syndra",
          "Aurelion Sol",
          "Katarina",
          "Zoe"
        ],
        "weakAgainst": [
          "Diana",
          "Gragas",
          "Kassadin",
          "Akali",
          "Kayle",
          "Annie"
        ]
      },
      {
        "lane": "top",
        "strongAgainst": [
          "Karma",
          "Jayce",
          "Nasus",
          "Swain",
          "Kennen",
          "Ornn"
        ],
        "weakAgainst": [
          "Dr. Mundo",
          "Darius",
          "Olaf",
          "Tryndamere",
          "Sett",
          "Wukong"
        ]
      },
      {
        "lane": "bot",
        "strongAgainst": [
          "Miss Fortune",
          "Jinx",
          "Kalista",
          "Zeri",
          "Samira",
          "Jhin"
        ],
        "weakAgainst": [
          "Draven",
          "Ziggs",
          "Vayne",
          "Aphelios",
          "Tristana",
          "Nilah"
        ]
      },
      {
        "lane": "support",
        "strongAgainst": [
          "Braum",
          "Leona",
          "Nautilus",
          "Maokai",
          "Nami"
        ],
        "weakAgainst": [
          "Rakan",
          "Lulu",
          "Lux",
          "Thresh",
          "Janna",
          "Sona"
        ]
      },
      {
        "lane": "jungle",
        "strongAgainst": [
          "Ekko",
          "Fiddlesticks",
          "Shyvana",
          "Volibear",
          "Xin Zhao",
          "Lee Sin"
        ],
        "weakAgainst": [
          "Kayn",
          "Evelynn",
          "Vi",
          "Warwick",
          "Kha&#8217;Zix",
          "Master Yi"
        ]
      }
    ]
  },
  {
    "champion": "Pantheon",
    "slug": "Pantheon",
    "lanes": [
      {
        "lane": "top",
        "strongAgainst": [
          "Riven",
          "Teemo",
          "Jax",
          "Yasuo",
          "Yone",
          "Gwen"
        ],
        "weakAgainst": [
          "Fiora",
          "Malphite",
          "Camille",
          "Olaf",
          "Shen",
          "Jayce"
        ]
      },
      {
        "lane": "jungle",
        "strongAgainst": [
          "Nunu & Willump",
          "Master Yi",
          "Jarvan IV",
          "Jax",
          "Xin Zhao",
          "Lee Sin"
        ],
        "weakAgainst": [
          "Rammus",
          "Vi",
          "Diana",
          "Rengar",
          "Zac",
          "Shyvana"
        ]
      },
      {
        "lane": "mid",
        "strongAgainst": [
          "Fizz",
          "Galio",
          "Yasuo",
          "Yone",
          "Zed",
          "Irelia"
        ],
        "weakAgainst": [
          "Orianna",
          "Ahri",
          "Zoe",
          "Syndra",
          "Jayce",
          "Swain"
        ]
      }
    ]
  },
  {
    "champion": "Sion",
    "slug": "Sion",
    "lanes": [
      {
        "lane": "top",
        "strongAgainst": [
          "Tryndamere",
          "Teemo",
          "Irelia",
          "Malphite",
          "Kennen",
          "Vladimir"
        ],
        "weakAgainst": [
          "Pantheon",
          "Garen",
          "Nasus",
          "Darius",
          "Riven",
          "Jax"
        ]
      },
      {
        "lane": "support",
        "strongAgainst": [
          "Maokai",
          "Lux",
          "Leona",
          "Karma",
          "Nami"
        ],
        "weakAgainst": [
          "Morgana",
          "Janna",
          "Braum",
          "Thresh",
          "Alistar",
          "Lulu"
        ]
      },
      {
        "lane": "mid",
        "strongAgainst": [
          "Annie",
          "Akali",
          "Katarina",
          "Irelia",
          "Talon",
          "Zed"
        ],
        "weakAgainst": [
          "Morgana",
          "Ahri",
          "Swain",
          "Aatrox",
          "Brand",
          "Aurelion Sol"
        ]
      },
      {
        "lane": "jungle",
        "strongAgainst": [
          "Kindred",
          "Amumu",
          "Warwick",
          "Lee Sin",
          "Viego",
          "Zac"
        ],
        "weakAgainst": [
          "Ekko",
          "Hecarim",
          "Gragas",
          "Lillia",
          "Jarvan IV",
          "Rammus"
        ]
      }
    ]
  },
  {
    "champion": "Heimerdinger",
    "slug": "Heimerdinger",
    "lanes": [
      {
        "lane": "top",
        "strongAgainst": [
          "Teemo",
          "Yone",
          "Akali",
          "Jayce",
          "Yasuo",
          "Gragas"
        ],
        "weakAgainst": [
          "Nasus",
          "Irelia",
          "Camille",
          "Garen",
          "Fiora",
          "Renekton"
        ]
      },
      {
        "lane": "mid",
        "strongAgainst": [
          "Katarina",
          "Malphite",
          "Yone",
          "Vex",
          "Irelia",
          "Akali"
        ],
        "weakAgainst": [
          "Zoe",
          "Veigar",
          "Ekko",
          "Syndra",
          "Lux",
          "Zed"
        ]
      },
      {
        "lane": "support",
        "strongAgainst": [
          "Alistar",
          "Pyke",
          "Morgana",
          "Karma",
          "Blitzcrank"
        ],
        "weakAgainst": [
          "Sona",
          "Seraphine",
          "Soraka",
          "Nami",
          "Brand",
          "Janna"
        ]
      },
      {
        "lane": "bot",
        "strongAgainst": [
          "Jinx",
          "Samira",
          "Miss Fortune",
          "Varus",
          "Nilah",
          "Twitch"
        ],
        "weakAgainst": [
          "Jhin",
          "Vayne",
          "Ashe",
          "Caitlyn",
          "Tristana",
          "Xayah"
        ]
      }
    ]
  },
  {
    "champion": "Vi",
    "slug": "Vi",
    "lanes": [
      {
        "lane": "jungle",
        "strongAgainst": [
          "Jarvan IV",
          "Shyvana",
          "Amumu",
          "Master Yi",
          "Wukong",
          "Evelynn"
        ],
        "weakAgainst": [
          "Lee Sin",
          "Xin Zhao",
          "Kha&#8217;Zix",
          "Warwick",
          "Viego",
          "Diana"
        ]
      },
      {
        "lane": "top",
        "strongAgainst": [
          "Malphite",
          "Nasus",
          "Jayce",
          "Jarvan IV",
          "Renekton",
          "Vladimir"
        ],
        "weakAgainst": [
          "Riven",
          "Pantheon",
          "Teemo",
          "Darius",
          "Jax",
          "Olaf"
        ]
      }
    ]
  },
  {
    "champion": "Syndra",
    "slug": "Syndra",
    "lanes": [
      {
        "lane": "mid",
        "strongAgainst": [
          "Zoe",
          "Orianna",
          "Akshan",
          "Yone",
          "Jayce",
          "Brand"
        ],
        "weakAgainst": [
          "Fizz",
          "Kassadin",
          "Lux",
          "Yasuo",
          "Kayle",
          "Talon"
        ]
      },
      {
        "lane": "top",
        "strongAgainst": [
          "Gragas",
          "Sett",
          "Yone",
          "Jayce",
          "Pantheon",
          "Singed"
        ],
        "weakAgainst": [
          "Shen",
          "Fiora",
          "Teemo",
          "Tryndamere",
          "Kayle",
          "Yasuo"
        ]
      },
      {
        "lane": "bot",
        "strongAgainst": [
          "Jinx",
          "Lucian",
          "Kai&#8217;Sa",
          "Miss Fortune",
          "Xayah",
          "Varus"
        ],
        "weakAgainst": [
          "Ashe",
          "Jhin",
          "Varus",
          "Caitlyn",
          "Tristana",
          "Ezreal"
        ]
      },
      {
        "lane": "support",
        "strongAgainst": [
          "Alistar",
          "Yuumi",
          "Brand",
          "Rakan",
          "Sona"
        ],
        "weakAgainst": [
          "Braum",
          "Nautilus",
          "Blitzcrank",
          "Lulu",
          "Janna",
          "Seraphine"
        ]
      }
    ]
  },
  {
    "champion": "Nasus",
    "slug": "Nasus",
    "lanes": [
      {
        "lane": "top",
        "strongAgainst": [
          "Irelia",
          "Zed",
          "Wukong",
          "Kayle",
          "Jax",
          "Shen"
        ],
        "weakAgainst": [
          "Darius",
          "Teemo",
          "Pantheon",
          "Olaf",
          "Garen",
          "Camille"
        ]
      },
      {
        "lane": "mid",
        "strongAgainst": [
          "Yasuo",
          "Corki",
          "Ekko",
          "Zoe",
          "Irelia",
          "Kassadin"
        ],
        "weakAgainst": [
          "Akali",
          "Zed",
          "Fizz",
          "Aurelion Sol",
          "Ahri",
          "Orianna"
        ]
      }
    ]
  },
  {
    "champion": "Camille",
    "slug": "Camille",
    "lanes": [
      {
        "lane": "top",
        "strongAgainst": [
          "Garen",
          "Yone",
          "Wukong",
          "Ornn",
          "Irelia",
          "Aatrox"
        ],
        "weakAgainst": [
          "Renekton",
          "Darius",
          "Fiora",
          "Riven",
          "Nasus",
          "Shen"
        ]
      },
      {
        "lane": "mid",
        "strongAgainst": [
          "Lucian",
          "Fizz",
          "Syndra",
          "Yasuo",
          "Orianna",
          "Akshan"
        ],
        "weakAgainst": [
          "Ekko",
          "Kayle",
          "Ahri",
          "Malphite",
          "Gragas",
          "Vex"
        ]
      },
      {
        "lane": "jungle",
        "strongAgainst": [
          "Shyvana",
          "Kha&#8217;Zix",
          "Evelynn",
          "Viego",
          "Vi",
          "Jarvan IV"
        ],
        "weakAgainst": [
          "Rammus",
          "Zac",
          "Gragas",
          "Hecarim",
          "Warwick",
          "Xin Zhao"
        ]
      }
    ]
  },
  {
    "champion": "Graves",
    "slug": "Graves",
    "lanes": [
      {
        "lane": "jungle",
        "strongAgainst": [
          "Master Yi",
          "Wukong",
          "Jarvan IV",
          "Lee Sin",
          "Hecarim",
          "Amumu"
        ],
        "weakAgainst": [
          "Evelynn",
          "Vi",
          "Rengar",
          "Kha&#8217;Zix",
          "Rammus",
          "Fiddlesticks"
        ]
      },
      {
        "lane": "mid",
        "strongAgainst": [
          "Annie",
          "Galio",
          "Talon",
          "Akali",
          "Kassadin",
          "Katarina"
        ],
        "weakAgainst": [
          "Zed",
          "Irelia",
          "Jayce",
          "Fizz",
          "Vex",
          "Aurelion Sol"
        ]
      },
      {
        "lane": "top",
        "strongAgainst": [
          "Darius",
          "Riven",
          "Vayne",
          "Garen",
          "Nasus",
          "Nunu & Willump"
        ],
        "weakAgainst": [
          "Fiora",
          "Renekton",
          "Gwen",
          "Wukong",
          "Pantheon",
          "Camille"
        ]
      },
      {
        "lane": "bot",
        "strongAgainst": [
          "Varus",
          "Ezreal",
          "Vayne",
          "Ashe",
          "Lucian",
          "Jinx"
        ],
        "weakAgainst": [
          "Caitlyn",
          "Miss Fortune",
          "Draven",
          "Tristana",
          "Jhin",
          "Samira"
        ]
      }
    ]
  },
  {
    "champion": "Swain",
    "slug": "Swain",
    "lanes": [
      {
        "lane": "mid",
        "strongAgainst": [
          "Akali",
          "Vex",
          "Talon",
          "Kayle",
          "Kassadin",
          "Katarina"
        ],
        "weakAgainst": [
          "Ahri",
          "Jayce",
          "Akshan",
          "Fizz",
          "Yone",
          "Galio"
        ]
      },
      {
        "lane": "top",
        "strongAgainst": [
          "Sion",
          "Teemo",
          "Irelia",
          "Malphite",
          "Ornn",
          "Volibear"
        ],
        "weakAgainst": [
          "Vladimir",
          "Olaf",
          "Singed",
          "Sett",
          "Wukong",
          "Dr. Mundo"
        ]
      },
      {
        "lane": "support",
        "strongAgainst": [
          "Rakan",
          "Pantheon",
          "Seraphine",
          "Alistar",
          "Leona"
        ],
        "weakAgainst": [
          "Brand",
          "Lux",
          "Lulu",
          "Morgana",
          "Janna",
          "Sona"
        ]
      },
      {
        "lane": "bot",
        "strongAgainst": [
          "Lucian",
          "Jhin",
          "Ezreal",
          "Kai&#8217;Sa",
          "Aphelios",
          "Sivir"
        ],
        "weakAgainst": [
          "Caitlyn",
          "Xayah",
          "Jinx",
          "Varus",
          "Twitch",
          "Kalista"
        ]
      }
    ]
  },
  {
    "champion": "Nunu",
    "slug": "Nunu",
    "lanes": [
      {
        "lane": "jungle",
        "strongAgainst": [
          "Wukong",
          "Shyvana",
          "Jax",
          "Graves",
          "Rammus",
          "Amumu"
        ],
        "weakAgainst": [
          "Lee Sin",
          "Vi",
          "Kha&#8217;Zix",
          "Diana",
          "Evelynn",
          "Gragas"
        ]
      },
      {
        "lane": "top",
        "strongAgainst": [
          "Jax",
          "Teemo",
          "Renekton",
          "Singed",
          "Fiora",
          "Rammus"
        ],
        "weakAgainst": [
          "Riven",
          "Nasus",
          "Tryndamere",
          "Master Yi",
          "Shen",
          "Yasuo"
        ]
      },
      {
        "lane": "mid",
        "strongAgainst": [
          "Zed",
          "Kennen",
          "Veigar",
          "Fizz",
          "Talon",
          "Katarina"
        ],
        "weakAgainst": [
          "Twisted Fate",
          "Galio",
          "Irelia",
          "Zoe",
          "Ziggs",
          "Brand"
        ]
      },
      {
        "lane": "bot",
        "strongAgainst": [
          "Vayne",
          "Draven",
          "Jinx",
          "Corki",
          "Varus",
          "Twitch"
        ],
        "weakAgainst": [
          "Nilah",
          "Aphelios",
          "Xayah",
          "Samira",
          "Lucian",
          "Jhin"
        ]
      },
      {
        "lane": "support",
        "strongAgainst": [
          "Sona",
          "Soraka",
          "Nautilus",
          "Braum",
          "Leona",
          "Nami"
        ],
        "weakAgainst": [
          "Morgana",
          "Lux",
          "Karma",
          "Seraphine",
          "Zyra",
          "Lulu"
        ]
      }
    ]
  },
  {
    "champion": "Viego",
    "slug": "Viego",
    "lanes": [
      {
        "lane": "jungle",
        "strongAgainst": [
          "Kayn",
          "Graves",
          "Jarvan IV",
          "Diana",
          "Shyvana",
          "Xin Zhao"
        ],
        "weakAgainst": [
          "Rammus",
          "Zac",
          "Evelynn",
          "Warwick",
          "Vi",
          "Amumu"
        ]
      },
      {
        "lane": "top",
        "strongAgainst": [
          "Gragas",
          "Yasuo",
          "Teemo",
          "Sett",
          "Sion",
          "Rengar"
        ],
        "weakAgainst": [
          "Olaf",
          "Nasus",
          "Tryndamere",
          "Shen",
          "Riven",
          "Camille"
        ]
      },
      {
        "lane": "mid",
        "strongAgainst": [
          "Malphite",
          "Fizz",
          "Vex",
          "Veigar",
          "Kassadin",
          "Ekko"
        ],
        "weakAgainst": [
          "Syndra",
          "Aurelion Sol",
          "Veigar",
          "Twisted Fate",
          "Lux",
          "Vladimir"
        ]
      }
    ]
  },
  {
    "champion": "Sona",
    "slug": "Sona",
    "lanes": [
      {
        "lane": "support",
        "strongAgainst": [
          "Morgana",
          "Lulu",
          "Nami",
          "Janna",
          "Yuumi",
          "Soraka"
        ],
        "weakAgainst": [
          "Blitzcrank",
          "Leona",
          "Thresh",
          "Nautilus",
          "Zyra",
          "Alistar"
        ]
      },
      {
        "lane": "bot",
        "strongAgainst": [
          "Vayne",
          "Jinx",
          "Kalista",
          "Draven",
          "Miss Fortune",
          "Kai&#8217;Sa"
        ],
        "weakAgainst": [
          "Miss Fortune",
          "Caitlyn",
          "Ezreal",
          "Jhin",
          "Varus",
          "Ashe"
        ]
      },
      {
        "lane": "mid",
        "strongAgainst": [
          "Veigar",
          "Lux",
          "Akali",
          "Morgana",
          "Zed",
          "Fizz"
        ],
        "weakAgainst": [
          "Fizz",
          "Kayle",
          "Yasuo",
          "Pantheon",
          "Annie",
          "Ahri"
        ]
      }
    ]
  },
  {
    "champion": "Dr. Mundo",
    "slug": "DrMundo",
    "lanes": [
      {
        "lane": "jungle",
        "strongAgainst": [
          "Darius",
          "Vayne",
          "Gwen",
          "Fiora",
          "Camille",
          "Zac",
          "Amumu",
          "Olaf",
          "Jax",
          "Shyvana",
          "Diana",
          "Wukong",
          "Caitlyn",
          "Jinx",
          "Ezreal",
          "Jhin",
          "Sivir"
        ],
        "weakAgainst": [
          "Gragas",
          "Xin Zhao",
          "Kayn",
          "Viego",
          "Lillia",
          "Ekko",
          "Vayne",
          "Lucian",
          "Ashe",
          "Xayah",
          "Kai&#8217;Sa",
          "Zeri"
        ]
      },
      {
        "lane": "top",
        "strongAgainst": [
          "Wukong",
          "Irelia",
          "Jax",
          "Singed",
          "Renekton",
          "Tryndamere"
        ],
        "weakAgainst": [
          "Darius",
          "Vayne",
          "Gwen",
          "Fiora",
          "Camille",
          "Zac"
        ]
      },
      {
        "lane": "mid",
        "strongAgainst": [
          "Orianna",
          "Akali",
          "Zed",
          "Yone",
          "Irelia",
          "Jayce"
        ],
        "weakAgainst": [
          "Annie",
          "Katarina",
          "Karma",
          "Ahri",
          "Ekko",
          "Fizz"
        ]
      },
      {
        "lane": "support",
        "strongAgainst": [
          "Thresh",
          "Sona",
          "Nami",
          "Shen",
          "Yuumi"
        ],
        "weakAgainst": [
          "Lulu",
          "Leona",
          "Zyra",
          "Brand",
          "Alistar",
          "Rakan"
        ]
      }
    ]
  },
  {
    "champion": "Corki",
    "slug": "Corki",
    "lanes": [
      {
        "lane": "mid",
        "strongAgainst": [
          "Ziggs",
          "Katarina",
          "Akali",
          "Orianna",
          "Yasuo",
          "Ekko"
        ],
        "weakAgainst": [
          "Zed",
          "Fizz",
          "Lux",
          "Ahri",
          "Brand",
          "Syndra"
        ]
      },
      {
        "lane": "bot",
        "strongAgainst": [
          "Tristana",
          "Vayne",
          "Ezreal",
          "Jinx",
          "Miss Fortune",
          "Nilah"
        ],
        "weakAgainst": [
          "Caitlyn",
          "Draven",
          "Ashe",
          "Varus",
          "Lucian",
          "Sivir"
        ]
      },
      {
        "lane": "support",
        "strongAgainst": [
          "Blitzcrank",
          "Seraphine",
          "Nami",
          "Yuumi",
          "Soraka"
        ],
        "weakAgainst": [
          "Rakan",
          "Leona",
          "Braum",
          "Thresh",
          "Lulu",
          "Alistar"
        ]
      },
      {
        "lane": "top",
        "strongAgainst": [
          "Riven",
          "Nunu & Willump",
          "Pantheon",
          "Garen",
          "Yasuo",
          "Rammus"
        ],
        "weakAgainst": [
          "Nasus",
          "Jax",
          "Teemo",
          "Wukong",
          "Zed",
          "Maokai"
        ]
      },
      {
        "lane": "jungle",
        "strongAgainst": [
          "Nunu & Willump",
          "Amumu",
          "Evelynn",
          "Gragas",
          "Jarvan IV",
          "Xin Zhao"
        ],
        "weakAgainst": [
          "Lee Sin",
          "Hecarim",
          "Warwick",
          "Viego",
          "Master Yi",
          "Kayn"
        ]
      }
    ]
  },
  {
    "champion": "Soraka",
    "slug": "Soraka",
    "lanes": [
      {
        "lane": "support",
        "strongAgainst": [
          "Braum",
          "Lulu",
          "Nunu & Willump",
          "Rakan",
          "Milio",
          "Brand"
        ],
        "weakAgainst": [
          "Blitzcrank",
          "Thresh",
          "Leona",
          "Pyke",
          "Nautilus",
          "Alistar"
        ]
      },
      {
        "lane": "bot",
        "strongAgainst": [
          "Kalista",
          "Jinx",
          "Zeri",
          "Kai&#8217;Sa",
          "Ezreal",
          "Nilah"
        ],
        "weakAgainst": [
          "Lucian",
          "Caitlyn",
          "Samira",
          "Jhin",
          "Aphelios",
          "Ashe"
        ]
      }
    ]
  },
  {
    "champion": "Kassadin",
    "slug": "Kassadin",
    "lanes": [
      {
        "lane": "mid",
        "strongAgainst": [
          "Katarina",
          "Brand",
          "Veigar",
          "Ahri",
          "Annie",
          "Zoe"
        ],
        "weakAgainst": [
          "Zed",
          "Yasuo",
          "Riven",
          "Yone",
          "Ekko",
          "Jayce"
        ]
      },
      {
        "lane": "top",
        "strongAgainst": [
          "Fizz",
          "Diana",
          "Singed",
          "Jax",
          "Shen",
          "Garen"
        ],
        "weakAgainst": [
          "Irelia",
          "Yasuo",
          "Fiora",
          "Vi",
          "Riven",
          "Wukong"
        ]
      }
    ]
  },
  {
    "champion": "Rakan",
    "slug": "Rakan",
    "lanes": [
      {
        "lane": "support",
        "strongAgainst": [
          "Nami",
          "Blitzcrank",
          "Lucian",
          "Soraka",
          "Miss Fortune",
          "Thresh"
        ],
        "weakAgainst": [
          "Lulu",
          "Leona",
          "Janna",
          "Alistar",
          "Karma",
          "Veigar"
        ]
      }
    ]
  },
  {
    "champion": "Sett",
    "slug": "Sett",
    "lanes": [
      {
        "lane": "top",
        "strongAgainst": [
          "Yasuo",
          "Fiora",
          "Rengar",
          "Irelia",
          "Jayce",
          "Teemo",
          "Nami",
          "Blitzcrank",
          "Yuumi",
          "Nautilus",
          "Sona",
          "Katarina"
        ],
        "weakAgainst": [
          "Malphite",
          "Renekton",
          "Garen",
          "Pantheon",
          "Singed",
          "Volibear",
          "Karma",
          "Seraphine",
          "Janna",
          "Sona",
          "Leona"
        ]
      },
      {
        "lane": "jungle",
        "strongAgainst": [
          "Rengar",
          "Shyvana",
          "Ekko",
          "Fiddlesticks",
          "Diana",
          "Wukong"
        ],
        "weakAgainst": [
          "Rammus",
          "Kayn",
          "Master Yi",
          "Kha&#8217;Zix",
          "Lillia",
          "Zac"
        ]
      },
      {
        "lane": "mid",
        "strongAgainst": [
          "Diana",
          "Katarina",
          "Ekko",
          "Yone",
          "Akali",
          "Yasuo"
        ],
        "weakAgainst": [
          "Swain",
          "Zoe",
          "Ahri",
          "Ziggs",
          "Veigar",
          "Vladimir"
        ]
      },
      {
        "lane": "bot",
        "strongAgainst": [
          "Zeri",
          "Draven",
          "Lucian",
          "Miss Fortune",
          "Varus",
          "Caitlyn"
        ],
        "weakAgainst": [
          "Sivir",
          "Twitch",
          "Jhin",
          "Vayne",
          "Tristana",
          "Kai&#8217;Sa"
        ]
      }
    ]
  },
  {
    "champion": "Aurora",
    "slug": "Aurora",
    "lanes": [
      {
        "lane": "mid",
        "strongAgainst": [
          "Yone",
          "Ryze",
          "Corki",
          "Lissandra",
          "Viktor",
          "Kassadin"
        ],
        "weakAgainst": [
          "Vex",
          "Talon",
          "Kayle",
          "Ekko",
          "Zoe",
          "Katarina"
        ]
      },
      {
        "lane": "bot",
        "strongAgainst": [
          "Kalista",
          "Aphelios",
          "Xayah",
          "Ezreal",
          "Nilah",
          "Ashe"
        ],
        "weakAgainst": [
          "Tristana",
          "Lucian",
          "Sivir",
          "Ziggs",
          "Draven",
          "Vayne"
        ]
      },
      {
        "lane": "support",
        "strongAgainst": [
          "Brand",
          "Blitzcrank",
          "Lissandra",
          "Leona",
          "Braum"
        ],
        "weakAgainst": [
          "Sona",
          "Zyra",
          "Yuumi",
          "Seraphine",
          "Morgana",
          "Nautilus"
        ]
      }
    ]
  },
  {
    "champion": "Vayne",
    "slug": "Vayne",
    "lanes": [
      {
        "lane": "top",
        "strongAgainst": [
          "Renekton",
          "Darius",
          "Nasus",
          "Garen",
          "Shen",
          "Riven",
          "Xin Zhao",
          "Maokai",
          "Nunu & Willump",
          "Jarvan IV",
          "Volibear",
          "Vi"
        ],
        "weakAgainst": [
          "Pantheon",
          "Teemo",
          "Malphite",
          "Akshan",
          "Jayce",
          "Vladimir",
          "Rammus",
          "Master Yi",
          "Kha&#8217;Zix",
          "Rengar",
          "Kayn",
          "Evelynn"
        ]
      },
      {
        "lane": "bot",
        "strongAgainst": [
          "Ezreal",
          "Jhin",
          "Miss Fortune",
          "Xayah",
          "Kalista",
          "Kai&#8217;Sa"
        ],
        "weakAgainst": [
          "Caitlyn",
          "Draven",
          "Varus",
          "Ashe",
          "Tristana",
          "Graves"
        ]
      },
      {
        "lane": "support",
        "strongAgainst": [
          "Alistar",
          "Braum",
          "Shen",
          "Leona",
          "Nautilus",
          "Blitzcrank"
        ],
        "weakAgainst": [
          "Soraka",
          "Sona",
          "Janna",
          "Morgana",
          "Thresh"
        ]
      },
      {
        "lane": "mid",
        "strongAgainst": [
          "Kassadin",
          "Irelia",
          "Nasus",
          "Sett",
          "Galio",
          "Gragas"
        ],
        "weakAgainst": [
          "Pantheon",
          "Malphite",
          "Veigar",
          "Tristana",
          "Zoe",
          "Ahri"
        ]
      }
    ]
  },
  {
    "champion": "Blitzcrank",
    "slug": "Blitzcrank",
    "lanes": [
      {
        "lane": "support",
        "strongAgainst": [
          "Sona",
          "Soraka",
          "Nami",
          "Lulu",
          "Yuumi",
          "Janna"
        ],
        "weakAgainst": [
          "Leona",
          "Alistar",
          "Morgana",
          "Thresh",
          "Braum",
          "Rakan"
        ]
      },
      {
        "lane": "bot",
        "strongAgainst": [
          "Draven",
          "Varus",
          "Ashe",
          "Jinx",
          "Nilah"
        ],
        "weakAgainst": [
          "Ezreal",
          "Lucian",
          "Tristana",
          "Caitlyn",
          "Jhin"
        ]
      },
      {
        "lane": "top",
        "strongAgainst": [
          "Renekton",
          "Wukong",
          "Jax",
          "Nasus",
          "Fiora",
          "Teemo"
        ],
        "weakAgainst": [
          "Garen",
          "Darius",
          "Yasuo",
          "Zac",
          "Dr. Mundo"
        ]
      },
      {
        "lane": "mid",
        "strongAgainst": [
          "Katarina",
          "Orianna",
          "Veigar",
          "Annie",
          "Akali",
          "Talon"
        ],
        "weakAgainst": [
          "Lux",
          "Zed",
          "Gragas",
          "Ekko",
          "Jayce",
          "Yasuo"
        ]
      }
    ]
  },
  {
    "champion": "Vex",
    "slug": "Vex",
    "lanes": [
      {
        "lane": "mid",
        "strongAgainst": [
          "Annie",
          "Varus",
          "Fizz",
          "Orianna",
          "Lux",
          "Yone"
        ],
        "weakAgainst": [
          "Pantheon",
          "Galio",
          "Veigar",
          "Kassadin",
          "Katarina",
          "Kayle"
        ]
      }
    ]
  },
  {
    "champion": "Galio",
    "slug": "Galio",
    "lanes": [
      {
        "lane": "mid",
        "strongAgainst": [
          "Brand",
          "Malphite",
          "Veigar",
          "Katarina",
          "Fizz",
          "Diana"
        ],
        "weakAgainst": [
          "Yasuo",
          "Akali",
          "Orianna",
          "Ahri",
          "Vex",
          "Syndra"
        ]
      },
      {
        "lane": "top",
        "strongAgainst": [
          "Singed",
          "Renekton",
          "Teemo",
          "Kennen",
          "Galio",
          "Kayle"
        ],
        "weakAgainst": [
          "Malphite",
          "Jax",
          "Riven",
          "Pantheon",
          "Sett",
          "Urgot"
        ]
      },
      {
        "lane": "support",
        "strongAgainst": [
          "Thresh",
          "Morgana",
          "Sona",
          "Soraka",
          "Seraphine",
          "Blitzcrank"
        ],
        "weakAgainst": [
          "Alistar",
          "Lulu",
          "Janna",
          "Braum",
          "Zyra",
          "Lux"
        ]
      }
    ]
  },
  {
    "champion": "Zeri",
    "slug": "Zeri",
    "lanes": [
      {
        "lane": "bot",
        "strongAgainst": [
          "Miss Fortune",
          "Ezreal",
          "Xayah",
          "Kai&#8217;Sa",
          "Jinx",
          "Ashe"
        ],
        "weakAgainst": [
          "Draven",
          "Tristana",
          "Jhin",
          "Caitlyn",
          "Vayne",
          "Samira"
        ]
      }
    ]
  },
  {
    "champion": "Twisted Fate",
    "slug": "TwistedFate",
    "lanes": [
      {
        "lane": "mid",
        "strongAgainst": [
          "Dr. Mundo",
          "Jax",
          "Riven",
          "Zac",
          "Gragas",
          "Shyvana",
          "Evelynn",
          "Ziggs",
          "Annie",
          "Karma",
          "Zoe",
          "Orianna"
        ],
        "weakAgainst": [
          "Fizz",
          "Diana",
          "Ahri",
          "Yasuo",
          "Akali",
          "Veigar",
          "Brand",
          "Kha&#8217;Zix",
          "Rengar",
          "Pantheon",
          "Warwick",
          "Jarvan IV"
        ]
      },
      {
        "lane": "bot",
        "strongAgainst": [
          "Lucian",
          "Ezreal",
          "Tristana",
          "Draven",
          "Twitch",
          "Ashe"
        ],
        "weakAgainst": [
          "Nilah",
          "Tristana",
          "Miss Fortune",
          "Xayah",
          "Jinx",
          "Kai&#8217;Sa"
        ]
      }
    ]
  },
  {
    "champion": "Lulu",
    "slug": "Lulu",
    "lanes": [
      {
        "lane": "support",
        "strongAgainst": [
          "Thresh",
          "Nami",
          "Alistar",
          "Morgana",
          "Janna",
          "Braum"
        ],
        "weakAgainst": [
          "Sona",
          "Soraka",
          "Blitzcrank",
          "Rakan",
          "Karma",
          "Leona"
        ]
      },
      {
        "lane": "mid",
        "strongAgainst": [
          "Katarina",
          "Akali",
          "Zed",
          "Fizz",
          "Kassadin",
          "Syndra"
        ],
        "weakAgainst": [
          "Diana",
          "Annie",
          "Brand",
          "Vex",
          "Ekko",
          "Yasuo"
        ]
      }
    ]
  },
  {
    "champion": "Lissandra",
    "slug": "Lissandra",
    "lanes": [
      {
        "lane": "mid",
        "strongAgainst": [
          "Yone",
          "Akshan",
          "Twisted Fate",
          "Yasuo",
          "Katarina",
          "Fizz"
        ],
        "weakAgainst": [
          "Vex",
          "Lux",
          "Malphite",
          "Zed",
          "Kassadin",
          "Varus"
        ]
      },
      {
        "lane": "top",
        "strongAgainst": [
          "Singed",
          "Gwen",
          "Dr. Mundo",
          "Ornn",
          "Riven",
          "Aatrox"
        ],
        "weakAgainst": [
          "Olaf",
          "Jayce",
          "Vladimir",
          "Shen",
          "Mordekaiser",
          "Aurelion Sol"
        ]
      },
      {
        "lane": "support",
        "strongAgainst": [
          "Pyke",
          "Leona",
          "Alistar",
          "Sona",
          "Zyra",
          "Braum"
        ],
        "weakAgainst": [
          "Karma",
          "Lulu",
          "Nami",
          "Janna",
          "Yuumi"
        ]
      }
    ]
  },
  {
    "champion": "Fiddlestics",
    "slug": "Fiddlesticks",
    "lanes": [
      {
        "lane": "jungle",
        "strongAgainst": [
          "Kayn",
          "Jarvan IV",
          "Wukong",
          "Lee Sin",
          "Jax",
          "Rammus"
        ],
        "weakAgainst": [
          "Shyvana",
          "Vi",
          "Evelynn",
          "Ekko",
          "Xin Zhao",
          "Zac"
        ]
      },
      {
        "lane": "top",
        "strongAgainst": [
          "Shen",
          "Vayne",
          "Gragas",
          "Nasus",
          "Camille",
          "Teemo"
        ],
        "weakAgainst": [
          "Kennen",
          "Ornn",
          "Dr. Mundo",
          "Yasuo",
          "Tryndamere",
          "Zac"
        ]
      },
      {
        "lane": "mid",
        "strongAgainst": [
          "Lux",
          "Vladimir",
          "Katarina",
          "Akali",
          "Zed",
          "Brand"
        ],
        "weakAgainst": [
          "Diana",
          "Pantheon",
          "Veigar",
          "Galio",
          "Zoe",
          "Fizz"
        ]
      },
      {
        "lane": "support",
        "strongAgainst": [
          "Seraphine",
          "Leona",
          "Karma",
          "Lulu",
          "Braum",
          "Sona"
        ],
        "weakAgainst": [
          "Thresh",
          "Blitzcrank",
          "Soraka",
          "Nami",
          "Rakan",
          "Zyra"
        ]
      }
    ]
  },
  {
    "champion": "Lux",
    "slug": "Lux",
    "lanes": [
      {
        "lane": "mid",
        "strongAgainst": [
          "Brand",
          "Annie",
          "Orianna",
          "Corki",
          "Irelia",
          "Akali"
        ],
        "weakAgainst": [
          "Fizz",
          "Kassadin",
          "Ahri",
          "Yasuo",
          "Aurelion Sol",
          "Karma"
        ]
      },
      {
        "lane": "support",
        "strongAgainst": [
          "Alistar",
          "Nautilus",
          "Rakan",
          "Braum",
          "Lulu"
        ],
        "weakAgainst": [
          "Sona",
          "Blitzcrank",
          "Soraka",
          "Janna",
          "Zyra",
          "Leona"
        ]
      }
    ]
  },
  {
    "champion": "Jinx",
    "slug": "Jinx",
    "lanes": [
      {
        "lane": "bot",
        "strongAgainst": [
          "Samira",
          "Kai&#8217;Sa",
          "Aphelios",
          "Jinx",
          "Varus",
          "Caitlyn"
        ],
        "weakAgainst": [
          "Draven",
          "Tristana",
          "Xayah",
          "Twitch",
          "Nilah"
        ]
      },
      {
        "lane": "mid",
        "strongAgainst": [
          "Annie",
          "Zoe",
          "Veigar",
          "Karma",
          "Twisted Fate",
          "Ezreal"
        ],
        "weakAgainst": [
          "Ekko",
          "Yasuo",
          "Corki",
          "Ziggs",
          "Vladimir",
          "Lucian"
        ]
      },
      {
        "lane": "top",
        "strongAgainst": [
          "Ornn",
          "Gwen",
          "Wukong",
          "Darius",
          "Sett",
          "Camille"
        ],
        "weakAgainst": [
          "Tryndamere",
          "Yone",
          "Jayce",
          "Brand",
          "Jax",
          "Master Yi"
        ]
      }
    ]
  },
  {
    "champion": "Volibear",
    "slug": "Volibear",
    "lanes": [
      {
        "lane": "jungle",
        "strongAgainst": [
          "Warwick",
          "Nunu & Willump",
          "Graves",
          "Lee Sin",
          "Evelynn",
          "Diana"
        ],
        "weakAgainst": [
          "Master Yi",
          "Wukong",
          "Amumu",
          "Rengar",
          "Lillia",
          "Fiddlesticks"
        ]
      },
      {
        "lane": "top",
        "strongAgainst": [
          "Sett",
          "Yasuo",
          "Renekton",
          "Riven",
          "Irelia",
          "Tryndamere"
        ],
        "weakAgainst": [
          "Jayce",
          "Vayne",
          "Teemo",
          "Fiora",
          "Darius",
          "Kayle"
        ]
      },
      {
        "lane": "mid",
        "strongAgainst": [
          "Akali",
          "Katarina",
          "Zed",
          "Yone",
          "Yasuo",
          "Talon"
        ],
        "weakAgainst": [
          "Syndra",
          "Corki",
          "Swain",
          "Ahri",
          "Zoe",
          "Lux"
        ]
      }
    ]
  },
  {
    "champion": "Ziggs",
    "slug": "Ziggs",
    "lanes": [
      {
        "lane": "mid",
        "strongAgainst": [
          "Orianna",
          "Corki",
          "Veigar",
          "Lux",
          "Ezreal",
          "Lucian"
        ],
        "weakAgainst": [
          "Kayle",
          "Talon",
          "Brand",
          "Ekko",
          "Annie",
          "Garen"
        ]
      },
      {
        "lane": "bot",
        "strongAgainst": [
          "Jinx",
          "Miss Fortune",
          "Xayah",
          "Aphelios",
          "Tristana",
          "Varus"
        ],
        "weakAgainst": [
          "Caitlyn",
          "Samira",
          "Zeri",
          "Kai&#8217;Sa",
          "Jhin",
          "Varus"
        ]
      }
    ]
  },
  {
    "champion": "Tristana",
    "slug": "Tristana",
    "lanes": [
      {
        "lane": "bot",
        "strongAgainst": [
          "Miss Fortune",
          "Varus",
          "Ezreal",
          "Graves",
          "Xayah",
          "Kai&#8217;Sa"
        ],
        "weakAgainst": [
          "Draven",
          "Sivir",
          "Lucian",
          "Jinx",
          "Caitlyn",
          "Twitch"
        ]
      },
      {
        "lane": "mid",
        "strongAgainst": [
          "Karma",
          "Irelia",
          "Yone",
          "Katarina",
          "Kassadin",
          "Akali",
          "Xin Zhao",
          "Jarvan IV",
          "Warwick",
          "Master Yi",
          "Zac",
          "Volibear"
        ],
        "weakAgainst": [
          "Yasuo",
          "Annie",
          "Malphite",
          "Vex",
          "Zoe",
          "Diana",
          "Vi",
          "Kayn",
          "Kha&#8217;Zix",
          "Rengar",
          "Gragas",
          "Graves"
        ]
      },
      {
        "lane": "support",
        "strongAgainst": [
          "Sona",
          "Janna",
          "Brand",
          "Morgana",
          "Soraka"
        ],
        "weakAgainst": [
          "Alistar",
          "Lux",
          "Leona",
          "Thresh",
          "Braum",
          "Seraphine"
        ]
      },
      {
        "lane": "top",
        "strongAgainst": [
          "Fiora",
          "Ornn",
          "Jayce",
          "Olaf",
          "Tryndamere",
          "Irelia"
        ],
        "weakAgainst": [
          "Yasuo",
          "Dr. Mundo",
          "Gwen",
          "Darius",
          "Kennen",
          "Camille"
        ]
      }
    ]
  },
  {
    "champion": "Poppy",
    "slug": "Poppy",
    "lanes": [
      {
        "lane": "top",
        "strongAgainst": [
          "Yone",
          "Irelia",
          "Jayce",
          "Akali",
          "Teemo",
          "Fiora"
        ],
        "weakAgainst": [
          "Shen",
          "Darius",
          "Garen",
          "Camille",
          "Malphite",
          "Olaf"
        ]
      },
      {
        "lane": "jungle",
        "strongAgainst": [
          "Rammus",
          "Diana",
          "Warwick",
          "Wukong",
          "Gwen",
          "Master Yi"
        ],
        "weakAgainst": [
          "Xin Zhao",
          "Amumu",
          "Vi",
          "Graves",
          "Lillia",
          "Gragas"
        ]
      },
      {
        "lane": "support",
        "strongAgainst": [
          "Pantheon",
          "Ashe",
          "Alistar",
          "Leona",
          "Lux",
          "Seraphine"
        ],
        "weakAgainst": [
          "Sona",
          "Janna",
          "Rakan",
          "Yuumi",
          "Soraka"
        ]
      },
      {
        "lane": "mid",
        "strongAgainst": [
          "Annie",
          "Jayce",
          "Katarina",
          "Orianna",
          "Kennen",
          "Fizz"
        ],
        "weakAgainst": [
          "Kassadin",
          "Zoe",
          "Lissandra",
          "Corki",
          "Diana",
          "Viktor"
        ]
      }
    ]
  },
  {
    "champion": "Sivir",
    "slug": "Sivir",
    "lanes": [
      {
        "lane": "bot",
        "strongAgainst": [
          "Ezreal",
          "Draven",
          "Tristana",
          "Lucian",
          "Xayah",
          "Varus"
        ],
        "weakAgainst": [
          "Jhin",
          "Jinx",
          "Kai&#8217;Sa",
          "Miss Fortune",
          "Vayne",
          "Ashe",
          "Zed",
          "Ziggs",
          "Yasuo",
          "Wukong",
          "Xayah",
          "Xin Zhao",
          "Vi",
          "Veigar",
          "Varus",
          "Twisted Fate",
          "Tryndamere",
          "Tristana",
          "Thresh",
          "Teemo",
          "Soraka",
          "Sona",
          "Singed",
          "Shyvana",
          "Shen",
          "Sett",
          "Seraphine",
          "Riven",
          "Rengar",
          "Renekton",
          "Rammus",
          "Rakan",
          "Pantheon",
          "Orianna",
          "Olaf",
          "Nunu & Willump",
          "Nasus",
          "Nami",
          "Morgana",
          "Malphite",
          "Master Yi",
          "Lux",
          "Lulu",
          "Leona",
          "Lucian",
          "Lee Sin",
          "Kha&#8217;Zix",
          "Katarina",
          "Kayle",
          "Kennen",
          "Karma",
          "Jayce",
          "Jarvan IV",
          "Graves",
          "Irelia",
          "Janna",
          "Gragas",
          "Garen",
          "Fizz",
          "Galio",
          "Ezreal",
          "Fiora",
          "Evelynn",
          "Draven",
          "Dr. Mundo",
          "Diana",
          "Camille",
          "Corki",
          "Darius",
          "Caitlyn",
          "Braum",
          "Aurelion Sol",
          "Blitzcrank",
          "Brand",
          "Annie",
          "Amumu",
          "Akshan",
          "Alistar",
          "Nautilus",
          "Ahri",
          "Akali",
          "Kassadin",
          "Sion",
          "Samira",
          "Yone",
          "Vex",
          "Warwick",
          "Gwen",
          "Kayn",
          "Aatrox",
          "Lillia",
          "Zoe",
          "Twitch",
          "Fiddlesticks",
          "Urgot",
          "Zac",
          "Zeri",
          "Aphelios",
          "Volibear",
          "Ornn",
          "Swain",
          "Hecarim",
          "Vladimir",
          "Nilah",
          "Sivir",
          "Zyra",
          "Talon",
          "Syndra",
          "Kindred",
          "Pyke",
          "Yuumi",
          "Ekko",
          "Jax",
          "Kalista",
          "Maokai",
          "Viego",
          "Milio",
          "Mordekaiser",
          "Lissandra",
          "Viktor",
          "Heimerdinger",
          "Ambessa",
          "Rumble",
          "Poppy",
          "Gnar",
          "Zilean",
          "Ryze"
        ]
      },
      {
        "lane": "mid",
        "strongAgainst": [
          "Galio",
          "Vladimir",
          "Swain",
          "Zoe",
          "Ziggs",
          "Fizz"
        ],
        "weakAgainst": [
          "Annie",
          "Akali",
          "Diana",
          "Lux",
          "Twisted Fate",
          "Katarina"
        ]
      },
      {
        "lane": "top",
        "strongAgainst": [
          "Sett",
          "Shen",
          "Yone",
          "Teemo",
          "Aatrox",
          "Jayce"
        ],
        "weakAgainst": [
          "Yasuo",
          "Kennen",
          "Pantheon",
          "Darius",
          "Kayle",
          "Jax"
        ]
      },
      {
        "lane": "support",
        "strongAgainst": [
          "Nami",
          "Nautilus",
          "Blitzcrank",
          "Pyke",
          "Brand",
          "Rakan"
        ],
        "weakAgainst": [
          "Zyra",
          "Leona",
          "Karma",
          "Thresh",
          "Lux"
        ]
      },
      {
        "lane": "jungle",
        "strongAgainst": [
          "Fiddlesticks",
          "Gragas"
        ],
        "weakAgainst": [
          "Viego",
          "Kayn",
          "Kha&#8217;Zix",
          "Graves",
          "Jarvan IV",
          "Gragas"
        ]
      }
    ]
  },
  {
    "champion": "Seraphine",
    "slug": "Seraphine",
    "lanes": [
      {
        "lane": "mid",
        "strongAgainst": [
          "Orianna",
          "Karma",
          "Lux",
          "Annie",
          "Corki",
          "Twisted Fate"
        ],
        "weakAgainst": [
          "Fizz",
          "Ziggs",
          "Irelia",
          "Katarina",
          "Kayle",
          "Zed"
        ]
      },
      {
        "lane": "support",
        "strongAgainst": [
          "Morgana",
          "Thresh",
          "Alistar",
          "Rakan",
          "Braum",
          "Leona"
        ],
        "weakAgainst": [
          "Sona",
          "Soraka",
          "Janna",
          "Pyke",
          "Milio"
        ]
      }
    ]
  },
  {
    "champion": "Malphite",
    "slug": "Malphite",
    "lanes": [
      {
        "lane": "top",
        "strongAgainst": [
          "Tryndamere",
          "Teemo",
          "Jax",
          "Yasuo",
          "Jayce",
          "Irelia"
        ],
        "weakAgainst": [
          "Fiora",
          "Olaf",
          "Darius",
          "Garen",
          "Shen",
          "Dr. Mundo"
        ]
      },
      {
        "lane": "mid",
        "strongAgainst": [
          "Lux",
          "Katarina",
          "Orianna",
          "Yasuo",
          "Veigar",
          "Galio"
        ],
        "weakAgainst": [
          "Diana",
          "Annie",
          "Morgana",
          "Fizz",
          "Ekko",
          "Kassadin"
        ]
      },
      {
        "lane": "support",
        "strongAgainst": [
          "Jarvan IV",
          "Tryndamere",
          "Lee Sin",
          "Kha&#8217;Zix",
          "Shyvana",
          "Rammus",
          "Zyra",
          "Janna",
          "Lulu",
          "Braum",
          "Leona",
          "Nami"
        ],
        "weakAgainst": [
          "Amumu",
          "Volibear",
          "Rengar",
          "Graves",
          "Vi",
          "Zac",
          "Morgana",
          "Sona",
          "Rakan",
          "Thresh",
          "Nautilus"
        ]
      },
      {
        "lane": "bot",
        "strongAgainst": [
          "Ashe",
          "Vayne",
          "Nami",
          "Jinx",
          "Varus",
          "Jhin"
        ],
        "weakAgainst": [
          "Sivir",
          "Samira",
          "Kai&#8217;Sa",
          "Ezreal",
          "Tristana",
          "Lucian"
        ]
      }
    ]
  },
  {
    "champion": "Ornn",
    "slug": "Ornn",
    "lanes": [
      {
        "lane": "top",
        "strongAgainst": [
          "Sion",
          "Renekton",
          "Jayce",
          "Sett",
          "Jax",
          "Yone"
        ],
        "weakAgainst": [
          "Fiora",
          "Shen",
          "Olaf",
          "Camille",
          "Riven",
          "Vayne"
        ]
      },
      {
        "lane": "mid",
        "strongAgainst": [
          "Ahri",
          "Katarina",
          "Malphite",
          "Irelia",
          "Twisted Fate",
          "Akali"
        ],
        "weakAgainst": [
          "Vex",
          "Lux",
          "Galio",
          "Kayle",
          "Swain",
          "Fizz"
        ]
      },
      {
        "lane": "jungle",
        "strongAgainst": [
          "Jarvan IV",
          "Rengar",
          "Wukong",
          "Hecarim",
          "Talon",
          "Warwick"
        ],
        "weakAgainst": [
          "Vi",
          "Zac",
          "Volibear",
          "Shyvana",
          "Graves",
          "Master Yi"
        ]
      },
      {
        "lane": "support",
        "strongAgainst": [
          "Alistar",
          "Seraphine",
          "Blitzcrank",
          "Soraka",
          "Braum",
          "Nautilus"
        ],
        "weakAgainst": [
          "Sona",
          "Nami",
          "Rakan",
          "Brand",
          "Maokai",
          "Pyke"
        ]
      },
      {
        "lane": "bot",
        "strongAgainst": [
          "Caitlyn",
          "Ezreal",
          "Jhin",
          "Sivir",
          "Jinx",
          "Lucian"
        ],
        "weakAgainst": [
          "Kai&#8217;Sa",
          "Kalista",
          "Ashe",
          "Tristana",
          "Aphelios",
          "Vayne"
        ]
      }
    ]
  },
  {
    "champion": "Nocturne",
    "slug": "Nocturne",
    "lanes": [
      {
        "lane": "jungle",
        "strongAgainst": [
          "Kha&#8217;Zix",
          "Viego",
          "Gwen",
          "Gragas",
          "Amumu",
          "Diana"
        ],
        "weakAgainst": [
          "Kindred",
          "Ekko",
          "Zac",
          "Jarvan IV",
          "Rammus",
          "Master Yi"
        ]
      },
      {
        "lane": "top",
        "strongAgainst": [
          "Gwen",
          "Vayne",
          "Yone",
          "Jax",
          "Xin Zhao",
          "Malphite"
        ],
        "weakAgainst": [
          "Tryndamere",
          "Sett",
          "Darius",
          "Vladimir",
          "Pantheon",
          "Poppy"
        ]
      }
    ]
  },
  {
    "champion": "Jax",
    "slug": "Jax",
    "lanes": [
      {
        "lane": "top",
        "strongAgainst": [
          "Yasuo",
          "Wukong",
          "Irelia",
          "Kayle",
          "Gwen",
          "Volibear",
          "Master Yi",
          "Xin Zhao",
          "Olaf",
          "Amumu",
          "Diana"
        ],
        "weakAgainst": [
          "Renekton",
          "Garen",
          "Pantheon",
          "Urgot",
          "Dr. Mundo",
          "Singed",
          "Kha&#8217;Zix",
          "Kayn",
          "Rammus",
          "Fiddlesticks",
          "Evelynn",
          "Lillia"
        ]
      },
      {
        "lane": "mid",
        "strongAgainst": [
          "Veigar",
          "Corki",
          "Galio",
          "Twisted Fate",
          "Kassadin",
          "Yasuo"
        ],
        "weakAgainst": [
          "Vladimir",
          "Kennen",
          "Orianna",
          "Syndra",
          "Annie",
          "Camille"
        ]
      },
      {
        "lane": "bot",
        "strongAgainst": [
          "Miss Fortune",
          "Varus",
          "Vayne",
          "Sivir",
          "Jhin",
          "Aphelios"
        ],
        "weakAgainst": [
          "Caitlyn",
          "Nilah",
          "Xayah",
          "Samira",
          "Kalista",
          "Lucian"
        ]
      },
      {
        "lane": "support",
        "strongAgainst": [
          "Seraphine",
          "Lux",
          "Blitzcrank",
          "Janna",
          "Sona",
          "Nautilus"
        ],
        "weakAgainst": [
          "Lulu",
          "Zyra",
          "Rakan",
          "Alistar",
          "Thresh",
          "Brand"
        ]
      }
    ]
  },
  {
    "champion": "Darius",
    "slug": "Darius",
    "lanes": [
      {
        "lane": "top",
        "strongAgainst": [
          "Garen",
          "Renekton",
          "Yasuo",
          "Akali",
          "Sion",
          "Fiora"
        ],
        "weakAgainst": [
          "Vayne",
          "Ornn",
          "Kayle",
          "Dr. Mundo",
          "Jayce",
          "Urgot"
        ]
      },
      {
        "lane": "jungle",
        "strongAgainst": [
          "Jax",
          "Warwick",
          "Rammus",
          "Gragas",
          "Shyvana",
          "Jarvan IV"
        ],
        "weakAgainst": [
          "Wukong",
          "Nunu & Willump",
          "Master Yi",
          "Ekko",
          "Evelynn",
          "Viego"
        ]
      },
      {
        "lane": "mid",
        "strongAgainst": [
          "Lux",
          "Veigar",
          "Nasus",
          "Vladimir",
          "Vex",
          "Aurelion Sol"
        ],
        "weakAgainst": [
          "Katarina",
          "Twisted Fate",
          "Ahri",
          "Fizz",
          "Ekko",
          "Viktor"
        ]
      },
      {
        "lane": "bot",
        "strongAgainst": [
          "Twitch",
          "Samira",
          "Draven",
          "Ezreal",
          "Zeri",
          "Xayah"
        ],
        "weakAgainst": [
          "Vayne",
          "Tristana",
          "Lucian",
          "Jhin",
          "Nilah",
          "Ziggs"
        ]
      },
      {
        "lane": "support",
        "strongAgainst": [
          "Lulu",
          "Seraphine",
          "Thresh",
          "Sona",
          "Nautilus"
        ],
        "weakAgainst": [
          "Veigar",
          "Morgana",
          "Zyra",
          "Braum",
          "Karma",
          "Nami"
        ]
      }
    ]
  },
  {
    "champion": "Gnar",
    "slug": "Gnar",
    "lanes": [
      {
        "lane": "top",
        "strongAgainst": [
          "Sion",
          "Garen",
          "Olaf",
          "Sett",
          "Gwen",
          "Aatrox"
        ],
        "weakAgainst": [
          "Irelia",
          "Darius",
          "Olaf",
          "Renekton",
          "Nasus",
          "Camille"
        ]
      },
      {
        "lane": "mid",
        "strongAgainst": [
          "Lux",
          "Akali",
          "Malphite",
          "Fizz",
          "Orianna",
          "Twisted Fate"
        ],
        "weakAgainst": [
          "Galio",
          "Zed",
          "Ekko",
          "Zoe",
          "Yasuo",
          "Vladimir"
        ]
      },
      {
        "lane": "jungle",
        "strongAgainst": [
          "Vi",
          "Diana",
          "Hecarim",
          "Shyvana",
          "Jarvan IV",
          "Dr. Mundo"
        ],
        "weakAgainst": [
          "Lillia",
          "Viego",
          "Zac",
          "Kayn",
          "Pantheon",
          "Master Yi"
        ]
      }
    ]
  },
  {
    "champion": "Master Yi",
    "slug": "MasterYi",
    "lanes": [
      {
        "lane": "jungle",
        "strongAgainst": [
          "Evelynn",
          "Jarvan IV",
          "Lee Sin",
          "Xin Zhao",
          "Rengar",
          "Olaf"
        ],
        "weakAgainst": [
          "Rammus",
          "Vi",
          "Amumu",
          "Kha&#8217;Zix",
          "Warwick",
          "Kayn",
          "Zed",
          "Ziggs",
          "Yasuo",
          "Wukong",
          "Xayah",
          "Xin Zhao",
          "Veigar",
          "Varus",
          "Vayne",
          "Twisted Fate",
          "Tryndamere",
          "Tristana",
          "Thresh",
          "Teemo",
          "Soraka",
          "Sona",
          "Singed",
          "Shyvana",
          "Shen",
          "Sett",
          "Seraphine",
          "Riven",
          "Rengar",
          "Renekton",
          "Rakan",
          "Pantheon",
          "Orianna",
          "Olaf",
          "Nunu & Willump",
          "Nasus",
          "Nami",
          "Morgana",
          "Miss Fortune",
          "Malphite",
          "Master Yi",
          "Lux",
          "Lulu",
          "Leona",
          "Lucian",
          "Lee Sin",
          "Katarina",
          "Kayle",
          "Kennen",
          "Karma",
          "Kai&#8217;Sa",
          "Jayce",
          "Jhin",
          "Jinx",
          "Jarvan IV",
          "Graves",
          "Irelia",
          "Janna",
          "Gragas",
          "Garen",
          "Fizz",
          "Galio",
          "Ezreal",
          "Fiora",
          "Evelynn",
          "Draven",
          "Dr. Mundo",
          "Diana",
          "Camille",
          "Corki",
          "Darius",
          "Caitlyn",
          "Braum",
          "Aurelion Sol",
          "Blitzcrank",
          "Brand",
          "Ashe",
          "Annie",
          "Akshan",
          "Alistar",
          "Nautilus",
          "Ahri",
          "Akali",
          "Kassadin",
          "Sion",
          "Samira",
          "Yone",
          "Vex",
          "Gwen",
          "Aatrox",
          "Lillia",
          "Zoe",
          "Twitch",
          "Fiddlesticks",
          "Urgot",
          "Zac",
          "Zeri",
          "Aphelios",
          "Volibear",
          "Ornn",
          "Swain",
          "Hecarim",
          "Vladimir",
          "Nilah",
          "Sivir",
          "Zyra",
          "Talon",
          "Syndra",
          "Kindred",
          "Pyke",
          "Yuumi",
          "Ekko",
          "Jax",
          "Kalista",
          "Maokai",
          "Viego",
          "Milio",
          "Mordekaiser",
          "Lissandra",
          "Viktor",
          "Heimerdinger",
          "Ambessa",
          "Rumble",
          "Poppy",
          "Gnar",
          "Zilean",
          "Ryze"
        ]
      },
      {
        "lane": "top",
        "strongAgainst": [
          "Nasus",
          "Fizz",
          "Riven",
          "Jayce",
          "Yone",
          "Irelia"
        ],
        "weakAgainst": [
          "Jax",
          "Teemo",
          "Pantheon",
          "Tryndamere",
          "Renekton",
          "Fiora"
        ]
      },
      {
        "lane": "mid",
        "strongAgainst": [
          "Lux",
          "Twisted Fate",
          "Katarina",
          "Akali",
          "Ahri",
          "Orianna"
        ],
        "weakAgainst": [
          "Fizz",
          "Annie",
          "Diana",
          "Pantheon",
          "Karma",
          "Kayle"
        ]
      },
      {
        "lane": "bot",
        "strongAgainst": [
          "Ashe",
          "Kai&#8217;Sa",
          "Jinx",
          "Twitch",
          "Annie",
          "Zeri"
        ],
        "weakAgainst": [
          "Aphelios",
          "Xayah",
          "Varus",
          "Vayne",
          "Jhin",
          "Kalista"
        ]
      },
      {
        "lane": "support",
        "strongAgainst": [
          "Thresh",
          "Janna",
          "Lulu",
          "Soraka",
          "Nami"
        ],
        "weakAgainst": [
          "Blitzcrank",
          "Sona",
          "Seraphine",
          "Alistar",
          "Nautilus",
          "Karma"
        ]
      }
    ]
  },
  {
    "champion": "Gwen",
    "slug": "Gwen",
    "lanes": [
      {
        "lane": "top",
        "strongAgainst": [
          "Shyvana",
          "Dr. Mundo",
          "Shen",
          "Teemo",
          "Sion",
          "Ornn"
        ],
        "weakAgainst": [
          "Fiora",
          "Jax",
          "Riven",
          "Darius",
          "Nasus",
          "Tryndamere"
        ]
      },
      {
        "lane": "mid",
        "strongAgainst": [
          "Zoe",
          "Ekko",
          "Talon",
          "Orianna",
          "Veigar",
          "Aurelion Sol",
          "Olaf",
          "Fiddlesticks",
          "Rammus",
          "Amumu",
          "Lillia",
          "Jarvan IV"
        ],
        "weakAgainst": [
          "Yasuo",
          "Riven",
          "Kayle",
          "Jayce",
          "Zed",
          "Swain",
          "Rengar",
          "Kha&#8217;Zix",
          "Evelynn",
          "Master Yi",
          "Lee Sin",
          "Warwick"
        ]
      }
    ]
  },
  {
    "champion": "Ezreal",
    "slug": "Ezreal",
    "lanes": [
      {
        "lane": "bot",
        "strongAgainst": [
          "Ashe",
          "Varus",
          "Miss Fortune",
          "Lucian",
          "Kai&#8217;Sa",
          "Zeri"
        ],
        "weakAgainst": [
          "Nilah",
          "Vayne",
          "Draven",
          "Tristana",
          "Aphelios",
          "Kalista"
        ]
      },
      {
        "lane": "mid",
        "strongAgainst": [
          "Orianna",
          "Syndra",
          "Ziggs",
          "Brand",
          "Twisted Fate",
          "Vex"
        ],
        "weakAgainst": [
          "Yasuo",
          "Lux",
          "Zed",
          "Ekko",
          "Jayce",
          "Zoe"
        ]
      }
    ]
  },
  {
    "champion": "Kayn",
    "slug": "Kayn",
    "lanes": [
      {
        "lane": "jungle",
        "strongAgainst": [
          "Rammus",
          "Diana",
          "Jarvan IV",
          "Lee Sin",
          "Wukong",
          "Gwen"
        ],
        "weakAgainst": [
          "Vi",
          "Rengar",
          "Shyvana",
          "Evelynn",
          "Master Yi",
          "Xin Zhao"
        ]
      }
    ]
  },
  {
    "champion": "Vladimir",
    "slug": "Vladimir",
    "lanes": [
      {
        "lane": "top",
        "strongAgainst": [
          "Teemo",
          "Jayce",
          "Akali",
          "Jax",
          "Darius",
          "Kayle"
        ],
        "weakAgainst": [
          "Kennen",
          "Camille",
          "Irelia",
          "Riven",
          "Darius",
          "Yone"
        ]
      },
      {
        "lane": "mid",
        "strongAgainst": [
          "Varus",
          "Yasuo",
          "Vex",
          "Irelia",
          "Katarina",
          "Lux"
        ],
        "weakAgainst": [
          "Fizz",
          "Kassadin",
          "Zed",
          "Ahri",
          "Orianna",
          "Ziggs"
        ]
      }
    ]
  },
  {
    "champion": "Urgot",
    "slug": "Urgot",
    "lanes": [
      {
        "lane": "top",
        "strongAgainst": [
          "Riven",
          "Jayce",
          "Tryndamere",
          "Gragas",
          "Akali",
          "Yone"
        ],
        "weakAgainst": [
          "Dr. Mundo",
          "Kayle",
          "Teemo",
          "Olaf",
          "Garen",
          "Ornn"
        ]
      },
      {
        "lane": "mid",
        "strongAgainst": [
          "Ziggs",
          "Katarina",
          "Viktor",
          "Galio",
          "Akali",
          "Zed"
        ],
        "weakAgainst": [
          "Lucian",
          "Ekko",
          "Lux",
          "Syndra",
          "Zoe",
          "Kennen"
        ]
      },
      {
        "lane": "bot",
        "strongAgainst": [
          "Xayah",
          "Ashe",
          "Varus",
          "Zeri",
          "Aphelios",
          "Kai&#8217;Sa"
        ],
        "weakAgainst": [
          "Draven",
          "Miss Fortune",
          "Vayne",
          "Twisted Fate",
          "Jinx",
          "Kalista"
        ]
      },
      {
        "lane": "support",
        "strongAgainst": [
          "Yuumi",
          "Blitzcrank",
          "Leona",
          "Braum",
          "Nautilus"
        ],
        "weakAgainst": [
          "Shen",
          "Sona",
          "Nami",
          "Katarina",
          "Janna",
          "Rakan"
        ]
      },
      {
        "lane": "jungle",
        "strongAgainst": [
          "Fiddlesticks",
          "Warwick",
          "Wukong",
          "Kha&#8217;Zix",
          "Talon",
          "Rengar"
        ],
        "weakAgainst": [
          "Hecarim",
          "Amumu",
          "Kindred",
          "Nunu & Willump",
          "Vi",
          "Graves"
        ]
      }
    ]
  },
  {
    "champion": "Ryze",
    "slug": "Ryze",
    "lanes": [
      {
        "lane": "mid",
        "strongAgainst": [
          "Akali",
          "Fizz",
          "Kassadin",
          "Leblanc",
          "Vex",
          "Katarina"
        ],
        "weakAgainst": [
          "Swain",
          "Annie",
          "Jayce",
          "Yasuo",
          "Irelia",
          "Orianna"
        ]
      },
      {
        "lane": "top",
        "strongAgainst": [
          "Viktor",
          "Singed",
          "Heimerdinger",
          "Wukong",
          "Rumble",
          "Kennen"
        ],
        "weakAgainst": [
          "Jayce",
          "Olaf",
          "Vayne",
          "Urgot",
          "Pantheon",
          "Irelia"
        ]
      }
    ]
  },
  {
    "champion": "Alistar",
    "slug": "Alistar",
    "lanes": [
      {
        "lane": "support",
        "strongAgainst": [
          "Blitzcrank",
          "Leona",
          "Braum",
          "Nami",
          "Yuumi"
        ],
        "weakAgainst": [
          "Janna",
          "Morgana",
          "Thresh",
          "Zyra",
          "Lulu",
          "Rakan"
        ]
      },
      {
        "lane": "bot",
        "strongAgainst": [
          "Aphelios",
          "Samira",
          "Kai&#8217;Sa",
          "Jinx",
          "Zeri",
          "Twitch"
        ],
        "weakAgainst": [
          "Vayne",
          "Tristana",
          "Varus",
          "Lucian",
          "Caitlyn",
          "Ashe"
        ]
      },
      {
        "lane": "top",
        "strongAgainst": [
          "Riven",
          "Irelia",
          "Garen",
          "Yasuo",
          "Tryndamere",
          "Sion"
        ],
        "weakAgainst": [
          "Galio",
          "Dr. Mundo",
          "Renekton",
          "Gragas",
          "Urgot",
          "Vayne"
        ]
      }
    ]
  },
  {
    "champion": "Kha'Zix",
    "slug": "Khazix",
    "lanes": [
      {
        "lane": "jungle",
        "strongAgainst": [
          "Evelynn",
          "Amumu",
          "Master Yi",
          "Jarvan IV",
          "Xin Zhao",
          "Viego"
        ],
        "weakAgainst": [
          "Rengar",
          "Vi",
          "Lee Sin",
          "Volibear",
          "Warwick",
          "Rammus"
        ]
      },
      {
        "lane": "mid",
        "strongAgainst": [
          "Akali",
          "Twisted Fate",
          "Lux",
          "Veigar",
          "Ezreal",
          "Aurelion Sol"
        ],
        "weakAgainst": [
          "Diana",
          "Kayle",
          "Orianna",
          "Galio",
          "Lucian",
          "Fizz"
        ]
      }
    ]
  },
  {
    "champion": "Lucian",
    "slug": "Lucian",
    "lanes": [
      {
        "lane": "bot",
        "strongAgainst": [
          "Varus",
          "Miss Fortune",
          "Ezreal",
          "Kalista",
          "Vayne",
          "Aphelios"
        ],
        "weakAgainst": [
          "Vayne",
          "Ashe",
          "Nilah",
          "Caitlyn",
          "Twitch",
          "Tristana"
        ]
      },
      {
        "lane": "mid",
        "strongAgainst": [
          "Ezreal",
          "Diana",
          "Akali",
          "Yone",
          "Veigar",
          "Kassadin"
        ],
        "weakAgainst": [
          "Brand",
          "Galio",
          "Annie",
          "Aurelion Sol",
          "Fizz",
          "Yasuo"
        ]
      }
    ]
  },
  {
    "champion": "Caitlyn",
    "slug": "Caitlyn",
    "lanes": [
      {
        "lane": "bot",
        "strongAgainst": [
          "Zeri",
          "Aphelios",
          "Xayah",
          "Kai&#8217;Sa",
          "Lucian",
          "Sivir"
        ],
        "weakAgainst": [
          "Jhin",
          "Ezreal",
          "Miss Fortune",
          "Nilah",
          "Twitch",
          "Jinx"
        ]
      },
      {
        "lane": "mid",
        "strongAgainst": [
          "Annie",
          "Twisted Fate",
          "Akali",
          "Ziggs",
          "Orianna",
          "Ahri"
        ],
        "weakAgainst": [
          "Diana",
          "Jayce",
          "Irelia",
          "Lux",
          "Fizz",
          "Yasuo"
        ]
      },
      {
        "lane": "top",
        "strongAgainst": [
          "Ashe",
          "Renekton",
          "Jax",
          "Nasus",
          "Draven",
          "Yasuo"
        ],
        "weakAgainst": [
          "Darius",
          "Jinx",
          "Teemo",
          "Fiora",
          "Zed",
          "Vayne"
        ]
      },
      {
        "lane": "support",
        "strongAgainst": [
          "Morgana",
          "Leona",
          "Zyra",
          "Rakan",
          "Lulu"
        ],
        "weakAgainst": [
          "Blitzcrank",
          "Soraka",
          "Nautilus",
          "Nami",
          "Thresh",
          "Sona"
        ]
      }
    ]
  },
  {
    "champion": "Irelia",
    "slug": "Irelia",
    "lanes": [
      {
        "lane": "mid",
        "strongAgainst": [
          "Corki",
          "Syndra",
          "Fizz",
          "Zed",
          "Twisted Fate",
          "Yone"
        ],
        "weakAgainst": [
          "Ekko",
          "Zoe",
          "Vex",
          "Annie",
          "Ahri",
          "Yasuo"
        ]
      },
      {
        "lane": "top",
        "strongAgainst": [
          "Vayne",
          "Yone",
          "Aatrox",
          "Vladimir",
          "Jayce",
          "Dr. Mundo",
          "Shyvana",
          "Lee Sin",
          "Evelynn",
          "Diana",
          "Jarvan IV",
          "Wukong"
        ],
        "weakAgainst": [
          "Garen",
          "Darius",
          "Renekton",
          "Malphite",
          "Nasus",
          "Sett",
          "Rammus",
          "Amumu",
          "Lillia",
          "Ekko",
          "Viego",
          "Kayn"
        ]
      },
      {
        "lane": "bot",
        "strongAgainst": [
          "Ziggs",
          "Miss Fortune",
          "Zeri",
          "Aphelios",
          "Varus",
          "Vayne"
        ],
        "weakAgainst": [
          "Tristana",
          "Samira",
          "Nilah",
          "Twitch",
          "Sivir",
          "Ashe"
        ]
      },
      {
        "lane": "support",
        "strongAgainst": [
          "Nami",
          "Seraphine",
          "Soraka",
          "Janna",
          "Karma",
          "Lux"
        ],
        "weakAgainst": [
          "Thresh",
          "Blitzcrank",
          "Morgana",
          "Alistar",
          "Braum",
          "Leona"
        ]
      }
    ]
  },
  {
    "champion": "Thresh",
    "slug": "Thresh",
    "lanes": [
      {
        "lane": "support",
        "strongAgainst": [
          "Blitzcrank",
          "Leona",
          "Sona",
          "Soraka",
          "Nautilus",
          "Rakan"
        ],
        "weakAgainst": [
          "Lulu",
          "Morgana",
          "Janna",
          "Nami",
          "Zyra",
          "Seraphine"
        ]
      }
    ]
  },
  {
    "champion": "Talon",
    "slug": "Talon",
    "lanes": [
      {
        "lane": "mid",
        "strongAgainst": [
          "Lux",
          "Ziggs",
          "Annie",
          "Twisted Fate",
          "Ahri",
          "Zoe"
        ],
        "weakAgainst": [
          "Ekko",
          "Vex",
          "Veigar",
          "Fizz",
          "Kassadin",
          "Katarina"
        ]
      },
      {
        "lane": "jungle",
        "strongAgainst": [
          "Master Yi",
          "Zac",
          "Evelynn",
          "Jax",
          "Kayn",
          "Nunu & Willump"
        ],
        "weakAgainst": [
          "Rammus",
          "Xin Zhao",
          "Amumu",
          "Diana",
          "Fiddlesticks",
          "Jarvan IV"
        ]
      },
      {
        "lane": "top",
        "strongAgainst": [
          "Shen",
          "Teemo",
          "Kayle",
          "Malphite",
          "Akali",
          "Olaf"
        ],
        "weakAgainst": [
          "Tryndamere",
          "Yasuo",
          "Volibear",
          "Fiora",
          "Gwen",
          "Gragas"
        ]
      },
      {
        "lane": "bot",
        "strongAgainst": [
          "Samira",
          "Ashe",
          "Caitlyn",
          "Ezreal"
        ],
        "weakAgainst": [
          "Draven",
          "Kai&#8217;Sa",
          "Twitch",
          "Jhin",
          "Jinx",
          "Zeri"
        ]
      },
      {
        "lane": "support",
        "strongAgainst": [
          "Lulu",
          "Sona",
          "Blitzcrank",
          "Seraphine"
        ],
        "weakAgainst": [
          "Nami",
          "Janna",
          "Morgana",
          "Leona",
          "Braum",
          "Alistar"
        ]
      }
    ]
  },
  {
    "champion": "Kalista",
    "slug": "Kalista",
    "lanes": [
      {
        "lane": "bot",
        "strongAgainst": [
          "Ezreal",
          "Varus",
          "Jhin",
          "Sivir",
          "Aphelios"
        ],
        "weakAgainst": [
          "Nilah",
          "Xayah",
          "Lucian",
          "Twitch",
          "Ashe",
          "Zeri"
        ]
      },
      {
        "lane": "support",
        "strongAgainst": [
          "Brand",
          "Thresh",
          "Leona",
          "Rakan",
          "Janna",
          "Nami"
        ],
        "weakAgainst": [
          "Morgana",
          "Sona",
          "Seraphine",
          "Karma",
          "Lulu",
          "Blitzcrank"
        ]
      },
      {
        "lane": "top",
        "strongAgainst": [
          "Jayce",
          "Garen",
          "Kayle",
          "Irelia",
          "Sion",
          "Volibear"
        ],
        "weakAgainst": [
          "Camille",
          "Sett",
          "Riven",
          "Zac",
          "Olaf",
          "Pantheon"
        ]
      },
      {
        "lane": "mid",
        "strongAgainst": [
          "Orianna",
          "Varus",
          "Lux",
          "Yasuo",
          "Galio",
          "Akali"
        ],
        "weakAgainst": [
          "Lucian",
          "Talon",
          "Zoe",
          "Malphite",
          "Veigar",
          "Aurelion Sol"
        ]
      }
    ]
  },
  {
    "champion": "Samira",
    "slug": "Samira",
    "lanes": [
      {
        "lane": "bot",
        "strongAgainst": [
          "Akshan",
          "Aphelios",
          "Kai&#8217;Sa",
          "Varus",
          "Ezreal",
          "Kalista"
        ],
        "weakAgainst": [
          "Draven",
          "Miss Fortune",
          "Nilah",
          "Jinx",
          "Xayah"
        ]
      },
      {
        "lane": "mid",
        "strongAgainst": [
          "Corki",
          "Brand",
          "Zoe",
          "Akshan",
          "Kassadin",
          "Katarina"
        ],
        "weakAgainst": [
          "Lucian",
          "Vex",
          "Irelia",
          "Syndra",
          "Ekko",
          "Yasuo"
        ]
      },
      {
        "lane": "top",
        "strongAgainst": [
          "Jayce",
          "Vayne",
          "Volibear",
          "Shen",
          "Ornn",
          "Kayle"
        ],
        "weakAgainst": [
          "Kennen",
          "Yasuo",
          "Urgot",
          "Sett",
          "Pantheon",
          "Dr. Mundo"
        ]
      }
    ]
  },
  {
    "champion": "Riven",
    "slug": "Riven",
    "lanes": [
      {
        "lane": "top",
        "strongAgainst": [
          "Vi",
          "Dr. Mundo",
          "Nasus",
          "Lee Sin",
          "Rengar",
          "Irelia"
        ],
        "weakAgainst": [
          "Fiora",
          "Garen",
          "Renekton",
          "Kennen",
          "Pantheon",
          "Darius"
        ]
      },
      {
        "lane": "mid",
        "strongAgainst": [
          "Katarina",
          "Fizz",
          "Zed",
          "Akali",
          "Kassadin",
          "Diana"
        ],
        "weakAgainst": [
          "Lux",
          "Ahri",
          "Galio",
          "Ekko",
          "Jayce",
          "Corki"
        ]
      },
      {
        "lane": "jungle",
        "strongAgainst": [
          "Hecarim",
          "Nunu & Willump",
          "Kayn",
          "Viego",
          "Diana",
          "Xin Zhao"
        ],
        "weakAgainst": [
          "Amumu",
          "Zac",
          "Vi",
          "Gragas",
          "Fiddlesticks",
          "Rammus"
        ]
      },
      {
        "lane": "bot",
        "strongAgainst": [
          "Ashe",
          "Tristana",
          "Xayah",
          "Kalista",
          "Twitch",
          "Jinx"
        ],
        "weakAgainst": [
          "Aphelios",
          "Zeri",
          "Draven",
          "Vayne",
          "Caitlyn",
          "Varus"
        ]
      },
      {
        "lane": "support",
        "strongAgainst": [
          "Sona",
          "Karma",
          "Nami",
          "Seraphine",
          "Yuumi",
          "Blitzcrank"
        ],
        "weakAgainst": [
          "Alistar",
          "Braum",
          "Nautilus",
          "Lulu",
          "Janna",
          "Leona"
        ]
      }
    ]
  },
  {
    "champion": "Diana",
    "slug": "Diana",
    "lanes": [
      {
        "lane": "mid",
        "strongAgainst": [
          "Akali",
          "Ahri",
          "Twisted Fate",
          "Orianna",
          "Katarina",
          "Ezreal",
          "Tryndamere",
          "Rammus",
          "Lee Sin",
          "Xin Zhao",
          "Rengar",
          "Master Yi"
        ],
        "weakAgainst": [
          "Kayle",
          "Fizz",
          "Pantheon",
          "Gragas",
          "Ekko",
          "Jayce",
          "Amumu",
          "Warwick",
          "Graves",
          "Hecarim"
        ]
      },
      {
        "lane": "top",
        "strongAgainst": [
          "Teemo",
          "Singed",
          "Olaf",
          "Darius",
          "Zac",
          "Sion"
        ],
        "weakAgainst": [
          "Irelia",
          "Jax",
          "Nasus",
          "Tryndamere",
          "Kayle"
        ]
      }
    ]
  },
  {
    "champion": "Zed",
    "slug": "Zed",
    "lanes": [
      {
        "lane": "mid",
        "strongAgainst": [
          "Veigar",
          "Ziggs",
          "Orianna",
          "Corki",
          "Kassadin",
          "Aurelion Sol"
        ],
        "weakAgainst": [
          "Fizz",
          "Ekko",
          "Vladimir",
          "Ahri",
          "Kayle",
          "Galio"
        ]
      },
      {
        "lane": "top",
        "strongAgainst": [
          "Darius",
          "Teemo",
          "Riven",
          "Jayce",
          "Yasuo",
          "Gwen"
        ],
        "weakAgainst": [
          "Kayle",
          "Jax",
          "Irelia",
          "Wukong",
          "Nasus",
          "Tryndamere"
        ]
      },
      {
        "lane": "bot",
        "strongAgainst": [
          "Caitlyn",
          "Miss Fortune",
          "Varus",
          "Draven",
          "Zeri",
          "Jinx",
          "Lulu",
          "Zyra",
          "Rakan",
          "Blitzcrank",
          "Lux"
        ],
        "weakAgainst": [
          "Vayne",
          "Lucian",
          "Ashe",
          "Samira",
          "Kalista",
          "Tristana",
          "Leona",
          "Alistar",
          "Maokai",
          "Janna",
          "Soraka",
          "Sona"
        ]
      },
      {
        "lane": "jungle",
        "strongAgainst": [
          "Graves",
          "Jarvan IV",
          "Xin Zhao",
          "Gragas",
          "Lee Sin",
          "Talon"
        ],
        "weakAgainst": [
          "Rammus",
          "Amumu",
          "Kindred",
          "Rengar",
          "Kayn",
          "Master Yi"
        ]
      }
    ]
  },
  {
    "champion": "Evelynn",
    "slug": "Evelynn",
    "lanes": [
      {
        "lane": "jungle",
        "strongAgainst": [
          "Graves",
          "Dr. Mundo",
          "Jarvan IV",
          "Amumu",
          "Wukong",
          "Gragas"
        ],
        "weakAgainst": [
          "Kha&#8217;Zix",
          "Xin Zhao",
          "Lee Sin",
          "Master Yi",
          "Rengar",
          "Fiddlesticks"
        ]
      }
    ]
  },
  {
    "champion": "Yasuo",
    "slug": "Yasuo",
    "lanes": [
      {
        "lane": "mid",
        "strongAgainst": [
          "Ahri",
          "Twisted Fate",
          "Veigar",
          "Corki",
          "Katarina",
          "Akali",
          "Ekko",
          "Shyvana",
          "Vi",
          "Gragas",
          "Kayn",
          "Lee Sin"
        ],
        "weakAgainst": [
          "Fizz",
          "Renekton",
          "Annie",
          "Vex",
          "Vladimir",
          "Swain",
          "Rammus",
          "Amumu",
          "Kindred",
          "Fiddlesticks",
          "Pantheon",
          "Nunu & Willump"
        ]
      },
      {
        "lane": "top",
        "strongAgainst": [
          "Akali",
          "Vayne",
          "Teemo",
          "Jayce",
          "Irelia",
          "Kennen"
        ],
        "weakAgainst": [
          "Renekton",
          "Nasus",
          "Tryndamere",
          "Garen",
          "Camille",
          "Darius"
        ]
      },
      {
        "lane": "bot",
        "strongAgainst": [
          "Aphelios",
          "Tristana",
          "Miss Fortune",
          "Caitlyn",
          "Kai&#8217;Sa",
          "Jhin"
        ],
        "weakAgainst": [
          "Nilah",
          "Kalista",
          "Samira",
          "Jinx",
          "Zeri",
          "Lucian"
        ]
      },
      {
        "lane": "support",
        "strongAgainst": [
          "Blitzcrank",
          "Morgana",
          "Alistar",
          "Lulu",
          "Braum",
          "Seraphine"
        ],
        "weakAgainst": [
          "Sona",
          "Leona",
          "Nautilus",
          "Nami",
          "Zyra",
          "Janna"
        ]
      }
    ]
  },
  {
    "champion": "Draven",
    "slug": "Draven",
    "lanes": [
      {
        "lane": "bot",
        "strongAgainst": [
          "Sivir",
          "Zeri",
          "Varus",
          "Kai&#8217;Sa",
          "Kalista",
          "Caitlyn"
        ],
        "weakAgainst": [
          "Jhin",
          "Ashe",
          "Nilah",
          "Twitch",
          "Aphelios"
        ]
      },
      {
        "lane": "top",
        "strongAgainst": [
          "Nasus",
          "Renekton",
          "Fiora",
          "Dr. Mundo",
          "Darius",
          "Vladimir"
        ],
        "weakAgainst": [
          "Urgot",
          "Kennen",
          "Malphite",
          "Sett",
          "Camille",
          "Shen"
        ]
      },
      {
        "lane": "mid",
        "strongAgainst": [
          "Ekko",
          "Aatrox",
          "Vladimir",
          "Galio",
          "Swain",
          "Fizz"
        ],
        "weakAgainst": [
          "Yasuo",
          "Irelia",
          "Diana",
          "Annie",
          "Syndra",
          "Katarina"
        ]
      }
    ]
  },
  {
    "champion": "Twitch",
    "slug": "Twitch",
    "lanes": [
      {
        "lane": "bot",
        "strongAgainst": [
          "Vayne",
          "Jinx",
          "Varus",
          "Ashe",
          "Ezreal",
          "Miss Fortune"
        ],
        "weakAgainst": [
          "Jhin",
          "Tristana",
          "Kai&#8217;Sa",
          "Draven",
          "Xayah",
          "Samira"
        ]
      },
      {
        "lane": "jungle",
        "strongAgainst": [
          "Nunu & Willump",
          "Graves",
          "Amumu",
          "Brand",
          "Zac",
          "Fiddlesticks"
        ],
        "weakAgainst": [
          "Vi",
          "Kha&#8217;Zix",
          "Rengar",
          "Evelynn",
          "Lee Sin",
          "Kayn"
        ]
      }
    ]
  },
  {
    "champion": "Lee Sin",
    "slug": "LeeSin",
    "lanes": [
      {
        "lane": "jungle",
        "strongAgainst": [
          "Jarvan IV",
          "Rengar",
          "Xin Zhao",
          "Master Yi",
          "Kha&#8217;Zix",
          "Evelynn"
        ],
        "weakAgainst": [
          "Rammus",
          "Vi",
          "Wukong",
          "Fiddlesticks",
          "Warwick",
          "Zac"
        ]
      },
      {
        "lane": "top",
        "strongAgainst": [
          "Tryndamere",
          "Rengar",
          "Akali",
          "Irelia",
          "Kayle",
          "Teemo"
        ],
        "weakAgainst": [
          "Garen",
          "Sett",
          "Dr. Mundo",
          "Renekton",
          "Darius",
          "Nasus",
          "Pantheon",
          "Vex",
          "Jayce",
          "Ahri",
          "Malphite",
          "Swain"
        ]
      },
      {
        "lane": "mid",
        "strongAgainst": [
          "Aurelion Sol",
          "Akali",
          "Katarina",
          "Orianna",
          "Zoe",
          "Yone"
        ],
        "weakAgainst": [
          "Pantheon",
          "Vex",
          "Jayce",
          "Ahri",
          "Malphite",
          "Swain"
        ]
      }
    ]
  },
  {
    "champion": "Aatrox",
    "slug": "Aatrox",
    "lanes": [
      {
        "lane": "top",
        "strongAgainst": [
          "Dr. Mundo",
          "Yone",
          "Sion",
          "Olaf",
          "Jayce",
          "Shen"
        ],
        "weakAgainst": [
          "Fiora",
          "Irelia",
          "Darius",
          "Jax",
          "Sett",
          "Riven"
        ]
      },
      {
        "lane": "mid",
        "strongAgainst": [
          "Katarina",
          "Diana",
          "Twisted Fate",
          "Yone",
          "Fizz",
          "Yasuo"
        ],
        "weakAgainst": [
          "Vex",
          "Akali",
          "Ahri",
          "Galio",
          "Irelia",
          "Zed"
        ]
      }
    ]
  },
  {
    "champion": "Rengar",
    "slug": "Rengar",
    "lanes": [
      {
        "lane": "jungle",
        "strongAgainst": [
          "Kha&#8217;Zix",
          "Kennen",
          "Graves",
          "Lillia",
          "Kindred",
          "Lee Sin"
        ],
        "weakAgainst": [
          "Rammus",
          "Amumu",
          "Jarvan IV",
          "Warwick",
          "Zac",
          "Master Yi"
        ]
      },
      {
        "lane": "top",
        "strongAgainst": [
          "Vladimir",
          "Jayce",
          "Vayne",
          "Yone",
          "Yasuo",
          "Gwen"
        ],
        "weakAgainst": [
          "Tryndamere",
          "Pantheon",
          "Darius",
          "Renekton",
          "Urgot",
          "Fiora"
        ]
      }
    ]
  },
  {
    "champion": "Katarina",
    "slug": "Katarina",
    "lanes": [
      {
        "lane": "mid",
        "strongAgainst": [
          "Veigar",
          "Lux",
          "Akali",
          "Morgana",
          "Brand",
          "Orianna"
        ],
        "weakAgainst": [
          "Fizz",
          "Kayle",
          "Yasuo",
          "Pantheon",
          "Annie",
          "Ahri"
        ]
      },
      {
        "lane": "top",
        "strongAgainst": [
          "Darius",
          "Amumu",
          "Teemo",
          "Nasus",
          "Renekton",
          "Nunu & Willump"
        ],
        "weakAgainst": [
          "Annie",
          "Riven",
          "Ahri",
          "Vi",
          "Irelia",
          "Pantheon"
        ]
      }
    ]
  },
  {
    "champion": "Kai'Sa",
    "slug": "Kaisa",
    "lanes": [
      {
        "lane": "bot",
        "strongAgainst": [
          "Tristana",
          "Zeri",
          "Aphelios",
          "Varus",
          "Kalista",
          "Jinx"
        ],
        "weakAgainst": [
          "Vayne",
          "Xayah",
          "Ezreal",
          "Sivir",
          "Lucian",
          "Caitlyn"
        ]
      },
      {
        "lane": "mid",
        "strongAgainst": [
          "Lux",
          "Akshan",
          "Kassadin",
          "Veigar",
          "Katarina",
          "Zoe"
        ],
        "weakAgainst": [
          "Fizz",
          "Zed",
          "Irelia",
          "Yone",
          "Ekko",
          "Akali",
          "Seraphine",
          "Zyra",
          "Blitzcrank",
          "Nautilus",
          "Morgana",
          "Rakan"
        ]
      },
      {
        "lane": "support",
        "strongAgainst": [
          "Janna",
          "Lulu",
          "Soraka",
          "Thresh",
          "Braum",
          "Alistar"
        ],
        "weakAgainst": [
          "Seraphine",
          "Zyra",
          "Blitzcrank",
          "Nautilus",
          "Morgana",
          "Rakan"
        ]
      },
      {
        "lane": "jungle",
        "strongAgainst": [
          "Xin Zhao",
          "Jarvan IV",
          "Shyvana",
          "Hecarim",
          "Lee Sin",
          "Evelynn"
        ],
        "weakAgainst": [
          "Rammus",
          "Rengar",
          "Vi",
          "Kha&#8217;Zix",
          "Amumu",
          "Viego"
        ]
      },
      {
        "lane": "top",
        "strongAgainst": [
          "Singed",
          "Ornn",
          "Sion",
          "Nasus",
          "Garen",
          "Darius"
        ],
        "weakAgainst": [
          "Jayce",
          "Riven",
          "Irelia",
          "Vladimir",
          "Jax",
          "Urgot"
        ]
      }
    ]
  },
  {
    "champion": "Annie",
    "slug": "Annie",
    "lanes": [
      {
        "lane": "mid",
        "strongAgainst": [
          "Akali",
          "Ahri",
          "Katarina",
          "Kayle",
          "Zed",
          "Irelia"
        ],
        "weakAgainst": [
          "Kassadin",
          "Brand",
          "Orianna",
          "Fizz",
          "Veigar",
          "Lux"
        ]
      },
      {
        "lane": "top",
        "strongAgainst": [
          "Darius",
          "Renekton",
          "Yasuo",
          "Shen",
          "Akali",
          "Zed"
        ],
        "weakAgainst": [
          "Malphite",
          "Garen",
          "Katarina",
          "Wukong",
          "Swain",
          "Kassadin"
        ]
      },
      {
        "lane": "bot",
        "strongAgainst": [
          "Thresh",
          "Braum",
          "Lucian",
          "Lulu",
          "Soraka",
          "Kai&#8217;Sa"
        ],
        "weakAgainst": [
          "Karma",
          "Ashe",
          "Leona",
          "Caitlyn",
          "Morgana",
          "Tristana"
        ]
      }
    ]
  },
  {
    "champion": "Rell",
    "slug": "Rell",
    "lanes": [
      {
        "lane": "support",
        "strongAgainst": [
          "Rakan",
          "Pyke",
          "Yuumi",
          "Nautilus",
          "Leona",
          "Lulu"
        ],
        "weakAgainst": [
          "Janna",
          "Sona",
          "Nami",
          "Morgana",
          "Seraphine",
          "Zyra"
        ]
      },
      {
        "lane": "top",
        "strongAgainst": [
          "Gwen",
          "Malphite",
          "Yasuo",
          "Jax",
          "Viego",
          "Riven"
        ],
        "weakAgainst": [
          "Shen",
          "Xin Zhao",
          "Olaf",
          "Sett",
          "Fiora",
          "Sion"
        ]
      }
    ]
  },
  {
    "champion": "Jayce",
    "slug": "Jayce",
    "lanes": [
      {
        "lane": "top",
        "strongAgainst": [
          "Singed",
          "Akali",
          "Volibear",
          "Teemo",
          "Darius",
          "Kayle"
        ],
        "weakAgainst": [
          "Olaf",
          "Rengar",
          "Renekton",
          "Fiora",
          "Wukong",
          "Pantheon"
        ]
      },
      {
        "lane": "mid",
        "strongAgainst": [
          "Fizz",
          "Katarina",
          "Akali",
          "Yone",
          "Karma",
          "Talon"
        ],
        "weakAgainst": [
          "Brand",
          "Annie",
          "Galio",
          "Zoe",
          "Diana",
          "Vex"
        ]
      },
      {
        "lane": "bot",
        "strongAgainst": [
          "Kalista",
          "Miss Fortune",
          "Ezreal",
          "Lucian",
          "Zeri",
          "Varus"
        ],
        "weakAgainst": [
          "Sivir",
          "Nilah",
          "Draven",
          "Tristana",
          "Jhin"
        ]
      },
      {
        "lane": "support",
        "strongAgainst": [
          "Zyra",
          "Soraka",
          "Rakan",
          "Morgana",
          "Leona",
          "Nami"
        ],
        "weakAgainst": [
          "Alistar",
          "Pyke",
          "Thresh",
          "Blitzcrank",
          "Braum"
        ]
      },
      {
        "lane": "jungle",
        "strongAgainst": [
          "Maokai",
          "Jarvan IV",
          "Hecarim",
          "Fiddlesticks",
          "Evelynn",
          "Vi"
        ],
        "weakAgainst": [
          "Rammus",
          "Zac",
          "Viego",
          "Master Yi",
          "Gragas",
          "Lee Sin"
        ]
      }
    ]
  },
  {
    "champion": "Akali",
    "slug": "Akali",
    "lanes": [
      {
        "lane": "mid",
        "strongAgainst": [
          "Yasuo",
          "Ziggs",
          "Twisted Fate",
          "Veigar",
          "Katarina",
          "Orianna"
        ],
        "weakAgainst": [
          "Kassadin",
          "Galio",
          "Annie",
          "Veigar",
          "Akshan",
          "Vex"
        ]
      },
      {
        "lane": "top",
        "strongAgainst": [
          "Teemo",
          "Yone",
          "Jax",
          "Olaf",
          "Kayle",
          "Gragas"
        ],
        "weakAgainst": [
          "Rengar",
          "Shen",
          "Riven",
          "Urgot",
          "Pantheon",
          "Singed"
        ]
      },
      {
        "lane": "bot",
        "strongAgainst": [
          "Jinx",
          "Zeri",
          "Sivir",
          "Twitch",
          "Ashe",
          "Miss Fortune"
        ],
        "weakAgainst": [
          "Aphelios",
          "Samira",
          "Lucian",
          "Xayah",
          "Vayne",
          "Tristana"
        ]
      },
      {
        "lane": "jungle",
        "strongAgainst": [
          "Rengar",
          "Ekko",
          "Nunu & Willump",
          "Master Yi",
          "Evelynn",
          "Xin Zhao"
        ],
        "weakAgainst": [
          "Viego",
          "Zac",
          "Kayn",
          "Hecarim",
          "Graves",
          "Lee Sin"
        ]
      },
      {
        "lane": "support",
        "strongAgainst": [
          "Zyra",
          "Lux",
          "Thresh",
          "Lulu",
          "Alistar"
        ],
        "weakAgainst": [
          "Morgana",
          "Nami",
          "Blitzcrank",
          "Rakan",
          "Braum",
          "Janna"
        ]
      }
    ]
  },
  {
    "champion": "Yuumi",
    "slug": "Yuumi",
    "lanes": [
      {
        "lane": "support",
        "strongAgainst": [
          "Seraphine",
          "Brand",
          "Braum",
          "Lux",
          "Thresh"
        ],
        "weakAgainst": [
          "Leona",
          "Alistar",
          "Rakan",
          "Blitzcrank",
          "Soraka",
          "Sona"
        ]
      }
    ]
  }
]
