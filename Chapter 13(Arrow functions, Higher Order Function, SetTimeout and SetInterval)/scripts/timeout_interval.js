(() => {
    let counter = 0;
    let increnment = (head) => {
        console.log(`${head} ${counter++}`)
    }

    console.log("Start")
    let timerId = setTimeout(() => increnment("timer"),5000)
    console.log("Timer ID: ",timerId);
    setTimeout(() => {clearTimeout(timerId, 2000)}, 2000);

    let intervalId = setInterval(() => increnment("interval"), 2000);
    setTimeout(() => clearInterval(intervalId), 10000);

    console.log("End")
})()