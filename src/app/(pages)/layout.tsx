import type { PropsWithChildren } from 'react'
import {Box} from "@chakra-ui/react";

export default function PageLayout({children}:PropsWithChildren) {
    return (
        <Box
            data-component={'page-layout'}
            height={'100%'}>
            {children}
        </Box>
    )
}
