/**
 * A static router using the HTML 5 history API
 *
 * @class Router
 */
class Router {
  /**
   * Sets the url and triggers the callback.
   *
   * @static
   * @param {String} newPath
   * @param {Object} state
   */
  static goTo(newPath) {
    window.history.pushState(null, "", newPath);

    if (Router._isListening) Router._checkListeners(newPath);
  }

  static goBack() {
    window.history.back();
  }

  /**
   * Fires the callback when the new url pathName is an _exact_ match
   * to the one you pass in, exluding query params.
   * (e.g. "/path?id=1" will match "/path")
   *
   * The callback function will be called with an object called params,
   * which holds all query parameters.
   *
   * @example Router.on("/path", (params) => { console.log(params); })
   *
   * @static
   * @param {String} pathName The url pathname to watch, must start with /
   * @param {Function} callback Called with one parameter "params"
   */
  static on(pathName, callback) {
    Router.listeners[pathName] = callback;
  }

  /**
   * Start listening for url changes.
   * No callbacks will be fired until this method is used.
   *
   * @static
   */
  static listen() {
    // check the url on page load
    Router._checkListeners(`${document.location.pathname}${document.location.search}`);

    // check routes every time the popstate event fires
    window.addEventListener("popstate", () => {
      Router._checkListeners(`${document.location.pathname}${document.location.search}`);
    });

    Router._isListening = true;
  }

  /**
   * Go through all listeners and fire the matching callbacks
   *
   * @static
   * @param {any} newPath
   */
  static _checkListeners(newPath) {
    const parts = newPath.split("?");

    // if newPath is "", set pathname to "/"
    const pathname = parts[0] || "/";

    Object.entries(Router.listeners).forEach(([route, callback]) => {
      // match exact routes
      if (pathname === route) {
        const paramObj = {};
        if (parts.length > 1) {
          const paramString = parts[1];
          const urlParams = new URLSearchParams(paramString);

          for (const [name, val] of urlParams.entries()) {
            paramObj[name] = val;
          }
        }

        callback(paramObj);
      }
    });
  }
}

Router.listeners = {};
Router._isListening = false;

export default Router;
