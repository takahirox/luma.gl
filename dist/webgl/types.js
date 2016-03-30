'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('../utils');

Object.defineProperty(exports, 'isTypedArray', {
  enumerable: true,
  get: function get() {
    return _utils.isTypedArray;
  }
});
Object.defineProperty(exports, 'makeTypedArray', {
  enumerable: true,
  get: function get() {
    return _utils.makeTypedArray;
  }
});
exports.isIndexType = isIndexType;
exports.isGLIndexType = isGLIndexType;
exports.isDrawMode = isDrawMode;
exports.isGLDrawMode = isGLDrawMode;


// INDEX TYPES

// For drawElements, size of indices
var INDEX_TYPES = exports.INDEX_TYPES = ['UNSIGNED_BYTE', 'UNSIGNED_SHORT'];
var GL_INDEX_TYPES = exports.GL_INDEX_TYPES = function GL_INDEX_TYPES(gl) {
  return INDEX_TYPES.map(function (constant) {
    return gl[constant];
  });
};

function isIndexType(type) {
  return INDEX_TYPES.indexOf(type) !== -1;
}
function isGLIndexType(glType) {
  return GL_INDEX_TYPES.indexOf(glType) !== -1;
}

// DRAW MODES

var DRAW_MODES = exports.DRAW_MODES = ['POINTS', 'LINE_STRIP', 'LINE_LOOP', 'LINES', 'TRIANGLE_STRIP', 'TRIANGLE_FAN', 'TRIANGLES'];
var GL_DRAW_MODES = exports.GL_DRAW_MODES = function GL_DRAW_MODES(gl) {
  return DRAW_MODES.map(function (constant) {
    return gl[constant];
  });
};

function isDrawMode(mode) {
  return DRAW_MODES.indexOf(mode) !== -1;
}
function isGLDrawMode(glMode) {
  return GL_DRAW_MODES.indexOf(glMode) !== -1;
}

// TARGET TYPES

var TARGETS = exports.TARGETS = ['ARRAY_BUFFER', // vertex attributes (e.g. vertex/texture coords or color)
'ELEMENT_ARRAY_BUFFER', // Buffer used for element indices.
// For WebGL 2 contexts
'COPY_READ_BUFFER', // Buffer for copying from one buffer object to another
'COPY_WRITE_BUFFER', // Buffer for copying from one buffer object to another
'TRANSFORM_FEEDBACK_BUFFER', // Buffer for transform feedback operations
'UNIFORM_BUFFER', // Buffer used for storing uniform blocks
'PIXEL_PACK_BUFFER', // Buffer used for pixel transfer operations
'PIXEL_UNPACK_BUFFER' // Buffer used for pixel transfer operations
];

var GL_TARGETS = exports.GL_TARGETS = function GL_TARGETS(gl) {
  return TARGETS.map(function (constant) {
    return gl[constant];
  }).filter(function (constant) {
    return constant;
  });
};

// USAGE TYPES

var BUFFER_USAGE = exports.BUFFER_USAGE = ['STATIC_DRAW', // Buffer used often and not change often. Contents are written to the buffer, but not read.
'DYNAMIC_DRAW', // Buffer used often and change often. Contents are written to the buffer, but not read.
'STREAM_DRAW', // Buffer not used often. Contents are written to the buffer, but not read.
// For WebGL 2 contexts
'STATIC_READ', // Buffer used often and not change often. Contents are read from the buffer, but not written.
'DYNAMIC_READ', // Buffer used often and change often. Contents are read from the buffer, but not written.
'STREAM_READ', // Contents of the buffer are likely to not be used often. Contents are read from the buffer, but not written.
'STATIC_COPY', // Buffer used often and not change often. Contents are neither written or read by the user.
'DYNAMIC_COPY', // Buffer used often and change often. Contents are neither written or read by the user.
'STREAM_COPY' // Buffer used often and not change often. Contents are neither written or read by the user.
];

