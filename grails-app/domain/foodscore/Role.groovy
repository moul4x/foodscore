package foodscore

import groovy.transform.EqualsAndHashCode
import groovy.transform.ToString

@EqualsAndHashCode(includes='authority')
@ToString(includes='authority', includeNames=true, includePackage=false)
class Role implements Serializable {

	private static final long serialVersionUID = 1

	String authority

	Role(String authority) {
		this()
		this.authority = authority
	}

	static constraints = {
		authority blank: false, unique: true
	}

	static mapping = {
		cache true
	}

	static bootstrap() {
		[
				[id: 1L, authority: "ROLE_ADMIN"],
				[id: 2L, authority: "ROLE_USER"]
		].collect { new Role(it) }
	}
}
