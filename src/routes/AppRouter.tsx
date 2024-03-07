import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainPage } from "../pages";
import { BodyLayout } from "../layouts";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <BodyLayout>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/details" element={<></>} />
          <Route path="/*" element={<MainPage />} />
        </Routes>
      </BodyLayout>
    </BrowserRouter>
  );
};
