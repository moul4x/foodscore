package foodscore

import grails.rest.Resource
import org.springframework.security.access.annotation.Secured

@Secured(['ROLE_USER'])
@Resource(uri = '/api/typesMenus', readOnly = false, formats = ['json', 'xml'])
class TypeMenu {

    String libelle
    Integer ordre

    static constraints = {
        libelle nullable: false
    }

    static bootstrap() {
        [
                [id: 1L, libelle: "Matin", ordre: 1],
                [id: 2L, libelle: "Midi", ordre: 2],
                [id: 3L, libelle: "Collation", ordre: 3],
                [id: 4L, libelle: "Soir", ordre: 4]
        ].collect { new TypeMenu(it) }
    }
}
