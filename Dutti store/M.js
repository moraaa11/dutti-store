const products = [
  {
    title: "T-shirt",
    image: "https://th.bing.com/th/id/OIP.1JNdCTuGRkEBhBVFpM8p4wHaHl?w=170&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    link: "tshirt.html",
  },
  {
    title: "Shirt",
    image: "https://tse4.mm.bing.net/th/id/OIP.6hHmYfgTD2nEollZht30lwHaHa?pid=ImgDet&w=178&h=178&c=7&dpr=1.5&o=7&rm=3",
    link: "shirt.html",
  },
  {
    title: "Jeans",
    image: "https://th.bing.com/th/id/OIP.xl94C6Jdh8Baq7_tDCjyFgHaJ3?w=202&h=269&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
    link: "jeans.html",
  },
  {
    title: "Pants",
    image: "https://tse1.mm.bing.net/th/id/OIP.op3QdEQkrKPvbDaHEvRP0gHaLG?pid=ImgDet&w=178&h=267&c=7&dpr=1.5&o=7&rm=3",
    link: "pants.html",
  },
];

const main = document.getElementById("main");

const showProducts = (products) => {
  main.innerHTML = "";

  products.forEach((product) => {
    const { title, image, link } = product;

    const productElement = document.createElement("div");
    productElement.classList.add("product");

    productElement.innerHTML = `
      <img src="${image}" alt="${title}" />
      <div class="product-info">
        <h3>${title}</h3>
      </div>
      <div class="overview">
        <a href="${link}" class="btn">Open</a>
      </div>
    `;

    main.appendChild(productElement);
  });
};

showProducts(products);
