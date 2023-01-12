function submit(){
    const res = document.getElementById('res')
    const active = document.getElementById('activestate')
    const initial = document.getElementById('container')
    const button = document.querySelector('input[class=rad]:checked').value

    res.innerHTML = `${button}`

    active.style.display = "block"

    initial.style.display = "none"

  }
  
  