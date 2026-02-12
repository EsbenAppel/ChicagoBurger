console.log("Script loaded");

const burgers = [
  {
    name: "Classic Burger",
    price: 79,
    type: "beef",
    image: "images/classic.jpg"
  },
  {
    name: "Cheese Burger",
    price: 85,
    type: "beef",
    image: "images/cheese.webp"
  },
  {
    name: "Chicken Burger",
    price: 75,
    type: "chicken",
    image: "images/chicken.webp"
  },
  {
    name: "Veggie Burger",
    price: 70,
    type: "veg",
    image: "images/veggie.jpg"
  }
];

const menuContainer = document.getElementById("menu");
const filterButtons = document.querySelectorAll(".filters button");

function renderMenu(filterType) {
  menuContainer.innerHTML = "";

  burgers.forEach(function(burger) {
    if (filterType === "all" || burger.type === filterType) {

      const card = document.createElement("div");
      card.classList.add("card");

      card.innerHTML = `
        <img src="${burger.image}" alt="${burger.name}">
        <h3>${burger.name}</h3>
        <p class="price">${burger.price} kr.</p>
      `;

      menuContainer.appendChild(card);
    }
  });
}

filterButtons.forEach(function(button) {
  button.addEventListener("click", function() {
    renderMenu(button.dataset.filter);
  });
});

renderMenu("all");