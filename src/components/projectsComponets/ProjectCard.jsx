import PropTypes from "prop-types";
import OpenNew from '../../assets/open_new.svg'

export function ProjectCard ({ projectName, projectImages, projectLogo }) {
  // const imageContainerRef = useRef(null);

  // const [containerWidth, setContainerWidth] = useState(0)

  // useEffect(() => {
  //   // Accede al ancho del elemento usando el ref
  //   if (imageContainerRef.current) {
  //     const elementWidth = imageContainerRef.current.clientWidth;
  //     setContainerWidth(elementWidth)
  //   }
  // }, []);

  // const numColumns = projectImages.length;

  // const containerStyle = {
  //   display: "grid",
  //   gridTemplateColumns: `repeat(${numColumns}, ${containerWidth/numColumns}px)`
  // };

  return (
    <section className="project-card">
      <header className="project-card__header">
        <div>
          <img src={projectLogo} alt="Figura circular blanca" />
          <p>{projectName}</p>
        </div>
        <div>
          <h5>Behance</h5>
          <span><img src={OpenNew} alt="Icono que redirecciona a Behance" /></span>
        </div>
      </header>
      <section className="project-card__images-container">
        {
          projectImages.map((image, index) =>
            <figure key={`${Math.floor(Math.random() * 100)}-${index}`}>
              <img src={image} alt={`Foto número ${index} del proyecto`}/>
            </figure>
          )
        }
      </section>
    </section>
  )
}

ProjectCard.propTypes = {
  projectName: PropTypes.string,
  projectImages: PropTypes.array,
  projectLogo: PropTypes.string
};