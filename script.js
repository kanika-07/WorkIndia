// Get the buttons
const buttons = document.querySelectorAll('.nav-button');

// Remove image element from buttons
buttons.forEach(button => {
  const image = button.querySelector('img');
  if (image) {
    image.remove();
  }
  // Remove text content from buttons
  button.textContent = '';
});

// Add event listener to each button
buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    // Remove active class from all buttons
    buttons.forEach(btn => btn.classList.remove('active'));
    
    // Add active class to the clicked button
    button.classList.add('active');

    if (index === 0) {
      // Show list view
      document.getElementById("item-list").style.display = "block";
      document.getElementById("item-grid").style.display = "none";
      renderItemList();
    } else if (index === 1) {
      // Show grid view
      document.getElementById("item-list").style.display = "none";
      document.getElementById("item-grid").style.display = "grid";
      renderItemGrid();
    }
  });
});

// Sample data for the list of items
const items = [
    { name: "Item 1", price: 100.0 },
    { name: "Item 2", price: 10.0 },
    { name: "Item 3", price: 130.0 },
    { name: "Item 4", price: 230.0 },
    { name: "Item 5", price: 230.0 },
    { name: "Item 6", price: 230.0 },
    { name: "Item 7", price: 230.0 },
    { name: "Item 8", price: 230.0 },
    { name: "Item 9", price: 230.0 },
];

// Function to render the list of items
function renderItemList() {
    const itemListElement = document.getElementById("item-list");
    itemListElement.innerHTML = "";

    items.forEach((item) => {
        const itemElement = document.createElement("div");
        itemElement.classList.add("item");

        const itemBoxElement = document.createElement("div");
        itemBoxElement.classList.add("item-box");

        const itemInfoElement = document.createElement("div");
        itemInfoElement.classList.add("item-info");

        const itemNameElement = document.createElement("h2");
        itemNameElement.classList.add("item-name");
        itemNameElement.textContent = item.name;

        const itemPriceElement = document.createElement("p");
        itemPriceElement.classList.add("item-price");
        itemPriceElement.innerHTML = MRP: <span class="price">₹${item.price}</span>;

        itemInfoElement.appendChild(itemNameElement);
        itemInfoElement.appendChild(itemPriceElement);

        itemElement.appendChild(itemBoxElement);
        itemElement.appendChild(itemInfoElement);

        itemListElement.appendChild(itemElement);
    });
}

// Function to render the grid of items
function renderItemGrid() {
    const itemGridElement = document.getElementById("item-grid");
    itemGridElement.innerHTML = "";
    itemGridElement.style.display = "grid"; // Add this line

    items.forEach((item, index) => {
        const itemElement = document.createElement("div");
        itemElement.classList.add("grid-item");

        const itemBoxElement = document.createElement("div");
        itemBoxElement.classList.add("item-box");

        const itemInfoElement = document.createElement("div");
        itemInfoElement.classList.add("item-info");

        const itemNameElement = document.createElement("h2");
        itemNameElement.classList.add("item-name");
        itemNameElement.textContent = item.name;

        const itemPriceElement = document.createElement("p");
        itemPriceElement.classList.add("item-price");
        itemPriceElement.innerHTML = MRP: <span class="price">₹${item.price}</span>;

        itemInfoElement.appendChild(itemNameElement);
        itemInfoElement.appendChild(itemPriceElement);

        itemElement.appendChild(itemBoxElement);
        itemElement.appendChild(itemInfoElement);

        itemGridElement.appendChild(itemElement);a
    });
}

// Render the list of items on page load
buttons[0].classList.add('active');
document.getElementById("item-list").style.display = "block";
document.getElementById("item-grid").style.display = "none";
renderItemList();

document.getElementById('add-button').addEventListener('click', function() {
    var addItemSection = document.getElementById('add-item-section');
    if (addItemSection.style.display === 'none') {
      addItemSection.style.display = 'block';
    } else {
      addItemSection.style.display = 'none';
    }
  });
