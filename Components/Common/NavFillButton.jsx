import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function NavFillButton({link, text, scroll}) {
  const router = useRouter();
  return (
    <>
        <Link
              href={`${link}`}
              className={`${router.asPath !== "/" ? "text-secondary btn md:btn-secondary px-10 border border-secondary" : scroll ? "text-secondary btn md:btn-secondary px-10 border border-secondary" : "text-primary btn px-10 md:btn-primary"}`}
            >
              {text}
            </Link>
    </>
  )
}
