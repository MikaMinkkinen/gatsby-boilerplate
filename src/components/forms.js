import React from "react"

const Form = () => (
  <section>
    <article>
      <h1>Forms</h1>
      <form>
        <fieldset>
          <legend>Legend Example</legend>

          <label for="inp" class="inp">
            <input type="text" id="inp" placeholder="&nbsp;" />
            <span class="textarea">Label</span>
            <span class="border"></span>
          </label>
          <span class="helper">Helper text if necessary.</span>

          <label for="inp" class="inp">
            <input type="password" id="inp" placeholder="&nbsp;" />
            <span class="textarea">Password</span>
            <span class="border"></span>
          </label>
          <span class="error">Error messages when appropriate.</span>

          <div className="col-2">
            <div>
              <label for="inp" class="inp">
                <input type="text" id="first-name" placeholder="&nbsp;" />
                <span class="textarea">First Name</span>
                <span class="border"></span>
              </label>
              <span class="error">Error messages when appropriate.</span>
            </div>

            <div>
              <label for="inp" class="inp">
                <input type="text" id="last-name" placeholder="&nbsp;" />
                <span class="textarea">Last Name</span>
                <span class="border"></span>
              </label>
              <span class="error">Error messages when appropriate.</span>
            </div>
          </div>

          <label for="inp" class="inp">
            <input type="email" id="email" placeholder="&nbsp;" />
            <span class="textarea">Email</span>
            <span class="border"></span>
          </label>
          <span class="error">Error messages when appropriate.</span>

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
    </article>
  </section>
)

export default Form
