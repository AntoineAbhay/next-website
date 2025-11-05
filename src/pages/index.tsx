import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import shuttleImg from "../../public/images/shuttle_launch.jpg";

const Home: NextPage = () => {
  return (
    <>
      <main className="dark:text-white">
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
                objectFit: "cover",
              }}
            />
          </div>
          <div className="flex h-screen flex-col justify-center bg-black bg-opacity-30 pl-[5vw] text-8xl font-bold leading-tight text-white">
            <div className="mt-8">Hey,</div>
            <div>I&apos;m Antoine</div>
          </div>
        </div>
        <div className="flex min-h-screen w-screen flex-col items-center justify-center bg-green-200 bg-[linear-gradient(to_right,#06b6d4_1px,transparent_1px),linear-gradient(to_bottom,#06b6d4_1px,transparent_1px)] bg-[size:60px_60px] bg-[position:20px_20px] dark:bg-purple-900 dark:bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)]">
          <div className="mt-4 bg-green-200 px-4 text-6xl font-bold leading-relaxed dark:bg-purple-900">
            Who I am
          </div>
          <div className="my-6 grid max-w-6xl gap-8 sm:grid-cols-1 lg:grid-cols-3">
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
          <Link
            href="/aboutme"
            className="my-8 transform rounded-full border-4 border-black bg-yellow-200 px-8 py-4 text-xl shadow-[6px_6px_0px_rgba(15,23,42,1)] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[3px_3px_0px_0px_rgba(15,23,42,1)] active:bg-yellow-400 dark:border-white dark:bg-pink-900 dark:active:bg-pink-800"
          >
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
      <div className="border-8 border-black bg-cyan-200 p-4 text-center shadow-[12px_12px_0px_0px_rgba(15,23,42,1)] dark:border-white dark:bg-pink-900">
        <Image
          src={imageSrc}
          alt={alt}
          height={140}
          width={113}
          style={{
            display: "inline-block",
            maxWidth: "113px",
            height: "140px",
          }}
        />
        <div className="text-3xl font-semibold">{title}</div>
        <div className="text-lg">{description}</div>
      </div>
    </>
  );
};

export default Home;
