import type { CollectionConfig } from 'payload/types'

const Genres: CollectionConfig = {
  slug: 'genres',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
    },
  ],
}

export default Genres
