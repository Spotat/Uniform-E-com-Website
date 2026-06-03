const tabs = document.querySelectorAll(".product_category_tab");
const products = document.querySelectorAll(".product_card");

// Update counts in tabs
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

// Filtering logic
tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        tabs.forEach(t => t.classList.remove("active"));
        tab.classList.add("active");

        const category = tab.getAttribute("data-category");

        products.forEach(product => {
        if (category === "all" || product.getAttribute("data-category") === category) {
            product.style.display = "block";
            // product.classList.remove("hidden");
        } else {
            product.style.display = "none";
            // product.classList.add("hidden");
        }
        });
    });
});

// const tabs = document.querySelectorAll(".product_category_tab");
// const products = document.querySelectorAll(".product_card");

// tabs.forEach(tab => {
//     tab.addEventListener("click", () => {
//         // Remove active class from all tabs
//         tabs.forEach(t => t.classList.remove("active"));
//         tab.classList.add("active");

//         const category = tab.getAttribute("data-category");

//         products.forEach(product => {
//         if (category === "all" || product.getAttribute("data-category") === category) {
//             product.style.display = "block";
//         } else {
//             product.style.display = "none";
//         }
//         });
//     });
// });