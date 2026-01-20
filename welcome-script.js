// Add smooth page transition
const enterBtn = document.getElementById('enterBtn');

enterBtn.addEventListener('click', (e) => {
    e.preventDefault();

    // Add exit animation
    document.body.style.transition = 'opacity 0.5s ease';
    document.body.style.opacity = '0';

    // Navigate after animation
    setTimeout(() => {
        window.location.href = 'profile.html';
    }, 500);
});

// Add parallax effect to shapes
document.addEventListener('mousemove', (e) => {
    const shapes = document.querySelectorAll('.shape');
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;

    shapes.forEach((shape, index) => {
        const speed = (index + 1) * 10;
        const x = (mouseX - 0.5) * speed;
        const y = (mouseY - 0.5) * speed;

        shape.style.transform = `translate(${x}px, ${y}px)`;
    });
});

// Add entrance animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});
