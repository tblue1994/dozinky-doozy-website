export const VideoEmbed = ({
  url,
  className = "",
}: {
  url: string;
  className?: string;
}) => {
  return (
    <iframe
      className={`aspect-video w-full ${className}`}
      src={url}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    />
  );
};
