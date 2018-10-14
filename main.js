const center_items = [...document.querySelectorAll(".middle-column > div")];
const headers = [...document.querySelectorAll(".column > div")];
const spans = [...document.querySelectorAll(".header > span")];
const middle_column = document.querySelector(".middle-column");
const center_logo = document.querySelector(".center-logo");
for (let i = 0; i < headers.length; i++) {
  headers[i].addEventListener("mouseover", function() {
    for (let i = 0; i < center_items.length; i++) {
      if (
        this.getAttribute("data-id") === center_items[i].getAttribute("data-id")
      ) {
          if (this.getAttribute("data-id") === "about-us"){
            middle_column.setAttribute("style", "right: 40px; left: unset; top: 40px; bottom: unset; transform: scale(1)")
            center_items[i].style.display = "block";
          } else if (this.getAttribute("data-id") === "who-we-serve") {
            middle_column.setAttribute("style", "right: 40px; left: unset; top: unset; bottom: 80px; transform: scale(1)")
            center_items[i].style.display = "block"; 
          } else if (this.getAttribute("data-id") === "what-we-are"){
            middle_column.setAttribute("style", "right: unset; left: 40px; top: 40px; bottom: unset; transform: scale(1)")
            center_items[i].style.display = "block"; 
          } else {
            middle_column.setAttribute("style", "right: unset; left: 40px; top: unset; bottom: 80px; transform: scale(1)")
            center_items[i].style.display = "block";   
          }
        
      } else {
        center_items[i].style.display = "none";
        center_logo.style.display = "none";
      }
    }
  });
  headers[i].addEventListener("mouseleave", function() {
    for (let i = 0; i < center_items.length; i++) {
      middle_column.style.transform = "scale(0)";
      center_items[i].style.display = "none";
      center_logo.style.display = "block";
    }
  });
}
