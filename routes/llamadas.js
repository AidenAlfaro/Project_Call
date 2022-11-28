const express = require('express')
const router = express.Router()
const Llamada = require('../models/hacerLlamada')

//Getting all
router.get('/', async(req, res) =>{
    try{
        const llamadas = await Llamada.find()
        res.json(llamadas)
    }catch (err){
        res.status(500).json({message: err.message})                //500 error is server error
    }
})

//Getting one
router.get('/:id', getLlamada,(req, res) =>{
    res.json(res.llamada.numero_telefono)
})

//Creating one
router.post('/', async (req, res) =>{
    const llamada = new Llamada({
        numero_telefono: req.body.numero_telefono
    })
    try{
        const nuevaLlamada = await llamada.save() 
        res.sendStatus(201).json(nuevaLlamada)                  //201 is object created successfully
        
    }catch(err){
        res.sendStatus(400).json({ message : err.message})       //400 is user data wrong not server error
    }
})

//Deleting all
router.delete('/:id', getLlamada, async (req, res) =>{
    try{
        await res.call.remove()
        res.json({message: 'Llamada eliminada Satisfactoriamente'})
    }catch(err){
        res.status(500).json({message: err.message})
    }
})

async function getLlamada(req,res,next){
    let llamada
    try{
        llamada = await Llamada.findById(req.params.id)
        if(llamada == null){
            return res.sendStatus(404).json({message:'No se pudo localizar la llamada'})
        }
    }catch(err){
        return res.sendStatus(500).json({message: err.message})
    }
    res.llamada = llamada
    next()
}
module.exports = router