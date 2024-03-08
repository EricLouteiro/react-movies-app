import { Carousel, Space, Typography } from "antd";
import { MainLayout } from "../../layouts";
import { MovieSlider } from "./components";

export const MainPage = () => {
  const { Title } = Typography;
  return (
    <MainLayout>
      <Title style={{ marginLeft: "10px" }} level={5}>
        {" "}
        Ultimos Lanzamientos:{" "}
      </Title>
      <Carousel autoplay style={{ width: "43%" }}>
        <MovieSlider />
        <MovieSlider />
        <MovieSlider />
        <MovieSlider />
        <MovieSlider />
        <MovieSlider />
      </Carousel>
    </MainLayout>
  );
};
