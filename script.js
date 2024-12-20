document.addEventListener('DOMContentLoaded', () => {
    const seatButtons = document.querySelectorAll('button');
  
    seatButtons.forEach((button, index) => {
      button.addEventListener('click', () => {
        const movieId = 1; // Example movieId
        const seatNumber = index;
  
        fetch('/book', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ movieId, seatNumber }),
        })
          .then((response) => response.json())
          .then((data) => {
            alert(data.message);
            if (data.success) button.classList.add('booked');
          });
      });
    });
  });
  