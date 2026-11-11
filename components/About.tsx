import React from 'react';

const values = [
  {
    word: 'Innovate',
    title: 'Academic Excellence',
    text: 'Providing scholarships, career guidance, and competitive platforms to ensure every student reaches their intellectual potential. We strive to cultivate minds that are curious, capable, and creative.',
  },
  {
    word: 'Connect',
    title: 'Social Impact',
    text: 'Volunteering is at our core. From community drives to disaster relief, we stand ready to serve the community in times of need. Connection is the bridge to a better future.',
  },
  {
    word: 'Grow',
    title: 'Global Identity',
    text: 'Preserving our unique heritage while embracing the future. Through literature, arts, and cultural symposiums, we ensure our roots remain strong as we grow.',
  },
];

const About: React.FC = () => {
  return (
    <section className="section" aria-labelledby="values-title">
      <div className="container-page">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-16">
          <h2 id="values-title" className="title-section">
            More than a community, a movement for innovation.
          </h2>
          <p className="lead lg:pt-2">
            Founded on the principles of collaboration and unity, Sensix champions the intellectual and social advancement of our people. We believe innovation is the cornerstone of progress.
          </p>
        </div>

        <ul className="mt-12 grid gap-10 md:mt-16 md:grid-cols-3 md:gap-8">
          {values.map((value) => (
            <li key={value.word} className="border-t-2 border-ink pt-5">
              <p className="text-sm font-semibold text-brand">{value.word}</p>
              <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight">{value.title}</h3>
              <p className="mt-3 text-ink-muted">{value.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default About;
