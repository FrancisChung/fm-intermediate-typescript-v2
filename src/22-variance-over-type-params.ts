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
cookieProducer = snackProducer  //Not Ok

// Cookie is a subtype of Snack
// Producer(Cookie) is a subtype of Producer(Snack)
// use keyword out to express Covariance