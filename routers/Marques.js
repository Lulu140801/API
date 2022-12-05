const {Cars} = require("../models/index")
const express = require('express'),
    router = express.Router()

router.delete('/:id', function (request, response) {
    let { id } = request.params;

    Cars.findByPk(id).then((cars) => {
        cars.destroy().then(() => {
            response.status(204).send();
        });
    });
});

router.delete('*', function (request, response) {
    response.status(404).send();
});

router.post('/', function (request, response) {
    Cars.create({
        name: request.body.name
    }).then((cars) => {
        response.json(cars);
    }, (validation) => {
        response.status(400).json({
            errors: validation.errors.map((error) => {
                return {
                    attribute: error.path,
                    message: error.message
                };
            })
        });
    });
});

router.post('*', function (request, response) {
    response.status(404).send();
});

router.get('/', function (request, response) {
    Cars.findAll().then((cars) => {
        response.json(cars);
    });
});

router.get('/:id', function (request, response) {
    let { id } = request.params;

    Cars.findByPk(id).then((cars) => {
        if (cars) {
            response.json(cars);
        } else {
            response.status(404).send();
        }
    });
});

router.get('*', function (request, response) {
    response.status(404).send();
});

module.exports = router;