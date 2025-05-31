    document.addEventListener('DOMContentLoaded', function() {
        // Loading screen
        const loadingScreen = document.querySelector('.loading-screen');
        setTimeout(() => {
            loadingScreen.classList.add('fade-out');
            setTimeout(() => {
                loadingScreen.style.display = 'none';
            }, 200);
        }, 550);

        const categoryButtons = document.querySelectorAll('.category-btn');
        const categorySections = document.querySelectorAll('.category-section');

        // Function to apply theme
        function applyTheme() {
            const themes = [
                {
                    background: '#1a1a2e',
                    heading: '#e94560',
                    button: '#16213e',
                    buttonHover: '#0f3460',
                    buttonText: '#ffffff',
                    buyButton: '#e94560',
                    buyButtonHover: '#ff6b81'
                },
                {
                    background: '#2c3e50',
                    heading: '#3498db',
                    button: '#34495e',
                    buttonHover: '#2980b9',
                    buttonText: '#ecf0f1',
                    buyButton: '#3498db',
                    buyButtonHover: '#5dade2'
                },
                {
                    background: '#2d3436',
                    heading: '#00b894',
                    button: '#636e72',
                    buttonHover: '#00b894',
                    buttonText: '#dfe6e9',
                    buyButton: '#00b894',
                    buyButtonHover: '#55efc4'
                },
                {
                    background: '#2c1810',
                    heading: '#e17055',
                    button: '#6d4c41',
                    buttonHover: '#e17055',
                    buttonText: '#f5f6fa',
                    buyButton: '#e17055',
                    buyButtonHover: '#ff9f7f'
                },
                {
                    background: '#2d3436',
                    heading: '#6c5ce7',
                    button: '#636e72',
                    buttonHover: '#6c5ce7',
                    buttonText: '#dfe6e9',
                    buyButton: '#6c5ce7',
                    buyButtonHover: '#a29bfe'
                },
                {
                    background: '#2c3e50',
                    heading: '#e74c3c',
                    button: '#34495e',
                    buttonHover: '#e74c3c',
                    buttonText: '#ecf0f1',
                    buyButton: '#e74c3c',
                    buyButtonHover: '#ff6b6b'
                }
            ];

            const randomTheme = themes[Math.floor(Math.random() * themes.length)];
            
            document.body.style.backgroundColor = randomTheme.background;
            document.querySelector('h1').style.color = randomTheme.heading;
            
            categoryButtons.forEach(button => {
                button.style.backgroundColor = randomTheme.button;
                button.style.color = randomTheme.buttonText;
                button.style.setProperty('--button-hover', randomTheme.buttonHover);
                button.style.setProperty('--button-active', randomTheme.buttonHover);
            });

            const buyButtons = document.querySelectorAll('.buy-button');
            buyButtons.forEach(button => {
                button.style.backgroundColor = randomTheme.buyButton;
                button.style.setProperty('--button-hover', randomTheme.buyButtonHover);
            });
        }

        // Apply theme on page load
        applyTheme();

        // Category button click handler
        categoryButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all buttons
                categoryButtons.forEach(btn => {
                    btn.classList.remove('active');
                });
                
                // Add active class to clicked button
                this.classList.add('active');
                
                const category = this.getAttribute('data-category');
                
                // Hide all sections
                categorySections.forEach(section => {
                    section.style.display = 'none';
                });
                
                // Show selected section
                document.getElementById(category).style.display = 'grid';
            });
        });
    });
