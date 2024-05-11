import { useParams } from "next/navigation";

type params = {
  profileId: string;
};

export default function FindProfile() {
  const { profileId }: params = useParams();

  return (
    <h1>Profile ID: {profileId}</h1>
  );
}