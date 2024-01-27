import { Progress } from "@material-tailwind/react";

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
              {/* <Progress value={100} className="idioms__list--progress-bar" /> */}
              <div className="w-full bg-gray-200 rounded-full h-2.5 idioms__list--progress-bar">
                <div className="bg-white h-2.5 rounded-full" style={{ width: '100%' }}></div>
              </div>
              <p>★ 5/5</p>
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
              <Progress value={85} className="idioms__list--progress-bar" />
              ★ 4/5
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
              <Progress value={50} className="idioms__list--progress-bar" />
              ★ 4/5
            </div>
          </div>
        </li>
      </ul>
    </section>
  )
}