// Authentication
function handleLogin(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    fetch('api/auth.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            localStorage.setItem('adminLoggedIn', 'true');
            window.location.href = 'index.html';
        } else {
            alert(data.message || 'Invalid credentials');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
    });
}

// Check authentication status
function checkAuth() {
    if (!localStorage.getItem('adminLoggedIn')) {
        window.location.href = 'login.html';
    }
}

// Logout
document.getElementById('logoutBtn')?.addEventListener('click', () => {
    localStorage.removeItem('adminLoggedIn');
    window.location.href = 'login.html';
});

// Sidebar Toggle
document.getElementById('sidebarCollapse')?.addEventListener('click', () => {
    document.getElementById('sidebar').classList.toggle('active');
});

// Navigation
document.querySelectorAll('#sidebar a[data-section]').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const sectionId = link.getAttribute('data-section');
        
        // Update active state
        document.querySelectorAll('#sidebar li').forEach(item => item.classList.remove('active'));
        link.parentElement.classList.add('active');
        
        // Show selected section
        document.querySelectorAll('.content-section').forEach(section => section.classList.remove('active'));
        document.getElementById(`${sectionId}-section`).classList.add('active');
    });
});

// News Management
function loadNews() {
    const newsTable = document.querySelector('#newsTable tbody');
    
    fetch('api/news.php')
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                newsTable.innerHTML = data.data.map(item => `
                    <tr>
                        <td>${item.title}</td>
                        <td>${item.date}</td>
                        <td>${item.content.substring(0, 50)}...</td>
                        <td>
                            <button class="btn btn-sm btn-primary me-2" onclick="editNews(${JSON.stringify(item)})">
                                <i class="fas fa-edit"></i>
                            </button>
                            <button class="btn btn-sm btn-danger" onclick="deleteNews(${item.id})">
                                <i class="fas fa-trash"></i>
                            </button>
                        </td>
                    </tr>
                `).join('');
            }
        })
        .catch(error => console.error('Error:', error));
}

function saveNews() {
    const form = document.getElementById('addNewsForm');
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    
    fetch('api/news.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            bootstrap.Modal.getInstance(document.getElementById('addNewsModal')).hide();
            loadNews();
            form.reset();
        } else {
            alert(data.message || 'An error occurred');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    checkAuth();
    loadNews();
    // Update dashboard counts
    document.getElementById('newsCount').textContent = '3';
    document.getElementById('eventsCount').textContent = '5';
    document.getElementById('birthdaysCount').textContent = '2';
    document.getElementById('quotesCount').textContent = '60';
}); 