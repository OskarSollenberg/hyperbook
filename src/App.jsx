import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import MainPage from "./pages/MainPage";
import Root from "./pages/Root";

import { Context } from "./context/context";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Context>
      <BrowserRouter>
        <Routes>
          <Route index element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/app" element={<Root />}>
            <Route index element={<MainPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Context>
  );
}
