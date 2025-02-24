import React from 'react';

const ContactUs = () => {
  return (
    <div className="text-slate-800 p-10 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="text-lg text-slate-600 mb-2">We are here to help you. Contact us through the following means:</p>
      <div className="bg-slate-100 p-6 rounded-lg shadow-lg w-full max-w-md">
        <p className="text-slate-800 mb-2"><strong>Email:</strong> contacto@stahl.com</p>
        <p className="text-slate-800 mb-2"><strong>Phone:</strong> +54 11 2345 6789</p>
        <p className="text-slate-800 mb-2"><strong>Adress:</strong> Calle Falsa 123, Buenos Aires, Argentina</p>
        <p className="text-slate-800"><strong>schedules:</strong> Monday a friday, 9:00 - 18:00</p>
      </div>
    </div>
  );
};

export default ContactUs;
