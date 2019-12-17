const { connect } = require('../models/repository')
const hospitaisModel = require('../models/hospitaisSchema')
// const { gruposModel } = require('../models/gruposSchema')


connect()


const getAll = (request, response) => {
  hospitaisModel.find((error, hospital) => {
    if (error) {
      return response.status(500).send(error)
    }

    return response.status(200).send(hospital)
  })
}

const getById = (request, response) => {
  const id = request.params.id

  return hospitaisModel.findById(id, (error, hospital) => {
    if (error) {
      return response.status(500).send(error)
    }

    if (hospital) {
      return response.status(200).send(hospital)
    }

    return response.status(404).send('Hospital não encontrado.')
  })
}

const addHospitais = (request, response) => {
  const novoHospital = new hospitaisModel(request.body)

  novoHospital.save((error) => {
    if (error) {
      return response.status(500).send(error)
    }

    return response.status(201).send(novoHospital)
  })
}

const remove = (request, response) => {
  const id = request.params.id

  hospitaisModel.findByIdAndDelete(id, (error, hospital) => {
    if (error) {
      return response.status(500).send(error)
    }

    if (hospital) {
      return response.status(200).send(id)
    }

    return response.status(404).send('Hospital não encontrado.')
  })
}

const update = (request, response) => {
  const id = request.params.id
  const hospitalUpdate = request.body
  const options = { new: true }

 hospitaisModel.findByIdAndUpdate(
    id,
    hospitalUpdate,
    options,
    (error, hospital) => {
      if (error) {
        return response.status(500).send(error)
      }

      if (hospital) {
        return response.status(200).send(hospital)
      }

      return response.status(404).send('Hospital não encontrado.')
    }
  )
}



module.exports = {
  getAll,
  getById,
  addHospitais,
  remove,
  update,
}