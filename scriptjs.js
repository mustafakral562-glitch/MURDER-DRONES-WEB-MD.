// Mobil menüyü açıp kapatır.
const menuButton = document.querySelector(".menu-toggle");
const siteNav = document.querySelector("#site-nav");

menuButton.addEventListener("click", () => {
  const isOpen = siteNav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "Menüyü kapat" : "Menüyü aç");
});

// Mobil ekranda bir menü bağlantısı seçildiğinde menüyü kapatır.
siteNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    siteNav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Menüyü aç");
  });
});

// Alt bilgide geçerli yılı gösterir.
document.querySelector("#year").textContent = new Date().getFullYear();
