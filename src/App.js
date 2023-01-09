import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <body>
        <nav class="navbar">
            <div class="max-width">
             <div class="logo"><a href="#">Portfolio</a></div>
              <ul class="menu">
                <li><a href="#Home">Home</a></li>
                <li><a href="#About">About</a></li>
                <li><a href="#Resume">Resume</a></li>
                <li><a href="#Contact">Contact</a></li>
              </ul>
              <div class="menu-btn">
                <i class="fas fa-bars"></i>
              </div>
            </div>
        </nav>
        <section class="Home" id="Home">
            <div class="max-width">
                <h1 class="section-title">
                     <strong>JaTanna Patterson</strong>
                </h1>
                <p class="section-sub"> Web Developer</p> 
                <a href="#" class="home-img">
                <img src="/Users/jatannapatterson/Desktop/assets/IMG_4557 (1).jpeg" alt="image of JaTanna"/> 
                </a>
            </div>
        </section>
        <section class="about" id="about">
            <span id="About"></span>
            <div class="max-width">
                <h2 class="title">About Me</h2>
                <div class="about-content">
                    <div class="column left">
                    </div>
                    <div class="column right">
                        <div class="text">My name is JaTanna Patterson</div>
                        <p>I am a Web Developer with 6 months of experience.</p>
                        <p>in languages such as javascript, and experience</p>
                        <p>with Html and CSS. I am a hardworking and determined</p>
                        <p>individual who enjoys working with others and solving problems.</p>
                        <p>I am a leader and very creative and easy to get along with</p>
                    </div>
                </div>
            </div>
        </section>
        <section class="work" id="work">
            <span id="Work"></span>
            <div class="max-width">
                <h2 class="title">My Work</h2>
                <p class="subtitle">A range of my work</p>
                <div class="work-content">
                    <a href="#" class="work-item">
                        <img src="img/Image 1-8-23 at 10.39 PM.jpg"></img>
                        <a href=' https://sara-mill.github.io/Artist-Profile/'></a>
                    </a>
                    <a href="#" class="work-item">
                        <img src="img/Image 1-8-23 at 10.41 PM.jpg"></img>
                        <a href='https://github.com/jyp1763/HotnCold'></a>
                    </a>
                    <a href="#" class="work-item">
                        <img src="img/Image 1-8-23 at 10.43 PM.jpg"></img>
                        <a href='https://github.com/jyp1763/coding_quiz'></a>
                      </a>
                    <a href="#" class="work-item">
                        <img src="img/Image 1-8-23 at 10.43 PM.jpg"></img>
                        <a href='https://github.com/jyp1763/password-generator'></a>
                    </a>
                    <a href="#" class="work-item">
                        <img src="img/Image 1-8-23 at 10.43 PM.jpg"></img>
                        <a href='https://github.com/jyp1763/socialnetwork-api'></a>
                    </a>
                    <a href="#" class="work-item">
                        <img src="img/Image 1-8-23 at 10.43 PM.jpg"></img>
                        <a href='https://github.com/jyp1763/READ-me'></a>
                    </a>
                </div>
            </div>
        </section>
        <section class="skills" id="skills">
            <span id="Skills"></span>
            <div class="max-width">
                <h2 class="title">My Resume</h2>
                <div class="skills-content">
                    <div class="text">Skills and experience</div>
                    <ul class="skills-list">
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Javascript</li>
                        <li>React</li>
                        <li>Bootstrap</li>
                        <li>Node.js and Express</li>
                    </ul>
                </div>
            </div>
        </section>
        <section class="contact" id="contact">
            <span id="Contact"></span>
            <div class="max-width">
                <h2 class="title">Contact Me</h2>
                <div class="contact-content"></div>
                <div class="column-left">
                    <div class="row">
                        <i class="fas fa-user"></i>
                        <div class="info">
                            <div class="head">Name</div>
                            <div class="sub-title">JaTanna Patterson</div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="info">
                            <div class="head">Email</div>
                            <div class="sub-title">jatannap@yahoo.com</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <script> src="script.js"</script>
    </body>
  );
}

export default App;
