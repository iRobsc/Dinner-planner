import Cache from "./cache";
import { API_KEY, URL } from "./APIkey";

/**
 * function that returns all dishes of specific type
 * (i.e. "starter", "main dish" or "dessert") you can use the
 * filter argument to filter out the dish by name or ingredient (use for search)
 * if you don't pass any filter all the dishes will be returned
 *
 * @param {String} type
 * @param {String} [filter]
 * @param {Number} [page]
 * @returns {Promise<Dish[]>}
 */
export default function getAllDishes(type, filter, page) {
  const cached = Cache.getSearch(type, filter, page);

  // cache miss
  if (cached === -1) {
    const resultsPerPage = 12;
    const offset = page * resultsPerPage;
    const endPoint = `${URL}/recipes/search?type=${type}&query=${filter}&number=12&instructionsRequired=true&offset=${offset}`;

    return fetch(endPoint, {
      headers: {
        "X-Mashape-Key": API_KEY,
      },
    }).then(res => res.json())
      .then((json) => {
        Cache.setSearch(type, filter, page, json.results);
        console.log(json);
        return json.results;
      });
  }

  // cache hit
  return new Promise((resolve) => {
    resolve(cached);
  });
}
