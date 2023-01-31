const AutorController = require("../controllers/autor.controller");

module.exports = function (app) {
    app.post("/api/crearautor", AutorController.crearAutor);
    app.get("/api/listarautores",AutorController.get_all);
    app.get("/api/autor/:id",AutorController.get_autor);
    app.put("/api/autor/:id",AutorController.update_autor);
    app.delete("/api/autor/:id",AutorController.delete_autor);
};