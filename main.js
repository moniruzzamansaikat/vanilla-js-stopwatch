const buttons = document.querySelectorAll('button')
buttons.forEach(eachButton => {
    eachButton.addEventListener('mousedown', () => {
        eachButton.style.transform = 'matrix3d(1, 0, 2, 0, 0, 1, 2, 0, 2, 0, 4, 4, 3, 2, 1, 1)'
        eachButton.style.boxShadow = 'none'
    })

    eachButton.addEventListener('mouseup', () => {
        eachButton.style.transform = 'none' 
        eachButton.style.boxShadow = '0px 5px 0px 0px #881212'
    })
})

// selects buttons
const startButton = document.querySelector('button.start')
const stopButton = document.querySelector('button.stop')
const resetButtun = document.querySelector('button.reset')
const time = document.querySelector('h3.time')

// show time
function showTime(tm) {
    time.innerHTML = tm
}

// flag for running or not
let flag = false

// start running
startButton.addEventListener('click', () => {
    startTime()
    flag = true
})

function startTime() {
    
    let min = 0
    let sec = 0
    let mlSec = 0
    // format time
    // minute
    const minInterval = setInterval(() => {
        min++
    }, 60000)

    // second
    const secInterval = setInterval(() => {
        sec++
    }, 1000)

    //  millisecond
    const milSec = setInterval(() => {
        mlSec++
        if (mlSec === 59) {
            mlSec = 0 
        }

        if (sec === 59) {
            sec = 0 
        }

        if (min === 59) {
            min = 0
            clearInterval(minInterval)
        }

        const formattedMin = `${min < 10 ? '0' + (min) : min}`
        const formattedSec = `${sec < 10 ? '0' + (sec) : sec}`
        const formattedMlSec = `${mlSec < 10 ? '0' + (mlSec) : mlSec}`


        // Stop 
        stopButton.addEventListener('click', () => {
            clearInterval(minInterval)
            clearInterval(secInterval)
            clearInterval(milSec)
            startButton.removeAttribute('disabled') 
        })

        // Reset
        resetButtun.addEventListener('click', () => {
            showTime('00:00:00')
            clearInterval(milSec)
            clearInterval(minInterval)
            clearInterval(secInterval)
            startButton.removeAttribute('disabled')
        })

        if(flag) startButton.setAttribute('disabled', true)
   

        // Show Time
        showTime(`${formattedMin}:${formattedSec}:${formattedMlSec}`)

    }, 1)
}
 

