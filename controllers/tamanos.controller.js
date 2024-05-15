let apiato = require('apiato')
let ms = new apiato();
let tamanosModel = require("../models/tamanos.model")

//-------------------  CONFIGURACION APIATO
let validationObject = {}
let populationObject = false
let options = {}
let aggregate_pipeline_dt = []
let aggregate_pipeline = []


module.exports = {
    createOne: ms.createOne(tamanosModel, validationObject, populationObject, options),
    createMany: ms.createMany(tamanosModel, validationObject, populationObject, options),

    getOneWhere: ms.getOneWhere(tamanosModel, populationObject, options),
    getOneById: ms.getOneById(tamanosModel, populationObject, options),
    getMany: ms.getMany(tamanosModel, populationObject, options),

    findUpdateOrCreate: ms.findUpdateOrCreate(tamanosModel, validationObject, populationObject, options),
    findUpdate: ms.findUpdate(tamanosModel, validationObject, populationObject, options),
    updateById: ms.updateById(tamanosModel, validationObject, populationObject, options),

    findIdAndDelete: ms.findIdAndDelete(tamanosModel, options),

    datatable_aggregate: ms.datatable_aggregate(tamanosModel, aggregate_pipeline_dt, ''),
    aggregate: ms.aggregate(tamanosModel, aggregate_pipeline, options),
}