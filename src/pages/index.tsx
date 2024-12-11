import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { useLayoutEffect, useRef } from "react";
import shuttleImg from "../../public/images/shuttle_launch.jpg";

const Home: NextPage = () => {
  const profileRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("show", entry.isIntersecting);
        });
      },
      { rootMargin: '100% 100% 0px', // No intersection taken into account on top and sides
      threshold: [0.5] } // Half of the element is visible
    );
    const profileItems = [...(profileRef.current?.children || [])];
    profileItems.forEach((profileItem) => {
      observer.observe(profileItem);
    });
  }, []);

  return (
    <>
      <main className="dark:text-slate-200">
        <div>
          <div className="absolute z-[-1] h-screen w-screen bg-black">
            <Image
              src={shuttleImg}
              alt="A shuttle launch"
              placeholder="blur"
              quality={100}
              fill
              sizes="100vw"
              style={{
                objectFit: "cover"
              }} />
          </div>
          <div className="flex h-screen flex-col justify-center bg-black bg-opacity-30 pl-[5vw] text-7xl font-semibold leading-tight text-white dark:text-slate-200">
            <div className="mt-8">Hey,</div>
            <div>I&apos;m Antoine</div>
          </div>
        </div>
        <div className="flex min-h-screen w-screen flex-col items-center justify-center">
          <div className="mt-4 text-5xl font-semibold leading-relaxed">
            Who I am
          </div>
          <div className="h-1 w-20 bg-red-600" />
          <div
            ref={profileRef}
            className="flex w-full max-w-6xl flex-col items-center md:mt-[5vw] md:flex-row"
          >
            <ProfileItem
              imageSrc="/images/dev.inline.svg"
              alt="A developer"
              title="Developer"
              description="Building products people love"
            />
            <ProfileItem
              imageSrc="/images/space.inline.svg"
              alt="An astronaut"
              title="Space enthousiast"
              description="Dreaming of the stars"
            />
            <ProfileItem
              imageSrc="/images/cyclist.inline.svg"
              alt="A cyclist"
              title="Urban cyclist"
              description="Riding in Paris"
            />
          </div>
          <Link href="/aboutme" className="mb-4 rounded bg-indigo-600 px-4 py-2 text-white dark:text-slate-200">
            Learn more
          </Link>
        </div>
      </main>
    </>
  );
};

interface ProfileItemProps {
  imageSrc: string;
  alt: string;
  title: string;
  description: string;
}

const ProfileItem = ({
  imageSrc,
  alt,
  title,
  description,
}: ProfileItemProps) => {
  return (
    <>
      <style jsx>{`
        .item {
          opacity: 0;
          transform: translateX(-50%);
          transition: opacity 2s cubic-bezier(0.16, 1, 0.3, 1),
            transform 2s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .show {
          opacity: 1;
          transform: translateX(0);
        }
      `}</style>
      <div className="item mb-12 text-center md:w-2/6">
        <Image
          src={imageSrc}
          alt={alt}
          height={140}
          width={113}
          style={{
            display: 'inline-block',
            maxWidth: "113px",
            height: "140px"
          }} />
        <div className="text-2xl">{title}</div>
        <div className="text-base">{description}</div>
      </div>
    </>
  );
};

export default Home;
