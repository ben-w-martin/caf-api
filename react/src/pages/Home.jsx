import { Pill } from "../components/Pill";
import { About } from "../components/About";

function Home() {
  return (
    <>
      <header className="header">
        <Pill />
      </header>
      <main className="main" id="main">
        <About></About>
        <div className="modal">&nbsp;</div>
      </main>
      <footer>
        <footer className="footer">
          <div className="contact">
            <a href="tel:+14345150846" className="contact__phone">
              434-515-0846
            </a>
            <a href="mailto:bwm17.resume@gmail.com" className="contact__email">
              bwm17.resume@gmail.com
            </a>
            <p className="contact__location">Lynchburg, Virginia</p>
          </div>
        </footer>
      </footer>
    </>
  );
}

export { Home };
