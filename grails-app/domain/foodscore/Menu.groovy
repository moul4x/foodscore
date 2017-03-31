package foodscore

import grails.databinding.BindingFormat
import org.springframework.security.access.annotation.Secured

class Menu {

    TypeMenu typeMenu
    @BindingFormat('dd/MM/yyyy')
    Date date
    User user

    static hasMany = [menusAliments: MenuAliment]

    static constraints = {
        typeMenu nullable: false
        date nullable: false
        user nullable: false
    }

    static mapping = {
        menusAliments cascade: 'all-delete-orphan'
        typeMenu cascade: 'none'
        user cascade: 'none'
    }

    static bootstrap() {
        [
                [typeMenu: 1L, jour: 1L, date: new Date(), user: 1L]
        ].collect { new Menu(it) }
    }
}
