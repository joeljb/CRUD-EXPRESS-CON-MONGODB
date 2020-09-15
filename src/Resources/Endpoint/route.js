import express from 'express';

import Endpoints from './Endpoints.js';

var router = express.Router()

router.get('/endpoints', Endpoints.consultar);
router.get('/endpoint/:id', Endpoints.consultarId);
router.post('/endpoint/crear', Endpoints.crear);
router.put('/endpoint/editar', Endpoints.editar);
router.delete('/endpoint/eliminar', Endpoints.eliminar);

export default router;