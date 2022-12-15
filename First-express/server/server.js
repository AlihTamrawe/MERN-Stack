const express = require("express");
const app = express();
const { faker } = require('@faker-js/faker');
const { json } = require("express");

const users = [
  { firstName: "Reimu",  lastName: "Hakurei"    },
  { firstName: "Marisa", lastName: "Kirisame"   },
  { firstName: "Sanae",  lastName: "Kochiya"    },
  { firstName: "Sakuya", lastName: "Izayoi"     },
  { firstName: "Momiji", lastName: "Inubashiri" }
];


const createcompany =() => {
  const  company={
  name:faker.company.name(),
  address:{
    street:faker.address.street(),
    city:faker.address.cityName(),
    state:faker.address.state(),
    zipCode:faker.address.zipCode(),
    country:faker.address.country()
  },
  email:faker.internet.email(),
  _id:faker.datatype.uuid()
}
return company;
}

const createuser =() => {
  const  user={
  firstName:faker.name.firstName(),
  lastName:faker.name.lastName(),
  email:faker.internet.email(),
  phone:faker.phone.number(),
  passowrd:faker.internet.password(),
  _id:faker.datatype.uuid()
}
return user;
}
// req is short for request
// res is short for response
app.get("/api", (req, res) => {
  res.json(createuser())

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
const createProduct = () => {
  const newFake = {
      name: faker.commerce.productName(),
      price: "$" + faker.commerce.price(),
      department: faker.commerce.department()
  };
  return newFake;
};
  
const newFakeProduct = createProduct();
console.log(newFakeProduct);

const newuser = createuser();
console.log(newuser);

const newcompany = createcompany();
console.log(newcompany);
