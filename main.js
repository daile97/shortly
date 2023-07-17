import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <header>
      <h1>
        <img src="./public/logo.svg" alt="logo" />
      </h1>
      <nav>
        <ul>
          <li>
            <a href="#">Features</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">Resources</a>
          </li>
        </ul>
      </nav>
      <div>
        <button>Login</button>
        <button>Sign Up</button>
      </div>
    </header>
    <section>
      <div>
        <h2>More than just shorter links</h2>
        <p>Build your brand's recognition and get detailed insights on how your links are performing.</p>
        <button>Get Started</button>
      <div>
      <div>
        <img src="./public/illustration-working.svg" alt="working person" />
      </div>
    </section>
    <section>
      <div>
        <h2>Advanced Statistics</h2>
        <p>Track how your links are performing across the web with our advanced statistics dashboard.</p>
      </div>
      <div>
        <div>
          <h3>Brand Recognition</h3>
          <p>Boost your brand regconigtion with each click. Generic links don't meand a thing. Branded links help instil confidence in your content.</p>
        </div>
        <div>
          <h3> Detailed Records</h3>
          <p>Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</p>
        </div>
        <div>
          <h3> Fully Customizable</h3>
          <p>Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</p>
        </div>
      </div>
    </section>
    <section>
      <h2>Boost your links today</h2>
      <button>Get Started</button>
    </section>
    <footer>
      <div>
        <h1>Shortly</h1>
      </div>
      <div></div>
      <div>
        <img alt="facebook" />
        <img alt="twitter" />
        <img alt="pinterest" />
        <img alt="instagram" />
      </div>
    </footer>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))
