import {useMediaQuery} from "react-responsive";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";



const Highlights = () => {
    const isMobile = useMediaQuery({  query: '(max-width: 1024px)' });

    useGSAP(() => {
        gsap.to(['.left-column', '.right-column'], {
            scrollTrigger: {
                trigger: '#highlights',
                start: isMobile ? 'bottom bottom' : 'top center'
            },
            y: 0,
            opacity: 1,
            stagger: 0.5,
            duration: 1,
            ease: 'power1.inOut'
        });
    })

  return (
    <section id="highlights">
      <h2>Nunca teve um tempo melhor para um upgrade.</h2>
      <h3>Aqui o que Você tem com o novo MacBook Pro.</h3>

      <div className="masonry">
        <div className="left-column">
          <div>
            <img src="/laptop.png" alt="Laptop" />
            <p>Passe por tarefas dificies com ate 9.8x rapidez.</p>
          </div>
          <div>
            <img src="/sun.png" alt="Sun" />
            <p>
              Um Display <br />
              Liquid Retina XDR <br />
              Maravilhoso.
            </p>
          </div>
        </div>
        <div className="right-column">
          <div className="apple-gradient">
            <img src="/ai.png" alt="AI" />
            <p>
              Feito para <br />
              <span>Apple Intelligence.</span>
            </p>
          </div>
          <div>
            <img src="/battery.png" alt="Battery" />
            <p>
              Até
              <span className="green-gradient"> 14 hours a mais </span>
               de bateria.
              <span className="text-dark-100"> (Chega Até 24 horas.)</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
