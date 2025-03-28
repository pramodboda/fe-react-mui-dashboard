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

const FE_React_Dev_Roadmap = [{ title: "HTML5", position: "right", icon:<FaHtml5/>, description:"(Semantic elements, Accessibility)" }, { title: "CSS3", position: "right", icon:<FaCss3 />, description:"(Flexbox, Grid, Animations, Preprocessors like SASS)" }, { title: "Boostrap", position: "right", icon: <SiBootstrap />,description:"()" }, { title: "JavaScript", position: "right", icon: <SiJavascript />,description:"(Closures, Hoisting, Promises, Async/Await)" }, { title: "ES6+", position: "right", icon: <BiSolidFileJs />,description:"(Semantic elements, Accessibility)"  }, { title: "TypeScript", position: "right", icon: <SiTypescript/>,description:"(Semantic elements, Accessibility)"  }, { title: "React", position: "right", icon: <FaReact/>,description:"(Semantic elements, Accessibility)"  }, { title: "State Management", position: "right", icon: <SiRedux />,description:"(Semantic elements, Accessibility)"  }, { title: "React Router", position: "right", icon: <SiReactrouter />,description:"(Semantic elements, Accessibility)"  }, { title: "Component Design Patterns", position: "right", icon: <GiGearStickPattern/>,description:"(Semantic elements, Accessibility)" },{ title: "Frontend Performance Optimization", position: "right", icon: <IoSpeedometerOutline />,description:"(Semantic elements, Accessibility)" }, { title: "Unit testing", position: "right", icon:<SiJest />,description:"(Semantic elements, Accessibility)" }]

const Timelines: React.FC = () => {
    return <>

        <Grid container>
            <Grid size={{ xs: 12, lg: 3 }}>
                <ProUI_Card>
                    <Timeline position="alternate">
                        {FE_React_Dev_Roadmap.map((skill, index) => {
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
                                    <Typography>Because you need strength</Typography>
                                </TimelineContent>
                            </TimelineItem>
                        })}


                    </Timeline>
                </ProUI_Card>
            </Grid>
        </Grid>



    </>
}

export default Timelines;