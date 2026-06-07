// Destinations data
const destinations = [
    {
        name: 'Paris, France',
        image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&q=80',
        description: 'The City of Light awaits with world-class museums and iconic landmarks.',
        season: 'April - June, September - October',
        temperature: '15°C - 25°C',
        language: 'French',
        currency: 'Euro (EUR)',
        rating: 4.9,
        attractions: ['Eiffel Tower', 'Louvre Museum', 'Notre-Dame', 'Arc de Triomphe', 'Champs-Élysées']
    },
    {
        name: 'Tokyo, Japan',
        image: 'https://images.unsplash.com/photo-1540959375944-7049f642e9cc?w=600&q=80',
        description: 'Experience ancient temples and cutting-edge technology in harmony.',
        season: 'March - May, September - November',
        temperature: '10°C - 26°C',
        language: 'Japanese',
        currency: 'Japanese Yen (JPY)',
        rating: 4.8,
        attractions: ['Senso-ji Temple', 'Shibuya Crossing', 'Tokyo Tower', 'Meiji Shrine', 'Tsukiji Market']
    },
    {
        name: 'New York, USA',
        image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=600&q=80',
        description: 'The city that never sleeps offers endless entertainment and dining.',
        season: 'April - June, September - November',
        temperature: '5°C - 25°C',
        language: 'English',
        currency: 'US Dollar (USD)',
        rating: 4.7,
        attractions: ['Statue of Liberty', 'Empire State Building', 'Times Square', 'Central Park', 'Brooklyn Bridge']
    },
    {
        name: 'Dubai, UAE',
        image: 'https://images.unsplash.com/photo-1512453333214-41affa4ab2b4?w=600&q=80',
        description: 'Luxury shopping, futuristic architecture, and desert adventures.',
        season: 'October - March',
        temperature: '15°C - 30°C',
        language: 'Arabic, English',
        currency: 'UAE Dirham (AED)',
        rating: 4.6,
        attractions: ['Burj Khalifa', 'Palm Jumeirah', 'Dubai Mall', 'Desert Safari', 'Gold Souk']
    },
    {
        name: 'Barcelona, Spain',
        image: 'https://images.unsplash.com/photo-1562883714051-b75a69861637?w=600&q=80',
        description: 'Artistic architecture, vibrant culture, and Mediterranean beaches.',
        season: 'May - June, September - October',
        temperature: '12°C - 27°C',
        language: 'Spanish, Catalan',
        currency: 'Euro (EUR)',
        rating: 4.8,
        attractions: ['Sagrada Familia', 'Park Güell', 'Las Ramblas', 'Gothic Quarter', 'Montjuïc']
    },
    {
        name: 'Sydney, Australia',
        image: 'https://images.unsplash.com/photo-1506973404872-a4e142e9c147?w=600&q=80',
        description: 'Iconic landmarks, stunning beaches, and vibrant harbor views.',
        season: 'September - November, March - May',
        temperature: '8°C - 26°C',
        language: 'English',
        currency: 'Australian Dollar (AUD)',
        rating: 4.7,
        attractions: ['Opera House', 'Harbour Bridge', 'Bondi Beach', 'Blue Mountains', 'Taronga Zoo']
    },
    {
        name: 'Rome, Italy',
        image: 'https://images.unsplash.com/photo-1552832860-cfb67165eaf0?w=600&q=80',
        description: 'Ancient history, Renaissance art, and mouthwatering Italian cuisine.',
        season: 'April - June, September - October',
        temperature: '10°C - 25°C',
        language: 'Italian',
        currency: 'Euro (EUR)',
        rating: 4.9,
        attractions: ['Colosseum', 'Vatican City', 'Pantheon', 'Trevi Fountain', 'Roman Forum']
    },
    {
        name: 'Bangkok, Thailand',
        image: 'https://images.unsplash.com/photo-1508701115722-e879886daf5e?w=600&q=80',
        description: 'Buddhist temples, bustling markets, and delicious street food.',
        season: 'November - February',
        temperature: '22°C - 32°C',
        language: 'Thai',
        currency: 'Thai Baht (THB)',
        rating: 4.6,
        attractions: ['Grand Palace', 'Wat Arun', 'Floating Markets', 'Chatuchak Weekend Market', 'Lumphini Park']
    },
    {
        name: 'Rio de Janeiro, Brazil',
        image: 'https://images.unsplash.com/photo-1483729558449-99daa61582c0?w=600&q=80',
        description: 'Stunning beaches, vibrant culture, and Christ the Redeemer statue.',
        season: 'May - September',
        temperature: '15°C - 30°C',
        language: 'Portuguese',
        currency: 'Brazilian Real (BRL)',
        rating: 4.5,
        attractions: ['Christ the Redeemer', 'Copacabana Beach', 'Sugarloaf Mountain', 'Ipanema', 'Lapa District']
    },
    {
        name: 'London, UK',
        image: 'https://images.unsplash.com/photo-1520763185298-1b434c919eba?w=600&q=80',
        description: 'Royal palaces, historic landmarks, and world-class museums.',
        season: 'May - September',
        temperature: '8°C - 22°C',
        language: 'English',
        currency: 'British Pound (GBP)',
        rating: 4.7,
        attractions: ['Big Ben', 'Buckingham Palace', 'Tower of London', 'British Museum', 'Tower Bridge']
    },
    {
        name: 'Amsterdam, Netherlands',
        image: 'https://images.unsplash.com/photo-1475568503062-469a11a5e3f1?w=600&q=80',
        description: 'Picturesque canals, bicycle culture, and world-class art museums.',
        season: 'April - May, September - October',
        temperature: '8°C - 20°C',
        language: 'Dutch, English',
        currency: 'Euro (EUR)',
        rating: 4.8,
        attractions: ['Canal Ring', 'Van Gogh Museum', 'Anne Frank House', 'Amsterdam Market', 'Dam Square']
    },
    {
        name: 'Singapore',
        image: 'https://images.unsplash.com/photo-1523159335684-36898badc3f2?w=600&q=80',
        description: 'Modern metropolis with lush gardens and diverse multicultural cuisine.',
        season: 'February - April, July - September',
        temperature: '24°C - 32°C',
        language: 'English, Mandarin, Malay, Tamil',
        currency: 'Singapore Dollar (SGD)',
        rating: 4.6,
        attractions: ['Gardens by the Bay', 'Sentosa Island', 'Marina Bay Sands', 'Chinatown', 'Orchard Road']
    }
];

