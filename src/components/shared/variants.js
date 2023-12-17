export const fadeIn = (direction, delay) => {
    return{
        hidden: {
            y: direction === 'up' ? 60 : direction === 'down' ? -60 : 0,
            x: direction === 'left' ? 60 : direction === 'right' ? -60 : 0,
        },
        show: {
            y: 0,
            x: 0,
            opacity: 1,
            transition: {
                opacity: 1,
                transition: {
                    type: 'tween',
                    duration:3,
                    delay:delay,
                    ease: [0.50, 0.50, 0.50, 0.75]
                }
            }

        }
    }
}