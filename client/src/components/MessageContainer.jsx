import MessageInput from "./MessageInput"
import Messages from "./Messages"
import NoSelectedChat from "./NoSelectedChat";

const MessageContainer = () => {

  const noChatsSelected = true;

  return (
    <div className='md:min-w-[450px] flex flex-col'>
        {
          noChatsSelected ? 
          < NoSelectedChat />
          : 
          <>
            {/* Header */}
            <div className="bg-slate-500 px-4 py-2 mb-2 flex items-center gap-3">
                <span>
                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" className="w-10 rounded-full" alt="user avatar" />
                </span>
                <span className="text-white">John Doe</span>
            </div>

            <Messages />
            <MessageInput />
        </>}
    </div>
  )
}

export default MessageContainer