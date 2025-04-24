"use client"
import {Box, Stack, Text} from '@chakra-ui/react'
import React from "react";
import {PageTitle} from "@/components/PageTitle";
import {TextLink} from "@/components/TextLink";
import {imageSrc} from "@/utils/utils";

export default function ParisVdefeat() {
    const vanAttack = imageSrc('Europa2016/paris-+-terror/xiye4wfzo5djxbcmo9tf')
    return (
        <Box w={'100%'}>
            <PageTitle title={'France + Terror Attack in Nice'} subTitle={'14/7/2016'}/>
            <Box w={'100%'} textAlign={'justify'} color={'white'}>
                <Stack>
                    <Text>
                        Karol and I walked around the River Seine yesterday. It was a public holiday, Bastille Day,
                        and we picnic-ed in a lovely park nearby. Later I did a drawing or 2. It was peaceful and
                        lovely. At times the day was warm and blue, at other times we ran for cover under a bridge
                        laughing during a short shower.
                    </Text>
                    <Text>
                        That night we went to a high vantage point and stood in a large crowd watching the fireworks
                        pour out of the Eiffel Tower. Everything seemed so calm and non-plussed. People out with their
                        lovers and family and friends. Laughing, talking, maybe smoking too much.
                    </Text>
                    <Box
                        as='video'
                        controls
                        src='/assets/europa2016/paris-+-terror/bastilleDayAndTheBird.mp4'
                        objectFit='contain'
                    />
                    <Text>
                        I filmed this busker earlier in the day playing in the park where we had our bench-side lunch.
                        Notice the little sparrow also singing nearby - look closely. This is Paris, this is how life
                        can be, but not just here.
                    </Text>
                    <img alt="terror attack" src={vanAttack}/>
                    <Text>
                        Bastille Day was of course celebrated everywhere in France. In the famous Riviera sea-side town
                        of Nice, a lunatic terrorist drove a truck through crowds of revellers and upwards of 80
                        innocents where murdered and many more injured.
                    </Text>
                    <Text>
                        Karol and I had just returned to our Paris apartment after the day I described above. At about
                        midnight we where alerted by family and friends of the atrocities in Nice. Stunned we lay in
                        bed listening to the sirens outside. (The sirens have been a constant background noise during
                        our week in Paris). How do we process this news. If we had booked our trip exactly a week
                        earlier we too would have been among the many, celebrating Bastille Day in Nice (as it stands
                        we will be there in a week from now).
                    </Text>
                    <Text>
                        Only our imaginations can complete this scenario. The horror of what could have been must be
                        put aside. The magnificent question is how can we make this world unbroken? In my innocent
                        youth I thought that care and love directed to my fellow man and woman would be the salve to
                        repair and cure the sickness of human nature. As crazy as it sounds, I still believe that.
                    </Text>
                    <TextLink path={'/europa2016'} label={'Back'}/>
                </Stack>
            </Box>
        </Box>
    )
}
