import moviesApi from "../utils/axiosConfig";

export const getMovies = async <T>({
  path = "",
  params,
}: {
  path?: string;
  params?: { [key: string]: any };
}): Promise<T> => {
  const res = await moviesApi.get(path, {
    params,
  });
  return res.data;
};
