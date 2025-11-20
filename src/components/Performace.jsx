import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import {performanceImages, performanceImgPositions } from "../constants/index.js";
import {useMediaQuery} from "react-responsive";

const Performace = () => {
    const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });
    const sectionRef = useRef(null);

     useGSAP(
        () => {
            const sectionEl = sectionRef.current;
            if (!sectionEl) return;

            // Text Animation
            gsap.fromTo(
                ".content p",
                { opacity: 0, y: 10 },
                {
                    opacity: 1,
                    y: 0,
                    ease: "power1.out",
                    scrollTrigger: {
                        trigger: ".content p",
                        start: "top bottom",
                        end: "top center",
                        scrub: true,
                        invalidateOnRefresh: true,
                    },
                }
            );
              if (isMobile) return;

            // Image Positioning Timeline
            const tl = gsap.timeline({
                defaults: { duration: 2, ease: "power1.inOut", overwrite: "auto" },
                scrollTrigger: {
                    trigger: sectionEl,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1,
                    invalidateOnRefresh: true,
                },
            });
             // Position Each Performance Image
            performanceImgPositions.forEach((item) => {
                if (item.id === "p5") return;

                const selector = `.${item.id}`;
                const vars = {};

                if (typeof item.left === "number") vars.left = `${item.left}%`;
                if (typeof item.right === "number") vars.right = `${item.right}%`;
                if (typeof item.bottom === "number") vars.bottom = `${item.bottom}%`;

                if (item.transform) vars.transform = item.transform;

                tl.to(selector, vars, 0);
            });
        },
        { scope: sectionRef, dependencies: [isMobile] }
    );

  return (
    <section id="performance" ref={sectionRef}>
      <h2>Performace de graficos next-level. Vamos nessa.</h2>
      <div className="wrapper">
        {performanceImages.map((item, index) => (
          <img
            key={index}
            src={item.src}
            className={item.id}
            alt={`Performance Image #${index + 1}`}
          />
        ))}
      </div>
      <div className="content">
        <p>
          Execute fluxos de trabalho intensivos em gráficos com uma resposta que
          acompanha a sua imaginação. A família de chips M4 possui uma GPU com
          um motor de ray tracing acelerado por hardware de segunda geração, que
          renderiza imagens mais rapidamente., então{" "}
          <span className="text-white">
            gaming parece mais imersivo e realista do que nunca.
          </span>{" "}
          E o Dynamic Caching otimiza a memória rápida integrada para aumentar
          drasticamente a utilização média da GPU — proporcionando um enorme
          ganho de desempenho para os apps profissionais e jogos mais
          exigentes.
        </p>
      </div>
    </section>
  );
};

export default Performace;
