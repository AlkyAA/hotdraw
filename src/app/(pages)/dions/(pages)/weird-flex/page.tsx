"use client"
import {Box } from '@chakra-ui/react'
import React from "react";
import {useGallery} from "@/app/helpers/useGallery";
import {TextLink} from "@/components/TextLink";

export default function WeirdFlex() {
    const gallery = useGallery({
        title: 'Weird Flex But OK',
        subTitle: 'Staged for one night only, 6-3-19',
        tag: 'weird-flex'
    })
    return (
        <Box w={'100%'}>
            {gallery}
            <TextLink path={'/dions/tyrenneum'} label={'Tyrenneum Show'}/>
        </Box>

    )
}
