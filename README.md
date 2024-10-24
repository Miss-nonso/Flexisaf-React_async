# Recipe Finder

This project is a simple recipe search application built with React. Users can search for recipes by entering ingredients and view recipe results fetched from the Spoonacular API. The project demonstrates the following concepts:

### Key Concepts Used

1. **JSON**:
   - The recipe data is retrieved from the Spoonacular API, which responds with data in **JSON** format. This data is then parsed and used to display recipes dynamically in the UI.

2. **Form Data**:
   - The search form allows users to enter ingredients they want to include in their recipes. This **form data** is captured and used to make API requests, allowing the app to search for recipes based on user input.

3. **Promises**:
   - The project uses JavaScript **Promises** when making the API request using the `fetch()` function. The `fetch()` method returns a Promise, which is resolved with the recipe data or an error message if the request fails.

4. **Async/Await**:
   - The API calls are handled with **async/await**, making the asynchronous code easier to read and manage. This ensures that the app waits for the recipe data to be fetched before updating the UI.

### Features

- Search recipes by ingredients.
- Display initial recipes on page load.
- Responsive design for all screen sizes.
- Hover effect on recipe cards for better interactivity.
