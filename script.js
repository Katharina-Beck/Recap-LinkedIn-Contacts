// const apiUrl = "https://dummy-apis.netlify.app/api/contact-suggestions?count=1";
// const contacts = document.getElementById("#contacts");

// let user = [];

// function loadContact() {
//   fetch(apiUrl)
//     .then((response) => response.json())
//     .then((userFromApi) => {
//       user.push(...userFromApi);
//       renderUser();
//     });
// }

// let image = document.createElement("img");
// image.src = person.picture;
// image.className = "image";

document.addEventListener("DOMContentLoaded", function () {
  fetch("https://dummy-apis.netlify.app/api/contact-suggestions?count=8")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const socialWall = document.getElementById("social-wall");
      data.forEach(async (contact) => {
        let backgroundImage =
          "https://img.freepik.com/free-photo/black-white-focused-defocused-bubbles_23-2148227179.jpg";
        if (contact.backgroundImage != null && contact.backgroundImage != "")
          backgroundImage = await getRandomBackgroundImage(
            contact.backgroundImage
          );

        const personCard = document.createElement("div");
        personCard.className = "person-card";
        personCard.innerHTML = `
            <div class="background-image-container">
                <img src="${backgroundImage}" alt="${contact.name.last}" class="background-image">
                </div>
            <div class="person-image-container">
                <img src="${contact.picture}" alt="${contact.name.last}" class="person-image">
                    </div>
                    <div class="person-info">
                    <h3>${contact.title}</h3>
                    <h2>${contact.name.title} ${contact.name.first} ${contact.name.last}</h2>
                        <p>${contact.mutualConnections} gemeinsame Verbindungen</p>
                        <button>Verbinden</button>
                    </div>
                `;
        socialWall.appendChild(personCard);
      });
    });
});

async function getRandomBackgroundImage(url) {
  return fetch(url)
    .then((response) => {
      return response.url;
    })
    .then((data) => {
      return data;
    });
}
