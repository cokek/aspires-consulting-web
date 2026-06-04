import Hero from "./components/sections/Hero";
import WhoWeAre from "./components/sections/WhoWeAre";
import WhatWeDo from "./components/sections/WhatWeDo";
import KeyPersonnel from "./components/sections/KeyPersonnel";
import ContactAPro from "./components/sections/ContactAPro";
export default function Home() {
  return (
    <main className="flex-1 px-4 md:px-10">
      <Hero />
      <WhoWeAre />
      <WhatWeDo />
      <KeyPersonnel />
      <ContactAPro />
    </main>
  );
}
