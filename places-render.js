const listContainer = document.getElementById("places-list");

places.forEach((place, index) => {
  const card = document.createElement("article");
  card.className = "place-card";

  card.innerHTML = `
    <div class="place-image">
      <img src="${place.image}" alt="${place.name}">
    </div>

    <div class="place-text">
      <h2><span class="place-number">${index + 1}.</span> ${place.name}</h2>
      <p>${place.description}</p>
    </div>
  `;

  listContainer.appendChild(card);
});