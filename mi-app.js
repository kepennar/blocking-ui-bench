/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(141);


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */
/***/ function(module, exports) {

	module.exports = isWidget
	
	function isWidget(w) {
	    return w && w.type === "Widget"
	}


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var getPrototype = __webpack_require__(48),
	    isHostObject = __webpack_require__(49),
	    isObjectLike = __webpack_require__(50);
	
	/** `Object#toString` result references. */
	var objectTag = '[object Object]';
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to resolve the decompiled source of functions. */
	var funcToString = Function.prototype.toString;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/** Used to infer the `Object` constructor. */
	var objectCtorString = funcToString.call(Object);
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
	/**
	 * Checks if `value` is a plain object, that is, an object created by the
	 * `Object` constructor or one with a `[[Prototype]]` of `null`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.8.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a plain object,
	 *  else `false`.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * _.isPlainObject(new Foo);
	 * // => false
	 *
	 * _.isPlainObject([1, 2, 3]);
	 * // => false
	 *
	 * _.isPlainObject({ 'x': 0, 'y': 0 });
	 * // => true
	 *
	 * _.isPlainObject(Object.create(null));
	 * // => true
	 */
	function isPlainObject(value) {
	  if (!isObjectLike(value) ||
	      objectToString.call(value) != objectTag || isHostObject(value)) {
	    return false;
	  }
	  var proto = getPrototype(value);
	  if (proto === null) {
	    return true;
	  }
	  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
	  return (typeof Ctor == 'function' &&
	    Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString);
	}
	
	module.exports = isPlainObject;


/***/ },
/* 19 */,
/* 20 */,
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.compose = exports.applyMiddleware = exports.bindActionCreators = exports.combineReducers = exports.createStore = undefined;
	
	var _createStore = __webpack_require__(27);
	
	var _createStore2 = _interopRequireDefault(_createStore);
	
	var _combineReducers = __webpack_require__(75);
	
	var _combineReducers2 = _interopRequireDefault(_combineReducers);
	
	var _bindActionCreators = __webpack_require__(74);
	
	var _bindActionCreators2 = _interopRequireDefault(_bindActionCreators);
	
	var _applyMiddleware = __webpack_require__(73);
	
	var _applyMiddleware2 = _interopRequireDefault(_applyMiddleware);
	
	var _compose = __webpack_require__(26);
	
	var _compose2 = _interopRequireDefault(_compose);
	
	var _warning = __webpack_require__(28);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	/*
	* This is a dummy function to check if the function name has been altered by minification.
	* If the function has been minified and NODE_ENV !== 'production', warn the user.
	*/
	function isCrushed() {}
	
	if (("development") !== 'production' && typeof isCrushed.name === 'string' && isCrushed.name !== 'isCrushed') {
	  (0, _warning2["default"])('You are currently using minified code outside of NODE_ENV === \'production\'. ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) ' + 'to ensure you have the correct code for your production build.');
	}
	
	exports.createStore = _createStore2["default"];
	exports.combineReducers = _combineReducers2["default"];
	exports.bindActionCreators = _bindActionCreators2["default"];
	exports.applyMiddleware = _applyMiddleware2["default"];
	exports.compose = _compose2["default"];

/***/ },
/* 22 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var ADD_VALUE = exports.ADD_VALUE = 'ADD_VALUE';

/***/ },
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	exports["default"] = compose;
	/**
	 * Composes single-argument functions from right to left. The rightmost
	 * function can take multiple arguments as it provides the signature for
	 * the resulting composite function.
	 *
	 * @param {...Function} funcs The functions to compose.
	 * @returns {Function} A function obtained by composing the argument functions
	 * from right to left. For example, compose(f, g, h) is identical to doing
	 * (...args) => f(g(h(...args))).
	 */
	
	function compose() {
	  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
	    funcs[_key] = arguments[_key];
	  }
	
	  if (funcs.length === 0) {
	    return function (arg) {
	      return arg;
	    };
	  } else {
	    var _ret = function () {
	      var last = funcs[funcs.length - 1];
	      var rest = funcs.slice(0, -1);
	      return {
	        v: function v() {
	          return rest.reduceRight(function (composed, f) {
	            return f(composed);
	          }, last.apply(undefined, arguments));
	        }
	      };
	    }();
	
	    if (typeof _ret === "object") return _ret.v;
	  }
	}

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.ActionTypes = undefined;
	exports["default"] = createStore;
	
	var _isPlainObject = __webpack_require__(18);
	
	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);
	
	var _symbolObservable = __webpack_require__(76);
	
	var _symbolObservable2 = _interopRequireDefault(_symbolObservable);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	/**
	 * These are private action types reserved by Redux.
	 * For any unknown actions, you must return the current state.
	 * If the current state is undefined, you must return the initial state.
	 * Do not reference these action types directly in your code.
	 */
	var ActionTypes = exports.ActionTypes = {
	  INIT: '@@redux/INIT'
	};
	
	/**
	 * Creates a Redux store that holds the state tree.
	 * The only way to change the data in the store is to call `dispatch()` on it.
	 *
	 * There should only be a single store in your app. To specify how different
	 * parts of the state tree respond to actions, you may combine several reducers
	 * into a single reducer function by using `combineReducers`.
	 *
	 * @param {Function} reducer A function that returns the next state tree, given
	 * the current state tree and the action to handle.
	 *
	 * @param {any} [initialState] The initial state. You may optionally specify it
	 * to hydrate the state from the server in universal apps, or to restore a
	 * previously serialized user session.
	 * If you use `combineReducers` to produce the root reducer function, this must be
	 * an object with the same shape as `combineReducers` keys.
	 *
	 * @param {Function} enhancer The store enhancer. You may optionally specify it
	 * to enhance the store with third-party capabilities such as middleware,
	 * time travel, persistence, etc. The only store enhancer that ships with Redux
	 * is `applyMiddleware()`.
	 *
	 * @returns {Store} A Redux store that lets you read the state, dispatch actions
	 * and subscribe to changes.
	 */
	function createStore(reducer, initialState, enhancer) {
	  var _ref2;
	
	  if (typeof initialState === 'function' && typeof enhancer === 'undefined') {
	    enhancer = initialState;
	    initialState = undefined;
	  }
	
	  if (typeof enhancer !== 'undefined') {
	    if (typeof enhancer !== 'function') {
	      throw new Error('Expected the enhancer to be a function.');
	    }
	
	    return enhancer(createStore)(reducer, initialState);
	  }
	
	  if (typeof reducer !== 'function') {
	    throw new Error('Expected the reducer to be a function.');
	  }
	
	  var currentReducer = reducer;
	  var currentState = initialState;
	  var currentListeners = [];
	  var nextListeners = currentListeners;
	  var isDispatching = false;
	
	  function ensureCanMutateNextListeners() {
	    if (nextListeners === currentListeners) {
	      nextListeners = currentListeners.slice();
	    }
	  }
	
	  /**
	   * Reads the state tree managed by the store.
	   *
	   * @returns {any} The current state tree of your application.
	   */
	  function getState() {
	    return currentState;
	  }
	
	  /**
	   * Adds a change listener. It will be called any time an action is dispatched,
	   * and some part of the state tree may potentially have changed. You may then
	   * call `getState()` to read the current state tree inside the callback.
	   *
	   * You may call `dispatch()` from a change listener, with the following
	   * caveats:
	   *
	   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
	   * If you subscribe or unsubscribe while the listeners are being invoked, this
	   * will not have any effect on the `dispatch()` that is currently in progress.
	   * However, the next `dispatch()` call, whether nested or not, will use a more
	   * recent snapshot of the subscription list.
	   *
	   * 2. The listener should not expect to see all state changes, as the state
	   * might have been updated multiple times during a nested `dispatch()` before
	   * the listener is called. It is, however, guaranteed that all subscribers
	   * registered before the `dispatch()` started will be called with the latest
	   * state by the time it exits.
	   *
	   * @param {Function} listener A callback to be invoked on every dispatch.
	   * @returns {Function} A function to remove this change listener.
	   */
	  function subscribe(listener) {
	    if (typeof listener !== 'function') {
	      throw new Error('Expected listener to be a function.');
	    }
	
	    var isSubscribed = true;
	
	    ensureCanMutateNextListeners();
	    nextListeners.push(listener);
	
	    return function unsubscribe() {
	      if (!isSubscribed) {
	        return;
	      }
	
	      isSubscribed = false;
	
	      ensureCanMutateNextListeners();
	      var index = nextListeners.indexOf(listener);
	      nextListeners.splice(index, 1);
	    };
	  }
	
	  /**
	   * Dispatches an action. It is the only way to trigger a state change.
	   *
	   * The `reducer` function, used to create the store, will be called with the
	   * current state tree and the given `action`. Its return value will
	   * be considered the **next** state of the tree, and the change listeners
	   * will be notified.
	   *
	   * The base implementation only supports plain object actions. If you want to
	   * dispatch a Promise, an Observable, a thunk, or something else, you need to
	   * wrap your store creating function into the corresponding middleware. For
	   * example, see the documentation for the `redux-thunk` package. Even the
	   * middleware will eventually dispatch plain object actions using this method.
	   *
	   * @param {Object} action A plain object representing “what changed”. It is
	   * a good idea to keep actions serializable so you can record and replay user
	   * sessions, or use the time travelling `redux-devtools`. An action must have
	   * a `type` property which may not be `undefined`. It is a good idea to use
	   * string constants for action types.
	   *
	   * @returns {Object} For convenience, the same action object you dispatched.
	   *
	   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
	   * return something else (for example, a Promise you can await).
	   */
	  function dispatch(action) {
	    if (!(0, _isPlainObject2["default"])(action)) {
	      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
	    }
	
	    if (typeof action.type === 'undefined') {
	      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
	    }
	
	    if (isDispatching) {
	      throw new Error('Reducers may not dispatch actions.');
	    }
	
	    try {
	      isDispatching = true;
	      currentState = currentReducer(currentState, action);
	    } finally {
	      isDispatching = false;
	    }
	
	    var listeners = currentListeners = nextListeners;
	    for (var i = 0; i < listeners.length; i++) {
	      listeners[i]();
	    }
	
	    return action;
	  }
	
	  /**
	   * Replaces the reducer currently used by the store to calculate the state.
	   *
	   * You might need this if your app implements code splitting and you want to
	   * load some of the reducers dynamically. You might also need this if you
	   * implement a hot reloading mechanism for Redux.
	   *
	   * @param {Function} nextReducer The reducer for the store to use instead.
	   * @returns {void}
	   */
	  function replaceReducer(nextReducer) {
	    if (typeof nextReducer !== 'function') {
	      throw new Error('Expected the nextReducer to be a function.');
	    }
	
	    currentReducer = nextReducer;
	    dispatch({ type: ActionTypes.INIT });
	  }
	
	  /**
	   * Interoperability point for observable/reactive libraries.
	   * @returns {observable} A minimal observable of state changes.
	   * For more information, see the observable proposal:
	   * https://github.com/zenparsing/es-observable
	   */
	  function observable() {
	    var _ref;
	
	    var outerSubscribe = subscribe;
	    return _ref = {
	      /**
	       * The minimal observable subscription method.
	       * @param {Object} observer Any object that can be used as an observer.
	       * The observer object should have a `next` method.
	       * @returns {subscription} An object with an `unsubscribe` method that can
	       * be used to unsubscribe the observable from the store, and prevent further
	       * emission of values from the observable.
	       */
	
	      subscribe: function subscribe(observer) {
	        if (typeof observer !== 'object') {
	          throw new TypeError('Expected the observer to be an object.');
	        }
	
	        function observeState() {
	          if (observer.next) {
	            observer.next(getState());
	          }
	        }
	
	        observeState();
	        var unsubscribe = outerSubscribe(observeState);
	        return { unsubscribe: unsubscribe };
	      }
	    }, _ref[_symbolObservable2["default"]] = function () {
	      return this;
	    }, _ref;
	  }
	
	  // When a store is created, an "INIT" action is dispatched so that every
	  // reducer returns their initial state. This effectively populates
	  // the initial state tree.
	  dispatch({ type: ActionTypes.INIT });
	
	  return _ref2 = {
	    dispatch: dispatch,
	    subscribe: subscribe,
	    getState: getState,
	    replaceReducer: replaceReducer
	  }, _ref2[_symbolObservable2["default"]] = observable, _ref2;
	}

/***/ },
/* 28 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports["default"] = warning;
	/**
	 * Prints a warning in the console if it exists.
	 *
	 * @param {String} message The warning message.
	 * @returns {void}
	 */
	function warning(message) {
	  /* eslint-disable no-console */
	  if (typeof console !== 'undefined' && typeof console.error === 'function') {
	    console.error(message);
	  }
	  /* eslint-enable no-console */
	  try {
	    // This error was thrown as a convenience so that if you enable
	    // "break on all exceptions" in your console,
	    // it would pause the execution at this line.
	    throw new Error(message);
	    /* eslint-disable no-empty */
	  } catch (e) {}
	  /* eslint-enable no-empty */
	}

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	var version = __webpack_require__(30)
	
	module.exports = isVirtualNode
	
	function isVirtualNode(x) {
	    return x && x.type === "VirtualNode" && x.version === version
	}


/***/ },
/* 30 */
/***/ function(module, exports) {

	module.exports = "2"


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var OneVersionConstraint = __webpack_require__(152);
	
	var MY_VERSION = '7';
	OneVersionConstraint('ev-store', MY_VERSION);
	
	var hashKey = '__EV_STORE_KEY@' + MY_VERSION;
	
	module.exports = EvStore;
	
	function EvStore(elem) {
	    var hash = elem[hashKey];
	
	    if (!hash) {
	        hash = elem[hashKey] = {};
	    }
	
	    return hash;
	}


/***/ },
/* 32 */,
/* 33 */,
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {var topLevel = typeof global !== 'undefined' ? global :
	    typeof window !== 'undefined' ? window : {}
	var minDoc = __webpack_require__(275);
	
	if (typeof document !== 'undefined') {
	    module.exports = document;
	} else {
	    var doccy = topLevel['__GLOBAL_DOCUMENT_CACHE@4'];
	
	    if (!doccy) {
	        doccy = topLevel['__GLOBAL_DOCUMENT_CACHE@4'] = minDoc;
	    }
	
	    module.exports = doccy;
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Router = exports.MultithreadItEventsHandler = exports.MultithreadItComponent = exports.observeStore = exports.Worker = exports.WorkerStore = exports.App = undefined;
	
	var _app = __webpack_require__(171);
	
	var _app2 = _interopRequireDefault(_app);
	
	var _workerStore = __webpack_require__(92);
	
	var _workerStore2 = _interopRequireDefault(_workerStore);
	
	var _worker = __webpack_require__(174);
	
	var Worker = _interopRequireWildcard(_worker);
	
	var _store = __webpack_require__(51);
	
	var _MultithreadItComponent = __webpack_require__(89);
	
	var _MultithreadItComponent2 = _interopRequireDefault(_MultithreadItComponent);
	
	var _MultithreadItEventsHandler = __webpack_require__(90);
	
	var _MultithreadItEventsHandler2 = _interopRequireDefault(_MultithreadItEventsHandler);
	
	var _router = __webpack_require__(173);
	
	var Router = _interopRequireWildcard(_router);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.App = _app2.default;
	exports.WorkerStore = _workerStore2.default;
	exports.Worker = Worker;
	exports.observeStore = _store.observeStore;
	exports.MultithreadItComponent = _MultithreadItComponent2.default;
	exports.MultithreadItEventsHandler = _MultithreadItEventsHandler2.default;
	exports.Router = Router;

/***/ },
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	var h = __webpack_require__(268)
	
	module.exports = h


/***/ },
/* 44 */
/***/ function(module, exports) {

	module.exports = isThunk
	
	function isThunk(t) {
	    return t && t.type === "Thunk"
	}


/***/ },
/* 45 */
/***/ function(module, exports) {

	module.exports = isHook
	
	function isHook(hook) {
	    return hook &&
	      (typeof hook.hook === "function" && !hook.hasOwnProperty("hook") ||
	       typeof hook.unhook === "function" && !hook.hasOwnProperty("unhook"))
	}


/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	var version = __webpack_require__(30)
	
	module.exports = isVirtualText
	
	function isVirtualText(x) {
	    return x && x.type === "VirtualText" && x.version === version
	}


/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.addData = addData;
	
	var _ActionTypes = __webpack_require__(22);
	
	var ActionTypes = _interopRequireWildcard(_ActionTypes);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function addData(data) {
	
	  var rand = void 0;
	  for (var i = 0; i < 5000; i++) {
	    rand = Math.random();
	    console.log('Generate random value', rand);
	  }
	
	  return {
	    type: ActionTypes.ADD_VALUE,
	    data: data
	  };
	}

/***/ },
/* 48 */
/***/ function(module, exports) {

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeGetPrototype = Object.getPrototypeOf;
	
	/**
	 * Gets the `[[Prototype]]` of `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {null|Object} Returns the `[[Prototype]]`.
	 */
	function getPrototype(value) {
	  return nativeGetPrototype(Object(value));
	}
	
	module.exports = getPrototype;


/***/ },
/* 49 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is a host object in IE < 9.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
	 */
	function isHostObject(value) {
	  // Many host objects are `Object` objects that can coerce to strings
	  // despite having improperly defined `toString` methods.
	  var result = false;
	  if (value != null && typeof value.toString != 'function') {
	    try {
	      result = !!(value + '');
	    } catch (e) {}
	  }
	  return result;
	}
	
	module.exports = isHostObject;


