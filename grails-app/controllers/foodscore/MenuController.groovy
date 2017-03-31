package foodscore

import grails.rest.RestfulController
import org.joda.time.DateTime
import org.joda.time.DateTimeConstants
import org.joda.time.format.DateTimeFormat
import org.joda.time.format.DateTimeFormatter
import org.springframework.security.access.annotation.Secured

//@Resource(uri = '/menus', readOnly = false, formats = ['json', 'xml'])
@Secured(['ROLE_USER'])
class MenuController extends RestfulController {
    static responseFormats = ['json', 'xml']

    MenuController() {
        super(Menu)
    }

    def index() {
        DateTimeFormatter formatter = DateTimeFormat.forPattern("dd/MM/yyyy")
        DateTime dt = params.date ? formatter.parseDateTime(params.date) : new DateTime()
        respond Menu.findAllByUserAndDateBetween(User.get(params.userId), firstDayOfWeek(dt), lastDayOfWeek(dt))
    }

    private static DateTime firstDayOfWeek(DateTime date) {
        date.withDayOfWeek(DateTimeConstants.MONDAY)
    }

    private static DateTime lastDayOfWeek(DateTime date) {
        date.withDayOfWeek(DateTimeConstants.MONDAY).plusWeeks(1).plusMinutes(-1)
    }
}
