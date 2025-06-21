import React from 'react';
export default function Contact() {
  return (
    <section className="p-8 max-w-xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-4">Let's Connect</h2>
      <p className="mb-6">Email me at <a href="mailto:your.email@example.com" className="underline text-blue-600">your.email@example.com</a></p>
      <form name="contact" method="POST" data-netlify="true" className="space-y-4">
        <input type="hidden" name="form-name" value="contact" />
        <input type="text" name="name" placeholder="Name" className="w-full p-2 rounded border" required />
        <input type="email" name="email" placeholder="Email" className="w-full p-2 rounded border" required />
        <textarea name="message" rows="4" placeholder="Message" className="w-full p-2 rounded border" required></textarea>
        <button type="submit" className="px-6 py-2 bg-blue-600 text-white rounded">Send</button>
      </form>
    </section>
  );
}