/***/ },
/* 50 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}
	
	module.exports = isObjectLike;


/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.configureStore = configureStore;
	exports.observeStore = observeStore;
	
	var _redux = __webpack_require__(21);
	
	var _reduxThunk = __webpack_require__(247);
	
	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);
	
	var _reduxLogger = __webpack_require__(72);
	
	var _reduxLogger2 = _interopRequireDefault(_reduxLogger);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var middleware = [_reduxThunk2.default, (0, _reduxLogger2.default)({ logger: self.console })];
	
	var createStoreWithMiddleware = _redux.applyMiddleware.apply(undefined, middleware)(_redux.createStore);
	
	function configureStore(reducers, initialState) {
	  return createStoreWithMiddleware((0, _redux.combineReducers)(reducers), initialState);
	}
	
	function observeStore(store, select, onChange) {
	  var currentState = undefined;
	
	  function handleChange() {
	    var nextState = select(store.getState());
	    if (nextState !== currentState) {
	      currentState = nextState;
	      onChange(currentState);
	    }
	  }
	
	  var unsubscribe = store.subscribe(handleChange);
	  handleChange();
	  return unsubscribe;
	}

/***/ },
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */
/***/ function(module, exports) {

	"use strict";
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }
	
	var repeat = function repeat(str, times) {
	  return new Array(times + 1).join(str);
	};
	var pad = function pad(num, maxLength) {
	  return repeat("0", maxLength - num.toString().length) + num;
	};
	var formatTime = function formatTime(time) {
	  return "@ " + pad(time.getHours(), 2) + ":" + pad(time.getMinutes(), 2) + ":" + pad(time.getSeconds(), 2) + "." + pad(time.getMilliseconds(), 3);
	};
	
	// Use the new performance api to get better precision if available
	var timer = typeof performance !== "undefined" && typeof performance.now === "function" ? performance : Date;
	
	/**
	 * parse the level option of createLogger
	 *
	 * @property {string | function | object} level - console[level]
	 * @property {object} action
	 * @property {array} payload
	 * @property {string} type
	 */
	
	function getLogLevel(level, action, payload, type) {
	  switch (typeof level === "undefined" ? "undefined" : _typeof(level)) {
	    case "object":
	      return typeof level[type] === "function" ? level[type].apply(level, _toConsumableArray(payload)) : level[type];
	    case "function":
	      return level(action);
	    default:
	      return level;
	  }
	}
	
	/**
	 * Creates logger with followed options
	 *
	 * @namespace
	 * @property {object} options - options for logger
	 * @property {string | function | object} options.level - console[level]
	 * @property {boolean} options.duration - print duration of each action?
	 * @property {boolean} options.timestamp - print timestamp with each action?
	 * @property {object} options.colors - custom colors
	 * @property {object} options.logger - implementation of the `console` API
	 * @property {boolean} options.logErrors - should errors in action execution be caught, logged, and re-thrown?
	 * @property {boolean} options.collapsed - is group collapsed?
	 * @property {boolean} options.predicate - condition which resolves logger behavior
	 * @property {function} options.stateTransformer - transform state before print
	 * @property {function} options.actionTransformer - transform action before print
	 * @property {function} options.errorTransformer - transform error before print
	 */
	
	function createLogger() {
	  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	  var _options$level = options.level;
	  var level = _options$level === undefined ? "log" : _options$level;
	  var _options$logger = options.logger;
	  var logger = _options$logger === undefined ? console : _options$logger;
	  var _options$logErrors = options.logErrors;
	  var logErrors = _options$logErrors === undefined ? true : _options$logErrors;
	  var collapsed = options.collapsed;
	  var predicate = options.predicate;
	  var _options$duration = options.duration;
	  var duration = _options$duration === undefined ? false : _options$duration;
	  var _options$timestamp = options.timestamp;
	  var timestamp = _options$timestamp === undefined ? true : _options$timestamp;
	  var transformer = options.transformer;
	  var _options$stateTransfo = options.stateTransformer;
	  var // deprecated
	  stateTransformer = _options$stateTransfo === undefined ? function (state) {
	    return state;
	  } : _options$stateTransfo;
	  var _options$actionTransf = options.actionTransformer;
	  var actionTransformer = _options$actionTransf === undefined ? function (actn) {
	    return actn;
	  } : _options$actionTransf;
	  var _options$errorTransfo = options.errorTransformer;
	  var errorTransformer = _options$errorTransfo === undefined ? function (error) {
	    return error;
	  } : _options$errorTransfo;
	  var _options$colors = options.colors;
	  var colors = _options$colors === undefined ? {
	    title: function title() {
	      return "#000000";
	    },
	    prevState: function prevState() {
	      return "#9E9E9E";
	    },
	    action: function action() {
	      return "#03A9F4";
	    },
	    nextState: function nextState() {
	      return "#4CAF50";
	    },
	    error: function error() {
	      return "#F20404";
	    }
	  } : _options$colors;
	
	  // exit if console undefined
	
	  if (typeof logger === "undefined") {
	    return function () {
	      return function (next) {
	        return function (action) {
	          return next(action);
	        };
	      };
	    };
	  }
	
	  if (transformer) {
	    console.error("Option 'transformer' is deprecated, use stateTransformer instead");
	  }
	
	  var logBuffer = [];
	  function printBuffer() {
	    logBuffer.forEach(function (logEntry, key) {
	      var started = logEntry.started;
	      var startedTime = logEntry.startedTime;
	      var action = logEntry.action;
	      var prevState = logEntry.prevState;
	      var error = logEntry.error;
	      var took = logEntry.took;
	      var nextState = logEntry.nextState;
	
	      var nextEntry = logBuffer[key + 1];
	      if (nextEntry) {
	        nextState = nextEntry.prevState;
	        took = nextEntry.started - started;
	      }
	      // message
	      var formattedAction = actionTransformer(action);
	      var isCollapsed = typeof collapsed === "function" ? collapsed(function () {
	        return nextState;
	      }, action) : collapsed;
	
	      var formattedTime = formatTime(startedTime);
	      var titleCSS = colors.title ? "color: " + colors.title(formattedAction) + ";" : null;
	      var title = "action " + (timestamp ? formattedTime : "") + " " + formattedAction.type + " " + (duration ? "(in " + took.toFixed(2) + " ms)" : "");
	
	      // render
	      try {
	        if (isCollapsed) {
	          if (colors.title) logger.groupCollapsed("%c " + title, titleCSS);else logger.groupCollapsed(title);
	        } else {
	          if (colors.title) logger.group("%c " + title, titleCSS);else logger.group(title);
	        }
	      } catch (e) {
	        logger.log(title);
	      }
	
	      var prevStateLevel = getLogLevel(level, formattedAction, [prevState], "prevState");
	      var actionLevel = getLogLevel(level, formattedAction, [formattedAction], "action");
	      var errorLevel = getLogLevel(level, formattedAction, [error, prevState], "error");
	      var nextStateLevel = getLogLevel(level, formattedAction, [nextState], "nextState");
	
	      if (prevStateLevel) {
	        if (colors.prevState) logger[prevStateLevel]("%c prev state", "color: " + colors.prevState(prevState) + "; font-weight: bold", prevState);else logger[prevStateLevel]("prev state", prevState);
	      }
	
	      if (actionLevel) {
	        if (colors.action) logger[actionLevel]("%c action", "color: " + colors.action(formattedAction) + "; font-weight: bold", formattedAction);else logger[actionLevel]("action", formattedAction);
	      }
	
	      if (error && errorLevel) {
	        if (colors.error) logger[errorLevel]("%c error", "color: " + colors.error(error, prevState) + "; font-weight: bold", error);else logger[errorLevel]("error", error);
	      }
	
	      if (nextStateLevel) {
	        if (colors.nextState) logger[nextStateLevel]("%c next state", "color: " + colors.nextState(nextState) + "; font-weight: bold", nextState);else logger[nextStateLevel]("next state", nextState);
	      }
	
	      try {
	        logger.groupEnd();
	      } catch (e) {
	        logger.log("—— log end ——");
	      }
	    });
	    logBuffer.length = 0;
	  }
	
	  return function (_ref) {
	    var getState = _ref.getState;
	    return function (next) {
	      return function (action) {
	        // exit early if predicate function returns false
	        if (typeof predicate === "function" && !predicate(getState, action)) {
	          return next(action);
	        }
	
	        var logEntry = {};
	        logBuffer.push(logEntry);
	
	        logEntry.started = timer.now();
	        logEntry.startedTime = new Date();
	        logEntry.prevState = stateTransformer(getState());
	        logEntry.action = action;
	
	        var returnedValue = undefined;
	        if (logErrors) {
	          try {
	            returnedValue = next(action);
	          } catch (e) {
	            logEntry.error = errorTransformer(e);
	          }
	        } else {
	          returnedValue = next(action);
	        }
	
	        logEntry.took = timer.now() - logEntry.started;
	        logEntry.nextState = stateTransformer(getState());
	
	        printBuffer();
	
	        if (logEntry.error) throw logEntry.error;
	        return returnedValue;
	      };
	    };
	  };
	}
	
	module.exports = createLogger;

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports["default"] = applyMiddleware;
	
	var _compose = __webpack_require__(26);
	
	var _compose2 = _interopRequireDefault(_compose);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	/**
	 * Creates a store enhancer that applies middleware to the dispatch method
	 * of the Redux store. This is handy for a variety of tasks, such as expressing
	 * asynchronous actions in a concise manner, or logging every action payload.
	 *
	 * See `redux-thunk` package as an example of the Redux middleware.
	 *
	 * Because middleware is potentially asynchronous, this should be the first
	 * store enhancer in the composition chain.
	 *
	 * Note that each middleware will be given the `dispatch` and `getState` functions
	 * as named arguments.
	 *
	 * @param {...Function} middlewares The middleware chain to be applied.
	 * @returns {Function} A store enhancer applying the middleware.
	 */
	function applyMiddleware() {
	  for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
	    middlewares[_key] = arguments[_key];
	  }
	
	  return function (createStore) {
	    return function (reducer, initialState, enhancer) {
	      var store = createStore(reducer, initialState, enhancer);
	      var _dispatch = store.dispatch;
	      var chain = [];
	
	      var middlewareAPI = {
	        getState: store.getState,
	        dispatch: function dispatch(action) {
	          return _dispatch(action);
	        }
	      };
	      chain = middlewares.map(function (middleware) {
	        return middleware(middlewareAPI);
	      });
	      _dispatch = _compose2["default"].apply(undefined, chain)(store.dispatch);
	
	      return _extends({}, store, {
	        dispatch: _dispatch
	      });
	    };
	  };
	}

/***/ },
/* 74 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports["default"] = bindActionCreators;
	function bindActionCreator(actionCreator, dispatch) {
	  return function () {
	    return dispatch(actionCreator.apply(undefined, arguments));
	  };
	}
	
	/**
	 * Turns an object whose values are action creators, into an object with the
	 * same keys, but with every function wrapped into a `dispatch` call so they
	 * may be invoked directly. This is just a convenience method, as you can call
	 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
	 *
	 * For convenience, you can also pass a single function as the first argument,
	 * and get a function in return.
	 *
	 * @param {Function|Object} actionCreators An object whose values are action
	 * creator functions. One handy way to obtain it is to use ES6 `import * as`
	 * syntax. You may also pass a single function.
	 *
	 * @param {Function} dispatch The `dispatch` function available on your Redux
	 * store.
	 *
	 * @returns {Function|Object} The object mimicking the original object, but with
	 * every action creator wrapped into the `dispatch` call. If you passed a
	 * function as `actionCreators`, the return value will also be a single
	 * function.
	 */
	function bindActionCreators(actionCreators, dispatch) {
	  if (typeof actionCreators === 'function') {
	    return bindActionCreator(actionCreators, dispatch);
	  }
	
	  if (typeof actionCreators !== 'object' || actionCreators === null) {
	    throw new Error('bindActionCreators expected an object or a function, instead received ' + (actionCreators === null ? 'null' : typeof actionCreators) + '. ' + 'Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
	  }
	
	  var keys = Object.keys(actionCreators);
	  var boundActionCreators = {};
	  for (var i = 0; i < keys.length; i++) {
	    var key = keys[i];
	    var actionCreator = actionCreators[key];
	    if (typeof actionCreator === 'function') {
	      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
	    }
	  }
	  return boundActionCreators;
	}

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports["default"] = combineReducers;
	
	var _createStore = __webpack_require__(27);
	
	var _isPlainObject = __webpack_require__(18);
	
	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);
	
	var _warning = __webpack_require__(28);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function getUndefinedStateErrorMessage(key, action) {
	  var actionType = action && action.type;
	  var actionName = actionType && '"' + actionType.toString() + '"' || 'an action';
	
	  return 'Given action ' + actionName + ', reducer "' + key + '" returned undefined. ' + 'To ignore an action, you must explicitly return the previous state.';
	}
	
	function getUnexpectedStateShapeWarningMessage(inputState, reducers, action) {
	  var reducerKeys = Object.keys(reducers);
	  var argumentName = action && action.type === _createStore.ActionTypes.INIT ? 'initialState argument passed to createStore' : 'previous state received by the reducer';
	
	  if (reducerKeys.length === 0) {
	    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
	  }
	
	  if (!(0, _isPlainObject2["default"])(inputState)) {
	    return 'The ' + argumentName + ' has unexpected type of "' + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + '". Expected argument to be an object with the following ' + ('keys: "' + reducerKeys.join('", "') + '"');
	  }
	
	  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
	    return !reducers.hasOwnProperty(key);
	  });
	
	  if (unexpectedKeys.length > 0) {
	    return 'Unexpected ' + (unexpectedKeys.length > 1 ? 'keys' : 'key') + ' ' + ('"' + unexpectedKeys.join('", "') + '" found in ' + argumentName + '. ') + 'Expected to find one of the known reducer keys instead: ' + ('"' + reducerKeys.join('", "') + '". Unexpected keys will be ignored.');
	  }
	}
	
	function assertReducerSanity(reducers) {
	  Object.keys(reducers).forEach(function (key) {
	    var reducer = reducers[key];
	    var initialState = reducer(undefined, { type: _createStore.ActionTypes.INIT });
	
	    if (typeof initialState === 'undefined') {
	      throw new Error('Reducer "' + key + '" returned undefined during initialization. ' + 'If the state passed to the reducer is undefined, you must ' + 'explicitly return the initial state. The initial state may ' + 'not be undefined.');
	    }
	
	    var type = '@@redux/PROBE_UNKNOWN_ACTION_' + Math.random().toString(36).substring(7).split('').join('.');
	    if (typeof reducer(undefined, { type: type }) === 'undefined') {
	      throw new Error('Reducer "' + key + '" returned undefined when probed with a random type. ' + ('Don\'t try to handle ' + _createStore.ActionTypes.INIT + ' or other actions in "redux/*" ') + 'namespace. They are considered private. Instead, you must return the ' + 'current state for any unknown actions, unless it is undefined, ' + 'in which case you must return the initial state, regardless of the ' + 'action type. The initial state may not be undefined.');
	    }
	  });
	}
	
	/**
	 * Turns an object whose values are different reducer functions, into a single
	 * reducer function. It will call every child reducer, and gather their results
	 * into a single state object, whose keys correspond to the keys of the passed
	 * reducer functions.
	 *
	 * @param {Object} reducers An object whose values correspond to different
	 * reducer functions that need to be combined into one. One handy way to obtain
	 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
	 * undefined for any action. Instead, they should return their initial state
	 * if the state passed to them was undefined, and the current state for any
	 * unrecognized action.
	 *
	 * @returns {Function} A reducer function that invokes every reducer inside the
	 * passed object, and builds a state object with the same shape.
	 */
	function combineReducers(reducers) {
	  var reducerKeys = Object.keys(reducers);
	  var finalReducers = {};
	  for (var i = 0; i < reducerKeys.length; i++) {
	    var key = reducerKeys[i];
	    if (typeof reducers[key] === 'function') {
	      finalReducers[key] = reducers[key];
	    }
	  }
	  var finalReducerKeys = Object.keys(finalReducers);
	
	  var sanityError;
	  try {
	    assertReducerSanity(finalReducers);
	  } catch (e) {
	    sanityError = e;
	  }
	
	  return function combination() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var action = arguments[1];
	
	    if (sanityError) {
	      throw sanityError;
	    }
	
	    if (true) {
	      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action);
	      if (warningMessage) {
	        (0, _warning2["default"])(warningMessage);
	      }
	    }
	
	    var hasChanged = false;
	    var nextState = {};
	    for (var i = 0; i < finalReducerKeys.length; i++) {
	      var key = finalReducerKeys[i];
	      var reducer = finalReducers[key];
	      var previousStateForKey = state[key];
	      var nextStateForKey = reducer(previousStateForKey, action);
	      if (typeof nextStateForKey === 'undefined') {
	        var errorMessage = getUndefinedStateErrorMessage(key, action);
	        throw new Error(errorMessage);
	      }
	      nextState[key] = nextStateForKey;
	      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
	    }
	    return hasChanged ? nextState : state;
	  };
	}

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/* global window */
	'use strict';
	
	module.exports = __webpack_require__(77)(global || window || this);
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 77 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function symbolObservablePonyfill(root) {
		var result;
		var Symbol = root.Symbol;
	
		if (typeof Symbol === 'function') {
			if (Symbol.observable) {
				result = Symbol.observable;
			} else {
				if (typeof Symbol['for'] === 'function') {
					result = Symbol['for']('observable');
				} else {
					result = Symbol('observable');
				}
				Symbol.observable = result;
			}
		} else {
			result = '@@observable';
		}
	
		return result;
	};


