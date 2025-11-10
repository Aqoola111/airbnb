'use client'
import {CldUploadWidget} from "next-cloudinary";
import Image from "next/image";
import {useCallback} from "react";
import {useFormContext} from "react-hook-form";
import {TbPhotoPlus} from "react-icons/tb";

declare global {
	var cloudinary: any
}

const ImageStep = () => {
	const {setValue, watch} = useFormContext()
	const imageSrc = watch("imageSrc")
	
	const handleUpload = useCallback((result: any) => {
		setValue("imageSrc", result.info.secure_url)
	}, [setValue])
	
	return (
		<CldUploadWidget uploadPreset="y45tbpto"
						 onSuccess={handleUpload}
						 options={{
							 maxFiles: 1
						 }}>
			{({open}) => {
				return (
					<div
						className='relative h-full w-full cursor-pointer hover:opacity-70 transition border-dashed border-2 p-20 border-neutral-300 justify-center flex flex-col items-center gap-4 text-neutral-400'
						onClick={() => open?.()}>
						<TbPhotoPlus size={50}/>
						<div className='font-semibold text-lg'>
							Click to upload
						</div>
						{imageSrc && (
							<div className='absolute inset-0 w-full h-full'>
								<Image src={imageSrc} alt={'Upload'} fill style={{objectFit: 'cover'}}/>
							</div>
						)}
					</div>
				);
			}}
		
		</CldUploadWidget>
	)
}
export default ImageStep
