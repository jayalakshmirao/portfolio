// import Image from "next/image";

// export default function Home() {
//   return (
//     <main className="min-h-screen">

//       <div className="grid lg:grid-cols-[44%_56%]">

//         {/* LEFT */}

//         <section className="border-r border-black min-h-screen pl-12 pt-6">

//           <h1 className="font-serif text-[6.8rem] leading-none mb-10 self-start pl-10">
//             JAYALAKSHMI!
//           </h1>

//           <Image
//             src="/jay.jpeg"
//             alt="Jayalakshmi"
//             width={500}
//             height={650}
//             className="w-[54%] border border-black object-cover"
//           />
//         </section>

//         {/* RIGHT */}

//         <section className="px-8 pt-6 pb-10 text-[1rem] leading-[1.65]">

//           <div className="space-y-7 max-w-[720px]">

//             {/* WHO */}

// <div>
//   <p className="mb-3 tracking-widest">[WHO]</p>

//   <p>
//     Hi, I'm Jayalakshmi.
//   </p>

//   <p className="mt-4">
//     I'm fascinated by two things:
//     <br />
//     how money moves,
//     <br />
//     and how people move.
//   </p>

//   <p className="mt-4">
//     One pays the bills.
//     <br />
//     The other ends up on my Substack.
//   </p>

//   <p className="mt-4">
//     I'm currently trying to keep money moving on the internet as a Senior Product Solutions Engineer at Juspay, working across payment infrastructure, merchant integrations, and operational systems.
//   </p>

//   <p className="mt-4">
//     This little corner of the internet is where those worlds meet.
//   </p>
// </div>

//             {/* HELLO */}

//             <div>
//               <p className="mb-4 tracking-widest">
//                 [SAY HELLO TO ME]
//               </p>

//               <div className="space-x-4">
//                 <a href="#">linkedin</a>
//                 <a href="#">substack</a>
//                 <a href="#">instagram</a>
//                 <a href="#">github</a>
//                 <a href="#">email</a>
//               </div>
//             </div>

//             {/* RIGHT NOW */}

//             <div>
//   <p className="mb-3 tracking-widest">
//     [RIGHT NOW]
//   </p>

//   <p>
//     Most days I spend my time helping merchants figure out why money didn't move the way it was supposed to.
//   </p>

//   <p className="mt-4">
//     Sometimes the answer is buried inside APIs, dashboards, logs, bank systems, or spreadsheets.
//   </p>

//   <p className="mt-4">
//     Sometimes it's just two teams looking at the same problem from different sides.
//   </p>

//   <p className="mt-4">
//     Along the way I've worked on merchant launches, production investigations, operational improvements, and more transaction failures than I'd like to admit.
//   </p>
// </div>

//             {/* PAYMENTS */}

//             <div>
//               <p className="mb-4 tracking-widest">
//                 [THINGS I'VE LEARNED FROM PAYMENTS]
//               </p>

//               <ul className="list-disc pl-5 space-y-2">
//                 <li>
//                   Nobody notices a payment system when it works.
//                 </li>

//                 <li>
//                   Most production incidents are communication problems wearing
//                   technical disguises.
//                 </li>

//                 <li>
//                   The fastest way to learn is to own something when it breaks.
//                 </li>

//                 <li>
//                   Every transaction failure eventually turns into a human story.
//                 </li>
//               </ul>
//             </div>

//             {/* ELSEWHERE */}

//             <div>
//   <p className="mb-3 tracking-widest">
//     [ELSEWHERE]
//   </p>

//   <p>
//     When I'm not thinking about payments, I'm usually taking notes about something completely ordinary.
//   </p>

//   <p className="mt-4">
//     A crowded metro coach.
//     <br />
//     A conversation between strangers.
//     <br />
//     A city that somehow feels rushed and slow at the same time.
//   </p>

//   <p className="mt-4">
//     Why everyone seems tired despite having good jobs.
//     <br />
//     Why Bangalore feels different at 9:30am and 11:00am.
//     <br />
//     Why ambition and peace seem to be constantly negotiating with each other.
//   </p>

//   <p className="mt-4">
//     Most of those notes never become anything.
//   </p>

//   <p>
//     A few end up on Substack.
//   </p>
// </div>

//             {/* WRITING */}

//             {/* <div>
//               <p className="mb-4 tracking-widest">
//                 [RECENT WRITING]
//               </p>

//               <div className="space-y-4">
//                 <a href="#">
//                   Why Does a Good Life Feel So Exhausting?
//                 </a>

//                 <br />

//                 <a href="#">
//                   What Working in Payments Taught Me About Human Behavior
//                 </a>

//                 <br />

//                 <a href="#">
//                   Bangalore at 9:30 AM
//                 </a>

//                 <br />

//                 <a href="#">
//                   APIs, Outages & Anxiety
//                 </a>
//               </div>
//             </div> */}

//           </div>

