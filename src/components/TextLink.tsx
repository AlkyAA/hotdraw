import Link from "next/link";
import {Button} from "@chakra-ui/react";

type Props = {
    label: string,
    path: string
    target?: string
}
export function TextLink({path, label, target}: Props) {
    return (
        <Link href={path} target={target}>
            <Button
                variant={'unstyled'}
                color={'sitePink'}
                fontSize={'15px'}
                _hover={{
                    color: 'sitePinkHover'
                }}>
                {label}
            </Button>
        </Link>
    )
}
