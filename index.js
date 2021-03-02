let appBody = document.querySelector('.main')

window.addEventListener('DOMContentLoaded', (evt) => {
    navBar()
    welcomeDiv()
    photoCollect()
    footer()
})


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

    navLiDiv2.addEventListener("click", (evt) => {
        aboutPage()
    })

    let navLiDiv3 = document.createElement('div')
    navLiDiv3.className = "navlink"
    navLiDiv3.innerText = "Profile"

    navLiDiv3.addEventListener("click", (evt) => {
        newUserForm()
    })

    navBarUl.append(navLiDiv1, navLiDiv2, navLiDiv3)
    bar.append(navBarUl)
    appBody.append(bar)
}

let aboutPage = () => {
    let aboutDiv = document.createElement('div')
    aboutDiv.className = "about"

    let aboutInfo = document.createElement('h2')
    aboutInfo.innerHTML = "Tester page with other info to come."

    let backBtn = document.createElement("button")
    backBtn.innerHTML = "Back"

    backBtn.addEventListener("click", (evt) => {
        aboutDiv.remove()
    })

    aboutInfo.append(backBtn)
    aboutDiv.append(aboutInfo)
    appBody.append(aboutDiv)
}

let newUserForm = () => {
    let userFormDiv = document.createElement('div')
    userFormDiv.className = "userformDiv"

    let userForm = document.createElement("form")
    userForm.className = "userform"

    // reference input error below
    let userInput1 = documemt.createElement('input')
    userInput1.placeholder = "Username"

    let userInput2 = document.createElement('input')
    userInput2.placeholder = "Location"

    let userInput3 = document.createElement('input')
    userInput3.placeholder = "Description"

    let userInput4 = document.createElement('input')
    userInput4.placeholder = "Image"

    let newUserSubmit = document.createElement("button")
    newUserSubmit.className = "newUserSub"
    newUserSubmit.innerHTML = "Submit"
    newUserSubmit.type = "submit"

    userForm.append(userInput1, userInput2, userInput3, userInput4, newUserSubmit)
    userFormDiv.append(userForm)
    appBody.append(userFormDiv)

}



let welcomeDiv = () => {

    let welcome = document.createElement('div')
    welcome.className = "welcome"
    welcome.innerText = "Welcome to picYarn!"

    appBody.append(welcome)
}


let photoCollect = () => {

    fetch(`http://localhost:3000/photos`)
        .then(res => res.json())
        .then(photos =>
            photoCollage(photos)

        )
}

let photoCollage = (photos) => {
    let photoGrid = document.createElement('div')
    photoGrid.className = "photogrid"

    photos.forEach((photo) => {
        let photoDisplay = document.createElement('div')
        photoDisplay.className = "photos"

        let addPhoto = document.createElement("button")
        addPhoto.className = "button"
        addPhoto.innerText = "Add"

        let eachPhoto = document.createElement('img')
        eachPhoto.className = "photoImg"
        eachPhoto.src = photo.image

        eachPhoto.append(addPhoto)
        photoDisplay.append(eachPhoto)
        photoGrid.append(photoDisplay)
    });
    appBody.append(photoGrid)
}

let footer = () => {
    let footerDiv = document.createElement('div')
    footerDiv.className = "footer"

    let footerLink1 = document.createElement('div')
    footerLink1.innerHTML = "Social"

    footerDiv.append(footerLink1)
    appBody.append(footerDiv)

}
