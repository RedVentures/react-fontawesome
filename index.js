(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@fortawesome/fontawesome-svg-core'), require('prop-types'), require('react')) :
	typeof define === 'function' && define.amd ? define(['exports', '@fortawesome/fontawesome-svg-core', 'prop-types', 'react'], factory) :
	(factory((global['react-fontawesome'] = {}),global.FontAwesome,global.PropTypes,global.React));
}(this, (function (exports,fontawesomeSvgCore,PropTypes,React) { 'use strict';

	PropTypes = PropTypes && PropTypes.hasOwnProperty('default') ? PropTypes['default'] : PropTypes;
	React = React && React.hasOwnProperty('default') ? React['default'] : React;

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	var humps = createCommonjsModule(function (module) {
	(function(global) {

	  var _processKeys = function(convert, obj, options) {
	    if(!_isObject(obj) || _isDate(obj) || _isRegExp(obj) || _isBoolean(obj) || _isFunction(obj)) {
	      return obj;
	    }

	    var output,
	        i = 0,
	        l = 0;

	    if(_isArray(obj)) {
	      output = [];
	      for(l=obj.length; i<l; i++) {
	        output.push(_processKeys(convert, obj[i], options));
	      }
	    }
	    else {
	      output = {};
	      for(var key in obj) {
	        if(Object.prototype.hasOwnProperty.call(obj, key)) {
	          output[convert(key, options)] = _processKeys(convert, obj[key], options);
	        }
	      }
	    }
	    return output;
	  };

	  // String conversion methods

	  var separateWords = function(string, options) {
	    options = options || {};
	    var separator = options.separator || '_';
	    var split = options.split || /(?=[A-Z])/;

	    return string.split(split).join(separator);
	  };

	  var camelize = function(string) {
	    if (_isNumerical(string)) {
	      return string;
	    }
	    string = string.replace(/[\-_\s]+(.)?/g, function(match, chr) {
	      return chr ? chr.toUpperCase() : '';
	    });
	    // Ensure 1st char is always lowercase
	    return string.substr(0, 1).toLowerCase() + string.substr(1);
	  };

	  var pascalize = function(string) {
	    var camelized = camelize(string);
	    // Ensure 1st char is always uppercase
	    return camelized.substr(0, 1).toUpperCase() + camelized.substr(1);
	  };

	  var decamelize = function(string, options) {
	    return separateWords(string, options).toLowerCase();
	  };

	  // Utilities
	  // Taken from Underscore.js

	  var toString = Object.prototype.toString;

	  var _isFunction = function(obj) {
	    return typeof(obj) === 'function';
	  };
	  var _isObject = function(obj) {
	    return obj === Object(obj);
	  };
	  var _isArray = function(obj) {
	    return toString.call(obj) == '[object Array]';
	  };
	  var _isDate = function(obj) {
	    return toString.call(obj) == '[object Date]';
	  };
	  var _isRegExp = function(obj) {
	    return toString.call(obj) == '[object RegExp]';
	  };
	  var _isBoolean = function(obj) {
	    return toString.call(obj) == '[object Boolean]';
	  };

	  // Performant way to determine if obj coerces to a number
	  var _isNumerical = function(obj) {
	    obj = obj - 0;
	    return obj === obj;
	  };

	  // Sets up function which handles processing keys
	  // allowing the convert function to be modified by a callback
	  var _processor = function(convert, options) {
	    var callback = options && 'process' in options ? options.process : options;

	    if(typeof(callback) !== 'function') {
	      return convert;
	    }

	    return function(string, options) {
	      return callback(string, convert, options);
	    }
	  };

	  var humps = {
	    camelize: camelize,
	    decamelize: decamelize,
	    pascalize: pascalize,
	    depascalize: decamelize,
	    camelizeKeys: function(object, options) {
	      return _processKeys(_processor(camelize, options), object);
	    },
	    decamelizeKeys: function(object, options) {
	      return _processKeys(_processor(decamelize, options), object, options);
	    },
	    pascalizeKeys: function(object, options) {
	      return _processKeys(_processor(pascalize, options), object);
	    },
	    depascalizeKeys: function () {
	      return this.decamelizeKeys.apply(this, arguments);
	    }
	  };

	  if (module.exports) {
	    module.exports = humps;
	  } else {
	    global.humps = humps;
	  }

	})(commonjsGlobal);
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
	  return typeof obj;
	} : function (obj) {
	  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
	};

	var defineProperty = function (obj, key, value) {
	  if (key in obj) {
	    Object.defineProperty(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }

	  return obj;
	};

	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];

	    for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }

	  return target;
	};

	var objectWithoutProperties = function (obj, keys) {
	  var target = {};

	  for (var i in obj) {
	    if (keys.indexOf(i) >= 0) continue;
	    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
	    target[i] = obj[i];
	  }

	  return target;
	};

	var toConsumableArray = function (arr) {
	  if (Array.isArray(arr)) {
	    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

	    return arr2;
	  } else {
	    return Array.from(arr);
	  }
	};

	function capitalize(val) {
	  return val.charAt(0).toUpperCase() + val.slice(1);
	}

	function styleToObject(style) {
	  return style.split(';').map(function (s) {
	    return s.trim();
	  }).filter(function (s) {
	    return s;
	  }).reduce(function (acc, pair) {
	    var i = pair.indexOf(':');
	    var prop = humps.camelize(pair.slice(0, i));
	    var value = pair.slice(i + 1).trim();

	    prop.startsWith('webkit') ? acc[capitalize(prop)] = value : acc[prop] = value;

	    return acc;
	  }, {});
	}

	function convert(createElement, element) {
	  var extraProps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

	  if (typeof element === 'string') {
	    return element;
	  }
	  var children = (element.children || []).map(convert.bind(null, createElement));

	  var mixins = Object.keys(element.attributes || {}).reduce(function (acc, key) {
	    var val = element.attributes[key];

	    switch (key) {
	      case 'class':
	        acc.attrs['className'] = val;
	        delete element.attributes['class'];
	        break;
	      case 'style':
	        acc.attrs['style'] = styleToObject(val);
	        break;
	      default:
	        if (key.indexOf('aria-') === 0 || key.indexOf('data-') === 0) {
	          acc.attrs[key.toLowerCase()] = val;
	        } else {
	          acc.attrs[humps.camelize(key)] = val;
	        }
	    }

	    return acc;
	  }, { attrs: {} });

	  var _extraProps$style = extraProps.style,
	      existingStyle = _extraProps$style === undefined ? {} : _extraProps$style,
	      remaining = objectWithoutProperties(extraProps, ['style']);


	  mixins.attrs['style'] = _extends({}, mixins.attrs['style'], existingStyle);

	  return createElement.apply(undefined, [element.tag, _extends({}, mixins.attrs, remaining)].concat(toConsumableArray(children)));
	}

	var PRODUCTION = false;

	try {
	  PRODUCTION = process.env.NODE_ENV === 'production';
	} catch (e) {}

	function log () {
	  if (!PRODUCTION && console && typeof console.error === 'function') {
	    var _console;

	    (_console = console).error.apply(_console, arguments);
	  }
	}

	function objectWithKey(key, value) {
	  return Array.isArray(value) && value.length > 0 || !Array.isArray(value) && value ? defineProperty({}, key, value) : {};
	}

	function classList(props) {
	  var _classes;

	  var classes = (_classes = {
	    'fa-spin': props.spin,
	    'fa-pulse': props.pulse,
	    'fa-fw': props.fixedWidth,
	    'fa-inverse': props.inverse,
	    'fa-border': props.border,
	    'fa-li': props.listItem,
	    'fa-flip-horizontal': props.flip === 'horizontal' || props.flip === 'both',
	    'fa-flip-vertical': props.flip === 'vertical' || props.flip === 'both'
	  }, defineProperty(_classes, 'fa-' + props.size, props.size !== null), defineProperty(_classes, 'fa-rotate-' + props.rotation, props.rotation !== null), defineProperty(_classes, 'fa-pull-' + props.pull, props.pull !== null), _classes);

	  return Object.keys(classes).map(function (key) {
	    return classes[key] ? key : null;
	  }).filter(function (key) {
	    return key;
	  });
	}

	function normalizeIconArgs(icon) {
	  if (icon === null) {
	    return null;
	  }

	  if ((typeof icon === 'undefined' ? 'undefined' : _typeof(icon)) === 'object' && icon.prefix && icon.iconName) {
	    return icon;
	  }

	  if (Array.isArray(icon) && icon.length === 2) {
	    return { prefix: icon[0], iconName: icon[1] };
	  }

	  if (typeof icon === 'string') {
	    return { prefix: 'fas', iconName: icon };
	  }
	}

	function FontAwesomeIcon(_ref2) {
	  var forwardedRef = _ref2.forwardedRef,
	      props = objectWithoutProperties(_ref2, ['forwardedRef']);
	  var iconArgs = props.icon,
	      maskArgs = props.mask,
	      symbol = props.symbol,
	      className = props.className,
	      title = props.title;


	  var iconLookup = normalizeIconArgs(iconArgs);
	  var classes = objectWithKey('classes', [].concat(toConsumableArray(classList(props)), toConsumableArray(className.split(' '))));
	  var transform = objectWithKey('transform', typeof props.transform === 'string' ? fontawesomeSvgCore.parse.transform(props.transform) : props.transform);
	  var mask = objectWithKey('mask', normalizeIconArgs(maskArgs));

	  var renderedIcon = fontawesomeSvgCore.icon(iconLookup, _extends({}, classes, transform, mask, {
	    symbol: symbol,
	    title: title
	  }));

	  if (!renderedIcon) {
	    log('Could not find icon', iconLookup);
	    return null;
	  }

	  var abstract = renderedIcon.abstract;

	  var extraProps = { ref: forwardedRef };

	  Object.keys(props).forEach(function (key) {
	    if (!FontAwesomeIcon.defaultProps.hasOwnProperty(key)) {
	      extraProps[key] = props[key];
	    }
	  });

	  return convertCurry(abstract[0], extraProps);
	}

	FontAwesomeIcon.displayName = 'FontAwesomeIcon';

	FontAwesomeIcon.propTypes = {
	  border: PropTypes.bool,

	  className: PropTypes.string,

	  mask: PropTypes.oneOfType([PropTypes.object, PropTypes.array, PropTypes.string]),

	  fixedWidth: PropTypes.bool,

	  inverse: PropTypes.bool,

	  flip: PropTypes.oneOf(['horizontal', 'vertical', 'both']),

	  icon: PropTypes.oneOfType([PropTypes.object, PropTypes.array, PropTypes.string]),

	  listItem: PropTypes.bool,

	  pull: PropTypes.oneOf(['right', 'left']),

	  pulse: PropTypes.bool,

	  rotation: PropTypes.oneOf([90, 180, 270]),

	  size: PropTypes.oneOf(['lg', 'xs', 'sm', '1x', '2x', '3x', '4x', '5x', '6x', '7x', '8x', '9x', '10x']),

	  spin: PropTypes.bool,

	  symbol: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),

	  title: PropTypes.string,

	  transform: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
	};

	FontAwesomeIcon.defaultProps = {
	  border: false,
	  className: '',
	  mask: null,
	  fixedWidth: false,
	  inverse: false,
	  flip: null,
	  icon: null,
	  listItem: false,
	  pull: null,
	  pulse: false,
	  rotation: null,
	  size: null,
	  spin: false,
	  symbol: false,
	  title: '',
	  transform: null
	};

	var convertCurry = convert.bind(null, React.createElement);

	var FontAwesomeIcon$1 = React.forwardRef(function (props, ref) {
	  return React.createElement(FontAwesomeIcon, _extends({}, props, { forwardedRef: ref }));
	});

	exports.FontAwesomeIcon = FontAwesomeIcon$1;

	Object.defineProperty(exports, '__esModule', { value: true });

})));
