const navItems = document.querySelectorAll('.nav-item');
const sections = document.querySelectorAll('.data-sector');
const niteCtfUrl = 'https://nitectf.cryptonitemit.in/';
const landingCtaMode = 'off'; // nitectf, recruitment, off -- change this to change the landing cta

navItems.forEach(anchor => {
    anchor.setAttribute('data-text', anchor.textContent);

    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href') || '';
        if (href.startsWith('#')) {
            e.preventDefault();
            const targetElement = document.querySelector(href);
            if (targetElement) {
                const prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: prefersReducedMotion ? 'auto' : 'smooth'
                });
            }
        }
    });
});

function setActiveLinkById(id) {
    if (!id) return;
    navItems.forEach(item => {
        item.classList.remove('active-link');
        if (item.getAttribute('href') === `#${id}`) {
            item.classList.add('active-link');
        }
    });
}

if ('IntersectionObserver' in window && sections.length) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setActiveLinkById(entry.target.id);
            }
        });
    }, { root: null, rootMargin: '-50% 0px -50% 0px', threshold: 0 });

    sections.forEach(section => {
        if (section.id) observer.observe(section);
    });
} else {
    function updateActiveNavLinkFallback() {
        let currentSectionId = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 100) {
                currentSectionId = section.getAttribute('id');
            }
        });
        setActiveLinkById(currentSectionId);
    }
    window.addEventListener('scroll', updateActiveNavLinkFallback, { passive: true });
    updateActiveNavLinkFallback();
}

const year = new Date().getFullYear();
const footerTextElement = document.getElementById('footer-text');
if (footerTextElement) {
    footerTextElement.textContent = `© ${year} Cryptonite - MIT Manipal. All rights reserved.`;
}

document.addEventListener('DOMContentLoaded', function() {
    displayFallbackData();
    
    setTimeout(() => {
        fetchCTFtimeStats();
    }, 1000);
    
    initializeNavigation();
    initializeScrollEffects();
    initializeFooter();
    initializeLandingCTA();
});

function initializeNavigation() {
    if (window.__navInitialized) return;
    window.__navInitialized = true;
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const mobileNav = document.getElementById('mobile-nav');
    const mobileNavClose = document.getElementById('mobile-nav-close');

    if (hamburgerMenu && mobileNav) {
        const openMenu = () => {
            mobileNav.classList.add('active');
            document.documentElement.classList.add('menu-open');
        };
        const closeMenu = () => {
            mobileNav.classList.remove('active');
            document.documentElement.classList.remove('menu-open');
        };
        const toggleMenu = (event) => {
            if (event) {
                event.preventDefault();
                event.stopPropagation();
            }
            if (mobileNav.classList.contains('active')) {
                closeMenu();
            } else {
                openMenu();
            }
        };

        let lastTouchTime = 0;
        hamburgerMenu.addEventListener('touchend', function(e) {
            lastTouchTime = Date.now();
            toggleMenu(e);
        }, { passive: false });
        hamburgerMenu.addEventListener('click', function(e) {
            if (Date.now() - lastTouchTime < 700) return;
            toggleMenu(e);
        });

        const mobileNavItems = mobileNav.querySelectorAll('.mobile-nav-item');
        mobileNavItems.forEach(item => {
            item.addEventListener('click', function() {
                closeMenu();
            });
        });

        if (mobileNavClose) {
            mobileNavClose.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                closeMenu();
            });
            mobileNavClose.addEventListener('touchend', function(e) {
                e.preventDefault();
                e.stopPropagation();
                closeMenu();
            }, { passive: false });
        }

        document.addEventListener('click', function(event) {
            if (!hamburgerMenu.contains(event.target) && !mobileNav.contains(event.target)) {
                closeMenu();
            }
        });
        document.addEventListener('touchstart', function(event) {
            if (!hamburgerMenu.contains(event.target) && !mobileNav.contains(event.target)) {
                closeMenu();
            }
        }, { passive: true });
    }
}

// Initialize immediately in case DOMContentLoaded has already fired
initializeNavigation();

