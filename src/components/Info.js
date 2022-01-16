import profile_photo from "../img/an-quach.JPG";

export default function Info() {
    return (
        <div className="info">
            <img src={profile_photo} alt="An Quach" className="profile-img" />
            <h2>An Quach</h2>
            <p className="job_title">MERN Fullstack Developer</p>
            <p className="contact">quachan888@gmail.com</p>
            <div className="call-to-action">
                <button className="btn btn-light">
                    <i class="fas fa-envelope"></i> Email
                </button>
                <button className="btn btn-dark">
                    <i class="fab fa-linkedin"></i> LinkedIn
                </button>
            </div>
        </div>
    );
}
