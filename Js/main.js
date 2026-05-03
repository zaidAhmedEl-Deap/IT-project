console.log(window);
console.dir(document);

const layoutSwitcher = document.getElementById('layout-switcher');

// وظيفة تطبيق الـ Layout
function applyLayout(layout) {
    document.body.classList.remove('layout-horizontal', 'layout-sidebar');
    document.body.classList.add(`layout-${layout}`);
    localStorage.setItem('preferredLayout', layout);
}

// عند التحميل
window.addEventListener('DOMContentLoaded', () => {
    const savedLayout = localStorage.getItem('preferredLayout') || 'horizontal';
    applyLayout(savedLayout);
    if (layoutSwitcher) layoutSwitcher.value = savedLayout;
});

// عند التغيير من السلكت
if (layoutSwitcher) {
    layoutSwitcher.addEventListener('change', (e) => {
        applyLayout(e.target.value);
    });
}

//nav bar responsive horizontal layout
const hamborgur = document.querySelector('.navbar__hamburger');
const hamborgurICon = document.querySelector('.navbar__hamburger i');
const dropDownMenu = document.querySelector('.dropdown-menu');

hamborgur.onclick = function () {
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open')

    hamborgurICon.classList = isOpen
        ? 'fa-solid fa-xmark'
        : 'fa-solid fa-bars'
}

//search code
