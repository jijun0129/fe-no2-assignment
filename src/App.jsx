import { Router } from "./routes/router";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <Provider store={store}>
      <Router />
      <ToastContainer position="bottom-right" autoClose={4000} />
    </Provider>
  );
}

export default App;
