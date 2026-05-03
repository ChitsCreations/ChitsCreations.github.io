// Product Data
const products = [
    {
        id: 1,
        name: "Handmade Gift Box",
        price: 24.99,
        description: "Beautiful custom gift boxes perfect for any occasion",
        emoji: "🎁",
        inStock: true
    },
    {
        id: 2,
        name: "Artisan Coffee Mug",
        price: 18.99,
        description: "Ceramic mug with custom design for coffee lovers",
        emoji: "☕",
        inStock: true
    },
    {
        id: 3,
        name: "Decorative Wall Art",
        price: 35.99,
        description: "Unique handmade wall art to brighten any space",
        emoji: "🎨",
        inStock: true
    },
    {
        id: 4,
        name: "Personalized Journal",
        price: 22.50,
        description: "Custom leather-bound journal for your thoughts",
        emoji: "📔",
        inStock: true
    },
    {
        id: 5,
        name: "Scented Candle",
        price: 19.99,
        description: "Hand-poured natural wax scented candles",
        emoji: "🕯️",
        inStock: false
    },
    {
        id: 6,
        name: "Ceramic Planter",
        price: 29.99,
        description: "Handcrafted ceramic planter for your plants",
        emoji: "🌱",
        inStock: true
    },
    {
        id: 7,
        name: "Beaded Bracelet",
        price: 15.99,
        description: "Colorful handmade beaded bracelet",
        emoji: "💎",
        inStock: true
    },
    {
        id: 8,
        name: "Custom Photo Frame",
        price: 27.99,
        description: "Beautiful frame to showcase your favorite memories",
        emoji: "🖼️",
        inStock: true
    }
];

// Function to display products
function displayProducts() {
    const container = document.getElementById('productsContainer');
    container.innerHTML = '';

    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="product-image">${product.emoji}</div>
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-price">$${product.price.toFixed(2)}</div>
                <span class="stock-status ${product.inStock ? 'in-stock' : 'out-of-stock'}">
                    ${product.inStock ? '✓ In Stock' : '✗ Out of Stock'}
                </span>
                <button class="btn add-to-cart" onclick="addToCart(${product.id})" ${!product.inStock ? 'disabled' : ''}>
                    Add to Cart
                </button>
            </div>
        `;
        container.appendChild(card);
    });
}

// Function to add product to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        alert(`✓ "${product.name}" added to cart!\nPrice: $${product.price.toFixed(2)}`);
    }
}

// Initialize products on page load
document.addEventListener('DOMContentLoaded', displayProducts);
