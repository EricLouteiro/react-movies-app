import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { DetailsPage, MainPage } from "../pages";
import { BodyLayout } from "../layouts";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <BodyLayout>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/details" element={<DetailsPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BodyLayout>
    </BrowserRouter>
  );
};