function initializeScrollEffects() {
    const scrollToTopBtn = document.getElementById('scroll-to-top');

    if (scrollToTopBtn) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                scrollToTopBtn.classList.add('visible');
            } else {
                scrollToTopBtn.classList.remove('visible');
            }
        }, { passive: true });

        scrollToTopBtn.addEventListener('click', function() {
            const prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            window.scrollTo({
                top: 0,
                behavior: prefersReducedMotion ? 'auto' : 'smooth'
            });
        });
    }
}

function initializeFooter() {
    const footerTextElement = document.getElementById('footer-text');
    if (footerTextElement) {
        footerTextElement.textContent = `© ${year} Cryptonite - MIT Manipal. All rights reserved.`;
    }
}

function initializeLandingCTA() {
    const btn = document.querySelector('.recruitment-btn');
    if (!btn) return;
    
    if (landingCtaMode === 'nitectf') {
        btn.setAttribute('href', niteCtfUrl);
        btn.setAttribute('target', '_blank');
        btn.innerHTML = '<i class="fas fa-bolt"></i> niteCTF IS LIVE!';
    } else if (landingCtaMode === 'recruitments') {
        btn.setAttribute('href', 'https://apply.cryptonitemit.in');
        btn.setAttribute('target', '_blank');
        btn.innerHTML = '<i class="fas fa-users"></i> We\'re Recruiting!';
    } else if (landingCtaMode === 'off') {
        btn.remove();
    }
}

async function fetchCTFtimeStats() {
    const yearlyChart = document.getElementById('yearly-chart');
    if (!yearlyChart) return;

    yearlyChart.innerHTML = '<div class="loading-spinner">Loading CTFtime data...</div>';

    const targetUrl = 'https://ctftime.org/api/v1/teams/62713/';
    
    const proxyStrategies = [
        {
            name: 'CORS Proxy 1',
            fetch: async (url) => {
                const response = await fetch(`https://corsproxy.io/?${encodeURIComponent(url)}`, {
                    headers: { 'Accept': 'application/json' },
                    signal: AbortSignal.timeout(8000)
                });
                if (!response.ok) throw new Error(`HTTP ${response.status}`);
                return response.json();
            }
        },
        {
            name: 'CORS Proxy 2',
            fetch: async (url) => {
                const response = await fetch(`https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`, {
                    headers: { 'Accept': 'application/json' },
                    signal: AbortSignal.timeout(8000)
                });
                if (!response.ok) throw new Error(`HTTP ${response.status}`);
                const data = await response.json();
                if (data.contents) {
                    try {
                        return JSON.parse(data.contents);
                    } catch (e) {
                        return data.contents;
                    }
                }
                return data;
            }
        },
        {
            name: 'Direct Fetch',
            fetch: async (url) => {
                const response = await fetch(url, {
                    headers: { 'Accept': 'application/json' },
                    signal: AbortSignal.timeout(8000),
                    credentials: 'omit',
                    mode: 'cors'
                });
                if (!response.ok) throw new Error(`HTTP ${response.status}`);
                return response.json();
            }
        }
    ];

    const controllers = [];
    const timeouts = [];
    let successFound = false;

    const requests = proxyStrategies.map((strategy, index) => {
        const controller = new AbortController();
        controllers.push(controller);
        const timeoutId = setTimeout(() => controller.abort(), 10000 + (index * 2000));
        timeouts.push(timeoutId);

        return strategy.fetch(targetUrl)
            .then(data => {
                if (successFound) {
                    throw new Error('Another proxy already succeeded');
                }
                if (!data || !data.rating) {
                    throw new Error(`Invalid data format from ${strategy.name}`);
                }
                successFound = true;
                controllers.forEach(c => { if (!c.signal.aborted) c.abort(); });
                timeouts.forEach(id => clearTimeout(id));
                return { data, source: strategy.name };
            })
            .catch(error => {
                if (successFound) return;
                console.warn(`${strategy.name} failed:`, error.message);
                throw error;
            });
    });

    const globalTimeout = setTimeout(() => {
        if (!successFound) {
            controllers.forEach(c => { if (!c.signal.aborted) c.abort(); });
        }
    }, 15000);

    try {
        const result = await Promise.any(requests);
        clearTimeout(globalTimeout);
        
        displayCTFtimeStats(result.data);
        

    } catch (error) {
        if (!successFound) {
            clearTimeout(globalTimeout);
            console.warn('All strategies failed:', error);
            
            handleFetchError(error);
        }
    } finally {
        if (!successFound) {
            timeouts.forEach(id => clearTimeout(id));
            controllers.forEach(c => { if (!c.signal.aborted) c.abort(); });
        }
    }
}