//         </section>

//       </div>

//       {/* FOOTER */}

//       <footer className="border-t border-black mt-8 px-8 py-3">
//   <p className="text-sm">
//     Every transaction tells a story.
//     Some move money.
//     Some move people.
//   </p>
// </footer>

//     </main>
//   );
// }

// ---claude

// import Image from "next/image";

// export default function Home() {
//   return (
//     <main className="min-h-screen">

//       <div className="grid lg:grid-cols-[44%_56%]">

//         {/* ── LEFT ── */}
//         <section className="border-r border-black min-h-screen pl-12 pt-6">

//           <h1 className="font-serif font-bold uppercase text-[#111] leading-none mb-10"
//               style={{ fontSize: "clamp(3rem, 6vw, 5.5rem)", letterSpacing: "-0.01em" }}>
//             JAYALAKSHMI!
//           </h1>

//           <Image
//             src="/jay.jpeg"
//             alt="Jayalakshmi"
//             width={500}
//             height={650}
//             className="w-[54%] border border-black object-cover"
//           />
//         </section>

//         {/* ── RIGHT ── */}
//         <section className="px-8 pt-6 pb-10 text-[1rem] leading-[1.65]">
//           <div className="space-y-6">

//             {/* WHO */}
//             <div>
//               <p className="mb-1">[WHO]</p>
//               <p>Hi, I'm Jayalakshmi. I'm fascinated by two things: how money moves, and how people move. </p>
//               {/* <p className="mt-3">
//                 I'm fascinated by two things: how money moves, and how people move.
//               </p> */}
//               <p className="mt-3">
//                 One pays the bills.<br />
//                 The other ends up on my Substack.
//               </p>
//               <p className="mt-3">
//                 I'm currently trying to keep money moving on the internet as a Senior Product Solutions Engineer at Juspay, working across payment infrastructure, merchant integrations, and operational systems.
//               </p>
//               <p className="mt-3">This little corner of the internet is where those worlds meet.</p>
//             </div>

//             {/* HELLO */}
//             <div>
//               <p className="mb-1">[SAY HELLO TO ME]</p>
//               <div className="space-x-3">
//                 <a href="#">linkedin</a>
//                 <a href="#">substack</a>
//                 <a href="#">instagram</a>
//                 <a href="#">github</a>
//                 <a href="#">email</a>
//               </div>
//             </div>

//             {/* RIGHT NOW */}
//             <div>
//               <p className="mb-1">[RIGHT NOW]</p>
//               <p>Most days I spend my time helping merchants figure out why money didn't move the way it was supposed to.</p>
//               <p className="mt-3">Sometimes the answer is buried inside APIs, dashboards, logs, bank systems, or spreadsheets.</p>
//               <p className="mt-3">Sometimes it's just two teams looking at the same problem from different sides.</p>
//               <p className="mt-3">Along the way I've worked on merchant launches, production investigations, operational improvements, and more transaction failures than I'd like to admit.</p>
//             </div>

//             {/* THINGS I'VE LEARNED */}
//             <div>
//               <p className="mb-1">[THINGS I'VE LEARNED FROM PAYMENTS]</p>
//               <ul className="list-disc pl-5 space-y-1">
//                 <li>Nobody notices a payment system when it works.</li>
//                 <li>Most production incidents are communication problems wearing technical disguises.</li>
//                 <li>The fastest way to learn is to own something when it breaks.</li>
//                 <li>Every transaction failure eventually turns into a human story.</li>
//               </ul>
//             </div>

//             {/* ELSEWHERE */}
//             <div>
//               <p className="mb-1">[ELSEWHERE]</p>
//               <p>When I'm not thinking about payments, I'm usually taking notes about something completely ordinary.</p>
//               <p className="mt-3">
//                 A crowded metro coach.<br />
//                 A conversation between strangers.<br />
//                 A city that somehow feels rushed and slow at the same time.
//               </p>
//               <p className="mt-3">
//                 Why everyone seems tired despite having good jobs.<br />
//                 Why Bangalore feels different at 9:30am and 11:00am.<br />
//                 Why ambition and peace seem to be constantly negotiating with each other.
//               </p>
//               <p className="mt-3">Most of those notes never become anything.</p>
//               <p>A few end up on Substack.</p>
//             </div>

//           </div>
//         </section>

//       </div>

//       {/* FOOTER */}
//       <footer className="border-t border-black mt-8 px-8 py-3">
//         <p className="text-sm">
//           Every transaction tells a story. Some move money. Some move people.
//         </p>
//       </footer>

//     </main>
//   );
// }
 

