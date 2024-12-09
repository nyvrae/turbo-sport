import React from 'react'
import Image from 'next/image'

import { promises as fs } from 'fs'
import path from 'path'

const GalleryPage = async () => {
    const imageDirectory = path.join(process.cwd(), '/public/sponsors');
    const imageFilenames = await fs.readdir(imageDirectory);
    console.log(imageFilenames);

    return (
        <>
            <Gallery images={imageFilenames} />
        </>
    );
};

const Gallery = ({ images }: { images: Array<string>; }) => {
    return (
        <>
            {images.map((el: string) => (
                <Image
                    width={150}
                    height={150}
                    alt={'Sponsor Logo'}
                    src={`/sponsors/${el}`}
                    key={el}
                />
            ))}
        </>
    );
};

export default GalleryPage;