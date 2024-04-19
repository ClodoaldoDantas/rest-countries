'use client'

import { Button } from '@mantine/core'
import { ArrowLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { ReactNode } from 'react'

type BackButtonProps = {
  to: string
  children: ReactNode
}

export function BackButton({ to, children }: BackButtonProps) {
  const router = useRouter()

  function handleNavigateBack() {
    router.push(to)
  }

  return (
    <Button
      variant="default"
      onClick={handleNavigateBack}
      leftSection={<ArrowLeft size={20} />}
    >
      {children}
    </Button>
  )
}
