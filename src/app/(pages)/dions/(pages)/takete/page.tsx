"use client"
import {
    Box
} from '@chakra-ui/react'
import React from "react"
import {TextLink} from "@/components/TextLink";
import {useGallery} from "@/app/helpers/useGallery";
export default function Takete() {
    const gallery = useGallery({
        title: 'Takete',
        tag: 'takete'
    })
    return (
        <Box w={'100%'}>
            {gallery}
            <TextLink path={'/dions/bag-show'} label={'Bag Show'}/>
        </Box>

    )
}
