import type { User } from "@/type/index";

import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Icons } from "./Icons";

interface UserProfileProps {
  data: User;
}
function UserProfile({ data }: UserProfileProps) {
  if (!data) {
    return (
      <div className="">
        <Button>
          <Link to="/signin">Sign In</Link>
        </Button>
      </div>
    );
  }

  const initialName = `${data.firstName.charAt(0).toUpperCase() ?? ""} ${
    data.lastName.charAt(0).toUpperCase() ?? ""
  }`;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="rounded-full" size="icon">
          {data.imageUrl ? (
            <img src={data.imageUrl} alt="" className="rounded-full" />
          ) : (
            <div className="">{initialName}</div>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end">
        <DropdownMenuLabel>
          <div className="">
            <p>{data.username.toUpperCase()}</p>
            <p className="text-sm text-muted-foreground">{data.email}</p>
          </div>
        </DropdownMenuLabel>

        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Icons.person /> Profile
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>

          <DropdownMenuItem>
            <Icons.setting />
            Settings
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />

        <DropdownMenuItem>
          <Icons.exit />
          Log Out
          <DropdownMenuShortcut>⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default UserProfile;
