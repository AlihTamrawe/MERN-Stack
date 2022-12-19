

module.exports.index = (request, response) => {
    response.json({
       message: "Hello World"
    });
}

const { Person } = require('../models/person.model');
module.exports.createPerson = (request, response) => {
    const { firstName, lastName } = request.body;
    Person.create({
        firstName,
        lastName
    })
        .then(person => response.json(person))
        .catch(err => response.json(err));
}
module.exports.showPerson = (req, res) => {
    Person.find()
    .then(allDaPerson => res.json({ persons: allDaPerson }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};