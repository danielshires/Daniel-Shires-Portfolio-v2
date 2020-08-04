  var animation = bodymovin.loadAnimation({
    container: document.getElementById('animation'), // Required
    path: './resources/js/data.json', // Required
    renderer: 'svg', // Required
    loop: null, // Optional
    autoplay: true, // Optional
    name: "Hello World", // Name for future reference. Optional.
  })