import React from 'react'

export default function Contact() {
    return (
        <section className="text-gray-600 body-font relative">
            <div className="absolute left-20 h-1/2 w-1/2 top-14">
                <img src="contactus.png" alt="" />
            </div>
            <div className="container px-5 py-24 mx-auto flex">
                <div className="lg:w-1/3 md:w-1/2 bg-white/90 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
                    <h2 className="text-primary text-lg mb-1 font-semibold">Feedback</h2>
                    <p className="leading-relaxed mb-5 text-gray-600 lowercase text-sm">Do you have any queries or feedback, lets get connected, replay within 2hours!!</p>
                    <div className="relative mb-4">
                        <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                        <input type="email" id="email" name="email" className="w-full bg-white rounded 
                            border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base
                             outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                        <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                    </div>
                    <button className="btn btn-primary">Submit</button>
                </div>
            </div>
        </section>

    )
}
