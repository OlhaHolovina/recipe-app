import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";

function Category() {
  return (
    <List>
      <NavLink to="/cuisine/italian">
        <Head4>Italian <FaPizzaSlice /></Head4>
      </NavLink>

      <NavLink to="/cuisine/american">
        <Head4>American <FaHamburger /></Head4>
      </NavLink>

      <NavLink to="/cuisine/thai">
        <Head4>Thai <GiNoodles /></Head4>
      </NavLink>

      <NavLink to="/cuisine/japanese">
        <Head4>Japanese <GiChopsticks /></Head4>
      </NavLink>
    </List>
  );
}

const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0;
  gap: 20px;
  color: black;
`;

const Head4 = styled.div`
  color: black;
  display: flex;
  gap: 5px;
`;

export default Category;
