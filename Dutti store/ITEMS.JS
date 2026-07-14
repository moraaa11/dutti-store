const products = [
  {
   
    image: "",
    link: "https://wa.me/201119821124",
  },
  {
  
    image: "",
        link: "https://wa.me/201119821124",
  },
  {
   
    image: "",
       link: "https://wa.me/201119821124",

  },
  {
   
    image: "this product",
 link: "https://wa.me/201119821124",
  },
];

const main = document.getElementById("main");

const showProducts = (products) => {
  main.innerHTML = "";

  products.forEach((product) => {
    const { title, image, link } = product;

    const productElement = document.createElement("div");
    productElement.classList.add("product");

     const whatsappLink = `${link}?text=${encodeURIComponent(
      `Hello, I am interested in ${title}`
    )}`;
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
