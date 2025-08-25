export const metadata = {
  title: 'Sanity Studio - Viveka Portfolio',
  description: 'Content management for Viveka Portfolio',
}

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
