'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function PrivacyPolicy() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="min-h-screen px-6 py-16 bg-[#0f0f0f] text-gray-100 font-inter"
    >
      <div className="max-w-4xl mx-auto space-y-10 my-12">
        <h1 className="text-4xl font-bold text-white">Privacy Policy</h1>

        <section className="space-y-4">
          <p className="text-gray-300">
            We value your privacy. This policy explains how we collect and handle your data when you sign in with Google, GitHub, or LinkedIn.
          </p>

          <div className="border border-gray-700 rounded-xl p-6 bg-[#1a1a1a] shadow-inner">
            <h2 className="text-2xl font-semibold text-white mb-2">1. What We Collect</h2>
            <ul className="list-disc pl-6 text-gray-400 space-y-1">
              <li>Your name</li>
              <li>Email address</li>
              <li>Profile photo</li>
              <li>GitHub username</li>
              <li>LinkedIn job details (if granted)</li>
            </ul>
          </div>

          <div className="border border-gray-700 rounded-xl p-6 bg-[#1a1a1a] shadow-inner">
            <h2 className="text-2xl font-semibold text-white mb-2">2. How It's Used</h2>
            <ul className="list-disc pl-6 text-gray-400 space-y-1">
              <li>Sign you in</li>
              <li>Display your profile info</li>
              <li>Personalize your experience</li>
              <li>Power core app features</li>
            </ul>
          </div>

          <div className="border border-gray-700 rounded-xl p-6 bg-[#1a1a1a] shadow-inner">
            <h2 className="text-2xl font-semibold text-white mb-2">3. We Don't Share</h2>
            <p className="text-gray-400">
              Your data stays private. We never sell or share your personal info with third parties.
            </p>
          </div>

          <div className="border border-gray-700 rounded-xl p-6 bg-[#1a1a1a] shadow-inner">
            <h2 className="text-2xl font-semibold text-white mb-2">4. Storage & Security</h2>
            <p className="text-gray-400">
              We use secure authentication (via next-auth) and industry practices to protect your information. No passwords or sensitive tokens are stored.
            </p>
          </div>

          <div className="border border-gray-700 rounded-xl p-6 bg-[#1a1a1a] shadow-inner">
            <h2 className="text-2xl font-semibold text-white mb-2">5. Deleting Your Data</h2>
            <p className="text-gray-400">
              Want out? Email <a href="mailto:team@launchhub.com" className="text-indigo-400 underline">team@launchhub.com</a> to have your data removed within 7 days.
            </p>
          </div>

          <div className="border border-gray-700 rounded-xl p-6 bg-[#1a1a1a] shadow-inner">
            <h2 className="text-2xl font-semibold text-white mb-2">6. OAuth Providers We Use</h2>
            <ul className="list-disc pl-6 text-gray-400 space-y-1">
              <li>Google</li>
              <li>GitHub</li>
              <li>LinkedIn</li>
            </ul>
            <p className="text-gray-400 mt-2">
              We request minimal access — only basic profile info needed to log you in.
            </p>
          </div>

          <p className="text-sm text-gray-600 text-center mt-12">
            Last updated: July 28, 2025
          </p>
        </section>
      </div>
    </motion.main>
  );
}
