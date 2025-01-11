// Null

const userInfo = {
    name: 'Francis',
    email: 'francis@gmail.com',
    email2: null
}

// Undefined - you see it when there;s an optional property
interface FormInProgress {
    createdAtDate: Date
    data: FormData
    completedAt? : Date
}

const formInProgress: FormInProgress = {
    createdAtDate: new Date(),
    data: new FormData()
}

function submitForm() {
    const myDate : Date = formInProgress.completedAt
    formInProgress.completedAt = new Date()
}

//Non Null Assertion operator

type GroceryCart = {
    fruits?: {name: string; qty: number}[]
    vegetables?: {name: string; qty: number}[]
}

const cart:GroceryCart = {}

cart.fruits.push({name: 'kumkuat', qty:1})
cart.fruits!.push({name: 'kumkuat', qty:1})

// ! is non null assertion operator