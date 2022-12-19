const PersonController = require('../controllers/Person.controller');
module.exports = function(app){
    app.get('/api', PersonController.index);

    app.post('/api/people', PersonController.createPerson);
    app.get('/api/people/all', PersonController.showPerson);


}

