export const fadeIn = (direction, delay) => {
    return{
        hidden: {
            y: direction === 'up' ? 60 : direction === 'down' ? -60 : 0,
            x: direction === 'left' ? 60 : direction === 'right' ? -60 : 0,
        },
        show: {
            y: 0,
            x: 0,
            opacity: 100,
            transition: {
                opacity: 1,
                transition: {
                //    type: "spring",
                //      duration: 5000,
                //      bounce: 0.6
                    
                    type: 'tween',
                    duration:0.75,
                    delay:delay,
                   
               }
          }

        }
    }
}