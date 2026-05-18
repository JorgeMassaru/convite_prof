const egg = document.getElementById('egg');
const eggContainer = document.getElementById('eggContainer');
const card = document.getElementById('card');
const cardInner = document.getElementById('cardInner');

// STAGE 1: CRACK THE EGG
egg.addEventListener('click', () => {
    // Add shake effect
    egg.classList.add('shake');

    setTimeout(() => {
        // Change to cracked egg / hatching state
        egg.innerHTML = '🐣';
        egg.style.transform = 'scale(1.5)';

        setTimeout(() => {
            // Fade out egg container
            eggContainer.style.opacity = '0';
            eggContainer.style.transition = 'opacity 0.5s';

            setTimeout(() => {
                eggContainer.classList.add('hidden');

                // Show the card (which contains the photo)
                card.classList.remove('hidden');
                card.style.opacity = '0';
                card.style.transform = 'scale(0.5)';

                // Animation of photo "growing" from the egg
                setTimeout(() => {
                    card.style.transition = 'all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
                    card.style.opacity = '1';
                    card.style.transform = 'scale(1)';
                }, 50);

            }, 500);
        }, 1000);
    }, 500);
});

// STAGE 2: FLIP THE PHOTO
card.addEventListener('click', () => {
    card.classList.toggle('flipped');
});