import {
    Box, Stack,Text
} from '@chakra-ui/react'
import React from "react";
import {PageTitle} from "@/components/PageTitle";
import {TextLink} from "@/components/TextLink";

export default function Confest() {
    return (
        <Box w={'100%'}>
            <PageTitle title={'Victorian road trip'} color={'#8273da'}/>
            <Box w={'100%'} textAlign={'justify'} color={'white'}>
                <Stack>
                    <Text>My son Remus and I took a road trip holiday from Thursday 18th April 2019 to
                        26th April 2019
                    </Text>
                    <PageTitle title={'Getting to Confest'} color={'#8273da'} isSubHeader={true}/>

                    <PageTitle title={'Confest'} color={'#8273da'} isSubHeader={true}/>
                    <Text>
                        Sunday 21st Feb 2019
                    </Text>
                    <Text>
                        2nd day at Confest
                    </Text>
                    <Text>
                        It&apos;s 11:00pm ish and I&apos;m slumbering in my tent. I&apos;ve just come in from walking around the
                        village stalls buying a sarong, looking at trinkets from the Far East as well as tasting Chai
                        and Samosa. Here in the quiet night air below tall gums and a cloudy moonlight I can hear the
                        soft distant drumming of the new tribe; their voices and laughter and this sometimes punctuated
                        by a crazed joyful chant or scream.
                    </Text>
                    <Text>
                        Remy and I spent the night sitting in a crowded tent watching open mike performances. The
                        spirit here is of open vulnerability, of acceptance, and so in each performance there was this
                        flavour, this shared pain and joy.
                    </Text>
                    <TextLink path={'confest/confest-notes'} label={'...read more'} />
                    <PageTitle title={'Visiting Marius at Woodend'} color={'#8273da'} isSubHeader/>
                </Stack>
            </Box>
        </Box>

    )
}
