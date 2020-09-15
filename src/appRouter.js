import express from 'express';
const setRouter = (app) => {

  app.use('/', (req, res) => {
    res.json({ data: "hola" });
  });

}
export default setRouter;

