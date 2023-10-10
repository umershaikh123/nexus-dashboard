import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { SideBar } from "@/components/SideBar"
export const metadata: Metadata = {
  title: "Nexus",
  description: "Generated by Next 13",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Work+Sans"
        />
      </head>
      <body>
        <div className="flex">
          <div>
            <SideBar />
          </div>

          <div>{children}</div>
        </div>
      </body>
    </html>
  )
}
