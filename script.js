// The 6 High-Converting Post Archetypes
const posts = [
  {
    id: 1,
    tag: "Contrarian Take",
    modalTitle: "The $11,200/mo Dashboard Trap", 
    imagePath: "Contrarian-Take.png", // Your screenshot filename here
    newHook: "Your startup does not need a data warehouse. Here's why.",
    before: "Okay so here's the thing, and I know this is going to annoy people. Your startup does not need a data warehouse. Right? Under five million ARR, you don't. I don't care what the vendor says. Reason one: your data is tiny. Most B2B SaaS companies at that stage have like, what, under two hundred gigs of production data. A Postgres read replica handles that for three hundred and ten dollars a month. Three ten. That's it. Reason two: it's not the warehouse that kills you, it's the pipeline. At Tracehound we built the whole thing, Snowflake, Fivetran, the works, six weeks of work, eleven thousand two hundred a month. Eleven two. And then, okay, so, reason three, and this is the big one, it's stale. You know? Twenty-four hours stale. Your read replica is two seconds behind. Two seconds versus a full day. Right? So we had seven dashboards and three of them were flat out wrong because a connector quietly dropped rows after a schema change. Three out of seven. We were spending, like, fifteen, twenty hours a month just keeping syncs alive. Some months twenty-five. We ripped it out. Read replica. Three hundred and ten a month. Zero new hires. Oh, and unrelated, I've been watching F1 race highlights at one in the morning and now I can't sleep, so that's my life. Anyway. Build the replica. Ship the query. Stop buying dashboards about your dashboards.",
    after: "Your startup does not need a data warehouse.\n\nHere's the thing. Under $5M ARR, you don't. Right?\n\nReason one: your data is tiny.\n\nMost B2B SaaS companies at that stage have under 200 GB of production data.\n\nA Postgres read replica handles that for $310/month. Three ten. That's it.\n\nReason two: it's not the warehouse that kills you. It's the pipeline.\n\nAt Tracehound we built the whole thing. Snowflake, Fivetran, the works.\n\nSix weeks of work. $11,200/month. Eleven two.\n\nReason three, and this is the big one: it's stale. Right?\n\nTwenty-four hours stale. Your read replica is two seconds behind.\n\nTwo seconds versus a full day.\n\nWe had 7 dashboards. 3 of them were flat out wrong because a connector quietly dropped rows after a schema change.\n\nThree out of seven.\n\nWe were spending 15-20 hours a month just keeping syncs alive.\n\nWe ripped it out. Read replica. $310/month. 0 new hires.\n\nStop buying dashboards about your dashboards.",
    breakdown: "Filtered out the sleep-deprived F1 tangent and structured the founder's rant into a brutal, ranked takedown of modern data stacks. Weaponized their habit of repeating numbers to contrast the $11,200 enterprise pipeline against the $310 pragmatic solution."
  },
  {
    id: 2,
    tag: "The Expensive Mistake",
    modalTitle: "$18,600 AWS Database Post-Mortem", 
    imagePath: "The-Expensive-Mistake.png", // Replace with your actual image filename when ready
    newHook: "I tried to save $1,400/month on AWS. It cost me $18,600 and 11 paying customers.",
    before: "Okay, so, honestly, I’m just walking and I’m tired, so this is gonna be messy. Look, it made sense at the time. We had forty paying customers, six of us, seven months of runway, and AWS RDS was like one thousand nine hundred a month. I ran the math and thought, okay, move to self-managed Postgres on EC2, save like one thousand four hundred a month. Engineering analogy: it’s just changing the oil yourself, right? Except I’m not a mechanic. Anyway. March fourteenth, twenty twenty-five. I start a manual upgrade from Postgres fourteen to sixteen. The volume was five hundred gigs. WAL fills it. Backup cron had been dead since February third, IAM key expired, no alert. So the primary corrupts. Downtime was four days, well, like three and a half, almost four. We lost eleven customers. That was eighteen thousand six hundred dollars in revenue. I spent seventy-six engineer hours just trying to restore. Honestly, I don’t know. Also my neighbor’s dog has been barking at 6 a.m. every day, which is unrelated, but I’m just saying. I tried to save one thousand four hundred a month and set fire to eighteen thousand six hundred and eleven customers. Honestly, that’s the most expensive coupon I’ve ever clipped. We moved back to managed Postgres now. PITR, alerts, no manual upgrades. But yeah. It made sense at the time.",
    after: "I tried to save $1,400/month on AWS.\n\nIt cost me $18,600 and 11 paying customers.\n\nWe had 40 paying customers, 6 of us, and 7 months of runway.\n\nAWS RDS was $1,900/month.\n\nI ran the math and thought: move to self-managed Postgres on EC2.\n\nIt's just changing the oil yourself, right?\n\nExcept I'm not a mechanic.\n\nOn March 14, 2025, I ran a manual upgrade from Postgres 14 to 16.\n\nThe volume was 500 GB.\n\nWAL files filled it.\n\nThe backup cron had been dead since February 3.\n\nAn IAM key expired. No alert.\n\nThe primary corrupted.\n\nDowntime was almost 4 days.\n\nWe lost 11 customers.\n\nThat was $18,600 in revenue.\n\nI spent 76 engineer hours just trying to restore.\n\nI tried to save $1,400/month and set fire to $18,600 and 11 customers.\n\nHonestly, that's the most expensive coupon I've ever clipped.\n\nWe moved back to managed Postgres.\n\nPITR. Alerts. No manual upgrades.\n\nBut yeah.\n\nHonestly, I don't know.\n\nIt made sense at the time.",
    breakdown: "Removed the distracted audio tangents and structured the infrastructure failure into a step-by-step technical autopsy. Used heavy white-space to make the timeline of the EC2 crash highly readable on mobile, closing with a definitive architectural lesson for early-stage founders."
  },
 {
    id: 3,
    tag: "Tactical Framework",
    modalTitle: "The 2-Question Build Filter",
    imagePath: "Tactical-Framework.png", // Replace with your actual image filename
    newHook: "I don't build anything until a paying user asks for it in their own words.",
    before: "Okay so, the thing I do, it sounds almost too simple, but I don't build anything until a paying user asks for it in their own words. Like, their words, not mine. If I catch myself paraphrasing what they want, that's a sign I'm about to build the wrong thing. So question one: did a paying user ask for this? Not a free user, not a maybe-user, not someone on Twitter. A paying user. Question two: can I ship a rough version in under four hours? Which is, okay, so think of it like a shelf with only so much space. If it doesn't fit on the shelf, it doesn't go on the shelf. So I ran this for a quarter. Forty-seven requests. Like, almost fifty. Forty-seven. Twelve passed the first question. Nine of those passed the second. So I shipped nine things. Six drove upgrades. Churn went from four point one percent, well, it was four point one, down to two point three. Revenue went from six two to eight four. Monthly. Which is, yeah, that's the whole thing. It's not clever. It's a filter. Oh, my coffee's going cold, one sec. Okay. The one place it completely falls apart is infrastructure. Nobody emails you and says, hey, your database is about to fall over. They just leave. So you have to carve out time for that separately or the whole thing eats itself. And the tricky part is you don't get a request, you don't get a nice clean signal, you just get silence. Which is, that's the worst part. Anyway. That's it. That's the method.",
    after: "I don't build anything until a paying user asks for it in their own words.\n\nIf I catch myself paraphrasing what they want, I'm building the wrong thing.\n\nMy Two-Question Build Test for bootstrapped SaaS:\n\nQuestion 1: Did a PAYING user ask for this?\nNot a free user. Not a maybe-user. Not someone on Twitter.\nA paying user.\n\nQuestion 2: Can I ship a rough version in under 4 hours?\nThink of it like a shelf with limited space.\nIf it doesn't fit on the shelf, it doesn't go on the shelf.\n\nI ran this filter for Q1.\n47 feature requests came in.\n12 passed Question 1.\n9 passed Question 2.\n\nSo I shipped 9 things.\n6 drove upgrades.\nChurn dropped from 4.1% to 2.3%.\nMRR grew from $6,200 to $8,400.\n\nThe one place this filter completely falls apart? Infrastructure.\n\nNobody emails you to say your database is about to fall over. They just leave.\n\nYou have to carve out time for infra separately, because silence is a terrible signal.\n\nFor everything else?\n\nIt's not clever. It's a filter.",
    breakdown: "Converted a rambling audio note into a highly skimmable operational framework. Actively fact-checked the founder's lazy shorthand ('six two to eight four') and translated it into concrete business metrics ($6,200 to $8,400 MRR) to establish supreme authority."
  },
 /* {
    id: 4,
    tag: "Technical Deep Dive",
    modalTitle: "Title",
    imagePath: "Work-in-progress.jpg",
    newHook: "Work in Progress..",
    before: "",
    after: "",
    breakdown: "",
  },
  {
    id: 5,
    tag: "Industry Trend",
     modalTitle: "Title",
    imagePath: "Work-in-progress.jpg",
    newHook: "Work in Progress..",
    before: "",
    after: "",
    breakdown: "",
  },
  {
    id: 6,
    tag: "Culture & Talent",
     modalTitle: "Title",
    imagePath: "Work-in-progress.jpg",
    newHook: "Work in Progress..",
    before: "",
    after: "",
    breakdown: "",
  } */
];

