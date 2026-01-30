import { Mail, Phone, MapPin, Github, Linkedin, Facebook, Twitter } from 'lucide-react';
import ContactForm from '../ui/ContactForm';

const Contact: React.FC = () => {
  // Static personal info data
  const personalInfo = {
    id: 1,
    name: 'Shanid Sajjatuz Islam',
    title: 'Full Stack Developer',
    bio: 'Passionate software developer with 5+ years of experience building modern web applications using Node.js, React, and cloud technologies.',
    detailedBio: 'I am a dedicated full-stack developer with over 5 years of experience in creating robust, scalable web applications.',
    email: 'shanidsajjatuz@gmail.com',
    phone: '+880 1234-567890',
    linkedinUrl: 'https://linkedin.com/in/shanidsajjatuz',
    githubUrl: 'https://github.com/perashanid',
    facebookUrl: 'https://www.facebook.com/shanidsajjatuz.islamrabid/',
    twitterUrl: 'https://x.com/perashanid',
    resumeUrl: 'https://shanid-cv.vercel.app',
    profileImageUrl: 'https://ui-avatars.com/api/?name=Shanid+Sajjatuz+Islam&size=400&background=715A5A&color=D3DAD9&bold=true'
  };

  return (
    <section id="contact" className="section-padding bg-light-sage dark:bg-dark-charcoal">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark-charcoal dark:text-light-sage">Get In Touch</h2>
          <div className="w-20 h-1 bg-warm-brown dark:bg-warm-brown-light mx-auto mb-8"></div>
          <p className="text-medium-gray dark:text-light-sage/80 max-w-2xl mx-auto">
            Have a project in mind or just want to chat? I'd love to hear from you. 
            Send me a message and I'll respond as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-dark-charcoal dark:text-light-sage">Let's Connect</h3>
              <p className="text-medium-gray dark:text-light-sage/80 mb-8">
                I'm always interested in new opportunities, collaborations, and interesting projects. 
                Whether you have a question about my work or want to discuss a potential project, 
                feel free to reach out.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-warm-brown/20 dark:bg-warm-brown-light/30 rounded-lg flex items-center justify-center">
                  <Mail className="text-warm-brown dark:text-warm-brown-light" size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-dark-charcoal dark:text-light-sage">Email</h4>
                  <a 
                    href={`mailto:${personalInfo.email}`}
                    className="text-warm-brown dark:text-warm-brown-light hover:text-warm-brown/80 dark:hover:text-warm-brown-light/80 transition-colors"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-warm-brown/20 dark:bg-warm-brown-light/30 rounded-lg flex items-center justify-center">
                  <Phone className="text-warm-brown dark:text-warm-brown-light" size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-dark-charcoal dark:text-light-sage">Phone</h4>
                  <a 
                    href={`tel:${personalInfo.phone}`}
                    className="text-warm-brown dark:text-warm-brown-light hover:text-warm-brown/80 dark:hover:text-warm-brown-light/80 transition-colors"
                  >
                    {personalInfo.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-warm-brown/20 dark:bg-warm-brown-light/30 rounded-lg flex items-center justify-center">
                  <MapPin className="text-warm-brown dark:text-warm-brown-light" size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-dark-charcoal dark:text-light-sage">Location</h4>
                  <p className="text-medium-gray dark:text-light-sage/80">Available for remote work</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-medium text-dark-charcoal dark:text-light-sage mb-4">Follow Me</h4>
              <div className="flex gap-6">
                <a
                  href={personalInfo.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-medium-gray dark:text-light-sage/70 hover:text-dark-charcoal dark:hover:text-light-sage transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={32} />
                </a>
                <a
                  href={personalInfo.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-medium-gray dark:text-light-sage/70 hover:text-dark-charcoal dark:hover:text-light-sage transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={32} />
                </a>
                <a
                  href={personalInfo.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-medium-gray dark:text-light-sage/70 hover:text-dark-charcoal dark:hover:text-light-sage transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook size={32} />
                </a>
                <a
                  href={personalInfo.twitterUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-medium-gray dark:text-light-sage/70 hover:text-dark-charcoal dark:hover:text-light-sage transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter size={32} />
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-medium-gray dark:text-light-sage/70 hover:text-dark-charcoal dark:hover:text-light-sage transition-colors"
                  aria-label="Email"
                >
                  <Mail size={32} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white dark:bg-medium-gray rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-semibold mb-6 text-dark-charcoal dark:text-light-sage">Send a Message</h3>
            <ContactForm />
          </div>
        </div>

        {/* Additional CTA */}
        <div className="mt-16 text-center">
          <div className="bg-warm-brown dark:bg-warm-brown-light rounded-lg p-8 text-light-sage dark:text-dark-charcoal">
            <h3 className="text-2xl font-semibold mb-4">Ready to Start a Project?</h3>
            <p className="mb-6 opacity-90">
              Let's discuss how we can bring your ideas to life with modern web technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`mailto:${personalInfo.email}`}
                className="bg-light-sage text-dark-charcoal px-6 py-3 rounded-lg font-medium hover:bg-light-sage/90 transition-colors"
              >
                Send Email
              </a>
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-light-sage text-light-sage px-6 py-3 rounded-lg font-medium hover:bg-light-sage hover:text-dark-charcoal transition-colors"
              >
                View Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;