const checkboxes = Array.from(document.querySelectorAll("#care-items input"));
const progress = document.querySelector("#care-progress");
const statusText = document.querySelector("#care-status");
const storageNote = document.querySelector("#storage-note");
const clearButton = document.querySelector("#clear-checklist");
const storageKey = "little-paws-preparation-v1";
let canSave = true;

// Corrupt or blocked browser storage must not stop the checklist working.
try {
  const saved = JSON.parse(localStorage.getItem(storageKey) || "{}");
  if (saved && typeof saved === "object" && !Array.isArray(saved)) {
    checkboxes.forEach((checkbox) => {
      checkbox.checked = saved[checkbox.id] === true;
    });
  }
} catch {
  canSave = false;
}

function updateProgress() {
  const completed = checkboxes.filter((checkbox) => checkbox.checked).length;
  progress.value = completed;
  progress.textContent = completed + " of " + checkboxes.length;
  statusText.textContent = completed === checkboxes.length
    ? "All 6 preparation items checked. Review species-specific needs with a reliable rescue or vet before adopting."
    : completed + " of " + checkboxes.length + " items checked.";
  storageNote.textContent = canSave
    ? "Saved in this browser only. You can clear the list below."
    : "Saving is unavailable. Your ticks will only last while this page stays open.";
}

function saveChecklist() {
  try {
    const saved = Object.fromEntries(checkboxes.map((checkbox) => [checkbox.id, checkbox.checked]));
    localStorage.setItem(storageKey, JSON.stringify(saved));
    canSave = true;
  } catch {
    canSave = false;
  }
  updateProgress();
}

checkboxes.forEach((checkbox) => checkbox.addEventListener("change", saveChecklist));
clearButton.addEventListener("click", () => {
  checkboxes.forEach((checkbox) => { checkbox.checked = false; });
  saveChecklist();
});
clearButton.hidden = false;
updateProgress();
