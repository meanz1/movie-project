import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createContext, useReducer, useState } from "react";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import rateReducer from "./reducers/rateReducer";
import { UserContextProvider } from "./context/rateContext";

function App() {
  // const [minRate, setMinRate] = useState(3);

  return (
    <UserContextProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={`${process.env.PUBLIC_URL}/movie/:id`}
            element={<Detail />}
          />
          <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />} />
        </Routes>
      </BrowserRouter>
    </UserContextProvider>
  );
}

export default App;
