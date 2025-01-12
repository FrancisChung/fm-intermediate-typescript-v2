// Definite Assignment Assertion

class ThingWithAsyncSetup {
    setupPromise : Promise<any>
    isSetup : boolean

    constructor() {
        this.isSetup = false
        this.setupPromise = new Promise((resolve)=> {
            //this.isSetup = false
            return this.doSetup(resolve)
        }).then(() => {
            this.isSetup = true
        })
    }

    private async doSetup (resolve: (value: unknown) => void) {
        // do some async stuff
    }
}