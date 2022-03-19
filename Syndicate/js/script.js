const panels = document.querySelectorAll('.panel')

// console.log(panels[0])

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removClassList()
        panel.classList.add('active')
    })
})

function removClassList() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}