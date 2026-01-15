'use client'

import { cn } from '@/lib/utils'
import { Calendar, PoundSterling } from 'lucide-react'

interface ChatMockupProps {
  className?: string
}

const opportunities = [
  {
    title: 'NHS Digital Services',
    value: '£45,000',
    deadline: '15 Jan',
    match: '95%',
  },
  {
    title: 'Council IT Infrastructure',
    value: '£120,000',
    deadline: '22 Jan',
    match: '88%',
  },
  {
    title: 'MOD Cloud Migration',
    value: '£85,000',
    deadline: '30 Jan',
    match: '82%',
  },
]

export function ChatMockup({ className }: ChatMockupProps) {
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

      {/* Chat Messages - Opportunities */}
      <div className="p-4 space-y-4 bg-slate-50">
        {/* Jonty found opportunities */}
        <div className="flex justify-start">
          <div className="h-8 w-8 rounded-full bg-[#14142B] flex items-center justify-center text-white font-semibold text-sm mr-2 flex-shrink-0">
            J
          </div>
          <div className="max-w-[85%]">
            <div className="px-4 py-2.5 rounded-2xl rounded-bl-md bg-white text-slate-700 shadow-sm border border-slate-100 text-sm leading-relaxed">
              Great news! I found 3 opportunities matching your profile:
            </div>

            {/* Opportunity cards */}
            <div className="mt-2 space-y-2">
              {opportunities.map((opp, index) => (
                <div
                  key={index}
                  className="px-3 py-2.5 rounded-xl bg-white border border-slate-200 shadow-sm hover:border-slate-300 transition-colors cursor-pointer"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium text-slate-800 truncate">
                        {opp.title}
                      </div>
                      <div className="flex items-center gap-3 mt-1">
                        <span className="flex items-center gap-1 text-xs text-slate-500">
                          <PoundSterling className="h-3 w-3" />
                          {opp.value}
                        </span>
                        <span className="flex items-center gap-1 text-xs text-slate-500">
                          <Calendar className="h-3 w-3" />
                          {opp.deadline}
                        </span>
                      </div>
                    </div>
                    <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                      {opp.match}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* User asks for more info */}
        <div className="flex justify-end">
          <div className="max-w-[75%] px-4 py-2.5 rounded-2xl rounded-br-md bg-[#14142B] text-white text-sm leading-relaxed">
            Tell me more about the NHS one
          </div>
        </div>

        {/* Jonty provides details */}
        <div className="flex justify-start">
          <div className="h-8 w-8 rounded-full bg-[#14142B] flex items-center justify-center text-white font-semibold text-sm mr-2 flex-shrink-0">
            J
          </div>
          <div className="max-w-[80%] px-4 py-2.5 rounded-2xl rounded-bl-md bg-white text-slate-700 shadow-sm border border-slate-100 text-sm leading-relaxed">
            NHS Digital Services contract is for cloud infrastructure support. They&apos;re looking for Azure expertise. Deadline is 15 Jan. Want me to help prepare your bid?
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
