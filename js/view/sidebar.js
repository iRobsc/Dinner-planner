const sidebarBtn = document.getElementById("sidebar-accordion");
const sidebarContent = document.getElementById("sidebar-content");
sidebarBtn.addEventListener("click", () => {
  sidebarContent.classList.toggle("sidebar-hide");
  sidebarContent.classList.toggle("sidebar-show");
});
