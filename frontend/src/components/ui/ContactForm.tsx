import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate form submission - in a real app, this would send to a backend or email service
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // For demo purposes, always show success
      console.log('Form submitted:', data);
      setSubmitStatus('success');
      setStatusMessage('Thank you for your message! I\'ll get back to you soon.');
      reset();
    } catch (error) {
      setSubmitStatus('error');
      setStatusMessage('Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
      
      // Clear status message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
        setStatusMessage('');
      }, 5000);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Status Message */}
      {submitStatus !== 'idle' && (
        <div className={`p-4 rounded-lg flex items-center gap-3 ${
          submitStatus === 'success' 
            ? 'bg-green-50 dark:bg-green-900/30 text-green-800 dark:text-green-300 border border-green-200 dark:border-green-700' 
            : 'bg-red-50 dark:bg-red-900/30 text-red-800 dark:text-red-300 border border-red-200 dark:border-red-700'
        }`}>
          {submitStatus === 'success' ? (
            <CheckCircle size={20} />
          ) : (
            <AlertCircle size={20} />
          )}
          <span>{statusMessage}</span>
        </div>
      )}

      {/* Name and Email Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-dark-charcoal dark:text-light-sage mb-2">
            Name *
          </label>
          <input
            type="text"
            id="name"
            {...register('name', { 
              required: 'Name is required',
              minLength: { value: 2, message: 'Name must be at least 2 characters' }
            })}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-warm-brown focus:border-warm-brown transition-colors bg-white dark:bg-dark-charcoal text-dark-charcoal dark:text-light-sage placeholder-medium-gray dark:placeholder-light-sage/60 ${
              errors.name ? 'border-red-500' : 'border-medium-gray/30 dark:border-light-sage/30'
            }`}
            placeholder="Your full name"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-dark-charcoal dark:text-light-sage mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            {...register('email', { 
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address'
              }
            })}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-warm-brown focus:border-warm-brown transition-colors bg-white dark:bg-dark-charcoal text-dark-charcoal dark:text-light-sage placeholder-medium-gray dark:placeholder-light-sage/60 ${
              errors.email ? 'border-red-500' : 'border-medium-gray/30 dark:border-light-sage/30'
            }`}
            placeholder="your.email@example.com"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>
      </div>

      {/* Subject */}
      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-dark-charcoal dark:text-light-sage mb-2">
          Subject *
        </label>
        <input
          type="text"
          id="subject"
          {...register('subject', { 
            required: 'Subject is required',
            minLength: { value: 5, message: 'Subject must be at least 5 characters' }
          })}
          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-warm-brown focus:border-warm-brown transition-colors bg-white dark:bg-dark-charcoal text-dark-charcoal dark:text-light-sage placeholder-medium-gray dark:placeholder-light-sage/60 ${
            errors.subject ? 'border-red-500' : 'border-medium-gray/30 dark:border-light-sage/30'
          }`}
          placeholder="What's this about?"
        />
        {errors.subject && (
          <p className="mt-1 text-sm text-red-600">{errors.subject.message}</p>
        )}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-dark-charcoal dark:text-light-sage mb-2">
          Message *
        </label>
        <textarea
          id="message"
          rows={6}
          {...register('message', { 
            required: 'Message is required',
            minLength: { value: 10, message: 'Message must be at least 10 characters' }
          })}
          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-warm-brown focus:border-warm-brown transition-colors resize-vertical bg-white dark:bg-dark-charcoal text-dark-charcoal dark:text-light-sage placeholder-medium-gray dark:placeholder-light-sage/60 ${
            errors.message ? 'border-red-500' : 'border-medium-gray/30 dark:border-light-sage/30'
          }`}
          placeholder="Tell me about your project, question, or just say hello!"
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium transition-colors ${
            isSubmitting
              ? 'bg-medium-gray cursor-not-allowed text-light-sage/60'
              : 'bg-warm-brown hover:bg-warm-brown/80 text-light-sage'
          }`}
        >
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              Sending...
            </>
          ) : (
            <>
              <Send size={20} />
              Send Message
            </>
          )}
        </button>
      </div>

      <p className="text-sm text-medium-gray dark:text-light-sage/70 text-center">
        I'll get back to you as soon as possible, usually within 24 hours.
      </p>
    </form>
  );
};

export default ContactForm;