const cvFacts = {
  name: "Asmaa Gaber",
  phone: "01121765706",
  email: "asmagaber309@gmail.com",
  location: "Helwan",
  education: "Bachelor of Arts, Faculty of Arts, Fayoum University"
};

const experiences = [
  {
    role: "Content Writer",
    company: "Content writing role listed in the CV",
    period: "Verified from CV - no date stated",
    bullets: ["Created written content.", "Organized files and content materials.", "Supported customer satisfaction and negotiation through clear communication."]
  },
  {
    role: "Content Designer",
    company: "Content design role listed in the CV",
    period: "Verified from CV - no date stated",
    bullets: ["Specialized in Canva-based content design.", "Designed images for posts and social media communication.", "Supported digital account and social media content execution."]
  },
  {
    role: "Content Writer Trainee",
    company: "SocialZ",
    period: "Previous work listed in the CV",
    bullets: ["Worked on content writing training with SocialZ.", "Developed practical social media content awareness."]
  },
  {
    role: "Content Writer and Marketer",
    company: "Sou Store",
    period: "Previous work listed in the CV",
    bullets: ["Created marketing content for Sou Store.", "Supported content and marketing communication."]
  },
  {
    role: "Content Writer and Marketer",
    company: "Saed Hammad for Furniture",
    period: "Previous work listed in the CV",
    bullets: ["Created content for a furniture-focused brand.", "Supported marketing messages for furniture and interior-related communication."]
  }
];

const skills = [
  ["Content Writing", 95], ["Copywriting", 90], ["Content Creation", 94], ["Social Media Marketing", 90],
  ["SEO Writing", 84], ["Marketing Strategy", 86], ["Storytelling", 91], ["Research", 85], ["Branding", 84], ["Customer Service", 88]
];

