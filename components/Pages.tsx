import React, { useState, useEffect } from 'react';
import { IconSparkles, IconDocument, IconArrowRight, IconArrowLeft, IconUsers, IconBook, IconSchool, IconAward, IconDownload, IconPlay } from './Icons';
import { Avatar, Cover, Media, PageHeader, Placeholder, SectionHeading } from './ui';

const BackButton: React.FC<{ onClick: () => void; children: React.ReactNode }> = ({ onClick, children }) => (
  <button type="button" onClick={onClick} className="link mb-8">
    <IconArrowLeft className="h-4 w-4" />
    {children}
  </button>
);

export const AboutUsPage: React.FC = () => (
  <>
    <PageHeader
      title="About Us"
      lead="Sensix is a global innovation community dedicated to fostering technology, creativity, and sustainable growth for future generations."
    />

    {/* Introduction */}
    <section className="section">
      <div className="container-page grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="space-y-5 text-lg leading-relaxed text-ink-muted lg:col-span-7">
          <p>
            <strong className="font-semibold text-ink">Sensix</strong> was founded on the principle of collaborative growth and formed upon the motto of <em>"Innovate, Connect, Grow"</em>.
          </p>
          <p>
            It endeavors to cater to the needs of the emerging digital community in order to create an educationally conducive and more enabling environment among young professionals and students. The Organization is headquartered at <strong className="font-semibold text-ink">Sensix Tower, Innovation District, New York, NY 10001, USA</strong>.
          </p>
        </div>
        <aside className="card self-start p-6 md:p-8 lg:col-span-4 lg:col-start-9">
          <h2 className="title-card">Quick Facts</h2>
          <dl className="mt-4 divide-y divide-line">
            {[
              ['Established', '2010'],
              ['Headquarters', 'New York, USA'],
              ['Motto', 'Innovate, Connect, Grow'],
            ].map(([term, value]) => (
              <div key={term} className="py-3">
                <dt className="meta">{term}</dt>
                <dd className="font-display text-xl font-semibold tracking-tight">{value}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </div>
    </section>

    {/* Initiatives summary */}
    <section className="section border-y border-line bg-surface">
      <div className="container-page">
        <SectionHeading
          title="Our Initiatives"
          lead="Discover the various programs and projects through which Sensix serves the educational needs of our community."
        />
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {[
            { title: 'Sensix Foundation', sub: '500+ startups supported', icon: IconBook },
            { title: 'Sensix Academy', sub: 'Est. 2012', icon: IconSchool },
            { title: 'Tech Education Initiative', sub: 'Since 2015', icon: IconSparkles },
            { title: 'Innovation Awards', sub: 'Annual event', icon: IconAward },
            { title: 'Global Outreach', sub: 'Multiple initiatives', icon: IconUsers },
          ].map(({ title, sub, icon: Icon }) => (
            <li key={title} className="card flex flex-col p-5">
              <span className="flex h-11 w-11 items-center justify-center rounded-control bg-brand-soft text-brand">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="title-card mt-8 text-lg">{title}</h3>
              <p className="meta mt-1">{sub}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>

    {/* Comprehensive overview */}
    <section className="section">
      <div className="container-page">
        <SectionHeading title="Comprehensive Overview of Our Work" />

        <div className="border-t-2 border-ink">
          <article className="grid gap-3 border-b border-line py-8 md:grid-cols-12 md:gap-8 md:py-10">
            <h3 className="font-display text-2xl font-semibold tracking-tight md:col-span-4">Sensix Foundation</h3>
            <p className="max-w-[68ch] text-ink-muted md:col-span-8">
              The Sensix Foundation was founded in 2010 to support 'promising yet needy' innovators who qualify for professional acceleration among its members. The trust evolved as an auxiliary of Sensix and was renamed as Sensix Foundation Trust (SFT) in 2016. It is managed by a democratically elected Board of Governors for a term of three years from different walks of life who have ardent interest in the welfare of students. The trust fund is sourced from voluntary donations from its Patrons, Emeritus, Life Members, Members and other interested individuals.
            </p>
          </article>

          <article className="grid gap-3 border-b border-line py-8 md:grid-cols-12 md:gap-8 md:py-10">
            <h3 className="font-display text-2xl font-semibold tracking-tight md:col-span-4">Sensix Academy</h3>
            <p className="max-w-[68ch] text-ink-muted md:col-span-8">
              Sensix Academy is a premier institution established in the year 2012. Upon its inception the academy was set up with the aim of attending to the educational needs of the children who were looking for advanced technical skills. The academy, in its present state, serves disadvantaged students with full scholarships in its residential educational programme.
            </p>
          </article>

          <article className="grid gap-3 border-b border-line py-8 md:grid-cols-12 md:gap-8 md:py-10">
            <h3 className="font-display text-2xl font-semibold tracking-tight md:col-span-4">Innovation Awards</h3>
            <div className="max-w-[68ch] text-ink-muted md:col-span-8">
              <p>
                Innovation Awards is an annual activity of Sensix where various meritorious awards are given away to recognize, encourage and honor distinguished academic and professional achievements. The award is given away on January 15 every year along with the commemoration of the Organization's Foundation Day.
              </p>
              <ul className="mt-5 space-y-3">
                <li className="border-l-2 border-brand pl-4"><strong className="font-semibold text-ink">Visionary Awards:</strong> Donated by individual, families and organisations awarded to academic achievers ranging from toppers in Secondary to Graduate and Post Graduate examinations.</li>
                <li className="border-l-2 border-brand pl-4"><strong className="font-semibold text-ink">Sensix Meritorious Awards:</strong> Given by Sensix General Headquarters to meritorious academic achievers securing top ranks.</li>
                <li className="border-l-2 border-brand pl-4"><strong className="font-semibold text-ink">Sensix Honours Awards:</strong> Given to distinguished professionals in the field of education, technology, social work and others who have significant impact in the society.</li>
              </ul>
            </div>
          </article>

          <article className="grid gap-3 border-b border-line py-8 md:grid-cols-12 md:gap-8 md:py-10">
            <h3 className="font-display text-2xl font-semibold tracking-tight md:col-span-4">Other Projects & Activities</h3>
            <p className="max-w-[68ch] text-ink-muted md:col-span-8">
              Major Activities Undertaken by Sensix Career guidance seminars and workshops are organized by the Organization annually sponsored by tech giants and well-wishers. They are important activities spearheaded by the Education Department. Resource persons for the seminars and workshops are mobilized among intellectual circle as well as within the community. Various free coding bootcamps are conducted from time to time for the welfare of the student community.
            </p>
          </article>
        </div>
      </div>
    </section>

    {/* Philosophy */}
    <section className="on-dark section bg-ink text-white">
      <div className="container-page">
        <div className="grid gap-12 border-b border-white/15 pb-14 lg:grid-cols-2 lg:gap-20 md:pb-20">
          <div>
            <h2 className="text-sm font-semibold text-white/70">Vision Statement</h2>
            <h3 className="mt-2 font-display text-3xl font-bold tracking-tight text-white">Global Vision</h3>
            <p className="mt-5 text-lg leading-relaxed text-white/85">
              "Our vision is to foster the development of a 'Knowledge Society.' By this is meant that, in accordance with advancements in global society, our learners should strive with integrity and diligence in all their engagements, standing for what is right and true, training themselves in noble pursuits, and on this basis nurture a society that is harmonious, virtuous, and congenial."
            </p>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-white/70">Mission Statement</h2>
            <h3 className="mt-2 font-display text-3xl font-bold tracking-tight text-white">Core Objectives</h3>
            <ol className="mt-5 space-y-4 text-white/85">
              {[
                'Empower, mentor, and nurture the development of young individuals and students, equipping them to evolve into exceptional human resources who uphold unwavering integrity and contribute positively to society.',
                'Create inclusive opportunities for all to savour the dignity of life while encouraging mutual respect and peaceful co-existence.',
                'Safeguard our cultural heritage and time-honoured values, creatively adapted to contemporary times.',
                'Cultivate and mentor community leaders while nurturing leadership skills that span the realms of trade, commerce, and governance.',
              ].map((objective, i) => (
                <li key={i} className="grid grid-cols-[2.25rem_1fr]">
                  <span className="font-semibold text-white">({['i', 'ii', 'iii', 'iv'][i]})</span>
                  <span>{objective}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="grid gap-12 py-14 md:grid-cols-2 md:py-20 lg:gap-20">
          <div>
            <h3 className="font-display text-2xl font-semibold tracking-tight text-white">Our Commitments</h3>
            <ol className="mt-5 divide-y divide-white/15 border-y border-white/15 text-white/85">
              {[
                "To be a 'think tank' and a credible source of information for the youth and students.",
                'To conduct social audit of education sector.',
                'To facilitate development of educational infrastructure in our areas.',
                'To honour and safeguard our aged-old traditional practices, culture and values.',
              ].map((commitment, i) => (
                <li key={i} className="grid grid-cols-[2.25rem_1fr] py-4">
                  <span className="font-semibold text-white">({['i', 'ii', 'iii', 'iv'][i]})</span>
                  <span>{commitment}</span>
                </li>
              ))}
            </ol>
          </div>

          <div>
            <h3 className="font-display text-2xl font-semibold tracking-tight text-white">Our Core Values</h3>
            <ul className="mt-5 space-y-3">
              {[
                ['Truth and commitment', 'Integrity in all actions.'],
                ['Love and Respect', 'Community first approach.'],
                ['Selfless Service and Altruism', 'Service beyond self.'],
              ].map(([value, note]) => (
                <li key={value} className="rounded-control bg-white/10 px-5 py-4">
                  <p className="font-semibold text-white">{value}</p>
                  <p className="text-sm text-white/70">{note}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="rounded-card bg-brand px-6 py-10 text-brand-contrast md:px-12 md:py-14">
          <p className="text-sm font-semibold opacity-90">Our Motto</p>
          <p className="mt-2 font-display text-[clamp(2.25rem,6vw,4.5rem)] font-extrabold leading-none tracking-[-0.04em]">
            Innovate, Connect, Grow!
          </p>
          <p className="mt-4 text-lg opacity-90">Learn, Labour and Serve!</p>
        </div>
      </div>
    </section>

    {/* Committees */}
    <section className="section">
      <div className="container-page">
        <SectionHeading title="Sensix Committees" />

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h3 className="border-b-2 border-ink pb-3 font-display text-xl font-semibold tracking-tight">General Headquarters</h3>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {[
                ['John Doe', 'General President'],
                ['Jane Smith', 'Vice President (Administration)'],
              ].map(([name, role]) => (
                <li key={name} className="card flex items-center gap-4 p-5">
                  <Avatar name={name} className="h-14 w-14 text-base" />
                  <div>
                    <h4 className="title-card text-lg">{name}</h4>
                    <p className="text-sm font-semibold text-brand">{role}</p>
                  </div>
                </li>
              ))}
            </ul>
            <button type="button" className="link mt-6">
              View All Committees
              <IconArrowRight className="h-4 w-4" />
            </button>
          </div>

          <div className="rounded-card bg-brand-soft p-6 md:p-8">
            <span className="flex h-12 w-12 items-center justify-center rounded-control bg-brand text-brand-contrast">
              <IconUsers className="h-6 w-6" />
            </span>
            <h3 className="title-card mt-6 text-2xl">Organogram of Sensix</h3>
            <p className="mt-2 text-ink-muted">Visualise the structural hierarchy and functional distribution.</p>
            <button type="button" className="btn btn-primary mt-6">
              <IconDownload className="h-4 w-4" />
              Download PDF
            </button>
          </div>
        </div>
      </div>
    </section>

    {/* Preamble */}
    <section className="section border-t border-line bg-surface">
      <div className="container-page">
        <SectionHeading title="Preamble" />

        <div className="grid gap-6 md:grid-cols-2">
          <div className="card p-6 md:p-10">
            <h3 className="title-card">Our Pledge</h3>
            <p className="mt-5 text-lg leading-loose text-ink-muted">"We, the members of Sensix,<br />
            To grow in all fields of knowledge,<br />
            To foster all vocational pursuits,<br />
            To be sincere, diligent and trustworthy,<br />
            Striving for advancement in all fields.<br />
            Without prejudice and with probity,<br />
            To work for the good of Society,<br />
            To be beneficent towards the World;<br />
            To work collectively;<br />
            With <strong className="font-semibold text-ink">Innovate, Connect, Grow</strong> as our motto,<br />
            We hereby adopt this Constitution."</p>
          </div>

          <div className="card p-6 md:p-10">
            <h3 className="title-card">Core Principles</h3>
            <p className="mt-5 text-lg leading-loose text-ink-muted">"We, the members of Sensix<br />
            Having solemnly resolved—<br />
            To grow in all fields of knowledge,<br />
            To grow in all forms of artistic excellence,<br />
            To foster all vocational pursuits,<br />
            To foster good sportsmanship,<br />
            To be sincere, diligent and trustworthy in action,<br />
            To abide by the Almighty;<br />
            To strive for advancement in all fields.<br />
            Without prejudice and with probity,<br />
            To work for the good of Society,<br />
            To be beneficent towards Nation and Country;<br />
            To work collectively;<br />
            With <strong className="font-semibold text-ink">Innovate, Connect, Grow</strong> as our motto,<br />
            For governing the Association,<br />
            We hereby adopt and enact this Constitution."</p>
          </div>
        </div>
      </div>
    </section>
  </>
);

export const HistoryPage: React.FC = () => (
  <>
    <PageHeader title="Our History" section="Organization" lead="From a founding meeting in 2010 to a community that spans continents." />

    <section className="section">
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="title-section">The Genesis</h2>
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-ink-muted">
              <p>
                2010. New York City.
                In an era of digital transformation, a vision was born. Sensix emerged not just as an organisation, but as a movement.
              </p>
              <p>
                With the motto "Innovate, Connect, Grow", our founders laid the first brick of what would become a sanctuary for the global student community.
              </p>
            </div>
          </div>
          <div className="flex min-h-[260px] flex-col justify-between rounded-card bg-brand p-6 text-brand-contrast md:p-10">
            <span className="text-sm font-semibold">Est. MMX</span>
            <span className="font-display text-[clamp(5rem,16vw,11rem)] font-extrabold leading-[0.8] tracking-[-0.06em]">2010</span>
          </div>
        </div>

        {/* Timeline */}
        <h2 className="title-section mt-20 md:mt-28">Milestones</h2>
        <ol className="mt-10 border-l-2 border-line">
          {[
            { year: '2010', title: 'The Awakening', desc: 'Sensix is founded. First President: Michael Scott.' },
            { year: '2015', title: 'The Constitution', desc: 'Adoption of the formal constitution to guide the body.' },
            { year: '2020', title: 'The Voice', desc: 'Launch of the first Sensix Magazine, documenting our stories.' },
            { year: '2025', title: '15th Anniversary', desc: 'A historic celebration of longevity and impact.' }
          ].map((item) => (
            <li key={item.year} className="relative grid gap-2 pb-12 pl-6 last:pb-0 md:grid-cols-[12rem_1fr] md:gap-8 md:pl-10">
              <span aria-hidden="true" className="absolute -left-[7px] top-3 h-3 w-3 rounded-full bg-brand ring-4 ring-paper" />
              <span className="font-display text-4xl font-bold leading-none tracking-tighter text-brand md:text-5xl">{item.year}</span>
              <div>
                <h3 className="font-display text-2xl font-semibold tracking-tight">{item.title}</h3>
                <p className="mt-1 text-lg text-ink-muted">{item.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  </>
);

export const RegistrationPage: React.FC = () => (
  <>
    <PageHeader title="Legal & Compliance" section="Organization" lead="Registration, recognition and audit details for the organisation." />

    <section className="section">
      <div className="container-page">
        <ul className="grid gap-6 lg:grid-cols-3">
          {[
            { label: 'Legal Status', title: 'Incorporation', rows: [['Registration No.', 'US-1107-2010'], ['Authority', 'Secretary of State']] },
            { label: 'Recognition', title: 'Non-Profit Status', rows: [['Registration No.', '501(c)(3)'], ['Jurisdiction', 'IRS']] },
            { label: 'Financial Compliance', title: 'Audited', rows: [['Status', 'CLEARED'], ['Audit Firm', 'Global Audit Partners']] },
          ].map((record) => (
            <li key={record.title} className="card flex flex-col p-6 md:p-8">
              <p className="text-sm font-semibold text-brand">{record.label}</p>
              <h2 className="mt-2 font-display text-3xl font-bold tracking-tight">{record.title}</h2>
              <dl className="mt-8 divide-y divide-line border-t border-line">
                {record.rows.map(([term, value], i) => (
                  <div key={term} className="py-4">
                    <dt className="meta">{term}</dt>
                    <dd className={i === 0 ? 'font-display text-2xl font-semibold tracking-tight text-ink' : 'text-lg text-ink'}>{value}</dd>
                  </div>
                ))}
              </dl>
            </li>
          ))}
        </ul>
      </div>
    </section>
  </>
);

export const ImpactPage: React.FC = () => {
  return (
    <>
      <PageHeader title="Impact & Reach" section="Organization" lead="Where Sensix works, and the scale of the community behind it." />

      {/* Figures */}
      <section className="border-b border-line">
        <dl className="container-page grid divide-y divide-line md:grid-cols-3 md:divide-x md:divide-y-0">
          {[
            ['100k+', 'Community Members'],
            ['500+', 'Active Chapters'],
            ['$10M', 'Funds Raised'],
          ].map(([figure, label], i) => (
            <div key={label} className={`flex flex-col-reverse py-8 md:py-12 ${i === 0 ? 'md:pr-8' : 'md:px-8'}`}>
              <dt className="mt-1 text-ink-muted">{label}</dt>
              <dd className="font-display text-6xl font-extrabold leading-none tracking-[-0.04em] text-brand md:text-7xl">{figure}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Directory */}
      <section className="section">
        <div className="container-page grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div className="space-y-12">
            <div>
              <h2 className="border-b-2 border-ink pb-3 font-display text-xl font-semibold tracking-tight">Headquarters</h2>
              <div className="mt-6">
                <h3 className="font-display text-3xl font-bold tracking-tight">Global Headquarters</h3>
                <p className="mt-1 text-ink-muted">Sensix Tower, New York</p>
              </div>
              <div className="mt-8">
                <h3 className="font-display text-2xl font-semibold tracking-tight">Regional Hubs</h3>
                <ul className="mt-3 divide-y divide-line border-y border-line text-lg">
                  <li className="py-3">Sensix Hub London</li>
                  <li className="py-3">Sensix Hub Singapore</li>
                </ul>
              </div>
            </div>

            <div>
              <div className="flex items-end justify-between border-b-2 border-ink pb-3">
                <h2 className="font-display text-xl font-semibold tracking-tight">Centers</h2>
                <span className="meta">10 Locations</span>
              </div>
              <ul className="mt-6 flex flex-wrap gap-2">
                {[
                  "Berlin", "Tokyo", "Sydney", "Toronto", "Dubai",
                  "Mumbai", "Sao Paulo", "Paris", "Seoul", "Lagos"
                ].map((block) => (
                  <li key={block} className="rounded-full bg-brand-soft px-4 py-2 text-sm font-semibold text-ink">
                    {block}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <div className="flex items-end justify-between border-b-2 border-ink pb-3">
              <h2 className="font-display text-xl font-semibold tracking-tight">University Chapters</h2>
              <span className="meta">7 Locations</span>
            </div>
            <ul className="divide-y divide-line border-b border-line">
              {[
                "Sensix Harvard Chapter",
                "Sensix MIT Chapter",
                "Sensix Stanford Chapter",
                "Sensix Oxford Chapter",
                "Sensix Cambridge Chapter",
                "Sensix Berkeley Chapter",
                "Sensix Yale Chapter"
              ].map((branch) => (
                <li key={branch} className="py-4 text-lg">{branch}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export const AnthemPage: React.FC = () => (
  <>
    <PageHeader title="Sensix Anthem" section="Organization">
      <p className="meta mt-5">Written by: A. Smith</p>
      <button type="button" className="btn btn-primary mt-8">
        <IconPlay className="h-4 w-4" />
        Play Official Recording
      </button>
    </PageHeader>

    <section className="section">
      <div className="container-page">
        <div className="max-w-3xl space-y-12">
          <div className="font-display text-lg font-medium leading-snug tracking-tight text-ink sm:text-2xl md:text-3xl">
            <p>Rising like the morning sun,</p>
            <p>We march together as one.</p>
            <p>Knowledge as our guiding light,</p>
            <p>Shining through the darkest night.</p>
            <p>We build the future with our hands.</p>
          </div>

          <div className="rounded-card bg-brand p-6 text-brand-contrast md:p-10">
            <p className="text-sm font-semibold opacity-90">Chorus</p>
            <p className="mt-3 font-display text-2xl font-extrabold leading-tight tracking-tight sm:text-3xl md:text-5xl">
              INNOVATE, CONNECT, GROW together<br />
              United we stand forever<br />
              SENSIX GLOBAL
            </p>
          </div>

          <div className="space-y-8 font-display text-lg font-medium leading-snug tracking-tight text-ink sm:text-2xl md:text-3xl">
            <p>
              Across the lands our voices ring<br />
              Of hope and peace we proudly sing
            </p>
            <p>
              Let our legacy aspire<br />
              <span className="font-extrabold">SENSIX</span><br />
              Taking humanity higher
            </p>
          </div>
        </div>
      </div>
    </section>
  </>
);

interface Publication {
  id: string;
  type: 'journal' | 'magazine';
  title: string;
  vol: string;
  date: string;
  upload?: string;
  editor?: string;
  description: string;
  toc?: string[];
  /** Optional cover image path. Without it a typographic cover is drawn. */
  cover?: string;
}

const PublicationCover: React.FC<{ pub: Publication; tone?: number }> = ({ pub, tone = 0 }) =>
  pub.type === 'magazine' ? (
    <Cover series="Sensix Annual" title={pub.vol.replace('Vol. ', '')} note={pub.title} tone={tone} src={pub.cover} />
  ) : (
    <Cover series="Sensix Journal" title={pub.title.split(' ')[0]} note={pub.vol} tone={tone} src={pub.cover} />
  );

export const PublicationsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'magazines' | 'journals' | 'bulletins'>('journals');
  const [selectedPub, setSelectedPub] = useState<{ pub: Publication; tone: number } | null>(null);

  const journals: Publication[] = [
    {
      id: 'j1',
      type: 'journal',
      title: 'October 2024',
      vol: 'Volume 12 | No. 3',
      date: '30/10/2024',
      upload: '28/11/2025',
      editor: 'Dr. Emily Blunt',
      description: 'This issue focuses on the socio-economic challenges faced by the global community in the post-pandemic era.',
      toc: ['Editorial Note', 'Impact of Digital Divide on Rural Education', 'The Role of Youth', 'Economic Sustainability'],
    },
    {
      id: 'j2',
      type: 'journal',
      title: 'September 2024',
      vol: 'Volume 12 | No. 2',
      date: '30/09/2024',
      upload: '28/11/2025',
      editor: 'John Smith',
      description: 'A special edition dedicated to the history of innovation.',
      toc: ['From 2010 to Today: A Journey', 'Interview with Founders', 'Statistical Analysis', 'Future Roadmap'],
    },
    {
      id: 'j3',
      type: 'journal',
      title: 'August 2024',
      vol: 'Volume 12 | No. 1',
      date: '30/08/2024',
      upload: '28/11/2025',
      editor: 'Mary Jane',
      description: 'Exploring the intersection of tradition and modernity.',
      toc: ['Cultural Identity in the 21st Century', 'Literature Review', 'Student Welfare Reports', 'Financial Audit'],
    },
    {
      id: 'j4',
      type: 'journal',
      title: 'July 2024',
      vol: 'Volume 11 | No. 6',
      date: '30/07/2024',
      upload: '28/11/2025',
      editor: 'Editorial Board',
      description: 'The mid-year review focusing on academic achievements.',
      toc: ['Meritorious Awardees List', 'Tips for Aspirants', 'Career Guidance', 'Scholarship Report'],
    },
  ];

  const magazines: Publication[] = Array.from({ length: 8 }, (_, i) => ({
    id: `m${i}`,
    type: 'magazine',
    title: `Annual Magazine ${2024 - i}`,
    vol: `Vol. ${15 - i}`,
    date: `Jan ${2024 - i}`,
    description: `The flagship annual publication of Sensix. A comprehensive record of the year's events.`,
    editor: 'Magazine Department',
    toc: ['Presidential Address', 'General Secretary Report', 'Finance Report', 'Literary Section', 'Photo Gallery'],
  }));

  const open = (pub: Publication, tone: number) => {
    setSelectedPub({ pub, tone });
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  // Detail view
  if (selectedPub) {
    const { pub, tone } = selectedPub;
    return (
      <>
        <header className="border-b border-line bg-surface">
          <div className="container-page py-10 md:py-14">
            <BackButton onClick={() => setSelectedPub(null)}>Back to Publications</BackButton>
            <p><span className="chip capitalize">{pub.type}</span></p>
            <h1 className="title-page mt-4">{pub.title}</h1>
            <p className="lead mt-4">{pub.vol}, published {pub.date}</p>
          </div>
        </header>

        <section className="section">
          <div className="container-page grid gap-10 md:grid-cols-[minmax(0,18rem)_1fr] md:gap-16">
            <div className="max-w-[18rem] md:sticky md:top-24 md:self-start">
              <PublicationCover pub={pub} tone={tone} />
            </div>

            <div className="max-w-[68ch]">
              <h2 className="title-card">About this Issue</h2>
              <p className="mt-3 text-lg leading-relaxed text-ink-muted">{pub.description}</p>
              {pub.editor && (
                <p className="mt-4 text-ink-muted">
                  <span className="font-semibold text-ink">Editor:</span> {pub.editor}
                </p>
              )}

              <h2 className="title-card mt-12">Table of Contents</h2>
              {pub.toc ? (
                <ol className="mt-3 divide-y divide-line border-y border-line">
                  {pub.toc.map((item, idx) => (
                    <li key={item} className="grid grid-cols-[2.5rem_1fr] py-3">
                      <span className="tabular-nums text-ink-subtle">{idx + 1}</span>
                      <span className="font-medium text-ink">{item}</span>
                    </li>
                  ))}
                </ol>
              ) : (
                <p className="mt-3 text-ink-muted">Content listing available in PDF.</p>
              )}

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <button type="button" className="btn btn-primary">
                  <IconDownload className="h-4 w-4" />
                  Download PDF
                </button>
                <button type="button" className="btn btn-outline">Read Online</button>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <PageHeader title="Publications" lead="Journals, annual magazines and bulletins published by Sensix." />

      <section className="section pt-8 md:pt-10">
        <div className="container-page">
          <div role="tablist" aria-label="Publication type" className="tablist mb-10">
            {(['magazines', 'journals', 'bulletins'] as const).map((tab) => (
              <button
                key={tab}
                type="button"
                role="tab"
                aria-selected={activeTab === tab}
                onClick={() => setActiveTab(tab)}
                className="tab capitalize"
              >
                {tab}
              </button>
            ))}
          </div>

          <div role="tabpanel" className="min-h-[320px]">
            {activeTab === 'magazines' && (
              <ul className="grid grid-cols-2 gap-x-5 gap-y-8 md:grid-cols-3 lg:grid-cols-4">
                {magazines.map((mag, i) => (
                  <li key={mag.id}>
                    <button type="button" onClick={() => open(mag, i)} className="group block w-full rounded-control text-left">
                      <div className="transition-transform duration-200 group-hover:-translate-y-1">
                        <PublicationCover pub={mag} tone={i} />
                      </div>
                      <span className="mt-3 block font-display text-lg font-semibold tracking-tight group-hover:text-brand">{mag.title}</span>
                      <span className="meta block">{mag.date}</span>
                    </button>
                  </li>
                ))}
              </ul>
            )}

            {activeTab === 'journals' && (
              <ul className="grid gap-5 md:grid-cols-2">
                {journals.map((journal, i) => (
                  <li key={journal.id}>
                    <button
                      type="button"
                      onClick={() => open(journal, i)}
                      className="card group flex h-full w-full flex-col p-6 text-left transition-colors hover:border-brand"
                    >
                      <span className="flex w-full items-center justify-between gap-4">
                        <span className="flex h-11 w-11 items-center justify-center rounded-control bg-brand-soft text-brand">
                          <IconDocument className="h-5 w-5" />
                        </span>
                        <span className="meta tabular-nums">{journal.date}</span>
                      </span>
                      <span className="mt-6 block font-display text-2xl font-semibold tracking-tight">{journal.title}</span>
                      <span className="meta mt-1 block">{journal.vol}</span>
                      <span className="mt-3 block text-ink-muted">{journal.description}</span>
                      <span className="mt-auto flex items-center gap-1.5 pt-6 text-sm font-semibold text-brand">
                        View Issue
                        <IconArrowRight className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-1" />
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            )}

            {activeTab === 'bulletins' && (
              <div className="empty">
                <IconDocument className="h-10 w-10 text-ink-subtle" />
                <p>No recent bulletins uploaded.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

interface BlogPost {
  id: number;
  language: 'english' | 'vernacular';
  category: string;
  title: string;
  excerpt: string;
  author: string;
  role?: string;
  date: string;
  readTime?: string;
  /** Optional image path. Without it a themed placeholder is drawn. */
  image?: string;
  content: string;
}

export const BlogPage: React.FC = () => {
  const [activeLanguage, setActiveLanguage] = useState<'english' | 'vernacular'>('english');
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  // Reset category when language changes to avoid invalid states
  useEffect(() => {
    setActiveCategory('all');
  }, [activeLanguage]);

  const getCategories = () => {
    if (activeLanguage === 'english') {
      return [
        { id: 'all', label: 'All' },
        { id: 'article', label: 'Article' },
        { id: 'tech', label: 'Tech' }
      ];
    } else {
      return [
        { id: 'all', label: 'All' },
        { id: 'story', label: 'Story' },
        { id: 'news', label: 'News' }
      ];
    }
  };

  const categories = getCategories();

  // Post bodies are HTML strings styled by the .article rules in index.css.
  const posts: BlogPost[] = [
    {
      id: 1,
      language: 'english',
      category: 'article',
      title: "The Future of Education in the Digital Era",
      excerpt: "An in-depth look at how remote learning initiatives are reshaping the landscape for students.",
      author: "Liam Thomas",
      role: "Education Secretary",
      date: "Aug 12, 2024",
      readTime: "5 min read",
      content: `
        <p>The rapid evolution of technology has fundamentally transformed the way we approach education. In the context of our districts, this shift presents a unique dichotomy of unprecedented opportunities and significant challenges.</p>
        <h3>Bridging the Divide</h3>
        <p>For decades, students in remote areas have struggled with access to quality learning materials. The digital revolution promises to bridge this gap. With just a smartphone and an internet connection, a student can now access the same lectures as a student in a metropolitan city.</p>
        <blockquote>"Education is not just about filling a bucket, but lighting a fire. Technology is merely the spark."</blockquote>
      `
    },
    {
      id: 2,
      language: 'english',
      category: 'tech',
      title: "AI in Everyday Life",
      excerpt: "How artificial intelligence is helping solve local community problems.",
      author: "Sarah Connor",
      role: "Tech Lead",
      date: "Sep 05, 2024",
      readTime: "3 min read",
      content: `
        <blockquote>"The future is here, it's just not evenly distributed."</blockquote>
        <p>AI is changing everything.</p>
      `
    },
    {
      id: 3,
      language: 'english',
      category: 'article',
      title: "Youth Leadership: A Call to Action",
      excerpt: "Why student politics matters and how young leaders can foster positive change.",
      author: "Tom Holland",
      role: "Social Activist",
      date: "Oct 20, 2024",
      readTime: "7 min read",
      content: "<p>Leadership is often mistaken for authority, but true leadership is about service.</p>"
    }
  ];

  // Filter logic: Must match language AND (if not 'all') match category
  const filteredPosts = posts.filter(post =>
    post.language === activeLanguage &&
    (activeCategory === 'all' || post.category === activeCategory)
  );

  // Detail view
  if (selectedPost) {
    return (
      <article>
        <header className="border-b border-line bg-surface">
          <div className="container-page py-10 md:py-14">
            <BackButton onClick={() => setSelectedPost(null)}>Back to Blog</BackButton>
            <p><span className="chip capitalize">{selectedPost.category}</span></p>
            <h1 className="title-page mt-4 max-w-[20ch]">{selectedPost.title}</h1>

            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
              <div className="flex items-center gap-3">
                <Avatar name={selectedPost.author} />
                <div>
                  <p className="font-semibold text-ink">{selectedPost.author}</p>
                  <p className="meta">{selectedPost.role || 'Contributor'}</p>
                </div>
              </div>
              <div className="border-l border-line pl-8">
                <p className="font-semibold text-ink">{selectedPost.date}</p>
                <p className="meta">{selectedPost.readTime || '5 min read'}</p>
              </div>
            </div>
          </div>
        </header>

        <div className="container-page pt-8 md:pt-12">
          <Media src={selectedPost.image} alt="" seed={selectedPost.id} className="aspect-[16/9] w-full rounded-card md:aspect-[21/9]" />
        </div>

        <div className="container-page grid gap-10 py-12 md:py-16 lg:grid-cols-[1fr_12rem] lg:gap-16">
          <div className="article" dangerouslySetInnerHTML={{ __html: selectedPost.content || '' }}></div>

          <aside className="lg:sticky lg:top-24 lg:self-start">
            <h2 className="font-sans text-sm font-semibold text-ink">Share</h2>
            <div className="mt-2 flex gap-5 lg:flex-col lg:gap-1">
              {['Facebook', 'Twitter', 'LinkedIn'].map((network) => (
                <button key={network} type="button" className="flex min-h-[36px] items-center text-left text-ink-muted underline decoration-ink/20 underline-offset-4 hover:text-brand">
                  {network}
                </button>
              ))}
            </div>
          </aside>
        </div>
      </article>
    );
  }

  const open = (post: BlogPost) => {
    setSelectedPost(post);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <>
      <PageHeader title="Blog" lead="Articles and opinion from members, in English and in the local language." />

      <section className="section pt-8 md:pt-10">
        <div className="container-page">
          <div className="mb-10 flex flex-col gap-4 border-b border-line pb-6 sm:flex-row sm:items-center sm:justify-between">
            {/* Language switcher */}
            <div role="group" aria-label="Language" className="inline-flex self-start rounded-control bg-surface p-1">
              {([['english', 'English'], ['vernacular', 'Local']] as const).map(([id, label]) => (
                <button
                  key={id}
                  type="button"
                  aria-pressed={activeLanguage === id}
                  onClick={() => setActiveLanguage(id)}
                  className={`min-h-[36px] rounded-[6px] px-5 text-sm font-semibold transition-colors ${
                    activeLanguage === id ? 'bg-paper text-ink shadow-sm' : 'text-ink-subtle hover:text-ink'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>

            {/* Category filter */}
            <div role="group" aria-label="Category" className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  aria-pressed={activeCategory === cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className="pill"
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {filteredPosts.length > 0 ? (
            <ul className="grid gap-x-6 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
              {filteredPosts.map((post) => (
                <li key={post.id}>
                  <button type="button" onClick={() => open(post)} className="group flex h-full w-full flex-col rounded-card text-left">
                    <Media src={post.image} alt="" seed={post.id} className="aspect-[16/10] w-full rounded-card" />
                    <span className="mt-5 flex items-center justify-between gap-4 text-sm">
                      <span className="font-semibold capitalize text-brand">{post.category}</span>
                      <span className="text-ink-subtle">{post.date}</span>
                    </span>
                    <span className="mt-2 block font-display text-2xl font-semibold leading-tight tracking-tight group-hover:text-brand">
                      {post.title}
                    </span>
                    <span className="mt-3 block text-ink-muted">{post.excerpt}</span>
                    <span className="meta mt-auto block pt-5">By {post.author}</span>
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <div className="empty">
              <IconBook className="h-10 w-10 text-ink-subtle" />
              <p>No posts available in this section yet.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

interface NewsItem {
  id: number;
  type: string;
  date: string;
  year: string;
  title: string;
  meta: string;
  desc: string;
  content: string;
}

export const NewsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('notice');
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);

  const categories = [
    { id: 'notice', label: 'Notice' },
    { id: 'communique', label: 'Communique' },
    { id: 'obituary', label: 'Obituary' },
    { id: 'office_orders', label: 'Office Orders' }
  ];

  const newsData: NewsItem[] = [
    { id: 1, type: 'notice', date: 'Oct 24', year: '2024', title: "Annual General Assembly Summoning Order", meta: "Ref: SNX/GHQ/GEN/2024-55", desc: "All unit presidents and secretaries are strictly informed to attend the assembly without fail.", content: "<p>Content...</p>" },
    { id: 2, type: 'office_orders', date: 'Oct 15', year: '2024', title: "Appointment of Finance Committee", meta: "Order No: 202/FC/24", desc: "The following members are hereby appointed to the finance audit committee.", content: "<p>Content...</p>" },
    { id: 3, type: 'communique', date: 'Sep 30', year: '2024', title: "Joint Statement on Tech Unity", meta: "Press Release", desc: "A unified stance on the current socio-political developments.", content: "<p>Content...</p>" },
    { id: 5, type: 'notice', date: 'Aug 20', year: '2024', title: "Scholarship Distribution Ceremony", meta: "Education Dept", desc: "Awardees are requested to bring original documents for verification.", content: "<p>Content...</p>" }
  ];

  const filteredNews = newsData.filter(item => item.type === activeTab);

  if (selectedNews) {
    return (
      <article>
        <header className="border-b border-line bg-surface">
          <div className="container-page py-10 md:py-14">
            <BackButton onClick={() => setSelectedNews(null)}>Back to List</BackButton>
            <p><span className="chip">{categories.find(c => c.id === selectedNews.type)?.label}</span></p>
            <h1 className="title-page mt-4 max-w-[20ch]">{selectedNews.title}</h1>
            <p className="lead mt-4">{selectedNews.meta}, {selectedNews.date}, {selectedNews.year}</p>
          </div>
        </header>

        <div className="container-page py-12 md:py-16">
          <div className="article" dangerouslySetInnerHTML={{ __html: selectedNews.content }} />
        </div>
      </article>
    );
  }

  return (
    <>
      <PageHeader title="News & Events" lead="Notices, communiques, obituaries and office orders from the General Headquarters." />

      <section className="section pt-8 md:pt-10">
        <div className="container-page">
          <div role="tablist" aria-label="Category" className="tablist mb-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={activeTab === cat.id}
                onClick={() => setActiveTab(cat.id)}
                className="tab"
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div role="tabpanel" className="min-h-[320px]">
            {filteredNews.length > 0 ? (
              <ul>
                {filteredNews.map((item) => (
                  <li key={item.id} className="border-b border-line">
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedNews(item);
                        window.scrollTo({ top: 0, behavior: 'instant' });
                      }}
                      className="group grid w-full grid-cols-[4.5rem_1fr] items-center gap-x-5 py-7 text-left md:grid-cols-[7rem_1fr_auto] md:gap-x-10 md:py-9"
                    >
                      <span>
                        <span className="block font-display text-4xl font-bold leading-none tracking-tighter text-brand md:text-5xl">{item.date.split(' ')[1]}</span>
                        <span className="meta mt-1 block">{item.date.split(' ')[0]} {item.year}</span>
                      </span>
                      <span>
                        <span className="block font-display text-xl font-semibold tracking-tight group-hover:text-brand md:text-2xl">
                          {item.title}
                        </span>
                        <span className="mt-1.5 block max-w-[62ch] text-ink-muted">{item.desc}</span>
                        <span className="meta mt-2 block">{item.meta}</span>
                      </span>
                      <IconArrowRight className="hidden h-5 w-5 text-ink-subtle transition-transform duration-150 group-hover:translate-x-1 group-hover:text-brand md:block" />
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="empty mt-8">
                <IconDocument className="h-10 w-10 text-ink-subtle" />
                <p>No updates in this category currently.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

// Tile sizes repeat so the grid always packs into complete rows.
const tileSizes = ['', '', 'col-span-2 row-span-2', '', 'col-span-2', 'col-span-2 row-span-2', '', 'col-span-2'];

export const GalleryPage: React.FC<{ kind?: 'photo' | 'video' }> = ({ kind = 'photo' }) => (
  <>
    <PageHeader
      title={kind === 'video' ? 'Video Gallery' : 'Photo Gallery'}
      section="Updates"
      lead={kind === 'video' ? 'Recordings from conferences, ceremonies and chapter events.' : 'Moments from conferences, ceremonies and chapter events.'}
    />

    <section className="section pt-8 md:pt-12">
      <div className="container-page">
        <ul className="grid grid-flow-dense auto-rows-[150px] grid-cols-2 gap-3 md:auto-rows-[200px] md:gap-4 lg:grid-cols-4">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <li key={i} className={`relative overflow-hidden rounded-card ${tileSizes[(i - 1) % tileSizes.length]}`}>
              <Placeholder seed={i} label={`Gallery ${kind} ${i}`} className="h-full w-full" />
              {kind === 'video' && (
                <span className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-paper text-brand shadow-float">
                  <IconPlay className="h-5 w-5 translate-x-0.5" />
                </span>
              )}
              <p className="absolute bottom-2 left-2 max-w-[calc(100%-1rem)] truncate rounded-control bg-paper px-2 py-1 text-xs font-medium text-ink md:px-2.5 md:text-sm">
                Annual Conference 2024
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  </>
);
