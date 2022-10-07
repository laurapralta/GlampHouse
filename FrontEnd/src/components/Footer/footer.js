import { SocialNetworks } from '../SocialNetworks/SocialNetworks';
import logo from '../../assets/isologotipo.svg';
import styled from './styles.module.scss';



export function Footer() {
  return (
    <footer className={styled.footer}>
      <div className="max-width-1180 mx-auto bg-primary h-100 d-flex justify-content-between align-items-center px-3">
        <span className="text-white d-flex align-items-center"><img src={logo} alt="logo"/> ©2022 Glamp House </span>
        <SocialNetworks color="#FFFFFF"/>
      </div>
    </footer>
  )
}