const samples = [
  {
    title: "Content Career Awareness Post",
    category: "Educational Content",
    type: "Social media educational post",
    link: "https://www.facebook.com/share/p/18nzFjdfnX/",
    summary: "A beginner-friendly awareness post explaining the difference between content writing, content creation, and copywriting.",
    content: `I want to work as a Content Writer or Content Creator, but I do not know where to start.

Wait a second. Do you want to start immediately without understanding the difference between the roles?

There is no problem with starting, but you first need to understand the difference so you can identify where your strongest skills fit.

Here is the simple breakdown:

Copywriter: writes persuasive content that attracts attention, touches emotions, and encourages people to buy or take action.

Content Creator: thinks, plans, and creates new ideas. A creator can build a marketing direction, develop concepts, and shape content that attracts customers and keeps them engaged.

Content Writer: focuses on writing clear content based on a brief or topic. The role is built around wording, structure, clarity, and delivering the needed message.

The takeaway: each role is different and valuable. The important step is to understand your skills, choose the right path, and keep developing your writing and marketing mindset.`
  },
  {
    title: "SEO & Keyword Education Post",
    category: "SEO Content Writing",
    type: "Educational SEO post",
    link: "https://www.facebook.com/share/p/1Xy1csKwPX/",
    summary: "A practical post introducing SEO basics and keyword placement for new content writers.",
    content: `A job post says: Content Writer needed to write according to SEO standards.

What does that mean?

SEO stands for Search Engine Optimization. It means improving content so search engines can understand it and users can find it.

Types of keywords:

Short-tail keywords: short and broad search terms, such as marketing or writing.

Long-tail keywords: longer and more specific search phrases, such as best content marketing methods for small businesses.

Where should keywords appear?

- Main title / H1
- Introduction, especially the first part of the article
- Subheadings such as H2 and H3
- The body of the article
- Meta description
- URL when possible
- Image alt text
- Conclusion

Important note: do not force keywords into every sentence. Keywords should feel natural. Overusing them can make the writing weak and may hurt the content instead of helping it.`
  },
  {
    title: "Majakka Interior Design Campaign",
    category: "Advertising Copywriting",
    type: "Social media video campaign",
    link: "https://www.facebook.com/share/v/1HAVDiU46X/",
    summary: "A conversion-focused advertising concept for an interior design service with a before-and-after showcase.",
    beforeAfter: true,
    content: `Your home is one of the most important spaces in your life.

Majakka makes the message simple: you bring the house, and the team brings the design vision.

The campaign highlights a complete interior design journey, from understanding the client's taste to choosing colors, materials, furniture, and execution details.

Key message:

A beautiful home is not only about decoration. It is about comfort, identity, and a design that reflects the people who live in it.

Campaign focus:
- Interior design service awareness
- Transformation storytelling
- Before-and-after impact
- Trust-building copy
- Visual proof through video execution`
  },
  {
    title: "Argan Body Bundle Campaign",
    category: "Product Marketing",
    type: "Product launch copy",
    link: "https://www.facebook.com/share/p/1E8oTFi4nL/",
    summary: "Product marketing copy for a body care bundle using benefit-led messaging and a limited-offer structure.",
    content: `Your body deserves a care routine that feels soft, natural, and easy to love.

The Argan Body Bundle brings together body care essentials in one simple routine designed for everyday self-care.

Campaign message:

A body care bundle is not just a group of products. It is a complete experience that helps the customer feel refreshed, confident, and cared for.

Copy direction:
- Introduce the bundle clearly
- Highlight the value of a complete routine
- Focus on softness, care, and confidence
- Use warm product marketing language
- Encourage customers to order while the offer is available`
  },
  {
    title: "Argan Skin Bundle Campaign",
    category: "Product Copywriting",
    type: "Beauty product copy",
    link: "https://www.facebook.com/share/p/18NjopGgCk/",
    summary: "Beauty copywriting for a skincare bundle positioned as a complete and simple routine.",
    content: `The skincare routine your skin has been waiting for.

The Argan Skin Bundle is positioned as a complete care set that brings the main steps of a routine together in one place.

Campaign message:

Great skincare communication should feel clear, soft, and trustworthy. The copy focuses on making the routine easy to understand and emotionally appealing.

Copy direction:
- Present the bundle as a complete solution
- Focus on daily care and consistency
- Use gentle beauty language
- Highlight ease, confidence, and visible routine value
- End with a direct purchase invitation`
  },
  {
    title: "Medical Awareness Campaign",
    category: "Healthcare Marketing",
    type: "Medical awareness content",
    link: "https://www.facebook.com/share/1EUSk1ZKZe/",
    summary: "Healthcare marketing content written with clarity, trust, and patient-centered communication.",
    content: `Health communication needs to be clear, calm, and trustworthy.

This medical awareness campaign focuses on helping the audience understand the importance of checking, following up, and choosing reliable healthcare support.

Campaign message:

Your health is valuable, and awareness is the first step toward better decisions.

Content direction:
- Explain the healthcare message in simple language
- Build trust through calm and professional wording
- Avoid fear-based communication
- Encourage follow-up and responsible action
- Keep the audience's comfort and clarity at the center`
  },
  {
    title: "Zero Fat Gym Event Campaign",
    category: "Event Marketing",
    type: "Fitness event campaign",
    link: "https://www.facebook.com/share/19E587npXm/",
    summary: "Energetic event copy designed to create urgency, excitement, and community participation.",
    content: `Event of the year at Zero Fat Gym.

The campaign is built around movement, energy, and motivation. It invites people to stop waiting and start taking action toward a healthier lifestyle.

Event highlights:
- Fitness challenges
- Exciting competitions
- Valuable prizes
- Trainer support
- Nutrition guidance
- A motivating gym community

Campaign message:

This is not only a gym event. It is a chance to start, restart, and feel the energy of a supportive fitness space.

The tone is bold, direct, and action-driven.`
  },
  {
    title: "Lucky Day Campaign",
    category: "Promotional Campaign",
    type: "Promotional event post",
    link: "https://www.facebook.com/share/1919D3goGw/",
    summary: "A promotional campaign concept using surprise, prizes, urgency, and participation mechanics.",
    content: `Lucky Day at Zero Fat Gym.

The campaign creates a sense of excitement around one special day filled with surprises, rewards, and limited-time opportunities.

Campaign structure:
- Announce the lucky day clearly
- Build curiosity around prizes
- Explain how people can participate
- Create urgency with a one-day-only message
- Connect the promotion to the gym's energetic brand voice

Possible prizes highlighted in the concept:
- Free membership opportunities
- Personal training sessions
- Sports nutrition products
- Exclusive sportswear
- Surprise giveaways

Message direction:

Today could be your lucky day. Join, participate, and be ready for the surprise.`
  },
  {
    title: "Gym Opening Event Promotion",
    category: "Event Marketing",
    type: "Opening event promotion",
    link: "https://www.facebook.com/share/p/1DpoH2xMNH/",
    summary: "Launch copy for a gym opening event focused on excitement, offers, and first-visitor motivation.",
    content: `Grand opening announcement for Zero Fat Gym.

The campaign announces the official opening with an energetic tone and a clear invitation to visit, try, and join.

Opening event ideas:
- Free equipment trial
- Introductory training support
- Launch offers
- Gifts for early visitors
- A motivating first impression for new members

Campaign message:

The wait is over. A new fitness experience is ready, and the audience is invited to be part of the first day.

Copy direction:
- High-energy opening tone
- Clear benefits of joining
- Direct call to visit or register
- Community and motivation as emotional hooks`
  },
  {
    title: "Girls Bazaar Campaign",
    category: "Community Marketing",
    type: "Community event campaign",
    link: "https://www.facebook.com/share/p/196X4Egpog/",
    summary: "Community marketing copy for a women-focused bazaar event with lifestyle, shopping, and experience-led messaging.",
    content: `Girls Bazaar is positioned as a special community day built around shopping, beauty, creativity, and shared experiences.

Campaign message:

A bazaar can be more than a place to buy things. It can be a day for connection, self-expression, and discovering local brands.

Content direction:
- Highlight fashion, accessories, beauty, handmade products, food, and activities
- Create a friendly and exciting event tone
- Encourage visitors to reserve or attend
- Focus on the experience, not only the products
- Make the audience feel that the event was designed for them`
  },
  {
    title: "Content Bites With Asma",
    category: "LinkedIn Thought Leadership",
    type: "LinkedIn personal branding post",
    link: "https://www.linkedin.com/posts/asma-gaber-b0a52a279_contentmarketing-personalbranding-digitalmarketing-share-7474627144615165952-pYUW/",
    linkedin: true,
    summary: "A premium LinkedIn-style thought leadership card about content marketing and personal branding.",
    content: `Content Bites With Asma

Content is not the final goal. Content is the bridge.

Many people think content is only about posting, writing, or publishing. But strong content is a tool that connects a person, brand, or business with the right audience.

Good content can:
- Build a real relationship with the audience
- Deliver a message clearly
- Support marketing goals
- Strengthen personal branding
- Turn ideas into trust

The question should not only be: what should I post?

The better question is: what should this content achieve?

When the goal is clear, the message becomes stronger.

#ContentMarketing #PersonalBranding #DigitalMarketing`
  }
];

