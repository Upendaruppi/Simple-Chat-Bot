const words = ["hi", "hello", "fine", "good", "great", "nyc"];

function randomWord() {
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
}

function send() {
    const userinput = document.getElementById("user-input").value;
    const interactionContainer = document.getElementById("interaction");

    const userMessage = document.createElement("div");
    userMessage.className = "message-container right";
    userMessage.innerHTML = `
        <img class="message-img" src="https://media1.giphy.com/media/MZUZR8c4jdjbrLbKAU/giphy.gif?cid=6c09b952k36irfouvbbt0g6vjfj1nw9jx25zprzu7yz7oadf&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=s" alt="User">
        <div class="message-text">${userinput}</div>
    `;
  
    interactionContainer.appendChild(userMessage);

    const aiMessage = document.createElement("div");
    aiMessage.className = "message-container left";
    aiMessage.innerHTML = `
        <img class="message-img" src="https://assets-global.website-files.com/59e16042ec229e00016d3a66/6181be38206e33f378df87ef_Monday_blog-hero.gif" alt="AI">
        <br/>
        <div class="message-text">${randomWord()}</div>
    `;
    interactionContainer.appendChild(aiMessage);
    document.getElementById("user-input").value="";

    interactionContainer.scrollTop=divcont.scrollHeight;
}