// DOM Elements
const gridContainer = document.getElementById('posts-grid');
const modal = document.getElementById('post-modal');
const closeBtn = document.getElementById('modal-close');

// Inject Cards into the Grid
posts.forEach(post => {
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `
    <div class="card-content">
      <div class="card-header">
        <span class="card-tag">${post.tag}</span>
        <span class="card-action">+ View</span>
      </div>
      
      <!-- Image inserted here -->
      <div class="post-image-container">
        <img src="${post.imagePath}" alt="LinkedIn Post Screenshot" />
      </div>

    </div>
    <h3 class="card-hook heading-font">"${post.newHook}"</h3>
  `;
  
  card.addEventListener('click', () => openModal(post));
  gridContainer.appendChild(card);
});

// Modal Logic
function openModal(post) {
  document.getElementById('modal-tag').textContent = post.tag;
  document.getElementById('modal-title').textContent = post.modalTitle;
  
  // We removed the context text from the card, so we can hide it in the modal or repurpose it
  document.getElementById('modal-context').textContent = "Transformation Breakdown";
  
  document.getElementById('modal-before').textContent = post.before;
  document.getElementById('modal-after').textContent = post.after;
  document.getElementById('modal-breakdown').textContent = post.breakdown;

  modal.showModal();
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modal.close();
  document.body.style.overflow = 'auto';
}

closeBtn.addEventListener('click', closeModal);

modal.addEventListener('click', (e) => {
  const dialogDimensions = modal.getBoundingClientRect();
  if (
    e.clientX < dialogDimensions.left ||
    e.clientX > dialogDimensions.right ||
    e.clientY < dialogDimensions.top ||
    e.clientY > dialogDimensions.bottom
  ) {
    closeModal();
  }
});