const proof = [
  ["Content Categories Worked In", ["Educational content", "SEO education", "Advertising copy", "Product marketing", "Event promotion", "LinkedIn thought leadership"]],
  ["Marketing Niches", ["Personal branding", "Social media campaigns", "Beauty and skincare", "Fitness events", "Healthcare awareness", "Interior design messaging"]],
  ["Industries Served", ["Furniture", "E-commerce", "Interior design", "Beauty products", "Healthcare", "Fitness and community events"]]
];

const $ = (selector, context = document) => context.querySelector(selector);
const $$ = (selector, context = document) => [...context.querySelectorAll(selector)];

function scrollToId(id){
  const el = document.getElementById(id);
  if(el) el.scrollIntoView({behavior:'smooth', block:'start'});
}

function initTheme(){
  const stored = localStorage.getItem('asmaa-theme');
  if(stored) document.documentElement.dataset.theme = stored;
  $('#themeToggle').addEventListener('click', () => {
    const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    localStorage.setItem('asmaa-theme', next);
  });
}

function initNavigation(){
  const header = $('#siteHeader');
  const menu = $('#menuToggle');
  const links = $('#navLinks');
  const navLinks = $$('.nav-link');

  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 30);
    $('#backToTop').classList.toggle('show', window.scrollY > 650);
  }, {passive:true});

  menu.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    menu.setAttribute('aria-expanded', String(open));
  });

  $$('[data-scroll]').forEach(link => link.addEventListener('click', (event) => {
    event.preventDefault();
    scrollToId(link.dataset.scroll);
    links.classList.remove('open');
    menu.setAttribute('aria-expanded', 'false');
  }));

  const sections = navLinks.map(a => document.getElementById(a.dataset.scroll)).filter(Boolean);
  const activeObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        navLinks.forEach(a => a.classList.toggle('active', a.dataset.scroll === entry.target.id));
      }
    });
  }, {rootMargin:'-40% 0px -55% 0px', threshold:0});
  sections.forEach(section => activeObserver.observe(section));

  $('#backToTop').addEventListener('click', () => scrollToId('home'));
}

function renderTimeline(){
  $('#timeline').innerHTML = experiences.map(item => `
    <article class="timeline-item reveal">
      <span class="timeline-dot" aria-hidden="true"></span>
      <div class="timeline-card">
        <p class="eyebrow">${item.period}</p>
        <h3>${item.role}</h3>
        <div class="timeline-company">${item.company}</div>
        <ul>${item.bullets.map(b => `<li>${b}</li>`).join('')}</ul>
      </div>
    </article>`).join('');
}

