import Endpoint from "./ModelEndpoint";

class Enpoints {

  async consultar(req, res) {
    try {
      Endpoint.find((err, endpoints) => {
        if (err) return res.json({ success: false, msg: err })

        return res.json({ success: true, data: endpoints })
      })

    } catch (err) {
      return res.json({ success: false, msg: err })
    }
  }
  
  async consultarId(req, res) {
    try {
      Endpoint.findById(req.params.id, (err, endpoint) => {
        if (err) {
          return res.json({ success: false, msg: err })
        };
        return res.json({ success: true, data: endpoint })
      });

    } catch (err) {
      return res.json({ success: false, msg: err })
    }
  }
  async crear(req, res) {
    try {
      const { name, dni, email, cellPhone } = req.body;

      if (!name) {
        return res.status(400).json({
          msg: "Nombre es requerido",
          success:false
        });
      }
      if (!dni) {
        return res.status(400).json({
          msg: "Dni es requerido",
          success: false
        });
      }
      if (!email) {
        return res.status(400).json({
          msg: "Email es requerido",
          success: false
        });
      }
      if (!cellPhone) {
        return res.status(400).json({
          msg: "Telefono es requerido",
          success: false
        });
      }

      let endpoint = new Endpoint({
        name,
        email,
        cellPhone,
        dni
      });

      const save = await endpoint.save();

      res.status(200).json({
        success:true,
        data: save
      });
    }
    catch (e) {
      return res.json({ success: false, error: e })
    }

  }
  async editar(req, res) {
    try {
      const { id, name, dni, email, cellPhone } = req.body;

      if (!id) {
        return res.status(400).json({
          msg: "Id es requerido",
          success: false
        });
      }
      if (!name) {
        return res.status(400).json({
          msg: "Nombre es requerido",
          success: false
        });
      }
      if (!dni) {
        return res.status(400).json({
          msg: "Dni es requerido",
          success: false
        });
      }
      if (!email) {
        return res.status(400).json({
          msg: "Email es requerido",
          success: false
        });
      }
      if (!cellPhone) {
        return res.status(400).json({
          msg: "Telefono es requerido",
          success: false
        });
      }

      console.log('id')
      console.log(id)
      console.log('id')
      Endpoint.findById(id, function (err, endpoint) {
        if (err) return res.json({ success: false, msg: err });

        console.log(endpoint)

        if (endpoint){
          endpoint.name = name
          endpoint.email = email
          endpoint.cellPhone = cellPhone
          endpoint.dni = dni

          endpoint.save(function (err, endpointEdit) {
            if (err) return res.json({ success: false, msg: err });;

            return res.json({ success: true, data: endpointEdit });
          });
        }else{
          return res.json({ success: false, msg: "id: " + id + " no encontrado" });
        }
      });

    } catch (err) {
      return res.json({ success: false, msg: err });
    }
  }

  async eliminar(req, res) {
    try {
      const {id} = req.body;

      Endpoint.findById(id, function (err, endpoint) {
        if (err) {
          throw new error_types.InfoError(err);
        };

        if (endpoint) {
          endpoint.delete(function (err, endpoint) {
            if (err) return res.json({ success: false, msg: err });

            return res.json({ success: true, data: endpoint });
          });
        } else {
          return res.json({ success: false, msg: "id: " + id + " no encontrado" });
        }

      });
    } catch (err) {
      return res.json({ success: false, msg: err });
    }
  }
}

export default new Enpoints;