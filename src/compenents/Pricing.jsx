import React from "react";
import robot1 from "./assets/pictures/bannerWeb.png";

const Pricing = () => {
  return (
    <>
      <div className="w-full mx-auto">
        <div className="relative">
          <div
            className="absolute w-full h-full flex flex-col justify-center items-center z-10 p-4"
            style={{ background: "rgba(0, 0, 0, 0.4)" }}
          >
            <h3 className="text-center text-sm sm:text-lg md:text-xl lg:text-2xl text-white my-2 sm:my-3">
              Let's talk pricing.
            </h3>
            <p className="text-center text-xs sm:text-sm md:text-lg lg:text-xl text-white">
              ** Please note that all solutions are custom tailored and pricing
              may vary **
            </p>
          </div>
          <img
            className="w-full h-auto object-cover"
            src={robot1}
            alt="Innovative Solutions"
          />
        </div>
      </div>

      <div className="p-5">
        <section className="mb-8 py-4">
          <h2 className="text-3xl text-center font-semibold text-red-600 pb-2">
            Custom Website Builds
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead>
                <tr className="w-full h-auto bg-[#FF0033] text-center">
                  <th className="p-4 border-r-2 border-white-300 text-[#fff]">
                    Tier
                  </th>
                  <th className="p-4 border-r-2 border-white-300 text-[#fff]">
                    Features
                  </th>
                  <th className="p-4 border-r-2 border-white-300 text-[#fff]">
                    Price
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b-2 border-gray-300">
                  <td className="p-4 text-center border-r-2 border-gray-300">
                    Simple
                  </td>
                  <td className="p-4 text-left border-r-2 border-gray-300">
                    Company information, pictures, services offered, Google
                    Analytics integration, Calendly integration, Social Sharing
                    buttons
                  </td>
                  <td className="p-4 text-center border-r-2 border-gray-300">
                    $500 - $1000
                  </td>
                </tr>
                <tr className="bg-gray-50 border-b-2 border-gray-300">
                  <td className="p-4 text-center border-r-2 border-gray-300">
                    Medium
                  </td>
                  <td className="p-4 text-left border-r-2 border-gray-300">
                    Company information, pictures, videos, email collection with
                    Mailchimp integration, geolocation API, one API call of your
                    choosing
                  </td>
                  <td className="p-4 text-center border-r-2 border-gray-300">
                    $1000 - $1500
                  </td>
                </tr>
                <tr className="border-b-2 border-gray-300">
                  <td className="p-4 text-center border-r-2 border-gray-300">
                    High
                  </td>
                  <td className="p-4 text-left border-r-2 border-gray-300">
                    All features of the medium tier plus additional API calls,
                    payment gateways, or e-commerce integration
                  </td>
                  <td className="p-4 text-center border-r-2 border-gray-300">
                    $1500 - $2500
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-4 p-4">
            <h3 className="text-xl font-semibold py-2 text-[#FF0033]">
              (Optional) Add-ons:
            </h3>
            <div className="text-justify">
              <ul className="list-disc pl-6 py-2 space-y-2">
                <li className="font-medium text-[#FF0033]">--free:</li>
                <ul className="list-disc pl-6 pb-2 space-y-1">
                  <li>
                    Social Sharing - 1-click share website to social media:
                    free.
                  </li>
                  <li>
                    Google Ads Call tracking - tracks the number of phone dials
                    direct from your website: free.
                  </li>
                  <li>
                    Calendly - allow clients to schedule meetings from your
                    website: free.
                  </li>
                  <li>
                    Google Business Profile - set up business profile on Google
                    and connect website for more visibility: free (option to run
                    google ads later).
                  </li>
                  <li>Website Speed Optimization - free</li>
                  <li>
                    Email integration - email form direct from website to your
                    inbox, free for medium and complex site builds.
                  </li>
                </ul>
                <li className="font-medium text-[#FF0033]">--paid:</li>
                <ul className="list-disc pl-6 pb-2 space-y-1">
                  <li>
                    Multilingual Support - ability to toggle between languages
                    on your website with the Waglut API: $32 per month.
                  </li>
                  <li>
                    Social Proof Notifications - notified for recent website
                    visits and purchases for client outreach with the TrustPulse
                    API: $15 per month.
                  </li>
                  <li>
                    CRM Integration - Salesforce and other back-end integrations
                    are priced individually.
                  </li>
                  <li>
                    Pop-ups Email forms - email form pop-up on website entry or
                    exit: $10 per month.
                  </li>
                  <li>
                    Email collection - collect email list: free set-up for
                    medium and complex site builds: monthly data fee (typically
                    less than $10).
                  </li>
                </ul>
              </ul>
              <p className="text-lg py-2 text-[#FF0033]">
                **Feel free to contact us about any API integration not listed!
              </p>
              <p className="text-md text-red-600-500">
                ** Shopify Store Program Coming soon!!
              </p>
            </div>
          </div>
        </section>

        <hr />
        <section className="mb-8 bg-white p-4  rounded-lg">
          <h2 className="text-3xl text-center font-semibold py-4 text-red-600">
            AI Virtual Assistants
          </h2>
          <table className="w-full table-auto border-collapse border border-gray-300">
            <thead>
              <tr className="bg-[#FF0033] text-white">
                <th className="py-3 px-4 border border-gray-300">Tier</th>
                <th className="py-3 px-4 border border-gray-300">Features</th>
                <th className="py-3 px-4 border border-gray-300">Price</th>
              </tr>
            </thead>
            <tbody>
              <tr className="even:bg-gray-50">
                <td className="py-2 px-4 border border-gray-300">Basic</td>
                <td className="py-2 px-4 border border-gray-300">
                  Basic Q&A, guides users on buying or using your services,
                  continuous updates, integrates into your website with one line
                  of code
                </td>
                <td className="py-2 px-4 border border-gray-300">
                  $1000 setup fee + $20 per month
                </td>
              </tr>
              <tr className="even:bg-gray-50">
                <td className="py-2 px-4 border border-gray-300">Advanced</td>
                <td className="py-2 px-4 border border-gray-300">
                  Basic Q&A, guides on buying and navigating the website,
                  multilingual support in English and Spanish
                </td>
                <td className="py-2 px-4 border border-gray-300">
                  $1000 - $2500 setup fee + $20 per month
                </td>
              </tr>
              <tr className="even:bg-gray-50">
                <td className="py-2 px-4 border border-gray-300">Premium</td>
                <td className="py-2 px-4 border border-gray-300">
                  Integrates CRM like Salesforce or other back-end systems,
                  available on multiple platforms (SMS, Facebook Messenger,
                  Slack, Microsoft Teams, and WhatsApp), can be built to assist
                  customers, retain marketing leads, book meetings, and close
                  more sales
                </td>
                <td className="py-2 px-4 border border-gray-300">
                  $2500 - $5000 setup fee + $100 per month
                </td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className="mb-8 p-3 bg-white s rounded-lg">
          <h2 className="text-2xl font-semibold text-[#FF0033] mb-4">
            AI Assistant Add-ons (optional):
          </h2>
          <ul className="list-disc pl-8 space-y-2">
            <li className="text-gray-700">
              Monthly report of customer conversations and data:{" "}
              <span className="font-semibold">$20 per month</span>
            </li>
            <li className="text-gray-700">
              Weekly report of customer conversations and data:{" "}
              <span className="font-semibold">$40 per month</span>
            </li>
            <li className="text-gray-700">
              Dashboard Access to conversations and customer data:{" "}
              <span className="font-semibold">$140 per month</span>
            </li>
            <li className="text-gray-700">
              "Discovery" Search ability for documents and website:{" "}
              <span className="font-semibold">$200 per month</span>
            </li>
          </ul>
        </section>

        <hr />

        <section className="mb-8 bg-white  rounded-lg overflow-hidden">
          <h1 className="text-4xl text-center font-semibold text-red-600 py-4 bg-gray-100">
            SEO Services
          </h1>
          <hr />
          <div className="mb-4 p-6">
            <h2 className="text-3xl text-center font-semibold text-red-600 py-4">
              Technical SEO
            </h2>
            <p className="text-lg mb-2">
              We optimize your website's code, metadata, tags, text, and
              structure to improve its ranking in search engine results pages
              (SERPs). Our comprehensive SEO services include:
            </p>
            <ul className="list-disc pl-8">
              <li>SEO report with website breakdown for improvement</li>
              <li>Keyword report tailored to your business</li>
            </ul>
          </div>
          <div className="mb-4 p-6">
            <h3 className="text-xl font-semibold text-[#FF0033]">
              One-time fee based on website complexity:
            </h3>
            <ul className="list-disc pl-8">
              <li>Simple websites: $300 - $500</li>
              <li>Medium complexity websites: $500 - $750</li>
              <li>High complexity websites: $750 - $1200</li>
            </ul>
          </div>
          <div className="mb-4 p-6">
            <h3 className="text-xl font-semibold text-[#FF0033]">
              (Optional) Ongoing Technical SEO Maintenance
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-[#FF0033]">
                    <th className="py-2 px-4 border border-white-300 text-white">
                      Maintenance Plan
                    </th>
                    <th className="py-2 px-4 border border-white-300 text-white">
                      Update Fee (1-time)
                    </th>
                    <th className="py-2 px-4 border border-white-300 text-white">
                      Monthly Subscription
                    </th>
                    <th className="py-2 px-4 border border-white-300 text-white">
                      Quarterly Subscription
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4 border border-gray-300">
                      Simple Websites
                    </td>
                    <td className="py-2 px-4 border border-gray-300">$150</td>
                    <td className="py-2 px-4 border border-gray-300">$60</td>
                    <td className="py-2 px-4 border border-gray-300">$100</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-2 px-4 border border-gray-300">
                      Medium Complexity Websites
                    </td>
                    <td className="py-2 px-4 border border-gray-300">$250</td>
                    <td className="py-2 px-4 border border-gray-300">$100</td>
                    <td className="py-2 px-4 border border-gray-300">$150</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border border-gray-300">
                      High-End Websites
                    </td>
                    <td className="py-2 px-4 border border-gray-300">$500</td>
                    <td className="py-2 px-4 border border-gray-300">$150</td>
                    <td className="py-2 px-4 border border-gray-300">$300</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <p className="text-lg p-6">
            *** We recommend most businesses update their technical SEO once a
            year, and that e-commerce stores update their websites quarterly or
            monthly.
          </p>
        </section>

        <hr />

        <section className="mb-8 p-5">
          <h2 className="text-3xl text-center text-red-600 font-semibold py-4">
            Backlink Building – SEO & Social Media Management
          </h2>
          <p className="text-lg text-center px-4">
            To increase your visibility on Google, we enhance your website's
            authority and credibility through backlink building:
          </p>

          {/* Plan Section */}
          <div className="mt-6">
            {/* Basic Plan */}
            <div className="mb-6">
              <h3 className="text-xl text-[#FF0033]  font-semibold mb-2">
                Basic plan: $35 monthly
              </h3>
              <p className="text-lg">
                - Social media posting with keyword content on Facebook and
                LinkedIn that includes monthly:
                <br />- 8 personalized posts with graphic images, minimal
                engagement, and holiday posts.
              </p>
              <p className="text-lg mt-2">
                *** If you don’t have an account, we will create one for you.
              </p>
            </div>

            {/* Pro Plan */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-[#FF0033] mb-2">
                Pro plan: $75 monthly
              </h3>
              <p className="text-lg">
                - All Basic plan features plus.
                <br />
                - Promotional Postings
                <br />
                - 2 Custom Canva postings (high-quality)
                <br />- Brand voice expression and customer engagement
              </p>
            </div>
          </div>

          <hr className="my-6 border-gray-300" />

          {/* Additional Services */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2 text-[#FF0033]">
              Additional Services:
            </h3>
            <ul className="list-disc pl-8">
              <li>Website directory submissions</li>
              <li>Blog outreach</li>
              <li>Custom campaign launching</li>
              <li>Voice and content creation (influencer marketing)</li>
            </ul>
            <p className="text-lg mt-2">
              *** Need a more customized plan? Ask us!
            </p>
          </div>

          {/* SEO Services Pricing Chart */}
          <h3 className="text-2xl font-semibold text-red-600 text-center  mb-4">
            SEO Services Pricing Chart:
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-[#FF0033] -200">
                  <th className="py-3 px-4  text-white border border-white-300">
                    Service
                  </th>
                  <th className="py-3 px-4 text-white border border-white-300">
                    Pricing
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 px-4 border border-gray-300">
                    Technical SEO (one-time fee)
                  </td>
                  <td className="py-2 px-4 border border-gray-300">
                    $300 - $1200
                  </td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border border-gray-300">
                    Ongoing Technical SEO maintenance (update fee)
                  </td>
                  <td className="py-2 px-4 border border-gray-300">
                    $150 - $500
                  </td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border border-gray-300">
                    Ongoing Technical SEO maintenance (monthly subscription)
                  </td>
                  <td className="py-2 px-4 border border-gray-300">
                    $60 - $150
                  </td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border border-gray-300">
                    Ongoing Technical SEO maintenance (quarterly subscription)
                  </td>
                  <td className="py-2 px-4 border border-gray-300">
                    $100 - $300
                  </td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border border-gray-300">
                    Backlink building (basic plan)
                  </td>
                  <td className="py-2 px-4 border border-gray-300">$35</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border border-gray-300">
                    Backlink building (pro plan)
                  </td>
                  <td className="py-2 px-4 border border-gray-300">$75</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border border-gray-300">
                    Backlink building (Additional services)
                  </td>
                  <td className="py-2 px-4 border border-gray-300">
                    Contact Us
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-8 p-5">
          <h2 className="text-2xl font-semibold py-4 text-[#FF0033] ">
            Pricing Notes
          </h2>
          <ul className="list-disc pl-6">
            <li>All prices are in USD.</li>
            <li>Setup fees are one-time fees.</li>
            <li>
              Monthly subscription fees are billed monthly and can be canceled
              at any time.
            </li>
            <li>
              Customizations and additional features may incur additional
              charges.
            </li>
            <li>
              Please contact us for a free consultation to discuss your specific
              needs and requirements.
            </li>
          </ul>
        </section>
      </div>
    </>
  );
};

export default Pricing;
