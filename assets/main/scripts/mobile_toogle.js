function toggleMobileLayer() {
    if (window.innerWidth <= 600) {
        const layers = document.querySelectorAll('.mobile-toggle');
        layers.forEach(layer => {
            layer.parentElement.addEventListener('click', () => {
                // Toggle height to show/hide
                layer.style.height = layer.style.height === '100%' ? '0%' : '100%';
            });
        });
    }
}

window.addEventListener('DOMContentLoaded', toggleMobileLayer);
window.addEventListener('resize', toggleMobileLayer);