import {Box, HStack, Stack, Text, Image} from "@chakra-ui/react";
import {PageTitle} from "@/components/PageTitle";

export default function Home() {
  return (
      <Box w={'100%'}>
        <PageTitle title={'Welcome...'} color={'#999'} />
        <Box w={'100%'} textAlign={'justify'} color={'white'}>
          <HStack alignItems={'top'}>
            <Image src={'assets/home/alkyParis.png'} w={'148px'} alt={'alky'}/>
            <Stack>
              <Text>Like a bower bird I like to collect things that trigger a collector&apos;s
                response: &quot;hey, that would look good at my place..&quot;. These things are sometimes images, random
                thoughts or memories... just the detritus of that wonder I feel - it can spark my imagination
                forwards to an imagined future, sometimes backward to a re-evaluated past.
              </Text>
              <Text>
                Students of history have to admit that history can be made, just as the future can be made. I
                try to be objective but also revel in the prism of my own recollections..
              </Text>
            </Stack>
          </HStack>
        </Box>
      </Box>
  )
}
