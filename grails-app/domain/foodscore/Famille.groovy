package foodscore

import grails.rest.Resource
import org.springframework.security.access.annotation.Secured

//@Secured(['ROLE_USER'])
//@Resource(uri = '/api/familles', readOnly = false, formats = ['json', 'xml'])
class Famille {

    String libelle

    static constraints = {
        libelle nullable: false
    }

    static mapping = {
    }

    static bootstrap() {
        [
                [id: 1L, libelle: "Charcuterie"],
                [id: 2L, libelle: "Féculents"]
        ].collect { new Famille(it) }
    }
}
