// Vitamin Diseases Detection Modal Image Slider and Modal Logic

// --- Skin Diseases Detection Modal Image Slider and Modal Logic ---
function updateSkinSlider() {
  const imgElem = document.getElementById('skinSliderImg');
  const summaryElem = document.getElementById('skinSliderSummary');
  const indicatorsElem = document.getElementById('skinSliderIndicators');
  imgElem.src = skinImages[currentSkinImg].src;
  summaryElem.textContent = skinImages[currentSkinImg].summary;

  // Update dots
  if (indicatorsElem) {
    indicatorsElem.innerHTML = '';
    for (let i = 0; i < skinImages.length; i++) {
      const dot = document.createElement('span');
      dot.style.width = '12px';
      dot.style.height = '12px';
      dot.style.display = 'inline-block';
      dot.style.borderRadius = '50%';
      dot.style.margin = '0 4px';
      dot.style.background = i === currentSkinImg ? '#31508a' : '#c3cfe2';
      dot.style.transition = 'background 0.2s';
      dot.style.cursor = 'pointer';
      dot.addEventListener('click', function() {
        currentSkinImg = i;
        updateSkinSlider();
      });
      indicatorsElem.appendChild(dot);
    }
  }
}

const vitaminImages = [
  {
    src: 'Image/vitaproject/ABOUTSS.jpeg',
    summary: 'About section of the Vitamin Diseases Detection project.'
  },
  {
    src: 'Image/vitaproject/CHECKSS.jpeg',
    summary: 'Check symptoms page for vitamin-related disease detection.'
  },
  {
    src: 'Image/vitaproject/HOMESS.jpeg',
    summary: 'Homepage with overview and navigation for the vitamin project.'
  },
  {
    src: 'Image/vitaproject/DISEASESSS.jpeg',
    summary: 'Disease details and information page.'
  },
  {
    src: 'Image/vitaproject/VITAMINSS.jpeg',
    summary: 'Vitamin information and analysis section.'
  },
  {
    src: 'Image/vitaproject/CONTECTSS.jpeg',
    summary: 'Contact and support page for the project.'
  }
];

let currentVitaminImg = 0;

const skinImages = [
  {
    src: 'Image/skinproject/ABOUTSS.png',
    summary: 'About section of the Skin Diseases Detection project.'
  },
  {
    src: 'Image/skinproject/CHECKSS.png',
    summary: 'Check symptoms page for skin disease detection.'
  },
  {
    src: 'Image/skinproject/HOMESS.png',
    summary: 'Homepage with overview and navigation for the skin project.'
  },
  {
    src: 'Image/skinproject/SKINSS.png',
    summary: 'Skin input and analysis interface.'
  },
  {
    src: 'Image/skinproject/TEAMSS.png',
    summary: 'Team section showing contributors.'
  },
  {
    src: 'Image/skinproject/image.png',
    summary: 'Sample result or prediction output.'
  }
];

let currentSkinImg = 0;

// Portfolio Project Images
const portfolioImages = [
  {
    src: 'Image/portfolio/img1.png',
    summary: 'Homepage of the Personal Portfolio website.'
  },
  {
    src: 'Image/portfolio/img2.png',
    summary: 'About section showcasing skills and experience.'
  },
  {
    src: 'Image/portfolio/img3.png',
    summary: 'Projects section with interactive project cards.'
  },
  {
    src: 'Image/portfolio/img4.png',
    summary: 'Contact section with a clean and modern form.'
  },
  {
    src: 'Image/portfolio/img5.png',
    summary: 'Responsive design for mobile devices.'
  }
];

let currentPortfolioImg = 0;

function updateVitaminSlider() {
  const imgElem = document.getElementById('vitaminSliderImg');
  const summaryElem = document.getElementById('vitaminSliderSummary');
  const indicatorsElem = document.getElementById('vitaminSliderIndicators');
  imgElem.src = vitaminImages[currentVitaminImg].src;
  summaryElem.textContent = vitaminImages[currentVitaminImg].summary;

  // Update dots
  if (indicatorsElem) {
    indicatorsElem.innerHTML = '';
    for (let i = 0; i < vitaminImages.length; i++) {
      const dot = document.createElement('span');
      dot.style.width = '12px';
      dot.style.height = '12px';
      dot.style.display = 'inline-block';
      dot.style.borderRadius = '50%';
      dot.style.margin = '0 4px';
      dot.style.background = i === currentVitaminImg ? '#31508a' : '#c3cfe2';
      dot.style.transition = 'background 0.2s';
      dot.style.cursor = 'pointer';
      dot.addEventListener('click', function() {
        currentVitaminImg = i;
        updateVitaminSlider();
      });
      indicatorsElem.appendChild(dot);
    }
  }
}

