import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import { Provider } from "react-redux";
import store from "./store";
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route
            path={`${process.env.PUBLIC_URL}/movie/:id`}
            element={<Detail />}
          />
          <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
