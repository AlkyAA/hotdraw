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

export default function Pompeii() {
    const gallery = useGallery({tag: 'pompeii'})
    return (
        <Box w={'100%'}>
            <PageTitle title={'Pompeii'} subTitle={'27/6/2022'}/>
            <Box w={'100%'} textAlign={'justify'} color={'white'}>
                <Stack>
                    <Text>
                        There&apos;s something appropriate about visiting ancient Pompeii and being baked by searing heat.
                        Although the day was a modest 38 degrees, the actual temperature amongst the hundreds of acres
                        of stone paved ruins was a torturous 45 to 50 degrees. There were times when Karol and I felt
                        dizzy and unstable. Clever Karol brought a long a special cooling scarf that she soaked in water
                        and wore like an Egyptian.
                    </Text>
                    <Text>
                        We arrived in the modern town of Pompeii the day before. Our host was also an accredited
                        Pompeian tour guide which she explained had taken her 3 years of study to achieve. Marina was a
                        vivacious, passionate woman from the cold depths of Siberia who had the ability to enthuse
                        breathlessly on any subject for an indefinite amount of time. We tried to keep up with her as we
                        set off that morning, weaving and ducking through the crowds as she navigated us past long
                        queues with greetings here and there to other guides who were herding up their flocks. Meanwhile
                        she poured out a steady stream of amazing facts about that ancient crazy place.
                    </Text>
                    <Text>
                        She explained that Pompeii was a huge and over crowded city of the Roman world, run by the elite
                        and propped up by ever suffering slaves wrangled in from the colonies. They lived in squalor
                        while their masters lived in houses adorned by frescoes, gardens and ornaments representing the
                        many gods that they had adopted, also from the colonies. Each house had a central roof opening
                        to allow the light in as windows were real dangerous to have.
                    </Text>
                    <Text>
                        There was no sewerage or plumbing system so the refuse was thrown into the street at night. The
                        roads were pretty funky so a clever engineer was able to construct a series of aqueducts to
                        transport water to rich houses and corner public fountains. At night water was allowed to run
                        into the street to wash away the nasties. Large stepping stones were arranged so the good folk
                        could cross the street without browning up their togas. Cleverly they allowed the chariots to
                        navigate both ways as well.
                    </Text>
                    <Text>
                        The public laundries were also fed by this water. There was a special ingredient here as soap
                        had not been invented. Camel urine was imported and mixed in with water and ground soda rocks
                        from the nearby rivers. The large stone laundry vats had slaves stomping on the soaking garments
                        by foot. This was a horrible job and led to massive skin deterioration and early death. It
                        really sucked to be a slave.
                    </Text>
                    <Text>
                        17 years before Vesuvius spilled her molten guts the 20,000 or so inhabits were battered by a
                        savage earthquake that destroyed much of the city. So the population on the day of the eruption
                        was a mere 8,000. The gods work in mysterious ways apparently. What rained down upon Pompeii was
                        pretty much fire and brimstone. Super hot molten ash and pumice annihilated the city under
                        meters of hell, not to mention a nasty cloud of poisonous gas. It wasn&apos;t until the 16th Century
                        that it was rediscovered. Today there is still 20% under ground.
                    </Text>
                    <Text>
                        Here are some pics from our visit and later on that afternoon enjoying parts of the modern
                        Pompeii and it&apos;s refreshments.
                    </Text>
                    {gallery}
                    <TextLink path={'/europa2022/amalfi'} label={'Next Stop Amalfi'}/>
                </Stack>
            </Box>
        </Box>

    )
}

