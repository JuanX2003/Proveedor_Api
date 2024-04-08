const { Router } = require('express');
const router = Router();
const { proveedorGet, proveedorPost, proveedorPut, proveedorDelete, proveedorGetById } = require('../controllers/proveedor');

// Ruta para obtener todos los proveedores (GET '/')
router.get('/', proveedorGet);

// Ruta para obtener un proveedor por su ID (GET '/:id_proveedor')
router.get('/:id_proveedor', proveedorGetById);

// Ruta para crear un nuevo proveedor (POST '/')
router.post('/', proveedorPost);

// Ruta para actualizar un proveedor existente (PUT '/:idProveedor')
router.put('/:id_proveedor', proveedorPut);

// Ruta para eliminar un proveedor existente (DELETE '/:idProveedor')
router.delete('/:id_proveedor', proveedorDelete);

module.exports = router;
