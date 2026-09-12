// ============================================================
// script.js - Explore World (Final v3)
// Features: Fixed Mic, Real Earth, Zoom, AI Chatbot, Auto-count,
// Notifications, Real Images, All previous features
// ============================================================

// ============================================================
// DATA: 39 TOURS (Real images matched to city names)
// ============================================================
const tours = [
    // ===== INDIAN TOURS (18) =====
    { id: 1, name: 'Goa Beach Escape', price: 14999, desc: '3 days of sun, sand & sea at India\'s best beaches', category: 'beach', region: 'india', img: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=400&h=400&fit=crop&auto=format', badge: 'popular', discount: 15, duration: '3 Days', rating: 4.8, reviews: 245 },
    { id: 2, name: 'Himalayan Trek', price: 24999, desc: '5 days of breathtaking mountain views & adventure', category: 'mountain', region: 'india', img: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop&auto=format', badge: 'adventure', discount: 10, duration: '5 Days', rating: 4.9, reviews: 189 },
    { id: 3, name: 'Jaipur City Tour', price: 9999, desc: '2 days exploring the Pink City\'s palaces & forts', category: 'city', region: 'india', img: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?w=400&h=400&fit=crop&auto=format', badge: 'budget', discount: 0, duration: '2 Days', rating: 4.6, reviews: 320 },
    { id: 4, name: 'Kerala Backwaters', price: 18999, desc: '4 days of houseboat stays & serene waterways', category: 'beach', region: 'india', img: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=400&h=400&fit=crop&auto=format', badge: 'luxury', discount: 20, duration: '4 Days', rating: 4.9, reviews: 210 },
    { id: 5, name: 'Varanasi Cultural Tour', price: 12999, desc: '3 days exploring the spiritual capital of India', category: 'cultural', region: 'india', img: 'images/varanasi.png', badge: 'popular', discount: 5, duration: '3 Days', rating: 4.7, reviews: 156 },
    { id: 6, name: 'Rishikesh Adventure', price: 16999, desc: '4 days of rafting, bungee jumping & yoga', category: 'adventure', region: 'india', img: 'images/rishikesh.png', badge: 'adventure', discount: 12, duration: '4 Days', rating: 4.8, reviews: 178 },
    { id: 7, name: 'Darjeeling Himalayan Tour', price: 21999, desc: '5 days of tea gardens & mountain views', category: 'mountain', region: 'india', img: 'images/mountain2.png', badge: 'luxury', discount: 8, duration: '5 Days', rating: 4.7, reviews: 98 },
    { id: 8, name: 'Mumbai City Highlights', price: 7999, desc: '2 days of Bollywood, beaches & street food', category: 'city', region: 'india', img: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=400&h=400&fit=crop&auto=format', badge: 'budget', discount: 0, duration: '2 Days', rating: 4.5, reviews: 245 },
    { id: 9, name: 'Goa Cultural Experience', price: 15999, desc: '3 days of Portuguese heritage & beach fun', category: 'cultural', region: 'india', img: 'https://images.unsplash.com/photo-1587922546307-776227941871?w=400&h=400&fit=crop&auto=format', badge: 'popular', discount: 10, duration: '3 Days', rating: 4.6, reviews: 134 },
    { id: 10, name: 'Kashmir Great Lakes Trek', price: 29999, desc: '7 days of stunning alpine lake trekking', category: 'mountain', region: 'india', img: 'https://images.unsplash.com/photo-1597074866923-dc0589150358?w=400&h=400&fit=crop&auto=format', badge: 'adventure', discount: 15, duration: '7 Days', rating: 5.0, reviews: 87 },
    { id: 11, name: 'Mysore Heritage Tour', price: 8999, desc: '2 days of palaces, temples & silk shopping', category: 'cultural', region: 'india', img: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=400&h=400&fit=crop&auto=format', badge: 'budget', discount: 0, duration: '2 Days', rating: 4.5, reviews: 112 },
    { id: 12, name: 'Andaman Island Escape', price: 34999, desc: '6 days of pristine beaches & water sports', category: 'beach', region: 'india', img: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?w=400&h=400&fit=crop&auto=format', badge: 'luxury', discount: 25, duration: '6 Days', rating: 4.9, reviews: 145 },
    { id: 13, name: 'Rafting in Rishikesh', price: 8999, desc: '2 days of thrilling white water rafting on Ganges', category: 'adventure', region: 'india', img: 'images/rafting.png', badge: 'adventure', discount: 10, duration: '2 Days', rating: 4.7, reviews: 198 },
    { id: 14, name: 'Paragliding in Bir Billing', price: 12999, desc: '3 days of paragliding & camping in the Himalayas', category: 'adventure', region: 'india', img: 'images/paragling.png', badge: 'adventure', discount: 15, duration: '3 Days', rating: 4.8, reviews: 156 },
    { id: 15, name: 'Scuba Diving in Andaman', price: 22999, desc: '4 days of scuba diving & marine exploration', category: 'adventure', region: 'india', img: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=400&fit=crop&auto=format', badge: 'luxury', discount: 20, duration: '4 Days', rating: 4.9, reviews: 132 },
    { id: 16, name: 'Delhi Heritage Walk', price: 6999, desc: '2 days exploring Old Delhi & New Delhi\'s landmarks', category: 'city', region: 'india', img: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=400&h=400&fit=crop&auto=format', badge: 'budget', discount: 0, duration: '2 Days', rating: 4.4, reviews: 234 },
    { id: 17, name: 'Bangalore Tech & Nature', price: 8499, desc: '2 days of IT parks, gardens & lakes of Bengaluru', category: 'city', region: 'india', img: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=400&h=400&fit=crop&auto=format', badge: 'popular', discount: 5, duration: '2 Days', rating: 4.5, reviews: 178 },
    { id: 18, name: 'Hyderabad Culture', price: 7999, desc: '2 days of biryani, pearls & monuments of Hyderabad', category: 'city', region: 'india', img: 'images/hyderabad.png', badge: 'budget', discount: 0, duration: '2 Days', rating: 4.6, reviews: 189 },

    // ===== EUROPE (6) - Real city images =====
    { id: 19, name: 'Paris Romance', price: 85000, desc: '5 days in the City of Love - Eiffel Tower & Louvre', category: 'city', region: 'europe', img: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400&h=400&fit=crop&auto=format', badge: 'luxury', discount: 10, duration: '5 Days', rating: 4.9, reviews: 456 },
    { id: 20, name: 'Rome Ancient Tour', price: 75000, desc: '5 days exploring Colosseum, Vatican & Roman history', category: 'cultural', region: 'europe', img: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400&h=400&fit=crop&auto=format', badge: 'popular', discount: 8, duration: '5 Days', rating: 4.8, reviews: 389 },
    { id: 21, name: 'London Royal Experience', price: 95000, desc: '6 days of Big Ben, Buckingham & British culture', category: 'city', region: 'europe', img: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400&h=400&fit=crop&auto=format', badge: 'luxury', discount: 12, duration: '6 Days', rating: 4.8, reviews: 312 },
    { id: 22, name: 'Swiss Alps Adventure', price: 120000, desc: '7 days of snow-capped peaks & scenic trains', category: 'mountain', region: 'europe', img: 'images/mountain3.png', badge: 'adventure', discount: 15, duration: '7 Days', rating: 5.0, reviews: 245 },
    { id: 23, name: 'Santorini Sunset', price: 90000, desc: '5 days of white-blue villages & Aegean sunsets', category: 'beach', region: 'europe', img: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=400&h=400&fit=crop&auto=format', badge: 'luxury', discount: 10, duration: '5 Days', rating: 4.9, reviews: 378 },
    { id: 24, name: 'Barcelona Art & Beach', price: 80000, desc: '5 days of Gaudí architecture & Mediterranean beaches', category: 'cultural', region: 'europe', img: 'https://images.unsplash.com/photo-1583422409516-2895a77efded?w=400&h=400&fit=crop&auto=format', badge: 'popular', discount: 10, duration: '5 Days', rating: 4.7, reviews: 289 },

    // ===== AMERICAS (4) =====
    { id: 25, name: 'New York City Break', price: 110000, desc: '5 days in the city that never sleeps', category: 'city', region: 'americas', img: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=400&h=400&fit=crop&auto=format', badge: 'luxury', discount: 12, duration: '5 Days', rating: 4.9, reviews: 567 },
    { id: 26, name: 'Los Angeles Dream', price: 95000, desc: '5 days of Hollywood, beaches & theme parks', category: 'city', region: 'americas', img: 'https://images.unsplash.com/photo-1534190760961-74e8c1c5c3da?w=400&h=400&fit=crop&auto=format', badge: 'popular', discount: 10, duration: '5 Days', rating: 4.7, reviews: 423 },
    { id: 27, name: 'Cancun Beach Paradise', price: 85000, desc: '6 days of white sand beaches & Mayan ruins', category: 'beach', region: 'americas', img: 'images/beach3.png', badge: 'luxury', discount: 15, duration: '6 Days', rating: 4.8, reviews: 312 },
    { id: 28, name: 'Toronto Multicultural', price: 90000, desc: '5 days of CN Tower, Niagara Falls & diversity', category: 'city', region: 'americas', img: 'https://images.unsplash.com/photo-1517935706615-2717063c2225?w=400&h=400&fit=crop&auto=format', badge: 'popular', discount: 10, duration: '5 Days', rating: 4.7, reviews: 245 },

    // ===== ASIA (6) =====
    { id: 29, name: 'Tokyo Cherry Blossom', price: 90000, desc: '6 days of sakura, Shibuya & Mount Fuji views', category: 'city', region: 'asia', img: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400&h=400&fit=crop&auto=format', badge: 'luxury', discount: 12, duration: '6 Days', rating: 5.0, reviews: 523 },
    { id: 30, name: 'Dubai Luxury Experience', price: 55000, desc: '4 days of Burj Khalifa, desert safari & malls', category: 'city', region: 'asia', img: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400&h=400&fit=crop&auto=format', badge: 'luxury', discount: 15, duration: '4 Days', rating: 4.8, reviews: 467 },
    { id: 31, name: 'Bali Island Escape', price: 45000, desc: '5 days of beaches, temples & rice terraces', category: 'beach', region: 'asia', img: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400&h=400&fit=crop&auto=format', badge: 'popular', discount: 20, duration: '5 Days', rating: 4.9, reviews: 678 },
    { id: 32, name: 'Singapore Modern Tour', price: 50000, desc: '4 days of Marina Bay, Sentosa & Gardens', category: 'city', region: 'asia', img: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=400&h=400&fit=crop&auto=format', badge: 'popular', discount: 10, duration: '4 Days', rating: 4.8, reviews: 389 },
    { id: 33, name: 'Bangkok Temple Tour', price: 35000, desc: '4 days of golden temples & Thai street food', category: 'cultural', region: 'asia', img: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=400&h=400&fit=crop&auto=format', badge: 'budget', discount: 15, duration: '4 Days', rating: 4.7, reviews: 456 },
    { id: 34, name: 'Maldives Luxury', price: 95000, desc: '5 days of overwater villas & crystal-clear waters', category: 'beach', region: 'asia', img: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=400&h=400&fit=crop&auto=format', badge: 'luxury', discount: 18, duration: '5 Days', rating: 5.0, reviews: 234 },

    // ===== AFRICA (3) =====
    { id: 35, name: 'Cape Town Adventure', price: 85000, desc: '6 days of Table Mountain, safaris & beaches', category: 'adventure', region: 'africa', img: 'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=400&h=400&fit=crop&auto=format', badge: 'adventure', discount: 12, duration: '6 Days', rating: 4.9, reviews: 245 },
    { id: 36, name: 'Marrakech Cultural', price: 65000, desc: '5 days of desert, medinas & Moroccan culture', category: 'cultural', region: 'africa', img: 'https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=400&h=400&fit=crop&auto=format', badge: 'popular', discount: 10, duration: '5 Days', rating: 4.7, reviews: 189 },
    { id: 37, name: 'Cairo Pyramids Tour', price: 70000, desc: '5 days of pyramids, Nile cruise & Egyptian history', category: 'cultural', region: 'africa', img: 'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?w=400&h=400&fit=crop&auto=format', badge: 'popular', discount: 12, duration: '5 Days', rating: 4.8, reviews: 267 },

    // ===== OCEANIA (2) =====
    { id: 38, name: 'Sydney Harbour Tour', price: 100000, desc: '6 days of Opera House, Bondi & Blue Mountains', category: 'city', region: 'oceania', img: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=400&h=400&fit=crop&auto=format', badge: 'luxury', discount: 10, duration: '6 Days', rating: 4.9, reviews: 312 },
    { id: 39, name: 'Queenstown Adventure', price: 115000, desc: '7 days of bungee, skiing & Milford Sound', category: 'adventure', region: 'oceania', img: 'https://images.unsplash.com/photo-1589802829985-817e51171b92?w=400&h=400&fit=crop&auto=format', badge: 'adventure', discount: 15, duration: '7 Days', rating: 5.0, reviews: 198 }
];

// ============================================================
// STATE
// ============================================================
let wishlist = JSON.parse(localStorage.getItem('exploreworld_wishlist')) || [];
let userRatings = JSON.parse(localStorage.getItem('exploreworld_user_ratings')) || {};
let tourComments = JSON.parse(localStorage.getItem('exploreworld_comments')) || {};
let userBookings = JSON.parse(localStorage.getItem('exploreworld_bookings')) || [];
let userPayments = JSON.parse(localStorage.getItem('exploreworld_payments')) || [];
let currentCategory = 'all';
let currentPriceFilter = 'all';
let currentDurationFilter = 'all';
let currentSort = 'default';
let popupTourId = null;
let isLoggedIn = JSON.parse(localStorage.getItem('exploreworld_logged_in')) || false;
let currentSlide = 0;
let totalSlides = 0;
let bookingTour = null;
let selectedPaymentMethod = 'card';
let currentRegion = 'europe';
let pendingAction = null;

let recognition = null;
let isListening = false;
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

// ============================================================
// VOICE RECOGNITION (FIXED)
// ============================================================
function startVoiceSearch(targetInputId, micButton, onResultCallback) {
    if (!SpeechRecognition) {
        showFeedback('⚠️ Voice search not supported in this browser. Try Chrome/Edge.', 'error');
        return;
    }

    // If already listening, stop
    if (isListening && recognition) {
        try { recognition.stop(); } catch(e) {}
        isListening = false;
        document.querySelectorAll('.mic-btn, .hero-mic-btn, .chatbot-mic-btn').forEach(btn => btn.classList.remove('listening'));
        return;
    }

    // Create new instance
    recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = 'en-IN';
    recognition.maxAlternatives = 1;

    recognition.onstart = function() {
        isListening = true;
        if (micButton) micButton.classList.add('listening');
        showFeedback('🎤 Listening... Speak now', 'info');
    };

    recognition.onresult = function(event) {
        const transcript = event.results[0][0].transcript;
        console.log('Voice input:', transcript);

        if (targetInputId) {
            const targetInput = document.getElementById(targetInputId);
            if (targetInput) {
                targetInput.value = transcript;
                targetInput.dispatchEvent(new Event('input'));
            }
        }

        if (onResultCallback) {
            onResultCallback(transcript);
        } else {
            performSearch(transcript);
        }
    };

    recognition.onerror = function(event) {
        console.error('Voice error:', event.error);
        if (event.error === 'not-allowed' || event.error === 'service-not-allowed') {
            showFeedback('⚠️ Microphone access denied. Please allow in browser settings.', 'error');
        } else if (event.error === 'no-speech') {
            showFeedback('🎤 No speech detected. Try again.', 'info');
        } else if (event.error === 'audio-capture') {
            showFeedback('⚠️ No microphone found. Check your device.', 'error');
        } else if (event.error === 'network') {
            showFeedback('⚠️ Network error. Check your connection.', 'error');
        } else if (event.error === 'aborted') {
            // Silent
        } else {
            showFeedback('⚠️ Voice error: ' + event.error, 'error');
        }
        isListening = false;
        document.querySelectorAll('.mic-btn, .hero-mic-btn, .chatbot-mic-btn').forEach(btn => btn.classList.remove('listening'));
    };

    recognition.onend = function() {
        isListening = false;
        document.querySelectorAll('.mic-btn, .hero-mic-btn, .chatbot-mic-btn').forEach(btn => btn.classList.remove('listening'));
    };

    try {
        recognition.start();
    } catch (err) {
        console.error('Recognition start error:', err);
        showFeedback('⚠️ Could not start voice. Try again.', 'error');
        isListening = false;
    }
}

// ============================================================
// SEARCH
// ============================================================
function performSearch(query) {
    const q = (query || '').trim().toLowerCase();
    if (!q) { showFeedback('🔍 Please enter a search term', 'info'); return; }

    document.querySelectorAll('.section').forEach(s => s.classList.add('hidden'));
    const toursSection = document.getElementById('tours');
    if (toursSection) toursSection.classList.remove('hidden');

    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
    document.querySelectorAll('.nav-link[data-section="tours"]').forEach(l => l.classList.add('active'));

    document.querySelectorAll('.cat-btn').forEach(b => b.classList.toggle('active', b.dataset.category === 'all'));
    currentCategory = 'all';
    renderTours('all', currentPriceFilter, currentDurationFilter, currentSort);

    setTimeout(() => {
        const cards = document.querySelectorAll('.tour-card');
        let found = 0;
        cards.forEach(card => {
            const name = card.querySelector('h3')?.innerText?.toLowerCase() || '';
            const desc = card.querySelector('.description')?.innerText?.toLowerCase() || '';
            const match = name.includes(q) || desc.includes(q);
            card.style.display = match ? 'flex' : 'none';
            if (match) found++;
        });
        if (found === 0) showFeedback(`⚠️ No tours found for "${query}"`, 'info');
        else showFeedback(`🔍 Found ${found} tour(s) for "${query}"`, 'success');
    }, 100);
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ============================================================
// PASSWORD TOGGLE
// ============================================================
function setupPasswordToggle() {
    document.querySelectorAll('.toggle-password').forEach(button => {
        button.addEventListener('click', function() {
            const targetId = this.dataset.target;
            const input = document.getElementById(targetId);
            if (input) {
                if (input.type === 'password') { input.type = 'text'; this.textContent = '🙈'; }
                else { input.type = 'password'; this.textContent = '👁️'; }
            }
        });
    });
}

// ============================================================
// ACCOUNT MANAGEMENT
// ============================================================
function checkAccount() {
    const account = JSON.parse(localStorage.getItem('exploreworld_account'));
    const loggedInFlag = localStorage.getItem('exploreworld_logged_in');

    if (account && loggedInFlag === 'true') {
        isLoggedIn = true;
        document.getElementById('createAccountPage').style.display = 'none';
        document.getElementById('mainApp').style.display = 'block';

        document.getElementById('profileName').textContent = account.fullName || 'Traveler';
        document.getElementById('profileEmail').textContent = account.email || '-';
        document.getElementById('profilePhone').textContent = account.phone || '-';
        document.getElementById('editFullName').value = account.fullName || '';
        document.getElementById('editEmail').value = account.email || '';
        document.getElementById('editPhone').value = account.phone || '';

        const avatarData = localStorage.getItem('exploreworld_avatar');
        if (avatarData) {
            const img = document.getElementById('profileAvatarImage');
            img.src = avatarData;
            img.style.display = 'block';
            document.getElementById('profileAvatarText').style.display = 'none';
        } else {
            const img = document.getElementById('profileAvatarImage');
            img.style.display = 'none';
            document.getElementById('profileAvatarText').style.display = 'block';
        }

        renderAddresses();
        renderUserBookings();
        renderUserPayments();

        if (pendingAction) {
            const action = pendingAction;
            pendingAction = null;
            setTimeout(() => {
                if (action.type === 'book') openBookingPopup(action.tourId);
                else if (action.type === 'wishlist') toggleWishlistItem(action.tourId);
                else if (action.type === 'wishlistView') openWishlistOverlay();
                else if (action.type === 'enquiry') openPopup(action.tourId);
            }, 400);
        }
    } else {
        isLoggedIn = false;
        document.getElementById('createAccountPage').style.display = 'none';
        document.getElementById('mainApp').style.display = 'block';
    }
}

function redirectToAccount(actionType, tourId) {
    pendingAction = { type: actionType, tourId: tourId };
    document.getElementById('mainApp').style.display = 'none';
    document.getElementById('createAccountPage').style.display = 'flex';
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// CREATE ACCOUNT
document.getElementById('createAccountForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const fullName = document.getElementById('accFullName').value.trim();
    const email = document.getElementById('accEmail').value.trim();
    const phone = document.getElementById('accPhone').value.trim();
    const password = document.getElementById('accPassword').value;
    const confirmPassword = document.getElementById('accConfirmPassword').value;

    if (!fullName || !email || !phone || !password || !confirmPassword) {
        showFeedback('⚠️ Please fill all fields', 'error'); return;
    }
    if (password !== confirmPassword) { showFeedback('⚠️ Passwords do not match', 'error'); return; }
    if (password.length < 6) { showFeedback('⚠️ Password must be at least 6 characters', 'error'); return; }
    if (!email.includes('@')) { showFeedback('⚠️ Please enter a valid email', 'error'); return; }

    const accountData = { fullName, email, phone, password };
    localStorage.setItem('exploreworld_account', JSON.stringify(accountData));
    localStorage.setItem('exploreworld_logged_in', 'true');
    isLoggedIn = true;
    showFeedback('✅ Account created successfully! 🎉', 'success');
    this.reset();
    checkAccount();
});

// LOGIN
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value;
    const account = JSON.parse(localStorage.getItem('exploreworld_account'));

    if (!account) { showFeedback('⚠️ No account found. Please sign up first.', 'error'); return; }

    if (account.email === email && account.password === password) {
        localStorage.setItem('exploreworld_logged_in', 'true');
        isLoggedIn = true;
        showFeedback('✅ Login successful!', 'success');
        this.reset();
        checkAccount();
    } else {
        showFeedback('⚠️ Invalid email or password', 'error');
    }
});

document.getElementById('showLoginPage').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('.account-box:first-child').style.display = 'none';
    document.getElementById('loginBox').style.display = 'block';
});
document.getElementById('showSignupPage').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('loginBox').style.display = 'none';
    document.querySelector('.account-box:first-child').style.display = 'block';
});

// LOGOUT
document.getElementById('logoutBtn').addEventListener('click', function() {
    if (confirm('Are you sure you want to logout?')) {
        localStorage.removeItem('exploreworld_logged_in');
        isLoggedIn = false;
        showFeedback('🚪 Logged out successfully', 'info');
        document.getElementById('loginForm').reset();
        document.getElementById('createAccountForm').reset();
        document.querySelector('.account-box:first-child').style.display = 'block';
        document.getElementById('loginBox').style.display = 'none';
        document.getElementById('wishlistOverlay').classList.remove('open');
        document.getElementById('tourPopup').classList.remove('open');
        document.getElementById('bookingPopup').classList.remove('open');
        document.querySelectorAll('.section').forEach(s => s.classList.add('hidden'));
        document.getElementById('home').classList.remove('hidden');
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        document.querySelectorAll('.nav-link[data-section="home"]').forEach(l => l.classList.add('active'));
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
});

// ============================================================
// PROFILE PHOTO
// ============================================================
document.getElementById('avatarUpload').addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (!file) return;
    if (!file.type.startsWith('image/')) { showFeedback('⚠️ Please select an image file', 'error'); return; }
    if (file.size > 2 * 1024 * 1024) { showFeedback('⚠️ Image too large. Max 2MB', 'error'); return; }

    const reader = new FileReader();
    reader.onload = function(event) {
        const dataUrl = event.target.result;
        localStorage.setItem('exploreworld_avatar', dataUrl);
        const img = document.getElementById('profileAvatarImage');
        img.src = dataUrl;
        img.style.display = 'block';
        document.getElementById('profileAvatarText').style.display = 'none';
        showFeedback('✅ Profile photo updated!', 'success');
    };
    reader.readAsDataURL(file);
});

// ============================================================
// PROFILE - EDIT / PASSWORD
// ============================================================
document.getElementById('editProfileBtn').addEventListener('click', function() {
    document.getElementById('editProfileForm').style.display = 'block';
    document.getElementById('editProfileForm').scrollIntoView({ behavior: 'smooth' });
});
document.getElementById('cancelProfileBtn').addEventListener('click', function() {
    document.getElementById('editProfileForm').style.display = 'none';
});
document.getElementById('saveProfileBtn').addEventListener('click', function() {
    const account = JSON.parse(localStorage.getItem('exploreworld_account'));
    if (!account) return;
    const fullName = document.getElementById('editFullName').value.trim();
    const email = document.getElementById('editEmail').value.trim();
    const phone = document.getElementById('editPhone').value.trim();
    if (!fullName || !email || !phone) { showFeedback('⚠️ Please fill all fields', 'error'); return; }
    account.fullName = fullName;
    account.email = email;
    account.phone = phone;
    localStorage.setItem('exploreworld_account', JSON.stringify(account));
    document.getElementById('profileName').textContent = fullName;
    document.getElementById('profileEmail').textContent = email;
    document.getElementById('profilePhone').textContent = phone;
    document.getElementById('editProfileForm').style.display = 'none';
    showFeedback('✅ Profile updated successfully!', 'success');
});

document.getElementById('changePasswordBtn').addEventListener('click', function() {
    document.getElementById('changePasswordForm').style.display = 'block';
    document.getElementById('changePasswordForm').scrollIntoView({ behavior: 'smooth' });
});
document.getElementById('cancelPasswordBtn').addEventListener('click', function() {
    document.getElementById('changePasswordForm').style.display = 'none';
    document.getElementById('currentPassword').value = '';
    document.getElementById('newPassword').value = '';
    document.getElementById('confirmNewPassword').value = '';
});
document.getElementById('savePasswordBtn').addEventListener('click', function() {
    const account = JSON.parse(localStorage.getItem('exploreworld_account'));
    if (!account) return;
    const current = document.getElementById('currentPassword').value;
    const newPwd = document.getElementById('newPassword').value;
    const confirmPwd = document.getElementById('confirmNewPassword').value;

    if (current !== account.password) { showFeedback('⚠️ Current password is incorrect', 'error'); return; }
    if (newPwd.length < 6) { showFeedback('⚠️ New password must be at least 6 characters', 'error'); return; }
    if (newPwd !== confirmPwd) { showFeedback('⚠️ Passwords do not match', 'error'); return; }
    account.password = newPwd;
    localStorage.setItem('exploreworld_account', JSON.stringify(account));
    document.getElementById('changePasswordForm').style.display = 'none';
    document.getElementById('currentPassword').value = '';
    document.getElementById('newPassword').value = '';
    document.getElementById('confirmNewPassword').value = '';
    showFeedback('✅ Password changed successfully!', 'success');
});

// ============================================================
// NOTIFICATIONS
// ============================================================
document.getElementById('notificationsBtn').addEventListener('click', function() {
    const panel = document.getElementById('notificationsPanel');
    const isVisible = panel.style.display === 'block';
    panel.style.display = isVisible ? 'none' : 'block';
    if (!isVisible) {
        // Load saved preferences
        const prefs = JSON.parse(localStorage.getItem('exploreworld_notifications')) || {
            bookings: true, offers: true, reminders: false, newsletter: false
        };
        document.getElementById('notifBookings').checked = prefs.bookings;
        document.getElementById('notifOffers').checked = prefs.offers;
        document.getElementById('notifReminders').checked = prefs.reminders;
        document.getElementById('notifNewsletter').checked = prefs.newsletter;
        panel.scrollIntoView({ behavior: 'smooth' });
    }
});

document.getElementById('saveNotificationsBtn').addEventListener('click', function() {
    const prefs = {
        bookings: document.getElementById('notifBookings').checked,
        offers: document.getElementById('notifOffers').checked,
        reminders: document.getElementById('notifReminders').checked,
        newsletter: document.getElementById('notifNewsletter').checked
    };
    localStorage.setItem('exploreworld_notifications', JSON.stringify(prefs));
    showFeedback('✅ Notification preferences saved!', 'success');

    // Show what was enabled
    const enabled = Object.entries(prefs).filter(([k, v]) => v).map(([k]) => k);
    setTimeout(() => {
        if (enabled.length > 0) {
            showFeedback(`🔔 Notifications enabled: ${enabled.join(', ')}`, 'info');
        }
    }, 2600);
});

// ============================================================
// ADDRESSES
// ============================================================
let addresses = JSON.parse(localStorage.getItem('exploreworld_addresses')) || {
    home: '123, Main Street, Andheri East, Mumbai - 400001',
    office: '456, Business Park, BKC, Mumbai - 400051',
    other: '789, Lake View, Pune - 411001'
};

function renderAddresses() {
    const list = document.getElementById('addressList');
    if (!list) return;
    const labels = { home: '🏠 Home', office: '🏢 Office', other: '📍 Other' };
    let html = '';
    Object.keys(addresses).forEach(key => {
        html += `
            <div class="address-card" data-address="${key}">
                <div class="address-type">${labels[key] || key}</div>
                <div class="address-detail">${addresses[key]}</div>
                ${key === 'home' ? '<span class="address-default">Default</span>' : ''}
                ${key !== 'home' ? `<button class="address-delete" onclick="deleteAddress('${key}')">🗑️</button>` : ''}
            </div>
        `;
    });
    list.innerHTML = html || '<p style="color:var(--text-light);">No addresses added yet.</p>';
}

function deleteAddress(key) {
    if (key === 'home') { showFeedback('⚠️ Cannot delete default address', 'error'); return; }
    if (confirm('Delete this address?')) {
        delete addresses[key];
        localStorage.setItem('exploreworld_addresses', JSON.stringify(addresses));
        renderAddresses();
        showFeedback('✅ Address deleted', 'success');
    }
}

document.getElementById('showAddAddress').addEventListener('click', function() {
    document.getElementById('addAddressForm').style.display = 'block';
    document.getElementById('addAddressForm').scrollIntoView({ behavior: 'smooth' });
});
document.getElementById('cancelAddressBtn').addEventListener('click', function() {
    document.getElementById('addAddressForm').style.display = 'none';
    document.getElementById('newAddressLabel').value = '';
    document.getElementById('newAddressDetail').value = '';
});
document.getElementById('saveAddressBtn').addEventListener('click', function() {
    const label = document.getElementById('newAddressLabel').value.trim();
    const detail = document.getElementById('newAddressDetail').value.trim();
    if (!label || !detail) { showFeedback('⚠️ Please fill all fields', 'error'); return; }
    const key = label.toLowerCase().replace(/\s+/g, '_');
    addresses[key] = detail;
    localStorage.setItem('exploreworld_addresses', JSON.stringify(addresses));
    document.getElementById('addAddressForm').style.display = 'none';
    document.getElementById('newAddressLabel').value = '';
    document.getElementById('newAddressDetail').value = '';
    renderAddresses();
    showFeedback('✅ Address added successfully!', 'success');
});

// ============================================================
// BOOKINGS & PAYMENTS RENDER
// ============================================================
function renderUserBookings() {
    const container = document.getElementById('userBookingsList');
    if (!container) return;
    if (userBookings.length === 0) {
        container.innerHTML = '<p style="color:var(--text-light);text-align:center;padding:1.5rem;">No bookings yet. Start exploring!</p>';
        return;
    }
    const sorted = [...userBookings].sort((a, b) => new Date(b.bookingDate) - new Date(a.bookingDate));
    container.innerHTML = sorted.map(b => {
        const hoursPassed = (Date.now() - new Date(b.bookingDate).getTime()) / (1000 * 60 * 60);
        let status = 'pending', statusText = '⏳ Pending', stepClass = 'active';
        if (hoursPassed > 24) { status = 'delivered'; statusText = '✅ Completed'; stepClass = 'completed'; }
        else if (hoursPassed > 1) { status = 'transit'; statusText = '✈️ In Progress'; }

        return `
            <div class="order-card">
                <div class="order-header">
                    <span class="order-id">#${b.id}</span>
                    <span class="order-status ${status}">${statusText}</span>
                </div>
                <div class="order-details">
                    <span>${b.tourName}</span>
                    <span>₹${b.total.toLocaleString('en-IN')}</span>
                    <span>📅 ${b.date}</span>
                </div>
                <div class="order-details" style="margin-top:4px;font-size:0.8rem;">
                    <span>👥 ${b.travelers} traveler(s)</span>
                    <span>📆 ${b.days} day(s)</span>
                    <span>💳 ${b.payment}</span>
                </div>
                <div class="order-tracker">
                    <div class="tracker-step completed"><span>📅</span> Booked</div>
                    <div class="tracker-step ${stepClass}"><span>✈️</span> Confirmed</div>
                    <div class="tracker-step ${status === 'delivered' ? 'completed' : ''}"><span>✅</span> Completed</div>
                </div>
            </div>
        `;
    }).join('');
}

function renderUserPayments() {
    const container = document.getElementById('userPaymentsList');
    if (!container) return;
    if (userPayments.length === 0) {
        container.innerHTML = '<p style="color:var(--text-light);text-align:center;padding:1.5rem;">No payments yet.</p>';
        return;
    }
    const sorted = [...userPayments].sort((a, b) => new Date(b.paymentDate) - new Date(a.paymentDate));
    container.innerHTML = sorted.map(p => `
        <div class="payment-card">
            <div class="payment-info">
                <span class="payment-amount">₹${p.amount.toLocaleString('en-IN')}</span>
                <span class="payment-status success">✅ Success</span>
            </div>
            <div class="payment-details">
                <span>💳 ${p.method}</span>
                <span>📅 ${p.date}</span>
                <span>#${p.bookingId}</span>
            </div>
        </div>
    `).join('');
}

// ============================================================
// LOADING SCREEN
// ============================================================
function hideLoadingScreen() {
    const loader = document.getElementById('loadingScreen');
    if (loader) setTimeout(() => loader.classList.add('hidden'), 2200);
}

// ============================================================
// SLIDER
// ============================================================
function initSlider() {
    const slides = document.querySelectorAll('.slide');
    totalSlides = slides.length;
    const dotsContainer = document.getElementById('sliderDots');
    if (!dotsContainer) return;

    for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement('span');
        dot.className = 'dot' + (i === 0 ? ' active' : '');
        dot.dataset.index = i;
        dot.addEventListener('click', function() { goToSlide(parseInt(this.dataset.index)); });
        dotsContainer.appendChild(dot);
    }

    const prevBtn = document.getElementById('prevSlide');
    const nextBtn = document.getElementById('nextSlide');
    if (prevBtn) prevBtn.addEventListener('click', () => goToSlide((currentSlide - 1 + totalSlides) % totalSlides));
    if (nextBtn) nextBtn.addEventListener('click', () => goToSlide((currentSlide + 1) % totalSlides));

    setInterval(() => goToSlide((currentSlide + 1) % totalSlides), 5000);
}

function goToSlide(index) {
    currentSlide = index;
    const wrapper = document.getElementById('sliderWrapper');
    if (wrapper) wrapper.style.transform = `translateX(-${index * 100}%)`;
    document.querySelectorAll('.slide').forEach((s, i) => s.classList.toggle('active', i === index));
    document.querySelectorAll('.dot').forEach((d, i) => d.classList.toggle('active', i === index));
}

// ============================================================
// DOWN TO TOP
// ============================================================
function setupDownToTop() {
    const btn = document.getElementById('downToTopBtn');
    if (!btn) return;
    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) btn.classList.add('visible');
        else btn.classList.remove('visible');
    });
    btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

// ============================================================
// NAVIGATION
// ============================================================
function setupNavigation() {
    document.querySelectorAll('.nav-link, [data-section]').forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.classList.contains('nav-link') || this.hasAttribute('data-section')) {
                e.preventDefault();
            }
            const sectionName = this.dataset.section;
            if (!sectionName) return;

            document.querySelectorAll('.section').forEach(s => s.classList.add('hidden'));
            const target = document.getElementById(sectionName);
            if (target) target.classList.remove('hidden');

            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            document.querySelectorAll(`.nav-link[data-section="${sectionName}"]`).forEach(l => l.classList.add('active'));

            const toggle = document.querySelector('.nav-toggle');
            if (toggle) toggle.checked = false;

            document.getElementById('wishlistOverlay').classList.remove('open');
            document.getElementById('tourPopup').classList.remove('open');
            document.getElementById('bookingPopup').classList.remove('open');

            // Trigger About counter when navigating to About
            if (sectionName === 'about') {
                setTimeout(startAboutCounter, 300);
            }

            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });
}

// ============================================================
// RENDER TOURS with video-like image & zoom
// ============================================================
function renderTours(category = 'all', priceFilter = 'all', durationFilter = 'all', sort = 'default') {
    const grid = document.getElementById('tourGrid');
    if (!grid) return;

    let filtered = category === 'all' ? [...tours] : tours.filter(t => t.category === category);

    if (priceFilter !== 'all') {
        filtered = filtered.filter(t => {
            if (priceFilter === '0-10000') return t.price <= 10000;
            if (priceFilter === '10000-30000') return t.price > 10000 && t.price <= 30000;
            if (priceFilter === '30000-50000') return t.price > 30000 && t.price <= 50000;
            if (priceFilter === '50000-100000') return t.price > 50000 && t.price <= 100000;
            if (priceFilter === '100000+') return t.price > 100000;
            return true;
        });
    }

    if (durationFilter !== 'all') {
        filtered = filtered.filter(t => {
            const days = parseInt(t.duration);
            if (durationFilter === '1-3') return days >= 1 && days <= 3;
            if (durationFilter === '4-7') return days >= 4 && days <= 7;
            if (durationFilter === '8-14') return days >= 8 && days <= 14;
            if (durationFilter === '15+') return days >= 15;
            return true;
        });
    }

    if (sort === 'price-low') filtered.sort((a, b) => a.price - b.price);
    else if (sort === 'price-high') filtered.sort((a, b) => b.price - a.price);
    else if (sort === 'rating') filtered.sort((a, b) => (userRatings[b.id] || b.rating) - (userRatings[a.id] || a.rating));

    if (filtered.length === 0) {
        grid.innerHTML = `<div style="text-align:center;color:var(--text-light);padding:2rem;width:100%;">No tours found matching your filters.</div>`;
        return;
    }

    grid.innerHTML = filtered.map(t => buildTourCard(t)).join('');
    attachTourCardEvents(grid);
}

function buildTourCard(t) {
    const userRating = userRatings[t.id] || 0;
    const displayRating = userRating > 0 ? userRating : Math.floor(t.rating);
    const fullStars = Math.floor(displayRating);
    let starsHTML = '';
    for (let i = 0; i < 5; i++) {
        starsHTML += i < fullStars ? '<span class="star active">★</span>' : '<span class="star">★</span>';
    }

    let badgeClass = 'badge-popular';
    let badgeText = '⭐ Popular';
    if (t.badge === 'popular') { badgeClass = 'badge-popular'; badgeText = '⭐ Popular'; }
    else if (t.badge === 'luxury') { badgeClass = 'badge-luxury'; badgeText = '💎 Luxury'; }
    else if (t.badge === 'budget') { badgeClass = 'badge-budget'; badgeText = '💰 Budget'; }
    else if (t.badge === 'adventure') { badgeClass = 'badge-adventure'; badgeText = '🧗 Adventure'; }

    const wishlisted = wishlist.some(item => item.id === t.id);

    return `
        <div class="tour-card" data-id="${t.id}">
            ${t.badge ? `<span class="tour-badge ${badgeClass}">${badgeText}</span>` : ''}
            <div class="tour-image-wrapper" data-id="${t.id}">
                <img src="${t.img}" alt="${t.name}" class="tour-img" loading="lazy" />
            </div>
            <h3>${t.name}</h3>
            <p class="description">${t.desc}</p>
            <span class="duration">📅 ${t.duration}</span>
            <div class="rating-section">
                <div class="rating-stars" data-id="${t.id}">${starsHTML}</div>
                <span class="rating-text">${userRating > 0 ? '★' + userRating : '⭐ ' + t.rating + ' (' + t.reviews + ')'}</span>
            </div>
            <div class="price">₹${t.price.toLocaleString('en-IN')}</div>
            <div class="tour-actions">
                <button class="book-now" data-action="book" data-id="${t.id}">Book Now</button>
                <button class="wishlist-btn ${wishlisted ? 'active' : ''}" data-action="wishlist" data-id="${t.id}">
                    ${wishlisted ? '❤️' : '🤍'}
                </button>
            </div>
        </div>
    `;
}

function attachTourCardEvents(container) {
    // Rating stars
    container.querySelectorAll('.rating-stars').forEach(starContainer => {
        const stars = starContainer.querySelectorAll('.star');
        const tourId = parseInt(starContainer.dataset.id);
        stars.forEach((star, index) => {
            star.addEventListener('click', function(e) {
                e.stopPropagation();
                if (!isLoggedIn) {
                    showFeedback('⚠️ Please login to rate', 'info');
                    redirectToAccount('enquiry', tourId);
                    return;
                }
                userRatings[tourId] = index + 1;
                localStorage.setItem('exploreworld_user_ratings', JSON.stringify(userRatings));
                showFeedback(`⭐ Rated ${index + 1} stars!`, 'success');
                renderTours(currentCategory, currentPriceFilter, currentDurationFilter, currentSort);
            });
        });
    });

    // Book Now buttons
    container.querySelectorAll('[data-action="book"]').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            handleBookNow(parseInt(this.dataset.id));
        });
    });

    // Wishlist buttons
    container.querySelectorAll('[data-action="wishlist"]').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            handleWishlist(parseInt(this.dataset.id));
        });
    });

    // Image wrapper: SINGLE CLICK = zoom, DOUBLE CLICK = popup
    container.querySelectorAll('.tour-image-wrapper').forEach(wrapper => {
        let clickTimer = null;

        wrapper.addEventListener('click', function(e) {
            e.stopPropagation();
            const id = parseInt(this.dataset.id);
            const isZoomed = this.classList.contains('zoomed');

            if (clickTimer) {
                // Double click detected
                clearTimeout(clickTimer);
                clickTimer = null;
                // Remove zoom, open popup
                this.classList.remove('zoomed');
                handleEnquiry(id);
            } else {
                clickTimer = setTimeout(() => {
                    // Single click
                    if (isZoomed) {
                        this.classList.remove('zoomed');
                    } else {
                        // Remove zoom from all others
                        document.querySelectorAll('.tour-image-wrapper.zoomed').forEach(w => w.classList.remove('zoomed'));
                        this.classList.add('zoomed');
                    }
                    clickTimer = null;
                }, 250);
            }
        });
    });

    // Card body click (not image, not button) → popup
    container.querySelectorAll('.tour-card').forEach(card => {
        card.addEventListener('click', function(e) {
            if (e.target.closest('button') || e.target.closest('.tour-image-wrapper')) return;
            const id = parseInt(this.dataset.id);
            handleEnquiry(id);
        });
    });
}

// ============================================================
// HANDLE ACTIONS
// ============================================================
function handleBookNow(tourId) {
    if (!isLoggedIn) {
        showFeedback('⚠️ Please create an account to book', 'info');
        redirectToAccount('book', tourId);
        return;
    }
    openBookingPopup(tourId);
}

function handleWishlist(tourId) {
    if (!isLoggedIn) {
        showFeedback('⚠️ Please create an account to add to wishlist', 'info');
        redirectToAccount('wishlist', tourId);
        return;
    }
    toggleWishlistItem(tourId);
}

function handleEnquiry(tourId) {
    if (!isLoggedIn) {
        showFeedback('⚠️ Please create an account to view details', 'info');
        redirectToAccount('enquiry', tourId);
        return;
    }
    openPopup(tourId);
}

function toggleWishlistItem(tourId) {
    const tour = tours.find(t => t.id === tourId);
    if (!tour) return;
    const index = wishlist.findIndex(item => item.id === tourId);
    if (index > -1) {
        wishlist.splice(index, 1);
        showFeedback('💔 Removed from wishlist', 'info');
    } else {
        wishlist.push({ ...tour });
        showFeedback('❤️ Added to wishlist!', 'success');
    }
    localStorage.setItem('exploreworld_wishlist', JSON.stringify(wishlist));
    updateWishlist();
    renderTours(currentCategory, currentPriceFilter, currentDurationFilter, currentSort);
    renderWishlist();
}

function openWishlistOverlay() {
    const overlay = document.getElementById('wishlistOverlay');
    if (!overlay) return;
    overlay.classList.add('open');
    renderWishlist();
    document.body.style.overflow = 'hidden';
}

document.getElementById('wishlistIcon').addEventListener('click', function(e) {
    e.preventDefault();
    if (!isLoggedIn) {
        showFeedback('⚠️ Please create an account to view wishlist', 'info');
        redirectToAccount('wishlistView', null);
        return;
    }
    openWishlistOverlay();
});

document.getElementById('closeWishlist').addEventListener('click', function() {
    document.getElementById('wishlistOverlay').classList.remove('open');
    document.body.style.overflow = '';
});

document.getElementById('wishlistOverlay').addEventListener('click', function(e) {
    if (e.target === this) {
        this.classList.remove('open');
        document.body.style.overflow = '';
    }
});

function updateWishlist() {
    const countEl = document.getElementById('wishlistCount');
    if (countEl) countEl.textContent = wishlist.length;
}

function renderWishlist() {
    const container = document.getElementById('wishlistItems');
    if (!container) return;
    if (wishlist.length === 0) {
        container.innerHTML = `<div class="empty-wishlist">❤️ Your wishlist is empty.<br>Start exploring tours!</div>`;
        return;
    }
    container.innerHTML = wishlist.map(item => `
        <div class="wishlist-item">
            <div class="wishlist-item-info">
                <img src="${item.img}" alt="${item.name}" />
                <div>
                    <div class="wishlist-item-name">${item.name}</div>
                    <div class="wishlist-item-price">₹${item.price.toLocaleString('en-IN')}</div>
                </div>
            </div>
            <button class="wishlist-item-remove" onclick="removeFromWishlist(${item.id})" title="Remove">🗑️</button>
        </div>
    `).join('');
}

function removeFromWishlist(tourId) {
    wishlist = wishlist.filter(item => item.id !== tourId);
    localStorage.setItem('exploreworld_wishlist', JSON.stringify(wishlist));
    updateWishlist();
    renderTours(currentCategory, currentPriceFilter, currentDurationFilter, currentSort);
    renderWishlist();
}

// ============================================================
// TOUR POPUP
// ============================================================
function openPopup(tourId) {
    if (!isLoggedIn) { redirectToAccount('enquiry', tourId); return; }
    const tour = tours.find(t => t.id === tourId);
    if (!tour) return;
    popupTourId = tourId;

    document.getElementById('popupImg').src = tour.img;
    document.getElementById('popupName').textContent = tour.name;
    document.getElementById('popupDesc').textContent = tour.desc + ` (${tour.duration})`;
    document.getElementById('popupPrice').textContent = '₹' + tour.price.toLocaleString('en-IN');

    const userRating = userRatings[tourId] || 0;
    document.querySelectorAll('#popupStars span').forEach((s, i) => s.classList.toggle('active', i < userRating));
    document.getElementById('popupRatingText').textContent = userRating > 0 ? '★' + userRating : 'Not rated';

    const commentsContainer = document.getElementById('popupComments');
    const list = tourComments[tourId] || [];
    commentsContainer.innerHTML = list.length === 0
        ? '<div class="comment-item">No requests yet.</div>'
        : list.slice(-3).map(c => `<div class="comment-item">${c.rating > 0 ? '⭐' + c.rating + ' - ' : ''}${c.comment}</div>`).join('');

    document.getElementById('tourPopup').classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closePopup() {
    document.getElementById('tourPopup').classList.remove('open');
    document.body.style.overflow = '';
}

document.getElementById('closePopup').addEventListener('click', closePopup);
document.getElementById('tourPopup').addEventListener('click', function(e) {
    if (e.target === this) closePopup();
});

document.querySelectorAll('#popupStars span').forEach(star => {
    star.addEventListener('click', function() {
        if (!isLoggedIn) return;
        const rating = parseInt(this.dataset.value);
        if (popupTourId) {
            userRatings[popupTourId] = rating;
            localStorage.setItem('exploreworld_user_ratings', JSON.stringify(userRatings));
            document.querySelectorAll('#popupStars span').forEach((s, i) => s.classList.toggle('active', i < rating));
            document.getElementById('popupRatingText').textContent = '★' + rating;
            showFeedback(`⭐ Rated ${rating} stars!`, 'success');
            renderTours(currentCategory, currentPriceFilter, currentDurationFilter, currentSort);
        }
    });
});

document.getElementById('popupBookNow').addEventListener('click', function() {
    if (!isLoggedIn) { redirectToAccount('book', popupTourId); return; }
    const tourId = popupTourId;
    closePopup();
    openBookingPopup(tourId);
});

document.getElementById('popupSubmitComment').addEventListener('click', function() {
    if (!isLoggedIn) { redirectToAccount('enquiry', popupTourId); return; }
    const comment = document.getElementById('popupComment').value.trim();
    if (!comment) { showFeedback('⚠️ Please write a request!', 'error'); return; }
    if (!popupTourId) return;
    if (!tourComments[popupTourId]) tourComments[popupTourId] = [];
    tourComments[popupTourId].push({ comment, rating: userRatings[popupTourId] || 0 });
    localStorage.setItem('exploreworld_comments', JSON.stringify(tourComments));
    document.getElementById('popupComment').value = '';
    showFeedback('✅ Request submitted!', 'success');

    const list = tourComments[popupTourId] || [];
    document.getElementById('popupComments').innerHTML = list.slice(-3).map(c =>
        `<div class="comment-item">${c.rating > 0 ? '⭐' + c.rating + ' - ' : ''}${c.comment}</div>`
    ).join('');
});

// ============================================================
// BOOKING POPUP
// ============================================================
function openBookingPopup(tourId) {
    if (!isLoggedIn) { redirectToAccount('book', tourId); return; }
    const tour = tours.find(t => t.id === tourId);
    if (!tour) return;
    bookingTour = tour;

    document.getElementById('bookingTourName').textContent = '🌍 ' + tour.name;
    document.getElementById('bookingTourPrice').textContent = '₹' + tour.price.toLocaleString('en-IN') + ' per traveler';
    document.getElementById('bookingTourDuration').textContent = '📅 ' + tour.duration;

    const account = JSON.parse(localStorage.getItem('exploreworld_account'));
    if (account) {
        document.getElementById('bookingName').value = account.fullName || '';
        document.getElementById('bookingEmail').value = account.email || '';
        document.getElementById('bookingPhone').value = account.phone || '';
    }

    document.getElementById('bookingTravelers').value = '1';
    document.getElementById('bookingDays').value = tour.duration.split(' ')[0] || '3';
    document.getElementById('bookingDate').value = new Date().toISOString().split('T')[0];

    selectPaymentMethod('card');
    goToBookingStep(1);
    updateBookingSummary();

    document.getElementById('bookingPopup').classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeBookingPopup() {
    document.getElementById('bookingPopup').classList.remove('open');
    document.body.style.overflow = '';
}

document.getElementById('closeBookingPopup').addEventListener('click', closeBookingPopup);
document.getElementById('bookingPopup').addEventListener('click', function(e) {
    if (e.target === this) closeBookingPopup();
});

function goToBookingStep(step) {
    document.querySelectorAll('.booking-step').forEach(s => s.style.display = 'none');
    const target = document.getElementById('bookingStep' + step);
    if (target) target.style.display = 'block';

    if (step === 2) {
        const name = document.getElementById('bookingName').value.trim();
        const email = document.getElementById('bookingEmail').value.trim();
        const phone = document.getElementById('bookingPhone').value.trim();
        if (!name || !email || !phone) {
            showFeedback('⚠️ Please fill all traveler details', 'error');
            document.querySelectorAll('.booking-step').forEach(s => s.style.display = 'none');
            document.getElementById('bookingStep1').style.display = 'block';
            return;
        }
    }
    if (step === 3) updateBookingSummary();
}

function selectPaymentMethod(method) {
    selectedPaymentMethod = method;
    document.querySelectorAll('.payment-option').forEach(o => o.classList.remove('selected'));
    document.querySelectorAll(`.payment-option[data-method="${method}"]`).forEach(o => o.classList.add('selected'));

    document.getElementById('cardDetails').style.display = method === 'card' ? 'block' : 'none';
    document.getElementById('netbankingOptions').style.display = method === 'netbanking' ? 'block' : 'none';
    document.getElementById('upiOptions').style.display = method === 'upi' ? 'block' : 'none';

    if (method === 'upi') generateUPIQRCode();
}

function generateUPIQRCode() {
    const qrBox = document.getElementById('upiQRCode');
    if (!qrBox) return;
    const upiId = 'exploreworld@upi';
    const amount = calculateTotal();
    const upiString = `upi://pay?pa=${upiId}&pn=ExploreWorld&am=${amount}&cu=INR`;
    qrBox.innerHTML = generateSVGQR(upiString);
}

function generateSVGQR(data) {
    const size = 25;
    const cellSize = 100 / size;
    let hash = 0;
    for (let i = 0; i < data.length; i++) {
        hash = ((hash << 5) - hash) + data.charCodeAt(i);
        hash |= 0;
    }
    let html = '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">';
    html += '<rect width="100" height="100" fill="white"/>';
    for (let y = 0; y < size; y++) {
        for (let x = 0; x < size; x++) {
            const isCorner = (x < 7 && y < 7) || (x >= size - 7 && y < 7) || (x < 7 && y >= size - 7);
            const isCornerInner = isCorner && (
                (x >= 2 && x <= 4 && y >= 2 && y <= 4) ||
                (x >= size - 5 && x <= size - 3 && y >= 2 && y <= 4) ||
                (x >= 2 && x <= 4 && y >= size - 5 && y <= size - 3)
            );
            const isCornerBorder = isCorner && !isCornerInner && (
                (x === 0 || x === 6 || y === 0 || y === 6) ||
                (x === size - 1 || x === size - 7 || y === size - 1 || y === size - 7)
            );
            let filled = false;
            if (isCorner) filled = isCornerBorder || isCornerInner;
            else {
                const seed = (hash + x * 73856093 + y * 19349663) >>> 0;
                filled = (seed % 3) === 0;
            }
            if (filled) html += `<rect x="${x * cellSize}" y="${y * cellSize}" width="${cellSize}" height="${cellSize}" fill="#03045E"/>`;
        }
    }
    html += '</svg>';
    return html;
}

function calculateTotal() {
    if (!bookingTour) return 0;
    const travelers = parseInt(document.getElementById('bookingTravelers')?.value) || 1;
    const days = parseInt(document.getElementById('bookingDays')?.value) || 1;
    const basePrice = bookingTour.price * travelers * days;
    let groupDiscount = travelers >= 5 ? Math.round(basePrice * 0.10) : 0;
    const afterDiscount = basePrice - groupDiscount;
    const gst = Math.round(afterDiscount * 0.05);
    return afterDiscount + gst;
}

function updateBookingSummary() {
    if (!bookingTour) return;
    const travelers = parseInt(document.getElementById('bookingTravelers').value) || 1;
    const days = parseInt(document.getElementById('bookingDays').value) || 1;
    const basePrice = bookingTour.price;
    const totalPrice = basePrice * travelers * days;
    let groupDiscount = travelers >= 5 ? Math.round(totalPrice * 0.10) : 0;
    const afterDiscount = totalPrice - groupDiscount;
    const gst = Math.round(afterDiscount * 0.05);
    const finalTotal = afterDiscount + gst;

    document.getElementById('summaryBasePrice').textContent = '₹' + totalPrice.toLocaleString('en-IN');
    document.getElementById('summaryTravelers').textContent = travelers;
    document.getElementById('summaryDays').textContent = days;
    document.getElementById('summaryGroupDiscount').textContent = '-₹' + groupDiscount.toLocaleString('en-IN');
    document.getElementById('summaryGST').textContent = '₹' + gst.toLocaleString('en-IN');
    document.getElementById('summaryTotal').textContent = '₹' + finalTotal.toLocaleString('en-IN');

    if (selectedPaymentMethod === 'upi') generateUPIQRCode();
}

document.getElementById('bookingTravelers').addEventListener('change', updateBookingSummary);
document.getElementById('bookingDays').addEventListener('change', updateBookingSummary);

// ============================================================
// CONFIRM BOOKING
// ============================================================
function confirmBooking() {
    const name = document.getElementById('bookingName').value.trim();
    const email = document.getElementById('bookingEmail').value.trim();
    const phone = document.getElementById('bookingPhone').value.trim();
    const travelers = document.getElementById('bookingTravelers').value;
    const days = document.getElementById('bookingDays').value;
    const date = document.getElementById('bookingDate').value;

    if (!name || !email || !phone) {
        showFeedback('⚠️ Please fill all traveler details', 'error');
        goToBookingStep(1);
        return;
    }

    const basePrice = bookingTour.price * parseInt(travelers) * parseInt(days);
    let groupDiscount = parseInt(travelers) >= 5 ? Math.round(basePrice * 0.10) : 0;
    const afterDiscount = basePrice - groupDiscount;
    const gst = Math.round(afterDiscount * 0.05);
    const finalTotal = afterDiscount + gst;

    const paymentNames = { card: 'Credit/Debit Card', netbanking: 'Net Banking', upi: 'UPI', cod: 'Cash on Delivery' };
    const bookingId = 'EW' + Date.now().toString().slice(-6);
    const formattedDate = new Date(date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });

    const booking = {
        id: bookingId,
        tourName: bookingTour.name,
        tourId: bookingTour.id,
        travelers, days,
        total: finalTotal,
        payment: paymentNames[selectedPaymentMethod],
        date: formattedDate,
        bookingDate: new Date().toISOString()
    };
    userBookings.push(booking);
    localStorage.setItem('exploreworld_bookings', JSON.stringify(userBookings));

    const payment = {
        bookingId, amount: finalTotal,
        method: paymentNames[selectedPaymentMethod],
        date: formattedDate,
        paymentDate: new Date().toISOString()
    };
    userPayments.push(payment);
    localStorage.setItem('exploreworld_payments', JSON.stringify(userPayments));

    document.getElementById('successBookingId').textContent = bookingId;
    document.getElementById('successBookingDate').textContent = formattedDate;
    document.getElementById('successBookingAmount').textContent = '₹' + finalTotal.toLocaleString('en-IN');
    document.getElementById('successBookingPayment').textContent = paymentNames[selectedPaymentMethod];
    document.getElementById('successBookingTravelers').textContent = travelers;
    document.getElementById('successBookingDays').textContent = days;
    document.getElementById('successBookingDetails').textContent = `${bookingTour.name} for ${travelers} traveler(s) - ${days} Days`;

    generateQRCode(bookingId, finalTotal);

    closeBookingPopup();
    document.getElementById('bookingSuccessPopup').classList.add('open');
    launchConfetti();
    renderUserBookings();
    renderUserPayments();
}

function generateQRCode(bookingId, amount) {
    const container = document.getElementById('qrCodeBox');
    if (!container) return;
    const data = `${bookingId}|${amount}|ExploreWorld`;
    container.innerHTML = generateSVGQR(data);
}

// ============================================================
// SUCCESS HANDLERS
// ============================================================
function closeBookingSuccess() {
    document.getElementById('bookingSuccessPopup').classList.remove('open');
    document.body.style.overflow = '';
    const homeLink = document.querySelector('[data-section="home"].nav-link');
    if (homeLink) homeLink.click();
}

function closeBookingSuccessAndGoProfile() {
    document.getElementById('bookingSuccessPopup').classList.remove('open');
    document.body.style.overflow = '';
    const profileLink = document.querySelector('[data-section="profile"].nav-link');
    if (profileLink) profileLink.click();
}

function downloadInvoice() {
    showFeedback('📥 Invoice downloaded! (Demo)', 'success');
}

// ============================================================
// CONFETTI
// ============================================================
function launchConfetti() {
    const container = document.createElement('div');
    container.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:9999;overflow:hidden;';
    document.body.appendChild(container);
    const colors = ['#0077B6', '#00B4D8', '#FFB84C', '#27AE60', '#FF6B6B'];
    for (let i = 0; i < 60; i++) {
        const c = document.createElement('div');
        c.style.cssText = `position:absolute;top:-10px;left:${Math.random() * 100}%;width:${Math.random() * 8 + 4}px;height:${Math.random() * 8 + 4}px;background:${colors[Math.floor(Math.random() * colors.length)]};border-radius:2px;animation: confettiFall ${Math.random() * 2 + 2}s linear ${Math.random() * 0.5}s forwards;`;
        container.appendChild(c);
    }
    if (!document.getElementById('confettiAnim')) {
        const style = document.createElement('style');
        style.id = 'confettiAnim';
        style.textContent = `@keyframes confettiFall { 0% { transform: translateY(0) rotate(0deg); opacity: 1; } 100% { transform: translateY(110vh) rotate(720deg); opacity: 0; } }`;
        document.head.appendChild(style);
    }
    setTimeout(() => container.remove(), 4000);
}

// ============================================================
// CATEGORY TABS
// ============================================================
function setupCategoryTabs() {
    document.querySelectorAll('.cat-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            currentCategory = this.dataset.category;
            renderTours(currentCategory, currentPriceFilter, currentDurationFilter, currentSort);
        });
    });
}

