

    export const ganttConfig = {
   
    startDate: new Date(2025, 0, 1),
    endDate: new Date(2025, 1, 1),
    viewPreset: 'weekAndDay',
    features: {
        taskTooltip: true,
        dependencies: true,
        
       
    },
    taskRenderer({ taskRecord}: {taskRecord: any} ) {
        return {
        className: taskRecord.duration > 5 ? 'long-task' : '',
        children: [`<span>${taskRecord.name}</span>`]
        };
    },
    columns: [
        { type: 'name', field: 'name', text: 'Task Name', width: 250 },
        { type: 'startdate', text: 'StartDate', field:'start date'},
        { type: 'enddate', text:'EndDate', filed: 'end date'},
        
    ]
    };

    export const projectConfig = {
    outerHeight: '100%',
    tasksData: [
        {
        id: 1,
        name: 'Main-Project',
        expanded: true,
        children: [
            {
            id: 2,
            name: 'Planning',
            startDate: '2025-01-02',
            duration: 3,
            },
            {
            id: 3,
            name: 'Execution',
            startDate: '2025-01-06',
            duration: 7
            },
            {
            id:4,
            name: 'Deployment',
            startDate: '2025-01-09',
            duration: 9
            }
        ]
        },
        {
            id: 5,
            name: 'Secand-Project',
            expanded: true,
            children: [
                {
                id: 6,
                name: 'Planning',
                startDate: '2025-01-02',
                duration: 3
                },
                {
                id: 7,
                name: 'Execution',
                startDate: '2025-01-06',
                duration: 7
                },
                {
                id:8,
                name: 'Deployment',
                startDate: '2025-01-09',
                duration: 9
                }
            ]
            }
    ],
    dependenciesData: [
        { fromTask: 2, toTask: 7 }
    ],
    // gantt : new Gantt({
    //     columns: [
    //         { type: 'name' , text: 'Task Data', filterable: true},
    //         { type: 'date', text: 'Start Date', field: 'start date', filterable: true},
    //         { type: 'date', text:'End Date', field: 'end date', filterable: true}
    //     ]
    // })
    };
