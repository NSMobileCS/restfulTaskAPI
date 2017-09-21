var controller = require("../controllers/taskControl.js");

module.exports = function(app){

    app.get('/tasks', controller.listTasks);

    app.get('/tasks/:id', controller.getTaskByID);

    app.post('/tasks/new', controller.newTask);

    app.put('/tasks/:id', controller.updateByID);

    app.delete('/tasks/:id', controller.destroyUponRequest);

}