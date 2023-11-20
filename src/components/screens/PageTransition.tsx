import { animated, useSpring, config } from "@react-spring/web";

const PageTransition = ({ children }: { children: React.ReactNode }) => {
    const springs = useSpring({
        from: { clipPath: 'circle(1%)' },
        clipPath: 'circle(100%)',
        delay: 500,
        config: {
            ...config.slow,
            friction: 180
        }
    })

    return (
        <animated.div style={springs}>
            {children}
        </animated.div>
    )
}

export default PageTransition;