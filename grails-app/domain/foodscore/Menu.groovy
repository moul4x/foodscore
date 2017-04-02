package foodscore

import grails.databinding.BindingFormat

class Menu {

    TypeMenu typeMenu
    @BindingFormat('dd/MM/yyyy')
    Date date
    Utilisateur utilisateur

    static hasMany = [menusAliments: MenuAliment]

    static constraints = {
        typeMenu nullable: false
        date nullable: false
        utilisateur nullable: false
    }

    static mapping = {
        menusAliments cascade: 'all-delete-orphan'
        typeMenu cascade: 'none'
        utilisateur cascade: 'none'
    }

    static bootstrap() {
        [
                [typeMenu: 1L, jour: 1L, date: new Date(), utilisateur: 1L]
        ].collect { new Menu(it) }
    }
}
