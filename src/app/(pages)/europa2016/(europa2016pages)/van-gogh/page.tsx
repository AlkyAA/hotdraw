"use client"
import {
    Box, Grid, GridItem, HStack, Image, Spacer, Stack, Text
} from '@chakra-ui/react'
import React from "react";
import {PageTitle} from "@/components/PageTitle";
import {useGallery} from "@/app/helpers/useGallery";
import {TextLink} from "@/components/TextLink";

export default function VanGogh() {
    const gallery = useGallery({tag: 'van-gogh'})
    return (
        <Box w={'100%'}>
            <PageTitle title={'The Last Days of Vincent Van Gogh'} subTitle={'19/07/2016'}/>
            <Box w={'100%'} textAlign={'justify'} color={'white'}>
                <Stack w={'100%'} borderTop={'1px grey solid'} spacing={'10px'}>
                    <Grid templateColumns='repeat(2, 298px)' gap={3} marginTop={'5px'}>
                        <GridItem>
                            <Text fontSize={'17px'} color={'#76cae9'}>
                                Monsieur Vincent Van Gogh, a Dutchman banging around France in the later part of the
                                19th
                                Century, was a man possessed. He fought and struggled with his own private demons and in
                                the
                                process created an amazing body of master pieces that were unique in his time and unique
                                in
                                ours, 100 years later. No artist has given as much or suffered as much. He came to
                                believe
                                that painting would be his salvation and that through continual dedication to his craft
                                he
                                could keep the dogs of madness away.
                            </Text>
                        </GridItem>
                        <GridItem>
                            <Image src={'/assets/europa2016/van-gogh/van-gogh.jpg'} alt={'van-gogh'}/>
                        </GridItem>
                    </Grid>
                    <Text>
                        After a series of encounters with locals and with fellow artists who could not cope with his
                        wild rantings and explosive behaviour, Vincent interned himself into the small Cloister St Paul
                        de Mausole, just a short distance outside Remy de Provence in the South of France. For the year
                        between May 1989 to May 1890, he was trapped there and &apos;treated&apos;. This consisted of 2 hour
                        baths, twice a week and not much else. He was fed extremely poorly - just bread and soup, he was
                        often confined. A few months after leaving this place he was dead. During that year he produced
                        over 150 major paintings, that&apos;s about 1 every few days, and as is often noted, he hardly sold
                        any work while still alive. It&apos;s mind boggling to think of the value we place on that year&apos;s
                        work today - over 12 billion dollars.
                    </Text>
                    <Text>
                        I wandered around the cloister with Karol and we were both touched by it&apos;s calm beauty and
                        palpable sadness. You don&apos;t want to raise your voice or play a lark here. The memory of Vincent
                        hangs in the air. You look at his rooms, his bed, his views from the windows and you see images
                        of his paintings come into focus. I look and see how he rearranged what he saw to make great and
                        powerfully simple compositions. Architectural detail stripped back, rooms shrunk or elongated.
                        Beds magically filling up impossible spaces. Outside I can see the wheat field inside the
                        cloister walls. I can see past it to distant mountains that, in his paintings, he brought closer
                        and closer to that wall so that they seem to dance above it.
                    </Text>
                    <Box borderTop={'grey solid 1px'}/>
                    <HStack>
                        <Image
                            src={'/assets/europa2016/van-gogh/bedroom-arles1.jpg'}
                            alt={'bedroom-arles1'}
                            width={'65%'}
                        />
                        <Spacer/>
                        <Image src={'/assets/europa2016/van-gogh/img-0579.jpg'} alt={'bedroom-arles1'}/>
                    </HStack>
                    <Box borderTop={'grey solid 1px'}/>
                    <HStack>
                        <Image
                            src={'/assets/europa2016/van-gogh/img-0575.jpg'}
                            alt={'bedroom-arles1'}
                        />
                        <Spacer/>
                        <Image
                            width={'65%'}
                            src={'/assets/europa2016/van-gogh/landscape-with-wheat.jpg'}
                            alt={'landscape-with-wheat'}/>
                    </HStack>
                    <Box borderTop={'grey solid 1px'}/>
                    <Text>
                        Ah Vincent mate, what a thing that you did. You impossibly rearranged the way artists have seen
                        the world and how all people can see and feel an image by it&apos;s colour, it&apos;s dynamic
                        movement,
                        it&apos;s texture, it&apos;s naivety, it&apos;s subtle sophisticated perfection. Thanks mate and
                        so sorry that
                        the stupids locked you away and made you suffer even more.
                    </Text>
                    <Box borderTop={'grey solid 1px'}/>
                    <HStack>
                        <Image
                            width={'50%'}
                            src={'/assets/europa2016/van-gogh/img-0600.jpg'}
                            alt={'bedroom-arles1'}
                        />
                        <Spacer/>
                        <Image
                            width={'50%'}
                            src={'/assets/europa2016/van-gogh/van-gogh-079.jpg'}
                            alt={'landscape-with-wheat'}/>
                    </HStack>
                    <Box borderTop={'grey solid 1px'}/>
                    <HStack>
                        <Image
                            width={'50%'}
                            src={'/assets/europa2016/van-gogh/img-0598.jpg'}
                            alt={'bedroom-arles1'}
                        />
                        <Spacer/>
                        <Image
                            width={'50%'}
                            src={'/assets/europa2016/van-gogh/olive-trees.jpg'}
                            alt={'landscape-with-wheat'}/>
                    </HStack>
                    <Box borderTop={'grey solid 1px'}/>
                    {gallery}

                    <TextLink path={'/europa2016'} label={'Back'}/>
                </Stack>
            </Box>
        </Box>
    )
}
