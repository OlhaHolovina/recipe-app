export const getData = async (tage) => {
  try {
    if (!tage) throw new Error('no tage!');
    const check = localStorage.getItem(tage);
    if (check) {
      return (JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tage=${tage}`
      );
      const data = await api.json();

      localStorage.setItem(tage, JSON.stringify(data.recipes));
      return data.recipes;
    }
  } catch (e) {
  	alert(e.message);
    console.log(e);
  }
}
