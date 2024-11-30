import Card from "./Card";


const CardGrid = ({ data }) => {
    return (
        <div className="flex flex-wrap gap-[53px] mt-5 justify-center">
            {data.map((item, index) => (
                <Card key={index} item={item} />
            ))}
        </div>
    );
};

export default CardGrid;
