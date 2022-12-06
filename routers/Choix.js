const {Cars} = require("../models/index")
const express = require('express'),
router = express.Router()

router.get('/:marques', function (request, response) {
    let { marques } = request.params;

    Cars.findAll({
        where: {
            name:marques
        }
      }).then((cars) => {
        if (cars) {
            response.json(cars);
        } else {
            response.status(406).send();
        }
    });
});

module.exports = router;