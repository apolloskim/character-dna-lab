'use client'

import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-[#FFFAF4] text-[#2C1810]">
      {/* Logo Section */}
      <div className="w-full max-w-5xl px-6 pt-16 sm:pt-24">
        <div className="flex justify-center">
          <span className="text-[#FF7F50]">🖋️ Character DNA Lab</span>
        </div>
      </div>

      {/* Hero Section */}
      <div className="mx-auto max-w-4xl px-6 py-12 text-center">
        <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl text-[#2C1810]">
          Character DNA Lab: AI-Powered Character Development for Writers and Creators
        </h1>
        <p className="mb-8 text-lg text-[#5C4033]">
          Turn character ideas into deep, consistent personalities using advanced AI analysis
        </p>

        {/* Features List - Updated alignment */}
        <div className="mb-12 flex flex-col items-center space-y-4 text-center max-w-2xl mx-auto">
          <div className="flex items-center gap-2 justify-center w-full">
            <span className="text-[#FF7F50]">✓</span>
            <span className="text-[#5C4033]">Analyze character traits, motivations, and potential arcs in seconds</span>
          </div>
          <div className="flex items-center gap-2 justify-center w-full">
            <span className="text-[#FF7F50]">✓</span>
            <span className="text-[#5C4033]">Generate consistent character responses to any scenario</span>
          </div>
          <div className="flex items-center gap-2 justify-center w-full">
            <span className="text-[#FF7F50]">✓</span>
            <span className="text-[#5C4033]">Identify plot opportunities and character development paths</span>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mb-16">
          <h2 className="mb-6 text-2xl font-semibold text-[#2C1810]">Join the Private Beta</h2>
          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLSeDChw9n6ULVsUp0ZmUHOyGolF7PWGjp5FpiGwl7IaYTH0b8w/viewform?usp=sf_link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-lg bg-[#FF7F50] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#FF9F70] transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF7F50]"
          >
            Join Private Beta
          </Link>
        </div>

        {/* Footer Text */}
        <p className="text-sm text-[#8B4513]">
          Built by engineers and writers for professional storytellers
        </p>
      </div>

      {/* Footer */}
      <footer className="w-full py-6 text-center text-sm text-[#8B4513]">
        © 2024 Character DNA Lab. All rights reserved.
      </footer>
    </main>
  );
}
