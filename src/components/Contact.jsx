function Contact() {
  return (
    <section
      id="contact"
      className="bg-gray-100 py-20 px-6 md:px-16"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold">
            Contact <span className="text-orange-500">Us</span>
          </h1>
          <p className="text-gray-600 mt-2">
            We'd love to hear from you!
          </p>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-10">
          
          {/* Left */}
          <div className="text-center md:text-left">
            <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
            <p className="text-gray-600 mb-4">
              Have questions? Reach out anytime.
            </p>

            <p>📍 Bangalore, India</p>
            <p>📞 +91 9876543210</p>
            <p>📧 foodies@gmail.com</p>
          </div>

          {/* Right */}
          <form className="bg-white p-6 rounded-xl shadow-md">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full mb-4 p-3 border rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full mb-4 p-3 border rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
            />

            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full mb-4 p-3 border rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
            ></textarea>

            <button className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600">
              Send Message
            </button>
          </form>

        </div>
      </div>
    </section>
  );
}

export default Contact;