function handleFetchError(error) {
    console.error('All strategies failed:', error);

    let errorMessage = 'Failed to load CTFtime data from all sources.';
    if (error.name === 'AbortError') {
        errorMessage = 'All requests timed out. Please check your connection.';
    } else if (error.message.includes('CORS')) {
        errorMessage = 'CORS restrictions prevented data loading. This is a browser security feature.';
    }

    const yearlyChart = document.getElementById('yearly-chart');
    if (yearlyChart) {
        yearlyChart.innerHTML = `
            <div class="error-message">
                ${errorMessage}<br><br>
                <button onclick="fetchCTFtimeStats()" class="retry-btn">Retry</button>
            </div>
        `;
    }

    const statElements = [
        'country-rank', 'global-rank', 'total-points', 'country-rank-prev', 'global-rank-prev', 'total-points-prev'
    ];

    statElements.forEach(id => {
        const element = document.getElementById(id);
        if (element) element.textContent = 'N/A';
    });

    displayFallbackData();
}





function displayFallbackData() {
    const fallbackData = {
        rating: {
            "2025": {
                "rating_place": 28,
                "organizer_points": 79.74,
                "rating_points": 456.813339549,
                "country_place": 2
            },
            "2024": {
                "rating_place": 65,
                "organizer_points": 58.66,
                "rating_points": 395.063698537,
                "country_place": 3
            },
            "2023": {
                "rating_place": 217,
                "organizer_points": 48.0,
                "rating_points": 169.494950938,
                "country_place": 5
            },
            "2022": {
                "rating_place": 196,
                "organizer_points": 44.6,
                "rating_points": 148.387899537,
                "country_place": 9
            },
            "2021": {
                "rating_place": 152,
                "organizer_points": 44.6,
                "rating_points": 146.749375686,
                "country_place": 11
            },
            "2020": {
                "rating_place": 359,
                "organizer_points": 0,
                "rating_points": 84.8551139633,
                "country_place": 25
            },
            "2019": {
                "rating_place": 815,
                "organizer_points": 0,
                "rating_points": 30.7355743154,
                "country_place": 39
            },
            "2018": {
                "rating_place": null,
                "organizer_points": 0,
                "rating_points": 0,
                "country_place": null
            }
        }
    };

    displayCTFtimeStats(fallbackData);
}

function displayCTFtimeStats(data) {
    const currentYear = '2025';
    const rating = data.rating;



    if (rating && rating[currentYear]) {
        const currentYearData = rating[currentYear];

        document.getElementById('country-rank').textContent =
            currentYearData.country_place ? `#${currentYearData.country_place}` : '-';
        document.getElementById('global-rank').textContent =
            currentYearData.rating_place ? `#${currentYearData.rating_place}` : '-';
        document.getElementById('total-points').textContent =
            currentYearData.rating_points ? Math.round(currentYearData.rating_points) : '-';
    }

    const prevYear = (parseInt(currentYear) - 1).toString();

    document.getElementById('prev-year-label').textContent = prevYear;
    document.getElementById('prev-year-label-2').textContent = prevYear;
    document.getElementById('prev-year-label-3').textContent = prevYear;

    if (rating && rating[prevYear]) {
        const prevYearData = rating[prevYear];

        document.getElementById('country-rank-prev').textContent =
            prevYearData.country_place ? `#${prevYearData.country_place}` : '-';
        document.getElementById('global-rank-prev').textContent =
            prevYearData.rating_place ? `#${prevYearData.rating_place}` : '-';

        const prevYearTotalPoints = (prevYearData.rating_points || 0);
        document.getElementById('total-points-prev').textContent =
            prevYearTotalPoints > 0 ? Math.round(prevYearTotalPoints) : '-';
    }

    const yearlyChart = document.getElementById('yearly-chart');
    yearlyChart.innerHTML = createYearlyChart(rating);
}



