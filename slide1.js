// javascript로 슬라이드 구현
document.body.innerHTML = `<div class="wrap"></div>`
const $div = document.getElementsByTagName('div')[0]

const frag = document.createDocumentFragment()
const $slide = document.createElement('div')
const $container = document.createElement('ul')
$slide.className = 'slide'
$container.className = 'slide__container'

const slideData = [1, 2, 3, 4, 5]
let currentIndex = 0
$container.style.width = slideData.length * 100 + 'px'
slideData.forEach((v, i) => {
    const $li = document.createElement('li')
    $li.className = 'slide__item'
    $li.innerText = v
    $container.appendChild($li)
})
$slide.appendChild($container)
    .addEventListener('click', e => {
        e.preventDefault()
        currentIndex = (currentIndex + 1) % slideData.length
        $container.style.left = -100 * currentIndex + 'px'
    })

frag.appendChild($slide)
$div.appendChild(frag)

document.body.innerHTML = `<div id="a"></div><div id="b"></div><div id="c"></div><div id="d"></div>`
buildSlide(document.getElementById('a'), [1, 2, 3, 4, 5])
buildSlide(document.getElementById('b'), ['a', ''])