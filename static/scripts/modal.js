const modal = document.getElementById("productModal");
const openBtn = document.getElementById("openModalBtn");
const closeBtn = document.querySelector(".close");
const form = document.getElementById("addProductForm");
const productsContainer = document.getElementById("productsContainer");

openBtn.onclick = () => modal.style.display = "grid";
closeBtn.onclick = () => modal.style.display = "none";
window.onclick = e => { if (e.target === modal) modal.style.display = "none"; };

form.addEventListener("submit", e => {
    e.preventDefault();

    const name = document.getElementById("productName").value;
    const desc = document.getElementById("productDescription").value;
    const price = document.getElementById("productPrice").value;
    const category = document.getElementById("productCategory").value;
    const image = document.getElementById("productImage").value || "../static/assets/images/default.jpg";
    const sizesInput = document.getElementById("productSizes").value;
    const sizes = sizesInput.split(",").map(s => s.trim()).filter(s => s);

    // Build sizes HTML
    let sizesHTML = "";
    sizes.forEach((size, idx) => {
        sizesHTML += `<div class="size ${idx === 0 ? "active" : ""}"><p>${size}</p></div>`;
    });

    // Create new product card
    const card = document.createElement("div");
    card.classList.add("product_card");
    card.setAttribute("data-category", category);
    card.innerHTML = `
        <div class="stock_level_overlay">
        <p>Inv Level: <b>0</b></p>
        </div>
        <img src="${image}" alt="Product Image">
        <div class="product_card_body">
        <h3>${name}</h3>
        <p class="product_description">${desc}</p>
        <div class="size_container">
            <p>Select size:</p>
            <div class="size-group">${sizesHTML}</div>
        </div>
        <div class="product_actions">
            <p>KES ${parseFloat(price).toFixed(2)}</p>
            <div class="product_actions_row">
            <button class="edit_btn"><span class="lni lni-pencil-1"></span> Edit</button>
            <button class="delete_btn"><span class="lni lni-trash"></span> Delete</button>
            </div>
        </div>
        <button class="add_to_cart_btn"><span class="lni lni-cart-1"></span> Add to Cart</button>
        </div>
    `;

    productsContainer.appendChild(card);
    modal.style.display = "none";
    form.reset();
});