// Menu Dataset - Exact items, weights and prices from images
const menuData = [
  // ЧЁРНЫЙ КОФЕ
  { name: 'Эспрессо', price: '200 ₽', weight: '34-46 г', desc: 'Классический насыщенный черный кофе.', category: 'black-coffee' },
  { name: 'Фильтр кофе', price: '230 / 290 ₽', weight: '200 / 300 мл', desc: 'Кофе, заваренный капельным методом на зернах свежей обжарки.', category: 'black-coffee' },
  { name: 'Американо', price: '200 ₽', weight: '160 мл', desc: 'Эспрессо с добавлением горячей воды.', category: 'black-coffee' },
  { name: 'Лунго', price: '350 ₽', weight: '80 г', desc: 'Кофейный напиток с увеличенным временем экстракции.', category: 'black-coffee' },
  { name: 'Hario V60', price: '350 ₽', weight: '250 мл', desc: 'Альтернативный метод заваривания, раскрывающий тонкие цветочные и ягодные ноты зерна.', category: 'black-coffee' },

  // КОФЕ С МОЛОКОМ
  { name: 'Капучино', price: '260 / 290 ₽', weight: '160 / 260 мл', desc: 'Классический кофейно-молочный напиток с шелковистой пенкой.', category: 'milk-coffee' },
  { name: 'Флэт вайт', price: '260 ₽', weight: '200 мл', desc: 'Двойной эспрессо с добавлением горячего молока с тонким слоем пены.', category: 'milk-coffee' },
  { name: 'Латте', price: '320 ₽', weight: '260 мл', desc: 'Мягкий кофейно-молочный напиток с нежной молочной пенкой.', category: 'milk-coffee' },

  // РАФ КОФЕ (в категории кофе с молоком)
  { name: 'Ванильный раф', price: '390 ₽', weight: '330 мл', desc: 'Нежный десертный кофе на сливках с натуральной ванилью.', category: 'milk-coffee' },
  { name: 'Арахисовый раф', price: '390 ₽', weight: '330 мл', desc: 'Фирменный раф со вкусом ароматного арахиса.', category: 'milk-coffee' },
  { name: 'Раф соленая карамель', price: '390 ₽', weight: '330 мл', desc: 'Сливочный раф с добавлением домашней соленой карамели.', category: 'milk-coffee' },
  { name: 'Апельсиновый раф', price: '390 ₽', weight: '330 мл', desc: 'Освежающий сливочный раф с цитрусовыми нотами.', category: 'milk-coffee' },

  // ЧАЙ
  { name: 'Specialty чай на выбор', price: '390 / 550 ₽', weight: '0.3 / 0.5 л', desc: 'Specialty чай высшего качества от наших чайных партнеров.', category: 'tea-matcha' },
  { name: 'Черный байховый чай', price: '200 / 350 ₽', weight: '0.3 / 0.5 л', desc: 'Классический черный чай с глубоким вкусом.', category: 'tea-matcha' },
  { name: 'Зеленый китайский чай', price: '200 / 350 ₽', weight: '0.3 / 0.5 л', desc: 'Нежный зеленый чай с цветочными нотами.', category: 'tea-matcha' },
  { name: 'Чай с марокканской мятой', price: '200 / 350 ₽', weight: '0.3 / 0.5 л', desc: 'Ароматный и успокаивающий мятный чай.', category: 'tea-matcha' },
  { name: 'Иван-чай', price: '200 / 350 ₽', weight: '0.3 / 0.5 л', desc: 'Традиционный русский травяной напиток.', category: 'tea-matcha' },
  { name: 'Гречишный чай', price: '200 / 350 ₽', weight: '0.3 / 0.5 л', desc: 'Популярный чай из татарской гречихи с печеньковым вкусом.', category: 'tea-matcha' },
  { name: 'Мандариновый чай', price: '250 / 390 ₽', weight: '0.3 / 0.5 л', desc: 'Согревающий фруктовый чай с цитрусовой свежестью.', category: 'tea-matcha' },
  { name: 'Облепиховый чай', price: '250 / 390 ₽', weight: '0.3 / 0.5 л', desc: 'Полезный согревающий чай со свежей облепихой.', category: 'tea-matcha' },

  // МАТЧА
  { name: 'Матча капучино', price: '290 ₽', weight: '260 мл', desc: 'Японский чай матча со взбитым молоком.', category: 'tea-matcha' },
  { name: 'Матча латте', price: '320 ₽', weight: '260 мл', desc: 'Насыщенный напиток на основе пудры зеленого чая матча и молока.', category: 'tea-matcha' },
  { name: 'Ice матча латте', price: '340 ₽', weight: '380 мл', desc: 'Освежающий матча латте со льдом.', category: 'tea-matcha' },

  // ЗАВТРАКИ НЕСЛАДКИЕ
  { name: 'Английский завтрак', price: '690 ₽', weight: 'весь день', desc: 'Глазунья с беконом, печеным картофелем бейби, томатами, фасолью, колбасками и ремесленным хлебом.', category: 'breakfasts' },
  { name: 'Яйца бенедикт с лососем', price: '840 ₽', weight: 'весь день', desc: 'Яйца пашот с лососем слабой соли, авокадо и голландским соусом на нежной булочке бриошь.', category: 'breakfasts' },
  { name: 'Драники с лососем', price: '520 ₽', weight: 'весь день', desc: 'Хрустящие картофельные драники с лососем слабой соли и сметанным соусом.', category: 'breakfasts' },
  { name: 'Омлет с грибами', price: '520 ₽', weight: 'весь день', desc: 'Пышный омлет с грибами, сыром пармезан и домашним хлебом.', category: 'breakfasts' },
  { name: 'Гречневые блинчики с лососем', price: '520 ₽', weight: 'весь день', desc: 'Гречневые блины со слабосоленым лососем и нежным творожным сыром.', category: 'breakfasts' },

  // ЗАВТРАКИ СЛАДКИЕ
  { name: 'Овсяная каша с мёдом и орехами', price: '280 ₽', weight: 'весь день', desc: 'Теплая овсяная каша с добавлением меда и смеси орехов.', category: 'breakfasts' },
  { name: 'Овсяная каша на кокосовом молоке', price: '320 ₽', weight: 'весь день', desc: 'Полезная каша с добавлением свежего банана и лепестков миндаля.', category: 'breakfasts' },
  { name: 'Творожная запеканка', price: '520 ₽', weight: 'весь день', desc: 'Нежная запеканка на кокосовых сливках.', category: 'breakfasts' },
  { name: 'Сырники из фермерского творога', price: '520 ₽', weight: 'весь день', desc: 'Сырники из натурального творога со сметаной и сезонными фруктами.', category: 'breakfasts' },
  { name: 'Панкейки с бананом', price: '520 ₽', weight: 'весь день', desc: 'Пышные панкейки с бананом и соленой карамелью.', category: 'breakfasts' },

  // САЛАТЫ
  { name: 'Тёплый салат с индейкой', price: '540 ₽', weight: 'порция', desc: 'Индейка, обжаренные цукини, болгарский перец и томаты.', category: 'mains-salads' },
  { name: 'Салат с хрустящими баклажанами', price: '540 ₽', weight: 'порция', desc: 'Баклажаны, адыгейский сыр, соус сладкий чили.', category: 'mains-salads' },

  // СУП
  { name: 'Суп дня', price: '320 ₽', weight: 'порция', desc: 'Сытный и свежий суп от нашего шеф-повара. Уточняйте у бариста.', category: 'mains-salads' },

  // ГОРЯЧЕЕ
  { name: 'Пюре с фрикадельками', price: '590 ₽', weight: 'порция', desc: 'Нежное пюре с фрикадельками, брусничным и белым соусом.', category: 'mains-salads' },
  { name: 'Паста с индейкой и грибами', price: '590 ₽', weight: 'порция', desc: 'Сытная паста в сливочном соусе с филе индейки и шампиньонами.', category: 'mains-salads' },
  { name: 'Паста с соусом Альфредо и креветками', price: '740 ₽', weight: 'порция', desc: 'Паста с креветками и классическим соусом Альфредо.', category: 'mains-salads' },
  { name: 'Паста Карбонара', price: '590 ₽', weight: 'порция', desc: 'Паста на белом вине со сливками, беконом и пармезаном.', category: 'mains-salads' },
  { name: 'Овощная паста на растительных сливках', price: '520 ₽', weight: 'порция', desc: 'Паста с цукини, перцем, баклажанами на легких растительных сливках.', category: 'mains-salads' },

  // СЭНДВИЧ-РОЛЛЫ
  { name: 'Ролл с индейкой и шампиньонами', price: '450 ₽', weight: 'порция', desc: 'Ролл с индейкой, шампиньонами и сливочным творожным сыром.', category: 'sandwich-rolls' },
  { name: 'Ролл с лососем', price: '650 ₽', weight: 'порция', desc: 'Пшеничный ролл со слабосоленым лососем и творожным сыром.', category: 'sandwich-rolls' },
  { name: 'Буррито с говядиной', price: '450 ₽', weight: 'порция', desc: 'Сытный ролл в мексиканском стиле с говяжьим фаршем и фасолью.', category: 'sandwich-rolls' },
  { name: 'Ролл с нутом и овощами карри', price: '420 ₽', weight: 'порция', desc: 'Нут, перец, цукини, вяленые томаты в пикантном соусе карри.', category: 'sandwich-rolls' },

  // СМУЗИ И ДРУГОЕ
  { name: 'Айс латте', price: '340 ₽', weight: '380 мл', desc: 'Классический кофейный напиток с молоком и льдом.', category: 'other-drinks' },
  { name: 'Бамбл кофе', price: '390 ₽', weight: '380 мл', desc: 'Эспрессо с апельсиновым соком и карамельным сиропом.', category: 'other-drinks' },
  { name: 'Эспрессо тоник', price: '360 ₽', weight: '380 мл', desc: 'Тонизирующее сочетание эспрессо, тоника и льда.', category: 'other-drinks' },
  { name: 'Смузи манго-маракуйя', price: '440 ₽', weight: '380 мл', desc: 'Освежающий смузи из тропических фруктов.', category: 'other-drinks' },
  { name: 'Манго шейк с чиа', price: '440 ₽', weight: '380 мл', desc: 'Кокосовый шейк с манго и суперфудом чиа.', category: 'other-drinks' },
  { name: 'Смузи малина-банан', price: '440 ₽', weight: '380 мл', desc: 'Ягодный банановый смузи.', category: 'other-drinks' },
  { name: 'Какао с зефирками', price: '390 ₽', weight: '260 мл', desc: 'Сладкое теплое какао с маршмеллоу.', category: 'other-drinks' },
  { name: 'Молочный коктейль', price: '350 ₽', weight: '380 мл', desc: 'Прохладный классический коктейль с пломбиром.', category: 'other-drinks' },
  { name: 'Апельсиновый фреш', price: '390 ₽', weight: '330 мл', desc: 'Свежевыжатый сок из сладких апельсинов.', category: 'other-drinks' },
  { name: 'Стакан молока', price: '60 ₽', weight: '200 мл', desc: 'Свежее цельное молоко.', category: 'other-drinks' }
];

