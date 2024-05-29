import { CollectionConfig } from 'payload/types'

const Events: CollectionConfig = {
  slug: 'events',
  fields: [
    {
        name: 'name',
        type: 'text',
    },
    {
        name: 'location',
        type: 'text',
    },
    {
        name: 'startDate',
        type: 'date',
        admin: {
            date: {
                pickerAppearance: 'dayAndTime',
                displayFormat: 'dd/MM/yyyy HH:mm:ss',
            },
        },
    },
    {
        name: 'endDate',
        type: 'date',
        admin: {
            date: {
                pickerAppearance: 'dayAndTime',
                displayFormat: 'dd/MM/yyyy HH:mm:ss a',
            },
        },
    },
    {
        name: 'price',
        type: 'number',
    },
    {
      name: 'genre',
      type: 'relationship',
      relationTo: 'genres'
    },
  ],
}

export default Events