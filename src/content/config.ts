const config = {
  nav: {
    logo: 'M',
    links: [
      { text1: 'Projects', to: 'myrepos' },
      { text2: 'Contact', to: 'mysocial' },
    ],
  },
  header: {
    img: process.env.PUBLIC_URL + '/assets/headshot.webp',
    alt: 'headshot',
    text: ['Welcome,', "I'm Ann.", 'I am a '],
    typical: [
      'full stack web developer.',
      2000,
      'creator.',
      2000,
      'self-starter.',
      2000,
      'woman in technology.',
      2000,
      'problem solver.',
      2000,
      'critical thinker.',
      2000,
    ],
    btnText: 'Learn More About Me...',
  },
  // myrepos: {
  //   title: "Projects",
  // repositories: [
  //   {
  //     title: "Employee Tracker",
  //     link: "https://github.com/amcmilne/Employee-Directory",
  //     alt: "employee directory",
  //     img: process.env.PUBLIC_URL + "/assets/github.png",
  //     desc: `For this assignment, I created an employee directory with React. This assignment divides application's UI into components, manages component state, and responds to user events.`,
  //   },

  //   {
  //     title: "Budget Tracker",
  //     link: "https://github.com/amcmilne/Budget-Tracker",
  //     alt: "budget tracker",
  //     img: process.env.PUBLIC_URL + "/assets/github.png",
  //     desc: `For this project, I will add functionality to our existing Budget Tracker application to allow for offline access and functionality. The user will be able to add expenses and deposits to their budget with or without a connection. When entering transactions offline, they should populate the total when brought back online.`,
  //   },

  //   {
  //     title: "React Portfolio",
  //     link: "https://github.com/amcmilne/React-Portfolio",
  //     alt: "react portfolio",
  //     img: process.env.PUBLIC_URL + "/assets/github.png",
  //     desc: `This is my final portfolio using React, NodeJS, HTML, CSS, JS, and finalizing my projects I have completed during my bootcamp.`,
  //   },

  //   {
  //     title: "Camping Planner",
  //     link: "https://github.com/amcmilne/Camping-Planner",
  //     alt: "camping planner",
  //     img: process.env.PUBLIC_URL + "/assets/github.png",
  //     desc: `GROUP PROJECT 2: Camping Planner application uses a series of technologies to create a functioning app that allows users to choose from a list of national parks and in turn get back a series of details about their trip location, add and create an equipment list and select certain parks as favorites to store and look back on later.`,
  //   },

  //   {
  //     title: "Workout Tracker",
  //     link: "https://github.com/amcmilne/Workout-Tracker",
  //     alt: "workout tracker",
  //     img: process.env.PUBLIC_URL + "/assets/github.png",
  //     desc: `For this assignment, I have created a workout tracker that allows a user to view, create, and track daily workouts. The user will be able to log multiple exercises in a workout on a given day. The user will also be able to track the name, type, weight, sets, reps, and duration of exercise. If the exercise is a cardio exercise, the user should be able to track their distance traveled.`,
  //   },

  //   {
  //     title: "Bugger Logger",
  //     link: "https://github.com/amcmilne/Burger-Logger",
  //     alt: "burger logger",
  //     img: process.env.PUBLIC_URL + "/assets/github.png",
  //     desc: `In this assignment, I created a burger logger using MySQL, Node, Express, Handlebars and a homemade ORM.`,
  //   },

  //   {
  //     title: "Note Taker",
  //     link: "https://github.com/amcmilne/Note-Taker",
  //     alt: "note taker",
  //     img: process.env.PUBLIC_URL + "/assets/github.png",
  //     desc: `Created an application that can be used to write, save, and delete notes. This application will use an express backend and save and retrieve note data from a JSON file.`,
  //   },

  //   {
  //     title: "Brewery Finder",
  //     link: "https://github.com/amcmilne/Brewery-Finder",
  //     alt: "brewery finder",
  //     img: process.env.PUBLIC_URL + "/assets/github.png",
  //     desc: `GROUP PROJECT 1: The Brewery Finder application allows the user to search for information on breweries by city and state and filter the response by type (e.g. micro brewery, nano brewery, bar, etc.). The application will also automatically render results for the user's current location, if any are nearby. Additionally, if the user desires information for a specific brewery, they may make a search by name. The page will only display five results at most, but a user may paginate through the results using the next and previous buttons located at the bottom of the page.`,
  //   },

  //   {
  //     title: "Password Generator",
  //     link: "https://github.com/amcmilne/Password-Generator",
  //     alt: "password generator",
  //     img: process.env.PUBLIC_URL + "/assets/github.png",
  //     desc: ` created a password generator using javascript, CSS, HTML`,
  //   },
  // ],
  // },
  stack: {
    title: 'Stack',
    tech: [
      {
        img: process.env.PUBLIC_URL + '/assets/agile.png',
        alt: 'agile',
      },
      {
        img: process.env.PUBLIC_URL + '/assets/graphql.png',
        alt: 'graphql',
      },
      {
        img: process.env.PUBLIC_URL + '/assets/html.jpg',
        alt: 'html',
      },
      {
        img: process.env.PUBLIC_URL + '/assets/jira.png',
        alt: 'jira',
      },
      {
        img: process.env.PUBLIC_URL + '/assets/SASS.png',
        alt: 'sass',
      },
      {
        img: process.env.PUBLIC_URL + '/assets/storybook.png',
        alt: 'storybook',
      },
      {
        img: process.env.PUBLIC_URL + '/assets/images.jpg',
        alt: 'images',
      },
      {
        img: process.env.PUBLIC_URL + '/logo512.png',
        alt: 'react',
      },
      {
        img: process.env.PUBLIC_URL + '/assets/express.png',
        alt: 'express',
      },
      {
        img: process.env.PUBLIC_URL + '/assets/node.png',
        alt: 'node',
      },
      {
        img: process.env.PUBLIC_URL + '/assets/github.png',
        alt: 'github',
      },
      {
        img: process.env.PUBLIC_URL + '/assets/heroku.png',
        alt: 'heroku',
      },
      {
        img: process.env.PUBLIC_URL + '/assets/tailwind.png',
        alt: 'tailwind',
      },
    ],
    desc: `I have experience using many of the lastest technologies in the industry`,
  },
}

export default config

// additional, less current stack
// {
//   img: process.env.PUBLIC_URL + "/assets/mongo.png",
//   alt: "mongodb",
// },
// {
//   img: process.env.PUBLIC_URL + "/assets/mysql.png",
//   alt: "mysql",
// },
// {
//   img: process.env.PUBLIC_URL + "/assets/mongoose.png",
//   alt: "mongoose",
// },
// {
//   img: process.env.PUBLIC_URL + "/assets/sequelize.png",
//   alt: "sequelize",
// },
