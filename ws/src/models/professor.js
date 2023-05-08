const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const professorSchema = new Schema({
    ra: {
      type: String,
      required: true
    },
    nome_completo: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    senha: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Professor', professorSchema);