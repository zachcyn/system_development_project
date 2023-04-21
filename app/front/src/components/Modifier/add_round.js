import { useState } from "react";
import * as Components from "./rounds_components";
import { Box, FormControl, InputLabel, Select, MenuItem, FormHelperText } from "@mui/material";
import Icon from "@mui/material/Icon";

export default function AddRound(props) {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  };

  const [age, setAge] = useState('');

  const handleGender = (event) => {
    setAge(event.target.value);
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
              <Components.Title>Add Round</Components.Title>


              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Age"
                  onChange={handleGender}
                >
                  <MenuItem value={10}>Men</MenuItem>
                  <MenuItem value={20}>Women</MenuItem>
                </Select>
              </FormControl>

              <Components.Input
                name="playerA"
                type="text"
                placeholder="Player A"
                onChange={handleChange}
                value={inputs.playerA || ""}
              />
              <Components.Input
                name="scoreA"
                type="number"
                placeholder="Score A"
                onChange={handleChange}
                value={inputs.scoreA || ""}
              />
              <br />
              <Components.Input
                name="playerB"
                type="text"
                placeholder="Player B"
                onChange={handleChange}
                value={inputs.playerB || ""}
              />
              <Components.Input
                name="scoreB"
                type="number"
                placeholder="Score B"
                onChange={handleChange}
                value={inputs.scoreB || ""}
              />
              <br />
              <Components.Input
                name="winner"
                type="text"
                placeholder="Winner"
                onChange={handleChange}
                value={inputs.winner || ""}
              />
              <Components.Button type="submit" onClick={() => props.setTrigger(false)}>Add Round</Components.Button>
            </Components.Form>
          </Components.SignInContainer>
        </Components.Container>
      </Box>
    </>
  ) : null;
}