const changeBackground = (elem) => {
    let changedElem = elem.getAttribute('id') === 'left' ? document.getElementById('right') : document.getElementById('left')
    let elem_id = elem.getAttribute('id')
}

const blocks = document.getElementsByClassName('main-item')
for (let elem of blocks) {
    elem.addEventListener("mouseover", () => {changeBackground(elem)})
}
