import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'


export default function NavOutLineButton({link, text, scroll}) {
  const router = useRouter();

  return (
    <>
        <Link
              href={`${link}`}
              className={`${router.asPath !== "/" ? "text-secondary btn md:btn-border-secondary" : scroll ? "text-secondary px-10 btn md:btn-border-secondary" : "text-primary btn px-10 btn md:btn-border-primary"}`}
            >
              {text}
            </Link>
    </>
  )
}
