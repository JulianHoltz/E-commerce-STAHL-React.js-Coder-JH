import React from "react";

export const AboutUs = () => {
  return (
    <div className="flex flex-row bg-slate-800 w-full min-h-80 flex items-center justify-center text-slate-100 gap-4 min-h-[50VH] max-h-[70VH]">
      <div className="max-h-full w-full overflow-hidden">
        <img className="w-full h-full object-cover rounded-2xl" src="https://i.ibb.co/DfTJN2jg/Industria.jpg" alt="Company image" />
      </div>
      <div className="max-w-[50VW]">
        <h2 className="text-4xl">Company Profile</h2>
        <p>
          Jiuzhou Metal Products (Shandong) Co., Ltd. ("Jiuzhou Metal" for
          short) is a subsidiary of Jiuzhou Metal Group, committed to delivering
          top-notch, tailored steel and metal solutions to customers worldwide.
        </p>
        <p>
          As early as 2002, Jiuzhou Metal has been active in the domestic steel
          market, trusted as the supplier of choice for CNOOC, CNNC, CSCEC and
          CLP. In response to the growing demands of international markets, the
          company expanded its services to global users in 2013. After a decade
          of efforts, it has now earned the trust of tens of thousands of
          customers worldwide, offering robust supply chains, deep professional
          expertise, and dependable service. Its customer base spans across
          Europe, the Middle East, South America, Southeast Asia, and over 110
          countries and regions.
        </p>
        <p>
          Head quartered in Jinan, the company has strategically established
          production lines of galvanized steel, carbon steel and stainless steel
          products in China; Furthermore, it has cultivated enduring and
          amicable relations with Baosteel, Tisco, Posco and other major
          domestic mills, ensuring the seamless provision of high-quality
          products and services to customers. The company has also set up
          warehouses in major domestic ports to to guarantee swift product
          deliveries.
        </p>
        <p>
          Embracing the principles of "quality, high-end, green, and
          ecological," Jiuzhou Metal actively champions the high-end
          transformation of intelligent steel manufacturing. By aspiring to be
          an enduring benchmark enterprise in the industry, the company is
          dedicated to contributing wisdom and strength to the advancement of
          the steel industry.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
