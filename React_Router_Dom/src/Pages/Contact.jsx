import { Form } from "react-router-dom";

export const ContactData = async({request}) => {
  try {
    const res = await request.formData();
    const data = Object.fromEntries(res);
    console.log(data);

    return data;  //the rule is must be retuen null or value
    
  } catch (error) {
    console.log(error);
  }
}

export const Contact = () => {
  return (
    <>
      <h1 className="bg-gray-800 text-white text-center py-6">Contact Page</h1>
      <Form
        id="contactForm"
        className="space-y-4"
        action="/Contact"
        method="POST"
        novalidate
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label for="name" className="block text-sm font-medium text-gray-700">
              Full name
            </label>
            <input
              required
              id="name"
              name="name"
              type="text"
              placeholder="Your name"
              className="mt-1 block w-full rounded-md border-gray-200 shadow-sm focus:ring-2 focus:ring-indigo-300 focus:border-transparent p-2"
            />
          </div>

          <div>
            <label for="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              required
              id="email"
              name="email"
              type="email"
              placeholder="you@company.com"
              className="mt-1 block w-full rounded-md border-gray-200 shadow-sm focus:ring-2 focus:ring-indigo-300 focus:border-transparent p-2"
            />
          </div>
        </div>

        <div>
          <label for="subject" className="block text-sm font-medium text-gray-700">
            Subject
          </label>
          <input
            id="subject"
            name="subject"
            type="text"
            placeholder="How can we help?"
            className="mt-1 block w-full rounded-md border-gray-200 shadow-sm focus:ring-2 focus:ring-indigo-300 focus:border-transparent p-2"
          />
        </div>

        <div>
          <label for="message" className="block text-sm font-medium text-gray-700">
            Message
          </label>
          <textarea
            required
            id="message"
            name="message"
            rows="5"
            placeholder="Tell us about your project or question"
            className="mt-1 block w-full rounded-md border-gray-200 shadow-sm focus:ring-2 focus:ring-indigo-300 focus:border-transparent p-2"
          ></textarea>
        </div>

        <div className="flex items-center justify-between gap-4">
          <button
            type="submit"
            className="inline-flex items-center gap-2 px-5 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-300"
          >
            Send message
          </button>

          <p id="formStatus" className="text-sm text-gray-600"></p>
        </div>
      </Form>
    </>
  );
};