/***/ },
/* 78 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = SoftSetHook;
	
	function SoftSetHook(value) {
	    if (!(this instanceof SoftSetHook)) {
	        return new SoftSetHook(value);
	    }
	
	    this.value = value;
	}
	
	SoftSetHook.prototype.hook = function (node, propertyName) {
	    if (node[propertyName] !== this.value) {
	        node[propertyName] = this.value;
	    }
	};


/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	var version = __webpack_require__(30)
	var isVNode = __webpack_require__(29)
	var isWidget = __webpack_require__(17)
	var isThunk = __webpack_require__(44)
	var isVHook = __webpack_require__(45)
	
	module.exports = VirtualNode
	
	var noProperties = {}
	var noChildren = []
	
	function VirtualNode(tagName, properties, children, key, namespace) {
	    this.tagName = tagName
	    this.properties = properties || noProperties
	    this.children = children || noChildren
	    this.key = key != null ? String(key) : undefined
	    this.namespace = (typeof namespace === "string") ? namespace : null
	
	    var count = (children && children.length) || 0
	    var descendants = 0
	    var hasWidgets = false
	    var hasThunks = false
	    var descendantHooks = false
	    var hooks
	
	    for (var propName in properties) {
	        if (properties.hasOwnProperty(propName)) {
	            var property = properties[propName]
	            if (isVHook(property) && property.unhook) {
	                if (!hooks) {
	                    hooks = {}
	                }
	
	                hooks[propName] = property
	            }
	        }
	    }
	
	    for (var i = 0; i < count; i++) {
	        var child = children[i]
	        if (isVNode(child)) {
	            descendants += child.count || 0
	
	            if (!hasWidgets && child.hasWidgets) {
	                hasWidgets = true
	            }
	
	            if (!hasThunks && child.hasThunks) {
	                hasThunks = true
	            }
	
	            if (!descendantHooks && (child.hooks || child.descendantHooks)) {
	                descendantHooks = true
	            }
	        } else if (!hasWidgets && isWidget(child)) {
	            if (typeof child.destroy === "function") {
	                hasWidgets = true
	            }
	        } else if (!hasThunks && isThunk(child)) {
	            hasThunks = true;
	        }
	    }
	
	    this.count = count + descendants
	    this.hasWidgets = hasWidgets
	    this.hasThunks = hasThunks
	    this.hooks = hooks
	    this.descendantHooks = descendantHooks
	}
	
	VirtualNode.prototype.version = version
	VirtualNode.prototype.type = "VirtualNode"


/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	var version = __webpack_require__(30)
	
	VirtualPatch.NONE = 0
	VirtualPatch.VTEXT = 1
	VirtualPatch.VNODE = 2
	VirtualPatch.WIDGET = 3
	VirtualPatch.PROPS = 4
	VirtualPatch.ORDER = 5
	VirtualPatch.INSERT = 6
	VirtualPatch.REMOVE = 7
	VirtualPatch.THUNK = 8
	
	module.exports = VirtualPatch
	
	function VirtualPatch(type, vNode, patch) {
	    this.type = Number(type)
	    this.vNode = vNode
	    this.patch = patch
	}
	
	VirtualPatch.prototype.version = version
	VirtualPatch.prototype.type = "VirtualPatch"


/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	var version = __webpack_require__(30)
	
	module.exports = VirtualText
	
	function VirtualText(text) {
	    this.text = String(text)
	}
	
	VirtualText.prototype.version = version
	VirtualText.prototype.type = "VirtualText"


/***/ },
/* 82 */
/***/ function(module, exports) {

	var nativeIsArray = Array.isArray
	var toString = Object.prototype.toString
	
	module.exports = nativeIsArray || isArray
	
	function isArray(obj) {
	    return toString.call(obj) === "[object Array]"
	}


/***/ },
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */
/***/ function(module, exports) {

	"use strict";
	
	module.exports = function isObject(x) {
		return typeof x === "object" && x !== null;
	};


/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _store = __webpack_require__(51);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Component = function () {
	  function Component() {
	    _classCallCheck(this, Component);
	  }
	
	  _createClass(Component, [{
	    key: 'setStore',
	    value: function setStore(store) {
	      this._store = store;
	    }
	  }, {
	    key: 'initialize',
	    value: function initialize() {
	      if (this.onInit) {
	        this.onInit();
	      }
	    }
	  }, {
	    key: 'watch',
	    value: function watch(select, onChange) {
	      (0, _store.observeStore)(this._store, select, onChange);
	    }
	  }]);
	
	  return Component;
	}();
	
	exports.default = Component;

/***/ },
/* 90 */
/***/ function(module, exports) {

	"use strict";
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var EventsHandler = function () {
	  function EventsHandler(workerStore) {
	    _classCallCheck(this, EventsHandler);
	
	    this._events = new Map();
	
	    this._worker = workerStore;
	  }
	
	  _createClass(EventsHandler, [{
	    key: "addEventHandlers",
	    value: function addEventHandlers(event) {
	      var registeredHandlers = this._events.get(event) || [];
	
	      for (var _len = arguments.length, handlers = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        handlers[_key - 1] = arguments[_key];
	      }
	
	      var mergedHandlers = [].concat(_toConsumableArray(registeredHandlers), handlers);
	      this._events.set(event, mergedHandlers);
	    }
	  }, {
	    key: "register",
	    value: function register(eventsMap) {
	      this._events.forEach(function (handlers, eventKey) {
	        var handlersArray = eventsMap.get(eventKey);
	        if (!handlersArray) {
	          handlersArray = [];
	        }
	        eventsMap.set(eventKey, [].concat(_toConsumableArray(handlersArray), _toConsumableArray(handlers)));
	      });
	    }
	  }]);
	
	  return EventsHandler;
	}();
	
	exports.default = EventsHandler;

/***/ },
/* 91 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var EVENT = exports.EVENT = 'EVENT';
	var VDOM_CHANGE = exports.VDOM_CHANGE = 'VDOM_CHANGE';
	var INIT_VDOM = exports.INIT_VDOM = 'INIT_VDOM';
	var INIT = exports.INIT = 'INIT';

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vdomAsJson = __webpack_require__(123);
	
	var _WorkerMessageTypes = __webpack_require__(91);
	
	var WorkerMessageTypes = _interopRequireWildcard(_WorkerMessageTypes);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var WorkerStore = function () {
	  function WorkerStore(initDom, onVDomChange, AppWorker) {
	    _classCallCheck(this, WorkerStore);
	
	    this._worker = new AppWorker();
	
	    this._worker.onmessage = function (_ref) {
	      var data = _ref.data;
	
	      switch (data.type) {
	        case WorkerMessageTypes.INIT_VDOM:
	          return initDom((0, _vdomAsJson.fromJson)(data.vdom));
	        case WorkerMessageTypes.VDOM_CHANGE:
	          return onVDomChange(JSON.parse(data.vdom));
	        default:
	          console.warn('unknown', data);
	      }
	    };
	  }
	
	  _createClass(WorkerStore, [{
	    key: 'dispatchEvent',
	    value: function dispatchEvent(action, data) {
	      this._worker.postMessage({
	        type: WorkerMessageTypes.EVENT,
	        message: {
	          action: action,
	          data: data
	        }
	      });
	    }
	  }]);
	
	  return WorkerStore;
	}();
	
	exports.default = WorkerStore;

/***/ },
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = {
	  fromJson: __webpack_require__(248),
	  toJson: __webpack_require__(124)
	};

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var types = __webpack_require__(125);
	
	var SoftSetHook =
	  __webpack_require__(78);
	
	function arrayToJson(arr) {
	  var len = arr.length;
	  var i = -1;
	  var res = new Array(len);
	  while (++i < len) {
	    res[i] = toJson(arr[i]);
	  }
	  return res;
	}
	
	function plainObjectToJson(obj) {
	  var res = {};
	  /* jshint -W089 */
	  /* this is fine; these objects are always plain */
	  for (var key in obj) {
	    var val = obj[key];
	    res[key] = typeof val !== 'undefined' ? toJson(val) : val;
	  }
	  return res;
	}
	
	function virtualNodeToJson(obj) {
	  var res = {
	    // type
	    t: types.VirtualNode,
	    tn: obj.tagName
	  };
	  if (Object.keys(obj.properties).length) {
	    res.p = plainObjectToJson(obj.properties);
	  }
	  if (obj.children.length) {
	    res.c = arrayToJson(obj.children);
	  }
	  if (obj.key) {
	    res.k = obj.key;
	  }
	  if (obj.namespace) {
	    res.n = obj.namespace;
	  }
	  return res;
	}
	
	function virtualTextToJson(obj) {
	  return {
	    // type
	    t: types.VirtualTree,
	    // text
	    x: obj.text
	  };
	}
	
	function virtualPatchToJson(obj) {
	  var res = {
	    // type
	    t: types.VirtualPatch,
	    // patch type
	    pt: obj.type
	  };
	
	  if (obj.vNode) {
	    res.v = toJson(obj.vNode);
	  }
	
	  if (obj.patch) {
	    res.p = toJson(obj.patch);
	  }
	
	  return res;
	}
	
	function softSetHookToJson(obj) {
	  return {
	    // type
	    t: types.SoftSetHook,
	    value: obj.value
	  };
	}
	
	function objectToJson(obj) {
	  if ('patch' in obj && typeof obj.type === 'number') {
	    return virtualPatchToJson(obj);
	  }
	  if (obj.type === 'VirtualNode') {
	    return virtualNodeToJson(obj);
	  }
	  if (obj.type === 'VirtualText') {
	    return virtualTextToJson(obj);
	  }
	  if (obj instanceof SoftSetHook) {
	    return softSetHookToJson(obj);
	  }
	
	  // plain object
	  return plainObjectToJson(obj);
	}
	
	function toJson(obj) {
	
	  var type = typeof obj;
	
	  switch (type) {
	    case 'string':
	    case 'boolean':
	    case 'number':
	      return obj;
	  }
	
	  // type === 'object'
	  if (Array.isArray(obj)) {
	    return arrayToJson(obj);
	  }
	
	  if (!obj) { // null
	    return null;
	  }
	
	  return objectToJson(obj);
	}
	
	module.exports = toJson;

