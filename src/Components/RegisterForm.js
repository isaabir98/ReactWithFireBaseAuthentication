const registerForm = ({ fname }) => {
  return (
    <div className="form-control">
      <label>Task</label>
      <input
        type="text"
        placeholder="Enter First Name"
        value={fname}
        onChange={(e) => e.target.value}
      />
    </div>
  );
};

export default registerForm;
