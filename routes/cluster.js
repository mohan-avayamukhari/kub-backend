import express from "express"
import Cluster from "../models/clusterModel.js"

const router = express.Router()

router.get("", async (request, response) => {
  await Cluster.find().then((data) => {
    response.json(data);
  });
});

router.get("/:id", async (request, response) => {
  await Cluster.findById(request.params.id).then((data => {
    response.json(data)
  }))
});

router.post("", async (request, response) => {
  const body = request.body;
  const person = new Cluster({
    clusterName: body.clusterName,
    fdqn: body.fdqn,
    ip: body.ip,
    port: body.port,
    token: body.token,
  })
  await person.save().then(savedPerson => {
    response.json(savedPerson)
  })
});

router.delete("/:id", async (request, response) => {
  await Contact.findByIdAndDelete(request.params.id).then(() => {
    response.status(204).end()
  })
});

export default router