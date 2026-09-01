import { AppShell } from '@/components/layout/app-shell'
import { RequireAuth } from '@/components/providers/require-auth'
import React from 'react'

const DashboardPage = () => {
  return (
    <RequireAuth>
      <AppShell hideHeader>
        <div>
          <RepoDashboard />
        </div>
      </AppShell>
    </RequireAuth>
  )
}

export default DashboardPage