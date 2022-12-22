const { Team } = require('../models/team.model');

    // The method below is new
module.exports.createTeam = (request, response) => {
    const { nameTeam,position } = request.body;
    Team.create({
        nameTeam,position,
    })
        .then(team => response.json(team))
        .catch(err => response.status(400).json(err))
}

module.exports.getAllTeam = (request, response) => {
    Team.find({})
        .then(Teams => response.json(Teams))
        .catch(err => response.json(err))
}

module.exports.getTeam = (request, response) => {
    Team.findOne({_id:request.params.id})
        .then(team => response.json(team))
        .catch(err => response.json(err))
}

module.exports.updateTeam = (request, response) => {
    Team.findOneAndUpdate({_id: request.params.id}, request.body, {new:true,runValidators:true})
        .then(updatedTeam => response.json(updatedTeam))
        .catch(err => response.status(400).json(err))

}


module.exports.deleteTeam = (request, response) => {
    Team.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}










