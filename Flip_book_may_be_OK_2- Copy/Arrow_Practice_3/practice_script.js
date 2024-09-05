document.addEventListener("DOMContentLoaded", function() {
    function animateCircles() {
        const circleContainers = document.querySelectorAll('.circle_container');
        const writtenSoft = document.querySelector('.writtenSoft');
        const softbdDialogue = document.querySelector('.softbdDialogue');
        const dialogueSpans = document.querySelectorAll('.softbdDialogue span');

        // Reset circles to initial position
        circleContainers.forEach(container => {
            const circles = container.querySelectorAll('.circle');
            circles.forEach(circle => {
                circle.style.transition = 'none';
                circle.style.transform = 'translate(-400px, -400px)';
            });
        });

        // Start animation with a small delay to ensure the reset is visible
        setTimeout(() => {
            circleContainers.forEach((container, index) => {
                const circles = container.querySelectorAll('.circle');

                // Animate the first circle in each container
                setTimeout(() => {
                    circles[0].style.transition = 'all 3s ease-in-out';
                    circles[0].style.transform = 'translate(0, 0)';
                }, 500); // Start after 0.5 seconds

                // Animate the second circle in each container
                setTimeout(() => {
                    circles[1].style.transition = 'all 3s ease-in-out';
                    circles[1].style.transform = 'translate(0, 0)';
                }, 1000); // Start after 1 second

                setTimeout(() => {
                    circles[2].style.transition = 'all 3s ease-in-out';
                    circles[2].style.transform = 'translate(0, 0)';
                }, 1500);

                setTimeout(() => {
                    circles[3].style.transition = 'all 3s ease-in-out';
                    circles[3].style.transform = 'translate(0, 0)';
                }, 2000);

                setTimeout(() => {
                    circles[4].style.transition = 'all 3s ease-in-out';
                    circles[4].style.transform = 'translate(0, 0)';
                }, 2300);

                setTimeout(() => {
                    circles[5].style.transition = 'all 3s ease-in-out';
                    circles[5].style.transform = 'translate(0, 0)';
                }, 2600);

                setTimeout(() => {
                    circles[6].style.transition = 'all 3s ease-in-out';
                    circles[6].style.transform = 'translate(0, 0)';
                }, 700);

                setTimeout(() => {
                    circles[7].style.transition = 'all 3s ease-in-out';
                    circles[7].style.transform = 'translate(0, 0)';
                }, 1400);

                setTimeout(() => {
                    circles[8].style.transition = 'all 3s ease-in-out';
                    circles[8].style.transform = 'translate(0, 0)';
                }, 700);

                setTimeout(() => {
                    circles[9].style.transition = 'all 3s ease-in-out';
                    circles[9].style.transform = 'translate(0, 0)';
                }, 1400);


                //For the softBD written logo
                setTimeout(()=>{
                    writtenSoft.style.transition = 'all 3s ease-in-out';
                    writtenSoft.style.transform = 'translate(0,0)';
                }, 2800);


                dialogueSpans.forEach((span, i) => {
                    setTimeout(() => {
                        span.style.transition = 'all 3s ease-in-out';
                        span.style.transform = 'translate(0, 0)';
                    }, 3000 + (i * 500)); // Adjust the delay for each span
                });

            
            });
        }, 100); // Delay to allow reset to take effect

        // Restart the animation loop after 7 seconds
        // setTimeout(animateCircles, 11100);
    }

   

    // Start the animation loop
    animateCircles();


    // function animateSpan() {
    //     const softbdDialogue = document.querySelector('.softbdDialogue');
    //     const dialogueSpan = document.querySelectorAll('.softbdDialogue span');

    //     setTimeout(() => {
    //         circleContainers.forEach((container, index) => {
    //         const dialogueSpan = document.querySelectorAll('.softbdDialogue span');

                
    //             setTimeout(() => {
    //                 circles[0].style.transition = 'all 3s ease-in-out';
    //                 circles[0].style.transform = 'translate(0, 0)';
    //             }, 500);

    //         });
    //     }, 100);
    // }
});