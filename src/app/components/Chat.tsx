import type { FC } from "react";
import { Accordion, AccordionItem, AccordionTrigger } from "./ui/accordion";

interface ChatProps {}

const Chat: FC<ChatProps> = ({}) => {
  return (
    <Accordion
      type="single"
      collapsible
      className="relative z-40 bg-white shadow "
    >
      <AccordionItem value="item-1">
        <div className="fixed bg-white border border-gray-200 rounded-md right-8 w-80 bottom-8 overflow:hidden">
          <div className="flex flex-col w-full h-full">
            <AccordionTrigger className="px-6 border-b border-zinc-300">
              hello
            </AccordionTrigger>
          </div>
        </div>
      </AccordionItem>
    </Accordion>
  );
};

export default Chat;
