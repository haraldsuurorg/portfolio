import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

import { styles } from '../styles';
// import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';

// reCAPTCHA keys and EmailJS keys
const RECAPTCHA_SITE_KEY = '6LdkugQqAAAAAB5ZfYdGHCS94T8igHcRrjAtW9-y';
const EMAILJS_SERVICE_ID = 'service_ijv44ac';
const EMAILJS_TEMPLATE_ID = 'template_99urbj7';
const EMAILJS_USER_ID = 'h9MnWu9nFbI7to9s6';

const Contact = () => {
  const formRef = useRef();

  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadReCaptcha = () => {
      const script = document.createElement('script');
      script.src = `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`;
      script.async = true;
      document.body.appendChild(script);
    };
    loadReCaptcha();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    window.grecaptcha.ready(() => {
      window.grecaptcha.execute(RECAPTCHA_SITE_KEY, { action: 'submit' }).then((token) => {
        emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          {
            from_name: form.name,
            to_name: 'Harald',
            from_email: form.email,
            to_email: 'harald.suurorg@gmail.com',
            message: form.message,
            'g-recaptcha-response': token,
          },
          EMAILJS_USER_ID
        )
        .then(() => {
          setLoading(false);
          alert('Thank you. I will get back to you as soon as possible.');
          setForm({ name: '', email: '', message: '' });
        }, (error) => {
          setLoading(false);
          console.log(error);
          alert('Something went wrong.');
        });
      });
    });
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex justify-center gap-10 overflow-hidden">
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="bg-black-100 p-8 rounded-2xl md:w-1/2"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
              required
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
              required
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What's on your mind?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
              required
            />
          </label>
          <button
            type="submit"
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </motion.div>

      {/* <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div> */}
    </div>
  );
};

export default SectionWrapper(Contact, 'contact');
