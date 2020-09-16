import express from 'express';
import routerEndpoints from './Resources/Endpoint/route.js';

const setRouter = (app) => {

  // app.use('/', (req, res) => {
  //   res.json({ data: "hola" });
  // });

  app.use('/api', routerEndpoints);

}
export default setRouter;

