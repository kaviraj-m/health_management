import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Sidebar from "@/components/dashboard/Sidebar";
import { Bell, Send, Paperclip, Search, Phone, Video, Loader2 } from "lucide-react";
import { STORAGE_KEYS, messagesApi, Message, Conversation } from "@/lib/api";
import { useToast } from "@/components/ui/use-toast";

// Interface for the API response
interface ApiConversation {
  user: {
    id: number;
    email: string;
    role: string;
    profile: {
      firstName: string;
      lastName: string;
      phone?: string;
      avatar?: string;
    };
  };
  latestMessage: Message | null;
  unreadCount: number;
}

export default function PatientMessages() {
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [activeConversation, setActiveConversation] = useState<number | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const { toast } = useToast();

  // Get user token from storage
  const getToken = () => {
    return localStorage.getItem(STORAGE_KEYS.AUTH_TOKEN) || '';
  };

  // Fetch conversations
  const fetchConversations = async () => {
    try {
      setLoading(true);
      const token = getToken();
      // Use an unknown intermediate type for safe casting
      const apiResponse = await messagesApi.getConversations(token) as unknown as ApiConversation[];
      
      // Transform API response to match the expected structure
      const transformedConversations = apiResponse.map(item => ({
        id: item.user?.id || 0,
        otherUser: {
          id: item.user?.id || 0,
          firstName: item.user?.profile?.firstName || '',
          lastName: item.user?.profile?.lastName || '',
          role: item.user?.role || ''
        },
        lastMessage: item.latestMessage || null,
        unreadCount: item.unreadCount || 0
      }));
      
      setConversations(transformedConversations);
    } catch (error) {
      console.error("Failed to fetch conversations:", error);
      toast({
        title: "Error",
        description: "Failed to load conversations",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  // Fetch messages for a conversation
  const fetchMessages = async (userId: number) => {
    try {
      setLoading(true);
      const token = getToken();
      const response = await messagesApi.getConversation(token, userId);
      setMessages(response);
      // Mark messages as read
      await messagesApi.markAllAsRead(token, userId);
      // Refresh conversations to update unread count
      fetchConversations();
    } catch (error) {
      console.error("Failed to fetch messages:", error);
      toast({
        title: "Error",
        description: "Failed to load messages",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  // Send a message
  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim() || !activeConversation) return;

    try {
      const token = getToken();
      const newMessage = await messagesApi.sendMessage(token, {
        content: message,
        receiverId: activeConversation,
      });
      
      setMessages(prev => [...prev, newMessage]);
      setMessage("");
      // Refresh conversations to update last message
      fetchConversations();
    } catch (error) {
      console.error("Failed to send message:", error);
      toast({
        title: "Error",
        description: "Failed to send message",
        variant: "destructive",
      });
    }
  };

  // Handle conversation selection
  const handleSelectConversation = (userId: number) => {
    setActiveConversation(userId);
    fetchMessages(userId);
  };

  // Filter conversations based on search query
  const filteredConversations = conversations.filter(conv => 
    conv.otherUser && 
    ((conv.otherUser.firstName && conv.otherUser.firstName.toLowerCase().includes(searchQuery.toLowerCase())) || 
     (conv.otherUser.lastName && conv.otherUser.lastName.toLowerCase().includes(searchQuery.toLowerCase())))
  );

  useEffect(() => {
    fetchConversations();
  }, []);

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar userType="patient" />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top header */}
        <header className="bg-white border-b border-gray-200 p-4 flex justify-between items-center">
          <div>
            <h1 className="text-xl font-bold text-gray-800">Messages</h1>
            <p className="text-sm text-gray-500">Chat with your doctors</p>
          </div>
          
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            {conversations.some(conv => conv.unreadCount > 0) && (
              <span className="absolute top-0 right-0 h-2 w-2 bg-health-red rounded-full"></span>
            )}
          </Button>
        </header>
        
        {/* Main content */}
        <div className="flex-1 flex overflow-hidden">
          {/* Chat list sidebar */}
          <div className="w-80 border-r border-gray-200 bg-white flex flex-col">
            <div className="p-4">
              <div className="relative">
                <Search className="h-4 w-4 absolute left-3 top-3 text-gray-400" />
                <Input 
                  placeholder="Search doctors..." 
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
            
            <div className="flex-1 overflow-y-auto">
              {loading ? (
                <div className="flex justify-center items-center h-full">
                  <Loader2 className="h-8 w-8 animate-spin" />
                </div>
              ) : filteredConversations.length === 0 ? (
                <div className="p-4 text-center text-gray-500">
                  No conversations found
                </div>
              ) : (
                filteredConversations.map((conversation) => (
                  <div 
                    key={conversation.id}
                    onClick={() => handleSelectConversation(conversation.otherUser.id)}
                    className={`p-4 border-b border-gray-200 cursor-pointer ${
                      activeConversation === conversation.otherUser.id ? 'bg-blue-50' : 'hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-start">
                      <div className="h-10 w-10 rounded-full bg-health-blue text-white flex items-center justify-center mr-3">
                        <span className="font-medium">
                          {conversation.otherUser.firstName[0]}{conversation.otherUser.lastName[0]}
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-baseline">
                          <h3 className="font-medium truncate">
                            {conversation.otherUser.firstName} {conversation.otherUser.lastName}
                          </h3>
                          {conversation.lastMessage && (
                            <span className="text-xs text-gray-500">
                              {new Date(conversation.lastMessage.createdAt).toLocaleTimeString([], { 
                                hour: '2-digit', 
                                minute: '2-digit' 
                              })}
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-gray-500 capitalize">{conversation.otherUser.role.toLowerCase()}</p>
                        {conversation.lastMessage && (
                          <p className="text-sm truncate text-gray-600">{conversation.lastMessage.content}</p>
                        )}
                      </div>
                      {conversation.unreadCount > 0 && (
                        <span className="ml-2 bg-health-red text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                          {conversation.unreadCount}
                        </span>
                      )}
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
          
          {/* Chat content */}
          <div className="flex-1 flex flex-col bg-gray-50">
            {activeConversation ? (
              <>
                {/* Chat header */}
                <div className="bg-white p-4 border-b border-gray-200 flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-health-blue text-white flex items-center justify-center mr-3">
                      <span className="font-medium">
                        {conversations.find(c => c.otherUser.id === activeConversation)?.otherUser.firstName[0]}
                        {conversations.find(c => c.otherUser.id === activeConversation)?.otherUser.lastName[0]}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-medium">
                        {conversations.find(c => c.otherUser.id === activeConversation)?.otherUser.firstName}{' '}
                        {conversations.find(c => c.otherUser.id === activeConversation)?.otherUser.lastName}
                      </h3>
                      <p className="text-xs text-gray-500 capitalize">
                        {conversations.find(c => c.otherUser.id === activeConversation)?.otherUser.role.toLowerCase()}
                      </p>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="ghost" size="icon">
                      <Phone className="h-5 w-5" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Video className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
                
                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4">
                  {loading ? (
                    <div className="flex justify-center items-center h-full">
                      <Loader2 className="h-8 w-8 animate-spin" />
                    </div>
                  ) : messages.length === 0 ? (
                    <div className="flex justify-center items-center h-full">
                      <p className="text-gray-500">No messages yet</p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {messages.map((msg) => (
                        <div 
                          key={msg.id} 
                          className={`flex ${msg.senderId === activeConversation ? '' : 'justify-end'}`}
                        >
                          <div 
                            className={`max-w-[75%] rounded-lg p-3 ${
                              msg.senderId === activeConversation 
                                ? 'bg-white border border-gray-200 rounded-bl-none' 
                                : 'bg-health-blue text-white rounded-br-none'
                            }`}
                          >
                            <p className="text-sm">{msg.content}</p>
                            <span className={`text-xs mt-1 block ${
                              msg.senderId === activeConversation ? 'text-gray-500' : 'text-blue-100'
                            }`}>
                              {new Date(msg.createdAt).toLocaleTimeString([], { 
                                hour: '2-digit', 
                                minute: '2-digit' 
                              })}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                
                {/* Message input */}
                <div className="bg-white border-t border-gray-200 p-4">
                  <form onSubmit={handleSendMessage} className="flex space-x-2">
                    <Button type="button" variant="ghost" size="icon">
                      <Paperclip className="h-5 w-5" />
                    </Button>
                    <Input 
                      placeholder="Type a message..." 
                      value={message} 
                      onChange={(e) => setMessage(e.target.value)}
                      className="flex-1" 
                    />
                    <Button type="submit" size="icon" className="bg-health-blue hover:bg-health-blue-dark">
                      <Send className="h-5 w-5" />
                    </Button>
                  </form>
                </div>
              </>
            ) : (
              <div className="flex-1 flex items-center justify-center">
                <p className="text-gray-500">Select a conversation to start messaging</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
