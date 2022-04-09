import {getData} from "../helpers/functions";
import RecipesList from "./RecipesList";
import {useEffect, useState} from "react";
import styled from "styled-components";
import { useParams } from 'react-router-dom';

const RecipesDataList = ({title, tage}) => {
  const [recipes, setRecipes] = useState([]);
  const { type } = useParams();

  useEffect(() => {
    const loadData = async () => {
      const data = await getData(tage || type);
      setRecipes(data);
    };

    loadData();
  }, [type, tage]);



  return (
    <Wrapper >
      <RecipesList recipies={recipes} title={title || type}/>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-bottom: 20px;
`;

export default RecipesDataList;
