document.addEventListener('DOMContentLoaded', () => {
    const repairOptions = document.querySelectorAll('.repair-option');
    const orbitRadius = 300; // Distance from center
    
    function arrangeRepairOptions() {
        repairOptions.forEach((option, index) => {
            const angle = (index * (360 / repairOptions.length) + (Math.random() * 20 - 10)) * (Math.PI / 180);
            const x = Math.cos(angle) * orbitRadius;
            const y = Math.sin(angle) * orbitRadius;
            
            option.style.left = `calc(50% + ${x}px - 100px)`;
            option.style.top = `calc(50% + ${y}px - 100px)`;
            option.style.animation = `floatAnimation 6s ease-in-out infinite`;
            option.style.animationDelay = `${index * 0.5}s`;
        });
    }

    arrangeRepairOptions();

    // Interactive hover effects
    repairOptions.forEach(option => {
        option.addEventListener('mouseenter', () => {
            repairOptions.forEach(otherOption => {
                if (otherOption !== option) {
                    otherOption.style.opacity = '0.5';
                }
            });
        });

        option.addEventListener('mouseleave', () => {
            repairOptions.forEach(otherOption => {
                otherOption.style.opacity = '1';
            });
        });
    });

    // Mobile touch interaction
    repairOptions.forEach(option => {
        option.addEventListener('click', () => {
            const card = option.querySelector('.repair-option-card');
            const title = option.getAttribute('data-title');
            
            card.style.transform = 'scale(1.05)';
            setTimeout(() => {
                card.style.transform = 'scale(1)';
            }, 200);
        });
    });

    // Responsive layout adjustment
    window.addEventListener('resize', arrangeRepairOptions);
});