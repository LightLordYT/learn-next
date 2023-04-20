import { Atkinson_Hyperlegible } from 'next/font/google'

const font = Atkinson_Hyperlegible({weight: "400", style: "italic", subsets: ["latin"]})

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return(
    <div className={font.className}>
    <nav>About Navbar</nav>
    <main>{children}</main>
    </div>
  )
}
