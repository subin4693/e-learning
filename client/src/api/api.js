import axios from "axios";
const BASE_URL = import.meta.env.VITE_BASE_URL

//auth apis

export const signup = async(data) => {
    const res = await axios.post(BASE_URL + "users/signup", data, {
        withCredentials: true,
    });

    if (res.data.status !== "success") {
        console.log(res);
        throw new Error(res.message);
    }
      
    return res.data.data.user;

}


export const signin = async(data) => {
    const res = await axios.post(BASE_URL + "users/signin", data, {
        withCredentials: true,
    });

    if (res.data.status !== "success") {
        console.log(res);
        throw new Error(res.message);
    }
     
    return res.data.data.user;
}

export const verify = async(data)=>{
    const res = await axios.get(BASE_URL+"users/verify",{withCredentials:true})
    if(res.data.status !== "success"){
        console.log(res);
        throw new Error(res.message);
    }
      
    return res.data.data.user;
}

//courses

export const getSingleCourse = async(id) => {
    const res = await axios.get(BASE_URL+"courses/"+id)

    if(res.data.status !== "success"){
        console.log(res);
        throw new Error(res.message);
    }
    
    return res.data.data.course
}

export const createCourse = async(title) =>{
    const res = await axios.post(BASE_URL+"instructor/courses",{title},{withCredentials:true})

    if(res.data.status !== "success"){
        console.log(res);
        throw new Error(res.message);
    }
    
    return res.data.data.data
}

export const updateCourseDetails = async(id,data) => {
    const res = await axios.put(BASE_URL+"instructor/courses/"+id,data, {withCredentials:true})
    
    if(res.data.status !== "success"){
        console.log(res);
        throw new Error(res.message);
    }
  
    return res.data.data.data  

}


export const getAllCategorys = async() => {
    const res = await axios.get(BASE_URL+"categorys")
    if(res.data.status !== "success"){
        console.log(res);
        throw new Error(res.message);
    }
    
    return res.data.data.category  
}

export const createChapter = async(data,id) => {
    const res = await axios.post(BASE_URL+"instructor/courses/"+id+"/chapters",data,{withCredentials:true})
    if(res.data.status !== "success"){
        console.log(res);
        throw new Error(res.message);
    }
    return res.data.data.chapter
}

// get all instructor courses for home

// http://localhost:5000/api/v1/instructor/courses

export const getAllCoursesForInstructor = async() => {
    const res = await axios.get(BASE_URL+"instructor/courses",{withCredentials:true})
    if(res.data.status !== "success"){
        console.log(res);
        throw new Error(res.message);
    }
     
    return res.data.data.data
}

// get Single chapters

// http://localhost:5000/api/v1/chapters/

export const getSingleChapters = async(id) => {
    const res = await axios.get(BASE_URL+"chapters/"+id,{withCredentials:true})
    if(res.data.status !== "success"){
        console.log(res);
        throw new Error(res.message);
    }
   
    return res.data.data.chapter
}

// /instructor/courses/661573dbf618b494935a467a/chapters/66159005040c58523b302db2

export const updateChapterDetails = async(courseId, chapterId,data) => {
    const res = await axios.put(BASE_URL+"instructor/courses/"+courseId+"/chapters/"+chapterId,data,{withCredentials:true})
    if(res.data.status !== "success"){
        console.log(res);
        throw new Error(res.message);
    }
    
    return res.data.data.chapter
}

//get courses for home page

export const getAllCourses = async(limit,page,category) => {
    let queryStr = "";
    if(limit)
        queryStr += "limit="+limit
    
    if(page)
        queryStr +="&&page="+page

    if(category)
        queryStr +="&&cat="+category
     
    const res = await axios.get(BASE_URL+"courses?"+queryStr)

    console.log(res);
    if(res.data.status !== "success"){
        console.log(res);
        throw new Error(res.message);
    }
     
    return res.data.data 
}

//add to cart 

export const addToCart = async(data) => {
    // http://localhost:5000/api/v1/cart/add
    const res = await axios.post(BASE_URL+"cart/add",data,{withCredentials:true})

 
    if(res.data.status !== "success"){
        console.log(res);
        throw new Error(res.message);
    }
     
    return res.data.data 
}

export const getCartItems = async()=>{
    const res = await axios.get(BASE_URL+"cart",{withCredentials:true})
    if(res.data.status !== "success"){
        console.log(res);
        throw new Error(res.message);
    }
     
    return res.data.data.cartItems 
}

export const enrollCourse = async(id)=>{
    // courses/661761e4b09ffcd6283d835e/enroll
    const res = await axios.post(BASE_URL+"courses/"+id+"/enroll",{},{withCredentials:true})
    if(res.data.status !== "success"){
        console.log(res);
        throw new Error(res.message);
    }
 
    return res.data.data 
}


export const getAllEnrolledCourses = async()=>{
    const res = await axios.get(BASE_URL+"purcheases",{withCredentials:true})
    if(res.data.status !== "success"){
        console.log(res);
        throw new Error(res.message);
    }
     
    return res.data.data.courses 
}
export const getSinglePurcheasedCourse = async(id)=>{
    const res = await axios.get(BASE_URL+"purcheases/"+id,{withCredentials:true})
    if(res.data.status !== "success"){
        console.log(res);
        throw new Error(res.message);
    }
    
    return res.data.data.courses 
}

export const getChats = async () => {
    const res = await axios.get(BASE_URL+"chats",{withCredentials:true});
    if(res.data.status !== "success"){
        console.log(res);
        throw new Error(res.message);
    }
     
    return res.data.data.chats

}

export const sendMessage = async (chatid,data) => {
    const res = await axios.post(BASE_URL+"messages/send/"+chatid,data,{withCredentials:true});
    if(res.data.status !== "success"){
        console.log(res);
        throw new Error(res.message);
    }
     
    return res.data.data.message
}
export const getAllMessages = async (chatid,type) => {
    const res = await axios.get(BASE_URL+"messages/"+chatid+"?type="+type,{withCredentials:true});
    if(res.data.status !== "success"){
        console.log(res);
        throw new Error(res.message);
    }
     

    return res.data.data
}

export const userToInstructor = async() => {
    const res = await axios.post(BASE_URL+"instructor",{},{withCredentials:true})
    if(res.data.status !== "success"){
        console.log(res);
        throw new Error(res.message);
    }
    

    return res.data.data
}
export const logout = async () => {
    const res = await axios.post(BASE_URL+"users/signout",{},{withCredentials:true})
    if(res.data.status !== "success"){
        console.log(res);
        throw new Error(res.message);
    }
     

    return res.data.data 
}