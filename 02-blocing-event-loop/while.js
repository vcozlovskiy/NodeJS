const isRunning = true;

setTimeout(() => (isRunning = false), 10);
process.nextTick(() => console.log('NextTick'));

while (isRunning) {
    console.log('While lo1op is running');
}


ads
DataTransfersd
a

"asdasdasd"