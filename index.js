const newPost = document.getElementById("new-post")

let postsArray = []

const renderPosts = () => {
    let html = ""
    for (let post of postsArray) {
        html += `
            <h3>${post.title}</h3>
            <p>${post.body}</p>
            <hr />
        `
    }
    document.getElementById("blog-list").innerHTML = html
}

// GET initial posts
fetch("https://apis.scrimba.com/jsonplaceholder/posts", { method: "GET" })
    .then(resource => resource.json())
    .then(data => {
        postsArray = data.slice(0, 5)   // store in global array
        renderPosts()
    })


// POST a new post
newPost.addEventListener("submit", event => {
    event.preventDefault()

    const postTitle = document.getElementById("post-title").value
    const postBody = document.getElementById("post-body").value

    const data = {
        title: postTitle,
        body: postBody
    }

    fetch("https://apis.scrimba.com/jsonplaceholder/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(post => {
            console.log("Created:", post)

            // Add new post to the TOP of the list
            postsArray.unshift(post)

            renderPosts()

            // Clear inputs
            document.getElementById("post-title").value = ""
            document.getElementById("post-body").value = ""
        })
})
