const recentPoems = document.querySelector(".recent-poems");
const marqueeElementsDisplayed = getComputedStyle(recentPoems).getPropertyValue("--marquee-elements-displayed");
const marqueeContent = document.querySelector(".marquee-content");

recentPoems.style.setProperty("--marquee-elements", marqueeContent.children.length);

for(let i=0; i<marqueeElementsDisplayed; i++) {
  marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}

const recPoems = document.querySelector(".marquee-content");

recPoems.addEventListener("click", goWriting);

function goWriting() {
    location.assign("./writing.html");
}