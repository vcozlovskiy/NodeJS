const isRunning = true;

setTimeout(() => (isRunning = false), 10);
process.nextTick(() => console.log('NextTick'));

while (isRunning) {
    console.log('While lo12op is running');
}
