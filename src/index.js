const express = require('express');
const app = express(); 

app.use(express(json));

app.get("/courses", (request, response) => {
    const query = request.query; //Query Params;
    console.log(query);
    return response.json(["Curso 1", "Curso 2", "Curso 3"]);
});

app.post("/courses", (resquest, response) => {
    const body = request.body; //Body Params;
    console.log(body);
    return response.json(["Curso 1", "Curso 2", "Curso 3", "Curso 4"]);
});

app.put("/courses/:id", (request, response) => {
    const params = request.params; //Route Params;
    console.log(params);
    return response.json(["Curso 7", "Curso 2", "Curso 3", "Curso 4"]);
});

app.patch("/courses/:id", (request, response) => {
    return response.json(["Curso 7", "Curso 8", "Curso 3", "Curso 4"]);
});

app.delete("/courses/:id", (request, response) => {
    return response.json(["Curso 7", "Curso 8", "Curso 4"]);
});

app.listen(3333);
