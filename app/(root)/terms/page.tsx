'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function TermsAndConditions() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="min-h-screen px-6 py-16 bg-[#0f0f0f] text-gray-100 font-inter"
    >
      <div className="max-w-4xl mx-auto space-y-10 my-12">
        <h1 className="text-4xl font-bold text-white">Terms and Conditions</h1>

        <section className="space-y-6">
          <div className="border border-gray-700 rounded-xl p-6 bg-[#1a1a1a] shadow-inner">
            <h2 className="text-2xl font-semibold text-white mb-2">1. Acceptance of Terms</h2>
            <p className="text-gray-400">
              By accessing and using LaunchHub, you agree to comply with and be bound by these terms. If you don't agree, don't use the platform.
            </p>
          </div>

          <div className="border border-gray-700 rounded-xl p-6 bg-[#1a1a1a] shadow-inner">
            <h2 className="text-2xl font-semibold text-white mb-2">2. Use of the Platform</h2>
            <ul className="list-disc pl-6 text-gray-400 space-y-1">
              <li>You must be at least 13 years old.</li>
              <li>You’re responsible for any activity on your account.</li>
              <li>Don't misuse or attempt to hack/exploit the platform.</li>
            </ul>
          </div>

          <div className="border border-gray-700 rounded-xl p-6 bg-[#1a1a1a] shadow-inner">
            <h2 className="text-2xl font-semibold text-white mb-2">3. Account & Authentication</h2>
            <p className="text-gray-400">
              You can sign in via Google, GitHub, or LinkedIn. We store only essential profile data, and you’re responsible for keeping your identity secure.
            </p>
          </div>

          <div className="border border-gray-700 rounded-xl p-6 bg-[#1a1a1a] shadow-inner">
            <h2 className="text-2xl font-semibold text-white mb-2">4. Content Ownership</h2>
            <p className="text-gray-400">
              You own any content you create, but by posting it on LaunchHub, you grant us a non-exclusive license to display and distribute it on our platform.
            </p>
          </div>

          <div className="border border-gray-700 rounded-xl p-6 bg-[#1a1a1a] shadow-inner">
            <h2 className="text-2xl font-semibold text-white mb-2">5. Prohibited Conduct</h2>
            <ul className="list-disc pl-6 text-gray-400 space-y-1">
              <li>No harassment, abuse, or hate speech.</li>
              <li>No uploading harmful code or spam.</li>
              <li>No pretending to be someone else.</li>
            </ul>
          </div>

          <div className="border border-gray-700 rounded-xl p-6 bg-[#1a1a1a] shadow-inner">
            <h2 className="text-2xl font-semibold text-white mb-2">6. Termination</h2>
            <p className="text-gray-400">
              We reserve the right to suspend or delete your account if you violate our terms or act against the community guidelines.
            </p>
          </div>

          <div className="border border-gray-700 rounded-xl p-6 bg-[#1a1a1a] shadow-inner">
            <h2 className="text-2xl font-semibold text-white mb-2">7. Changes to Terms</h2>
            <p className="text-gray-400">
              We may update these terms from time to time. Continued use of the platform means you accept the updated terms.
            </p>
          </div>

          <div className="border border-gray-700 rounded-xl p-6 bg-[#1a1a1a] shadow-inner">
            <h2 className="text-2xl font-semibold text-white mb-2">8. Contact</h2>
            <p className="text-gray-400">
              For questions or concerns, reach out to <a href="mailto:team@launchhub.com" className="text-indigo-400 underline">team@launchhub.com</a>
            </p>
          </div>

          <p className="text-sm text-gray-600 text-center mt-12">
            Last updated: July 29, 2025
          </p>
        </section>
      </div>
    </motion.main>
  );
}
