import Grid from "@mui/material/Grid2";

import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';



// import { FaHtml5 } from "react-icons/fa";
import { FaHtml5, FaCss3, FaReact } from 'react-icons/fa';
// import { FaBuildingColumns } from "react-icons/fa6";
import { IoSpeedometerOutline } from "react-icons/io5";
import { GiGearStickPattern } from "react-icons/gi";
import { BiSolidFileJs } from "react-icons/bi";
import { SiJavascript, SiTypescript, SiBootstrap, SiRedux, SiReactrouter, SiJest   } from 'react-icons/si';


import ProUI_Card from '../../components/ProUI_Elements/ProUI_Card/ProUI_Card';
import { Description } from "@mui/icons-material";

const FE_React_Dev_Roadmap = {
    coreFrontendSkills:[{ title: "HTML5", position: "right", icon:<FaHtml5/>, description:"(Semantic elements, Accessibility)" }, { title: "CSS3", position: "right", icon:<FaCss3 />, description:"(Flexbox, Grid, Animations, Preprocessors like SASS)" }, { title: "Boostrap", position: "right", icon: <SiBootstrap />,description:"()" }, { title: "JavaScript(ES6+)", position: "right", icon: <SiJavascript />,description:"(Closures, Hoisting, Promises, Async/Await)" }, { title: "ES6+", position: "right", icon: <BiSolidFileJs />,description:"()"  }, { title: "TypeScript", position: "right", icon: <SiTypescript/>,description:"(Optional, but preferred)"  }, { title: "React", position: "right", icon: <FaReact/>,description:"(Hooks, Context API, Lifecycle Methods, State Management)"  }, { title: "State Management", position: "right", icon: <SiRedux />,description:"(Redux, Recoil, Zustand, or Context API)"  }, { title: "React Router", position: "right", icon: <SiReactrouter />,description:"(Dynamic Routing, Nested Routes)"  }, { title: "React/ Component Design Patterns", position: "right", icon: <GiGearStickPattern/>,description:"(HOC, Render Props, Compound Components)" },{ title: "Frontend Performance Optimization", position: "right", icon: <IoSpeedometerOutline />,description:"(Lazy Loading, Code Splitting, Memoization)" }, { title: "Unit testing", position: "right", icon:<SiJest />,description:"(Jest, React Testing Library, Cypress)" }],
    buildAndDeploymentTools:[{title:"Webpack / Vite", position: "right", icon:<FaHtml5/>, description:"(Tree Shaking, Code Splitting)"}, {title:"Babel", position: "right", icon:<FaHtml5/>, description:"(Transpiling Modern JS)"}, {title:"Package Managers", position: "right", icon:<FaHtml5/>, description:"(npm, yarn, pnpm)"}, {title:"CI/CD Tools", position: "right", icon:<FaHtml5/>, description:"(GitHub Actions, Jenkins)"}]
}




const Timelines: React.FC = () => {
    return <>

        <Grid container spacing={2}>
            <Grid size={{ xs: 12, lg: 4 }}>
            Core Frontend Skills:
                <ProUI_Card>
                    <Timeline position="alternate">
                        {FE_React_Dev_Roadmap.coreFrontendSkills.map((skill, index) => {
                            return <TimelineItem>
                                <TimelineOppositeContent
                                    key={index}
                                    sx={{ m: 'auto 0' }}
                                    align="right"
                                    variant="body2"
                                    color="text.secondary"
                                >
                                    9:30 am
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineConnector />
                                    <TimelineDot color="primary">
                                    {skill.icon}
                                    </TimelineDot>
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent sx={{ py: '12px', px: 2 }}>
                                    <Typography variant="h6" component="span">
                                        {skill.title}
                                    </Typography>
                                    <Typography>{skill.description}</Typography>
                                </TimelineContent>
                            </TimelineItem>
                        })}


                    </Timeline>
                </ProUI_Card>
            </Grid>
           
            <Grid size={{ xs: 12, lg: 4 }}>
            Build & Deployment Tools:
                <ProUI_Card>
                    <Timeline position="alternate">
                        {FE_React_Dev_Roadmap.buildAndDeploymentTools.map((skill, index) => {
                            return <TimelineItem>
                                <TimelineOppositeContent
                                    key={index}
                                    sx={{ m: 'auto 0' }}
                                    align="right"
                                    variant="body2"
                                    color="text.secondary"
                                >
                                    9:30 am
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineConnector />
                                    <TimelineDot color="primary">
                                    {skill.icon}
                                    </TimelineDot>
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent sx={{ py: '12px', px: 2 }}>
                                    <Typography variant="h6" component="span">
                                        {skill.title}
                                    </Typography>
                                    <Typography>{skill.description}</Typography>
                                </TimelineContent>
                            </TimelineItem>
                        })}


                    </Timeline>
                </ProUI_Card>
            </Grid>
            <Grid size={{ xs: 12, lg: 4 }}>Backend & API Skills (Basic Knowledge for Frontend):</Grid>
            <Grid size={{ xs: 12, lg: 4 }}>Other Important and Must Skills:</Grid>
        </Grid>



    </>
}

export default Timelines;