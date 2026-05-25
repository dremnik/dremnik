// -----------------------------------
// projects/dremnik/src/components/youtube-embed.tsx
//
// interface VideoEmbedProps       L10
//   video                         L11
//   title                         L12
// export function VideoEmbed()    L15
// -----------------------------------

interface VideoEmbedProps {
  video: string;
  title?: string;
}

export function VideoEmbed({ video, title = "Project video" }: VideoEmbedProps) {
  if (video.startsWith('youtube:')) {
    const videoId = video.replace('youtube:', '');
    return (
      <div className="aspect-video bg-secondary rounded-lg overflow-hidden">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="w-full h-full"
        />
      </div>
    );
  }

  if (video.startsWith('file:')) {
    const filePath = video.replace('file:', '');
    return (
      <div className="aspect-video bg-secondary rounded-lg overflow-hidden">
        <video
          controls
          className="w-full h-full object-cover"
          preload="metadata"
        >
          <source src={filePath} type="video/mp4" />
          <source src={filePath} type="video/webm" />
          <source src={filePath} type="video/ogg" />
          Your browser does not support the video tag.
        </video>
      </div>
    );
  }

  return (
    <div className="aspect-video bg-secondary rounded-lg overflow-hidden flex items-center justify-center text-muted-foreground">
      Invalid video format. Use youtube:video_id or file:path/to/video
    </div>
  );
}