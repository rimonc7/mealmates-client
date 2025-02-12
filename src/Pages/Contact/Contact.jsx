import { Helmet } from "react-helmet-async";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <Helmet>
        <title>Contact Us - MealMeats</title>
      </Helmet>

      <div className="text-center">
        <h1 className="text-4xl font-bold text-[#048c7c] mb-6">Contact Us</h1>
        <p className="text-lg text-gray-700 mb-10">
          We would love to hear from you! Whether you have a question or want to
          volunteer, feel free to reach out.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-[#048c7c] mb-4">Phone</h2>
          <p className="text-gray-600">
            <span className="font-bold">Call Us:</span>{" "}
            <a href="tel:+18001234567" className="text-[#048c7c] hover:text-[#459e94]">
              +1 (800) 123-4567
            </a>
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-[#048c7c] mb-4">Email</h2>
          <p className="text-gray-600">
            <span className="font-bold">Email Us:</span>{" "}
            <a href="mailto:info@mealmeats.com" className="text-[#048c7c] hover:text-[#459e94]">
              info@mealmeats.com
            </a>
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-[#048c7c] mb-4">Address</h2>
          <p className="text-gray-600">
            <span className="font-bold">Our Office:</span>{" "}
            123 Food Drive Avenue, City, State, 56789
          </p>
        </div>
      </div>

      <div className="mt-12 text-center">
        <h2 className="text-2xl font-semibold text-[#048c7c] mb-4">Want to Volunteer?</h2>
        <p className="text-lg text-gray-700 mb-6">
          We’re always looking for passionate individuals to help. If you’re
          interested in volunteering with us, please call us.
        </p>
        <a
          href="tel:+18001234567"
          className="bg-[#048c7c] hover:bg-[#459e94] text-white px-8 py-3 rounded-lg text-xl transition-all"
        >
          Call Us: +1 (800) 123-4567
        </a>
      </div>

      <div className="mt-12 bg-white p-8 rounded-lg shadow-md max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-[#048c7c] mb-4">Send Us a Message</h2>
        <form className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="form-control w-full">
              <label className="label text-sm font-medium">Your Name</label>
              <input
                type="text"
                name="name"
                className="input input-bordered w-full"
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="form-control w-full">
              <label className="label text-sm font-medium">Your Email</label>
              <input
                type="email"
                name="email"
                className="input input-bordered w-full"
                placeholder="Enter your email"
                required
              />
            </div>
          </div>

          <div className="form-control w-full">
            <label className="label text-sm font-medium">Message</label>
            <textarea
              name="message"
              className="textarea textarea-bordered w-full"
              placeholder="Enter your message"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-[#048c7c] hover:bg-[#459e94] text-white px-6 py-2 rounded-lg text-lg transition-all"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
