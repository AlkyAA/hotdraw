import {Cloudinary} from "@cloudinary/url-gen";

type Props = {
    tag: string
    containerId: string
}
const galleryConfig = ({tag, containerId}: Props) => {
    return {
        container: containerId,
        cloudName: "duek5eler",
        mediaAssets: [{ tag }, {tag, mediaType: "video"}],
        sortProps: {
            source: 'contextual',
            id: 'pos',
            direction: 'asc'
        },
        displayProps: {
            spacing: 15
        },
        aspectRatio: "3:4",
        transformation: {
            crop: "fill"
        },
        bgColor: "transparent",
        carouselOffset: 10,
        navigation: "always",
        thumbnailProps: {
            mediaSymbolSize: 42,
            spacing: 20,
            width: 90,
            height: 90,
            navigationFloat: true,
            navigationShape: "square",
            navigationSize: 40,
            navigationColor: "#ffffff",
            selectedStyle: "border",
            selectedBorderPosition: "bottom",
            selectedBorderWidth: 4,
            navigationIconColor: "#000000"
        },
        navigationButtonProps: {
            iconColor: "#c84141",
            color: "#000",
            size: 52,
            navigationPosition: "offset",
            navigationOffset: 12
        },
        themeProps: {
            primary: "#000000",
            active: "#777777"
        },
        secureDistribution: "res-s.cloudinary.com",
        zoomProps: {
            trigger: "hover"
        }
    }
}

export const imageGallery = ({tag, containerId}: Props) => {
    // @ts-ignore
    const hasCloudinary = typeof cloudinary !== 'undefined'
    console.log('hasCloudinary:',hasCloudinary)
    if(hasCloudinary){
        // @ts-ignore
        return cloudinary.galleryWidget(
            galleryConfig({tag, containerId})
        );
    }
    return null;
}

export const imageSrc = (id: string) => {
    const cld = new Cloudinary({cloud: {cloudName: 'duek5eler'}}); // IMG_8879_iw8z5z
    const pic = cld.image(id); // IMG_8911_xytpxm
    return pic.toURL();
}
