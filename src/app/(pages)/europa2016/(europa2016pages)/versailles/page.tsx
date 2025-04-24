"use client"
import {Box, Stack, Text} from '@chakra-ui/react'
import React from "react";
import {PageTitle} from "@/components/PageTitle";
import {TextLink} from "@/components/TextLink";
import {useGallery} from "@/app/helpers/useGallery";

export default function Versailles() {
    const versailles = useGallery({tag: 'versailles'})
    return (
        <Box w={'100%'}>
            <PageTitle title={'Versailles'} subTitle={'16/7/2016'}/>
            <Box w={'100%'} textAlign={'justify'} color={'white'}>
                <Stack>
                    <Text>
                        There's not much that can be said that has not already been said about a place like the Palace
                        of Versailles, known as Chateau Versailles. We wondered through it's many rooms, shoulder to
                        shoulder with it's many tourists, we wondered through it's gardens both ordered and wild and
                        marvelled at the design, the form, the scale, the views accented by distant fountains.
                        We dangled our feet into it's cool waters and felt replenished in the hot July sun. I drew
                        the wild horses jumping out of the centre of a large fountain.
                    </Text>
                    <Text>
                        Exhausted we walked the short walk back to our apartment in the town nearby. We feasted on
                        seafood and prawns and cheese and tomatoes that we had bought earlier in the day at the markets
                        there. This was our little palace and we were the king and queen, just for one night. We slept
                        easily, knowing that there was no revolution that we had stirred that would unseat us and drag
                        us off into the darkness of some Bastille or other!
                    </Text>
                    {versailles}
                    <TextLink path={'/europa2016'} label={'Back'}/>
                </Stack>
            </Box>
        </Box>
    )
}
