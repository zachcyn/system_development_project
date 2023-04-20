import {useState} from "react";
import * as Components from './webComponents';
import { Box } from "@mui/material";
import Icon from "@mui/material/Icon";
import { useNavigate } from "react-router-dom";


function FormComponent(props) {
    const [signIn, toggle] = useState(true);
    const [inputs, setInputs] = useState({});
    const navigation = useNavigate();

    const handleChange = (event) => {
        const email = event.target.name;
        const pass = event.target.value;
        setInputs(values => ({...values, [email]: pass}))
      }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs);
        props.setTrigger(false);
        props.setLogged(true);
    };

     return(props.trigger) ? (
        <>
        <Box 
            width={"100%"}
            height="100vh"
            sx={{
                    align: 'center', 
                    overflow: 'auto',
                    position:'fixed',
                    backgroundColor: '#00000033',
                    display:'flex',
                    justifyContent:'center',
                    alignItems:'center',
                    top: 0,
                    left: 0
                }}
        >
         <Components.Container>
             <Components.SignUpContainer signinIn={signIn}>
                <Box
                    justifyContent="flex-end"
                    alignItems="flex-end"
                    display={'flex'}
                    sx={{mr:2, mt:1, mb:-5}}
                >
                     <Icon onClick={() => props.setTrigger(false)} sx={{cursor:'pointer'}}>close</Icon>
                </Box>
                 <Components.Form>
                     <Components.Title>Create Account</Components.Title>
                     <Components.Input type='text' placeholder='Name' />
                     <Components.Input type='email' placeholder='Email' />
                     <Components.Input type='password' placeholder='Password' />
                     <Components.Button>Sign Up</Components.Button>
                 </Components.Form>
             </Components.SignUpContainer>

             <Components.SignInContainer signinIn={signIn}>
                <Box
                    justifyContent="flex-start"
                    alignItems="flex-start"
                    display={'flex'}
                    sx={{ml:2, mt:1, mb:-5}}
                >
                     <Icon onClick={() => props.setTrigger(false)} sx={{cursor:'pointer'}}>close</Icon>
                </Box>
                  <Components.Form
                    onSubmit={handleSubmit}
                  >
                      <Components.Title>Sign in</Components.Title>
                      <Components.Input name='email' type='email' placeholder='Email' onChange={handleChange} value={inputs.email} />
                      <Components.Input name='pass' type='password' placeholder='Password' onChange={handleChange} value={inputs.pass} />
                      <Components.Anchor href='#'>Forgot your password?</Components.Anchor>
                      <Components.Button type="submit">Sign In</Components.Button>
                  </Components.Form>
             </Components.SignInContainer>

             <Components.OverlayContainer signinIn={signIn}>
                 <Components.Overlay signinIn={signIn}>

                 <Components.LeftOverlayPanel signinIn={signIn}>
                     <Components.Title>Welcome Back!</Components.Title>
                     <Components.Paragraph>
                         To keep connected with us please login with your personal info
                     </Components.Paragraph>
                     <Components.GhostButton onClick={() => toggle(true)}>
                         Sign In
                     </Components.GhostButton>
                     </Components.LeftOverlayPanel>

                     <Components.RightOverlayPanel signinIn={signIn}>
                       <Components.Title>Hello, Friend!</Components.Title>
                       <Components.Paragraph>
                           Enter Your personal details and start journey with us
                       </Components.Paragraph>
                           <Components.GhostButton onClick={() => toggle(false)}>
                               Sign Up
                           </Components.GhostButton> 
                     </Components.RightOverlayPanel>
 
                 </Components.Overlay>
             </Components.OverlayContainer>

            </Components.Container>
         </Box>
        </>
     ) : "";
}

export default FormComponent;