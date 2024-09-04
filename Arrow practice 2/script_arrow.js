// Example of triggering animation
document.querySelectorAll('.circle').forEach((circle, index) => {
    setTimeout(() => {
      circle.style.animation = 'fly-in 2s ease-in-out forwards';
    }, index * 200);
  });
  