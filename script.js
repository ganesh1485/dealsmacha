document.addEventListener('DOMContentLoaded', () => {
    // Get all category buttons
    const categoryButtons = document.querySelectorAll('.category-btn');
    
    // Add click event listener to each button
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');
            
            // Hide all sections
            document.querySelectorAll('.category-section').forEach(section => {
                section.style.display = 'none';
            });
            
            // Show selected section
            const category = button.getAttribute('data-category');
            document.getElementById(category).style.display = 'grid';
        });
    });
});