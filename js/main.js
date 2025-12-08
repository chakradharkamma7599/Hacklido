// ====================================
// HACKLIDO - Cyberpunk JavaScript Functions
// ====================================

document.addEventListener('DOMContentLoaded', function() {
    // Initialize cyberpunk effects
    initCyberEffects();
    
    // Simplified scroll handling for better performance
    $(window).on('scroll', function() {
        // Throttled scroll handling removed for better performance
        handleScrollEvents();
    });
    
    // Handle navigation toggle
    const navbarToggler = document.querySelector('.navbar-toggler');
    if (navbarToggler) {
        $(navbarToggler).on('click', function() {
            $('.cyber-navbar').toggleClass('expanded');
        });
    }
    
    // Initialize editor toolbar
    initEditorToolbar();
    
    // Initialize search functionality
    initSearch();
});

// Initialize cyberpunk effects
function initCyberEffects() {
    // Add cyber hover effect to essential interactive elements only
    const interactiveElements = document.querySelectorAll(
        '.btn, .nav-link'
    );
    
    interactiveElements.forEach(element => {
        element.classList.add('cyber-hover');
        
        // Simplified hover effect to reduce performance impact
        $(element).hover(
            function() {
                $(this).addClass('hover-active');
            },
            function() {
                $(this).removeClass('hover-active');
            }
        );
    });
    
    // Initialize scroll to top button
    const scrollTopBtn = document.getElementById('scrollTop');
    if (scrollTopBtn) {
        $(scrollTopBtn).on('click', function() {
            $('html, body').animate({ scrollTop: 0 }, 'smooth');
        });
    }
}

// Handle scroll events
function handleScrollEvents() {
    // Show/hide scroll to top button
    const scrollTopBtn = document.getElementById('scrollTop');
    if (scrollTopBtn) {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            scrollTopBtn.classList.add('active');
        } else {
            scrollTopBtn.classList.remove('active');
        }
    }
}

// Simplified typing effect for hero title (removed for performance)
function initTypingEffect() {
    // Removed typing effect for better performance
}

// Cyberpunk progress bar simulation
function simulateCyberProgress() {
    const progressBar = document.querySelector('.cyber-progress-bar');
    if (!progressBar) return;
    
    let width = 0;
    const interval = setInterval(() => {
        if (width >= 100) {
            clearInterval(interval);
        } else {
            width++;
            progressBar.style.width = width + '%';
        }
    }, 50);
}

// Removed glitch effect for performance
function addGlitchEffect(selector) {
    // Removed glitch effect for better performance
}

// Simplified editor toolbar functionality for performance
function initEditorToolbar() {
    // Simplified for better performance
    // Initialize tag preview
    initTagPreview();
    
    // Initialize slug generation
    initSlugGeneration();
}

// Simplified search functionality for performance
function initSearch() {
    const searchInputs = document.querySelectorAll('.search-input');
    searchInputs.forEach(input => {
        // Simplified focus effect
        $(input).on('focus', function() {
            // Removed scaling effect for performance
        });
        
        $(input).on('blur', function() {
            // Removed scaling effect for performance
        });
        
        // Add search functionality
        $(input).on('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch($(this).val());
            }
        });
    });
}

// Simplified tag preview functionality for performance
function initTagPreview() {
    // Simplified for better performance
}

// Simplified slug generation for performance
function initSlugGeneration() {
    // Simplified for better performance
}

// Simplified search functionality for performance
function performSearch(query) {
    if (query.trim() !== '') {
        // In a real application, this would redirect to search results page
        // For demo purposes, we'll just show an alert
        alert(`Searching for: ${query}`);
        
        // Removed cyberpunk effect for performance
    }
}

// Simplified monetization features for performance
function initMonetization() {
    // Simplified for better performance
}

// Simplified notification features for performance
function initNotifications() {
    // Simplified for better performance
}

// Simplified advertising features for performance
function initAdvertising() {
    // Simplified for better performance
}

// Initialize simplified cyberpunk effects when page loads
window.addEventListener('load', function() {
    // Simplified initialization for better performance
    initTypingEffect();
    // Other initialization functions simplified for performance
});