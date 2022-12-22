const mongoose = require('mongoose');
const TeamSchema = new mongoose.Schema({
    nameTeam: {type:String ,
        required: [
            true,
            "team Name  is required"
        ],
        minLength: [3,"Name have to be at least 3 characters."],
    },
    position:{
        type:String,
        required:[ true, "position  is required"  ],
        minLength: [5,"position have to be at least 3 characters."],
        
    }

}, { timestamps: true });
module.exports.Team = mongoose.model('Team', TeamSchema);
