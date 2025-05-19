export default async function Product({ params }: { params: { id: string } }) {
    const { id } = await params;
    return (
        
        <div>
            <h1>Product ID: {id}</h1>
            <p>Product details go here.</p>
        </div>
    );
}