// ============================================================
// FILTERS
// ============================================================
function setupFilters() {
    const pf = document.getElementById('priceFilter');
    const df = document.getElementById('durationFilter');
    const sf = document.getElementById('sortFilter');
    if (pf) pf.addEventListener('change', function() { currentPriceFilter = this.value; renderTours(currentCategory, currentPriceFilter, currentDurationFilter, currentSort); });
    if (df) df.addEventListener('change', function() { currentDurationFilter = this.value; renderTours(currentCategory, currentPriceFilter, currentDurationFilter, currentSort); });
    if (sf) sf.addEventListener('change', function() { currentSort = this.value; renderTours(currentCategory, currentPriceFilter, currentDurationFilter, currentSort); });
}

// ============================================================
// OFFER TABS
// ============================================================
function setupOfferTabs() {
    document.querySelectorAll('.tab-btn').forEach(tab => {
        tab.addEventListener('click', function() {
            document.querySelectorAll('.tab-btn').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.offer-tab-content').forEach(c => c.classList.remove('active'));
            this.classList.add('active');
            const target = document.getElementById(this.dataset.tab);
            if (target) target.classList.add('active');
        });
    });
}

// ============================================================
// PROFILE TABS
// ============================================================
function setupProfileTabs() {
    document.querySelectorAll('.profile-tab').forEach(tab => {
        tab.addEventListener('click', function() {
            document.querySelectorAll('.profile-tab').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.profile-tab-content').forEach(c => c.classList.remove('active'));
            this.classList.add('active');
            const target = document.getElementById('tab-' + this.dataset.tab);
            if (target) target.classList.add('active');

            if (this.dataset.tab === 'bookings') renderUserBookings();
            if (this.dataset.tab === 'payments') renderUserPayments();
            if (this.dataset.tab === 'addresses') renderAddresses();
        });
    });
}

