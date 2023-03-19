import axios from "axios";

const getToken = async () => {
  try {
    const { data } = await axios.get(
      `https://api.wisey.app/api/v1/auth/anonymous?platform=subscriptions`
    );
    return data.token;
  } catch (error) {
    return error;
  }
};

export default class CoursesService {
  static async getAll() {
    const token = await getToken();
    const response = await axios.get(
      `https://api.wisey.app/api/v1/core/preview-courses`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response;
  }

  static async getById(id) {
    const token = await getToken();
    const response = await axios.get(
      `https://api.wisey.app/api/v1/core/preview-courses/` + id,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response;
  }
}
