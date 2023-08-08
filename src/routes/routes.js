const { Router } = require('express');

// const usuarios = require('./usuario.js');
// const applications = require('./application.js');

const router = Router();

// Configurar los routers
// router.use('/usuario', usuarios);
// router.use('/appli', applications);
router.get('/', (req, res) => {
    res.send('FUNCIONA');
})

module.exports = router;