import React from "react"

const Form = () => (
  <article>
    <section>
      <h1>Forms</h1>
      <form>
        <fieldset>
          <legend>Legend Example</legend>

          <label for="id1" class="inp">
            <input type="text" id="id1" placeholder="&nbsp;" />
            <span class="textarea">Label</span>
            <span class="border"></span>
          </label>
          <span class="helper">Helper text if necessary.</span>

          <label for="id2" class="inp">
            <input type="password" id="id2" placeholder="&nbsp;" />
            <span class="textarea">Password</span>
            <span class="border"></span>
          </label>

          <div className="col-2">
            <div>
              <label for="id3" class="inp">
                <input type="text" id="id3" placeholder="&nbsp;" />
                <span class="textarea">First Name</span>
                <span class="border"></span>
              </label>
              <span class="error">Error messages when appropriate.</span>
            </div>

            <div>
              <label for="id4" class="inp">
                <input type="text" id="id4" placeholder="&nbsp;" />
                <span class="textarea">Last Name</span>
                <span class="border"></span>
              </label>
            </div>
          </div>

          <label for="id5" class="inp">
            <input type="email" id="id5" placeholder="&nbsp;" />
            <span class="textarea">Email</span>
            <span class="border"></span>
          </label>

          <div className="dropdown">
            <select class="select-css" id="id6">
              <option>This is a native select element</option>
              <option>Apples</option>
              <option>Bananas</option>
              <option>Grapes</option>
              <option>Oranges</option>
            </select>
          </div>

          <div className="radiobuttons">
            <label>Radiobuttons</label>
            <ul>
              <li>
                <input type="radio" id="male" name="gender" value="male" />
                <label for="male">
                  <span></span>Male
                </label>
              </li>
              <li>
                <input type="radio" id="female" name="gender" value="female" />
                <label for="female">
                  <span></span>Female
                </label>
              </li>
            </ul>
          </div>

          <div className="urlinput">
            <label for="url">URL Input</label>
            <input type="url" placeholder="http://mrmrs.cc" />
          </div>

          <div className="textarea">
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
  </article>
)

export default Form
