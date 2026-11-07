/* eslint-disable @next/next/no-img-element */
import type { CSSProperties, ReactNode } from "react";
import { NovemberBack, PrimeCrestMast, novemberCredits } from "@/content/november/House";

/**
 * PrimeCrest · The November Issue, Vol. XV · No. 15
 * Verna Felder: educator of more than twenty years, author, founder of Urban
 * School Transformation LLC, co-creator (with Charlene Cutler) of
 * Can You Survive Poverty? The Game™.
 *
 * Closed `vf-*` system: deep navy and warm paper, Libre Caslon Display /
 * Libre Caslon Text / Work Sans. The game's four decks run the issue: a
 * thumb index of coloured tabs on the outer edge (yellow barriers, green
 * support, blue reflection, red life events), card-shaped panels with
 * stacked edges, and a drawn card for every lifted line. The interview is
 * printed whole, eight questions in the order asked. Faces stay whole.
 */

const IMG = "/issues/verna";

type Deck = "yellow" | "green" | "blue" | "red" | "navy";

/** Deck names as printed on the cards in the photograph. */
const DECK_NAME: Record<Deck, string> = {
  yellow: "Systemic Barrier",
  green: "Support & Resource",
  blue: "Reflection Discussion",
  red: "Life Event",
  navy: "PrimeCrest",
};

/** The interview, verbatim. Typographic fixes only. */
const VF_QA = [
  {
    "theme": "Professional Journey",
    "q": "How has your 20+ years in education shaped your leadership?",
    "paras": [
      "More than twenty years in education have taught me to pay attention to what happens after a decision leaves the meeting room. A policy can look good on paper, but what does it mean for the teacher expected to carry it out, the parent trying to understand it, or the child affected by it? Those are the questions I bring to leadership.",
      "I have worked as a teacher, a media specialist, and a liaison supporting students and families experiencing homelessness. Each role has given me a different view of what schools need to succeed. Being a single mother of three taught me something equally valuable: wanting the best for your children and having the resources to provide it are two different things.",
      "Those experiences have made me compassionate, but they have also made me more direct. I believe in high expectations. I also believe that when we identify a barrier, we have a responsibility to decide what we can do about it. Sometimes that means finding a community partner. Sometimes it means questioning a process we have followed for years.",
      "That is part of why Charlene Cutler and I created Can You Survive Poverty? The Game™. I wanted to bring what I had learned working with families into rooms where people make decisions about them, and give those conversations somewhere useful to go.",
      "Today, I am more willing to ask a difficult question, bring people together, and take the first step. Education has taught me that leadership earns its value through what people can count on you to do."
    ]
  },
  {
    "theme": "Educational Leadership",
    "q": "What are the biggest challenges facing education today?",
    "paras": [
      "One of the biggest challenges facing education today is that the expectations remain high while the capacity to meet them is often stretched thin. Schools are expected to meet state academic standards while addressing gaps in learning, student mental health needs, barriers to attendance, and a shortage of qualified teachers. Each of those demands requires time, expertise, and resources.",
      "The lack of qualified teachers is especially concerning because strong instruction is the foundation of student achievement. When positions remain unfilled or educators are assigned outside their areas of expertise, students can lose continuity and experienced teachers carry additional responsibilities. Yet the expectation to bring every student to proficiency remains. We have to take recruiting, developing, and retaining qualified educators as seriously as we take the results we expect them to produce.",
      "In my work with families, I also see what academic expectations look like in a child’s daily life. A student may be expected to concentrate on a reading assessment after spending the night worrying about where their family will live. A parent may want to attend a school meeting but cannot afford to miss work. Those circumstances deserve a practical response. High expectations become meaningful when students have a realistic opportunity to meet them.",
      "That means investing in strong instruction, timely academic intervention, mental health support, and relationships that allow schools and families to work together. It also means giving teachers the preparation, support, and time to do their jobs well.",
      "I believe in accountability, including meeting state standards. But accountability has to reach everyone responsible for creating the conditions for success. Before we ask why a classroom has fallen short, we should also ask whether it had a qualified teacher, appropriate resources, and consistent support.",
      "The challenge is making our commitment to education visible in what we provide every day. Our expectations for children should be matched by the seriousness of our investment in their success."
    ]
  },
  {
    "theme": "Innovation & Impact",
    "q": "What inspired you to create Can You Survive Poverty? The Game™?",
    "paras": [
      "The inspiration came from working with families whose daily lives required decisions that many people never have to consider. When money, transportation, and support are limited, meeting one need can mean leaving another unmet. In education, we often see the outcome, a child’s absence, an unfinished assignment, a missed meeting, without seeing the circumstances behind it.",
      "I wanted to help people understand what happens before a family ever walks through our doors. Explaining those realities matters, but I wanted to create an experience that would make people pause before saying, “Why don’t they just…?”",
      "I co-created Can You Survive Poverty? The Game™ with Charlene Cutler to bring those difficult choices into the room. Participants navigate systemic barriers, unexpected life events, and limited resources while trying to maintain stability. They have to make decisions with what they actually have available, then face what happens next.",
      "We knew a game could never capture the full experience of living in poverty. What it could do was give people a reason to examine their assumptions and recognize how quickly circumstances can narrow someone’s options.",
      "For me, the purpose reaches beyond empathy. I want participants to reconsider the policies they enforce, the questions they ask, and the support they offer. An educator might rethink an attendance response. A leader might recognize that a process intended to help is difficult for families to access.",
      "Charlene and I created this game because understanding should change how we act. The most important part is what participants do differently when they return to the people and communities they serve."
    ]
  },
  {
    "theme": "Community Vision",
    "q": "How do you hope to improve educational opportunities in the Detroit community?",
    "paras": [
      "I want our children’s opportunities to reach farther than the blocks they grow up on. Detroit has extraordinary talent sitting in its classrooms, including children who have yet to encounter the experience that will help them discover their own.",
      "For some students, the careers they know are the ones they see in their neighborhood or immediate community. I want us to widen that view deliberately. Put a golf club in a child’s hands. Take them to the opera. Let them walk through an engineering firm and ask questions of the people designing what comes next. We cannot expect children to choose from possibilities they have never encountered.",
      "And when they meet successful professionals who look like them, I want more than a photograph and an inspirational speech. Tell them about the first application, the rejection, the mentor, the financial obstacles, and the decisions that changed everything. Show them how the journey unfolds so they can begin to map their own.",
      "That exposure should lead somewhere. A visit can become a mentorship. An interest can become a class, an apprenticeship, or a business idea. Schools, employers, colleges, and community organizations can work together to make those next steps accessible.",
      "I also want students ready for a future that is changing while we prepare them for it. They need strong academic skills, opportunities to create, and the judgment to use artificial intelligence responsibly while thinking for themselves.",
      "Through The Urban School Transformation LLC, I want to help build those connections. The game Charlene Cutler and I created asks adults to reconsider the circumstances shaping a child’s life. My larger vision asks what we will make possible once we understand them.",
      "A child may need help getting through tonight. That same child deserves a reason to be excited about tomorrow. I want our work to make room for both."
    ]
  },
  {
    "theme": "Future Goals",
    "q": "What are your key goals for the future of education and community development?",
    "paras": [
      "I want us to stop asking children to fit a school model we are unwilling to change. Expecting students to sit quietly for most of the day while we teach everyone the same way is an outdated approach. Our classrooms need more movement, creativity, hands-on learning, and flexibility.",
      "Students bring different learning, physical, and mental health needs into school. Our response should be thoughtful design: sensory spaces for autistic students who benefit from them, opportunities for exercise, and staff trained in trauma and social and emotional learning. We need adults who can recognize distress and respond with both compassion and clear expectations.",
      "I also want discipline that teaches. Restorative practices ask students to take responsibility, understand the harm they caused, and help repair it. Consequences should contribute to better decisions when students return to the classroom.",
      "Parents are essential partners. We need to reinforce education as a daily priority through attendance, routines, and communication, while giving families practical support to meet those expectations.",
      "My vision for community development extends that partnership beyond dismissal. Imagine school buildings offering evening job training, financial education, wellness programs, and activities that bring generations together. Businesses, colleges, health providers, and neighborhood organizations can help make schools places where parents build their futures alongside their children.",
      "That is the future I want to help create: schools designed around how children learn, connected to communities where entire families have opportunities to grow."
    ]
  },
  {
    "theme": "Equity & Inclusion",
    "q": "How can schools create more equitable and inclusive learning environments for all students?",
    "paras": [
      "A school can say every child belongs. I want to know what happens when that child walks through the door. Can they participate fully? Is their name pronounced correctly? Does their family feel comfortable asking questions? Those everyday experiences tell us more about inclusion than a statement on a wall.",
      "Inclusivity encompasses students with disabilities, race, culture, language, socioeconomic circumstances, and other differences that shape how children experience school. It requires us to examine who has access to advanced classes, activities, support, and leadership opportunities, and who keeps getting left out.",
      "That begins with an honest look at the individual school. Where are relationships breaking down? Which students are disciplined most often? Whose parents rarely attend, and have we asked why? We need to hear from the people experiencing the culture, including those who may be uncomfortable telling us the truth.",
      "Professional development should respond directly to what we learn. A standard sensitivity presentation delivered once a year is not enough. Training needs to address that school’s weaknesses, give staff practical ways to improve, and include follow through to determine whether anything has changed. Our poverty game can help open that conversation around economic hardship, but the work must continue in daily practice.",
      "Administrators are responsible for maintaining that culture. They set expectations, model respectful behavior, address concerns, and hold themselves and their staff accountable. When exclusion is ignored, it becomes part of what a school permits.",
      "For ethnic groups new to a school or community, belonging takes deliberate effort. Learn families’ names, provide accessible communication, invite their perspectives, and help them understand unfamiliar school processes. Give them opportunities to contribute throughout the year.",
      "I want families to feel that their presence helps shape the school. That is when inclusion becomes something they can experience and trust."
    ]
  },
  {
    "theme": "Leadership Legacy",
    "q": "What lasting impact do you hope to make through your work in education and community engagement?",
    "paras": [
      "I hope my legacy lives in what people are able to do because our paths crossed. A parent who feels confident speaking up for their child. A student who sees possibilities they had not considered. An educator who approaches a family with greater understanding. A woman who decides that the experience she has spent years accumulating deserves to become something of her own.",
      "Working in education and community engagement has taught me that people remember how you handled a moment when they needed help. Did you protect their dignity? Did you take their concern seriously? Did you do what you said you would do? I want the people I have served to be able to say yes to those questions.",
      "I also want what I have learned to remain useful beyond my daily involvement. That is why writing books, building Urban School Transformation, and co-creating Can You Survive Poverty? The Game™ with Charlene Cutler matter to me. They give the lessons gained through years of service somewhere to live and give others a starting point for their own work. I hope people use them, improve on them, and take them into places I may never reach.",
      "There is a personal part of this legacy, too. As a Black woman who raised three children as a single mother, I want my children to see that I continued becoming. I cared for my family, served my community, and kept making room for ideas and ambitions of my own. I hope another woman sees that journey and decides to take the next step she has been postponing.",
      "Ultimately, I want to leave people with greater opportunity and a stronger sense of what they can contribute. Years from now, someone may not remember my title or the name of a program. But if they remember that I listened, followed through, and helped them move forward, and they do the same for someone else, that would be a legacy I would be proud of."
    ]
  },
  {
    "theme": "Personal Message",
    "q": "What advice would you offer aspiring educators and future leaders?",
    "paras": [
      "Ask yourself, “What would I do if I weren’t afraid?” Then give yourself permission to act on the answer. Do what scares you. Speak up in the meeting. Apply for the position. Bring your idea into the room before you have every detail figured out. Some of your greatest growth will happen when you take responsibility for something you once doubted you could do.",
      "Leave your ego at the door. A title does not make you the wisest person in the room, and being corrected does not diminish your worth. Be willing to learn from a parent, a student, or the colleague whose perspective challenges yours. If protecting your pride becomes more important than hearing the truth, your leadership has stopped growing.",
      "I also encourage people to approach their work with this mindset: there are no problems, only opportunities. That does not mean hardship is easy or that every circumstance has a simple solution. It means asking, “What is this showing me? What needs to change? What can I help make possible?” You may not control what arrives at your door, but you can choose how thoughtfully and courageously you respond.",
      "And do what you love. Find someone to pay you for it. Take the work that gives you purpose seriously enough to develop your skills, understand its value, and build something sustainable. A calling deserves preparation as much as passion.",
      "Above all, remember that your decisions will touch lives you may never fully understand. Stay curious. Keep your word. Be brave enough to begin and humble enough to change direction. Years from now, your greatest testimony of growth may be the work you almost let fear talk you out of doing."
    ]
  }
] as const;

