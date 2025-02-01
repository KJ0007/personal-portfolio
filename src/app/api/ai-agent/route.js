export const POST = async (req) => {
    try {
        const { message } = await req.json();
        const lowerMessage = message.toLowerCase(); // Convert message to lowercase for easier matching

        // 🔹 Personal Information
        if (lowerMessage.includes("who is kisan jadhav") || lowerMessage.includes("kisan jadhav")) {
            return new Response(JSON.stringify({ reply: "Kisan Jadhav is a Software Developer at Exocoetus Software PVT LTD, specializing in CRM, HRMS, and ERP systems." }), { status: 200 });
        }
       
        if (lowerMessage.includes("tell me about kisan") || lowerMessage.includes("about you")) {
            return new Response(JSON.stringify({ reply: "I am Kisan Jadhav, a passionate Software Developer with expertise in PHP, Laravel, React.js, and database management. I have experience developing enterprise-level applications, including CRM and HRMS solutions." }), { status: 200 });
        }

        // 🔹 Contact Information
        if (lowerMessage.includes("contact details") || lowerMessage.includes("contact info") || lowerMessage.includes("contact")) {
            return new Response(JSON.stringify({ reply: "You can reach Kisan Jadhav at 📞 7507374556 or ✉️ email.kisanjadhav@gmail.com. Connect on LinkedIn: linkedin.com/in/kisan-jadhav-2a3b93235." }), { status: 200 });
        }

        if (lowerMessage.includes("phone number") || lowerMessage.includes("contact number")) {
            return new Response(JSON.stringify({ reply: "Kisan Jadhav's contact number is 7507374556." }), { status: 200 });
        }

        if (lowerMessage.includes("email") || lowerMessage.includes("email id")) {
            return new Response(JSON.stringify({ reply: "Kisan Jadhav's email is email.kisanjadhav@gmail.com." }), { status: 200 });
        }

        if (lowerMessage.includes("linkedin") || lowerMessage.includes("linkedin profile")) {
            return new Response(JSON.stringify({ reply: "You can connect with Kisan Jadhav on LinkedIn: linkedin.com/in/kisan-jadhav-2a3b93235." }), { status: 200 });
        }

        // 🔹 Education
        if (lowerMessage.includes("education") || lowerMessage.includes("degree")) {
            return new Response(JSON.stringify({ reply: "Kisan Jadhav holds a Bachelor of Engineering in Computer Engineering from Government College of Engineering and Research, Pune, with a CGPA of 7.91/10." }), { status: 200 });
        }

        if (lowerMessage.includes("cgpa") || lowerMessage.includes("grades")) {
            return new Response(JSON.stringify({ reply: "Kisan Jadhav graduated with a CGPA of 7.91/10 in Computer Engineering." }), { status: 200 });
        }

        // 🔹 Skills
        if (lowerMessage.includes("skills") || lowerMessage.includes("technologies")) {
            return new Response(JSON.stringify({ reply: "Kisan Jadhav's technical skills include: Frontend (HTML, CSS, JavaScript, React.js), Backend (PHP, Laravel), Database (MySQL, MongoDB), and Tools (Git, Jira, Postman)." }), { status: 200 });
        }

        if (lowerMessage.includes("programming languages") || lowerMessage.includes("coding skills")) {
            return new Response(JSON.stringify({ reply: "Kisan Jadhav is proficient in PHP, JavaScript, and understands Object-Oriented Programming (OOP) concepts such as Abstraction, Encapsulation, Inheritance, and Polymorphism." }), { status: 200 });
        }

        // 🔹 Work Experience
        if (lowerMessage.includes("work experience") || lowerMessage.includes("experience")) {
            return new Response(JSON.stringify({ reply: "Kisan Jadhav is a Software Developer at Exocoetus Software PVT LTD. He previously worked as a Software Developer Intern at the same company, where he developed a Ticket Management System." }), { status: 200 });
        }

        if (lowerMessage.includes("internship") || lowerMessage.includes("intern")) {
            return new Response(JSON.stringify({ reply: "Kisan Jadhav completed a Software Developer internship at Exocoetus Software PVT LTD (Oct 2022 - Apr 2022), where he developed a Ticket Management System and enhanced backend operations using Laravel." }), { status: 200 });
        }

      
        const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${process.env.NEXT_PUBLIC_OPENROUTER_API_KEY}`,
            },
            body: JSON.stringify({
                model: "openai/gpt-3.5-turbo",
                messages: [{ role: "user", content: message }],
            }),
        });

        const data = await response.json();
        if (!response.ok) {
            throw new Error(data.error || "API Error");
        }

        return new Response(JSON.stringify({ reply: data.choices[0].message.content }), { status: 200 });
    } catch (error) {
        console.error("AI Agent API Error:", error);
        return new Response(JSON.stringify({ error: error.message || "Server Error" }), { status: 500 });
    }
};
