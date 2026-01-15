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
        <div className="flex items-center gap-1.5 text-xs text-green-600 font-medium">
          <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          <span>WhatsApp</span>
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
