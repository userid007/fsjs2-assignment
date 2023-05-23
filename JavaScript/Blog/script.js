const blogData = {
  data: [],

  get getBlogData() {
    return this.data;
  },
  set setBlogData(value) {
    this.data = [...value];
    createBlog(blogData.data);
  },

  addBlogData(userId, title, body) {
    localStorage.setItem(
      "curIndex",
      Number(localStorage.getItem("curIndex")) + 1
    );
    this.data = [
      ...this.data,
      { userId, id: localStorage.getItem("curIndex"), title, body },
    ];
    createBlog(blogData.data);
  },
};

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  blogData.addBlogData(
    "current",
    form.elements[0].value,
    form.elements[1].value
  );
});

fetch("https://jsonplaceholder.typicode.com/posts")
  .then(
    (result) => result.json(),
    (error) => {
      console.log(error);
    }
  )
  .then(
    (data) => {
      blogData.setBlogData = data;
      localStorage.setItem("curIndex", 100);
    },
    (error) => {
      console.log(error);
    }
  );

function createBlog(blogs) {
  document.getElementById("main").innerHTML = "";
  for (const blog of blogs) {
    document.getElementById(
      "main"
    ).innerHTML += `<div class="article my-4 border-2 rounded-xl p-4">\n \
        <h1 class="text-2xl font-semibold mb-2 relative">${blog.title}</h1> \n \
        <p class="font-light">${blog.body}</p> \n \
        <div class="flex justify-between items-center"> \n \
          <p class="font-light">User: ${blog.userId}</p> \n \
          <button id="${blog.id}" class="bg-[#D2182A] text-sm text-white px-5 py-1.5 rounded-md">Delete</button> \n \
        </div> \n \
      </div>`;
  }
  const articles = document.querySelectorAll(".article");
  articles.forEach((article) => {
    article.addEventListener("click", (e) => {
      e.preventDefault();
      const value = blogData.data.filter((data) => data.id != e.target.id);
      blogData.setBlogData = value;
    });
  });
}
