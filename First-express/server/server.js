const express = require("express");
const app = express();

const users = [
  { firstName: "Reimu",  lastName: "Hakurei"    },
  { firstName: "Marisa", lastName: "Kirisame"   },
  { firstName: "Sanae",  lastName: "Kochiya"    },
  { firstName: "Sakuya", lastName: "Izayoi"     },
  { firstName: "Momiji", lastName: "Inubashiri" }
];
// req is short for request
// res is short for response
app.get("/api", (req, res) => {
  res.send("Our express api server is now sending this over to the browser");
});

const server = app.listen(8000, () =>
  console.log(`Server is locked and loaded on port ${server.address().port}!`)
);
console.log("no way")


app.post("/api/users",(req,res)=>{
  console.log(req.body);
  users.push(req.body);
  // we always need to respond with something
  res.json( { status: "ok" } );

});

app.get("/api/users/:id", (req, res) => {
  // we can get this `id` variable from req.params
  console.log(req.params.id);
  console.log(users[users.length-1].firstName)

  // assuming this id is the index of the users array we could return one user this way
  res.json( users[req.params.id] );
});
