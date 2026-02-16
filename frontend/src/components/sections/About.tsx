

// Demo personal info data
const personalInfo = {
  id: 1,
  name: 'Shanid Sajjatuz Islam',
  title: 'Full Stack Developer',
  bio: 'Passionate software developer with 5+ years of experience building modern web applications using Node.js, React, and cloud technologies.',
  detailedBio: 'I am a dedicated full-stack developer with over 5 years of experience in creating robust, scalable web applications. My expertise spans across backend development with Node.js and Express, frontend development with React and TypeScript, and cloud deployment with modern platforms. I have a strong passion for clean code, test-driven development, and continuous learning. Throughout my career, I have successfully delivered multiple projects from conception to deployment, working both independently and as part of agile teams.',
  email: 'shanidsajjatuz@gmail.com',
  phone: '+880 1518964878',
  linkedinUrl: 'https://linkedin.com/in/shanidsajjatuz',
  githubUrl: 'https://github.com/perashanid',
  resumeUrl: 'https://shanid-cv.vercel.app',
  profileImageUrl: '/profile.jpg'
};

const About: React.FC = () => {

  return (
    <section id="about" className="section-padding bg-white dark:bg-medium-gray">
      <div className="container-max">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark-charcoal dark:text-light-sage">About Me</h2>
            <div className="w-20 h-1 bg-warm-brown dark:bg-warm-brown-light mx-auto"></div>
          </div>

          {/* Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-dark-charcoal dark:text-light-sage">
                  {personalInfo.title}
                </h3>
                <p className="text-medium-gray dark:text-light-sage/80 leading-relaxed">
                  {personalInfo.detailedBio}
                </p>
              </div>

              {/* Contact Information */}
              <div className="space-y-3">
                <div className="flex items-center">
                  <span className="font-medium text-dark-charcoal dark:text-light-sage w-20">Email:</span>
                  <a 
                    href={`mailto:${personalInfo.email}`}
                    className="text-warm-brown dark:text-warm-brown-light hover:text-warm-brown/80 dark:hover:text-warm-brown-light/80 transition-colors"
                  >
                    {personalInfo.email}
                  </a>
                </div>
                
                <div className="flex items-center">
                  <span className="font-medium text-dark-charcoal dark:text-light-sage w-20">Phone:</span>
                  <a 
                    href={`tel:${personalInfo.phone}`}
                    className="text-warm-brown dark:text-warm-brown-light hover:text-warm-brown/80 dark:hover:text-warm-brown-light/80 transition-colors"
                  >
                    {personalInfo.phone}
                  </a>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button
                  onClick={() => document.getElementById('technologies')?.scrollIntoView({ behavior: 'smooth' })}
                  className="btn-primary"
                >
                  View My Skills
                </button>
                
                <a
                  href={personalInfo.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary text-center"
                >
                  Download Resume
                </a>
              </div>
            </div>

            {/* Image or Visual Element */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <img
                  src={personalInfo.profileImageUrl}
                  alt={personalInfo.name}
                  className="w-80 h-80 rounded-lg shadow-lg object-cover"
                />
                <div className="absolute inset-0 bg-warm-brown/20 rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;