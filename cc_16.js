// Task 2: Fetch Products with .then()
function fetchProductsThen() {
    fetch('https://www.course-api.com/javascript-store-products')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(products => {
        // Log each product's name 
        products.forEach(product => {
          console.log(product.fields.name);
        });
      })
      .catch(error => {
        console.error('Error fetching products with .then():', error);
      });
  }

  // Task 3: Fetch Products with async/await
async function fetchProductsAsync() {
    try {
      const response = await fetch('https://www.course-api.com/javascript-store-products');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const products = await response.json();
      //Display products in the DOM
      displayProducts(products);
    } catch (error) {
      handleError(error);
    }
  }
  
  // Task 4: Display the Products
function displayProducts(products) {
    const container = document.getElementById('product-container');
    // Clear container in case there is previous content
    container.innerHTML = '';
  
    // Loop through the first 5 products
    products.slice(0, 5).forEach(product => {
      // Create a container div for each product
      const productDiv = document.createElement('div');
      productDiv.classList.add('product');
  
      // Create and set product name element
      const productName = document.createElement('h2');
      productName.textContent = product.fields.name;
  
      // Create and set product price element
      const productPrice = document.createElement('p');
      productPrice.textContent = `$${product.fields.price}`;
  
      // Create and set product image element
      const productImg = document.createElement('img');
      productImg.src = product.fields.image[0].url;
      productImg.alt = product.fields.name;
  
      // Append elements 
      productDiv.appendChild(productImg);
      productDiv.appendChild(productName);
      productDiv.appendChild(productPrice);
  
      // Append the product 
      container.appendChild(productDiv);
    });
  }
  