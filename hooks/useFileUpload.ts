import { useMutation } from "react-query";

export default function useFileUpload() {
    return useMutation((formData) => File.post(formData), {
        onSuccess: (res) => {
            console.log(res);
        },
    });
}

const File = {
    post: async (body) => {
        return fetch(`/api/cloudinary`, {
            method: "POST",
            credentials: "include",
            body,
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.error) {
                    alert(data.error);
                }
            });
    },
};
