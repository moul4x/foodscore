package foodscore

import grails.rest.Resource

//@Resource(uri = '/aliments', readOnly = false, formats = ['json', 'xml'])
class Aliment {

    BigDecimal quantite
    String libelle
    Unite unite
    Famille famille
    BigDecimal points

    static constraints = {
        quantite nullable: false
        libelle nullable: false
        unite nullable: false
        famille nullable: false
        points nullable: false
    }

    static bootstrap() {
        [
                [id: 1L, quantite: "100", unite: 1L, famille: 1L, libelle: "Jambon cru", points: 1],
                [id: 2L, quantite: "100", unite: 1L, famille: 1L, libelle: "Jambon fumé", points: 2]
        ].collect { new Aliment(it) }
    }
}
