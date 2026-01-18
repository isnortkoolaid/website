'use client'

import Image from 'next/image';
import Marquee from 'react-fast-marquee';

export default function GallerySection() {
  return (
    <section className="py-8 bg-black">
      <Marquee>
        <Image
          src="/images/compressed-untitled4.jpg"
          alt="Team Ingenuity as of 2025"
          width={400}
          height={225}
          className="mx-4 rounded-lg object-cover"
          loading="lazy"
          quality={75}
          style={{ width: 400, height: 225 }}
        />
        <Image
          src="/images/compressed-untitled2.jpg"
          alt="Robot build in progress"
          width={400}
          height={225}
          className="mx-4 rounded-lg object-cover"
          loading="lazy"
          quality={75}
          style={{ width: 400, height: 225 }}
        />
        <Image
          src="/images/compressed-Image_20251004_202757_942.jpg"
          alt="Team Ingenuity fundraising during China Day 2025"
          width={400}
          height={225}
          className="mx-4 rounded-lg object-cover"
          loading="lazy"
          quality={75}
          style={{ width: 400, height: 225 }}
        />
        <Image
          src="/images/image-3.png"
          alt="Team Ingenuity's Meeting with Dr. Peilin Song"
          width={400}
          height={225}
          className="mx-4 rounded-lg object-cover"
          loading="lazy"
          quality={75}
          style={{ width: 400, height: 225 }}
        />
      </Marquee>
    </section>
  );
}
