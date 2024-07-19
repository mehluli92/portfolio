const review = [
    {
        id: 0,
        clientName: 'Winner of the POTRAZ 2021 Hackathon',
        clientLocation: 'Zimbabwe',
        clientSource: '',
        clientReview: 'I was the first runner up with the most innovative project in the country. The project was an IoT low cost ventilator which had a ventilator as well as a web based platform. These are the gains on which Menokws a tech startup was founded. I had thorouly believed that this would put us in the same league as blackberry which was also famously founded on the same ground. I have since learned a lot of lessons in business and technology as well which make me a valuable team member today.'
    },
    {
        id: 2,
        clientName: 'Top 200 in of 1500 competitors',
        clientLocation: 'Africa, Asia, United Kingdom',
        clientSource: '',
        clientReview: 'I led our startup to a hackathon in which we came up as top 200 in a race with more than 1500 competitors. We had to leave in the middle because of electricity challenges and we had gotten into the top 200.'
    },
    {
        id: 3,
        clientName: 'Number 3 in the BancABC pitch contest',
        clientLocation: 'Zimbabwe',
        clientSource: '',
        clientReview: 'I led our startup to a pitch contest at BancABC in which we came out as top three. We got free office space from the gains.'
    },
]
export default function handler(req, res) {
    res.status(200).json(review)
}
