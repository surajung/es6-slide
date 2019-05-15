// javascript로 슬라이드 구현
// 슬라이드를 한페이지에 두개 이상 구현, 스코프 밖에서 컨트롤 할 수 있게

const buildSlide = ($target, slideData) => {
    const frag = document.createDocumentFragment()
    const $slide = document.createElement('div')
    const $container = document.createElement('ul')
    $slide.className = 'slide'
    $container.className = 'slide__container'
    
    let currentIndex = 0
    $container.style.width = slideData.length * 100 + 'px'
    slideData.forEach((v, i) => {
        const $li = document.createElement('li')
        $li.className = 'slide__item'
        $li.innerText = v
        $container.appendChild($li)
    })
    $slide.appendChild($container)
    const handleClick = e => {
        e && e.preventDefault()
        currentIndex = (currentIndex + 1) % slideData.length
        $container.style.left = -100 * currentIndex + 'px'
    }
    $slide.addEventListener('click', handleClick)
    
    frag.appendChild($slide)
    $target.appendChild(frag)

    return {
        triggerClick() {
            handleClick()
        }
    }
}

document.body.innerHTML += `<div id="a"></div><div id="b"></div><div id="c"></div>`
const slide1 = buildSlide(document.getElementById('a'), [1, 2, 3, 4, 5])
const slide2 = buildSlide(document.getElementById('b'), ['a','b', 'c', 'd'])
const slide3 = buildSlide(document.getElementById('c'), ['A', 'B', 'C', 'D', 'E', 'F', 'G'])

// slide1.triggerClick()