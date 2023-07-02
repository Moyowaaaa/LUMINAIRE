import {ref,watchEffect} from 'vue'

let isIntersecting = ref(null)
export const intersectionObserver = (item:any, options:any) => {

   

    
    return new Promise<void>((resolve) => {
        const observer = new window.IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    console.log(entry.isIntersecting)
                    resolve();
                }
                
            });
        }, options);
        observer.observe(item);
    });

    

    
};

watchEffect(() => {
    return isIntersecting

    console.log(isIntersecting.value)
})




