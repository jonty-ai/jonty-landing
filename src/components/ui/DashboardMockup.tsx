'use client'

import { cn } from '@/lib/utils'
import { TrendingUp, FileText, Trophy } from 'lucide-react'

interface DashboardMockupProps {
  className?: string
}

export function DashboardMockup({ className }: DashboardMockupProps) {
  return (
    <div
      className={cn(
        'bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden',
        className
      )}
    >
      {/* Header */}
      <div className="px-6 py-4 bg-[#14142B]">
        <h3 className="font-semibold text-white">Your Opportunities</h3>
        <p className="text-sm text-white/70">Track your progress</p>
      </div>

      {/* Stats */}
      <div className="p-6">
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="text-center p-3 bg-slate-50 rounded-xl">
            <div className="text-2xl font-bold text-[#14142B]">12</div>
            <div className="text-xs text-slate-500">Matches</div>
          </div>
          <div className="text-center p-3 bg-slate-50 rounded-xl">
            <div className="text-2xl font-bold text-[#FF6B35]">3</div>
            <div className="text-xs text-slate-500">Bids Sent</div>
          </div>
          <div className="text-center p-3 bg-slate-50 rounded-xl">
            <div className="text-2xl font-bold text-green-600">1</div>
            <div className="text-xs text-slate-500">Won</div>
          </div>
        </div>

        {/* Recent Opportunities */}
        <div className="space-y-3">
          <h4 className="text-sm font-medium text-slate-700">Recent Activity</h4>

          {/* Won Contract */}
          <div className="flex items-center gap-3 p-3 bg-green-50 border border-green-100 rounded-xl">
            <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
              <Trophy className="h-5 w-5 text-green-600" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium text-slate-800 truncate">
                NHS Digital Services
              </div>
              <div className="text-xs text-green-600">Won - £45,000</div>
            </div>
          </div>

          {/* Pending Bid */}
          <div className="flex items-center gap-3 p-3 bg-slate-50 border border-slate-100 rounded-xl">
            <div className="h-10 w-10 rounded-full bg-[#FF6B35]/10 flex items-center justify-center flex-shrink-0">
              <FileText className="h-5 w-5 text-[#FF6B35]" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium text-slate-800 truncate">
                Council IT Infrastructure
              </div>
              <div className="text-xs text-slate-500">Bid submitted - Awaiting</div>
            </div>
          </div>

          {/* New Match */}
          <div className="flex items-center gap-3 p-3 bg-slate-50 border border-slate-100 rounded-xl">
            <div className="h-10 w-10 rounded-full bg-[#14142B]/10 flex items-center justify-center flex-shrink-0">
              <TrendingUp className="h-5 w-5 text-[#14142B]" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium text-slate-800 truncate">
                MOD Software Contract
              </div>
              <div className="text-xs text-slate-500">New match - Due 20 Jan</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
