'use client'

import { cn } from '@/lib/utils'
import { Phone, CheckCircle2 } from 'lucide-react'

interface CallTranscriptMockupProps {
  className?: string
}

const transcript = [
  {
    speaker: 'Jonty',
    time: '00:00',
    text: "Hi there! Thanks for booking a call. Tell me about your business - what do you do?",
  },
  {
    speaker: 'You',
    time: '00:15',
    text: "We're Acme Solutions, an IT consultancy focused on public sector clients. We do cloud migration, cybersecurity, and we're ISO 27001 certified.",
  },
  {
    speaker: 'Jonty',
    time: '00:45',
    text: "Great! And what size contracts are you typically looking for?",
  },
  {
    speaker: 'You',
    time: '01:02',
    text: "Usually between 50k and 500k. We've done some NHS work before.",
  },
  {
    speaker: 'Jonty',
    time: '01:20',
    text: "Perfect. I've got everything I need to set up your profile.",
  },
]

export function CallTranscriptMockup({ className }: CallTranscriptMockupProps) {
  return (
    <div
      className={cn(
        'bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden',
        className
      )}
    >
      {/* Call Header */}
      <div className="px-4 py-3 flex items-center gap-3 bg-[#14142B]">
        <div className="h-10 w-10 rounded-full bg-[#FF6B35] flex items-center justify-center text-white">
          <Phone className="h-5 w-5" />
        </div>
        <div className="flex-1">
          <div className="font-semibold text-white">Onboarding Call</div>
          <div className="text-xs text-white/70">with Jonty</div>
        </div>
        <div className="flex items-center gap-2 text-white/70">
          <CheckCircle2 className="h-4 w-4 text-green-400" />
          <span className="text-xs">Completed</span>
        </div>
      </div>

      {/* Call duration bar */}
      <div className="px-4 py-2 bg-slate-100 border-b border-slate-200 flex items-center justify-between">
        <span className="text-xs text-slate-500">Duration: 1:45</span>
        <span className="text-xs text-slate-500">Today, 10:30 AM</span>
      </div>

      {/* Transcript */}
      <div className="p-4 space-y-4 bg-slate-50 max-h-[280px] overflow-y-auto">
        {transcript.map((entry, index) => (
          <div key={index} className="space-y-1">
            <div className="flex items-center gap-2">
              <span
                className={cn(
                  'text-xs font-semibold',
                  entry.speaker === 'Jonty' ? 'text-[#FF6B35]' : 'text-[#14142B]'
                )}
              >
                {entry.speaker}
              </span>
              <span className="text-[10px] text-slate-400">{entry.time}</span>
            </div>
            <p className="text-sm text-slate-700 leading-relaxed pl-0">
              {entry.text}
            </p>
          </div>
        ))}
      </div>

      {/* Profile Generated Card */}
      <div className="p-4 border-t border-slate-200 bg-white">
        <div className="px-4 py-3 rounded-xl bg-gradient-to-r from-[#FF6B35]/5 to-[#FF8C42]/5 border border-[#FF6B35]/20">
          <div className="flex items-center gap-2 mb-2">
            <CheckCircle2 className="h-4 w-4 text-[#FF6B35]" />
            <span className="text-xs font-semibold text-[#14142B]">Profile Created</span>
          </div>
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-500">Company:</span>
              <span className="text-sm font-medium text-slate-700">Acme Solutions</span>
            </div>
            <div className="flex flex-wrap gap-1.5 mt-2">
              <span className="px-2 py-0.5 bg-[#FF6B35]/10 text-[#FF6B35] text-xs rounded-full">IT & Technology</span>
              <span className="px-2 py-0.5 bg-[#FF6B35]/10 text-[#FF6B35] text-xs rounded-full">ISO 27001</span>
              <span className="px-2 py-0.5 bg-[#FF6B35]/10 text-[#FF6B35] text-xs rounded-full">£50k-500k</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
