import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuItem, NavbarMenuToggle, NavbarMenu, Button } from '@nextui-org/react'
import { Logo } from './Icons'
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import ModalCitePages from '../pages/ModalCite/ModalDate.pages'

export const NavbarComponent = () => {
  const [openMenu, setOpenMenu] = useState(false)
  const [openModal, setOpenModal] = useState(false)
  const { pathname } = useLocation()

  const menuItems = [
    { name: 'Inicio', path: '/' },
    { name: 'Servicios', path: '/services' },
    { name: 'Acerca de nosotros', path: '/about' },
    { name: 'Contáctanos', path: '/contact' },
    { name: 'Paga tu factura', path: '/bill' }
  ]

  const handleOpenModal = () => {
    setOpenModal(true) // Cambia el estado para abrir la modal al hacer clic en "Agenda tu cita"
  }

  const handleCloseModal = () => {
    setOpenModal(false) // Cambia el estado para cerrar la modal
  }

  return (
    <>
      <ModalCitePages
        isOpen={openModal}
        handleClose={handleCloseModal}
      />
      <Navbar
        onMenuOpenChange={setOpenMenu}
        height={'12lvh'}
        className='border-b border-b-gray-300'>
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={openMenu ? 'Menu cerrado' : 'Menu abierto'}
            className='sm:hidden'
          />
          <NavbarBrand>
            <Logo
              width={100}
              height={100}
            />
          </NavbarBrand>
        </NavbarContent>
        <NavbarContent
          className='hidden gap-8 sm:flex'
          justify='center'>
          <NavbarItem
            className='text-sm'
            isActive={pathname === '/'}>
            <Link to='/'>Inicio</Link>
          </NavbarItem>
          <NavbarItem
            className='text-sm'
            isActive={pathname === '/services'}>
            <Link to='/services'>Servicios</Link>
          </NavbarItem>
          <NavbarItem
            className='text-sm'
            isActive={pathname === '/about'}>
            <Link to='/about'>Acerca de nosotros</Link>
          </NavbarItem>
          <NavbarItem
            className='text-sm'
            isActive={pathname === '/contact'}>
            <Link to='/contact'>Contáctanos</Link>
          </NavbarItem>
          <NavbarItem
            className='text-sm'
            isActive={pathname === '/bill'}>
            <Link to='/bill'>Paga tu factura</Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify='end'>
          <NavbarItem>
            <Button
              className='text-sm'
              color='primary'
              onClick={handleOpenModal}>
              Agenda tu cita
            </Button>
          </NavbarItem>
        </NavbarContent>
        <NavbarMenu>
          {menuItems.map(({ name, path }, index) => (
            <NavbarMenuItem
              key={`${name}-${index}`}
              isActive={pathname === path}>
              <Link
                className='w-full'
                to={path}>
                {name}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </>
  )
}
