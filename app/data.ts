type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'BLUElab Smart Irrigation',
    description:
      'Controller and Flask dashboard for deployable smart irrigation system using specific crop data, agricultural equations, smart weather station, and more.',
    link: 'https://github.com/mgopal64/WaterRec',
    video:
      '',
    id: 'project1',
  },
  {
    name: 'MHACKS 2025: Soil Moisture Prediction',
    description: 'Random Forest model trained on NASA SMAP satellite data and STF-SSM spatiotemporal dataset in order to predict soil moisture.',
    link: 'https://github.com/mgopal64/SoilMoisturePrediction',
    video:
    '',
    id: 'project2',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Ecolab',
    title: 'Engineering Intern',
    start: 'May 2025',
    end: 'Present',
    link: 'https://www.ecolab.com/offerings/climate-intelligence',
    id: 'work1',
  },
  {
    company: 'One Energy/One Power',
    title: 'Field Engineer',
    start: 'May 2024',
    end: 'August 2024',
    link: 'https://onepower.com/',
    id: 'work2',
  },
  {
    company: 'Digital Water Lab @ University of Michigan',
    title: 'Research Assistant in ML Applications',
    start: 'December 2023',
    end: 'May 2024',
    link: 'https://www.digitalwaterlab.org/',
    id: 'work3',
  },
  {
    company: 'Farm Bureau Insurance of Michigan',
    title: 'Application Development and IT Intern',
    start: 'July 2022',
    end: 'May 2024',
    link: 'https://www.michfb.com/',
    id: 'work4',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  // {
  //   title: 'Exploring the Intersection of Design, AI, and Design Engineering',
  //   description: 'How AI is changing the way we design',
  //   link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
  //   uid: 'blog-1',
  // },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/mgopal64',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/manushgopal/',
  },
  {
    label: 'Instagram',
    link: 'https://www.instagram.com/manhouse64',
  },
]

export const EMAIL = 'mgopal@umich.edu'
