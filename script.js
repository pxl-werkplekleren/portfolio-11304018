const wpl1Toggle = document.querySelector("[data-wpl-toggle]");
const wpl1Menu = document.querySelector("[data-wpl-menu]");
const wpl2Toggle = document.querySelector("[data-wpl2-toggle]");
const wpl2Menu = document.querySelector("[data-wpl2-menu]");

function closeMenu(toggle, menu) {
    if (toggle && menu) {
        menu.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
    }
}

function toggleMenu(toggle, menu, otherToggle, otherMenu) {
    if (toggle && menu) {
        toggle.addEventListener("click", () => {
            closeMenu(otherToggle, otherMenu);
            const isOpen = menu.classList.toggle("is-open");
            toggle.setAttribute("aria-expanded", isOpen.toString());
        });
    }
}

toggleMenu(wpl1Toggle, wpl1Menu, wpl2Toggle, wpl2Menu);
toggleMenu(wpl2Toggle, wpl2Menu, wpl1Toggle, wpl1Menu);

if (
    window.location.pathname.includes("eindreflectie-wpl2.html") ||
    window.location.pathname.includes("casebeschrijving.html") ||
    window.location.pathname.includes("mijn-deel.html")
) {
    wpl2Menu?.classList.add("is-open");
    wpl2Toggle?.setAttribute("aria-expanded", "true");
}

if (
    window.location.pathname.includes("logboek.html") ||
    window.location.pathname.includes("competenties.html") ||
    window.location.pathname.includes("opdrachten.html") ||
    window.location.pathname.includes("reflecties.html") ||
    window.location.pathname.includes("x-factor.html")
) {
    wpl1Menu?.classList.add("is-open");
    wpl1Toggle?.setAttribute("aria-expanded", "true");
}
