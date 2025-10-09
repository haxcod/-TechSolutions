'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { Share2, Copy, Check } from 'lucide-react'
import { useState, useEffect } from 'react'

interface ShareButtonProps {
  url?: string
  title?: string
  className?: string
}

export default function ShareButton({ url, title, className }: ShareButtonProps) {
  const [copied, setCopied] = useState(false)
  const [canShare, setCanShare] = useState(false)

  useEffect(() => {
    // Check if Web Share API is supported
    setCanShare(typeof navigator !== 'undefined' && 'share' in navigator)
  }, [])

  const handleShare = async () => {
    const shareUrl = url || window.location.href
    const shareTitle = title || document.title

    // Check if Web Share API is supported
    if (canShare) {
      try {
        await navigator.share({
          title: shareTitle,
          url: shareUrl,
        })
      } catch (error) {
        // User cancelled sharing or error occurred
        console.log('Share cancelled or failed:', error)
      }
    } else {
      // Fallback to copying URL to clipboard
      try {
        await navigator.clipboard.writeText(shareUrl)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      } catch (error) {
        console.error('Failed to copy URL:', error)
      }
    }
  }

  return (
    <Button 
      onClick={handleShare}
      className={className || "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"}
    >
      {copied ? (
        <>
          <Check className="w-4 h-4 mr-2" />
          Copied!
        </>
      ) : canShare ? (
        <>
          <Share2 className="w-4 h-4 mr-2" />
          Share
        </>
      ) : (
        <>
          <Copy className="w-4 h-4 mr-2" />
          Copy Link
        </>
      )}
    </Button>
  )
}