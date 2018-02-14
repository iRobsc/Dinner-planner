class Observable {
  /**
   * Creates an instance of Observable.
   * The param sender is used when notifying all listeners
   *
   * @param {any} sender The class that owns the observable event
   */
  constructor(sender) {
    this._sender = sender;
    this._listeners = [];
  }

  /**
   * Add an observer to this event
   *
   * @param {Function} callback to run when notifying on change
   */
  addObserver(callback) {
    this._listeners.push(callback);
  }

  /**
   * Removes an observer
   *
   * @param {Function} callback Which callback to remove
   */
  removeObserver(callback) {
    for (const [index, value] of this._listeners.entries()) {
      if (value === callback) {
        this._listeners.splice(index, 1);
      }
    }
  }

  /**
   * Notify all observers and give them the details of the new change.
   *
   * @param {any} details
   */
  notifyAll(details) {
    for (const callback of this._listeners) {
      callback(this._sender, details);
    }
  }
}

export default Observable;
