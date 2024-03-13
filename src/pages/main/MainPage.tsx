import {
  Button,
  Carousel,
  Col,
  Row,
  Space,
  Typography,
  message,
  notification,
} from "antd";
import { MainLayout } from "../../layouts";
import { MovieCard, MovieSlide, SearchResultCard } from "./components";
import { useEffect } from "react";
import { getMovies } from "../../services";
import { MovieResponse } from "../../services/interfaces";
import { movieAdapter } from "../../adapters";
import { movieStore } from "../../store";
import { useNavigate } from "react-router-dom";
import { Movie } from "../../models";

const moviesRecommended: string = import.meta.env.VITE_MOVIES_RECOMMENDED || "";
const moviesCurrent: string = import.meta.env.VITE_CURRENT_MOVIES || "";

export const MainPage = () => {
  const { Title } = Typography;
  const {
    recommended,
    add,
    current,
    setSelectedMovie,
    searchMovies,
    addMovieSearch,
  } = movieStore((state) => state);
  const navigate = useNavigate();
  const [api] = notification.useNotification();
  const [messageApi, contexHolder] = message.useMessage();

  useEffect(() => {
    const currentArray = moviesCurrent.split(";");
    for (const currentMovieString of currentArray) {
      getMovies<MovieResponse>({
        params: {
          t: currentMovieString,
          plot: "full",
        },
      })
        .then((resp) => {
          const dataAdapted = movieAdapter(resp);
          add(dataAdapted, "current");
        })
        .catch(() => {
          api.error({
            duration: 3000,
            placement: "topRight",
            message: "Error",
            description: "Error retrieving Movies, please retry again",
          });
        });
    }
  }, []);

  useEffect(() => {
    const recommendedArray = moviesRecommended.split(";");
    for (const recommendedString of recommendedArray) {
      getMovies<MovieResponse>({
        params: {
          t: recommendedString,
          plot: "full",
        },
      })
        .then((resp) => {
          const dataAdapted = movieAdapter(resp);
          add(dataAdapted, "recommended");
        })
        .catch(() => {
          api.error({
            duration: 3000,
            placement: "topRight",
            message: "Error",
            description: "Error retrieving Movies, please retry again",
          });
        });
    }
  }, []);

  const handleNavClick = (selectedMovie: Movie) => {
    setSelectedMovie(selectedMovie);
    navigate("/details");
  };

  const handleSearchSelection = (imdbId: string) => {
    messageApi.open({
      key: "updatable",
      type: "loading",
      content: "Loading...",
    });
    getMovies<MovieResponse>({
      params: {
        i: imdbId,
        plot: "full",
      },
    })
      .then((res) => {
        const movieAdapted = movieAdapter(res);
        setSelectedMovie(movieAdapted);
        messageApi.destroy("updatable");
        navigate("/details");
      })
      .catch(() => {
        api.error({
          duration: 3000,
          placement: "topRight",
          message: "Error",
          description: "Error retrieving Movie details, please retry again",
        });
      });
  };

  const handleClearResults = () => {
    addMovieSearch([]);
  };

  return (
    <MainLayout>
      {contexHolder}
      <Row style={{ width: "100%", maxWidth: "100%" }}>
        <Col span={16}>
          <Row style={{ paddingLeft: "1rem" }}>
            <Col span={24}>
              <Title style={{ marginLeft: "10px" }} level={5}>
                Latest Releases:
              </Title>
              <Carousel autoplay style={{ width: "100%" }}>
                {current.length > 0 ? (
                  current.map((movie) => (
                    <MovieSlide
                      key={movie.imdbID}
                      title={movie.title}
                      actors={movie.actors}
                      description={movie.plot}
                      year={movie.year}
                      imgSrc={movie.poster}
                      rate={movie.imdbRating}
                      onClick={() => handleNavClick(movie)}
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
              <Title level={5}> Recommended Films </Title>
              <Space
                style={{ width: "100%", maxWidth: "100%", overflow: "auto" }}
              >
                {recommended.length > 0 &&
                  recommended.map((movie) => (
                    <MovieCard
                      key={movie.imdbID}
                      title={movie.title}
                      imgSrc={movie.poster}
                      year={movie.year}
                      onClick={() => handleNavClick(movie)}
                    />
                  ))}
              </Space>
            </Space>
          </Row>
        </Col>
        <Col span={8} style={{ maxHeight: "80vh" }}>
          <Space
            style={{
              width: "100%",
              justifyContent: "space-between",
              alignItems: "baseline",
            }}
          >
            <Title level={5}>Search Results: </Title>
            <Button
              size="small"
              onClick={() => handleClearResults()}
              type="default"
            >
              {" "}
              Clear{" "}
            </Button>
          </Space>
          <Col
            style={{
              width: "100%",
              maxHeight: "80vh",
              overflow: "auto",
            }}
          >
            {searchMovies.length > 0 &&
              searchMovies.map((result) => (
                <SearchResultCard
                  title={result.title}
                  year={result.year}
                  poster={result.poster}
                  key={result.imdbID}
                  onClick={() => handleSearchSelection(result.imdbID)}
                />
              ))}
          </Col>
        </Col>
      </Row>
    </MainLayout>
  );
};
