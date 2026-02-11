"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

/* components */
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { VideoEmbed } from "@/components/youtube-embed";
import { IconArrowUpDiagonalScale } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

interface ProjectGalleryProps {
  videos?: string[];
  images?: (string | { src: string; title?: string; width?: number; height?: number; ref?: boolean })[];
  projectName: string;
}

export function ProjectGallery({
  videos = [],
  images = [],
  projectName,
}: ProjectGalleryProps) {
  const [mainApi, setMainApi] = useState<CarouselApi>();
  const [dialogApi, setDialogApi] = useState<CarouselApi>();
  const [isOpen, setIsOpen] = useState(false);
  const [startIndex, setStartIndex] = useState(0);
  const [dialogCurrent, setDialogCurrent] = useState(0);

  // Normalize images to objects with title and dimensions
  const normalizedImages = (images || []).map((img) =>
    typeof img === "string"
      ? {
          src: img,
          title:
            img
              .split("/")
              .pop()
              ?.replace(/\.[^.]+$/, "")
              ?.replace(/[\-_]+/g, " ") || "",
          width: undefined,
          height: undefined,
          ref: false,
        }
      : { 
          src: img.src, 
          title: img.title || "",
          width: img.width,
          height: img.height,
          ref: img.ref || false,
        }
  );
  const videosCount = videos?.length || 0;
  const totalImages = normalizedImages.length;

  // Find reference image dimensions or use default aspect ratio
  const refImage = normalizedImages.find(img => img.ref);
  const refAspectRatio = refImage && refImage.width && refImage.height 
    ? refImage.width / refImage.height 
    : 16 / 9; // fallback to 16:9 if no ref image

  const handleImageClick = (index: number) => {
    // Account for videos being first
    const totalIndex = (videos?.length || 0) + index;
    setStartIndex(totalIndex);
    setIsOpen(true);
  };

  // Sync dialog carousel to start index when opened
  useEffect(() => {
    if (isOpen && dialogApi && startIndex >= 0) {
      dialogApi.scrollTo(startIndex, true);
    }
  }, [isOpen, dialogApi, startIndex]);

  // Track current slide index in dialog
  useEffect(() => {
    if (!dialogApi) return;
    const setIndex = () => setDialogCurrent(dialogApi.selectedScrollSnap());
    setIndex();
    dialogApi.on("select", setIndex);
    dialogApi.on("reInit", setIndex);
    return () => {
      dialogApi.off("select", setIndex);
    };
  }, [dialogApi]);

  return (
    <div className="space-y-6">
      {/* Gallery header */}
      <div className="flex items-center justify-between">
        <h2 className="text-sm text-muted-foreground">gallery</h2>
        <Button
          onClick={() => setIsOpen(true)}
          variant="ghost"
          size="sm"
          className="h-7 w-7 text-muted-foreground hover:text-foreground"
        >
          <IconArrowUpDiagonalScale className="size-3.5" />
        </Button>
      </div>

      <Carousel className="w-full" setApi={setMainApi}>
        <CarouselContent>
          {/* Videos first */}
          {videos?.map((video, index) => (
            <CarouselItem key={`video-${index}`}>
              <div className="aspect-video">
                <VideoEmbed
                  video={video}
                  title={`${projectName} video ${index + 1}`}
                />
              </div>
            </CarouselItem>
          ))}

          {/* Then images */}
          {normalizedImages?.map((image, index) => (
            <CarouselItem key={`image-${index}`}>
              <div
                className="aspect-video bg-secondary shadow overflow-hidden cursor-pointer"
                onClick={() => handleImageClick(index)}
              >
                <Image
                  src={image.src}
                  alt={image.title || `${projectName} screenshot ${index + 1}`}
                  width={1920}
                  height={1080}
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="!bg-transparent !border-border hover:bg-primary-muted/20 hover:cursor-pointer" />
        <CarouselNext className="!bg-transparent !border-border hover:bg-primary-muted/20 hover:cursor-pointer" />
      </Carousel>

      {/* Dialog with centered viewport, title header, and footer index */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent
          overlayClassName="bg-black/30 dark:bg-black/40 backdrop-blur-[2px]"
          className="flex flex-col min-h-0 w-[min(95vw,1400px)] max-w-[1400px] sm:max-w-[1400px] h-[85vh] p-0 border-0 rounded-lg bg-transparent overflow-hidden shadow-none"
        >
          <DialogTitle className="sr-only">Gallery View</DialogTitle>

          {/* Title above slide */}
          <div className="px-4 pt-3 pb-2 text-center">
            <div className="text-sm font-medium text-foreground">
              {dialogCurrent < videosCount 
                ? `${projectName} video ${dialogCurrent + 1}`
                : normalizedImages[dialogCurrent - videosCount]?.title || ""}
            </div>
          </div>

          {/* Viewport area */}
          <div className="flex-1 min-h-0">
            <Carousel className="w-full h-full min-h-0" setApi={setDialogApi}>
              <div className="grid grid-cols-[auto_1fr_auto] items-center h-full">
                <div className="w-14 sm:w-20 md:w-24 flex justify-center pr-2 sm:pr-3">
                  <CarouselPrevious className="static top-auto left-auto translate-y-0 !bg-transparent !border-border hover:bg-primary-muted/20 hover:cursor-pointer" />
                </div>
                <CarouselContent className="h-full min-h-0">
                  {/* Videos in dialog */}
                  {videos?.map((video, index) => (
                    <CarouselItem key={`dialog-video-${index}`} className="h-full min-h-0">
                      <div className="flex items-center justify-center h-full py-6">
                        <div className="w-full h-full max-w-[1400px] flex items-center">
                          <div className="w-full aspect-video">
                            <VideoEmbed
                              video={video}
                              title={`${projectName} video ${index + 1}`}
                            />
                          </div>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}

                  {/* Images in dialog */}
                  {normalizedImages?.map((image, index) => {
                    // Check if image is taller than reference
                    const imageAspectRatio = image.width && image.height 
                      ? image.width / image.height 
                      : refAspectRatio;
                    const isTaller = imageAspectRatio < refAspectRatio;

                    return (
                      <CarouselItem key={`dialog-image-${index}`} className="h-full min-h-0">
                        <div className="h-full py-6 flex items-center justify-center">
                          <div className="w-full max-w-[1400px] flex items-center justify-center">
                            <div 
                              className="w-full relative"
                              style={{
                                aspectRatio: refAspectRatio,
                                maxHeight: 'calc(100vh - 200px)'
                              }}
                            >
                              {isTaller ? (
                                <ScrollArea className="w-full h-full">
                                  <Image
                                    src={image.src}
                                    alt={image.title || `${projectName} fullscreen ${index + 1}`}
                                    width={image.width || 1920}
                                    height={image.height || 1080}
                                    className="block w-full h-auto select-none"
                                  />
                                </ScrollArea>
                              ) : (
                                <div className="w-full h-full flex items-start justify-center">
                                  <Image
                                    src={image.src}
                                    alt={image.title || `${projectName} fullscreen ${index + 1}`}
                                    width={image.width || 1920}
                                    height={image.height || 1080}
                                    className="block w-auto h-full select-none"
                                    style={{ maxWidth: '100%' }}
                                  />
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </CarouselItem>
                    );
                  })}
                </CarouselContent>
                <div className="w-14 sm:w-20 md:w-24 flex justify-center pl-2 sm:pl-3">
                  <CarouselNext className="static top-auto right-auto translate-y-0 !bg-transparent !border-border hover:bg-primary-muted/20 hover:cursor-pointer" />
                </div>
              </div>
            </Carousel>
          </div>

          {/* Footer index (for all slides) */}
          {(videosCount > 0 || totalImages > 0) && (
            <div className="px-4 pb-3 pt-2 text-center">
              <div className="text-xs font-mono text-mono">
                {(() => {
                  const totalCount = videosCount + totalImages;
                  const digits = Math.max(2, String(totalCount).length);
                  const current = dialogCurrent + 1;
                  return `${String(current).padStart(digits, "0")} / ${String(totalCount).padStart(digits, "0")}`;
                })()}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
