//your code here
let draggedItem = null;
let containers = document.querySelectorAll('.image');

// Add IDs to the divs
containers.forEach((container, index) => {
    container.id = `div${index + 1}`;
});

// Add event listeners to each container
containers.forEach(container => {
    // When drag starts
    container.addEventListener('dragstart', (e) => {
        draggedItem = container;
        setTimeout(() => {
            container.classList.add('dragging');
        }, 0);
    });

    // When drag ends
    container.addEventListener('dragend', () => {
        draggedItem.classList.remove('dragging');
        draggedItem = null;
    });

    // When dragging over a container
    container.addEventListener('dragover', (e) => {
        e.preventDefault();
    });

    // When entering a draggable container
    container.addEventListener('dragenter', (e) => {
        e.preventDefault();
        if (container !== draggedItem) {
            container.classList.add('selected');
        }
    });

    // When leaving a draggable container
    container.addEventListener('dragleave', () => {
        container.classList.remove('selected');
    });

    // When dropping
    container.addEventListener('drop', (e) => {
        e.preventDefault();
        container.classList.remove('selected');
        
        if (container !== draggedItem) {
            // Get all items
            const allItems = [...containers];
            
            // Get positions of dragged and dropped items
            const draggedPosition = allItems.indexOf(draggedItem);
            const droppedPosition = allItems.indexOf(container);
            
            // Swap background images
            const draggedBackground = window.getComputedStyle(draggedItem).backgroundImage;
            const droppedBackground = window.getComputedStyle(container).backgroundImage;
            
            draggedItem.style.backgroundImage = droppedBackground;
            container.style.backgroundImage = draggedBackground;
        }
    });
});