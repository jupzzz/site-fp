import img from '../../assets/images/fran1.png';
import "./about.css";

const About = () => {
    return (
        <div className="about">
            <div className="about-container">
                <div className="about-image">
                    <img src={img} alt="" />
                </div>
                <div className="about-text">
                    <h1>Sobre mim</h1>
                    <div className='about-text-content'>
                        <p>Bem-vindo(a) ao meu espaço! Sou Psicóloga formada pelo Centro Universitário Cesuca, possuo formação em TCC e DBT.
                            Como uma apaixonada pela Psicologia, estou aqui para oferecer suporte em questões emocionais, comportamentais e relacionais. Acredito na importância de construir uma relação terapêutica baseada no respeito mútuo, na empatia e na confiança.
                        </p>
                        <p>Ao longo dos anos, tenho tido a honra de mergulhar nas narrativas únicas de meus pacientes, e cada jornada compartilhada tem sido uma fonte de aprendizado e inspiração. Na terapia, exploraremos juntos os seus pensamentos, sentimentos e comportamentos, visando promover o crescimento pessoal e a construção de relações mais saudáveis. Seja qual for o desafio que você está enfrentando, estou aqui para oferecer suporte e orientação.</p>
                        <p>Fora do consultório, ao longo dos meus 33 anos, sou filha, irmã, mãe, esposa, amiga... Valorizo meu tempo com a mesma dedicação que dedico aos meus pacientes. Seja em busca de conhecimento, apreciando a natureza ou compartilhando momentos significativos com amigos e familiares</p>
                        <p>Estou aqui para ser sua parceira nessa jornada, se você busca apoio para enfrentar desafios vamos caminhar juntos rumo a uma vida que vale a pena ser vivida!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;