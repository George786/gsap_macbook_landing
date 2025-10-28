import useMacbookStore from "../store";
import clsx from "clsx";
import {Canvas} from "@react-three/fiber";
import StudioLights from "./three/StudioLights.jsx";
import ModelSwitcher from './three/ModelSwitcher.jsx'
import {useMediaQuery} from "react-responsive";

const ProductViewer = () => {
    const { color, scale, setColor, setScale } = useMacbookStore();

    const isMobile = useMediaQuery({ query: '(max-width: 1024px)'});
    const SCALE_14_DESKTOP = 0.06;
    const SCALE_16_DESKTOP = 0.08;
    const MOBILE_SCALE_ADJUSTMENT = 0.03;
    return (
        <section id="product-viewer">
            <h2>Take a closer look.</h2>

            <div className="controls">

                <div className="flex-center gap-5 mt-5">
                    <div className="color-control">
                        <div
                            onClick={() => setColor('#adb5bd')}
                            className={clsx('bg-neutral-300', color === '#adb5bd' && 'active')}
                        />
                        <div
                            onClick={() => setColor('#2e2c2e')}
                            className={clsx('bg-neutral-900', color === '#2e2c2e' && 'active')}
                        />
                    </div>

                    <div className="size-control">
                        <div
                        onClick={() => setScale(SCALE_14_DESKTOP)}
                        className={clsx(scale === SCALE_14_DESKTOP ? 'bg-white text-black' : 'bg-transparent text-white')}
                        >
                        <p>14"</p>
                    </div>
                    <div
                     className={clsx(scale === SCALE_16_DESKTOP ? 'bg-white text-black' : 'bg-transparent text-white')}
                    >
                    <p>16"</p>
                </div>
                    </div>
                </div>
            </div>

            <Canvas id="canvas" camera={{ position: [0, 2, 5], fov: 50, near: 0.1, far: 100}}>
                <StudioLights />
                <ModelSwitcher scale={isMobile ? scale - MOBILE_SCALE_ADJUSTMENT : scale} isMobile={isMobile} />
            </Canvas>
        </section>
    )
}
export default ProductViewer