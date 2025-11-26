const newPost = document.getElementById("new-post")

fetch("https://apis.scrimba.com/jsonplaceholder/posts", {method: "GET"})
    .then(resource => resource.json())
    .then(data => {
        const postsArr = data.slice(0, 5)
        let html = ""
        for (let post of postsArr) {
            html += `
                <h3>${post.title}</h3>
                <p>${post.body}</p>
                <hr />
            `
        }
        document.getElementById("blog-list").innerHTML = html
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
})