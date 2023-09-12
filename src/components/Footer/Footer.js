// импорты
import { footerLinks, footerText } from '../../utils/constants';

// импорт стилей
import './Footer.css';

// компонет футера /////////////////////////////////////////////
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <h6 className="footer__heading">{footerText.heading}</h6>
        <div className="footer__lower-part">
          <p className="footer__year">&copy; {footerText.year}</p>
          <ul className="footer__links">
            {footerLinks.map((item, index) => (
              <li key={index} className="footer__list-item">
                <a
                  href={item.link}
                  className="footer__link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.heading}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

// экспорт //////////////////////////////////////////////////////
export default Footer;
