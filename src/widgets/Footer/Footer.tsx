import { Link } from "react-router-dom";
import { GiConsoleController, GiHearts } from "react-icons/gi";
import {
  BsTwitterX as x,
  BsYoutube as youtube,
  BsDiscord as discord,
  BsInstagram as instagram,
} from "react-icons/bs";

const socialLinks = [
  { icon: discord, href: "#", label: "Discord" },
  { icon: x, href: "#", label: "Twitter" },
  { icon: youtube, href: "#", label: "YouTube" },
  { icon: instagram, href: "#", label: "Instagram" },
];

const footerLinks = {
  game: [
    { label: "How to Play", href: "#" },
    { label: "Characters", href: "#characters" },
    { label: "Biomes", href: "#biomes" },
    { label: "Roadmap", href: "#roadmap" },
  ],
  support: [
    { label: "FAQ", href: "#" },
    { label: "Contact Us", href: "#" },
    { label: "Bug Report", href: "#" },
    { label: "Feedback", href: "#" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="footer bg-purple-dark border-t border-base-content/10">
      {/* Main Footer */}
      <div className="container mx-auto px-6! lg:px-40! py-16!">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-6!">
            <Link to="/" className="flex items-center gap-3">
              <GiConsoleController className="text-primary text-3xl" />
              <h2 className="text-base-conborder-base-content text-2xl font-black leading-tight tracking-tighter uppercase italic">
                Aether Realms
              </h2>
            </Link>
            <p className="text-base-content/40 text-sm leading-relaxed">
              Experience the ultimate VR tabletop strategy game where magic
              meets legend. Command the board from above in immersive arcane
              environments.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => {
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 rounded-full bg-base-conborder-base-content/5 flex items-center justify-center hover:bg-primary transition-colors group"
                    aria-label={social.label}
                  >
                    <social.icon
                      name={social.label}
                      className="text-base-content border-base-content/80 group-hover:text-base-content hover:border-base-content transition-colors"
                    />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Game Links */}
          <div className="space-y-4!">
            <h4 className="text-base-conborder-base-content font-black uppercase tracking-widest text-sm">
              Game
            </h4>
            <ul className="space-y-2!">
              {footerLinks.game.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-base-content/40 hover:text-primary text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div className="space-y-4!">
            <h4 className="text-base-conborder-base-content font-black uppercase tracking-widest text-sm">
              Support
            </h4>
            <ul className="space-y-2!">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-base-content/40 hover:text-primary text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div className="space-y-4!">
            <h4 className="text-base-conborder-base-content font-black uppercase tracking-widest text-sm">
              Legal
            </h4>
            <ul className="space-y-2!">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-base-content/40 hover:text-primary text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-base-content/10">
        <div className="container mx-auto! px-6! lg:px-40! py-6!">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-base-content/70 text-sm">
              &copy; 2026 Aether Realms. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <span className="text-base-content/70 text-sm">Made with</span>
              <GiHearts name="favorite" className="text-primary text-sm" />
              <span className="text-base-content/70 text-sm">for VR enthusiasts</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
