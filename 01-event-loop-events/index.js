const fs = require('fs');
const dns = require('dns');

function timeStamp() {
    return performance.now().toFixed(2);
}

console.log('Progrem start');

//Close events
fs.writeFile('./test.txt', 'Hello Node.js', () =>
    console.log('File wretten', timeStamp())
);

// Promises
Promise.resolve().then(() => console.log('Promise 1', timeStamp()));

//Next tick
process.nextTick(() => console.log('Next tick 1', timeStamp()));

// setImmediate (Check)
setImmediate(() => console.log('Immediate 1', timeStamp()));

// Timeouts
setTimeout(() => console.log('Timeout 1', timeStamp()), 0);
setTimeout(() => {
    process.nextTick(() => console.log('Next tick 2', timeStamp()));
    console.log('Timeout 2', timeStamp());
}, 100);

//Intervals
let intervalCount = 0;
const intervalId = setInterval(() => {
    console.log(`Inreval ${(intervalCount += 1)}`, timeStamp());
    if (intervalCount === 2) clearInterval(intervalId);
}, 50);

// I/O Events
dns.lookup('localhost', (err, address, family) => {
    console.log('DNS 1 localhost', address, timeStamp());
    Promise.resolve().then(() => console.log('Promise 2', timeStamp()));
    process.nextTick(() => console.log('Next tick 3', timeStamp()));
});

console.log('Prtogram end');
