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


export default function Amalfi() {
    const gallery = useGallery({tag: 'amalfi'})
    return (
        <Box w={'100%'}>
            <PageTitle title={'The Amalfi Coast'} subTitle={'29/6/2022'}/>
            <Box w={'100%'} textAlign={'justify'} color={'white'}>
                <Stack>
                    <Text>
                        Italy&apos;s Amalfi coast lies south of Naples on wild, muscular terrain that juts out into the sea
                        like a rude chin. It is a continuous line of mountain spurs dramatically plunging into the
                        Mediterranean&apos;s Tyrrhenian Sea. Every inch of it bursting with life - either vegetation
                        sprouting from the volcanic soils or towns teaming with the business of food, drink or tourism,
                        usually all three. Italy has proven over and over again to me that you must have confidence to
                        live here, to drive or walk or cross the street here. To negotiate every part of your day, but
                        then the reward comes. The history, the poverty, the outrageous wealth, the aesthetics, it is
                        all there confidently, naturally.
                    </Text>
                    <Text>
                        Karol and I stayed in a place by the coast called Maori and took ferry rides to explore more of
                        the coast. Our day always bookmarked by an afternoon Aperitivo of Campari Spritz and tasty local
                        snacks. We also stayed in a hill top town called Ravello. People love to get married there, or
                        look famous there. A really beautiful place with more of a medieval vibe than the coast. Hey,
                        even Bogart and Gina Lollobrigida made a terrible move there called Beat The Devil. A rich
                        English industrialist fell in love with the place and restored a beautiful villa called Cimbrone
                        that overlooks the coast. It has spectacular gardens, with grottos and statues set out in 19
                        century formality and romance. I loved it especially because right at the end of the garden walk
                        there is a cafe perched discreetly on the edge of a cliff and on that hot summer day I bought a
                        lemon granita and cooled off under the trees. Ah Amalfi, povo one day, super rich the next.
                    </Text>
                    {gallery}
                    <TextLink path={'/europa2022/palermo'} label={'Next Stop Palermo'}/>
                </Stack>
            </Box>
        </Box>

    )
}
