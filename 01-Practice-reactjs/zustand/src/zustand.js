import {create} from "zustand"
const mystore=create((set,get)=>{
    return{
        count:1,
        name:"shubham sharma",
        inc:()=>{
            set((state)=>{

                return{
   count:state.count + 1
                }
             
            })
        },
        capital:()=>{
            let {name}=get()
            set({

                name:name.charAt(0).toUpperCase()+ name.slice(1)
            })

        }

    }
})
export default mystore