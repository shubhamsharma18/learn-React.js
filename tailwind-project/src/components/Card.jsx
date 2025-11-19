import React from "react"
function Card(props){
return (
<>
 <figure class="bg-red-300 mt-4 rounded-m p-8 dark:bg-slate-800">
  <img class="w-24 h-24  mx-auto" src="https://sportsdigest.in/wp-content/uploads/2025/11/John-Cena-Becomes-WWE-Grand-Slam-Champion-1-860x484.webp" alt="" width="384" height="512"/>
  <div class="pt-6 space-y-4">
    <blockquote>
      <p class="text-lg font-medium">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
    <figcaption class="font-medium">
      <div class="text-sky-500 dark:text-sky-400">
        {props.username}
      </div>
      <div>
        Staff Engineer, {props.location},
        {props.arr1}
      </div>
    </figcaption>
  </div>
</figure>

</>
    
)
}
export default Card