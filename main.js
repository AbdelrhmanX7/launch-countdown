let top_clock_desing = document.getElementsByClassName('top-clock-desing')
let bottom_clock_desing = document.getElementsByClassName('bottom-clock-desing')
let top_text =document.getElementsByClassName("top-text")
let bottom_text =document.getElementsByClassName("bottom-text")
console.log(top_clock_desing[0].setAttribute('data-time','07'))
let v = 0
let timer = {
    d: 10,
    h: 5,
    m: 40,
    s: 5
}
// setInterval(function() {
//     if(v === 0) {
//         document.documentElement.style.setProperty('--Anim-move', 'play')
//         v = 1
//     }
// }, 350)
// setInterval(function() {
//     document.documentElement.style.setProperty('--Anim-m', 'play')
//     v = 0
// }, 700)
setInterval(function() {
    document.documentElement.style.setProperty('--Anim-move', 'play')
    setTimeout(function() {
        document.documentElement.style.setProperty('--Anim-move', 'paused')
        document.documentElement.style.setProperty('--Anim-m', 'play')
    }, 500)
    setTimeout(function() { 
        document.documentElement.style.setProperty('--Anim-m', 'paused')
    }, 1000)
}, 1000)

top_clock_desing[0].setAttribute('data-time', timer.d)
top_clock_desing[1].setAttribute('data-time', timer.h)
top_clock_desing[2].setAttribute('data-time',timer.m)
top_clock_desing[3].setAttribute('data-time',timer.s)
bottom_clock_desing[0].setAttribute('data-time', timer.d)
bottom_clock_desing[1].setAttribute('data-time', timer.h)
bottom_clock_desing[2].setAttribute('data-time',timer.m)
bottom_clock_desing[3].setAttribute('data-time',timer.s)
top_text[0].innerHTML = timer.d
top_text[1].innerHTML = timer.h
top_text[2].innerHTML = timer.m
top_text[3].innerHTML = timer.s
bottom_text[0].innerHTML = timer.d
bottom_text[1].innerHTML = timer.h
bottom_text[2].innerHTML = timer.m
bottom_text[3].innerHTML = timer.s


s = 1 * 1000
setInterval( function() {
    --timer.s
    if(timer.s  === 0){
        document.documentElement.style.setProperty('--Anim-work', 'play')
        timer.s = 60
        --timer.m
        setTimeout(function() {
            document.documentElement.style.setProperty('--Anim-work', 'paused')
            document.documentElement.style.setProperty('--Anim-work-bottom', 'play')
        }, 500)
        setTimeout(function() { 
            document.documentElement.style.setProperty('--Anim-work-bottom', 'paused')
        },1000)
    }
    if(timer.m  === 0){
        document.documentElement.style.setProperty('--Anim-work2', 'play')
        timer.m = 60
        --timer.h
        console.log("s")
        setTimeout(function() {
            document.documentElement.style.setProperty('--Anim-work2', 'paused')
            document.documentElement.style.setProperty('--Anim-work-bottom2', 'play')
        }, 500)
        setTimeout(function() { 
            document.documentElement.style.setProperty('--Anim-work-bottom2', 'paused')
        },1000)
    }
    if(timer.h  === 0){
        document.documentElement.style.setProperty('--Anim-work3', 'play')
        timer.h = 24
        --timer.d
        setTimeout(function() {
            document.documentElement.style.setProperty('--Anim-work3', 'paused')
            document.documentElement.style.setProperty('--Anim-work-bottom3', 'play')
        }, 500)
        setTimeout(function() { 
            document.documentElement.style.setProperty('--Anim-work-bottom3', 'paused')
        },1000)
    }
    if(timer.d === 0) {
        timer.d = 10
    }

}, s)

setInterval(function() {
    top_clock_desing[0].setAttribute('data-time', timer.d)
    top_clock_desing[1].setAttribute('data-time', timer.h)
    top_clock_desing[2].setAttribute('data-time',timer.m)
    top_clock_desing[3].setAttribute('data-time',timer.s)
}, 1250)
setInterval(function() {
    top_text[0].innerHTML = timer.d
    top_text[1].innerHTML = timer.h
    top_text[2].innerHTML = timer.m
    top_text[3].innerHTML = timer.s
}, 1000)
setInterval(function() {
    bottom_clock_desing[0].setAttribute('data-time', timer.d)
    bottom_clock_desing[1].setAttribute('data-time', timer.h)
    bottom_clock_desing[2].setAttribute('data-time',timer.m)
    bottom_clock_desing[3].setAttribute('data-time',timer.s)
}, 1000)
setInterval(function() {
    bottom_text[0].innerHTML = timer.d
    bottom_text[1].innerHTML = timer.h
    bottom_text[2].innerHTML = timer.m
    bottom_text[3].innerHTML = timer.s
}, 1500)
