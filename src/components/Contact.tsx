"use client"

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactPage: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Here you would typically send the form data to your backend
        console.log('Form submitted:', formData);
        // Reset form after submission
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <div className="min-h-screen bg-purple-900 text-white py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Contact Form */}
                    <div className="bg-black p-6 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-semibold mb-4">Send us a message</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-3 py-2 bg-purple-800 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-3 py-2 bg-purple-800 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={4}
                                    className="w-full px-3 py-2 bg-purple-800 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-purple-600 hover:bg-purple-500 text-white font-bold py-2 px-4 rounded-md transition duration-300 flex items-center justify-center"
                            >
                                <Send className="mr-2" size={18} />
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Contact Information */}
                    <div className="bg-black p-6 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-semibold mb-4">Get in touch</h2>
                        <div className="space-y-4">
                            <div className="flex items-start">
                                <Mail className="mr-4 text-purple-400 flex-shrink-0" />
                                <div>
                                    <h3 className="font-medium">Email</h3>
                                    <p>support@testimonialspro.com</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <Phone className="mr-4 text-purple-400 flex-shrink-0" />
                                <div>
                                    <h3 className="font-medium">Phone</h3>
                                    <p>+1 (555) 123-4567</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <MapPin className="mr-4 text-purple-400 flex-shrink-0" />
                                <div>
                                    <h3 className="font-medium">Address</h3>
                                    <p>123 TestimonialsPro Street<br />San Francisco, CA 94105</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;