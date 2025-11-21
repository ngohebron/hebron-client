import React from "react";

export default function DonationHub() {
  return (
    <div className="bg-[#f8f8ea] min-h-screen font-sans">
      {/* Header */}
      <nav className="flex justify-between items-center px-6 py-4 bg-white shadow">
        <div className="flex items-center space-x-2">
          {/* Logo */}
          <img src="/logo.png" alt="Hebron Foundation" className="w-10 h-10"/>
          <span className="font-semibold text-lg">Hebron Foundation</span>
        </div>
        <ul className="flex space-x-4 text-gray-700">
          <li>About Us</li>
          <li>Our Work</li>
          <li>Get Involved</li>
          <li>Event Gallery</li>
        </ul>
        <button className="bg-green-900 text-white py-2 px-5 rounded-lg">Support the cause</button>
      </nav>

      {/* Hero Section */}
      <section className="w-full flex flex-col items-center justify-center bg-white">
        {/* Replace with your hero image */}
        <img src="/hero-image.jpg" alt="Donation" className="w-full max-h-96 object-cover"/>
        <h2 className="mt-4 text-2xl font-medium text-[#392b22]">Your Kindness can bring a change</h2>
      </section>

      {/* Tabs and campaign */}
      <section className="max-w-3xl mx-auto mt-8 p-6 bg-white rounded-lg shadow">
        <div className="flex space-x-6 border-b mb-6">
          <button className="border-b-4 border-green-900 text-green-900 pb-2">Food</button>
          <button className="pb-2">Education</button>
          <button className="pb-2">Clothing</button>
          <button className="pb-2">Child Development</button>
        </div>
        <div className="flex gap-8 items-center mb-6">
          <div>
            <p className="text-gray-600 mb-3">
              No one should have to sleep hungry. Yet, for many, a meal is a luxury. At Hebron, we believe a shared meal is more than food — it’s a gesture of friendship and care. When you give, you’re not just filling a plate; you’re restoring hope and dignity to someone’s day.
            </p>
            <button className="bg-green-900 text-white py-2 px-5 rounded-lg">Support the cause</button>
          </div>
          {/* Replace with your side image */}
          <img src="/donation-box.jpg" className="w-40 h-40 object-cover rounded-md shadow" alt="Donation box"/>
        </div>
      </section>

      {/* Gallery grid */}
      <section className="max-w-4xl mx-auto my-8 grid grid-cols-2 md:grid-cols-4 gap-6">
        {/* Replace with your image sources */}
        <img src="/gallery-1.jpg" className="rounded-md shadow h-32 object-cover" alt="Gallery item"/>
        <img src="/gallery-2.jpg" className="rounded-md shadow h-32 object-cover" alt="Gallery item"/>
        <img src="/gallery-3.jpg" className="rounded-md shadow h-32 object-cover" alt="Gallery item"/>
        <img src="/gallery-4.jpg" className="rounded-md shadow h-32 object-cover" alt="Gallery item"/>
      </section>

      {/* Campaign progress */}
      <section className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
        {[
          {
            title: "Provide Nutritious Meal To Hungry Children",
            raised: 65000
          },
          {
            title: "Empower Youth Through Education",
            raised: 75000
          },
          {
            title: "Give Warmth And Dignity To Those In Need",
            raised: 30000
          },
          {
            title: "Help Every Child Grow, Learn, And Thrive",
            raised: 50000
          }
        ].map((c, i) => (
          <div className="bg-green-800 text-white p-5 rounded shadow flex flex-col items-center" key={i}>
            <div className="w-full mb-4">
              <h3 className="text-lg font-semibold mb-2">{c.title}</h3>
              <div className="bg-white h-2 rounded w-full mb-2">
                <div
                  className="bg-green-900 h-2 rounded"
                  style={{width: `${c.raised/100000*100}%`}}
                ></div>
              </div>
              <div className="flex justify-between text-sm">
                <span>₹ {c.raised.toLocaleString()}</span>
                <span>₹ 100,000</span>
              </div>
            </div>
            <button className="bg-white text-green-900 font-semibold py-2 px-4 rounded">Support the cause</button>
          </div>
        ))}
      </section>

      {/* Donation info */}
      <section className="max-w-3xl mx-auto my-12 p-8 bg-white rounded shadow">
        <h4 className="text-xl font-bold mb-6 text-center">What Your Donation Supports</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div>
            <div className="text-3xl">🍽️</div>
            <div className="font-semibold mt-2">Feeds the needy</div>
            <div className="text-gray-700 text-sm">Every ₹30 serves a warm, wholesome meal and reminds someone they are not forgotten.</div>
          </div>
          <div>
            <div className="text-3xl">📚</div>
            <div className="font-semibold mt-2">Supports education</div>
            <div className="text-gray-700 text-sm">Books, bags, and dreams — your gift helps a child stay in school and keep learning.</div>
          </div>
          <div>
            <div className="text-3xl">🧣</div>
            <div className="font-semibold mt-2">Warmth to the Poor</div>
            <div className="text-gray-700 text-sm">Bring comfort and confidence through clean, seasonal clothing to those in need.</div>
          </div>
          <div>
            <div className="text-3xl">👶</div>
            <div className="font-semibold mt-2">Child Development</div>
            <div className="text-gray-700 text-sm">Bring comfort & confidence through clean, seasonal clothing to those in need.</div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto my-12 p-8 bg-white rounded shadow">
        <h4 className="text-xl font-bold mb-6">Frequently Asked Questions</h4>
        <ul className="space-y-2">
          <li>How can I make a donation to Hebron Foundation?</li>
          <li>Will I get a receipt for my donation?</li>
          <li>Is my donation tax-deductible?</li>
          <li>Can I donate items like clothes or books instead of money?</li>
          <li>How safe is it to donate online?</li>
          <li>Can I make a monthly or recurring donation?</li>
        </ul>
        <div className="mt-6 p-4 bg-green-200 rounded">
          For any further queries reach out to <br />
          <span className="font-medium">Email:</span> info@hebronfoundation.com <br />
          <span className="font-medium">Contact:</span> 8793255622
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#f8f8ea] mt-12 py-8 border-t">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center px-8">
          <div>
            <span className="font-semibold">Hebron Foundation</span>
            <div className="text-sm">H.No. B 23, Limbore Plot, Near Arun Cinema Theater, Dapodi, Pune - 411012, Maharashtra</div>
            <div className="text-sm">Contact: 8793255622</div>
            <div className="text-sm">Email: info@hebronfoundation@gmail.com</div>
          </div>
          <div className="mt-4 md:mt-0 flex flex-col items-end">
            <button className="bg-green-900 text-white py-2 px-5 rounded-lg mb-2">Support a cause</button>
            <ul className="flex space-x-3 text-sm">
              <li>About Us</li>
              <li>What We Do</li>
              <li>Donate for a Cause</li>
              <li>Event Gallery</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
        <div className="text-center text-xs mt-6">© 2025 Hebron Foundation. All rights reserved.</div>
      </footer>
    </div>
  );
}
