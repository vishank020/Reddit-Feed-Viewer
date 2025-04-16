async function fetchRedditPosts() {
    const subreddit = document.getElementById("subredditInput").value.trim();
    const postContainer = document.getElementById("postContainer");
    const loader = document.getElementById("loader");
  
    postContainer.innerHTML = "";
  
    if (!subreddit) {
      postContainer.innerHTML = "<p style='color:red;'> Please enter a subreddit name.</p>";
      return;
    }
  
    loader.classList.remove("hidden");
  
    try {
      const response = await fetch(`https://www.reddit.com/r/${subreddit}/top.json?limit=5`);
  
      if (!response.ok) throw new Error(" Failed to fetch subreddit data.");
  
      const data = await response.json();
      loader.classList.add("hidden");
  
      const posts = data.data.children;
  
      if (posts.length === 0) {
        postContainer.innerHTML = "<p> No posts found for this subreddit.</p>";
        return;
      }
  
      posts.forEach(post => {
        const postElement = document.createElement("div");
        postElement.classList.add("post");
        postElement.innerHTML = `
          <h3>${post.data.title}</h3>
          <p>${post.data.selftext.substring(0, 100) || "No description"}...</p>
          <a href="https://www.reddit.com${post.data.permalink}" target="_blank">
            <i class="fas fa-external-link-alt"></i> Read more
          </a>
        `;
        postContainer.appendChild(postElement);
      });
  
    } catch (error) {
      loader.classList.add("hidden");
      postContainer.innerHTML = `<p style="color:red;">${error.message}</p>`;
    }
  }
  
  //  Dark Mode Toggle
  const toggleSwitch = document.getElementById("modeToggle");
  const themeLabel = document.getElementById("themeLabel");
  
  window.addEventListener("DOMContentLoaded", () => {
    const mode = localStorage.getItem("theme");
    if (mode === "dark") {
      document.body.classList.add("dark-mode");
      toggleSwitch.checked = true;
      themeLabel.textContent = "Dark Mode";
    }
  });
  
  toggleSwitch.addEventListener("change", () => {
    document.body.classList.toggle("dark-mode");
    const mode = document.body.classList.contains("dark-mode") ? "dark" : "light";
    themeLabel.textContent = mode === "dark" ? "Dark Mode" : "Light Mode";
    localStorage.setItem("theme", mode);
  });
  