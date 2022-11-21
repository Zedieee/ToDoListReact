import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import SendIcon from '@mui/icons-material/Send';


export default function SimplePaper(props) {
    const {handleSubmit, handleChange, tareas, handleDescription, description} = props;

  return (
    <Box

      className=" flex flex-wrap flex-grow justify-center"
    >
        <form onSubmit={handleSubmit}> 

      <Paper elevation={3} className="w-[343px] md:w-[400px] md:h-[450px]  h-90 items-center flex md:py-10 flex-col py-4">
       <h1 className="text-4xl font-bold bg-gradient-to-r from-violet-700 to-violet-500  text-transparent bg-clip-text">ToDo List</h1>
      <TextField onChange={handleChange} value={tareas} id="outlined-basic" label="Titulo" variant="outlined" className='w-60 md:w-80 md:my-8  my-4' required  />


      <TextField onChange={handleDescription} value={description} id="outlined-textarea" label="Descripcion" multiline rows={4} variant="outlined" className='w-60 md:w-80 m-4'  />

      <Button onClick={handleSubmit} variant="outlined" type="submit" endIcon={<SendIcon />}  className="md:w-40 md:my-8 text-violet-400 border-violet-400 hover:border-violet-800 hover:bg-violet-200">
        Send
      </Button>
      
   
         </Paper>
         </form>
    </Box>
  );
}
