import { SocialIcon } from 'react-social-icons';
export default function FindMe(){
    return (
        <div>
            <div className='socials'>
                <div><SocialIcon url="https://www.linkedin.com/in/adhip-kashyap/" bgColor='var(--orange-dim)' fgColor='var(--fg)'/></div>
                <SocialIcon url="https://www.github.com/adhipk" bgColor='var(--orange-dim)' fgColor='var(--fg)'/>
                <SocialIcon url="https://twitter.com/adhipk" bgColor='var(--orange-dim)' fgColor='var(--fg)'/>
                <SocialIcon url="mailto:adhip.kashyap@gmail.com" bgColor='var(--orange-dim)' fgColor='var(--fg)'/>
                    
            </div>
            
        </div>
    );
}