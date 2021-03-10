export const fade = {
    hidden: {
        opacity: 0
    },
    show: {
        opacity: 1,
        transition: {
            ease: "easeOut",
            duration: 0.75,
        }
    }
}

export const fadeAndSlide = {
    hidden: {
        opacity: 0,
        marginTop: 16,
        scale: 0.94
    },
    show: {
        opacity: 1,
        marginTop: 0,
        scale: 1,
        transition: {
            ease: "easeOut",
            duration: 0.75
        }
    }
}

export const imageScale: any = {
    hidden: {
        scale: 0.5,
        opacity: 0,
    },
    show: {
        opacity: 1,
        scale: 1,
        transform: { transition: { ease: "easeOut", duration: 0.75 } }
    },
}

export const fadeAndSlideLists = {
    hidden: {
        opacity: 0,
        marginTop: 15
    },
    show: {
        opacity: 1,
        marginTop: 0,
        transition: { 
            transition: { 
                ease: "easeOut", 
                duration: 0.75 
            } 
        }
    }
}