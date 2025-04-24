"use client"
import {
    Box,
    Stack,
    Text
} from '@chakra-ui/react'
import React from "react";
import {PageTitle} from "@/components/PageTitle";
import {TextLink} from "@/components/TextLink";
import {useGallery} from "@/app/helpers/useGallery";

export default function SouthSicily() {
    const gallery = useGallery({tag: 'south-sicily'})
    return (
        <Box w={'100%'}>
            <PageTitle title={'South Sicily'} subTitle={'8/7/2022'}/>
            <Box w={'100%'} textAlign={'justify'} color={'white'}>
                <Stack>
                    <Text>
                        Southern Italy, selfies, ancient ruins, seafood meals and dancing bikini clad mosaics.
                    </Text>
                    {gallery}
                    <TextLink path={'/europa2022/amsterdam'} label={'Next stop Amsterdam'}/>
                </Stack>
            </Box>
        </Box>

    )
}

