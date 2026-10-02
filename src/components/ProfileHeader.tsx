import Image from "next/image";

type ProfileHeaderProps = {
  name: string;
  bio: string;
  imageUrl: string;
};

export default function ProfileHeader({ name, bio, imageUrl }: ProfileHeaderProps) {
  return (
    <header className="flex flex-col items-center text-center">
      <Image
        src={imageUrl}
        alt={`${name} 프로필 사진`}
        width={160}
        height={160}
        priority
        className="h-36 w-36 rounded-full object-cover ring-4 ring-black/5 sm:h-40 sm:w-40 dark:ring-white/10"
      />
      <h1 className="mt-5 text-xl font-bold sm:text-2xl">{name}</h1>
      <p className="mt-2 text-sm text-black/60 sm:text-base dark:text-white/60">{bio}</p>
    </header>
  );
}
