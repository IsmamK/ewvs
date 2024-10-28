import React from 'react';

const FAQ = ({ bgColor, textColor }) => {
  const faqs = [
    {
      question: "What services do you offer?",
      answer: "We offer a variety of services including event planning, venue booking, and catering options tailored to your needs."
    },
    {
      question: "How can I book a venue?",
      answer: "You can book a venue through our website by selecting your desired location, date, and filling out the booking form."
    },
    {
      question: "What is your cancellation policy?",
      answer: "We have a flexible cancellation policy. Please refer to our terms and conditions for specific details regarding cancellations and refunds."
    },
    {
      question: "Can I customize my event package?",
      answer: "Yes, we offer customizable event packages. You can discuss your requirements with our team during the booking process."
    },
    {
      question: "How can I contact customer support?",
      answer: "You can reach our customer support team via email, phone, or our website's contact form. We are here to assist you 24/7."
    },
  ];

  return (
    <div className="py-6 sm:py-8 lg:py-12" style={{ backgroundColor: bgColor, color: textColor }}>
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="mb-10 md:mb-16">
          <h2 className="mb-4 text-center text-2xl font-bold md:mb-6 lg:text-3xl">Frequently Asked Questions</h2>
          <p className="mx-auto max-w-screen-md text-center md:text-lg">
            Find answers to some common questions about our services.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 sm:gap-y-10 xl:grid-cols-3">
          {faqs.map((faq, index) => (
            <div key={index} className="relative rounded-lg p-5 pt-8 bg-black text-csc">
              <span className="absolute -top-4 left-4 inline-flex h-8 w-8 items-center justify-center rounded-full  text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                </svg>
                
              </span>

              <h3 className="mb-3 text-lg font-semibold md:text-xl">{faq.question}</h3>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
