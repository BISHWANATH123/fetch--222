
  const getCategoriesData = async () => {
    try {
      
      const response = await fetch('https://api.example.com/categories');
  
      if (!response.ok) {
        throw new Error('Failed to fetch categories data');
      }
  
      
      const categoriesData = await response.json();
  
      
      return categoriesData;
    } catch (error) {
      console.error('Error fetching categories data:', error.message);
      
      throw error;
    }
  };
  
  
  getCategoriesData()
    .then((data) => {
      console.log('Categories data:', data);
      
    })
    .catch((error) => {
      console.error('Error:', error);
      
    });
  







  const getIngredientData = async () => {
    try {
      // Replace 'https://api.example.com/ingredients' with the actual API endpoint
      const response = await fetch('https://api.example.com/ingredients');
  
      if (!response.ok) {
        throw new Error('Failed to fetch ingredient data');
      }
  
      // Assuming the response is in JSON format
      const ingredientData = await response.json();
  
      // Process the data or return it, depending on your needs
      return ingredientData;
    } catch (error) {
      console.error('Error fetching ingredient data:', error.message);
      // You might want to handle the error in a specific way or rethrow it
      throw error;
    }
  };
  
  // Example usage
  getIngredientData()
    .then((data) => {
      console.log('Ingredient data:', data);
      // Do something with the ingredient data
    })
    .catch((error) => {
      console.error('Error:', error);
      // Handle the error
    });
  
  



  //  get the buttons here and add click event
  window.onload = function () {
    // Get the buttons by their IDs or any other suitable method
    const button1 = document.getElementById('button1');
    const button2 = document.getElementById('button2');
  
    // Add click event to button1
    button1.addEventListener('click', function () {
      // Code to execute when button1 is clicked
      console.log('Button 1 clicked!');
    });
  
    // Add click event to button2
    button2.addEventListener('click', function () {
      // Code to execute when button2 is clicked
      console.log('Button 2 clicked!');
    });
  
    // Add more buttons and click events as needed
  };
  




if (typeof exports !== "undefined") {
  // CommonJS environment (Node.js)
  module.exports = {
    getCategoriesData,
    getIngredientData,
  };
} else {
  // Browser or other environment
  // You might handle exports differently for other environments
  console.warn('Module exports not supported in this environment.');
}
