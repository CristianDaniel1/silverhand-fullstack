import { ChangeEvent, useState } from 'react';
import profileIcon from '../../assets/profile.jpg';
import { useUpdateUser } from '../../hooks/mutations/useUpdateUser.ts';
import { UserAuth } from '../../types';
import { CameraIcon } from '../icons/CameraIcon.tsx';

interface ProfilePicProps {
  user: UserAuth;
}

export const ProfilePic = ({ user }: ProfilePicProps) => {
  const [selectedImg, setSelectedImg] = useState<null | string>(null);
  const { mutate, isPending } = useUpdateUser();

  function handleChangeImage(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files![0];
    if (!file) return;

    const reader = new FileReader();

    reader.onload = async () => {
      if (!reader.result) return;

      const base64Image = reader.result as string;
      setSelectedImg(base64Image);
      const updatedUser = { ...user, profilePic: base64Image };
      mutate({ user: updatedUser, id: user.id });
    };

    reader.readAsDataURL(file);
  }

  return (
    <div className="relative size-[6.25rem] mx-auto sm:mx-0 mb-8 sm:mb-0">
      <img
        src={user.profilePic || selectedImg || profileIcon}
        alt="Foto de perfil"
        className="object-cover w-full h-full rounded-full"
      />
      <label
        htmlFor="profile-image"
        className={`absolute top-0 left-0 w-full h-full p-2 rounded-full cursor-pointer duration-200 ${
          isPending ? 'animate-pulse' : ''
        }`}
      >
        <input
          type="file"
          id="profile-image"
          className="hidden"
          accept="image/*"
          onChange={handleChangeImage}
          disabled={isPending}
          aria-label="Alterar foto de perfil"
        />
        <CameraIcon className="text-secundary bg-white rounded-full p-[6px] shadow-md size-9 absolute bottom-0 -right-2" />
      </label>
    </div>
  );
};
