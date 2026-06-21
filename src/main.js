// Document Elements
const header = document.querySelector('.header');
const burgerBtn = document.querySelector('.burger-btn');
const mobileDrawer = document.querySelector('.mobile-drawer');
const drawerOverlay = document.querySelector('.drawer-overlay');
const drawerClose = document.querySelector('.drawer-close');
const drawerLinks = document.querySelectorAll('.drawer-link');
const scrollProgress = document.getElementById('scroll-progress');
const backToTopBtn = document.getElementById('back-to-top');

// Original Menu Images for Lightbox
const menuImages = ['./images/menu-1.png', './images/menu-2.png'];
let currentMenuImageIndex = 0;

// Lightbox Elements
const btnShowOriginalMenu = document.getElementById('btn-show-original-menu');
const menuLightbox = document.getElementById('menu-lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxCloseBtn = document.querySelector('.lightbox-close');
const lightboxPrevBtn = document.querySelector('.lightbox-prev');
const lightboxNextBtn = document.querySelector('.lightbox-next');
const lightboxCaption = document.querySelector('.lightbox-caption');
const zoomInBtn = document.getElementById('zoom-in');
const zoomOutBtn = document.getElementById('zoom-out');
const zoomResetBtn = document.getElementById('zoom-reset');

// Zoom and Pan State
let zoomScale = 1;
const ZOOM_SPEED = 0.15;
const MAX_ZOOM = 3;
const MIN_ZOOM = 0.5;
let isPanning = false;
let startX = 0, startY = 0;
let translateX = 0, translateY = 0;

// 1. Mobile Navigation Drawer
function openDrawer() {
  mobileDrawer.classList.add('open');
  drawerOverlay.classList.add('open');
  burgerBtn.classList.add('active');
  document.body.style.overflow = 'hidden'; // Disable background scroll
}

function closeDrawer() {
  mobileDrawer.classList.remove('open');
  drawerOverlay.classList.remove('open');
  burgerBtn.classList.remove('active');
  document.body.style.overflow = '';
}

burgerBtn.addEventListener('click', () => {
  if (mobileDrawer.classList.contains('open')) {
    closeDrawer();
  } else {
    openDrawer();
  }
});

drawerClose.addEventListener('click', closeDrawer);
drawerOverlay.addEventListener('click', closeDrawer);
drawerLinks.forEach(link => link.addEventListener('click', closeDrawer));

// 4. Smooth Anchor Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    
    const targetEl = document.querySelector(targetId);
    if (targetEl) {
      const headerOffset = 80;
      const elementPosition = targetEl.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// 5. Scroll Progress and Back-to-Top Button
window.addEventListener('scroll', () => {
  const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (winScroll / height) * 100;
  
  if (scrollProgress) {
    scrollProgress.style.width = scrolled + '%';
  }
  
  if (header) {
    if (winScroll > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }
  
  if (backToTopBtn) {
    if (winScroll > 600) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  }
});

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// 6. Reveal on Scroll (Intersection Observer)
const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
      revealObserver.unobserve(entry.target); // Trigger only once
    }
  });
}, {
  threshold: 0.08,
  rootMargin: '0px 0px -40px 0px'
});

revealElements.forEach(el => revealObserver.observe(el));

// 6b. Hero parallax on scroll
const heroBg = document.querySelector('.hero-bg');
if (heroBg) {
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    heroBg.style.setProperty('--parallax-y', `${scrollY * 0.3}px`);
  }, { passive: true });
}

// 7. Lightbox Modal logic (Original printed menu viewer)
function openLightbox(index = 0) {
  currentMenuImageIndex = index;
  updateLightboxImage();
  menuLightbox.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  menuLightbox.classList.remove('open');
  document.body.style.overflow = '';
  resetZoom();
}

function updateLightboxImage() {
  lightboxImg.src = menuImages[currentMenuImageIndex];
  lightboxCaption.textContent = `Страница ${currentMenuImageIndex + 1} из ${menuImages.length}. Используйте зум или жесты для приближения.`;
  resetZoom();
}

function nextLightboxImage() {
  currentMenuImageIndex = (currentMenuImageIndex + 1) % menuImages.length;
  updateLightboxImage();
}

function prevLightboxImage() {
  currentMenuImageIndex = (currentMenuImageIndex - 1 + menuImages.length) % menuImages.length;
  updateLightboxImage();
}

btnShowOriginalMenu.addEventListener('click', () => openLightbox(0));
lightboxCloseBtn.addEventListener('click', closeLightbox);
lightboxNextBtn.addEventListener('click', nextLightboxImage);
lightboxPrevBtn.addEventListener('click', prevLightboxImage);

// Close lightbox on click outside the image
document.querySelector('.lightbox-overlay').addEventListener('click', closeLightbox);

// Handle Esc key to close lightbox
document.addEventListener('keydown', (e) => {
  if (!menuLightbox.classList.contains('open')) return;
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowRight') nextLightboxImage();
  if (e.key === 'ArrowLeft') prevLightboxImage();
});

// Swipe logic for Lightbox on mobile
let lightboxTouchStartX = 0;
let lightboxTouchEndX = 0;

menuLightbox.addEventListener('touchstart', (e) => {
  lightboxTouchStartX = e.changedTouches[0].screenX;
}, { passive: true });

