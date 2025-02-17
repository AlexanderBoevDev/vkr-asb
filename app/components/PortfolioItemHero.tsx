"use client";
import Image from "next/image";

interface PortfolioItemProps {
  alt: string;
  src: string;
  text: string;
}

export default function PortfolioItemHero({
  alt,
  src,
  text
}: PortfolioItemProps) {
  return (
    <section className="block z-10 relative">
      <div className="img-wrap mt-4">
        <Image alt={alt} src={src} width={1200} height={600} />
      </div>
      <p className="xl:px-24 my-10 text-xl font-magistral tracking-widest">
        {text}
      </p>
    </section>
  );
}
