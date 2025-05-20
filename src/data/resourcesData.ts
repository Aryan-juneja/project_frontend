export interface ResourceCard {
  id: number;
  title: string;
  readTime: string;
  image: string;
  category: 'education' | 'podcasts' | 'hindi' | 'insights';
}

export const resourcesData: ResourceCard[] = [
  {
    id: 1,
    title: 'The Art of Trading',
    readTime: '5 min Read',
    image: 'https://images.pexels.com/photos/6771985/pexels-photo-6771985.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'education'
  },
  {
    id: 2,
    title: 'Why Zuperior?',
    readTime: '5 min Read',
    image: 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'education'
  },
  {
    id: 5,
    title: 'Why Zuperior?',
    readTime: '5 min Read',
    image: 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'education'
  },
  {
    id: 6,
    title: 'The Art of Trading',
    readTime: '5 min Read',
    image: 'https://images.pexels.com/photos/6771985/pexels-photo-6771985.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'education'
  },
  {
    id: 3,
    title: 'Forex Trends',
    readTime: '5 min Read',
    image: 'https://images.pexels.com/photos/7567432/pexels-photo-7567432.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'insights'
  },
  {
    id: 4,
    title: 'Success Stories',
    readTime: '5 min Read',
    image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'podcasts'
  },
  {
    id: 7,
    title: 'The Art of Trading',
    readTime: '5 min Read',
    image: 'https://images.pexels.com/photos/6771985/pexels-photo-6771985.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'hindi'
  },
  {
    id: 8,
    title: 'Why Zuperior?',
    readTime: '5 min Read',
    image: 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'hindi'
  }

];

export const categories = [
  { id: 'education', name: 'Education' },
  { id: 'podcasts', name: 'Podcasts' },
  { id: 'hindi', name: 'Hindi Courses' },
  { id: 'insights', name: 'Insights' }
];