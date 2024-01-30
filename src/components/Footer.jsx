import useGetQuote from "../hooks/useGetQuote";

export default function Footer() {
  const { quote } = useGetQuote();
  return (
    <div
      className={`w-screen font-serif
    align-middle
    text-center
    italic
    text-sm
    p-2 h-14
    pt-4 
    shadow-lg
    text-gray-300
    bg-zinc-900 `}
    >
      "{quote}"
    </div>
  );
}
