import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import {
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiHtml5,
  SiCss3,
  SiExpress,
  SiNextdotjs,
  SiGit,
  SiGithub,
  SiMui,
  SiTailwindcss,
  SiBootstrap,
  SiRedux,
  SiFirebase,
} from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { motion } from "framer-motion";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Container,
  Link,
} from "@mui/material";
import Qualification from "../components/Qualification";

export default function Portfolio() {
  const animation = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
  };

  const sectionStyle = {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
    color: "#00f7ff",
    padding: "2rem",
    borderBottom: "1px solid #333",
  };

  return (
    <Box
      sx={{
        backgroundColor: "black",
        color: "#00f7ff",
        fontFamily: "sans-serif",
      }}
    >
      {/* Hero Section */}
      <motion.div
        style={sectionStyle}
        initial="initial"
        animate="animate"
        transition={animation.transition}
        variants={animation}
      >
        <Container sx={{ textAlign: "center" }}>
          <Box
            component="img"
            src="/rishi.jpg"
            alt="Rishi Raghuvanshi"
            sx={{
              width: 150,
              height: 150,
              objectFit: "cover",
              mb: 2,
              border: "3px solid #00f7ff",
              borderRadius: "50%",
            }}
          />
          <Typography variant="h2" gutterBottom>
            Hi, I'm Rishi Raghuvanshi
          </Typography>
          <Typography variant="h6" gutterBottom>
            A passionate Full Stack Developer
          </Typography>
          <Box
            sx={{ display: "flex", gap: 3, mt: 2, justifyContent: "center" }}
          >
            <IconButton
              href="https://github.com/Rishiraghuvanshicet"
              target="_blank"
              sx={{ color: "#00f7ff", "&:hover": { color: "white" } }}
            >
              <FaGithub size={32} />
            </IconButton>
            <IconButton
              href="https://www.linkedin.com/in/rishi-raghuvanshi-9b15a2231?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              target="_blank"
              sx={{ color: "#00f7ff", "&:hover": { color: "white" } }}
            >
              <FaLinkedin size={32} />
            </IconButton>
            <IconButton
              href="mailto:rishisrmscet@gmail.com"
              sx={{ color: "#00f7ff", "&:hover": { color: "white" } }}
            >
              <FaEnvelope size={32} />
            </IconButton>
          </Box>
        </Container>
      </motion.div>

      {/* About Section */}
      <motion.div
        style={{ ...sectionStyle, padding: 0 }}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        transition={animation.transition}
        variants={animation}
      >
        <Container
          sx={{
            backgroundImage: `url('/rishi2.jpg')`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "100vh",
          }}
        >
          <Box
            sx={{
              backgroundColor: "rgba(0, 0, 0, 0.6)",
              padding: "2rem",
              borderRadius: "10px",
              textAlign: "center",
            }}
          >
            <Typography variant="h4" gutterBottom>
              About Me
            </Typography>
            <Typography sx={{ maxWidth: 600 }}>
              I'm a highly motivated and detail-oriented Full Stack Developer
              with a strong foundation in the MERN stack (MongoDB, Express.js,
              React.js, Node.js). I have hands-on experience building responsive
              and user-friendly web applications...
            </Typography>
          </Box>
        </Container>
      </motion.div>

      {/* Projects Section */}
      <motion.div
        style={sectionStyle}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        transition={animation.transition}
        variants={animation}
      >
        <Typography variant="h4" gutterBottom>
          Projects
        </Typography>
        <Grid
          container
          spacing={4}
          justifyContent="center"
          sx={{ maxWidth: 1200, margin: "auto" }}
        >
          {[
            {
              title: "Blog Application",
              description:
                "Personal blogging platform with authentication and rich-text editing.",
              image: "/project1.png",
              codeLink:
                "https://github.com/Rishiraghuvanshicet/Blog-Application",
            },
            {
              title: "Expense Tracker",
              description:
                "Track your expenses and manage your budget effectively.",
              image: "/project2.png",
              codeLink:
                "https://github.com/Rishiraghuvanshicet/Expense-Calculator",
            },
            {
              title: "Campus Recruitment System",
              description:
                "Connecting students with recruiters through a dedicated campus platform.",
              image: "/project3.png",
              codeLink:
                "https://github.com/Rishiraghuvanshicet/Project-For-Campus",
            },
          ].map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card
                  sx={{
                    maxWidth: 900,
                    mx: "auto",
                    backgroundColor: "#121212",
                    color: "#00f7ff",
                    textAlign: "center",
                    transition: "transform 0.3s",
                    "&:hover": {
                      transform: "scale(1.03)",
                      boxShadow: "0 0 20px #00f7ff",
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="300"
                    image={project.image}
                    alt={project.title}
                  />
                  <CardContent>
                    <Typography variant="h5" gutterBottom>
                      {project.title}
                    </Typography>
                    <Typography>{project.description}</Typography>
                    <Link
                      href={project.codeLink}
                      target="_blank"
                      sx={{
                        color: "#00f7ff",
                        display: "inline-block",
                        marginTop: 1,
                        textDecoration: "none",
                      }}
                    >
                      View Code
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </motion.div>

      {/* Qualification Section */}
      <Qualification />

      {/* Skills Section */}
      <motion.div
        style={sectionStyle}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        transition={animation.transition}
        variants={animation}
      >
        <Typography variant="h4" gutterBottom>
          Key Skills
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 4,
            mt: 4,
          }}
        >
          {[
            { icon: <SiJavascript size={40} />, label: "JavaScript" },
            { icon: <SiReact size={40} />, label: "React JS" },
            { icon: <SiNodedotjs size={40} />, label: "Node.js" },
            { icon: <SiExpress size={40} />, label: "Express.js" },
            { icon: <SiMongodb size={40} />, label: "MongoDB" },
            { icon: <SiNextdotjs size={40} />, label: "Next.js" },
            { icon: <SiRedux size={40} />, label: "Redux" },
            { icon: <SiFirebase size={40} />, label: "Firebase" },
            { icon: <SiHtml5 size={40} />, label: "HTML5" },
            { icon: <SiCss3 size={40} />, label: "CSS3" },
            { icon: <SiTailwindcss size={40} />, label: "Tailwind CSS" },
            { icon: <SiBootstrap size={40} />, label: "Bootstrap" },
            { icon: <SiMui size={40} />, label: "Material UI" },
            { icon: <SiGit size={40} />, label: "Git" },
            { icon: <SiGithub size={40} />, label: "GitHub" },
          ].map((skill, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                color: "#00f7ff",
                transition: "transform 0.3s",
                "&:hover": {
                  transform: "scale(1.1)",
                  color: "white",
                },
              }}
            >
              {skill.icon}
              <Typography variant="caption" sx={{ mt: 1 }}>
                {skill.label}
              </Typography>
            </Box>
          ))}
        </Box>
      </motion.div>

      {/* Keep in Touch Section */}
      <motion.div
        style={sectionStyle}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        transition={animation.transition}
        variants={animation}
      >
        <Typography variant="h4" gutterBottom>
          Keep in Touch
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {/* Email Card */}
          <Grid item xs={12} sm={6} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card
                sx={{
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                  color: "#ff7f00", // Neon orange color
                  padding: "2rem",
                  borderRadius: "10px",
                  backdropFilter: "blur(10px)",
                  transition: "transform 0.3s, box-shadow 0.3s",
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: "0 0 15px #ff7f00", // Neon hover effect
                  },
                  textAlign: "center",
                }}
              >
                <Typography variant="h6" gutterBottom>
                  <FaEnvelope size={24} style={{ marginRight: "8px" }} />
                  Email: rishisrmscet@gmail.com
                </Typography>
              </Card>
            </motion.div>
          </Grid>

          {/* WhatsApp Card */}
          <Grid item xs={12} sm={6} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card
                sx={{
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                  color: "#ff7f00", // Neon orange color
                  padding: "2rem",
                  borderRadius: "10px",
                  backdropFilter: "blur(10px)",
                  transition: "transform 0.3s, box-shadow 0.3s",
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: "0 0 15px #ff7f00",
                  },
                  textAlign: "center",
                }}
              >
                <Typography variant="h6" gutterBottom>
                  <FaLinkedin size={24} style={{ marginRight: "8px" }} />
                  WhatsApp: +91 6395561722
                </Typography>
              </Card>
            </motion.div>
          </Grid>
        </Grid>
      </motion.div>
    </Box>
  );
}
