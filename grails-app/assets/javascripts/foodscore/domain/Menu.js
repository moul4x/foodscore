//= wrapped

angular
    .module("foodscore")
    .factory("Menu", Menu);

function Menu($resource) {
    var resource = $resource(
        "api/users/:userId/menus/:id",
        {"id": "@id", 'max' : -1},
        { "update": {method: "PUT"}, "list": {method: "GET", isArray: true}}
    );
    return resource;
}
