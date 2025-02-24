export const CategoryCard = (props) => {
    const category = props.category;

    return(
         <div className="relative flex justify-center">
        <img src={category.image} alt={category.category} />
        <div className="absolute z-10 bg-gray-300 py-4 px-14 -bottom-5 text-center">
            {category.name}
        </div>
    </div>
    )
}