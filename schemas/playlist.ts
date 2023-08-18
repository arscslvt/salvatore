import { defineField } from "sanity";

const playlist = {
  name: "playlist",
  title: "Playlist",
  type: "document",
  fields: [
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      validation: (rule) => rule.required(),
      options: {
        source: "title",
        maxLength: 96,
      },
    }),
    defineField({
      name: "title",
      title: "Playlist title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "cover",
      title: "Cover",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "spotify",
      title: "Spotify",
      type: "url",
    }),
    defineField({
      name: "appleMusic",
      title: "Apple Music",
      type: "url",
    }),
  ],
};

export default playlist;
