import { Github, Linkedin, Mail, Phone, Twitter, Instagram, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  // Static personal info data
  const personalInfo = {
    name: 'Shanid Sajjatuz Islam',
    email: 'shanidsajjatuz@gmail.com',
    phone: '+880 1518964878',
    githubUrl: 'https://github.com/perashanid',
    linkedinUrl: 'https://linkedin.com/in/shanidsajjatuz',
    resumeUrl: 'https://shanid-cv.vercel.app'
  };

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/perashanid',
      icon: Github,
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/shanidsajjatuz',
      icon: Linkedin,
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/perashanid',
      icon: Twitter,
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/perashanid',
      icon: Instagram,
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white dark:bg-medium-gray text-dark-charcoal dark:text-light-sage py-12 border-t-2 border-medium-gray/30 dark:border-warm-brown-light/30">
      <div className="container-max">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-4">{personalInfo.name}</h3>
            <p className="text-dark-charcoal/80 dark:text-light-sage/80 mb-4">
              Full Stack Developer passionate about creating innovative web solutions 
              and building scalable applications with modern technologies.
            </p>
            <p className="text-sm text-dark-charcoal/60 dark:text-light-sage/60">
              Available for freelance projects and collaborations.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail size={16} className="text-warm-brown dark:text-warm-brown-light" />
                <a 
                  href={`mailto:${personalInfo.email}`}
                  className="hover:text-warm-brown dark:hover:text-warm-brown-light transition-colors text-sm"
                >
                  {personalInfo.email}
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} className="text-warm-brown dark:text-warm-brown-light" />
                <a 
                  href={`tel:${personalInfo.phone}`}
                  className="hover:text-warm-brown dark:hover:text-warm-brown-light transition-colors text-sm"
                >
                  {personalInfo.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="space-y-3">
              <button
                onClick={scrollToTop}
                className="block hover:text-warm-brown dark:hover:text-warm-brown-light transition-colors text-left text-sm"
              >
                Back to Top
              </button>
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-warm-brown dark:hover:text-warm-brown-light transition-colors text-sm"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-dark-charcoal/20 dark:border-light-sage/20 pt-8">
          <div className="flex justify-center items-center">
            <p className="text-sm text-dark-charcoal/60 dark:text-light-sage/60">
              © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;