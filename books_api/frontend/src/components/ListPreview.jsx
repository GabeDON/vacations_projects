import React from "react";

const ListPreview = ({ list }) => {
    if (!list) {
        return <p className="text-gray-400">Lista inválida.</p>;
    }

    const thumbnail = list.thumbnail || [];

    return (
        <div className="flex flex-row p-4 rounded-lg shadow-md w-full max-w-sm">
            <div className="grid grid-cols-3 gap-2 mb-4">
                {thumbnail.slice(0, 6).map((thumbnail, index) => (
                    <img
                        key={index}
                        src={thumbnail || "./src/assets/placeholder.svg"}
                        alt={`Thumbnail ${index + 1}`}
                        className="w-full h-16 object-cover rounded-md"
                    />
                ))}
                {thumbnail.length > 6 && (
                    <div className="w-full h-16 flex items-center justify-center bg-gray-600 rounded-md text-white text-sm">
                        +{thumbnail.length - 6}
                    </div>
                )}
            </div>
            <div className="ml-4">
                <p className="text-white font-bold">{list.name || "Sem nome"}</p>
                <p className="text-gray-400 text-sm">{list.description || "Sem descrição"}</p> 
            </div>    
        </div>
    );
};

export default ListPreview;