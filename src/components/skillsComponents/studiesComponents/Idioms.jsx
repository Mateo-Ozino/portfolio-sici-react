import { ProgressBar } from "./ProgressBar"

export function Idioms() {
  return (
    <section className="idioms">
      <ul className="idioms__list">
        <li>
          <div>
            <div>
              <h4>Spanish</h4>
              <h5>Native</h5>
            </div>
            <div className="idioms__list--progress-container">
              <ProgressBar progress={100} />
              <div className="idioms__list--score">
                <span>★</span>
                <h4>5/5</h4>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div>
            <div>
              <h4>English</h4>
              <h5>Fluent</h5>
            </div>
            <div className="idioms__list--progress-container">
              <ProgressBar progress={80}/>
              <div className="idioms__list--score">
                <span>★</span>
                <h4>4/5</h4>
              </div>
            </div>  
          </div>
        </li>
        <li>
          <div>
            <div>
              <h4>French</h4>
              <h5>Conversational</h5>
            </div>
            <div className="idioms__list--progress-container">
              <ProgressBar progress={60} />
              <div className="idioms__list--score">
                <span>★</span>
                <h4>3/5</h4>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </section>
  )
}