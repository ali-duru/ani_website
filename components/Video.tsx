interface VideoProps {
  videoPath: string;
}

export function Video({ videoPath }: VideoProps) {
  return (
    <video width="2200" height="1200" controls preload="none">
      <source src={videoPath} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}
