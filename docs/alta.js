localStorage.setItem(('orden', ''))
localStorage.setItem(('cambio', '0'))
const request = new XMLHttpRequest()
const url = "http://localhost:3000/alta"


request.open('PUT', url)
request.send()