const DECKS = ["yellow", "green", "blue", "red"] as const;

const side = (leaf: number) => (leaf % 2 ? "l" : "r");

function Tab({ deck, leaf, label }: { deck: Deck; leaf: number; label?: string }) {
  return (
    <div className={`vf-tab d-${deck} is-${side(leaf)}`} aria-hidden>
      <span>{label ?? DECK_NAME[deck]}</span>
    </div>
  );
}

function Folio({ leaf, section, deck = "navy" }: { leaf: number; section: string; deck?: Deck }) {
  const left = side(leaf) === "l";
  const n = String(leaf).padStart(2, "0");
  return (
    <p className={`vf-folio d-${deck}`}>
      {left ? <b>{n}</b> : <span>PrimeCrest · November 2026</span>}
      <span>{section}</span>
      {left ? <span>PrimeCrest · November 2026</span> : <b>{n}</b>}
    </p>
  );
}

function Shield() {
  return (
    <svg viewBox="0 0 16 18" aria-hidden>
      <path d="M8 .8 15 3.4v5.2c0 4.1-3 7.2-7 8.6-4-1.4-7-4.5-7-8.6V3.4Z" fill="currentColor" opacity="0.9" />
      <path d="M8 4.2 9.3 7h3l-2.4 1.8.9 3L8 10l-2.8 1.8.9-3L3.7 7h3Z" fill="var(--d)" />
    </svg>
  );
}

/** A drawn card: the deck's colour, the deck's name, one line in her words. */
function Card({
  deck,
  label,
  size,
  foot,
  className = "",
  style,
  children,
}: {
  deck: Deck;
  label?: string;
  size?: number;
  foot?: ReactNode;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}) {
  return (
    <div
      className={`vf-card d-${deck} ${className}`}
      style={{ ...(size ? { "--vf-card-size": `${size}px` } : null), ...style } as CSSProperties}
    >
      <p className="vf-card-k">
        <Shield />
        {label ?? `${DECK_NAME[deck]} Card`}
      </p>
      <p className="vf-card-q">{children}</p>
      {foot ? <p className="vf-card-f">{foot}</p> : null}
    </div>
  );
}

