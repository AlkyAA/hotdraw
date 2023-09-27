import {Stack} from '@chakra-ui/react';
import { NavLink } from "@/components/NavLink";

export default function SideNav() {

  const navs = [
      {
        label: 'home',
        path: '/'
      },
      {
          label: "europa2022",
          path: '/europa2022'
      },
      {
        label: 'europa2016',
          path: '/europa2016'
    },
      {
          label: 'confest April 2019',
          path: '/confest'
      },
      {
          label: 'dions art',
          path: '/dions'
      },
      {
          label: 'archive',
          path: '/archive'
      },
      {
          label: 'contact',
          path: '/contact'
      }]
  const navBtns = navs.map(nav => {
    return <NavLink
        path={nav.path}
        label={nav.label}
        key={nav.path}/>
  })
  return (
    <Stack>
      {navBtns}
    </Stack>
  )
}

