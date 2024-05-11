import { useParams } from "next/navigation";

type params = {
  tradeId: string;
};

export default function FindTrade() {
  const { tradeId }: params = useParams();

  return (
    <h1>Trade ID: {tradeId}</h1>
  )
}