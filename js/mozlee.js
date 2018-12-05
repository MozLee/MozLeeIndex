(function () {
    const bodyEl = document.querySelector('#main')
    const titleELs = document.querySelectorAll('.animate-title')
    let n = 1
    let m = new Date().getSeconds()
    n = Math.floor(m / 5)
    n === 0 ? n = 1 : n
    bodyEl.setAttribute('data-theme', n.toString())
    for (let i = 0; i < titleELs.length; i++) {
        titleELs[i].setAttribute('data-title-theme', n.toString())
    }
    setInterval(() => {
        n++
        bodyEl.setAttribute('data-theme', n.toString())
        for (let i = 0; i < titleELs.length; i++) {
            titleELs[i].setAttribute('data-title-theme', n.toString())
        }
        console.log(n);
        n >= 12 ? n = 0 : n
    }, 5000)



    const linkEls = document.querySelectorAll('.contact-list a')
    for (let i = 0; i < linkEls.length; i++) {
       linkEls[i].addEventListener('mouseover',() => {
           linkEls[i].style.background = getComputedStyle(titleELs[i]).backgroundColor
           linkEls[i].style.color = '#fff'
       })
       linkEls[i].addEventListener('mouseout',() => {
        linkEls[i].style.background = '#fff'
        linkEls[i].style.color = '#5a5a5a'
    }) 
    }
})()