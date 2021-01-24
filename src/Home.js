//Importing Button from material ui
import { Button } from "@material-ui/core";

//importing useHistoryHook from React-Router
import { useHistory } from "react-router-dom";

//Importing Css
import "./Home.css";

function Home() {
  //Implementing useHistory Hook
  const history = useHistory();
  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://i.pinimg.com/originals/ca/65/54/ca655453eb79fe8db19601dfcf53ed95.jpg"
          alt=""
        />
      </div>
      <Button onClick={() => history.push("/calendar")}>Go to Calendar</Button>
    </div>
  );
}

export default Home;
