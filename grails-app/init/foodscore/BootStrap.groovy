package foodscore

class BootStrap {

    def init = { servletContext ->
        User.bootstrap()*.save(failOnError: true, flush: true)
        Role.bootstrap()*.save(failOnError: true, flush: true)
        UserRole.bootstrap()*.save(failOnError: true, flush: true)
        TypeMenu.bootstrap()*.save(failOnError: true, flush: true)
        Unite.bootstrap()*.save(failOnError: true, flush: true)
        Famille.bootstrap()*.save(failOnError: true, flush: true)

        Aliment.bootstrap()*.save(failOnError: true, flush: true)
        Menu.bootstrap()*.save(failOnError: true, flush: true)
        MenuAliment.bootstrap()*.save(failOnError: true, flush: true)
    }

    def destroy = {
    }
}