// ---claude latest
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">

      <div className="grid lg:grid-cols-[44%_56%]">

        {/* ── LEFT ── */}
        <section className="border-r border-black min-h-screen pl-12 pt-6">

          {/* Name: Cinzel — Roman-style decorative serif */}
          <h1
            style={{
              fontFamily: "var(--font-Cormorant Garamon), 'Times New Roman', serif",
              fontSize: "clamp(1.4rem, 3vw, 4.5rem)",
              fontWeight: 500,
              lineHeight: 2,
              letterSpacing: "0.0012em",
              marginBottom: "0.001rem",
              marginTop: "2rem",
            }}
          >
            JAYALAKSHMI!
          </h1>

          {/* Photo: indented, bordered, portrait */}
          <div style={{ paddingLeft: "3rem" }}>
            <Image
              src="/jay.jpeg"
              alt="Jayalakshmi"
              width={380}
              height={500}
              style={{
                border: "2px solid #111",
                objectFit: "cover",
                objectPosition: "center top",
                display: "block",
                width: "78%",
                height: "auto",
              }}
            />
          </div>

        </section>

        {/* ── RIGHT ── */}
        <section className="px-8 pt-6 pb-10" style={{ fontFamily: "Georgia, serif", fontSize: "1rem", lineHeight: 1.65 }}>
          <div className="space-y-5">

            {/* WHO */}
            <div>
              <p style={{ fontFamily: "Arial, sans-serif", fontSize: "0.8rem", letterSpacing: "0.01em", marginBottom: "0.4rem" }}>
                [ WHO ]
              </p>
              <p>Hi, I'm Jayalakshmi. I'm fascinated by two things: how money moves, and how people move. One pays the bills. The other ends up on my Substack.</p>
              {/* <p className="mt-3">
                I'm fascinated by two things:<br />
                how money moves,<br />
                and how people move.
              </p> */}
              {/* <p className="mt-3">
                One pays the bills. The other ends up on my Substack.
              </p> */}
              <p className="mt-3">
                I'm currently trying to keep money moving on the internet as a Senior Product Solutions Engineer at Juspay, working across payment infrastructure, merchant integrations, and operational systems.
              </p>
              <p className="mt-3">This little corner of the internet is where those worlds meet.</p>
            </div>

            {/* SAY HELLO */}
            <div>
              <p style={{ fontFamily: "Arial, sans-serif", fontSize: "0.8rem", letterSpacing: "0.001em", marginBottom: "0.4rem" }}>
                [ SAY HELLO TO ME ]
              </p>
              <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                {["linkedin", "substack", "instagram", "github", "email"].map((l) => (
                  <a key={l} href="#">{l}</a>
                ))}
              </div>
            </div>

            {/* RIGHT NOW */}
            <div>
              <p style={{ fontFamily: "Arial, sans-serif", fontSize: "0.8rem", letterSpacing: "0.12em", marginBottom: "0.4rem" }}>
                [RIGHT NOW]
              </p>
              <p>Most days I spend my time helping merchants figure out why money didn't move the way it was supposed to.</p>
              <p className="mt-3">Sometimes the answer is buried inside APIs, dashboards, logs, bank systems, or spreadsheets.</p>
              <p className="mt-3">Sometimes it's just two teams looking at the same problem from different sides.</p>
              <p className="mt-3">Along the way I've worked on merchant launches, production investigations, operational improvements, and more transaction failures than I'd like to admit.</p>
            </div>

            {/* THINGS I'VE LEARNED */}
            <div>
              <p style={{ fontFamily: "Arial, sans-serif", fontSize: "0.8rem", letterSpacing: "0.12em", marginBottom: "0.4rem" }}>
                [THINGS I'VE LEARNED FROM PAYMENTS]
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Nobody notices a payment system when it works.</li>
                <li>Most production incidents are communication problems wearing technical disguises.</li>
                <li>The fastest way to learn is to own something when it breaks.</li>
                <li>Every transaction failure eventually turns into a human story.</li>
              </ul>
            </div>

            {/* ELSEWHERE */}
            <div>
              <p style={{ fontFamily: "Arial, sans-serif", fontSize: "0.8rem", letterSpacing: "0.12em", marginBottom: "0.4rem" }}>
                [ELSEWHERE]
              </p>
              <p>When I'm not thinking about payments, I'm usually taking notes about something completely ordinary.</p>
              <p className="mt-3">
                A crowded metro coach.<br />
                A conversation between strangers.<br />
                A city that somehow feels rushed and slow at the same time.
              </p>
              <p className="mt-3">
                Why everyone seems tired despite having good jobs.<br />
                Why Bangalore feels different at 9:30am and 11:00am.<br />
                Why ambition and peace seem to be constantly negotiating with each other.
              </p>
              <p className="mt-3">Most of those notes never become anything.</p>
              <p>A few end up on Substack.</p>
            </div>

          </div>
        </section>

      </div>

      {/* FOOTER */}
      <footer className="border-t border-black mt-8 px-8 py-3">
        <p style={{ fontFamily: "Georgia, serif", fontSize: "0.875rem" }}>
          Every transaction tells a story. Some move money. Some move people.
        </p>
      </footer>

    </main>
  );
}
