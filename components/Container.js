import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useState, useEffect } from "react";
import { Button, CardActionArea, CardActions, Paper } from "@mui/material";
import TextField from "@mui/material/TextField";

export default function FixedContainer(props) {
  const { tarea, borrarTarea } = props;
  const [completo, setCompleto] = useState(false);

  return(
<>
<React.Fragment id={tarea.id} >
<CssBaseline />
        <Container>
          <Card className="w-[343px]" onClick={() => setCompleto(!completo)}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  <span className={completo  ? "line-through":""}
                  
                  >{tarea.tareas}</span>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    <span className={completo  ? "line-through":""}>
                  {tarea.description}
                  </span>
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>

              <Button size="small" className="text-violet-500" onClick={()=> borrarTarea(tarea.id)}>
                Eliminar
              </Button>
            </CardActions>
          </Card>
        </Container>
</React.Fragment>
</>
  )
   
}
