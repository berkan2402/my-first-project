// Get elements
const revealBtn = document.getElementById('revealBtn');
const bioSection = document.getElementById('bioSection');

// Toggle bio section visibility
revealBtn.addEventListener('click', () => {
    bioSection.classList.toggle('hidden');
    
    // Update button text based on state
    const buttonText = revealBtn.querySelector('.button-text');
    const buttonIcon = revealBtn.querySelector('.button-icon');
    
    if (bioSection.classList.contains('hidden')) {
        buttonText.textContent = 'Hakkımda';
        buttonIcon.textContent = '→';
    } else {
        buttonText.textContent = 'Gizle';
        buttonIcon.textContent = '×';
    }
});

// Add smooth scroll behavior
document.addEventListener('DOMContentLoaded', () => {
    // Animate elements on load
    const content = document.querySelector('.content');
    content.style.opacity = '0';
    
    setTimeout(() => {
        content.style.transition = 'opacity 0.8s ease';
        content.style.opacity = '1';
    }, 100);
});

// Add interactive cursor effect on bio card
const bioCard = document.querySelector('.bio-card');
const cardGlow = document.querySelector('.card-glow');

if (bioCard && cardGlow) {
    bioCard.addEventListener('mousemove', (e) => {
        const rect = bioCard.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        cardGlow.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(102, 126, 234, 0.4) 0%, transparent 70%)`;
    });
}
