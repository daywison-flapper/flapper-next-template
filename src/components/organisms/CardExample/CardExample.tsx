'use client'
import { useTranslations } from "next-intl"
import Image from "next/image"

const CardExample = () => {
    const $t = useTranslations()

    return <div className="max-w-[300px] rounded-md border border-mid-blue overflow-hidden">

        <Image width={300} height={200} src="https://flyflapper.com/static/aircraft-sale-banner-73d597d29656b596c13b6d1bb06ca232.jpg" alt="aircraft image" className="object-cover" />
        <h2 className="text-h4">Aeronave</h2>
        <p>{$t('base.name')}</p>
        <p className="mt-2 p-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam similique quo sequi architecto unde officia, laborum itaque perferendis ipsa autem perspiciatis commodi nisi neque rerum maxime laboriosam aperiam dicta rem!</p>
    </div>
}


export default CardExample