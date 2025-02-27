import React from "react";

export default function Form() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "27761cce-4b31-4430-a573-9b2df6340b13");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="w-96  text-background">
      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium">
            Name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            required
            className="mt-1 p-2 w-full border border-gray-300 rounded"
            placeholder="Your Name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            required
            className="mt-1 p-2 w-full border border-gray-300 rounded"
            placeholder="Your Email"
          />
        </div>
        <div>
          <label htmlFor="location" className="block text-sm font-medium ">
            Location
          </label>
          <input
            id="location"
            type="text"
            name="location"
            required
            className="mt-1 p-2 w-full border border-gray-300 rounded"
            placeholder="Your Location"
          />
        </div>
        <div>
          <label htmlFor="budget" className="block text-sm font-medium ">
            Budget
          </label>
          <input
            id="budget"
            type="text"
            name="budget"
            required
            className="mt-1 p-2 w-full border border-gray-300 rounded"
            placeholder="Your Budget"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium ">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows="4"
            className="mt-1 p-2 w-full border border-gray-300 rounded"
            placeholder="Your Message"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-background text-architectsRed p-2 rounded hover:bg-architectsGrey transition font-bold"
        >
          Submit Form
        </button>
      </form>
      {result && <p className="mt-4 text-center">{result}</p>}
    </div>
  );
}

