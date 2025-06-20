import React from 'react';

const GetInTouch = () => {
  return (
    <section
      id="contact"
      className="w-full py-16 px-6 md:px-20 bg-[#f9f6ff] rounded-2xl dark:bg-[#0f0e17] transition-all duration-500"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#C27AFF] mb-4">
          {/* Get in Touch */}
        </h2>
        <p className="text-gray-700  dark:text-gray-300 mb-10">
          Whether you want to collaborate, have a question, or just want to say hello, my inbox is always open!
        </p>

        <form
        //   action="https://formspree.io/f/your_form_id" // ← replace with your Formspree or backend route
        //   method="POST"
          className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="p-4 rounded-lg bg-white dark:bg-[#1e1e2f] border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#C27AFF] transition-all"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="p-4 rounded-lg bg-white dark:bg-[#1e1e2f] border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#C27AFF] transition-all"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            className="p-4 rounded-lg bg-white dark:bg-[#1e1e2f] border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#C27AFF] transition-all md:col-span-2"
          ></textarea>
          <button
            type="submit"
            className="md:col-span-2 bg-[#C27AFF] hover:bg-[#a85eff] text-white font-semibold py-3 rounded-lg transition-all"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default GetInTouch;
