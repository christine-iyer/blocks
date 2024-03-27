import { React, useState } from 'react'
import "../App"

export default function ColorPicker() {
     const [color, setColor] = useState([
          "color", "setColor",
          "color", "setColor",
          "color", "setColor",
          "color", "setColor",
          "color", "setColor",
          "color", "setColor"])
     return (
          <div>
               <h1>ColorPicker</h1>
               <p>
                    Radio buttons:
                    <label>
                         <input type="radio" name="myRadio" style={{ color: "red" }} value="option1" />
                    </label>
                    <label>
                         <input
                              type="radio"
                              name="myRadio"
                              value="option2"
                              defaultChecked={true}
                         />
                    </label>
                    <label>
                         <input type="radio" name="myRadio" value="option3" />
                    </label>
               </p>
               <div className="grid-container">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
  <div>6</div>
  <div>7</div>
  <div>8</div>
  <div>9</div>
  <div>10</div>
  <div>11</div>
  <div>12</div>
</div>

          </div>
     )
}
