//= wrapped

angular
    .module("foodscore")
    .factory("Famille", Famille);

function Famille($resource) {
    var resource = $resource(
        "api/familles/:id",
        {"id": "@id", 'max' : -1},
        {"update": {method: "PUT"}, "list": {method: "GET", isArray: true}}
    );
    return resource;
}
