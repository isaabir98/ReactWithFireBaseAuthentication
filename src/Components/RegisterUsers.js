import Buttons from "./Buttons";
import RegisterForm from "./RegisterForm";
const x = () => {
  return console.log(x);
};
const user = ({ c }) => {
  return (
    <div>
      <h1>Register User Here</h1>
      <RegisterForm fname="First Name" />
      <Buttons color="green" text="Submit" onclick={c} />
      <Buttons color="red" text="Cancel" onclick={c} />
    </div>
  );
};

export default user;
