'use client';

import { useState } from 'react';

export default function PartnershipPage() {
  const [isAnnual, setIsAnnual] = useState(false);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#f7fafc]">
      {/* Hero Section */}
      <section className="bg-[#1E2A38] text-white py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-8 tracking-tight">
          Partner With Us to Map the Future of Longevity
          </h1>
          
          {/* Funding Progress Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="bg-white/10 rounded-full h-4 mb-4 backdrop-blur-sm border border-white/20">
              <div 
                className="bg-gradient-to-r from-[#64BC6E] to-[#52a35b] h-full rounded-full transition-all duration-500 ease-out"
                style={{ width: '0%' }}
              ></div>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-white/80 font-medium">First Milestone</span>
              <span className="text-white font-semibold">$0 / $2,000</span>
            </div>
            <p className="text-[#64BC6E] text-sm mt-2 font-medium">
              Help us build the next generation of tools..
            </p>
          </div>
          
          <p className="text-lg text-gray-300 leading-relaxed max-w-4xl mx-auto">
            Longevity is a field that is in the immediate need of resources. This website&apos;s core mission is to bring people in and connect them with the right opportunities in the industry. By becoming a partner, you don&apos;t just get powerful tools and visibility. You actively support our mission to connect the people who are building our long-lived future. Every contribution helps us grow this vital community resource.
          </p>
        </div>
      </section>

      {/* Partnership Packages Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-8">
              Choose Your Partnership Level
            </h2>
            
            {/* Annual/Monthly Toggle */}
            <div className="flex justify-center mb-16">
              <div className="bg-gray-100 p-1 rounded-lg">
                <button 
                  onClick={() => setIsAnnual(false)}
                  className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                    !isAnnual 
                      ? 'bg-white text-gray-900 shadow-sm' 
                      : 'text-gray-500 hover:text-gray-900'
                  }`}
                >
                  Monthly
                </button>
                <button 
                  onClick={() => setIsAnnual(true)}
                  className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                    isAnnual 
                      ? 'bg-white text-gray-900 shadow-sm' 
                      : 'text-gray-500 hover:text-gray-900'
                  }`}
                >
                  Annual <span className="text-[#64BC6E] text-xs ml-1">(Save 20%)</span>
                </button>
              </div>
            </div>
            
            {/* Partnership Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Insider Membership */}
              <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow flex flex-col h-full">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Insider Membership</h3>
                  <p className="text-gray-600 mb-4">For Individuals: Researchers, students, and longevity enthusiasts.</p>
                  <div className="text-4xl font-bold text-[#64BC6E] mb-2">
                    ${isAnnual ? '12' : '15'}
                  </div>
                  <div className="text-gray-500">
                    / month
                    {isAnnual && (
                      <div className="text-sm text-[#64BC6E] mt-1">
                        Save 20% • Billed annually ($144)
                      </div>
                    )}
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8 flex-1">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#64BC6E] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700"><strong>Pro Map Access:</strong> Navigate the ecosystem with rich data on every connection.</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#64BC6E] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700"><strong>Monthly &quot;Insider Report&quot;:</strong> Stay ahead of trends with our deep-dive PDF.</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#64BC6E] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700"><strong>Full Report Archive:</strong> Research with confidence using all past reports.</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#64BC6E] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700"><strong>Advanced Search & Filtering:</strong> Find exactly what you need, instantly.</span>
                  </li>
                </ul>
                
                <button 
                  onClick={() => {
                    const url = isAnnual 
                      ? 'https://buy.stripe.com/bJebJ18dud7NfGlcn58g002' 
                      : 'https://buy.stripe.com/6oUdR9dxO5Fl65LaeX8g000';
                    window.open(url, '_blank');
                  }}
                  className="w-full px-6 py-3 bg-[#64BC6E] text-white font-semibold rounded-lg hover:bg-[#52a35b] transition-colors mt-auto"
                >
                  Become a Member
                </button>
              </div>

              {/* Startup Partnership */}
              <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-[#64BC6E] hover:shadow-xl transition-shadow relative flex flex-col h-full">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-[#64BC6E] text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Recommended
                  </span>
                </div>
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Startup Partnership</h3>
                  <p className="text-gray-600 mb-4">For Startups, Labs, and Organizations: The perfect package to increase your visibility and attract talent.</p>
                  <div className="text-4xl font-bold text-[#64BC6E] mb-2">
                    ${isAnnual ? '200' : '250'}
                  </div>
                  <div className="text-gray-500">
                    / month
                    {isAnnual && (
                      <div className="text-sm text-[#64BC6E] mt-1">
                        Save 20% • Billed annually ($2400)
                      </div>
                    )}
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8 flex-1">
                  <li className="flex items-start">
                    <span className="text-gray-700">Everything in Membership, for up to 5 team members.</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#64BC6E] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700"><strong>Highlighted Map Node:</strong> Stand out from the crowd with a &quot;Partner&quot; badge.</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#64BC6E] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700"><strong>Featured Job Post:</strong> Attract top talent with a premium monthly listing.</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#64BC6E] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700"><strong>Annual Company Spotlight:</strong> Build your brand authority in our Insider Report.</span>
                  </li>
                </ul>
                
                <button 
                  onClick={() => {
                    const url = isAnnual 
                      ? 'https://buy.stripe.com/7sY6oH51ic3J51HaeX8g003' 
                      : 'https://buy.stripe.com/3cIaEXctK4Bhcu9gDl8g001';
                    window.open(url, '_blank');
                  }}
                  className="w-full px-6 py-3 bg-[#64BC6E] text-white font-semibold rounded-lg hover:bg-[#52a35b] transition-colors mt-auto"
                >
                  Become a Startup Partner
                </button>
              </div>

              {/* Strategic Partnership */}
              <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow flex flex-col h-full">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Strategic Partnership</h3>
                  <p className="text-gray-600 mb-4">For VCs, Foundations, and Industry Leaders: For those who want to be at the forefront of the ecosystem.</p>
                  <div className="text-2xl font-bold text-gray-600 mb-2">Custom Pricing</div>
                </div>
                
                <ul className="space-y-4 mb-8 flex-1">
                  <li className="flex items-start">
                    <span className="text-gray-700">Everything in Startup Partnership, for your entire organization.</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#64BC6E] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700"><strong>Monthly Intelligence Briefing:</strong> Make smarter investment decisions with 1-on-1 calls.</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#64BC6E] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700"><strong>Homepage Logo Placement:</strong> Maximize your brand exposure as an industry leader.</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#64BC6E] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700"><strong>Exclusive Quarterly Reports:</strong> Access market intelligence not available to others.</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#64BC6E] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700"><strong>Influence the Roadmap:</strong> Help shape the future of longevity data.</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#64BC6E] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700"><strong>Thought Leadership Content:</strong> Establish your authority with co-hosted webinars or interviews.</span>
                  </li>
                </ul>
                
                <a
                  href="mailto:alvaro@joinlongevity.org"
                  className="block w-full px-6 py-3 bg-gray-800 text-white font-semibold rounded-lg hover:bg-gray-700 transition-colors text-center mt-auto"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-4">
              {[
                {
                  question: "Can I cancel my membership anytime?",
                  answer: "Yes, you can cancel your membership at any time. There are no long-term commitments or cancellation fees. Your access will continue until the end of your current billing period."
                },
                {
                  question: "What's the difference between the Free Map and the Pro Map?",
                  answer: "The Free Map provides basic information about organizations and connections in the longevity ecosystem. The Pro Map includes rich data on funding rounds, partnership details, key personnel connections, advanced filtering options, and detailed company profiles that aren't available in the free version."
                },
                {
                  question: "Do you offer discounts for non-profits?",
                  answer: "Yes, we offer special pricing for qualified non-profit organizations, academic institutions, and student researchers. Please contact us at partnerships@joinlongevity.org with your organization details to discuss available discounts."
                }
              ].map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-lg">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-gray-900">
                      {faq.question}
                    </h3>
                    <svg
                      className={`w-5 h-5 text-gray-500 transition-transform ${
                        openFAQ === index ? 'transform rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openFAQ === index && (
                    <div className="px-6 pb-4">
                      <p className="text-gray-700 leading-relaxed">
                        {faq.answer.includes('partnerships@joinlongevity.org') ? (
                          <>
                            {faq.answer.split('partnerships@joinlongevity.org')[0]}
                            <a href="mailto:partnerships@joinlongevity.org" className="text-[#64BC6E] hover:text-[#52a35b] transition-colors">
                              partnerships@joinlongevity.org
                            </a>
                            {faq.answer.split('partnerships@joinlongevity.org')[1]}
                          </>
                        ) : (
                          faq.answer
                        )}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
