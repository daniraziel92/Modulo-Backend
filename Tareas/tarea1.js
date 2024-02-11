function executePromise (number, time){
    return new Promise((resolve)=> {
        setTimeout(() => {
            console.log(number);
            resolve("resolved");
        },time)
    })
}

async function homeWork(){
    console.log(1);
    await Promise.all([executePromise(2,2000),executePromise(3,2000),]);
    await Promise.all([executePromise(4,2000),executePromise(5,2000),]);
    await executePromise(6,2000);
    await Promise.all([executePromise(7,2000),executePromise(8,2000),]);
    await executePromise(9,2000);

}

homeWork();