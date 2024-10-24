import React, { useState, useEffect } from "react";
import "./App.css";

const API_KEY = `${process.env.REACT_APP_API_KEY}`;
const API_URL = `${process.env.REACT_APP_API_URL}`;

function App() {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchInitialRecipes = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `${API_URL}?query=pasta&number=9&apiKey=${API_KEY}`
        );
        const data = await response.json();
        setRecipes(data.results);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
      setIsLoading(false);
    };

    fetchInitialRecipes();
  }, []);

  const fetchRecipes = async (ingredient) => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `${API_URL}?query=${ingredient}&number=9&apiKey=${API_KEY}`
      );
      const data = await response.json();
      setRecipes(data.results);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
    setIsLoading(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query) {
      fetchRecipes(query);
    }
  };

  return (
    <div className="App">
      <header>
        <h1 className="title">Recipe Finder</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter ingredients (e.g., chicken, rice)"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
      </header>

      {isLoading && <p>Loading recipes...</p>}
      <div className="recipe-grid">
        {recipes.length > 0 &&
          recipes.map((recipe) => (
            <div key={recipe.id} className="recipe-card">
              <img
                src={`https://spoonacular.com/recipeImages/${recipe.id}-312x231.jpg`}
                alt={recipe.title}
              />
              <h3>{recipe.title}</h3>
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
