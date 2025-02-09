import { Metadata } from 'next'

// TODO: Update metadata

export function constructMetadata({
  title = 'M Tayyab Baig', // TODO: Add a custom title
  description = "I am a frontend developer transitioning toward full-stack development, with impressive expertise in crafting dynamic and visually compelling user interfaces.", // TODO: Add a custom description
  image = '/thumbnail.png', // TODO: Add a custom image
  icons = '/avatar.svg', // TODO: Add a custom icon
  noIndex = false
}: {
  title?: string
  description?: string
  image?: string
  icons?: string
  noIndex?: boolean
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [image]
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
      creator: '@chrislonzo'
    },
    icons,
    metadataBase: new URL('https://www.chrislonzo.com'),
    ...(noIndex && {
      robots: {
        index: false,
        follow: false
      }
    })
  }
}
