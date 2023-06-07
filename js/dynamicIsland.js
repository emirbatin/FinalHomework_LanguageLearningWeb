const CLOSED_CLASS = "closed";
const islandElement = document.getElementsByClassName("island")[0];

const closeIsland = () => {
  islandElement.classList.add(CLOSED_CLASS);
};

const openIsland = (e) => {
  islandElement.classList.remove(CLOSED_CLASS);
  e && e.stopPropagation();
};

window.onload = () => {
  islandElement.addEventListener("mouseenter", openIsland);
  islandElement.addEventListener("mouseleave", closeIsland);
  document.addEventListener(
    "keydown",
    ({ key }) => key?.toLowerCase() === "escape" && closeIsland()
  );
};

window.onunload = () => {
  islandElement.removeEventListener("mouseenter", openIsland);
  islandElement.removeEventListener("mouseleave", closeIsland);
  document.removeEventListener("keydown", ({ key }) => key?.toLowerCase() === "escape" && closeIsland());
};
