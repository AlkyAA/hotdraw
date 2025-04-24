                                            import {Box, Flex, Stack, Text, Image} from "@chakra-ui/react";
import {PageTitle} from "@/components/PageTitle";
import React from "react";

export default function Home() {
    return (
        <Box w={'100%'}>
            <PageTitle title={'Welcome...'} color={'#999'}/>
            <Box w={'100%'} textAlign={'justify'} color={'white'}>
                <Flex direction={{
                    base: 'column',
                    mobile: 'row'
                }}
                      alignItems={{
                          base: 'center'
                      }}
                >
                    <Image
                        src={'/assets/home/alkyParis.png'}
                        w={'148px'}
                        alt={'alky'}
                        margin={{
                            base: '10px 0',
                            mobile: '10px 10px 0 0'
                        }}/>
                    <Stack
                        margin={{
                            base: '0 10px 0 10px',
                            mobile: '10px'
                        }}>
                        <Text>Like a bower bird I like to collect things that trigger a collector&apos;s
                            response: &quot;hey, that would look good at my place..&quot;. These things are sometimes
                            images, random
                            thoughts or memories... just the detritus of that wonder I feel - it can spark my
                            imagination
                            forwards to an imagined future, sometimes backward to a re-evaluated past.
                        </Text>
                        <Text>
                            Students of history have to admit that history can be made, just as the future can be made.
                            I
                            try to be objective but also revel in the prism of my own recollections..
                        </Text>
                    </Stack>
                </Flex>
            </Box>
        </Box>
    )
}
