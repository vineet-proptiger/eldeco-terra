import './globals.css'
import { Open_Sans, Montserrat, Cormorant_Garamond } from 'next/font/google'
import { CITY_DISPLAY } from '../lib/config'
import localFont from 'next/font/local'
import { GoogleTagManager } from '@next/third-parties/google'
import Script from 'next/script'

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-jost',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-serif',
  display: 'swap',
})

const nephilm = localFont({
  src: '../public/fonts/Nephilm.otf',
  variable: '--font-nephilm',
  display: 'swap',
})

export const metadata = {
  metadataBase: new URL('https://eldecoterrandsol.in'),
  title: 'Eldeco Terra & Sol | 3 & 3.5 BHK in Sec 80 Gurgaon',
  description: 'Eldeco Terra & Sol — Spacious 3 & 3.5 BHK Apartments at Sector 80, Gurgaon. By Eldeco Group. Premium amenities, lush greens, excellent connectivity. Enquire Now.',
  icons: {
    icon: '/images/logo/logo.png',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Eldeco Terra & Sol | 3 & 3.5 BHK in Sec 80 Gurgaon',
    description: 'Eldeco Terra & Sol — Spacious 3 & 3.5 BHK Apartments at Sector 80, Gurgaon. By Eldeco Group.',
    images: ['/images/hero/banner1.webp'],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-575H8R87" />
      <head>
        <Script
          id="json-ld-article"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://eldecoterrandsol.in/"
              },
              "headline": "Eldeco Terra & Sol | Spacious 3 & 3.5 BHK Apartments — Sector 80, Gurgaon",
              "description": "Eldeco Terra & Sol — Spacious 3 & 3.5 BHK Apartments at Sector 80, Gurgaon. By Eldeco Group. Premium amenities, lush greens, excellent connectivity.",
              "image": "https://eldecoterrandsol.in/_next/image?url=%2Fimages%2Fhero%2Fbanner1.webp&w=1200&q=75",
              "author": {
                "@type": "Organization",
                "name": "Proptiger Marketing Services Pvt Ltd",
                "url": "https://www.proptiger.com/gurgaon/sector-80/eldeco-terra-sol"
              },
              "publisher": {
                "@type": "Organization",
                "name": "Proptiger",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://www.proptiger.com/"
                }
              },
              "datePublished": "2026-04-22"
            })
          }}
        />
      </head>
      <body className={`${openSans.variable} ${montserrat.variable} ${cormorant.variable} ${nephilm.variable} font-sans text-dark antialiased`}>
        <Script id="gtag-init" strategy="beforeInteractive">
          {`window.dataLayer = window.dataLayer || [];
window.dataLayer.push({ 'city': '${CITY_DISPLAY}' });
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());`}
        </Script>
        {children}
      </body>
    </html>
  )
}
