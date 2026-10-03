import { Link } from '@adonisjs/inertia/react'

export default function Home() {
  return (
    <div>
      <div className="announcement-bar">
        <h2>Lorem ipsum dolor sit amet.</h2>
        {/* <h2>LOREM IPSUM 123%</h2>
        <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, voluptates?.</h2> */}
      </div>
      <header>
        <div className="accessibility-btns">
          <button className="language-btn">Select Language</button>
          <button className="currency-btn">Select Currency</button>
        </div>
        {/* <img src="#" alt="#" className="header-logo" /> */}
        <div className="logo">LOGO</div>
        <div className="search-bar">Search store ...</div>
        <div className="user-btns">
          <button className="basket">Basket</button>
          <button className="logout-btn">Logout</button>
          {/* <button className="login">Login</button> */}
        </div>
      </header>
      <nav>
        <ul className="nav-links">
          <li>
            <a href="#">Black</a>
          </li>
          <li>
            <a href="#">Blue</a>
          </li>
          <li>
            <a href="#">Yellow</a>
          </li>
          <li>
            <a href="#">Red</a>
          </li>
          <li>
            <a href="#">Pink</a>
          </li>
          <li>
            <a href="#">Black</a>
          </li>
          <li>
            <a href="#">Blue</a>
          </li>
          <li>
            <a href="#">Yellow</a>
          </li>
          <li>
            <a href="#">Red</a>
          </li>
          <li>
            <a href="#">Pink</a>
          </li>
        </ul>
      </nav>
      <div className="announcement-bar2">
        <ul className="announcements">
          <li>
            <a href="#" className="offer">
              50% OFF
            </a>
          </li>
          <li>
            <a href="#" className="offer">
              FREE DELIVERY
            </a>
          </li>
          <li>
            <a href="#" className="offer">
              SUMMER SALE
            </a>
          </li>
          <li>
            <a href="#" className="offer">
              50% OFF
            </a>
          </li>
          <li>
            <a href="#" className="offer">
              FREE DELIVERY
            </a>
          </li>
          <li>
            <a href="#" className="offer">
              SUMMER SALE
            </a>
          </li>
        </ul>
      </div>
      <div className="hero">
        {/* <img src="#" alt="#" className="hero img" /> */}
        <h1>HERO</h1>
        <button className="shop-now">SHOP NOW</button>
      </div>
      <div className="announcement-banner">
        {/* <img src="#" alt="#" className="announcement-img" /> */}
        <h2>ACCOUNCEMENT IMAGE</h2>
        <button className="announcement-shop-now">SHOP NOW</button>
      </div>
      <div className="img-cat-ctas">
        {/* <img src="#" alt="#" className="cta" />
        <img src="#" alt="#" className="cta" />
        <img src="#" alt="#" className="cta" /> */}
        <div className="img-cta">
          <h2>SHOP MENS</h2>
          <button className="cta-shop-now">Shop Clothing</button>
          <button className="cta-shop-now">Shop Accessories</button>
        </div>
        <div className="img-cta">
          <h2>SHOP WOMENS</h2>
          <button className="cta-shop-now">Shop Clothing</button>
          <button className="cta-shop-now">Shop Accessories</button>
        </div>
        <div className="img-cta">
          <h2>SHOP PERSONALISED GIFTS</h2>
          <button className="cta-shop-now">Shop Clothing</button>
          <button className="cta-shop-now">Shop Accessories</button>
        </div>
      </div>
      <div className="announcement-banner">
        {/* <img src="#" alt="#" className="announcement-img" /> */}
        <h2>ACCOUNCEMENT IMAGE</h2>
        <button className="announcement-shop-now">SHOP NOW</button>
      </div>
      <div className="sponsors">
        <span>.</span>
        <h2>Our Sponsors</h2>
        <span>.</span>
        <div className="sponsor-logos-row">
          <div className="sponsor-logo">LOGO</div>
          <div className="sponsor-logo">LOGO</div>
          <div className="sponsor-logo">LOGO</div>
          <div className="sponsor-logo">LOGO</div>
          <div className="sponsor-logo">LOGO</div>
          <div className="sponsor-logo">LOGO</div>
        </div>
        <div className="sponsor-logos-row">
          <div className="sponsor-logo">LOGO</div>
          <div className="sponsor-logo">LOGO</div>
          <div className="sponsor-logo">LOGO</div>
          <div className="sponsor-logo">LOGO</div>
          <div className="sponsor-logo">LOGO</div>
          <div className="sponsor-logo">LOGO</div>
        </div>
      </div>
      <div className="trending-slideshow">
        <span>.</span>
        <h2>Trending</h2>
        <span>.</span>
        <div className="product-card-slideshow">
          <div className="product-card">
            {/* <img src="#" alt="#" className="product-card-img" /> */}
            <div className="product-card-img">IMAGE HERE</div>
            <div className="product-card-details">
              <div className="product-card-pricing-and-name">
                <h3>Price £0.00</h3>
                <h3> Product Name Here</h3>
              </div>
              <div className="product-card-options">
                <h1>O O O O</h1>
              </div>
            </div>
          </div>
          <div className="product-card">
            {/* <img src="#" alt="#" className="product-card-img" /> */}
            <div className="product-card-img">IMAGE HERE</div>
            <div className="product-card-details">
              <div className="product-card-pricing-and-name">
                <h3>Price £0.00</h3>
                <h3> Product Name Here</h3>
              </div>
              <div className="product-card-options">
                <h1>O O O O</h1>
              </div>
            </div>
          </div>
          <div className="product-card">
            {/* <img src="#" alt="#" className="product-card-img" /> */}
            <div className="product-card-img">IMAGE HERE</div>
            <div className="product-card-details">
              <div className="product-card-pricing-and-name">
                <h3>Price £0.00</h3>
                <h3> Product Name Here</h3>
              </div>
              <div className="product-card-options">
                <h1>O O O O</h1>
              </div>
            </div>
          </div>
          <div className="product-card">
            {/* <img src="#" alt="#" className="product-card-img" /> */}
            <div className="product-card-img">IMAGE HERE</div>
            <div className="product-card-details">
              <div className="product-card-pricing-and-name">
                <h3>Price £0.00</h3>
                <h3> Product Name Here</h3>
              </div>
              <div className="product-card-options">
                <h1>O O O O</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="announcement-banner">
        {/* <img src="#" alt="#" className="announcement-img" /> */}
        <h2>ACCOUNCEMENT IMAGE</h2>
        <button className="announcement-shop-now">SHOP NOW</button>
      </div>
      <div className="img-cats">
        <div className="img-cat-card">
          {/* <img src="#" alt="#" className="cat-card-img" /> */}
          <div className="cat-card-img" />
          <button className="img-cat-card-shop-now">Shop Now</button>
        </div>
        <div className="img-cat-card">
          {/* <img src="#" alt="#" className="cat-card-img" /> */}
          <div className="cat-card-img" />
          <button className="img-cat-card-shop-now">Shop Now</button>
        </div>
      </div>
      <div className="img-cats">
        <div className="img-cat-card">
          {/* <img src="#" alt="#" className="cat-card-img" /> */}
          <div className="cat-card-img" />
          <button className="img-cat-card-shop-now">Shop Now</button>
        </div>
        <div className="img-cat-card">
          {/* <img src="#" alt="#" className="cat-card-img" /> */}
          <div className="cat-card-img" />
          <button className="img-cat-card-shop-now">Shop Now</button>
        </div>
      </div>
      <footer>
        <div className="footer-top">
          <div className="footer-links-section">
            <h3>Customer Service</h3>
            <ul className="footer-links">
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">FAQs</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
            </ul>
          </div>
          <div className="footer-links-section">
            <h3>Find Us</h3>
            <ul className="footer-links">
              <li>
                <a href="#">Our Stores</a>
              </li>
              <li>
                <a href="#">Find a Store</a>
              </li>
              <li>
                <a href="#">Your Address</a>
              </li>
            </ul>
          </div>
          <div className="footer-links-section">
            <h3>Legal</h3>
            <ul className="footer-links">
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
              <li>
                <a href="#">Privacy & Cookies</a>
              </li>
              <li>
                <a href="#">Accessibility</a>
              </li>
              <li>
                <a href="#">Cookie Settings</a>
              </li>
            </ul>
          </div>
          <div className="follow-socials">
            <h3>Follow Us</h3>
            <ul className="socials-links">
              <li>
                <a href="#">Twitter</a>
              </li>
              <li>
                <a href="#">Facebook</a>
              </li>
              <li>
                <a href="#">Instagtram</a>
              </li>
            </ul>
            <ul className="socials-links">
              <li>
                <a href="#">TikTOk</a>
              </li>
              <li>
                <a href="#">LinedIn</a>
              </li>
              <li>
                <a href="#">Reddit</a>
              </li>
            </ul>
          </div>
          <div className="newsletter-signup">
            <h3>Subscribe To Our Newsletter</h3>
            <input
              id="1"
              type="text"
              className="input-email-address"
              placeholder="Enter your email adress ..."
            />
          </div>
        </div>
        <div className="footer-middle">
          <div className="payment-method-links">
            <h3>Supported Payment Methods</h3>
            <ul className="payment-method-icons">
              <li>
                <a href="#">Visa</a>
              </li>
              <li>
                <a href="#">Mastercard</a>
              </li>
              <li>
                <a href="#">PayPal</a>
              </li>
              <li>
                <a href="#">ApplePay</a>
              </li>
              <li>
                <a href="#">Shop</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="copyright-banner">
            <h3>Copyright (R) Your Company 2026. All Rights Reserved</h3>
          </div>
        </div>
      </footer>
      {/* <div className="box">1</div>
      <div className="box">2</div>
      <div className="box">3</div>
      <div className="box">4</div>
      <div className="box">5</div> */}
      {/* <header className="sticky-header">
        <div className="sticky-components">
          <ul className="accessibility-links">
            <li className="language">
              <a href="#">Language</a>
            </li>
            <li className="currency">
              <a href="#">Currency</a>
            </li>
          </ul>
          <div className="logo">LOGO</div>
          <div className="btns">
            <button className="basket-btn">Basket</button>
            <button className="login-btn">Login</button>
          </div>
        </div>
      </header> */}
      {/* <div className="nav">
        <div className="nav-links">
          <li>
            <a href="#">Black</a>
          </li>
          <li>
            <a href="#">Blue</a>
          </li>
          <li>
            <a href="#">Red</a>
          </li>
          <li>
            <a href="#">Yellow</a>
          </li>
          <li>
            <a href="#">Pink</a>
          </li>
          <li>
            <a href="#">Purple</a>
          </li>
          <li>
            <a href="#">Grey</a>
          </li>
        </div>
      </div> */}
      {/* <div className="hero">
        <h1>DevShow - Share what you have built</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa asperiores deleniti esse ex
          iusto atque debitis recusandae iure aperiam incidunt?
        </p>
        <div>
          <Link route="posts.index" className="button">
            Browse posts created by others
          </Link>
        </div>
      </div> */}
    </div>
  )
}

// export default function Home() {
//   return (
//     <>
//       <div className="hero">
//         <h1>It works — welcome to the power of a full-stack React app</h1>
//         <p>
//           Powered by Inertia and React, this setup blends server-driven routing with rich
//           client-side interactivity — seamless, fast, and cohesive.
//         </p>
//       </div>

//       <div className="cards">
//         <a href="https://docs.adonisjs.com/introduction" target="_blank" rel="noreferrer">
//           <h3>Official Docs &nbsp;›</h3>
//           <p>Comprehensive reference for building with AdonisJS</p>
//         </a>

//         <a href="https://adocasts.com/" target="_blank" rel="noreferrer">
//           <h3>Adocasts &nbsp;›</h3>
//           <p>Guided video tutorials for everyday development</p>
//         </a>

//         <a href="https://discord.gg/vDcEjq6" target="_blank" rel="noreferrer">
//           <h3>Discord &nbsp;›</h3>
//           <p>Connect with developers building with AdonisJS every day</p>
//         </a>
//       </div>
//     </>
//   )
// }
