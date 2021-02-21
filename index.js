let appBody = document.querySelector('.main')


let welcomeDiv = () => {
    let welcome = document.createElement('div')
    welcome.className = "welcome"
    welcome.innerText = `<h1>"Welcome to picYarn!"</h1>`

    appBody.append(welcome)
}