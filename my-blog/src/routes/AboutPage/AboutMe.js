import profilePic from '../../assets/images/Ammu4.JPG'
import NavBar from '../../components/Navigation/NavBar'
import style from "./aboutMe.module.css"
const AboutMe = () => {
  //AboutPage is shown when user navigates to path "/aboutMe" by clicking blogger in the NavBar.It renders the profile details and links to various sites and the code for the project.
  return (
    <div className={style.mainContainer}>
      <NavBar />
      <div className={style.container}>
        <div className={style.card}>
          <img src={profilePic} alt="ProfilePic" className={style.cardImage} />
          <p className={style.cardName}>Amanda Maricia Raphael</p>
          <div className={style.gridContainer}>
            <div className={style.gridChildAssignments}>156 assignments</div>

            <div className={style.gridChildProjects}>22 projects</div>
          </div>
          <ul className={style.socialIcons}>
            <li>
              <a href="https://github.com/AmandaRaphael">
                <i class="fa fa-github"></i>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/amanda-maricia-raphael-254951217/">
                <i class="fa fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="https://codepen.io/your-work/?sort_by=popularity">
                <i class="fa fa-codepen"></i>
              </a>
            </li>
          </ul>
          <div className={style.drawBorder}>
            <a
              className={style.btn}
              href="https://github.com/AmandaRaphael/Blog_Of_Thrones/tree/main/my-blog"
            >
              View Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe
