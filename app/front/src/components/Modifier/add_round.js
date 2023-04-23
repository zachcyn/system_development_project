import { useState } from "react";
import * as Components from "./rounds_components";
import { Box, MenuItem, TextField, Typography } from "@mui/material";
import Icon from "@mui/material/Icon";
import { tournaments } from "../../pages/info_manage";

const genders = ['Male', 'Female']

const isAlphanumeric = (str) => {
  return /^[a-zA-Z0-9]+$/.test(str);
}
const hasSpecialCharacters = (str) => {
  return /[^\w\s]/gi.test(str);
}

const isNumeric = (str) => {
  return /^\d+$/.test(str);
}

const isInteger = (str) => {
  return Number.isInteger(Number(str));
}

export default function AddRound(props) {
  const [inputs, setInputs] = useState({
    gender: 'Male',
    playerA: '',
    scoreA: '',
    playerB: '',
    scoreB: ''
  });

  const [errorPA, setErrorPA] = useState(false);
  const [errorPB, setErrorPB] = useState(false);
  const [errorPAS, setErrorPAS] = useState(false);
  const [errorPBS, setErrorPBS] = useState(false);
  const [disableButton, setDisableButton] = useState(false);


  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log("playerA", inputs.playerA);
    console.log("playerA Len", inputs.playerA.length);

    let hasError = false;

    if (name === "playerA") {
      setErrorPA(value.length === 0 || hasSpecialCharacters(value));
      hasError = value.length === 0 || hasSpecialCharacters(value);
    } else if (name === "playerB") {
      setErrorPB(value.length === 0 || hasSpecialCharacters(value));
      hasError = value.length === 0 || hasSpecialCharacters(value);
    }

    if (name === "scoreA") {
      if (value === "" || !isNumeric(value) || !isInteger(value)) {
        setErrorPAS(true);
        hasError = true;
      } else {
        setErrorPAS(false);
      }
    }

    if (name === "scoreB") {
      if (value === "" || !isNumeric(value) || !isInteger(value)) {
        setErrorPBS(true);
        hasError = true;
      } else {
        setErrorPBS(false);
      }
    }

    setDisableButton(hasError);

    setInputs((values) => ({ ...values, [name]: value, tournamentName: tournaments }));

  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
    // console.log(tournaments)
    props.setTrigger(false)


    // Goodluck backend :)

  };

  return props.trigger ? (
    <>
      <Box
        width={"100%"}
        height="100vh"
        sx={{
          align: "center",
          overflow: "auto",
          position: "fixed",
          backgroundColor: "#00000033",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          top: 0,
          left: 0,
        }}
      >
        <Components.Container>
          <Components.SignInContainer>
            <Box
              justifyContent="flex-start"
              alignItems="flex-start"
              display={"flex"}
              sx={{ ml: 2, mt: 1, mb: -5 }}
            >
              <Icon onClick={() => props.setTrigger(false)} sx={{ cursor: "pointer" }}>
                close
              </Icon>
            </Box>
            <Components.Form onSubmit={handleSubmit}>
              <Components.Title>Add Round in {tournaments}</Components.Title>
              <br />

              <TextField variant="filled"

                label="Gender"
                sx={{
                  width: '100%',
                  border: 'none',
                  borderRadius: '10px',
                  padding: '7px 15px',
                  margin: '10px 0',
                  backgroundColor: "#eee",
                  color: 'red',
                }}

                select
                name="gender"
                value={inputs.gender}
                onChange={handleChange}
              // error={error && !inputs.gender}
              // helperText={error && !inputs.gender ? "Please select a gender" : ""}

              >
                {genders.map((gender) => (
                  <MenuItem key={gender} value={gender}>
                    {gender}
                  </MenuItem>
                ))}
              </TextField>

              <Components.Input
                name="playerA"
                type="text"
                placeholder="Player A"
                onChange={handleChange}
                value={inputs.playerA || ""}
              />
              {errorPA && inputs.playerA.length <= 0 ?
                <Typography variant='h6' color='error' >Please fill out this field</Typography> : ""}

              {errorPA && inputs.playerA && !isAlphanumeric(inputs.playerA) ? <Typography variant='h6' color='error'>Invalid Player A name</Typography > : ""}


              <Components.Input
                name="scoreA"
                type="number"
                placeholder="Score A"
                onChange={handleChange}
                value={inputs.scoreA || ""}
              />
              {errorPBS && inputs.scoreA === "" ? <Typography variant='h6' color='error'>Please fill this field</Typography > : ""}
              {errorPAS && inputs.scoreA < 0 ? <Typography variant='h6' color='error'>Invalid Score A</Typography > : ""}
              {errorPAS && inputs.scoreA && !isNumeric(inputs.scoreA) ? <Typography variant='h6' color='error'>Enter a valid score</Typography > : ""}

              <br />
              <Components.Input
                name="playerB"
                type="text"
                placeholder="Player B"
                onChange={handleChange}
                value={inputs.playerB || ""}
              />
              {errorPB && inputs.playerB.length <= 0 ?
                <Typography variant='h6' color='error'>Please fill out this field</Typography > : ""}
              {errorPB && inputs.playerB && !isAlphanumeric(inputs.playerB) ? <Typography variant='h6' color='error'>Invalid Player B name</Typography > : ""}

              <Components.Input
                name="scoreB"
                type="number"
                placeholder="Score B"
                onChange={handleChange}
                value={inputs.scoreB || ""}
              />
              {errorPBS && inputs.scoreB === "" ? <Typography variant='h6' color='error'>Please fill this field</Typography > : ""}
              {errorPBS && inputs.scoreB < 0 ? <Typography variant='h6' color='error'>Invalid Score B</Typography > : ""}
              {errorPBS && inputs.scoreB && !isNumeric(inputs.scoreB) ? <Typography variant='h6' color='error'>Enter a valid score</Typography > : ""}

              {console.log('disableButton:', disableButton)}
              <Components.Button type="submit" disabled={disableButton}>Add Round</Components.Button>
              {/* onClick={() => props.setTrigger(false) */}
            </Components.Form>
          </Components.SignInContainer>
        </Components.Container>
      </Box >
    </>
  ) : null;
}
