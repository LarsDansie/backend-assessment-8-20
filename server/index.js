const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

const fortunes = ["You will see I got stuck with errors and couldn't get the second button to display these resuts. I am so lost and nothing I read online is working. I have lost it and this all sucks", 
  "You will cross paths with an exceptionally flamboyant Steve Buscemi impersonator", 
  "Someone from your past will remember that time you did that super emberassing thing", 
  "You will almost come across a great fortune only to have it pass by without any knowledge of any part of it",
  "A subpar burger is in your future",
  "A drink will go down the wrong pipe causing you to choke and cough a bit. You won't die, but it will burn a little"
];
// yourFortune = (req, res) => {
//   console.log('Speaking with the spirits')

//   const fortunes = ["You will pass me", 
//   "You will cross paths with an exceptionally flamboyant Steve Buscemi impersonator", 
//   "Someone from your past will remember that time you did that super emberassing thing", 
//   "You will almost come across a great fortune only to have it pass by without any knowledge of any part of it",
//   "A subpar burger is in your future",
//   "A drink will go down the wrong pipe causing you to choke and cough a bit. You won't die, but it will burn a little"
// ];
// let otherRandomIndex = Math.floor(Math.random() * fortunes.length);
// let randomTotallyTrueFortune = fortunes[otherRandomIndex];

// res.status(200).send(randomTotallyTrueFortune)
// console.log(randomTotallyTrueFortune)


// }

// app.get('/api/fortune', yourFortune)




app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});

app.get("/api/fortune", (req, res) => {
  const fortunes = ["You will pass me", 
              "You will cross paths with an exceptionally flamboyant Steve Buscemi impersonator", 
              "Someone from your past will remember that time you did that super emberassing thing", 
              "You will almost come across a great fortune only to have it pass by without any knowledge of any part of it",
              "A subpar burger is in your future",
              "A drink will go down the wrong pipe causing you to choke and cough a bit. You won't die, but it will burn a little"
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * fortunes.length);
  let randomFort = fortunes[randomIndex];

  res.status(200).send(randomFort);
  console.log(randomFort)
  
});

// app.get("/api/fortune", (req, res) => {
//   const fortunes = ["You will pass me", 
//             "You will cross paths with an exceptionally flamboyant Steve Buscemi impersonator", 
//             "Someone from your past will remember that time you did that super emberassing thing", 
//             "You will almost come across a great fortune only to have it pass by without any knowledge of any part of it",
//             "A subpar burger is in your future",
//             "A drink will go down the wrong pipe causing you to choke and cough a bit. You won't die, but it will burn a little"
// ];


//   let otherRandomIndex = Math.floor(Math.random() * fortunes.length);
//   let randomTotallyTrueFortune = fortunes[otherRandomIndex];

//   res.status(200).send(randomTotallyTrueFortune)
//   console.log(randomTotallyTrueFortune)

// });
  



app.listen(4000, () => console.log("We up in this 4000"));