document.addEventListener('DOMContentLoaded', function() {
  // Vitamin Modal open/close logic
  const openVitaminBtn = document.getElementById('openVitaminProjectModal');
  const closeVitaminBtn = document.getElementById('closeVitaminProjectModal');
  const vitaminModal = document.getElementById('vitaminProjectModal');

  openVitaminBtn.addEventListener('click', function() {
    vitaminModal.classList.add('show');
    document.body.style.overflow = 'hidden';
    updateVitaminSlider();
  });
  closeVitaminBtn.addEventListener('click', function() {
    vitaminModal.classList.remove('show');
    document.body.style.overflow = '';
  });

  document.getElementById('vitaminSliderPrev').addEventListener('click', function() {
    currentVitaminImg = (currentVitaminImg - 1 + vitaminImages.length) % vitaminImages.length;
    updateVitaminSlider();
  });
  document.getElementById('vitaminSliderNext').addEventListener('click', function() {
    currentVitaminImg = (currentVitaminImg + 1) % vitaminImages.length;
    updateVitaminSlider();
  });

  // Skin Modal open/close logic
  const openSkinBtn = document.getElementById('openSkinProjectModal');
  const closeSkinBtn = document.getElementById('closeSkinProjectModal');
  const skinModal = document.getElementById('skinProjectModal');

  openSkinBtn.addEventListener('click', function() {
    skinModal.classList.add('show');
    document.body.style.overflow = 'hidden';
    updateSkinSlider();
  });
  closeSkinBtn.addEventListener('click', function() {
    skinModal.classList.remove('show');
    document.body.style.overflow = '';
  });

  document.getElementById('skinSliderPrev').addEventListener('click', function() {
    currentSkinImg = (currentSkinImg - 1 + skinImages.length) % skinImages.length;
    updateSkinSlider();
  });
  document.getElementById('skinSliderNext').addEventListener('click', function() {
    currentSkinImg = (currentSkinImg + 1) % skinImages.length;
    updateSkinSlider();
  });

  // Portfolio Modal open/close logic
  const openPortfolioBtn = document.getElementById('openPortfolioProjectModal');
  const closePortfolioBtn = document.getElementById('closePortfolioProjectModal');
  const portfolioModal = document.getElementById('portfolioProjectModal');

  openPortfolioBtn.addEventListener('click', function() {
    portfolioModal.classList.add('show');
    document.body.style.overflow = 'hidden';
    updatePortfolioSlider();
  });
  
  closePortfolioBtn.addEventListener('click', function() {
    portfolioModal.classList.remove('show');
    document.body.style.overflow = '';
  });

  // Portfolio Slider Navigation
  const portfolioPrevBtn = document.getElementById('portfolioSliderPrev');
  const portfolioNextBtn = document.getElementById('portfolioSliderNext');
  
  if (portfolioPrevBtn && portfolioNextBtn) {
    portfolioPrevBtn.addEventListener('click', function() {
      currentPortfolioImg = (currentPortfolioImg - 1 + portfolioImages.length) % portfolioImages.length;
      updatePortfolioSlider();
    });
    
    portfolioNextBtn.addEventListener('click', function() {
      currentPortfolioImg = (currentPortfolioImg + 1) % portfolioImages.length;
      updatePortfolioSlider();
    });
  }
});

// Function to update the portfolio slider
function updatePortfolioSlider() {
  const imgElem = document.getElementById('portfolioSliderImg');
  const summaryElem = document.getElementById('portfolioSliderSummary');
  const indicatorsElem = document.getElementById('portfolioSliderIndicators');
  
  if (imgElem && summaryElem) {
    imgElem.src = portfolioImages[currentPortfolioImg].src;
    summaryElem.textContent = portfolioImages[currentPortfolioImg].summary;
  }

  // Update dots/indicators if they exist
  if (indicatorsElem) {
    indicatorsElem.innerHTML = '';
    for (let i = 0; i < portfolioImages.length; i++) {
      const dot = document.createElement('span');
      dot.style.width = '12px';
      dot.style.height = '12px';
      dot.style.display = 'inline-block';
      dot.style.borderRadius = '50%';
      dot.style.margin = '0 4px';
      dot.style.background = i === currentPortfolioImg ? '#31508a' : '#c3cfe2';
      dot.style.transition = 'background 0.2s';
      dot.style.cursor = 'pointer';
      dot.addEventListener('click', function() {
        currentPortfolioImg = i;
        updatePortfolioSlider();
      });
      indicatorsElem.appendChild(dot);
    }
  }
}
