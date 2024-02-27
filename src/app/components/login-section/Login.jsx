"use client"
import "./login.scss";
import { Form, Formik, Field, ErrorMessage } from "formik";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useState } from "react";
import { useRouter } from "next/navigation";

export const Login = () => {
    const [visible, setVisible] = useState(false);
    const [passwdVision, setPasswdVision] = useState("password");
    const [errors, setErrors] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);
    const router = useRouter();

    const userCredentials = {
        username: "kidsAdmin2024",
        passwd: "KidsShopA0A30"
    }

    const user = userCredentials.username;
    const passwd = userCredentials.passwd;

    const handlePasswdVision = () => {
        setVisible(!visible);
        setPasswdVision("text");
    }

    const handlePasswd = () => {
        setVisible(!visible);
        setPasswdVision("password");
    }

  return (
    <div className="loginform__container">
        <Formik
            initialValues={{username: "", passwd: ""}}
            validate={(values) => {
                const error = {};
                
                if (values.username === "" || values.passwd === ""){
                    setErrors(true);
                    setErrorMessage("Data is empty");
                } else if (values.username !== user || values.passwd !== passwd){
                    setErrorMessage("Username or password are incorrect");
                } else{
                    setErrorMessage(null);
                }

                return error;
            }}
            onSubmit={(values) => {
                if (values.username === user || values.passwd === passwd){
                    router.push("/admin");
                }
            }}
        >
            <div>
                <Form className="login__form">
                    <img src="/magnifying-glass.png" alt="" />
                    <Field name="username" placeholder="Username"/>
                    <ErrorMessage name="username" component="div" className="error__message"/>
                    <div className="passwd__container">
                        <Field name="passwd" placeholder="Password" type={passwdVision}/>
                        <div className="icon">
                            {
                                visible ? 
                                <RemoveRedEyeIcon className="eye__icon" onClick={handlePasswd}/>
                                :
                                <VisibilityOffIcon className="eye__icon" onClick={handlePasswdVision} />
                            }
                        </div>
                    </div>
                    <button type="submit">Login</button>
                    <p className={errors ? "error__message" : "invisible"}>{errorMessage}</p>
                </Form>
            </div>
        </Formik>
    </div>
  )
}
