
// Get all chapter names
let chapterKeys = Object.keys(manga);

// Load saved chapter index from localStorage
let savedIndex = localStorage.getItem("chapterIndex");

// If saved value exists → use it, otherwise default to 0
let currentChapterIndex = savedIndex !== null ? parseInt(savedIndex) : 0;

// Load chapter function
function loadChapter() {
  let chapterName = chapterKeys[currentChapterIndex];
  let pages = manga[chapterName];

  let container = document.getElementById("manga-container");
  container.innerHTML = "";

  // Set chapter title
  document.getElementById("chapter-title").innerText = chapterName;

  // Load all images
  pages.forEach((page) => {
    let img = document.createElement("img");
    img.src = page;
    container.appendChild(img);
  });

  // Save current chapter index
  localStorage.setItem("chapterIndex", currentChapterIndex);
}

// Next chapter
function nextChapter() {
  if (currentChapterIndex < chapterKeys.length - 1) {
    currentChapterIndex++;
    loadChapter();

    // Scroll to top only when changing chapter
    window.scrollTo(0, 0);
  }
}

// Previous chapter
function prevChapter() {
  if (currentChapterIndex > 0) {
    currentChapterIndex--;
    loadChapter();

    // Scroll to top only when changing chapter
    window.scrollTo(0, 0);
  }
}

// Initial load
loadChapter();