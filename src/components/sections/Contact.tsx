// src/components/sections/Contact.tsx
import React, { useState, useEffect, useRef } from 'react';
import {
  Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, User, Building,
  MessageSquare, Clock, ExternalLink, Globe, Zap
} from 'lucide-react';
import emailjs from '@emailjs/browser';
import type { Language, FormData } from '../../types';
import { translations } from '../../i18n/translations';

interface ContactProps {
  currentLang: Language;
  isDark: boolean;
}

// EmailJS konfiqurasiyası - ÖZ MƏLUMATLARINALa əvəz et
const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_r65djw2',      // EmailJS-dən al
  TEMPLATE_ID: 'template_gg0ybw8',    // EmailJS-dən al  
  PUBLIC_KEY: 'UJyfqJulVUSy4mn-s'       // EmailJS-dən al
};

export const Contact: React.FC<ContactProps> = ({ currentLang, isDark }) => {
  const formRef = useRef<HTMLFormElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  const t = translations[currentLang];

  // Mouse tracking for 3D effects (same as Hero)
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / 30,
        y: (e.clientY - window.innerHeight / 2) / 30,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Visibility observer for box animations - REPEATABLE
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          // Reset animation when scrolling away
          setIsVisible(false);
        }
      },
      {
        threshold: 0.2,
        rootMargin: '-10% 0px -10% 0px' // More sensitive detection
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Floating IT icons
  const floatingIcons = [
    { icon: Mail, size: 'w-5 h-5', position: 'top-20 left-16', delay: '0s', color: 'text-zinc-400' },
    { icon: Phone, size: 'w-4 h-4', position: 'top-32 right-20', delay: '1.5s', color: 'text-zinc-400' },
    { icon: MapPin, size: 'w-5 h-5', position: 'bottom-32 left-20', delay: '2s', color: 'text-zinc-400' },
    { icon: Zap, size: 'w-4 h-4', position: 'bottom-48 right-32', delay: '0.8s', color: 'text-zinc-400' },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    // Validation
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // EmailJS ilə email göndər - templateParams istifadə et
      const templateParams = {
        user_name: formData.name,
        user_email: formData.email,
        user_phone: formData.phone || 'Qeyd edilməyib',
        user_company: formData.company || 'Qeyd edilməyib',
        message: formData.message,
        email: 'hello@aliscore.com', // Vizit kartdakı email
        reply_to: formData.email
      };

      console.log('Sending email with params:', templateParams);

      const result = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      console.log('Email sent successfully:', result.text);
      setSubmitStatus('success');

      // Formu təmizlə
      setFormData({ name: '', email: '', phone: '', company: '', message: '' });

      // 5 saniyə sonra success mesajını gizlət
      setTimeout(() => setSubmitStatus('idle'), 5000);

    } catch (error) {
      console.error('Email send failed:', error);
      setSubmitStatus('error');

      // 5 saniyə sonra error mesajını gizlət
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      label: currentLang === 'en' ? 'Phone' : currentLang === 'az' ? 'Telefon' : 'Teléfono',
      value: '+1 (571) 315-9611',
      href: 'tel:+15713159611',
      color: 'from-zinc-500 to-zinc-600',
      animationClass: 'animate-slide-in-right'
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'hello@aliscore.com',
      href: 'mailto:hello@aliscore.com',
      color: 'from-zinc-500 to-zinc-600',
      animationClass: 'animate-scale-in'
    },
    {
      icon: MapPin,
      label: currentLang === 'en' ? 'Address' : currentLang === 'az' ? 'Ünvan' : 'Dirección',
      value: 'Fairfax, VA 20171',
      href: 'https://maps.google.com/?q=Fairfax,VA,20171',
      color: 'from-zinc-500 to-zinc-600',
      animationClass: 'animate-bounce-in'
    }
  ];



  return (
    <section
      ref={sectionRef}
      id="contact"
      className="min-h-screen py-20 relative overflow-hidden"
    >


      {/* Background - Portfolio-nun əksi (mirror) */}
      <div className="absolute inset-0">
        <div className={`absolute inset-0 ${isDark
            ? 'bg-gradient-to-bl from-gray-900 via-zinc-900/20 to-zinc-900/10'
            : 'bg-gradient-to-bl from-zinc-50 via-white to-zinc-50'
          }`} />

        {/* Floating background orbs */}
        <div
          className={`absolute w-64 h-64 rounded-full blur-3xl opacity-20 ${isDark ? 'bg-zinc-500' : 'bg-zinc-300'
            }`}
          style={{
            top: '20%',
            right: '10%',
            transform: `translate(${-mousePosition.x}px, ${mousePosition.y}px)`,
          }}
        />
        <div
          className={`absolute w-48 h-48 rounded-full blur-3xl opacity-15 ${isDark ? 'bg-zinc-500' : 'bg-zinc-300'
            }`}
          style={{
            bottom: '20%',
            left: '15%',
            transform: `translate(${mousePosition.x}px, ${-mousePosition.y}px)`,
          }}
        />

        {/* Floating IT Icons */}
        {floatingIcons.map((item, index) => (
          <div
            key={index}
            className={`absolute ${item.position} opacity-30 pointer-events-none hidden lg:block`}
            style={{
              animationDelay: item.delay,
              animation: 'float 6s ease-in-out infinite'
            }}
          >
            <item.icon className={`${item.size} ${item.color} drop-shadow-lg`} />
          </div>
        ))}

        {/* Mobile floating icons */}
        <div className="lg:hidden">
          <div className="absolute top-20 right-8 opacity-20 animate-pulse">
            <Mail className="w-5 h-5 text-zinc-400" />
          </div>
          <div className="absolute bottom-32 left-8 opacity-20 animate-pulse" style={{ animationDelay: '1s' }}>
            <Phone className="w-5 h-5 text-zinc-400" />
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'
            } ${isVisible ? 'animate-fade-in-up animate-with-delay-1' : 'animation-reset'}`}>
            <span className="text-gradient-animated">
              {t.contact.title}
            </span>
          </h2>
          <p className={`text-lg sm:text-xl md:text-2xl font-medium text-gradient-blue-green mb-6 ${isVisible ? 'animate-fade-in-up animate-with-delay-2' : 'animation-reset'
            }`}>
            {t.contact.subtitle}
          </p>
          <div className={`w-24 h-1 bg-gradient-to-r from-zinc-600 to-zinc-600 mx-auto rounded-full ${isVisible ? 'animate-scale-in animate-with-delay-3' : 'animation-reset'
            }`} />
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Form - Animated */}
          <div className={`p-6 lg:p-8 rounded-2xl ${isDark
              ? 'glass-effect-dark border border-gray-700/50'
              : 'glass-effect border border-white/20 shadow-lg'
            } ${isVisible ? 'animate-slide-in-left animate-with-delay-4' : 'animation-reset'}`}>
            <div className="mb-6">
              <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'
                }`}>
                {currentLang === 'en' ? 'Write to Us' : currentLang === 'az' ? 'Bizə Yazın' : 'Escríbenos'}
              </h3>
              <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                {currentLang === 'en' ? 'We will contact you soon' : currentLang === 'az' ? 'Tezliklə əlaqə saxlayacağıq' : 'Te contactaremos pronto'}
              </p>
            </div>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              {/* Name & Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="relative">
                  <label className={`block text-xs font-medium mb-1 ${isDark ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                    {t.contact.form.name} *
                  </label>
                  <div className="relative">
                    <User className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 ${focusedField === 'name'
                        ? 'text-zinc-500'
                        : isDark ? 'text-gray-400' : 'text-gray-500'
                      }`} />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      required
                      disabled={isSubmitting}
                      className={`w-full pl-10 pr-3 py-3 rounded-lg border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-zinc-500/20 focus:border-zinc-500 ${isDark
                          ? 'bg-gray-800/50 border-gray-600 text-white placeholder-gray-400'
                          : 'bg-white/70 border-gray-300 text-gray-900 placeholder-gray-500'
                        }`}
                      placeholder={currentLang === 'en' ? 'Your name' : currentLang === 'az' ? 'Adınız' : 'Tu nombre'}
                    />
                  </div>
                </div>

                <div className="relative">
                  <label className={`block text-xs font-medium mb-1 ${isDark ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                    {t.contact.form.email} *
                  </label>
                  <div className="relative">
                    <Mail className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 ${focusedField === 'email'
                        ? 'text-zinc-500'
                        : isDark ? 'text-gray-400' : 'text-gray-500'
                      }`} />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      required
                      disabled={isSubmitting}
                      className={`w-full pl-10 pr-3 py-3 rounded-lg border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-zinc-500/20 focus:border-zinc-500 ${isDark
                          ? 'bg-gray-800/50 border-gray-600 text-white placeholder-gray-400'
                          : 'bg-white/70 border-gray-300 text-gray-900 placeholder-gray-500'
                        }`}
                      placeholder="Email"
                    />
                  </div>
                </div>
              </div>

              {/* Phone & Company Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="relative">
                  <label className={`block text-xs font-medium mb-1 ${isDark ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                    {t.contact.form.phone}
                  </label>
                  <div className="relative">
                    <Phone className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 ${focusedField === 'phone'
                        ? 'text-zinc-500'
                        : isDark ? 'text-gray-400' : 'text-gray-500'
                      }`} />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('phone')}
                      onBlur={() => setFocusedField(null)}
                      disabled={isSubmitting}
                      className={`w-full pl-10 pr-3 py-3 rounded-lg border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-zinc-500/20 focus:border-zinc-500 ${isDark
                          ? 'bg-gray-800/50 border-gray-600 text-white placeholder-gray-400'
                          : 'bg-white/70 border-gray-300 text-gray-900 placeholder-gray-500'
                        }`}
                      placeholder={currentLang === 'en' ? 'Phone' : currentLang === 'az' ? 'Telefon' : 'Teléfono'}
                    />
                  </div>
                </div>

                <div className="relative">
                  <label className={`block text-xs font-medium mb-1 ${isDark ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                    {t.contact.form.company}
                  </label>
                  <div className="relative">
                    <Building className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 ${focusedField === 'company'
                        ? 'text-zinc-500'
                        : isDark ? 'text-gray-400' : 'text-gray-500'
                      }`} />
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('company')}
                      onBlur={() => setFocusedField(null)}
                      disabled={isSubmitting}
                      className={`w-full pl-10 pr-3 py-3 rounded-lg border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-zinc-500/20 focus:border-zinc-500 ${isDark
                          ? 'bg-gray-800/50 border-gray-600 text-white placeholder-gray-400'
                          : 'bg-white/70 border-gray-300 text-gray-900 placeholder-gray-500'
                        }`}
                      placeholder={currentLang === 'en' ? 'Company' : currentLang === 'az' ? 'Şirkət' : 'Empresa'}
                    />
                  </div>
                </div>
              </div>

              {/* Message */}
              <div className="relative">
                <label className={`block text-xs font-medium mb-1 ${isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                  {t.contact.form.message} *
                </label>
                <div className="relative">
                  <MessageSquare className={`absolute left-3 top-3 w-4 h-4 ${focusedField === 'message'
                      ? 'text-zinc-500'
                      : isDark ? 'text-gray-400' : 'text-gray-500'
                    }`} />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    required
                    rows={4}
                    disabled={isSubmitting}
                    className={`w-full pl-10 pr-3 py-3 rounded-lg border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-zinc-500/20 focus:border-zinc-500 resize-none ${isDark
                        ? 'bg-gray-800/50 border-gray-600 text-white placeholder-gray-400'
                        : 'bg-white/70 border-gray-300 text-gray-900 placeholder-gray-500'
                      }`}
                    placeholder={currentLang === 'en' ? 'Your message...' : currentLang === 'az' ? 'Mesajınız...' : 'Tu mensaje...'}
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full btn-modern flex items-center justify-center space-x-2 py-3 px-4 rounded-lg font-semibold text-white transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>{t.contact.form.sending}</span>
                  </>
                ) : (
                  <>
                    <span>{t.contact.form.send}</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="flex items-center space-x-2 p-3 bg-zinc-100 border border-zinc-200 rounded-lg text-zinc-800">
                  <CheckCircle className="w-5 h-5" />
                  <div>
                    <p className="font-medium text-sm">{t.contact.form.success}</p>
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="flex items-center space-x-2 p-3 bg-zinc-100 border border-zinc-200 rounded-lg text-zinc-800">
                  <AlertCircle className="w-5 h-5" />
                  <div>
                    <p className="font-medium text-sm">{t.contact.form.error}</p>
                  </div>
                </div>
              )}
            </form>
          </div>

          {/* Contact Information - Animated */}
          <div className="space-y-6">
            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  className={`card-3d-lift block group p-4 rounded-xl transition-all duration-300 hover:scale-105 ${isDark
                      ? 'glass-effect-dark border border-gray-700/50'
                      : 'glass-effect border border-white/20 shadow-lg'
                    } ${isVisible ? `${info.animationClass} animate-with-delay-${index + 5}` : 'animation-reset'}`}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${info.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className={`font-bold mb-1 ${isDark ? 'text-white' : 'text-gray-900'
                        }`}>
                        {info.label}
                      </h3>
                      <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'
                        }`}>
                        {info.value}
                      </p>
                    </div>
                    <ExternalLink className={`w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-300 ${isDark ? 'text-gray-400' : 'text-gray-500'
                      }`} />
                  </div>
                </a>
              ))}
            </div>

            {/* Business Hours Compact - Animated */}
            <div className={`p-4 rounded-xl ${isDark
                ? 'glass-effect-dark border border-gray-700/50'
                : 'glass-effect border border-white/20 shadow-lg'
              } ${isVisible ? 'animate-slide-in-bottom animate-with-delay-8' : 'animation-reset'}`}>
              <div className="flex items-center mb-3">
                <Clock className={`w-5 h-5 mr-2 ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`} />
                <h3 className={`font-bold ${isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                  {currentLang === 'en' ? 'Business Hours' : currentLang === 'az' ? 'İş Saatları' : 'Horario de Trabajo'}
                </h3>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className={isDark ? 'text-gray-300' : 'text-gray-600'}>
                    {currentLang === 'en' ? 'Mon - Fri' : currentLang === 'az' ? 'B.e - Cümə' : 'Lun - Vie'}
                  </span>
                  <span className={isDark ? 'text-white' : 'text-gray-900'}>09:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span className={isDark ? 'text-gray-300' : 'text-gray-600'}>
                    {currentLang === 'en' ? 'Saturday' : currentLang === 'az' ? 'Şənbə' : 'Sábado'}
                  </span>
                  <span className={isDark ? 'text-white' : 'text-gray-900'}>09:00 - 14:00</span>
                </div>
              </div>
            </div>

            {/* Quick Contact CTA - Animated */}
            <div className={`p-4 rounded-xl text-center ${isDark
                ? 'bg-gradient-to-r from-zinc-900/50 to-zinc-900/50 border border-zinc-500/20'
                : 'bg-gradient-to-r from-zinc-50 to-zinc-50 border border-zinc-200'
              } ${isVisible ? 'animate-slide-in-center animate-with-delay-9' : 'animation-reset'}`}>
              <h3 className={`font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'
                }`}>
                {currentLang === 'en' ? 'Urgent Support' : currentLang === 'az' ? 'Təcili Dəstək' : 'Soporte Urgente'}
              </h3>
              <a
                href="tel:+15713159611"
                className="btn-modern inline-flex items-center space-x-2 px-4 py-2 text-white rounded-lg font-semibold"
              >
                <Phone className="w-4 h-4" />
                <span>{currentLang === 'en' ? 'Call Now' : currentLang === 'az' ? 'Zəng Et' : 'Llamar'}</span>
              </a>
            </div>

            {/* Website Link - NEW */}
            <div className={`p-4 rounded-xl text-center ${isDark
                ? 'glass-effect-dark border border-gray-700/50'
                : 'glass-effect border border-white/20 shadow-lg'
              } ${isVisible ? 'animate-scale-in animate-with-delay-10' : 'animation-reset'}`}>
              <div className="flex items-center justify-center mb-2">
                <Globe className={`w-5 h-5 mr-2 ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`} />
                <h3 className={`font-bold ${isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                  Website
                </h3>
              </div>
              <a
                href="https://www.aliscore.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`text-sm font-medium transition-colors duration-300 hover:underline ${isDark ? 'text-zinc-400 hover:text-zinc-300' : 'text-zinc-600 hover:text-zinc-500'
                  }`}
              >
                www.aliscore.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};