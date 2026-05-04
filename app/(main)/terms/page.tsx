"use client";

import React from "react";

export default function TermsPage() {
  return (
    <div className="min-h-screen flex justify-center px-4 py-10">
      <div className="w-full max-w-4xl text-black">
        
        {/* Heading */}
        <h1 className="title md:text-5xl font-bold text-center mb-8">
          Terms & Conditions
        </h1>

        {/* Content */}
        <div className="space-y-6 text-sm pr-2">
          
          <section>
            <h2 className="body-title mb-2">1. Introduction</h2>
            <p className="text-xl">
              Welcome to our platform. By accessing or using our service, you agree
              to be bound by these Terms and Conditions.
            </p>
          </section>

          <section>
            <h2 className="body-title mb-2">2. Use of Service</h2>
            <p className="text-xl">
              You agree to use the service only for lawful purposes and in a way
              that does not infringe the rights of others.
            </p>
          </section>

          <section>
            <h2 className="body-title mb-2">3. User Responsibilities</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li className="text-xl">Provide accurate information</li>
              <li className="text-xl">Maintain account security</li>
              <li className="text-xl">Comply with applicable laws</li>
            </ul>
          </section>

          <section>
            <h2 className="body-title mb-2">4. Privacy Policy</h2>
            <p className="text-xl">
              Your privacy is important to us. Please review our Privacy Policy to
              understand how we collect and use information.
            </p>
          </section>

          <section>
            <h2 className="body-title mb-2">5. Limitation of Liability</h2>
            <p className="text-xl">
              We are not liable for any damages arising from the use of our
              platform.
            </p>
          </section>

          <section>
            <h2 className="body-title mb-2">6. Changes to Terms</h2>
            <p className="text-xl">
              We reserve the right to update these terms at any time without prior
              notice.
            </p>
          </section>

          {/* Repeat more sections if needed */}
          
        </div>
      </div>
    </div>
  );
}