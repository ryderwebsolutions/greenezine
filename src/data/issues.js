export const INSTAGRAM_URL = 'https://www.instagram.com/greenzineireland/'

export const issues = [
  {
    slug: 'april-2026',
    month: 'April',
    year: 2026,
    title: 'April 2026 Edition',
    subtitle: 'Sustainability Innovation and Green Business Leadership',
    description:
      'A curated issue covering climate-focused business, environmental transformation, and practical sustainability progress across Ireland.',
    readTime: '25 min',
    coverType: 'image',
    coverSrc: '/april-cover.png',
    readerType: 'pdf',
    readerUrl: '/Magazine_April_Final.pdf#toolbar=0&navpanes=0&scrollbar=0&view=FitH',
    openUrl: '/Magazine_April_Final.pdf',
    featured: true,
  },
  {
    slug: 'march-2026',
    month: 'March',
    year: 2026,
    title: 'March 2026 Edition',
    subtitle: 'Community Initiatives and Environmental Conservation',
    description:
      'Stories on sustainable living, green communities, and real environmental action happening across Ireland.',
    readTime: '22 min',
    coverType: 'image',
    coverSrc: 'https://gogreenezine.com/flipbook-march/pages/1.jpg',
    readerType: 'flipbook',
    readerUrl: 'https://gogreenezine.com/flipbook-march/',
    openUrl: 'https://gogreenezine.com/flipbook-march/',
  },
  {
    slug: 'february-2026',
    month: 'February',
    year: 2026,
    title: 'February 2026 Edition',
    subtitle: 'Green Business and Renewable Energy Solutions',
    description:
      'An issue focused on sustainable enterprise, cleaner energy adoption, and Irish innovation in green business.',
    readTime: '24 min',
    coverType: 'image',
    coverSrc: 'https://gogreenezine.com/flipbooks-february/pages/1.jpg',
    readerType: 'flipbook',
    readerUrl: 'https://gogreenezine.com/flipbooks-february/',
    openUrl: 'https://gogreenezine.com/flipbooks-february/',
  },
  {
    slug: 'january-2026',
    month: 'January',
    year: 2026,
    title: 'January 2026 Edition',
    subtitle: 'Ireland\'s Sustainability Leaders and Innovators',
    description:
      'Our launch issue featuring business leaders, innovators, and voices shaping Ireland\'s sustainability direction.',
    readTime: '26 min',
    coverType: 'image',
    coverSrc: 'https://gogreenezine.com/flipbook-january/pages/1.jpg',
    readerType: 'flipbook',
    readerUrl: 'https://gogreenezine.com/flipbook-january/',
    openUrl: 'https://gogreenezine.com/flipbook-january/',
  },
]

export const issuesBySlug = Object.fromEntries(issues.map((issue) => [issue.slug, issue]))
