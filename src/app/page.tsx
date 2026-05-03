import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import PressLogos from "@/components/PressLogos";
import Featured from "@/components/Featured";
import MeetOwner from "@/components/MeetOwner";
import Gallery from "@/components/Gallery";
import LocationHours from "@/components/LocationHours";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <PressLogos />
        <Featured />
        <MeetOwner />
        <Gallery />
        <LocationHours />
      </main>
      <Footer />
    </>
  );
}
