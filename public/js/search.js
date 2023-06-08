

const searchHandler = async (event) => {
    event.preventDefault();

    const city = document.querySelector('#city').value.trim();
    console.log(city)
    document.location.replace(`/event/${city}`);

}

document
    .querySelector('#find-events')
    .addEventListener('click', searchHandler);