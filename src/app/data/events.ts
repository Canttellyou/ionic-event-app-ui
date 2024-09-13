import { Event } from '../interfaces/event.interface';

export const events: Event[] = [
  {
    id: 1,
    name: 'Comedy Gala Night',
    date: '2024-07-19',
    location: 'New York, USA',
    performers: ['John Mulaney', 'Ali Wong', 'Hassan Minhaj'],
    category_id: '3',
    image: 'assets/imgs/gala.jpg',
    description:
      'A night filled with laughter featuring top comedians John Mulaney, Ali Wong, and Hassan Minhaj at The Comedy Club in New York City. Perfect for those looking to enjoy some top-notch stand-up comedy.',
  },
  {
    id: 2,
    name: 'Sunburn Festival',
    date: '2024-12-27',
    location: 'Goa, India',
    headliners: ['Martin Garrix', 'DJ Snake', 'The Chainsmokers'],
    category_id: '1',
    image: 'assets/imgs/sunburn.jpg',
    description:
      'India’s premier electronic music festival, Sunburn Festival in Goa, brings top international DJs like Martin Garrix, DJ Snake, and The Chainsmokers for an electrifying three-day event. A must-attend for EDM fans.',
  },
  {
    id: 3,
    name: 'Bruno Mars Live in Sydney',
    date: '2024-10-25',
    location: 'Sydney, Australia',
    headliners: ['Bruno Mars'],
    category_id: '3',
    image: 'assets/imgs/arijit.jpg',
    description:
      'Catch Bruno Mars live in Sydney for an electrifying performance. With his smooth vocals, energetic dance moves, and chart-topping hits, this is a show you won’t want to miss!',
  },
  {
    id: 4,
    name: 'Drake World Tour',
    date: '2024-11-15',
    location: 'Tokyo, Japan',
    headliners: ['Drake'],
    category_id: '3',
    image: 'assets/imgs/srk.jpg',
    description:
      'Join Drake in Tokyo for a night of hip-hop and R&B as part of his world tour. Expect to hear all the fan favorites, along with his latest hits, in a high-energy performance by one of the biggest names in music.',
  },
];