// ============================================================
// FAQ ACCORDION
// ============================================================
function setupFAQ() {
    document.querySelectorAll('.faq-question').forEach(btn => {
        btn.addEventListener('click', function() {
            const item = this.closest('.faq-item');
            const isOpen = item.classList.contains('open');
            document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
            if (!isOpen) item.classList.add('open');
        });
    });
}

// ============================================================
// ABOUT COUNTER (Auto-counting)
// ============================================================
let counterStarted = false;
function startAboutCounter() {
    if (counterStarted) return;
    counterStarted = true;

    const counters = document.querySelectorAll('.about-stat-number');
    counters.forEach(counter => {
        const target = parseFloat(counter.dataset.target);
        const suffix = counter.dataset.suffix || '';
        const decimal = parseInt(counter.dataset.decimal) || 0;
        const duration = 2000;
        const startTime = performance.now();

        function updateCounter(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = target * eased;

            if (decimal > 0) {
                counter.textContent = current.toFixed(decimal) + suffix;
            } else {
                counter.textContent = Math.floor(current).toLocaleString('en-IN') + suffix;
            }

            if (progress < 1) {
                requestAnimationFrame(updateCounter);
            } else {
                if (decimal > 0) counter.textContent = target.toFixed(decimal) + suffix;
                else counter.textContent = target.toLocaleString('en-IN') + suffix;
            }
        }
        requestAnimationFrame(updateCounter);
    });
}

