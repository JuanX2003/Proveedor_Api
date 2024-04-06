const { Schema, model } = require("mongoose");

// Define el esquema del modelo Proveedor
const ProveedorSchema = Schema({
    nombreproveedor: {
        type: String,
        required: [true, "El nombre es obligatorio"],
    },
    correoproveedor: {
        type: String,
        required: [true, "El correo es obligatorio"],
    },
    telefono: {
        type: String,
        required: [true, "El teléfono es obligatorio"],
    },
});

// Crea y exporta el modelo Proveedor a partir del esquema ProveedorSchema
const Proveedor = model("Proveedor", ProveedorSchema);
module.exports = Proveedor;
