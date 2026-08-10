// ============================================
// script.js - Explore World Day 15 (Final)
// Tours & Travels - All Features with Payment
// ============================================

// ===== TOUR DATA =====
const tours = [
    { id: 1, name: 'Goa Beach Escape', price: 14999, desc: '3 days of sun, sand & sea at India\'s best beaches', category: 'beach', img: 'images/beach1.png', badge: 'popular', discount: 15, duration: '3 Days' },
    { id: 2, name: 'Himalayan Trek', price: 24999, desc: '5 days of breathtaking mountain views & adventure', category: 'mountain', img: 'images/mountain1.png', badge: 'adventure', discount: 10, duration: '5 Days' },
    { id: 3, name: 'Jaipur City Tour', price: 9999, desc: '2 days exploring the Pink City\'s palaces & forts', category: 'city', img: 'images/jaipur.png', badge: 'budget', discount: 0, duration: '2 Days' },
    { id: 4, name: 'Kerala Backwaters', price: 18999, desc: '4 days of houseboat stays & serene waterways', category: 'beach', img: 'images/beach2.png', badge: 'luxury', discount: 20, duration: '4 Days' },
    { id: 5, name: 'Varanasi Cultural Tour', price: 12999, desc: '3 days exploring the spiritual capital of India', category: 'cultural', img: 'images/varanasi.png', badge: 'popular', discount: 5, duration: '3 Days' },
    { id: 6, name: 'Rishikesh Adventure', price: 16999, desc: '4 days of rafting, bungee jumping & yoga', category: 'adventure', img: 'images/rishikesh.png', badge: 'adventure', discount: 12, duration: '4 Days' },
    { id: 7, name: 'Darjeeling Himalayan Tour', price: 21999, desc: '5 days of tea gardens & mountain views', category: 'mountain', img: 'images/mountain2.png', badge: 'luxury', discount: 8, duration: '5 Days' },
    { id: 8, name: 'Mumbai City Highlights', price: 7999, desc: '2 days of Bollywood, beaches & street food', category: 'city', img: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=300&h=300&fit=crop&auto=format', badge: 'budget', discount: 0, duration: '2 Days' },
    { id: 9, name: 'Goa Cultural Experience', price: 15999, desc: '3 days of Portuguese heritage & beach fun', category: 'cultural', img: 'images/goa.png', badge: 'popular', discount: 10, duration: '3 Days' },
    { id: 10, name: 'Kashmir Great Lakes Trek', price: 29999, desc: '7 days of stunning alpine lake trekking', category: 'mountain', img: 'images/mountain3.png', badge: 'adventure', discount: 15, duration: '7 Days' },
    { id: 11, name: 'Mysore Heritage Tour', price: 8999, desc: '2 days of palaces, temples & silk shopping', category: 'cultural', img: 'images/mysore.png', badge: 'budget', discount: 0, duration: '2 Days' },
    { id: 12, name: 'Andaman Island Escape', price: 34999, desc: '6 days of pristine beaches & water sports', category: 'beach', img: 'images/beach3.png', badge: 'luxury', discount: 25, duration: '6 Days' },
    { id: 13, name: 'Manali Trekking Expedition', price: 8999, desc: '5 days of thrilling trekking in the Himalayas', category: 'adventure', img: 'images/manali.png', badge: 'adventure', discount: 10, duration: '5 Days' },
    { id: 14, name: 'Paragliding in Bir Billing', price: 12999, desc: '3 days of paragliding & camping in the Himalayas', category: 'adventure', img: 'images/paragling.png', badge: 'adventure', discount: 15, duration: '3 Days' },
    { id: 15, name: 'Scuba Diving in Andaman', price: 22999, desc: '4 days of scuba diving & marine exploration', category: 'adventure', img: 'images/scuba.png', badge: 'luxury', discount: 20, duration: '4 Days' },
    { id: 16, name: 'Delhi Heritage Walk', price: 6999, desc: '2 days exploring Old Delhi & New Delhi\'s landmarks', category: 'city', img: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=300&h=300&fit=crop&auto=format', badge: 'budget', discount: 0, duration: '2 Days' },
    { id: 17, name: 'Bangalore Tech & Nature', price: 8499, desc: '2 days of IT parks, gardens & lakes of Bengaluru', category: 'city', img: 'images/baglore.png', badge: 'popular', discount: 5, duration: '2 Days' },
    { id: 18, name: 'Hyderabad Culture', price: 7999, desc: '2 days of biryani, pearls & monuments of Hyderabad', category: 'city', img: 'images/hyderabad.png', badge: 'budget', discount: 0, duration: '2 Days' }
];

// ===== STATE =====
let wishlist = JSON.parse(localStorage.getItem('exploreworld_wishlist')) || [];
let userRatings = JSON.parse(localStorage.getItem('exploreworld_user_ratings')) || {};
let tourComments = JSON.parse(localStorage.getItem('exploreworld_comments')) || {};
let currentCategory = 'all';
let currentPriceFilter = 'all';
let currentDurationFilter = 'all';
let currentSort = 'default';
let popupTourId = null;
let isLoggedIn = JSON.parse(localStorage.getItem('exploreworld_logged_in')) || false;
let currentSlide = 0;
let totalSlides = 0;
let addresses = JSON.parse(localStorage.getItem('exploreworld_addresses')) || {
    home: '123, Main Street, Andheri East, Mumbai - 400001',
    office: '456, Business Park, BKC, Mumbai - 400051',
    other: '789, Lake View, Pune - 411001'
};
let bookingTour = null;

// ===== CHATBOT TOPICS (10) =====
const chatbotTopics = [
    { icon: '📦', label: 'Bookings', response: 'You can view all your bookings in Profile → Bookings 📦' },
    { icon: '💳', label: 'Payment Help', response: 'We accept Credit/Debit Cards, UPI, Net Banking & Cash on Delivery 💳' },
    { icon: '✈️', label: 'Tour Confirmation', response: 'Tours are confirmed within 24 hours. Check your email! ✈️' },
    { icon: '🔄', label: 'Cancellation Policy', response: 'Free cancellation up to 7 days before tour start date 🔄' },
    { icon: '📞', label: 'Contact Support', response: '📞 +91 74878 14056 📧 info@exploreworld.com' },
    { icon: '🔐', label: 'Account Security', response: 'Keep your password secure. Never share OTP! 🔐' },
    { icon: '🏨', label: 'Hotel Bookings', response: 'We partner with 5-star resorts and premium hotels 🏨' },
    { icon: '⭐', label: 'Reviews', response: 'Rate tours after completion. Your feedback helps us improve! ⭐' },
    { icon: '🎒', label: 'Travel Tips', response: 'Pack light, carry essentials, and keep your documents safe! 🎒' },
    { icon: '🆘', label: 'Emergency Help', response: 'For urgent assistance, call us at +91 98765 43210 🆘' }
];

// =========================================================
// PASSWORD TOGGLE FUNCTION
// =========================================================
function setupPasswordToggle() {
    document.querySelectorAll('.toggle-password').forEach(button => {
        button.addEventListener('click', function() {
            const targetId = this.dataset.target;
            const input = document.getElementById(targetId);
            if (input) {
                if (input.type === 'password') {
                    input.type = 'text';
                    this.textContent = '🙈';
                } else {
                    input.type = 'password';
                    this.textContent = '👁️';
                }
            }
        });
    });
}

// =========================================================
// ACCOUNT MANAGEMENT
// =========================================================
function checkAccount() {
    const account = JSON.parse(localStorage.getItem('exploreworld_account'));
    if (account) {
        isLoggedIn = true;
        document.getElementById('createAccountPage').style.display = 'none';
        document.getElementById('mainApp').style.display = 'block';
        document.getElementById('profileName').textContent = account.fullName || 'John Doe';
        document.getElementById('profileEmail').textContent = account.email || 'john@email.com';
        document.getElementById('profilePhone').textContent = account.phone || '+91 98765 43210';
        document.getElementById('editFullName').value = account.fullName || '';
        document.getElementById('editEmail').value = account.email || '';
        document.getElementById('editPhone').value = account.phone || '';
    } else {
        document.getElementById('createAccountPage').style.display = 'flex';
        document.getElementById('mainApp').style.display = 'none';
    }
    renderAddresses();
}

document.getElementById('createAccountForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const fullName = document.getElementById('accFullName').value.trim();
    const email = document.getElementById('accEmail').value.trim();
    const phone = document.getElementById('accPhone').value.trim();
    const password = document.getElementById('accPassword').value;
    const confirmPassword = document.getElementById('accConfirmPassword').value;

    if (!fullName || !email || !phone || !password || !confirmPassword) {
        showFeedback('⚠️ Please fill all fields', 'error');
        return;
    }
    if (password !== confirmPassword) {
        showFeedback('⚠️ Passwords do not match', 'error');
        return;
    }
    if (password.length < 6) {
        showFeedback('⚠️ Password must be at least 6 characters', 'error');
        return;
    }

    const accountData = { fullName, email, phone, password };
    localStorage.setItem('exploreworld_account', JSON.stringify(accountData));
    localStorage.setItem('exploreworld_logged_in', JSON.stringify(true));
    isLoggedIn = true;
    showFeedback('✅ Account created successfully! 🎉', 'success');
    this.reset();
    checkAccount();
});

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value;
    const account = JSON.parse(localStorage.getItem('exploreworld_account'));
    if (!account) {
        showFeedback('⚠️ No account found. Please sign up first.', 'error');
        return;
    }
    if (account.email === email && account.password === password) {
        localStorage.setItem('exploreworld_logged_in', JSON.stringify(true));
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

// ===== LOGOUT =====
document.getElementById('logoutBtn').addEventListener('click', function() {
    if (confirm('Are you sure you want to logout?')) {
        localStorage.removeItem('exploreworld_logged_in');
        localStorage.removeItem('exploreworld_wishlist');
        isLoggedIn = false;
        wishlist = [];
        updateWishlist();
        showFeedback('🚪 Logged out successfully', 'info');
        document.getElementById('createAccountPage').style.display = 'flex';
        document.getElementById('mainApp').style.display = 'none';
        document.getElementById('loginForm').reset();
        document.getElementById('createAccountForm').reset();
        document.querySelector('.account-box:first-child').style.display = 'block';
        document.getElementById('loginBox').style.display = 'none';
        document.getElementById('wishlistOverlay').classList.remove('open');
        document.getElementById('tourPopup').classList.remove('open');
        document.getElementById('bookingPopup').classList.remove('open');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
});

// =========================================================
// PROFILE - EDIT PROFILE
// =========================================================
document.getElementById('editProfileBtn').addEventListener('click', function() {
    document.getElementById('editProfileForm').style.display = 'block';
    document.getElementById('editProfileForm').scrollIntoView({ behavior: 'smooth' });
});
document.getElementById('cancelProfileBtn').addEventListener('click', function() {
    document.getElementById('editProfileForm').style.display = 'none';
});
document.getElementById('saveProfileBtn').addEventListener('click', function() {
    const account = JSON.parse(localStorage.getItem('exploreworld_account'));
    if (!account) { showFeedback('⚠️ No account found', 'error'); return; }
    const fullName = document.getElementById('editFullName').value.trim();
    const email = document.getElementById('editEmail').value.trim();
    const phone = document.getElementById('editPhone').value.trim();
    if (!fullName || !email || !phone) {
        showFeedback('⚠️ Please fill all fields', 'error');
        return;
    }
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

// =========================================================
// PROFILE - CHANGE PASSWORD
// =========================================================
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
    if (!account) { showFeedback('⚠️ No account found', 'error'); return; }
    const current = document.getElementById('currentPassword').value;
    const newPwd = document.getElementById('newPassword').value;
    const confirmPwd = document.getElementById('confirmNewPassword').value;
    if (current !== account.password) {
        showFeedback('⚠️ Current password is incorrect', 'error');
        return;
    }
    if (newPwd.length < 6) {
        showFeedback('⚠️ New password must be at least 6 characters', 'error');
        return;
    }
    if (newPwd !== confirmPwd) {
        showFeedback('⚠️ Passwords do not match', 'error');
        return;
    }
    account.password = newPwd;
    localStorage.setItem('exploreworld_account', JSON.stringify(account));
    document.getElementById('changePasswordForm').style.display = 'none';
    document.getElementById('currentPassword').value = '';
    document.getElementById('newPassword').value = '';
    document.getElementById('confirmNewPassword').value = '';
    showFeedback('✅ Password changed successfully!', 'success');
});

// =========================================================
// PROFILE - ADDRESS MANAGEMENT
// =========================================================
function renderAddresses() {
    const list = document.getElementById('addressList');
    if (!list) return;
    let html = '';
    const addressLabels = { home: '🏠 Home', office: '🏢 Office', other: '📍 Other' };
    const addressKeys = Object.keys(addresses);
    addressKeys.forEach(key => {
        html += `
            <div class="address-card" data-address="${key}">
                <div class="address-type">${addressLabels[key] || key}</div>
                <div class="address-detail">${addresses[key]}</div>
                ${key === 'home' ? '<span class="address-default">Default</span>' : ''}
                <button class="address-delete" onclick="deleteAddress('${key}')">🗑️</button>
            </div>
        `;
    });
    list.innerHTML = html || '<p style="color:var(--text-light);">No addresses added yet.</p>';
}

function deleteAddress(key) {
    if (key === 'home') {
        showFeedback('⚠️ Cannot delete default address', 'error');
        return;
    }
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
    if (!label || !detail) {
        showFeedback('⚠️ Please fill all fields', 'error');
        return;
    }
    const key = label.toLowerCase().replace(/\s/g, '_');
    addresses[key] = detail;
    localStorage.setItem('exploreworld_addresses', JSON.stringify(addresses));
    document.getElementById('addAddressForm').style.display = 'none';
    document.getElementById('newAddressLabel').value = '';
    document.getElementById('newAddressDetail').value = '';
    renderAddresses();
    showFeedback('✅ Address added successfully!', 'success');
});

// =========================================================
// SLIDER
// =========================================================
function initSlider() {
    const slides = document.querySelectorAll('.slide');
    totalSlides = slides.length;
    const dotsContainer = document.getElementById('sliderDots');
    for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement('span');
        dot.className = 'dot' + (i === 0 ? ' active' : '');
        dot.dataset.index = i;
        dot.addEventListener('click', function() { goToSlide(parseInt(this.dataset.index)); });
        dotsContainer.appendChild(dot);
    }
    document.getElementById('prevSlide').addEventListener('click', function() {
        goToSlide((currentSlide - 1 + totalSlides) % totalSlides);
    });
    document.getElementById('nextSlide').addEventListener('click', function() {
        goToSlide((currentSlide + 1) % totalSlides);
    });
    setInterval(function() {
        if (document.querySelector('.slider-container:hover')) return;
        goToSlide((currentSlide + 1) % totalSlides);
    }, 4000);
}

function goToSlide(index) {
    currentSlide = index;
    const wrapper = document.getElementById('sliderWrapper');
    wrapper.style.transform = `translateX(-${index * 100}%)`;
    document.querySelectorAll('.slide').forEach((s, i) => s.classList.toggle('active', i === index));
    document.querySelectorAll('.dot').forEach((d, i) => d.classList.toggle('active', i === index));
}

// =========================================================
// DOWN TO TOP BUTTON
// =========================================================
function setupDownToTop() {
    const btn = document.getElementById('downToTopBtn');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            btn.classList.add('visible');
        } else {
            btn.classList.remove('visible');
        }
    });
    btn.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// =========================================================
