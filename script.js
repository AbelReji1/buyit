const products = [
    {
      id: 1,
      name: "Serum",
      price: 149.99,
      image: "serum.jpg",
      description: "This targeted skincare duo helps reveal brighter, clearer skin."
    },
    {
      id: 2,
      name: "Shampoo",
      price: 99.99,
      image: "shampoo.jpg",
      description: "Bring salon-level care to your hair with this powerhouse duo."
    },
    {
      id: 3,
      name: "Face wash",
      price: 190.99,
      image: "facewash.jpg",
      description: "A powerful purifying daily face wash for men, infused with Oak Bark. "
    }
  ];
  
  let cartCount = 0;
  
  const grid = document.getElementById("product-grid");
  
  products.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <strong>Rs.${product.price.toFixed(2)}</strong><br/>
      <button onclick="addToCart()">Add to Cart</button>
    `;
    grid.appendChild(card);
  });
  
  function addToCart() {
    cartCount++;
    document.getElementById("cart-count").textContent = `🛒 ${cartCount}`;
  }
  