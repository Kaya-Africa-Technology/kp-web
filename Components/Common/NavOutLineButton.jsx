import React from 'react'
import Link from 'next/link'

export default function NavOutLineButton({link, text, scroll}) {
  return (
    <>
        <Link
              href={`${link}`}
              className={
                scroll
                  ? "btn md:btn-border-secondary"
                  : "btn md:btn-border-primary"
              }
            >
              {text}
            </Link>
    </>
  )
}
