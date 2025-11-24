import { ChevronDown, Download, Github, Linkedin, Twitter, Mail, Users, MessageCircle } from 'lucide-react';

// Demo personal info data
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
    resumeUrl: 'https://shanid-cv.vercel.app',
    profileImageUrl: '/profile.jpg'
};

const Hero: React.FC = () => {
    const scrollToAbout = () => {
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const socialLinks = [
        {
            icon: Github,
            url: personalInfo.githubUrl,
            label: 'GitHub',
            color: 'hover:text-gray-900 dark:hover:text-white'
        },
        {
            icon: Linkedin,
            url: personalInfo.linkedinUrl,
            label: 'LinkedIn',
            color: 'hover:text-blue-600'
        },
        {
            icon: Mail,
            url: `mailto:${personalInfo.email}`,
            label: 'Email',
            color: 'hover:text-red-600'
        },
        {
            icon: Twitter,
            url: 'https://twitter.com/shanidsajjatuz',
            label: 'Twitter',
            color: 'hover:text-blue-400'
        }
    ];

    return (
        <section id="hero" className="min-h-screen flex items-center justify-center bg-light-sage dark:bg-dark-charcoal relative">
            <div className="container-max section-padding text-center">
                <div className="animate-fade-in">
                    {/* Profile Image with Active Status */}
                    <div className="mb-8 animate-slide-up relative inline-block">
                        <img
                            src={personalInfo.profileImageUrl}
                            alt={personalInfo.name}
                            className="w-32 h-32 rounded-full mx-auto shadow-xl object-cover border-4 border-white dark:border-medium-gray"
                        />
                        {/* Active Status Indicator */}
                        <div className="absolute bottom-2 right-2 w-6 h-6 bg-green-500 rounded-full border-3 border-white dark:border-medium-gray flex items-center justify-center">
                            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-slide-up animation-delay-200 text-dark-charcoal dark:text-light-sage">
                            Hi, I'm{' '}
                            <span className="text-warm-brown dark:text-warm-brown-light">
                                {personalInfo.name}
                            </span>
                        </h1>

                        <h2 className="text-xl md:text-2xl text-medium-gray dark:text-light-sage/80 mb-4 animate-slide-up animation-delay-400">
                            {personalInfo.title}
                        </h2>

                        {/* Active Status Badge */}
                        <div className="flex items-center justify-center gap-2 mb-6 animate-slide-up animation-delay-500">
                            <div className="flex items-center gap-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                Available for work
                            </div>
                            <div className="flex items-center gap-2 bg-warm-brown/10 dark:bg-warm-brown-light/20 text-warm-brown dark:text-warm-brown-light px-3 py-1 rounded-full text-sm font-medium">
                                <Users size={14} />
                                Open to collaborate
                            </div>
                        </div>

                        <p className="text-lg text-dark-charcoal/80 dark:text-light-sage/80 mb-8 max-w-2xl mx-auto animate-slide-up animation-delay-600">
                            {personalInfo.bio}
                        </p>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 animate-slide-up animation-delay-600">
                            <button
                                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                                className="btn-primary px-8 py-3 text-lg flex items-center gap-2"
                            >
                                <MessageCircle size={20} />
                                Let's Chat
                            </button>

                            <button
                                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                                className="bg-warm-brown dark:bg-warm-brown-light hover:bg-warm-brown/90 dark:hover:bg-warm-brown-light/90 text-light-sage dark:text-dark-charcoal px-8 py-3 text-lg rounded-lg font-medium transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2"
                            >
                                <Users size={20} />
                                Open to Collaborate
                            </button>

                            <a
                                href={personalInfo.resumeUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-secondary px-8 py-3 text-lg flex items-center gap-2"
                            >
                                <Download size={20} />
                                Resume
                            </a>
                        </div>

                        {/* Social Links */}
                        <div className="flex justify-center space-x-6 mb-12 animate-slide-up animation-delay-600">
                            {socialLinks.map((social, index) => {
                                const Icon = social.icon;
                                return (
                                    <a
                                        key={index}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`text-medium-gray dark:text-light-sage/70 ${social.color} transition-colors duration-200 p-2 rounded-lg hover:bg-white/20 dark:hover:bg-medium-gray/50`}
                                        aria-label={social.label}
                                    >
                                        <Icon size={28} />
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <button
                    onClick={scrollToAbout}
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow"
                >
                    <ChevronDown size={32} className="text-medium-gray dark:text-light-sage/70" />
                </button>
            </div>
        </section>
    );
};

export default Hero;