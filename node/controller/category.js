var dbSql = require("../config/dbconnection")
const models = require('../model');

module.exports = {
    addCategory: async(req, res) => {
        console.log(req.body)
        let name = req.body.name
        let result = await models.category.create({name});
        res.status(200).json({"message":'success',"data":result})
    },

    getCategory: async(req, res) => {
        const limit = 10;
        const page = req.query.page;
        const offset = (page - 1) * limit;
        let result = await models.category.findAll()
        res.status(200).json({"message":'success',"data":result})

    },

    deleteCategory: async(req, res) => {
        const Id = req.params.Id;
        let result = await models.category.destroy({where: {
            id: Id
        }})
        res.status(200).json({"message":'success'})
    },

    editCategory: async(req, res) => {
        let name = req.body.name
        let Id = req.params.Id
        let result = await models.category.update({
            name: name
        }, {
            where: {
                id: Id,
            }
        });
        res.status(200).json({"message":'success'})
    },
}