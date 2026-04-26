const features = [
  {
    title: 'Disease Detection',
    text: 'Detects major corn leaf diseases such as Northern Leaf Blight, Common Rust, and Gray Leaf Spot using deep learning.',
  },
  {
    title: 'Nutrient Deficiency',
    text: 'Classifies nutrient deficiency conditions from corn leaf images with explainable visual outputs.',
  },
  {
    title: 'Pest Detection',
    text: 'Identifies visible pest-related crop damage and supports early intervention for farmers.',
  },
  {
    title: 'Yield Prediction',
    text: 'Uses agronomic features to estimate yield and support smarter decision-making in the field.',
  },
];

const milestones = [
  ['Project Proposal', 'Completed'],
  ['Progress Presentation 1', 'Completed'],
  ['Progress Presentation 2', 'Completed'],
  ['Research Paper Submission', 'Completed'],
  ['Final Assessment & Viva', 'Upcoming'],
];

const team = [
  {
    name: 'Chathumadura K.K.K',
    role: 'Group Leader',
    email: 'it22542274@my.sliit.lk',
    image: '/images/chathumadura.png',
  },
  {
    name: 'Chandrasena P.D.T.S',
    role: 'Group Member',
    email: 'it22180452@my.sliit.lk',
    image: '/images/chandrasena.png',
  },
  {
    name: 'Perera U S A',
    role: 'Group Member',
    email: 'it22055958@my.sliit.lk',
    image: '/images/perera.png',
  },
  {
    name: 'Jayalathge B.A.',
    role: 'Group Member',
    email: 'it22600066@my.sliit.lk',
    image: '/images/jayalathge.png',
  },
];

const supervisors = [
  {
    name: 'Harinda Fernando',
    role: 'Supervisor',
    email: 'harinda.f@sliit.lk',
    image: '/images/harinda.png',
  },
  {
    name: 'Amila Alexander',
    role: 'Co-Supervisor',
    email: 'amila.al@sliit.lk',
    image: '/images/amila.png',
  },
];


const documentGroups = [
  {
    category: '01. Forms',
    subtitle: 'Official registration and approval forms',
    items: [
      {
        title: 'Topic Assessment Form (TAF)',
        description: 'Initial research topic registration and assessment document.',
        file: '/documents/topic-assessment-form-taf.pdf',
        type: 'PDF',
      },
    ],
  },
  {
    category: '02. Proposal Documents',
    subtitle: 'Individual project proposal reports',
    items: [
      {
        title: 'Nutrient Prediction Proposal',
        description: 'Proposal report by Chathumadura K.K.K.',
        file: '/documents/proposal-nutrient-chathumadura.pdf',
        type: 'PDF',
      },
      {
        title: 'Disease Detection Proposal',
        description: 'Proposal report by Chandrasena P.D.T.S.',
        file: '/documents/proposal-disease-chandrasena.pdf',
        type: 'PDF',
      },
      {
        title: 'Pest Detection Proposal',
        description: 'Proposal report by Perera U.S.A.',
        file: '/documents/proposal-pest-perera.pdf',
        type: 'PDF',
      },
      {
        title: 'Yield Prediction Proposal',
        description: 'Proposal report by Jayalathge B.A.',
        file: '/documents/proposal-yield-jayalathge.pdf',
        type: 'PDF',
      },
    ],
  },
  {
    category: '03. Presentations',
    subtitle: 'Progress presentation slide decks',
    items: [
      {
        title: 'Progress Presentation 1 (PP1)',
        description: 'First research progress presentation.',
        file: '/documents/progress-presentation-1-pp1.pdf',
        type: 'PDF',
      },
      {
        title: 'Progress Presentation 2 (PP2)',
        description: 'Second research progress presentation.',
        file: '/documents/progress-presentation-2-pp2.pdf',
        type: 'PDF',
      },
    ],
  },
];

