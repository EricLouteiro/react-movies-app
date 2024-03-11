import { Carousel, Col, Flex, Row, Space, Typography } from "antd";
import { MainLayout } from "../../layouts";
import { MovieCard, MovieSlide, SearchResultCard } from "./components";
import { useEffect } from "react";
import { getMovies } from "../../services";
import { MovieResponse } from "../../services/interfaces";
import { movieAdapter } from "../../adapters";
import { movieStore } from "../../store";

const moviesRecommended: string = import.meta.env.VITE_MOVIES_RECOMMENDED;
const moviesCurrent: string = import.meta.env.VITE_CURRENT_MOVIES;
export const MainPage = () => {
  const { Title } = Typography;
  const { recommended, add, current } = movieStore((state) => state);

  useEffect(() => {
    const currentArray = moviesCurrent.split(";");
    for (const currentMovieString of currentArray) {
      getMovies<MovieResponse>({
        params: {
          t: currentMovieString,
        },
      })
        .then((resp) => {
          const dataAdapted = movieAdapter(resp);
          add(dataAdapted, "current");
        })
        .catch();
    }
  }, []);

  useEffect(() => {
    const recommendedArray = moviesRecommended.split(";");
    for (const recommendedString of recommendedArray) {
      getMovies<MovieResponse>({
        params: {
          t: recommendedString,
        },
      })
        .then((resp) => {
          const dataAdapted = movieAdapter(resp);
          add(dataAdapted, "recommended");
        })
        .catch();
    }
  }, []);

  return (
    <MainLayout>
      <Row style={{ width: "100%", maxWidth: "100%" }}>
        <Col span={16}>
          <Row style={{ paddingLeft: "1rem" }}>
            <Col span={24}>
              <Title style={{ marginLeft: "10px" }} level={5}>
                Ultimos Lanzamientos:
              </Title>
              <Carousel autoplay style={{ width: "100%" }}>
                {current.length > 0 ? (
                  current.map((movie) => (
                    <MovieSlide
                      key={movie.imdbID}
                      actors={movie.actors}
                      description={movie.plot}
                      year={movie.year}
                      imgSrc={movie.poster}
                    />
                  ))
                ) : (
                  <></>
                )}
              </Carousel>
            </Col>
          </Row>
          <Row
            style={{
              width: "100%",
              alignContent: "center",
              marginTop: "3em",
              paddingLeft: "1em",
              paddingRight: "1em",
            }}
          >
            <Space
              direction="vertical"
              style={{ width: "100%", maxWidth: "100%" }}
            >
              <Title level={5}> Recomendados </Title>
              <Space
                style={{ width: "100%", maxWidth: "100%", overflow: "auto" }}
              >
                {recommended.length > 0 &&
                  recommended.map((movie) => (
                    <MovieCard
                      title={movie.title}
                      imgSrc={movie.poster}
                      year={movie.year}
                    />
                  ))}
              </Space>
            </Space>
          </Row>
        </Col>
        <Col span={8} style={{ maxHeight: "80vh" }}>
          <Title level={5}>Resultados de búsqueda:</Title>
          <Col
            style={{
              width: "100%",
              maxHeight: "80vh",
              overflow: "auto",
            }}
          >
            <SearchResultCard />
            <SearchResultCard />
            <SearchResultCard />
            <SearchResultCard />
            <SearchResultCard />
            <SearchResultCard />
            <SearchResultCard />
            <SearchResultCard />
            <SearchResultCard />
            <SearchResultCard />
            <SearchResultCard />
            <SearchResultCard />
          </Col>
        </Col>
      </Row>
    </MainLayout>
  );
};
