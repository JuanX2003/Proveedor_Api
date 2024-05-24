const { response } = require('express');
const Proveedor = require('../modules/proveedor');

const proveedorGet = async (req, res = response) => {
    try {
        const proveedores = await Proveedor.find();
        res.json({ proveedores });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Error en el servidor al obtener proveedores' });
    }
};

const proveedorGetById = async (req, res = response) => {
    try {
        const { id_proveedor } = req.params; // Obtener el ID del parámetro de la solicitud
        const proveedor = await Proveedor.findById(id_proveedor); // Buscar el proveedor por su ID en la base de datos

        if (!proveedor) { // Si no se encuentra el proveedor
            return res.status(404).json({ msg: 'Proveedor no encontrado' });
        }

        res.json({ proveedor }); // Enviar el proveedor encontrado en la respuesta
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Error en el servidor al obtener proveedor por ID' });
    }
};

const proveedorPost = async (req, res = response) => {
    try {
        const { nombreproveedor, correoproveedor, telefono } = req.body;

        // Validación de datos de entrada
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

const proveedorPut = async (req, res = response) => {
    try {
        const { id_proveedor } = req.params;
        const { nombreproveedor, correoproveedor, telefono } = req.body;

        // Validación de datos de entrada
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

const proveedorDelete = async (req, res = response) => {
    try {
        // Extraer el id_proveedor de los parámetros de la solicitud
        const { id_proveedor } = req.params;

        // Intentar encontrar y eliminar el proveedor por id_proveedor
        const proveedor = await Proveedor.findOneAndDelete({ id_proveedor });

        // Si no se encuentra el proveedor, devolver un error 404
        if (!proveedor) {
            return res.status(404).json({ msg: 'Proveedor no encontrado' });
        }

        // Si el proveedor se elimina correctamente, devolver un mensaje de éxito
        res.json({ msg: 'Proveedor eliminado exitosamente', proveedor });

    } catch (error) {
        // Manejar cualquier error que ocurra durante la operación
        console.error(error);
        res.status(500).json({ msg: 'Error en el servidor al eliminar proveedor' });
    }
};


module.exports = {
    proveedorGet,
    proveedorPost,
    proveedorPut,
    proveedorDelete,
    proveedorGetById
};
