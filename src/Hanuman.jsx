import React, { useState } from 'react';

// --- ASSET IMPORTS (Preserved) ---
import logoImg from './assets/logo.jpeg'; 
import heroBg from './assets/background.jpeg'; 
import reputationImg from './assets/Reputation.jpeg'; 
import servicesImg from './assets/bestservices.jpeg'; 
import safetyImg from './assets/safetysecurity.jpeg';
import bigFeatureImg from './assets/products.jpeg'; 
import groundnutImg from './assets/groundnut.jpeg'; 
import cashewImg from './assets/cashew.PNG';
import groundnetinabout from './assets/grounnetinabout.jpeg';
import customs from './assets/customs.jpeg';
import packaging from './assets/packingandstorage.jpeg';
import logistics from './assets/logistics.jpeg';
import businessservice from './assets/businessservices.jpeg';
import contactmail from './assets/contactmail-icon.jpeg';
import contactphone from './assets/contactphone-icon.jpeg'; 
import contactlocation from './assets/contactlocation-icon.jpeg';
import redpeanuts from './assets/redpeanuts.jpeg';
import fssaiImg from './assets/fssai.jpeg';
import apedaImg from './assets/Apeda.jpeg';
import dgftImg from './assets/ForeignTrade.jpeg';




// --- CUSTOM ICON IMPORTS (Preserved) ---
import locationIcon from './assets/location-icon.jpeg'; 
import mailIcon from './assets/mail-icon.jpeg'; 
import phoneIcon from './assets/phone-icon.jpeg';
import groundnutOilImg from './assets/groundnutoil.jpeg';
import desichanaImg from './assets/Chana.jpeg';
import nonBasmatiImg from './assets/non bhasmathirice.jpeg';
import basmatiImg from './assets/basmathirice.jpeg';
const Hanuman = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [productType, setProductType] = useState('groundnut');
  const [currentSlide, setCurrentSlide] = React.useState(0);
const products = [
  { img: groundnutOilImg, name: 'Groundnut Oil' },
  { img: desichanaImg, name: 'Desi Chana' },
  { img: nonBasmatiImg, name: 'Non-Basmati Rice' },
  { img: basmatiImg, name: 'Basmati Rice' }
];

/* 2. Add this useEffect for the automatic sliding logic */
const upcomingProducts = [...products, ...products];

