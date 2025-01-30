"use client"

import { motion } from "framer-motion"

const projects = [

  {
    title: "Talentica Online Platform",
    description:
      "Developed an online platform for learning from worldwide talent gurus, helping to nurture and extract the best talent.",
    features: ["Simple user interface", "Worldwide talent guru access", "Talent nurturing tools"],
    stack: [".NET", "HTML5", "CSS", "JavaScript", "jQuery", "Bootstrap"],
  },
  {
    title: "Talenticious Platform",
    description: "Created a user-friendly platform for talent development and learning.",
    features: ["Easy-to-learn interface", "Responsive design", "Content management integration"],
    stack: [".NET", "HTML5", "CSS", "JavaScript", "jQuery", "Bootstrap"],
  },
  {
    title: "CRM (Customer Relationship Management) System",
    description:
      "Developed a comprehensive CRM system using Laravel to manage customer interactions and streamline business processes.",
    features: [
      "Email Template Management",
      "Dashboard Reports",
      "Report Filters",
      "OTP Authentication",
      "User Activity Tracking",
      "Notifications",
      "Data Handling",
      "Invoice Management",
      "Search Functionality",
    ],
    stack: ["Laravel", "PHP", "MySQL", "JavaScript"],
  },
  {
    title: "HRMS (Human Resource Management System)",
    description: "Developed an HRMS system using Laravel to automate and manage HR processes.",
    features: [
      "Asset Management",
      "Employee Management",
      "Holiday Management",
      "Leave Management",
      "Notifications",
      "User Activity Tracking",
    ],
    stack: ["Laravel", "PHP", "MySQL", "JavaScript"],
  },
  {
    title: "Ticket Management System",
    description:
      "Developed a ticket management system during the internship to track and resolve customer and internal issues efficiently.",
    features: [
      "Ticket creation and assignment",
      "Priority setting",
      "Status tracking",
      "User-friendly interface",
      "Email notifications",
      "OTP-based authentication",
    ],
    stack: ["Laravel", "PHP", "MySQL", "JavaScript"],
  },
  {
    title: "Customizable Email Template Project",
    description:
      "Developed a web application using the Laravel framework to manage and send customizable email templates.",
    features: ["Email template management system", "Template editing and creation", "Sending and tracking emails"],
    stack: ["Laravel", "PHP", "MySQL", "JavaScript"],
  },
  // {
  //   title: "Globant Properties",
  //   description:
  //     "Created a dynamic and user-friendly www.globant.com to showcase products, provide services, and facilitate communication.",
  //   features: [
  //     "Secure authentication system",
  //     "Responsive user interface",
  //     "CMS integration",
  //     "Reusable components with Stencil.js",
  //     "React.js implementation",
  //   ],
  //   stack: ["React.js", "Stencil.js", "JavaScript", "SASS", "Drupal", "Storybook"],
  // },
//   {
//     title: "Pacha Web",
//     description:
//       "Developed 10 websites for the Pacha group with multisite architecture, each following different brand guidelines.",
//     features: ["Multisite architecture", "Brand-specific designs", "Responsive layouts"],
//     stack: ["HTML", "SASS", "JavaScript", "jQuery", "Drupal"],
//   },
//   {
//     title: "eDiscovery Platform (EDP)",
//     description:
//       "Worked on a powerful engine for conducting large-scale, dataset-driven searches to help organizations quickly identify key resolution files.",
//     features: ["Automatic data classification", "Bulk Redaction", "Pre-set Redaction Codes", "Annotation Toolkit"],
//     stack: ["Java", "HTML5", "CSS3", "JavaScript", "React.js", "MySQL", "RESTful API"],
//   },
// ,
//   {
//     title: "Asentech Pharmaceutical Web Portals",
//     description:
//       "Developed web portals for different pharmaceutical companies, focusing on digital transformation within life sciences marketing and B2B publishing.",
//     features: [
//       "Custom designs as per XD mockups",
//       "User-friendly interfaces",
//       "Integration with content writing and graphics design teams",
//     ],
//     stack: ["HTML5", "CSS3", "JavaScript", "jQuery", "Bootstrap", "Ext.js"],
//   },
]

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="py-20 px-6 md:px-12 lg:px-24 bg-gradient-to-br from-[#f8f9fa] to-[#e9ecef] dark:from-gray-900 dark:to-gray-800"
    >
      <motion.h2
        initial={{
          opacity: 0,
          y: 20,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-[#0070f3] to-[#00a8ff] dark:from-blue-400 dark:to-blue-600"
      >
        Projects
      </motion.h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg dark:shadow-gray-900"
          >
            <h3 className="text-2xl font-bold mb-2 text-[#0070f3] dark:text-blue-400">{project.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
            <h4 className="font-semibold mb-2 text-gray-700 dark:text-gray-300">Key Features:</h4>
            <ul className="list-disc pl-5 mb-4">
              {project.features.map((feature, idx) => (
                <li key={idx} className="text-gray-700 dark:text-gray-400">
                  {feature}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full text-sm text-gray-700 dark:text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

