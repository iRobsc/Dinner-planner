import Cache from "./cache";
import { API_KEY, URL } from "./APIkey";

/**
 * Function that returns a dish of specific ID
 *
 * @param {Number} id
 * @returns {Promise<Dish>}
 */
export default function getDish(id) {
  const cached = Cache.getDish(id);

  // cache miss
  if (cached === -1) {
    const endPoint = `${URL}/recipes/${id}/information`;
    return fetch(endPoint, {
      headers: {
        "X-Mashape-Key": API_KEY,
      },
    }).then(res => res.json())
      .then((json) => {
        Cache.setDish(id, json);
        console.log(json);
        return json;
      });
  }

  // cache hit
  return new Promise((resolve) => {
    resolve(cached);
  });
}
