const mongoose = require('mongoose')



const llamadaSchema = new mongoose.Schema({

    numero_telefono:{

        type: String,

        require: true

    }

})



module.exports = mongoose.model('Llamada',llamadaSchema)