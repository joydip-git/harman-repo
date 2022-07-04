function multiply(a, b) {
    console.log(Number(a) * Number(b))
}

function call() {
    window.alert('called')
}

function showSelected() {
    const selectElement = document.getElementById('selectNames')
    const index = selectElement.selectedIndex
    const selected = selectElement.options[index].text
    window.alert(selected)
}

//showSelected()
//multiply(12, 4)