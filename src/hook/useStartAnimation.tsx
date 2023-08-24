import { useEffect, useState } from 'react'; 

type useStartAnimationType = () => boolean;

const useStartAnimation: useStartAnimationType = () => {
    const [animated, setAnimated] = useState<boolean>(false);
    useEffect(() => {
        setAnimated(true);
    }, []);
    return animated;
}

export default useStartAnimation
