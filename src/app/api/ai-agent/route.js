export const POST = async (req) => {
    try {
        const { message } = await req.json();
        const lowerMessage = message.toLowerCase(); // Convert message to lowercase for easier matching

        // Hardcoded responses based on resume
        if (lowerMessage.includes("who are you") || lowerMessage.includes("your name")) {
            return new Response(JSON.stringify({ reply: "I am Kisan Jadhav, a Software Developer at Nextincube Solution Pvt Ltd." }), { status: 200 });
        }
        
        if (lowerMessage.includes("tell me about kisan") || lowerMessage.includes("about you")) {
            return new Response(JSON.stringify({ reply: "I am Kisan Jadhav, a Software Developer specializing in CRM, HRMS, and ERP systems using Laravel. I have experience in frontend and backend development with React.js, PHP, and MySQL." }), { status: 200 });
        }

        if (lowerMessage.includes("skills") || lowerMessage.includes("technologies")) {
            return new Response(JSON.stringify({ reply: "My technical skills include HTML, CSS, JavaScript, React.js, PHP, Laravel, MySQL, MongoDB, WordPress, and Git." }), { status: 200 });
        }

        if (lowerMessage.includes("experience") || lowerMessage.includes("work")) {
            return new Response(JSON.stringify({ reply: "I am currently working as a Software Developer at Nextincube Solution Pvt Ltd, specializing in CRM, HRMS, and ERP development. I also completed an internship at the same company where I developed a Ticket Management System." }), { status: 200 });
        }

        if (lowerMessage.includes("projects") || lowerMessage.includes("portfolio")) {
            return new Response(JSON.stringify({ reply: "Some of my key projects include a CRM System, an HRMS System, a Ticket Management System, and a Customizable Email Template system built using Laravel." }), { status: 200 });
        }

        if (lowerMessage.includes("education") || lowerMessage.includes("degree")) {
            return new Response(JSON.stringify({ reply: "I hold a Bachelor of Engineering in Computer Engineering from Government College of Engineering and Research, Pune, with a CGPA of 7.91/10." }), { status: 200 });
        }

        // Default case: Call AI for general questions
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
