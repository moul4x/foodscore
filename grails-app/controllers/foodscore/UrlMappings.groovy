package foodscore

class UrlMappings {

    static mappings = {
        /*delete "/$controller/$id(.$format)?"(action:"delete")
        get "/$controller(.$format)?"(action:"index")
        get "/$controller/$id(.$format)?"(action:"show")
        post "/$controller(.$format)?"(action:"save")
        put "/$controller/$id(.$format)?"(action:"update")
        patch "/$controller/$id(.$format)?"(action:"patch")*/
/*
        "/$controller/$action?/$id?(.$format)?"{
            constraints {
                // apply constraints here
            }
        }*/

       // "/users/$id?/jours"(resources: 'jour')

        "/api/users"(resources:'utilisateur') {
            "/menus"(resources: 'menu')
        }

        /*"/familles"(resources:'famille') {
            "/aliments"(resources: 'aliment')
        }*/

        "/api/unites"(resources:'unite')
        "/api/familles"(resources:'famille')
        "/api/aliments"(resources:'aliment')

        "/"(view: '/index')
        //"/aliments"(view: '/aliments/index')
        //"/aliments"(resources:"aliment")
        //"/typesAliments"(resources:"famille")
        "500"(view: '/error')
        "404"(view: '/notFound')
    }
}