// NAVIGATION
// =========================================================
function setupNavigation() {
    document.querySelectorAll('.nav-link, [data-section]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
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
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });
}

// =========================================================
// TOURS RENDER
// =========================================================
function renderTours(category = 'all', priceFilter = 'all', durationFilter = 'all', sort = 'default') {
    const grid = document.getElementById('tourGrid');
    if (!grid) return;

    let filtered = category === 'all' ? [...tours] : tours.filter(t => t.category === category);

    if (priceFilter !== 'all') {
        filtered = filtered.filter(t => {
            if (priceFilter === '0-10000') return t.price <= 10000;
            if (priceFilter === '10000-30000') return t.price > 10000 && t.price <= 30000;
            if (priceFilter === '30000-50000') return t.price > 30000 && t.price <= 50000;
            if (priceFilter === '50000+') return t.price > 50000;
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
    else if (sort === 'rating') filtered.sort((a, b) => (userRatings[b.id] || 0) - (userRatings[a.id] || 0));

    if (filtered.length === 0) {
        grid.innerHTML = `<div style="text-align:center;color:var(--text-light);padding:2rem;width:100%;">No tours found matching your filters.</div>`;
        return;
    }

    const isWishlisted = (id) => wishlist.some(item => item.id === id);

    grid.innerHTML = filtered.map(t => {
        const userRating = userRatings[t.id] || 0;
        const fullStars = Math.floor(userRating);
        const emptyStars = 5 - fullStars;
        let starsHTML = '';
        for (let i = 0; i < fullStars; i++) starsHTML += '<span class="star active">★</span>';
        for (let i = 0; i < emptyStars; i++) starsHTML += '<span class="star">★</span>';

        let badgeClass = 'badge-popular';
        let badgeText = '⭐ Popular';
        if (t.badge === 'popular') { badgeClass = 'badge-popular'; badgeText = '⭐ Popular'; }
        else if (t.badge === 'luxury') { badgeClass = 'badge-luxury'; badgeText = '💎 Luxury'; }
        else if (t.badge === 'budget') { badgeClass = 'badge-budget'; badgeText = '💰 Budget'; }
        else if (t.badge === 'adventure') { badgeClass = 'badge-adventure'; badgeText = '🧗 Adventure'; }

        const wishlisted = isWishlisted(t.id);

        return `
            <div class="tour-card" data-id="${t.id}" onclick="openPopup(${t.id})">
                ${t.badge ? `<span class="tour-badge ${badgeClass}">${badgeText}</span>` : ''}
                <img src="${t.img}" alt="${t.name}" loading="lazy" />
                <h3>${t.name}</h3>
                <p class="description">${t.desc}</p>
                <span class="duration">📅 ${t.duration}</span>
                <div class="rating-section">
                    <div class="rating-stars" data-id="${t.id}">${starsHTML}</div>
                    <span class="rating-text">${userRating > 0 ? '★' + userRating : 'Rate'}</span>
                </div>
                <div class="price">₹${t.price.toLocaleString('en-IN')}</div>
                <div class="tour-actions">
                    <button class="book-now" onclick="event.stopPropagation(); handleBookNow(${t.id})">Book Now</button>
                    <button class="wishlist-btn ${wishlisted ? 'active' : ''}" onclick="event.stopPropagation(); handleWishlist(${t.id})">
                        ${wishlisted ? '❤️' : '🤍'}
                    </button>
                </div>
            </div>
        `;
    }).join('');

    // Rating star click events
    document.querySelectorAll('.rating-stars').forEach(container => {
        const stars = container.querySelectorAll('.star');
        const tourId = parseInt(container.dataset.id);
        stars.forEach((star, index) => {
            star.addEventListener('click', function(e) {
                e.stopPropagation();
                if (!isLoggedIn) {
                    showFeedback('⚠️ Please login to rate', 'error');
                    return;
                }
                const rating = index + 1;
                userRatings[tourId] = rating;
                localStorage.setItem('exploreworld_user_ratings', JSON.stringify(userRatings));
                showFeedback(`⭐ Rated ${rating} stars!`, 'success');
                renderTours(currentCategory, currentPriceFilter, currentDurationFilter, currentSort);
            });
        });
    });
}

// =========================================================
// HANDLE FUNCTIONS WITH AUTH
// =========================================================
function handleBookNow(tourId) {
    if (!isLoggedIn) {
        showFeedback('⚠️ Please login to book a tour', 'error');
        document.getElementById('createAccountPage').style.display = 'flex';
        document.getElementById('mainApp').style.display = 'none';
        return;
    }
    openBookingPopup(tourId);
}

function handleWishlist(tourId) {
    if (!isLoggedIn) {
        showFeedback('⚠️ Please login to add to wishlist', 'error');
        document.getElementById('createAccountPage').style.display = 'flex';
        document.getElementById('mainApp').style.display = 'none';
        return;
    }
    const index = wishlist.findIndex(item => item.id === tourId);
    if (index > -1) {
        wishlist.splice(index, 1);
        showFeedback('Removed from wishlist', 'info');
    } else {
        const tour = tours.find(t => t.id === tourId);
        if (tour) wishlist.push({ ...tour });
        showFeedback('❤️ Added to wishlist!', 'success');
    }
    localStorage.setItem('exploreworld_wishlist', JSON.stringify(wishlist));
    updateWishlist();
    renderTours(currentCategory, currentPriceFilter, currentDurationFilter, currentSort);
    renderWishlist();
}

// =========================================================
// WISHLIST FUNCTIONS
// =========================================================
function updateWishlist() {
    document.getElementById('wishlistCount').textContent = wishlist.length;
}

function renderWishlist() {
    const container = document.getElementById('wishlistItems');
    if (!container) return;
    if (wishlist.length === 0) {
        container.innerHTML = `<div class="empty-wishlist">❤️ Your wishlist is empty.</div>`;
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
            <button class="wishlist-item-remove" onclick="removeFromWishlist(${item.id})">🗑️</button>
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

// =========================================================
// TOUR POPUP (Quick View)
// =========================================================
function openPopup(tourId) {
    if (!isLoggedIn) {
        showFeedback('⚠️ Please login to view tour details', 'error');
        document.getElementById('createAccountPage').style.display = 'flex';
        document.getElementById('mainApp').style.display = 'none';
        return;
    }
    const tour = tours.find(t => t.id === tourId);
    if (!tour) {
        showFeedback('⚠️ Tour not found', 'error');
        return;
    }
    popupTourId = tourId;
    document.getElementById('popupImg').src = tour.img;
    document.getElementById('popupName').textContent = tour.name;
    document.getElementById('popupDesc').textContent = tour.desc + ` (${tour.duration})`;
    document.getElementById('popupPrice').textContent = '₹' + tour.price.toLocaleString('en-IN');

    const userRating = userRatings[tourId] || 0;
    const stars = document.querySelectorAll('#popupStars span');
    stars.forEach((star, index) => {
        star.classList.toggle('active', index < userRating);
        star.onclick = function() {
            if (!isLoggedIn) {
                showFeedback('⚠️ Please login to rate', 'error');
                return;
            }
            const rating = parseInt(this.dataset.value);
            userRatings[tourId] = rating;
            localStorage.setItem('exploreworld_user_ratings', JSON.stringify(userRatings));
            stars.forEach((s, i) => s.classList.toggle('active', i < rating));
            document.getElementById('popupRatingText').textContent = rating > 0 ? '★' + rating : 'Not rated';
            showFeedback(`⭐ Rated ${rating} stars!`, 'success');
            renderTours(currentCategory, currentPriceFilter, currentDurationFilter, currentSort);
        };
    });
    document.getElementById('popupRatingText').textContent = userRating > 0 ? '★' + userRating : 'Not rated';

    const commentsContainer = document.getElementById('popupComments');
    const tourCommentsList = tourComments[tourId] || [];
    if (tourCommentsList.length === 0) {
        commentsContainer.innerHTML = '<div class="comment-item">No requests yet.</div>';
    } else {
        commentsContainer.innerHTML = tourCommentsList.map(c => `<div class="comment-item">⭐ ${c.rating || ''} - ${c.comment}</div>`).join('');
    }
    document.getElementById('tourPopup').classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closePopup() {
    document.getElementById('tourPopup').classList.remove('open');
    document.body.style.overflow = '';
}
document.getElementById('closePopup').addEventListener('click', closePopup);
document.getElementById('tourPopup').addEventListener('click', function(e) { if (e.target === this) closePopup(); });

document.getElementById('popupBookNow').addEventListener('click', function() {
    closePopup();
    if (popupTourId) openBookingPopup(popupTourId);
});

document.getElementById('popupSubmitComment').addEventListener('click', function() {
    if (!isLoggedIn) {
        showFeedback('⚠️ Please login to submit request', 'error');
        document.getElementById('createAccountPage').style.display = 'flex';
        document.getElementById('mainApp').style.display = 'none';
        return;
    }
    const comment = document.getElementById('popupComment').value.trim();
    if (!comment) { showFeedback('⚠️ Please write your request!', 'error'); return; }
    if (!popupTourId) return;
    if (!tourComments[popupTourId]) tourComments[popupTourId] = [];
    const userRating = userRatings[popupTourId] || 0;
    tourComments[popupTourId].push({ comment, rating: userRating });
    localStorage.setItem('exploreworld_comments', JSON.stringify(tourComments));
    document.getElementById('popupComment').value = '';
    showFeedback('✅ Request submitted!', 'success');
    const commentsContainer = document.getElementById('popupComments');
    const list = tourComments[popupTourId] || [];
    commentsContainer.innerHTML = list.map(c => `<div class="comment-item">${c.rating > 0 ? '⭐' + c.rating + ' - ' : ''}${c.comment}</div>`).join('');
});

// =========================================================
// BOOKING POPUP (Payment System)
// =========================================================
function openBookingPopup(tourId) {
    const tour = tours.find(t => t.id === tourId);
    if (!tour) return;
    bookingTour = tour;
    
    document.getElementById('bookingTourName').textContent = tour.name;
    document.getElementById('bookingTourPrice').textContent = '₹' + tour.price.toLocaleString('en-IN') + ' per traveler';
    document.getElementById('bookingTourDuration').textContent = '📅 ' + tour.duration;
    
    // Set default values
    document.getElementById('bookingTravelers').value = '1';
    document.getElementById('bookingDays').value = tour.duration.split(' ')[0] || '3';
    document.getElementById('bookingDate').value = new Date().toISOString().split('T')[0];
    
    // Reset payment method
    selectPaymentMethod('card');
    
    // Reset to step 1
    goToBookingStep(1);
    
    // Update summary
    updateBookingSummary();
    
    document.getElementById('bookingPopup').classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeBookingPopup() {
    document.getElementById('bookingPopup').classList.remove('open');
    document.body.style.overflow = '';
}
document.getElementById('closeBookingPopup').addEventListener('click', closeBookingPopup);
document.getElementById('bookingPopup').addEventListener('click', function(e) { if (e.target === this) closeBookingPopup(); });

function goToBookingStep(step) {
    document.querySelectorAll('.booking-step').forEach(s => s.style.display = 'none');
    document.getElementById('bookingStep' + step).style.display = 'block';
}

function selectPaymentMethod(method) {
    document.querySelectorAll('.payment-option').forEach(o => o.classList.remove('selected'));
    document.querySelector(`.payment-option[data-method="${method}"]`).classList.add('selected');
    
    document.getElementById('cardDetails').style.display = method === 'card' ? 'block' : 'none';
    document.getElementById('netbankingOptions').style.display = method === 'netbanking' ? 'block' : 'none';
    document.getElementById('upiOptions').style.display = method === 'upi' ? 'block' : 'none';
}

function updateBookingSummary() {
    const travelers = parseInt(document.getElementById('bookingTravelers').value) || 1;
    const days = parseInt(document.getElementById('bookingDays').value) || 1;
    const basePrice = bookingTour ? bookingTour.price : 0;
    const totalPrice = basePrice * travelers * days;
    const gst = Math.round(totalPrice * 0.05);
    const finalTotal = totalPrice + gst;
    
    document.getElementById('summaryBasePrice').textContent = '₹' + totalPrice.toLocaleString('en-IN');
    document.getElementById('summaryTravelers').textContent = travelers;
    document.getElementById('summaryDays').textContent = days;
    document.getElementById('summaryGST').textContent = '₹' + gst.toLocaleString('en-IN');
    document.getElementById('summaryTotal').textContent = '₹' + finalTotal.toLocaleString('en-IN');
}

// Listen to changes in booking form
document.getElementById('bookingTravelers').addEventListener('change', updateBookingSummary);
document.getElementById('bookingDays').addEventListener('change', updateBookingSummary);

function confirmBooking() {
    const name = document.getElementById('bookingName').value.trim();
    const email = document.getElementById('bookingEmail').value.trim();
    const phone = document.getElementById('bookingPhone').value.trim();
    const travelers = document.getElementById('bookingTravelers').value;
    const days = document.getElementById('bookingDays').value;
    const date = document.getElementById('bookingDate').value;
    const paymentMethod = document.querySelector('.payment-option.selected')?.dataset.method || 'cod';
    
    if (!name || !email || !phone) {
        showFeedback('⚠️ Please fill all traveler details', 'error');
        return;
    }
    
    const paymentNames = {
        card: 'Credit/Debit Card',
        netbanking: 'Net Banking',
        upi: 'UPI',
        cod: 'Cash on Delivery'
    };
    
    const total = bookingTour ? bookingTour.price * parseInt(travelers) * parseInt(days) * 1.05 : 0;
    const bookingId = 'EW' + Date.now().toString().slice(-6);
    const formattedDate = new Date(date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
    
    document.getElementById('successBookingId').textContent = bookingId;
    document.getElementById('successBookingDate').textContent = formattedDate;
    document.getElementById('successBookingAmount').textContent = '₹' + Math.round(total).toLocaleString('en-IN');
    document.getElementById('successBookingPayment').textContent = paymentNames[paymentMethod] || 'Cash on Delivery';
    document.getElementById('successBookingTravelers').textContent = travelers;
    document.getElementById('successBookingDays').textContent = days;
    document.getElementById('successBookingDetails').textContent = 
        `${bookingTour ? bookingTour.name : ''} for ${travelers} traveler(s) - ${days} Days`;
    
    closeBookingPopup();
    document.getElementById('bookingSuccessPopup').classList.add('open');
    launchConfetti();
}

// =========================================================
// BOOKING SUCCESS FUNCTIONS
// =========================================================
function closeBookingSuccess() {
    document.getElementById('bookingSuccessPopup').classList.remove('open');
    document.body.style.overflow = '';
    document.querySelector('[data-section="home"]').click();
}

function closeBookingSuccessAndGoProfile() {
    document.getElementById('bookingSuccessPopup').classList.remove('open');
    document.body.style.overflow = '';
    document.querySelector('[data-section="profile"]').click();
}

function downloadInvoice() {
    showFeedback('📥 Invoice downloaded! (Demo)', 'success');
}

// =========================================================
// CONFETTI
// =========================================================
function launchConfetti() {
    const container = document.createElement('div');
    container.className = 'confetti-container';
    document.body.appendChild(container);
    const colors = ['#e67e22', '#f39c12', '#f1c40f', '#27ae60', '#e74c3c', '#3498db'];
    for (let i = 0; i < 80; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.width = (Math.random() * 8 + 4) + 'px';
        confetti.style.height = (Math.random() * 8 + 4) + 'px';
        confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDuration = (Math.random() * 2 + 1.5) + 's';
        confetti.style.animationDelay = (Math.random() * 1.5) + 's';
        container.appendChild(confetti);
    }
    setTimeout(() => { container.remove(); }, 4000);
}

// =========================================================
// CATEGORY TABS & FILTERS
// =========================================================
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

function setupFilters() {
    document.getElementById('priceFilter').addEventListener('change', function() {
        currentPriceFilter = this.value;
        renderTours(currentCategory, currentPriceFilter, currentDurationFilter, currentSort);
    });
    document.getElementById('durationFilter').addEventListener('change', function() {
        currentDurationFilter = this.value;
        renderTours(currentCategory, currentPriceFilter, currentDurationFilter, currentSort);
    });
    document.getElementById('sortFilter').addEventListener('change', function() {
        currentSort = this.value;
        renderTours(currentCategory, currentPriceFilter, currentDurationFilter, currentSort);
    });
}

// =========================================================
// OFFER TABS
// =========================================================
function setupOfferTabs() {
    document.querySelectorAll('.tab-btn').forEach(tab => {
        tab.addEventListener('click', function() {
            document.querySelectorAll('.tab-btn').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.offer-tab-content').forEach(c => c.classList.remove('active'));
            this.classList.add('active');
            document.getElementById(this.dataset.tab).classList.add('active');
        });
    });
}

// =========================================================
// PROFILE TABS
// =========================================================
function setupProfileTabs() {
    document.querySelectorAll('.profile-tab').forEach(tab => {
        tab.addEventListener('click', function() {
            document.querySelectorAll('.profile-tab').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.profile-tab-content').forEach(c => c.classList.remove('active'));
            this.classList.add('active');
            document.getElementById('tab-' + this.dataset.tab).classList.add('active');
        });
    });
}

// =========================================================
// SEARCH
// =========================================================
function setupSearch() {
    const input = document.getElementById('searchInput');
    const btn = document.getElementById('searchBtn');

    if (!input) return;

    // 🔥 FIX: Clear any autofilled value
    input.value = '';
    
    // 🔥 FIX: Force remove autofill
    input.setAttribute('autocomplete', 'off');
    input.setAttribute('autocorrect', 'off');
    input.setAttribute('autocapitalize', 'off');
    input.setAttribute('spellcheck', 'false');
    
    // 🔥 FIX: Change name to avoid email autofill
    input.setAttribute('name', 'search_query');

    // 🔥 FIX: Clear on focus (browser autofill ko override)
    input.addEventListener('focus', function() {
        // Agar input mein @ hai toh clear karo
        if (this.value.includes('@')) {
            this.value = '';
        }
    });

    // 🔥 FIX: Clear on click
    input.addEventListener('click', function() {
        if (this.value.includes('@')) {
            this.value = '';
        }
    });

    // Search function
    function search() {
        const query = input.value.trim().toLowerCase();
        const cards = document.querySelectorAll('.tour-card');
        if (query === '') {
            cards.forEach(card => card.style.display = 'flex');
            return;
        }
        cards.forEach(card => {
            const name = card.querySelector('h3')?.innerText?.toLowerCase() || '';
            const desc = card.querySelector('.description')?.innerText?.toLowerCase() || '';
            const match = name.includes(query) || desc.includes(query);
            card.style.display = match ? 'flex' : 'none';
        });
    }

    if (btn) btn.addEventListener('click', search);
    if (input) {
        input.addEventListener('keyup', search);
        // 🔥 FIX: Page load ke baad bhi clear karein
        setTimeout(() => { if (input.value.includes('@')) input.value = ''; }, 100);
        setTimeout(() => { if (input.value.includes('@')) input.value = ''; }, 500);
    }
}

// =========================================================
// OVERLAYS
// =========================================================
function setupOverlays() {
    const wishlistOverlay = document.getElementById('wishlistOverlay');
    document.getElementById('wishlistIcon').addEventListener('click', function(e) {
        e.preventDefault();
        if (!isLoggedIn) {
            showFeedback('⚠️ Please login to view wishlist', 'error');
            document.getElementById('createAccountPage').style.display = 'flex';
            document.getElementById('mainApp').style.display = 'none';
            return;
        }
        wishlistOverlay.classList.add('open');
        renderWishlist();
        document.body.style.overflow = 'hidden';
    });
    document.getElementById('closeWishlist').addEventListener('click', function() {
        wishlistOverlay.classList.remove('open');
        document.body.style.overflow = '';
    });
    wishlistOverlay.addEventListener('click', function(e) { if (e.target === this) { wishlistOverlay.classList.remove('open');
            document.body.style.overflow = ''; } });
}

// =========================================================
// CHATBOT - 10 TOPICS
// =========================================================
function setupChatbot() {
    const toggle = document.getElementById('chatbotToggle');
    const container = document.getElementById('chatbotContainer');
    const close = document.getElementById('chatbotClose');
    const input = document.getElementById('chatbotInput');
    const send = document.getElementById('chatbotSend');
    const messages = document.getElementById('chatbotMessages');
    const quickReplies = document.getElementById('chatbotQuickReplies');

    quickReplies.innerHTML = chatbotTopics.map(topic => `
        <button class="quick-reply" data-msg="${topic.label}">${topic.icon} ${topic.label}</button>
    `).join('');

    const botResponses = {};
    chatbotTopics.forEach(topic => {
        botResponses[topic.label] = topic.response;
    });

    toggle.addEventListener('click', function() { container.classList.toggle('open'); });
    close.addEventListener('click', function() { container.classList.remove('open'); });

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
        setTimeout(() => {
            let response = 'I\'ll connect you to a human agent shortly! 🤖';
            for (const [key, value] of Object.entries(botResponses)) {
                if (text.includes(key) || text.includes(key.split(' ')[0])) { response = value; break; }
            }
            addMessage(response, 'bot');
        }, 500);
    }

    send.addEventListener('click', sendMessage);
    input.addEventListener('keypress', function(e) { if (e.key === 'Enter') sendMessage(); });

    document.querySelectorAll('.quick-reply').forEach(btn => {
        btn.addEventListener('click', function() {
            const msg = this.dataset.msg;
            addMessage(msg, 'user');
            setTimeout(() => {
                const response = botResponses[msg] || 'I\'ll connect you to a human agent shortly! 🤖';
                addMessage(response, 'bot');
            }, 500);
        });
    });
}

// =========================================================
// FEEDBACK
// =========================================================
function showFeedback(message, type = 'success') {
    const existing = document.querySelector('.feedback-toast');
    if (existing) existing.remove();
    const toast = document.createElement('div');
    toast.className = 'feedback-toast';
    const color = type === 'success' ? 'var(--green)' : type === 'error' ? '#EF4444' : type === 'info' ? 'var(--secondary)' : 'var(--accent)';
    toast.style.cssText = `
        position: fixed; bottom: 80px; left: 50%; transform: translateX(-50%);
        background: ${color}; color: #fff; padding: 12px 24px; border-radius: 8px;
        font-weight: 600; box-shadow: 0 4px 20px rgba(0,0,0,0.3);
        z-index: 9999; animation: fadeIn 0.3s ease; max-width: 90%; text-align: center;
    `;
    toast.textContent = message;
    document.body.appendChild(toast);
    setTimeout(() => { toast.style.opacity = '0';
        toast.style.transition = 'opacity 0.3s';
        setTimeout(() => toast.remove(), 300); }, 2500);
}

// =========================================================
// INIT
// =========================================================
document.addEventListener('DOMContentLoaded', function() {
    console.log('🌍 Explore World Day 15 - Final');
    setupPasswordToggle();
    checkAccount();
    initSlider();
    setupNavigation();
    renderTours('all', 'all', 'all', 'default');
    setupCategoryTabs();
    setupFilters();
    setupOfferTabs();
    setupProfileTabs();
    setupSearch();
    setupOverlays();
    setupChatbot();
    setupDownToTop();
    updateWishlist();
    console.log(`📦 ${tours.length} tours loaded`);
    console.log(`❤️ ${wishlist.length} items in wishlist`);
    console.log(`🔐 Logged in: ${isLoggedIn}`);
});