export default function App() {
  return (
    <div className="page-shell">
      <header className="site-header">
        <a href="#home" className="brand">
          <img src="/images/logo.png" alt="CornXpert logo" />
          <span>CornXpert</span>
        </a>
        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#domain">Domain</a>
          <a href="#features">Features</a>
          <a href="#methodology">Methodology</a>
          <a href="#results">Results</a>
          <a href="#milestones">Milestones</a>
          <a href="#documents">Documents</a>
          <a href="#team">Team</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section id="home" className="hero-section section">
          <div className="hero-frame">
            <div className="hero-bg" />
            <div className="hero-overlay" />

            <div className="hero-content">
              <div className="hero-left">
                <p className="eyebrow">AI-Powered Intelligent Agriculture</p>
                <h1>
                  Corn<span>Xpert</span>
                </h1>
                <h2>Smart Corn Farm Management System</h2>
                <p className="hero-copy">
                  Leveraging deep learning and machine learning to detect diseases,
                  analyze nutrients, identify pests, and predict yield for data-driven
                  decisions and sustainable agriculture.
                </p>

                <div className="hero-tags">
                  <span>AI-Powered Predictions</span>
                  <span>High Accuracy Models</span>
                  <span>Data-Driven Insights</span>
                  <span>Sustainable Farming</span>
                </div>

                <div className="hero-actions">
                  <a href="#domain" className="btn btn-primary">Explore Project</a>
                  <a href="#documents" className="btn btn-secondary">View Documents</a>
                </div>
              </div>

              <div className="hero-right">
                <div className="hex-wrap hex-disease"><img src="/images/disease.png" alt="Disease detection" /></div>
                <div className="hex-wrap hex-pest"><img src="/images/pest.png" alt="Pest detection" /></div>
                <div className="hex-wrap hex-nutrient"><img src="/images/nutrient.png" alt="Nutrient deficiency" /></div>
                <div className="hex-wrap hex-corn"><img src="/images/corn.png" alt="Crop health" /></div>
                <div className="ai-center">AI</div>
              </div>
            </div>
          </div>
        </section>

        <section id="domain" className="section content-section">
          <div className="section-intro">
            <p className="section-kicker">Research Domain</p>
            <h3>Integrated, Explainable Corn Health Intelligence</h3>
            <p>
              CornXpert addresses the lack of farmer-friendly, integrated crop health systems by combining disease detection,
              pest analysis, nutrient deficiency classification, and yield prediction inside one platform.
            </p>
          </div>
          <div className="grid four-grid">
            <article className="card"><h4>Literature Survey</h4><p>Existing systems mainly focus on a single problem and often lack explainability or real deployment support.</p></article>
            <article className="card"><h4>Research Gap</h4><p>No unified corn platform integrates disease, pest, nutrient, and yield intelligence with actionable guidance.</p></article>
            <article className="card"><h4>Objectives</h4><p>Build a practical AI-powered system that helps farmers identify crop issues early and make better decisions.</p></article>
            <article className="card"><h4>Technologies</h4><p>React, FastAPI, ResNet50, MobileNetV2, XGBoost, TensorFlow Lite, Grad-CAM, and SHAP.</p></article>
          </div>
        </section>

        <section id="features" className="section alt-section">
          <div className="section-intro narrow-center">
            <p className="section-kicker">Core Features</p>
            <h3>Four Intelligent Modules</h3>
          </div>
          <div className="grid feature-grid">
            {features.map((item) => (
              <article className="feature-card" key={item.title}>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="methodology" className="section content-section">
          <div className="section-intro narrow-center">
            <p className="section-kicker">Methodology</p>
            <h3>How CornXpert Works</h3>
          </div>
          <div className="steps">
            <div className="step"><span>1</span><p>Capture or upload crop image</p></div>
            <div className="step"><span>2</span><p>AI model analyzes symptoms</p></div>
            <div className="step"><span>3</span><p>Prediction and explanation generated</p></div>
            <div className="step"><span>4</span><p>Farmer receives guidance</p></div>
          </div>
        </section>

        <section id="results" className="section alt-section">
          <div className="section-intro">
            <p className="section-kicker">Results</p>
            <h3>Performance Summary</h3>
          </div>
          <div className="results-grid">
            <div className="result-item"><strong>82%</strong><span>Disease Detection Accuracy</span></div>
            <div className="result-item"><strong>83%</strong><span>Nutrient Prediction Accuracy</span></div>
            <div className="result-item"><strong>66.15%</strong><span>Pest Detection Accuracy</span></div>
            <div className="result-item"><strong>0.93</strong><span>Yield Prediction R²</span></div>
          </div>
        </section>

        <section id="milestones" className="section content-section">
          <div className="section-intro">
            <p className="section-kicker">Milestones</p>
            <h3>Project Timeline</h3>
          </div>
          <div className="timeline">
            {milestones.map(([title, status]) => (
              <div className="timeline-item" key={title}>
                <h4>{title}</h4>
                <span className={status === 'Upcoming' ? 'status upcoming' : 'status'}>{status}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="documents" className="section alt-section documents-section">
          <div className="section-intro narrow-center">
            <p className="section-kicker">Documents</p>
            <h3>Project Documents & Presentations</h3>
            <p>
              Download official project forms, proposal reports, and progress presentation documents.
            </p>
          </div>

          <div className="document-groups">
            {documentGroups.map((group) => (
              <div className="document-group" key={group.category}>
                <div className="document-group-header">
                  <h4>{group.category}</h4>
                  <span>{group.items.length} Files</span>
                </div>

                <div className="docs-grid">
                  {group.items.map((doc) => (
                    <a
                      className="doc-card download-card"
                      key={doc.file}
                      href={doc.file}
                      download
                    >
                      <div className="doc-icon">📄</div>
                      <div className="doc-info">
                        <h5>{doc.title}</h5>
                        <p>{doc.description}</p>
                        <span className="doc-type">{doc.type}</span>
                      </div>
                      <div className="download-badge">Download ↓</div>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>


        <section id="team" className="section content-section">
          <div className="section-intro narrow-center">
            <p className="section-kicker">Team</p>
            <h3>Project Members</h3>
          </div>
          <div className="grid team-grid">
            {team.map((member) => (
              <article className="person-card" key={member.email}>
                <img src={member.image} alt={member.name} />
                <h4>{member.name}</h4>
                <span className={member.role === 'Group Leader' ? 'role role-leader' : 'role'}>{member.role}</span>
                <p>Faculty of Computing<br />Sri Lanka Institute of Information Technology<br />Malabe, Sri Lanka</p>
                <a href={`mailto:${member.email}`}>{member.email}</a>
              </article>
            ))}
          </div>

          <div className="section-intro narrow-center supervisor-intro">
            <p className="section-kicker">Supervisors</p>
            <h3>Academic Guidance</h3>
          </div>
          <div className="grid supervisor-grid">
            {supervisors.map((person) => (
              <article className="supervisor-card" key={person.email}>
                <img src={person.image} alt={person.name} />
                <div>
                  <h4>{person.name}</h4>
                  <span className="role role-leader">{person.role}</span>
                  <p>Faculty of Computing<br />Sri Lanka Institute of Information Technology<br />Malabe, Sri Lanka</p>
                  <a href={`mailto:${person.email}`}>{person.email}</a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="section alt-section contact-section">
          <div className="section-intro narrow-center">
            <p className="section-kicker">Contact</p>
            <h3>Get in Touch</h3>
            <p>For project details, research demonstrations, or academic inquiries, contact the CornXpert team.</p>
          </div>
          <div className="contact-card">
            <p><strong>Email:</strong> it22542274@my.sliit.lk</p>
            <p><strong>Institution:</strong> Sri Lanka Institute of Information Technology, Malabe</p>
          </div>
        </section>
      </main>

      <footer className="site-footer">© 2025 CornXpert · SLIIT Faculty of Computing</footer>
    </div>
  );
}
