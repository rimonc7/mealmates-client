import { FaPaperPlane } from "react-icons/fa";
import Swal from "sweetalert2";

const NewsletterSubscription = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        fetch('http://localhost:5000/subscribers', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ email })
        })
            .then(res => res.json())
            .then(data => {
                if (data.message === 'This email is already subscribed.') {
                    Swal.fire({
                        title: "Error!",
                        text: "This email is already subscribed.",
                        icon: "error",
                        draggable: true
                    });
                } else {
                    form.reset()
                    Swal.fire({
                        title: "Subscriber Added!",
                        icon: "success",
                        draggable: true
                    });
                }
            })
            .catch(error => {
                Swal.fire({
                    title: "Error!",
                    text: error.message,
                    icon: "error",
                    draggable: true
                });
            });
    };


    return (
        <div className="bg-base-100 py-12 px-6">
            <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-4">Subscribe to My Newsletter</h2>
                <p className="text-lg text-gray-600 mb-6">
                    Get access to my latest recipes by joining the weekly newsletter
                </p>
                <form onSubmit={handleSubmit} className="flex justify-center items-center gap-4">
                    <input
                        type="email"
                        placeholder="Enter your email address"
                        name="email"
                        className="input input-bordered w-full max-w-sm"
                        required
                    />
                    <button
                        type="submit"
                        className="btn bg-green-500 text-white hover:bg-green-600 flex items-center gap-2"
                    >
                        SUBMIT <FaPaperPlane />
                    </button>
                </form>
            </div>
        </div>
    );
};

export default NewsletterSubscription;