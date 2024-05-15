let apiato = require('apiato')
let ms = new apiato();
let usersModel = require("../models/usuarios.model")

//-------------------  CONFIGURACION APIATO
let validationObject = {}
let populationObject = false
let options = {}
let aggregate_pipeline_dt = []
let aggregate_pipeline = []


module.exports = {
    createOne: ms.createOne(usersModel, validationObject, populationObject, options),
    createMany: ms.createMany(usersModel, validationObject, populationObject, options),

    getOneWhere: ms.getOneWhere(usersModel, populationObject, options),
    getOneById: ms.getOneById(usersModel, populationObject, options),
    getMany: ms.getMany(usersModel, populationObject, options),

    findUpdateOrCreate: ms.findUpdateOrCreate(usersModel, validationObject, populationObject, options),
    findUpdate: ms.findUpdate(usersModel, validationObject, populationObject, options),
    updateById: ms.updateById(usersModel, validationObject, populationObject, options),

    findIdAndDelete: ms.findIdAndDelete(usersModel, options),

    datatable_aggregate: ms.datatable_aggregate(usersModel, aggregate_pipeline_dt, ''),
    aggregate: ms.aggregate(usersModel, aggregate_pipeline, options),
}