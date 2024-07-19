// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const recommendationCard = [
  {
    id: 0,
    name: 'TM Pick n Pay Ecommerce store',
    image: "https://cdn.pixabay.com/photo/2015/11/24/10/52/gears-1059756_640.png",
    designation: 'Next JS | Laravel | MySQL | Rabbit MQ | Tailwind CSS',
    view: "An Ecommerce store with multiple locations.",
    linkednURL: ""
  },
  {
    id: 1,
    name: 'Train and locomotive system sorting.',
    image: "https://cdn.pixabay.com/photo/2015/11/24/10/52/gears-1059756_640.png",
    designation: 'Java | SQL | Thymleaf | Bootstrap',
    view: "The National Railways of Zimbabwe was faced with a challenge of sorting locomotives with train heads based on certain parameters. That presented the knacksack problem of which I developed a custom genetic algorithm to solve. I encoporated the algorithm in their system and reduced the time taken to decide which locomotive should be linked to which head.",
    linkednURL: ""
  },
  {
    id: 2,
    name: 'Photoplethysmography algorithm',
    image: "https://cdn.pixabay.com/photo/2015/11/24/10/52/gears-1059756_640.png",
    designation: 'C++ | Algorithm development | STM32F407 | FreeRTOS ',
    view: "Getting the amount of oxygen in blood is a cumbersome complex task. After the sensors have gotten the data from the human target there is still a process to get what the SpO2 levels and Heart rate. I developed a custom photoplethysmography algorithm to make sense of the data. The processes involved are data filtering using lowpass filters and then computation to get the final results.",
    linkednURL: ""
  },
  {
    id: 3,
    name: 'Education system API',
    image: "https://cdn.pixabay.com/photo/2015/11/24/10/52/gears-1059756_640.png",
    designation: 'Java | SQL ',
    view: "This is a hobby project for a school system that I always go back to in my spare time in order to hone my skills. I think I will soon put a Next js frontend to it. It can be found on my GitHub account.",
    linkednURL: ""
  },
]
export default function handler(req, res) {
  res.status(200).json(recommendationCard)
}
