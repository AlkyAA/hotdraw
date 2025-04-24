"use client"

import React from "react";
import {Box, Image, Stack, Text} from "@chakra-ui/react";
import {useGallery} from "@/app/helpers/useGallery";
import {TextLink} from "@/components/TextLink";

export default function Tyrenneum() {
    const gallery = useGallery({
        title: 'Tyrenneum 2016',
        subTitle: 'Kudos Gallery - Paddington Sydney',
        tag: 'tyrenneum'
    })
    return (
        <Box w={'100%'} textAlign={'justify'} color={'white'}>
            <Stack>
                <Text color={'pink'}>
                   Dee Avro, June 3 FB post:
                </Text>
                <Text>
                    "Originally i wanted Tyrannium to feel like something outta cheese-tv like Street Sharks or Duckula.
                    More recently, Tyrannium started becoming just a metaphor about my own chaotic life. At the time i
                    was living in a dirty share house, waking up in the same clothes hungover, fare evading only to get
                    to class late while having no breakfast. This will always feel way more fucked up and real then any
                    Glow-in-the-dark dinosaurs will ever be. The work in the show is a representation of that kind of
                    existence."
                </Text>
                <Text color={'pink'}>
                    **The Surgery** Lumiere on Paper (2016) 55x65cm
                </Text>
                <Image src={'/assets/dions/surgery.jpg'} alt={'surgery'} />
            </Stack>
            {gallery}
            <TextLink path={'/dions/takete'} label={'Takete Show'}/>
        </Box>
    )
}
