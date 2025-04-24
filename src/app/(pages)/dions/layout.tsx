import type { PropsWithChildren } from 'react'
import {Box} from "@chakra-ui/react";

export default function PageLayout({children}:PropsWithChildren) {
    return (
        <Box
            data-component={'dions-page-layout'}
            width={'100%'}
            height={'100%'}>
            {children}
        </Box>
    )
}
