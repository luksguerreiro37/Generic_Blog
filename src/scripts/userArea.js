export function userContainer(){
    const userPerfil = document.querySelector('.user__profile');
    userPerfil.insertAdjacentHTML('afterbegin', '<img src="./src/assets/img/user1.svg" alt="" class="user__icon">')

    const userDescription = document.querySelector('.user__description');
    userDescription.insertAdjacentHTML('afterbegin', "<h3 class='user__name'>Samuel Leão");
    userDescription.insertAdjacentHTML("beforeend", "<p class='user__stack'>Front end Engineer");

    const userPost = document.querySelector('.user__post');
    userPost.insertAdjacentHTML("afterbegin", `
    <form class="post__form">
        <textarea id="post__text" name="message" placeholder="Digitar descrição do post" class="user__post__text"></textarea>
        <input type="text" placeholder="Digitar título do post" class="user__post__title" id="post__title"></input>
        <input type="submit" value="Postar" class="user__post__button" id="send">
    </form>
    `);
    
    
}