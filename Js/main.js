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
    if(layoutSwitcher) layoutSwitcher.value = savedLayout;
});

// عند التغيير من السلكت
if(layoutSwitcher) {
    layoutSwitcher.addEventListener('change', (e) => {
        applyLayout(e.target.value);
    });
}