// Sample data for news and birthdays
const newsData = [
    {
        title: "Sunday Service Update",
        date: "March 15, 2024",
        content: "Join us this Sunday for a special worship service celebrating our church anniversary."
    },
    {
        title: "Youth Ministry Event",
        date: "March 20, 2024",
        content: "Our youth ministry is organizing a community outreach program next weekend."
    },
    {
        title: "Bible Study Groups",
        date: "March 25, 2024",
        content: "New Bible study groups are forming. Sign up after service this Sunday."
    }
];

const birthdayData = [
    {
        name: "John Smith",
        date: "March 16",
        age: 35
    },
    {
        name: "Mary Johnson",
        date: "March 18",
        age: 28
    },
    {
        name: "David Wilson",
        date: "March 20",
        age: 45
    }
];

// Add this after the existing data arrays
const bibleQuotes = [
    {
        text: "For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, plans to give you hope and a future.",
        reference: "Jeremiah 29:11"
    },
    {
        text: "Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go.",
        reference: "Joshua 1:9"
    },
    {
        text: "Trust in the Lord with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight.",
        reference: "Proverbs 3:5-6"
    },
    {
        text: "I can do all things through Christ who strengthens me.",
        reference: "Philippians 4:13"
    },
    {
        text: "The Lord is my shepherd, I lack nothing.",
        reference: "Psalm 23:1"
    },
    {
        text: "Love is patient, love is kind. It does not envy, it does not boast, it is not proud.",
        reference: "1 Corinthians 13:4"
    },
    {
        text: "But the fruit of the Spirit is love, joy, peace, forbearance, kindness, goodness, faithfulness, gentleness and self-control.",
        reference: "Galatians 5:22-23"
    },
    {
        text: "Let your light shine before others, that they may see your good deeds and glorify your Father in heaven.",
        reference: "Matthew 5:16"
    },
    {
        text: "Come to me, all you who are weary and burdened, and I will give you rest.",
        reference: "Matthew 11:28"
    },
    {
        text: "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God.",
        reference: "Philippians 4:6"
    },
    {
        text: "Be kind and compassionate to one another, forgiving each other, just as in Christ God forgave you.",
        reference: "Ephesians 4:32"
    },
    {
        text: "The Lord bless you and keep you; the Lord make his face shine on you and be gracious to you.",
        reference: "Numbers 6:24-25"
    },
    {
        text: "But seek first his kingdom and his righteousness, and all these things will be given to you as well.",
        reference: "Matthew 6:33"
    },
    {
        text: "Cast your cares on the Lord and he will sustain you; he will never let the righteous be shaken.",
        reference: "Psalm 55:22"
    },
    {
        text: "Therefore, if anyone is in Christ, the new creation has come: The old has gone, the new is here!",
        reference: "2 Corinthians 5:17"
    },
    {
        text: "Be joyful in hope, patient in affliction, faithful in prayer.",
        reference: "Romans 12:12"
    },
    {
        text: "The name of the Lord is a fortified tower; the righteous run to it and are safe.",
        reference: "Proverbs 18:10"
    },
    {
        text: "Give thanks to the Lord, for he is good; his love endures forever.",
        reference: "Psalm 107:1"
    },
    {
        text: "Let us not become weary in doing good, for at the proper time we will reap a harvest if we do not give up.",
        reference: "Galatians 6:9"
    },
    {
        text: "The Lord is close to the brokenhearted and saves those who are crushed in spirit.",
        reference: "Psalm 34:18"
    },
    {
        text: "But those who hope in the Lord will renew their strength. They will soar on wings like eagles.",
        reference: "Isaiah 40:31"
    },
    {
        text: "This is the day that the Lord has made; let us rejoice and be glad in it.",
        reference: "Psalm 118:24"
    },
    {
        text: "Greater love has no one than this: to lay down one's life for one's friends.",
        reference: "John 15:13"
    },
    {
        text: "Be still, and know that I am God.",
        reference: "Psalm 46:10"
    },
    {
        text: "Your word is a lamp for my feet, a light on my path.",
        reference: "Psalm 119:105"
    },
    {
        text: "The Lord will fight for you; you need only to be still.",
        reference: "Exodus 14:14"
    },
    {
        text: "Consider it pure joy when you face trials of many kinds, because you know that the testing of your faith produces perseverance.",
        reference: "James 1:2-3"
    },
    {
        text: "And we know that in all things God works for the good of those who love him.",
        reference: "Romans 8:28"
    },
    {
        text: "I praise you because I am fearfully and wonderfully made.",
        reference: "Psalm 139:14"
    },
    {
        text: "The peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus.",
        reference: "Philippians 4:7"
    },
    {
        text: "My grace is sufficient for you, for my power is made perfect in weakness.",
        reference: "2 Corinthians 12:9"
    },
    {
        text: "Blessed are the peacemakers, for they will be called children of God.",
        reference: "Matthew 5:9"
    },
    {
        text: "The Lord your God is with you, the Mighty Warrior who saves.",
        reference: "Zephaniah 3:17"
    },
    {
        text: "Ask and it will be given to you; seek and you will find; knock and the door will be opened to you.",
        reference: "Matthew 7:7"
    },
    {
        text: "Do not let your hearts be troubled. You believe in God; believe also in me.",
        reference: "John 14:1"
    },
    {
        text: "I have told you these things, so that in me you may have peace. In this world you will have trouble. But take heart! I have overcome the world.",
        reference: "John 16:33"
    },
    {
        text: "The Lord is my light and my salvation—whom shall I fear?",
        reference: "Psalm 27:1"
    },
    {
        text: "Taste and see that the Lord is good; blessed is the one who takes refuge in him.",
        reference: "Psalm 34:8"
    },
    {
        text: "Therefore encourage one another and build each other up.",
        reference: "1 Thessalonians 5:11"
    },
    {
        text: "Let love and faithfulness never leave you; bind them around your neck, write them on the tablet of your heart.",
        reference: "Proverbs 3:3"
    },
    {
        text: "The grass withers and the flowers fall, but the word of our God endures forever.",
        reference: "Isaiah 40:8"
    },
    {
        text: "Blessed is the one who perseveres under trial because, having stood the test, that person will receive the crown of life.",
        reference: "James 1:12"
    },
    {
        text: "For where two or three gather in my name, there am I with them.",
        reference: "Matthew 18:20"
    },
    {
        text: "But you are a chosen people, a royal priesthood, a holy nation, God's special possession.",
        reference: "1 Peter 2:9"
    },
    {
        text: "The Lord gives strength to his people; the Lord blesses his people with peace.",
        reference: "Psalm 29:11"
    },
    {
        text: "Let us hold unswervingly to the hope we profess, for he who promised is faithful.",
        reference: "Hebrews 10:23"
    },
    {
        text: "May the God of hope fill you with all joy and peace as you trust in him.",
        reference: "Romans 15:13"
    },
    {
        text: "In the beginning was the Word, and the Word was with God, and the Word was God.",
        reference: "John 1:1"
    },
    {
        text: "Be completely humble and gentle; be patient, bearing with one another in love.",
        reference: "Ephesians 4:2"
    },
    {
        text: "The fear of the Lord is the beginning of wisdom.",
        reference: "Proverbs 9:10"
    },
    {
        text: "But the Lord is faithful, and he will strengthen you and protect you from the evil one.",
        reference: "2 Thessalonians 3:3"
    },
    {
        text: "Commit to the Lord whatever you do, and he will establish your plans.",
        reference: "Proverbs 16:3"
    },
    {
        text: "Let us come before him with thanksgiving and extol him with music and song.",
        reference: "Psalm 95:2"
    },
    {
        text: "The Lord is good to those whose hope is in him, to the one who seeks him.",
        reference: "Lamentations 3:25"
    },
    {
        text: "Blessed are those who keep his statutes and seek him with all their heart.",
        reference: "Psalm 119:2"
    },
    {
        text: "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.",
        reference: "John 3:16"
    },
    {
        text: "Therefore go and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit.",
        reference: "Matthew 28:19"
    },
    {
        text: "But you will receive power when the Holy Spirit comes on you; and you will be my witnesses.",
        reference: "Acts 1:8"
    },
    {
        text: "I am the way and the truth and the life. No one comes to the Father except through me.",
        reference: "John 14:6"
    },
    {
        text: "And surely I am with you always, to the very end of the age.",
        reference: "Matthew 28:20"
    }
];

