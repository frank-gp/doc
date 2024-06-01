let products = document.querySelector(".products");
let contentHTML = "";

fetch("data.json")
  .then(function (res) {
    return res.json();
  })
  .then(function (items) {
    //   console.log(items[0].id);
    //   console.log(items[0].name);
    //   console.log(items[0].img);

    // loop...
    for (let item of items) {
      contentHTML += /*html*/ `<!-- html... -->
            <article>
              <h2>${item.name}</h2>
              <img src="${item.img}" alt="" />
            </article>

            <!-- html. -->
            `;
    }
    // loop.

    products.innerHTML = contentHTML;
    // console.log(document.querySelectorAll("article")[0]);
    document.querySelectorAll("article")[0].insertAdjacentHTML("afterend", ad1);
    document.querySelectorAll("article")[2].insertAdjacentHTML("afterend", ad2);
  });
