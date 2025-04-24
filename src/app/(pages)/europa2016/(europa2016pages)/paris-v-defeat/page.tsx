"use client"
import {Box, Stack, Text} from '@chakra-ui/react'
import React from "react";
import {PageTitle} from "@/components/PageTitle";
import {TextLink} from "@/components/TextLink";
import {imageSrc} from "@/utils/utils";

export default function ParisVdefeat() {
    const parisVdefeat = imageSrc('Europa2016/paris-v-defeat/oopaphuyfowiibkgahnk')
    return (
        <Box w={'100%'}>
            <PageTitle title={'Paris-V-Defeat'} subTitle={'12/7/2016'}/>
            <img alt="paris-v-defeat" src={parisVdefeat}/>
            <Box w={'100%'} textAlign={'justify'} color={'white'}>
                <Stack>
                    <Text>
                        Karol and I arrived at Charles De Gaul airport as the summer evening light was evaporating.
                        The sky grey with slashes of pink cloud scratched across it's face. The customs control officer
                        who
                        glared at me over my passport had the French tricolours smeared down his left cheek.
                        Oh yes the Euro 2016 cup was on and France was in the final against Portugal.
                        They had beaten Portugal in every match for the last 41 years. Why not again on this night?
                    </Text>
                    <Text>
                        The metro eventually deposited us close to our rental for the week. We dragged our wheelie
                        bags over a bridge to the Isle De St Louis to find our apartment. The first sight was a horde
                        of soccer fans crowding out of a cafe onto the cobbled street and chanting songs to the big
                        screen inside. We peered in and saw the score, 0-0.
                    </Text>
                    <Text>
                        At the front door to our apartment I realised that there had been a breakdown in emails and I
                        hadn't received the correct instructions. A few expensive phone calls later and a bit of hit
                        and miss with pin codes and security boxes and we were finally in. I wasn't going to be
                        defeated on my first night in Paris! (Although for a while I imagined camping on the street
                        until the morning!)
                    </Text>
                    <Text>
                        Turning on the TV we saw the score 1-0 against France. It took me a while to realise that it
                        wasn't half time - it was actually over. The night had erupted into shouts, screams, blaring
                        of horns and the whipping of passing sirens. It's now 2:00 am and still going strong. Wait,
                        was that an explosion or was it a firework? Hard to tell. I can still hear shouting and
                        chanting in the near distance as I bang away at the keyboard. Now police sirens call out
                        like mechanical donkey brays hee-hawing somewhere close by and being answered by more car
                        horns and angry shouts.
                    </Text>
                    <Text>
                        Karol is tossing in bed trying to block the madness outside. We've been crammed in a flight
                        from Singapore since early this morning and thought more about a hot shower than a soccer
                        match. I feel for them though. Parisians don't embrace defeat well at all! I get that.
                    </Text>
                    <TextLink path={'/europa2016'} label={'Back'}/>
                </Stack>
            </Box>
        </Box>
    )
}
