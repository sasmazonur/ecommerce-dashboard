import './newuser.css'

export default function NewUser() {
  return (
    <div className="newuser">
        <h1 className="newuser-title">New User</h1>
        <form className="newuser-form">
            <div className="newuser-item">
                <label>Username</label>
                <input type="text" placeholder="{}"className="newuser-input"/>
            </div>
            <div className="newuser-item">
                <label>Full Name</label>
                <input type="text" placeholder="{}"className="newuser-input"/>
            </div>
            <div className="newuser-item">
                <label>Email</label>
                <input type="text" placeholder="{}"className="newuser-input"/>
            </div>
            <div className="newuser-item">
                <label>Password</label>
                <input type="text" placeholder="password"className="newuser-input"/>
            </div>
            <div className="newuser-item">
                <label>Phone</label>
                <input type="text" placeholder="{}"className="newuser-input"/>
            </div>
            <div className="newuser-item">
                <label>Gender</label>
                <div className="newuser-gender">
                <input type="radio" name="gender" id="male" value="male" />
                <label for="male">Male</label>
                <input type="radio" name="gender" id="female" value="female" />
                <label for="female">Female</label>
                <input type="radio" name="gender" id="other" value="other" />
                <label for="other">Other</label>
                </div>
            </div>
            <div className="newuser-item">
                <label>Active</label>
                <select className="newuser-select" name="active" id="active">
                    <option value="yes">Yes</option>
                    <option value="yes">No</option>
                </select>
            </div>
            <button className="newuser-button">Create</button>
        </form>
    </div>
  )
}