menuLightbox.addEventListener('touchend', (e) => {
  lightboxTouchEndX = e.changedTouches[0].screenX;
  handleLightboxSwipe();
}, { passive: true });

function handleLightboxSwipe() {
  if (zoomScale > 1) return; // Ignore swipe if zoomed in (user is panning)
  
  const swipeDistance = lightboxTouchEndX - lightboxTouchStartX;
  if (swipeDistance < -50) {
    nextLightboxImage();
  } else if (swipeDistance > 50) {
    prevLightboxImage();
  }
}

// 8. Zoom and Drag/Pan Controls for Lightbox Image
function updateImageTransform() {
  lightboxImg.style.transform = `translate(${translateX}px, ${translateY}px) scale(${zoomScale})`;
}

function resetZoom() {
  zoomScale = 1;
  translateX = 0;
  translateY = 0;
  updateImageTransform();
}

zoomInBtn.addEventListener('click', () => {
  zoomScale = Math.min(zoomScale + ZOOM_SPEED, MAX_ZOOM);
  updateImageTransform();
});

zoomOutBtn.addEventListener('click', () => {
  zoomScale = Math.max(zoomScale - ZOOM_SPEED, MIN_ZOOM);
  updateImageTransform();
});

zoomResetBtn.addEventListener('click', resetZoom);

// Lightbox Wheel zoom
lightboxImg.addEventListener('wheel', (e) => {
  e.preventDefault();
  const zoomFactor = e.deltaY < 0 ? 1 : -1;
  zoomScale = Math.min(Math.max(zoomScale + zoomFactor * ZOOM_SPEED, MIN_ZOOM), MAX_ZOOM);
  updateImageTransform();
}, { passive: false });

// Mouse Drag/Pan
lightboxImg.addEventListener('mousedown', (e) => {
  if (zoomScale <= 1) return; // Only drag when zoomed
  isPanning = true;
  lightboxImg.style.cursor = 'grabbing';
  startX = e.clientX - translateX;
  startY = e.clientY - translateY;
});

window.addEventListener('mousemove', (e) => {
  if (!isPanning) return;
  translateX = e.clientX - startX;
  translateY = e.clientY - startY;
  updateImageTransform();
});

window.addEventListener('mouseup', () => {
  isPanning = false;
  if (lightboxImg) lightboxImg.style.cursor = 'grab';
});

// 9. Reviews Slider / Carousel
let reviewSlides = [];
let reviewDots = [];
let currentReviewIndex = 0;
let reviewAutoplayTimer = null;

function initReviewsSlider() {
  reviewSlides = document.querySelectorAll('.review-slide');
  reviewDots = document.querySelectorAll('.carousel-dots .dot');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  const wrapper = document.querySelector('.reviews-carousel-wrapper');

  if (!reviewSlides.length) return;

  function showReview(index) {
    if (index >= reviewSlides.length) {
      currentReviewIndex = 0;
    } else if (index < 0) {
      currentReviewIndex = reviewSlides.length - 1;
    } else {
      currentReviewIndex = index;
    }

    reviewSlides.forEach((slide, idx) => {
      slide.classList.toggle('active', idx === currentReviewIndex);
    });

    reviewDots.forEach((dot, idx) => {
      dot.classList.toggle('active', idx === currentReviewIndex);
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      showReview(currentReviewIndex - 1);
      resetReviewAutoplay();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      showReview(currentReviewIndex + 1);
      resetReviewAutoplay();
    });
  }

  reviewDots.forEach((dot, idx) => {
    dot.addEventListener('click', () => {
      showReview(idx);
      resetReviewAutoplay();
    });
  });

  startReviewAutoplay();

  if (wrapper) {
    wrapper.addEventListener('mouseenter', stopReviewAutoplay);
    wrapper.addEventListener('mouseleave', startReviewAutoplay);

    let touchStartX = 0;
    let touchEndX = 0;

    wrapper.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    wrapper.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    }, { passive: true });

    function handleSwipe() {
      const swipeDistance = touchEndX - touchStartX;
      if (swipeDistance < -50) {
        showReview(currentReviewIndex + 1);
        resetReviewAutoplay();
      } else if (swipeDistance > 50) {
        showReview(currentReviewIndex - 1);
        resetReviewAutoplay();
      }
    }
  }
}

function startReviewAutoplay() {
  if (reviewAutoplayTimer) return;
  reviewAutoplayTimer = setInterval(() => {
    const slides = document.querySelectorAll('.review-slide');
    if (slides.length) {
      currentReviewIndex = (currentReviewIndex + 1) % slides.length;
      const dots = document.querySelectorAll('.carousel-dots .dot');
      slides.forEach((slide, idx) => {
        slide.classList.toggle('active', idx === currentReviewIndex);
      });
      dots.forEach((dot, idx) => {
        dot.classList.toggle('active', idx === currentReviewIndex);
      });
    }
  }, 6000);
}

function stopReviewAutoplay() {
  if (reviewAutoplayTimer) {
    clearInterval(reviewAutoplayTimer);
    reviewAutoplayTimer = null;
  }
}

function resetReviewAutoplay() {
  stopReviewAutoplay();
  startReviewAutoplay();
}

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
  initReviewsSlider();
  
  // Style tag for body initial styles
  document.body.classList.add('js-loaded');
});
