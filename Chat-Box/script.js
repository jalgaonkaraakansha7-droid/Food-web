// Loader
window.onload = () => {
  document.getElementById("loader").style.display = "none";
};




// Food Data
const foods = [
  {id:1, name:"Margherita Pizza", price:299, category:"pizza", img:"pizza.png"},
  {id:2, name:"Cheese Burger", price:199, category:"burger", img:"burger.png"},
  {id:3, name:"Chicken Biryani", price:349, category:"biryani", img:"biryani.png"},
  {id:4, name:"Chocolate Cake", price:149, category:"desserts", img:"desert.png"},
  {id:5, name:"Cold Coffee", price:99, category:"drinks", img:"drink.png"}
];

// Render Menu Items
const menuGrid = document.getElementById("menu-grid");

function renderMenu(items) {
  menuGrid.innerHTML = "";
  items.forEach(food => {
    const card = document.createElement("div");
    card.classList.add("food-card");
    card.innerHTML = `
      <img src="${food.img}" alt="${food.name}">
      <div class="info">
        <h3>${food.name}</h3>
        <p>₹${food.price}</p>
        <button onclick="addToCart(${food.id})">Add to Cart</button>
      </div>
    `;
    menuGrid.appendChild(card);
  });
}

// Initial render
renderMenu(foods);

// Filter Menu
function filterMenu(category) {
  if (category === "all") {
    renderMenu(foods);
  } else {
    const filtered = foods.filter(food => food.category === category);
    renderMenu(filtered);
  }
}

// Scroll reveal effect with loop
const sections = document.querySelectorAll(".fade-section");

function revealOnScroll() {
  sections.forEach(sec => {
    const rect = sec.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100 && rect.bottom > 100) {
      sec.classList.add("visible");
    } else {
      sec.classList.remove("visible"); // remove when out of view
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);