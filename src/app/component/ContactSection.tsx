"use client"

import { useState } from "react"
import { Button } from "@mui/material"
import { Mail, Briefcase, Linkedin, Github } from "lucide-react"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({ name: "", email: "", message: "" })
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 px-6 md:px-12 lg:px-24 bg-white dark:bg-gray-900">
      <div className="max-w-2xl mx-auto bg-gradient-to-br from-[#f8f9fa] to-[#e9ecef] dark:from-gray-800 dark:to-gray-700 p-8 rounded-xl shadow-lg">
        <h2 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#0070f3] to-[#00a8ff] dark:from-[#00a8ff] dark:to-[#0070f3]">
          Let's Connect
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 dark:text-white">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="text-[#0070f3] dark:text-[#00a8ff] mr-2" />
                <a href="mailto:email.kisanjadhav@gmail.com" className="hover:text-[#0070f3] dark:hover:text-[#00a8ff] dark:text-gray-300">
                  email.kisanjadhav@gmail.com
                </a>
              </div>
              <div className="flex items-center dark:text-gray-300">
                <Briefcase className="text-[#0070f3] dark:text-[#00a8ff] mr-2" />
                <span>+91 7507374556</span>
              </div>
              <div className="flex items-center">
                <Linkedin className="text-[#0070f3] dark:text-[#00a8ff] mr-2" />
                <a
                  href="https://linkedin.com/in/kisan-jadhav-2a3b93235"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#0070f3] dark:hover:text-[#00a8ff] dark:text-gray-300"
                >
                  LinkedIn Profile
                </a>
              </div>
              <div className="flex items-center">
                <Github className="text-[#0070f3] dark:text-[#00a8ff] mr-2" />
                <a
                  href="https://github.com/yourgithub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#0070f3] dark:hover:text-[#00a8ff] dark:text-gray-300"
                >
                  GitHub Profile
                </a>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-2 font-medium dark:text-gray-300">
                Name
              </label>
              <input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#0070f3] dark:bg-gray-800 dark:border-gray-600 dark:text-white"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 font-medium dark:text-gray-300">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#0070f3] dark:bg-gray-800 dark:border-gray-600 dark:text-white"
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2 font-medium dark:text-gray-300">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#0070f3] dark:bg-gray-800 dark:border-gray-600 dark:text-white"
              />
            </div>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              className="w-full dark:bg-[#00a8ff] dark:text-gray-900"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
            {submitStatus === "success" && <p className="text-green-600 font-medium dark:text-green-400">Message sent successfully!</p>}
            {submitStatus === "error" && (
              <p className="text-red-600 font-medium dark:text-red-400">An error occurred. Please try again.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
