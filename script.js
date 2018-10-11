let getSquare;

function loadWebAssembly(fileName) {
  return fetch(fileName)
    .then(response => response.arrayBuffer())
    .then(bits => WebAssembly.compile(bits))
    .then(module => {
      return new WebAssembly.Instance(module);
    });
}

loadWebAssembly("getSquare.wasm").then(instance => {
  getSquare = instance.exports._Z9getSquarei;
  console.log("Finished compiling! Ready when you are...");
});
