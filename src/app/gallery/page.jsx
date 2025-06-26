"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { X, ZoomIn, Camera, Video } from "lucide-react";

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeFilter, setActiveFilter] = useState("All");

  // Mock gallery data - in a real app, this would come from a CMS or API
  const galleryItems = [
    {
      id: 1,
      title: "Mountain Landscape",
      category: "Photography",
      type: "Landscape",
      image: "/images/gallery/landscape-1.jpg",
      description: "Breathtaking mountain vista captured during golden hour"
    },
    {
      id: 2,
      title: "Portrait Session",
      category: "Photography",
      type: "Portrait",
      image: "/images/gallery/portrait-1.jpg",
      description: "Professional portrait session with natural lighting"
    },
    {
      id: 3,
      title: "Urban Architecture",
      category: "Photography",
      type: "Architecture",
      image: "/images/gallery/architecture-1.jpg",
      description: "Modern architectural design in the city center"
    },
    {
      id: 4,
      title: "Product Showcase",
      category: "Videography",
      type: "Commercial",
      image: "/images/gallery/video-1.jpg",
      description: "Commercial product video with cinematic approach"
    },
    {
      id: 5,
      title: "Nature Documentary",
      category: "Videography",
      type: "Documentary",
      image: "/images/gallery/video-2.jpg",
      description: "Wildlife documentation in natural habitat"
    },
    {
      id: 6,
      title: "Wedding Photography",
      category: "Photography",
      type: "Wedding",
      image: "/images/gallery/wedding-1.jpg",
      description: "Capturing precious moments on the special day"
    },
    {
      id: 7,
      title: "Corporate Event",
      category: "Videography",
      type: "Event",
      image: "/images/gallery/event-1.jpg",
      description: "Professional event coverage and highlights"
    },
    {
      id: 8,
      title: "Street Photography",
      category: "Photography",
      type: "Street",
      image: "/images/gallery/street-1.jpg",
      description: "Candid moments captured in urban environments"
    }
  ];

  const filters = ["All", "Photography", "Videography"];

  const filteredItems = galleryItems.filter(item => {
    if (activeFilter === "All") return true;
    return item.category === activeFilter;
  });

  const openLightbox = (item) => {
    setSelectedImage(item);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <motion.div
      className="min-h-screen bg-background"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4 py-16 lg:py-24">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Visual <span className="text-primary">Stories</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A collection of moments captured through the lens - from stunning landscapes 
            to intimate portraits, each image tells a unique story.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex bg-accent rounded-lg p-1">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-md transition-colors flex items-center gap-2 ${
                  activeFilter === filter
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-background"
                }`}
              >
                {filter === "Photography" && <Camera className="w-4 h-4" />}
                {filter === "Videography" && <Video className="w-4 h-4" />}
                {filter}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="group relative aspect-square overflow-hidden rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 cursor-pointer"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ scale: 1.02 }}
              onClick={() => openLightbox(item)}
            >
              {/* Placeholder background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30" />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              {/* Content overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                <p className="text-white/80 text-sm">{item.type}</p>
              </div>

              {/* Category badge */}
              <div className="absolute top-3 right-3">
                <span className="bg-black/50 text-white px-2 py-1 rounded-full text-xs backdrop-blur-sm">
                  {item.category}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Lightbox */}
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <motion.div
              className="relative max-w-4xl max-h-full"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={closeLightbox}
                className="absolute -top-12 right-0 text-white hover:text-primary transition-colors"
              >
                <X className="w-8 h-8" />
              </button>

              {/* Image */}
              <div className="aspect-video bg-gradient-to-br from-primary/30 to-secondary/30 rounded-lg overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-white text-lg">
                  {selectedImage.title}
                </div>
              </div>

              {/* Image info */}
              <div className="mt-4 text-white text-center">
                <h3 className="text-2xl font-bold mb-2">{selectedImage.title}</h3>
                <p className="text-white/80 mb-1">{selectedImage.description}</p>
                <span className="text-primary">{selectedImage.category} • {selectedImage.type}</span>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* CTA Section */}
        <motion.div
          className="mt-20 text-center"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-8 lg:p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">
              Need Professional Photography or Videography?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Whether it&apos;s capturing your special moments, creating marketing content, 
              or documenting your events, I&apos;m here to help bring your vision to life.
            </p>
            <motion.button
              className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default GalleryPage;
