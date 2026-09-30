import { Link } from '@adonisjs/inertia/react'

export default function Home() {
  return (
    <div>
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
        </ul>
      </nav>
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
