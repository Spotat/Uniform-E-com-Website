const tabs = document.querySelectorAll(".product_category_tab");
const products = document.querySelectorAll(".product_card");
const paginationContainer = document.getElementById("pagination");

const itemsPerPage = 3;
let currentPage = 1;
let currentCategory = "all";

// Count updater
function updateCounts() {
    tabs.forEach(tab => {
        const category = tab.getAttribute("data-category");
        const span = tab.querySelector("span");

        if (category === "all") {
        span.textContent = products.length;
        } else {
        const count = Array.from(products).filter(
            product => product.getAttribute("data-category") === category
        ).length;
        span.textContent = count;
        }
    });
}

// Render products for current category + page
function renderProducts(page, category) {
    const filtered = Array.from(products).filter(product =>
        category === "all" ? true : product.getAttribute("data-category") === category
    );

    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;

    filtered.forEach((product, index) => {
        product.style.display = (index >= start && index < end) ? "block" : "none";
    });

    // Hide products not in category
    products.forEach(product => {
        if (!filtered.includes(product)) {
        product.style.display = "none";
        }
    });

    renderPagination(filtered.length, page);
}

// Render pagination buttons
function renderPagination(totalItems, page) {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    paginationContainer.innerHTML = "";

    if (totalPages <= 1) return; // no pagination needed

    for (let i = 1; i <= totalPages; i++) {
        const btn = document.createElement("button");
        btn.textContent = i;
        btn.classList.add("page-btn");
        if (i === page) btn.classList.add("active");

        btn.addEventListener("click", () => {
        currentPage = i;
        renderProducts(currentPage, currentCategory);
        });

        paginationContainer.appendChild(btn);
    }
}

// Tab click handler
tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        tabs.forEach(t => t.classList.remove("active"));
        tab.classList.add("active");

        currentCategory = tab.getAttribute("data-category");
        currentPage = 1; // reset to first page
        renderProducts(currentPage, currentCategory);
    });
});

// Initial setup
updateCounts();
renderProducts(currentPage, currentCategory);