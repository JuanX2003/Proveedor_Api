const { response } = require('express');

// Controlador para la solicitud GET a la ruta de proveedores
const proveedorGet = (req, res = response) => {
    res.json({
        msg: 'GET API' // Devuelve un objeto JSON con un mensaje indicando que se está accediendo a la API con GET
    });
};

// Controlador para la solicitud POST a la ruta de proveedores
const proveedorPost = (req, res = response) => {
    res.json({
        msg: 'POST API' // Devuelve un objeto JSON con un mensaje indicando que se está accediendo a la API con POST
    });
};

// Controlador para la solicitud PUT a la ruta de proveedores
const proveedorPut = (req, res = response) => {
    res.json({
        msg: 'PUT API' // Devuelve un objeto JSON con un mensaje indicando que se está accediendo a la API con PUT
    });
};

// Controlador para la solicitud DELETE a la ruta de proveedores
const proveedorDelete = (req, res = response) => {
    res.json({
        msg: 'DELETE API' // Devuelve un objeto JSON con un mensaje indicando que se está accediendo a la API con DELETE
    });
};

// Controlador para la solicitud GET por ID a la ruta de proveedores
const proveedorGetById = (req, res = response) => {
    res.json({
        msg: 'GET API by ID' // Devuelve un objeto JSON con un mensaje indicando que se está accediendo a la API con GET por ID
    });
};

// Exporta los controladores de las rutas de proveedores para que estén disponibles para otros módulos
module.exports = {
    proveedorGet,
    proveedorPost,
    proveedorPut,
    proveedorDelete,
    proveedorGetById
};

