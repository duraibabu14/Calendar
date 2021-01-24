//Importing Button from material ui
import { Button } from "@material-ui/core";

//importing useHistoryHook from React-Router
import { useHistory } from "react-router-dom";

//Importing Css
import "./NotFound.css";

function NotFound() {
  //Implementing useHistory Hook
  const history = useHistory();
  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://image.freepik.com/free-vector/error-icon-404-found-broken-message-banner_48369-13070.jpg"
          alt=""
        />
      </div>
      <h1>Oops Page Notfound Go Back to Home</h1>
      <Button onClick={() => history.push("/")}>Go to Home</Button>
    </div>
  );
}

export default NotFound;
