function animateCard(card, url) {
    // Add animation class
    card.classList.add('animate-circle');

    // Redirect to new page after animation ends
    setTimeout(() => {
        window.location.href = url;
    }, 2000); // Delay matches the duration of the animation
}

