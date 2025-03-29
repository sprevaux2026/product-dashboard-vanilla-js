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
  