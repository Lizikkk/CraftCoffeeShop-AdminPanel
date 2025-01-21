import { Link } from 'react-router-dom';

const Mainpage = () => {
  return (
    <div>
      <Link to="/coffeeList">Coffee List</Link>
      <Link to="/ingredients">Ingredients</Link>
    </div>
  );
};

export default Mainpage;
