import React, {useEffect} from "react";

export default function ScrollAnimation() {
    useEffect(function onFirstMount() {

        // Scroll Animation
        const saDefaultMargin = 150;
        let saTriggerMargin = 0;
        let saTriggerHeight = 0;
        const saElementList = document.querySelectorAll('.sa');

        const saFunc = function() {
            // @ts-ignore
            for (const element of saElementList) {
                if (!element.classList.contains('show')) {
                    if (element.dataset.saMargin) {
                        saTriggerMargin = parseInt(element.dataset.saMargin);
                    } else {
                        saTriggerMargin = saDefaultMargin;
                    }

                    if (element.dataset.saTrigger) {
                        saTriggerHeight = document.querySelector(element.dataset.saTrigger).getBoundingClientRect().top + saTriggerMargin;
                    } else {
                        saTriggerHeight = element.getBoundingClientRect().top + saTriggerMargin;
                    }

                    if (window.innerHeight > saTriggerHeight) {
                        let delay = (element.dataset.saDelay) ? element.dataset.saDelay : 0;
                        setTimeout(function() {
                            element.classList.add('show');
                        }, delay);
                    }
                }
            }
        }

        window.addEventListener('load', saFunc);
        window.addEventListener('scroll', saFunc);
    }, []);

    return null;
}