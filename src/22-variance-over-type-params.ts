//* Covariance, Contravarience, and Bivariance

class Snack {
    constructor(public readonly petFriendly: boolean) {}
}
class Pretzel extends Snack {
    constructor(public readonly salted = true) {
        super(!salted)
    }
}
class Cookie extends Snack {
    public readonly petFriendly: false = false
    constructor(
        public readonly chocolateType: 'dark' | 'milk' | 'white',
    ) {
        super(false)
    }
}

// Covariance

interface Producer<T> {
    produce: () => T
}

let cookieProducer : Producer<Cookie> = {
    produce: () => new Cookie('dark')
}

let snackProducer: Producer<Snack> = {
    produce: () => Math.random() > 0.5 ? new Cookie("milk") : new Pretzel(true)
}


snackProducer = cookieProducer  //Ok
//cookieProducer = snackProducer  //Not Ok

// Cookie is a subtype of Snack     -- is a -->
// Producer(Cookie) is a subtype of Producer(Snack)     -- is a -->
// use keyword out to express Covariance


// Contravariance

interface Packager<in T> {
    package: (item: T) => void
}

let cookiePackager: Packager<Cookie> = {
    package(item: Cookie) {}
}

let snackPackager: Packager<Snack> = {
    package(item: Snack) {
        if (item instanceof Cookie) {
            // Package Cookie
        }
        else if (item instanceof Pretzel) {
            // Package Pretzel
        } else {
            // Package Misc
        }
    }
}

//Type Equivalence Check
cookiePackager = snackPackager  //Ok
snackPackager = cookiePackager  //Not Ok

// Cookie is a Snack       -- is a -->
// BUT Packager<Snack> is a Packager<Cookie>    <-- is a --
// Use the in keyword to describe Contravariance between 2 types

/**
 *
 *  Contravariant behaviouur often happens if you accept your Type Parameter as an argument (Hence in keyword)
 *  Covariant behaviour often happens if you return your Type Parameter as a return value (Hence out keyword)
 *
 */

// Invariance

interface ProducerPackager<T> {
    produce: () => T
    package: (item : T) => void
}

let cookieProducerPackager: ProducerPackager<Cookie> = {
    produce() {
        return new Cookie('dark')
    },
    package(arg: Cookie) {}
}

let snackProducerPackager: ProducerPackager<Snack> = {
    produce() {
        return Math.random() > 0.5 ?
            new Cookie('milk') :
            new Pretzel(true)
    }
    ,
    package(item: Snack) {
        if (item instanceof Cookie) {
            // Package Cookie
        } else if (item instanceof Pretzel) {
            // Package Pretzel
        } else {
            // Package Misc
        }
    }
}

// Type Equivalence Checks
//cookieProducerPackager = snackProducerPackager  //doesn't work
//snackProducerPackager = cookieProducerPackager  //doesn't work

// Cookie is a Snack
// ProducerPackager<Cookie> x x x x x x x  ProducerPackager<Snack>
// ProducerPackager is invariant over its type parameter
// Every type is implictly fn( in out T)