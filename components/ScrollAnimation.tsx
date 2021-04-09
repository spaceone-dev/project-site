import { useEffect } from 'react';

export default function ScrollAnimation() {
    useEffect(() => {
        // Scroll Animation
        const saDefaultMargin = 150;
        let saTriggerMargin = 0;
        let saTriggerHeight = 0;
        const saElementList = document.querySelectorAll('.sa') as unknown as HTMLDataElement[];

        const saFunc = function () {
            saElementList.forEach((element) => {
                if (!element.classList.contains('show')) {
                    saTriggerMargin = saDefaultMargin;
                    saTriggerHeight = element.getBoundingClientRect().top + saTriggerMargin;
                    if (window.innerHeight > saTriggerHeight) {
                        const delay: number = (element.dataset.saDelay) ? Number.parseInt(element.dataset.saDelay, 10) : 0;
                        setTimeout(() => {
                            element.classList.add('show');
                        }, delay);
                    }
                }
            });
        };

        window.addEventListener('load', saFunc);
        window.addEventListener('scroll', saFunc);
    }, []);

    return null;
}