// Add this after your existing data arrays
const eventsData = [
    {
        date: "March 24, 2024",
        title: "Sunday Worship Service",
        description: "Join us for our weekly worship service with special guest speaker Pastor Johnson.",
        time: "10:00 AM - 12:00 PM",
        location: "Main Sanctuary"
    },
    {
        date: "March 26, 2024",
        title: "Bible Study Group",
        description: "Weekly Bible study focusing on the Book of Romans.",
        time: "6:30 PM - 8:00 PM",
        location: "Fellowship Hall"
    },
    {
        date: "March 30, 2024",
        title: "Youth Ministry Workshop",
        description: "Special workshop for young adults focusing on faith and modern challenges.",
        time: "2:00 PM - 4:00 PM",
        location: "Youth Center"
    },
    {
        date: "April 1, 2024",
        title: "Prayer Meeting",
        description: "Community prayer meeting for church and world needs.",
        time: "7:00 PM - 8:30 PM",
        location: "Prayer Room"
    },
    {
        date: "April 5, 2024",
        title: "Easter Preparation Service",
        description: "Special service preparing for Easter celebrations.",
        time: "6:00 PM - 8:00 PM",
        location: "Main Sanctuary"
    }
];

// Carousel functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const dots = document.querySelector('.carousel-dots');