// Reset counter when leaving About (for repeat)
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function() {
        if (this.dataset.section !== 'about') {
            counterStarted = false;
            const counters = document.querySelectorAll('.about-stat-number');
            counters.forEach(c => c.textContent = '0');
        }
    });
});

// ============================================================
// SEARCH
// ============================================================
function setupSearch() {
    const input = document.getElementById('searchInput');
    const btn = document.getElementById('searchBtn');
    const micBtn = document.getElementById('searchMicBtn');
    if (!input) return;

    input.value = '';
    input.setAttribute('autocomplete', 'off');
    input.setAttribute('autocorrect', 'off');
    input.setAttribute('autocapitalize', 'off');
    input.setAttribute('spellcheck', 'false');

    input.addEventListener('focus', function() { if (this.value.includes('@') && this.value.length > 3) this.value = ''; });
    input.addEventListener('click', function() { if (this.value.includes('@')) this.value = ''; });
    setTimeout(() => { if (input.value.includes('@')) input.value = ''; }, 100);
    setTimeout(() => { if (input.value.includes('@')) input.value = ''; }, 500);
    setTimeout(() => { if (input.value.includes('@')) input.value = ''; }, 1500);

    if (btn) btn.addEventListener('click', () => performSearch(input.value));
    if (input) input.addEventListener('keypress', function(e) { if (e.key === 'Enter') { e.preventDefault(); performSearch(this.value); } });
    if (micBtn) micBtn.addEventListener('click', function(e) { e.preventDefault(); startVoiceSearch('searchInput', micBtn, (t) => performSearch(t)); });
}

