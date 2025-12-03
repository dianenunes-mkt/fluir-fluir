import { PlayCircle } from "lucide-react";

interface VideoPlaceholderProps {
  title: string;
  youtubeUrl?: string;
  aspectRatio?: "video" | "square";
}

// Converte URL normal do YouTube para formato embed
const getYoutubeEmbedUrl = (url: string) => {
  try {
    const parsed = new URL(url);
    const v = parsed.searchParams.get("v");

    if (v) {
      return `https://www.youtube.com/embed/${v}`;
    }

    // Se já vier em outro formato (embed etc.), usa direto
    return url;
  } catch {
    return url;
  }
};

export const VideoPlaceholder = ({
  title,
  youtubeUrl,
  aspectRatio = "video",
}: VideoPlaceholderProps) => {
  const hasVideo = !!youtubeUrl;
  const embedUrl = youtubeUrl ? getYoutubeEmbedUrl(youtubeUrl) : "";

  return (
    <div
      className={`relative w-full ${
        aspectRatio === "video" ? "aspect-video" : "aspect-square"
      } bg-muted rounded-lg overflow-hidden shadow-elegant group`}
    >
      {hasVideo ? (
        <iframe
          src={embedUrl}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full border-0"
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
          <PlayCircle className="w-10 h-10 text-secondary mb-3 group-hover:scale-110 transition-transform" />
          <p className="text-muted-foreground font-medium">{title}</p>
          <p className="text-sm text-muted-foreground/60 mt-1">
            Link do YouTube será inserido aqui
          </p>
        </div>
      )}
    </div>
  );
};

export default VideoPlaceholder;
