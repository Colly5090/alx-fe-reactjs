import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<><AddRecipeForm /><RecipeList /><FavoritesList /><RecommendationsList /></>} />
        <Route path='/recipe/:recipeId' element={<RecipeDetails />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
