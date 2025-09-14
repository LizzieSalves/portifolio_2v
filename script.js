const menuBtn = document.getElementById("menu");
  const itemsNav = document.querySelectorAll(".items-nav");

  menuBtn.addEventListener("click", () => {
    itemsNav.forEach(item => {
      item.classList.toggle("show");
    });
  });