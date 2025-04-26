import { Typography, Grid, Card, Box } from "@mui/material";
import { motion } from "framer-motion";
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";

const animation = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8 },
};

const sectionStyle = {
  background: "black",
  padding: "4rem 2rem",
  color: "#00f7ff", // Neon blue
};

const glowStyle = {
  boxShadow: "0 0 10px #00f7ff, 0 0 20px #00f7ff",
};

const cardStyle = {
  backgroundColor: "rgba(0, 0, 0, 0.4)",
  color: "#00f7ff",
  padding: "2rem",
  borderRadius: "12px",
  border: "1px solid #00f7ff",
  backdropFilter: "blur(6px)",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  textAlign: "left",
  position: "relative",
  "&:hover": {
    transform: "scale(1.05)",
    ...glowStyle,
  },
};

const TimelineDot = ({ icon }) => (
  <Box
    sx={{
      width: "50px",
      height: "50px",
      background: "#00f7ff",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "0 0 15px #00f7ff",
      color: "#000",
      fontSize: "24px",
      margin: "1rem auto",
    }}
  >
    {icon}
  </Box>
);

export default function Qualification() {
  return (
    <motion.div
      style={sectionStyle}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      transition={animation.transition}
      variants={animation}
    >
      <Typography variant="h4" gutterBottom align="center" sx={{ ...glowStyle }}>
        My Journey
      </Typography>

      <Grid container spacing={6} justifyContent="center" alignItems="center" direction="column">
        {/* Education Section */}
        <Grid item xs={12} sm={10} md={8}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <TimelineDot icon={<FaGraduationCap />} />
            <Card sx={cardStyle}>
              <Typography variant="h6" gutterBottom>
                🎓 Education
              </Typography>
              <Typography>
                <strong>10th - (2019)</strong><br />
                GRM SCHOOL
              </Typography>
              <Typography>
                <strong>12th - (2021)</strong><br />
                BEDI INTERNATIONAL SCHOOL
              </Typography>
              <Typography>
                <strong>B.Tech  - ( JUNE.2025)</strong><br />
                SRMS COLLEGE OF ENGINEERING & TECHNOLOGY (AKTU UNIVERSITY)
              </Typography>
            </Card>
          </motion.div>
        </Grid>

        {/* Line Separator */}
        <Box
          sx={{
            height: "60px",
            width: "4px",
            background: "#00f7ff",
            boxShadow: "0 0 12px #00f7ff",
            margin: "2rem 0",
          }}
        />

        {/* Experience Section */}
        <Grid item xs={12} sm={10} md={8}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <TimelineDot icon={<FaBriefcase />} />
            <Card sx={cardStyle}>
              <Typography variant="h6" gutterBottom>
                💼 Experience
              </Typography>
              <Typography>
                <strong>RannLabs Internship</strong><br />
                July 2024 - August 2024
              </Typography>
              <Typography>
                <strong>Exposys Data Labs Internship</strong><br />
                March 2025 - April 2025
              </Typography>
            </Card>
          </motion.div>
        </Grid>
      </Grid>
    </motion.div>
  );
}
