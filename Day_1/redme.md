  Q. What is V8?

 =>  V8 is Google’s open source high-performance JavaScript and WebAssembly engine, written in C++. It is used in Chrome and in Node.js, among others. It implements ECMAScript and WebAssembly, and runs on Windows, macOS, and Linux systems that use x64, IA-32, or ARM processors. V8 can be embedded into any C++ application.

 CJS: common JS module 
 Node only understand CJS module like module.exports={}, require();
 so solution is create packag.json and mention => {"type":"module"}; by default it take {"type":"commonjs"} for CJS module use

 .mjs understand export and import