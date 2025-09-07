import { Icons } from "@/components/Icons";
import { Button } from "@/components/ui/button";

function AddToFavourite() {
  return (
    <div>
      <Button variant="secondary" size="icon">
        <Icons.heart className="size-4" />
      </Button>
    </div>
  );
}

export default AddToFavourite;
