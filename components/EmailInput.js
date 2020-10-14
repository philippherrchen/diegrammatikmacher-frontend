import { TextField } from "@material-ui/core";

const EmailInput = (props) => {
  const { email, setEmail } = props;

  const handleEmailValueChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <div>
      <TextField
        id="emailInput"
        label="Email"
        type="email"
        value={email}
        onChange={handleEmailValueChange}
        required
      />
    </div>
  );
};

export default EmailInput;
