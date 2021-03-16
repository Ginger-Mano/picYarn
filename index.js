let appBody = document.querySelector('.main')
let userPage = document.querySelector('.userpage')

window.addEventListener('DOMContentLoaded', (evt) => {
    welcomeDiv()
    photoCollect()
    footer()
})


let navBar = (() => {
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
})()

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

    let userInput1 = document.createElement('input')
    userInput1.id = "username"
    userInput1.placeholder = "Username"


    let userInput2 = document.createElement('input')
    userInput2.id = "location"
    userInput2.placeholder = "Location"


    let userInput3 = document.createElement('input')
    userInput3.id = "description"
    userInput3.placeholder = "Description"


    let userInput4 = document.createElement('input')
    userInput4.id = "image"
    userInput4.placeholder = "Image"
    userInput4.innerHTML = ""

    let newUserSubmit = document.createElement("button")
    newUserSubmit.className = "newUserSub"
    newUserSubmit.innerHTML = "Submit"
    newUserSubmit.type = "submit"

    userForm.append(userInput1, userInput2, userInput3, userInput4, newUserSubmit)
    userFormDiv.append(userForm)
    appBody.append(userFormDiv)


    userForm.addEventListener("submit", (evt) => {
        evt.preventDefault()

        let username = evt.target.querySelector('#username').value
        let location = evt.target.querySelector('#location').value
        let description = evt.target.querySelector('#description').value
        let image = evt.target.querySelector('#image').value


        fetch(`http://localhost:3000/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: username,
                location: location,
                description: description,
                image: image
            })
        })
            .then(res => res.json())
            .then(createdUser => {
                renderUserProfile(createdUser)
                userForm.remove()
            })
    })

}

let renderUserProfile = (createdUser) => {
    let userDiv = document.createElement('div')
    userDiv.className = "userDiv"

    let userDivHeader = document.createElement('h2')
    userDivHeader.className = "userHeader"
    userDivHeader.innerHTML = `${createdUser.username}`

    let userDesc = document.createElement('h3')
    userDesc.innerHTML = `${createdUser.description}`

    let userLoc = document.createElement('h3')
    userLoc.innerHTML = `${createdUser.location}`

    let userAvatar = document.createElement('img')
    userAvatar.className = "userAvatar"
    userAvatar.src = `${createdUser.image}`

    let editUserBtn = document.createElement('button')
    editUserBtn.className = "editbutton"
    editUserBtn.innerText = "Edit"

    editUserBtn.addEventListener("click", (evt) => {
        console.log(evt);
        editProfileForm(createdUser, userDiv)
    })

    let deleteUserBtn = document.createElement('button')
    deleteUserBtn.className = "delbutton"
    deleteUserBtn.innerText = "Delete"

    deleteUserBtn.addEventListener("click", (evt) => {
        console.log(evt);
        deleteUserForm(createdUser, userDiv)
    })

    userDiv.append(userDivHeader, userDesc, userLoc, userAvatar, editUserBtn, deleteUserBtn)
    appBody.append(userDiv)
}

let editProfileForm = (createdUser, userDiv) => {

    let editUserDiv = document.createElement('div')
    editUserDiv.className = "editUserformDiv"

    let editUserForm = document.createElement("form")
    editUserForm.className = "editUserform"

    let editUserInput1 = document.createElement('input')
    editUserInput1.id = "username"
    editUserInput1.placeholder = "Username"

    let editUserInput2 = document.createElement('input')
    editUserInput2.id = "location"
    editUserInput2.placeholder = "Location"

    let editUserInput3 = document.createElement('input')
    editUserInput3.id = "description"
    editUserInput3.placeholder = "Description"


    let editUserInput4 = document.createElement('input')
    editUserInput4.id = "image"
    editUserInput4.placeholder = "Image"
    editUserInput4.innerHTML = ""

    let editUserSubmit = document.createElement("button")
    editUserSubmit.className = "newUserSub"
    editUserSubmit.innerHTML = "Submit"
    editUserSubmit.type = "submit"

    editUserForm.append(editUserInput1, editUserInput2, editUserInput3, editUserInput4, editUserSubmit)
    editUserDiv.append(editUserForm)
    appBody.append(editUserDiv)

    editUserForm.addEventListener("submit", (evt) => {
        evt.preventDefault()
        console.log(evt);
        let user = createdUser

        let username = evt.target.querySelector('#username').value
        let location = evt.target.querySelector('#location').value
        let description = evt.target.querySelector('#description').value
        let image = evt.target.querySelector('#image').value


        fetch(`http://localhost:3000/users/${user.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: username,
                location: location,
                description: description,
                image: image,
            })
        })
            .then(res => res.json())
            .then(updatedUser => {
                renderUserProfile(updatedUser)
                editUserForm.remove()
                userDiv.remove()
            })
    })

}

