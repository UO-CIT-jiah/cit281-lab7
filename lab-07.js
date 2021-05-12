class CustomError extends Error {
    constructor(args) {
        super(args);
        this.name = 'Error';
    }
}

function throwGenericError() {
    throw new Error('Generic error')
}

console.log('Force generic error')

try {
    console.log('Generic error try block');
    throwGenericError();
} catch (err) {
    console.log('Generic error catch block')
    console.log(`${err.name}: ${err.message}`)
} finally {
    console.log('Generic error finally block')
}

function throwCustomError() {
    throw new Error('Custom error')
}

console.log('Force custom error')
 
try {
     console.log('Custom error try block')
     throwCustomError();
 } catch (err) {
     console.log('Custom error catch block')
     console.log(`Custom${err.name}: ${err.message}`)
 } finally {
     console.log('Custom error finally block')
 }


