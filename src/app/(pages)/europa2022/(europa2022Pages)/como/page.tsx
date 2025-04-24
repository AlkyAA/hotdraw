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


export default function Como() {
    const gallery = useGallery({tag: 'como'})
    return (
        <Box w={'100%'}>
            <PageTitle title={'Lake Como'} subTitle={'12/6/2022'}/>
            <Box w={'100%'} textAlign={'justify'} color={'white'}>
                <Stack>
                    <Text>
                        Before Karol and I Ieft Milan for Sardinia we managed a day trip north to beautiful Lake Como.
                        It&apos;s gloriously immodest and lined with very expensive gems.
                    </Text>
                    {gallery}
                    <TextLink path={'/europa2022/sardinia'} label={'Next Stop Sardinia'}/>
                </Stack>
            </Box>
        </Box>

    )
}
