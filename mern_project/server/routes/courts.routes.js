const CourtController = require('../controllers/courts.controllers')

const routes = (app) => {
    app.get("/api", CourtController.testRoute);
    app.get("/api/courts", CourtController.getAll);
    app.post("/api/courts", CourtController.create);
    app.get("/api/courts/:id", CourtController.getOne);    
    app.put("/api/courts/:id", CourtController.update);
    app.delete("/api/courts/:id", CourtController.delete);
};

module.exports = routes