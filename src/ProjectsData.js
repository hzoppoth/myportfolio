

const projects = [
    {
        id: 1,
        title: 'Bent Creek Buddy',
        technologies: ['React Native','JavaScript','AWS','MySQL'],
        description: 'Bent Creek Buddy is an Android app developed as my Capstone project, designed to enhance the mountain biking experience in the Bent Creek trail system. This app serves as a dynamic platform where users can both submit and view real-time trail condition reports, fostering a well-informed biking community.',
        features: ['Real-Time Trail Conditions: Users can view reports on trail status, including conditions, closures, and weather advisories, directly from the biking community.','Community Engagement: Provides a platform for users to contribute by submitting trail reports, promoting a collaborative environment.','Optimized User Experience: Designed with smooth navigation and an intuitive interface that allows users to acces information quickly.'],
        impact: ' Bent Creek Buddy bridges the gap between technology and outdoor adventure, offering a vital tool for mountain bikers in the Bent Creek area. By providing instant access to trail conditions and fostering community collaboration, it enhances the safety and enjoyment of biking enthusiasts.',
        github: 'https://github.com/hzoppoth/BentCreekBuddy',
        image: ''
    },
    {
        id: 2,
        title: 'Orion',
        technologies: ['Godot', 'GDScript', 'Krita'],
        description: 'Orion is a 2D action adventure game that I am solo developing in my free time. This game is being developed in Godot, and the scripting is written in GDScript, an object-oriented language that uses an indentation-based syntax similar to Python. All of the assets and sprite sheets are drawn in Krita and imported to Godot.',
        features: ['Organized Project Structure: The development of Orion helps to promote healthy project development habits and keep an organized code base.'],
        impact: 'Orion will be a unique player experience in the world of 2D action RPG games. Orion serves as my first large-scale game development project, which helps to build transferrable skills for work-place projects. ',
        github: '',
        image: ''
    },
    {
        id: 3,
        title: 'Portfolio Webpage',
        technologies: ['JavaScript','React',],
        description: 'My portfolio webpage is designed to be a platform for potential employers to discover my capabilities and accomplishments. The site provides visitors with access to my contact details, reports on my projects, and insights into my personal journey and professional skills.',
        features: ['Direct Contact Access: Offering a straightforward way for potential employers and collaborators to reach out to me.','Project Reports: Each project on my portfolio is accompanied by an overview and technologies used in development. This offers a more in-depth look at the projects I have worked on.'],
        impact: 'My portfolio webpage extends beyond what a resume can offer. It serves as a platform for users to gain a comprehensive understanding of my projects and skill set.',
        github: 'https://github.com/hzoppoth/myportfolio',
        image: ''
    },
    {
        id: 4,
        title: 'Brand Manager (Internship)',
        technologies: ['Ignition','Microsoft SQL Server','Python Scripting'],
        description: 'The Brand Manager is a tool designed to streamline how the Order Management system interacts with the extensive list of brands. With an intuitive user interface (UI), it simplifies the process of updating and organizing the brands that the company manages. Users can easily select from a list of available brands, adding them to or removing them from the active management list. Beyond just adding and removing, the Brand Manager also allows for the customization of the brand display order. This means users can rearrange the list to suit their preferences, ensuring that the most relevant brands are always at the forefront of the Order Management windows.',
        features: ['Dynamic List Management: The list of currently managed brands is dynamically updateable, reflecting changes in real-time.','User-Centric Design: The Brand Manager is designed with the user in mind, featuring an intuitive interface that caters to both novice and experienced users.','Integration: Seamlessly integrates with existing Order Management windows and company workflows.'],
        impact: 'The Brand Manager enables easy updates to the list of actively managed brands, which was a process previously done through email and manual entry. The time and effort required for maintaining accurate brand representation in Order Management systems is significantly reduced. Allowing for real-time management also removes the possibilty of error through information entered incorrectly. ',
        github: '',
        image: ''
    },
    {
        id: 5,
        title: 'Cask-fill Switchboard (Internship)',
        technologies: ['Ignition','Microsoft SQL Server','Python Scripting'],
        description: 'The Cask-fill Switchboard is a tool developed for brewers, enabling them to efficiently manage cask fills. It allows for logging and submitting of cask fills, which are immediately processed to update the brewerys database with necessary batch and packaging records. The systems functionality ensures accurate data management and traceability, significantly improving the operational efficiency of the cask filling process.',
        features: ['Automated Data Entry: Streamlines the cask filling process by automatically fetching and storing relevant data from user inputs into the database.','Traceability and Reporting: Once submitted, a detailed traceback row is created in the database, allowing for proper batch tracking and historical data analysis.','Inuitive Design: The layout is simple and dropdowns are provided for user input. Volume numbers are calculated in real time to give users confirmation on the screen before submitting. The user is also given the traceback ID once the submit action has completed and the entry was logged without errors.'],
        impact: 'Previously this process was reliant on email communications and manual data entry that were prone to errors and delays. The new system enables instant data processing and record updates. This has not only saved time and effort but also increaed the accuaracy of data, reducing the risk of production errors.',
        github: '',
        image: ''
    },

];

export default projects;