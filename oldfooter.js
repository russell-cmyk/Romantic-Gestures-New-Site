// footer.js
class SiteFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <style>
            .main-footer {
                background-color: var(--brand-charcoal);
                color: var(--text-light);
                padding: 50px 20px 20px; /* Reduced from 80px to pull it closer to the contact form */
                font-family: 'Montserrat', sans-serif;
            }
            .footer-container {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                gap: 40px;
                max-width: 1200px;
                margin: 0 auto;
            }
            .footer-col h3 {
                font-family: 'Playfair Display', serif;
                font-size: 1.5rem;
                color: var(--brand-gold);
                margin-bottom: 20px;
                font-weight: 400;
                font-style: italic;
            }
            .footer-col p {
                font-size: 0.85rem;
                line-height: 1.8;
                opacity: 0.8;
                margin-bottom: 15px;
                letter-spacing: 0.5px;
            }
            .social-icons {
                display: flex;
                gap: 15px;
                margin-bottom: 15px;
            }
            .social-icons a svg {
                fill: var(--text-light);
                width: 18px;
                height: 18px;
                transition: fill 0.4s ease, transform 0.4s ease;
            }
            .social-icons a:hover svg { fill: var(--brand-gold); transform: translateY(-3px); }
            .footer-bottom {
                text-align: center;
                margin-top: 40px;
                padding-top: 20px;
                border-top: 1px solid rgba(197, 168, 128, 0.2);
                font-size: 0.75rem;
                letter-spacing: 1px;
                opacity: 0.6;
                line-height: 2;
            }
            .footer-bottom a { color: var(--brand-gold); text-decoration: none; transition: color 0.3s; }
            .footer-bottom a:hover { color: var(--text-light); text-decoration: underline; }
            .shielded-container { margin-top: 20px; text-align: left; }
        </style>
        <footer class="main-footer">
            <div class="footer-container">
                <div class="footer-col">
                    <h3>Connect With Us</h3>
                    <p>Join our community and get inspired for your next romantic gesture.</p>
                    <div class="social-icons">
                        <a href="https://www.facebook.com/RomanticGesturesNZ" target="_blank"><svg viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
                        <a href="https://www.instagram.com/romantic_gestures_nz" target="_blank"><svg viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"></path></svg></a>
                        <a href="https://nz.pinterest.com/romanticgesturesnz/" target="_blank"><svg viewBox="0 0 24 24"><path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.951-7.252 4.182 0 7.439 2.981 7.439 6.953 0 4.156-2.626 7.502-6.273 7.502-1.221 0-2.373-.635-2.766-1.385l-.754 2.87c-.273 1.042-1.013 2.348-1.509 3.142 1.146.353 2.361.543 3.621.543 6.621 0 11.988-5.368 11.988-11.987C23.97 5.367 18.638 0 12.017 0z"/></svg></a>
                        <a href="https://www.linkedin.com/company/romantic-gestures-ltd" target="_blank"><svg viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
                        <a href="https://www.youtube.com/user/RomanticGesturesNZ" target="_blank"><svg viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-5.965 3.568z"></path></svg></a>
                    </div>
                </div>
                <div class="footer-col">
                    <h3>Quick Links</h3>
                    <p><a href="/about/" style="color:inherit; text-decoration:none;">About Us</a></p>
                    <p><a href="/services/" style="color:inherit; text-decoration:none;">Our Services</a></p>
                    <p><a href="/shop/" style="color:inherit; text-decoration:none;">Shop Romantic Gifts</a></p>
                    <p><a href="/blog/" style="color:inherit; text-decoration:none;">Blog</a></p>
                </div>
                <div class="footer-col">
                    <div class="shielded-container">
                        <img alt="shielded" id="shielded-logo" src="https://shielded.co.nz/img/custom-logo.png" height="50" width="50" style="cursor: pointer; display: block;">
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <p>Copyright &copy; 2026 Romantic Gestures NZ [<a href="http://www.RomanticGestures.co.nz/shop/terms/" target="_blank">T&C</a>] - <a href="/file-uploads/" target="_blank">Liquor Licence</a><br>
                Designed by <a href="https://creativestartupnz.com/about.html" target="_blank" rel="noopener noreferrer">Creative Startup NZ</a></p>
            </div>
        </footer>
        `;

        const script = document.createElement('script');
        script.src = 'https://staticcdn.co.nz/embed/embed.js';
        script.onload = () => {
            if (typeof ds07o6pcmkorn !== 'undefined') {
                const frameName = new ds07o6pcmkorn({
                    openElementId: "#shielded-logo",
                    modalID: "modal",
                });
                frameName.init();
            }
        };
        document.body.appendChild(script);
    }
}
customElements.define('site-footer', SiteFooter);