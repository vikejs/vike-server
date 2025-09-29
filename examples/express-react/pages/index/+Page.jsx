export default Page

import React from 'react'
import { Counter } from './Counter'
import { usePageContext } from 'vike-react/usePageContext'

function Page() {
  const pageContext = usePageContext()
  console.log('pageContext.runtime.req', pageContext.runtime.req)
  console.log('pageContext.runtime.res', pageContext.runtime.res)
  return (
    <>
      <h1>Welcome</h1>
      This page is:
      <ul>
        <li>Rendered to HTML.</li>
        <li>
          Interactive. <Counter />
        </li>
      </ul>
    </>
  )
}
