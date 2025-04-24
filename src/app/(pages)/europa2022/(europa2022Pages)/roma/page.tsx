"use client"
import {
    Box,
    Stack,
    Text
} from '@chakra-ui/react'
import React from "react";
import {PageTitle} from "@/components/PageTitle";
import {useGallery} from "@/app/helpers/useGallery";

export default function Roma() {
    const gallery = useGallery({tag: 'roma'})
    return (
        <Box w={'100%'}>
            <PageTitle title={'Roma'} subTitle={'18/7/2022'}/>
            <Box w={'100%'} textAlign={'justify'} color={'white'}>
                <Stack>
                    <Text>
                        Flying into Rome as the sun set and streets began to light up, we peered out of the taxi windows
                        with a mix of regret and wander. We knew that because of cancelled flights we only had that
                        night in Rome and would fly out in the morning. Our accommodation was a surprising find. An old
                        19th century manor house owned by generations of a German family in love with antiquity and
                        mythological histories. Donatella loved my name and knew all about the checked life of
                        Alkibiades. Shame, I love shocking people with the history of my wild Athenian namesake.
                    </Text>
                    <Text>
                        Here are some pics of that brief but lovely stay. The end of six weeks travelling through
                        wonderful parts of Europe dripping with art, culture and unique landscape.
                    </Text>
                    {gallery}
                </Stack>
            </Box>
        </Box>

    )
}

