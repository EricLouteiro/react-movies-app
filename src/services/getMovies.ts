import moviesApi from "../utils/axiosConfig";

export const getMovies = async <T>({
  path = "",
  params,
}: {
  path?: string;
  params?: { [key: string]: any };
}): Promise<T> => {
  try {
    const res = await moviesApi.get(path, {
      params,
    });
    if (res.data.Response == "False") {
      throw new Error(res.data.Error);
    } else {
      return res.data;
    }
  } catch (error: any) {
    console.log(error);
    return error;
  }
};
