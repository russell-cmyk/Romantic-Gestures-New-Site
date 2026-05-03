// footer.js
class SiteFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <style>
            .main-footer {
                background-color: var(--brand-charcoal);
                color: var(--text-light);
                padding: 30px 20px 20px; /* Cut padding in half */
                font-family: 'Raleway', sans-serif;
            }
            .footer-container {
                display: grid;
                grid-template-columns: 1fr 1fr 1fr;
                gap: 30px; /* Tighter grid gap */
                max-width: 1200px;
                margin: 0 auto;
                align-items: start; 
            }
            @media (max-width: 992px) {
                .footer-container { grid-template-columns: 1fr; }
            }

            .footer-col h3 {
                font-family: 'Cormorant Garamond', serif; 
                font-size: 2.2rem;
                color: var(--brand-gold);
                margin-bottom: 15px; /* Tighter margin */
                font-weight: 500;
                font-style: italic;
            }
            .footer-col p {
                font-size: 0.9rem;
                line-height: 1.8;
                opacity: 0.8;
                margin-bottom: 15px;
            }
            
            .partners-logos { display: flex; flex-wrap: wrap; gap: 15px; margin-bottom: 20px; align-items: center; }
            .partners-logos img, .partners-logos .shielded-container img { max-width: 90px; opacity: 0.8; transition: opacity 0.4s; filter: grayscale(20%); }
            .partners-logos img:hover, .partners-logos .shielded-container img:hover { opacity: 1; filter: grayscale(0%); }
            .shielded-container { display: inline-block; margin: 0; padding: 0; }
            
            .social-icons { display: flex; gap: 15px; margin-bottom: 15px; }
            .social-icons a svg { fill: var(--text-light); width: 22px; height: 22px; transition: fill 0.4s ease, transform 0.4s ease; }
            .social-icons a:hover svg { fill: var(--hover-red); transform: translateY(-3px); }

            .video-wrapper {
                position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; 
                border-radius: 8px; box-shadow: 0 10px 30px rgba(0,0,0,0.2); margin-bottom: 20px;
            }
            .video-wrapper iframe { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }

            .contact-form { 
                background: var(--bg-ivory); padding: 25px; border-radius: 8px; /* Tighter padding */
                color: var(--text-dark); box-shadow: 0 10px 30px rgba(0,0,0,0.15); 
            }
            .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
            .form-group { margin-bottom: 12px; } 
            .form-group label { 
                display: block; font-size: 0.65rem; margin-bottom: 3px; 
                text-transform: uppercase; letter-spacing: 2px; 
                color: var(--brand-charcoal); font-weight: 600;
            }
            .form-group input[type="text"], .form-group input[type="tel"], .form-group input[type="email"], .form-group select, .form-group textarea {
                width: 100%; padding: 6px 0; border: none; border-bottom: 1px solid rgba(44, 66, 112, 0.3); 
                background: transparent; font-family: 'Raleway', sans-serif; transition: all 0.4s; font-size: 0.85rem; color: var(--brand-charcoal);
            }
            .form-group input:focus, .form-group select:focus, .form-group textarea:focus {
                outline: none; border-bottom: 1px solid var(--brand-gold); 
            }
            .checkbox-group { display: flex; align-items: center; gap: 10px; margin-top: 5px; margin-bottom: 15px; }
            .checkbox-group label { margin-bottom: 0; text-transform: none; letter-spacing: 0.5px; font-weight: 500; font-size: 0.8rem; color: #555;}
            
            .btn-submit {
                background-color: var(--brand-gold); color: var(--brand-charcoal); border: none;
                padding: 12px 25px; font-family: 'Raleway', sans-serif; text-transform: uppercase;
                letter-spacing: 2px; font-weight: 600; cursor: pointer; transition: background 0.4s; width: 100%; border-radius: 4px;
            }
            .btn-submit:hover { background-color: var(--hover-red); color: var(--text-light); }

            .footer-bottom {
                text-align: center; margin-top: 30px; padding-top: 15px;
                border-top: 1px solid rgba(197, 168, 128, 0.2); font-size: 0.8rem;
                letter-spacing: 1px; opacity: 0.7; line-height: 2;
            }
            .footer-bottom a { color: var(--brand-gold); text-decoration: none; transition: color 0.3s; }
            .footer-bottom a:hover { color: var(--hover-red); text-decoration: underline; }
        </style>
        <footer class="main-footer">
            <div class="footer-container">
                
                <div class="footer-col">
                    <h3>Our partners</h3>
                    <p>We only work with the best companies around NZ. They have all been approved by our team and are of value to add Romance to your relationship.</p>
                    <div class="partners-logos">
                        <a href="https://track.roeye.co.nz/click?pid=2199&amp;offer_id=10" target="_blank"><img src="images/linden.jpg" alt="Linden Leaves"></a>
                        <a href="https://adventurehelicopters.co.nz/?ap_id=RomanticGestures" target="_blank"><img src="images/helicopter.jpg" alt="Adventure Helicopters"></a>
                        <a href="https://www.newzealand.com/int/" target="_blank"><img src="images/newzealand-tourism.png" alt="100% Pure New Zealand" style="background:var(--brand-charcoal); padding: 2px;"></a>
                        <a href="https://coupleschoice.nz/winners-2025/" target="_blank"><img src="images/couple-choice.png" alt="Couples Choice Winner"></a>
                        <div class="shielded-container">
                            <img alt="shielded" id="shielded-logo" src="https://shielded.co.nz/img/custom-logo.png" height="50" width="50" style="cursor: pointer; display: block; max-width: 50px;">
                        </div>
                    </div>
                    
                    <h3 style="margin-top: 20px;">Connect With Us</h3>
                    <div class="social-icons">
                        <a href="https://www.facebook.com/RomanticGesturesNZ" target="_blank"><svg viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
                        <a href="https://www.instagram.com/romantic_gestures_nz" target="_blank"><svg viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"></path></svg></a>
                        <a href="https://nz.pinterest.com/romanticgesturesnz/" target="_blank"><svg viewBox="0 0 24 24"><path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.951-7.252 4.182 0 7.439 2.981 7.439 6.953 0 4.156-2.626 7.502-6.273 7.502-1.221 0-2.373-.635-2.766-1.385l-.754 2.87c-.273 1.042-1.013 2.348-1.509 3.142 1.146.353 2.361.543 3.621.543 6.621 0 11.988-5.368 11.988-11.987C23.97 5.367 18.638 0 12.017 0z"/></svg></a>
                        <a href="https://www.linkedin.com/company/romantic-gestures-ltd" target="_blank"><svg viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
                        <a href="https://www.youtube.com/user/RomanticGesturesNZ" target="_blank"><svg viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-5.965 3.568z"></path></svg></a>
                    </div>
                </div>

                <div class="footer-col">
                    <div class="video-wrapper">
                        <iframe loading="lazy" src="https://www.youtube.com/embed/EDvGLmOaubA" frameborder="0" allowfullscreen></iframe>
                    </div>
                    <div class="video-wrapper">
                        <iframe loading="lazy" src="https://www.youtube.com/embed/8GLEnbnt1OM" frameborder="0" allowfullscreen></iframe>
                    </div>
                </div>

                <div class="footer-col">
                    <div class="contact-form">
                        <h3 style="color: var(--brand-charcoal); margin-bottom: 15px;">Enquire Now</h3>
                        <form id="contactForm" name="contactForm">
                            <div class="form-row">
                                <div class="form-group">
                                    <label for="name">Name</label>
                                    <input type="text" id="name" name="Name" required>
                                </div>
                                <div class="form-group">
                                    <label for="phone">Phone</label>
                                    <input type="tel" id="phone" name="Phone" required>
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group">
                                    <label for="email">Email</label>
                                    <input type="email" id="email" name="Email" required>
                                </div>
                                <div class="form-group">
                                    <label for="enquiry_type">Enquiry Type</label>
                                    <select id="enquiry_type" name="EnquiryType" required>
                                        <option value="" disabled selected>Select</option>
                                        <option value="Surprise Marriage Proposal">Surprise Proposal</option>
                                        <option value="Date Night">Date Night</option>
                                        <option value="Product Enquiry">Product Enquiry</option>
                                        <option value="Getaway Enquiry">Getaway</option>
                                    </select>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="message">Message</label>
                                <textarea id="message" name="Message" rows="1" required></textarea>
                            </div>
                            <div class="form-group checkbox-group">
                                <input type="checkbox" id="over_18" name="Over18" value="Yes" required>
                                <label for="over_18">I am over 18</label>
                            </div>
                            <button type="submit" id="submitBtn" class="btn-submit">Send</button>
                            <p id="formStatus" style="margin-top: 10px; font-size: 0.75rem; font-weight: 600; text-align: center; color: var(--brand-charcoal);"></p>
                        </form>
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