function submit(){
    let res = document.getElementById('res')
    let active = document.getElementById('activestate')
    let initial = document.getElementById('container')
    let button = document.querySelector('input[class=rad]:checked').value

    res.innerHTML = `${button}`

    active.style.display = "block"

    initial.style.display = "none"

  }