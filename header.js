// header.js
class SiteHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <style>
            .main-header {
                background-color: var(--slate-blue);
                color: var(--text-light);
                padding: 25px 0;
                position: sticky;
                top: 0;
                z-index: 1000;
                font-family: 'Montserrat', sans-serif;
                box-shadow: 0 4px 20px rgba(0,0,0,0.05);
            }
            .nav-container {
                display: flex;
                justify-content: space-between;
                align-items: center;
                max-width: 1200px;
                margin: 0 auto;
                padding: 0 20px;
            }
            .nav-logo a {
                font-family: 'Playfair Display', serif;
                font-size: 2rem;
                color: var(--champagne-gold);
                text-decoration: none;
                letter-spacing: 2px;
                font-style: italic;
            }
            .nav-links {
                display: flex;
                gap: 35px;
                align-items: center;
            }
            .nav-links a {
                color: var(--text-light);
                text-decoration: none;
                font-size: 0.85rem;
                text-transform: uppercase;
                letter-spacing: 2px;
                font-weight: 300;
                transition: color 0.4s ease;
            }
            .nav-links a:hover {
                color: var(--champagne-gold);
            }
            .dropdown { position: relative; display: inline-block; }
            .dropdown-content {
                display: none;
                position: absolute;
                background-color: rgba(10, 17, 40, 0.98);
                min-width: 220px;
                box-shadow: 0px 10px 30px rgba(0,0,0,0.1);
                z-index: 1;
                top: 100%;
                left: 0;
                border-top: 1px solid var(--champagne-gold);
                padding: 10px 0;
            }
            .dropdown-content a {
                color: var(--text-light);
                padding: 12px 25px;
                display: block;
                letter-spacing: 1.5px;
                font-size: 0.8rem;
            }
            .dropdown-content a:hover { background-color: rgba(212, 175, 55, 0.1); }
            .dropdown:hover .dropdown-content { display: block; }
            .cart-icon { display: flex; align-items: center; gap: 8px; }
            @media (max-width: 992px) { .nav-links { display: none; } }
        </style>
        <header class="main-header">
            <div class="nav-container">
                <div class="nav-logo">
                    <a href="/">Romantic Gestures NZ</a>
                </div>
                <nav class="nav-links">
                    <a href="/">HOME</a>
                    <div class="dropdown">
                        <a href="/about/">ABOUT</a>
                        <div class="dropdown-content">
                            <a href="/testimonials/">Testimonials</a>
                            <a href="/faqs/">FAQ's</a>
                        </div>
                    </div>
                    <div class="dropdown">
                        <a href="/services/">SERVICES</a>
                        <div class="dropdown-content">
                            <a href="/shop/">Romantic Gifts</a>
                            <a href="/digital-downloads/">Digital Downloads</a>
                            <a href="/resources/">Resources</a>
                            <a href="/marriage-proposals/">Marriage Proposals</a>
                            <a href="/romantic-getaways/">Romantic Getaways</a>
                            <a href="/date-nights/">Date Nights</a>
                            <a href="/wedding-consultations/">Wedding Consultations</a>
                            <a href="/events/">Events</a>
                        </div>
                    </div>
                    <a href="/contact/">CONTACT</a>
                    <a href="/blog/">BLOG</a>
                    <a href="/testimonials/">TESTIMONIALS</a>
                    <a href="/shop/" class="cart-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                        CART
                    </a>
                </nav>
            </div>
        </header>
        `;
    }
}
customElements.define('site-header', SiteHeader);