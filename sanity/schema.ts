import category from "@/schemas/category";
import item from "@/schemas/items";
import playlist from "@/schemas/playlist";
import { type SchemaTypeDefinition } from "sanity";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [item, category, playlist],
};