// ============================================================
// HERO SEARCH
// ============================================================
function setupHeroSearch() {
    const input = document.getElementById('heroSearchInput');
    const btn = document.getElementById('heroSearchBtn');
    const micBtn = document.getElementById('heroMicBtn');

    if (btn) btn.addEventListener('click', () => { if (input) performSearch(input.value); });
    if (input) input.addEventListener('keypress', function(e) { if (e.key === 'Enter') { e.preventDefault(); performSearch(this.value); } });
    if (micBtn) micBtn.addEventListener('click', function(e) { e.preventDefault(); startVoiceSearch('heroSearchInput', micBtn, (t) => performSearch(t)); });

    document.querySelectorAll('.quick-chip').forEach(chip => {
        chip.addEventListener('click', function() {
            const cat = this.dataset.category;
            document.querySelectorAll('.section').forEach(s => s.classList.add('hidden'));
            document.getElementById('tours').classList.remove('hidden');
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            document.querySelectorAll('.nav-link[data-section="tours"]').forEach(l => l.classList.add('active'));
            document.querySelectorAll('.cat-btn').forEach(b => b.classList.toggle('active', b.dataset.category === cat));
            currentCategory = cat;
            renderTours(cat, currentPriceFilter, currentDurationFilter, currentSort);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });
}

// ============================================================
// CATEGORY EXPLORER
// ============================================================
function setupCategoryExplorer() {
    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', function() {
            const cat = this.dataset.category;
            document.querySelectorAll('.section').forEach(s => s.classList.add('hidden'));
            document.getElementById('tours').classList.remove('hidden');
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            document.querySelectorAll('.nav-link[data-section="tours"]').forEach(l => l.classList.add('active'));
            document.querySelectorAll('.cat-btn').forEach(b => b.classList.toggle('active', b.dataset.category === cat));
            currentCategory = cat;
            renderTours(cat, currentPriceFilter, currentDurationFilter, currentSort);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });
}

