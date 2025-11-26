const newPost = document.getElementById("new-post")
let postsArray =[]

const renderPosts = () => {
    let html = ""
    for (let post of postsArr) {
        html += `
            <h3>${post.title}</h3>
            <p>${post.body}</p>
            <hr />
        `
    }
    document.getElementById("blog-list").innerHTML = html
}




fetch("https://apis.scrimba.com/jsonplaceholder/posts", {method: "GET"})
    .then(resource => resource.json())
    .then(data => {
        const postsArr = data.slice(0, 5)
        renderPosts()
    })


newPost.addEventListener("submit", (event)=>{
    event.preventDefault();
    let postTitle = document.getElementById("post-title").value
    let postBody = document.getElementById("post-body").value
    const data = {
        title: postTitle,
        body: postBody
    }
    console.log(data)

    fetch("https://apis.scrimba.com/jsonplaceholder/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(post => console.log("Created:", post))
            postsArray.unshift(post)
            renderPosts()
            document.getElementById("post-title").value = ""
            document.getElementById("post-body").value = ""
            
    
})