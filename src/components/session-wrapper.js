"use client"
const { SessionProvider } = require("next-auth/react");



function SessionWrapper({children}) {
  return (
    <SessionProvider>{children}</SessionProvider>
  )
}

export default SessionWrapper