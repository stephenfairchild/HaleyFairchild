import React, { useRef, useCallback, useMemo, useState } from "react";
import FileDrop from "components/FileDrop";
import Table from "components/Table";
import useProducts from "hooks/useProducts";
import useFileUpload from "hooks/useFileUpload";

function Inventory() {
    const [editing, setEditing] = useState(false);
    const [productToEdit, setProductToEdit] = useState(null);

    const [products, setProducts] = useState([]);
    const [newProducts, setNewProducts] = useState([]);

    const fileUpload = useFileUpload();

    const productData = useProducts({
        onSuccess: (data) => setProducts(data),
    });

    function updateProduct(productIndex, data) {
        setNewProducts((prevState) => {
            const newState = [];
            prevState.forEach((product, index) => {
                if (index === productIndex) {
                    return { ...product, ...{ ...data } };
                }

                newState.push(product);
            });

            return newState;
        });
    }

    function setEditingContext(context) {
        const {
            cell: {
                row: { id },
            },
        } = context;
        setEditing(true);
        setProductToEdit(id);
    }

    function Action({ context }) {
        return (
            <span
                className="m-1 cursor-pointer"
                onClick={() => setEditingContext(context)}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                    />
                </svg>
            </span>
        );
    }

    const editingColumns = useMemo(
        () => [
            {
                Header: "",
                accessor: "action",
                Cell: ({ cell }) => <Action context={cell} />,
            },
            {
                Header: "Preview",
                accessor: "preview",
                Cell: ({ cell: { value } }) => <img src={value} width={60} />,
            },
            {
                Header: "Title",
                accessor: "title",
            },
        ],
        []
    );

    const columns = useMemo(
        () => [
            {
                Header: "",
                accessor: "action",
                Cell: (data) => <Action context={data} />,
            },
            {
                Header: "Preview",
                accessor: "preview",
                Cell: ({ cell: { value } }) => <img src={value} width={60} />,
            },
            {
                Header: "Title",
                accessor: "title",
            },
            {
                Header: "Body",
                accessor: "body",
            },
            {
                Header: "Original File Name",
                accessor: "originalName",
            },
            {
                Header: "ImageUrl",
                accessor: "imageUrl",
            },
        ],
        []
    );

    async function uploadToCloudinary() {
        newProducts.forEach(({ file }) => {
            const formData = new FormData();
            formData.append("imageFile", file, file.name);
            fileUpload.mutate(formData);
        });
    }

    async function uploadToStore() {
        console.log("testing");
    }

    const onDrop = useCallback((acceptedFiles) => {
        const productsTemp = acceptedFiles.map((file) => {
            return {
                preview: URL.createObjectURL(file),
                originalName: file.name,
                title: "",
                body: "",
                imageUrl: "",
                file,
            };
        });

        setNewProducts((prevState) => {
            return [...prevState, ...productsTemp];
        });
    }, []);

    if (
        productData.status === "loading" ||
        productData.status === "error" ||
        typeof productData.data === "undefined"
    ) {
        return "Loading...";
    }

    return (
        <div className="p-2 mx-auto w-full text-center lg:text-left">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
                <span className="block xl:inline">Art Upload</span>{" "}
            </h1>

            <hr />
            <div className="mt-2 bg-gray-200 p-2 h-16 border-dashed border-2 border-black">
                <FileDrop onDrop={onDrop} />
            </div>
            <div className="mt-2">
                <button
                    onClick={uploadToCloudinary}
                    type="button"
                    className="items-center px-4 py-2 border border-transparent shadow-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
                >
                    {fileUpload.isLoading
                        ? "Uploading"
                        : "Upload Photos To Cloudinary"}
                </button>
                <button
                    onClick={uploadToStore}
                    type="button"
                    className="items-center ml-2 px-4 py-2 border border-transparent shadow-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
                >
                    Upload Products To Store
                </button>
            </div>

            <div className="mt-2">
                {products.length + newProducts.length > 0 && !editing && (
                    <Table
                        data={[...newProducts, ...products]}
                        columns={columns}
                    />
                )}
                {products.length + newProducts.length > 0 && editing && (
                    <>
                        <div className="flex">
                            <div className="flex w-1/3">
                                <Table
                                    data={[...newProducts, ...products]}
                                    columns={editingColumns}
                                />
                            </div>
                            <div className="flex w-2/3">{productToEdit}</div>
                        </div>
                    </>
                )}
                {products.length === 0 && <p>No products found</p>}
            </div>
        </div>
    );
}

export default Inventory;
