import Hero from "./components/sections/Hero";
import WhoWeAre from "./components/sections/WhoWeAre";
import WhatWeDo from "./components/sections/WhatWeDo";

export default function Home() {
  return (
    <main className="flex-1 px-4">
      <Hero />
      <WhoWeAre />
      <WhatWeDo />
    </main>
  );
}
