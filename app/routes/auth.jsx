import AuthForm from '../components/auth/AuthForm'
import { Link } from "@remix-run/react";
import authStyles from '../styles/auth.css'

export const meta = () => {
  return [{ title: "Auth Page" }];
};

export default function AuthPage() {
  return (
    
    <AuthForm />


  );
}

export const links = () => {
  return [{rel: 'stylesheet', href: authStyles}]
};
