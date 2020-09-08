define("./workbox-8c6a447f.js",['exports'], function (exports) { 'use strict';

    try {
      self['workbox:core:5.1.3'] && _();
    } catch (e) {}

    /*
      Copyright 2019 Google LLC
      Use of this source code is governed by an MIT-style
      license that can be found in the LICENSE file or at
      https://opensource.org/licenses/MIT.
    */
    const logger =  (() => {
      // Don't overwrite this value if it's already set.
      // See https://github.com/GoogleChrome/workbox/pull/2284#issuecomment-560470923
      if (!('__WB_DISABLE_DEV_LOGS' in self)) {
        self.__WB_DISABLE_DEV_LOGS = false;
      }

      let inGroup = false;
      const methodToColorMap = {
        debug: `#7f8c8d`,
        log: `#2ecc71`,
        warn: `#f39c12`,
        error: `#c0392b`,
        groupCollapsed: `#3498db`,
        groupEnd: null
      };

      const print = function (method, args) {
        if (self.__WB_DISABLE_DEV_LOGS) {
          return;
        }

        if (method === 'groupCollapsed') {
          // Safari doesn't print all console.groupCollapsed() arguments:
          // https://bugs.webkit.org/show_bug.cgi?id=182754
          if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
            console[method](...args);
            return;
          }
        }

        const styles = [`background: ${methodToColorMap[method]}`, `border-radius: 0.5em`, `color: white`, `font-weight: bold`, `padding: 2px 0.5em`]; // When in a group, the workbox prefix is not displayed.

        const logPrefix = inGroup ? [] : ['%cworkbox', styles.join(';')];
        console[method](...logPrefix, ...args);

        if (method === 'groupCollapsed') {
          inGroup = true;
        }

        if (method === 'groupEnd') {
          inGroup = false;
        }
      };

      const api = {};
      const loggerMethods = Object.keys(methodToColorMap);

      for (const key of loggerMethods) {
        const method = key;

        api[method] = (...args) => {
          print(method, args);
        };
      }

      return api;
    })();

    /*
      Copyright 2018 Google LLC

      Use of this source code is governed by an MIT-style
      license that can be found in the LICENSE file or at
      https://opensource.org/licenses/MIT.
    */
    const messages = {
      'invalid-value': ({
        paramName,
        validValueDescription,
        value
      }) => {
        if (!paramName || !validValueDescription) {
          throw new Error(`Unexpected input to 'invalid-value' error.`);
        }

        return `The '${paramName}' parameter was given a value with an ` + `unexpected value. ${validValueDescription} Received a value of ` + `${JSON.stringify(value)}.`;
      },
      'not-an-array': ({
        moduleName,
        className,
        funcName,
        paramName
      }) => {
        if (!moduleName || !className || !funcName || !paramName) {
          throw new Error(`Unexpected input to 'not-an-array' error.`);
        }

        return `The parameter '${paramName}' passed into ` + `'${moduleName}.${className}.${funcName}()' must be an array.`;
      },
      'incorrect-type': ({
        expectedType,
        paramName,
        moduleName,
        className,
        funcName
      }) => {
        if (!expectedType || !paramName || !moduleName || !funcName) {
          throw new Error(`Unexpected input to 'incorrect-type' error.`);
        }

        return `The parameter '${paramName}' passed into ` + `'${moduleName}.${className ? className + '.' : ''}` + `${funcName}()' must be of type ${expectedType}.`;
      },
      'incorrect-class': ({
        expectedClass,
        paramName,
        moduleName,
        className,
        funcName,
        isReturnValueProblem
      }) => {
        if (!expectedClass || !moduleName || !funcName) {
          throw new Error(`Unexpected input to 'incorrect-class' error.`);
        }

        if (isReturnValueProblem) {
          return `The return value from ` + `'${moduleName}.${className ? className + '.' : ''}${funcName}()' ` + `must be an instance of class ${expectedClass.name}.`;
        }

        return `The parameter '${paramName}' passed into ` + `'${moduleName}.${className ? className + '.' : ''}${funcName}()' ` + `must be an instance of class ${expectedClass.name}.`;
      },
      'missing-a-method': ({
        expectedMethod,
        paramName,
        moduleName,
        className,
        funcName
      }) => {
        if (!expectedMethod || !paramName || !moduleName || !className || !funcName) {
          throw new Error(`Unexpected input to 'missing-a-method' error.`);
        }

        return `${moduleName}.${className}.${funcName}() expected the ` + `'${paramName}' parameter to expose a '${expectedMethod}' method.`;
      },
      'add-to-cache-list-unexpected-type': ({
        entry
      }) => {
        return `An unexpected entry was passed to ` + `'workbox-precaching.PrecacheController.addToCacheList()' The entry ` + `'${JSON.stringify(entry)}' isn't supported. You must supply an array of ` + `strings with one or more characters, objects with a url property or ` + `Request objects.`;
      },
      'add-to-cache-list-conflicting-entries': ({
        firstEntry,
        secondEntry
      }) => {
        if (!firstEntry || !secondEntry) {
          throw new Error(`Unexpected input to ` + `'add-to-cache-list-duplicate-entries' error.`);
        }

        return `Two of the entries passed to ` + `'workbox-precaching.PrecacheController.addToCacheList()' had the URL ` + `${firstEntry._entryId} but different revision details. Workbox is ` + `unable to cache and version the asset correctly. Please remove one ` + `of the entries.`;
      },
      'plugin-error-request-will-fetch': ({
        thrownError
      }) => {
        if (!thrownError) {
          throw new Error(`Unexpected input to ` + `'plugin-error-request-will-fetch', error.`);
        }

        return `An error was thrown by a plugins 'requestWillFetch()' method. ` + `The thrown error message was: '${thrownError.message}'.`;
      },
      'invalid-cache-name': ({
        cacheNameId,
        value
      }) => {
        if (!cacheNameId) {
          throw new Error(`Expected a 'cacheNameId' for error 'invalid-cache-name'`);
        }

        return `You must provide a name containing at least one character for ` + `setCacheDetails({${cacheNameId}: '...'}). Received a value of ` + `'${JSON.stringify(value)}'`;
      },
      'unregister-route-but-not-found-with-method': ({
        method
      }) => {
        if (!method) {
          throw new Error(`Unexpected input to ` + `'unregister-route-but-not-found-with-method' error.`);
        }

        return `The route you're trying to unregister was not  previously ` + `registered for the method type '${method}'.`;
      },
      'unregister-route-route-not-registered': () => {
        return `The route you're trying to unregister was not previously ` + `registered.`;
      },
      'queue-replay-failed': ({
        name
      }) => {
        return `Replaying the background sync queue '${name}' failed.`;
      },
      'duplicate-queue-name': ({
        name
      }) => {
        return `The Queue name '${name}' is already being used. ` + `All instances of backgroundSync.Queue must be given unique names.`;
      },
      'expired-test-without-max-age': ({
        methodName,
        paramName
      }) => {
        return `The '${methodName}()' method can only be used when the ` + `'${paramName}' is used in the constructor.`;
      },
      'unsupported-route-type': ({
        moduleName,
        className,
        funcName,
        paramName
      }) => {
        return `The supplied '${paramName}' parameter was an unsupported type. ` + `Please check the docs for ${moduleName}.${className}.${funcName} for ` + `valid input types.`;
      },
      'not-array-of-class': ({
        value,
        expectedClass,
        moduleName,
        className,
        funcName,
        paramName
      }) => {
        return `The supplied '${paramName}' parameter must be an array of ` + `'${expectedClass}' objects. Received '${JSON.stringify(value)},'. ` + `Please check the call to ${moduleName}.${className}.${funcName}() ` + `to fix the issue.`;
      },
      'max-entries-or-age-required': ({
        moduleName,
        className,
        funcName
      }) => {
        return `You must define either config.maxEntries or config.maxAgeSeconds` + `in ${moduleName}.${className}.${funcName}`;
      },
      'statuses-or-headers-required': ({
        moduleName,
        className,
        funcName
      }) => {
        return `You must define either config.statuses or config.headers` + `in ${moduleName}.${className}.${funcName}`;
      },
      'invalid-string': ({
        moduleName,
        funcName,
        paramName
      }) => {
        if (!paramName || !moduleName || !funcName) {
          throw new Error(`Unexpected input to 'invalid-string' error.`);
        }

        return `When using strings, the '${paramName}' parameter must start with ` + `'http' (for cross-origin matches) or '/' (for same-origin matches). ` + `Please see the docs for ${moduleName}.${funcName}() for ` + `more info.`;
      },
      'channel-name-required': () => {
        return `You must provide a channelName to construct a ` + `BroadcastCacheUpdate instance.`;
      },
      'invalid-responses-are-same-args': () => {
        return `The arguments passed into responsesAreSame() appear to be ` + `invalid. Please ensure valid Responses are used.`;
      },
      'expire-custom-caches-only': () => {
        return `You must provide a 'cacheName' property when using the ` + `expiration plugin with a runtime caching strategy.`;
      },
      'unit-must-be-bytes': ({
        normalizedRangeHeader
      }) => {
        if (!normalizedRangeHeader) {
          throw new Error(`Unexpected input to 'unit-must-be-bytes' error.`);
        }

        return `The 'unit' portion of the Range header must be set to 'bytes'. ` + `The Range header provided was "${normalizedRangeHeader}"`;
      },
      'single-range-only': ({
        normalizedRangeHeader
      }) => {
        if (!normalizedRangeHeader) {
          throw new Error(`Unexpected input to 'single-range-only' error.`);
        }

        return `Multiple ranges are not supported. Please use a  single start ` + `value, and optional end value. The Range header provided was ` + `"${normalizedRangeHeader}"`;
      },
      'invalid-range-values': ({
        normalizedRangeHeader
      }) => {
        if (!normalizedRangeHeader) {
          throw new Error(`Unexpected input to 'invalid-range-values' error.`);
        }

        return `The Range header is missing both start and end values. At least ` + `one of those values is needed. The Range header provided was ` + `"${normalizedRangeHeader}"`;
      },
      'no-range-header': () => {
        return `No Range header was found in the Request provided.`;
      },
      'range-not-satisfiable': ({
        size,
        start,
        end
      }) => {
        return `The start (${start}) and end (${end}) values in the Range are ` + `not satisfiable by the cached response, which is ${size} bytes.`;
      },
      'attempt-to-cache-non-get-request': ({
        url,
        method
      }) => {
        return `Unable to cache '${url}' because it is a '${method}' request and ` + `only 'GET' requests can be cached.`;
      },
      'cache-put-with-no-response': ({
        url
      }) => {
        return `There was an attempt to cache '${url}' but the response was not ` + `defined.`;
      },
      'no-response': ({
        url,
        error
      }) => {
        let message = `The strategy could not generate a response for '${url}'.`;

        if (error) {
          message += ` The underlying error is ${error}.`;
        }

        return message;
      },
      'bad-precaching-response': ({
        url,
        status
      }) => {
        return `The precaching request for '${url}' failed with an HTTP ` + `status of ${status}.`;
      },
      'non-precached-url': ({
        url
      }) => {
        return `createHandlerBoundToURL('${url}') was called, but that URL is ` + `not precached. Please pass in a URL that is precached instead.`;
      },
      'add-to-cache-list-conflicting-integrities': ({
        url
      }) => {
        return `Two of the entries passed to ` + `'workbox-precaching.PrecacheController.addToCacheList()' had the URL ` + `${url} with different integrity values. Please remove one of them.`;
      },
      'missing-precache-entry': ({
        cacheName,
        url
      }) => {
        return `Unable to find a precached response in ${cacheName} for ${url}.`;
      }
    };

    /*
      Copyright 2018 Google LLC

      Use of this source code is governed by an MIT-style
      license that can be found in the LICENSE file or at
      https://opensource.org/licenses/MIT.
    */

    const generatorFunction = (code, details = {}) => {
      const message = messages[code];

      if (!message) {
        throw new Error(`Unable to find message for code '${code}'.`);
      }

      return message(details);
    };

    const messageGenerator =  generatorFunction;

    /*
      Copyright 2018 Google LLC

      Use of this source code is governed by an MIT-style
      license that can be found in the LICENSE file or at
      https://opensource.org/licenses/MIT.
    */
    /**
     * Workbox errors should be thrown with this class.
     * This allows use to ensure the type easily in tests,
     * helps developers identify errors from workbox
     * easily and allows use to optimise error
     * messages correctly.
     *
     * @private
     */

    class WorkboxError extends Error {
      /**
       *
       * @param {string} errorCode The error code that
       * identifies this particular error.
       * @param {Object=} details Any relevant arguments
       * that will help developers identify issues should
       * be added as a key on the context object.
       */
      constructor(errorCode, details) {
        const message = messageGenerator(errorCode, details);
        super(message);
        this.name = errorCode;
        this.details = details;
      }

    }

    /*
      Copyright 2018 Google LLC

      Use of this source code is governed by an MIT-style
      license that can be found in the LICENSE file or at
      https://opensource.org/licenses/MIT.
    */
    /*
     * This method throws if the supplied value is not an array.
     * The destructed values are required to produce a meaningful error for users.
     * The destructed and restructured object is so it's clear what is
     * needed.
     */

    const isArray = (value, details) => {
      if (!Array.isArray(value)) {
        throw new WorkboxError('not-an-array', details);
      }
    };

    const hasMethod = (object, expectedMethod, details) => {
      const type = typeof object[expectedMethod];

      if (type !== 'function') {
        details['expectedMethod'] = expectedMethod;
        throw new WorkboxError('missing-a-method', details);
      }
    };

    const isType = (object, expectedType, details) => {
      if (typeof object !== expectedType) {
        details['expectedType'] = expectedType;
        throw new WorkboxError('incorrect-type', details);
      }
    };

    const isInstance = (object, expectedClass, details) => {
      if (!(object instanceof expectedClass)) {
        details['expectedClass'] = expectedClass;
        throw new WorkboxError('incorrect-class', details);
      }
    };

    const isOneOf = (value, validValues, details) => {
      if (!validValues.includes(value)) {
        details['validValueDescription'] = `Valid values are ${JSON.stringify(validValues)}.`;
        throw new WorkboxError('invalid-value', details);
      }
    };

    const isArrayOfClass = (value, expectedClass, details) => {
      const error = new WorkboxError('not-array-of-class', details);

      if (!Array.isArray(value)) {
        throw error;
      }

      for (const item of value) {
        if (!(item instanceof expectedClass)) {
          throw error;
        }
      }
    };

    const finalAssertExports =  {
      hasMethod,
      isArray,
      isInstance,
      isOneOf,
      isType,
      isArrayOfClass
    };

    try {
      self['workbox:routing:5.1.3'] && _();
    } catch (e) {}

    /*
      Copyright 2018 Google LLC

      Use of this source code is governed by an MIT-style
      license that can be found in the LICENSE file or at
      https://opensource.org/licenses/MIT.
    */
    /**
     * The default HTTP method, 'GET', used when there's no specific method
     * configured for a route.
     *
     * @type {string}
     *
     * @private
     */

    const defaultMethod = 'GET';
    /**
     * The list of valid HTTP methods associated with requests that could be routed.
     *
     * @type {Array<string>}
     *
     * @private
     */

    const validMethods = ['DELETE', 'GET', 'HEAD', 'PATCH', 'POST', 'PUT'];

    /*
      Copyright 2018 Google LLC

      Use of this source code is governed by an MIT-style
      license that can be found in the LICENSE file or at
      https://opensource.org/licenses/MIT.
    */
    /**
     * @param {function()|Object} handler Either a function, or an object with a
     * 'handle' method.
     * @return {Object} An object with a handle method.
     *
     * @private
     */

    const normalizeHandler = handler => {
      if (handler && typeof handler === 'object') {
        {
          finalAssertExports.hasMethod(handler, 'handle', {
            moduleName: 'workbox-routing',
            className: 'Route',
            funcName: 'constructor',
            paramName: 'handler'
          });
        }

        return handler;
      } else {
        {
          finalAssertExports.isType(handler, 'function', {
            moduleName: 'workbox-routing',
            className: 'Route',
            funcName: 'constructor',
            paramName: 'handler'
          });
        }

        return {
          handle: handler
        };
      }
    };

    /*
      Copyright 2018 Google LLC

      Use of this source code is governed by an MIT-style
      license that can be found in the LICENSE file or at
      https://opensource.org/licenses/MIT.
    */
    /**
     * A `Route` consists of a pair of callback functions, "match" and "handler".
     * The "match" callback determine if a route should be used to "handle" a
     * request by returning a non-falsy value if it can. The "handler" callback
     * is called when there is a match and should return a Promise that resolves
     * to a `Response`.
     *
     * @memberof module:workbox-routing
     */

    class Route {
      /**
       * Constructor for Route class.
       *
       * @param {module:workbox-routing~matchCallback} match
       * A callback function that determines whether the route matches a given
       * `fetch` event by returning a non-falsy value.
       * @param {module:workbox-routing~handlerCallback} handler A callback
       * function that returns a Promise resolving to a Response.
       * @param {string} [method='GET'] The HTTP method to match the Route
       * against.
       */
      constructor(match, handler, method = defaultMethod) {
        {
          finalAssertExports.isType(match, 'function', {
            moduleName: 'workbox-routing',
            className: 'Route',
            funcName: 'constructor',
            paramName: 'match'
          });

          if (method) {
            finalAssertExports.isOneOf(method, validMethods, {
              paramName: 'method'
            });
          }
        } // These values are referenced directly by Router so cannot be
        // altered by minificaton.


        this.handler = normalizeHandler(handler);
        this.match = match;
        this.method = method;
      }

    }

    /*
      Copyright 2018 Google LLC

      Use of this source code is governed by an MIT-style
      license that can be found in the LICENSE file or at
      https://opensource.org/licenses/MIT.
    */
    /**
     * RegExpRoute makes it easy to create a regular expression based
     * [Route]{@link module:workbox-routing.Route}.
     *
     * For same-origin requests the RegExp only needs to match part of the URL. For
     * requests against third-party servers, you must define a RegExp that matches
     * the start of the URL.
     *
     * [See the module docs for info.]{@link https://developers.google.com/web/tools/workbox/modules/workbox-routing}
     *
     * @memberof module:workbox-routing
     * @extends module:workbox-routing.Route
     */

    class RegExpRoute extends Route {
      /**
       * If the regular expression contains
       * [capture groups]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp#grouping-back-references},
       * the captured values will be passed to the
       * [handler's]{@link module:workbox-routing~handlerCallback} `params`
       * argument.
       *
       * @param {RegExp} regExp The regular expression to match against URLs.
       * @param {module:workbox-routing~handlerCallback} handler A callback
       * function that returns a Promise resulting in a Response.
       * @param {string} [method='GET'] The HTTP method to match the Route
       * against.
       */
      constructor(regExp, handler, method) {
        {
          finalAssertExports.isInstance(regExp, RegExp, {
            moduleName: 'workbox-routing',
            className: 'RegExpRoute',
            funcName: 'constructor',
            paramName: 'pattern'
          });
        }

        const match = ({
          url
        }) => {
          const result = regExp.exec(url.href); // Return immediately if there's no match.

          if (!result) {
            return;
          } // Require that the match start at the first character in the URL string
          // if it's a cross-origin request.
          // See https://github.com/GoogleChrome/workbox/issues/281 for the context
          // behind this behavior.


          if (url.origin !== location.origin && result.index !== 0) {
            {
              logger.debug(`The regular expression '${regExp}' only partially matched ` + `against the cross-origin URL '${url}'. RegExpRoute's will only ` + `handle cross-origin requests if they match the entire URL.`);
            }

            return;
          } // If the route matches, but there aren't any capture groups defined, then
          // this will return [], which is truthy and therefore sufficient to
          // indicate a match.
          // If there are capture groups, then it will return their values.


          return result.slice(1);
        };

        super(match, handler, method);
      }

    }

    /*
      Copyright 2018 Google LLC

      Use of this source code is governed by an MIT-style
      license that can be found in the LICENSE file or at
      https://opensource.org/licenses/MIT.
    */

    const getFriendlyURL = url => {
      const urlObj = new URL(String(url), location.href); // See https://github.com/GoogleChrome/workbox/issues/2323
      // We want to include everything, except for the origin if it's same-origin.

      return urlObj.href.replace(new RegExp(`^${location.origin}`), '');
    };

    /*
      Copyright 2018 Google LLC

      Use of this source code is governed by an MIT-style
      license that can be found in the LICENSE file or at
      https://opensource.org/licenses/MIT.
    */
    /**
     * The Router can be used to process a FetchEvent through one or more
     * [Routes]{@link module:workbox-routing.Route} responding  with a Request if
     * a matching route exists.
     *
     * If no route matches a given a request, the Router will use a "default"
     * handler if one is defined.
     *
     * Should the matching Route throw an error, the Router will use a "catch"
     * handler if one is defined to gracefully deal with issues and respond with a
     * Request.
     *
     * If a request matches multiple routes, the **earliest** registered route will
     * be used to respond to the request.
     *
     * @memberof module:workbox-routing
     */

    class Router {
      /**
       * Initializes a new Router.
       */
      constructor() {
        this._routes = new Map();
      }
      /**
       * @return {Map<string, Array<module:workbox-routing.Route>>} routes A `Map` of HTTP
       * method name ('GET', etc.) to an array of all the corresponding `Route`
       * instances that are registered.
       */


      get routes() {
        return this._routes;
      }
      /**
       * Adds a fetch event listener to respond to events when a route matches
       * the event's request.
       */


      addFetchListener() {
        // See https://github.com/Microsoft/TypeScript/issues/28357#issuecomment-436484705
        self.addEventListener('fetch', event => {
          const {
            request
          } = event;
          const responsePromise = this.handleRequest({
            request,
            event
          });

          if (responsePromise) {
            event.respondWith(responsePromise);
          }
        });
      }
      /**
       * Adds a message event listener for URLs to cache from the window.
       * This is useful to cache resources loaded on the page prior to when the
       * service worker started controlling it.
       *
       * The format of the message data sent from the window should be as follows.
       * Where the `urlsToCache` array may consist of URL strings or an array of
       * URL string + `requestInit` object (the same as you'd pass to `fetch()`).
       *
       * ```
       * {
       *   type: 'CACHE_URLS',
       *   payload: {
       *     urlsToCache: [
       *       './script1.js',
       *       './script2.js',
       *       ['./script3.js', {mode: 'no-cors'}],
       *     ],
       *   },
       * }
       * ```
       */


      addCacheListener() {
        // See https://github.com/Microsoft/TypeScript/issues/28357#issuecomment-436484705
        self.addEventListener('message', event => {
          if (event.data && event.data.type === 'CACHE_URLS') {
            const {
              payload
            } = event.data;

            {
              logger.debug(`Caching URLs from the window`, payload.urlsToCache);
            }

            const requestPromises = Promise.all(payload.urlsToCache.map(entry => {
              if (typeof entry === 'string') {
                entry = [entry];
              }

              const request = new Request(...entry);
              return this.handleRequest({
                request
              }); // TODO(philipwalton): TypeScript errors without this typecast for
              // some reason (probably a bug). The real type here should work but
              // doesn't: `Array<Promise<Response> | undefined>`.
            })); // TypeScript

            event.waitUntil(requestPromises); // If a MessageChannel was used, reply to the message on success.

            if (event.ports && event.ports[0]) {
              requestPromises.then(() => event.ports[0].postMessage(true));
            }
          }
        });
      }
      /**
       * Apply the routing rules to a FetchEvent object to get a Response from an
       * appropriate Route's handler.
       *
       * @param {Object} options
       * @param {Request} options.request The request to handle (this is usually
       *     from a fetch event, but it does not have to be).
       * @param {FetchEvent} [options.event] The event that triggered the request,
       *     if applicable.
       * @return {Promise<Response>|undefined} A promise is returned if a
       *     registered route can handle the request. If there is no matching
       *     route and there's no `defaultHandler`, `undefined` is returned.
       */


      handleRequest({
        request,
        event
      }) {
        {
          finalAssertExports.isInstance(request, Request, {
            moduleName: 'workbox-routing',
            className: 'Router',
            funcName: 'handleRequest',
            paramName: 'options.request'
          });
        }

        const url = new URL(request.url, location.href);

        if (!url.protocol.startsWith('http')) {
          {
            logger.debug(`Workbox Router only supports URLs that start with 'http'.`);
          }

          return;
        }

        const {
          params,
          route
        } = this.findMatchingRoute({
          url,
          request,
          event
        });
        let handler = route && route.handler;
        const debugMessages = [];

        {
          if (handler) {
            debugMessages.push([`Found a route to handle this request:`, route]);

            if (params) {
              debugMessages.push([`Passing the following params to the route's handler:`, params]);
            }
          }
        } // If we don't have a handler because there was no matching route, then
        // fall back to defaultHandler if that's defined.


        if (!handler && this._defaultHandler) {
          {
            debugMessages.push(`Failed to find a matching route. Falling ` + `back to the default handler.`);
          }

          handler = this._defaultHandler;
        }

        if (!handler) {
          {
            // No handler so Workbox will do nothing. If logs is set of debug
            // i.e. verbose, we should print out this information.
            logger.debug(`No route found for: ${getFriendlyURL(url)}`);
          }

          return;
        }

        {
          // We have a handler, meaning Workbox is going to handle the route.
          // print the routing details to the console.
          logger.groupCollapsed(`Router is responding to: ${getFriendlyURL(url)}`);
          debugMessages.forEach(msg => {
            if (Array.isArray(msg)) {
              logger.log(...msg);
            } else {
              logger.log(msg);
            }
          });
          logger.groupEnd();
        } // Wrap in try and catch in case the handle method throws a synchronous
        // error. It should still callback to the catch handler.


        let responsePromise;

        try {
          responsePromise = handler.handle({
            url,
            request,
            event,
            params
          });
        } catch (err) {
          responsePromise = Promise.reject(err);
        }

        if (responsePromise instanceof Promise && this._catchHandler) {
          responsePromise = responsePromise.catch(err => {
            {
              // Still include URL here as it will be async from the console group
              // and may not make sense without the URL
              logger.groupCollapsed(`Error thrown when responding to: ` + ` ${getFriendlyURL(url)}. Falling back to Catch Handler.`);
              logger.error(`Error thrown by:`, route);
              logger.error(err);
              logger.groupEnd();
            }

            return this._catchHandler.handle({
              url,
              request,
              event
            });
          });
        }

        return responsePromise;
      }
      /**
       * Checks a request and URL (and optionally an event) against the list of
       * registered routes, and if there's a match, returns the corresponding
       * route along with any params generated by the match.
       *
       * @param {Object} options
       * @param {URL} options.url
       * @param {Request} options.request The request to match.
       * @param {Event} [options.event] The corresponding event (unless N/A).
       * @return {Object} An object with `route` and `params` properties.
       *     They are populated if a matching route was found or `undefined`
       *     otherwise.
       */


      findMatchingRoute({
        url,
        request,
        event
      }) {
        {
          finalAssertExports.isInstance(url, URL, {
            moduleName: 'workbox-routing',
            className: 'Router',
            funcName: 'findMatchingRoute',
            paramName: 'options.url'
          });
          finalAssertExports.isInstance(request, Request, {
            moduleName: 'workbox-routing',
            className: 'Router',
            funcName: 'findMatchingRoute',
            paramName: 'options.request'
          });
        }

        const routes = this._routes.get(request.method) || [];

        for (const route of routes) {
          let params;
          const matchResult = route.match({
            url,
            request,
            event
          });

          if (matchResult) {
            // See https://github.com/GoogleChrome/workbox/issues/2079
            params = matchResult;

            if (Array.isArray(matchResult) && matchResult.length === 0) {
              // Instead of passing an empty array in as params, use undefined.
              params = undefined;
            } else if (matchResult.constructor === Object && Object.keys(matchResult).length === 0) {
              // Instead of passing an empty object in as params, use undefined.
              params = undefined;
            } else if (typeof matchResult === 'boolean') {
              // For the boolean value true (rather than just something truth-y),
              // don't set params.
              // See https://github.com/GoogleChrome/workbox/pull/2134#issuecomment-513924353
              params = undefined;
            } // Return early if have a match.


            return {
              route,
              params
            };
          }
        } // If no match was found above, return and empty object.


        return {};
      }
      /**
       * Define a default `handler` that's called when no routes explicitly
       * match the incoming request.
       *
       * Without a default handler, unmatched requests will go against the
       * network as if there were no service worker present.
       *
       * @param {module:workbox-routing~handlerCallback} handler A callback
       * function that returns a Promise resulting in a Response.
       */


      setDefaultHandler(handler) {
        this._defaultHandler = normalizeHandler(handler);
      }
      /**
       * If a Route throws an error while handling a request, this `handler`
       * will be called and given a chance to provide a response.
       *
       * @param {module:workbox-routing~handlerCallback} handler A callback
       * function that returns a Promise resulting in a Response.
       */


      setCatchHandler(handler) {
        this._catchHandler = normalizeHandler(handler);
      }
      /**
       * Registers a route with the router.
       *
       * @param {module:workbox-routing.Route} route The route to register.
       */


      registerRoute(route) {
        {
          finalAssertExports.isType(route, 'object', {
            moduleName: 'workbox-routing',
            className: 'Router',
            funcName: 'registerRoute',
            paramName: 'route'
          });
          finalAssertExports.hasMethod(route, 'match', {
            moduleName: 'workbox-routing',
            className: 'Router',
            funcName: 'registerRoute',
            paramName: 'route'
          });
          finalAssertExports.isType(route.handler, 'object', {
            moduleName: 'workbox-routing',
            className: 'Router',
            funcName: 'registerRoute',
            paramName: 'route'
          });
          finalAssertExports.hasMethod(route.handler, 'handle', {
            moduleName: 'workbox-routing',
            className: 'Router',
            funcName: 'registerRoute',
            paramName: 'route.handler'
          });
          finalAssertExports.isType(route.method, 'string', {
            moduleName: 'workbox-routing',
            className: 'Router',
            funcName: 'registerRoute',
            paramName: 'route.method'
          });
        }

        if (!this._routes.has(route.method)) {
          this._routes.set(route.method, []);
        } // Give precedence to all of the earlier routes by adding this additional
        // route to the end of the array.


        this._routes.get(route.method).push(route);
      }
      /**
       * Unregisters a route with the router.
       *
       * @param {module:workbox-routing.Route} route The route to unregister.
       */


      unregisterRoute(route) {
        if (!this._routes.has(route.method)) {
          throw new WorkboxError('unregister-route-but-not-found-with-method', {
            method: route.method
          });
        }

        const routeIndex = this._routes.get(route.method).indexOf(route);

        if (routeIndex > -1) {
          this._routes.get(route.method).splice(routeIndex, 1);
        } else {
          throw new WorkboxError('unregister-route-route-not-registered');
        }
      }

    }

    /*
      Copyright 2019 Google LLC

      Use of this source code is governed by an MIT-style
      license that can be found in the LICENSE file or at
      https://opensource.org/licenses/MIT.
    */
    let defaultRouter;
    /**
     * Creates a new, singleton Router instance if one does not exist. If one
     * does already exist, that instance is returned.
     *
     * @private
     * @return {Router}
     */

    const getOrCreateDefaultRouter = () => {
      if (!defaultRouter) {
        defaultRouter = new Router(); // The helpers that use the default Router assume these listeners exist.

        defaultRouter.addFetchListener();
        defaultRouter.addCacheListener();
      }

      return defaultRouter;
    };

    /*
      Copyright 2019 Google LLC

      Use of this source code is governed by an MIT-style
      license that can be found in the LICENSE file or at
      https://opensource.org/licenses/MIT.
    */
    /**
     * Easily register a RegExp, string, or function with a caching
     * strategy to a singleton Router instance.
     *
     * This method will generate a Route for you if needed and
     * call [registerRoute()]{@link module:workbox-routing.Router#registerRoute}.
     *
     * @param {RegExp|string|module:workbox-routing.Route~matchCallback|module:workbox-routing.Route} capture
     * If the capture param is a `Route`, all other arguments will be ignored.
     * @param {module:workbox-routing~handlerCallback} [handler] A callback
     * function that returns a Promise resulting in a Response. This parameter
     * is required if `capture` is not a `Route` object.
     * @param {string} [method='GET'] The HTTP method to match the Route
     * against.
     * @return {module:workbox-routing.Route} The generated `Route`(Useful for
     * unregistering).
     *
     * @memberof module:workbox-routing
     */

    function registerRoute(capture, handler, method) {
      let route;

      if (typeof capture === 'string') {
        const captureUrl = new URL(capture, location.href);

        {
          if (!(capture.startsWith('/') || capture.startsWith('http'))) {
            throw new WorkboxError('invalid-string', {
              moduleName: 'workbox-routing',
              funcName: 'registerRoute',
              paramName: 'capture'
            });
          } // We want to check if Express-style wildcards are in the pathname only.
          // TODO: Remove this log message in v4.


          const valueToCheck = capture.startsWith('http') ? captureUrl.pathname : capture; // See https://github.com/pillarjs/path-to-regexp#parameters

          const wildcards = '[*:?+]';

          if (new RegExp(`${wildcards}`).exec(valueToCheck)) {
            logger.debug(`The '$capture' parameter contains an Express-style wildcard ` + `character (${wildcards}). Strings are now always interpreted as ` + `exact matches; use a RegExp for partial or wildcard matches.`);
          }
        }

        const matchCallback = ({
          url
        }) => {
          {
            if (url.pathname === captureUrl.pathname && url.origin !== captureUrl.origin) {
              logger.debug(`${capture} only partially matches the cross-origin URL ` + `${url}. This route will only handle cross-origin requests ` + `if they match the entire URL.`);
            }
          }

          return url.href === captureUrl.href;
        }; // If `capture` is a string then `handler` and `method` must be present.


        route = new Route(matchCallback, handler, method);
      } else if (capture instanceof RegExp) {
        // If `capture` is a `RegExp` then `handler` and `method` must be present.
        route = new RegExpRoute(capture, handler, method);
      } else if (typeof capture === 'function') {
        // If `capture` is a function then `handler` and `method` must be present.
        route = new Route(capture, handler, method);
      } else if (capture instanceof Route) {
        route = capture;
      } else {
        throw new WorkboxError('unsupported-route-type', {
          moduleName: 'workbox-routing',
          funcName: 'registerRoute',
          paramName: 'capture'
        });
      }

      const defaultRouter = getOrCreateDefaultRouter();
      defaultRouter.registerRoute(route);
      return route;
    }

    /*
      Copyright 2018 Google LLC

      Use of this source code is governed by an MIT-style
      license that can be found in the LICENSE file or at
      https://opensource.org/licenses/MIT.
    */
    const pluginUtils = {
      filter: (plugins, callbackName) => {
        return plugins.filter(plugin => callbackName in plugin);
      }
    };

    /*
      Copyright 2018 Google LLC

      Use of this source code is governed by an MIT-style
      license that can be found in the LICENSE file or at
      https://opensource.org/licenses/MIT.
    */
    /**
     * Wrapper around the fetch API.
     *
     * Will call requestWillFetch on available plugins.
     *
     * @param {Object} options
     * @param {Request|string} options.request
     * @param {Object} [options.fetchOptions]
     * @param {ExtendableEvent} [options.event]
     * @param {Array<Object>} [options.plugins=[]]
     * @return {Promise<Response>}
     *
     * @private
     * @memberof module:workbox-core
     */

    const wrappedFetch = async ({
      request,
      fetchOptions,
      event,
      plugins = []
    }) => {
      if (typeof request === 'string') {
        request = new Request(request);
      } // We *should* be able to call `await event.preloadResponse` even if it's
      // undefined, but for some reason, doing so leads to errors in our Node unit
      // tests. To work around that, explicitly check preloadResponse's value first.


      if (event instanceof FetchEvent && event.preloadResponse) {
        const possiblePreloadResponse = await event.preloadResponse;

        if (possiblePreloadResponse) {
          {
            logger.log(`Using a preloaded navigation response for ` + `'${getFriendlyURL(request.url)}'`);
          }

          return possiblePreloadResponse;
        }
      }

      {
        finalAssertExports.isInstance(request, Request, {
          paramName: 'request',
          expectedClass: Request,
          moduleName: 'workbox-core',
          className: 'fetchWrapper',
          funcName: 'wrappedFetch'
        });
      }

      const failedFetchPlugins = pluginUtils.filter(plugins, "fetchDidFail"
      /* FETCH_DID_FAIL */
      ); // If there is a fetchDidFail plugin, we need to save a clone of the
      // original request before it's either modified by a requestWillFetch
      // plugin or before the original request's body is consumed via fetch().

      const originalRequest = failedFetchPlugins.length > 0 ? request.clone() : null;

      try {
        for (const plugin of plugins) {
          if ("requestWillFetch"
          /* REQUEST_WILL_FETCH */
          in plugin) {
            const pluginMethod = plugin["requestWillFetch"
            /* REQUEST_WILL_FETCH */
            ];
            const requestClone = request.clone();
            request = await pluginMethod.call(plugin, {
              request: requestClone,
              event
            });

            if ("development" !== 'production') {
              if (request) {
                finalAssertExports.isInstance(request, Request, {
                  moduleName: 'Plugin',
                  funcName: "cachedResponseWillBeUsed"
                  /* CACHED_RESPONSE_WILL_BE_USED */
                  ,
                  isReturnValueProblem: true
                });
              }
            }
          }
        }
      } catch (err) {
        throw new WorkboxError('plugin-error-request-will-fetch', {
          thrownError: err
        });
      } // The request can be altered by plugins with `requestWillFetch` making
      // the original request (Most likely from a `fetch` event) to be different
      // to the Request we make. Pass both to `fetchDidFail` to aid debugging.


      const pluginFilteredRequest = request.clone();

      try {
        let fetchResponse; // See https://github.com/GoogleChrome/workbox/issues/1796

        if (request.mode === 'navigate') {
          fetchResponse = await fetch(request);
        } else {
          fetchResponse = await fetch(request, fetchOptions);
        }

        if ("development" !== 'production') {
          logger.debug(`Network request for ` + `'${getFriendlyURL(request.url)}' returned a response with ` + `status '${fetchResponse.status}'.`);
        }

        for (const plugin of plugins) {
          if ("fetchDidSucceed"
          /* FETCH_DID_SUCCEED */
          in plugin) {
            fetchResponse = await plugin["fetchDidSucceed"
            /* FETCH_DID_SUCCEED */
            ].call(plugin, {
              event,
              request: pluginFilteredRequest,
              response: fetchResponse
            });

            if ("development" !== 'production') {
              if (fetchResponse) {
                finalAssertExports.isInstance(fetchResponse, Response, {
                  moduleName: 'Plugin',
                  funcName: "fetchDidSucceed"
                  /* FETCH_DID_SUCCEED */
                  ,
                  isReturnValueProblem: true
                });
              }
            }
          }
        }

        return fetchResponse;
      } catch (error) {
        {
          logger.error(`Network request for ` + `'${getFriendlyURL(request.url)}' threw an error.`, error);
        }

        for (const plugin of failedFetchPlugins) {
          await plugin["fetchDidFail"
          /* FETCH_DID_FAIL */
          ].call(plugin, {
            error,
            event,
            originalRequest: originalRequest.clone(),
            request: pluginFilteredRequest.clone()
          });
        }

        throw error;
      }
    };

    const fetchWrapper = {
      fetch: wrappedFetch
    };

    try {
      self['workbox:strategies:5.1.3'] && _();
    } catch (e) {}

    /*
      Copyright 2018 Google LLC

      Use of this source code is governed by an MIT-style
      license that can be found in the LICENSE file or at
      https://opensource.org/licenses/MIT.
    */
    const messages$1 = {
      strategyStart: (strategyName, request) => `Using ${strategyName} to respond to '${getFriendlyURL(request.url)}'`,
      printFinalResponse: response => {
        if (response) {
          logger.groupCollapsed(`View the final response here.`);
          logger.log(response || '[No response returned]');
          logger.groupEnd();
        }
      }
    };

    /*
      Copyright 2018 Google LLC

      Use of this source code is governed by an MIT-style
      license that can be found in the LICENSE file or at
      https://opensource.org/licenses/MIT.
    */
    /**
     * An implementation of a
     * [network-only]{@link https://developers.google.com/web/fundamentals/instant-and-offline/offline-cookbook/#network-only}
     * request strategy.
     *
     * This class is useful if you want to take advantage of any
     * [Workbox plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}.
     *
     * If the network request fails, this will throw a `WorkboxError` exception.
     *
     * @memberof module:workbox-strategies
     */

    class NetworkOnly {
      /**
       * @param {Object} options
       * @param {string} options.cacheName Cache name to store and retrieve
       * requests. Defaults to cache names provided by
       * [workbox-core]{@link module:workbox-core.cacheNames}.
       * @param {Array<Object>} options.plugins [Plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}
       * to use in conjunction with this caching strategy.
       * @param {Object} options.fetchOptions Values passed along to the
       * [`init`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters)
       * of all fetch() requests made by this strategy.
       */
      constructor(options = {}) {
        this._plugins = options.plugins || [];
        this._fetchOptions = options.fetchOptions;
      }
      /**
       * This method will perform a request strategy and follows an API that
       * will work with the
       * [Workbox Router]{@link module:workbox-routing.Router}.
       *
       * @param {Object} options
       * @param {Request|string} options.request The request to run this strategy for.
       * @param {Event} [options.event] The event that triggered the request.
       * @return {Promise<Response>}
       */


      async handle({
        event,
        request
      }) {
        if (typeof request === 'string') {
          request = new Request(request);
        }

        {
          finalAssertExports.isInstance(request, Request, {
            moduleName: 'workbox-strategies',
            className: 'NetworkOnly',
            funcName: 'handle',
            paramName: 'request'
          });
        }

        let error;
        let response;

        try {
          response = await fetchWrapper.fetch({
            request,
            event,
            fetchOptions: this._fetchOptions,
            plugins: this._plugins
          });
        } catch (err) {
          error = err;
        }

        {
          logger.groupCollapsed(messages$1.strategyStart('NetworkOnly', request));

          if (response) {
            logger.log(`Got response from network.`);
          } else {
            logger.log(`Unable to get a response from the network.`);
          }

          messages$1.printFinalResponse(response);
          logger.groupEnd();
        }

        if (!response) {
          throw new WorkboxError('no-response', {
            url: request.url,
            error
          });
        }

        return response;
      }

    }

    /*
      Copyright 2019 Google LLC

      Use of this source code is governed by an MIT-style
      license that can be found in the LICENSE file or at
      https://opensource.org/licenses/MIT.
    */
    /**
     * Force a service worker to activate immediately, instead of
     * [waiting](https://developers.google.com/web/fundamentals/primers/service-workers/lifecycle#waiting)
     * for existing clients to close.
     *
     * @memberof module:workbox-core
     */

    function skipWaiting() {
      // We need to explicitly call `self.skipWaiting()` here because we're
      // shadowing `skipWaiting` with this local function.
      self.addEventListener('install', () => self.skipWaiting());
    }

    /*
      Copyright 2019 Google LLC

      Use of this source code is governed by an MIT-style
      license that can be found in the LICENSE file or at
      https://opensource.org/licenses/MIT.
    */
    /**
     * Claim any currently available clients once the service worker
     * becomes active. This is normally used in conjunction with `skipWaiting()`.
     *
     * @memberof module:workbox-core
     */

    function clientsClaim() {
      self.addEventListener('activate', () => self.clients.claim());
    }

    exports.NetworkOnly = NetworkOnly;
    exports.clientsClaim = clientsClaim;
    exports.registerRoute = registerRoute;
    exports.skipWaiting = skipWaiting;

});
//# sourceMappingURL=workbox-8c6a447f.js.map
