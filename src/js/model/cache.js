class Cache {
  getSearch(type, filter) {
    const key = `${type};${filter}`;
    const search = JSON.parse(localStorage.getItem("search"));

    // the cache hasn't been initialized yet
    if (!search) {
      console.log("no cache");
      return -1;
    }

    // there is no value for the search query
    if (!search[key]) {
      console.log("cache miss");
      return -1;
    }

    console.log("cache hit");
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
}

export default Cache;
