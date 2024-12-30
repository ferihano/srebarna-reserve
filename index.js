document.addEventListener("DOMContentLoaded", function() {
    
    const headerHTML = `
        <header id="main-header">
            <div class="logo">
                <a href="index.html"><img src="images/unnamed.png" alt="Лого на резерват Сребърна"></a>
                <span class="logo-text">ПР "Сребърна"</span>
            </div>
            <input type="checkbox" id="check">
            <label for="check" class="checkbtn">
                <i class="fas fa-bars"></i>
            </label>
            <nav>
                <ul>
                    <li><a href="index.html">Начало</a></li>
                    <li><a href="about.html">За резервата</a></li>
                    <li><a href="gallery.html">Галерия</a></li>
                    <li><a href="museum.html">Музей</a></li>
                    <li><a href="news.html">Новини</a></li>
                    <li><a href="contact.html">Контакти</a></li>
                </ul>
            </nav>
        </header>
    `;

    
    const footerHTML = `
        <footer class="footer" id="main-footer">
            <div class="container">
                <div class="row">
                    <div class="logo-info">
                        <a href="index.html"><img src="images/unnamed.png" alt="Лого на резерват Сребърна" class="footer-logo"></a>
                        <p class="contact-info">
                            <i class="fa-solid fa-location-dot"></i><strong>Адрес:</strong> село Сребърна, Силистра<br>
                            <i class="fa-solid fa-phone"></i><strong>Телефон:</strong>  +359 086 772 469<br>
                            <i class="fa-solid fa-envelope"></i><strong>Email:</strong><a href="mailto:museum_srebarna@abv.bg"> museum_srebarna@abv.bg</a>
                        </p>
                    </div>
                    <div class="footer-col">
                        <h4>ПР-Сребърна</h4>
                        <ul>
                            <li><a href="index.html">Начало</a></li>
                            <li><a href="about.html">За резервата</a></li>
                            <li><a href="gallery.html">Галерия</a></li>
                            <li><a href="museum.html">Музей</a></li>
                            <li><a href="news.html">Новини</a></li>
                            <li><a href="contact.html">Контакти</a></li>
                        </ul>
                    </div>
                    <div class="footer-col">
                        <h4>Информация</h4>
                        <ul>
                            <li><a href="museum.html#tickets-prices">Работно време и график</a></li>
                            <li><a href="contact.html#map">Как да стигнете</a></li>
                            <li><a href="museum.html#tickets-prices">Такси и билети</a></li>
                            <li><a href="#">Правила за поведение</a></li>
                            <li><a href="#">Често задавани въпроси</a></li>
                        </ul>
                    </div>
                    <div class="footer-col">
                        <h4>Посетители</h4>
                        <ul>
                            <li><a href="#">Туристически маршрут</a></li>
                            <li><a href="https://srebarnalake.com/%D0%B4%D0%B0%D0%BD%D0%BD%D0%B8-%D0%B7%D0%B0-%D0%B2%D0%BE%D0%B4%D0%BD%D0%B8%D1%82%D0%B5-%D0%BD%D0%B8%D0%B2%D0%B0-%D0%B2-%D1%80%D0%B5%D0%B7%D0%B5%D1%80%D0%B2%D0%B0%D1%82%D0%B0">Данни за водните нива в резервата</a></li>
                            <li><a href="https://srebarnalake.com/%D0%B2%D0%B8%D0%B4%D0%B5%D0%BE%D0%BD%D0%B0%D0%B1%D0%BB%D1%8E%D0%B4%D0%B5%D0%BD%D0%B8%D0%B5">Видеонаблюдение</a></li>
                    
                        </ul>
                    </div>
                </div>
            </div>
            <div class="bottom-info-container"></div>
            <div class="social-notice">
                 <div class="social-icons">
                <a href="https://www.facebook.com/museumsrebarna/"  target="_blank"><i class="fa-brands fa-square-facebook"></i></a>
                <a href="https://bg.wikipedia.org/wiki/%D0%A1%D1%80%D0%B5%D0%B1%D1%8A%D1%80%D0%BD%D0%B0_(%D1%80%D0%B5%D0%B7%D0%B5%D1%80%D0%B2%D0%B0%D1%82)"  target="_blank"><i class="fa-brands fa-wikipedia-w"></i></a>
                <a href="https://srebarnalake.com/"  target="_blank"><i class="fa fa-globe" aria-hidden="true"></i></a>
            </div>
            </div>
            <div class="footer-bottom">
                <div class="notice">
                    <p>&copy; 2024 Резерват Сребърна | Този сайт е част от учебен проект</p>
                </div>
            </div>
        </footer>
    `;

   
    document.getElementById("header-container").innerHTML = headerHTML;
    document.getElementById("footer-container").innerHTML = footerHTML;
});


document.addEventListener("DOMContentLoaded", function() {
   
    const currentPath = window.location.pathname;
    
    
    const links = document.querySelectorAll("nav ul li a");

    
    links.forEach(link => {
        link.classList.remove("active");
    });

    
    links.forEach(link => {
        
        if (link.href.includes(currentPath)) {
            link.classList.add("active");
        }
    });
});


const toggleButton = document.querySelector('.sidebar-toggle-btn');
const sidebar = document.querySelector('.sidebar');


toggleButton.addEventListener('click', () => {
    
    sidebar.classList.toggle('open');
    
    
    if (sidebar.classList.contains('open')) {
        toggleButton.innerHTML = '<i class="fas fa-arrow-up"></i>'; 
    } else {
        toggleButton.innerHTML = '<i class="fas fa-arrow-down"></i>'; 
    }
});