// Initialize destinations on page load
document.addEventListener('DOMContentLoaded', () => {
    renderDestinations(destinations);
    setFeaturedDestination(destinations[0]);
});

// Render destinations grid
function renderDestinations(data) {
    const grid = document.getElementById('destinationsGrid');
    grid.innerHTML = '';

    if (data.length === 0) {
        grid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: #718096;">No destinations found. Try a different search.</p>';
        return;
    }

    data.forEach(destination => {
        const card = document.createElement('div');
        card.className = 'destination-card';
        card.innerHTML = `
            <img src="${destination.image}" alt="${destination.name}" class="destination-card-image">
            <div class="destination-card-content">
                <h3>${destination.name}</h3>
                <p>${destination.description}</p>
                <div class="card-footer">
                    <span class="rating">⭐ ${destination.rating}</span>
                    <button class="view-btn" onclick="viewDestination('${destination.name}')">Explore</button>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Filter destinations by search
function filterDestinations() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const filtered = destinations.filter(dest => 
        dest.name.toLowerCase().includes(searchInput) || 
        dest.description.toLowerCase().includes(searchInput)
    );
    renderDestinations(filtered);
}

// Set featured destination
function setFeaturedDestination(destination) {
    document.getElementById('featuredImg').src = destination.image;
    document.getElementById('featuredTitle').textContent = destination.name;
    document.getElementById('featuredDesc').textContent = destination.description;
    document.getElementById('featuredSeason').textContent = destination.season;
    document.getElementById('featuredTemp').textContent = destination.temperature;
}

// View destination details
function viewDestination(destinationName) {
    const destination = destinations.find(d => d.name === destinationName);
    if (!destination) return;

    const modal = document.getElementById('destinationModal');
    document.getElementById('modalImg').src = destination.image;
    document.getElementById('modalTitle').textContent = destination.name;
    document.getElementById('modalDesc').textContent = destination.description;
    document.getElementById('modalSeason').textContent = destination.season;
    document.getElementById('modalTemp').textContent = destination.temperature;
    document.getElementById('modalLanguage').textContent = destination.language;
    document.getElementById('modalCurrency').textContent = destination.currency;

    const attractionsList = document.getElementById('modalAttractions');
    attractionsList.innerHTML = '';
    destination.attractions.forEach(attraction => {
        const li = document.createElement('li');
        li.textContent = attraction;
        attractionsList.appendChild(li);
    });

    modal.style.display = 'block';
}

// Close modal
function closeModal() {
    document.getElementById('destinationModal').style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('destinationModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

// Handle form submission
function handleSubmit(event) {
    event.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    event.target.reset();
}

// Allow search on Enter key
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            filterDestinations();
        }
    });
});
