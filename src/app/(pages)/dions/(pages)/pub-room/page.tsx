"use client"
import {
    Box
} from '@chakra-ui/react'
import React from "react"
import {TextLink} from "@/components/TextLink";
import {useGallery} from "@/app/helpers/useGallery";
export default function PubRoom() {
    const gallery = useGallery({
        title: 'Pub Room Show',
        subTitle: 'Staged for one night only, 6-3-2018',
        tag: 'pub-room'
    })
    return (
        <Box w={'100%'}>
            {gallery}
            <TextLink path={'/dions/weird-flex'} label={'Weird Flex Show'}/>
        </Box>

    )
}
