package foodscore

import grails.rest.RestfulController
import org.springframework.security.access.annotation.Secured

@Secured(['ROLE_USER'])
class UtilisateurController extends RestfulController {
    static responseFormats = ['json', 'xml']

    UtilisateurController() {
        super(Utilisateur)
    }

    def index() {
        // le restful controller ça marche pas, on fait comme ça en attendant.
        respond Utilisateur.findAllByUsername(params.username)
    }

}