// ============================================================
// TRENDING
// ============================================================
function renderTrending() {
    const container = document.getElementById('trendingScroll');
    if (!container) return;
    const trendingIds = [1, 19, 25, 29, 31, 4, 22, 34, 12, 30, 38, 10];
    const trending = trendingIds.map(id => tours.find(t => t.id === id)).filter(Boolean);

    container.innerHTML = trending.map(t => `
        <div class="trending-card" data-id="${t.id}">
            <span class="trending-badge">🔥 Trending</span>
            <img src="${t.img}" alt="${t.name}" loading="lazy" />
            <div class="trending-info">
                <h3>${t.name}</h3>
                <p class="trending-country">📍 ${getRegionLabel(t.region)}</p>
                <div class="trending-meta">
                    <span class="trending-price">₹${t.price.toLocaleString('en-IN')}</span>
                    <span class="trending-rating">⭐ ${t.rating}</span>
                </div>
            </div>
        </div>
    `).join('');

    const leftBtn = document.getElementById('trendingLeft');
    const rightBtn = document.getElementById('trendingRight');
    if (leftBtn) leftBtn.addEventListener('click', () => container.scrollBy({ left: -300, behavior: 'smooth' }));
    if (rightBtn) rightBtn.addEventListener('click', () => container.scrollBy({ left: 300, behavior: 'smooth' }));

    container.querySelectorAll('.trending-card').forEach(card => {
        card.addEventListener('click', () => handleEnquiry(parseInt(card.dataset.id)));
    });
}

