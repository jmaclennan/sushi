// eslint-disable-next-line import/no-unresolved
import { defineCollection, z } from 'astro:content';

const foodCollection = defineCollection({
  type: 'data',
  schema: z.object({
    category: z.string(),
    items: z.array(z.object({
      id: z.number(),
      name: z.string(),
      description: z.optional(z.string()),
      spicy: z.optional(z.boolean()),
      image: z.optional(z.string()),
      price: z.number(),
    })),
  }),
});

// eslint-disable-next-line import/prefer-default-export
export const collections = {
  food: foodCollection,
};