function createYearlyChart(rating) {
    if (!rating) return '<div class="error-message">No rating data available</div>';

    const years = Object.keys(rating).filter(year =>
        year >= '2018' && rating[year] && (rating[year].rating_points !== undefined || rating[year].country_place)
    ).sort();

    if (years.length === 0) return '<div class="error-message">No yearly data available</div>';

    let chartHTML = '<div class="yearly-line-chart">';
    chartHTML += '<div class="chart-area">';

    const points = [];
    years.forEach(year => {
        const yearData = rating[year];
        if (yearData && (yearData.rating_points !== undefined || yearData.country_place)) {
            const ratingPoints = yearData.rating_points || 0; // Treat undefined as 0
            const maxRating = Math.max(...years.map(y => rating[y]?.rating_points || 0));
            const minRating = Math.min(...years.map(y => rating[y]?.rating_points || 0));
            const range = maxRating - minRating;
            const pointHeight = range > 0 ? ((ratingPoints - minRating) / range) * 100 : 0;
            const xPos = (years.indexOf(year) / (years.length - 1)) * 100;

            points.push({ x: xPos, y: pointHeight });

            chartHTML += `
                <div class="chart-point" style="left: ${xPos}%; bottom: ${pointHeight}%">
                    <div class="point"></div>
                </div>
            `;
        }
    });

    if (points.length > 1) {
        const pathData = points.map((point, index) => {
            if (index === 0) return `M ${point.x} ${100 - point.y}`;
            return `L ${point.x} ${100 - point.y}`;
        }).join(' ');

        const areaPath = `${pathData} L ${points[points.length - 1].x} 100 L ${points[0].x} 100 Z`;

        chartHTML += `
            <svg class="chart-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
                <defs>
                    <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" style="stop-color:#00ff88;stop-opacity:0.3" />
                        <stop offset="100%" style="stop-color:#00ff88;stop-opacity:0.1" />
                    </linearGradient>
                </defs>
                <path class="chart-area-fill" d="${areaPath}" />
                <path class="chart-line" d="${pathData}" stroke="#00ff88" stroke-width="2" fill="none" />
            </svg>
        `;
    }

    chartHTML += '</div>'; // Close chart-area

    // Add x-axis labels (exclude 2018)
    chartHTML += '<div class="x-axis">';
    years.forEach((year) => {
        if (year !== '2018') {
            const xPos = (years.indexOf(year) / (years.length - 1)) * 100;
            const xAlign = '-50%';
            chartHTML += `<div class="x-tick" style="left: ${xPos}%; --x-align: ${xAlign}"><span>${year}</span></div>`;
        }
    });
    chartHTML += '</div>';

    const maxRating = Math.max(...years.map(y => rating[y]?.rating_points || 0));
    const minRating = 0; // Always start from 0
    const range = maxRating - minRating;

    chartHTML += '<div class="y-axis">';
    chartHTML += '<div class="y-label">Rating Points</div>';
    chartHTML += `<div class="y-tick" style="bottom: 0%"><span>0</span></div>`;
    chartHTML += `<div class="y-tick" style="bottom: 20%"><span>100</span></div>`;
    chartHTML += `<div class="y-tick" style="bottom: 40%"><span>200</span></div>`;
    chartHTML += `<div class="y-tick" style="bottom: 60%"><span>300</span></div>`;
    chartHTML += `<div class="y-tick" style="bottom: 80%"><span>400</span></div>`;
    chartHTML += `<div class="y-tick" style="bottom: 100%"><span>500</span></div>`;
    chartHTML += '</div>';

    chartHTML += '</div>'; // Close yearly-line-chart
    return chartHTML;
}



