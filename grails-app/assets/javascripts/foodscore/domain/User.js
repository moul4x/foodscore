//= wrapped

angular
    .module("foodscore")
    .factory("User", User);

function User($resource) {
    var resource = $resource(
        "api/users/:id",
        {"id": "@id"},
        { "update": {method: "PUT"}, "list": {method: "GET", isArray: true}}
    );
    return resource;
}