var GL_BUFFER_USAGE = exports.GL_BUFFER_USAGE = function GL_BUFFER_USAGE(gl) {
  return BUFFER_USAGE.map(function (constant) {
    return gl[constant];
  }).filter(function (constant) {
    return constant;
  });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy93ZWJnbC90eXBlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztrQkFJUTs7Ozs7O2tCQUFjOzs7UUFRTjtRQUdBO1FBWUE7UUFHQTs7Ozs7O0FBckJULElBQU0sb0NBQWMsQ0FBQyxlQUFELEVBQWtCLGdCQUFsQixDQUFkO0FBQ04sSUFBTSwwQ0FBaUIsU0FBakIsY0FBaUI7U0FBTSxZQUFZLEdBQVosQ0FBZ0I7V0FBWSxHQUFHLFFBQUg7R0FBWjtDQUF0Qjs7QUFFdkIsU0FBUyxXQUFULENBQXFCLElBQXJCLEVBQTJCO0FBQ2hDLFNBQU8sWUFBWSxPQUFaLENBQW9CLElBQXBCLE1BQThCLENBQUMsQ0FBRCxDQURMO0NBQTNCO0FBR0EsU0FBUyxhQUFULENBQXVCLE1BQXZCLEVBQStCO0FBQ3BDLFNBQU8sZUFBZSxPQUFmLENBQXVCLE1BQXZCLE1BQW1DLENBQUMsQ0FBRCxDQUROO0NBQS9COzs7O0FBTUEsSUFBTSxrQ0FBYSxDQUN4QixRQUR3QixFQUNkLFlBRGMsRUFDQSxXQURBLEVBQ2EsT0FEYixFQUV4QixnQkFGd0IsRUFFTixjQUZNLEVBRVUsV0FGVixDQUFiO0FBSU4sSUFBTSx3Q0FBZ0IsU0FBaEIsYUFBZ0I7U0FBTSxXQUFXLEdBQVgsQ0FBZTtXQUFZLEdBQUcsUUFBSDtHQUFaO0NBQXJCOztBQUV0QixTQUFTLFVBQVQsQ0FBb0IsSUFBcEIsRUFBMEI7QUFDL0IsU0FBTyxXQUFXLE9BQVgsQ0FBbUIsSUFBbkIsTUFBNkIsQ0FBQyxDQUFELENBREw7Q0FBMUI7QUFHQSxTQUFTLFlBQVQsQ0FBc0IsTUFBdEIsRUFBOEI7QUFDbkMsU0FBTyxjQUFjLE9BQWQsQ0FBc0IsTUFBdEIsTUFBa0MsQ0FBQyxDQUFELENBRE47Q0FBOUI7Ozs7QUFNQSxJQUFNLDRCQUFVLENBQ3JCLGNBRHFCO0FBRXJCLHNCQUZxQjs7QUFJckIsa0JBSnFCO0FBS3JCLG1CQUxxQjtBQU1yQiwyQkFOcUI7QUFPckIsZ0JBUHFCO0FBUXJCLG1CQVJxQjtBQVNyQjtBQVRxQixDQUFWOztBQVlOLElBQU0sa0NBQ1gsU0FEVyxVQUNYO1NBQU0sUUFBUSxHQUFSLENBQVk7V0FBWSxHQUFHLFFBQUg7R0FBWixDQUFaLENBQXNDLE1BQXRDLENBQTZDO1dBQVk7R0FBWjtDQUFuRDs7OztBQUlLLElBQU0sc0NBQWUsQ0FDMUIsYUFEMEI7QUFFMUIsY0FGMEI7QUFHMUIsYUFIMEI7O0FBSzFCLGFBTDBCO0FBTTFCLGNBTjBCO0FBTzFCLGFBUDBCO0FBUTFCLGFBUjBCO0FBUzFCLGNBVDBCO0FBVTFCO0FBVjBCLENBQWY7O0FBYU4sSUFBTSw0Q0FDWCxTQURXLGVBQ1g7U0FBTSxhQUFhLEdBQWIsQ0FBaUI7V0FBWSxHQUFHLFFBQUg7R0FBWixDQUFqQixDQUEyQyxNQUEzQyxDQUFrRDtXQUFZO0dBQVo7Q0FBeEQiLCJmaWxlIjoidHlwZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBIZWxwZXIgZGVmaW5pdGlvbnMgZm9yIHZhbGlkYXRpb24gb2Ygd2ViZ2wgcGFyYW1ldGVyc1xuLyogZXNsaW50LWRpc2FibGUgbm8taW5saW5lLWNvbW1lbnRzLCBtYXgtbGVuICovXG5cbi8vIFRPRE8gLSByZW1vdmVcbmV4cG9ydCB7aXNUeXBlZEFycmF5LCBtYWtlVHlwZWRBcnJheX0gZnJvbSAnLi4vdXRpbHMnO1xuXG4vLyBJTkRFWCBUWVBFU1xuXG4vLyBGb3IgZHJhd0VsZW1lbnRzLCBzaXplIG9mIGluZGljZXNcbmV4cG9ydCBjb25zdCBJTkRFWF9UWVBFUyA9IFsnVU5TSUdORURfQllURScsICdVTlNJR05FRF9TSE9SVCddO1xuZXhwb3J0IGNvbnN0IEdMX0lOREVYX1RZUEVTID0gZ2wgPT4gSU5ERVhfVFlQRVMubWFwKGNvbnN0YW50ID0+IGdsW2NvbnN0YW50XSk7XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0luZGV4VHlwZSh0eXBlKSB7XG4gIHJldHVybiBJTkRFWF9UWVBFUy5pbmRleE9mKHR5cGUpICE9PSAtMTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc0dMSW5kZXhUeXBlKGdsVHlwZSkge1xuICByZXR1cm4gR0xfSU5ERVhfVFlQRVMuaW5kZXhPZihnbFR5cGUpICE9PSAtMTtcbn1cblxuLy8gRFJBVyBNT0RFU1xuXG5leHBvcnQgY29uc3QgRFJBV19NT0RFUyA9IFtcbiAgJ1BPSU5UUycsICdMSU5FX1NUUklQJywgJ0xJTkVfTE9PUCcsICdMSU5FUycsXG4gICdUUklBTkdMRV9TVFJJUCcsICdUUklBTkdMRV9GQU4nLCAnVFJJQU5HTEVTJ1xuXTtcbmV4cG9ydCBjb25zdCBHTF9EUkFXX01PREVTID0gZ2wgPT4gRFJBV19NT0RFUy5tYXAoY29uc3RhbnQgPT4gZ2xbY29uc3RhbnRdKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGlzRHJhd01vZGUobW9kZSkge1xuICByZXR1cm4gRFJBV19NT0RFUy5pbmRleE9mKG1vZGUpICE9PSAtMTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc0dMRHJhd01vZGUoZ2xNb2RlKSB7XG4gIHJldHVybiBHTF9EUkFXX01PREVTLmluZGV4T2YoZ2xNb2RlKSAhPT0gLTE7XG59XG5cbi8vIFRBUkdFVCBUWVBFU1xuXG5leHBvcnQgY29uc3QgVEFSR0VUUyA9IFtcbiAgJ0FSUkFZX0JVRkZFUicsIC8vIHZlcnRleCBhdHRyaWJ1dGVzIChlLmcuIHZlcnRleC90ZXh0dXJlIGNvb3JkcyBvciBjb2xvcilcbiAgJ0VMRU1FTlRfQVJSQVlfQlVGRkVSJywgLy8gQnVmZmVyIHVzZWQgZm9yIGVsZW1lbnQgaW5kaWNlcy5cbiAgLy8gRm9yIFdlYkdMIDIgY29udGV4dHNcbiAgJ0NPUFlfUkVBRF9CVUZGRVInLCAvLyBCdWZmZXIgZm9yIGNvcHlpbmcgZnJvbSBvbmUgYnVmZmVyIG9iamVjdCB0byBhbm90aGVyXG4gICdDT1BZX1dSSVRFX0JVRkZFUicsIC8vIEJ1ZmZlciBmb3IgY29weWluZyBmcm9tIG9uZSBidWZmZXIgb2JqZWN0IHRvIGFub3RoZXJcbiAgJ1RSQU5TRk9STV9GRUVEQkFDS19CVUZGRVInLCAvLyBCdWZmZXIgZm9yIHRyYW5zZm9ybSBmZWVkYmFjayBvcGVyYXRpb25zXG4gICdVTklGT1JNX0JVRkZFUicsIC8vIEJ1ZmZlciB1c2VkIGZvciBzdG9yaW5nIHVuaWZvcm0gYmxvY2tzXG4gICdQSVhFTF9QQUNLX0JVRkZFUicsIC8vIEJ1ZmZlciB1c2VkIGZvciBwaXhlbCB0cmFuc2ZlciBvcGVyYXRpb25zXG4gICdQSVhFTF9VTlBBQ0tfQlVGRkVSJyAvLyBCdWZmZXIgdXNlZCBmb3IgcGl4ZWwgdHJhbnNmZXIgb3BlcmF0aW9uc1xuXTtcblxuZXhwb3J0IGNvbnN0IEdMX1RBUkdFVFMgPVxuICBnbCA9PiBUQVJHRVRTLm1hcChjb25zdGFudCA9PiBnbFtjb25zdGFudF0pLmZpbHRlcihjb25zdGFudCA9PiBjb25zdGFudCk7XG5cbi8vIFVTQUdFIFRZUEVTXG5cbmV4cG9ydCBjb25zdCBCVUZGRVJfVVNBR0UgPSBbXG4gICdTVEFUSUNfRFJBVycsIC8vIEJ1ZmZlciB1c2VkIG9mdGVuIGFuZCBub3QgY2hhbmdlIG9mdGVuLiBDb250ZW50cyBhcmUgd3JpdHRlbiB0byB0aGUgYnVmZmVyLCBidXQgbm90IHJlYWQuXG4gICdEWU5BTUlDX0RSQVcnLCAvLyBCdWZmZXIgdXNlZCBvZnRlbiBhbmQgY2hhbmdlIG9mdGVuLiBDb250ZW50cyBhcmUgd3JpdHRlbiB0byB0aGUgYnVmZmVyLCBidXQgbm90IHJlYWQuXG4gICdTVFJFQU1fRFJBVycsIC8vIEJ1ZmZlciBub3QgdXNlZCBvZnRlbi4gQ29udGVudHMgYXJlIHdyaXR0ZW4gdG8gdGhlIGJ1ZmZlciwgYnV0IG5vdCByZWFkLlxuICAvLyBGb3IgV2ViR0wgMiBjb250ZXh0c1xuICAnU1RBVElDX1JFQUQnLCAvLyBCdWZmZXIgdXNlZCBvZnRlbiBhbmQgbm90IGNoYW5nZSBvZnRlbi4gQ29udGVudHMgYXJlIHJlYWQgZnJvbSB0aGUgYnVmZmVyLCBidXQgbm90IHdyaXR0ZW4uXG4gICdEWU5BTUlDX1JFQUQnLCAvLyBCdWZmZXIgdXNlZCBvZnRlbiBhbmQgY2hhbmdlIG9mdGVuLiBDb250ZW50cyBhcmUgcmVhZCBmcm9tIHRoZSBidWZmZXIsIGJ1dCBub3Qgd3JpdHRlbi5cbiAgJ1NUUkVBTV9SRUFEJywgLy8gQ29udGVudHMgb2YgdGhlIGJ1ZmZlciBhcmUgbGlrZWx5IHRvIG5vdCBiZSB1c2VkIG9mdGVuLiBDb250ZW50cyBhcmUgcmVhZCBmcm9tIHRoZSBidWZmZXIsIGJ1dCBub3Qgd3JpdHRlbi5cbiAgJ1NUQVRJQ19DT1BZJywgLy8gQnVmZmVyIHVzZWQgb2Z0ZW4gYW5kIG5vdCBjaGFuZ2Ugb2Z0ZW4uIENvbnRlbnRzIGFyZSBuZWl0aGVyIHdyaXR0ZW4gb3IgcmVhZCBieSB0aGUgdXNlci5cbiAgJ0RZTkFNSUNfQ09QWScsIC8vIEJ1ZmZlciB1c2VkIG9mdGVuIGFuZCBjaGFuZ2Ugb2Z0ZW4uIENvbnRlbnRzIGFyZSBuZWl0aGVyIHdyaXR0ZW4gb3IgcmVhZCBieSB0aGUgdXNlci5cbiAgJ1NUUkVBTV9DT1BZJyAvLyBCdWZmZXIgdXNlZCBvZnRlbiBhbmQgbm90IGNoYW5nZSBvZnRlbi4gQ29udGVudHMgYXJlIG5laXRoZXIgd3JpdHRlbiBvciByZWFkIGJ5IHRoZSB1c2VyLlxuXTtcblxuZXhwb3J0IGNvbnN0IEdMX0JVRkZFUl9VU0FHRSA9XG4gIGdsID0+IEJVRkZFUl9VU0FHRS5tYXAoY29uc3RhbnQgPT4gZ2xbY29uc3RhbnRdKS5maWx0ZXIoY29uc3RhbnQgPT4gY29uc3RhbnQpO1xuIl19