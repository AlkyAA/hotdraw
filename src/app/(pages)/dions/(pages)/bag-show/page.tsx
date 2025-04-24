"use client"
import {
    Box,
} from '@chakra-ui/react'
import React from "react";
import {TextLink} from "@/components/TextLink";
import {useGallery} from "@/app/helpers/useGallery";


export default function BagShow() {
    const gallery = useGallery({
        tag: 'bag-show',
        title: 'Bag Show',
        subTitle: 'Shown at a conference in New Zealand, 28-8-17'
    })
    return (
        <Box w={'100%'}>
            {gallery}
            <TextLink path={'/dions/pub-room'} label={'Pub Room Show'}/>
        </Box>

    )
}

