import Image from "next/image";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { AvatarProps } from "@/types/types";

export const WorkspaceAvatar = ({ image, name, className }: AvatarProps) => {
  if (!image)
    return (
      <Avatar className={cn("size-10 ", className)}>
        <AvatarFallback className="text-white bg-blue-500 font-semibold text-lg uppercase">
          {name?.[0]}
        </AvatarFallback>
      </Avatar>
    );

  return (
    <div
      className={cn("size-10 relative rounded-md  overflow-hidden", className)}
    >
      <Image
        src={image}
        alt={name}
        fill
        className="object-cover rounded-full"
      />
    </div>
  );
};
