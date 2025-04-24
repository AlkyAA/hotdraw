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


export default function Grotto() {
    const gallery = useGallery({tag: 'grotto'})
    return (
        <Box w={'100%'}>
            <PageTitle title={'Neptune\'s Grotto'} subTitle={'15/6/2022'}/>
            <Box w={'100%'} textAlign={'justify'} color={'white'}>
                <Stack>
                    <Text>
                        After cycling for hours in the Summer heat we reached Grotta di Nettuno on the coast from
                        Alghero. We had no idea how special it was. Millions of years of careful construction, one drop
                        at a time. Neptune imagining watery cathedrals and bizarre pipe organs, mountains and lakes, all
                        hidden away in his dream of time slowly passing.
                    </Text>
                    {gallery}
                    <TextLink path={'/europa2022/pompeii'} label={'Next Stop Pompeii'}/>
                </Stack>
            </Box>
        </Box>

    )
}
