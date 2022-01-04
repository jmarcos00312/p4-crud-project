// Below are a couple test login forms:

// import React from 'react'
// import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

// const LoginForm = () => (
//   <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
//     <Grid.Column style={{ maxWidth: 450 }}>
//       <Header as='h2' color='teal' textAlign='center'>
//         <Image src='/logo.png' /> Log-in to your account
//       </Header>
//       <Form size='large'>
//         <Segment stacked>
//           <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
//           <Form.Input
//             fluid
//             icon='lock'
//             iconPosition='left'
//             placeholder='Password'
//             type='password'
//           />

//           <Button color='teal' fluid size='large'>
//             Login
//           </Button>
//         </Segment>
//       </Form>
//       <Message>
//         New to us? <a href='#'>Sign Up</a>
//       </Message>
//     </Grid.Column>
//   </Grid>
// )

// export default LoginForm



// -------------------------------------------------------------

// import { useState } from "react";
// import styled from "styled-components";
// import LoginForm from "../components/LoginForm";
// import SignUpForm from "../components/SignUpForm";
// import { Button } from "../styles";

// function Login({ onLogin }) {
//   const [showLogin, setShowLogin] = useState(true);

//   return (
//     <Wrapper>
//       <Logo>Reciplease</Logo>
//       {showLogin ? (
//         <>
//           <LoginForm onLogin={onLogin} />
//           <Divider />
//           <p>
//             Don't have an account? &nbsp;
//             <Button color="secondary" onClick={() => setShowLogin(false)}>
//               Sign Up
//             </Button>
//           </p>
//         </>
//       ) : (
//         <>
//           <SignUpForm onLogin={onLogin} />
//           <Divider />
//           <p>
//             Already have an account? &nbsp;
//             <Button color="secondary" onClick={() => setShowLogin(true)}>
//               Log In
//             </Button>
//           </p>
//         </>
//       )}
//     </Wrapper>
//   );
// }

// const Logo = styled.h1`
//   font-family: "Permanent Marker", cursive;
//   font-size: 3rem;
//   color: deeppink;
//   margin: 8px 0 16px;
// `;

// const Wrapper = styled.section`
//   max-width: 500px;
//   margin: 40px auto;
//   padding: 16px;
// `;

// const Divider = styled.hr`
//   border: none;
//   border-bottom: 1px solid #ccc;
//   margin: 16px 0;
// `;

// export default Login;