const movies = require('./data');

function bookSeat(movieId, seatNumber) {
  const movie = movies.find((m) => m.id === movieId);
  if (!movie) return { success: false, message: 'Movie not found' };

  if (seatNumber < 0 || seatNumber >= movie.seating.length) {
    return { success: false, message: 'Invalid seat number' };
  }

  if (movie.seating[seatNumber]) {
    return { success: false, message: 'Seat already booked' };
  }

  movie.seating[seatNumber] = true;
  return { success: true, message: `Seat ${seatNumber + 1} booked successfully` };
}

module.exports = { bookSeat };
