import { useState } from "react"
import Header from "../Components/Header"
import { Box, Typography, styled, TextField, Button } from "@mui/material"
import Dropdown from "../Components/Dropdown"
import { savePost } from "../Services/Api"
import { useNavigate } from 'react-router-dom';
import { routePath } from "../Routes/route"


const Component = styled(Box)({
  padding: '80px 200px',
  background: '#F5F5F5'
})

const Container = styled(Box)({
  display: 'flex',
  background: '#FFFFFF',
  borderRadius: 20,
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0 70px',
  '& > p': {
    fontSize: 35,
    fontWeight: 700,
    opacity: '0.7'
  }
})

const FormWrapper = styled('Box')({
    display: 'flex',
    flexDirection: 'column',
    marginTop: 20,
    padding: 20,
    background: '#FFFFFF',
    borderRadius: 20,
    '& > *':{
      marginTop: '20px !important' //if didn't work '20px !important'
    }
})


const defaultObj = {
  profile: "",
  type: "",
  description: "",
  experience: "",
  technology: "",
  salary: ""
}

const CreatePost = () => {

  const [data, setData] = useState({defaultObj})

  const navigate = useNavigate();

  const image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH3zkKYlIHjjoQrE4e-a5xiJIaK0reWlcDhewsx8rjV87d8M82";

  const handleChange = (e) => {
    setData({...data, [e.target.name] : e.target.value})
  }

  const saveJob = async () => {
    try {
      await savePost(data);
      console.log(data);
      navigate(routePath.posts);
    } 
    catch (error) {
      console.error("Error while saving job:", error);
    }
  };
  
  const options = {
    type : ["online", "offline"],
    experience : ["0-2 Years" , "3-5 Years" , "5-8 Years" , "8 and more Years"],
    technology : ["Java","JavaScript", "Angular", "React", "DotNet", "DevOps","Azure", "AWS", "Python", "C++", "Ruby", "Data-Science"],
    salary : ["Rs 0-300000", "Rs 300000-500000", "Rs 500000-800000", "Rs 800000-1300000", "Rs 1300000 and more"]
  }

  return (
    <>
      <Header />
      <Component>
        <Container>
          <Typography>Create a Job Post</Typography>
          <img src={image} alt="image" />
        </Container>

        <FormWrapper>
          <TextField
            placeholder="Job Title"
            name="profile"
            onChange={handleChange}
          />
          <Dropdown
            label="Job Type"
            id="job-type-label"
            value={data.type}
            handleChange = {handleChange}
            name="type"
            options={options.type}
           />
          <TextField
            placeholder="Job Description"
            name="description"
            onChange={handleChange}
          />

          <Dropdown 
           label="Experience"
           id="job-experience-label"
           value={data.experience}
           handleChange = {handleChange}
           options = {options.experience}
           name="experience"
          />
          <Dropdown
           label="Technology"
           id="job-technology-label"
           value={data.technology}
           handleChange = {handleChange}
           options = {options.technology}
           name="technology"
           multiple
          />
          <Dropdown
           label="Salary"
           id="job-salary-label"
           value={data.salary}
           handleChange = {handleChange}
           options = {options.salary}
           name="salary"
          />
          <Button onClick={() => saveJob()} variant="contained">Save Job</Button>
        </FormWrapper>
      </Component>
    </>
  )
}

export default CreatePost
