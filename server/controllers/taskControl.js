var mongoose = require("mongoose");
var Task = mongoose.model('Task');

module.exports = {

    listTasks: function(req, res){
        var tasks = Task.find({}, function(err, tasksFound){
            if (err){
                console.log(err);
            }
            else {
                return res.json(tasksFound);
            }
        });
    },

    
    newTask: function (req, res){
        var task = new Task({title: req.body['title'],
                            desc: req.body['desc'], 
                            completed: req.body['completed']});
        task.save(function (err){
            if (err){
                console.log("PROBLEM: "+err);
            }
            return res.redirect('/tasks');
        });
    },

    getTaskByID: function(req, res){
        var task = Task.findOne({_id: req.params.id}, function(err, result){
            if (err){
                console.log(err);
            }
            return res.json(result);
        });
    },

    updateByID: function(req, res){
        Task.findOne({_id: req.params.id}, function(err, result){
            if (err){
                console.log(err);
            }
            for (var key in req.body){
                result[key] = req.body[key];
            }
            result.save();
            return res.redirect('/tasks/'+req.params.id);
        });
    },

    destroyUponRequest: function(req, res){
            Critter.findByIdAndRemove(req.params.id, function (err, removed){
                if (err){
                    console.log(err);
                }
                return res.redirect('/tasks');
            }
    )}
}
