import {useLayoutEffect, useState} from 'react';

type UseWindowPositionProps = {
    id: string;
    height: number;
    elements?: number;
    };

const useWindowPosition = ({id, height, elements = 1}: UseWindowPositionProps) => {
    const [animation, setAnimation] = useState<boolean>(false);
    
    useLayoutEffect(() => {
        function updatePosition() {
            try{
                const element = window.document.getElementById(id) as HTMLElement;
                const offsetSetHeight = element.offsetHeight;
                if(window.scrollY > offsetSetHeight * elements * height) {
                    setAnimation(true);
                }
            } catch(err) {
                setAnimation(false);
            }
        }
        window.addEventListener('scroll', updatePosition);
        updatePosition();
        return () => window.removeEventListener('scroll', updatePosition);

    }, [id, height, elements]);
    return animation; 
}

export default useWindowPosition
