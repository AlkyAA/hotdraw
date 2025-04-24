"use client"
import React, {useState, useEffect} from "react";
import {
    Box,
    Flex,
    Image,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    IconButton,
    useMediaQuery, Center
} from "@chakra-ui/react";
import {usePathname} from "next/navigation";
import {PageTitle} from "@/components/PageTitle";
import {breakpoints} from "@/theme/theme";
import SideNav from "@/components/SideNav";

export function Header() {
    const path = usePathname().split('/')
    const pathName = path[1]
    const pageName = path[path.length - 1]
    const [isOpen, setIsOpen] = useState(false)
    const [hideBurgerMenu] = useMediaQuery(
        `(min-width: ${breakpoints.sm})`
    )
    if (isOpen && hideBurgerMenu) {
        setIsOpen(false)
    }

    let src
    switch (pathName) {
        case '':
            src = 'forest.jpg'
            break
        case 'europa2022':
            switch (pageName) {
                case 'amsterdam-con':
                    src = undefined
                    break
                default:
                    src = `${pathName}.jpg`
            }
            break
        case 'dions':
            src = `${pathName}.jpg`
            break

        default:
            src = `${pathName}.jpg`
    }
    return (
        <Box
            margin={'40px 0'}
            w={'100%'}
            p={{
                base: '0 5px',
                sm: 0
            }}
        >
            <Flex mb={'5px'}>
                <PageTitle title={`Alky's Place`} color={'#CC66CC'}/>
                <IconButton
                    aria-label={'burger menu'}
                    onClick={() => setIsOpen(true)}
                    backgroundColor={'#e9eaf3'}
                    w={'40px'}
                    h={'40px'}
                    borderRadius={'50%'}
                    _hover={{
                        backgroundColor: 'rgba(255, 255, 128, .5 )'
                    }}
                    display={{
                        base: 'block',
                        sm: 'none'
                    }}
                    icon={
                        <Image
                            src={'/assets/Hamburger.svg'}
                            alt={'hamburger-icon'}
                        />
                    }
                />
            </Flex>
            {src && <Image src={`/assets/headers/${src}`} alt={'header image'} width={'100%'}/>}
            <Modal
                onClose={() => setIsOpen(false)}
                isOpen={isOpen}
                isCentered
            >
                <ModalOverlay/>
                <ModalContent>
                    <ModalBody backgroundColor={'rgba(255, 255, 128, .4 )'} onClick={() => setIsOpen(false)}>
                        <Center>
                            <SideNav/>
                        </Center>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </Box>
    )
}
