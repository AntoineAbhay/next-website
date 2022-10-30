import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useLayoutEffect, useRef } from "react";
import shuttleImg from "../../public/images/shuttle_launch.jpg";

const Home: NextPage = () => {
  const profileRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle("show", entry.isIntersecting);
      });
    });
    const profileItems = [...(profileRef.current?.children || [])];
    profileItems.forEach((profileItem) => {
      observer.observe(profileItem);
    });
  }, []);

  return (
    <>
      <Head>
        <title>Antoine Abhay</title>
        <meta name="description" content="Antoine' website" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>

      <main>
        <div>
          <div className="absolute z-[-1] h-screen w-screen bg-black">
            <Image
              src={shuttleImg}
              alt="A shuttle launch"
              placeholder="blur"
              quality={100}
              objectFit="cover"
              layout="fill"
            />
          </div>
          <div className="h-screen flex flex-col justify-center font-header pl-[5vw] text-7xl font-semibold leading-tight text-white bg-opacity-30 bg-black">
            <div className="mt-8">Hey,</div>
            <div>I&apos;m Antoine</div>
          </div>
        </div>
        <div className="flex min-h-screen w-screen flex-col items-center justify-center">
          <div className="font-header text-5xl font-semibold leading-relaxed">
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
          <Link href='/aboutme'><a className='px-4 py-2 bg-indigo-600 text-white rounded'>Learn more</a></Link>
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
          filter: blur(5px);
          transform: translateX(-100%);
          transition: all 1s;
        }
        .show {
          opacity: 1;
          filter: blur(0);
          transform: translateX(0);
        }
      `}</style>
      <div className="item mb-12 text-center md:w-2/6">
        <Image src={imageSrc} alt={alt} height={140} width={113} />
        <div className="text-2xl">{title}</div>
        <div className="text-base">{description}</div>
      </div>
    </>
  );
};

export default Home;