/***/ },
/* 125 */
/***/ function(module, exports) {

	module.exports = {
	  VirtualTree: 1,
	  VirtualPatch: 2,
	  VirtualNode: 3,
	  SoftSetHook: 4
	};

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var serialize = __webpack_require__(259);
	var patch = __webpack_require__(252);
	
	module.exports = {
	  serialize: serialize,
	  patch: patch
	};


/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(253);
	var isSoftSetHook = __webpack_require__(254);
	
	module.exports = applyProperties;
	
	function applyProperties(node, props, previous) {
	  for (var propName in props) {
	    var propValue = props[propName]
	
	    if (propValue === undefined) {
	      removeProperty(node, propName, previous);
	    } else if (isSoftSetHook(propValue)) {
	      removeProperty(node, propName, propValue, previous)
	      node[propName] = propValue.value
	    } else {
	      if (isObject(propValue)) {
	        patchObject(node, props, previous, propName, propValue);
	      } else {
	        node[propName] = propValue
	      }
	    }
	  }
	}
	
	function removeProperty(node, propName, previous) {
	  if (!previous) {
	    return
	  }
	  var previousValue = previous[propName]
	
	  if (propName === "attributes") {
	    for (var attrName in previousValue) {
	      node.removeAttribute(attrName)
	    }
	  } else if (propName === "style") {
	    for (var i in previousValue) {
	      node.style[i] = ""
	    }
	  } else if (typeof previousValue === "string") {
	    node[propName] = ""
	  } else {
	    node[propName] = null
	  }
	}
	
	function patchObject(node, props, previous, propName, propValue) {
	  var previousValue = previous ? previous[propName] : undefined
	
	  // Set attributes
	  if (propName === "attributes") {
	    for (var attrName in propValue) {
	      var attrValue = propValue[attrName]
	
	      if (attrValue === undefined) {
	        node.removeAttribute(attrName)
	      } else {
	        node.setAttribute(attrName, attrValue)
	      }
	    }
	
	    return
	  }
	
	  if (previousValue && isObject(previousValue) &&
	    getPrototype(previousValue) !== getPrototype(propValue)) {
	    node[propName] = propValue
	    return
	  }
	
	  if (!isObject(node[propName])) {
	    node[propName] = {}
	  }
	
	  var replacer = propName === "style" ? "" : undefined
	
	  for (var k in propValue) {
	    var value = propValue[k]
	    node[propName][k] = (value === undefined) ? replacer : value
	  }
	}
	
	function getPrototype(value) {
	  // getPrototypeOf shim for older browsers
	  /* istanbul ignore else */
	  if (Object.getPrototypeOf) {
	    return Object.getPrototypeOf(value)
	  } else {
	    return value.__proto__ || value.constructor.prototype;
	  }
	}


/***/ },
/* 128 */
/***/ function(module, exports) {

	// copied from vdom-as-json/types.js
	
	module.exports = {
	  VirtualTree: 1,
	  VirtualPatch: 2,
	  VirtualNode: 3,
	  SoftSetHook: 4
	};

/***/ },
/* 129 */
/***/ function(module, exports) {

	// original this was is-vpatch.js
	
	module.exports = {
	  NONE: 0,
	  VTEXT: 1,
	  VNODE: 2,
	  WIDGET: 3,
	  PROPS: 4,
	  ORDER: 5,
	  INSERT: 6,
	  REMOVE: 7,
	  THUNK: 8
	};

/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	var diff = __webpack_require__(261)
	var patch = __webpack_require__(262)
	var h = __webpack_require__(43)
	var create = __webpack_require__(260)
	var VNode = __webpack_require__(79)
	var VText = __webpack_require__(81)
	
	module.exports = {
	    diff: diff,
	    patch: patch,
	    h: h,
	    create: create,
	    VNode: VNode,
	    VText: VText
	}


/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(88)
	var isHook = __webpack_require__(45)
	
	module.exports = applyProperties
	
	function applyProperties(node, props, previous) {
	    for (var propName in props) {
	        var propValue = props[propName]
	
	        if (propValue === undefined) {
	            removeProperty(node, propName, propValue, previous);
	        } else if (isHook(propValue)) {
	            removeProperty(node, propName, propValue, previous)
	            if (propValue.hook) {
	                propValue.hook(node,
	                    propName,
	                    previous ? previous[propName] : undefined)
	            }
	        } else {
	            if (isObject(propValue)) {
	                patchObject(node, props, previous, propName, propValue);
	            } else {
	                node[propName] = propValue
	            }
	        }
	    }
	}
	
	function removeProperty(node, propName, propValue, previous) {
	    if (previous) {
	        var previousValue = previous[propName]
	
	        if (!isHook(previousValue)) {
	            if (propName === "attributes") {
	                for (var attrName in previousValue) {
	                    node.removeAttribute(attrName)
	                }
	            } else if (propName === "style") {
	                for (var i in previousValue) {
	                    node.style[i] = ""
	                }
	            } else if (typeof previousValue === "string") {
	                node[propName] = ""
	            } else {
	                node[propName] = null
	            }
	        } else if (previousValue.unhook) {
	            previousValue.unhook(node, propName, propValue)
	        }
	    }
	}
	
	function patchObject(node, props, previous, propName, propValue) {
	    var previousValue = previous ? previous[propName] : undefined
	
	    // Set attributes
	    if (propName === "attributes") {
	        for (var attrName in propValue) {
	            var attrValue = propValue[attrName]
	
	            if (attrValue === undefined) {
	                node.removeAttribute(attrName)
	            } else {
	                node.setAttribute(attrName, attrValue)
	            }
	        }
	
	        return
	    }
	
	    if(previousValue && isObject(previousValue) &&
	        getPrototype(previousValue) !== getPrototype(propValue)) {
	        node[propName] = propValue
	        return
	    }
	
	    if (!isObject(node[propName])) {
	        node[propName] = {}
	    }
	
	    var replacer = propName === "style" ? "" : undefined
	
	    for (var k in propValue) {
	        var value = propValue[k]
	        node[propName][k] = (value === undefined) ? replacer : value
	    }
	}
	
	function getPrototype(value) {
	    if (Object.getPrototypeOf) {
	        return Object.getPrototypeOf(value)
	    } else if (value.__proto__) {
	        return value.__proto__
	    } else if (value.constructor) {
	        return value.constructor.prototype
	    }
	}


/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	var document = __webpack_require__(34)
	
	var applyProperties = __webpack_require__(131)
	
	var isVNode = __webpack_require__(29)
	var isVText = __webpack_require__(46)
	var isWidget = __webpack_require__(17)
	var handleThunk = __webpack_require__(133)
	
	module.exports = createElement
	
	function createElement(vnode, opts) {
	    var doc = opts ? opts.document || document : document
	    var warn = opts ? opts.warn : null
	
	    vnode = handleThunk(vnode).a
	
	    if (isWidget(vnode)) {
	        return vnode.init()
	    } else if (isVText(vnode)) {
	        return doc.createTextNode(vnode.text)
	    } else if (!isVNode(vnode)) {
	        if (warn) {
	            warn("Item is not a valid virtual dom node", vnode)
	        }
	        return null
	    }
	
	    var node = (vnode.namespace === null) ?
	        doc.createElement(vnode.tagName) :
	        doc.createElementNS(vnode.namespace, vnode.tagName)
	
	    var props = vnode.properties
	    applyProperties(node, props)
	
	    var children = vnode.children
	
	    for (var i = 0; i < children.length; i++) {
	        var childNode = createElement(children[i], opts)
	        if (childNode) {
	            node.appendChild(childNode)
	        }
	    }
	
	    return node
	}


/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	var isVNode = __webpack_require__(29)
	var isVText = __webpack_require__(46)
	var isWidget = __webpack_require__(17)
	var isThunk = __webpack_require__(44)
	
	module.exports = handleThunk
	
	function handleThunk(a, b) {
	    var renderedA = a
	    var renderedB = b
	
	    if (isThunk(b)) {
	        renderedB = renderThunk(b, a)
	    }
	
	    if (isThunk(a)) {
	        renderedA = renderThunk(a, null)
	    }
	
	    return {
	        a: renderedA,
	        b: renderedB
	    }
	}
	
	function renderThunk(thunk, previous) {
	    var renderedThunk = thunk.vnode
	
	    if (!renderedThunk) {
	        renderedThunk = thunk.vnode = thunk.render(previous)
	    }
	
	    if (!(isVNode(renderedThunk) ||
	            isVText(renderedThunk) ||
	            isWidget(renderedThunk))) {
	        throw new Error("thunk did not return a valid node");
	    }
	
	    return renderedThunk
	}


/***/ },
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.EventsHandlers = exports.Container = undefined;
	
	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();
	
	var _h = __webpack_require__(43);
	
	var _h2 = _interopRequireDefault(_h);
	
	var _multithreadIt = __webpack_require__(35);
	
	var _Form = __webpack_require__(139);
	
	var Form = _interopRequireWildcard(_Form);
	
	var _List = __webpack_require__(140);
	
	var List = _interopRequireWildcard(_List);
	
	function _interopRequireWildcard(obj) {
	  if (obj && obj.__esModule) {
	    return obj;
	  } else {
	    var newObj = {};if (obj != null) {
	      for (var key in obj) {
	        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
	      }
	    }newObj.default = obj;return newObj;
	  }
	}
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}
	
	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}
	
	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	var Container = exports.Container = function (_MultithreadItCompone) {
	  _inherits(Container, _MultithreadItCompone);
	
	  function Container(menuLinks) {
	    _classCallCheck(this, Container);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Container).call(this));
	
	    _this._datas = [];
	
	    _this._form = new Form.Component();
	    _this._list = new List.Component();
	
	    return _this;
	  }
	
	  _createClass(Container, [{
	    key: 'onInit',
	    value: function onInit() {
	      var _this2 = this;
	
	      this.watch(function (state) {
	        return state.default.datas;
	      }, function (datas) {
	        return _this2._datas = datas;
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return (0, _h2.default)('div', null, [(0, _h2.default)('h1', { className: 'title is-1' }, 'Multithread-it app'), this._form.render(), this._list.render(this._datas)]);
	    }
	  }]);
	
	  return Container;
	}(_multithreadIt.MultithreadItComponent);
	
	var EventsHandlers = exports.EventsHandlers = function (_MultithreadItEventsH) {
	  _inherits(EventsHandlers, _MultithreadItEventsH);
	
	  function EventsHandlers(workerStore) {
	    _classCallCheck(this, EventsHandlers);
	
	    var _this3 = _possibleConstructorReturn(this, Object.getPrototypeOf(EventsHandlers).call(this, workerStore));
	
	    _this3._form = new Form.EventsHandlers(_this3._worker);
	    return _this3;
	  }
	
	  _createClass(EventsHandlers, [{
	    key: 'register',
	    value: function register(eventsMap) {
	      this._form.register(eventsMap);
	    }
	  }]);

	  return EventsHandlers;
	}(_multithreadIt.MultithreadItEventsHandler);

/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.EventsHandlers = exports.Component = undefined;
	
	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();
	
	var _h = __webpack_require__(43);
	
	var _h2 = _interopRequireDefault(_h);
	
	var _multithreadIt = __webpack_require__(35);
	
	var _actions = __webpack_require__(47);
	
	var _ActionTypes = __webpack_require__(22);
	
	var ActionTypes = _interopRequireWildcard(_ActionTypes);
	
	function _interopRequireWildcard(obj) {
	  if (obj && obj.__esModule) {
	    return obj;
	  } else {
	    var newObj = {};if (obj != null) {
	      for (var key in obj) {
	        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
	      }
	    }newObj.default = obj;return newObj;
	  }
	}
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}
	
	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}
	
	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	var COMP_ID = 'FORM-ADDER';
	
	var Component = exports.Component = function (_MultithreadItCompone) {
	  _inherits(Component, _MultithreadItCompone);
	
	  function Component() {
	    _classCallCheck(this, Component);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Component).apply(this, arguments));
	  }
	
	  _createClass(Component, [{
	    key: 'render',
	    value: function render() {
	      return (0, _h2.default)('form', { name: 'example-mi', 'data-submit': COMP_ID }, [(0, _h2.default)('p', { className: 'control' }, (0, _h2.default)('input', { type: 'text', className: 'input', name: 'title', placeholder: 'title' })), (0, _h2.default)('p', { className: 'control' }, (0, _h2.default)('input', { type: 'text', className: 'input', name: 'description', placeholder: 'description' })), (0, _h2.default)('button', { type: 'submit', className: 'button is-primary' }, 'Add')]);
	    }
	  }]);
	
	  return Component;
	}(_multithreadIt.MultithreadItComponent);
	
	var EventsHandlers = exports.EventsHandlers = function (_MultithreadItEventsH) {
	  _inherits(EventsHandlers, _MultithreadItEventsH);
	
	  function EventsHandlers(workerStore) {
	    _classCallCheck(this, EventsHandlers);
	
	    var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(EventsHandlers).call(this, workerStore));
	
	    _this2.addEventHandlers('submit', function (e) {
	      return _this2._onSubmit(e);
	    });
	    return _this2;
	  }
	
	  _createClass(EventsHandlers, [{
	    key: '_onSubmit',
	    value: function _onSubmit(e) {
	      var target = e.target;
	      if (target['data-submit'] === COMP_ID) {
	        e.preventDefault();
	        var title = target.title.value;
	        var description = target.description.value;
	        this._worker.dispatchEvent(ActionTypes.ADD_VALUE, { title: title, description: description });
	      }
	    }
	  }]);

	  return EventsHandlers;
	}(_multithreadIt.MultithreadItEventsHandler);

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Component = undefined;
	
	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();
	
	var _h = __webpack_require__(43);
	
	var _h2 = _interopRequireDefault(_h);
	
	var _multithreadIt = __webpack_require__(35);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}
	
	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}
	
	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	var COMP_ID = 'LIST';
	
	var Component = exports.Component = function (_MultithreadItCompone) {
	  _inherits(Component, _MultithreadItCompone);
	
	  function Component() {
	    _classCallCheck(this, Component);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Component).apply(this, arguments));
	  }
	
	  _createClass(Component, [{
	    key: 'render',
	    value: function render(datas) {
	      var dataElement = function dataElement(data) {
	        return (0, _h2.default)('tr', null, [(0, _h2.default)('td', null, data.title), (0, _h2.default)('td', null, data.description)]);
	      };
	
	      return (0, _h2.default)('table', { 'class': 'table' }, [(0, _h2.default)('thead', null, (0, _h2.default)('tr', null, [(0, _h2.default)('th', null, 'Title'), (0, _h2.default)('th', null, 'Description')])), (0, _h2.default)('tbody', null, datas.map(dataElement))]);
	    }
	  }]);

	  return Component;
	}(_multithreadIt.MultithreadItComponent);

/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _multithreadIt = __webpack_require__(35);
	
	var _Container = __webpack_require__(138);
	
	var _worker = __webpack_require__(274);
	
	var _worker2 = _interopRequireDefault(_worker);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	document.addEventListener('DOMContentLoaded', function () {
	  // Multithread-it app
	  (0, _multithreadIt.App)(document.getElementById('mi-app'), _Container.EventsHandlers, _worker2.default);
	}); // Polyfills
	// import 'babel-polyfill';

