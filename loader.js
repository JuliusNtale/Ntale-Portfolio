"use client";

export default function myImageLoader({ src, width, quality }) {
    return `https://juliusntale.hillsviewproduction.com/${src}?w=${width}&q=${quality || 75}`;
  }
  