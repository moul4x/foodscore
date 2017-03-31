package foodscore

import grails.rest.Resource
import groovy.transform.EqualsAndHashCode
import groovy.transform.ToString
import org.springframework.security.access.annotation.Secured

@Secured(['ROLE_USER'])
@EqualsAndHashCode(includes='username')
@ToString(includes='username', includeNames=true, includePackage=false)
@Resource(uri = '/api/users', readOnly = false, formats = ['json', 'xml'])
class User implements Serializable {

	private static final long serialVersionUID = 1

	transient springSecurityService

	String username
	String password
	boolean enabled = true
	boolean accountExpired
	boolean accountLocked
	boolean passwordExpired

	User(String username, String password) {
		this()
		this.username = username
		this.password = password
	}

	Set<Role> getAuthorities() {
		UserRole.findAllByUser(this)*.role
	}

	def beforeInsert() {
		encodePassword()
	}

	def beforeUpdate() {
		if (isDirty('password')) {
			encodePassword()
		}
	}

	protected void encodePassword() {
		password = springSecurityService?.passwordEncoder ? springSecurityService.encodePassword(password) : password
	}

	static transients = ['springSecurityService']

	static constraints = {
		username blank: false, unique: true
		password blank: false
	}

	static mapping = {
		password column: '`password`'
	}

	static bootstrap() {
		[
				[id: 1L, username: "saida", password: "test"],
				[id: 2L, username: "fabien", password: "test"]
		].collect { new User(it) }
	}
}
