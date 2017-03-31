package foodscore

import grails.rest.RestfulController
import org.springframework.security.access.annotation.Secured

@Secured(['ROLE_USER'])
class FamilleController extends RestfulController {
    static responseFormats = ['json', 'xml']

    FamilleController() {
        super(Famille)
    }


}
