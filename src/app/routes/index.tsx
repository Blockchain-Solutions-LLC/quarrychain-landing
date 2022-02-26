import { Routes, Route } from "react-router-dom";
import { FAQ } from "../containers/FAQ";
import { Home } from "../containers/Home";
import { TuffToken } from "../containers/TuffToken";

export function CustomRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/tuff-token" element={<TuffToken />} />
    </Routes>
  );
}
