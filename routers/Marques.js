const Playlist = require('../models/playlist');
const express = require('express'),
    router = express.Router()

router.delete('/:id', function (request, response) {
    let { id } = request.params;

    Playlist.findByPk(id).then((playlist) => {
        playlist.destroy().then(() => {
            response.status(204).send();
        });
    });
});

router.delete('*', function (request, response) {
    response.status(404).send();
});

router.post('/', function (request, response) {
    Playlist.create({
        name: request.body.name
    }).then((playlists) => {
        response.json(playlists);
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
    Playlist.findAll().then((playlists) => {
        response.json(playlists);
    });
});

router.get('/:id', function (request, response) {
    let { id } = request.params;

    Playlist.findByPk(id).then((playlist) => {
        if (playlist) {
            response.json(playlist);
        } else {
            response.status(404).send();
        }
    });
});

router.get('*', function (request, response) {
    response.status(404).send();
});

module.exports = router;