// Format Date
const current = new Date();
const CurrentDate = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

const defaultTasks = [
    
    {
        id: 1,
        task: 'Buy groceries',
        date: CurrentDate,
        checked: false,
    },
    {
        id: 2,
        task: 'Take the dog for a walk',
        date: '08/19/2022',
        checked: false,

    },{
        id: 3,
        task: 'Mow the lawn',
        date: CurrentDate,
        checked: false,
    }
]

export default defaultTasks;
