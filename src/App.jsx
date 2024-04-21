// Components
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import UserForm from "./components/UserForm";
import ReviewForm from "./components/ReviewForm";
import Thanks from "./components/Thanks";

// Hooks
import { useForm } from "./hooks/useForm";

import "./App.css";

function App() {
  const formComponents = [<UserForm />, <ReviewForm />, <Thanks />];

  const { currentStep, currentComponent } = useForm(formComponents);

  return (
    <div className="app">
      <div className="header">
        <h2>Review!</h2>
        <p>
          We appreciate your purchase, use the form below to review the product
        </p>
      </div>
      <div className="form-container">
        <p>Steps</p>
        <form>
          <div className="inputs-container">{currentComponent}</div>
          <div className="action">
            <button type="button">
              <GrFormPrevious />
              <span>Back</span>
            </button>
            <button type="submit">
              <span>Next</span>
              <GrFormNext />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
