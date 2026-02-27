
import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'UniGlyph | Unicode Presentation Swap',
    short_name: 'UniGlyph',
    description: 'Convert colored emojis to their monochrome text-presentation variants.',
    start_url: '/',
    display: 'standalone',
    background_color: '#020617',
    theme_color: '#3b82f6',
    icons: [
      {
        src: 'https://placehold.co/192x192/3b82f6/white?text=UG',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: 'https://placehold.co/512x512/3b82f6/white?text=UG',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
