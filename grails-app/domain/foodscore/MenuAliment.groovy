package foodscore

import grails.rest.Resource
import org.springframework.security.access.annotation.Secured

@Secured(['ROLE_USER'])
@Resource(uri = '/api/menusAliments', readOnly = false, formats = ['json', 'xml'])
class MenuAliment {

    BigDecimal coefficient

    static belongsTo = [aliment: Aliment, menu: Menu]

    static constraints = {
        aliment nullable: false
        menu nullable: false
        coefficient nullable: false
    }

    static mapping = {
        aliment cascade: 'none'
        menu cascade: 'none'
    }

    static bootstrap() {
        [
                [menu: 1L, aliment: 1L, coefficient: 1.5]
        ].collect { new MenuAliment(it) }
    }
}
