"use client"
import {Box, Stack, Text} from '@chakra-ui/react'
import React from "react";
import {PageTitle} from "@/components/PageTitle";
import {TextLink} from "@/components/TextLink";
import {imageSrc} from "@/utils/utils";

export default function ParisVdefeat() {
    const parisVdefeat = imageSrc('Europa2016/paris-v-poverty/fvlkpedloxzlod8cilri')
    return (
        <Box w={'100%'}>
            <PageTitle title={'Paris-V-Poverty'} subTitle={'14/7/2016'}/>
            <img alt="paris-v-defeat" src={parisVdefeat}/>
            <Box w={'100%'} textAlign={'justify'} color={'white'}>
                <Stack>
                    <Text>
                        Paris and poverty are two words that don't normally go together, but one does contain the other.
                        I came upon this piece of street art today and it got me thinking.
                    </Text>
                    <Text>
                        A number of years ago I started off my IT career with National Geographic Channel and the image
                        of the 'Afghan Girl' seemed to be constantly reappearing. The original was taken by a guy called
                        Steve McCurry in late 1984 at a Pakistan refugee camp filled with thousands of fleeing Afghans.
                        He heard children laughing while he was taking in scenes of poverty, desperation and disease.
                        Nearby he saw a make shift tent acting as a class room for an all girls school. This in itself
                        was amazing enough but inside McCurry spotted a 12 year old girl with piercing green eyes.
                        Sharbut Gula had never had her photo taken before and at first hid behind her shawl. Her teacher
                        asked her to look at the camera. She did and then got up and continued playing with her friends,
                        forgetting for a while that her family had been wiped out by explosives hurled from the sky.
                    </Text>
                    <Text>
                        Her image was later used for one of the covers for National Geographic the following year and
                        brought huge attention to the crisis developing as a Russian military continued their
                        'expansion' into Afghanistan. This power play and it's repercussions are continuing to
                        disturb and displace as guys with guns continue to speak in the language of power and stupidity.
                    </Text>
                    <Text>
                        Walking down one of Paris's grand avenues today I saw another young displaced girl with a shawl
                        wrapped around her face, quietly begging with a small paper cup. There was no one here taking
                        her photo, making her the new poster girl for poverty. Paris let her be, if not just ignoring
                        her. There was no one admiring her beautiful poor eyes.
                    </Text>
                    <Text>
                        Paris had no need to oppose her poverty or even to celebrate it. The artist who had
                        re-interpreted this image and had pasted it onto a random crumbling wall must have had their
                        intentions I'm sure. I just don't know what they were. Remembering Sharbut and her story and
                        her accidental fame is intention enough for me right now. Thanks Paris.
                    </Text>
                    <TextLink path={'/europa2016'} label={'Back'}/>
                </Stack>
            </Box>
        </Box>
    )
}
