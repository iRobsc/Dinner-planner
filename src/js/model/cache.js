class Cache {
  getSearch(type, filter) {
    const key = `${type};${filter}`;
    const search = JSON.parse(localStorage.getItem("search"));

    // the cache hasn't been initialized yet
    if (!search) {
      console.log("Search: no cache");
      return -1;
    }

    // there is no value for the search query
    if (!search[key]) {
      console.log("Search: cache miss");
      return -1;
    }

    console.log("Search: cache hit");
    return search[key];
  }

  setSearch(type, filter, value) {
    const key = `${type};${filter}`;
    const search = JSON.parse(localStorage.getItem("search")) || {};

    search[key] = value;

    localStorage.setItem("search", JSON.stringify(search));

    console.log("set cache with value:");
    console.log(value);
  }

  getDish(id) {
    const dishes = JSON.parse(localStorage.getItem("dishes"));

    if (!dishes) {
      console.log("Dish: no cache");
      return -1;
    }

    if (!dishes[id]) {
      console.log("Dish: cache miss");
      return -1;
    }

    console.log("Dish: cache hit");
    return dishes[id];
  }

  setDish(id, dish) {
    const dishes = JSON.parse(localStorage.getItem("dishes")) || {};

    dishes[id] = dish;
    localStorage.setItem("dishes", JSON.stringify(dishes));

    console.log("set cache with value:");
    console.log(dish);
  }
}

export default Cache;
