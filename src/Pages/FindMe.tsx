import { SocialIcon } from 'react-social-icons';

const iconStyle = { width: 44, height: 44 };

export default function FindMe(){
    return (
        <div>
            <div className='socials'>
                <SocialIcon url="https://www.linkedin.com/in/adhip-kashyap/" bgColor='var(--orange-dim)' fgColor='var(--fg)' style={iconStyle}/>
                <SocialIcon url="https://www.github.com/adhipk" bgColor='var(--orange-dim)' fgColor='var(--fg)' style={iconStyle}/>
                <SocialIcon url="https://twitter.com/adhipk" bgColor='var(--orange-dim)' fgColor='var(--fg)' style={iconStyle}/>
                <SocialIcon url="mailto:adhip.kashyap@gmail.com" bgColor='var(--orange-dim)' fgColor='var(--fg)' style={iconStyle}/>
                <a href="https://resume.adhipk.dev" className="resume-link" title="View Resume">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                        <polyline points="14 2 14 8 20 8"/>
                        <line x1="16" y1="13" x2="8" y2="13"/>
                        <line x1="16" y1="17" x2="8" y2="17"/>
                        <polyline points="10 9 9 9 8 9"/>
                    </svg>
                </a>
            </div>
        </div>
    );
}