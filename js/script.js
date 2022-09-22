import data from "./data.js";

console.log(data);

const columns = document.querySelectorAll(".column");
const hoverInfo = document.querySelectorAll(".hover-info");
console.log(columns);

// amount from data
hoverInfo.forEach((element, index) => {
  element.innerHTML = `${"$" + data[index].amount}`;
});

// get current weekday

let date = new Date().getDay();
const weekday = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
let today = weekday[date];

// change color of baar according to weekday

const colorTodayColumn = function () {
  columns.forEach((column) => {
    console.log(column.getAttribute("name"));

    if (column.getAttribute("name") === today) {
      column.style.backgroundColor = "hsl(186, 34%, 60%)";
    } else {
      column.style.backgroundColor = "hsl(10, 79%, 65%)";
    }
  });
};
colorTodayColumn();

// show price info when we hover over columns

columns.forEach((column, index) => {
  let columnColor = window.getComputedStyle(column).backgroundColor;
  column.addEventListener("mouseover", function (e) {
    e.preventDefault();
    if (columnColor === "rgb(118, 181, 188)") {
      column.style.backgroundColor = "#B4DFE5";
      hoverInfo[index].style.display = "block";
    } else {
      column.style.backgroundColor = "#FF9B87";
      hoverInfo[index].style.display = "block";
    }
  });
  column.addEventListener("mouseout", () => {
    hoverInfo[index].style.display = "none";
    colorTodayColumn();
  });
});