// Document Elements
const menuGrid = document.getElementById('menu-grid');
const tabButtons = document.querySelectorAll('.tab-btn');
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

// 1. Render Menu Items
function renderMenu(category = 'all') {
  if (!menuGrid) return;
  
  menuGrid.innerHTML = '';
  
  const filteredItems = category === 'all' 
    ? menuData 
    : menuData.filter(item => item.category === category);
    
  if (filteredItems.length === 0) {
    menuGrid.innerHTML = '<div class="no-items">Позиции не найдены</div>';
    return;
  }
  
  filteredItems.forEach((item, index) => {
    const itemCard = document.createElement('div');
    itemCard.className = 'menu-item-card';
    itemCard.style.animationDelay = `${index * 0.03}s`;
    
    itemCard.innerHTML = `
      <div class="menu-item-header">
        <h3 class="menu-item-title">${item.name}</h3>
        <span class="menu-item-price">${item.price}</span>
      </div>
      <div class="menu-item-meta">
        <span class="menu-item-weight">${item.weight}</span>
      </div>
      <p class="menu-item-desc">${item.desc}</p>
    `;
    
    menuGrid.appendChild(itemCard);
  });
}

// 2. Setup Category Tabs
tabButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    tabButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    
    // Add subtle click scale animation
    btn.style.transform = 'scale(0.95)';
    setTimeout(() => {
      btn.style.transform = 'none';
    }, 100);
    
    const category = btn.getAttribute('data-category');
    renderMenu(category);
  });
});

// 3. Mobile Navigation Drawer
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
const revealElements = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
      revealObserver.unobserve(entry.target); // Trigger only once
    }
  });
}, {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
});

revealElements.forEach(el => revealObserver.observe(el));

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
  renderMenu('all');
  initReviewsSlider();
  
  // Style tag for body initial styles
  document.body.classList.add('js-loaded');
});
