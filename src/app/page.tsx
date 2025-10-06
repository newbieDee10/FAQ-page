'use client';

import { useState } from 'react';

export default function Home() {
  const [openIndices, setOpenIndices] = useState<number[]>([]);

  const faqs = [
    {
      question: "How many days am I required to be in the office?",
      answer: "At least 3 days in a week. Your selected days should be communicated with your lead beforehand."
    },
    {
      question: "What happens if I take a sick day or a holiday?",
      answer: "If the sick day/holiday falls on one of your selected office days, your streak will be maintained and will not reset."
    },
    {
      question: "What is the 'Weekly Quota'",
      answer: "It is simply a visual indicator indicate that keeps track of how many full days (out of the minimum 3 days) you have been to the office for the current work week."
    },
    {
      question: "Will my streak break if I do not come to the office on my selected day but attend on a different day?",
      answer: "No, your streak will not break. However, your lead will be notified of your absence on the originally selected day."
    },
    {
      question: "What happens if I spend more than 6 hours and 30 minutes in the office but arrive later than 10:00 AM? Will my streak break?",
      answer: "No, your streak will not break but you will be flagged for not getting to the office on time."
    },
    {
      question: "What happens if I forget to clock in using the logger? Is my day lost?",
      answer: "If you do not clock in with the logger, your data source is solely reliant on he access control but in case the access control is offline, your data for that day might be inaccurate. So we encourage everyone to use the logger once"
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndices(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="min-h-screen">
      {/* Header Section with Background */}
      <div
        className="relative w-full h-48 bg-cover bg-center flex flex-col items-center justify-center"
        style={{ backgroundImage: 'url(/background.jfif)' }}
      >
        {/* Overlay for better text visibility */}
        <div className="absolute inset-0 bg-white/40"></div>

        {/* Logo - Top Left */}
        <div className="absolute top-4 left-4 z-10">
          <img src="/turntabl.png" alt="turntabl logo" className="h-12" />
        </div>

        {/* FAQ Title */}
        <div className="relative z-10 text-center">
          <h1 className="text-5xl font-bold text-black mb-2">FAQ</h1>
          <p className="text-xl italic text-black">Frequently Asked Questions</p>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-[#c5ff00] min-h-screen py-12 px-4">
        <div className="max-w-2xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full bg-white p-4 text-left flex justify-between items-center hover:shadow-md transition-shadow"
              >
                <span className="font-medium text-sm pr-4">{faq.question}</span>
                <img
                  src="/arrow down.png"
                  alt="toggle"
                  className="w-5 h-5 flex-shrink-0 transition-transform duration-300"
                  style={{
                    transform: openIndices.includes(index) ? 'rotate(-180deg)' : 'rotate(0deg)'
                  }}
                />
              </button>

              {openIndices.includes(index) && (
                <div className="bg-white p-4">
                  <p className="text-sm">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
