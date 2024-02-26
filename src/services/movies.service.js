import HttpService from "./Http.Service";

export default class MoviesService extends HttpService {
  static getAllMovies = async () => {
    const response = await this.request({
      method: "GET",
      url: "/movies",
    });
    return response?.data;
  };
}
