import { Routes, Route } from "react-router-dom";
import { Home } from "../containers/Home";

export function CustomRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}
