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