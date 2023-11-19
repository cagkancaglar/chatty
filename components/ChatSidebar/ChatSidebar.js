import Link from "next/link";

export const ChatSidebar = () => {
  useEffect(() => {
    loadChatList();
  }, []);

  const loadChatList = async () => {
    const response = await fetch("/api/chat/getChatList", {
      method: "POST",
    });
    const json = await response.json();
    console.log("Chat list: ", json);
  };

  return (
    <div className="bg-gray-900 text-white">
      <Link href="/api/auth/logout">Logout</Link>
    </div>
  );
};
