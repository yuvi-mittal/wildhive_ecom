function toggleHeartColor(event) {
    var heartIcon = event.currentTarget.querySelector('.heart-icon');
    heartIcon.classList.toggle('red-heart');
  }
  
  // Function to handle quantity change
function handleQuantityChange(operation) {
    const quantityInput = document.querySelector('input[name="quantity"]');
    let quantity = parseInt(quantityInput.value);
    if (operation === 'increment') {
        quantity++;
    } else if (operation === 'decrement' && quantity > 1) {
        quantity--;
    }
                
    quantityInput.value = quantity;
    const price = parseFloat(document.getElementById('productPrice').textContent.replace('$', ''));
    const totalPrice = quantity * price;
    document.getElementById('totalPrice').textContent = `${totalPrice.toFixed(2)}`;
}
// Add event listeners to plus and minus buttons
document.querySelector('.minus').addEventListener('click', () => handleQuantityChange('decrement'));
document.querySelector('.plus').addEventListener('click', () => handleQuantityChange('increment'));


//customer to single-product page
document.querySelectorAll('.customers-item-carousel .item').forEach(item => {
    const img = item.querySelector('.thumb img');
    const price = item.querySelector('.down-content span').textContent.replace('$', ''); // Remove $ for clean price data
    const name = item.querySelector('.down-content h4').textContent;
    const productDescription = "Description of " + name; // Assuming you want to add a description
    const encodedName = encodeURIComponent(name);
    const encodedPrice = encodeURIComponent(price);
    const encodedDescription = encodeURIComponent(productDescription);
    
    // Assuming img.src is the correct path you want to use as imageSource
    const encodedImageSource = encodeURIComponent(img.src);

    // Now set the shopping cart link correctly
    const cartLink = item.querySelector('.hover-content ul li a[href="single-product.html"]');
    if(cartLink) {
        cartLink.href = `single-product.html?imageSource=${encodedImageSource}&price=${encodedPrice}&name=${encodedName}&productDescription=${encodedDescription}`;
    }
});

function openSingleProduct(event, price, name) {
    event.preventDefault();
    const imageSource = event.target.getAttribute('src');
    const encodedImageSource = encodeURIComponent(imageSource);
    const encodedPrice = encodeURIComponent(price);
    const encodedName = encodeURIComponent(name);
    window.location.href = `single-product.html?imageSource=${encodedImageSource}&price=${encodedPrice}&name=${encodedName}`;
}
document.querySelectorAll('.customers-item-carousel .item img').forEach(img => {
    const price = img.closest('.item').querySelector('.down-content span').textContent;
    const name = img.closest('.item').querySelector('.down-content h4').textContent;
    img.addEventListener('click', event => openSingleProduct(event, price, name));
});

// retailiers to single-product page
document.querySelectorAll('.retailers-item-carousel .item').forEach(item => {
    const img = item.querySelector('.thumb img');
    const price = item.querySelector('.down-content span').textContent.replace('$', ''); // Remove $ for clean price data
    const name = item.querySelector('.down-content h4').textContent;
    const productDescription = "Description of " + name; // Assuming you want to add a description
    const encodedName = encodeURIComponent(name);
    const encodedPrice = encodeURIComponent(price);
    const encodedDescription = encodeURIComponent(productDescription);
    
    // Assuming img.src is the correct path you want to use as imageSource
    const encodedImageSource = encodeURIComponent(img.src);

    // Now set the shopping cart link correctly
    const cartLink = item.querySelector('.hover-content ul li a[href="single-product.html"]');
    if(cartLink) {
        cartLink.href = `single-product.html?imageSource=${encodedImageSource}&price=${encodedPrice}&name=${encodedName}&productDescription=${encodedDescription}`;
    }
});

function openSingleProduct(event, price, name) {
    event.preventDefault();
    const imageSource = event.target.getAttribute('src');
    const encodedImageSource = encodeURIComponent(imageSource);
    const encodedPrice = encodeURIComponent(price);
    const encodedName = encodeURIComponent(name);
    window.location.href = `single-product.html?imageSource=${encodedImageSource}&price=${encodedPrice}&name=${encodedName}`;
}
document.querySelectorAll('.customers-item-carousel .item img').forEach(img => {
    const price = img.closest('.item').querySelector('.down-content span').textContent;
    const name = img.closest('.item').querySelector('.down-content h4').textContent;
    img.addEventListener('click', event => openSingleProduct(event, price, name));
});



// wholesalers to single-product page 
document.querySelectorAll('.wholersalers-item-carousel .item').forEach(item => {
    const img = item.querySelector('.thumb img');
    const price = item.querySelector('.down-content span').textContent.replace('$', ''); // Remove $ for clean price data
    const name = item.querySelector('.down-content h4').textContent;
    const productDescription = "Description of " + name; // Assuming you want to add a description
    const encodedName = encodeURIComponent(name);
    const encodedPrice = encodeURIComponent(price);
    const encodedDescription = encodeURIComponent(productDescription);
    
    // Assuming img.src is the correct path you want to use as imageSource
    const encodedImageSource = encodeURIComponent(img.src);

    // Now set the shopping cart link correctly
    const cartLink = item.querySelector('.hover-content ul li a[href="single-product.html"]');
    if(cartLink) {
        cartLink.href = `single-product.html?imageSource=${encodedImageSource}&price=${encodedPrice}&name=${encodedName}&productDescription=${encodedDescription}`;
    }
});

function openSingleProduct(event, price, name) {
    event.preventDefault();
    const imageSource = event.target.getAttribute('src');
    const encodedImageSource = encodeURIComponent(imageSource);
    const encodedPrice = encodeURIComponent(price);
    const encodedName = encodeURIComponent(name);
    window.location.href = `single-product.html?imageSource=${encodedImageSource}&price=${encodedPrice}&name=${encodedName}`;
}
document.querySelectorAll('.customers-item-carousel .item img').forEach(img => {
    const price = img.closest('.item').querySelector('.down-content span').textContent;
    const name = img.closest('.item').querySelector('.down-content h4').textContent;
    img.addEventListener('click', event => openSingleProduct(event, price, name));
});

