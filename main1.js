// Données de démonstration
const demoUser = {
    email: 'demo@example.com',
    password: 'demo123',
    name: 'Jad lamtaifi'
};

// Éléments DOM
const loginForm = document.getElementById('loginForm');
const loginSection = document.getElementById('loginSection');
const dashboardSection = document.getElementById('dashboardSection');
const userNameSpan = document.getElementById('userName');

// Gestionnaire de connexion
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Vérification des identifiants (demo)
    if (email === demoUser.email && password === demoUser.password) {
        showDashboard();
    } else {
        alert('Identifiants incorrects. Utilisez demo@example.com / demo123');
    }
});

// Afficher le tableau de bord
function showDashboard() {
    loginSection.classList.add('hidden');
    dashboardSection.classList.remove('hidden');
    userNameSpan.textContent = demoUser.name;
}

// Fonctions du tableau de bord
function showTickets() {
    alert('Liste des tickets en cours:\n- Maintenance serveur\n- Mise à jour logiciel\n- Problème réseau');
}

function showMaintenance() {
    alert('Calendrier de maintenance ouvert');
}

function showStatus() {
    alert('Rapport d\'état du système:\nTous les systèmes fonctionnent normalement');
}

function contactSupport() {
    alert('Numéro du support: 0800 123 456\nEmail: support@maintenance.com');
}

// Animation des cartes
document.querySelectorAll('.dashboard-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-5px)';
        card.style.transition = 'transform 0.3s ease';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});