import { Button, Form } from "react-bootstrap";

export default function AssignmentEditor() {
    return (
      <Form id="wd-assignments-editor">
        <label htmlFor="wd-name"><h5>Assignment Name</h5></label>
        <Form.Control style={{ width: 600 }} id="wd-name" defaultValue="A1" className="mb-2" />
        <Form.Control style={{ width: 600, height: 400 }} as="textarea" id="wd-description" defaultValue="The assignment is available online Submit a link to the landing page of your Web application running on Netlify. The landing page should include the following: Your full name and section Links to each of the lab assignments Link to the Kambas application Links to all relevant source code repositories The Kambas application should include a link to navigate back to the landing page" />
        <br/>
        <Form.Group className="d-flex align-items-center">
          <Form.Label className="mr-3" style={{paddingRight: '20px', paddingLeft: '205px' }} htmlFor="wd-points">Points</Form.Label>
          <Form.Control style={{ width: 300 }} id="wd-points" defaultValue={100} />
        </Form.Group>
        <br/>
        <Form.Group className="d-flex align-items-center">
          <Form.Label className="mr-3" style={{paddingRight: '20px', paddingLeft: '120px' }} htmlFor="wd-group">Assignment Group</Form.Label>
          <Form.Select style={{ width: 300 }} id="wd-group">
            <option>ASSIGNMENTS</option>
          </Form.Select>
        </Form.Group>
        <br/>
        <Form.Group className="d-flex align-items-center">
          <Form.Label className="mr-3" style={{paddingRight: '20px', paddingLeft: '130px' }} htmlFor="wd-grade-as">Display Grade as</Form.Label>
          <Form.Select style={{ width: 300 }} id="wd-grade-as">
            <option>Percentage</option>
          </Form.Select>
        </Form.Group>
        <br/>
        <Form.Group>
          <Form.Group className="d-flex align-items-center">
            <Form.Label className="mr-3" style={{paddingRight: '20px', paddingLeft: '130px' }} htmlFor="wd-submission-type">Submission Type</Form.Label>
            <Form.Select style={{ width: 300 }} id="wd-submission-type">
                <option>Online</option>
              </Form.Select>
            
          </Form.Group>
        <br />
          <Form.Group style={{ paddingLeft: '280px' }}>
            
            <Form.Label>Online Entry Options</Form.Label>
            <Form.Check type="checkbox" label="Text Entry" />
            <Form.Check type="checkbox" label="Website URL" />
            <Form.Check type="checkbox" label="Media Recordings" />
            <Form.Check type="checkbox" label="Student Annotation" />
            <Form.Check type="checkbox" label="File Uploads" />
          </Form.Group>
        </Form.Group>
        <br/>
        <Form.Group>
          <Form.Group className="d-flex align-items-center">
            <Form.Label className="mr-3" style={{paddingRight: '20px', paddingLeft: '205px' }}>Assign</Form.Label>
            <Form.Label htmlFor="wd-assign-to"><b>Assign to</b></Form.Label>
          </Form.Group>
            <Form.Group style={{ paddingLeft: '280px' }}>
              <Form.Control style={{ width: 300 }} id="wd-assign-to" defaultValue="Everyone" />
              <br />
              <Form.Label htmlFor="wd-due-date"><b>Due</b></Form.Label>
              <Form.Control type="date" style={{ width: 300 }} id="wd-due-date" value="2024-05-13" />
              <br />
              <Form.Group className="d-flex align-items-center">
                <Form.Label htmlFor="wd-available-from" style={{ paddingRight: '35px' }}><b>Available From</b></Form.Label>
                <Form.Label htmlFor="wd-available-until"><b>Until</b></Form.Label>
              </Form.Group>
              <Form.Group className="d-flex align-items-center">
                <Form.Control type="date" style={{ width: 150 }} id="wd-available-from" value="2024-05-06" />
                <Form.Control type="date" style={{ width: 150 }} id="wd-available-until" />
              </Form.Group>
            </Form.Group>
        </Form.Group>
        <br />
        <hr />
        <Form.Group className="d-flex align-items-center" style={{ paddingLeft: '470px'}}>
          <Button variant="light" size="sm">Cancel</Button>
          <Button variant="danger" size="sm">Save</Button>
        </Form.Group>
        {/* <input id="wd-name" value="A1 - ENV + HTML" /><br /><br /> */}
        {/* <textarea id="wd-description" rows={10} cols={60}>
          The assignment is available online Submit a link to the landing page of 
          your Web application running on Netlify. The landing page should include 
          the following: Your full name and section Links to each of the lab 
          assignments Link to the Kambas application Links to all relevant source 
          code repositories The Kambas application should include a link to navigate 
          back to the landing page
        </textarea> */}
        {/* <br />
        <br />
        <table>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" value={100} />
            </td>
          </tr>
          <br />
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-group">Assignment Group</label>
            </td>
            <td>
              <select id="wd-group">
                <option selected value="ASSIGNMENTS">ASSIGNMENTS</option>
              </select>
            </td>
          </tr>
          <br />
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-display-grade-as">Display Grade as</label>
            </td>
            <td>
              <select id="wd-display-grade-as">
                <option selected value="PERCENTAGE">Percentage</option>
              </select>
            </td>
          </tr>
          <br />
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-submission-type">Submission Type</label>
            </td>
            <td>
              <select id="wd-submission-type">
                <option selected value="ONLINE">Online</option>
              </select>
            </td>
          </tr>
          <br />
          <tr>
            <td align="right" valign="top">
              
            </td>
            <td align="left" valign="top">
                <label>Online Entry Options</label><br/>
                <input type="checkbox" name="online-checkbox" id="wd-text-entry"/>
                <label htmlFor="wd-text-entry">Text Entry</label><br/>
                <input type="checkbox" name="online-checkbox" id="wd-website-url"/>
                <label htmlFor="wd-website-url">Website URL</label><br/>
                <input type="checkbox" name="online-checkbox" id="wd-media-recordings"/>
                <label htmlFor="wd-media-recordings">Media Recordings</label><br/>
                <input type="checkbox" name="online-checkbox" id="wd-student-annotation"/>
                <label htmlFor="wd-student-annotation">Student Annotation</label><br/>
                <input type="checkbox" name="online-checkbox" id="wd-file-upload"/>
                <label htmlFor="wd-file-upload">File Upload</label><br/>
            </td>
          </tr>
          <br />
          <tr>
            <td align="right" valign="top">
                <label>Assign</label>
            </td>
            <td>
                <label htmlFor="wd-assign-to">Assign To</label>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              
            </td>
            <td>
                <input id="wd-assign-to" value="Everyone"/>
            </td>
          </tr>
          <br />
          <tr>
          <td align="left" valign="top">
            </td>
            <td>
                <label htmlFor="wd-due-date">Due</label>
            </td>
          </tr>
          <tr>
            <td align="left" valign="top">
            </td>
            <td>
                <input type="date"
                    value="2024-05-13"
                    id="wd-due-date"/>
            </td>
          </tr>
          <br />
          <tr>
            <td>

            </td>
            <td align="left" valign="top">
                <label htmlFor="wd-available-from">Available from</label>
            </td>
            <td align="left" valign="top">
                <label htmlFor="wd-available-until">Until</label>
            </td>
          </tr>
          <tr>
            <td>

            </td>
            <td align="left" valign="top">
            <input type="date"
                    value="2024-05-13"
                    id="wd-available-from"/>
            </td>
            <td align="left" valign="top">
            <input type="date"
                    value="2024-05-13"
                    id="wd-available-until"/>
            </td>
          </tr>
        </table>
        <hr/>
        <button id="wd-cancel-button">Cancel</button>
        <button id="wd-save-button">Save</button> */}
      </Form>
  );}
  