/***/ },
/* 142 */,
/* 143 */,
/* 144 */
/***/ function(module, exports) {

	/*!
	 * Cross-Browser Split 1.1.1
	 * Copyright 2007-2012 Steven Levithan <stevenlevithan.com>
	 * Available under the MIT License
	 * ECMAScript compliant, uniform cross-browser split method
	 */
	
	/**
	 * Splits a string into an array of strings using a regex or string separator. Matches of the
	 * separator are not included in the result array. However, if `separator` is a regex that contains
	 * capturing groups, backreferences are spliced into the result each time `separator` is matched.
	 * Fixes browser bugs compared to the native `String.prototype.split` and can be used reliably
	 * cross-browser.
	 * @param {String} str String to split.
	 * @param {RegExp|String} separator Regex or string to use for separating the string.
	 * @param {Number} [limit] Maximum number of items to include in the result array.
	 * @returns {Array} Array of substrings.
	 * @example
	 *
	 * // Basic use
	 * split('a b c d', ' ');
	 * // -> ['a', 'b', 'c', 'd']
	 *
	 * // With limit
	 * split('a b c d', ' ', 2);
	 * // -> ['a', 'b']
	 *
	 * // Backreferences in result array
	 * split('..word1 word2..', /([a-z]+)(\d+)/i);
	 * // -> ['..', 'word', '1', ' ', 'word', '2', '..']
	 */
	module.exports = (function split(undef) {
	
	  var nativeSplit = String.prototype.split,
	    compliantExecNpcg = /()??/.exec("")[1] === undef,
	    // NPCG: nonparticipating capturing group
	    self;
	
	  self = function(str, separator, limit) {
	    // If `separator` is not a regex, use `nativeSplit`
	    if (Object.prototype.toString.call(separator) !== "[object RegExp]") {
	      return nativeSplit.call(str, separator, limit);
	    }
	    var output = [],
	      flags = (separator.ignoreCase ? "i" : "") + (separator.multiline ? "m" : "") + (separator.extended ? "x" : "") + // Proposed for ES6
	      (separator.sticky ? "y" : ""),
	      // Firefox 3+
	      lastLastIndex = 0,
	      // Make `global` and avoid `lastIndex` issues by working with a copy
	      separator = new RegExp(separator.source, flags + "g"),
	      separator2, match, lastIndex, lastLength;
	    str += ""; // Type-convert
	    if (!compliantExecNpcg) {
	      // Doesn't need flags gy, but they don't hurt
	      separator2 = new RegExp("^" + separator.source + "$(?!\\s)", flags);
	    }
	    /* Values for `limit`, per the spec:
	     * If undefined: 4294967295 // Math.pow(2, 32) - 1
	     * If 0, Infinity, or NaN: 0
	     * If positive number: limit = Math.floor(limit); if (limit > 4294967295) limit -= 4294967296;
	     * If negative number: 4294967296 - Math.floor(Math.abs(limit))
	     * If other: Type-convert, then use the above rules
	     */
	    limit = limit === undef ? -1 >>> 0 : // Math.pow(2, 32) - 1
	    limit >>> 0; // ToUint32(limit)
	    while (match = separator.exec(str)) {
	      // `separator.lastIndex` is not reliable cross-browser
	      lastIndex = match.index + match[0].length;
	      if (lastIndex > lastLastIndex) {
	        output.push(str.slice(lastLastIndex, match.index));
	        // Fix browsers whose `exec` methods don't consistently return `undefined` for
	        // nonparticipating capturing groups
	        if (!compliantExecNpcg && match.length > 1) {
	          match[0].replace(separator2, function() {
	            for (var i = 1; i < arguments.length - 2; i++) {
	              if (arguments[i] === undef) {
	                match[i] = undef;
	              }
	            }
	          });
	        }
	        if (match.length > 1 && match.index < str.length) {
	          Array.prototype.push.apply(output, match.slice(1));
	        }
	        lastLength = match[0].length;
	        lastLastIndex = lastIndex;
	        if (output.length >= limit) {
	          break;
	        }
	      }
	      if (separator.lastIndex === match.index) {
	        separator.lastIndex++; // Avoid an infinite loop
	      }
	    }
	    if (lastLastIndex === str.length) {
	      if (lastLength || !separator.test("")) {
	        output.push("");
	      }
	    } else {
	      output.push(str.slice(lastLastIndex));
	    }
	    return output.length > limit ? output.slice(0, limit) : output;
	  };
	
	  return self;
	})();


/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * cuid.js
	 * Collision-resistant UID generator for browsers and node.
	 * Sequential for fast db lookups and recency sorting.
	 * Safe for element IDs and server-side lookups.
	 *
	 * Extracted from CLCTR
	 *
	 * Copyright (c) Eric Elliott 2012
	 * MIT License
	 */
	
	/*global window, navigator, document, require, process, module */
	(function (app) {
	  'use strict';
	  var namespace = 'cuid',
	    c = 0,
	    blockSize = 4,
	    base = 36,
	    discreteValues = Math.pow(base, blockSize),
	
	    pad = function pad(num, size) {
	      var s = "000000000" + num;
	      return s.substr(s.length-size);
	    },
	
	    randomBlock = function randomBlock() {
	      return pad((Math.random() *
	            discreteValues << 0)
	            .toString(base), blockSize);
	    },
	
	    safeCounter = function () {
	      c = (c < discreteValues) ? c : 0;
	      c++; // this is not subliminal
	      return c - 1;
	    },
	
	    api = function cuid() {
	      // Starting with a lowercase letter makes
	      // it HTML element ID friendly.
	      var letter = 'c', // hard-coded allows for sequential access
	
	        // timestamp
	        // warning: this exposes the exact date and time
	        // that the uid was created.
	        timestamp = (new Date().getTime()).toString(base),
	
	        // Prevent same-machine collisions.
	        counter,
	
	        // A few chars to generate distinct ids for different
	        // clients (so different computers are far less
	        // likely to generate the same id)
	        fingerprint = api.fingerprint(),
	
	        // Grab some more chars from Math.random()
	        random = randomBlock() + randomBlock();
	
	        counter = pad(safeCounter().toString(base), blockSize);
	
	      return  (letter + timestamp + counter + fingerprint + random);
	    };
	
	  api.slug = function slug() {
	    var date = new Date().getTime().toString(36),
	      counter,
	      print = api.fingerprint().slice(0,1) +
	        api.fingerprint().slice(-1),
	      random = randomBlock().slice(-2);
	
	      counter = safeCounter().toString(36).slice(-4);
	
	    return date.slice(-2) +
	      counter + print + random;
	  };
	
	  api.globalCount = function globalCount() {
	    // We want to cache the results of this
	    var cache = (function calc() {
	        var i,
	          count = 0;
	
	        for (i in window) {
	          count++;
	        }
	
	        return count;
	      }());
	
	    api.globalCount = function () { return cache; };
	    return cache;
	  };
	
	  api.fingerprint = function browserPrint() {
	    return pad((navigator.mimeTypes.length +
	      navigator.userAgent.length).toString(36) +
	      api.globalCount().toString(36), 4);
	  };
	
	  // don't change anything from here down.
	  if (app.register) {
	    app.register(namespace, api);
	  } else if (true) {
	    module.exports = api;
	  } else {
	    app[namespace] = api;
	  }
	
	}(this.applitude || this));


/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	var EvStore = __webpack_require__(31)
	
	module.exports = addEvent
	
	function addEvent(target, type, handler) {
	    var events = EvStore(target)
	    var event = events[type]
	
	    if (!event) {
	        events[type] = handler
	    } else if (Array.isArray(event)) {
	        if (event.indexOf(handler) === -1) {
	            event.push(handler)
	        }
	    } else if (event !== handler) {
	        events[type] = [event, handler]
	    }
	}


/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	var globalDocument = __webpack_require__(34)
	var EvStore = __webpack_require__(31)
	var createStore = __webpack_require__(272)
	
	var addEvent = __webpack_require__(146)
	var removeEvent = __webpack_require__(150)
	var ProxyEvent = __webpack_require__(149)
	
	var HANDLER_STORE = createStore()
	
	module.exports = DOMDelegator
	
	function DOMDelegator(document) {
	    if (!(this instanceof DOMDelegator)) {
	        return new DOMDelegator(document);
	    }
	
	    document = document || globalDocument
	
	    this.target = document.documentElement
	    this.events = {}
	    this.rawEventListeners = {}
	    this.globalListeners = {}
	}
	
	DOMDelegator.prototype.addEventListener = addEvent
	DOMDelegator.prototype.removeEventListener = removeEvent
	
	DOMDelegator.allocateHandle =
	    function allocateHandle(func) {
	        var handle = new Handle()
	
	        HANDLER_STORE(handle).func = func;
	
	        return handle
	    }
	
	DOMDelegator.transformHandle =
	    function transformHandle(handle, broadcast) {
	        var func = HANDLER_STORE(handle).func
	
	        return this.allocateHandle(function (ev) {
	            broadcast(ev, func);
	        })
	    }
	
	DOMDelegator.prototype.addGlobalEventListener =
	    function addGlobalEventListener(eventName, fn) {
	        var listeners = this.globalListeners[eventName] || [];
	        if (listeners.indexOf(fn) === -1) {
	            listeners.push(fn)
	        }
	
	        this.globalListeners[eventName] = listeners;
	    }
	
	DOMDelegator.prototype.removeGlobalEventListener =
	    function removeGlobalEventListener(eventName, fn) {
	        var listeners = this.globalListeners[eventName] || [];
	
	        var index = listeners.indexOf(fn)
	        if (index !== -1) {
	            listeners.splice(index, 1)
	        }
	    }
	
	DOMDelegator.prototype.listenTo = function listenTo(eventName) {
	    if (!(eventName in this.events)) {
	        this.events[eventName] = 0;
	    }
	
	    this.events[eventName]++;
	
	    if (this.events[eventName] !== 1) {
	        return
	    }
	
	    var listener = this.rawEventListeners[eventName]
	    if (!listener) {
	        listener = this.rawEventListeners[eventName] =
	            createHandler(eventName, this)
	    }
	
	    this.target.addEventListener(eventName, listener, true)
	}
	
	DOMDelegator.prototype.unlistenTo = function unlistenTo(eventName) {
	    if (!(eventName in this.events)) {
	        this.events[eventName] = 0;
	    }
	
	    if (this.events[eventName] === 0) {
	        throw new Error("already unlistened to event.");
	    }
	
	    this.events[eventName]--;
	
	    if (this.events[eventName] !== 0) {
	        return
	    }
	
	    var listener = this.rawEventListeners[eventName]
	
	    if (!listener) {
	        throw new Error("dom-delegator#unlistenTo: cannot " +
	            "unlisten to " + eventName)
	    }
	
	    this.target.removeEventListener(eventName, listener, true)
	}
	
	function createHandler(eventName, delegator) {
	    var globalListeners = delegator.globalListeners;
	    var delegatorTarget = delegator.target;
	
	    return handler
	
	    function handler(ev) {
	        var globalHandlers = globalListeners[eventName] || []
	
	        if (globalHandlers.length > 0) {
	            var globalEvent = new ProxyEvent(ev);
	            globalEvent.currentTarget = delegatorTarget;
	            callListeners(globalHandlers, globalEvent)
	        }
	
	        findAndInvokeListeners(ev.target, ev, eventName)
	    }
	}
	
	function findAndInvokeListeners(elem, ev, eventName) {
	    var listener = getListener(elem, eventName)
	
	    if (listener && listener.handlers.length > 0) {
	        var listenerEvent = new ProxyEvent(ev);
	        listenerEvent.currentTarget = listener.currentTarget
	        callListeners(listener.handlers, listenerEvent)
	
	        if (listenerEvent._bubbles) {
	            var nextTarget = listener.currentTarget.parentNode
	            findAndInvokeListeners(nextTarget, ev, eventName)
	        }
	    }
	}
	
	function getListener(target, type) {
	    // terminate recursion if parent is `null`
	    if (target === null || typeof target === "undefined") {
	        return null
	    }
	
	    var events = EvStore(target)
	    // fetch list of handler fns for this event
	    var handler = events[type]
	    var allHandler = events.event
	
	    if (!handler && !allHandler) {
	        return getListener(target.parentNode, type)
	    }
	
	    var handlers = [].concat(handler || [], allHandler || [])
	    return new Listener(target, handlers)
	}
	
	function callListeners(handlers, ev) {
	    handlers.forEach(function (handler) {
	        if (typeof handler === "function") {
	            handler(ev)
	        } else if (typeof handler.handleEvent === "function") {
	            handler.handleEvent(ev)
	        } else if (handler.type === "dom-delegator-handle") {
	            HANDLER_STORE(handler).func(ev)
	        } else {
	            throw new Error("dom-delegator: unknown handler " +
	                "found: " + JSON.stringify(handlers));
	        }
	    })
	}
	
	function Listener(target, handlers) {
	    this.currentTarget = target
	    this.handlers = handlers
	}
	
	function Handle() {
	    this.type = "dom-delegator-handle"
	}


/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	var Individual = __webpack_require__(168)
	var cuid = __webpack_require__(145)
	var globalDocument = __webpack_require__(34)
	
	var DOMDelegator = __webpack_require__(147)
	
	var versionKey = "13"
	var cacheKey = "__DOM_DELEGATOR_CACHE@" + versionKey
	var cacheTokenKey = "__DOM_DELEGATOR_CACHE_TOKEN@" + versionKey
	var delegatorCache = Individual(cacheKey, {
	    delegators: {}
	})
	var commonEvents = [
	    "blur", "change", "click",  "contextmenu", "dblclick",
	    "error","focus", "focusin", "focusout", "input", "keydown",
	    "keypress", "keyup", "load", "mousedown", "mouseup",
	    "resize", "select", "submit", "touchcancel",
	    "touchend", "touchstart", "unload"
	]
	
	/*  Delegator is a thin wrapper around a singleton `DOMDelegator`
	        instance.
	
	    Only one DOMDelegator should exist because we do not want
	        duplicate event listeners bound to the DOM.
	
	    `Delegator` will also `listenTo()` all events unless
	        every caller opts out of it
	*/
	module.exports = Delegator
	
	function Delegator(opts) {
	    opts = opts || {}
	    var document = opts.document || globalDocument
	
	    var cacheKey = document[cacheTokenKey]
	
	    if (!cacheKey) {
	        cacheKey =
	            document[cacheTokenKey] = cuid()
	    }
	
	    var delegator = delegatorCache.delegators[cacheKey]
	
	    if (!delegator) {
	        delegator = delegatorCache.delegators[cacheKey] =
	            new DOMDelegator(document)
	    }
	
	    if (opts.defaultEvents !== false) {
	        for (var i = 0; i < commonEvents.length; i++) {
	            delegator.listenTo(commonEvents[i])
	        }
	    }
	
	    return delegator
	}
	
	Delegator.allocateHandle = DOMDelegator.allocateHandle;
	Delegator.transformHandle = DOMDelegator.transformHandle;


/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	var inherits = __webpack_require__(169)
	
	var ALL_PROPS = [
	    "altKey", "bubbles", "cancelable", "ctrlKey",
	    "eventPhase", "metaKey", "relatedTarget", "shiftKey",
	    "target", "timeStamp", "type", "view", "which"
	]
	var KEY_PROPS = ["char", "charCode", "key", "keyCode"]
	var MOUSE_PROPS = [
	    "button", "buttons", "clientX", "clientY", "layerX",
	    "layerY", "offsetX", "offsetY", "pageX", "pageY",
	    "screenX", "screenY", "toElement"
	]
	
	var rkeyEvent = /^key|input/
	var rmouseEvent = /^(?:mouse|pointer|contextmenu)|click/
	
	module.exports = ProxyEvent
	
	function ProxyEvent(ev) {
	    if (!(this instanceof ProxyEvent)) {
	        return new ProxyEvent(ev)
	    }
	
	    if (rkeyEvent.test(ev.type)) {
	        return new KeyEvent(ev)
	    } else if (rmouseEvent.test(ev.type)) {
	        return new MouseEvent(ev)
	    }
	
	    for (var i = 0; i < ALL_PROPS.length; i++) {
	        var propKey = ALL_PROPS[i]
	        this[propKey] = ev[propKey]
	    }
	
	    this._rawEvent = ev
	    this._bubbles = false;
	}
	
	ProxyEvent.prototype.preventDefault = function () {
	    this._rawEvent.preventDefault()
	}
	
	ProxyEvent.prototype.startPropagation = function () {
	    this._bubbles = true;
	}
	
	function MouseEvent(ev) {
	    for (var i = 0; i < ALL_PROPS.length; i++) {
	        var propKey = ALL_PROPS[i]
	        this[propKey] = ev[propKey]
	    }
	
	    for (var j = 0; j < MOUSE_PROPS.length; j++) {
	        var mousePropKey = MOUSE_PROPS[j]
	        this[mousePropKey] = ev[mousePropKey]
	    }
	
	    this._rawEvent = ev
	}
	
	inherits(MouseEvent, ProxyEvent)
	
	function KeyEvent(ev) {
	    for (var i = 0; i < ALL_PROPS.length; i++) {
	        var propKey = ALL_PROPS[i]
	        this[propKey] = ev[propKey]
	    }
	
	    for (var j = 0; j < KEY_PROPS.length; j++) {
	        var keyPropKey = KEY_PROPS[j]
	        this[keyPropKey] = ev[keyPropKey]
	    }
	
	    this._rawEvent = ev
	}
	
	inherits(KeyEvent, ProxyEvent)


/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	var EvStore = __webpack_require__(31)
	
	module.exports = removeEvent
	
	function removeEvent(target, type, handler) {
	    var events = EvStore(target)
	    var event = events[type]
	
	    if (!event) {
	        return
	    } else if (Array.isArray(event)) {
	        var index = event.indexOf(handler)
	        if (index !== -1) {
	            event.splice(index, 1)
	        }
	    } else if (event === handler) {
	        events[type] = null
	    }
	}


/***/ },
/* 151 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	/*global window, global*/
	
	var root = typeof window !== 'undefined' ?
	    window : typeof global !== 'undefined' ?
	    global : {};
	
	module.exports = Individual;
	
	function Individual(key, value) {
	    if (key in root) {
	        return root[key];
	    }
	
	    root[key] = value;
	
	    return value;
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var Individual = __webpack_require__(151);
	
	module.exports = OneVersion;
	
	function OneVersion(moduleName, version, defaultValue) {
	    var key = '__INDIVIDUAL_ONE_VERSION_' + moduleName;
	    var enforceKey = key + '_ENFORCE_SINGLETON';
	
	    var versionValue = Individual(enforceKey, version);
	
	    if (versionValue !== version) {
	        throw new Error('Can only have one copy of ' +
	            moduleName + '.\n' +
	            'You already have version ' + versionValue +
	            ' installed.\n' +
	            'This means you cannot install version ' + version);
	    }
	
	    return Individual(key, defaultValue);
	}


/***/ },
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {var root = typeof window !== 'undefined' ?
	    window : typeof global !== 'undefined' ?
	    global : {};
	
	module.exports = Individual
	
	function Individual(key, value) {
	    if (root[key]) {
	        return root[key]
	    }
	
	    Object.defineProperty(root, key, {
	        value: value
	        , configurable: true
	    })
	
	    return value
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 169 */
/***/ function(module, exports) {

	if (typeof Object.create === 'function') {
	  // implementation from standard node.js 'util' module
	  module.exports = function inherits(ctor, superCtor) {
	    ctor.super_ = superCtor
	    ctor.prototype = Object.create(superCtor.prototype, {
	      constructor: {
	        value: ctor,
	        enumerable: false,
	        writable: true,
	        configurable: true
	      }
	    });
	  };
	} else {
	  // old school shim for old browsers
	  module.exports = function inherits(ctor, superCtor) {
	    ctor.super_ = superCtor
	    var TempCtor = function () {}
	    TempCtor.prototype = superCtor.prototype
	    ctor.prototype = new TempCtor()
	    ctor.prototype.constructor = ctor
	  }
	}


/***/ },
/* 170 */,
/* 171 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = app;
	
	var _virtualDom = __webpack_require__(130);
	
	var _vdomSerializedPatch = __webpack_require__(126);
	
	var _workerStore = __webpack_require__(92);
	
	var _workerStore2 = _interopRequireDefault(_workerStore);
	
	var _eventsHandler = __webpack_require__(172);
	
	var _eventsHandler2 = _interopRequireDefault(_eventsHandler);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var app = undefined;
	function app(rootNode, AppEventsHandlers, AppWorker) {
	  var initVdom = function initVdom(vdom) {
	    rootNode.appendChild((0, _virtualDom.create)(vdom));
	    exports.default = app = rootNode.firstElementChild;
	    console.log('[MAIN] : App initialized in', performance.now());
	  };
	  var vdomChange = function vdomChange(patch) {
	    var startPatch = performance.now();
	    rootNode = (0, _vdomSerializedPatch.patch)(app, patch);
	    console.log('[MAIN] : Patch applied in', performance.now() - startPatch);
	  };
	  var workerStore = new _workerStore2.default(initVdom, vdomChange, AppWorker);
	  var appEvents = new AppEventsHandlers(workerStore);
	  var eventsHandler = (0, _eventsHandler2.default)(rootNode);
	  eventsHandler.register(appEvents);
	  eventsHandler.listen();
	}

/***/ },
/* 172 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _domDelegator = __webpack_require__(148);
	
	var _domDelegator2 = _interopRequireDefault(_domDelegator);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (appContainer) {
	  var delegator = new _domDelegator2.default();
	  var eventsMap = new Map();
	
	  return {
	    register: function register(eventsHandler) {
	      eventsHandler.register(eventsMap);
	    },
	    listen: function listen() {
	      eventsMap.forEach(function (handler, evt) {
	        delegator.addEventListener(appContainer, evt, function (e) {
	          handler.forEach(function (h) {
	            return h(e);
	          });
	        });
	      });
	    }
	  };
	};

/***/ },
/* 173 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.EventsHandler = exports.Component = exports.CHANGE_ROUTE = undefined;
	
	var _MultithreadItComponent = __webpack_require__(89);
	
	var _MultithreadItComponent2 = _interopRequireDefault(_MultithreadItComponent);
	
	var _MultithreadItEventsHandler = __webpack_require__(90);
	
	var _MultithreadItEventsHandler2 = _interopRequireDefault(_MultithreadItEventsHandler);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var CHANGE_ROUTE = exports.CHANGE_ROUTE = 'CHANGE_ROUTE';
	
	var Component = exports.Component = function (_MultithreadItCompone) {
	  _inherits(Component, _MultithreadItCompone);
	
	  function Component(routesDefinition) {
	    _classCallCheck(this, Component);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Component).call(this));
	
	    _this._routeDefinition = routesDefinition;
	    return _this;
	  }
	
	  _createClass(Component, [{
	    key: 'render',
	    value: function render(routeId) {
	      var routeConf = this._routeDefinition[routeId];
	      if (!routeConf) {
	        throw new Error('Missing route definition with id ${routeId}');
	      }
	      var componentInstance = new routeConf.component();
	      componentInstance.setStore(this._store);
	      componentInstance.initialize();
	
	      return componentInstance.render();
	    }
	  }]);
	
	  return Component;
	}(_MultithreadItComponent2.default);
	
	var EventsHandler = exports.EventsHandler = function (_MultithreadItEventsH) {
	  _inherits(EventsHandler, _MultithreadItEventsH);
	
	  function EventsHandler(workerStore) {
	    _classCallCheck(this, EventsHandler);
	
	    var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(EventsHandler).call(this, workerStore));
	
	    _this2.addEventHandlers('click', function (e) {
	      return _this2._click(e);
	    });
	    if (window.location.hash) {
	      _this2._dispatchChangeRoute(window.location.hash.substring(location.hash.indexOf('#') + 1));
	    }
	    return _this2;
	  }
	
	  _createClass(EventsHandler, [{
	    key: '_click',
	    value: function _click(e) {
	      var target = e.target;
	      if (target['data-click'] === CHANGE_ROUTE) {
	        e.preventDefault();
	        var link = target['data-link'];
	        this._dispatchChangeRoute(link);
	        window.location.hash = '#' + link;
	      }
	    }
	  }, {
	    key: '_dispatchChangeRoute',
	    value: function _dispatchChangeRoute(route) {
	      this._worker.dispatchEvent(CHANGE_ROUTE, route);
	    }
	  }]);
	
	  return EventsHandler;
	}(_MultithreadItEventsHandler2.default);

/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.subscribeAppToChanges = subscribeAppToChanges;
	exports.init = init;
	
	var _virtualDom = __webpack_require__(130);
	
	var _vdomSerializedPatch = __webpack_require__(126);
	
	var _vdomAsJson = __webpack_require__(123);
	
	var _store = __webpack_require__(51);
	
	var _WorkerMessageTypes = __webpack_require__(91);
	
	var WorkerMessageTypes = _interopRequireWildcard(_WorkerMessageTypes);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var currentVdom = undefined;
	var store = undefined;
	var reduxActionsCreator = undefined;
	
	onmessage = function onmessage(_ref) {
	  var data = _ref.data;
	
	  switch (data.type) {
	    case WorkerMessageTypes.INIT:
	      currentVdom = (0, _vdomAsJson.fromJson)(data.vdom);
	      return;
	    case WorkerMessageTypes.EVENT:
	      store.dispatch(reduxActionsCreator[data.message.action](data.message.data));
	      return;
	    default:
	      console.error('Don\'t know what to do with', data);
	  }
	};
	
	var postMessageVdomPatches = function postMessageVdomPatches(patch) {
	  postMessage({
	    type: WorkerMessageTypes.VDOM_CHANGE,
	    vdom: JSON.stringify((0, _vdomSerializedPatch.serialize)(patch))
	  });
	};
	
	function subscribeAppToChanges(appToRegister, actionsCreator, reducers, initialState) {
	  store = (0, _store.configureStore)(reducers, initialState);
	  reduxActionsCreator = actionsCreator;
	
	  var app = appToRegister;
	  app.setStore(store);
	  app.initialize();
	  var tree = app.render();
	
	  var vdomChange = function vdomChange() {
	    var startRendering = performance.now();
	
	    var newTree = app.render();
	    var patch = (0, _virtualDom.diff)(tree, newTree);
	    postMessageVdomPatches(patch);
	
	    tree = newTree;
	  };
	  store.subscribe(vdomChange);
	  init(tree);
	  return store;
	}
	
	function init(tree) {
	  postMessage({
	    type: WorkerMessageTypes.INIT_VDOM,
	    vdom: (0, _vdomAsJson.toJson)(tree)
	  });
	}

/***/ },
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */,
/* 246 */,
/* 247 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = thunkMiddleware;
	function thunkMiddleware(_ref) {
	  var dispatch = _ref.dispatch;
	  var getState = _ref.getState;
	
	  return function (next) {
	    return function (action) {
	      if (typeof action === 'function') {
	        return action(dispatch, getState);
	      }
	
	      return next(action);
	    };
	  };
	}

/***/ },
/* 248 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var types = __webpack_require__(125);
	var VirtualNode = __webpack_require__(79);
	var VirtualText = __webpack_require__(81);
	var VirtualPatch = __webpack_require__(80);
	var SoftSetHook =
	  __webpack_require__(78);
	
	function arrayFromJson(json) {
	  var len = json.length;
	  var i = -1;
	  var res = new Array(len);
	  while (++i < len) {
	    res[i] = fromJson(json[i]);
	  }
	  return res;
	}
	
	function plainObjectFromJson(json) {
	  var res = {};
	  /* jshint -W089 */
	  /* this is fine; these objects are always plain */
	  for (var key in json) {
	    var val = json[key];
	    res[key] = typeof val !== 'undefined' ? fromJson(val) : val;
	  }
	  return res;
	}
	
	function virtualNodeFromJson(json) {
	  return new VirtualNode(json.tn,
	    json.p ? plainObjectFromJson(json.p) : {}, // patch
	    json.c ? arrayFromJson(json.c) : [], // children
	    json.k, // key
	    json.n); // namespace
	}
	
	function virtualTextFromJson(json) {
	  return new VirtualText(json.x);
	}
	
	function virtualPatchFromJson(json) {
	  return new VirtualPatch(
	    json.pt, // patchType
	    json.v ? fromJson(json.v) : null, // virtualNode
	    json.p && fromJson(json.p) // patch
	  );
	}
	
	function softSetHookFromJson(json) {
	  return new SoftSetHook(json.value);
	}
	
	function objectFromJson(json) {
	  switch (json.t) { // type
	    case types.VirtualPatch:
	      return virtualPatchFromJson(json);
	    case types.VirtualNode:
	      return virtualNodeFromJson(json);
	    case types.VirtualTree:
	      return virtualTextFromJson(json);
	    case types.SoftSetHook:
	      return softSetHookFromJson(json);
	  }
	  return plainObjectFromJson(json);
	}
	
	function fromJson(json) {
	  var type = typeof json;
	
	  switch (type) {
	    case 'string':
	    case 'boolean':
	    case 'number':
	      return json;
	  }
	
	  // type === 'object'
	
	  if (Array.isArray(json)) {
	    return arrayFromJson(json);
	  }
	
	  if (!json) { // null
	    return null;
	  }
	
	  return objectFromJson(json);
	}
	
	module.exports = fromJson;

