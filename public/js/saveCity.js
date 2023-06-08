

var saveBtn = document.querySelector('.saveBtn');
/* <button class="saveBtn">Save</button> */




saveBtn.addEventListener('click', function (event) {
  saveCity(event);
  saveEvent(event);
  console.log('click');
})

const saveCity = async (event) => {
  const dataForCity = event.target.dataset;
  console.log(dataForCity);
  const response = await fetch('/api/city', {
    method: "post",
    body: JSON.stringify({
      cityName: event.target.dataset.city,
      image: event.target.dataset.image,

    }),
    headers: { 'Content-Type': 'application/json' },
  })
  console.log(response);
};

const saveEvent = async (event) => {
  const dataForEvent = event.target.dataset;
  console.log(dataForEvent);
  const response = await fetch('/api/event', {
    method: "post",
    body: JSON.stringify({
      eventName: event.target.dataset.eventName,
      url: event.target.dataset.URL,
      image: event.target.dataset.image,
      starting_date: event.target.dataset.startDate,
      genre: event.target.dataset.genre,
      location: event.target.dataset.venue,

    }),
    headers: { 'Content-Type': 'application/json' },
  })
  console.log(response);
};
// how to get the city_id
// const saveEvent = (event) => {
//     db.query(`INSERT INTO event (event_name, URL, image, starting_date, price_range, genre, location, city_id)
//     VALUES(${result.name}, ${result.url}, ${result.images[0],url}, ${result.dates.start.localDate}, '${result.priceRanges[0].min}-${result.priceRanges[0].max}', ${result.classification[0].genre.name}, `)
// };