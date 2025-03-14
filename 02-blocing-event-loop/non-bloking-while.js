const fs = require('fs');
let isRunning = true;

setTimeout(() => (isRunning = false), 0);
process.nextTick(() => console.log('NextTick'));

function setimmediatePromise() {
    return new Promise((resolve, reject) => {
        resolve();
        //setImmediate(() => resolve())
    });
}

async function whileLoop() {
    while (isRunning) {
        console.log('While loop is running');
        await setimmediatePromise();
    }
}

whileLoop().then(() => console.log('While loop ended'));
