import { footerLinks } from "../constants";

const Footer = () => {
  return (
    <footer>
      <div className="info">
        <p>
          Mais jeito de compar: Vá a uma Apple Store ou outro vendedor perto de
          você. Ou ligue 000800 040 1966.
        </p>
        <img src="/logo.svg" alt="Apple logo mr-4" />
      </div>

      <hr />

      <div className="links">
        <p>
          © {new Date().getFullYear()} Eliseu Costa. Todos os direitos
          reservados.
        </p>

        <ul>
          {footerLinks.map(({ label, link }) => (
            <li key={label}>
              <a href={link}>{label}</a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
