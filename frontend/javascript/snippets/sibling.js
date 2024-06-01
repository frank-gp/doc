
function duplicateCard(num) {
    var card_service = document.querySelector(".card_service");
    for (var i = 1; i < num; i++) {
      var clonedCard = card_service.cloneNode(true).outerHTML;
      card_service.insertAdjacentHTML("afterend", clonedCard);
    }
  }
  duplicateCard(5);
    