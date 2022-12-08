import React from 'react'
import Link from 'next/link'

export default function NavOutLineButton({link, text, scroll}) {
  return (
    <>
        <Link
              href={`${link}`}
              className={
                scroll
                  ? "btn md:btn-secondary px-10 border border-secondary"
                  : "btn px-10 md:btn-primary"
              }
            >
              {text}
            </Link>
    </>
  )
}
