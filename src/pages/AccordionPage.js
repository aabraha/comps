import Accordion from '../components/Accordion';

function AccordionPage() {
    const items = [
        {
            id: '1234',
            label: 'can I use React on a project?',
            content: 'you can use react on any project you want. you can use react on any project you want.'
        },
        {
            id: '5678',
            label: 'can I use Javascript on a project?',
            content: 'you can use Javascript on any project you want. you can use Javascript on any project you want.'
            
        },
        {
            id: '0987',
            label: 'can I use CSS on a project?',
            content: 'you can use CSS on any project you want. you can use CSS on any project you want.'
        }
    ];
    
    return <Accordion items = {items} />;
}

export default AccordionPage;