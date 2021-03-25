import axios from "axios";

const request = (path) => {
  return axios.get(`https://www.themealdb.com/api/json/v1/1/${path}
  `);
};

const getData = async (path) => {
  try {
    const {
      data: { meals },
    } = await request(path);
    return [meals, null];
  } catch (e) {
    console.log(e);
    return [null, e];
  }
};

export const foodApi = {
  search: (term) => getData(`filter.php?i=${term}`),
};
