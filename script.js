/* =============================================================
   SCRIPT.JS  —  a tiny bit of JavaScript
   =============================================================
   This file does two small jobs. You probably don't need to touch
   it, but here's what it does so nothing feels like magic.
   ============================================================= */

/* -------------------------------------------------------------
   1. LIGHT / DARK MODE TOGGLE
   Clicking the button in the top-left switches the whole page
   between light and dark. We also remember the choice in the
   browser, so it stays the same next time you visit.
   ------------------------------------------------------------- */
const themeToggle = document.querySelector(".theme-toggle");

// If the visitor chose a theme before, use it again.
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  document.documentElement.setAttribute("data-theme", "dark");
}

// Keep the button's label / pressed state matching the current theme.
function updateToggle() {
  const isDark =
    document.documentElement.getAttribute("data-theme") === "dark";
  if (themeToggle) {
    themeToggle.setAttribute("aria-pressed", isDark);
    themeToggle.setAttribute(
      "aria-label",
      isDark ? "Switch to light mode" : "Switch to dark mode"
    );
  }
}
updateToggle();

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const isDark =
      document.documentElement.getAttribute("data-theme") === "dark";
    if (isDark) {
      document.documentElement.removeAttribute("data-theme");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    }
    updateToggle();
  });
}

/* -------------------------------------------------------------
   2. AUTOMATIC YEAR IN THE FOOTER
   Fills in the current year so you never have to update it.
   ------------------------------------------------------------- */
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}
