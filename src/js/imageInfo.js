const jzMusicImage = require("../images/projects/joshzuckermann.webp")
const triviaGameImage = require("../images/projects/triviagame.webp")
const pacBayImage = require("../images/projects/pacbay.webp")
const useThisImage = require("../images/projects/usethis.webp")
const bestSellerSearcherImage = require("../images/projects/nytsearcher.webp")
const codesnippetsImage = require("../images/projects/codesnippets.webp")
const liriBotImage = require("../images/projects/liribot.webp")
const storeStockImage = require("../images/projects/storestock.webp")

export default [
  {
    appName: "PacBay",
    deployLink: "https://pacbay.org/",
    shortBio: "Gatsby, React, GraphQL, Contentful, Mux, Netlify, Sass, Sketch",
    desc:
      "School website with custom design system and dynamic Contentful CMS backend with Netlify deploy webhook",
    image: pacBayImage,
  },
  {
    appName: "Music Artist Site",
    deployLink: "https://joshzuckermann.com/albums/awakening?in-my-head",
    repoLink: "https://github.com/mattzuckermann/MusicArtistSite",
    shortBio: "Gatsby, React, Typescript, GraphQL, Contentful, Material-UI",
    desc:
      "JAMstack site with reverse engineered Spotify audio player and webhook to auto-compile site from CMS",
    image: jzMusicImage,
  },
  {
    appName: "Animated Trivia Game",
    deployLink: "https://musing-villani-44da24.netlify.app/",
    repoLink: "https://github.com/mattzuckermann/animated_trivia_game",
    shortBio: "Gatsby, React, TypeScript, Sass, Framer Motion",
    desc:
      "JAMstack app for developers in mastering the use of the “this” keyword in various JavaScript contexts",
    image: triviaGameImage,
  },
  {
    appName: "useThis",
    deployLink: "https://usethis.dev/",
    repoLink: "https://github.com/mattzuckermann/usethis",
    shortBio: "NextJS, React, TypeScript, Apollo, GraphQL, MongoDB, Mongoose",
    desc:
      "JAMstack app for developers in mastering the use of the “this” keyword in various JavaScript contexts",
    image: useThisImage,
  },
  {
    appName: "Snippets.",
    deployLink: "https://www.codesnippets.app",
    repoLink: "https://github.com/mattzuckermann/Snippets.",
    shortBio:
      "Javascript, Handlebars, Node, Express, Passport, MySQL, Sequelize",
    desc:
      "Snippets is a personalized user database to store code, displaying it in a colored and formatted manner.",
    image: codesnippetsImage,
  },
  {
    appName: "NYT Searcher",
    deployLink: "http://www.nytsearcher.com/",
    repoLink: "https://github.com/mattzuckermann/NYTsearcher",
    shortBio: "React, Node, Express, Passport, MongoDB, Mongoose",
    desc:
      "Website that parses The New York Times articles API and allows users to share their favorites with others",
    image: bestSellerSearcherImage,
  },
  {
    appName: "Liri Bot",
    deployLink: "https://www.youtube.com/watch?v=boK_bb6fKoA",
    repoLink: "https://github.com/mattzuckermann/LiriBot",
    shortBio: "Node, Web APIs",
    desc:
      "Node app that inputs varying methods and arguments from Node CLI to look up various web API end points.",
    image: liriBotImage,
  },
  {
    appName: "Store Stock",
    deployLink: "https://www.youtube.com/watch?v=Vufq5RRxQYA",
    repoLink: "https://github.com/mattzuckermann/StoreStock",
    shortBio: "Node, MySQL",
    desc:
      "Node app that prompts users with items for sale and tracks made purchases using a MySQL database.",
    image: storeStockImage,
  },
]
