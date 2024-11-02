// Replace all images on the page with a random Taylor Swift picture
function replaceImages() {
    const imageElements = document.querySelectorAll('img');

    const headerElements = document.querySelectorAll('h1, h2, h3, h4, h5, h6');

    const taylorSwiftImageUrls = [
      "https://m.media-amazon.com/images/M/MV5BZDU1ZjA5ODYtODk4ZC00YzA1LWI5MDctNmUxYTViYmRhNzY5XkEyXkFqcGc@._V1_.jpg",
      "https://upload.wikimedia.org/wikipedia/en/1/1f/Taylor_Swift_-_Taylor_Swift.png",
      "https://images.genius.com/203e241c2eed07f36f49a44b8c0a3d83.1000x1000x1.jpg",
      "https://www.apple.com/newsroom/images/2023/11/taylor-swift-is-apple-musics-artist-of-the-year-for-2023/article/Apple-Music-Awards-Artist-of-the-Year-Taylor-Swift_big.jpg.large.jpg",
      "https://s1.ticketm.net/dam/a/451/fc7b3533-8fde-4d26-b832-8a7e97d5f451_RETINA_PORTRAIT_3_2.jpg",
      "https://upload.wikimedia.org/wikipedia/en/8/86/Taylor_Swift_-_Fearless.png",
      "https://media.newyorker.com/photos/5fd79b014a2e0a2853da7625/1:1/w_1536,h_1536,c_limit/Petrusich-TaylorSwift.jpg",
      "https://people.com/thmb/9j2Ujls0dIWbJBUsmHZo9olSdqI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(999x0:1001x2)/taylor-swift-album-covers-0e6de952871547538f794a6c3e3d01db.jpg",
      "https://upload.wikimedia.org/wikipedia/en/f/f2/Taylor_Swift_-_Reputation.png",
      "https://www.mhsmarquee.com/wp-content/uploads/2023/12/taylor-swift-e1702348824572.jpg",
      "https://media.newyorker.com/photos/5fd79b014a2e0a2853da7625/master/pass/Petrusich-TaylorSwift.jpg",
      "https://simmonsvoice.com/wp-content/uploads/2021/04/album..cover_-900x900.jpeg",
      "https://media.gq-magazine.co.uk/photos/6426d95488d410753b42c897/master/w_1600%2Cc_limit/Taylor-Swift-Fearless.jpg",
      "https://people.com/thmb/crUT-NGSjp13PiLg9pwDjhEQJtA=/4000x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(749x0:751x2)/taylorswift-081023-1-26cc651db511405c9f8060390d6e688f.jpg",
      "https://www.digitalmusicnews.com/wp-content/uploads/2024/04/taylor-swift-album-release-machine-goes-into-overdrive-with-spotify-library-installation-in-la-article.png",
      "https://lastfm.freetls.fastly.net/i/u/ar0/8db41394a75c4ff5b4c8f33eca9345df.jpg",
      "https://sfnnews.com/wp-content/uploads/2022/11/IMG_1551.jpg",
      "https://img1-azrcdn.newser.com/image/1532246-11-20240430122316-taylor-swift-taking-third-billboards-hot-100.jpeg",
      "https://cdns-images.dzcdn.net/images/cover/1cc7cf7f24a408e54717793995f982e5/0x1900-000000-80-0-0.jpg",
      "https://images.augustman.com/wp-content/uploads/sites/2/2024/02/06191107/untitled-design-2024-02-05t132528-469.jpeg",
      "https://images.guitarguitar.co.uk/cdn/small/160/news_753_Taylor-Swift's-Top-10-Songs-From-Each-Album_IMAGE1.jpg",
      "https://cdns-images.dzcdn.net/images/cover/56a83d3002710bf2044b86c01db665aa/1900x1900-000000-80-0-0.jpg",
      "https://store.taylorswift.com/cdn/shop/products/deluxeupdate_600x_cf8786a4-79e6-48f2-91ea-0b2d13527fcc.png"
    ];
  
    imageElements.forEach(img => {
      const randomIndex = Math.floor(Math.random() * taylorSwiftImageUrls.length);
      img.src = taylorSwiftImageUrls[randomIndex];
      img.srcset = ''; // Clear the `srcset` to avoid loading alternate sizes
    });

    const eras = ["Midnights", "1989 (Taylor's Version)", "Red (Taylor's Version)", "Fearless (Taylor's Version)", "Evermore", "Folklore", "Lover", "Reputation", "The Tortured Poets Department", "Fearless"];
    headerElements.forEach(header => {
      header.textContent = eras[Math.floor(Math.random() * eras.length)];
    });
  }
  
  // Run the function when the content script is loaded
  replaceImages();
  