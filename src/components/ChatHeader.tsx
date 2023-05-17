import type { FC } from "react";

interface ChatHeaderProps {}

const ChatHeader: FC<ChatHeaderProps> = ({}) => {
  return (
    <div className="flex items-center justify-start w-full gap-3 text-zinc-800">
      <div className="flex flex-col items-start text-sm">
        <p className="text-xs">Chat with</p>
        <div className="flex gap-1.5 items-center">
          <p className="w-2 h-2 bg-green-500 rounded-full" />
          <p className="font-medium">Bookbuddy support</p>
        </div>
      </div>
    </div>
  );
};

export default ChatHeader;
