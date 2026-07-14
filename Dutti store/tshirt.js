const products = [
  {
    title: "Classic basic T-shirt",
    price: "$25",
    image: "data:image/webp;base64,UklGRhYEAABXRUJQVlA4IAoEAAAQNQCdASovAS8BPp1OoUylqCOipHPYyQATiWlu4WeLRC2oAp6nDRElyBUn4aIkuTNoXZnn/ibrAQhGaamd6N1puE99oCiyv4mIE4Qjf9ohOiJKJPmW3vGAaN8kLfQfTQ4WQ/evkxHtthPTpsnJCoTolOSSIepDw73x7STB950QtEoYNfdxeTupn3PqCBENNI52Xtjh61OSP3ss8w5SQMS6m/LoUPoMbM3BvaNSv7JlLHTlkAKjklhpAqnkEhRdfpL7ieUDy9BJuqIpeVJZMjZtZg0Uj7UbV6v3NZx18/EHKBakBy3cdfmTqko2dgZnQ2w2fs2Kj7P7fYIfdDczpztqsd90BfWSGlV+vuUW3as5Qx9KTgGIY1+EHayZrXqCH02UzMkc7XJpscorn1Anm6hWCJknrRsAZoiS4hb/uU4S6YXkWDHxLMIfTnUrDR/SQnQ40VIRqcMukvASCa6EyR8NAQmGpwy6S7zk/Io/ja1TL06OJZJPUP7WPC8+aLiMgl82hOtVHqQsNESJZ/StYhRKy95XnbY/EKAoyWzMo3ZFUR2+NEGNkODU4aIkuR81qy6QAP78GQSNkufb+q1wnNJgXyY9sWNNbbH7Plnx0n9JLyijODaQjF82+xRI4cehaD/Q67l5MIzHGRGw1jkkLFkrBoCu+NzVE+C7tRKM0z/gSaVKugpoQIoJXHi8c/xTLMruHKrYcT3Jh/VwpC6mYqumSEFmNGMrdigEJ/jtPmj/+sm7ovvUftf/2QGDGra8+re/BRaCrUVBsgpB0SLMCAAvdTQ1QlB0OBdM3Rt4ZrbYmaFFHINrZl57462fLyv67qRVXoLSOWWYk7A+n8BTsQMvhwocp3/7qkzzFQ0+377qAdRp3nqWM6eOIjMPQVNqDL2IUnVGxgYil2x184G6SIjqc9C3A3/90mdZx687WHticnawbvFxmr5ASZuy+X7U/iu9hZoafk3WlJLc3Tu4WxOUamJ32yZUPDZi1VzTbFceky/TKSYVTy7VsO/jXy86tpabl7pbxSpqihJ9ogymi2nhtnqi5KTyxcfsK4HPAmkD2f3bGGvvRCD1QHE2Pqe9De6XoQKkh4sTbZJwMjaL8QF/HKk7uzUoYbtciPMAlW20HeJGezjnuDoyxXpjiE6JRAixil4mUBKyKv92rAhYPJEPrH7JBi0JKuuUJk/So6KrsFZx4RDnkAOm4uBWgMKbQGbjtW/0m4Fbv4kG7ez+couNTtE3PBDEQ3JLJypylsI3FsLOFVnoMPGCW0RIjIb40vfhwbFLzwXZFOD69O1gArXQtxxob006N+JWoEbgYkZDxAcv28tGt0cdF7GsDJhCHJhHxH4EEACXEWblXqF/hUkwvxeKBLMfAAAAAA==",
    link: "Classic basic T-shirt.html"
  },
  {
    title: "box fit T-shirt",
    price: "$30",
    image: "https://cottonon.com/on/demandware.static/-/Sites-catalog-master-men/default/dwef5b7c94/3611849/3611849-63-5.jpg",
    link: "box fit T-shirt.html"
  },
  {
    title: "polo-shirt",
    price: "$28",
    image: "https://tse4.mm.bing.net/th/id/OIP.-gEl-drB9TxDaHe9wEPDTgHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
    link: "polo-shirt.html"
  },
  {
    title: "Oversized T-shirt",
    price: "$32",
    image: "data:image/webp;base64,UklGRqAeAABXRUJQVlA4IJQeAAAQpQCdASovAcYBPp1Kn0ylpCKlo3YaILATiWNu4W5w79u8eHwfy09uW7f53ymeHPaXlU8+f9r1w/6H1yfo30dPxp9sv1dftb6kP2k/aH3MP+z+zPu59BP+2f5/0yvZk/cb2CvLdAA",
    link: "Oversized T-shirt.html"
  },
];

const main = document.getElementById("main");

products.forEach((product) => {
  const { title, price, image, link } = product;

  const productElement = document.createElement("div");
  productElement.classList.add("product");

  productElement.innerHTML = `
    <img src="${image}" alt="${title}" />
    <div class="product-info">
      <h3>${title}</h3>
      <p class="price">${price}</p>
      <button class="btn">view more</button>
    </div>
  `;

  // ربط الزرار بالصفحة المناسبة
  const btn = productElement.querySelector(".btn");
  btn.addEventListener("click", () => {
    window.location.href = link;
  });

  main.appendChild(productElement);
});



