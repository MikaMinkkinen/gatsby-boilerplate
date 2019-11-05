import React from "react"

const Form = () => (
  <section>
    <h1>Forms</h1>
    <form>
      <fieldset>
        <legend>Legend Example</legend>

        <div>
          <label>Text Input Label</label>
          <input type="text" />
          <p>Helper text if necessary.</p>
        </div>

        <div>
          <label>Password</label>
          <input type="password" />
          <p>Error messages when appropriate.</p>
        </div>

        <div>
          <label for="first-name">First Name</label>
          <input type="text" id="first-name" />
        </div>

        <div>
          <label for="last-name">Last Name</label>
          <input type="text" id="last-name" />
        </div>

        <div>
          <label for="email">Email</label>
          <input type="email" id="email" />
        </div>

        <div>
          <label for="gender">Dropdown</label>
          <select>
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
          </select>
        </div>

        <div>
          <label>Radio Buttons</label>
          <ul>
            <li>
              <label>
                <input type="radio" /> Label 1
              </label>
            </li>
            <li>
              <label>
                <input type="radio" /> Label 2
              </label>
            </li>
            <li>
              <label>
                <input type="radio" /> Label 3
              </label>
            </li>
          </ul>
        </div>

        <div>
          <label for="url">URL Input</label>
          <input type="url" placeholder="http://mrmrs.cc" />
        </div>

        <div>
          <label>Text area</label>
          <textarea></textarea>
        </div>

        <div>
          <label>
            <input type="checkbox" /> This is a checkbox.
          </label>
        </div>

        <div>
          <input type="submit" value="Submit" />
        </div>
      </fieldset>
    </form>
  </section>
)

export default Form