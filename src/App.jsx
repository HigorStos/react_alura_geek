import RoutesApp from "./routes";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <RoutesApp />
      <ToastContainer autoClose={2500} />
    </>
  );
};

export default App;
