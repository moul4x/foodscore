//= wrapped

angular
    .module("foodscore")
    .factory("Aliment", Aliment);

function Aliment($resource) {
    var resource = $resource(
        "api/aliments/:id",
        {"id": "@id", 'max' : -1},
        { "update": {method: "PUT"}, "list": {method: "GET", isArray: true}
        /*,
            "reset": {
                url: "aliments/reset",
                method: "POST"
           }*/
        }
    );
    return resource;
}
