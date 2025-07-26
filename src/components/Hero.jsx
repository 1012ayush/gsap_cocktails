import gsap from 'gsap';
import {useGSAP} from '@gsap/react'
import { SplitText} from 'gsap/all'
const Hero = () => {
    useGSAP(() => {
        const heroSplit = new SplitText('.title' , {type: 'chars , words'});

        const paragraphSplit = new SplitText('.subtitle' , {type:'lines'});

        heroSplit.chars.forEach((char) => char.classList.add('text-gradient'));

        gsap.from(heroSplit.chars, {  // from is for new state to current state
            yPercent: 100, // moves 100% up
            duration: 1.8, // time to finish animation
            ease: 'expo.out' ,  // expo.out means fast at starting then slow at end as animation passes
                stagger: 0.05  // how fast one word come after other
        });

        gsap.from(paragraphSplit.lines, {
            opacity:0 ,  // transparency
            yPercent: 100,  //moves 100% up
            duration:1.8,  // the time in which it will finish
            ease:'expo.out', // in what way we want top show it
            stagger:0.06, // how fast one word come after other or line
            delay: 1,  // this section will start after 1 second of heroSplit
        });

        gsap.timeline({  // timeline deals with all time related things whe it will have to start when it have to end
            scrollTrigger: { // for the triggering in scroll like leaf
                trigger: '#hero', // animation will trigger from hero sections
                start:'top top', // starts from top of hero sections
                end: 'bottom top',  //  end leaf animation will end on bottom
                scrub:true,  //Animation progress is directly related to scroll
            }
        })
            .to('.right-leaf' , {y: 200} , 0) // .to further deals with timeline we can use from or anything else
            .to('.left-leaf' , {y: -200 } , 0)
    } , []);
    return (
        <>
        <section id="hero" className="noisy">
            <h1 className="title">MOJITO</h1>

            <img
                src="/images/hero-left-leaf.png"
                alt="left-leaf"
                className="left-leaf"
            />

            <img
                src="/images/hero-right-leaf.png"
                alt="right-leaf"
                className="right-leaf"
            />

            <div className="body">
                <div className="content">
                    <div className="space-y-5 hidden md:block">
                        <p>Cool. Crisp. Classic.</p>
                        <p className="subtitle">
                            Sip the Spirit <br /> of Summer
                        </p>
                    </div>
                    <div className="view-cocktails">
                        <p className="subtitle">
                            Every cocktail on our menu is a blend of premium ingredients,
                            creative flair, and timeless recipes - designed to delight
                            your senses.
                        </p>
                        <a href="#cocktails">View Cocktails</a>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
export default Hero;