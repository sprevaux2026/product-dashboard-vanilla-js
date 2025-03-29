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
  