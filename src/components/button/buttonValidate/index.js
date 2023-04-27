import style from "./style.module.scss";

function SignupButton({ label, onClick }) {
  return (
    <>
      <div className={style.signup_btn} onClick={onClick}>
        {label}
      </div>
    </>
  );
}

export default SignupButton;
