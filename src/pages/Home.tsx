import { Hero } from "@/components/Hero";
import { Domains } from "@/components/Domains";
import { VideoMarquee } from "@/components/VideoMarquee";
import { LatestEvents } from "@/components/LatestEvents";
import { ClosingCTA } from "@/components/ClosingCTA";

export default function Home({ onJoinClick }: { onJoinClick: () => void }) {
  return (
    <main>
      <Hero onJoinClick={onJoinClick} />
      <Domains />
      <VideoMarquee />
      <LatestEvents />
      <ClosingCTA onJoinClick={onJoinClick} />
    </main>
  );
}
