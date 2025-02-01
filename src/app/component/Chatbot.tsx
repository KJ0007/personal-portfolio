"use client"

import { useState, useRef, useEffect } from "react"
import axios from "axios"
import { motion, AnimatePresence } from "framer-motion"
import { Send, X, MessageSquare } from "lucide-react"

export default function Chatbot() {
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState("")
  const [error, setError] = useState(null)
  const [isOpen, setIsOpen] = useState(false)
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    if (isOpen) {
      scrollToBottom()
    }
  }, [messages, isOpen, scrollToBottom]) // Added scrollToBottom to dependencies

  const sendMessage = async () => {
    if (!input.trim()) return

    const userMessage = { role: "user", content: input }
    setMessages((prevMessages) => [...prevMessages, userMessage])
    setInput("")

    try {
      const response = await axios.post("/api/ai-agent", { message: input })
      const botMessage = { role: "bot", content: response.data.reply }
      setMessages((prevMessages) => [...prevMessages, botMessage])
    } catch (err) {
      console.error("Chatbot Error:", err)
      setError("Something went wrong. Try again!")
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <motion.button
        className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-16 right-0 w-80 sm:w-96 bg-gray-900 text-white rounded-lg shadow-2xl overflow-hidden"
          >
            <div className="p-4 bg-blue-600">
              <h2 className="text-xl font-bold">AI Assistant</h2>
            </div>
            <div className="h-80 overflow-y-auto p-4">
              {messages.map((msg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`mb-4 ${msg.role === "user" ? "text-right" : "text-left"}`}
                >
                  <span
                    className={`px-4 py-2 rounded-lg inline-block ${msg.role === "user" ? "bg-blue-600" : "bg-gray-700"}`}
                  >
                    {msg.content}
                  </span>
                </motion.div>
              ))}
              <div ref={messagesEndRef} />
            </div>
            {error && <p className="text-red-500 px-4 py-2">{error}</p>}
            <div className="p-4 border-t border-gray-700">
              <div className="flex items-center">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1 p-2 bg-gray-800 text-white rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
                <button
                  onClick={sendMessage}
                  className="bg-blue-600 text-white p-2 rounded-r-lg hover:bg-blue-700 transition-colors"
                >
                  <Send size={20} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

