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

export default function Milano() {
    const gallery = useGallery({tag: 'milano'})

    return (
        <Box w={'100%'}>
            <PageTitle title={'Milano'} subTitle={'11/6/2022'} color={'sitePink'}/>
            <Box w={'100%'} textAlign={'justify'} color={'white'}>
                <Stack>
                    <Text>
                        I was dumbfounded standing in front of Milan&apos;s Central Railway Station. It looked huge and brutal
                        and like it had landed here accidentally from some other time and place - maybe even some other
                        planet. I googled a bit to get the history around this weird beautiful building streaming with
                        life. Afterwards I wandered what it was like for the architect....
                    </Text>
                    <Text>
                        Your name is Ulisse Stacchini. You were born in 1871 in the city of Florence. You train as an
                        architect and dream of the grand classicism of the Greeks and Romans. Your talents eventually
                        land you a commission to design Milan’s Central Station. The political tide in Europe and in
                        your country is eager for re invention. Dreams of power and lost Empires collide with all other
                        ideologies. The brutality of WW1 is fresh in the memory. Your commission is to design and build
                        a train station to connect your country with the rest of Europe. A northern funnel to transport
                        people, goods and wealth south toward your capital. It will be the biggest, grandest station in
                        Europe.
                    </Text>
                    <Text>
                        You begin to incorporate the organic stylised flourishes of Art Nouveau. Your classicism is re
                        invented and you present your designs for final approval even as your grand temple is rising out
                        of the ground. Your designs are challenged by the fashionistas. The ruling fascists demand you
                        adapt again. You need to reflect the new political order. We dream of the old Empire. Its
                        symbols of power must be inserted. The old Rome displayed a ‘Fasce’, a sheaf of rods and an axe.
                        Put that on too. Decorate with wild aggressive animals to show our strength and power....

                    </Text>
                    <Text>
                        Here&apos;s some pics of Milan&apos;s Central Station, at one time the largest in Europe. It&apos;s huge and
                        brutal looking. A mix of Neo Classicism and Art Deco with adornments from the fascist era under
                        Mussolini. We stayed nearby and spent a lot of time using it as a train station and dining,
                        drinking and day dreaming in its many many specialists eateries of exceptional quality - pasta,
                        seafood, coffee, salad, gelato, pastry, cheese, wine - man these guys live well.
                    </Text>
                    {gallery}
                    <TextLink path={'/europa2022/como'} label={'Day Trip to Lake Como'}/>
                </Stack>
            </Box>
        </Box>

    )
}
