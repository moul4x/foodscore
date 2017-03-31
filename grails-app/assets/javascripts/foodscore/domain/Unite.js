//= wrapped

angular
    .module("foodscore")
    .factory("Unite", Unite);

function Unite($resource) {
    var resource = $resource(
        "api/unites/:id",
        {"id": "@id", 'max' : -1},
        {"update": {method: "PUT"}, "list": {method: "GET", isArray: true}}
    );
    return resource;
}
