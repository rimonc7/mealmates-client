import { Helmet } from "react-helmet-async";
import { useContext } from "react";
import { ThemeContext } from "../../Provider/ThemeProvider";

const Contact = () => {
  const { darkTheme } = useContext(ThemeContext);

  return (
    <div className={`min-h-screen p-8 transition-all duration-300 ${darkTheme ? "bg-gray-800 text-white" : "bg-gray-50 text-gray-800"}`}>
      <Helmet>
        <title>Contact Us - MealMeats</title>
      </Helmet>

      <div className="text-center">
        <h1 className={`text-4xl font-bold mb-6 ${darkTheme ? "text-[#48b2b7]" : "text-[#048c7c]"}`}>Contact Us</h1>
        <p className={`text-lg mb-10 ${darkTheme ? "text-gray-300" : "text-gray-700"}`}>
          We would love to hear from you! Whether you have a question or want to volunteer, feel free to reach out.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <div className={`bg-white p-6 rounded-lg shadow-md ${darkTheme ? "bg-gray-700" : "bg-white"}`}>
          <h2 className={`text-xl font-semibold mb-4 ${darkTheme ? "text-[#48b2b7]" : "text-[#048c7c]"}`}>Phone</h2>
          <p className={`text-gray-600 ${darkTheme ? "text-gray-300" : "text-gray-600"}`}>
            <span className="font-bold">Call Us:</span>{" "}
            <a href="tel:+18001234567" className={`${darkTheme ? "text-[#48b2b7]" : "text-[#048c7c]"} hover:text-[#459e94]`}>
              +1 (800) 123-4567
            </a>
          </p>
        </div>

        <div className={`bg-white p-6 rounded-lg shadow-md ${darkTheme ? "bg-gray-700" : "bg-white"}`}>
          <h2 className={`text-xl font-semibold mb-4 ${darkTheme ? "text-[#48b2b7]" : "text-[#048c7c]"}`}>Email</h2>
          <p className={`text-gray-600 ${darkTheme ? "text-gray-300" : "text-gray-600"}`}>
            <span className="font-bold">Email Us:</span>{" "}
            <a href="mailto:info@mealmeats.com" className={`${darkTheme ? "text-[#48b2b7]" : "text-[#048c7c]"} hover:text-[#459e94]`}>
              info@mealmeats.com
            </a>
          </p>
        </div>

        <div className={`bg-white p-6 rounded-lg shadow-md ${darkTheme ? "bg-gray-700" : "bg-white"}`}>
          <h2 className={`text-xl font-semibold mb-4 ${darkTheme ? "text-[#48b2b7]" : "text-[#048c7c]"}`}>Address</h2>
          <p className={`text-gray-600 ${darkTheme ? "text-gray-300" : "text-gray-600"}`}>
            <span className="font-bold">Our Office:</span>{" "}
            123 Food Drive Avenue, City, State, 56789
          </p>
        </div>
      </div>

      <div className="mt-12 text-center">
        <h2 className={`text-2xl font-semibold mb-4 ${darkTheme ? "text-[#48b2b7]" : "text-[#048c7c]"}`}>Want to Volunteer?</h2>
        <p className={`text-lg mb-6 ${darkTheme ? "text-gray-300" : "text-gray-700"}`}>
          We’re always looking for passionate individuals to help. If you’re interested in volunteering with us, please call us.
        </p>
        <a
          href="tel:+18001234567"
          className={`bg-[#048c7c] hover:bg-[#459e94] text-white px-8 py-3 rounded-lg text-xl transition-all ${darkTheme ? "bg-[#48b2b7]" : "bg-[#048c7c]"}`}
        >
          Call Us: +1 (800) 123-4567
        </a>
      </div>

      <div className={`mt-12 p-8 rounded-lg shadow-md max-w-4xl mx-auto ${darkTheme ? 'bg-gray-700' : 'bg-white'}`}>
        <h2 className={`text-2xl font-semibold mb-4 ${darkTheme ? "text-[#48b2b7]" : "text-[#048c7c]"}`}>Send Us a Message</h2>
        <form className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="form-control w-full">
              <label className={`label text-sm font-medium ${darkTheme ? "text-gray-300" : "text-gray-700"}`}>Your Name</label>
              <input
                type="text"
                name="name"
                className={`input input-bordered w-full ${darkTheme ? "bg-gray-700 text-white border border-white" : "bg-white text-gray-800 border border-gray-300"}`}
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="form-control w-full">
              <label className={`label text-sm font-medium ${darkTheme ? "text-gray-300" : "text-gray-700"}`}>Your Email</label>
              <input
                type="email"
                name="email"
                className={`input input-bordered w-full ${darkTheme ? "bg-gray-700 text-white border border-white" : "bg-white text-gray-800 border border-gray-300"}`}
                placeholder="Enter your email"
                required
              />
            </div>
          </div>

          <div className="form-control w-full">
            <label className={`label text-sm font-medium ${darkTheme ? "text-gray-300" : "text-gray-700"}`}>Message</label>
            <textarea
              name="message"
              className={`textarea textarea-bordered w-full ${darkTheme ? "bg-gray-700 text-white border border-white" : "bg-white text-gray-800 border border-gray-300"}`}
              placeholder="Enter your message"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className={`bg-[#048c7c] hover:bg-[#459e94] text-white px-6 py-2 rounded-lg text-lg transition-all ${darkTheme ? "bg-[#48b2b7]" : "bg-[#048c7c]"}`}
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
