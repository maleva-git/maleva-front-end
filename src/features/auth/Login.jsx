import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { login, clearError } from "./authSlice";
import { schema } from "./schema";
import { AnimatedLogo } from "../../components/ui/AnimatedLogo";
import { AnimatedBackgroundPanel } from "../../components/ui/AnimatedBackgroundPanel";
import { AnimatedButton } from "../../components/ui/AnimatedButton";
import { AnimatedInput, AnimatedPasswordInput } from "../../components/ui/AnimatedInputs";

// Assets
import Logo from "../../assets/login/roundlogo.png";
import TruckMaleva from "../../assets/login/truckmaleva.jpg";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, loading, error } = useSelector((state) => state.auth);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  useEffect(() => {
    if (user) {
      navigate("/dashboard", { replace: true });
    }
  }, [user, navigate]);

  useEffect(() => {
    // Clear error when component unmounts
    return () => {
      dispatch(clearError());
    };
  }, [dispatch]);

  const onSubmit = (data) => {
    dispatch(
      login({
        username: data.username,
        password: data.password,
      })
    );
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Login Form */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-12 md:px-24 bg-gradient-to-br from-white to-gray-50 animate-fade-in-left">
        
        {/* Logo & Company Name */}
        <AnimatedLogo 
          onClick={() => navigate("/")}
          logoSrc={Logo}
          title="Maleva"
          subtitle="Ship Spare in Transit"        />

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 animate-slide-up-form">
          {error && (
            <div 
              className="px-5 py-4 rounded-xl text-sm flex items-start gap-3 shadow-sm border"
              style={{
                backgroundColor: '#fee2e2',
                borderColor: '#fecaca',
                borderLeft: '4px solid #dc2626',
                color: '#b91c1c'
              }}
              role="alert"
              aria-live="polite"
            >
              <svg 
                className="w-5 h-5 flex-shrink-0 mt-0.5" 
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path 
                  fillRule="evenodd" 
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" 
                  clipRule="evenodd" 
                />
              </svg>
              <span className="font-semibold">{error}</span>
            </div>
          )}
          
          <AnimatedInput
            label="Username"
            placeholder="Enter your username"
            animationDelay="0.3s"
            {...register("username")}
            error={errors?.username?.message}
          />

          <AnimatedPasswordInput
            label="Password"
            placeholder="••••••••"
            animationDelay="0.5s"
            {...register("password")}
            error={errors?.password?.message}
          />

          <AnimatedButton
            type="submit"
            disabled={loading}
            loading={loading}
            animationDelay="0.7s"
          >
            Sign In
          </AnimatedButton>
        </form>
      </div>

      {/* Right Side - Animated Background Panel */}
      <AnimatedBackgroundPanel 
        backgroundImage={TruckMaleva}
        title="SHIP SPARE IN TRANSIT"
        subtitle="Powered by Maleva"
        loadingText="Loading your logistics experience..."
      />
    </div>
  );
}