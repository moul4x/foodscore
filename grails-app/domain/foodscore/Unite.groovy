package foodscore

import grails.rest.Resource
import org.springframework.security.access.annotation.Secured

//@Secured(['ROLE_USER'])
//@Resource(uri = '/api/unites', readOnly = false, formats = ['json', 'xml'])
class Unite {
    String libelle

    static constraints = {
        libelle nullable: false
    }

    static bootstrap() {
        [
                [id: 1L, libelle: "g"],
                [id: 2L, libelle: "L"],
                [id: 3L, libelle: "Cuillères"],
        ].collect { new Unite(it) }
    }
}
