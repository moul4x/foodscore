package foodscore

import grails.rest.RestfulController
import org.springframework.security.access.annotation.Secured

@Secured(['ROLE_USER'])
class AlimentController extends RestfulController {
    static responseFormats = ['json', 'xml']

    AlimentController() {
        super(Aliment)
    }


}
