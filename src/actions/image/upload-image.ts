"use server";

import { cloudinary } from "@/lib/cloudinary";
import { UploadApiResponse } from "cloudinary/types";

interface uploadImageType {
  image_file: File | null;
}

export const uploadImage = async (values: uploadImageType) => {
  try {
    const { image_file } = values;

    if (!image_file) {
      throw new Error("No se ha enviado ninguna imagen");
    }

    // Validación del tipo de archivo (puedes ajustarlo según tus necesidades)
    /* const validImageTypes = ["image/jpeg", "image/png", "image/gif"];
    if (!validImageTypes.includes(image_file.type)) {
      throw new Error(
        "Tipo de imagen no soportado. Los tipos soportados son: JPEG, PNG, GIF."
      );
    } */

    const bytes = await image_file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // const filePath = path.join(process.cwd(), "public", "usuarios", image_file.name);
    // await writeFile(filePath, buffer);

    const response: UploadApiResponse = await new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        (error, result) => {
          if (error) {
            reject(error);
          } else if (result) {
            resolve(result);
          }
        }
      );
      uploadStream.end(buffer);
    });

    return response.secure_url;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error al subir la imagen:", error.message);
    }
    return null;
  }
};
