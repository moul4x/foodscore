package foodscore

import grails.rest.RestfulController
import org.springframework.security.access.annotation.Secured

@Secured(['ROLE_USER'])
class UniteController extends RestfulController {
    static responseFormats = ['json', 'xml']

    UniteController() {
        super(Unite)
    }


}
