'use client'

import { cn } from '@/lib/utils'
import { Globe, Loader2 } from 'lucide-react'

interface ProfileMockupProps {
  className?: string
}

export function ProfileMockup({ className }: ProfileMockupProps) {
  return (
    <div
      className={cn(
        'bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden',
        className
      )}
    >
      {/* Chat Header */}
      <div className="px-4 py-3 flex items-center gap-3 bg-[#14142B]">
        <div className="h-10 w-10 rounded-full bg-[#FF6B35] flex items-center justify-center text-white font-bold text-lg">
          J
        </div>
        <div>
          <div className="font-semibold text-white">Jonty</div>
          <div className="text-xs text-white/70">AI Procurement Assistant</div>
        </div>
        <div className="ml-auto flex gap-1">
          <div className="h-2 w-2 rounded-full bg-white/30" />
          <div className="h-2 w-2 rounded-full bg-white/30" />
          <div className="h-2 w-2 rounded-full bg-white/30" />
        </div>
      </div>

      {/* Omni-channel indicator */}
      <div className="px-4 py-2 bg-slate-100 border-b border-slate-200 flex items-center justify-center gap-3">
        <span className="text-xs text-slate-400">Also available on</span>
        <div className="flex items-center gap-1.5 text-xs text-slate-600 font-medium">
          <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <span>Phone</span>
        </div>
      </div>

      {/* Chat Messages - Onboarding conversation */}
      <div className="p-4 space-y-3 bg-slate-50">
        {/* Jonty greeting */}
        <div className="flex justify-start">
          <div className="h-8 w-8 rounded-full bg-[#14142B] flex items-center justify-center text-white font-semibold text-sm mr-2 flex-shrink-0">
            J
          </div>
          <div className="max-w-[80%] px-4 py-2.5 rounded-2xl rounded-bl-md bg-white text-slate-700 shadow-sm border border-slate-100 text-sm leading-relaxed">
            Hi! Tell me about your business. You can also share your website - I&apos;ll extract the details automatically.
          </div>
        </div>

        {/* User describes their business with website */}
        <div className="flex justify-end">
          <div className="max-w-[80%] px-4 py-2.5 rounded-2xl rounded-br-md bg-[#14142B] text-white text-sm leading-relaxed">
            We&apos;re Acme Solutions - IT consultancy for public sector. Check out acmesolutions.co.uk
          </div>
        </div>

        {/* Jonty scanning website */}
        <div className="flex justify-start">
          <div className="h-8 w-8 rounded-full bg-[#14142B] flex items-center justify-center text-white font-semibold text-sm mr-2 flex-shrink-0">
            J
          </div>
          <div className="max-w-[80%]">
            {/* Scanning indicator */}
            <div className="px-4 py-2.5 rounded-2xl rounded-bl-md bg-white text-slate-700 shadow-sm border border-slate-100 text-sm leading-relaxed">
              <div className="flex items-center gap-2">
                <Globe className="h-4 w-4 text-[#FF6B35]" />
                <span>Scanning acmesolutions.co.uk...</span>
                <Loader2 className="h-3.5 w-3.5 text-slate-400 animate-spin" />
              </div>
            </div>

            {/* Profile created message */}
            <div className="mt-2 px-4 py-2.5 rounded-2xl rounded-bl-md bg-white text-slate-700 shadow-sm border border-slate-100 text-sm leading-relaxed">
              Got it! Based on your website, here&apos;s your profile:
            </div>

            {/* Profile summary card */}
            <div className="mt-2 px-4 py-3 rounded-xl bg-white border border-slate-200 shadow-sm">
              <div className="text-xs font-medium text-slate-500 mb-2">YOUR PROFILE</div>
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-slate-500">Company:</span>
                  <span className="text-sm font-medium text-slate-700">Acme Solutions</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-slate-500">Sector:</span>
                  <span className="text-sm font-medium text-slate-700">IT & Technology</span>
                </div>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  <span className="px-2 py-0.5 bg-[#FF6B35]/10 text-[#FF6B35] text-xs rounded-full">Cloud Migration</span>
                  <span className="px-2 py-0.5 bg-[#FF6B35]/10 text-[#FF6B35] text-xs rounded-full">Azure & AWS</span>
                  <span className="px-2 py-0.5 bg-[#FF6B35]/10 text-[#FF6B35] text-xs rounded-full">Cybersecurity</span>
                  <span className="px-2 py-0.5 bg-[#FF6B35]/10 text-[#FF6B35] text-xs rounded-full">ISO 27001</span>
                </div>
              </div>
            </div>

            <div className="mt-2 px-4 py-2.5 rounded-2xl rounded-bl-md bg-white text-slate-700 shadow-sm border border-slate-100 text-sm leading-relaxed">
              I&apos;ll start scanning for opportunities now!
            </div>
          </div>
        </div>
      </div>

      {/* Input area */}
      <div className="px-4 py-3 border-t border-slate-200 bg-white">
        <div className="flex items-center gap-2">
          <div className="flex-1 bg-slate-100 rounded-full px-4 py-2.5 text-sm text-slate-400">
            Type a message...
          </div>
          <button
            className="h-10 w-10 rounded-full flex items-center justify-center text-white flex-shrink-0"
            style={{
              background: 'linear-gradient(135deg, #FF6B35 0%, #FF8C42 100%)',
            }}
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
