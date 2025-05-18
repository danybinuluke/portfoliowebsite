import Container from "@/components/Container";
import Photo from "@/components/Photo";
import SocialLinks from "@/components/SocialLinks";
import Statistics from "@/components/Statistics";

import HomeDescription from "@/components/HomeDescription";
import { Download } from "lucide-react";



// Fetch data from an API on the server side
async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

// Home Page Component
export default async function Home() {
  const data = await getData(); // Fetch data from API

  return (
    <Container className="py-10 grid grid-cols-1 md:grid-cols-2 gap-10">
      <div className="flex flex-col items-center md:items-start gap-5 md:gap-7 text-center md:text-start">
        <div>
          <h3 className="font-semibold text-white/70 tracking-wider mb-1">Software Engineer</h3>
          <h2 className="text-3xl md:text-5xl mb-2">Hello I&apos;m</h2>
          <h1 className="text-lightSky text-5xl md:text-7xl tracking-normal">Dany Binu Luke</h1>
        </div>
        <div className="w-full">
          <HomeDescription />
        </div>

        <a 
  href="/Resume.pdf" 
  download="Resume.pdf" 
  className="bg-transparent rounded-full border border-lightSky/50 flex items-center px-6 py-2.5 gap-2 text-sm text-lightSky hover:bg-hoverColor hover:text-black hoverEffect"
>
  <Download className="w-4 h-4" />Download CV
</a>
<SocialLinks />
<Statistics />

      </div>
      <Photo />
    </Container>
  );
}
