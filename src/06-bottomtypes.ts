function obtainRandomVehicle() : any {
    return {} as any
}

class Car {
    drive() {
        console.log('Vroom')
    }
}

class Boat {
    isFloating() {
        return true
    }
}

class Truck {
    tow() {
        console.log('Dragging something')
    }
}

type Vehicle = Truck | Car | Boat

let myVehicle: Vehicle = obtainRandomVehicle()

// Exhaustive Conditional

if (myVehicle instanceof Truck) {
    myVehicle.tow()
} else if (myVehicle instanceof Car) {
    myVehicle.drive()
} else if (myVehicle instanceof Boat) {

} else {
    // All options exhausted
    const neverValue : never = myVehicle
}