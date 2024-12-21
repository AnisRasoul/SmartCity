
export const busRoutes = {
    "line1": {
      stations: [
        { id: 1, coords: [3.479667793394255, 36.75301113210322], name: "New Station" },
        { id: 2, coords: [3.48103848115725, 36.75331437292457], name: "Beach Terminal" },
        { id: 3, coords: [3.480864587945663, 36.75379791663314], name: "Market Square" },
        { id: 4, coords: [3.479974663782859, 36.755977923297976], name: "Hospital Station" },
        { id: 5, coords: [3.478716495138523, 36.756559794274665], name: "City Center" },
        { id: 6, coords: [3.475883058430756, 36.755912360067185], name: "University Station" },
        { id: 7, coords: [3.47445099658882, 36.75494529628395], name: "Boumerdes Station" },
        ],
        route: {
        type: "LineString",
        coordinates: [
          [3.479667793394255, 36.75301113210322],
          [3.48103848115725, 36.75331437292457],
          [3.480864587945663, 36.75379791663314],
          [3.479974663782859, 36.755977923297976],
          [3.478716495138523, 36.756559794274665],
          [3.475883058430756, 36.755912360067185],
          [3.47445099658882, 36.75494529628395],
        ],
        },
      },
    "line2": {
      stations: [
        { id: 1, coords: [3.434579795408503, 36.74433905656941], name: "Marina Terminal" },
        { id: 2, coords: [3.44752037691592, 36.75032677103627], name: "Theatre District" },
        { id: 3, coords: [3.44175, 36.755777], name: "Park Station" },
        { id: 4, coords: [3.433694, 36.752389], name: "Shopping Mall" },
        { id: 5, coords: [3.424667, 36.751944], name: "Library Station" },
        { id: 6, coords: [3.422444, 36.751944], name: "Sports Complex" },
      ],
      route: {
        type: "LineString",
        coordinates: [
          [3.434579795408503, 36.74433905656941],
          [3.44752037691592, 36.75032677103627],
          [3.44175, 36.755777],
          [3.433694, 36.752389],
          [3.424667, 36.751944],
          [3.422444, 36.751944],
        ],
      },
    },
    "line3": {
      stations: [
        {
          id: 1,
          coords: [3.4740978954476156, 36.75412267585005],
          name: "Boumerdes Central",
        },
        {
          id: 2,
          coords: [3.4700423956465793, 36.753503757126275],
          name: "Boumerdes Park",
        },
        {
          id: 3,
          coords: [3.466544795289072, 36.7524034448443],
          name: "Boumerdes University",
        },
        {
          id: 4,
          coords: [3.4630901102733747, 36.75439774923564],
          name: "Boumerdes Hospital",
        },
        {
          id: 5,
          coords: [3.4653002503765844, 36.75776731816404],
          name: "Boumerdes Market",
        },
        {
          id: 6,
          coords: [3.470256972355629, 36.7575954049651],
          name: "Boumerdes Library",
        },
        {
          id: 7,
          coords: [3.473840403396756, 36.756770216247034],
          name: "Boumerdes Stadium",
        },
        {
          id: 8,
          coords: [3.4740978954476156, 36.75412267585005],
          name: "Boumerdes Beach",
        },
      ],
      route: {
        type: "LineString",
        coordinates: [
          [3.4740978954476156, 36.75412267585005],
          [3.4700423956465793, 36.753503757126275],
          [3.466544795289072, 36.7524034448443],
          [3.4630901102733747, 36.75439774923564],
          [3.4653002503765844, 36.75776731816404],
          [3.470256972355629, 36.7575954049651],
          [3.473840403396756, 36.756770216247034],
          [3.4740978954476156, 36.75412267585005],
        ],
      },
    }
  }