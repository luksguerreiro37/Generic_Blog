import { navItems } from "./nav.js";
navItems();

import { userContainer } from "./userArea.js";
userContainer();

import { posts } from "./database.js";
import { suggestUsers } from "./database.js";
import { users } from "./database.js";

import { suggestion } from "./suggestion.js";

function createUserPost(){
    const button = document.querySelector('#send');

    button.addEventListener('click', function(e) {

        e.preventDefault();

        const postTitle = document.querySelector('#post__title');
        const postText = document.querySelector('#post__text')

        const title = postTitle.value;
        const text = postText.value;

        console.log(posts);

        posts.push({
            id: posts.length + 1,
            title: `${title}`,
            text: `${text}`,
            user: "Samuel Leão",
            stack: "Front end Engineer",
            img: "./src/assets/img/user1.svg",
            likes: 0
        });
        profilesPosts();
    })
    
}



createUserPost();
function profilesPosts(){
    const postsSection = document.querySelector('.postSection');
    postsSection.innerHTML = "<div class='post__main'></div>";
    const postsMain = document.querySelector('.post__main')
    postsSection.insertAdjacentHTML('afterbegin', '<h1 class="postSection__title">Posts</h1>');
    for (let i = 0; i < posts.length; i++) {
        postsMain.insertAdjacentHTML('beforeend',
        `
            <div class="post__container">
                <div class="user__profile">
                    <img class="user__icon" src="${posts[i].img}" alt="">
                    <span class="user__description">
                        <h3 class="user__name">${posts[i].user}</h3>
                        <p class="user__stack">${posts[i].stack}</p>
                    </span>
                </div>

                <div class="post__content">
                    <h1 class="post__title">${posts[i].title}</h1>
                    <p class="post__text">${posts[i].text}</p>
                </div>

                <div class="post__buttons">
                    <button class="show__post" id="${posts[i].id}">Abrir Post</button>
                    <span class="like__button">
                        <img class="heart" src=${posts[i].liked ? "./src/assets/img/like-button-red.svg" : "./src/assets/img/like-button.svg"} alt="">
                        <p>${posts[i].likes}<p>
                    </span>
                </div>
            </div>
        `
        )
    }
    buttonShowModal()
    like();
}
profilesPosts();

function buttonShowModal(){
    const button = document.querySelectorAll('.show__post')
    for (let i = 0; i < button.length; i++) {
        button[i].addEventListener("click", () => {
            renderModal(Number(button[i].id));
        })
    }

}
function renderModal(id){
    const modal = document.querySelector(".modal")
    let object = {}
    for (let i = 0; i < posts.length; i++) {
        if(posts[i].id === id){
            object = posts[i];
        }
    }
    modal.innerHTML = "";
    modal.insertAdjacentHTML("beforeend", 
        `
            <div class="post__modal">
                <div class="user__profile" class="post__user">
                    <img src="${object.img}" class="user__icon">
                    <span class="user__description">
                        <h3 class="user__name">${object.user}</h3>
                        <p class="user__stack">${object.stack}</p>
                    </span>
                </div>

                <div class="modal__content">
                    <h2 class="post__title">${object.title}</h2>
                    <p class="modal__text">${object.text}</p>
                </div>

                <button class="close__modal">X</button>
            </div>
        `)
    modal.showModal();
    closeModal();
}


function closeModal(){
    const button = document.querySelector('.close__modal')
    const modal = document.querySelector('.modal')

        button.addEventListener("click", () => {
            modal.close()
            console.log("pão")
        })

}


function like(){
    const likeButton = document.querySelectorAll('.heart')

    for (let i = 0; i < likeButton.length; i++) {
        likeButton[i].addEventListener("click", () => {
            if(!posts[i].liked){
            posts[i].likes+=1
            posts[i].liked=true;
            }else{
                posts[i].likes-=1
                posts[i].liked=false;
            }
            profilesPosts()
        })
    }
}

suggestion();
function suggestionProfiles(){
    const containers = document.querySelector('.suggestion__profiles')
    for (let i = 0; i < suggestUsers.length; i++) {
        containers.insertAdjacentHTML("beforeend", 
        `<div class="suggestion__user" id="${suggestUsers[i].id}">
            <div class="user__profile">
                <img class="user__icon" src="${suggestUsers[i].img}" alt="">
                <span class="user__description">
                    <h3 class="user__name">
                        ${suggestUsers[i].user}
                    </h3>
                    <p class="user__stack">
                        ${suggestUsers[i].stack}
                    </p>
                </span>
            </div>
            <button class="unfollow__user">Seguir</button>
        </div>
        `)    
    }
}
suggestionProfiles();

function follow(){
    const button = document.querySelectorAll('.unfollow__user')

    for (let i = 0; i < button.length; i++) {
        button[i].addEventListener("click", () => {
            button[i].setAttribute("class", "follow__user")
            button[i].innerHTML = "Seguindo";

            unfollow();
        })
        
    }
}
follow();
function unfollow(){
    const button = document.querySelectorAll('.follow__user')

    for (let i = 0; i < button.length; i++) {
        button[i].addEventListener("click", () => {
            button[i].setAttribute("class", "unfollow__user")
            button[i].innerHTML = "Seguir";

            follow();
        })
        
    }
}