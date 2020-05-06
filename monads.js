/**
 *
 * @param value
 * @return
 *
 */

function Just(value) {
	this.value = value
}

Just.prototype.bind = function(transform) {
	return transform(this.value)
}

Just.prototype.toString = function() {
	return `Just(${this.value})`
}

const Nothing = {
	bind: function() {
		return this
	},
	toString: function() {
		return 'Nothing'
	}
}

var result = new Just(5).bind(value =>
	Nothing.bind(value2 => new Just(value + alert(value2)))
)


result //?

/**
 *
 * @param target
 *
 * @param unit wraps the under lying type into a monad
 *
 */

function wrap(target, unit) {
	target = unit(target)
	function fix(object, property) {
		if (typeof value === 'function') {
			return value.bind(object)
		}
		return value
	}
	//recursively continue on calling wrap on the target.
	function continueWith(transform) {
		return wrap(target.bind(transform), unit)
	}
	return new Proxy(function() {}, {
		get: function(_, property) {
			if (property in target) {
				return fix(target, property)
			}
			return continueWith(value => fix(value, property))
		},
		apply: function(_, thisArg, args) {
			return continueWith(value => value.apply(thisArg, args))
		}
	})
}
