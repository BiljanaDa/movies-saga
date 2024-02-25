import HttpService from "./Http.Service";

export default class MoviesService extends HttpService {
  static async getAllMovies() {
    try {
      const response = await this.request({
        method: "GET",
        url: "/movies",
      });
      return response;
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  }
}
