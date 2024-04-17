import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="bg-white text-gray-800 p-6 md:p-10 lg:p-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl  mb-8 text-center text-red-900">Privacy Policy</h1>
        <p className="text-sm md:text-base text-gray-600 text-center mb-4">Last Updated: October 7, 2023</p>

        <section className="my-8 space-y-4">
          <p>
            Akira Web Solutions (hereafter referred to as "we," "us," or "our") is committed to protecting your privacy. This Privacy Policy outlines how we collect, use, disclose, and safeguard your personal information when you visit our website or use our services.
          </p>

          <h2 className="text-1xl  mt-8 mb-2 text-gray-800">Information We Collect</h2>
          <p>
            We may collect personal information such as your name, email address, and other contact information when you interact with our website or services. We may also collect non-personal information such as your IP address, browser type, and usage data to improve our website and services.
          </p>

          <h2 className="text-1xl  mt-8 mb-2 text-gray-800">How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>Provide and improve our services</li>
            <li>Respond to your inquiries and requests</li>
            <li>Send you updates, newsletters, and promotional materials</li>
            <li>Monitor and analyze website usage</li>
          </ul>

          <h2 className="text-1xl  mt-8 mb-2 text-gray-800">Disclosure of Your Information</h2>
          <p>We may share your personal information with third parties in the following situations:</p>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>With your consent</li>
            <li>With service providers who assist us in delivering our services</li>
            <li>As required by law or to protect our rights</li>
          </ul>

          <h2 className="text-1xl  mt-8 mb-2 text-gray-800">Your Choices</h2>
          <p>
            You can opt-out of receiving marketing communications from us by following the instructions provided in our emails. You may also request access, correction, or deletion of your personal information by contacting us at <a href="mailto:connect@akirawebsolutions.com" className="text-blue-600 hover:text-blue-800 transition duration-300">connect@akirawebsolutions.com</a>.
          </p>

          <h2 className="text-1xl  mt-8 mb-2 text-gray-800">Security</h2>
          <p>
            We implement reasonable security measures to protect your personal information. However, no method of data transmission over the internet is completely secure, and we cannot guarantee the absolute security of your data.
          </p>

          <h2 className="text-1xl  mt-8 mb-2 text-gray-800">Changes to this Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the updated policy on our website.
          </p>

          <h2 className="text-1xl  mt-8 mb-2 text-gray-800">Contact Us</h2>
          <p>
            If you have any questions or concerns about this Privacy Policy, please contact us at <a href="mailto:connect@akirawebsolutions.com" className="text-blue-600 hover:text-blue-800 transition duration-300">connect@akirawebsolutions.com</a>.
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
