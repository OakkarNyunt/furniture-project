import { Icons } from "@/components/Icons";

interface RatingProps {
  rating: number;
}

function Rating({ rating }: RatingProps) {
  return (
    <div className="flex items-center space-x-1 my-4 pl-4 md:pl-0">
      {Array.from({ length: 5 }).map((_, i) => (
        <Icons.star
          key={i}
          className={rating >= i + 1 ? "text-yellow-300" : "text-gray-900"}
        />
      ))}
      {/* <div className="">
        <Icons.heart />
      </div> */}
    </div>
  );
}

export default Rating;
