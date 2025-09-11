import { Instagram } from 'lucide-react';
import { SiTiktok } from 'react-icons/si';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const { t } = useTranslation();

  type FooterLink = { name: string; href: string; action?: undefined; } | { name: string; action: () => void; href?: undefined; };
  type FooterSection = { title: string; links: FooterLink[]; };

  const scrollToSection = (sectionId: string, specificHash?: string) => {
    const hashToUse = specificHash || sectionId;

    if (window.location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        window.location.hash = hashToUse;
      } else {
        window.location.hash = hashToUse;
      }
    } else {
      window.location.href = `/#${hashToUse}`;
    }
  };

  const footerSections: FooterSection[] = [];

  if (isHomePage) {
    footerSections.push({
      title: t('footer.prestations_title'),
      links: [
        { name: t('footer.residential_link'), action: () => scrollToSection('floor-types', 'residentiel') },
        { name: t('footer.commercial_link'), action: () => scrollToSection('floor-types', 'commercial') },
        { name: t('footer.industrial_link'), action: () => scrollToSection('floor-types', 'industriel') },
        { name: t('footer.finishes_link'), action: () => scrollToSection('finitions-types') }
      ]
    });
  }

  footerSections.push(
    {
      title: t('footer.informations_title'),
      links: [
        { name: t('footer.support_link'), href: '/support' },
        { name: t('footer.legal_mentions_link'), href: '/mentions-legales' },
        { name: t('footer.security_link'), href: '/securite' }
      ]
    },
    {
      title: t('footer.resources_title'),
      links: [
        { name: t('footer.blog_link'), href: '/blog' },
        { name: t('footer.guides_link'), href: '/guides' },
        { name: t('footer.advice_link'), href: '/conseils' },
        { name: t('footer.maintenance_link'), href: '/entretien' }
      ]
    }
  );

  return (
    <footer className="bg-gradient-to-b from-anthracite to-deep-black text-white py-16 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-elegant-gold/30"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Logo & Description */}
          <div className="md:col-span-1">
            <h1 className="font-unbounded text-2xl font-light text-white tracking-wide uppercase mb-2">
              Prestige <span className="text-elegant-gold">EPoxy</span><br />
            </h1>
            <p className="font-manrope text-cream/70 text-sm leading-relaxed mb-6">
              {t('footer.slogan')}
            </p>
            
            {/* Social Media */}
            <div className="flex items-center gap-3">
              {[SiTiktok, Instagram].map((Icon, index) => (
                <a 
                  key={index}
                  href={Icon === Instagram ? "https://www.instagram.com/prestigeepoxy.ca" : "https://www.tiktok.com/@prestigeepoxy.ca"} 
                  className="p-2 bg-anthracite/60 rounded-lg hover:bg-elegant-gold hover:text-deep-black transition-all duration-300"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            <p className="font-manrope text-cream/70 text-sm leading-relaxed mt-4">
              {t('footer.social_media')}
            </p>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="font-unbounded text-lg font-semibold mb-6 text-elegant-gold">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    {link.href ? (
                      <a 
                        href={link.href}
                        className="font-manrope text-cream/70 hover:text-elegant-gold transition-colors duration-300 text-sm"
                      >
                        {link.name}
                      </a>
                    ) : (
                      <button 
                        onClick={link.action}
                        className="font-manrope text-cream/70 hover:text-elegant-gold transition-colors duration-300 text-sm"
                      >
                        {link.name}
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-elegant-gold/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-manrope text-cream/60 text-sm">
            {t('footer.copyright')}
          </div>
          <div className="font-manrope text-cream/60 text-sm">
            {t('footer.designed_by')}{' '}
            <a 
              href="https://www.whybee.agency" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-elegant-gold hover:underline"
            >
              Whybee Agency
            </a>
            <img
              src="/logo/whybee_blc.png"
              alt="Whybee Agency Logo"
              className="h-5 ml-2 inline-block align-middle"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;