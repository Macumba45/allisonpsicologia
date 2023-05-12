import { FC, memo } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "../views/Landing/landing";
import Contacto from "../views/Contacto";

const Router: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        {/* <Route path="/contacto" element={<Contacto />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default memo(Router);
