let appBody = document.querySelector('.main')


let navBar = () => {
    let bar = document.createElement('div')
    bar.className = "navbar"

    let navBarUl = document.createElement('div')
    navBarUl.className = "navInner"

    let navLiDiv1 = document.createElement('div')
    navLiDiv1.className = "navlink"
    navLiDiv1.innerText = "picYarn"

    let navLiDiv2 = document.createElement('div')
    navLiDiv2.className = "navlink"
    navLiDiv2.innerText = "About"

    let navLiDiv3 = document.createElement('div')
    navLiDiv3.className = "navlink"
    navLiDiv3.innerText = "Name"

    // navLink1.append(navLiDiv1)
    // navLink2.append(navLiDiv2)
    // navLink3.append(navLiDiv3)

    navBarUl.append(navLiDiv1, navLiDiv2, navLiDiv3)
    bar.append(navBarUl)
    appBody.append(bar)
}
navBar()


let welcomeDiv = () => {

    let welcome = document.createElement('div')
    welcome.className = "welcome"
    welcome.innerText = "Welcome to picYarn!"

    appBody.append(welcome)
}
welcomeDiv()

let photoCollect = () => {

    fetch(`http://localhost:3000/photos`)
        .then(res => res.json())
        .then(photos =>
            console.log(photos)
        )


}
photoCollect()

let photoCollage = (photos) => {
    let photoDisplay = document.createElement('div')
    photoDisplay.className = "photos"

    let eachPhoto = document.createElement('img')
    eachPhoto.src = photos.image
}

let footer = () => {
    let footerDiv = document.createElement('div')
    footerDiv.className = "footer"

    let footerLink1 = document.createElement('div')
    footerLink1.innerHTML = "Social"

    footerDiv.append(footerLink1)
    appBody.append(footerDiv)
}
footer()