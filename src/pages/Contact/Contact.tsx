import React from 'react';
import './Contact.css';
import CustomisedButton from '../../components/CustomisedButton/CustomisedButton';
import emailIcon from '../../assets/contact/copy-my-email.svg';
import resumeIcon from '../../assets/contact/resume.svg';
import gitIcon from '../../assets/git-icon.svg';
import linkedinIcon from '../../assets/linkdn-icon.svg';
import noteIcon from '../../assets/note-icon.svg';
import figmaIcon from '../../assets/figma-icon.svg';

const Contact: React.FC = () => {
  const userEmail = 'praveenmanchi.work@proton.me'; // Replace with actual email
  const resumeUrl = 'https://drive.google.com/uc?export=download&id=1-Rg2c36FfnNILcTeQp-PmiQp4C-4LhvK'; 

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(userEmail)
      .then(() => {
        alert('Email copied to clipboard!');
      })
      .catch(err => {
        console.error('Failed to copy email: ', err);
        alert('Failed to copy email. Please try again.');
      });
  };

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Praveen_Manchi_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className='contact-container'>
      <div className='contact-message'>
        <span className='contact-greeting'>
          Hey there! Did someone just say espresso?
        </span>
        <span className='contact-description'>
          I'm always happy to meet new people from the Internet, help fellow
          designers/engineers, or participate in events—virtual or otherwise.
          The best way to get in touch with me is through Twitter. However, if
          you prefer the old-fashioned way, you can copy my email.
        </span>
        <div className='contact-buttons-container'>
          <CustomisedButton 
            label={'Copy my e-mail'} 
            img={emailIcon} 
            onClick={handleCopyEmail} 
          />
          <CustomisedButton 
            label={'Resume'} 
            img={resumeIcon} 
            onClick={handleDownloadResume} 
          />
          <nav className='footer__empty-section-icons'>
            {[
              {
                src: gitIcon,
                alt: 'GitHub',
                link: 'https://github.com/praveenmanchi',
              },
              {
                src: figmaIcon,
                alt: 'Figma',
                link: 'https://www.figma.com/@praveenmanchi',
              },
              {
                src: noteIcon,
                alt: 'Notion',
                link: 'https://www.notion.so/praveenmanchi',
              },
              {
                src: linkedinIcon,
                alt: 'LinkedIn',
                link: 'https://www.linkedin.com/in/praveenmanchi',
              },
            ].map((icon, index) => (
              <a
                key={index}
                href={icon.link}
                target='_blank'
                rel='noopener noreferrer'
              >
                <img src={icon.src} alt={icon.alt} className='footer__logo' />
              </a>
            ))}
          </nav>
        </div>
      </div>
      <div className='contact-pdf-thumbnail'>
        <iframe
          src='https://drive.google.com/file/d/1-Rg2c36FfnNILcTeQp-PmiQp4C-4LhvK/preview'
          width='680px'
          height='800px'
          style={{ border: 'none', borderRadius: '8px' }}
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;