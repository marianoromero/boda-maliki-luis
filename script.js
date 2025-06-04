document.addEventListener('DOMContentLoaded', function () {
  // Speckles for Hero Section
  const heroSectionForSpeckles = document.getElementById('hero-section-speckles-container');
  if (heroSectionForSpeckles) {
    for (let i = 0; i < 15; i++) {
      const speckle = document.createElement('div');
      speckle.className = 'absolute bg-wedding-gold rounded-full z-1'; // These classes are defined in Tailwind config
      speckle.style.width = `${Math.random() * 3 + 1}px`;
      speckle.style.height = `${Math.random() * 3 + 1}px`;
      speckle.style.top = `${Math.random() * 100}%`;
      speckle.style.left = `${Math.random() * 100}%`;
      speckle.style.opacity = (Math.random() * 0.5 + 0.3).toString();
      heroSectionForSpeckles.appendChild(speckle);
    }
  }

  // Fade In Section Logic
  const fadeInSections = document.querySelectorAll('.fade-in-section');
  const observerOptions = {
    root: null, 
    rootMargin: '0px',
    threshold: 0.1 
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target); 
      }
    });
  }, observerOptions);

  fadeInSections.forEach(section => {
    observer.observe(section);
  });

  // Scroll Down Indicator Logic
  const scrollIndicator = document.getElementById('scroll-down-indicator');
  if (scrollIndicator) {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        scrollIndicator.style.display = 'none';
      } else {
        scrollIndicator.style.display = 'flex';
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
  }

  // Accordion Logic
  const accordionItems = document.querySelectorAll('.accordion-item');
  let openAccordion = null;

  accordionItems.forEach(item => {
    const button = item.querySelector('.accordion-button');
    const content = item.querySelector('.accordion-content');
    const contentId = content.id;

    button.setAttribute('aria-controls', contentId);

    button.addEventListener('click', () => {
      const isCurrentlyOpen = button.classList.contains('open');

      // Close previously open accordion if different
      if (openAccordion && openAccordion !== item) {
        const prevButton = openAccordion.querySelector('.accordion-button');
        const prevContent = openAccordion.querySelector('.accordion-content');
        prevButton.classList.remove('open');
        prevButton.setAttribute('aria-expanded', 'false');
        prevContent.classList.remove('open');
      }
      
      // Toggle current accordion
      if (isCurrentlyOpen) {
        button.classList.remove('open');
        button.setAttribute('aria-expanded', 'false');
        content.classList.remove('open');
        openAccordion = null;
      } else {
        button.classList.add('open');
        button.setAttribute('aria-expanded', 'true');
        content.classList.add('open');
        openAccordion = item;
      }
    });
  });

  // Gallery Modal Logic
  const galleryModal = document.getElementById('gallery-modal');
  const modalImage = document.getElementById('modal-image');
  const modalImageAlt = document.getElementById('modal-image-alt'); // For aria-labelledby
  const closeModalBtn = document.getElementById('modal-close-btn');
  const prevBtn = document.getElementById('modal-prev-btn');
  const nextBtn = document.getElementById('modal-next-btn');
  const galleryItems = document.querySelectorAll('.gallery-item-clickable');
  
  let currentImageIndex = 0;
  let allImagesData = [];

  galleryItems.forEach((item, index) => {
    const imgElement = item.querySelector('img');
    if (imgElement) {
      allImagesData.push({
        src: imgElement.src,
        alt: imgElement.alt
      });
    }
    // Ensure data-index is correctly set or use the loop index
    item.setAttribute('data-index', index); 

    item.addEventListener('click', (e) => {
      e.preventDefault(); // Important if item were an anchor, good practice for clickable divs
      const itemIndex = parseInt(item.dataset.index, 10);
      openModal(itemIndex);
    });

    // Add keydown for Enter/Space to trigger click for accessibility on focusable divs
    item.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            const itemIndex = parseInt(item.dataset.index, 10);
            openModal(itemIndex);
        }
    });
  });

  function updateModalImage() {
    if (allImagesData.length > 0 && modalImage && modalImageAlt) {
      const imageData = allImagesData[currentImageIndex];
      modalImage.src = imageData.src;
      modalImage.alt = imageData.alt;
      modalImageAlt.textContent = imageData.alt; // Update sr-only span for better ARIA support
    }
    // Show/hide nav buttons based on whether there are multiple images
    if (prevBtn && nextBtn) {
        prevBtn.style.display = allImagesData.length > 1 ? 'flex' : 'none';
        nextBtn.style.display = allImagesData.length > 1 ? 'flex' : 'none';
    }
  }

  function openModal(index) {
    if (!galleryModal) return;
    currentImageIndex = index;
    updateModalImage();
    galleryModal.classList.add('open');
    document.body.classList.add('body-no-scroll');
    // Focus management for accessibility: focus the close button when modal opens
    if (closeModalBtn) {
        closeModalBtn.focus(); 
    }
  }

  function closeModal() {
    if (!galleryModal) return;
    galleryModal.classList.remove('open');
    document.body.classList.remove('body-no-scroll');
    // Return focus to the gallery item that opened the modal for better UX
    if (galleryItems[currentImageIndex]) {
        galleryItems[currentImageIndex].focus();
    }
  }

  function showPrevImage() {
    currentImageIndex = (currentImageIndex - 1 + allImagesData.length) % allImagesData.length;
    updateModalImage();
  }

  function showNextImage() {
    currentImageIndex = (currentImageIndex + 1) % allImagesData.length;
    updateModalImage();
  }

  if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);
  if (prevBtn) prevBtn.addEventListener('click', showPrevImage);
  if (nextBtn) nextBtn.addEventListener('click', showNextImage);

  // Keyboard navigation for modal
  document.addEventListener('keydown', (e) => {
    if (galleryModal && galleryModal.classList.contains('open')) {
      if (e.key === 'Escape') {
        closeModal();
      } else if (e.key === 'ArrowLeft' && allImagesData.length > 1) {
        showPrevImage();
      } else if (e.key === 'ArrowRight' && allImagesData.length > 1) {
        showNextImage();
      }
    }
  });
  
  // Close modal if clicked outside the image content (on the overlay itself)
  if (galleryModal) {
    galleryModal.addEventListener('click', (e) => {
      // Check if the click is on the overlay itself, not its children
      if (e.target === galleryModal) { 
        closeModal();
      }
    });
  }

});