/** One interview leaf: the question on a card, the answer whole, a drawn card or a plate. */
function Interview({
  i,
  leaf,
  deck,
  size = 15,
  lead = 1.6,
  bottom,
}: {
  i: number;
  leaf: number;
  deck: Deck;
  size?: number;
  lead?: number;
  bottom?: ReactNode;
}) {
  const qa = VF_QA[i];
  const n = String(i + 1).padStart(2, "0");
  return (
    <article className={`mag-page vf vf-paper d-${deck}`}>
      <Tab deck={deck} leaf={leaf} />
      <div className={`vf-well is-${side(leaf)}`}>
        <p className="vf-kick">In Her Words · Question {n} of 08</p>
        <div className="vf-q">
          <b>{n}</b>
          <div>
            <small>{qa.theme}</small>
            <h3>{qa.q}</h3>
          </div>
        </div>
        <div className="vf-qa vf-body vf-cols vf-drop" style={{ fontSize: size, lineHeight: lead }}>
          {qa.paras.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </div>
        {bottom}
        <Folio leaf={leaf} section="In Her Words" deck={deck} />
      </div>
    </article>
  );
}

/** Photograph at its own proportions beside a drawn card. */
function Band({
  src,
  alt,
  w,
  ratio,
  deck,
  size = 26,
  foot,
  children,
}: {
  src: string;
  alt: string;
  w: number;
  ratio: number;
  deck: Deck;
  size?: number;
  foot?: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="vf-band">
      <img src={src} alt={alt} style={{ width: w, aspectRatio: ratio }} />
      <Card deck={deck} size={size} foot={foot}>
        {children}
      </Card>
    </div>
  );
}

function Lockup({ h = 56 }: { h?: number }) {
  return (
    <div className="vf-lockup">
      <img src="/brand/logo-fortiora.png" alt="Fortiora Group" style={{ height: h }} />
      <div>
        <b>Fortiora</b>
        <span>Group</span>
      </div>
    </div>
  );
}

/** Spread artwork for the Campus advertisement: one canvas across two leaves. */
function CampusArt({ shift = 0 }: { shift?: number }) {
  const decks = ["#f2cd34", "#35b257", "#2547cf", "#d7232d"];
  return (
    <div className="vf-ad-art" aria-hidden>
      <svg viewBox="0 0 1680 1120" width={1680} height={1120} style={{ left: shift, top: 0 }}>
        <defs>
          <radialGradient id="vfGlow" cx="50%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#2547cf" stopOpacity="0.34" />
            <stop offset="100%" stopColor="#14213d" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="1680" height="1120" fill="#111c35" />
        <rect width="1680" height="1120" fill="url(#vfGlow)" />
        {Array.from({ length: 56 }, (_, k) => {
          const col = k % 14;
          const row = Math.floor(k / 14);
          return (
            <rect
              key={k}
              x={20 + col * 120}
              y={40 + row * 280}
              width="96"
              height="132"
              rx="10"
              fill="none"
              stroke={decks[(col + row) % 4]}
              strokeOpacity={0.1 + ((col * 7 + row * 3) % 5) * 0.03}
              strokeWidth="1.4"
            />
          );
        })}
        <text
          x="840"
          y="1060"
          textAnchor="middle"
          fill="#f7f2e8"
          fillOpacity="0.05"
          style={{ font: "400 300px var(--font-caslondisplay), Georgia, serif", letterSpacing: "18px" }}
        >
          CAMPUS
        </text>
      </svg>
    </div>
  );
}

export const VERNA_TOC = [
  { page: 0, label: "Cover" },
  { page: 1, label: "Contents" },
  { page: 3, label: "Credits" },
  { page: 4, label: "From the Editors" },
  { page: 5, label: "The Feature" },
  { page: 8, label: "The Game" },
  { page: 9, label: "In Her Words" },
  { page: 13, label: "Dependable" },
  { page: 18, label: "The Record" },
  { page: 19, label: "Fortiora Grants" },
  { page: 20, label: "Be Featured" },
  { page: 21, label: "Fortiora Campus" },
  { page: 23, label: "PrimeCrest" },
];

export function VernaPages() {
  return (
    <>
      {/* ============================================== 00 · COVER */}
      <article className="mag-page vf vf-cover" data-density="hard">
        <div className="vf-cover-grain" />
        <div className="vf-fan" aria-hidden>
          <i className="d-yellow" />
          <i className="d-green" />
          <i className="d-blue" />
          <i className="d-red" />
        </div>
        <div className="vf-cover-mast">
          <PrimeCrestMast tone="dark" tagline={false} hero />
        </div>
        <img
          className="vf-cover-cut"
          src={`${IMG}/cutout-earrings.png`}
          alt="Verna Felder, founder of Urban School Transformation"
          fetchPriority="high"
        />
        <div className="vf-cover-floor" />

        <div className="vf-cover-ui">
          <p className="vf-cover-date">November 2026 · Vol. XV · No. 15</p>

          <h1 className="vf-cover-title">
            Journeys
            <br />
            Meet
            <br />
            Opportunity:
            <em>
              Navigating Life
              <br />
              Across Borders
            </em>
          </h1>

          <p className="vf-cover-hl">
            Become dependable before you become <em>prominent.</em>
            <small>Her advice to future leaders · p. 13</small>
          </p>

          <div className="vf-cover-teasers">
            <div className="vf-tease d-red">
              <div>
                <b>Fifteen dollars, or a tank of gas</b>
                <span>The field trip she still carries into every room. p. 05</span>
              </div>
            </div>
            <div className="vf-tease d-blue">
              <div>
                <b>Four decks on the table</b>
                <span>Can You Survive Poverty? The Game™, made with Charlene Cutler. p. 08</span>
              </div>
            </div>
          </div>

          <div className="vf-cover-name">
            <p className="vf-cover-role">Founder · Urban School Transformation</p>
            <p className="vf-cover-first">Verna</p>
            <p className="vf-cover-last">FELDER</p>
            <p className="vf-cover-sub">
              Educator of 20+ years · Author · Co-creator,
              <br />
              Can You Survive Poverty? The Game™
            </p>
          </div>

          <div className="vf-cover-plate">
            <img className="mag-qr" src="/brand/barcode-primecrest.png" alt="PrimeCrest barcode and QR code" />
            <span>theprimecrest.com</span>
          </div>
        </div>
      </article>

      {/* ============================================== 01 · CONTENTS PHOTO (L) */}
      <article className="mag-page vf vf-bare">
        <img className="vf-cphoto" src={`${IMG}/grey.jpg`} alt="Verna Felder" />
        <div className="vf-cband">
          <p className="vf-cword">
            Contents
            <small>The November Issue · Vol. XV</small>
          </p>
          <ul className="vf-legend">
            <li className="d-yellow">
              <i />
              <span>
                <b>Yellow · Barriers</b>What schools ask, and what stands in the way</span>
            </li>
            <li className="d-green">
              <i />
              <span>
                <b>Green · Support</b>Detroit, and the work ahead</span>
            </li>
            <li className="d-blue">
              <i />
              <span>
                <b>Blue · Reflection</b>The game, and what it should change</span>
            </li>
            <li className="d-red">
              <i />
              <span>
                <b>Red · Life events</b>The field trip, and the leader it made</span>
            </li>
          </ul>
        </div>
      </article>

      {/* ============================================== 02 · CONTENTS INDEX (R) */}
      <article className="mag-page vf vf-paper">
        <Tab deck="navy" leaf={2} label="Contents" />
        <div className="vf-well is-r">
          <p className="vf-kick">The November Issue · Vol. XV · No. 15</p>
          <div className="vf-toc-lead">
            <b>05</b>
            <div>
              <h3>Verna Felder</h3>
              <p>
                More than twenty years in education, a field trip she could not easily pay for, and
                the game she built so people pause before asking why a family doesn&apos;t just
                manage.
              </p>
            </div>
          </div>
          <ol className="vf-toc">
            <li className="d-navy">
              <i />
              <div>
                <h4>Credits &amp; From the Editors</h4>
                <p>Three questions she asks herself after every problem.</p>
              </div>
              <b>03</b>
            </li>
            <li className="d-red">
              <i />
              <div>
                <h4>A clearer view of what children need</h4>
                <p>The feature. Eyeglasses, dental care, and the signs staff cannot afford to miss.</p>
              </div>
              <b>05</b>
            </li>
            <li className="d-blue">
              <i />
              <div>
                <h4>Four decks on the table</h4>
                <p>Can You Survive Poverty? The Game™, made with Charlene Cutler.</p>
              </div>
              <b>08</b>
            </li>
            <li className="d-red">
              <i />
              <div>
                <h4>In her words</h4>
                <p>Eight questions, answered in full and printed in the order asked.</p>
              </div>
              <b>09</b>
            </li>
            <li className="d-yellow">
              <i />
              <div>
                <h4>What schools are asked to carry</h4>
                <p>Standards, staffing, and the night before a reading assessment.</p>
              </div>
              <b>10</b>
            </li>
            <li className="d-green">
              <i />
              <div>
                <h4>Farther than the block</h4>
                <p>A golf club, the opera, an engineering firm, and the next step.</p>
              </div>
              <b>12</b>
            </li>
            <li className="d-red">
              <i />
              <div>
                <h4>Dependable</h4>
                <p>Let your name mean something changed because you showed up.</p>
              </div>
              <b>13</b>
            </li>
            <li className="d-green">
              <i />
              <div>
                <h4>The record</h4>
                <p>Her own list, in her own order.</p>
              </div>
              <b>18</b>
            </li>
            <li className="d-navy">
              <i />
              <div>
                <h4>Fortiora Grants · Be Featured · Fortiora Campus</h4>
                <p>From the publisher.</p>
              </div>
              <b>19</b>
            </li>
          </ol>
          <Folio leaf={2} section="Contents" />
        </div>
      </article>

      {/* ============================================== 03 · CREDITS (L) */}
      <article className="mag-page vf vf-navy">
        <Tab deck="navy" leaf={3} label="Credits" />
        <div className="vf-well is-l">
          <p className="vf-kick">The Masthead · Vol. XV · No. 15</p>
          <h2 className="vf-credits-head">
            Credits<span>.</span>
          </h2>
          <ul className="vf-credits">
            {novemberCredits("Verna Felder").map(([role, name], k) => (
              <li key={role} className={`d-${DECKS[k % 4]}`}>
                <i />
                <span>{role}</span>
                <b>{name}</b>
              </li>
            ))}
          </ul>
          <div className="vf-imprint">
            <img src="/brand/logo-fortiora.png" alt="Fortiora Group" />
            <p>
              <b>Fortiora Group LLC</b>
              <br />
              30 N Gould St Ste R, Sheridan, WY 82801, United States
              <br />
              Hello@thefortiora.com · <b>thefortiora.com</b>
            </p>
            <img className="vf-qr" src="/brand/qr-fortiora.png" alt="Scan to visit thefortiora.com" />
          </div>
          <p className="vf-rights">
            © 2026 Fortiora Group LLC. All rights reserved. No part of this publication may be
            reproduced or transmitted in any form without prior written permission from the
            publisher.
          </p>
          <Folio leaf={3} section="Credits" />
        </div>
      </article>

      {/* ============================================== 04 · FROM THE EDITORS (R) */}
      <article className="mag-page vf vf-paper">
        <Tab deck="navy" leaf={4} label="From the Editors" />
        <div className="vf-well is-r">
          <p className="vf-kick">From the Editors</p>
          <h2 className="vf-head" style={{ fontSize: 50 }}>
            Before the First Bell, There Is a Story
          </h2>
          <div className="vf-body vf-cols vf-drop d-navy" style={{ marginTop: 22, fontSize: 15.6, lineHeight: 1.58 }}>
            <p>
              A child misses school. An assignment goes unfinished. A parent&apos;s chair sits empty
              at a meeting. Each tells a school that something has been missed. Verna Felder wants to
              know what happened before anyone walked through the door.
            </p>
            <p>
              After more than twenty years in education, she has learned how much of a
              student&apos;s school day begins at home, with circumstances that never appear on a
              report card. Understanding those circumstances has become central to her work and the
              way she measures her leadership.
            </p>
            <p>
              Her standard comes down to three questions: Did I listen carefully? Did I follow
              through? Did anything improve because I became involved?
            </p>
            <p>
              For Felder, those questions are personal. Raising three children as a single mother,
              she once faced a choice between putting gas in the car and paying fifteen dollars for
              her daughter&apos;s field trip. She remembers wanting to meet both needs and having to
              choose. Today, an unpaid fee is a reason to begin a conversation.
            </p>
            <p>
              Those experiences helped shape her book, <em>Did You Bring a Bed Bug to School Today?
              How to Cultivate an Emotionally Safe Environment for Students in Urban
              Communities</em>. They also inspired her company, The Urban School Transformation
              LLC, and Can You Survive Poverty? The Game™, which she created with Charlene Cutler.
              With four decks of cards on the table, educators must navigate difficult decisions
              using the resources available to them. The experience asks them to reconsider what
              they assume about the families they serve.
            </p>
            <p>
              Beginning on page nine, Felder answers eight questions about her journey, her work,
              and the responsibilities of leadership. Her responses appear in full, in the order
              asked, giving readers room to follow the experiences and convictions behind her
              answers.
            </p>
          </div>
          <div className="vf-bookrow">
            <img
              src={`${IMG}/book.jpg`}
              alt="Did You Bring a Bed Bug to School Today? by Verna Felder"
              style={{ width: 150, aspectRatio: 391 / 577 }}
            />
          <div className="vf-figs">
            <div className="vf-fig d-yellow">
              <b>20+</b>
              <span>Years in education</span>
            </div>
            <div className="vf-fig d-green">
              <b>3</b>
              <span>Children, raised as a single mother</span>
            </div>
            <div className="vf-fig d-blue">
              <b>$15</b>
              <span>The field trip</span>
            </div>
            <div className="vf-fig d-red">
              <b>4</b>
              <span>Decks on the table</span>
            </div>
          </div>
          </div>
          <div className="vf-sign" style={{ marginTop: "auto", paddingTop: 20 }}>
            <b>The Editors</b>
            <i className="vf-sign-deck" aria-hidden>
              <i className="d-yellow" />
              <i className="d-green" />
              <i className="d-blue" />
              <i className="d-red" />
            </i>
            <span>PrimeCrest Editorial Desk</span>
          </div>
          <Folio leaf={4} section="From the Editors" />
        </div>
      </article>

      {/* ============================================== 05 · OPENER PLATE (L) */}
      <article className="mag-page vf vf-bare">
        <img
          className="vf-plate-img"
          src={`${IMG}/game.jpg`}
          alt="Verna Felder at a table with Can You Survive Poverty? The Game™ and its four card decks"
          style={{ aspectRatio: 1126 / 1397 }}
        />
        <div className="vf-capbar" style={{ top: 1042 }}>
          <span className="vf-mast-deck" aria-hidden>
            <i className="d-yellow" />
            <i className="d-green" />
            <i className="d-blue" />
            <i className="d-red" />
          </span>
          <span>
            Verna Felder with Can You Survive Poverty? The Game™. On the box: a sensitivity
            experience for educators.
          </span>
        </div>
      </article>

      {/* ============================================== 06 · OPENER TEXT (R) */}
      <article className="mag-page vf vf-paper d-red">
        <Tab deck="red" leaf={6} />
        <div className="vf-well is-r">
          <p className="vf-kick">The Feature · Verna Felder</p>
          <h1 className="vf-open-head" style={{ fontSize: 60 }}>
            A Clearer View of <em>What Children Need</em>
          </h1>
          <div className="vf-hair" style={{ margin: "18px 0 20px", height: 2, background: "var(--vf-red)" }} />
          <div className="vf-body vf-cols vf-drop" style={{ fontSize: 15.6, lineHeight: 1.62 }}>
            <p>
              Felder remembers what fifteen dollars could mean to her family. That experience still
              shapes the questions she asks, but her work also reaches toward what comes after the
              answer: finding help.
            </p>
            <p>
              Sometimes, that help begins with something as practical as a pair of glasses. A child
              struggling to follow a lesson may be unable to see the board. A student who seems
              distracted may be sitting through class with a toothache. Understanding the
              circumstances opens the conversation. Connecting a family with care can change what
              happens next.
            </p>
            <p>
              Free eyeglasses. Dental services. Resources that put essential care within reach.
              Through partnerships with community organizations and service providers, Felder works
              to connect struggling families with support that can make a school day feel
              different.
            </p>
            <p>
              These are the practical possibilities behind the term &ldquo;wraparound
              services.&rdquo; For a parent, the immediate concern may be simpler: Where can I get
              help for my child, and can we afford it?
            </p>
            <p>
              Schools can be a trusted place to begin finding answers. But a referral is only useful
              if a family knows what to do next. Clear information, an accessible contact, and
              someone willing to follow through can turn an offer of help into care a child
              actually receives.
            </p>
            <p>
              Felder&apos;s approach brings that responsibility into focus. Building partnerships
              means knowing whom to call, understanding what help is available, and connecting
              people with care and respect. It also means recognizing that families may be managing
              several urgent needs at once.
            </p>
            <p>
              Her experience has taught her to look beyond the first explanation for a
              student&apos;s struggle. What appears to be disengagement may warrant a conversation.
              What emerges from that conversation may call for a community partner.
            </p>
            <p>
              The purpose is concrete: help a child see clearly, access dental care, or arrive at
              school better able to participate. For Felder, supporting learning includes paying
              attention to what makes learning possible.
            </p>
          </div>
          <Card deck="red" size={27} style={{ marginTop: "auto" }}>
            Sometimes, helping a child succeed in the classroom begins with connecting their family
            to care beyond it.
          </Card>
          <Folio leaf={6} section="The Feature" deck="red" />
        </div>
      </article>

      {/* ============================================== 07 · FEATURE (L) */}
      <article className="mag-page vf vf-paper d-red">
        <Tab deck="red" leaf={7} />
        <div className="vf-well is-l">
          <p className="vf-kick">The Feature · Continued</p>
          <h2 className="vf-head" style={{ fontSize: 54 }}>
            The Signs We Cannot Afford to Miss
          </h2>
          <div className="vf-body vf-cols vf-drop" style={{ marginTop: 24, fontSize: 17.2, lineHeight: 1.72 }}>
            <p>
              For Verna Felder, connecting families with support begins with recognizing when they
              need it. That responsibility took on greater urgency when she learned that a school
              aged child had died while the family was sleeping in a car in a casino parking lot.
            </p>
            <p>
              The news stayed with her. It strengthened her determination to prepare school staff to
              recognize distress before a family&apos;s circumstances become a tragedy.
            </p>
            <p>
              Every adult has a role. A bus driver may notice persistent exhaustion. A cafeteria
              worker may recognize recurring hunger. An office employee may be the first person a
              parent tells about losing housing. These moments can open a conversation, but staff
              need to know what to ask and how to respond.
            </p>
            <p>
              Felder&apos;s trainings focus on seeing the whole child. Changes in attendance,
              withdrawal, and difficulty concentrating deserve attention and thoughtful questions.
              Staff also need clear steps for sharing concerns, connecting families with
              assistance, and seeking urgent help.
            </p>
            <p>
              Can You Survive Poverty? The Game™, created with Charlene Cutler, brings that
              responsibility into the room. Participants navigate competing needs and limited
              resources, then examine how those pressures might appear in the students and families
              they serve. The experience challenges them to carry greater awareness, and a readiness
              to act, back to school.
            </p>
            <p>
              At the table, a difficult round ends. For a child returning to a car to sleep, the
              hardship continues after dismissal. Felder wants every staff member prepared to
              recognize that possibility and respond while there is still time to help.
            </p>
          </div>
          <Card deck="red" size={34} style={{ marginTop: "auto" }}>
            At the table, the game ends. For the families living these choices, the hardship
            continues.
          </Card>
          <Folio leaf={7} section="The Feature" deck="red" />
        </div>
      </article>

      {/* ============================================== 08 · THE GAME (R) */}
      <article className="mag-page vf vf-navy d-blue">
        <Tab deck="blue" leaf={8} />
        <div className="vf-well is-r">
          <p className="vf-kick">The Game</p>
          <h2 className="vf-head" style={{ fontSize: 52 }}>
            Four decks on the table.
          </h2>
          <p className="vf-dek">
            Can You Survive Poverty? The Game™, created by Verna Felder and Charlene Cutler. An
            interactive experience that challenges educators to navigate poverty&apos;s difficult
            choices and turn understanding into action.
          </p>
          <div className="vf-deckrow">
            <div className="d-yellow">
              <Shield />
              <b>Systemic Barrier Cards</b>
            </div>
            <div className="d-green">
              <Shield />
              <b>Support &amp; Resource Cards</b>
            </div>
            <div className="d-blue">
              <Shield />
              <b>Reflection Discussion Cards</b>
            </div>
            <div className="d-red">
              <Shield />
              <b>Life Event Cards</b>
            </div>
          </div>
          <div className="vf-gamefoot">
            <figure className="vf-fig-photo">
              <img
                src={`${IMG}/with-charlene.jpg`}
                alt="Verna Felder and Charlene Cutler with Can You Survive Poverty? The Game™"
                style={{ width: 440, aspectRatio: 1397 / 1126 }}
              />
              <figcaption>
                Verna Felder and Charlene Cutler with Can You Survive Poverty? The Game™.
              </figcaption>
            </figure>
            <figure className="vf-fig-photo">
              <img
                src={`${IMG}/box.jpg`}
                alt="The box of Can You Survive Poverty? The Game™"
                style={{ width: 258, aspectRatio: 414 / 344 }}
              />
              <figcaption>On the table: the box and its four decks.</figcaption>
              <Card deck="blue" label="Reflection Discussion Card" size={19} style={{ marginTop: 14 }}>
                Any player may read this card aloud.
              </Card>
            </figure>
          </div>
            <div className="vf-body vf-cols" style={{ marginTop: 24, fontSize: 16.8, lineHeight: 1.66 }}>
              <p>
                Every choice costs something. When resources run short and life takes an unexpected
                turn, what can you afford to lose? Can You Survive Poverty? The Game™ puts that
                question in players&apos; hands.
              </p>
              <p>
                For the creators, the purpose is to challenge the assumptions behind &ldquo;Why
                don&apos;t they just&hellip;?&rdquo; No game can replicate poverty, but it can
                reveal how quickly options disappear and how easily struggle is misunderstood.
              </p>
              <p>
                For educators and organizations seeking greater empathy, stronger teams, and more
                responsive service, the experience ends with a question that reaches beyond the
                table: Now that you see things differently, how will you respond?
              </p>
            </div>
          <Folio leaf={8} section="The Game" deck="blue" />
        </div>
      </article>

      {/* ============================================== 09 · Q1 (L) */}
      <Interview
        i={0}
        leaf={9}
        deck="red"
        size={15.1}
        lead={1.6}
        bottom={
          <Band
            src={`${IMG}/navy.jpg`}
            alt="Verna Felder in a navy blazer"
            w={250}
            ratio={928 / 1152}
            deck="red"
            size={28}
            foot="Question 01 · Professional Journey"
          >
            When I make a decision, I think about the people who will have to live with it.
          </Band>
        }
      />

      {/* ============================================== 10 · Q2 (R) */}
      <Interview
        i={1}
        leaf={10}
        deck="yellow"
        size={15}
        lead={1.6}
        bottom={
          <Card deck="yellow" size={27} style={{ marginTop: "auto" }} foot="Question 02 · Educational Leadership">
            We cannot hold children to high expectations while allowing unequal access to
            resources and support to stand in their way.
          </Card>
        }
      />

      {/* ============================================== 11 · Q3 (L) */}
      <Interview
        i={2}
        leaf={11}
        deck="blue"
        size={15.2}
        lead={1.62}
        bottom={
          <Band
            src={`${IMG}/box.jpg`}
            alt="The box of Can You Survive Poverty? The Game™"
            w={300}
            ratio={414 / 344}
            deck="blue"
            size={30}
            foot="Any player may read this card aloud."
          >
            Understanding should change how we act.
          </Band>
        }
      />

      {/* ============================================== 12 · Q4 (R) */}
      <Interview
        i={3}
        leaf={12}
        deck="green"
        size={14.6}
        lead={1.58}
        bottom={
          <Band
            src={`${IMG}/detroit.jpg`}
            alt="Verna Felder on the Detroit riverfront"
            w={190}
            ratio={1126 / 1397}
            deck="green"
            size={25}
            foot="Question 04 · Community Vision"
          >
            An introduction can become a mentorship. A new experience can become a calling. Our
            job is to help children reach that next possibility.
          </Band>
        }
      />

      {/* ============================================== 13 · DEPENDABLE (L) */}
      <article className="mag-page vf vf-navy d-red">
        <Tab deck="red" leaf={13} />
        <img
          className="vf-stmt-img"
          src={`${IMG}/navy.jpg`}
          alt="Verna Felder"
          style={{ aspectRatio: 928 / 1152 }}
        />
        <div className="vf-stmt-spine">
          <span>Dependable.</span>
        </div>
        <div className="vf-stmt-foot">
          <Card deck="red" foot="Verna Felder · To future leaders">
            Let your name mean that someone was heard, a promise was kept, and something changed
            because you showed up.
          </Card>
          <p className="vf-dek" style={{ marginTop: 28, fontSize: 21, lineHeight: 1.42 }}>
            Always ask yourself, &ldquo;What would I do if I weren&apos;t afraid?&rdquo; Then take
            that answer seriously. Go do it.
          </p>
          <Folio leaf={13} section="Dependable" deck="red" />
        </div>
      </article>

      {/* ============================================== 14 · Q5 (R) */}
      <Interview
        i={4}
        leaf={14}
        deck="green"
        size={16}
        lead={1.58}
        bottom={
          <Band
            src={`${IMG}/studio.jpg`}
            alt="Verna Felder in a studio portrait"
            w={200}
            ratio={1}
            deck="green"
            size={25}
            foot="Question 05 · Future Goals"
          >
            A school&apos;s greatest possibilities emerge when we rethink how children learn and how
            the whole community can grow alongside them.
          </Band>
        }
      />

      {/* ============================================== 15 · Q6 (L) */}
      <Interview
        i={5}
        leaf={15}
        deck="yellow"
        size={14.7}
        lead={1.58}
        bottom={
          <Card deck="yellow" size={30} style={{ marginTop: "auto" }} foot="Question 06 · Equity & Inclusion">
            School leaders are accountable for the culture they create, the concerns they address,
            and the exclusion they allow.
          </Card>
        }
      />

      {/* ============================================== 16 · Q7 (R) */}
      <Interview
        i={6}
        leaf={16}
        deck="blue"
        size={14.9}
        lead={1.58}
        bottom={
          <Band
            src={`${IMG}/students.jpg`}
            alt="Verna Felder with students"
            w={160}
            ratio={1024 / 1536}
            deck="blue"
            size={25}
            foot="Question 07 · Leadership Legacy"
          >
            I want my children to see that I continued becoming.
          </Band>
        }
      />

      {/* ============================================== 17 · Q8 (L) */}
      <Interview
        i={7}
        leaf={17}
        deck="red"
        size={16.9}
        lead={1.56}
        bottom={
          <Card deck="red" size={28} style={{ marginTop: "auto" }} foot="Question 08 · Personal Message">
            Your greatest testimony of growth may be the work you almost let fear talk you out of
            doing.
          </Card>
        }
      />

      {/* ============================================== 18 · THE RECORD (R) */}
      <article className="mag-page vf vf-paper d-green">
        <Tab deck="green" leaf={18} />
        <div className="vf-well is-r">
          <p className="vf-kick">The Record</p>
          <h2 className="vf-head" style={{ fontSize: 50 }}>
            In the order she gave it.
          </h2>
          <p className="vf-dek">
            In the final of our eight questions, Felder reflects on the milestones that shaped her
            journey, each opening another door for her to make a difference.
          </p>
          <div className="vf-hand">
            <div className="d-red">
              <b>01</b>
              <h4>Raised three children</h4>
              <p>As a single mother.</p>
            </div>
            <div className="d-yellow">
              <b>02</b>
              <h4>Built a career in education</h4>
              <p>More than twenty years, much of it with families.</p>
            </div>
            <div className="d-blue">
              <b>03</b>
              <h4>Became an author</h4>
              <p>What she knew, given somewhere to live.</p>
            </div>
            <div className="d-green">
              <b>04</b>
              <h4>Founded Urban School Transformation LLC</h4>
              <p>Leaders, school culture, partnerships.</p>
            </div>
            <div className="d-navy">
              <b>05</b>
              <h4>Co-created Can You Survive Poverty? The Game™</h4>
              <p>With Charlene Cutler.</p>
            </div>
          </div>
          <div className="vf-ledger">
            <div className="d-red">
              <h5>Her standard</h5>
              <ul className="vf-ask">
                <li>Did I listen carefully?</li>
                <li>Did I follow through?</li>
                <li>Did anything improve because I became involved?</li>
              </ul>
              <p className="vf-dek" style={{ fontSize: 16, marginTop: 14 }}>
                The three questions she asks of her own leadership. The same standard, she says,
                follows her into her family, her business and her community.
              </p>
              <Card deck="red" label="And the three she wants answered yes" size={21} style={{ marginTop: 22 }}>
                Did you protect their dignity? Did you take their concern seriously? Did you do
                what you said you would do?
              </Card>
            </div>
            <div className="d-green">
              <h5>What comes next</h5>
              <ol>
                <li>
                  <i>1</i>
                  <span>
                    More leaders who connect academic expectations with supporting teachers,
                    engaging families and building school culture.
                  </span>
                </li>
                <li>
                  <i>2</i>
                  <span>
                    The game for a broader audience, and the changes that follow a session,
                    pursued and documented.
                  </span>
                </li>
                <li>
                  <i>3</i>
                  <span>
                    Partnerships for skilled trades training, apprenticeships, college,
                    entrepreneurship and an AI-centered world.
                  </span>
                </li>
                <li>
                  <i>4</i>
                  <span>Pathways that reach adults rebuilding their lives or learning new skills.</span>
                </li>
                <li>
                  <i>5</i>
                  <span>
                    Her own voice as author, educator and entrepreneur, with room for others to
                    develop theirs.
                  </span>
                </li>
              </ol>
            </div>
          </div>
          <Folio leaf={18} section="The Record" deck="green" />
        </div>
      </article>

      {/* ============================================== 19 · FORTIORA GRANTS (L) */}
      <article className="mag-page vf vf-paper d-blue">
        <div className="vf-well is-l" style={{ paddingLeft: 56 }}>
          <p className="vf-kick">Fortiora Group · Advertisement</p>
          <h2 className="vf-ad-head">
            The application, drafted. <em>The report, already under way.</em>
          </h2>
          <p className="vf-ad-copy">
            Fortiora Grants is a writing and reporting assistant for the people who keep programs
            funded. It drafts from your program notes, checks each section against the
            funder&apos;s guidelines, and keeps what you promised in one place, so the report
            starts on the day the award does.
          </p>
          <div className="vf-ui d-blue" style={{ marginTop: 24 }}>
            <div className="vf-ui-bar">
              <i className="d-red" />
              <i className="d-yellow" />
              <i className="d-green" />
              <span>Fortiora Grants · Application draft</span>
              <em>Saved</em>
            </div>
            <div className="vf-doc">
              <div className="vf-doc-nav">
                <p className="is-on">
                  <i />
                  Need statement
                </p>
                <p>
                  <i />
                  Goals &amp; objectives
                </p>
                <p>
                  <i />
                  Program design
                </p>
                <p>
                  <i />
                  Evaluation plan
                </p>
                <p>
                  <i />
                  Budget narrative
                </p>
                <p>
                  <i />
                  Reporting calendar
                </p>
              </div>
              <div className="vf-doc-main">
                <h6>Need statement</h6>
                <div className="vf-doc-line" style={{ width: "96%" }} />
                <div className="vf-doc-line" style={{ width: "88%" }} />
                <div className="vf-doc-line" style={{ width: "92%" }} />
                <div className="vf-doc-line" style={{ width: "90%" }} />
                <div className="vf-doc-line" style={{ width: "94%" }} />
                <div className="vf-doc-line" style={{ width: "64%" }} />
                <div className="vf-doc-note d-yellow">
                  <b>Guideline check</b>
                  The funder asks for local data with a source. Two statements in this section
                  still need one.
                </div>
                <div className="vf-doc-note d-green">
                  <b>Drafted from</b>
                  Your program notes and last cycle&apos;s final report. Every sentence links back
                  to where it came from.
                </div>
                <div className="vf-doc-note d-red">
                  <b>Promised here</b>
                  Three deliverables added to the reporting calendar, each with an owner and a
                  due date.
                </div>
              </div>
            </div>
          </div>
          <div className="vf-agents" style={{ gridTemplateColumns: "repeat(3, 1fr)", marginTop: 36 }}>
            <div className="vf-agent d-yellow">
              <b>Draft</b>
              <span>From the notes you already keep, in the funder&apos;s structure.</span>
            </div>
            <div className="vf-agent d-green">
              <b>Check</b>
              <span>Against the guidelines, the page limits and the budget.</span>
            </div>
            <div className="vf-agent d-blue">
              <b>Report</b>
              <span>Progress logged as it happens, assembled when it is due.</span>
            </div>
          </div>
          <div className="vf-ad-foot" style={{ marginTop: "auto" }}>
            <div>
              <Lockup h={58} />
              <p>
                <b>Fortiora Grants</b> · Hello@thefortiora.com · thefortiora.com
                <br />
                An advertisement by the publisher of PrimeCrest
              </p>
            </div>
            <div className="vf-ad-tag">
              <b>Fortiora Grants</b>
              <span>For the people who keep programs funded.</span>
            </div>
            <img className="vf-qr" src="/brand/qr-fortiora.png" alt="Scan to reach Fortiora Group" />
          </div>
        </div>
      </article>

      {/* ============================================== 20 · BE FEATURED (R) */}
      <article className="mag-page vf vf-paper d-blue">
        <Tab deck="navy" leaf={20} label="Be Featured" />
        <div className="vf-well is-r">
          <p className="vf-kick">Be Featured · PrimeCrest</p>
          <h2 className="vf-feat-word">
            Your legacy,
            <em>featured.</em>
          </h2>
          <p className="vf-dek" style={{ fontSize: 19 }}>
            Get featured in an upcoming edition of PrimeCrest. The work you have done deserves a
            record that stays, written with care and printed in your own words.
          </p>
          <div className="vf-steps">
            <div className="d-yellow">
              <b>01</b>
              <h4>Nominate</h4>
              <p>
                Put forward a leader, yourself included, whose work has changed something you can
                point to.
              </p>
            </div>
            <div className="d-green">
              <b>02</b>
              <h4>Answer</h4>
              <p>
                Eight questions, answered in writing or in conversation. We print the answers
                whole, in the order asked.
              </p>
            </div>
            <div className="d-red">
              <b>03</b>
              <h4>Publish</h4>
              <p>
                A designed digital edition with your photographs, a cover of your own, and a
                record you can share.
              </p>
            </div>
          </div>
          <Card deck="blue" label="Draw a card" size={36} style={{ marginTop: 44 }} foot="PrimeCrest · Top 10 Unstoppable Business Leaders">
            Your story, in your own words, printed whole.
          </Card>
          <div className="vf-feat-foot">
            <div>
              <div className="vf-feat-mast">
                <PrimeCrestMast tone="dark" tagline={false} />
              </div>
              <p
                style={{
                  marginTop: 10,
                  fontFamily: "var(--vf-sans)",
                  fontSize: 12.5,
                  lineHeight: 1.7,
                  letterSpacing: "0.04em",
                  color: "rgba(247,242,232,0.8)",
                }}
              >
                <b style={{ color: "#fff" }}>theprimecrest.com</b>
                <br />
                PrimeCrest · a product of Fortiora Group LLC
              </p>
            </div>
            <img src="/brand/qr-primecrest.png" alt="Scan to visit theprimecrest.com" />
          </div>
          <Folio leaf={20} section="Be Featured" deck="blue" />
        </div>
      </article>

      {/* ============================================== 21 · FORTIORA CAMPUS, LEFT */}
      <article className="mag-page vf vf-navy" data-density="hard">
        <CampusArt shift={0} />
        <div className="vf-well" style={{ paddingLeft: 56 }}>
          <p className="vf-kick">Fortiora Group · Advertisement</p>
          <h2 className="vf-ad-head" style={{ fontSize: 66 }}>
            Every student, <em>noticed early.</em>
          </h2>
          <p className="vf-ad-copy" style={{ maxWidth: 640 }}>
            Fortiora Campus puts four AI agents to work in a school. One watches attendance. One
            tutors. One writes to families in the language they read. One helps teachers plan.
            Each works from the school&apos;s own records and hands the decision to a person.
          </p>
          <div className="vf-ui d-yellow" style={{ marginTop: 26 }}>
            <div className="vf-ui-bar">
              <i />
              <span>Attendance early-warning · This week</span>
              <em>Grade 7 · Sample view</em>
            </div>
            <div className="vf-ui-body">
              <div className="vf-ui-row d-red">
                <i />
                <span>
                  <b>Student A · Homeroom 204</b>
                  <small>Absences rising across two weeks · Late arrivals on Mondays</small>
                </span>
                <span className="vf-ui-pill">Call home</span>
              </div>
              <div className="vf-ui-row d-yellow">
                <i />
                <span>
                  <b>Student B · Homeroom 211</b>
                  <small>Missed two assignments after a run of full attendance</small>
                </span>
                <span className="vf-ui-pill">Check in</span>
              </div>
              <div className="vf-ui-row d-blue">
                <i />
                <span>
                  <b>Student C · Homeroom 204</b>
                  <small>Family asked for messages in Spanish · Preference saved</small>
                </span>
                <span className="vf-ui-pill">Updated</span>
              </div>
              <div className="vf-ui-row d-green">
                <i />
                <span>
                  <b>Counselor queue</b>
                  <small>Each flag arrives with the pattern behind it and a suggested next step</small>
                </span>
                <span className="vf-ui-pill">Review</span>
              </div>
            </div>
          </div>
          <div className="vf-ui d-green" style={{ marginTop: 22 }}>
            <div className="vf-ui-bar">
              <i />
              <span>Tutoring assistant · After school</span>
              <em>Sample view</em>
            </div>
            <div className="vf-ui-body">
              <p className="vf-ui-msg">
                <small>Student</small>
                Is 3/4 bigger than 2/3? I just guessed.
              </p>
              <p className="vf-ui-msg is-me">
                <small>Assistant</small>
                Good instinct to check. If both were written in twelfths, how many twelfths would
                each one be?
              </p>
            </div>
          </div>
          <div className="vf-agents" style={{ marginTop: "auto" }}>
            <div className="vf-agent d-yellow">
              <b>Attendance early-warning</b>
              <span>Spots the pattern while there is still time to call, and drafts the call.</span>
            </div>
            <div className="vf-agent d-green">
              <b>Tutoring assistant</b>
              <span>Works through a problem with a student step by step, and asks before it tells.</span>
            </div>
            <div className="vf-agent d-blue">
              <b>Family communication</b>
              <span>Notes, reminders and replies in the languages families speak at home.</span>
            </div>
            <div className="vf-agent d-red">
              <b>Teacher planning</b>
              <span>Unit plans, differentiated practice and parent letters, drafted for review.</span>
            </div>
          </div>
          <Folio leaf={21} section="Advertisement" deck="yellow" />
        </div>
      </article>

      {/* ============================================== 22 · FORTIORA CAMPUS, RIGHT */}
      <article className="mag-page vf vf-navy" data-density="hard">
        <CampusArt shift={-840} />
        <div className="vf-well" style={{ paddingRight: 56 }}>
          <p className="vf-kick">Fortiora Campus · AI agents for schools</p>
          <h2 className="vf-ad-head" style={{ fontSize: 62 }}>
            The note home, <em>in the language spoken at home.</em>
          </h2>
          <div className="vf-ui d-blue" style={{ marginTop: 36 }}>
            <div className="vf-ui-bar">
              <i />
              <span>Family communication</span>
              <em>English · Español</em>
            </div>
            <div className="vf-ui-body">
              <p className="vf-ui-msg is-me">
                <small>School · sent in Spanish</small>
                La reunión de padres es el jueves a las 3:00. Responda aquí si necesita otro
                horario.
              </p>
              <p className="vf-ui-msg">
                <small>Parent · translated from Spanish</small>
                I can&apos;t come at 3:00 because of work. Is there another time?
              </p>
              <p className="vf-ui-msg is-me">
                <small>Agent · draft for the teacher</small>
                Offer Tuesday at 5:30 or a phone call this week. Send?
              </p>
            </div>
          </div>
          <div className="vf-ui d-red" style={{ marginTop: 32 }}>
            <div className="vf-ui-bar">
              <i />
              <span>Teacher planning · Unit draft</span>
              <em>For review</em>
            </div>
            <div className="vf-ui-body">
              <div className="vf-ui-row d-red">
                <i />
                <span>
                  <b>Fractions · Week three</b>
                  <small>Three practice sets by readiness, one exit ticket, one letter home</small>
                </span>
                <span className="vf-ui-pill">Draft</span>
              </div>
              <div className="vf-ui-row d-green">
                <i />
                <span>
                  <b>Tutoring assistant</b>
                  <small>Practice set two opened to students after school, with hints, not answers</small>
                </span>
                <span className="vf-ui-pill">Linked</span>
              </div>
            </div>
          </div>
          <p className="vf-ad-copy" style={{ marginTop: 30, fontSize: 19, lineHeight: 1.56 }}>
            Built for the people who already carry a school: teachers, counselors, front offices
            and families. Fortiora Campus does the first draft and keeps the record. People make
            the call.
          </p>
          <div className="vf-chips">
            <span className="d-yellow">Attendance</span>
            <span className="d-green">Tutoring</span>
            <span className="d-blue">Families</span>
            <span className="d-red">Planning</span>
          </div>
          <div className="vf-ad-foot" style={{ marginTop: "auto" }}>
            <div>
              <Lockup h={64} />
              <p>
                <b>Hello@thefortiora.com</b> · thefortiora.com
                <br />
                Fortiora Group LLC · Sheridan, Wyoming
                <br />
                An advertisement by the publisher of PrimeCrest
              </p>
            </div>
            <img className="vf-qr" src="/brand/qr-fortiora.png" alt="Scan to reach Fortiora Group" />
          </div>
          <Folio leaf={22} section="Advertisement" deck="blue" />
        </div>
      </article>

      {/* ============================================== 23 · BACK COVER */}
      <NovemberBack scope="vf" vol="XV" />
    </>
  );
}
