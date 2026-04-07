import { GradientElement } from '../shared/gradientElement';
import styles from './hero.module.css'

export function Hero() {
    return (
        <section className={styles.container}>
            <div>
                <img src="https://www.figma.com/design/n5VvSPIn10hAur35YkuPUI/Portfolio-Design--Community-?node-id=16-307&t=myEghc5crJKH82Xx-4" alt="HeroImg" />
                <GradientElement />
            </div>
            <div className={styles.container}>
                <p>Developer who</p>

                <p>
                    Judges a book its <span>cover</span>
                </p>
                <p>Because </p>
            </div>
        </section>
        
    );
}