let deleteUserForm = (createdUser, userDiv) => {
    let deleteUserDiv = document.createElement("div")
    deleteUserDiv.className = "deleteUserDiv"

    let deletePrompt = document.createElement('h3')
    deletePrompt.innerHTML = "Would you like to delete your profile?"

    let deleteYes = document.createElement('button')
    deleteYes.innerText = "Yes"

    let deleteNo = document.createElement('button')
    deleteNo.innerText = "No"

    deleteUserDiv.append(deletePrompt, deleteYes, deleteNo)
    appBody.append(deleteUserDiv)

    deleteNo.addEventListener("click", (evt) => {
        deleteUserDiv.remove()
    })

    deleteYes.addEventListener("click", (evt) => {
        evt.preventDefault()
        console.log(evt);

        fetch(`http://localhost:3000/users/${createdUser.id}`, {
            method: 'DELETE',

        })
            .then(res => res.json())
            .then(deletedUser => {
                console.log(deletedUser);
                userDiv.remove()
                deleteUserDiv.remove()
            })

    })
}


let welcomeDiv = () => {

    let welcome = document.createElement('div')
    welcome.className = "welcome"
    welcome.innerText = "Welcome to picYarn!"

    appBody.append(welcome)
}

// let pexelsPhotos = () => {

//     const client = createClient('563492ad6f91700001000001b12ffd1ababd49f29bd3bd3e9ac8e788');

//     fetch(`https://api.pexels.com/v1`) {
//         method: "GET"
//             .then(res => res.json())
//             .then(photos =>
//                 photoCollage(photos)

//     })
// }


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
        addPhoto.innerText = "Use"
        addPhoto.onclick = true


        let eachPhoto = document.createElement('img')
        eachPhoto.className = "photoImg"
        eachPhoto.src = photo.image


        addPhoto.addEventListener("click", (evt) => {
            console.log(evt)
            newStoryAlert()
        })


        // eachPhoto.append(addPhoto)
        photoDisplay.append(eachPhoto, addPhoto)
        photoGrid.append(photoDisplay)
    });
    appBody.append(photoGrid)
}

let newStoryAlert = () => {
    let newStoryAlertDiv = document.createElement('div')
    newStoryAlertDiv.className = "alertDiv"

    let newStoryConfirm = document.createElement('h6')
    newStoryConfirm.innerText = "Use this photo for your story?"

    //    if photo id and button id is the same, render that photo 

    let yesForStory = document.createElement('button')
    yesForStory.innerText = "Yes"

    let noForStory = document.createElement('button')
    noForStory.innerText = "No"

    noForStory.addEventListener("click", (evt) => {
        newStoryAlertDiv.remove()
    })

    newStoryAlertDiv.append(newStoryConfirm, yesForStory, noForStory)
    appBody.append(newStoryAlertDiv)
}

let footer = () => {
    let footerDiv = document.createElement('div')
    footerDiv.className = "footer"

    let footerLink1 = document.createElement('div')
    footerLink1.innerHTML = "Social"

    footerDiv.append(footerLink1)
    appBody.append(footerDiv)

}
