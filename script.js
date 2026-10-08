// =========================
// Travel destinations
// =========================

const places = [
    {
        name: "London",
        country: "United Kingdom",
        coordinates: [51.5074, -0.1278],
        rating: "9.1 / 10",
        tag: "TRAVEL NOTE",
        quote: "“Somehow, I keep coming back.”",
        description:
            "A city of rainy walks, tiny cafés, museums and unexpected discoveries."
    },

    {
        name: "Edinburgh",
        country: "United Kingdom",
        coordinates: [55.9533, -3.1883],
        rating: "9.0 / 10",
        tag: "CITY WALK",
        quote: "“The kind of city that makes you slow down.”",
        description:
            "Stone streets, dramatic skies, cosy cafés and one of my favourite city walks."
    },

    {
        name: "Shanghai",
        country: "China",
        coordinates: [31.2304, 121.4737],
        rating: "9.5 / 10",
        tag: "HOME NOTE",
        quote: "“Familiar streets, new stories.”",
        description:
            "A city I know well, but somehow always manage to see differently."
    },

    {
        name: "Paris",
        country: "France",
        coordinates: [48.8566, 2.3522],
        rating: "9.2 / 10",
        tag: "CITY BREAK",
        quote: "“No plan. Just keep walking.”",
        description:
            "Long walks, small bakeries, beautiful buildings and the occasional wrong turn."
    },

    {
        name: "Rome",
        country: "Italy",
        coordinates: [41.9028, 12.4964],
        rating: "9.3 / 10",
        tag: "WEEKEND",
        quote: "“Every street feels like a postcard.”",
        description:
            "Ancient ruins, late dinners, golden evenings and too much good food."
    }
];


// =========================
// Create map
// =========================

const map = L.map("map").setView([48, 10], 4);


// Map tiles

L.tileLayer(
    "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
    {
        attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; CARTO'
    }
).addTo(map);


// =========================
// Elements
// =========================

const placeName = document.getElementById("place-name");
const placeCountry = document.getElementById("place-country");
const placeRating = document.getElementById("place-rating");
const placeTag = document.getElementById("place-tag");
const placeQuote = document.getElementById("place-quote");
const placeDescription = document.getElementById("place-description");


// =========================
// Update place card
// =========================

function showPlace(place) {

    placeName.textContent = place.name;

    placeCountry.textContent = place.country;

    placeRating.textContent = place.rating;

    placeTag.textContent = place.tag;

    placeQuote.textContent = place.quote;

    placeDescription.textContent = place.description;
}


// =========================
// Add markers
// =========================

places.forEach((place) => {

    const marker = L.marker(place.coordinates).addTo(map);

    marker.bindPopup(`
        <strong>${place.name}</strong>
        <br>
        ${place.country}
        <br><br>
        ${place.rating}
    `);

    marker.on("click", () => {

        showPlace(place);

        // Smoothly move the page down to the card

        document.getElementById("place-card").scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    });

});


// =========================
// Statistics
// =========================

document.getElementById("place-count").textContent =
    places.length;

const countries = new Set(
    places.map((place) => place.country)
);

document.getElementById("country-count").textContent =
    countries.size;


// =========================
// Guide button
// =========================

document
    .getElementById("guide-button")
    .addEventListener("click", () => {

        alert(
            "The travel guide section is coming next ✈️"
        );

    });


// =========================
// Default place
// =========================

showPlace(places[0]);
