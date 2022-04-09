import RecipesDataList from "../components/RecipesDataList";

function Home() {
  return (
    <div>
      <RecipesDataList title='Veggie' tage='vegetarian'/>
      <RecipesDataList title='Desserts' tage='dessert'/>
    </div>
  );
}

export default Home;
