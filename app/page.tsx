import Image from "next/image";
 
export default function Home() {
  return (
    <main className="min-h-screen">
 
      {/* <div className="grid lg:grid-cols-[44%_56%]"> */}
      <div className="grid grid-cols-1 lg:grid-cols-[44%_56%]">

        
 
        {/* ── LEFT ── */}
        {/* <section className="border-r-2 border-black pl-12 pt-12"> */}
 {/* <section className="border-r-2 border-black pl-12 items-center pt-12"> */}
  {/* change to make it responsive */}
 <section className="border-b-2 lg:border-b-0 lg:border-r-2 border-black pt-8 lg:pt-12">
          <h1  className="text-center lg:text-left lg:ml-[11rem]"
  style={{
    fontFamily: "'Rebus', serif",
    //fontFamily:  "var(--font-spicyRice)",
    //fontSize: "2.8rem",
    fontSize: "clamp(2rem, 6vw, 2.8rem)",
    fontWeight: 500,
    marginTop: "1.5rem",
    marginBottom: "0.4rem",
    //fontStyle: "italic",
    //marginLeft: "3.5rem",
    //textAlign: "center",
    lineHeight: 1.2,
    letterSpacing: "-0.03em",
  }}
>
  {/* <div className="text-center lg:text-left lg:ml-[6.5rem]"> */}
     JAYALAKSHMI
     {/* </div> */}
</h1>
 
          {/* Photo */}
          {/* <div style={{ paddingLeft: "4.5rem" }}> */}
          <div className="flex justify-center lg:block lg:pl-[8.5rem]">
            <Image
              src="/jay.jpeg"
              alt="Jayalakshmi"
              width={380}
              height={850}
              className="border-2 border-black w-[75%] max-w-[880px] h-auto"
              style={{
                border: "2px solid #111",
               // objectFit: "cover",
                //objectPosition: "center top",
                display: "block",
                //width: "79%", to make it responsive
                //height: "80%",
                //height: "600px", to make it responsive
                //className="border-2 border-black w-[75%] max-w-[380px] h-auto",
              }}
            />
          </div>
 
        </section>
 
        {/* ── RIGHT ── */}
        <section
          //className="px-8 pt-6 pb-10" to make it responsive
          className="px-6 lg:px-8 pt-6 pb-10"
          style={{
           fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif",
            // fontFamily: "var(--font-monospace), 'Roboto Mono', Georgia, serif",
            fontSize: "1.15rem",
            lineHeight: 1.65,
            fontWeight: 400,
          }}
        >
          <div className="space-y-8">
 
            {/* WHO */}
            <div>
              <p
    style={{
      fontFamily: "'Roboto Mono', monospace",
      //fontSize: "0.9rem", responsive
      fontSize: "clamp(0.8rem, 1.8vw, 0.9rem)",
      letterSpacing: "-0.01rem",
      marginBottom: "0.5rem",
    }}
  >
                [ WHO ]
              </p>
              <p
  style={{
    fontFamily: "'Rebus', serif",
    //fontSize: "1.1rem", to make it responsive
    fontSize: "clamp(1rem, 2vw, 1.1rem)",
    lineHeight: 1.45,
    letterSpacing: "-0.02em",
    fontWeight: 500,
    maxWidth: "49rem",
  }}
>
                
                Hi, I'm Jayalakshmi. I'm fascinated by two things: how money moves, and how people move. One pays the bills. The other ends up on my Substack.
                {/* I'm currently trying to keep money moving on the internet as a Senior Product Solutions Engineer at Juspay, working across payment infrastructure, merchant integrations, and operational systems. This little corner of the internet is where those worlds meet. */}
              </p>
              <p style={{
    fontFamily: "'Rebus', serif",
    //fontSize: "1.1rem", responsive
    fontSize: "clamp(1rem, 2vw, 1.1rem)",
    lineHeight: 1.45,
    letterSpacing: "-0.02em",
    fontWeight: 500,
    maxWidth: "49rem",
    marginTop: "1.3rem",
  }}>
                I'm currently trying to keep money moving on the internet as a Senior Product Solutions Engineer at Juspay, working across payment infrastructure, merchant integrations, and operational systems. This little corner of the internet is where those worlds meet.
              </p>
            </div>
 
            {/* SAY HELLO */}
            <div>
              <p
    style={{
      fontFamily: "'Roboto Mono', monospace",
      //fontSize: "0.9rem", Responsive
      fontSize: "clamp(0.6rem, 1.8vw, 0.9rem)",
      letterSpacing: "-0.02rem",
      marginBottom: "0.1rem",
    }}
  >
                [ SAY HELLO TO ME ]
              </p>
              <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", fontFamily: "'Rebus', serif"}}>
                {/* {["linkedin", "substack", "instagram", "github", "email"].map((l) => (
                  <a key={l} href="#" style={{ fontFamily: "'Rebus', serif" }}>{l}</a>
                ))} */}
                <a
    href="https://www.linkedin.com/in/jayalakshmi-p-a4ba2b208"
    target="_blank"
    rel="noopener noreferrer"
  >
    linkedin
  </a>

  <a
    href="https://substack.com/@surfingthoughts"
    target="_blank"
    rel="noopener noreferrer"
  >
    substack
  </a>

  <a
    href="https://github.com/jayalakshmirao"
    target="_blank"
    rel="noopener noreferrer"
  >
    github
  </a>

  <a
    href="https://drive.google.com/file/d/1x5jj00LGrdPO2zdi-CAQcfd2z1KglXhl/view?usp=sharing"
    target="_blank"
    rel="noopener noreferrer"
  >
    resume
  </a>

  <a
    href="https://www.instagram.com/yarnverse.in"
    target="_blank"
    rel="noopener noreferrer"
  >
    instagram
  </a>

  <a href="mailto:jayalakshmirao023@gmail.com">
    email
  </a>
              </div>
            </div>

<div>
  <p
    style={{
      fontFamily: "'Roboto Mono', monospace",
      //fontSize: "0.9rem", responsive
      fontSize: "clamp(0.8rem, 1.8vw, 0.9rem)",
      letterSpacing: "-0.01rem",
      marginBottom: "0.5rem",
    }}
  >
    [ RIGHT NOW ]
  </p>
     <ul
    style={{
      fontFamily: "'Rebus', serif",
      //fontSize: "1.1rem", responsive
      fontSize: "clamp(1rem, 2vw, 1.1rem)",
      lineHeight: 1.2,
      letterSpacing: "-0.02em",
      fontWeight: 400,
      maxWidth: "49rem",
    }}
    className="list-disc pl-6 space-y-2"
  >
    <li>
      I spend a lot of my time somewhere between payments, operations, and problem solving.
    </li>

    <li>
      Most days that means merchants, payment failures, dashboards, APIs,
      spreadsheets, and the occasional production fire.
    </li>

    <li>
      Sometimes the hardest part isn't the technology. It's figuring out who
      needs to talk to whom.
    </li>

    <li>
      I've developed a habit of finding the right people, connecting the dots,
      and moving things forward when work gets stuck between teams.
    </li>
  </ul>
  </div>
 
            {/* THINGS I'VE LEARNED */}
            {/* <div>
               <p
    style={{
      fontFamily: "'Roboto Mono', monospace",
      fontSize: "0.9rem",
      letterSpacing: "-0.01rem",
      marginBottom: "0.5rem",
    }}
  >
    [ THINGS I'VE LEARNED FROM PAYMENTS ]
  </p>
              <ul className="list-disc pl-5 space-y-0">
                <li>Nobody notices a payment system when it works.</li>
                <li>Most production incidents are communication problems wearing technical disguises.</li>
                <li>The fastest way to learn is to own something when it breaks.</li>
                <li>Every transaction failure eventually turns into a human story.</li>
              </ul>
            </div> */}
 
            {/* ELSEWHERE */}
            <div>
              <p
    style={{
      fontFamily: "'Roboto Mono', monospace",
      //fontSize: "0.9rem", responsive
      fontSize: "clamp(0.8rem, 1.8vw, 0.9rem)",
      letterSpacing: "-0.01rem",
      marginBottom: "0.5rem",
    }}
  >
    [ NOTES FROM WORK AND LIFE ] </p>
   <ul
    style={{
      fontFamily: "'Rebus', serif",
      //fontSize: "1.1rem", responsive
      fontSize: "clamp(1rem, 2vw, 1.1rem)",
      lineHeight: 1.2,
      letterSpacing: "-0.02em",
      fontWeight: 400,
      maxWidth: "49rem",
    }}
    className="list-disc pl-6 space-y-2"
  >
    <li>
      Most people don't want solutions first. They want to feel understood.
    </li>

    <li>
      Technical systems fail for predictable reasons. Human systems rarely do.
    </li>

    <li>
      The fastest way to learn is to take responsibility for something.
    </li>

    <li>
      Everyone is carrying a story you know nothing about.
    </li>
    <li>
      Ordinary moments become interesting when you pay attention long enough.
    </li>
  </ul>
            </div>
 
          </div>
        </section>
 
      </div>
 
      {/* FOOTER */}
      <footer className="border-t-2 border-black mt-2 px-6 lg:px-120 py-4">
        <p style={{
          fontFamily: "'Rebus', serif",
          fontSize: "1rem",
        }}>
          Every transaction tells a story. Some move money. Some move people.
        </p>
      </footer>
 
    </main>
  );
}