function getRegionLabel(region) {
    const map = { 'india': 'India', 'europe': 'Europe', 'americas': 'Americas', 'asia': 'Asia', 'africa': 'Africa', 'oceania': 'Oceania' };
    return map[region] || region;
}

// ============================================================
// REGION TABS
// ============================================================
function setupRegionTabs() {
    document.querySelectorAll('.region-tab').forEach(tab => {
        tab.addEventListener('click', function() {
            document.querySelectorAll('.region-tab').forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            currentRegion = this.dataset.region;
            renderInternational(currentRegion);
        });
    });
}

function renderInternational(region) {
    const grid = document.getElementById('internationalGrid');
    if (!grid) return;
    const filtered = tours.filter(t => t.region === region);
    if (filtered.length === 0) {
        grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;color:var(--text-light);padding:2rem;">No tours in this region yet.</div>`;
        return;
    }
    grid.innerHTML = filtered.map(t => buildTourCard(t)).join('');
    attachTourCardEvents(grid);
}

// ============================================================
// REVIEWS AUTO-SCROLL
// ============================================================
function setupReviewsCarousel() {
    const scroll = document.getElementById('reviewsScroll');
    if (!scroll) return;
    let paused = false;
    scroll.addEventListener('mouseenter', () => paused = true);
    scroll.addEventListener('mouseleave', () => paused = false);
    scroll.addEventListener('touchstart', () => paused = true);
    scroll.addEventListener('touchend', () => setTimeout(() => paused = false, 2000));
    setInterval(() => {
        if (paused) return;
        const maxScroll = scroll.scrollWidth - scroll.clientWidth;
        if (scroll.scrollLeft >= maxScroll - 10) scroll.scrollTo({ left: 0, behavior: 'smooth' });
        else scroll.scrollBy({ left: 360, behavior: 'smooth' });
    }, 5000);
}

// ============================================================
// AI CHATBOT (Real human-like responses to anything)
// ============================================================
const chatbotTopics = [
    { icon: '📦', label: 'Bookings', response: 'You can view all your bookings in Profile → Bookings 📦' },
    { icon: '💳', label: 'Payment Help', response: 'We accept Credit/Debit Cards, UPI, Net Banking & Cash on Delivery 💳' },
    { icon: '✈️', label: 'Tour Confirmation', response: 'Tours are confirmed within 24 hours. Check your email! ✈️' },
    { icon: '🔄', label: 'Cancellation Policy', response: 'Free cancellation up to 7 days before tour start date 🔄' },
    { icon: '📞', label: 'Contact Support', response: '📞 +91 98765 43210 📧 info@exploreworld.com' },
    { icon: '🔐', label: 'Account Security', response: 'Keep your password secure. Never share OTP! 🔐' },
    { icon: '🏨', label: 'Hotel Bookings', response: 'We partner with 5-star resorts and premium hotels 🏨' },
    { icon: '⭐', label: 'Reviews', response: 'Rate tours after completion. Your feedback helps us improve! ⭐' },
    { icon: '🎒', label: 'Travel Tips', response: 'Pack light, carry essentials, and keep your documents safe! 🎒' },
    { icon: '🆘', label: 'Emergency Help', response: 'For urgent assistance, call us at +91 98765 43210 🆘' }
];

