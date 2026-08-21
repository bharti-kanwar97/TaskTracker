import { useState, useEffect } from "react";
import { api } from "../axios/api.js";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import loginSchema from "../schemas/loginSchema.js";
const useLoginUser = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setFocus,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });
  const [formData, setFormData] = useState(null);
  const onSubmit = async (formDatas) => {
   
    try {
      const { data } = await api.post("/registration/login", formDatas);
      localStorage.setItem("token", data.token);
      toast.success("successfully logged in");

      reset();
      navigate("/home");
    } catch (error) {
       console.log(error);
      
      toast.error(error.response?.data?.message);
    }
  };
  const fetchData = async () => {
    try {
   
 const token = localStorage.getItem("token");
   console.log(token)
    if (!token) return;
      const response = await api.get("/registration/profile");
      console.log(response.data?.user);
      setFormData(response.data?.user);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return { register, handleSubmit, setFocus, errors, onSubmit, formData };
};

export default useLoginUser;
