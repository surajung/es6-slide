// javascript로 슬라이드 구현
// 슬라이드를 한페이지에 두개 이상 구현, 스코프 밖에서 컨트롤 할 수 있게

class Slide {
    constructor($target, slideData) {
        const frag = document.createDocumentFragment()
        const $slide = document.createElement('div')

        this.$container = document.createElement('ul')
        this.currentIndex = 0
        this.slideData = slideData

        $slide.className = 'slide'
        this.$container.className = 'slide__container'
        
        this.$container.style.width = this.slideData.length * 100 + 'px'
        slideData.forEach((v, i) => {
            const $li = document.createElement('li')
            $li.className = 'slide__item'
            $li.innerText = v
            this.$container.appendChild($li)
        })
        $slide.appendChild(this.$container)
        $slide.addEventListener('click', this.triggerClick.bind(this))
        
        frag.appendChild($slide)
        $target.appendChild(frag)
    }
    triggerClick(e) {
        e && e.preventDefault()
        this.currentIndex = (this.currentIndex + 1) % this.slideData.length
        this.$container.style.left = -100 * this.currentIndex + 'px'
    }
}

document.body.innerHTML += `<div id="a"></div><div id="b"></div><div id="c"></div>`
const slide1 = new Slide(document.getElementById('a'), [1, 2, 3, 4, 5])
const slide2 = new Slide(document.getElementById('b'), ['a','b', 'c', 'd'])
const slide3 = new Slide(document.getElementById('c'), ['A', 'B', 'C', 'D', 'E', 'F', 'G'])

// slide1.triggerClick()