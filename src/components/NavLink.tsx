"use client"
import Link from "next/link";
import {Box} from "@chakra-ui/react";
import {usePathname} from "next/navigation";

type Props = {
    label: string,
    path: string
}
export function NavLink({label, path}: Props) {
    const routerPath = usePathname()
    const shortPath = path.substring(1)
    const isActive = (routerPath.includes(shortPath) && (label !== 'home')) || routerPath === path
    const trimColour = isActive ? '#d01a71' : '#444'
    return (
        <Link href={path}>
            <Box
                borderLeft={`4px solid ${trimColour}`}
                fontSize={'15px'}
                textAlign={'left'}
                color={isActive ? 'white' : '#999'}
                background={isActive ? '#333' : '#111'}
                _hover={{
                    background: '#333'
                }}
                w={'122px'}
                h={'43px'}>
                <Box
                    lineHeight={'18px'}
                    pos={'relative'}
                    top={'3px'}
                    left={'10px'}
                    width={'calc(100% - 10px)'}
                    height={'calc(100% - 10px)'}
                >{label}</Box>
            </Box>
        </Link>
    )
}
