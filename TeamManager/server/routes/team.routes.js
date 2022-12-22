const TeamController = require('../controllers/team.controller');
module.exports = function(app){


    app.post('/api/team/new', TeamController.createTeam);
    // ...
app.get('/api/team/', TeamController.getAllTeam);
// // ...

app.get('/api/team/:id', TeamController.getTeam);
app.put('/api/team/:id', TeamController.updateTeam);
app.delete('/api/team/:id', TeamController.deleteTeam);




}
