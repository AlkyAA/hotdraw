"use client"
import {Box, Image} from "@chakra-ui/react";
import {usePathname} from "next/navigation";
import {PageTitle} from "@/components/PageTitle";

type Props = {
    width: string
}
export function Header({width}: Props) {
    const path = usePathname().split('/')
    const pathName = path[1]
    const pageName = path[path.length - 1]

    let src
    switch (pathName) {
        case '':
            src = 'forest.png'
            break
        case 'europa2022':
            switch (pageName) {
                case 'amsterdam-con':
                    src = undefined
                    break
                default:
                    src = `${pathName}.jpeg`
            }
            break
        case 'dions':
            src = `${pathName}.png`
            break

        default:
            src = `${pathName}.jpeg`
    }
    return (
        <Box
            margin={'40px 0'}
            w={width}>
            <PageTitle title={`Alky's Place`} color={'#CC66CC'}/>
            {src && <Image src={`/assets/headers/${src}`} alt={'header image'} width={'100%'}/>}
        </Box>
    )
}
