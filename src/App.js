import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createContext, useState } from "react";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

export const UserContext = createContext();

function App() {
  const [minRate, setMinRate] = useState(3);
  return (
    <UserContext.Provider value={{ minRate, setMinRate }}>
      <BrowserRouter>
        <Routes>
          <Route
            path={`${process.env.PUBLIC_URL}/movie/:id`}
            element={<Detail />}
          />
          <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
