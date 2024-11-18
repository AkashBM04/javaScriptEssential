// Sample data (can be replaced with actual data)
const travelData = {
    countries: [
      {
        id: 1,
        name: "Australia",
        cities: [
          {
            name: "Sydney, Australia",
            imageUrl: "images/enter_your_image_for_sydney.jpg",
            description: "A vibrant city known for its iconic landmarks like the Sydney Opera House and Sydney Harbour Bridge."
          },
          {
            name: "Melbourne, Australia",
            imageUrl: "images/enter_your_image_for_melbourne.jpg",
            description: "A cultural hub famous for its art, food, and diverse neighborhoods."
          }
        ]
      },
      {
        id: 2,
        name: "Japan",
        cities: [
          {
            name: "Tokyo, Japan",
            imageUrl: "images/enter_your_image_for_tokyo.jpg",
            description: "A bustling metropolis blending tradition and modernity, famous for its cherry blossoms and rich culture."
          },
          {
            name: "Kyoto, Japan",
            imageUrl: "images/enter_your_image_for_kyoto.jpg",
            description: "Known for its historic temples, gardens, and traditional tea houses."
          }
        ]
      },
      {
        id: 3,
        name: "Brazil",
        cities: [
          {
            name: "Rio de Janeiro, Brazil",
            imageUrl: "images/enter_your_image_for_rio.jpg",
            description: "A lively city known for its stunning beaches, vibrant carnival celebrations, and iconic landmarks."
          },
          {
            name: "São Paulo, Brazil",
            imageUrl: "images/enter_your_image_for_sao-paulo.jpg",
            description: "The financial hub with diverse culture, arts, and a vibrant nightlife."
          }
        ]
      }
    ],
    temples: [
      {
        id: 1,
        name: "Angkor Wat, Cambodia",
        imageUrl: "images/enter_your_image_for_angkor-wat.jpg",
        description: "A UNESCO World Heritage site and the largest religious monument in the world."
      },
      {
        id: 2,
        name: "Taj Mahal, India",
        imageUrl: "images/enter_your_image_for_taj-mahal.jpg",
        description: "An iconic symbol of love and a masterpiece of Mughal architecture."
      }
    ],
    beaches: [
      {
        id: 1,
        name: "Bora Bora, French Polynesia",
        imageUrl: "images/enter_your_image_for_bora-bora.jpg",
        description: "An island known for its stunning turquoise waters and luxurious overwater bungalows."
      },
      {
        id: 2,
        name: "Copacabana Beach, Brazil",
        imageUrl: "images/enter_your_image_for_copacabana.jpg",
        description: "A famous beach in Rio de Janeiro, Brazil, with a vibrant atmosphere and scenic views."
      }
    ]
  };
  
  // Function to display results dynamically based on search input
  function searchDestinations() {
      let searchInput = document.getElementById('search-bar').value.toLowerCase();
      
      // Filter the data
      const filteredBeaches = travelData.beaches.filter(item => item.name.toLowerCase().includes(searchInput));
      const filteredTemples = travelData.temples.filter(item => item.name.toLowerCase().includes(searchInput));
      const filteredCountries = travelData.countries.filter(item => item.name.toLowerCase().includes(searchInput));
  
      // Clear previous results
      document.getElementById('beaches-list').innerHTML = '';
      document.getElementById('temples-list').innerHTML = '';
      document.getElementById('countries-list').innerHTML = '';
  
      // Display filtered results for Beaches
      filteredBeaches.forEach(beach => {
          document.getElementById('beaches-list').innerHTML += `
              <div class="destination">
                  <img src="${beach.imageUrl}" alt="${beach.name}">
                  <p><strong>${beach.name}</strong></p>
                  <p>${beach.description}</p>
              </div>
          `;
      });
  
      // Display filtered results for Temples
      filteredTemples.forEach(temple => {
          document.getElementById('temples-list').innerHTML += `
              <div class="destination">
                  <img src="${temple.imageUrl}" alt="${temple.name}">
                  <p><strong>${temple.name}</strong></p>
                  <p>${temple.description}</p>
              </div>
          `;
      });
  
      // Display filtered results for Countries
      filteredCountries.forEach(country => {
          country.cities.forEach(city => {
              document.getElementById('countries-list').innerHTML += `
                  <div class="destination">
                      <img src="${city.imageUrl}" alt="${city.name}">
                      <p><strong>${city.name}</strong></p>
                      <p>${city.description}</p>
                  </div>
              `;
          });
      });
  }
  