function renderSkills(){
  $('#skillsGrid').innerHTML = skills.map(([name, value]) => `
    <article class="skill-card reveal">
      <div class="skill-top"><span class="skill-name">${name}</span><span class="skill-percent">${value}%</span></div>
      <div class="skill-track" aria-hidden="true"><div class="skill-fill" data-width="${value}%"></div></div>
    </article>`).join('');
}

function renderSamples(list = samples){
  const grid = $('#samplesGrid');
  grid.innerHTML = list.map((sample, index) => `
    <article class="sample-card reveal ${sample.linkedin ? 'linkedin-card' : ''}" data-index="${index}">
      <button class="sample-head" type="button" aria-expanded="false">
        <div class="sample-meta"><span class="tag">${sample.category}</span><span class="sample-plus" aria-hidden="true">+</span></div>
        <h3>${sample.title}</h3>
        <p>${sample.summary}</p>
      </button>
      <div class="sample-body">
        <div class="sample-inner">
          <div class="sample-content">${sample.content}</div>
          ${sample.beforeAfter ? `<div class="before-after" aria-label="Before and after placeholders">
            <div class="placeholder"><strong>Before Execution Image Placeholder</strong><span>Replace with the original project visual.</span></div>
            <div class="placeholder"><strong>After Execution Image Placeholder</strong><span>Replace with the final project visual.</span></div>
          </div>
          <p class="sample-content"><strong>Short project description:</strong> A transformation-led interior design campaign that uses before-and-after storytelling to make the service value immediately visible.</p>` : ''}
          <div class="sample-actions">
            <a class="source-link" href="${sample.link}" target="_blank" rel="noopener noreferrer">View Source</a>
            <span class="project-type">Project type: ${sample.type}</span>
            ${sample.beforeAfter ? `<a class="source-link" href="${sample.link}" target="_blank" rel="noopener noreferrer">Video Link</a>` : ''}
          </div>
        </div>
      </div>
    </article>`).join('');
  bindSampleCards();
  initReveal();
}

function bindSampleCards(){
  $$('.sample-card').forEach(card => {
    const btn = $('.sample-head', card);
    const body = $('.sample-body', card);
    btn.addEventListener('click', () => {
      const open = card.classList.toggle('open');
      btn.setAttribute('aria-expanded', String(open));
      body.style.maxHeight = open ? `${body.scrollHeight}px` : '0px';
    });
  });
}

function initSampleSearch(){
  $('#sampleSearch').addEventListener('input', event => {
    const q = event.target.value.trim().toLowerCase();
    const filtered = samples.filter(s => [s.title,s.category,s.summary,s.content,s.type].join(' ').toLowerCase().includes(q));
    renderSamples(filtered);
  });
}

function renderProof(){
  $('#proofGrid').innerHTML = proof.map(([title, items]) => `
    <article class="proof-card reveal"><h3>${title}</h3><ul>${items.map(i => `<li>${i}</li>`).join('')}</ul></article>`).join('');
}

let revealObserver;
function initReveal(){
  if(revealObserver) revealObserver.disconnect();
  revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('in-view');
        if(entry.target.classList.contains('skill-card')){
          const fill = entry.target.querySelector('.skill-fill');
          if(fill) fill.style.width = fill.dataset.width;
        }
        revealObserver.unobserve(entry.target);
      }
    });
  }, {threshold:.14});
  $$('.reveal').forEach(el => revealObserver.observe(el));
}

function initContactForm(){
  $('#contactForm').addEventListener('submit', event => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent(data.get('subject') || 'Portfolio inquiry');
    const body = encodeURIComponent(`Name: ${data.get('name')}\nEmail: ${data.get('email')}\n\n${data.get('message')}`);
    window.location.href = `mailto:${cvFacts.email}?subject=${subject}&body=${body}`;
    $('#formNote').textContent = 'Your email app has been opened with the message details.';
  });
}

function init(){
  document.documentElement.dataset.theme = localStorage.getItem('asmaa-theme') || 'light';
  $('#year').textContent = new Date().getFullYear();
  initTheme();
  initNavigation();
  renderTimeline();
  renderSkills();
  renderSamples();
  renderProof();
  initSampleSearch();
  initContactForm();
  initReveal();
}

document.addEventListener('DOMContentLoaded', init);
