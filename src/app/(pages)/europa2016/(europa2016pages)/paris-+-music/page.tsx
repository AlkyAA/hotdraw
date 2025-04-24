"use client"
import {Box, Flex, Stack, Text} from '@chakra-ui/react'
import React from "react";
import {PageTitle} from "@/components/PageTitle";
import {TextLink} from "@/components/TextLink";
import {imageSrc} from "@/utils/utils";

export default function ParisMusic() {
    const parisMusic = imageSrc('Europa2016/paris-+-music/dxdmf9jeaokffhhkt8v3')
    return (
        <Box w={'100%'}>
            <PageTitle title={'Paris + Music'} subTitle={'17/7/2016'}/>
            <Flex maxWidth={'100%'}>
                <img width={'49%'} alt="Paris + 2 Tourists Alky" src={parisMusic}/>
            </Flex>
            <Box w={'100%'} textAlign={'justify'} color={'white'}>
                <Stack>
                    <PageTitle title={'Morning at the Marais'} isSubHeader/>
                    <Text>
                        Music is everywhere in Paris, like most big cities. Why it sounds better in French is a
                        mystery to me, probably just a bias I have as hearing and deciphering lyrics has always
                        been difficult for me anyway. The vid-collage following has Jazz we heard in an underground
                        club, Riv 38, rapping on the metro, a baroque chamber ensemble playing at the Sorbonne and
                        classical guitar with sparrow by the Seine..
                    </Text>
                    <TextLink path={'/europa2016'} label={'Back'}/>
                </Stack>
            </Box>
        </Box>
    )
}
