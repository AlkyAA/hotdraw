import {Box } from '@chakra-ui/react'
import React from "react";
import {PageTitle} from "@/components/PageTitle";

export default function WeirdFlex() {
    return (
        <Box w={'100%'}>
            <PageTitle title={'Weird Flex But OK'} subTitle={'Staged for one night only, 6-3-19'}/>
            <Box w={'100%'} textAlign={'justify'} color={'white'}>

            </Box>
        </Box>

    )
}

