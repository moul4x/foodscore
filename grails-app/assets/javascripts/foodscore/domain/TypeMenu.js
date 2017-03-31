//= wrapped

angular
    .module("foodscore")
    .factory("TypeMenu", TypeMenu);

function TypeMenu($resource) {
    var resource = $resource(
        "api/typesMenus/:id",
        {"id": "@id", 'max' : -1},
        { "update": {method: "PUT"}, "list": {method: "GET", isArray: true}}
    );
    return resource;
}
