import Image from "next/image";

type ProfileHeaderProps = {
  name: string;
  bio: string;
  imageUrl: string;
};

export default function ProfileHeader({ name, bio, imageUrl }: ProfileHeaderProps) {
  return (
    <header className="flex flex-col items-center text-center">
      <div className="rounded-full bg-white/60 p-1.5 shadow-[0_18px_40px_-14px_rgba(150,80,40,0.45)] ring-1 ring-white/80 backdrop-blur-md dark:bg-white/10 dark:shadow-[0_18px_40px_-14px_rgba(0,0,0,0.7)] dark:ring-white/10">
        <Image
          src={imageUrl}
          alt={`${name} 프로필 사진`}
          width={160}
          height={160}
          priority
          className="h-28 w-28 rounded-full object-cover sm:h-32 sm:w-32"
        />
      </div>
      <h1 className="mt-6 text-2xl font-bold tracking-tight">{name}</h1>
      <p className="mt-2 text-balance text-sm leading-relaxed opacity-70">{bio}</p>
    </header>
  );
}
