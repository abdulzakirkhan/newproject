"use client"

import React, { useState } from 'react';
import { FaPaperclip, FaMicrophone, FaTelegramPlane } from 'react-icons/fa'; // Import icons

const Page = () => {
  // State to manage the amount entered and the selected button value
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    { sender: "Customer", content: "Hello, I need help with my order.", date: "2025-01-20 11:17:03" },
    { sender: "Support", content: "Sure, I'd be happy to assist you. What seems to be the problem?", date: "2025-01-20 11:17:03" },
    { sender: "Customer", content: "I haven't received my item yet.", date: "2025-01-20 11:17:03" },
    { sender: "Support", content: "Let me check your order status.", date: "2025-01-20 11:17:03" },
    { sender: "Customer", content: "I haven't received my item yet.", date: "2025-01-20 11:17:03" },
    { sender: "Support", content: "Let me check your order status.", date: "2025-01-20 11:17:03" },
    { sender: "Customer", content: "I haven't received my item yet.", date: "2025-01-20 11:17:03" },
  ]);

  // Handle new message input
  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  // Add a new message to the chat
  const handleSendMessage = () => {
    if (message.trim() === "") return; // Prevent empty messages
    setMessages([...messages, { sender: 'Customer', content: message, date: new Date().toLocaleString() }]);
    setMessage(''); // Clear the input field after sending
  };

  return (
    <>
      <section className="mt-20">
        <div className="bg-[#4B67DB] fixed w-full" style={{top:"75px"}}>
          <div className="container mx-auto px-6 py-2">
            <h2 className="text-white">Customer Support</h2>
          </div>
        </div>

        <div className="container mt-28 md:mt-14 mx-auto md:px-6">
          {/* Messages container */}
          <div className="messagesContainer flex flex-col overflow-auto py-10 mb-24">
            {messages.map((message, index) => (
              <div key={index} className="mb-4">
                <div
                  className={`flex ${message.sender === 'Customer' ? 'justify-start' : 'justify-end'}`}
                >
                  <div
                    className={`message p-3 max-w-[60%] rounded-lg ${
                      message.sender === 'Customer' ? 'bg-blue-100' : 'bg-gray-100'
                    }`}
                  >
                    <p>{message.content}</p>
                  </div>
                </div>

                {/* Display the date */}
                <p
                  className={`text-xs ${message.sender === 'Customer' ? 'text-blue-500 text-start' : 'text-gray-500 text-end'} mt-1`}
                >
                  {message.date}
                </p>
              </div>
            ))}
          </div>

          {/* Input area fixed at the bottom */}
          <div className="fixed bottom-0 w-full md:w-[92%] bg-white p-4 border-t-2">
            <div className="flex flex-wrap w-full items-center gap-3 space-x-4">
              <button className="bg-primary px-5 py-2 rounded-lg text-white">
                <FaPaperclip className="text-2xl cursor-pointer" />
              </button>
              <input
                type="text"
                value={message}
                onChange={handleMessageChange}
                placeholder="Type a message..."
                className="w-1/2 md:w-[73%] p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="text-white px-6 py-2 rounded-lg bg-primary">
                <FaMicrophone className="text-2xl cursor-pointer" />
              </button>
              <button
                className="text-white flex items-center gap-2 bg-primary px-6 py-2 rounded-lg"
                onClick={handleSendMessage}
              >
                Send
                <FaTelegramPlane className="text-2xl cursor-pointer" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
