function PostData() {
    fetch('https://jsonplaceholder.typicode.com/albums')
    .then(reponse=>reponse.json())
    .then(post=>displayPost(post))   
}

PostData();

const displayPost = (data) =>{
    const ShowPost = document.getElementById("album");

    data.forEach((post) => {
        const CardData = document.createElement("div")

            CardData.classList.add("JSON-Posts");
        CardData.innerHTML=`
        <h2>${post.id}</h2>
        <p>${post.title}</p>
        `;
        ShowPost.appendChild(CardData);
    });
}