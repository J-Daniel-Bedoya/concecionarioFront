import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function LoginCard() {
  return (
    <Form className='login-form'>
        <img src="https://img.freepik.com/vector-premium/perfil-avatar-hombre-icono-redondo_24640-14044.jpg?w=2000" alt="" />
      <Form.Group className="login__input mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="login__input mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="login__input mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button className='login__input' variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default LoginCard;