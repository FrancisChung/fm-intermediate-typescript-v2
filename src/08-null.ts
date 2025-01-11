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
    createdAt : new Date(),
    data: new FormData()
}

function submitForm() {
    const myDate : Date = formInProgress.completedAt
    formInProgress.completedAt = new Date()
}