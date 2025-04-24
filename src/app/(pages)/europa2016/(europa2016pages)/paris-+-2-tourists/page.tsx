"use client"
import {Box, Flex, Stack, Text} from '@chakra-ui/react'
import React from "react";
import {PageTitle} from "@/components/PageTitle";
import {TextLink} from "@/components/TextLink";
import {imageSrc} from "@/utils/utils";
import {useGallery, useGallery2} from "@/app/helpers/useGallery";

export default function ParisVdefeat() {
    const paris2Tourists1 = imageSrc('Europa2016/paris-+-2-tourists/dxdmf9jeaokffhhkt8v3')
    const paris2Tourists2 = imageSrc('Europa2016/paris-+-2-tourists/mfn9vjee4lfz9q1jj9r9')
    const sorbonneConcert = imageSrc('Europa2016/paris-+-2-tourists/yakwdnosplmp38ogmdhl')
    const sorbonne = useGallery({tag: 'sorbonne'})
    const marais = useGallery2({tag: 'marais'})
    return (
        <Box w={'100%'}>
            <PageTitle title={'Paris + 2 Tourists'} subTitle={'11/7/2016'}/>
            <Flex maxWidth={'100%'} justifyContent={'space-between'}>
                <img width={'49%'} alt="Paris + 2 Tourists Alky" src={paris2Tourists1}/>
                <img width={'49%'} alt="Paris + 2 Tourists Karol" src={paris2Tourists2}/>
            </Flex>
            <Box w={'100%'} textAlign={'justify'} color={'white'}>
                <Stack>
                    <PageTitle title={'Morning at the Marais'} isSubHeader/>
                    <Text>
                        Karol and I started out the day meeting a bike tour group at a designated spot at the fountain
                        at Place Saint-Michel. Continuing our series of blunders with this booking we got there an hour
                        early. Well at least we turned up. We had actually booked it for yesterday but meant it for
                        today. They called yesterday looking for us and said we could do it today, no problem, because
                        the tourists numbers where right down. Hmm maybe due to the crap this city has endured with
                        terrorist attacks and major flooding over the last year.
                    </Text>
                    <Text>
                        The bike tour is called "Off The Beaten Track" and it takes in 2 really interesting parts of
                        Paris, The Latin Quarter and the Marais. The Latin Quarter was the center of law making and
                        home to the Sorbonne, one of the oldest and most prestigious universities in the world. The
                        name comes from the fact all those educated types spoke latin. The other place, the Marais
                        actually means swamp and it was kindly designated as the place of habitation for the jewish
                        inhabitants.
                    </Text>
                    <Text>
                        Oh well, we had an hour to kill so of course it was coffee time. On the way I took a snap of a
                        poster for a Baroque chamber performance that evening and while killing time we booked in.
                        Luckily my ability to read French is not too shabby and I was able to navigate the lengthy
                        online form...everything is so security conscious these days.
                    </Text>
                    <Text>
                        The bike tour was great and we saw some very cool out of the way places and got told about the
                        literati with tid bits of French history thrown in. Negotiating cycling across busy streets was
                        a little unnerving, especially for Karol but she hung in there despite a few wobbly bits. The
                        Paris etiquette from cars to bikes is so much better than in Oz. Here they try gentle persuasion
                        but always give you right of way. Back home they put the peddle to the meddle and swear at you
                        on the way past.
                    </Text>
                    {marais}
                    <PageTitle title={'Evening at the Sorbonne'} isSubHeader/>
                    <img width={'100%'} alt="Sorbonne Concert" src={sorbonneConcert}/>
                    <Text>
                        Earlier today I saw this poster on a wall while Karol and I where waiting to join our bike tour
                        group for the morning. I got online and booked, going through are rather detailed form. The
                        venue turned out to be at one of the original Sorbonne campuses. The Sorbonne is one of the
                        oldest and most prestigious universities in the world having seen such illuminati as Victor
                        Hugo and Madame Curie.
                    </Text>
                    <Text>
                        We arrived at the gates of a beautiful historic building, got checked off on a list and the
                        bagged checked by some heavy looking security dudes. The whole time in Paris we've seen small
                        groups of military style dudes walking around with automatic rifles in their hands. I'll never
                        forget when 3 of them got on the metro and stood near us. Karol was sitting down and one of the
                        machine guns dangled within inches of her knee. We smiled at each other with wide eyes!
                    </Text>
                    <Text>
                        We were ushered across a beautiful old courtyard, past a sculpture of Victor Hugo and into an
                        oak panelled lecture room set up like a small amphitheatre with tiered seating. Above the stage
                        area was a massive oil painting depicting some mythical Grecian picnic. A small 4 piece group
                        entered and we were treated to ethereal Baroque singing and playing. Here's a link to Group
                        Callisto http://www.ensemblecalisto.com/
                    </Text>
                    {sorbonne}
                    <TextLink path={'/europa2016'} label={'Back'}/>
                </Stack>
            </Box>
        </Box>
    )
}
