var animation = bodymovin.loadAnimation({
    container: document.getElementById('bg-circle'), // Required
    path: './resources/js/bg-circle.json', // Required
    renderer: 'svg', // Required
    loop: true, // Optional
    autoplay: true, // Optional
    name: "Hello World", // Name for future reference. Optional.
  })