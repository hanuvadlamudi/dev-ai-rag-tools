import { RepoDashboard } from '@/components/dashboard/repo-dashboard'
import { AppShell } from '@/components/layout/app-shell'
import { RequireAuth } from '@/components/providers/require-auth'
import React from 'react'

const DashboardPage = () => {
  return (
    <RequireAuth>
      <AppShell hideHeader>
        <RepoDashboard />
      </AppShell>
    </RequireAuth>
  )
}

export default DashboardPage