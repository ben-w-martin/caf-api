function Pill() {
  return (
    <>
      <div className="pill">
        <div className="pill__title">
          <h1 className="pill__title--name heading-primary">Benjamin Martin</h1>
        </div>
        <nav className="pill__list">
          <ul className="pill__list--ul">
            <li className="pill__list--item nav__item">
              <a
                href="https://www.linkedin.com/in/benjamin-martin-0aa3171b5/"
                target="_blank"
              >
                LinkedIn
              </a>
            </li>
            <li className="pill__list--item nav__item">
              <a href="https://github.com/ben-w-martin" target="_blank">
                GitHub
              </a>
            </li>
            <li className="pill__list--item nav__item btn__proj2">
              <a href="#about">About</a>
            </li>
          </ul>
          <div className="pill__bar">&nbsp;</div>
        </nav>
      </div>
      <div className="bar">
        <div className="bar__1">&nbsp;</div>
        <div className="bar__2">&nbsp;</div>
        <div className="bar__3">&nbsp;</div>
      </div>
    </>
  );
}

export { Pill };
