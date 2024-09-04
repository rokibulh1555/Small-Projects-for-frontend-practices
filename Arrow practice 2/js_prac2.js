document.addEventListener("DOMContentLoaded", function() {
    function animateCircles() {
        const circleContainers = document.querySelectorAll('.circle_container');
        const writtenSoft = document.querySelector('.writtenSoft');
        const dialogueSpans = document.querySelectorAll('.softbdDialogue span');

        // Reset circles to initial position
        circleContainers.forEach(container => {
            const circles = container.querySelectorAll('.circle');
            circles.forEach(circle => {
                circle.style.transition = 'none';
                circle.style.transform = 'translate(-400px, -400px)';
            });
        });

        // Reset spans to initial position
        dialogueSpans.forEach(span => {
            span.style.transition = 'none';
            span.style.transform = 'translate(-500px, -500px)';
        });

        // Start animation with a small delay to ensure the reset is visible
        setTimeout(() => {
            circleContainers.forEach((container, index) => {
                const circles = container.querySelectorAll('.circle');

                circles.forEach((circle, i) => {
                    setTimeout(() => {
                        circle.style.transition = 'all 3s ease-in-out';
                        circle.style.transform = 'translate(0, 0)';
                    }, 500 * i); // Animate each circle with a delay
                });
            });

            // Animate writtenSoft
            setTimeout(() => {
                writtenSoft.style.transition = 'all 3s ease-in-out';
                writtenSoft.style.transform = 'translate(0, 0)';
            }, 2800);

            // Animate spans with a delay between each
            dialogueSpans.forEach((span, i) => {
                setTimeout(() => {
                    span.style.transition = 'all 3s ease-in-out';
                    span.style.transform = 'translate(0, 0)';
                }, 3000 + (i * 500)); // Adjust the delay for each span
            });
        }, 100); // Delay to allow reset to take effect

        // Restart the animation loop after 7 seconds
        setTimeout(animateCircles, 7100);
    }

    // Start the animation loop
    animateCircles();
});
