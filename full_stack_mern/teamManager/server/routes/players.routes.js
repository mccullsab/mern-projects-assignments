const PlayerController = require('../controllers/players.controllers')

const routes = (app) => {
    app.get("/api", PlayerController.testRoute);
    app.get("/api/players", PlayerController.getAll);
    app.post("/api/players", PlayerController.create);
    app.get("/api/players/:id", PlayerController.getOne);    
    app.put("/api/players/:id", PlayerController.update);
    app.delete("/api/players/:id", PlayerController.delete);
};

module.exports = routes