// ============================================================
// AI Response Generator (handles any question)
// ============================================================
function getAIResponse(question) {
    const q = question.toLowerCase().trim();
    if (!q) return "Please ask me something! 😊";

    // GREETINGS
    if (/^(hi|hello|hey|namaste|hii|hlo|hiii)/i.test(q)) return "Hello! 👋 Welcome to Explore World! How can I help you plan your next adventure today?";
    if (q.includes('good morning')) return "Good morning! ☀️ Ready to plan an amazing trip today?";
    if (q.includes('good evening')) return "Good evening! 🌆 Looking for a relaxing getaway?";
    if (q.includes('good night')) return "Good night! 🌙 Sweet dreams of faraway places!";
    if (/how are you|kaise ho|kaisa hai/i.test(q)) return "I'm fantastic, thank you for asking! 😊 Always excited to help travelers. How can I assist you?";

    // THANKS
    if (/thank|thanks|shukriya|dhanyavad/i.test(q)) return "You're most welcome! 😊 Happy to help. Have a wonderful journey!";
    if (/bye|goodbye|see you|alvida/i.test(q)) return "Goodbye! 👋 Have a safe and wonderful trip. Come back soon!";

    // WHO ARE YOU
    if (/who are you|what are you|tum kaun|aap kaun/i.test(q)) return "I'm TravelBot 🤖 — your personal AI travel assistant at Explore World! I can help you find tours, book trips, answer questions, and give travel tips. What would you like to know?";

    // TOURS & DESTINATIONS
    if (/tour|trip|package|destination/i.test(q)) return "We have 39 amazing tours! 🌍 From Indian gems like Goa, Jaipur, Kerala to international wonders like Paris, Tokyo, Bali. Check the Tours section to explore all! Which place interests you?";
    if (/goa|beach/i.test(q)) return "Goa Beach Escape 🏖️ — 3 days of sun, sand & sea! Price starts at ₹14,999. Includes 5-star resorts and free beach activities. Want to book?";
    if (/paris|eiffel/i.test(q)) return "Paris Romance 🗼 — 5 days in the City of Love! ₹85,000 per person. Includes Eiffel Tower, Louvre, Seine cruise. Ooh la la! 😍";
    if (/bali|indonesia/i.test(q)) return "Bali Island Escape 🏝️ — 5 days of beaches, temples & rice terraces! Just ₹45,000. Perfect for honeymoons! 💕";
    if (/dubai|burj/i.test(q)) return "Dubai Luxury Experience 🏙️ — 4 days of Burj Khalifa, desert safari & luxury malls! ₹55,000. Want VIP treatment?";
    if (/tokyo|japan|cherry/i.test(q)) return "Tokyo Cherry Blossom 🌸 — 6 days of sakura, Shibuya & Mount Fuji! ₹90,000. Best time: March-April!";
    if (/kerala|backwater/i.test(q)) return "Kerala Backwaters 🛶 — 4 days of houseboats & serenity! ₹18,999. God's Own Country awaits!";
    if (/jaipur|pink city/i.test(q)) return "Jaipur City Tour 👑 — 2 days of palaces & forts! ₹9,999. The Pink City is calling!";
    if (/maldives/i.test(q)) return "Maldives Luxury 🏝️ — 5 days of overwater villas & crystal waters! ₹95,000. Paradise found! 🌊";

    // PRICE / COST
    if (/price|cost|kitna|rate|budget|how much/i.test(q)) return "Our tours range from ₹7,999 (Jaipur) to ₹1,20,000 (Swiss Alps). 💰 Use the Price filter on Tours page to find your budget! What's your range?";

    // BOOKING
    if (/book|booking|reserve|kaise book/i.test(q)) return "Booking is easy! 1️⃣ Browse tours, 2️⃣ Click 'Book Now', 3️⃣ Fill traveler details, 4️⃣ Choose payment, 5️⃣ Confirm! You'll get instant QR ticket 🎫";

    // PAYMENT
    if (/payment|pay|upi|card|netbanking|cod/i.test(q)) return "We accept 💳 Credit/Debit Cards, 📱 UPI (with QR code), 🏦 Net Banking, 💵 Cash on Delivery. All secure!";

    // CANCELLATION
    if (/cancel|refund|wapsi/i.test(q)) return "Free cancellation up to 7 days before tour! 🔄 Within 7 days, partial refund. Contact support for help.";

    // WEATHER
    if (/weather|mausam|temperature/i.test(q)) return "Great question! 🌤️ Check current weather at your destination using weather apps before traveling. Best time: Oct-March for India, April-June for Europe!";

    // VISA
    if (/visa|passport|document/i.test(q)) return "For international tours, you need a valid passport (6+ months validity) and visa. 🛂 We help with documentation! Contact support.";

    // FOOD
    if (/food|khana|cuisine|eat/i.test(q)) return "All our packages include meals! 🍽️ Local cuisine, vegetarian & non-vegetarian options available. Special dietary needs? Just ask!";

    // HOTEL
    if (/hotel|stay|accommodation|room/i.test(q)) return "We partner with 3-5 star hotels and premium resorts. 🏨 All rooms are clean, comfortable, and conveniently located!";

    // SAFETY
    if (/safe|security|insurance/i.test(q)) return "Your safety is our priority! 🛡️ All tours include travel insurance, 24/7 support, verified guides, and safe transport.";

    // GROUP
    if (/group|family|friends|discount/i.test(q)) return "Booking for 5+ travelers gets you automatic 10% OFF! 🎁 Perfect for families & friend groups!";

    // HOW TO CONTACT
    if (/contact|support|call|email|phone/i.test(q)) return "Reach us: 📞 +91 98765 43210, 📧 info@exploreworld.com. Available 24/7! 🤝";

    // ABOUT
    if (/about|explore world|company/i.test(q)) return "Explore World 🌍 — Since 2020, we've helped 50,000+ travelers discover amazing destinations. Trusted, affordable, and always awesome! Check our About page!";

    // RECOMMENDATION
    if (/recommend|suggest|best|which/i.test(q)) return "Based on popularity: 🌴 Goa for beaches, ⛰️ Himalayan Trek for adventure, 🌸 Tokyo for culture, 🏝️ Maldives for luxury. What's your vibe?";

    // ADVENTURE
    if (/adventure|trek|hiking|rafting/i.test(q)) return "Adrenaline rush? 🧗 Try Himalayan Trek (₹24,999), Rishikesh Rafting (₹8,999), or Paragliding in Bir Billing (₹12,999)!";

    // HONEYMOON
    if (/honeymoon|romantic|couple/i.test(q)) return "Romantic escapes 💑 — Paris, Bali, Maldives, Santorini! All curated for couples with special touches!";

    // FESTIVAL
    if (/festival|diwali|christmas|holi/i.test(q)) return "Festival specials! 🎉 Diwali - 50% off, Christmas - Buy 2 Get 1, Holi - 60% off! Check Offers section!";

    // SOLO
    if (/solo|alone|single/i.test(q)) return "Solo travel is amazing! 🎒 Our group tours are perfect for meeting new people. Safety guaranteed!";

    // TIME / DURATION
    if (/duration|days|how long|kitne din/i.test(q)) return "Tours range from 2-day quick escapes (Jaipur) to 7-day adventures (Swiss Alps, Kashmir). ⏱️ Filter by duration!";

    // AVAILABILITY
    if (/available|availability|slot/i.test(q)) return "Most tours have daily availability! 🗓️ Book 1-2 weeks in advance for peak season (Oct-March).";

    // LOYALTY
    if (/loyalty|points|reward/i.test(q)) return "Coming soon: Loyalty Points program! 🎁 For now, refer friends for ₹500 off!";

    // FEEDBACK
    if (/complain|feedback|issue|problem/i.test(q)) return "We're sorry to hear that! 😔 Please contact support at +91 98765 43210 and we'll resolve it ASAP!";

    // HELP
    if (/help|madad|kya kar/i.test(q)) return "I can help with: 📦 Bookings, 💳 Payments, 🌍 Tours, 🎫 Tickets, ❓ FAQs. What do you need?";

    // QUESTION MARK
    if (q.endsWith('?')) return "Interesting question! 🤔 Let me connect you with a human agent for detailed info. Meanwhile, check our FAQ section on homepage!";

    // DEFAULT - Try to be helpful with any input
    const randomHelpful = [
        "Great question! 🌟 Let me help you. Could you tell me a bit more about what you're looking for?",
        "Interesting! 🤔 I'd recommend checking our Tours section or chatting with our team. Anything specific I can help with?",
        "Thanks for asking! 😊 I specialize in travel-related queries — tours, bookings, payments, destinations. What can I help you with?",
        "Hmm, let me think about that! 💭 In the meantime, feel free to browse our 39 amazing tours or ask me about destinations!",
        "I'd love to help with that! 🤖 Try asking about: tours, bookings, payments, destinations, or travel tips. What interests you?",
        "Awesome! 🎉 That sounds like something our travel experts can help with perfectly. Meanwhile, want me to suggest a destination?"
    ];
    return randomHelpful[Math.floor(Math.random() * randomHelpful.length)];
}

function setupChatbot() {
    const toggle = document.getElementById('chatbotToggle');
    const container = document.getElementById('chatbotContainer');
    const close = document.getElementById('chatbotClose');
    const input = document.getElementById('chatbotInput');
    const send = document.getElementById('chatbotSend');
    const micBtn = document.getElementById('chatbotMicBtn');
    const messages = document.getElementById('chatbotMessages');
    const quickReplies = document.getElementById('chatbotQuickReplies');

    if (!toggle) return;

    quickReplies.innerHTML = chatbotTopics.map(t => `
        <button class="quick-reply" data-msg="${t.label}">${t.icon} ${t.label}</button>
    `).join('');

    toggle.addEventListener('click', () => container.classList.toggle('open'));
    close.addEventListener('click', () => container.classList.remove('open'));

    function addMessage(text, type) {
        const div = document.createElement('div');
        div.className = 'chatbot-msg ' + type;
        div.innerHTML = `<p>${text}</p>`;
        messages.appendChild(div);
        messages.scrollTop = messages.scrollHeight;
    }

    function sendMessage() {
        const text = input.value.trim();
        if (!text) return;
        addMessage(text, 'user');
        input.value = '';

        // Simulate typing delay for human-like feel
        const typingDiv = document.createElement('div');
        typingDiv.className = 'chatbot-msg bot';
        typingDiv.innerHTML = '<p>TravelBot is typing...</p>';
        messages.appendChild(typingDiv);
        messages.scrollTop = messages.scrollHeight;

        setTimeout(() => {
            typingDiv.remove();
            const response = getAIResponse(text);
            addMessage(response, 'bot');
        }, 700 + Math.random() * 600);
    }

    send.addEventListener('click', sendMessage);
    input.addEventListener('keypress', (e) => { if (e.key === 'Enter') sendMessage(); });

    if (micBtn) micBtn.addEventListener('click', function(e) {
        e.preventDefault();
        startVoiceSearch('chatbotInput', micBtn, (t) => { input.value = t; sendMessage(); });
    });

    document.querySelectorAll('.quick-reply').forEach(btn => {
        btn.addEventListener('click', function() {
            const msg = this.dataset.msg;
            addMessage(msg, 'user');
            setTimeout(() => {
                const topic = chatbotTopics.find(t => t.label === msg);
                addMessage(topic ? topic.response : getAIResponse(msg), 'bot');
            }, 600);
        });
    });
}

// ============================================================
// FEEDBACK TOAST
// ============================================================
function showFeedback(message, type = 'success') {
    const existing = document.querySelector('.feedback-toast');
    if (existing) existing.remove();
    const toast = document.createElement('div');
    toast.className = 'feedback-toast';
    const color = type === 'success' ? 'var(--green)' : type === 'error' ? '#EF4444' : type === 'info' ? 'var(--primary)' : 'var(--accent)';
    toast.style.cssText = `
        position: fixed; bottom: 80px; left: 50%; transform: translateX(-50%);
        background: ${color}; color: #fff; padding: 12px 24px; border-radius: 8px;
        font-weight: 600; box-shadow: 0 4px 20px rgba(0,0,0,0.2);
        z-index: 99999; max-width: 90%; text-align: center;
        font-family: 'Poppins', sans-serif; font-size: 0.9rem;
        animation: toastIn 0.3s ease;
    `;
    toast.textContent = message;
    document.body.appendChild(toast);
    if (!document.getElementById('toastAnim')) {
        const style = document.createElement('style');
        style.id = 'toastAnim';
        style.textContent = `@keyframes toastIn { from { opacity: 0; transform: translate(-50%, 20px); } to { opacity: 1; transform: translate(-50%, 0); } }`;
        document.head.appendChild(style);
    }
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transition = 'opacity 0.3s';
        setTimeout(() => toast.remove(), 300);
    }, 2500);
}

// ============================================================
// 3D TILT
// ============================================================
function setup3DTilt() {
    if ('ontouchstart' in window) return;
    if (window.innerWidth < 768) return;
    document.addEventListener('mousemove', function(e) {
        const card = e.target.closest('.tour-card');
        if (!card || card.querySelector('.tour-image-wrapper.zoomed')) return;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const cx = rect.width / 2;
        const cy = rect.height / 2;
        const rotateX = ((y - cy) / cy) * -4;
        const rotateY = ((x - cx) / cx) * 4;
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
    });
    document.addEventListener('mouseout', function(e) {
        const card = e.target.closest('.tour-card');
        if (card) card.style.transform = '';
    });
}

// ============================================================
// INIT
// ============================================================
document.addEventListener('DOMContentLoaded', function() {
    console.log('🌊 Explore World Loading - Ocean Breeze');
    hideLoadingScreen();
    setupPasswordToggle();
    checkAccount();
    initSlider();
    setupNavigation();
    renderTours('all', 'all', 'all', 'default');
    setupCategoryTabs();
    setupFilters();
    setupOfferTabs();
    setupProfileTabs();
    setupFAQ();
    setupSearch();
    setupHeroSearch();
    setupCategoryExplorer();
    renderTrending();
    setupRegionTabs();
    renderInternational('europe');
    setupReviewsCarousel();
    setupChatbot();
    setupDownToTop();
    setup3DTilt();
    updateWishlist();
    renderWishlist();

    console.log(`📦 ${tours.length} tours loaded`);
    console.log(`❤️ ${wishlist.length} items in wishlist`);
    console.log(`🔐 Logged in: ${isLoggedIn}`);
    console.log(`🎤 Voice: ${SpeechRecognition ? 'Supported ✅' : 'Not supported ❌'}`);
});

// ============================================================
// GLOBAL FUNCTIONS
// ============================================================
window.handleBookNow = handleBookNow;
window.handleWishlist = handleWishlist;
window.handleEnquiry = handleEnquiry;
window.openPopup = openPopup;
window.removeFromWishlist = removeFromWishlist;
window.deleteAddress = deleteAddress;
window.goToBookingStep = goToBookingStep;
window.selectPaymentMethod = selectPaymentMethod;
window.confirmBooking = confirmBooking;
window.closeBookingSuccess = closeBookingSuccess;
window.closeBookingSuccessAndGoProfile = closeBookingSuccessAndGoProfile;
window.downloadInvoice = downloadInvoice;
