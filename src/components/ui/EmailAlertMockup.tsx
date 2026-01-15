'use client'

import { cn } from '@/lib/utils'
import { Calendar, PoundSterling, Mail, Star } from 'lucide-react'

interface EmailAlertMockupProps {
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

export function EmailAlertMockup({ className }: EmailAlertMockupProps) {
  return (
    <div
      className={cn(
        'bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden',
        className
      )}
    >
      {/* Email Client Header */}
      <div className="px-4 py-3 flex items-center gap-3 bg-[#14142B]">
        <div className="h-10 w-10 rounded-full bg-[#FF6B35] flex items-center justify-center text-white">
          <Mail className="h-5 w-5" />
        </div>
        <div className="flex-1">
          <div className="font-semibold text-white">Inbox</div>
          <div className="text-xs text-white/70">1 new message</div>
        </div>
        <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
      </div>

      {/* Email Header */}
      <div className="px-4 py-3 border-b border-slate-200 bg-slate-50">
        <div className="flex items-start gap-3">
          <div className="h-10 w-10 rounded-full bg-[#FF6B35] flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
            J
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between gap-2">
              <span className="font-semibold text-slate-900">Jonty</span>
              <span className="text-xs text-slate-500">9:15 AM</span>
            </div>
            <div className="text-xs text-slate-500">jonty@askjonty.ai</div>
            <div className="mt-1 font-medium text-sm text-slate-800">
              3 new opportunities match your profile
            </div>
          </div>
        </div>
      </div>

      {/* Email Body */}
      <div className="p-4 bg-white">
        <div className="text-sm text-slate-700 leading-relaxed">
          <p>Hi there,</p>
          <p className="mt-2">I found 3 contracts that match your profile:</p>
        </div>

        {/* Opportunity cards */}
        <div className="mt-4 space-y-2">
          {opportunities.map((opp, index) => (
            <div
              key={index}
              className="px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-[#FF6B35]/50 transition-colors cursor-pointer"
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

        <div className="mt-4 text-sm text-slate-700 leading-relaxed">
          <p>Want me to help you prepare a bid for any of these?</p>
          <p className="mt-3">
            Best,<br />
            <span className="font-medium text-[#FF6B35]">Jonty</span>
          </p>
        </div>
      </div>

      {/* Email Actions */}
      <div className="px-4 py-3 border-t border-slate-200 bg-slate-50 flex gap-2">
        <button className="flex-1 px-4 py-2 text-sm font-medium text-white rounded-lg bg-[#FF6B35] hover:bg-[#e55a2b] transition-colors">
          Reply
        </button>
        <button className="px-4 py-2 text-sm font-medium text-slate-600 rounded-lg border border-slate-300 hover:bg-slate-100 transition-colors">
          View All
        </button>
      </div>
    </div>
  )
}
