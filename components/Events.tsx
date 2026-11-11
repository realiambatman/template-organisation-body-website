import React from 'react';
import { IconDownload } from './Icons';

// Upcoming events. The hero panel on the home page reads the same list.
export const events = [
  {
    day: '15',
    month: 'August, 2024',
    shortMonth: 'Aug',
    title: 'Sensix Global Summit',
    description: 'A strategic gathering of all chapters to discuss the roadmap, pass resolutions, and elect new leaders for the upcoming term.',
    action: 'Register Now',
  },
  {
    day: '05',
    month: 'September, 2024',
    shortMonth: 'Sep',
    title: "Innovators' Gala",
    description: 'Honoring the mentors who shape our future with a formal gala and awards ceremony for distinguished educators and tech leaders.',
    action: 'View Details',
  },
  {
    day: '10',
    month: 'October, 2024',
    shortMonth: 'Oct',
    title: 'Global Tech Fair',
    description: 'A celebration of our innovations with project showcases, hackathons, and a tech symposium. Bring your best ideas.',
    action: 'View Details',
  },
];

const Events: React.FC = () => {
  return (
    <section id="events" className="section scroll-mt-16">
      <div className="container-page">
        <div className="mb-10 flex flex-col gap-6 md:mb-14 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="title-section">Upcoming Agenda</h2>
            <p className="lead mt-4">Key dates for summits, hackathons, and global meetups.</p>
          </div>
          <button type="button" className="link shrink-0 self-start md:self-auto">
            <IconDownload className="h-4 w-4" />
            Download Annual Calendar PDF
          </button>
        </div>

        <ol className="border-t-2 border-ink">
          {events.map((event) => (
            <li
              key={event.title}
              className="grid grid-cols-[4.5rem_1fr] gap-x-5 gap-y-4 border-b border-line py-8 md:grid-cols-[9rem_1fr_auto] md:items-center md:gap-x-10 md:py-10"
            >
              <div>
                <span className="block font-display text-5xl font-bold leading-none tracking-tighter text-brand md:text-6xl">
                  {event.day}
                </span>
                <span className="meta mt-1 block">{event.month}</span>
              </div>
              <div>
                <h3 className="font-display text-2xl font-semibold tracking-tight md:text-3xl">{event.title}</h3>
                <p className="mt-2 max-w-[60ch] text-ink-muted">{event.description}</p>
              </div>
              <div className="col-start-2 md:col-start-3">
                <button type="button" className="btn btn-outline">{event.action}</button>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Events;