React.useEffect(() => {
  const timer = setInterval(() => {
    setCurrentSlide((prev) => (prev + 1) % products.length);
  }, 3000);
  return () => clearInterval(timer);
}, [products.length]);



  const companyName = "HANUMAN GLOBAL EXPORTS AND IMPORTS";

  const navigateTo = (tab) => {
    setActiveTab(tab);
    window.scrollTo(0, 0);
  };

  const SectionHeading = ({ title }) => (
    <h3 style={{ textAlign: 'center', color: '#8B6B40', marginBottom: '50px', fontSize: '2.6rem', fontWeight: 'bold', textTransform: 'uppercase' }}>
      {title}
    </h3>
  );

  return (
    <div style={{ backgroundColor: '#FCFAf7', fontFamily: 'serif', color: '#2D2D2D', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      
      {/* 1. FIXED HEADER - PRESERVED LOGO BLENDING */}
      <header style={{ 
        backgroundColor: '#000000', position: 'fixed', top: 0, left: 0, right: 0, zIndex: 2000, boxShadow: '0 4px 25px rgba(0,0,0,0.4)' 
      }}>
        <div style={{ display: 'flex', alignItems: 'center', padding: '15px 4% 10px 4%', gap: '25px' }}>
          <img 
            src={logoImg} 
            alt="Logo" 
            style={{ height: '75px', width: 'auto', objectFit: 'contain', mixBlendMode: 'lighten', filter: 'contrast(1.1)' }} 
          />
          <h1 style={{ fontSize: '1.4rem', color: '#FFFFFF', margin: 0, fontWeight: '900', letterSpacing: '1px', textTransform: 'uppercase' }}>
            {companyName}
          </h1>
        </div>
        
        <nav style={{ 
          display: 'flex', gap: '30px', padding: '10px 4% 12px 115px', 
          backgroundColor: '#0a0a0a', borderTop: '1px solid #222' 
        }}>
          {['home', 'about', 'products', 'services', 'certifications', 'gallery', 'contact'].map(tab => (
            <button key={tab} onClick={() => navigateTo(tab)} style={{ background: 'none', border: 'none', cursor: 'pointer', textTransform: 'uppercase', fontWeight: 'bold', color: activeTab === tab ? '#D97706' : '#FFFFFF', fontSize: '0.8rem', letterSpacing: '1px' }}>
              {tab}
            </button>
          ))}
        </nav>
      </header>

      <main style={{ flex: 1 }}>
        
        {/* --- HOME PAGE CONTENT --- */}
        {activeTab === 'home' && (
          <div style={{ width: '100%' }}>
            <section style={{ height: '85vh', width: '100%', backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.75), rgba(0,0,0,0.2)), url(${heroBg})`, backgroundSize: 'cover', backgroundPosition: 'center', display: 'flex', alignItems: 'center', color: '#fff', padding: '180px 8% 0 8%' }}>
              <h2 style={{ fontSize: '3.8rem', textAlign: 'left', maxWidth: '800px', lineHeight: '1.1', fontWeight: 'bold', textShadow: '3px 3px 12px rgba(0,0,0,0.9)' }}>
                Connecting Indian Farms <br/> to Global Tables
              </h2>
            </section>

            <section style={{ padding: '100px 10%', backgroundColor: '#fff' }}>
              <SectionHeading title="Why Choose Us" />
              <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', gap: '60px' }}>
                <div style={{ flex: '1.2', display: 'flex', flexDirection: 'column', gap: '45px' }}>
                  {[
                    { img: servicesImg, title: 'Best Services', text: 'We provide our import & export services throughout the world with an exceptional job that speaks clearly in our work.' },
                    { img: reputationImg, title: 'Reputation', text: 'We are in the market for around 15 years and have made a reputation with our devotional working ethics and standards and now we directly entered with the name of company HANUMAN GLOBAL EXPORTS AND IMPORTS.' },
                    { img: safetyImg, title: 'Safety & Security', text: 'We understand the safety and security you deserve during the supplement of the products, and we take all the essential measures to maintain so.S.' }
                  ].map((item, idx) => (
                    <div key={idx} style={{ display: 'flex', gap: '25px' }}>
                      <img src={item.img} alt={item.title} style={{ width: '70px', height: '70px', objectFit: 'cover', borderRadius: '8px' }} />
                      <div>
                        <h4 style={{ color: '#D97706', fontSize: '1.35rem', marginBottom: '10px', textTransform: 'uppercase' }}>{item.title}</h4>
                        <p style={{ color: '#444', fontSize: '1.05rem', lineHeight: '1.7' }}>{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div style={{ flex: '1' }}>
                  <img src={bigFeatureImg} alt="Quality" style={{ width: '100%', height: '100%', minHeight: '400px', objectFit: 'cover', borderRadius: '20px' }} />
                </div>
              </div>
            </section>

            <section style={{ padding: '80px 10%', backgroundColor: '#FCFAf7' }}>
              <SectionHeading title="Our Featured Products" />
              <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', flexWrap: 'wrap' }}>
                <div style={{ width: '450px', background: '#fff', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
                  <img src={groundnutImg} alt="Groundnut" style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
                  <div style={{ padding: '25px', textAlign: 'center' }}>
                    <h4 style={{ color: '#D97706', fontSize: '1.6rem', marginBottom: '10px' }}>PREMIUM GROUNDNUTS</h4>
                    <p style={{ color: '#555' }}>High-quality, oil-rich groundnuts sourced from Andhra Pradesh.</p>
                  </div>
                </div>
                <div style={{ width: '450px', background: '#fff', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
                  <img src={cashewImg} alt="Cashew" style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
                  <div style={{ padding: '25px', textAlign: 'center' }}>
                    <h4 style={{ color: '#D97706', fontSize: '1.6rem', marginBottom: '10px' }}>EXPORT QUALITY CASHEWS</h4>
                    <p style={{ color: '#555' }}>Whole white kernels, processed for global wholesale markets.</p>
                  </div>
                </div>
              </div>
            </section>
            <section style={{ padding: '80px 10%', backgroundColor: '#fff', overflow: 'hidden' }}>
  <SectionHeading title="Upcoming Products" />
  <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', overflow: 'hidden' }}>
    <div style={{ 
      display: 'flex', 
      transition: 'transform 0.6s ease-in-out', 
      transform: `translateX(-${currentSlide * (100 / 3)}%)`,
      gap: '20px'
    }}>
        {upcomingProducts.map((product, idx) => (
        <div key={idx} style={{ 
          minWidth: 'calc(33.33% - 14px)', 
          textAlign: 'center',
          background: '#f9f9f9',
          borderRadius: '12px',
          paddingBottom: '20px'
        }}>
          <img 
            src={product.img} 
            alt={product.name} 
            style={{ width: '100%', height: '250px', objectFit: 'cover', borderRadius: '12px 12px 0 0' }} 
          />
          <h4 style={{ color: '#D97706', marginTop: '15px', fontSize: '1.2rem' }}>{product.name}</h4>
        </div>
         ))}
    </div>
  </div>
</section>
          </div>
        )}

        {/* --- ABOUT PAGE CONTENT (Completed) --- */}
        {activeTab === 'about' && (
  <section style={{ padding: '200px 8% 100px 8%', minHeight: '100vh', backgroundColor: '#FCFAf7' }}>
    <SectionHeading title="About Us" />
     <div style={{ borderTop: '1px solid #E5E7EB', paddingTop: '60px', maxWidth: '1100px', margin: '0 auto' }}>
      <div style={{ display: 'flex', gap: '60px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
        <div style={{ flex: '1', minWidth: '350px' }}>
          <img src={bigFeatureImg} alt="Products" style={{ width: '100%', borderRadius: '20px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }} />
        </div>
        <div style={{ flex: '1.5', minWidth: '400px' }}>
          <p style={{ fontSize: '1.15rem', lineHeight: '1.9', color: '#444', textAlign: 'justify' }}>
            Cereals and pulses are one of the main elements in Indian foods. Indian food has been well-known over the world for their exceptional flavour, aroma, and excellent taste. We at <strong>{companyName}</strong> believe that Indian culture and our extraordinary food variety should reach every side of the world. 
            <br/><br/>
            We trade various pulses like peanuts and some others are coming as soon as possible like Black Eye Bean, Brown Eye Bean, Split Chickpea, and Split Mung Beans.
          </p>
        </div>
      </div>
    </div>

    {/* --- NEW CONTENT: PRESENCE & INFRASTRUCTURE --- */}
    <div style={{ maxWidth: '1100px', margin: '0 auto 60px auto', padding: '30px', backgroundColor: '#fff', borderRadius: '15px', boxShadow: '0 5px 20px rgba(0,0,0,0.05)' }}>
      <h4 style={{ color: '#D97706', fontSize: '1.8rem', marginBottom: '20px' }}>Our Presence</h4>
      <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#444' }}>
        Our main office is <strong>Located in Kadapa</strong>, the center of Kadapa. 
        We additionally have warehouse, work places and the professional experienced staff, traders and also commission agents present in <strong>30-50 vital growing areas</strong> in India to procure raw material and convert into processed and <strong>5 major Indian ports</strong>. Till date, the company keeps up its firm obligation to morals and transparency.
      </p>
    </div>

    {/* --- NEW CONTENT: HISTORY (Beside Groundnut Image) --- */}
    <div style={{ maxWidth: '1100px', margin: '0 auto 80px auto', display: 'flex', gap: '50px', alignItems: 'center', flexWrap: 'wrap-reverse' }}>
      <div style={{ flex: '1.5', minWidth: '350px' }}>
        <h4 style={{ color: '#D97706', fontSize: '1.8rem', marginBottom: '20px' }}>History</h4>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#444', textAlign: 'justify' }}>
          <strong>{companyName}</strong> is incorporated in January 2025. It is a company whose central focus is export of Indian cereals and pulses throughout the globe as the prime exporter of all sort of Indian cereals and pulses. With our connection with several Processor, Traders and buyers over several locations, we have become among the go-to companies for cereals and pulses trade in the marketplace.
          <br/><br/>
          To develop, assembling, cycle and serve best in cereals and pulses that fit for your utilization. We are a recognized company known for adding a variety to your daily routine with our best quality cereals and pulses because when it comes to food, there must be no trade-off. This is the reason we endeavour to provide you with the best quality services to guarantee that our delivered products remain fresh and healthy.
        </p>
      </div>
      <div style={{ flex: '1', minWidth: '300px' }}>
        <img 
          src={groundnetinabout} 
          alt="Groundnut Processing" 
          style={{ width: '100%', borderRadius: '20px', boxShadow: '0 15px 30px rgba(0,0,0,0.1)', height: '400px', objectFit: 'cover' }} 
        />
      </div>
    </div>

    {/* --- PRESERVED ORIGINAL CONTENT --- */}
  
  </section>
)}
{activeTab === 'certifications' && (
  <div style={{ padding: '120px 10% 80px 10%', backgroundColor: '#fff', minHeight: '100vh' }}>
    {/* Page Header */}
    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
      <SectionHeading title="Quality Assurance & Certifications" />
      <p style={{ color: '#555', fontSize: '1.2rem', maxWidth: '800px', margin: '20px auto', lineHeight: '1.6' }}>
        At <strong>Hanuman Global Exports Imports</strong>, we adhere to the highest international standards. 
        Our business is fully licensed and regulated by the Government of India's premier export authorities 
        to ensure safety, quality, and legal compliance in every shipment.
      </p>
    </div>

    {/* Certification Cards Grid */}
    <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', flexWrap: 'wrap' }}>
      {[
        { 
          img: fssaiImg, 
          title: 'FSSAI License', 
          desc: 'Ensuring food safety and hygiene standards for all our agricultural exports as per the Food Safety and Standards Authority of India.' 
        },
        { 
          img: apedaImg, 
          title: 'APEDA Member', 
          desc: 'Registered with the Agricultural and Processed Food Products Export Development Authority for scheduled product quality monitoring.' 
        },
        { 
          img: dgftImg, 
          title: 'DGFT Registered', 
          desc: 'Recognized by the Directorate General of Foreign Trade with a valid Import Export Code (IEC) for seamless global logistics.' 
        }
      ].map((cert, idx) => (
        <div key={idx} style={{ 
          width: '320px', 
          padding: '30px', 
          textAlign: 'center', 
          border: '1px solid #eee', 
          borderRadius: '15px', 
          boxShadow: '0 10px 25px rgba(0,0,0,0.05)',
          transition: 'transform 0.3s ease'
        }}>
          <img 
            src={cert.img} 
            alt={cert.title} 
            style={{ height: '120px', 
    maxWidth: '100%',     // This prevents it from going outside the background
    width: 'auto',         // Keeps aspect ratio
    objectFit: 'contain', 
    marginBottom: '25px',
    display: 'block',      // Ensures proper spacing
    marginLeft: 'auto',    // Centers it
    marginRight: 'auto' }} 
          />
          <h4 style={{ color: '#D97706', fontSize: '1.4rem', marginBottom: '15px' }}>{cert.title}</h4>
          <p style={{ color: '#666', fontSize: '1rem', lineHeight: '1.5' }}>{cert.desc}</p>
        </div>
      ))}
    </div>

    {/* Bottom Trust Note */}
    <div style={{ marginTop: '60px', padding: '30px', backgroundColor: '#FCFAf7', borderRadius: '12px', textAlign: 'center' }}>
      <p style={{ color: '#444', fontStyle: 'italic' }}>
        "Our commitment to excellence is backed by these prestigious certifications, 
        providing our global partners with 100% transparency and peace of mind."
      </p>
    </div>
  </div>
)}



        {/* --- CONTACT PAGE CONTENT --- */}
        {activeTab === 'contact' && (
  <section style={{ 
    padding: '200px 8% 100px 8%', 
    minHeight: '100vh', 
    backgroundImage: `linear-gradient(rgba(255,255,255,0.9), rgba(255,255,255,0.9)), url(${heroBg})`, 
    backgroundSize: 'cover', 
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed'
  }}>
    <SectionHeading title="LET'S CONNECT" />
    
    <div style={{ display: 'flex', gap: '50px', flexWrap: 'wrap', maxWidth: '1200px', margin: '0 auto' }}>
      {/* Contact Info */}
      <div style={{ flex: '1', minWidth: '300px' }}>
        
        {/* OFFICE LOCATION */}
        <div style={{ marginBottom: '40px', display: 'flex', gap: '20px' }}>
          <div style={{ 
            backgroundColor: '#FFFFFF', 
            width: '60px', 
            height: '60px', 
            borderRadius: '50%', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
            flexShrink: 0 
          }}>
            <img src={contactlocation} alt="Location" style={{ width: '25px', height: '25px', objectFit: 'contain' }} />
          </div>
          <div>
            <h4 style={{ margin: '0 0 8px 0', color: '#D97706', fontSize: '1.2rem', fontWeight: 'bold' }}>OUR OFFICE</h4>
            <p style={{ color: '#444', margin: 0, lineHeight: '1.5' }}>44.44/37-5-4, Utukur, Kadapa, AP 516003
                <br/> Andhra Pradesh, India.</p>
          </div>
        </div>

        {/* EMAIL */}
        <div style={{ marginBottom: '40px', display: 'flex', gap: '20px' }}>
          <div style={{ 
            backgroundColor: '#FFFFFF', 
            width: '60px', 
            height: '60px', 
            borderRadius: '50%', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
            flexShrink: 0 
          }}>
            <img src={contactmail} alt="Email" style={{ width: '25px', height: '25px', objectFit: 'contain' }} />
          </div>
          <div>
            <h4 style={{ margin: '0 0 8px 0', color: '#D97706', fontSize: '1.2rem', fontWeight: 'bold' }}>EMAIL US</h4>
            <p style={{ color: '#444', margin: 0 }}>hanumanglobalexportsimports@gmail.com</p>
          </div>
        </div>

        {/* PHONE */}
        <div style={{ display: 'flex', gap: '20px' }}>
          <div style={{ 
            backgroundColor: '#FFFFFF', 
            width: '60px', 
            height: '60px', 
            borderRadius: '50%', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
            flexShrink: 0 
          }}>
            <img src={contactphone} alt="Phone" style={{ width: '25px', height: '25px', objectFit: 'contain' }} />
          </div>
          <div>
            <h4 style={{ margin: '0 0 8px 0', color: '#D97706', fontSize: '1.2rem', fontWeight: 'bold' }}>CALL US</h4>
            <p style={{ color: '#444', margin: 0 }}>+91 9381112460</p>
          </div>
        </div>

      </div>

      {/* Contact Form */}
      <div style={{ 
        flex: '1.5', 
        minWidth: '350px', 
        background: 'rgba(252, 250, 247, 0.95)', 
        padding: '40px', 
        borderRadius: '20px', 
        boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
        backdropFilter: 'blur(5px)'
      }}>
        <form onSubmit={(e) => { 
  e.preventDefault(); 
  
  // 1. Get values using their index (0=Name, 1=Email, 2=Message)
  const name = e.target.elements[0].value;
  const email = e.target.elements[1].value;
  const message = e.target.elements[2].value;
  const recipient = "919381112460"; 

  // 2. Exact format: Bold labels + single line breaks
  const text = `*New Inquiry*
*Name:* ${name}
*Email:* ${email}
*Message:* ${message}`;

  // 3. One-time encoding to prevent duplication
  const encodedText = encodeURIComponent(text);
  
  window.open(`https://wa.me/${recipient}?text=${encodedText}`, '_blank');
}}>
  <input type="text" placeholder="Your Name" required style={{ width: '100%', padding: '15px', marginBottom: '20px', border: '1px solid #ddd', borderRadius: '8px' }} />
  <input type="email" placeholder="Your Email" required style={{ width: '100%', padding: '15px', marginBottom: '20px', border: '1px solid #ddd', borderRadius: '8px' }} />
  <textarea placeholder="Your Message" rows="5" required style={{ width: '100%', padding: '15px', marginBottom: '20px', border: '1px solid #ddd', borderRadius: '8px' }}></textarea>
  
  <button type="submit" style={{ backgroundColor: '#000', color: '#fff', padding: '18px 40px', border: 'none', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', width: '100%' }}>
    SEND TO WHATSAPP
  </button>
</form>


      </div>
    </div>
  </section>
)}

        
        {activeTab === 'products' && (
  <section style={{ padding: '180px 8% 100px 8%', minHeight: '100vh', backgroundColor: '#FCFAf7' }}>
    {/* Navigation Toggle */}
    <div style={{ display: 'flex', gap: '20px', marginBottom: '40px', borderBottom: '2px solid #E5E7EB' }}>
      <button onClick={() => setProductType('groundnut')} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.1rem', fontWeight: 'bold', color: productType === 'groundnut' ? '#D97706' : '#888', borderBottom: productType === 'groundnut' ? '3px solid #D97706' : 'none', padding: '10px 20px' }}>GROUNDNUT</button>
      <button onClick={() => setProductType('cashew')} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.1rem', fontWeight: 'bold', color: productType === 'cashew' ? '#D97706' : '#888', borderBottom: productType === 'cashew' ? '3px solid #D97706' : 'none', padding: '10px 20px' }}>CASHEW</button>
    </div>

    {productType === 'groundnut' ? (
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <SectionHeading title="Major Types of Groundnut Kernels" />

        
        
        {/* --- PRODUCT DETAILS --- */}
        {[
          {
            img: groundnutImg,
            title: "Bold Groundnut Kernels",
            desc: "Bold groundnut kernels are large-sized, oval-shaped, and light reddish in colour. They are primarily cultivated in Gujarat and Rajasthan in India. Known for their high oil content and robust structure, these kernels are popular for:",
            uses: ["Oil extraction (due to high oil yield)", "Roasting and snacking purposes", "Confectionery and bakery applications"],
            specs: { Size: "Large (50/60, 60/70 count per ounce)", Skin: "Light red", Shape: "Oval", "Oil content": "48–50%" }
          },
          {
            img: groundnetinabout,
            title: "Java Groundnut Kernels",
            desc: "Java kernels are smaller and rounder than Bold kernels. They are typically white or pinkish and cultivated in South India, especially Tamil Nadu and Andhra Pradesh. Java kernels are highly preferred in the snack food industry.",
            uses: ["Peanut butter production", "Boiled peanut snacks", "Ready-to-eat mixes"],
            specs: { Size: "Medium-small (70/80, 80/90 count per ounce)", Skin: "Pinkish", Shape: "Round", "Oil content": "42–48%" }
          },
          {
            img: redpeanuts,
            title: "Redskin Groundnut Kernels",
            desc: "Redskin peanuts have a reddish-brown skin and are known for their strong nutty flavour. They are often used in natural peanut products where the skin is retained.",
            uses: ["Health snacks (because of antioxidant-rich skins)", "Granola, trail mixes, energy bars", "Peanut flour and natural spreads"],
            specs: { Skin: "Deep red", Size: "Medium to small", Flavour: "Intense", "Oil content": "47–50%", "Nutritional Value": "High in Fiber and antioxidants" }
          }
        ].map((item, idx) => (
          <div key={idx} style={{ display: 'flex', gap: '50px', marginBottom: '80px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
            <div style={{ flex: '1', minWidth: '300px' }}>
              <img src={item.img} alt={item.title} style={{ width: '100%', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', objectFit: 'cover', height: '350px' }} />
            </div>
            <div style={{ flex: '1.5', minWidth: '400px' }}>
              <h4 style={{ color: '#D97706', fontSize: '2rem', marginBottom: '20px' }}>{item.title}</h4>
              <p style={{ lineHeight: '1.7', color: '#444', marginBottom: '15px' }}>{item.desc}</p>
              <ul style={{ paddingLeft: '20px', marginBottom: '25px', color: '#555' }}>
                {item.uses.map((u, i) => <li key={i} style={{ marginBottom: '8px' }}>{u}</li>)}
              </ul>
              <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '10px', borderLeft: '5px solid #D97706' }}>
                <h5 style={{ margin: '0 0 10px 0', textTransform: 'uppercase', fontSize: '0.9rem', color: '#8B6B40' }}>Key Characteristics:</h5>
                {Object.entries(item.specs).map(([key, val]) => (
                  <p key={key} style={{ margin: '5px 0', fontSize: '0.95rem' }}><strong>{key}:</strong> {val}</p>
                ))}
              </div>
            </div>
          </div>
          
        ))}
        <div style={{ overflowX: 'auto', marginBottom: '60px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)', borderRadius: '12px' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: '#fff', textAlign: 'left' }}>
            <thead>
              <tr style={{ backgroundColor: '#D97706', color: '#fff' }}>
                {['Type', 'Shape', 'Skin Colour', 'Common Uses', 'Oil Content %'].map(h => (
                  <th key={h} style={{ padding: '15px', border: '1px solid #ddd' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                { t: 'Bold', s: 'Oval', c: 'Light Red', u: 'Oil, snacks, bakery', o: '45-50 %' },
                { t: 'Java', s: 'Round', c: 'Pinkish', u: 'Peanut butter, ready mixes', o: '42-48 %' },
                { t: 'Red Skin', s: 'Varies', c: 'Red', u: 'Natural snacks, health products', o: '47-50 %' }
              ].map((row, i) => (
                <tr key={i}>
                  <td style={{ padding: '12px', border: '1px solid #ddd', fontWeight: 'bold' }}>{row.t}</td>
                  <td style={{ padding: '12px', border: '1px solid #ddd' }}>{row.s}</td>
                  <td style={{ padding: '12px', border: '1px solid #ddd' }}>{row.c}</td>
                  <td style={{ padding: '12px', border: '1px solid #ddd' }}>{row.u}</td>
                  <td style={{ padding: '12px', border: '1px solid #ddd' }}>{row.o}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div style={{ padding: '15px', borderLeft: '5px solid #D97706', background: '#f9fafb' }}>
  <strong style={{ display: 'block', color: '#D97706' }}>Areas of Cultivation:</strong>
  Major growing states are Gujarat, Rajasthan, Madhya Pradesh, Tamil Nadu, Karnataka, Uttar Pradesh, Andhra Pradesh, Maharashtra, West Bengal and Telangana.
  <br /><br />
  <strong style={{ display: 'block', color: '#D97706' }}>Major Exporting Destinations (2024-2025):</strong>
  Indonesia, Vietnam, Philippines, Malaysia and Thailand.
</div>

        </div>

      </div>
    ) : (
  <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
    <SectionHeading title="Common Types of Cashews" />
    
    {/* --- CASHEW MAIN IMAGE --- */}
    <div style={{ width: '100%', marginBottom: '60px' }}>
      <img 
        src={cashewImg} 
        alt="Premium Cashews" 
        style={{ width: '100%', height: '450px', objectFit: 'cover', borderRadius: '20px', boxShadow: '0 15px 40px rgba(0,0,0,0.15)' }} 
      />
    </div>

    {/* --- GRADING SYSTEM EXPLANATION --- */}
    <div style={{ backgroundColor: '#fff', padding: '40px', borderRadius: '15px', marginBottom: '60px', borderLeft: '8px solid #D97706', boxShadow: '0 5px 15px rgba(0,0,0,0.05)' }}>
      <h4 style={{ color: '#D97706', fontSize: '1.8rem', marginBottom: '15px' }}>The Grading System</h4>
      <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#444' }}>
        The grading system for cashews is based on the number of nuts per pound (or grams), with <strong>lower numbers indicating larger and higher-quality nuts</strong>. 
        For example, W-180 has fewer nuts per pound compared to W-450, reflecting their size and quality differences.
      </p>
    </div>

    {/* --- CASHEW GRADES LIST --- */}
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginBottom: '80px' }}>
      {[
        { id: "W-180", title: "The King of Cashews", desc: "The largest and most expensive cashews available. Prized for size and remain intact, making them ideal for premium snacking." },
        { id: "W-210", title: "Jumbo Cashews", desc: "Slightly smaller than W-180 but still considered large. Used in high-end products and gourmet snacks." },
        { id: "W-240", title: "Mid-Sized Standard", desc: "Commonly found in nut mixes. More affordable choice for everyday use while maintaining good size." },
        { id: "W-320", title: "The Versatile Choice", desc: "The most widely available type. Perfect for snacking, cooking, and baking in various recipes." },
        { id: "W-450", title: "Economical Grade", desc: "The smallest whole grade. Ideal for processed products like cashew butter and energy bars." }
      ].map((grade, idx) => (
        <div key={idx} style={{ background: '#fff', padding: '30px', borderRadius: '15px', boxShadow: '0 5px 15px rgba(0,0,0,0.05)', borderBottom: '4px solid #D97706' }}>
          <h5 style={{ color: '#D97706', fontSize: '1.4rem', margin: '0 0 10px 0' }}>{grade.id}</h5>
          <h6 style={{ fontSize: '1rem', color: '#8B6B40', marginBottom: '15px', textTransform: 'uppercase' }}>{grade.title}</h6>
          <p style={{ color: '#555', lineHeight: '1.6', fontSize: '0.95rem' }}>{grade.desc}</p>
        </div>
      ))}
    </div>

    {/* --- COOKING & USES SECTION --- */}
    <div style={{ display: 'flex', gap: '50px', alignItems: 'center', flexWrap: 'wrap', backgroundColor: '#FDF8F2', padding: '50px', borderRadius: '20px' }}>
      <div style={{ flex: 1, minWidth: '350px' }}>
        <h4 style={{ color: '#2D2D2D', fontSize: '2rem', marginBottom: '30px' }}>Culinary Applications</h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
          {[
            { title: "Premium Snacking", text: "Larger cashews (W-180, W-210) are used for luxury gift boxes and standalone snacking due to texture.", icon: "🎁" },
            { title: "Cooking & Baking", text: "W-240 and W-320 are the industry standards for curries, stir-fries, and traditional desserts.", icon: "🍳" },
            { title: "Processed Products", text: "Smaller grades (W-450) are efficiently used for cashew butter, nut milks, and granulated toppings.", icon: "🏭" }
          ].map((use, i) => (
            <div key={i} style={{ display: 'flex', gap: '20px' }}>
              <span style={{ fontSize: '1.5rem' }}>{use.icon}</span>
              <div>
                <h5 style={{ margin: '0 0 5px 0', color: '#D97706', fontSize: '1.1rem' }}>{use.title}</h5>
                <p style={{ margin: 0, color: '#666', lineHeight: '1.5' }}>{use.text}</p>
              </div>
            </div>
          ))}
        </div>
        <p style={{ marginTop: '40px', fontStyle: 'italic', color: '#8B6B40' }}>
          Understanding these types ensures you choose the right variety for your specific culinary or manufacturing needs.
        </p>
      </div>
      <div style={{ flex: 0.8, minWidth: '300px' }}>
        <img src={servicesImg} alt="Cashew Cooking" style={{ width: '100%', borderRadius: '15px', filter: 'sepia(0.2)' }} />
      </div>
    </div>
  </div>
)}
  </section>
)}
{activeTab === 'services' && (
  <section style={{ padding: '180px 8% 100px 8%', minHeight: '100vh', backgroundColor: '#FCFAf7' }}>
    <SectionHeading title="Our Professional Services" />

    {/* 1. B2B SERVICES */}
    <div style={{ display: 'flex', gap: '60px', marginBottom: '100px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
      <div style={{ flex: '1', minWidth: '350px' }}>
        <img src={businessservice} alt="B2B Services" style={{ width: '100%', height: '400px', objectFit: 'cover', borderRadius: '20px', boxShadow: '0 15px 30px rgba(0,0,0,0.1)' }} />
      </div>
      <div style={{ flex: '1.5', minWidth: '400px' }}>
        <h4 style={{ color: '#D97706', fontSize: '2.2rem', marginBottom: '20px', textTransform: 'uppercase' }}>B2B Services</h4>
        <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: '#444' }}>
          <strong>{companyName}</strong> builds strong B2B connections with industries and traders to source quality products for international markets.
        </p>
        <ul style={{ marginTop: '20px', color: '#555', lineHeight: '1.9', listStyleType: 'square', paddingLeft: '20px' }}>
          <li>Reliable sourcing partner for farmers, food manufacturers, and traders by offering export-grade agricultural products.</li>
          <li>Focus on consistent product quality, timely delivery, and long-term supply arrangements.</li>
          <li>Bridge Indian producers with global buyers, creating a network that meets international standards.</li>
          <li>Maintaining strong ties with upstream suppliers and downstream buyers across the globe.</li>
        </ul>
      </div>
    </div>

    {/* 2. CUSTOMS HOUSE AGENT SERVICES */}
    <div style={{ display: 'flex', gap: '60px', marginBottom: '100px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
      <div style={{ flex: '1', minWidth: '350px' }}>
        <img src={customs} alt="Customs Services" style={{ width: '100%', height: '400px', objectFit: 'cover', borderRadius: '20px', boxShadow: '0 15px 30px rgba(0,0,0,0.1)' }} />
      </div>
      <div style={{ flex: '1.5', minWidth: '400px' }}>
        <h4 style={{ color: '#D97706', fontSize: '2.2rem', marginBottom: '20px', textTransform: 'uppercase' }}>Customs House Agent Services</h4>
        <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: '#444' }}>
          A professional link between our firm and the customs department, ensuring smooth clearance for all export and import activities.
        </p>
        <ul style={{ marginTop: '20px', color: '#555', lineHeight: '1.9', paddingLeft: '20px' }}>
          <li><strong>Documentation:</strong> Handling all procedures and ensuring compliance with government regulations.</li>
          <li><strong>Efficiency:</strong> Coordinating with port authorities to avoid delays and penalties.</li>
          <li><strong>Consultancy:</strong> Advising on HS codes, duty calculations, and required trade licenses.</li>
          <li><strong>Focus:</strong> We manage complex formalities so you can focus on your core business growth.</li>
        </ul>
      </div>
    </div>

    {/* 3. PACKING AND STORAGES */}
    <div style={{ display: 'flex', gap: '60px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
      <div style={{ flex: '1', minWidth: '350px' }}>
        <img src={packaging} alt="Storage Facilities" style={{ width: '100%', height: '600px', objectFit: 'cover', borderRadius: '20px', boxShadow: '0 15px 30px rgba(0,0,0,0.1)' }} />
      </div>
      <div style={{ flex: '1.5', minWidth: '400px' }}>
        <h4 style={{ color: '#D97706', fontSize: '2.2rem', marginBottom: '20px', textTransform: 'uppercase' }}>Packing and Storages</h4>
        <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: '#444', marginBottom: '30px' }}>
          Proper packing and storage are essential to maintain quality, prevent contamination, and minimize losses throughout the supply chain.
        </p>

        <div style={{ marginBottom: '30px', borderLeft: '4px solid #D97706', paddingLeft: '20px' }}>
          <h5 style={{ color: '#8B6B40', fontSize: '1.4rem', marginBottom: '10px' }}>1. Packing Practices</h5>
          <p style={{ color: '#555', fontSize: '1rem' }}>Food-grade materials (Jute/PP bags) with moisture liners, secure sealing, and full traceability labeling for every batch.</p>
        </div>

        <div style={{ marginBottom: '30px', borderLeft: '4px solid #D97706', paddingLeft: '20px' }}>
          <h5 style={{ color: '#8B6B40', fontSize: '1.4rem', marginBottom: '10px' }}>2. Storage Conditions</h5>
          <p style={{ color: '#555', fontSize: '1rem' }}>Safe moisture levels (below 10%), well-ventilated environments, and pallet-based stacking to prevent floor moisture absorption.</p>
        </div>

        <div style={{ marginBottom: '30px', borderLeft: '4px solid #D97706', paddingLeft: '20px' }}>
          <h5 style={{ color: '#8B6B40', fontSize: '1.4rem', marginBottom: '10px' }}>3. Management & Monitoring</h5>
          <p style={{ color: '#555', fontSize: '1rem' }}>Strict FIFO (First-In, First-Out) systems, regular pest monitoring, and comprehensive inspection records.</p>
        </div>

        <div style={{ borderLeft: '4px solid #D97706', paddingLeft: '20px' }}>
          <h5 style={{ color: '#8B6B40', fontSize: '1.4rem', marginBottom: '10px' }}>4. Transportation</h5>
          <p style={{ color: '#555', fontSize: '1rem' }}>Pre-dispatch checks and clean, dry transit vehicles to ensure product integrity from our warehouse to your door.</p>
        </div>
      </div>
    </div>
        {/* 4. LOGISTICS SERVICES */}
    <div style={{ display: 'flex', gap: '60px', marginTop: '100px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
      <div style={{ flex: '1', minWidth: '350px' }}>
        <img src={logistics} alt="Logistics and Supply Chain" style={{ width: '100%', height: '400px', objectFit: 'cover', borderRadius: '20px', boxShadow: '0 15px 30px rgba(0,0,0,0.1)' }} />
      </div>
      <div style={{ flex: '1.5', minWidth: '400px' }}>
        <h4 style={{ color: '#D97706', fontSize: '2.2rem', marginBottom: '20px', textTransform: 'uppercase' }}>Logistics and Supply Chain</h4>
        <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: '#444' }}>
          <strong>{companyName}</strong> provides end-to-end logistics solutions, ensuring that our agricultural products move from Indian farms to international destinations with maximum efficiency.
        </p>
        <ul style={{ marginTop: '20px', color: '#555', lineHeight: '1.9', paddingLeft: '20px' }}>
          <li><strong>Multimodal Transport:</strong> Seamless integration of road, rail, and sea freight to optimize delivery timelines.</li>
          <li><strong>Real-time Tracking:</strong> Advanced monitoring systems to provide transparency and updates throughout the transit process.</li>
          <li><strong>Global Network:</strong> Partnerships with leading shipping lines and freight forwarders to ensure reach in key international markets.</li>
          <li><strong>Risk Management:</strong> Comprehensive transit insurance and careful handling protocols to protect cargo value.</li>
          <li><strong>Last-Mile Delivery:</strong> Ensuring products reach the buyer's warehouse in the same premium condition they left ours.</li>
        </ul>
      </div>
    </div>

  </section>
)}




        {/* Note: Tabs like Gallery, Blogs, etc. can be expanded similarly with SectionHeading and Flex wrappers */}
      </main>

      {/* Footer */}
      {/* <footer style={{ backgroundColor: '#000', color: '#fff', padding: '40px 8%', textAlign: 'center', fontSize: '0.9rem' }}>
        <p>© {new Date().getFullYear()} {companyName}. All Rights Reserved.</p>
      </footer> */}
      <footer style={{ backgroundColor: '#000', color: '#fff', padding: '70px 5% 40px 5%', borderTop: '5px solid #8B6B40' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '40px' }}>
            
            {/* LEFT: Logo */}
            <div style={{ flex: '1', minWidth: '180px' }}>
              <img src={logoImg} alt="Footer Logo" style={{ height: '75px', width: 'auto', objectFit: 'contain', mixBlendMode: 'lighten' }} />
            </div>

            {/* MIDDLE: Info Info */}
            <div style={{ flex: '2', minWidth: '300px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ width: 'fit-content' }}>
                <h4 style={{ color: '#D97706', marginBottom: '25px', fontSize: '1.1rem', fontWeight: '900', letterSpacing: '1px' }}>INFORMATION INFO</h4>
                <div style={{ display: 'flex', gap: '80px' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                    {['home', 'about', 'services'].map(item => (<button key={item} onClick={() => navigateTo(item)} style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer', textTransform: 'uppercase', fontSize: '0.85rem', textAlign: 'left', opacity: 0.7 }}>{item}</button>))}
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                    {['products', 'Certifications', 'gallery', 'contact'].map(item => (<button key={item} onClick={() => navigateTo(item)} style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer', textTransform: 'uppercase', fontSize: '0.85rem', textAlign: 'left', opacity: 0.7 }}>{item}</button>))}
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT: Address Info */}
            <div style={{ flex: '1.5', minWidth: '320px', display: 'flex', flexDirection: 'column', gap: '25px' }}>
              <h4 style={{ color: '#D97706', fontSize: '1.1rem', fontWeight: '900', letterSpacing: '1px' }}>ADDRESS INFO</h4>
              <div style={{ display: 'flex', gap: '15px' }}>
                <img src={locationIcon} alt="Loc" style={{ width: '25px', height: '25px', objectFit: 'contain' }} />
                <div>
                  <strong style={{ color: '#D97706', fontSize: '1rem', display: 'block' }}>Head Office</strong>
                  <p style={{ margin: '5px 0', fontSize: '0.9rem', opacity: 0.8 }}>44.44/37-5-4, Utukur, Kadapa, AP 516003</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                <img src={mailIcon} alt="Mail" style={{ width: '25px', height: '25px', objectFit: 'contain' }} />
                <div>
                  <strong style={{ color: '#D97706', fontSize: '1rem', display: 'block' }}>Email Info</strong>
                  <p style={{ margin: '0', fontSize: '0.9rem', opacity: 0.8 }}>hanumanglobalexportsimports@gmail.com</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                <img src={phoneIcon} alt="Phone" style={{ width: '25px', height: '25px', objectFit: 'contain' }} />
                <div>
                  <strong style={{ color: '#D97706', fontSize: '1rem', display: 'block' }}>Contact Us</strong>
                  <p style={{ margin: '0', fontSize: '0.9rem', opacity: 0.8 }}>9381112460</p>
                </div>
              </div>
            </div>
          </div>
        </footer>
    </div>
  );
};

export default Hanuman;


