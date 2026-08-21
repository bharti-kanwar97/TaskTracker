import {api} from '../axios/api.js'
import {toast} from 'react-hot-toast'
import {useNavigate} from 'react-router-dom'
import registrationSchema from '../schemas/registrationSchema.js'
import {useForm} from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod";
export default function useRegisterData() {
     const {register,
     handleSubmit,
     setFocus,
     setError,
      formState: {errors}} = useForm({resolver: zodResolver(registrationSchema)});
    const navigate = useNavigate();
    
    const onSubmit = async (formData) => {

        try{
            const response = await api.post('/registration/register', formData)
            console.log(response.data);
            toast.success("Congrats! You have successfully registered.")
            navigate('/login');
        }
           catch (error) {
//   console.log("STATUS:", error.response?.status);
//   console.log("DATA:", error.response?.data);
//   console.log("MESSAGE:", error.response?.data?.message);
           setError("email",{
            type: "server",
            message:error.response?.data?.message
           })
            toast.error(error.response?.data?.message);
        }
    }
//     const handleFetch= async() =>{
//         try{
//             const response = await api.get('/registration/')
//             console.log(response.data);
//         }
//         catch(err)
// {
//     console.log(err)
// }
//     }
    return {onSubmit,register,handleSubmit,errors, setFocus}
}