// Function to create news cards
function createNewsCards() {
    const newsContainer = document.querySelector('.news-container');
    
    newsData.forEach(news => {
        const col = document.createElement('div');
        col.className = 'col-md-6 col-lg-4';
        
        col.innerHTML = `
            <div class="card news-card h-100 shadow-sm">
                <div class="card-body">
                    <h5 class="card-title">${news.title}</h5>
                    <p class="card-text text-muted">${news.date}</p>
                    <p class="card-text">${news.content}</p>
                </div>
            </div>
        `;
        newsContainer.appendChild(col);
    });
}

// Function to create birthday cards
function createBirthdayCards() {
    const celebrantsList = document.querySelector('.celebrants-list');
    
    // Sort birthdays by date
    birthdayData.sort((a, b) => {
        const dateA = new Date(a.date + ", 2024");
        const dateB = new Date(b.date + ", 2024");
        return dateA - dateB;
    });
    
    birthdayData.forEach(birthday => {
        const celebrantItem = document.createElement('div');
        celebrantItem.className = 'celebrant-item';
        
        celebrantItem.innerHTML = `
            <div class="celebrant-name">${birthday.name}</div>
            <div class="celebrant-date">
                <i class="fas fa-birthday-cake me-2"></i>
                ${birthday.date} (${birthday.age} years)
            </div>
        `;
        celebrantsList.appendChild(celebrantItem);
    });
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Create dots
function createDots() {
    slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.className = `dot ${index === 0 ? 'active' : ''}`;
        dot.addEventListener('click', () => goToSlide(index));
        dots.appendChild(dot);
    });
}

function updateDots() {
    document.querySelectorAll('.dot').forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });
}

function goToSlide(n) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[n].classList.add('active');
    currentSlide = n;
    updateDots();
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    goToSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    goToSlide(currentSlide);
}

// Add this function after the existing functions
function updateQuote() {
    const quoteText = document.querySelector('.quote-text');
    const quoteReference = document.querySelector('.quote-reference');
    const randomIndex = Math.floor(Math.random() * bibleQuotes.length);
    
    // Add fade-out effect
    quoteText.style.opacity = '0';
    quoteReference.style.opacity = '0';
    
    setTimeout(() => {
        quoteText.textContent = bibleQuotes[randomIndex].text;
        quoteReference.textContent = bibleQuotes[randomIndex].reference;
        
        // Add fade-in effect
        quoteText.style.opacity = '1';
        quoteReference.style.opacity = '1';
    }, 500);
}

// Add this function after your existing functions
function createEvents() {
    const eventsTimeline = document.querySelector('.events-timeline');
    const upcomingHighlights = document.querySelector('.upcoming-highlights');
    
    // Sort events by date
    eventsData.sort((a, b) => new Date(a.date) - new Date(b.date));
    
    // Create timeline events
    eventsData.forEach(event => {
        const eventItem = document.createElement('div');
        eventItem.className = 'event-item';
        eventItem.innerHTML = `
            <div class="event-date">${event.date}</div>
            <h3 class="event-title">${event.title}</h3>
            <p class="event-description">${event.description}</p>
            <div class="event-time">
                <i class="fas fa-clock"></i>${event.time}
            </div>
            <div class="event-location">
                <i class="fas fa-map-marker-alt"></i>${event.location}
            </div>
        `;
        eventsTimeline.appendChild(eventItem);
        
        // Create highlight items (show only first 3)
        if (upcomingHighlights.children.length < 3) {
            const highlightItem = document.createElement('div');
            highlightItem.className = 'highlight-item';
            highlightItem.innerHTML = `
                <div class="highlight-date">${event.date}</div>
                <div class="highlight-title">${event.title}</div>
            `;
            upcomingHighlights.appendChild(highlightItem);
        }
    });
}

// Initialize Bootstrap carousel
document.addEventListener('DOMContentLoaded', () => {
    // Initialize Bootstrap carousel
    new bootstrap.Carousel(document.querySelector('#heroCarousel'), {
        interval: 5000
    });

    // Create cards and initialize other features
    createNewsCards();
    createBirthdayCards();
    createEvents();
    updateQuote();

    // Add quote refresh button listener
    document.querySelector('.refresh-quote').addEventListener('click', updateQuote);

    // Add button event listeners
    document.querySelector('.carousel-btn.next').addEventListener('click', nextSlide);
    document.querySelector('.carousel-btn.prev').addEventListener('click', prevSlide);
});

// Add this CSS transition to the existing styles
document.head.insertAdjacentHTML('beforeend', `
    <style>
        .quote-text, .quote-reference {
            transition: opacity 0.5s ease;
        }
    </style>
`); 