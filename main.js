// References to DOM Element

const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");
const book = document.querySelectorAll("#book");

const paper1 = document.querySelector("#p1");
const paper2 = document.querySelector("#p2");
const paper3 = document.querySelector("#p3");
const paper4 = document.querySelector("#p4");

//Event Listeners

prevBtn.addEventListener("click", goPrevPage);
nextBtn.addEventListener("click", goNextPage);

book.forEach((paper) => {
  paper.addEventListener("click", openBook);
});

// Slider Logic

let currentLocation = 1;
let numOfpapers = 4;
let maxLocation = numOfpapers + 1;

function openBook() {}

function closeBook() {}

function goNextPage() {
    if (currentLocation < maxLocation) {
        switch (currentLocation) {
          case 1:
            openBook();
            paper1.classList.add("flipped");
            paper1.style.zIndex = 1;
            break;
          case 2:
            paper2.classList.add("flipped");
            paper2.style.zIndex = 2;
            break;
          case 3:
            paper3.classList.add("flipped");
            paper3.style.zIndex = 3;
            break;
          case 4:
            paper4.classList.add("flipped");
            paper4.style.zIndex = 4;
            closeBook();
            break;
          default:
            throw new Error("unknown state");
        }
        currentLocation++;
      }
}

function goPrevPage() {}
