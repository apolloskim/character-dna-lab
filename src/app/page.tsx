'use client'

import { useState } from 'react'
import { Pen } from 'lucide-react'
import { cn } from '@/lib/utils'
import Link from 'next/link'

const BETA_SIGNUP_FORM = "https://docs.google.com/forms/d/e/1FAIpQLSeDChw9n6ULVsUp0ZmUHOyGolF7PWGjp5FpiGwl7IaYTH0b8w/viewform?usp=sf_link";

export default function LandingPage() {
  const [email, setEmail] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        body: JSON.stringify({ email }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      if (response.ok) {
        setEmail('')
        alert('Thanks for joining our private beta! We\'ll be in touch soon.')
      } else {
        throw new Error('Form submission failed')
      }
    } catch (error) {
      console.error('Error:', error)
      alert('There was an error submitting the form. Please try again.')
    }
  }

  return (
    <div className={cn("min-h-screen bg-amber-50 text-amber-900 flex flex-col")}>
      <header className="p-6 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Pen className="h-8 w-8 text-amber-600" />
          <span className="text-xl font-bold">Character DNA Lab</span>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            Character DNA Lab: AI-Powered Character Development for Writers and Creators
          </h1>
          <p className="text-xl mb-8">
            Turn character ideas into deep, consistent personalities using advanced AI analysis
          </p>
          <ul className="space-y-4 mb-8">
            {[
              "Analyze character traits, motivations, and potential arcs in seconds",
              "Generate consistent character responses to any scenario",
              "Identify plot opportunities and character development paths"
            ].map((benefit, index) => (
              <li key={index} className="flex items-center justify-center">
                <svg className="h-6 w-6 text-amber-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {benefit}
              </li>
            ))}
          </ul>
        </section>

        <section className="max-w-md mx-auto mb-12">
          <h2 className="text-2xl font-bold mb-4 text-center">Join the Private Beta</h2>
          <div className="mt-8 flex justify-center w-full">
            <Link
              href={BETA_SIGNUP_FORM}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              Join Private Beta
            </Link>
          </div>
        </section>

        <section className="text-center mb-12">
          <p className="text-lg font-semibold">
            Built by engineers and writers for professional storytellers
          </p>
        </section>

        <section className="bg-amber-100 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Coming Soon:</h2>
          <ul className="space-y-2">
            {[
              "Character consistency analysis",
              "Personality mapping",
              "Scene response prediction",
              "Character growth tracking"
            ].map((feature, index) => (
              <li key={index} className="flex items-center">
                <svg className="h-5 w-5 text-amber-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                {feature}
              </li>
            ))}
          </ul>
        </section>
      </main>

      <footer className="mt-auto p-6 text-center text-sm text-amber-700">
        © {new Date().getFullYear()} Character DNA Lab. All rights reserved.
      </footer>
    </div>
  )
}
