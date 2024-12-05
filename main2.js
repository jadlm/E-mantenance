// Data
const brands = [
    { id: 'apple', name: 'Apple', logo: 'https://i.postimg.cc/C5QcLwsC/Apple-logo-1998.webp' },
    { id: 'samsung', name: 'Samsung', logo: 'https://i.postimg.cc/d1Q62hWm/samsung-logo-1993-jpg.webp' },
    { id: 'huawei', name: 'Huawei', logo: 'https://i.postimg.cc/8z3zHGBH/huawei-logo-0.png' },
    { id: 'oppo', name: 'Oppo', logo: 'https://i.postimg.cc/q7Vdqvx9/oppo-logo-png-seeklogo-253623.png' },
    { id: 'google', name: 'Google', logo: 'https://i.postimg.cc/fbh6Zgws/image-2024-11-21-163133412.png' }
];

const phones = {
    apple: [
        { id: 'iphone-15-pro', name: 'iPhone 15 Pro max', image: 'https://i.postimg.cc/jStNdMPT/14613-HJFs-I23i.webp' },
        { id: 'iphone-14', name: 'iPhone 15 pro', image: 'https://i.postimg.cc/MHy9szQj/15-pro.jpg' },
        { id: 'iphone-15-pro', name: 'iPhone 11 Pro', image: 'https://i.postimg.cc/yNvn5fxv/iphone-11-pro-max-390759.webp' },
        { id: 'iphone-14', name: 'iPhone 14', image: 'https://i.postimg.cc/jStNdMPT/14613-HJFs-I23i.webp' }
    ],

    samsung: [
        { id: 'galaxy-s24', name: 'Galaxy S24', image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&q=80&w=200' },
        { id: 'galaxy-s23', name: 'Galaxy S23', image: 'https://images.unsplash.com/photo-1610945264803-c22b62d2a7b3?auto=format&fit=crop&q=80&w=200' }
    ],
    huawei : [
        { id: 'iphone-1', name: 'iPhone 5 Pro', image: 'https://i.postimg.cc/zffgT3xP/ip-15-plus-b-1-1-3.jpg' },
        { id: 'iphone-4', name: 'iPhone 4', image: 'https://i.postimg.cc/jStNdMPT/14613-HJFs-I23i.webp' }
    ],
    samsung : [
        { id: 'samsung S23', name: 'samsung S23', image: 'https://i.postimg.cc/66G4wk7g/1.jpg' },
        { id: 'samsung S23+', name: 'samsung S23+', image: 'https://i.postimg.cc/L6tqgj3V/smartphone-galaxy-s23-cream-8-256-gb-samsung.png' }
    ],
    huawei : [
        { id: 'huawei ', name: 'huawei ', image: 'https://i.postimg.cc/br1NTwVL/nova-1.jpg' },
        { id: 'huawei pro', name: 'huawei pro', image: 'https://i.postimg.cc/5y5bzkjR/nova.jpg' }
    ]
};

const repairs = [
    { id: 'screen', name: 'Réparation Écran', description: 'Remplacement écran cassé ou défectueux', price: 89 },
    { id: 'battery', name: 'Remplacement Batterie', description: 'Installation nouvelle batterie', price: 49 },
    { id: 'charging', name: 'Port de Charge', description: 'Réparation connecteur de charge', price: 59 },
    { id: 'camera', name: 'Caméra', description: 'Remplacement caméra avant ou arrière', price: 69 },
    { id: 'water', name: 'Dégât des Eaux', description: 'Traitement oxydation et nettoyage', price: 79 }
];

document.addEventListener('DOMContentLoaded', () => {
    displayBrands();
});


function displayBrands() {
    const brandsContainer = document.getElementById('brands');
    brandsContainer.innerHTML = brands.map(brand => `
        <div class="brand-card" data-brand-id="${brand.id}">
            <img src="${brand.logo}" alt="${brand.name}">
            <h3>${brand.name}</h3>
        </div>
    `).join('');

    // Add click listeners
    brandsContainer.querySelectorAll('.brand-card').forEach(card => {
        card.addEventListener('click', () => selectBrand(card.dataset.brandId));
    });
}

function selectBrand(brandId) {
    // Update UI
    document.querySelectorAll('.brand-card').forEach(card => {
        card.classList.toggle('selected', card.dataset.brandId === brandId);
    });

    
    const modelsContainer = document.getElementById('models');
    modelsContainer.classList.remove('hidden');
    
    const modelsGrid = modelsContainer.querySelector('.models-grid');
    modelsGrid.innerHTML = (phones[brandId] || []).map(phone => `
        <div class="model-card" data-model-id="${phone.id}">
            <img src="${phone.image}" alt="${phone.name}">
            <h3>${phone.name}</h3>
        </div>
    `).join('');
    

  
    modelsGrid.querySelectorAll('.model-card').forEach(card => {
        card.addEventListener('click', () => selectModel(card.dataset.modelId));
    });

  
    document.getElementById('repairs').classList.add('hidden');
}

function selectModel(modelId) {
   
    document.querySelectorAll('.model-card').forEach(card => {
        card.classList.toggle('selected', card.dataset.modelId === modelId);
    });

    // Show repairs
    const repairsContainer = document.getElementById('repairs');
    repairsContainer.classList.remove('hidden');
    
    repairsContainer.querySelector('.repairs-list').innerHTML = repairs.map(repair => `
        <div class="repair-card">
            <div class="repair-info">
                <h3>${repair.name}</h3>
                <p>${repair.description}</p>
            </div>
            <div class="repair-price">
                <div class="price">${repair.price}€</div>
                <button onclick="selectRepair('${repair.id}')">Choisir</button>
            </div>
        </div>
    `).join('');
}

function selectRepair(repairId) {
    const repair = repairs.find(r => r.id === repairId);
    alert(`Vous avez sélectionné: ${repair.name}\nPrix: ${repair.price}€\n\nNous vous contacterons pour confirmer votre réparation.`);
}
