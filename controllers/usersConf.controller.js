let apiato = require('apiato')
let ms = new apiato();
let usersConfModel = require("../models/userConf.model")

//-------------------  CONFIGURACION APIATO
let validationObject = {}
let populationObject = false
let options = {}
let aggregate_pipeline_dt = []
let aggregate_pipeline = []


module.exports = {
    createOne: ms.createOne(usersConfModel, validationObject, populationObject, options),
    createMany: ms.createMany(usersConfModel, validationObject, populationObject, options),

    getOneWhere: ms.getOneWhere(usersConfModel, populationObject, options),
    getOneById: ms.getOneById(usersConfModel, populationObject, options),
    getMany: ms.getMany(usersConfModel, populationObject, options),

    findUpdateOrCreate: ms.findUpdateOrCreate(usersConfModel, validationObject, populationObject, options),
    findUpdate: ms.findUpdate(usersConfModel, validationObject, populationObject, options),
    updateById: ms.updateById(usersConfModel, validationObject, populationObject, options),

    findIdAndDelete: ms.findIdAndDelete(usersConfModel, options),

    datatable_aggregate: ms.datatable_aggregate(usersConfModel, aggregate_pipeline_dt, ''),
    aggregate: ms.aggregate(usersConfModel, aggregate_pipeline, options),
}