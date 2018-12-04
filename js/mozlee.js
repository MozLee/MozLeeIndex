(function(){
    const bodyEl = document.querySelector('#main')
    const titleEL = document.querySelector('.animate-title')
    let n = 1
    let m = new Date().getSeconds()
    n = Math.floor(m / 5)
    n === 0 ? n = 1 : n
    bodyEl.setAttribute('data-theme', n.toString())
    titleEL.setAttribute('data-title-theme',n.toString())
    setInterval(() => {
        n++
        bodyEl.setAttribute('data-theme', n.toString())
        titleEL.setAttribute('data-title-theme',n.toString())
        console.log(n);
        n >= 12 ? n = 0 : n
    }, 5000)
})()