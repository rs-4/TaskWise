import style from "./style.module.scss";
import Link from "next/link";

function SignupButton({ label }) {
  return (
    <Link href="/signup">
      <div className={style.signup_btn}>{label}</div>
    </Link>
  );
}

export default SignupButton;
