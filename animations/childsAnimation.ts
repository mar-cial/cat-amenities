import { Variants } from "framer-motion"

export const mainContentVariants: Variants = {
    enter: {
        opacity: 1,
        y: 0
    },
    initial: {
        opacity: 0
    },
    exit: {
        opacity: 0,
        y: -2
    }
}

export const loadingVariants: Variants = {
    enter: {
        height: 50
    },
    initial: {
        height: 0
    },
    exit: {
        height: 0
    }
}