const { response } = require('express');
const Proveedor = require('../modules/proveedor');

// Obtener todos los proveedores
const proveedorGet = async (req, res = response) => {
    try {
        const proveedores = await Proveedor.find();
        res.json({ proveedores });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Error en el servidor al obtener proveedores' });
    }
};

// Obtener un proveedor por ID
const proveedorGetById = async (req, res = response) => {
    try {
        const { id_proveedor } = req.params;
        const proveedor = await Proveedor.findById(id_proveedor);

        if (!proveedor) {
            return res.status(404).json({ msg: 'Proveedor no encontrado' });
        }

        res.json({ proveedor });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Error en el servidor al obtener proveedor por ID' });
    }
};

// Crear un nuevo proveedor
const proveedorPost = async (req, res = response) => {
    try {
        const { nombreproveedor, correoproveedor, telefono } = req.body;

        if (!nombreproveedor || !correoproveedor || !telefono) {
            return res.status(400).json({ msg: 'Por favor, proporcione nombre, correo y teléfono del proveedor' });
        }

        const proveedor = new Proveedor({ nombreproveedor, correoproveedor, telefono });
        await proveedor.save();
        res.json({ msg: 'Proveedor creado exitosamente', proveedor });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Error en el servidor al crear proveedor' });
    }
};

// Actualizar un proveedor existente
const proveedorPut = async (req, res = response) => {
    try {
        const { id_proveedor } = req.params;
        const { nombreproveedor, correoproveedor, telefono } = req.body;

        if (!nombreproveedor || !correoproveedor || !telefono) {
            return res.status(400).json({ msg: 'Por favor, proporcione nombre, correo y teléfono del proveedor' });
        }

        const proveedor = await Proveedor.findByIdAndUpdate(
            id_proveedor,
            { nombreproveedor, correoproveedor, telefono },
            { new: true }
        );

        if (!proveedor) {
            return res.status(404).json({ msg: 'Proveedor no encontrado' });
        }

        res.json({ msg: 'Proveedor actualizado exitosamente', proveedor });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Error en el servidor al actualizar proveedor' });
    }
};

// Eliminar un proveedor
const proveedorDelete = async (req, res = response) => {
    try {
        const { id_proveedor } = req.params;

        const proveedor = await Proveedor.findByIdAndDelete(id_proveedor);

        if (!proveedor) {
            return res.status(404).json({ msg: 'Proveedor no encontrado' });
        }

        res.json({ msg: 'Proveedor eliminado exitosamente', proveedor });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Error en el servidor al eliminar proveedor' });
    }
};

module.exports = {
    proveedorGet,
    proveedorGetById,
    proveedorPost,
    proveedorPut,
    proveedorDelete
};

