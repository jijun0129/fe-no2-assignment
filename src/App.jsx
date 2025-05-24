import { Router } from "./routes/router";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { ToastContainer } from "react-toastify";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router />
        <ToastContainer position="bottom-right" autoClose={4000} />
      </PersistGate>
    </Provider>
  );
}

export default App;
