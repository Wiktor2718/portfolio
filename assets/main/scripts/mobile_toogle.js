let isMobileLayerInitialized = false;

function toggleMobileLayer() {
    if (window.innerWidth <= 600 && !isMobileLayerInitialized) {
        const workList = document.querySelector('.work-list');
        const layers = document.querySelectorAll('.mobile-toggle');

        if (workList) {
            workList.addEventListener('click', (event) => {
                const workItem = event.target.closest('.work');
                if (workItem) {
                    const layer = workItem.querySelector('.mobile-toggle');

                    // Close all other layers
                    layers.forEach(otherLayer => {
                        if (otherLayer !== layer) {
                            otherLayer.classList.remove('active');
                        }
                    });

                    // Toggle the clicked layer
                    if (layer.classList.contains('active')) {
                        layer.classList.remove('active');
                    } else {
                        layer.classList.add('active');
                    }

                }
            });
        }

        isMobileLayerInitialized = true; // Ensure initialization happens only once
    }
}

window.addEventListener('DOMContentLoaded', toggleMobileLayer);
window.addEventListener('resize', toggleMobileLayer);