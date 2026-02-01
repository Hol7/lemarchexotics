'use client'

import { Icon } from '@iconify/react'

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/33600000000"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-20 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 shadow-lg"
    >
      <Icon icon="logos:whatsapp-icon" className="h-7 w-7 text-white" />
    </a>
  )
}
