const { response, request } = require('express');



const usuariosGet = (req = request, res = response) => {

    //const query = req.query;
    const {q, nombre = 'No name', apikey, page='1', limit} = req.query;

    res.json({
        ok: true,
        msg: 'get API - controlador',
        q,
        nombre,
        apikey,
        page,
        limit
    });
}

const usuariosPut = (req, res = response) => {

    const id = req.params.id;

    res.status(400).json({
        ok: true,
        msg: 'put API - controlador',
        id
    });
}

const usuariosPost = (req, res = response) => {

    //const body = req.body;
    const {nombre, edad} = req.body;
    res.status(201).json({
        ok: true,
        msg: 'post API - controlador',
        nombre,
        edad
    });
}

const usuariosDelete = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'delete API - controlador'
    });
}

const usuariosPatch = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'patch API - controlador'
    });
}

module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete,
    usuariosPatch
}