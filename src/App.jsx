// Components
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="header">
        <h2>Rate us!</h2>
        <p>
          We appreciate your purchase, use the form below to rate the product
        </p>
      </div>
      <div className="form-container">
        <p>Steps</p>
        <form>
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