/***/ },
/* 249 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = __webpack_require__(124);

/***/ },
/* 250 */
/***/ function(module, exports, __webpack_require__) {

	var applyProperties = __webpack_require__(127)
	var isVText = __webpack_require__(256);
	var isVNode = __webpack_require__(255);
	
	module.exports = createElement;
	
	function createElement(vnode) {
	  var doc = document;
	
	  if (isVText(vnode)) {
	    return doc.createTextNode(vnode.x) // 'x' means 'text'
	  } else if (!isVNode(vnode)) {
	    return null
	  }
	
	  var node = (!vnode.n) ? // 'n' === 'namespace'
	    doc.createElement(vnode.tn) : // 'tn' === 'tagName'
	    doc.createElementNS(vnode.n, vnode.tn)
	
	  var props = vnode.p // 'p' === 'properties'
	  applyProperties(node, props)
	
	  var children = vnode.c // 'c' === 'children'
	
	  if (children) {
	    for (var i = 0; i < children.length; i++) {
	      var childNode = createElement(children[i])
	      if (childNode) {
	        node.appendChild(childNode)
	      }
	    }
	  }
	
	  return node
	}


/***/ },
/* 251 */
/***/ function(module, exports) {

	// Maps a virtual DOM tree onto a real DOM tree in an efficient manner.
	// We don't want to read all of the DOM nodes in the tree so we use
	// the in-order tree indexing to eliminate recursion down certain branches.
	// We only recurse into a DOM node if we know that it contains a child of
	// interest.
	
	var noChild = {}
	
	module.exports = domIndex
	
	function domIndex(rootNode, tree, indices, nodes) {
	  if (!indices || indices.length === 0) {
	    return {}
	  } else {
	    indices.sort(ascending)
	    return recurse(rootNode, tree, indices, nodes, 0)
	  }
	}
	
	function recurse(rootNode, tree, indices, nodes, rootIndex) {
	  nodes = nodes || {}
	
	
	  if (rootNode) {
	    if (indexInRange(indices, rootIndex, rootIndex)) {
	      nodes[rootIndex] = rootNode
	    }
	
	    var treeChildren = tree[0];
	
	    if (treeChildren) {
	
	      var childNodes = rootNode.childNodes
	
	      for (var i = 0; i < treeChildren.length; i++) {
	        rootIndex += 1
	
	        var vChild = treeChildren[i] || noChild
	        var nextIndex = rootIndex + (vChild[1] || 0)
	
	        // skip recursion down the tree if there are no nodes down here
	        if (indexInRange(indices, rootIndex, nextIndex)) {
	          recurse(childNodes[i], vChild, indices, nodes, rootIndex)
	        }
	
	        rootIndex = nextIndex
	      }
	    }
	  }
	
	  return nodes
	}
	
	// Binary search for an index in the interval [left, right]
	function indexInRange(indices, left, right) {
	  if (indices.length === 0) {
	    return false
	  }
	
	  var minIndex = 0
	  var maxIndex = indices.length - 1
	  var currentIndex
	  var currentItem
	
	  while (minIndex <= maxIndex) {
	    currentIndex = ((maxIndex + minIndex) / 2) >> 0
	    currentItem = indices[currentIndex]
	
	    if (minIndex === maxIndex) {
	      return currentItem >= left && currentItem <= right
	    } else if (currentItem < left) {
	      minIndex = currentIndex + 1
	    } else if (currentItem > right) {
	      maxIndex = currentIndex - 1
	    } else {
	      return true
	    }
	  }
	
	  return false;
	}
	
	function ascending(a, b) {
	  return a > b ? 1 : -1
	}


/***/ },
/* 252 */
/***/ function(module, exports, __webpack_require__) {

	var patchRecursive = __webpack_require__(258);
	
	function patch(rootNode, patches) {
	  return patchRecursive(rootNode, patches);
	}
	
	module.exports = patch;

/***/ },
/* 253 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function isObject(x) {
	  return typeof x === "object" && x !== null;
	};

/***/ },
/* 254 */
/***/ function(module, exports) {

	module.exports = isSoftSetHook
	
	function isSoftSetHook(x) {
	  return x && typeof x === 'object' && typeof x.value !== 'undefined';
	}


/***/ },
/* 255 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = isVirtualNode
	
	var types = __webpack_require__(128);
	
	function isVirtualNode(x) {
	  return x && x.t === types.VirtualNode
	}


/***/ },
/* 256 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = isVirtualText
	
	var types = __webpack_require__(128);
	
	function isVirtualText(x) {
	  return x && x.t === types.VirtualTree;
	}


/***/ },
/* 257 */
/***/ function(module, exports, __webpack_require__) {

	var applyProperties = __webpack_require__(127);
	var patchTypes = __webpack_require__(129);
	var render = __webpack_require__(250);
	
	module.exports = applyPatch
	
	function applyPatch(vpatch, domNode, patchRecursive) {
	  var type = vpatch[0]
	  var patch = vpatch[1]
	  var vNode = vpatch[2]
	
	  switch (type) {
	    case patchTypes.REMOVE:
	      return removeNode(domNode)
	    case patchTypes.INSERT:
	      return insertNode(domNode, patch)
	    case patchTypes.VTEXT:
	      return stringPatch(domNode, patch)
	    case patchTypes.VNODE:
	      return vNodePatch(domNode, patch)
	    case patchTypes.ORDER:
	      reorderChildren(domNode, patch)
	      return domNode
	    case patchTypes.PROPS:
	      applyProperties(domNode, patch, vNode.p) // 'p' === 'properties'
	      return domNode
	    case patchTypes.THUNK:
	      return replaceRoot(domNode,
	          patchRecursive(domNode, patch))
	    default:
	      return domNode
	  }
	}
	
	function removeNode(domNode) {
	  var parentNode = domNode.parentNode
	
	  if (parentNode) {
	    parentNode.removeChild(domNode)
	  }
	
	  return null
	}
	
	function insertNode(parentNode, vNode) {
	  var newNode = render(vNode)
	
	  if (parentNode) {
	    parentNode.appendChild(newNode)
	  }
	
	  return parentNode
	}
	
	function stringPatch(domNode, vText) {
	  var newNode
	
	  if (domNode.nodeType === 3) {
	    domNode.replaceData(0, domNode.length, vText.x) // 'x' means 'text'
	    newNode = domNode
	  } else {
	    var parentNode = domNode.parentNode
	    newNode = render(vText)
	
	    if (parentNode && newNode !== domNode) {
	      parentNode.replaceChild(newNode, domNode)
	    }
	  }
	
	  return newNode
	}
	
	function vNodePatch(domNode, vNode) {
	  var parentNode = domNode.parentNode
	  var newNode = render(vNode)
	
	  if (parentNode && newNode !== domNode) {
	    parentNode.replaceChild(newNode, domNode)
	  }
	
	  return newNode
	}
	
	function reorderChildren(domNode, moves) {
	  var childNodes = domNode.childNodes
	  var keyMap = {}
	  var node
	  var remove
	  var insert
	
	  for (var i = 0; i < moves.removes.length; i++) {
	    remove = moves.removes[i]
	    node = childNodes[remove.from]
	    if (remove.key) {
	      keyMap[remove.key] = node
	    }
	    domNode.removeChild(node)
	  }
	
	  var length = childNodes.length
	  for (var j = 0; j < moves.inserts.length; j++) {
	    insert = moves.inserts[j]
	    node = keyMap[insert.key]
	    // this is the weirdest bug i've ever seen in webkit
	    domNode.insertBefore(node, insert.to >= length++ ? null : childNodes[insert.to])
	  }
	}
	
	function replaceRoot(oldRoot, newRoot) {
	    if (oldRoot && newRoot && oldRoot !== newRoot && oldRoot.parentNode) {
	        oldRoot.parentNode.replaceChild(newRoot, oldRoot)
	    }
	
	    return newRoot;
	}


/***/ },
/* 258 */
/***/ function(module, exports, __webpack_require__) {

	var domIndex = __webpack_require__(251)
	var patchOp = __webpack_require__(257)
	
	function patchRecursive(rootNode, patches) {
	  var indices = patchIndices(patches)
	
	  if (indices.length === 0) {
	    return rootNode
	  }
	
	  var index = domIndex(rootNode, patches.a, indices)
	
	  for (var i = 0; i < indices.length; i++) {
	    var nodeIndex = indices[i]
	    rootNode = applyPatch(rootNode,
	      index[nodeIndex],
	      patches[nodeIndex])
	  }
	
	  return rootNode
	}
	
	function applyPatch(rootNode, domNode, patchList) {
	  if (!domNode) {
	    return rootNode
	  }
	
	  var newNode
	
	  for (var i = 0; i < patchList.length; i++) {
	    newNode = patchOp(patchList[i], domNode, patchRecursive)
	
	    if (domNode === rootNode) {
	      rootNode = newNode
	    }
	  }
	
	  return rootNode
	}
	
	function patchIndices(patches) {
	  var indices = []
	
	  for (var key in patches) {
	    if (key !== "a") {
	      indices.push(Number(key))
	    }
	  }
	
	  return indices
	}
	
	
	module.exports = patchRecursive;


/***/ },
/* 259 */
/***/ function(module, exports, __webpack_require__) {

	var patchTypes = __webpack_require__(129);
	var toJson = __webpack_require__(249);
	
	// traverse the thing that the original patch structure called "a',
	// i.e. the virtual tree representing the current node structure.
	// this thing only really needs two properties - "children" and "count",
	// so trim out everything else
	function serializeCurrentNode(currentNode) {
	  var children = currentNode.children;
	  if (!children) {
	    return null;
	  }
	  var len = children.length;
	  var arr = new Array(len);
	  var i = -1;
	  while (++i < len) {
	    arr[i] = serializeCurrentNode(children[i]);
	  }
	  if (currentNode.count) {
	    return [arr, currentNode.count];
	  } else {
	    return [arr];
	  }
	}
	
	function serializeVirtualPatchOrPatches(vPatch) {
	  if (Array.isArray(vPatch)) {
	    var len = vPatch.length;
	    var res = new Array(len);
	    var i = -1;
	    while (++i < len) {
	      res[i] = serializeVirtualPatch(vPatch[i]);
	    }
	    return res;
	  }
	  return [serializeVirtualPatch(vPatch)];
	}
	
	function serializeVirtualPatch(vPatch) {
	  var type = vPatch.type;
	  var res = [
	    type,
	    vPatch.patch && vPatch.patch.a ? toJson(serializeRootPatch(vPatch.patch)) : toJson(vPatch.patch)
	  ];
	
	  if (type === patchTypes.PROPS) {
	    // this is the only time the vNode is needed
	    res.push({p: vPatch.vNode.properties}); // 'p' === 'properties'
	  }
	  return res;
	}
	
	function serializeRootPatch(patch) {
	  var outputRootNode = serializeCurrentNode(patch.a);
	
	  var res = {
	    a: outputRootNode
	  };
	
	  for (var key in patch) {
	    if (key !== 'a') {
	      res[key] = serializeVirtualPatchOrPatches(patch[key]);
	    }
	  }
	
	  return res;
	};
	module.exports = serializeRootPatch;


/***/ },
/* 260 */
/***/ function(module, exports, __webpack_require__) {

	var createElement = __webpack_require__(132)
	
	module.exports = createElement


/***/ },
/* 261 */
/***/ function(module, exports, __webpack_require__) {

	var diff = __webpack_require__(271)
	
	module.exports = diff


/***/ },
/* 262 */
/***/ function(module, exports, __webpack_require__) {

	var patch = __webpack_require__(265)
	
	module.exports = patch


/***/ },
/* 263 */
/***/ function(module, exports) {

	// Maps a virtual DOM tree onto a real DOM tree in an efficient manner.
	// We don't want to read all of the DOM nodes in the tree so we use
	// the in-order tree indexing to eliminate recursion down certain branches.
	// We only recurse into a DOM node if we know that it contains a child of
	// interest.
	
	var noChild = {}
	
	module.exports = domIndex
	
	function domIndex(rootNode, tree, indices, nodes) {
	    if (!indices || indices.length === 0) {
	        return {}
	    } else {
	        indices.sort(ascending)
	        return recurse(rootNode, tree, indices, nodes, 0)
	    }
	}
	
	function recurse(rootNode, tree, indices, nodes, rootIndex) {
	    nodes = nodes || {}
	
	
	    if (rootNode) {
	        if (indexInRange(indices, rootIndex, rootIndex)) {
	            nodes[rootIndex] = rootNode
	        }
	
	        var vChildren = tree.children
	
	        if (vChildren) {
	
	            var childNodes = rootNode.childNodes
	
	            for (var i = 0; i < tree.children.length; i++) {
	                rootIndex += 1
	
	                var vChild = vChildren[i] || noChild
	                var nextIndex = rootIndex + (vChild.count || 0)
	
	                // skip recursion down the tree if there are no nodes down here
	                if (indexInRange(indices, rootIndex, nextIndex)) {
	                    recurse(childNodes[i], vChild, indices, nodes, rootIndex)
	                }
	
	                rootIndex = nextIndex
	            }
	        }
	    }
	
	    return nodes
	}
	
	// Binary search for an index in the interval [left, right]
	function indexInRange(indices, left, right) {
	    if (indices.length === 0) {
	        return false
	    }
	
	    var minIndex = 0
	    var maxIndex = indices.length - 1
	    var currentIndex
	    var currentItem
	
	    while (minIndex <= maxIndex) {
	        currentIndex = ((maxIndex + minIndex) / 2) >> 0
	        currentItem = indices[currentIndex]
	
	        if (minIndex === maxIndex) {
	            return currentItem >= left && currentItem <= right
	        } else if (currentItem < left) {
	            minIndex = currentIndex + 1
	        } else  if (currentItem > right) {
	            maxIndex = currentIndex - 1
	        } else {
	            return true
	        }
	    }
	
	    return false;
	}
	
	function ascending(a, b) {
	    return a > b ? 1 : -1
	}


/***/ },
/* 264 */
/***/ function(module, exports, __webpack_require__) {

	var applyProperties = __webpack_require__(131)
	
	var isWidget = __webpack_require__(17)
	var VPatch = __webpack_require__(80)
	
	var updateWidget = __webpack_require__(266)
	
	module.exports = applyPatch
	
	function applyPatch(vpatch, domNode, renderOptions) {
	    var type = vpatch.type
	    var vNode = vpatch.vNode
	    var patch = vpatch.patch
	
	    switch (type) {
	        case VPatch.REMOVE:
	            return removeNode(domNode, vNode)
	        case VPatch.INSERT:
	            return insertNode(domNode, patch, renderOptions)
	        case VPatch.VTEXT:
	            return stringPatch(domNode, vNode, patch, renderOptions)
	        case VPatch.WIDGET:
	            return widgetPatch(domNode, vNode, patch, renderOptions)
	        case VPatch.VNODE:
	            return vNodePatch(domNode, vNode, patch, renderOptions)
	        case VPatch.ORDER:
	            reorderChildren(domNode, patch)
	            return domNode
	        case VPatch.PROPS:
	            applyProperties(domNode, patch, vNode.properties)
	            return domNode
	        case VPatch.THUNK:
	            return replaceRoot(domNode,
	                renderOptions.patch(domNode, patch, renderOptions))
	        default:
	            return domNode
	    }
	}
	
	function removeNode(domNode, vNode) {
	    var parentNode = domNode.parentNode
	
	    if (parentNode) {
	        parentNode.removeChild(domNode)
	    }
	
	    destroyWidget(domNode, vNode);
	
	    return null
	}
	
	function insertNode(parentNode, vNode, renderOptions) {
	    var newNode = renderOptions.render(vNode, renderOptions)
	
	    if (parentNode) {
	        parentNode.appendChild(newNode)
	    }
	
	    return parentNode
	}
	
	function stringPatch(domNode, leftVNode, vText, renderOptions) {
	    var newNode
	
	    if (domNode.nodeType === 3) {
	        domNode.replaceData(0, domNode.length, vText.text)
	        newNode = domNode
	    } else {
	        var parentNode = domNode.parentNode
	        newNode = renderOptions.render(vText, renderOptions)
	
	        if (parentNode && newNode !== domNode) {
	            parentNode.replaceChild(newNode, domNode)
	        }
	    }
	
	    return newNode
	}
	
	function widgetPatch(domNode, leftVNode, widget, renderOptions) {
	    var updating = updateWidget(leftVNode, widget)
	    var newNode
	
	    if (updating) {
	        newNode = widget.update(leftVNode, domNode) || domNode
	    } else {
	        newNode = renderOptions.render(widget, renderOptions)
	    }
	
	    var parentNode = domNode.parentNode
	
	    if (parentNode && newNode !== domNode) {
	        parentNode.replaceChild(newNode, domNode)
	    }
	
	    if (!updating) {
	        destroyWidget(domNode, leftVNode)
	    }
	
	    return newNode
	}
	
	function vNodePatch(domNode, leftVNode, vNode, renderOptions) {
	    var parentNode = domNode.parentNode
	    var newNode = renderOptions.render(vNode, renderOptions)
	
	    if (parentNode && newNode !== domNode) {
	        parentNode.replaceChild(newNode, domNode)
	    }
	
	    return newNode
	}
	
	function destroyWidget(domNode, w) {
	    if (typeof w.destroy === "function" && isWidget(w)) {
	        w.destroy(domNode)
	    }
	}
	
	function reorderChildren(domNode, moves) {
	    var childNodes = domNode.childNodes
	    var keyMap = {}
	    var node
	    var remove
	    var insert
	
	    for (var i = 0; i < moves.removes.length; i++) {
	        remove = moves.removes[i]
	        node = childNodes[remove.from]
	        if (remove.key) {
	            keyMap[remove.key] = node
	        }
	        domNode.removeChild(node)
	    }
	
	    var length = childNodes.length
	    for (var j = 0; j < moves.inserts.length; j++) {
	        insert = moves.inserts[j]
	        node = keyMap[insert.key]
	        // this is the weirdest bug i've ever seen in webkit
	        domNode.insertBefore(node, insert.to >= length++ ? null : childNodes[insert.to])
	    }
	}
	
	function replaceRoot(oldRoot, newRoot) {
	    if (oldRoot && newRoot && oldRoot !== newRoot && oldRoot.parentNode) {
	        oldRoot.parentNode.replaceChild(newRoot, oldRoot)
	    }
	
	    return newRoot;
	}


/***/ },
/* 265 */
/***/ function(module, exports, __webpack_require__) {

	var document = __webpack_require__(34)
	var isArray = __webpack_require__(82)
	
	var render = __webpack_require__(132)
	var domIndex = __webpack_require__(263)
	var patchOp = __webpack_require__(264)
	module.exports = patch
	
	function patch(rootNode, patches, renderOptions) {
	    renderOptions = renderOptions || {}
	    renderOptions.patch = renderOptions.patch && renderOptions.patch !== patch
	        ? renderOptions.patch
	        : patchRecursive
	    renderOptions.render = renderOptions.render || render
	
	    return renderOptions.patch(rootNode, patches, renderOptions)
	}
	
	function patchRecursive(rootNode, patches, renderOptions) {
	    var indices = patchIndices(patches)
	
	    if (indices.length === 0) {
	        return rootNode
	    }
	
	    var index = domIndex(rootNode, patches.a, indices)
	    var ownerDocument = rootNode.ownerDocument
	
	    if (!renderOptions.document && ownerDocument !== document) {
	        renderOptions.document = ownerDocument
	    }
	
	    for (var i = 0; i < indices.length; i++) {
	        var nodeIndex = indices[i]
	        rootNode = applyPatch(rootNode,
	            index[nodeIndex],
	            patches[nodeIndex],
	            renderOptions)
	    }
	
	    return rootNode
	}
	
	function applyPatch(rootNode, domNode, patchList, renderOptions) {
	    if (!domNode) {
	        return rootNode
	    }
	
	    var newNode
	
	    if (isArray(patchList)) {
	        for (var i = 0; i < patchList.length; i++) {
	            newNode = patchOp(patchList[i], domNode, renderOptions)
	
	            if (domNode === rootNode) {
	                rootNode = newNode
	            }
	        }
	    } else {
	        newNode = patchOp(patchList, domNode, renderOptions)
	
	        if (domNode === rootNode) {
	            rootNode = newNode
	        }
	    }
	
	    return rootNode
	}
	
	function patchIndices(patches) {
	    var indices = []
	
	    for (var key in patches) {
	        if (key !== "a") {
	            indices.push(Number(key))
	        }
	    }
	
	    return indices
	}


/***/ },
/* 266 */
/***/ function(module, exports, __webpack_require__) {

	var isWidget = __webpack_require__(17)
	
	module.exports = updateWidget
	
	function updateWidget(a, b) {
	    if (isWidget(a) && isWidget(b)) {
	        if ("name" in a && "name" in b) {
	            return a.id === b.id
	        } else {
	            return a.init === b.init
	        }
	    }
	
	    return false
	}


/***/ },
/* 267 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var EvStore = __webpack_require__(31);
	
	module.exports = EvHook;
	
	function EvHook(value) {
	    if (!(this instanceof EvHook)) {
	        return new EvHook(value);
	    }
	
	    this.value = value;
	}
	
	EvHook.prototype.hook = function (node, propertyName) {
	    var es = EvStore(node);
	    var propName = propertyName.substr(3);
	
	    es[propName] = this.value;
	};
	
	EvHook.prototype.unhook = function(node, propertyName) {
	    var es = EvStore(node);
	    var propName = propertyName.substr(3);
	
	    es[propName] = undefined;
	};


/***/ },
/* 268 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var isArray = __webpack_require__(82);
	
	var VNode = __webpack_require__(79);
	var VText = __webpack_require__(81);
	var isVNode = __webpack_require__(29);
	var isVText = __webpack_require__(46);
	var isWidget = __webpack_require__(17);
	var isHook = __webpack_require__(45);
	var isVThunk = __webpack_require__(44);
	
	var parseTag = __webpack_require__(269);
	var softSetHook = __webpack_require__(78);
	var evHook = __webpack_require__(267);
	
	module.exports = h;
	
	function h(tagName, properties, children) {
	    var childNodes = [];
	    var tag, props, key, namespace;
	
	    if (!children && isChildren(properties)) {
	        children = properties;
	        props = {};
	    }
	
	    props = props || properties || {};
	    tag = parseTag(tagName, props);
	
	    // support keys
	    if (props.hasOwnProperty('key')) {
	        key = props.key;
	        props.key = undefined;
	    }
	
	    // support namespace
	    if (props.hasOwnProperty('namespace')) {
	        namespace = props.namespace;
	        props.namespace = undefined;
	    }
	
	    // fix cursor bug
	    if (tag === 'INPUT' &&
	        !namespace &&
	        props.hasOwnProperty('value') &&
	        props.value !== undefined &&
	        !isHook(props.value)
	    ) {
	        props.value = softSetHook(props.value);
	    }
	
	    transformProperties(props);
	
	    if (children !== undefined && children !== null) {
	        addChild(children, childNodes, tag, props);
	    }
	
	
	    return new VNode(tag, props, childNodes, key, namespace);
	}
	
	function addChild(c, childNodes, tag, props) {
	    if (typeof c === 'string') {
	        childNodes.push(new VText(c));
	    } else if (typeof c === 'number') {
	        childNodes.push(new VText(String(c)));
	    } else if (isChild(c)) {
	        childNodes.push(c);
	    } else if (isArray(c)) {
	        for (var i = 0; i < c.length; i++) {
	            addChild(c[i], childNodes, tag, props);
	        }
	    } else if (c === null || c === undefined) {
	        return;
	    } else {
	        throw UnexpectedVirtualElement({
	            foreignObject: c,
	            parentVnode: {
	                tagName: tag,
	                properties: props
	            }
	        });
	    }
	}
	
	function transformProperties(props) {
	    for (var propName in props) {
	        if (props.hasOwnProperty(propName)) {
	            var value = props[propName];
	
	            if (isHook(value)) {
	                continue;
	            }
	
	            if (propName.substr(0, 3) === 'ev-') {
	                // add ev-foo support
	                props[propName] = evHook(value);
	            }
	        }
	    }
	}
	
	function isChild(x) {
	    return isVNode(x) || isVText(x) || isWidget(x) || isVThunk(x);
	}
	
	function isChildren(x) {
	    return typeof x === 'string' || isArray(x) || isChild(x);
	}
	
	function UnexpectedVirtualElement(data) {
	    var err = new Error();
	
	    err.type = 'virtual-hyperscript.unexpected.virtual-element';
	    err.message = 'Unexpected virtual child passed to h().\n' +
	        'Expected a VNode / Vthunk / VWidget / string but:\n' +
	        'got:\n' +
	        errorString(data.foreignObject) +
	        '.\n' +
	        'The parent vnode is:\n' +
	        errorString(data.parentVnode)
	        '\n' +
	        'Suggested fix: change your `h(..., [ ... ])` callsite.';
	    err.foreignObject = data.foreignObject;
	    err.parentVnode = data.parentVnode;
	
	    return err;
	}
	
	function errorString(obj) {
	    try {
	        return JSON.stringify(obj, null, '    ');
	    } catch (e) {
	        return String(obj);
	    }
	}


/***/ },
/* 269 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var split = __webpack_require__(144);
	
	var classIdSplit = /([\.#]?[a-zA-Z0-9\u007F-\uFFFF_:-]+)/;
	var notClassId = /^\.|#/;
	
	module.exports = parseTag;
	
	function parseTag(tag, props) {
	    if (!tag) {
	        return 'DIV';
	    }
	
	    var noId = !(props.hasOwnProperty('id'));
	
	    var tagParts = split(tag, classIdSplit);
	    var tagName = null;
	
	    if (notClassId.test(tagParts[1])) {
	        tagName = 'DIV';
	    }
	
	    var classes, part, type, i;
	
	    for (i = 0; i < tagParts.length; i++) {
	        part = tagParts[i];
	
	        if (!part) {
	            continue;
	        }
	
	        type = part.charAt(0);
	
	        if (!tagName) {
	            tagName = part;
	        } else if (type === '.') {
	            classes = classes || [];
	            classes.push(part.substring(1, part.length));
	        } else if (type === '#' && noId) {
	            props.id = part.substring(1, part.length);
	        }
	    }
	
	    if (classes) {
	        if (props.className) {
	            classes.push(props.className);
	        }
	
	        props.className = classes.join(' ');
	    }
	
	    return props.namespace ? tagName : tagName.toUpperCase();
	}


/***/ },
/* 270 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(88)
	var isHook = __webpack_require__(45)
	
	module.exports = diffProps
	
	function diffProps(a, b) {
	    var diff
	
	    for (var aKey in a) {
	        if (!(aKey in b)) {
	            diff = diff || {}
	            diff[aKey] = undefined
	        }
	
	        var aValue = a[aKey]
	        var bValue = b[aKey]
	
	        if (aValue === bValue) {
	            continue
	        } else if (isObject(aValue) && isObject(bValue)) {
	            if (getPrototype(bValue) !== getPrototype(aValue)) {
	                diff = diff || {}
	                diff[aKey] = bValue
	            } else if (isHook(bValue)) {
	                 diff = diff || {}
	                 diff[aKey] = bValue
	            } else {
	                var objectDiff = diffProps(aValue, bValue)
	                if (objectDiff) {
	                    diff = diff || {}
	                    diff[aKey] = objectDiff
	                }
	            }
	        } else {
	            diff = diff || {}
	            diff[aKey] = bValue
	        }
	    }
	
	    for (var bKey in b) {
	        if (!(bKey in a)) {
	            diff = diff || {}
	            diff[bKey] = b[bKey]
	        }
	    }
	
	    return diff
	}
	
	function getPrototype(value) {
	  if (Object.getPrototypeOf) {
	    return Object.getPrototypeOf(value)
	  } else if (value.__proto__) {
	    return value.__proto__
	  } else if (value.constructor) {
	    return value.constructor.prototype
	  }
	}


/***/ },
/* 271 */
/***/ function(module, exports, __webpack_require__) {

	var isArray = __webpack_require__(82)
	
	var VPatch = __webpack_require__(80)
	var isVNode = __webpack_require__(29)
	var isVText = __webpack_require__(46)
	var isWidget = __webpack_require__(17)
	var isThunk = __webpack_require__(44)
	var handleThunk = __webpack_require__(133)
	
	var diffProps = __webpack_require__(270)
	
	module.exports = diff
	
	function diff(a, b) {
	    var patch = { a: a }
	    walk(a, b, patch, 0)
	    return patch
	}
	
	function walk(a, b, patch, index) {
	    if (a === b) {
	        return
	    }
	
	    var apply = patch[index]
	    var applyClear = false
	
	    if (isThunk(a) || isThunk(b)) {
	        thunks(a, b, patch, index)
	    } else if (b == null) {
	
	        // If a is a widget we will add a remove patch for it
	        // Otherwise any child widgets/hooks must be destroyed.
	        // This prevents adding two remove patches for a widget.
	        if (!isWidget(a)) {
	            clearState(a, patch, index)
	            apply = patch[index]
	        }
	
	        apply = appendPatch(apply, new VPatch(VPatch.REMOVE, a, b))
	    } else if (isVNode(b)) {
	        if (isVNode(a)) {
	            if (a.tagName === b.tagName &&
	                a.namespace === b.namespace &&
	                a.key === b.key) {
	                var propsPatch = diffProps(a.properties, b.properties)
	                if (propsPatch) {
	                    apply = appendPatch(apply,
	                        new VPatch(VPatch.PROPS, a, propsPatch))
	                }
	                apply = diffChildren(a, b, patch, apply, index)
	            } else {
	                apply = appendPatch(apply, new VPatch(VPatch.VNODE, a, b))
	                applyClear = true
	            }
	        } else {
	            apply = appendPatch(apply, new VPatch(VPatch.VNODE, a, b))
	            applyClear = true
	        }
	    } else if (isVText(b)) {
	        if (!isVText(a)) {
	            apply = appendPatch(apply, new VPatch(VPatch.VTEXT, a, b))
	            applyClear = true
	        } else if (a.text !== b.text) {
	            apply = appendPatch(apply, new VPatch(VPatch.VTEXT, a, b))
	        }
	    } else if (isWidget(b)) {
	        if (!isWidget(a)) {
	            applyClear = true
	        }
	
	        apply = appendPatch(apply, new VPatch(VPatch.WIDGET, a, b))
	    }
	
	    if (apply) {
	        patch[index] = apply
	    }
	
	    if (applyClear) {
	        clearState(a, patch, index)
	    }
	}
	
	function diffChildren(a, b, patch, apply, index) {
	    var aChildren = a.children
	    var orderedSet = reorder(aChildren, b.children)
	    var bChildren = orderedSet.children
	
	    var aLen = aChildren.length
	    var bLen = bChildren.length
	    var len = aLen > bLen ? aLen : bLen
	
	    for (var i = 0; i < len; i++) {
	        var leftNode = aChildren[i]
	        var rightNode = bChildren[i]
	        index += 1
	
	        if (!leftNode) {
	            if (rightNode) {
	                // Excess nodes in b need to be added
	                apply = appendPatch(apply,
	                    new VPatch(VPatch.INSERT, null, rightNode))
	            }
	        } else {
	            walk(leftNode, rightNode, patch, index)
	        }
	
	        if (isVNode(leftNode) && leftNode.count) {
	            index += leftNode.count
	        }
	    }
	
	    if (orderedSet.moves) {
	        // Reorder nodes last
	        apply = appendPatch(apply, new VPatch(
	            VPatch.ORDER,
	            a,
	            orderedSet.moves
	        ))
	    }
	
	    return apply
	}
	
	function clearState(vNode, patch, index) {
	    // TODO: Make this a single walk, not two
	    unhook(vNode, patch, index)
	    destroyWidgets(vNode, patch, index)
	}
	
	// Patch records for all destroyed widgets must be added because we need
	// a DOM node reference for the destroy function
	function destroyWidgets(vNode, patch, index) {
	    if (isWidget(vNode)) {
	        if (typeof vNode.destroy === "function") {
	            patch[index] = appendPatch(
	                patch[index],
	                new VPatch(VPatch.REMOVE, vNode, null)
	            )
	        }
	    } else if (isVNode(vNode) && (vNode.hasWidgets || vNode.hasThunks)) {
	        var children = vNode.children
	        var len = children.length
	        for (var i = 0; i < len; i++) {
	            var child = children[i]
	            index += 1
	
	            destroyWidgets(child, patch, index)
	
	            if (isVNode(child) && child.count) {
	                index += child.count
	            }
	        }
	    } else if (isThunk(vNode)) {
	        thunks(vNode, null, patch, index)
	    }
	}
	
	// Create a sub-patch for thunks
	function thunks(a, b, patch, index) {
	    var nodes = handleThunk(a, b)
	    var thunkPatch = diff(nodes.a, nodes.b)
	    if (hasPatches(thunkPatch)) {
	        patch[index] = new VPatch(VPatch.THUNK, null, thunkPatch)
	    }
	}
	
	function hasPatches(patch) {
	    for (var index in patch) {
	        if (index !== "a") {
	            return true
	        }
	    }
	
	    return false
	}
	
	// Execute hooks when two nodes are identical
	function unhook(vNode, patch, index) {
	    if (isVNode(vNode)) {
	        if (vNode.hooks) {
	            patch[index] = appendPatch(
	                patch[index],
	                new VPatch(
	                    VPatch.PROPS,
	                    vNode,
	                    undefinedKeys(vNode.hooks)
	                )
	            )
	        }
	
	        if (vNode.descendantHooks || vNode.hasThunks) {
	            var children = vNode.children
	            var len = children.length
	            for (var i = 0; i < len; i++) {
	                var child = children[i]
	                index += 1
	
	                unhook(child, patch, index)
	
	                if (isVNode(child) && child.count) {
	                    index += child.count
	                }
	            }
	        }
	    } else if (isThunk(vNode)) {
	        thunks(vNode, null, patch, index)
	    }
	}
	
	function undefinedKeys(obj) {
	    var result = {}
	
	    for (var key in obj) {
	        result[key] = undefined
	    }
	
	    return result
	}
	
	// List diff, naive left to right reordering
	function reorder(aChildren, bChildren) {
	    // O(M) time, O(M) memory
	    var bChildIndex = keyIndex(bChildren)
	    var bKeys = bChildIndex.keys
	    var bFree = bChildIndex.free
	
	    if (bFree.length === bChildren.length) {
	        return {
	            children: bChildren,
	            moves: null
	        }
	    }
	
	    // O(N) time, O(N) memory
	    var aChildIndex = keyIndex(aChildren)
	    var aKeys = aChildIndex.keys
	    var aFree = aChildIndex.free
	
	    if (aFree.length === aChildren.length) {
	        return {
	            children: bChildren,
	            moves: null
	        }
	    }
	
	    // O(MAX(N, M)) memory
	    var newChildren = []
	
	    var freeIndex = 0
	    var freeCount = bFree.length
	    var deletedItems = 0
	
	    // Iterate through a and match a node in b
	    // O(N) time,
	    for (var i = 0 ; i < aChildren.length; i++) {
	        var aItem = aChildren[i]
	        var itemIndex
	
	        if (aItem.key) {
	            if (bKeys.hasOwnProperty(aItem.key)) {
	                // Match up the old keys
	                itemIndex = bKeys[aItem.key]
	                newChildren.push(bChildren[itemIndex])
	
	            } else {
	                // Remove old keyed items
	                itemIndex = i - deletedItems++
	                newChildren.push(null)
	            }
	        } else {
	            // Match the item in a with the next free item in b
	            if (freeIndex < freeCount) {
	                itemIndex = bFree[freeIndex++]
	                newChildren.push(bChildren[itemIndex])
	            } else {
	                // There are no free items in b to match with
	                // the free items in a, so the extra free nodes
	                // are deleted.
	                itemIndex = i - deletedItems++
	                newChildren.push(null)
	            }
	        }
	    }
	
	    var lastFreeIndex = freeIndex >= bFree.length ?
	        bChildren.length :
	        bFree[freeIndex]
	
	    // Iterate through b and append any new keys
	    // O(M) time
	    for (var j = 0; j < bChildren.length; j++) {
	        var newItem = bChildren[j]
	
	        if (newItem.key) {
	            if (!aKeys.hasOwnProperty(newItem.key)) {
	                // Add any new keyed items
	                // We are adding new items to the end and then sorting them
	                // in place. In future we should insert new items in place.
	                newChildren.push(newItem)
	            }
	        } else if (j >= lastFreeIndex) {
	            // Add any leftover non-keyed items
	            newChildren.push(newItem)
	        }
	    }
	
	    var simulate = newChildren.slice()
	    var simulateIndex = 0
	    var removes = []
	    var inserts = []
	    var simulateItem
	
	    for (var k = 0; k < bChildren.length;) {
	        var wantedItem = bChildren[k]
	        simulateItem = simulate[simulateIndex]
	
	        // remove items
	        while (simulateItem === null && simulate.length) {
	            removes.push(remove(simulate, simulateIndex, null))
	            simulateItem = simulate[simulateIndex]
	        }
	
	        if (!simulateItem || simulateItem.key !== wantedItem.key) {
	            // if we need a key in this position...
	            if (wantedItem.key) {
	                if (simulateItem && simulateItem.key) {
	                    // if an insert doesn't put this key in place, it needs to move
	                    if (bKeys[simulateItem.key] !== k + 1) {
	                        removes.push(remove(simulate, simulateIndex, simulateItem.key))
	                        simulateItem = simulate[simulateIndex]
	                        // if the remove didn't put the wanted item in place, we need to insert it
	                        if (!simulateItem || simulateItem.key !== wantedItem.key) {
	                            inserts.push({key: wantedItem.key, to: k})
	                        }
	                        // items are matching, so skip ahead
	                        else {
	                            simulateIndex++
	                        }
	                    }
	                    else {
	                        inserts.push({key: wantedItem.key, to: k})
	                    }
	                }
	                else {
	                    inserts.push({key: wantedItem.key, to: k})
	                }
	                k++
	            }
	            // a key in simulate has no matching wanted key, remove it
	            else if (simulateItem && simulateItem.key) {
	                removes.push(remove(simulate, simulateIndex, simulateItem.key))
	            }
	        }
	        else {
	            simulateIndex++
	            k++
	        }
	    }
	
	    // remove all the remaining nodes from simulate
	    while(simulateIndex < simulate.length) {
	        simulateItem = simulate[simulateIndex]
	        removes.push(remove(simulate, simulateIndex, simulateItem && simulateItem.key))
	    }
	
	    // If the only moves we have are deletes then we can just
	    // let the delete patch remove these items.
	    if (removes.length === deletedItems && !inserts.length) {
	        return {
	            children: newChildren,
	            moves: null
	        }
	    }
	
	    return {
	        children: newChildren,
	        moves: {
	            removes: removes,
	            inserts: inserts
	        }
	    }
	}
	
	function remove(arr, index, key) {
	    arr.splice(index, 1)
	
	    return {
	        from: index,
	        key: key
	    }
	}
	
	function keyIndex(children) {
	    var keys = {}
	    var free = []
	    var length = children.length
	
	    for (var i = 0; i < length; i++) {
	        var child = children[i]
	
	        if (child.key) {
	            keys[child.key] = i
	        } else {
	            free.push(i)
	        }
	    }
	
	    return {
	        keys: keys,     // A hash of key name to index
	        free: free      // An array of unkeyed item indices
	    }
	}
	
	function appendPatch(apply, patch) {
	    if (apply) {
	        if (isArray(apply)) {
	            apply.push(patch)
	        } else {
	            apply = [apply, patch]
	        }
	
	        return apply
	    } else {
	        return patch
	    }
	}


/***/ },
/* 272 */
/***/ function(module, exports, __webpack_require__) {

	var hiddenStore = __webpack_require__(273);
	
	module.exports = createStore;
	
	function createStore() {
	    var key = {};
	
	    return function (obj) {
	        if ((typeof obj !== 'object' || obj === null) &&
	            typeof obj !== 'function'
	        ) {
	            throw new Error('Weakmap-shim: Key must be object')
	        }
	
	        var store = obj.valueOf(key);
	        return store && store.identity === key ?
	            store : hiddenStore(obj, key);
	    };
	}


/***/ },
/* 273 */
/***/ function(module, exports) {

	module.exports = hiddenStore;
	
	function hiddenStore(obj, key) {
	    var store = { identity: key };
	    var valueOf = obj.valueOf;
	
	    Object.defineProperty(obj, "valueOf", {
	        value: function (value) {
	            return value !== key ?
	                valueOf.apply(this, arguments) : store;
	        },
	        writable: true
	    });
	
	    return store;
	}


/***/ },
/* 274 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function() {
		return new Worker(__webpack_require__.p + "0056fde110c5de7b8153.worker.js");
	};

/***/ },
/* 275 */
/***/ function(module, exports) {

	/* (ignored) */

/***/ }
/******/ ]);
//# sourceMappingURL=mi-app.js.map