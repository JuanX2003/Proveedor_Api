const { Router } = require('express');
const router = Router();
const { proveedorGet, proveedorPost, proveedorPut, proveedorDelete } = require('../controllers/proveedor');

// Ruta para obtener todos los proveedores (GET '/')
router.get('/', proveedorGet);

// Ruta para crear un nuevo proveedor (POST '/')
router.post('/', proveedorPost);

// Ruta para actualizar un proveedor existente (PUT '/:idProveedor')
router.put('/:id_proveedor', proveedorPut); // Cambiar _id a id_proveedor

// Ruta para eliminar un proveedor existente (DELETE '/:idProveedor')
router.delete('/:id_proveedor', proveedorDelete); // Cambiar _id a id_proveedor

module.exports = router;
